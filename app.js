const fs = require('fs');
const path = require('path');
const cliParser = require('./src/cli/parser');
const cliValidator = require('./src/cli/validation');
const dataFilter = require('./src/data/filtration');
const modedDefinition = require('./src/modes/mode-definition');
const fileWriter = require('./src/filesystem/file-creator');
const dataLogger = require('./src/data/logger');
const formatter = require('./src/data/formatter');

const outDir = './output-files';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}

async function runApp() {
  const inputCliArguments = cliParser.parserInputCliData(process.argv);
  const isCliParametrsValid = cliValidator.validateCliInputArguments(inputCliArguments);
  if (!isCliParametrsValid) {
    throw Error(`${cliValidator.getErrors.message}`);
  } else {
    const parsedData = await modedDefinition.modeSelection(inputCliArguments.input, inputCliArguments.count);
    const sortedData = dataFilter.dataSorting(parsedData);
    const formattedData = await formatter.dataFormatter(path.extname(inputCliArguments.output))(sortedData);
    fileWriter.writeFile(formattedData, inputCliArguments.output);
    dataLogger.consoleLogData(dataFilter.filterMessage);
  }
}

runApp();
