# Practical Task №1

Console utility for parsing json and csv files. Utility can work in two mode "Read" and "Generate".

## Features

- Parse input file in csv or json format (Read mode)
- Create random data in the specified amount (Generate mode)
- Output in console name of the most oldest employee
- Output in console most pipular last name with counter 
- Create output file in the specified format (json or csv)

## CLI parameters

| Option | Short type | Description |
| - | - | - |
| --input | -i | Path for input file (Read mode)
| --count | -c | The numeric value of the number of records in the output file. The default is 10. (Generate mode)
| --output | -o  | Name for output file. If this parameter not specified, in Read Mode the file format is substituted from the input file. If in Generate Mode do not specify this parameter, dedault parametr will be json. 
| --help | -h | Display info for CLI parameters.

## Example valid files

1. json - https://scr.abz.agency/xQuz4XqO
2. csv - https://scr.abz.agency/P8u604Qj

