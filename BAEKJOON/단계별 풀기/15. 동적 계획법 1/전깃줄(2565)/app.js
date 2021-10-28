const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let number = +input.shift();
let testcaseArray = [];

for (let i = 0; i < number; i++) {
    let temp = input[i]
        .trim()
        .split(" ")
        .map((item) => +item);
    testcaseArray.push(temp);
}
testcaseArray.sort((next, now) => next[0] - now[0]);
let dp = new Array(number).fill(1);
for (let i = 0; i < testcaseArray.length; i++) {
    for (let j = 0; j < i; j++) {
        if (testcaseArray[i][1] > testcaseArray[j][1]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}
console.log(number - Math.max(...dp));
