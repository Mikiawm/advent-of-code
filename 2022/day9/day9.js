const fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf-8');

var data = input.split("\r\n");

var rope = [];

// Solve part1
var part1 = 2;

// Solve part2
var part2 = 10;

for (let i = 0; i < part2; i++) {
    rope.push([0, 0]);
}

var tPosLst = [JSON.stringify(rope[0])];

const isAdjacent = (h, t) => {
    const isAdjacent = [
        { x: t[0], y: t[1] }, // Same 
        { x: t[0], y: t[1] + 1 }, // Top
        { x: t[0], y: t[1] - 1 }, // Bottom
        { x: t[0] - 1, y: t[1] }, // Left
        { x: t[0] + 1, y: t[1] }, // Right
        { x: t[0] - 1, y: t[1] - 1 }, // Top left
        { x: t[0] + 1, y: t[1] - 1 }, // Bottom left
        { x: t[0] - 1, y: t[1] + 1 }, // Top right
        { x: t[0] + 1, y: t[1] + 1 } // Bottom right
    ].some(element => element.x == h[0] && element.y == h[1])

    return isAdjacent;
}


data.forEach(element => {
    var [d, v] = element.split(" ");
    for (let index = 0; index < v; index++) {
        rope.forEach((part, ropeIndex) => {
            if (ropeIndex == 0) {
                rope[0] = moveHead(part);
            }
            else if (ropeIndex == rope.length - 1) {
                var head = rope[ropeIndex - 1];
                var cur = rope[ropeIndex];
                rope[ropeIndex] = moveTail(head, cur);
                tPosLst.push(JSON.stringify(rope[ropeIndex]))
            }
            else {
                var head = rope[ropeIndex - 1];
                var cur = rope[ropeIndex];
                rope[ropeIndex] = moveTail(head, cur);
            }
        });
    }


    function moveHead(hPos) {
        if (d == "R") {
            return [hPos[0] += 1, hPos[1]];
        } else if (d == "L") {
            return [hPos[0] -= 1, hPos[1]]
        } else if (d == "U") {
            return [hPos[0], hPos[1] += 1]
        } else if (d == "D") {
            return [hPos[0], hPos[1] -= 1]
        }
    }

    function moveTail(h, t) {
        if (!isAdjacent(h, t)) {
            var xDif = h[0] - t[0];
            if (xDif >= 1) {
                xDif = 1;
            }
            else if (xDif == 0) {
                xDif = 0;
            }
            else {
                xDif = -1;
            }
            var yDif = h[1] - t[1];
            if (yDif >= 1) {
                yDif = 1;
            }
            else if (yDif == 0) {
                yDif = 0;
            }
            else {
                yDif = -1;
            }

            return [t[0] + xDif, t[1] + yDif]
        }
        return t;
    }
});

console.log(new Set(tPosLst).size);