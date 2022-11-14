import cmd from 'node-cmd'


function cleanFiles(upload,download) {

  let terminalCommandUploads = `cd ${upload} && rm *.pdf`
  cmd.runSync(terminalCommandUploads)
  let terminalCommandCsv = `cd ${download} && rm *.pdf`
  cmd.runSync(terminalCommandCsv)

}


export {
  cleanFiles
}
