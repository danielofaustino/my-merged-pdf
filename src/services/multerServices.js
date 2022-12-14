import multer from 'multer'
import { getDirName } from '../utils';

const folderPath = getDirName('/public/uploads')

const storage = multer.diskStorage({
  destination: folderPath,
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage })

export { upload }