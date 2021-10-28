const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// 3 4 5 ....
let answer = 0;

let dial = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
for (let i = 0; i < input[0].length; i++) {
    for (let j = 0; j < dial.length; j++) {
        if (dial[j].indexOf(input[0][i]) != -1) {
            answer += j + 3;
        }
    }
}

console.log(answer);
