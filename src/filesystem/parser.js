const fs = require('fs');
const parser = require('fast-csv');
const path = require('path');
const newError = require('../utils/throw-error');

async function parseFile(filePath) {
  const extNameInputFile = path.extname(filePath);

  if (extNameInputFile === '.csv') {
    const parseData = await new Promise((resolve) => {
      const results = [];
      fs.createReadStream(filePath)
        .pipe(parser.parse({ headers: true }))
        .on('error', (error) => newError.throwError(error))
        .on('data', (row) => results.push(row))
        .on('end', () => resolve(results));
    });
    return parseData;
  }

  if (extNameInputFile === '.json') {
    try {
      const parseData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      return parseData;
    } catch (error) {
      newError.throwError(error);
    }
  }

  return newError.throwError('Invalid file!');
}

module.exports = {
  parseFile,
};
