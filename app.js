const fs = require('fs');
const path = require('path');
const cliParser = require('./src/cli/parser');
const cliValidator = require('./src/cli/validation');
const dataFilter = require('./src/data-processing/filtration');
const modedDefinition = require('./src/mode-definition');
const dataLogger = require('./src/data-processing/logger');
const formatter = require('./src/data-processing/formatter');

const outDir = './output-files';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}

async function runApp() {
  const inputCliArguments = cliParser.parserInputCliData(process.argv);
  const isCliParametrsValid = cliValidator.isArgumentsValid(inputCliArguments);
  if (!isCliParametrsValid) {
    throw Error(`${cliValidator.getArgumentsErrors(inputCliArguments).slice('')}`);
  }
  const parsedData = await modedDefinition.selectMode(inputCliArguments.input, inputCliArguments.count);
  const sortedData = dataFilter.sortData(parsedData);
  const formattedData = await formatter.getFormattedData(path.extname(inputCliArguments.output))(sortedData);

  const writeStream = fs.createWriteStream(`./output-files/${inputCliArguments.output}`);
  writeStream.write(formattedData, 'utf-8');

  dataLogger.consoleLogData(dataFilter.filterMessages);
}

runApp();
