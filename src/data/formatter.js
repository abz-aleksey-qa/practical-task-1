const parser = require('fast-csv');

function jsonFormatter(data) {
  return JSON.stringify(data, null, 2);
}

async function csvFormatter(data) {
  return parser.writeToString(data, { headers: true });
}

function dataFormatter(extensionFormat) {
  const formatters = {
    '.csv': csvFormatter,
    '.json': jsonFormatter,
  };
  return formatters[extensionFormat];
}

module.exports = {
  dataFormatter,
};
