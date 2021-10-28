const fs = require("fs");
const { exit } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [M, N, H] = input[0].split(" ").map((i) => Number(i));
let tomatoRack = [];
let tomato = [];
let temp = [];
for (let i = 1; i < N * H + 1; i++) {
    tomatoRack = input[i].split(" ").map((i) => Number(i));
    temp.push(tomatoRack);
    if (temp.length === N) {
        tomato.push(temp);
        temp = [];
    }
}

// tomato 3차원배열
// [
//     [
//         [0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0],
//     ],
//     [
//         [0, 0, 0, 0, 0],
//   //      [0, 0, 1, 0, 0],
//         [0, 0, 0, 0, 0],
//     ],
// ];
let dx = [-1, 1, 0, 0, 0, 0];
let dy = [0, 0, -1, 1, 0, 0];
let dz = [0, 0, 0, 0, -1, 1];
let visited = new Array(H).fill(0).map(() => new Array(N).fill(0).map(() => new Array(M).fill(0)));
let pointer = 0;
function bfs(tomato, visited) {
    // shift() 느리므로 pointer로 변경
    let cut = tomatoLocation[pointer++];
    if (cut === undefined) return true;
    let row = cut[1];
    let col = cut[2];
    let high = cut[0];
    let tempRow;
    let tempCol;
    let tempHigh;
    // console.log([high, row, col]);

    for (let i = 0; i < 6; i++) {
        tempRow = row + dx[i];
        tempCol = col + dy[i];
        tempHigh = high + dz[i];

        if (
            tempRow < 0 ||
            tempRow >= N ||
            tempCol < 0 ||
            tempCol >= M ||
            tempHigh < 0 ||
            tempHigh >= H ||
            tomato[tempHigh][tempRow][tempCol] === -1
        ) {
            continue;
        }

        if (tomato[tempHigh][tempRow][tempCol] === 0 && visited[tempHigh][tempRow][tempCol] === 0) {
            visited[tempHigh][tempRow][tempCol] = visited[high][row][col] + 1;
            tomatoLocation.push([tempHigh, tempRow, tempCol]);
        }
    }
}
let tomatoLocation = [];
let noTomatio = [];
for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
        for (let k = 0; k < M; k++) {
            if (tomato[i][j][k] === 1) {
                tomatoLocation.push([i, j, k]);
            }
            if (tomato[i][j][k] === -1) {
                noTomatio.push([i, j, k]);
            }
        }
    }
}

for (let i = 0; i < tomatoLocation.length; i++) {
    visited[tomatoLocation[i][0]][tomatoLocation[i][1]][tomatoLocation[i][2]] = 1;
}

let result = -1;
let flag = false;

// 한번에 여러 곳에서 bfs 돌리기
// 토마토가 여러곳에 있을 수 있기 때문에
while (true) {
    flag = bfs(tomato, visited);
    if (flag === true) break;
}

for (let i = 0; i < noTomatio.length; i++) {
    visited[noTomatio[i][0]][noTomatio[i][1]][noTomatio[i][2]] = -1;
}

for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
        if (visited[i][j].includes(0)) {
            console.log(-1);
            exit(0);
        }
        result = Math.max(result, ...visited[i][j]);
    }
}
console.log(result - 1);
