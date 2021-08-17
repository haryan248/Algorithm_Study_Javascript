const { reverse } = require("dns");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let number = Number(input[0]);
for (let i = 1; i <= number; i++) {
    let cases = input[i].split(" ");
    let scoreCaseCount = Number(cases[0]);
    let sum = 0;
    arry = [...cases];
    sum = arry.splice(1).reduce((sum, curr) => sum + Number(curr), 0);
    let reverage = sum / scoreCaseCount;
    let highScoreStudent = 0;
    for (let k = 1; k <= scoreCaseCount; k++) {
        if (reverage < cases[k]) {
            highScoreStudent++;
        }
    }

    result = ((highScoreStudent / scoreCaseCount) * 100).toFixed(3);
    console.log(`${result}%`);
}
