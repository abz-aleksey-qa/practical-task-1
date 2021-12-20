const csvValidator = require('csv-file-validator')
const fs = require("fs");
const arguments = require('commander');
const CLI_VALIDATOR = require('./configuration/cliValidation.js');
const Ajv = require("ajv")
const ajv = new Ajv()
const FILE_VALIDATOR = require('./configuration/fileValidation.js');
const readMode = require('./app-modes/readMode')
const generateMode = require('./app-modes/generateMode');
const path = require('path');

arguments
    .option('-i, --input <path>', 'The path for input file is in json or csv format. Used for Read Mode.')
    .option('-c, --count <number>', 'The number of lines of the output file, the default value is 10. Used for Generate Mode. ')
    .option('-o, --output <fileName>', 'The name of the output file is in json or csv format. Dedault format for output file - json. Can be use for Read Mode and Generate Mode');


let inputArguments = arguments.parse(process.argv)

let inputArgumentsOptions = inputArguments.opts()

const mode = CLI_VALIDATOR.getArguments(inputArgumentsOptions)


async function detectMode() {

    switch (mode) {
        case 1:
            console.log(`Read Mode`);
            await FILE_VALIDATOR.inputFileValidation(inputArgumentsOptions.input)
            let filterDataReadMode = await readMode.READ(inputArgumentsOptions.input, inputArgumentsOptions.output)
            // createOuptuFile(filterDataReadMode, inputArgumentsOptions.input, inputArgumentsOptions.output)
            break
        case 2:
            console.log(`Generate Mode`);
            let filterDataGenMode = await generateMode.generate(inputArgumentsOptions.count, inputArgumentsOptions.output)
            // createOuptuFile(filterDataGenMode, inputArgumentsOptions.input, inputArgumentsOptions.output)
            break
    }
}

detectMode()