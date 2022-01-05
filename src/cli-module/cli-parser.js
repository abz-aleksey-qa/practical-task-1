function parserInputCliData(inputArgs) {
    const arguments = require('commander');

    arguments
        .option('-i, --input <path>', 'The path for input file is in json or csv format. Used for Read Mode.')
        .option('-c, --count <number>', 'The number of lines of the output file, the default value is 10. Used for Generate Mode. ')
        .option('-o, --output <fileName>', 'The name of the output file is in json or csv format. Dedault format for output file - json. Can be use for Read Mode and Generate Mode');

    arguments.parse(inputArgs);
    let cliArgumentsOptions = arguments.opts();
    return cliArgumentsOptions
}

module.exports = {
    parserInputCliData
};