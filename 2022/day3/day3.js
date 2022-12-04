const fs = require('fs');
const helper = require('../helpers')

var input = fs.readFileSync('./input.txt', 'utf-8');

var data = input.split("\r\n");

var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
alphabet = [...alphabet, ...alphabet.map((c) => c.toUpperCase())];

var result = 0;
data.forEach(element => {
    var [p1, p2] = helper.splitOnHalf(element);
    const set = findCommon(p1, p2);
    set.forEach(item => {
        result += alphabet.indexOf(item) + 1;
    });
});

console.log(result);

var result = 0;
var lst = helper.chunkArray(data, 3);
lst.forEach(elves => {
    var set = findCommon([...elves[0]], [...elves[1]]);
    set = findCommon(set, [...elves[2]]);
    set.forEach(item => {
        result += alphabet.indexOf(item) + 1;
    });
});

console.log(result);

function findCommon(p1, p2) {
    const set = new Set();
    p1.forEach(char => {
        if (p2.indexOf(char) != -1) {
            set.add(char);
        }
    });
    return set;
}

