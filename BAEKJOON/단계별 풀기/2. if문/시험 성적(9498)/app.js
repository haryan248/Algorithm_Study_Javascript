const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);
function solution(score) {
    if (score <= 100 && score >= 90) {
        console.log("A");
    } else if (score < 90 && score >= 80) {
        console.log("B");
    } else if (score < 80 && score >= 70) {
        console.log("C");
    } else if (score < 70 && score >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }
}
