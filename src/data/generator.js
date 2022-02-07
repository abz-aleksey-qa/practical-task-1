const faker = require('faker');

const positions = ['QA', 'Programmer', 'Lead Dev', 'Designer', 'Ceo', 'Buisness Developer'];

async function generateData(inputCounter) {
  const counter = (inputCounter) || 10;
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
  return result;
}

module.exports = {
  generateData,
};
