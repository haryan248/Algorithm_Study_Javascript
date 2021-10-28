const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [M, N] = input[0].split(" ").map((i) => Number(i));
let testcaseArray = [];
for (let i = 1; i <= M; i++) {
    let temp = input[i].split(" ").map((i) => Number(i));
    testcaseArray.push(temp);
}
let dp = new Array(M).fill(-1).map(() => new Array(N).fill(-1));
let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];

function dfs(x, y) {
    if (x === M - 1 && y === N - 1) {
        return 1;
    }
    if (dp[x][y] !== -1) {
        return dp[x][y];
    }
    dp[x][y] = 0;
    for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
            if (testcaseArray[nx][ny] < testcaseArray[x][y]) {
                dp[x][y] += dfs(nx, ny);
            }
        }
    }
    return dp[x][y];
}
// 왼쪽 대각선 탐색
// for (let SPIN = 0; SPIN < M + N - 1; SPIN++) {
//     console.log(`SPIN : ${SPIN}`);
//     for (let i = 0; i < M; i++) {
//         let j = SPIN - i; //열
//         if (j >= 0 && j < N) {

//         }
//     }
// }

console.log(dfs(0, 0));
