const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map((i) => Number(i));
let coins = [];
for (let i = 1; i < N + 1; i++) {
    coins.push(Number(input[i]));
}
let dp = new Array(M + 1).fill(10001);
dp[0] = 0;
for (let i = 0; i < N; i++) {
    for (let j = coins[i]; j <= M; j++) {
        dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
    }
}
console.log(dp[M] === 10001 ? -1 : dp[M]);
