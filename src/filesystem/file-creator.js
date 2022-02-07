const fs = require('fs');

function writeFile(data, filename) {
  const writeStream = fs.createWriteStream(`./output-files/${filename}`);
  writeStream.write(data, 'utf-8');
}

module.exports = { writeFile };
