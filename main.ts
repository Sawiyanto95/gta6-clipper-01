// gta6-clipper-01 entry: three Shorts cut from Windah Basudara's GTA VI
// gameplay livestream #2.
//
// The entry itself is the video on YouTube: the house reads its views
// through the YouTube Data API and ranks by them. This program's only
// scored job is to hand the gate VIDEO.json, the video's address, copied
// from the repository root into /output. It also copies the three rendered
// clips the agent cut in its recorded session, clip1.mp4, clip2.mp4 and
// clip3.mp4, into /output, so the graded run carries the exact files the
// uploaded to YouTube. The house scores the video, never these files.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and
// MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The files this entry hands the grader: the video's address first,
// then the three clips exactly as rendered in the recorded session.
const FILES = ['VIDEO.json', 'clip1.mp4', 'clip2.mp4', 'clip3.mp4'];

// Never remove /output itself: the grader mounts it as a volume, and
// removing it fails. Clear only what is inside it, so a second run
// starts from the same empty directory as the first.
mkdirSync(OUTPUT_DIR, { recursive: true });
for (const name of readdirSync(OUTPUT_DIR)) {
  rmSync(join(OUTPUT_DIR, name), { recursive: true, force: true });
}

for (const name of FILES) {
  try {
    copyFileSync(join(BOT_DIR, name), join(OUTPUT_DIR, name));
  } catch (err) {
    console.error(`could not copy ${name} from ${BOT_DIR}: ${(err as Error).message}`);
    process.exit(1);
  }
}

console.log(`copied ${FILES.join(', ')} to ${OUTPUT_DIR}`);
