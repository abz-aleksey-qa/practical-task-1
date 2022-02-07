function parserInputCliData(inputArgs) {
    const arguments = require('commander');

    arguments
        .option('-i, --input <path>', 'Path for input file')
        .option('-o, --output <fileName>', 'The name of the output file is in json or csv format. Dedault format for output file - json. Can be use for Read Mode and Generate Mode', 'output-file.json')
        .option('-c, --count <number>', 'The number of lines of the output file, the default value is 10. Used for Generate Mode.')
    
    arguments.parse(inputArgs);
    let cliArgumentsObject = arguments.opts();
    return cliArgumentsObject
}

module.exports = {
    parserInputCliData
};