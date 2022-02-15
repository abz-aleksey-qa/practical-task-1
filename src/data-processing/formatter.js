const parser = require('fast-csv');

function formatInJson(data) {
  return JSON.stringify(data, null, 2);
}

async function formatInCsv(data) {
  return parser.writeToString(data, { headers: true });
}

function getFormattedData(extensionFormat) {
  const formatters = {
    '.csv': formatInCsv,
    '.json': formatInJson,
  };
  return formatters[extensionFormat];
}

module.exports = {
  getFormattedData,
};
