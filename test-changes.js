const fs = require('fs')
const path = require('path')


fs.readdir('./abcd/', (err, files) => {
    if (err) throw err;

    for (const file of files) {
        let fullPathFile = path.join('./abcd/', file)
        if (!(path.extname(fullPathFile) === '.csv')) {
            fs.unlinkSync(fullPathFile)
        }
    }

});