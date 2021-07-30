const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .split(" ")
    .map((value) => +value);

const [a, b] = input;
solution(a, b);
function solution(a, b) {
    if (a > b) {
        console.log(">");
    } else if (a < b) {
        console.log("<");
    } else if (a === b) {
        console.log("==");
    }
}
