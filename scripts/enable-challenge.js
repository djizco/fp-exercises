const fs = require('fs');
const path = require('path');

const problem = process.argv[2];
const filename = path.join(__dirname, `../tests/${problem}.test.js`);

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }
  const result = data.replace(/xit/g, 'it');

  fs.writeFile(filename, result, 'utf8', (err) => {
    if (err) return console.log(err);
  });
});
