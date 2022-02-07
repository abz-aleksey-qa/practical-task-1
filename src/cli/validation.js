const path = require('path');

let getErrors = {
    message: false
};

function validateCliInputArguments(arguments) {

    let inputArg, outputArg, countArg;
  
    if ('count' in arguments) {
        countArg = validationCliCountArgument(arguments.count)
    }
    if ('input' in arguments) {
        inputArg = validateCliInputFileArguments(arguments.input)
    }
    if ('output' in arguments) {
        outputArg = validateCliOutputArgument(arguments.output)
    };

    if (getErrors.message) {
        return false
    } else {
        return true
    }
}

function validateCliInputFileArguments(inputFile) {
    let inputFormat = path.extname(inputFile);
    if (inputFormat === '.json' || inputFormat === '.csv') {
        return true
    } else {
        getErrors.message = 'ERROR : Format of input file must be .json or .csv'
        return false
    }
};

function validateCliOutputArgument(outputFile) {
    let outputFormat = path.extname(outputFile);
    if (outputFormat === '.json' || outputFormat === '.csv') {
        return true
    } else {
        getErrors.message = 'ERROR : Format of output file must be .json or .csv'
        return false
    }
};

function validationCliCountArgument(counter) {
    if (!isNaN(counter) && +counter !== 0) {
        return true
    } else {
        getErrors.message = 'ERROR : Counter type must be a number and more then 0!'
        return false
    }
};

module.exports = {
    getErrors,
    validateCliInputArguments
};