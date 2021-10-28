const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map((i) => Number(i));
let tomato = [];
for (let i = 1; i < M + 1; i++) {
    tomato.push(input[i].split(" ").map((i) => Number(i)));
}

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let visited = new Array(M).fill(0).map(() => new Array(N).fill(0));
let pointer = 0;
function bfs(tomato, visited) {
    // shift() 느리므로 pointer로 변경
    let cut = tomatoLocation[pointer++];
    if (cut === undefined) return true;
    let row = cut[0];
    let col = cut[1];
    let tempRow;
    let tempCol;
    for (let i = 0; i < 4; i++) {
        tempRow = row + dx[i];
        tempCol = col + dy[i];

        if (tempRow < 0 || tempRow >= M || tempCol < 0 || tempCol >= N || tomato[tempRow][tempCol] === -1) {
            continue;
        }

        if (visited[tempRow][tempCol] === 0) {
            visited[tempRow][tempCol] = visited[row][col] + 1;
            tomatoLocation.push([tempRow, tempCol]);
        }
    }
}

let tomatoLocation = [];
let noTomatio = [];
for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
        if (tomato[i][j] === 1) {
            tomatoLocation.push([i, j]);
        }
        if (tomato[i][j] === -1) {
            noTomatio.push([i, j]);
        }
    }
}

for (let i = 0; i < tomatoLocation.length; i++) {
    visited[tomatoLocation[i][0]][tomatoLocation[i][1]] = 1;
}
let result = -1;
let flag = false;

// 한번에 여러 곳에서 bfs 돌리기
// 토마토가 여러곳에 있을 수 있기 때문에
while (true) {
    flag = bfs(tomato, visited);
    if (flag === true) {
        break;
    }
}

for (let i = 0; i < noTomatio.length; i++) {
    visited[noTomatio[i][0]][noTomatio[i][1]] = -1;
}

for (let i = 0; i < M; i++) {
    if (visited[i].includes(0)) {
        result = -1;
        break;
    }
    result = Math.max(result, ...visited[i]);
}
console.log(result === -1 ? result : result - 1);
