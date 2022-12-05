const fs = require('fs');
const { isLetter, groupBy, isNumber2 } = require('../helpers');

var input = fs.readFileSync('./input.txt', 'utf-8');

var data = input.split("\r\n");

var stacks = [];
var stacksIndex = {};
var index = 0;
data.every(element => {
    index++;
    if (element == '') return false;

    element.split('').forEach((char, index) => {
        if (isLetter(char)) {
            stacks.push({ index: element.indexOf(char, index), char: char });
        }
        else if (isNumber2(char)) {
            stacksIndex[char] = element.indexOf(char);
        }
    });

    return true;
});

const result = groupBy(stacks, 'index', (item) => item.char);

data.slice(index).forEach(element => {
    var move = [];
    element.split(' ').forEach(char => {
        if (isNumber2(char)) {
            move.push(char);
        }
    });

    var [amount, from, to] = move;

    Part1(amount, from, to);
    // Part2(amount, from, to);
});

var topOfEachStack = [];

Object.entries(result).forEach(element => {
    topOfEachStack.push(element[1][0]);
});

console.log(topOfEachStack.join(''));

function Part1(amount, from, to) {
    for (let index = 0; index < amount; index++) {
        if (result[stacksIndex[from]] && result[stacksIndex[from]].length > 0) {
            var item = result[stacksIndex[from]].shift();
            result[stacksIndex[to]] = [item, ...result[stacksIndex[to]]];
        }
    }
}

function Part2(amount, from, to) {
    var acc = [];
    for (let index = 0; index < amount; index++) {

        if (result[stacksIndex[from]] && result[stacksIndex[from]].length > 0) {
            acc.push(result[stacksIndex[from]].shift());
        }

    }
    result[stacksIndex[to]] = [...acc, ...result[stacksIndex[to]]];
}
