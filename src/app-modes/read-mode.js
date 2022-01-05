const fs = require('fs');
const parser = require('fast-csv');
const path = require('path');
const fileParser = require('../utils/file-data-pareser');

async function READ(inputFilePath, ouptupFilePath) {
    const extNameInputFile = path.extname(inputFilePath);

    if (extNameInputFile == '.csv') {
        const inputFile = await new Promise((resolve) => {
            const results = [];
            fs.createReadStream(inputFilePath)
                .pipe(parser.parse({ headers: true }))
                .on('error', error => console.error(error))
                .on('data', row => results.push(row))
                .on('end', () => resolve(results));
        });
        let sortedInputFile = fileParser.sortFileData(inputFile);
        fileParser.getOldestUser(sortedInputFile)
        fileParser.getPopularLastName(sortedInputFile);
        createOuptuFile(sortedInputFile, extNameInputFile, ouptupFilePath);
    }

    if (extNameInputFile == '.json') {
        const inputFile = JSON.parse(fs.readFileSync(inputFilePath, 'utf-8'));
        let sortedInputFile = fileParser.sortFileData(inputFile);
        fileParser.getOldestUser(sortedInputFile)
        fileParser.getPopularLastName(sortedInputFile);
        createOuptuFile(sortedInputFile, extNameInputFile, ouptupFilePath);
    }
};

function createOuptuFile(sortedData, inputExtName, outPutFile) {
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
module.exports = {
    READ
};