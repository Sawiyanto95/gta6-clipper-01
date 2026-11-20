# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Sawiyanto95/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Sawiyanto95/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

Three vertical GTA VI Shorts cut from Windah Basudara's gameplay livestream #2 ("Jason kangen dan pengen ketemu Lucia", 19 November 2026), made for the make.fun bounty "Clip GTA 6 for the most YouTube views". Source stream: https://www.youtube.com/live/QSPPyA1736U. Windah himself invites people to clip his streams, so this footage is creator-approved for clippers. clip1 and clip2 are 45 seconds, clip3 is 55 seconds; all are 720x1280, with the GTA 6 moment first and make.fun's pitch on screen at the end. Layout is letterboxed, like Windah's own Shorts: the 16:9 stream footage sits centered in the vertical frame, top and bottom filled with a blurred, darkened copy of the same footage, so Windah's facecam (bottom-right of the stream) stays fully visible. The hook text sits in the top bar, the pitch text in the bottom bar.

- **clip1.mp4 — Jason dansa bareng Lucia (emotional).** From the stream's bar scene: after finally meeting Lucia, Jason dances with her while the live band plays. Hook text: "JASON DANSA / BARENG LUCIA!"
- **clip2.mp4 — Seaplane GTA VI (action).** Jason takes the seaplane off the river and throws it into barrel rolls over Leonida. Hook text: "SEAPLANE GTA VI!"
- **clip3.mp4 — Momen lucu Windah di bar (funny moments).** Three bits from the stream's bar scene, each labelled MOMEN 1/2/3 on screen: (1) the "cohabitation test" chat that makes Windah grin (stream 65:50-66:10); (2) Lucia's line "Girl taught me how to shoplift", which cracks Windah up laughing (stream 73:20-73:40); (3) Windah's pool trash-talk, "I got next! Señorita, you and me, baby" (stream 80:10-80:25). Hook text: "MOMEN LUCU / WINDAH GTA 6!"

Each clip ends with the same on-screen pitch: "Bikin klip kayak gini pake AI / dapet duit di make.fun" with the bounty page make.fun/bounty/gta6-clipper-01. The audio is Windah's own Indonesian commentary from the stream, kept as it was.

Upload all three as public YouTube Shorts, compare their views, and enter the one with more views: VIDEO.json at this repository's root holds its address as {"url": "https://www.youtube.com/shorts/<id>"}. Each Short's description must carry, word for word, "Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01", the play code makefun-pueblo-mask-bench, and the hashtags #windahbasudara #windah.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

main.ts copies VIDEO.json from this repository to /output, which is all the program has to do for the gate — and it also copies clip1.mp4, clip2.mp4 and clip3.mp4 into /output, so the graded run carries the exact rendered files that were uploaded to YouTube.

---

<sub>Entered on [make.fun](https://make.fun/?ref=bc76ffwb&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
