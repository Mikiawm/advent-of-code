const fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf-8');

console.log("Part1: " + findSize(4));
console.log("Part2: " + findSize(14));

function findSize(len) {
    for (let index = 0; index < input.length - len; index++) {

        var part = input.substring(index, index + len).split('');
        var st = new Set(part);

        if (st.size === len) {

            return index + len;
        }
    }
}
