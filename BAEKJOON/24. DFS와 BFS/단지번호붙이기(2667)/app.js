const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
let map = [];
let visited = new Array(N).fill(0).map(() => new Array(N).fill(0));
for (let i = 1; i < N + 1; i++) {
    map.push(input[i].split("").map((i) => Number(i)));
}
function dfs(x, y, result) {
    if (x < 0 || x >= N || y < 0 || y >= N) {
        return false;
    }
    // 상, 하, 좌, 우
    if (map[x][y] === 1) {
        map[x][y] = 0;
        result.push([x, y]);
        dfs(x - 1, y, result);
        dfs(x + 1, y, result);
        dfs(x, y + 1, result);
        dfs(x, y - 1, result);
        return true;
    }
    return false;
}
let res = [];
let count = 0;
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        let result = [];
        if (dfs(i, j, result) === true) {
            count++;
            res.push(result.length);
        }
    }
}
res.sort((a, b) => a - b);
console.log(count);
console.log(res.join("\n"));
// [
//     [0, 1, 1, 0, 1, 0, 0, 0],
//     [0, 1, 1, 0, 1, 0, 1, 0],
//     [1, 1, 1, 0, 1, 0, 1, 0],
//     [0, 0, 0, 0, 1, 1, 1, 0],
//     [0, 1, 0, 0, 0, 0, 0, 0],
//     [0, 1, 1, 1, 1, 1, 0, 0],
//     [0, 1, 1, 1, 0, 0, 0],
// ];
