const fs = require("fs");
const { exit } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const INF = Number.MAX_VALUE;

const N = Number(input[0]);
const M = Number(input[1]);
let graph = new Array(N + 1).fill(0).map(() => new Array(N + 1).fill(INF));

// 대각선의 비용은 0으로 초기화
// 자기자신으로 가는 비용은 없으므로
for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < N + 1; j++) {
        if (i === j) {
            graph[i][j] = 0;
        }
    }
}
for (let i = 2; i < M + 2; i++) {
    let [a, b, c] = input[i].split(" ").map((i) => Number(i));
    graph[a][b] = Math.min(graph[a][b], c);
}

for (let k = 1; k < N + 1; k++) {
    for (let i = 1; i < N + 1; i++) {
        for (let j = 1; j < N + 1; j++) {
            graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
        }
    }
}

let result = "";
for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < N + 1; j++) {
        if (graph[i][j] === INF) {
            result += "0 ";
        } else {
            result += graph[i][j] + " ";
        }
    }
    result += "\n";
}
console.log(result);
