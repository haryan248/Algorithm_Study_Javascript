const fs = require("fs");
const { exit } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, E] = input[0].split(" ").map((i) => Number(i));
let graph = new Array(N + 1).fill(0).map(() => new Array(N + 1).fill(0));
const INF = Number.MAX_VALUE;
for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < N + 1; j++) {
        graph[i][j] = INF;
        if (i === j) {
            graph[i][j] = 0;
        }
    }
}
for (let i = 1; i < E + 1; i++) {
    let [a, b, c] = input[i].split(" ").map((i) => Number(i));
    graph[a][b] = c;
    graph[b][a] = c;
}
const [v1, v2] = input[E + 1].split(" ").map((i) => Number(i));

for (let k = 1; k < N + 1; k++) {
    for (let i = 1; i < N + 1; i++) {
        for (let j = 1; j < N + 1; j++) {
            graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
        }
    }
}

// if (graph[1][v1] >= INF || graph[v1][v2] >= INF || graph[v2][N] >= INF || graph[1][v2] >= INF || graph[v2][v1] >= INF || graph[v1][N] >= INF) {
//     console.log(-1);
//     exit(0);
// }
let result = Math.min(graph[1][v1] + graph[v1][v2] + graph[v2][N], graph[1][v2] + graph[v2][v1] + graph[v1][N]);
console.log(result >= INF ? -1 : result);
