const csvValidator = require('csv-file-validator');
const fs = require('fs');
const Ajv = require('ajv');
const fileConfig = require('../configuration/validation-schemes');

const ajv = new Ajv();

const getErrors = {
  message: false,
};

function jsonValidation(filePath) {
  const currentFile = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const validate = ajv.compile(fileConfig.schemaJson);
  const valid = validate(currentFile);

  if (valid) {
    return true;
  }
  getErrors.message = `Validation error for json schema : ${validate.errors[0].message}`;
  return false;
}

async function csvValidation(filePath) {
  const csvfile = fs.readFileSync(filePath, 'utf-8');

  const validationResult = await csvValidator(csvfile, fileConfig.congifCsv);
  const isValidFile = validationResult.inValidMessages.length === 0;

  if (isValidFile) {
    return true;
  }
  getErrors.message = `Ivalid CSV file : ${validationResult.inValidMessages}`;
  return false;
}

function inputFileValidation(extName) {
  const formats = {
    '.csv': csvValidation,
    '.json': jsonValidation,
  };
  return formats[extName];
}

module.exports = {
  inputFileValidation,
  getErrors,
};
