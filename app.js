const cli = require('./src/cli-module/cli-parser')
const cliValidator = require('./src/cli-module/cli-validation');
const fileValidator = require('./src/utils/file-validation');
const readMode = require('./src/app-modes/read-mode');
const generateMode = require('./src/app-modes/generate-mode');
const directory = require('./src/utils/remove-files');

async function detectMode() {

    directory.removeFiles('./output-files/');

    const inputArgumentsOptions = cli.parserInputCliData(process.argv)
    const mode = cliValidator.getArguments(inputArgumentsOptions);
    switch (mode) {
        case cliValidator.mode.MODE_READ:
            console.log(mode);
            await fileValidator.inputFileValidation(inputArgumentsOptions.input);
            await readMode.READ(inputArgumentsOptions.input, inputArgumentsOptions.output);
            break
        case cliValidator.mode.MODE_GENERATE:
            console.log(mode);
            await generateMode.generate(inputArgumentsOptions.count, inputArgumentsOptions.output);
            break
    }
};

detectMode();