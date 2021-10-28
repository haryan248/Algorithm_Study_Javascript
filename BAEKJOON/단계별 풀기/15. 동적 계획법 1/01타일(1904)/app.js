const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let number = +input.shift();
let dp = new Array(number);
dp[0] = 1;
dp[1] = 2;
for (let i = 2; i < number; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}
console.log(dp[number - 1]);
