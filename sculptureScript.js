const sculptureList = require('./data.js');

const sculptureListLengths = sculptureList.map(sculpture => {
    let lengths = {};
    for (const key in sculpture) {
        lengths[key] = sculpture[key].length;
    }
    return lengths;
});

console.log(sculptureListLengths);

module.exports = sculptureListLengths;