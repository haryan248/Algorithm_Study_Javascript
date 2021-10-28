const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = Number(input[0]);
let pointer = 1;

for (let i = 0; i < T; i++) {
    let [M, N, K] = input[pointer++].split(" ").map((i) => Number(i));
    let arr = [];
    for (let j = pointer; j < K + pointer; j++) {
        arr.push(input[j].split(" ").map((i) => Number(i)));
    }
    solution(M, N, arr);
    pointer += K;
}
function solution(M, N, arr) {
    let cabbage = new Array(M).fill(0).map(() => new Array(N).fill(0));

    for (let i = 0; i < arr.length; i++) {
        cabbage[arr[i][0]][arr[i][1]] = 1;
    }

    let result = 0;
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (dfs(i, j, M, N, cabbage) === true) {
                result++;
            }
        }
    }
    console.log(result);
}

function dfs(x, y, M, N, cabbage) {
    if (x < 0 || x >= M || y < 0 || y >= N) {
        return false;
    }
    if (cabbage[x][y] === 1) {
        cabbage[x][y] = 0;
        dfs(x - 1, y, M, N, cabbage);
        dfs(x + 1, y, M, N, cabbage);
        dfs(x, y - 1, M, N, cabbage);
        dfs(x, y + 1, M, N, cabbage);
        return true;
    }
    return false;
}
