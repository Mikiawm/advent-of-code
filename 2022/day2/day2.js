// A, X Rock, 1 point
// B, Y Paper, 2 points
// C, Z Scissors, 3 points

var points = {
    'A': 1,
    'X': 1,
    'B': 2,
    'Y': 2,
    'C': 3,
    'Z': 3
};

const fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf-8');

var data = input.split("\r\n");
console.log(Part1());
console.log(Part2(data));

function Part1() {

    // 0 = Lost, 3 = Draw, 6 = Win
    var results = {
        'A Z': 0,
        'B X': 0,
        'C Y': 0,
        'C Z': 3,
        'B Y': 3,
        'A X': 3,
        'A Y': 6,
        'B Z': 6,
        'C X': 6
    }

    var result = 0;

    data.forEach(element => {
        var roundResult = 0;
        roundResult += results[element];
        let [, p2] = element.split(" ");
        roundResult += points[p2];
        result += roundResult;
    });


    return result;
}

function Part2(data) {
    
    // A, X Rock, 1 point
    // B, Y Paper, 2 points
    // C, Z Scissors, 3 points
    // X lose, Y draw, and Z win
    var correctResults = {
        'A Z': 'A B',
        'B X': 'B A',
        'C Y': 'C C',
        'A X': 'A C',
        'B Y': 'B B',
        'C Z': 'C A',
        'A Y': 'A A',
        'B Z': 'B C',
        'C X': 'C B'
    };

    var realResults = {
        'A C': 0,
        'B A': 0,
        'C B': 0,
        'C C': 3,
        'B B': 3,
        'A A': 3,
        'A B': 6,
        'B C': 6,
        'C A': 6
    };

    var result = 0;
    data.forEach(element => {
        var roundResult = 0;
        element = correctResults[element];
        roundResult += realResults[element];
        let [, p2] = element.split(" ");
        roundResult += points[p2];

        result += roundResult;
    });
    return result;
}

