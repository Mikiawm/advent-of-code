const fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf-8');

var data = input.split("\r\n");

var hPos = { x: 0, y: 0 };
var tPos = { x: 0, y: 0 };
var tPos = { x: 0, y: 0 };

var tPosLst = [JSON.stringify(tPos)];

const isAdjacent = (h, t) => {
    const isAdjacent = [
        { x: t.x, y: t.y }, // Same 
        { x: t.x, y: t.y + 1 }, // Top
        { x: t.x, y: t.y - 1 }, // Bottom
        { x: t.x - 1, y: t.y }, // Left
        { x: t.x + 1, y: t.y }, // Right
        { x: t.x - 1, y: t.y - 1 }, // Top left
        { x: t.x + 1, y: t.y - 1 }, // Bottom left
        { x: t.x - 1, y: t.y + 1 }, // Top right
        { x: t.x + 1, y: t.y + 1 } // Bottom right
    ].some(element => element.x == h.x && element.y == h.y)

    return isAdjacent;
};

data.forEach(element => {
    var [d, v] = element.split(" ");
    for (let index = 0; index < v; index++) {
        if (d == "R") {
            hPos.x += 1;
            if (!isAdjacent(hPos, tPos)) {
                tPos.x = hPos.x - 1;
                tPos.y = hPos.y;
            }
        } else if (d == "L") {
            hPos.x -= 1;
            if (!isAdjacent(hPos, tPos)) {
                tPos.x = hPos.x + 1;
                tPos.y = hPos.y;
            }
        } else if (d == "U") {
            hPos.y += 1;
            if (!isAdjacent(hPos, tPos)) {
                tPos.y = hPos.y - 1;
                tPos.x = hPos.x;
            }
        } else if (d == "D") {
            hPos.y -= 1;
            if (!isAdjacent(hPos, tPos)) {
                tPos.y = hPos.y + 1;
                tPos.x = hPos.x;
            }
        }
        tPosLst.push(JSON.stringify(tPos));
    }

});

console.log(new Set(tPosLst).size);