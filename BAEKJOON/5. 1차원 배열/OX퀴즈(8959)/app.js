const { reverse } = require("dns");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let number = Number(input[0]);

for (let i = 1; i <= number; i++) {
    let result = 0;
    let tempScore = 0;
    for (let j = 0; j < input[i].length - 1; j++) {
        if (input[i][j] == "O") {
            tempScore++;
        } else {
            tempScore = 0;
        }
        result += tempScore;
    }
    console.log(result);
}
