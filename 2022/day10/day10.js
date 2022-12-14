const fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf-8');

var data = input.split("\r\n");
data = [...data, ...data, ...data, ...data, ...data, ...data, ...data];

var cycle = 0;
var curTargetCycle = 20;
var registry = [1];
var str = [];
const sum = (numbers) => numbers.reduce((total, currentValue) => {
    return total + currentValue;
  }, 0);

data.forEach(element => {
    if(curTargetCycle > 220) return;
    

    var [instr, val] = element.split(" ");
    if (instr == "noop") {
        if (cycle % curTargetCycle === 0 && cycle != 0) {
            console.log(registry);
            str.push(curTargetCycle * sum(registry));
            curTargetCycle += 40;
        }
        cycle++;
    }
    else {
        cycle++;
        if (cycle % curTargetCycle === 0) {
            str.push(curTargetCycle * sum(registry));
            curTargetCycle += 40;
        }
        
        cycle++;
        if (cycle % curTargetCycle === 0) {
            str.push(curTargetCycle * sum(registry));
            
            curTargetCycle += 40;
        }
        registry.push(+val);
        
    }

});

console.log(sum(str));