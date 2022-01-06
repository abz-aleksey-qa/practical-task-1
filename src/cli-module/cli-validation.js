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

    // console.log(inputFile, ouputFile, counter);

    // Если есть инпут и отпут или просто инпут - READ MODE
    // Если есть коунтер и отпут или просто каунтер - GENERATE MODE
    // Если только отпут параметр то это - ОШИБКА


    if ((inputFile && ouputFile) || (inputFile && !counter)) {
        console.log('Case 1');
        return mode.MODE_READ
    }

    if ((counter && ouputFile) || (counter && !inputFile)) {
        console.log('Case 2');
        return mode.MODE_GENERATE
    }

    if (counter && inputFile) {
        console.log('Case 4');
        throw Error('ERROR : Invalid mode. Check --help')
    }

    console.log('Case3');
    return mode.MODE_GENERATE



    // if ((inputFile && counter) || (!inputFile || !counter && counter)) {
    //     console.error('ERROR : Invalid mode. Check --help')
    // }

    // if ((inputFile && ouputFile) || inputFile) {
    //     return mode.MODE_READ
    // }
    // if ((ouputFile && counter) || counter) {
    //     return mode.MODE_GENERATE
    // }

    // let testing = (inputFile && counter) || (!inputFile || !counter && counter)
    // console.log(testing);



    return console.log(111111);
}

function validationInputFile(inputFile) {
    let inputFormat = path.extname(inputFile);
    if (inputFormat === '.json' || inputFormat === '.csv') {
        return true
    } else {
        console.error('ERROR : Format of input file must be .json or .csv');
    }
};

function validationOutPutFile(outputFile) {
    let outputFormat = path.extname(outputFile);
    if (outputFormat === '.json' || outputFormat === '.csv') {
        return true
    } else {
        console.error('ERROR : Format of output file must be .json or .csv')
    }
};

function validationCounterArgument(counter) {
    if (!isNaN(counter) && +counter !== 0) {
        return true
    } else {
        console.error('ERROR : Counter type must be a number and more then 0!');
    }
};

module.exports = {
    mode,
    getArguments
};