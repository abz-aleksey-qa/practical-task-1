const newError = require('./utils/throw-error');

function consoleOutputData(stringMode, stringOldestUser, stringLastName) {
  const isArgumentsAreString = (typeof (stringMode) === 'string' && typeof (stringOldestUser) === 'string' && typeof (stringLastName) === 'string');

  if (isArgumentsAreString) {
    console.log(`${stringMode} \n${stringOldestUser} \n${stringLastName}`);
  } else {
    newError.throwError('Filtered values are not a string');
  }
}

module.exports = { consoleOutputData };
