const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map((i) => Number(i));
const INF = Number.MAX_VALUE;
let graph = new Array(N + 1).fill(0).map(() => new Array(N + 1).fill(INF));

for (let i = 0; i < N + 1; i++) {
    for (let j = 0; j < N + 1; j++) {
        if (i === j) {
            graph[i][j] = 0;
        }
    }
}

for (let i = 1; i < M + 1; i++) {
    let [a, b] = input[i].split(" ").map((i) => Number(i));
    graph[a][b] = 1;
    graph[b][a] = 1;
}
const [X, K] = input[M].split(" ").map((i) => Number(i));

for (let k = 1; k < N + 1; k++) {
    for (let i = 1; i < N + 1; i++) {
        for (let j = 1; j < N + 1; j++) {
            graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
        }
    }
}

console.log(graph[1][K] + graph[K][X]);
