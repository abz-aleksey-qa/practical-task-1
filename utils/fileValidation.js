const csvValidator = require('csv-file-validator')
const fs = require("fs");
const Ajv = require("ajv")
const ajv = new Ajv()
const path = require('path');



const schemaJson = {
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "age": {
                "type": "number",
            },
            "phone": {
                "type": "string"
            }
        },
        "required": [
            "name",
            "age",
            "phone",
            "position"
        ],
    }
};

const congifCsv = {
    headers: [
        {
            name: 'name',
            inputName: 'name',
            required: false
        },
        {
            name: 'position',
            inputName: 'position',
            required: false
        },
        {
            name: 'age',
            inputName: 'age',
            required: false
        },
        {
            name: 'phone',
            inputName: 'phone',
            required: false
        }
    ]
};

function inputFileValidation(filePath) {
    let fileFormat = path.extname(filePath);

    if (fileFormat == '.json') {
        return jsonValidation(filePath)
    };
    if (fileFormat == '.csv') {
        return csvValidation(filePath)
    };
}


function jsonValidation(filePath) {
    const currentFile = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const validate = ajv.compile(schemaJson);
    const valid = validate(currentFile);

    if (!valid) {
        console.error(`ERROR : Validation error for json schema : ${validate.errors[0].message}`)
    } else {
        return true
    };
}

async function csvValidation(file) {
    const csvfile = fs.readFileSync(file, 'utf-8');

    const validationResult = await csvValidator(csvfile, congifCsv);
    let isValidFile = validationResult.inValidMessages.length == 0

    if (isValidFile) {
        return true
    } else {
        console.error(`ERROR : Ivalid CSV file : ${validationResult.inValidMessages}`)
    }
};

module.exports = {
    inputFileValidation
};