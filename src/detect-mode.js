const mode = {
  MODE_READ: 'Read Mode',
  MODE_GENERATE: 'Generate Mode',
};

function detectMode(inputValue, outValue, countValue) {
  if ((inputValue && outValue) || (inputValue && !countValue)) {
    return mode.MODE_READ;
  }

  if ((countValue && outValue) || (countValue && !inputValue)) {
    return mode.MODE_GENERATE;
  }

  if (countValue && inputValue) {
    throw Error('ERROR : Invalid mode. Check --help');
  }

  return mode.MODE_GENERATE;
}

module.exports = {
  mode,
  detectMode,
};
