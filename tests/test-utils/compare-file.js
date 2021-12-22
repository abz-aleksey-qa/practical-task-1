const fs = require('fs')
const { buffer } = require('buffer')

function compareFiles(pathValidFile, pathOutputFile) {

    let readValidFile = fs.readFileSync(pathValidFile, 'utf-8');
    let readOutFile = fs.readFileSync(pathOutputFile, 'utf-8');
    let bufferValidFile = Buffer.from(readValidFile);
    let bufferOutFile = Buffer.from(readOutFile);
    let isFilesSame = bufferValidFile.equals(bufferOutFile);

    return isFilesSame
}

module.exports = {
    compareFiles
};