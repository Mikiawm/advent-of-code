const fs = require('fs');
const helpers = require('../helpers');

var input = fs.readFileSync('./input.txt', 'utf-8');

var data = input.split("\r\n");
var result = 0;
data.forEach(element => {
    var [f, r] = element.split(',');

    var [fstart, fend] = f.split('-');
    var [rstart, rend] = r.split('-');
    var f_Range = [...helpers.range(fstart, fend).values()];
    var r_Range = [...helpers.range(rstart, rend).values()];

    if (f_Range.some(x => r_Range.includes(x)) || r_Range.some(x => f_Range.includes(x))) {
        result++;
    }
});





console.log(result);