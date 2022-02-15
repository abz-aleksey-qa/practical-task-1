const path = require('path');
const fs = require('fs');
const fileParser = require('./filesystem/parser');
const fileValidate = require('./filesystem/validation');
const dataGenerator = require('./data-processing/generator');

async function runInputDataMode(inputFilePath) {
  const inputExtension = path.extname(inputFilePath);
  const inputData = fs.readFileSync(inputFilePath, 'utf-8');
  const isInputFileFalid = fileValidate.validateData(inputExtension)(inputData);
  if (isInputFileFalid) {
    const parseData = await fileParser.parseFile(inputExtension)(inputData);
    return parseData;
  } throw new Error(fileValidate.errorMessages.message);
}

function runGenerateDataMode(countValue) {
  const data = dataGenerator.generateData(countValue);
  return data;
}

function launchApplicationMode(modeName) {
  const appModes = {
    'input': runInputDataMode,
    'generate': runGenerateDataMode,
  };
  return appModes[modeName];
}

module.exports = { launchApplicationMode };
