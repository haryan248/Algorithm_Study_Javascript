const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map((i) => Number(i));
const M = Number(input[2]);
const dp = new Array(N).fill(0).map(() => new Array(N).fill(0));
console.log(arr);
for (let i = 0; i < N; i++) {
    // console.log(`i: ${i}`);
    // 오른쪽 대각선 탐색
    for (let j = 0; j < N - i; j++) {
        let y = j + i;
        if (arr[j] !== arr[y]) continue;
        // 길이가 1일떄
        if (j === y) dp[j][y] = 1;
        // 길이가 2일때
        else if (y - j === 1) {
            dp[j][y] = 1;
        } else {
            // 나머지는 가운데
            if (dp[j + 1][y - 1] === 1) {
                dp[j][y] = 1;
            }
        }
    }
}
// console.log(dp);
let result = "";
for (let i = 3; i < M + 3; i++) {
    const [S, E] = input[i].split(" ").map((i) => Number(i));
    result += dp[S - 1][E - 1];
}
console.log(result.split("").join("\n"));
