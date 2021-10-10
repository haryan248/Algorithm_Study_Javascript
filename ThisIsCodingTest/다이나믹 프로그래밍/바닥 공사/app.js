const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
let dp = new Array(N).fill(0);
dp[0] = 1;
dp[1] = 3;
for (let i = 2; i < N; i++) {
    dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 796796;
}
console.log(dp[N - 1]);
