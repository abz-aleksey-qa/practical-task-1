const path = require('path');
const fileParser = require('../filesystem/parser');
const fileValidate = require('../filesystem/validation');
const dataGenerator = require('../data/generator');

function runInputDataMode(inputFilePath) {
  const inputExtName = path.extname(inputFilePath);
  const isInputFileFalid = fileValidate.inputFileValidation(inputExtName)(inputFilePath);
  if (isInputFileFalid) {
    const parseData = fileParser.parseFile(inputFilePath);
    return parseData;
  } throw new Error(fileValidate.getErrors.message);
}

function runGenerateDataMode(countValue) {
  const createdData = dataGenerator.generateData(countValue);
  return createdData;
}

function launchApplicationMode(modeName) {
  const appModes = {
    'input-data': runInputDataMode,
    'generate-data': runGenerateDataMode,
  };
  return appModes[modeName];
}

module.exports = { launchApplicationMode };
