import express from "express";
import { mergePdf } from "../services/pdfServices.js";
import { upload } from "../services/multerServices.js";
import { cleanFiles } from "../utils/index.js";


import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('../../src', import.meta.url));
const folderPath = `${__dirname}/public/uploads`;
console.log(folderPath)
const downloadPath = `${__dirname}/public/downloads`;

const pdfRoutes = express.Router();

pdfRoutes.get('/', (req, res) => {
  res.render('mergePdf')
})

pdfRoutes.post('/', upload.array('pdf', 100), async (req, res) => {

  try {
    let list = []


    await req.files.map((item) => {
      list.push(`${folderPath}/${item.originalname}`)
    })

    await mergePdf(list)

    res.download(`${downloadPath}/output.pdf`, (err) => {
      if (err) {
        console.log(err)
      }
      console.log('Sucess on Merge PDF')
      cleanFiles(folderPath,downloadPath)

    })

  } catch (error) {
    console.error(error)
  }



})

export { pdfRoutes };
