const sharp = require('sharp')
const path  = require('path')
const fs    = require('fs')

const assetsDir = path.join(__dirname, '../public/assets')

const images = [
  { file: 'hair-maxx-cover.png',   width: 750 },
  { file: 'height-maxx-cover.png', width: 750 },
  { file: 'beard-maxx-cover.png',  width: 750 },
  { file: 'skin-maxx-cover.png',   width: 750 },
  { file: 'bundle-covers.png',     width: 750 },
];

(async () => {
  for (const { file, width } of images) {
    const input  = path.join(assetsDir, file)
    const output = path.join(assetsDir, file.replace('.png', '.webp'))
    const before = fs.statSync(input).size
    const info   = await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(output)
    console.log(
      `✓  ${file.padEnd(26)} ${(before / 1024).toFixed(0).padStart(5)} KB  →  ${file.replace('.png', '.webp').padEnd(27)} ${(info.size / 1024).toFixed(0).padStart(4)} KB`
    )
  }
  console.log('\nDone. Update imports from .png → .webp')
})()
