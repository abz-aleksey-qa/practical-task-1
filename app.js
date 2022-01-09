const cli = require('./src/cli-module/cli-parser')
const cliValidator = require('./src/cli-module/cli-validation');
const fileValidator = require('./src/file-module/input-file-validation');
const readMode = require('./src/file-module/input-file-parser');
const generateMode = require('./src/data-generator');
const directory = require('./src/utils/remove-files');

async function detectMode() {

    directory.removeFiles('./output-files/');

    const inputArgumentsOptions = cli.parserInputCliData(process.argv)
    const mode = cliValidator.getArguments(inputArgumentsOptions);
    switch (mode) {
        case cliValidator.mode.MODE_READ:
            console.log(mode);
            await fileValidator.inputFileValidation(inputArgumentsOptions.input);
            await readMode.inputFilePareser(inputArgumentsOptions.input, inputArgumentsOptions.output);
            break;
        case cliValidator.mode.MODE_GENERATE:
            console.log(mode);
            await generateMode.generateData(inputArgumentsOptions.count, inputArgumentsOptions.output);
            break;
    }
};

detectMode();