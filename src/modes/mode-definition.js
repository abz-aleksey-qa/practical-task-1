const startApplication = require('./start-operating-mode');

async function modeSelection(inputValue, countValue) {
  if (inputValue && !countValue) {
    const parsedData = await startApplication.launchApplicationMode('input-data')(inputValue);
    return parsedData;
  }

  if ((countValue && !inputValue) || (!inputValue && !countValue)) {
    const parsedData = await startApplication.launchApplicationMode('generate-data')(countValue);
    return parsedData;
  }

  throw Error('Utility can work only with input file or only in generate mode. Check --help for get more information.');
}

module.exports = {
  modeSelection,
};
