/**
 * Optional image optimizer using sharp.
 *
 * Usage:
 * 1. Install sharp locally: `npm install sharp`
 * 2. Run: `node scripts/optimize-images.js`
 *
 * This script reads from the repo `images/` folder and writes resized images
 * into `public/optimized/` with widths: 480, 768, 1200. It preserves filenames
 * using suffixes like -480.jpg. Keep in mind `sharp` must be installed.
 */

const fs = require('fs')
const path = require('path')

async function run() {
  const sharp = require('sharp')
  const srcDir = path.resolve(__dirname, '..', 'images')
  const outDir = path.resolve(__dirname, '..', 'public', 'optimized')
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

  const files = fs.readdirSync(srcDir).filter(f => /\.(jpe?g|png)$/i.test(f))
  const sizes = [480, 768, 1200]

  for (const f of files) {
    const inPath = path.join(srcDir, f)
    const ext = path.extname(f)
    const name = path.basename(f, ext)
    for (const w of sizes) {
      const outName = `${name}-${w}${ext}`
      const outPath = path.join(outDir, outName)
      try {
        await sharp(inPath).resize({ width: w }).jpeg({ quality: 80 }).toFile(outPath)
        console.log('wrote', outPath)
      } catch (err) {
        console.error('failed', inPath, err.message)
      }
    }
  }
}

run().catch(err => {
  console.error(err)
  process.exit(1)
})
