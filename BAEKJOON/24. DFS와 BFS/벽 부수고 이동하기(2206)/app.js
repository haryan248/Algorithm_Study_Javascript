const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map((i) => Number(i));
let map = [];
const visited = new Array(2).fill(0).map(() => new Array(N).fill(0).map(() => new Array(M).fill(0)));

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

for (let i = 1; i < N + 1; i++) {
    map.push(
        input[i]
            .trim()
            .split("")
            .map((i) => Number(i))
    );
}

function bfs(x, y, wall) {
    let queue = [];
    queue.push([wall, x, y]);
    let nextX;
    let nextY;
    while (queue.length !== 0) {
        let [wall, nowX, nowY] = queue.shift();

        if (nowX === N - 1 && nowY === M - 1) {
            console.log(visited[wall][nowX][nowY]);
            return;
        }

        for (let i = 0; i < 4; i++) {
            nextX = nowX + dx[i];
            nextY = nowY + dy[i];

            if (nextX < 0 || nextX >= N || nextY < 0 || nextY >= M) continue;
            // 벽이 아니라면
            if (map[nextX][nextY] === 0 && visited[wall][nextX][nextY] === 0) {
                visited[wall][nextX][nextY] = visited[wall][nowX][nowY] + 1;
                queue.push([wall, nextX, nextY]);
            }
            // 만약 벽을 만나면
            else if (map[nextX][nextY] === 1 && wall === 0 && visited[wall + 1][nextX][nextY] === 0) {
                visited[wall + 1][nextX][nextY] = visited[wall][nowX][nowY] + 1;
                queue.push([wall + 1, nextX, nextY]);
            }
        }
    }
    console.log(-1);
}
visited[0][0][0] = 1;

bfs(0, 0, 0);
console.log(visited);
