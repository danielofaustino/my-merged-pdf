import cmd from 'node-cmd'
import * as url from 'url';


function cleanFiles(upload, download) {

  let terminalCommandUploads = `cd ${upload} && rm *.pdf`
  cmd.runSync(terminalCommandUploads)
  let terminalCommandCsv = `cd ${download} && rm *.pdf`
  cmd.runSync(terminalCommandCsv)

}


function getDirName(path) {
  const __dirname = url.fileURLToPath(new URL('../../src', import.meta.url));
  const folderPath = `${__dirname}${path}`;
  return folderPath
}


export {
  cleanFiles,
  getDirName
}
