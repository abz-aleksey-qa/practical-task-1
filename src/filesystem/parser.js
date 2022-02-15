const parser = require('fast-csv');

async function parseCsvData(data) {
  const parseData = await new Promise((resolve) => {
    const results = [];
    parser.parseString(data, { headers: true })
      .on('error', (error) => { throw Error(error); })
      .on('data', (row) => results.push(row))
      .on('end', () => resolve(results));
  });
  return parseData;
}

function parseJsonData(data) {
  return JSON.parse(data);
}

function parseFile(extension) {
  const parsers = {
    '.json': parseJsonData,
    '.csv': parseCsvData,
  };
  return parsers[extension];
}

module.exports = {
  parseFile,
};
