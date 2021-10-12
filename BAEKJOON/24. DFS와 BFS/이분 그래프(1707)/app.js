const fs = require("fs");
const { exit } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = Number(input[0]);
let pointer = 1;
for (let i = 0; i < T; i++) {
    let [V, E] = input[pointer++].split(" ").map((i) => Number(i));
    let graph = new Array(V).fill(0).map(() => new Array(0));
    // [ <1 empty item>, [ 3 ], [ 3 ], [ 1, 2 ] ]
    for (let j = pointer; j < E + pointer; j++) {
        let [a, b] = input[j].split(" ").map((i) => Number(i));
        graph[a - 1].push(b - 1);
        graph[b - 1].push(a - 1);
    }
    pointer += E;

    solution(V, graph);
}

function solution(V, graph) {
    let visited = new Array(V).fill(0);
    let flag = true;

    for (let i = 0; i < V; i++) {
        if (visited[i] === 0) {
            visited[i] = 1;
            let result = bfs(i, visited, graph);
            if (result === false) {
                flag = false;
                break;
            }
        }
    }
    console.log(flag === false ? "NO" : "YES");
}
function bfs(start, visited, graph) {
    const queue = [];
    queue.push(start);
    let bipatite = true;
    while (queue.length !== 0) {
        // 현재 정점
        const cur = queue.shift();
        // 현재 정점과 연결되어있는 정점들 탐색
        graph[cur].forEach((next) => {
            // 방문하지 않은 정점이면 큐에 삽입
            if (visited[next] === 0) {
                // 현재 노드와 다른 그룹 지정
                visited[next] = visited[cur] * -1;
                queue.push(next);
            } else if (visited[cur] === visited[next]) {
                //이미 방문한 경우, 동일한 그룹에 속하면 False
                bipatite = false;
            }
        });
    }
    return bipatite;
}
