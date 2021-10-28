const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = input[0];
let pointer = 1;
for (let i = 0; i < T; i++) {
    let I = Number(input[pointer++]);
    let [curX, curY] = input[pointer++].split(" ").map((i) => Number(i));
    let [endX, endY] = input[pointer++].split(" ").map((i) => Number(i));

    solution(curX, curY, endX, endY, I);
}

function solution(curX, curY, endX, endY, I) {
    console.log(bfs(curX, curY, endX, endY, I));
}

function bfs(curX, curY, endX, endY, I) {
    let dx = [2, 1, -1, -2, -2, -1, 1, 2];
    let dy = [1, 2, 2, 1, -1, -2, -2, -1];
    let visited = new Array(I).fill(0).map(() => new Array(I).fill(0));
    let queue = [];
    queue.push([curX, curY]);
    visited[curX][curY] = 1;
    let result = 0;
    while (queue.length !== 0) {
        let [curX, curY] = queue.shift();
        if (curX === endX && curY === endY) {
            result = visited[curX][curY] - 1;

            break;
        }
        for (let i = 0; i < 8; i++) {
            nextX = curX + dx[i];
            nextY = curY + dy[i];

            if (nextX < 0 || nextX >= I || nextY < 0 || nextY >= I) continue;
            // console.log(nextX, nextY);

            if (visited[nextX][nextY] === 0) {
                visited[nextX][nextY] = visited[curX][curY] + 1;
                queue.push([nextX, nextY]);
            }
        }
    }
    return result;
}
