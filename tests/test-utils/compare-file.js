const fs = require('fs');

function compareFiles(pathValidFile, pathOutputFile) {
  const readValidFile = fs.readFileSync(pathValidFile, 'utf-8');
  const readOutFile = fs.readFileSync(pathOutputFile, 'utf-8');
  const bufferValidFile = Buffer.from(readValidFile);
  const bufferOutFile = Buffer.from(readOutFile);
  const isFilesSame = bufferValidFile.equals(bufferOutFile);

  return isFilesSame;
}

module.exports = {
  compareFiles,
};
