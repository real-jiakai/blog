// Fetches every remote image referenced in content/ that is missing from
// data/image_dimensions.json, reads its pixel size from the image header,
// and appends it to the data file (existing entries and their order are
// preserved). Run after writing a post that adds new images, then commit
// the updated JSON. check-image-dimensions.mjs (CI) fails the build when
// an entry is missing.
import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const dataFile = join(root, 'data', 'image_dimensions.json');

async function markdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await markdownFiles(path));
    else if (entry.isFile() && entry.name.endsWith('.md')) files.push(path);
  }
  return files;
}

function parsePng(buffer) {
  if (buffer.length < 24 || !buffer.subarray(0, 8).equals(Buffer.from('89504e470d0a1a0a', 'hex'))) return null;
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

function parseGif(buffer) {
  if (buffer.length < 10 || buffer.toString('latin1', 0, 4) !== 'GIF8') return null;
  return { width: buffer.readUInt16LE(6), height: buffer.readUInt16LE(8) };
}

function parseJpeg(buffer) {
  if (buffer.length < 4 || buffer[0] !== 0xff || buffer[1] !== 0xd8) return null;
  let offset = 2;
  while (offset + 9 < buffer.length) {
    if (buffer[offset] !== 0xff) { offset += 1; continue; }
    const marker = buffer[offset + 1];
    if (marker === 0xff) { offset += 1; continue; }
    // standalone markers without a length payload
    if (marker === 0xd8 || (marker >= 0xd0 && marker <= 0xd9)) { offset += 2; continue; }
    const length = buffer.readUInt16BE(offset + 2);
    const isSof = marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker);
    if (isSof) {
      return { width: buffer.readUInt16BE(offset + 7), height: buffer.readUInt16BE(offset + 5) };
    }
    offset += 2 + length;
  }
  return null;
}

function parseWebp(buffer) {
  if (buffer.length < 30 || buffer.toString('latin1', 0, 4) !== 'RIFF' || buffer.toString('latin1', 8, 12) !== 'WEBP') return null;
  const chunk = buffer.toString('latin1', 12, 16);
  if (chunk === 'VP8 ') {
    // lossy: 3-byte frame tag, 3-byte start code 9d 01 2a, then 14-bit dims
    if (buffer[23] !== 0x9d || buffer[24] !== 0x01 || buffer[25] !== 0x2a) return null;
    return { width: buffer.readUInt16LE(26) & 0x3fff, height: buffer.readUInt16LE(28) & 0x3fff };
  }
  if (chunk === 'VP8L') {
    const bits = buffer.readUInt32LE(21);
    return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
  }
  if (chunk === 'VP8X') {
    return {
      width: (buffer.readUIntLE(24, 3)) + 1,
      height: (buffer.readUIntLE(27, 3)) + 1,
    };
  }
  return null;
}

function imageDimensions(buffer) {
  return parsePng(buffer) ?? parseGif(buffer) ?? parseWebp(buffer) ?? parseJpeg(buffer);
}

const imagePattern = /!\[[^\]]*\]\((https?:\/\/[^\s)]+)/g;
const referenced = new Set();
for (const file of await markdownFiles(join(root, 'content'))) {
  const source = await readFile(file, 'utf8');
  for (const match of source.matchAll(imagePattern)) referenced.add(match[1]);
}

const dimensions = JSON.parse(await readFile(dataFile, 'utf8'));
const isValid = (value) => value && Number.isInteger(value.width) && value.width > 0 &&
  Number.isInteger(value.height) && value.height > 0;
const missing = [...referenced].filter((url) => !isValid(dimensions[url]));
const unreferenced = Object.keys(dimensions).filter((url) => !referenced.has(url));

if (!missing.length) {
  console.log(`All ${referenced.size} referenced images already have dimensions.`);
} else {
  console.log(`Fetching ${missing.length} image(s)…`);
  const failures = [];
  for (const url of missing) {
    try {
      const response = await fetch(url, {
        signal: AbortSignal.timeout(30000),
        headers: { 'user-agent': 'blog-image-dimensions/1.0 (+https://blog.gujiakai.top)' },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const buffer = Buffer.from(await response.arrayBuffer());
      const size = imageDimensions(buffer);
      if (!size) throw new Error('unrecognized image format');
      dimensions[url] = size;
      console.log(`  ${url} → ${size.width}x${size.height}`);
    } catch (error) {
      failures.push(url);
      console.error(`  FAILED ${url}: ${error.message}`);
    }
  }
  await writeFile(dataFile, JSON.stringify(dimensions, null, 2) + '\n');
  console.log(`Wrote ${dataFile} (${Object.keys(dimensions).length} entries).`);
  if (failures.length) {
    console.error(`${failures.length} image(s) could not be measured; fix them before CI runs.`);
    process.exitCode = 1;
  }
}

if (unreferenced.length) {
  console.log(`Note: ${unreferenced.length} stored entr${unreferenced.length === 1 ? 'y is' : 'ies are'} no longer referenced by any post (kept).`);
}
