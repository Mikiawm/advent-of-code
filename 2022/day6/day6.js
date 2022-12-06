const fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf-8');

// Part 1
// var len = 4;

// Part 2
var len = 14;

for (let index = 0; index < input.length - len; index++) {

    var part = input.substring(index, index + len).split('');

    var st = new Set(part);


    if (st.size === len) {
        console.log(index + len); 
        return 0;
    }
    
}