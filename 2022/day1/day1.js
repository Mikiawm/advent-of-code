
const fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf-8')

var data = input.split("\r\n");

var lst = [];

for (let i = 0; i < data.length; i++) {
    lst.push(data.slice(i, data.indexOf('', i)));
    i = data.indexOf('', i);
    if (i === -1) break;
}

var sum = (a) => a.reduce(function (a, b) { return +a + +b; }, 0);

var sumOfNums = lst.map((x) => sum(x));



compareNumbers = (a, b) => b - a;

//First part
console.log(Math.max(...sumOfNums));

//Second part
console.log(sum(sumOfNums.sort(compareNumbers).slice(0, 3)));
