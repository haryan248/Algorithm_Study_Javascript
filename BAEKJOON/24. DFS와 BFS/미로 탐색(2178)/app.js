const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map((i) => Number(i));
let arr = [];
let visited = new Array(N).fill(0).map(() => new Array(M).fill(0));
for (let i = 1; i < N + 1; i++) {
    arr.push(input[i].split("").map((i) => Number(i)));
}
// 상, 하, 좌, 우
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let result = [];
function bfs(x, y) {
    let queue = [];
    queue.push([x, y]);
    visited[x][y] = 1;
    while (queue.length !== 0) {
        let [row, col] = queue.shift();
        for (let i = 0; i < 4; i++) {
            let temp_row = row + dx[i];
            let temp_col = col + dy[i];

            if (temp_row < 0 || temp_row >= N || temp_col < 0 || temp_col >= M) {
                continue;
            }

            if (arr[temp_row][temp_col] === 1 && visited[temp_row][temp_col] === 0) {
                visited[temp_row][temp_col] = visited[row][col] + 1;
                queue.push([temp_row, temp_col]);
            }
        }
    }
}

bfs(0, 0, 1);
console.log(visited[N - 1][M - 1]);
