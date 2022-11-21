import express from "express";
import { mergePdf } from "../services/pdfServices.js";
import { upload } from "../services/multerServices.js";
import { cleanFiles } from "../utils/index.js";
import { getDirName } from "../utils/index.js";


const folderPath = getDirName('/public/uploads')
//console.log(folderPath)
const downloadPath = getDirName('/public/downloads')

const pdfRoutes = express.Router();

pdfRoutes.get('/', (req, res) => {
  res.render('mergePdf')
})

pdfRoutes.post('/', upload.array('pdf', 100), async (req, res) => {

  try {

    const list = await req.files.map((item) => {
      return `${folderPath}/${item.originalname}`
    })

    await mergePdf(list)

    res.download(`${downloadPath}/output.pdf`, (err) => {
      if (err) {
        console.log(err)
      }
      console.log('Sucess on Merge PDF')
      cleanFiles(folderPath, downloadPath)

    })

  } catch (error) {
    console.error(error)
  }



})

export { pdfRoutes };
