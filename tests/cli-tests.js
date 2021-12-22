const assert = require('assert');
const util = require('util');
const execFile = util.promisify(require('child_process').exec);
const testData = require('./test-data/test-data');
const directory = require('../utils/remove-files');

describe('TS №1 : Cli Validation', async function () {
    this.timeout(5000);

    before(function () {
        directory.removeFiles('./tests/output-test-artifacts/');
        directory.removeFiles('./output-files/');
    });

    it('TC №1.1 : Read mode with --input and --output parameter [JSON]', async function () {
        const { stdout, stderr } = await execFile(`node app.js --input ${testData.PATH_FOR_VALID_INPUT_FILE_JSON} --output ${testData.PATH_FOR_OUT_TEST_FILE_JSON}`);
        assert.equal(stdout, testData.VALID_CONSOLE_MESSAGE_JSON, 'ERROR : Messages not equal');
    });

    it('TC №1.2 : Read mode without -output parameter [JSON]', async function () {
        const { stdout, stderr } = await execFile(`node app.js -i ${testData.PATH_FOR_VALID_INPUT_FILE_JSON}`)
        assert.equal(stdout, testData.VALID_CONSOLE_MESSAGE_JSON, 'ERROR : Messages not equal');
    });

    it('TC №1.3 : Read mode with --input and --output parameter [CSV]', async function () {
        const { stdout, stderr } = await execFile(`node app.js -i ${testData.PATH_FOR_VALID_INPUT_FILE_CSV} -o ${testData.PATH_FOR_OUT_TEST_FILE_CSV}`);
        assert.equal(stdout, testData.VALID_CONSOLE_MESSAGE_CSV, 'ERROR : Messages not equal');
    })

    it('TC №1.4 : Read mode without -output parameter [CSV]', async function () {
        const { stdout, stderr } = await execFile(`node app.js -i ${testData.PATH_FOR_VALID_INPUT_FILE_CSV}`);
        assert.equal(stdout, testData.VALID_CONSOLE_MESSAGE_CSV, 'ERROR : Messages not equal');
    });

    it('TC №1.5 : Generate mode with --count and -output parameter', async function () {
        const { stdout, stderr } = await execFile(`node app.js --count 10 --output ${testData.PATH_FOR_OUT_TEST_FILE_GENERATE_JSON}`);
        assert.equal(stderr.length, 0);
    });

    it('TC №1.6 : Generate mode with --count ', async function () {
        const { stdout, stderr } = await execFile('node app.js --count 10');
        assert.equal(stderr.length, 0);
    });
})










