const fs = require('fs');
const parser = require('fast-csv');
const path = require('path');

function createOuptuFileforInputData(sortedData, inputExtName, outPutFile) {
  const outFilePath = (outPutFile) ? path.extname(outPutFile) : null;
  if (outFilePath === '.csv') {
    const writeStream = fs.createWriteStream(`./${outPutFile}`);
    parser.write(sortedData, { headers: true })
      .pipe(writeStream);
  }

  if (outFilePath === '.json') {
    const data = JSON.stringify(sortedData, null, 2);
    const writeStream = fs.createWriteStream(`${outPutFile}`);
    writeStream.write(data, 'utf-8');
  }
  if (!outFilePath && inputExtName === '.csv') {
    const writeStream = fs.createWriteStream('./output-files/output-file.csv');
    parser.write(sortedData, { headers: true })
      .pipe(writeStream);
  }
  if (!outFilePath && inputExtName === '.json') {
    const data = JSON.stringify(sortedData, null, 2);
    const writeStream = fs.createWriteStream('./output-files/output-file.json');
    writeStream.write(data, 'utf-8');
  }
}

async function createOutputFileForGenerateData(outArguments, arrayData) {
  const outputPath = (outArguments) ? path.extname(outArguments) : null;

  if (!outputPath) {
    const createGenerateFile = fs.createWriteStream('./output-files/generate-mode-ouput.json');
    createGenerateFile.write(JSON.stringify(arrayData, null, 2));
  }

  if (outputPath === '.json') {
    const createGenerateFile = fs.createWriteStream(`./output-files/${outArguments}`);
    createGenerateFile.write(JSON.stringify(arrayData, null, 2));
  }

  if (outputPath === '.csv') {
    const writeStream = fs.createWriteStream(`./output-files/${outArguments}`);
    parser.write(arrayData, { headers: true })
      .pipe(writeStream);
  }
}

module.exports = { createOuptuFileforInputData, createOutputFileForGenerateData };
