const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, B] = input
    .shift()
    .split(" ")
    .map((item) => +item);
let A = [];
for (let i = 0; i < n; i++) {
    let temp = input[i].split(" ").map((item) => +item % 1000);
    A.push(temp);
}
// A^2n => A^n * A^n
function dnq(A, B) {
    if (B === 1) return A;
    let x = dnq(A, parseInt(B / 2));
    if (B % 2 === 1) {
        return prod(prod(x, x), A); //홀수일 경우 A^n, A^n 하고 A를 곱한게 답
    } else {
        return prod(x, x); // 아닐경우 A^n * A^n
    }
}
// 함수 prod는 n*n 행렬의 행렬곱을 반환
function prod(A, B) {
    let result = [];
    A.forEach(() => result.push(Array(B[0].length).fill(0)));
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B[0].length; j++) {
            for (let k = 0; k < B.length; k++) {
                result[i][j] += (A[i][k] * B[k][j]) % 1000;
                result[i][j] %= 1000;
            }
        }
    }
    return result;
}
// 출력
let result = dnq(A, B);
let answer = "";
for (let i = 0; i < result.length; i++) {
    answer += result[i].map(Number).join(" ").trim() + "\n";
}
console.log(answer.trim());
