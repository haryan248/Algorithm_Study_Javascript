const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const node = Number(input[0]);
const edge = Number(input[1]);
let graph = new Array(node + 1).fill(0).map(() => new Array(node + 1).fill(0));
let visited = new Array(node + 1).fill(false);
for (let i = 2; i < edge + 2; i++) {
    let [a, b] = input[i].split(" ").map((i) => Number(i));
    graph[a][b] = 1;
    graph[b][a] = 1;
}
let result = [];
function dfs(v) {
    visited[v] = true;
    result.push(v);
    for (let j = 0; j <= node; j++) {
        if (visited[j] === false && graph[v][j] === 1) {
            dfs(j);
        }
    }
}
dfs(1);
console.log(result.filter((i) => i !== 1).length);
