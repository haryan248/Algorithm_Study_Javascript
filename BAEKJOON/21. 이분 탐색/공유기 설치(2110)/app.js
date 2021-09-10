const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, c] = input[0].split(" ").map(Number);
let testcaseArray = [];
for (let i = 1; i <= n; i++) {
    testcaseArray.push(Number(input[i].trim()));
}
testcaseArray.sort((a, b) => a - b);
console.log(testcaseArray);
// 1, 2, 4, 8, 9
// 1,    4, 8