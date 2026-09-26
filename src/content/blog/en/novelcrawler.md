---
title: "NovelCrawler: Trade-offs in a Multi-Source Aggregator"
description: "Filed by the Federal Institute of Technical Standards: an engineering record of a multi-source novel and comic downloader — the source framework, fuzzy search, large-PDF handling and four routes for phone access. Source and releases hosted on GitHub."
pubDate: 2026-09-07
tags: ['python', 'crawler', 'aggregation', 'engineering']
category: techlog
docNo: 'FT-0001-0014'
issuedBy: 'Federal Institute of Technical Standards'
classification: 'Internal circulation'
stellarDate: 'Stellar Year 1, Ninth Month, Seventh Day'
---

> This is an engineering record, not a formal federal instrument. The tool is for personal study and technical research only; the material it reaches comes from the network, and the program merely makes the requests.

This started as a downloader good enough for one person and grew into an aggregation framework. It is called **NovelCrawler**, the second asset in the federation property register, currently at V0.19.2.

## One site is not enough

The earliest version supported a single book site. Using it made clear that the problem is not scraping but **source lifespan**: any single site may redesign, rate-limit, or simply shut down. Binding the scraping logic to one site means staking availability on someone else's operations.

So the whole architecture is built around one idea: **sites are replaceable**. Ten novel sources and seven comic sources ship built in, and community source repositories can be subscribed to — after which hundreds of rules pull down in one action and get validated automatically. Rules are data, not code; when a site changes, change the rule.

## Search: do not make me recall the exact title

Chinese book titles often differ between the spoken short form and the full official one. The search layer therefore does two extra things: pinyin matching, and a mapping table covering more than sixty common Chinese/English title pairs. Typing the short form still lands on the right book. It is not a dramatic feature, but it removes a lot of everyday friction.

## Large PDFs are a real problem

A comic-collection PDF easily runs to hundreds of megabytes, and handing that straight to pdf.js on the front end ends in `Array buffer allocation failed` — the library tries to read the whole file into memory.

The fix has three layers:

- **At generation time**, three image-compression tiers — original, hq and eco — cap the size at the source;
- **For existing files**, splitting by chapter is supported, producing output isomorphic to per-chapter downloads so the reader's table of contents can jump chapter by chapter, with the original file kept intact;
- **At reading time**, pdf.js switches to segmented Range loading, with a direct image mode retained as a parallel route.

On top of that sits a continuous-scroll mode: whole chapters laid out as a vertical strip, lazily rendered to keep memory in check, on by default and switchable back to single pages.

## Reading on a phone

Browsing the shelf from a phone in the dormitory is a genuine need, but the viable route depends on the network at that moment, and no single method covers every case. So four coexist:

- Direct LAN connection, fastest when on the same router;
- Hotspot relay, where the phone shares its connection and the computer joins — the first choice on a campus network;
- Public tunnel, crossing networks but requiring a relay;
- Direct WebRTC, one QR scan, signalling returned automatically through a public MQTT broker, working on any network.

All four are listed side by side in the interface. Which one to use is the user's call given the local situation, and the program does not guess on their behalf.

## Data stays local

Shelves, reading progress, notes and subscriptions are all stored locally, with no cloud dependency and no account system. This is deliberate: the value of a tool like this lies in holding your own data, and putting it on someone else's server only adds one more service that can disappear.

## Download

The build artifact is hosted on GitHub. The address points at the latest Release, which GitHub redirects to the current version:

```text
https://github.com/Origin-XiChen/NovelCrawler/releases/latest/download/NovelCrawler.exe
```

A usage note ships alongside it:

```text
https://github.com/Origin-XiChen/NovelCrawler/releases/latest/download/usage.txt
```

The program is about 149 MB and install-free, requiring Windows 10/11 with the WebView2 runtime; alternatively, clone the source, run `pip install -r requirements.txt` and then `start.bat`.

## Boundaries

One thing must be stated plainly: **this tool provides no content of its own; it only calls publicly exposed site interfaces.** The material comes from the network, and the program neither stores nor redistributes it. It is released under GPL-3.0 and positioned for personal study and technical research — not for piracy. That boundary is set out in full in the repository's `DISCLAIMER.md`.

## Wrapping up

The most time-consuming part of this project was not scraping but **deciding what not to do**: no accounts, no cloud sync, no site logic baked into code. The current version is V0.19.2.
