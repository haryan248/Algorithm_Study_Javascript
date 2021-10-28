const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const number = +input.shift();
let testcaseArray = input[0].split(" ").map((item) => +item);
console.log(testcaseArray);
let dp = [...testcaseArray];
for (let i = 1; i < number; i++) {
    dp[i] = Math.max(dp[i], dp[i - 1] + dp[i]);
}
console.log(Math.max(...dp));
