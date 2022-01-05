const path = require('path');
const fs = require('fs');

function removeFiles(pathToDirectory) {
    fs.readdir(pathToDirectory, (err, files) => {
        if (err) throw err;

        for (const file of files) {
            let fullPathFile = path.join(pathToDirectory, file)
            if (!(file === '.gitkeep')) {
                fs.unlinkSync(fullPathFile)
            }
        }
    });
}

module.exports = { removeFiles };