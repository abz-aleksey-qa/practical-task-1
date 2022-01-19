const assert = require('assert');
const fs = require('fs');
const testData = require('./test-data/test-data');
const testUtils = require('./test-utils/compare-file');

describe('TS №2 :File validation', async function () {
  this.timeout(5000);

  it('TC №2.1 : Check output file json for Read Mode', async () => {
    const isFilesSame = testUtils.compareFiles(testData.PATH_FOR_VALID_INPUT_FILE_JSON, testData.PATH_FOR_OUT_TEST_FILE_JSON);
    assert.equal(isFilesSame, true, 'ERROR');
  });

  it('TC №2.2 : Check output file csv for Read Mode', async () => {
    const isFilesSame = testUtils.compareFiles(testData.PATH_FOR_VALID_INPUT_FILE_CSV, testData.PATH_FOR_OUT_TEST_FILE_CSV);
    assert.equal(isFilesSame, true, 'ERROR');
  });
});
