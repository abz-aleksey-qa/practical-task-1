const startApplication = require('./start-operating-mode');

async function selectMode(inputValue, countValue) {
  if (inputValue && !countValue) {
    const parsedData = await startApplication.launchApplicationMode('input')(inputValue);
    return parsedData;
  }

  if ((countValue && !inputValue) || (!inputValue && !countValue)) {
    const parsedData = await startApplication.launchApplicationMode('generate')(countValue);
    return parsedData;
  }

  throw Error('Utility can work only with input file or only in generate mode. Check --help for get more information.');
}

module.exports = {
  selectMode,
};
