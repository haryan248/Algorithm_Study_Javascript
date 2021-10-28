const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M, V] = input[0].split(" ").map((i) => Number(i));
let graph = new Array(N + 1).fill(0).map(() => new Array(N + 1).fill(0));
let visited = new Array(N + 1).fill(0);
let visited2 = new Array(N + 1).fill(0);

for (let i = 1; i < M + 1; i++) {
    let [a, b] = input[i].split(" ").map((i) => Number(i));
    graph[a][b] = 1;
    graph[b][a] = 1;
}
function dfs(start, result1) {
    visited[start] = 1;
    result1.push(start);
    for (let i = 1; i < N + 1; i++) {
        if (graph[start][i] === 1 && visited[i] === 0) {
            dfs(i, result1);
        }
    }
}

function bfs(start, result2) {
    let queue = [];
    queue.push(start);
    visited2[start] = 1;
    while (queue.length !== 0) {
        let dequeue = queue.shift();
        result2.push(dequeue);
        for (let i = 1; i < N + 1; i++) {
            if (graph[dequeue][i] === 1 && visited2[i] === 0) {
                queue.push(i);
                visited2[i] = 1;
            }
        }
    }
}

let result1 = [];
let result2 = [];

dfs(V, result1);
bfs(V, result2);

console.log(result1.join(" "));
console.log(result2.join(" "));
