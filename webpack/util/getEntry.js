const fs = require('fs');
const path = require('path');

console.log(path.resolve('name','index.js'))

module.exports = function () {
    const list = fs.readdirSync('../../src/static/js');
    let entries = {};

    list.forEach((dirName) => {
        if (dirName !== 'lib' && dirName !== 'util') {
            entries[dirName]=path.resolve();
        }
    });
    console.log(list)
}
