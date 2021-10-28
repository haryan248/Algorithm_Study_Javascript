const fs = require("fs");
// split 조절
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let number = input[0];
let testcaseArray = [];
for (let i = 0; i < number.length; i++) {
    testcaseArray.push(number[i]);
}
console.log(testcaseArray.sort().reverse().join(""));
