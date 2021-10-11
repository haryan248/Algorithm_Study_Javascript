const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, K] = input[0].split(" ").map((i) => Number(i));
let visited = new Array(100002).fill(0);
let dx = [-1, 1, 2];
let pointer = 0;
function bfs(x) {
    let next;
    let queue = [];
    queue.push(x);
    visited[x] = 1;

    while (true) {
        if (queue.length === 0) break;
        let now = queue[pointer++];
        if (now === undefined) break;
        for (let i = 0; i < 3; i++) {
            if (i == 2) {
                next = now * dx[i];
            } else {
                next = now + dx[i];
            }
            if (next < 0 || next >= 100002) {
                continue;
            }
            if (visited[next] === 0) {
                visited[next] = visited[now] + 1;
                queue.push(next);
            }
        }
    }
}

bfs(N);
console.log(visited[K] - 1);
