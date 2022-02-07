# Practical Task №1

Console utility for parsing json and csv files. Utility can work with input file and in generate data mode.

## Features

- Parse input file in csv or json format
- Create random data in the specified amount
- Output to the console the name, surname and age of the oldest user.
- Output to the console the name, surname and counter of the user's most frequently encountered surname.
- Create output file in the specified format (json or csv)
- E2E tests for main logic of utility 




## Installing
```sh
npm install
```

## CLI parameters

| Option | Short type | by Defualt | Description |
| - | - | - | - |
| --input | -i | false | Path for input file.
| --count | -c | 10 | The numeric value of the number of records in the output file (not compatible with the --count parameter)
| --output | -o  | output-file.json | The name of the output file. The file is saved in the /output-files folder.
| --help | -h | false |  Display info for CLI parameters.


By default without any CLI parameters, utility work in generate node with default value in counter. 
## Example valid files

1. json - https://scr.abz.agency/xQuz4XqO
2. csv - https://scr.abz.agency/P8u604Qj

## Run utility (examples)

> Note:  Output files saved in folder  `./output-files`.

> After running, the utility automatically remove otput folder. 

Input file mode : 

```sh
npm run app -- --input /path/to/input/file.json --output /path/to/output/file.json
```

Generate data mode : 

```sh
npm run app -- --count 20 --output /path/to/output/file.json
```

## Run tests

```sh
npm run test
```


