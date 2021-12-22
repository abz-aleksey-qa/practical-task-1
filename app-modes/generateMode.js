const faker = require('faker');
const fs = require('fs');
const path = require('path');
const parser = require('fast-csv');
const fileParser = require('../utils/file-data-pareser');

const positions = ['QA', 'Programmer', 'Lead Dev', 'Designer', 'Ceo', 'Buisness Developer'];

async function generate(inputArgs, oupturArgs) {
    const outputPath = (oupturArgs) ? path.extname(oupturArgs) : null;
    const counter = (inputArgs) ? inputArgs : 10;
    const result = [];
    for (let i = 0; i < counter; i++) {
        let user = {
            name: faker.fake("{{name.firstName}} {{name.lastName}}"),
            posistion: faker.helpers.randomize(positions),
            age: faker.datatype.number({ min: 18, max: 50 }),
            phone: faker.phone.phoneNumber('+380########')
        }
        result.push(user);
    }
    let sortedFileData = fileParser.sortFileData(result);
    fileParser.getOldestUser(sortedFileData)
    fileParser.getPopularLastName(result);


    if (!outputPath) {
        const createGenerateFile = fs.createWriteStream(`./output-files/generate-mode-ouput.json`);
        createGenerateFile.write(JSON.stringify(result, null, 2));
    };

    if (outputPath == '.json') {
        const createGenerateFile = fs.createWriteStream(`${oupturArgs}`);
        createGenerateFile.write(JSON.stringify(result, null, 2));
    };

    if (outputPath == '.csv') {
        let writeStream = fs.createWriteStream(`${oupturArgs}`);
        parser.write(result, { headers: true })
            .pipe(writeStream);
    }
};

module.exports = {
    generate
};