const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
N = +input.shift();
distance = input[0]
    .trim()
    .split(" ")
    .map((item) => BigInt(item));
liter = input[1]
    .trim()
    .split(" ")
    .map((item) => BigInt(item));
let min = liter[0];
let sum = distance[0] * liter[0];
for (let i = 1; i < N - 1; i++) {
    min = min > liter[i] ? liter[i] : min;
    sum += min * distance[i];
}
console.log(String(sum));
