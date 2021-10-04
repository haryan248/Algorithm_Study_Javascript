const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
let testcaseArray = [];
for (let i = 0; i < N; i++) {
    let temp = input[i].split(" ").map((i) => Number(i));
    testcaseArray.push(temp);
}
let dp = new Array(N).fill(0).map(() => new Array(N).fill(0));
// dp[i][j] i 에서 j 까지 곱하는 연산의 최소값
// 점화식 DP[i][j] = min(DP[i][j], DP[i][k] + DP[k+1][j] + nums[i]*nums[k+1]*nums[j+1]) (i≤k<j)

// (5 3) (3 2) (2 6) (6 4)
// 1.

for (let i = 1; i < N; i++) {
    // n-1의 횟수만큼 반복
    // i : 1 ~ n
    // console.log(`i : ${i}`);
    for (let j = 0; j < N - i; j++) {
        // 대각선 탐색
        let y = j + i;
        // console.log(j, y);
        dp[j][y] = Number.MAX_SAFE_INTEGER;

        if (y - j === 1) {
            dp[j][y] = testcaseArray[j][0] * testcaseArray[y][0] * testcaseArray[y][1];
            continue;
        }
        // j부터 y 까지의 합,
        // j ~ y 까지 나눠보면서 가장 작은값으로 갱신
        // testcaseArray[j][0] * testcaseArray[k][1] * testcaseArray[y][1]) 는 두 부분배열의 곱셈
        for (let k = j; k < y; k++) {
            dp[j][y] = Math.min(dp[j][y], dp[j][k] + dp[k + 1][y] + testcaseArray[j][0] * testcaseArray[k][1] * testcaseArray[y][1]);
        }
    }
}
// console.log(dp);
console.log(dp[0][N - 1]);
