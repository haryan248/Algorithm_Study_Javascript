const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map((i) => Number(i));
let dp = new Array(N).fill(0);
dp[0] = arr[1];
dp[1] = Math.max(arr[0], arr[1]);
for (let i = 2; i < N; i++) {
    dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 1]);
}
console.log(dp[N - 1]);
