const path = require('path');

function isArgumentsValid(arguments) {
    return getArgumentsErrors(arguments).length === 0;
}

function getArgumentsErrors(arguments) {

    const errors = [];

    if ('count' in arguments && !validateCount(+arguments.count)) {
        errors.push('Counter type must be a number and more then 0!')
    }

    if ('input' in arguments && !validateInputFilepath(arguments.input)) {
        errors.push('Format of input file must be .json or .csv')
    }
    if ('output' in arguments && !validateOutputFilepath(arguments.output)) {
        errors.push('Format of output file must be .json or .csv')
    }

    return errors;
}
function validateInputFilepath(inputFile) {
    let extension = path.extname(inputFile);
    return extension === '.json' || extension === '.csv';
}

function validateOutputFilepath(outputFile) {
    let extension = path.extname(outputFile);
    return extension === '.json' || extension === '.csv';
}

function validateCount(counter) {
    return Number.isInteger(counter) && counter !== 0;
}

module.exports = {
    isArgumentsValid,
    getArgumentsErrors
};