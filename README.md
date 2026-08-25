# Birthday Surprise — React + Vite

A lightweight interactive birthday surprise website built with React, Vite, Framer Motion and react-confetti.

Quick start:

```bash
npm install
npm run dev
```

Place an optional `music.mp3` in `public/assets/music.mp3` or `assets/music.mp3`.

Optional: optimize images locally

1. Install `sharp` (native module):

```bash
npm install --save-dev sharp
```

2. Run the optimizer:

```bash
node scripts/optimize-images.js
```

This writes resized images to `public/optimized/` which you can reference via `/public/optimized/<name>-480.jpg` etc.
