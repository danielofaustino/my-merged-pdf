import merge from 'easy-pdf-merge';
import { getDirName } from '../utils';

const folderPath = getDirName('/public/downloads/output.pdf')

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