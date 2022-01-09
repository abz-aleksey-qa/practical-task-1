const fs = require('fs');
const parser = require('fast-csv');
const path = require('path');

function createOuptuFileforInputData(sortedData, inputExtName, outPutFile) {
    let outFilePath = (outPutFile) ? path.extname(outPutFile) : null;
    if (outFilePath == '.csv') {
        let writeStream = fs.createWriteStream(`./${outPutFile}`);
        parser.write(sortedData, { headers: true })
            .pipe(writeStream);
    };

    if (outFilePath == '.json') {
        let data = JSON.stringify(sortedData, null, 2);
        let writeStream = fs.createWriteStream(`${outPutFile}`);
        writeStream.write(data, 'utf-8');
    }
    if (!outFilePath && inputExtName == '.csv') {
        let writeStream = fs.createWriteStream(`./output-files/output-file.csv`);
        parser.write(sortedData, { headers: true })
            .pipe(writeStream);
    }
    if (!outFilePath && inputExtName == '.json') {
        let data = JSON.stringify(sortedData, null, 2);
        let writeStream = fs.createWriteStream(`./output-files/output-file.json`);
        writeStream.write(data, 'utf-8');
    }
}


async function createOutputFileForGenerateData(outArguments, arrayData) {
    // console.log(outArguments);
    const outputPath = (outArguments) ? path.extname(outArguments) : null;

    if (!outputPath) {
        const createGenerateFile = fs.createWriteStream(`./output-files/generate-mode-ouput.json`);
        createGenerateFile.write(JSON.stringify(arrayData, null, 2));
    }

    if (outputPath == '.json') {
        const createGenerateFile = fs.createWriteStream(`${outArguments}`);
        createGenerateFile.write(JSON.stringify(arrayData, null, 2));
    }

    if (outputPath == '.csv') {
        let writeStream = fs.createWriteStream(`${outArguments}`);
        parser.write(arrayData, { headers: true })
            .pipe(writeStream);
    }

}

module.exports = { createOuptuFileforInputData, createOutputFileForGenerateData }