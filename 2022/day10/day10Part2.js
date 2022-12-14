const fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf-8');

var data = input.split("\r\n");
data = [...data, ...data, ...data, ...data, ...data, ...data, ...data];

var registry = 1;
var cycle = 1;
var crt = "";

data.forEach(element => {
    if (cycle > 240) return;
    var [instr, val] = element.split(" ");
    if (instr == "noop") {
        
        if (cycle % 40 >= registry && cycle % 40 <= registry + 2) {
            crt += "#";
        }
        else {
            crt += ".";
        }
        cycle++;
    }
    else {
        
        if (cycle % 40 >= registry && cycle % 40 <= registry + 2) {
            crt += "#";
        } else {
            crt += ".";
        }
        cycle++;
        
        if (cycle % 40 >= registry && cycle % 40 <= registry + 2) {
            crt += "#";
        } else {
            crt += ".";
        }
        cycle++;
        registry += +val;
    }

});

const chunkLength = 40;

// Split the string into an array of chunks
const chunks = [];
let index = 0;
while (index < crt.length) {
  chunks.push(crt.slice(index, index + chunkLength));
  index += chunkLength;
}

console.log(chunks);