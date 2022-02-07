const assert = require('assert');
const fs = require('fs');
const testData = require('./test-data/test-data');
const testUtils = require('./test-utils/compare-file');
// const as = require('../output-files/test-valid.json');

describe('TS №2 :File validation', async function () {
  this.timeout(5000);

  it('TC №2.1 : Check output file json for Read Mode', async () => {
    const isFilesSame = testUtils.compareFiles(testData.VALID_JSON_FILE, `output-files/${testData.OUT_FILE_JSON}`);
    assert.equal(isFilesSame, true, 'ERROR');
  });

  it('TC №2.2 : Check output file csv for Read Mode', async () => {
    // console.log(testData.OUT_FILE_CSV);
    const isFilesSame = testUtils.compareFiles(testData.VALID_CSV_FILE, `output-files/${testData.OUT_FILE_CSV}`);
    assert.equal(isFilesSame, true, 'ERROR');
  });
});
