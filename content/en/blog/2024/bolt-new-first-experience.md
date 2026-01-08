---
title: "bolt.new First Experience"
date: 2024-10-10T16:11:35+08:00
tags: ["ai", "frontend"]
slug: "bolt-new-first-experience"
summary: Introducing my first experience using bolt.new to complete a simple project.
showtoc: false
---

In the morning I reviewed some Traefik knowledge. At noon when preparing to take notes, I remembered the "Tree Directory Visualization Generator" in developer tools—using this tool to show project structure is really intuitive.

But I forgot the website link again, so I tried bolt.new. After multiple conversations, I created a similar product: [Tree Toc Generator](https://tree.gujiakai.me)—enter markdown list format in the left input box, and the right side displays the generated tree structure in real-time.

![Tree directory generator](https://cdn.sa.net/2024/10/10/XHqfR9t6slVKWTY.webp)

What makes bolt.new and Claude Artifact different from other tools—see image:

![bolt.new's uniqueness](https://cdn.sa.net/2024/10/10/VcHLDasKqxRjoYe.webp)

Claude Artifact currently can only render simple HTML, CSS, JS, SVG, etc., but doesn't support frontend packages, code editing, etc.—bolt.new fills this gap. For specific differences, see Perplexity's summary:

![Perplexity's introduction to Claude Artifact vs bolt.new differences](https://cdn.sa.net/2024/10/10/5hAw2UQ3uxy4sf6.webp)

Actually the tree directory generator project isn't hard—just describe your needs in detail, and bolt.new can realize your imagination.

![Describe your needs in detail, bolt.new can realize your imagination](https://cdn.sa.net/2024/10/10/2adtDYlSMFJWIpb.webp)

Completing this project used 100k+ tokens. Daily free quota is 150k tokens.

![Project token usage](https://cdn.sa.net/2024/10/10/br5JK7zPIL1lk8n.webp)

The Tree Directory Visualization Generator I forgot: [https://devtool.tech/tree](https://devtool.tech/tree), developed by Shanyue.

![Project inspiration—Tree Directory Visualization Generator](https://cdn.sa.net/2024/10/10/TaMOjkWphvCGr8V.webp)

bolt.new combines the current LLM code king—Claude 3.5 Sonnet—with PaaS platform Netlify. The experience is really nice.

~~During first use, I found bolt.new deployment still has room for improvement. After first project deployment, I claimed the website. Later found a bug, continued conversation, fixed the bug, deployed again, but found it didn't update the originally claimed project—had to re-claim. This isn't smooth. I estimate Stackblitz will work with Netlify to solve this and further improve user deployment experience.~~

After fixing bugs and redeploying, bolt.new automatically adds the new deployment to Netlify's sites. But it's not redeployment based on the original project—I think this can be optimized, since within one chat, it should be multiple iterative deployments of one project.

![Multiple deployments aren't multiple deployments of one project, but creating new projects in Netlify](https://cdn.sa.net/2024/10/10/7vJ6cGzWokQIxga.webp)

For introduction to Stackblitz company and bolt.new, see Perplexity's summary:

![Perplexity's introduction to Stackblitz and bolt.new](https://cdn.sa.net/2024/10/10/njYbpPMIqkAC4Js.webp)

While exploring bolt.new, I saw Stackblitz CEO Eric Simons' demo at ViteConf 2024—his open-source spirit is admirable. He open-sourced bolt.new project's core components.

Open-source address: https://github.com/stackblitz/bolt.new

![Stackblitz CEO Eric Simons' open-source spirit](https://cdn.sa.net/2024/10/10/DCuw4WrPnaoyGJd.webp)

Current AI code tools mainly rely on LLMs' powerful capabilities. These cutting-edge models are the foundation—tools just combine these models to bring users smooth experiences. If Anthropic someday optimizes Artifact to be more complete with everything bolt.new has, these tools' fate is death.

I remember after OpenAI's spring release, Duolingo's stock dropped—because GPT-4o advanced voice is a great language learning companion.

bolt.new can be seen as innovation built on Claude 3.5 Sonnet, so no need to worry about being swallowed by Anthropic. After all, Anthropic can't implement a smooth frontend development workflow short-term—let professional companies do professional things, that's fine.

![LLM-related comments](https://cdn.sa.net/2024/10/10/O9gH4YvLSNMrZuV.webp)

It's clear current AI tools are mainly impressive in frontend. For backend CRUD, AI tools seem comparatively weak. I remember watching an "Back to Axton" channel video—[You're overthinking: Can non-programmers develop apps with Cursor? 15 Practical Pitfall Guides](https://youtu.be/dBuNKEgvuuU?si=H-t_2jn9C9rsHtaW)—which mentioned Cursor's challenges in backend and complex application development. Of course, this is also a mountain bolt.new currently can't climb.

Sometimes I can't help but marvel—GPT and Claude mainly rely on Transformer architecture's stacked decoders, predicting the most likely next word from context, yet can show such "intelligence." Despite occasional hallucinations or unsatisfactory answers, most of the time their performance really makes you feel they have some kind of intelligence.

Recent Nobel Prizes are starting to involve AI+ fields, making me feel AI's profound impact. Sometimes when writing, I also use AI tools to polish expressions. In this AI wave, everyone should use AI tools more.

Although I think these tools rely on vector calculations to predict most likely word combinations—not true human intelligence—their actual performance often makes me doubt whether they truly possess some form of intelligence.

via: https://x.com/stackblitz/status/1841873251313844631
