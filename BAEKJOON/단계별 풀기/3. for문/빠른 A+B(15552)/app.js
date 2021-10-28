const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let max = Number(input[0]);
let answer = "";

for (let i = 1; i <= max; i++) {
    let num = input[i].split(" ");
    answer += Number(num[0]) + Number(num[1]) + "\n";
}

console.log(answer);
