const fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf-8');

var data = input.split("\r\n");

var objs = [];
var curObj = {};

data.forEach(element => {
    var cmd = element.split(" ");
    if (element.startsWith("$")) {
        if (cmd[1] == "cd") {
            if (cmd[2] == "..") {
                var newCurObj = objs.find(x => x.name == curObj.parent);
                curObj = newCurObj;
            }
            else if (cmd[2] == "/") {
                var obj = {
                    name: "/",
                    children: [],
                    val: 0,
                    parent: null,
                    dir: true
                }
                curObj = obj;
                objs.push(obj);
            }
            // cmd[2] == dir name 
            else {
                curObj = curObj.children.find(x => x.name == curObj.name + "/" + cmd[2]);
            }
        }
    } else {

        if (cmd[0] == "dir") {
            var obj = {
                name: curObj.name + "/" + cmd[1],
                children: [],
                val: 0,
                parent: curObj.name,
                dir: true
            }
            objs.push(obj);
            curObj.children.push(obj)
        } else {
            var obj = {
                name: curObj.name + "/" + cmd[1],
                children: [],
                val: +cmd[0],
                parent: curObj.name,
                dir: false
            }
            objs.push(obj);
            curObj.children.push(obj)
        }
    }

});

objs.reverse().forEach(element => {
    if(element.parent != null) {
        var temp = objs.find(x => x.name == element.parent);
        temp.val += element.val;
        
    }

});

var sums = 0;
objs.forEach(element => {
    if(element.dir && element.val < 100000) {
        sums += element.val; 
    }
});

console.log("Part1: " + sums);

var biggestDir = objs.find(x => x.name == "/").val;

var freeSpace = 70000000 - biggestDir;
var spaceLeftForUpdate = 30000000 - freeSpace;

var possibleDeletes = [];
objs.forEach(element => {
    if(element.dir && element.val > spaceLeftForUpdate) {
        possibleDeletes.push(element.val); 
    }
});


compareNumbers = (a, b) => +a - +b;


console.log("Part2: " + possibleDeletes.sort(compareNumbers)[0]);