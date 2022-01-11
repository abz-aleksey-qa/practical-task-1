const faker = require('faker');
const dataParser = require('./initial-data-parser');
const outputFile = require('./file-module/output-file-creator');

const positions = ['QA', 'Programmer', 'Lead Dev', 'Designer', 'Ceo', 'Buisness Developer'];

async function generateData(inputArgs, oupturArgs) {
  const counter = (inputArgs) || 10;
  const result = [];
  for (let i = 0; i < counter; i += 1) {
    const user = {
      name: faker.fake('{{name.firstName}} {{name.lastName}}'),
      posistion: faker.helpers.randomize(positions),
      age: faker.datatype.number({ min: 18, max: 50 }),
      phone: faker.phone.phoneNumber('+380########'),
    };
    result.push(user);
  }
  const sortedFileData = dataParser.sortFileData(result);
  dataParser.getOldestUser(sortedFileData);
  dataParser.getPopularLastName(result);

  outputFile.createOutputFileForGenerateData(oupturArgs, result);
}

module.exports = {
  generateData,
};
