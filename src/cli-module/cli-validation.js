const { throws } = require('assert');
const path = require('path');

const mode = {
    MODE_READ: 'Read Mode',
    MODE_GENERATE: 'Generate Mode',
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

    return detectMode(inputFile, outFile, count)
}

function detectMode(inputFile, ouputFile, counter) {

    if ((inputFile && ouputFile) || (inputFile && !counter)) {
        return mode.MODE_READ
    }

    if ((counter && ouputFile) || (counter && !inputFile)) {
        return mode.MODE_GENERATE
    }

    if (counter && inputFile) {
        throw Error('ERROR : Invalid mode. Check --help')
    }

    return mode.MODE_GENERATE;
}

function validationInputFile(inputFile) {
    let inputFormat = path.extname(inputFile);
    if (inputFormat === '.json' || inputFormat === '.csv') {
        return true
    } else {
        throw Error('ERROR : Format of input file must be .json or .csv')
    }
};

function validationOutPutFile(outputFile) {
    let outputFormat = path.extname(outputFile);
    if (outputFormat === '.json' || outputFormat === '.csv') {
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
    mode,
    getArguments
};