import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));

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

const imagePattern = /!\[[^\]]*\]\((https?:\/\/[^\s)]+)/g;
const referenced = new Set();
for (const file of await markdownFiles(join(root, 'content'))) {
  const source = await readFile(file, 'utf8');
  for (const match of source.matchAll(imagePattern)) referenced.add(match[1]);
}

const dimensions = JSON.parse(await readFile(join(root, 'data', 'image_dimensions.json'), 'utf8'));
const missing = [...referenced].filter((url) => {
  const value = dimensions[url];
  return !value || !Number.isInteger(value.width) || value.width < 1 ||
    !Number.isInteger(value.height) || value.height < 1;
});

if (missing.length) {
  console.error(`Missing valid dimensions for ${missing.length} remote image(s):`);
  for (const url of missing) console.error(`- ${url}`);
  process.exitCode = 1;
} else {
  console.log(`Validated dimensions for ${referenced.size} unique remote images.`);
}
