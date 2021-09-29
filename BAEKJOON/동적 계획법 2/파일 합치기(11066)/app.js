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

function solution(k, arr) {
    let Sum = new Array(k + 1).fill(0);
    arr.unshift(0);
    for (let i = 1; i < k + 1; i++) {
        Sum[i] = Sum[i - 1] + arr[i];
    }
    let dp = Array.from(Array(k + 1), () => Array(k + 1).fill(0));

    console.log(Sum);
    let min = 0;

    for (let i = 2; i < k + 1; i++) {
        for (let j = 1; j < k + 2 - i; j++) {
            for (let k = 0; k < i - 1; k++) {
                min = Math.min(dp[j][j + k] + dp[j + k + 1][j + i - 1]);
                // dp[j][j + i - 1] = min + (Sum[j + i - 1] - Sum[j - 1]);
            }
            console.log(min);
        }
    }
    // console.log(dp);
    // console.log(dp[1][k]);
    // console.log(k, arr);
}
