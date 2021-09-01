const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let number = +input.shift();
let testcaseArray = input[0].split(" ").map((item) => +item);
testcaseArray.sort((next, now) => next - now);
console.log(testcaseArray[0] * testcaseArray[number - 1]);
