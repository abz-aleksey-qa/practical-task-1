const assert = require('assert');
const util = require('util');
const execFile = util.promisify(require('child_process').exec);
const fs = require('fs');
const testData = require('./test-data/test-data');
const directory = require('../src/utils/remove-files');

const outDir = './output-files';

describe('TS №1 : Cli Validation', async function () {
  this.timeout(5000);

  before(() => {
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir);
    } else {
      directory.removeFiles(outDir);
    }
  });

  it('TC №1.1 : Read mode with --input and --output parameter [JSON]', async () => {
    const { stdout } = await execFile(`node app.js --input ${testData.VALID_JSON_FILE} --output ${testData.OUT_FILE_JSON}`);
    assert.equal(stdout, testData.VALID_CONSOLE_MESSAGE, 'ERROR : Messages not equal');
  });

  it('TC №1.2 : Read mode without -output parameter [JSON]', async () => {
    const { stdout } = await execFile(`node app.js -i ${testData.VALID_JSON_FILE}`);
    assert.equal(stdout, testData.VALID_CONSOLE_MESSAGE, 'ERROR : Messages not equal');
  });

  it('TC №1.3 : Read mode with --input and --output parameter [CSV]', async () => {
    const { stdout } = await execFile(`node app.js -i ${testData.VALID_CSV_FILE} -o ${testData.OUT_FILE_CSV}`);
    assert.equal(stdout, testData.VALID_CONSOLE_MESSAGE, 'ERROR : Messages not equal');
  });

  it('TC №1.4 : Read mode without -output parameter [CSV]', async () => {
    const { stdout } = await execFile(`node app.js -i ${testData.VALID_CSV_FILE}`);
    assert.equal(stdout, testData.VALID_CONSOLE_MESSAGE, 'ERROR : Messages not equal');
  });

  it('TC №1.5 : Generate mode with --count ', async () => {
    const { stderr } = await execFile('node app.js --count 10');
    assert.equal(stderr.length, 0);
  });
});
