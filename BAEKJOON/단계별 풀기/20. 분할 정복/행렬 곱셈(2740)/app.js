const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let cursor = 0;
let A = [];
let B = [];
for (let i = 0; i < 2; i++) {
    let n = input[cursor++]
        .trim()
        .split(" ")
        .map((item) => +item);
    let row = n[0];
    for (let j = cursor; j < cursor + row; j++) {
        let temp = input[j].split(" ").map((item) => +item);
        cursor === 1 ? A.push(temp) : B.push(temp);
    }
    cursor += row;
}
let result = [];
A.forEach(() => result.push(Array(B[0].length).fill(0)));

for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B[0].length; j++) {
        for (let k = 0; k < B.length; k++) {
            result[i][j] += A[i][k] * B[k][j];
        }
    }
}
for (let i = 0; i < result.length; i++) {
    console.log(result[i].join(" "));
}
