const path = require('path');
const fs = require('fs');

function removeFiles(pathToDirectory) {

    fs.readdir(pathToDirectory, (err, files) => {
        if (err) throw err;

        for (const file of files) {
            fs.unlink(path.join(pathToDirectory, file), err => {
                if (err) throw err;
            });
        }
    });
}

module.exports = { removeFiles };