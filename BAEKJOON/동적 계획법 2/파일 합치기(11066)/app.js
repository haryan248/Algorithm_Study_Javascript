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

// dp[i][j]는 i에서 j까지 합하는데 필요한 최소 비용이 된다.
// (10, 20, 30) => min[(1,2) + ((1,2), 3) + (1 + 2 + 3) or (2, 3) + (1 , (2, 3)) + (1, 2, 3)]
// 점화식 : DP[i][j] = DP[i][k] + DP[k+1][j] + sum(A[i]~A[j])
// (i ~ k)까지 비용의 합과 그 다음 (k+1지점부터 마지막 지점)까지의 합

function solution(n, arr) {
    let sum = new Array(n).fill(0);
    sum[0] = arr[0];
    for (let i = 1; i < n; i++) {
        sum[i] = sum[i - 1] + arr[i];
    }
    sum.unshift(0);
    let dp = Array.from(Array(n), () => Array(n).fill(0));

    for (let i = 1; i < n; i++) {
        // n-1의 횟수만큼 반복
        // i : 1 ~ n
        console.log(`i : ${i}`);
        for (let j = 0; j < n - i; j++) {
            // 대각선 탐색
            let y = j + i;
            console.log(j, y);
            dp[j][y] = Number.MAX_SAFE_INTEGER;
            let tmp = sum[y + 1] - sum[j]; // (arr[j] ~ arr[y+1]) 까지의 합
            // python : sum(pages[j: y + 1])
            for (let k = j; k < y; k++) {
                dp[j][y] = Math.min(dp[j][y], dp[j][k] + dp[k + 1][y] + tmp);
            }
        }
    }
    console.log(dp[0][n - 1]);
}
