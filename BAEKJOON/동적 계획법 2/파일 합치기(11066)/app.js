const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = Number(input.shift());
for (let i = 0; i < T; i++) {
    let k = Number(input.shift());
    let arr = input
        .shift()
        .split(" ")
        .map((i) => Number(i));
    solution(k, arr);
}

//DP[i][j]는 i에서 j까지 합하는데 필요한 최소 비용이 된다.

function solution(n, arr) {
    let sum = new Array(n + 1).fill(0);
    arr.unshift(0);
    for (let i = 1; i < n + 1; i++) {
        sum[i] = sum[i - 1] + arr[i];
    }
    let dp = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

    let min = 0;
    for (let d = 1; d < n; d++) {
        for (let x = 1; x + d <= n; x++) {
            let y = x + d;
            dp[x][y] = 987654321;
            for (let t = x; t < y; t++) {
                dp[x][y] = Math.min(dp[x][y], dp[x][t] + dp[t + 1][y] + sum[y] - sum[x - 1]);
            }
        }
    }
    console.log(dp[1][n]);
}
