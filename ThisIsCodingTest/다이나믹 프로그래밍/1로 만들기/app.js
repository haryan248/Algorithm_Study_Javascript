const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const X = Number(input[0]);
let dp = new Array(X + 1).fill(0);
dp[1] = 0;
dp[2] = 1;
dp[3] = 1;

for (let i = 4; i <= X; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 5 === 0) {
        dp[i] = Math.min(dp[i], dp[parseInt(i / 5)] + 1);
    }
    if (i % 3 === 0) {
        dp[i] = Math.min(dp[i], dp[parseInt(i / 3)] + 1);
    }
    if (i % 2 === 0) {
        dp[i] = Math.min(dp[i], dp[parseInt(i / 2)] + 1);
    }
}
console.log(dp);
console.log(dp[X]);
