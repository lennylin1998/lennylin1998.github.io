---
title: 'Doodle Jump on Hack'
description: 'Ported an arcade favorite into a Hack emulated computer, with window rendering.'
type: 'project'
role: 'Team Lead/Contributor'
pubDate: '2023-12-12'
startDate: '2023-09-10'
endDate: '2023-12-01'
githubRepo: 'https://github.com/lennylin1998/Nand2Tetris-DoodleJump'
# liveUrl: 'https://jump.lenny.dev'
heroImage: '/doodle.jpg'
tags:
  - 'Hack'
  - 'Computer Architecture'
  - 'HTML'
  - 'OOP'
---

<!-- > **Type:** Project  
> **Role:** Frontend Engineer  
> **Timeline:** Sep 2023 — Dec 2023  
> **Repository:** [github.com/lennylin1998/doodle-jump](https://github.com/lennylin1998/doodle-jump)
> **Live URL:** [jump.lenny.dev](https://jump.lenny.dev)  
> **Tags:** `javascript`, `canvas`, `performance` -->

The Doodle Jump project came from an introductory computer architecture course, where we built a complete game on top of the Hack platform—working directly with registers, the ALU, CPU control, and raw screen and keyboard I/O. A big part of the challenge was getting comfortable with Hack’s low-level syntax while thinking carefully about how software behaves when hardware abstractions disappear. The screen, for example, has no layers and no colors—each pixel is either on or off—which made object rendering and collision detection far more involved than in a modern environment. Drawing sprites line by line was both slow and error-prone, especially as multiple objects started interacting. After a few false starts, I rethought the approach and converted game assets into bitmaps that could be written directly to memory, erasing and redrawing entire objects each frame. Leaning on the platform’s built-in bitmap operations turned out to be significantly faster and simpler, and it reshaped how I reasoned about performance under tight constraints. The project gave me an appreciation for how much modern tooling hides—and how satisfying it is to make something interactive when nothing is given for free.
