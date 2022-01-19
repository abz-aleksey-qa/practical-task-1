const fs = require('fs');
const cli = require('./src/cli-module/cli-parser');
const cliValidator = require('./src/cli-module/cli-validation');
const fileValidator = require('./src/file-module/input-file-validation');
const fileParser = require('./src/file-module/input-file-parser');
const dataSorting = require('./src/data-module/input-data-sorting');
const dataFilter = require('./src/data-module/data-filter');
const createOutFile = require('./src/file-module/output-file-creator');
const detectMode = require('./src/detect-mode');
const newError = require('./src/utils/throw-error');
const dataGenerator = require('./src/data-module/data-generator');
const consoleOut = require('./src/console-output');

const outDir = './output-files';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}

async function runApp() {
  const inputCliArguments = cli.parserInputCliData(process.argv);

  const isCliParametrsValid = cliValidator.getArguments(inputCliArguments);

  if (isCliParametrsValid) {
    const appMode = detectMode.detectMode(inputCliArguments.input, inputCliArguments.output, inputCliArguments.count);

    if (appMode === detectMode.mode.MODE_READ) {
      const isInputFileValid = fileValidator.inputFileValidation(inputCliArguments.input);

      const parseInputFile = (isInputFileValid) ? await fileParser.inputFilePareser(inputCliArguments.input) : newError.throwError('Input file invalid!');
      const sortedData = dataSorting.sortInputData(parseInputFile);

      const getOldestUser = dataFilter.getOldestUser(sortedData);
      const getPopularLastName = dataFilter.getMostPopularLastName(sortedData);

      createOutFile.createOuptuFileforInputData(sortedData, cliValidator.inputData.INPUT_FILE_PATH, inputCliArguments.output);

      consoleOut.consoleOutputData(appMode, getOldestUser, getPopularLastName);
    }

    if (appMode === detectMode.mode.MODE_GENERATE) {
      const generateData = await dataGenerator.generateData(inputCliArguments.count);
      const sortedData = dataSorting.sortInputData(generateData);

      const getOldestUser = dataFilter.getOldestUser(sortedData);
      const getPopularLastName = dataFilter.getMostPopularLastName(sortedData);

      createOutFile.createOutputFileForGenerateData(inputCliArguments.output, sortedData);

      consoleOut.consoleOutputData(appMode, getOldestUser, getPopularLastName);
    }
  } else {
    newError.throwError('Cli parameters invalid!');
  }
}

runApp();
