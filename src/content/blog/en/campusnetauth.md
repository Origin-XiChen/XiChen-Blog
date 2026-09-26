---
title: "CampusNetAuth: Handing the Daily Login to a Background Daemon"
description: "Filed by the Federal Institute of Technical Standards: the design and implementation of a seamless campus-network authentication tool — portal protocol reverse-engineering, sub-second response, DPAPI credential protection and single-file delivery. Source and releases hosted on GitHub."
pubDate: 2026-09-25
tags: ['python', 'windows', 'networking', 'engineering']
category: techlog
docNo: 'FT-0001-0013'
issuedBy: 'Federal Institute of Technical Standards'
classification: 'Internal circulation'
stellarDate: 'Stellar Year 1, Ninth Month, Twenty-Fifth Day'
---

> This is an engineering record, not a formal federal instrument. Every protocol detail below comes from testing against my own campus portal, and is intended for personal device automation only.

The first thing I do on arriving at the lab is open a browser, type a username, and watch the authentication page spin. After a few hundred repetitions I decided to hand that job to a background process. The result is **CampusNetAuth**, the first asset in the federation property register.

## The actual problem

The authentication flow itself is not complicated. The difficulty is **timing**. A campus session expires after a number of hours, and it tends to expire precisely while you are attached to a remote host or pushing code. That turned into three requirements:

- Log in the moment the link comes up, rather than waiting for me to notice the outage;
- Detect a false success, so the process never believes it is online when it is not;
- Keep the password out of the config file in plaintext.

## The protocol, read out of the portal's own script

The portal is a stock ePortal implementation, and login goes through a fixed form endpoint:

```text
POST /eportal/InterFace.do?method=login
```

The interesting part is how the password field is built. Packet capture only shows an opaque ciphertext, but the portal ships its `security.js` in the clear. Extracting the encryption function and feeding it a few crafted inputs reduced the algorithm to three statements:

1. Concatenate the plaintext into `<password> + ">" + <MAC address>`;
2. Reverse the whole string, then run textbook RSA over 16-bit little-endian blocks with zero-length padding;
3. Pass every field through `encodeURIComponent` twice.

The modulus and exponent are not constants — they are read dynamically from `publicKeyExponent` and `publicKeyModulus` on the page, so the public key cannot be hard-coded.

To confirm I had it right, I ran the portal's official `security.js` under Node and compared seven test cases byte for byte. All seven matched. That step cost little time and removed every subsequent guess about "why does the login fail".

## Sub-second response: events, not polling

The first version polled network state every 30 seconds, which meant an average fifteen-second recovery delay after an outage — and the poll itself drew power. Replacing it with a subscription to the system address-change notification `NotifyAddrChange` means the callback fires the instant the adapter state changes, and link-up to authenticated usually completes in under a second. **Swapping polling for events was the best-value change in the whole project.**

## Self-healing: false successes and stale sessions

The portal occasionally reports success while no session was actually established. The program re-verifies five seconds after a success response; if it finds itself not truly online, it calls the logout endpoint to clear the stale session and retries once. The process's internal state therefore cannot silently drift away from the portal's real state.

## Credential safety

The password is not written into `config.json`. After the first entry it is sealed with the Windows DPAPI call `CryptProtectData` into `cred.bin`, with the key bound to the current user account — another account that obtains the file still cannot open it.

## Delivery shape

Packaging uses PyInstaller's one-file mode, so the artifact is a single 18 MB `CampusNetAuth.exe`: install-free and green. To uninstall, delete the folder.

One genuine pitfall is worth recording here: **deleting the folder does not remove the startup entry in the registry.** On the next boot Windows follows the Run key, fails to find the script, and blocks the login with a modal error box. The 0.5.1 fix appends the `//B` flag to the startup command so a missing script exits silently, and checks that entry when the interface launches — if the folder has moved, the path is automatically re-pointed.

The interface itself is drawn on WebView2 with a frosted-glass treatment, and pulls in no third-party UI dependency.

## Download

The build artifact is hosted on GitHub. The address points at the latest Release, which GitHub redirects to the current version on request, so nothing needs changing after a new release:

```text
https://github.com/Origin-XiChen/campus-net-auth/releases/latest/download/CampusNetAuth.exe
```

The project is released under GPL-3.0 and positioned for personal study and technical research.

## Wrapping up

The project is not large, but it finishes three things that are easy to skip: read the protocol correctly, make the response event-driven, and hand the credential to the operating system. The current version is V0.5.1; six releases have been published since V0.1, all of them on record.
