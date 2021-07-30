const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [N, X] = input[0].split(" ").map((item) => +item);
const Array = input[1].split(" ").map((item) => +item);

solution(N, X, Array);
function solution(N, X, A) {
    answer = "";
    for (let i = 0; i < N; i++) {
        if (A[i] < X) {
            answer += A[i] + " ";
        }
    }
    console.log(answer);
}
