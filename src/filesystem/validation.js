const csvValidator = require('csv-file-validator');
const Ajv = require('ajv');
const fileConfig = require('../configuration/validation-schemes');

const ajv = new Ajv();

const errorMessages = {
  message: false,
};

function validateJsonData(fileData) {
  const validate = ajv.compile(fileConfig.jsonSchema);
  const valid = validate(JSON.parse(fileData));

  if (valid) {
    return true;
  }
  errorMessages.message = `Validation error for json schema : ${validate.errors[0].message}`;
  return false;
}

async function validateCsvData(fileData) {
  const validationResult = await csvValidator(fileData, fileConfig.csvConfiguration);
  const isValidFile = validationResult.inValidMessages.length === 0;

  if (isValidFile) {
    return true;
  }
  errorMessages.message = `Ivalid CSV file : ${validationResult.inValidMessages}`;
  return false;
}

function validateData(extension) {
  const formats = {
    '.csv': validateCsvData,
    '.json': validateJsonData,
  };
  return formats[extension];
}

module.exports = {
  validateData,
  errorMessages,
};
