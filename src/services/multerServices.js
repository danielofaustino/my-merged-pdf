import multer from 'multer'

import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('../../src', import.meta.url));
const folderPath = `${__dirname}/public/uploads`;
console.log(folderPath)

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, folderPath)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage })

export { upload }