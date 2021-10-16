const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [V, E] = input[0].split(" ").map((i) => Number(i));
const INF = Number.MAX_VALUE;
let graph = new Array(V + 1).fill(0).map(() => new Array(V + 1).fill(INF));

for (let i = 1; i < E + 1; i++) {
    let [a, b, c] = input[i].split(" ").map((i) => Number(i));
    graph[a][b] = c;
}
for (let k = 1; k < V + 1; k++) {
    for (let i = 1; i < V + 1; i++) {
        for (let j = 1; j < V + 1; j++) {
            graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
        }
    }
}
console.log(graph);
let result = INF;
for (let i = 1; i < V + 1; i++) {
    result = Math.min(result, graph[i][i]);
}

console.log(result === INF ? -1 : result);
[
    [1.7976931348623157e308, 1, 3],
    [1.7976931348623157e308, 3, 2],
    [1.7976931348623157e308, 1, 3],
];
