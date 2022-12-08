const fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf-8');

var treeGrid = [];
var visibleTrees = [];

var data = input.split("\r\n");

data.forEach((row, y) => {
    treeGrid[y] = [];
    row.split("").forEach((element, x) => {
        treeGrid[y][x] = element;
    });
});

// console.log(treeGrid);

// Part 1
for (var y = 0; y < treeGrid.length; y++) {
    for (var x = 0; x < treeGrid[y].length; x++) {
        var element = +treeGrid[y][x];

        var column = [];
        for (const row of treeGrid) {
            column.push(row[x]);
        }

        if (element > Math.max(...treeGrid[y].slice(0, x))) {
            visibleTrees.push(element)
        }
        else if (element > Math.max(...treeGrid[y].slice(x + 1))) {
            visibleTrees.push(element)
        } else if (element > Math.max(...column.slice(0, y))) {
            visibleTrees.push(element)
        } else if (element > Math.max(...column.slice(y + 1))) {
            visibleTrees.push(element)
        }
    }
};

var results = [];

// Part 2
for (var y = 0; y < treeGrid.length; y++) {
    for (var x = 0; x < treeGrid[y].length; x++) {
        var element = +treeGrid[y][x];

        var column = [];
        for (const row of treeGrid) {
            column.push(row[x]);
        }

        var leftArr = [...treeGrid[y].slice(0, x)].reverse();
        var rightArr = [...treeGrid[y].slice(x + 1)];
        var upArr = [...column.slice(0, y)].reverse();
        var downArr = [...column.slice(y + 1)];

        let scenicArr = [getDistance(leftArr, element), getDistance(rightArr, element), getDistance(upArr, element), getDistance(downArr, element)];

        results.push(scenicArr.reduce((acc, val) => acc * val, 1));
    };
}

console.log("Part1: " + Math.max(...results));
console.log("Part2: " + visibleTrees.length);

function getDistance(arr, element) {
    let firstGT = arr.indexOf(arr.find(x => x >= element));
    if (firstGT == -1) {
        firstGT = arr.length;
    } else
        firstGT += 1;
    return firstGT;
}
