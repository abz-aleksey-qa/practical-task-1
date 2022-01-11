const fs = require('fs');
const parser = require('fast-csv');
const path = require('path');
const dataParser = require('../initial-data-parser');
const outputFile = require('./output-file-creator');

async function inputFilePareser(inputFilePath, ouptupFilePath) {
  const extNameInputFile = path.extname(inputFilePath);

  if (extNameInputFile === '.csv') {
    const inputFile = await new Promise((resolve) => {
      const results = [];
      fs.createReadStream(inputFilePath)
        .pipe(parser.parse({ headers: true }))
        .on('error', (error) => { throw Error(error); })
        .on('data', (row) => results.push(row))
        .on('end', () => resolve(results));
    });
    const sortedInputFile = dataParser.sortFileData(inputFile);
    dataParser.getOldestUser(sortedInputFile);
    dataParser.getPopularLastName(sortedInputFile);
    outputFile.createOuptuFileforInputData(sortedInputFile, extNameInputFile, ouptupFilePath);
  }

  if (extNameInputFile === '.json') {
    const inputFile = JSON.parse(fs.readFileSync(inputFilePath, 'utf-8'));
    const sortedInputFile = dataParser.sortFileData(inputFile);
    dataParser.getOldestUser(sortedInputFile);
    dataParser.getPopularLastName(sortedInputFile);
    outputFile.createOuptuFileforInputData(sortedInputFile, extNameInputFile, ouptupFilePath);
  }
}

module.exports = {
  inputFilePareser,
};
