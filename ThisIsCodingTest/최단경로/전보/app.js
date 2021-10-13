const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M, C] = input[0].split(" ").map((i) => Number(i));
const INF = Number.MAX_VALUE;
let graph = new Array(N + 1).fill(0).map(() => new Array(N + 1).fill(INF));
