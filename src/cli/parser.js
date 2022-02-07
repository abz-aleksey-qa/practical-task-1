function parserInputCliData(inputArgs) {
    const arguments = require('commander');

    arguments
        .option('-i, --input <path>', 'Path for input file')
        .option('-o, --output <fileName>', 'The name of the output file is in json or csv format. Dedault format for output file - json. Can be use for Read Mode and Generate Mode. The name of the output file. The file is saved in the /output-files folder. (If no output parameter is specified for the specified source file, the output file will be written in the format of the input.)', 'output-file.json')
        .option('-c, --count <number>', 'The numeric value of the number of records in the output file. The default is 10. (not compatible with the --count parameter)')
    
    arguments.parse(inputArgs);
    let cliArgumentsObject = arguments.opts();
    return cliArgumentsObject
}

module.exports = {
    parserInputCliData
};