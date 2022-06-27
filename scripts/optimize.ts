import sharp from 'sharp'
import glob from 'glob'
import fs from 'fs-extra'
import path from 'path'

const OUTPUT_DIR = path.resolve(__dirname, '..', 'src', 'images', 'optimized')

const matches = glob.sync(`${__dirname}/../src/images/**/*.{png,jpg,jpeg}`, {
  ignore: [`${OUTPUT_DIR}/**/*.{png,jpg,jpeg}`],
})

const MAX_WIDTH = 1800
const QUALITY = 70

if (!fs.pathExistsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR)
}

Promise.all(
  matches.map(async (match) => {
    const stream = sharp(match)
    const info = await stream.metadata()
    const { width } = info
    if (!width) return false
    if (width < MAX_WIDTH) return false

    await stream
      .resize(MAX_WIDTH)
      .jpeg({ quality: QUALITY })
      .toFile(path.resolve(OUTPUT_DIR, path.basename(match)))

    return true
  })

  // eslint-disable-next-line no-console
).catch((error) => console.error(error))
