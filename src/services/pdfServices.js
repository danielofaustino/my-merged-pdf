import merge from 'easy-pdf-merge';

import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('../../src', import.meta.url));
const folderPath = `${__dirname}/public/downloads/output.pdf`;
//console.log(folderPath)

function mergePdf(list) {

  return new Promise((resolve, reject) => {
    merge(list, folderPath, function (err) {
      if (err) {
        reject(err)
      }

      resolve('Success')

    });
  })
}


export { mergePdf }