const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let number = +input.shift();
let testcaseArray = input[0].split(" ").map((item) => +item);
testcaseArray.sort((next, now) => next - now);
let sum = 0;
for (let i = 0; i < number; i++) {
    for (let j = 0; j <= i; j++) {
        sum += testcaseArray[j];
    }
}
console.log(sum);
