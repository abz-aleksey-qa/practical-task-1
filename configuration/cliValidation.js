const commander = require('commander');
const fs = require('fs')
const mode = {
    MODE_READ: 1,
    MODE_GENERATE: 2,
}

function getArguments(arguments) {
    console.log(arguments);
    let count, outFile, inputFile

    if ('count' in arguments) {
        count = validationCounterArgument(arguments.count)
    }
    if ('input' in arguments) {
        inputFile = validationInputFile(arguments.input)
    }
    if ('output' in arguments) {
        outFile = validationOutPutFile(arguments.output)
    }
    if (Object.keys(arguments).length == 0) {
        return mode.MODE_GENERATE
    }
    return detectMode(inputFile, outFile, count)
}

function detectMode(inputFile, ouputFile, counter) {
    if (inputFile && counter) {
        throw Error('Invalid mode. Check --help')
    }
    if (inputFile && ouputFile || (inputFile)) {
        return mode.MODE_READ
    }
    if (ouputFile && counter || counter) {
        return mode.MODE_GENERATE
    }
}

function validationInputFile(inputFile) {
    let inputFormat = inputFile.match(/\.[0-9a-z]{1,5}$/gm)
    if (inputFormat == '.json' || inputFormat == '.csv') {
        return true
    } else { throw Error('ERROR Format of input file must be .json or .csv') }
}

function validationOutPutFile(outputFile) {
    let outputFormat = outputFile.match(/\.[0-9a-z]{1,5}$/gm)
    if (outputFormat == '.json' || outputFormat == '.csv') {
        return true
    } else { throw Error('ERROR Format of output file must be .json or .csv') }
}

function validationCounterArgument(counter) {
    if (!isNaN(counter) && +counter !== 0) {
        return true
    } else {
        throw Error('Counter type must be a number and more then 0!')
    }
}

module.exports = {
    mode,
    getArguments
}