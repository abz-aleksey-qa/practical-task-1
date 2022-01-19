const path = require('path');

const inputData = {
    INPUT_FILE_PATH: 0,
    OUTPUT_FILE_PATH: 0,
};

function getArguments(arguments) {
    let count, outFile, inputFile;

    if ('count' in arguments) {
        count = validationCounterArgument(arguments.count)
    }
    if ('input' in arguments) {
        inputFile = validationInputFile(arguments.input)
    }
    if ('output' in arguments) {
        outFile = validationOutPutFile(arguments.output)
    };

return true
}

function validationInputFile(inputFile) {
    let inputFormat = path.extname(inputFile);
    if (inputFormat === '.json' || inputFormat === '.csv') {
        inputData.INPUT_FILE_PATH = inputFormat
        return true
    } else {
        throw Error('ERROR : Format of input file must be .json or .csv')
    }
};

function validationOutPutFile(outputFile) {
    let outputFormat = path.extname(outputFile);
    if (outputFormat === '.json' || outputFormat === '.csv') {
        inputData.OUTPUT_FILE_PATH = outputFormat
        return true
    } else {
        throw Error('ERROR : Format of output file must be .json or .csv')
    }
};

function validationCounterArgument(counter) {
    if (!isNaN(counter) && +counter !== 0) {
        return true
    } else {
        throw Error('ERROR : Counter type must be a number and more then 0!')
    }
};

module.exports = {
    inputData,
    getArguments
};