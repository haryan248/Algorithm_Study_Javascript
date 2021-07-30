const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .split("\n")
    .map((value) => +value);

const [a, b] = input;
solution(a, b);
function solution(a, b) {
    let newString = String(b);
    console.log(a * Number(newString[2]));
    console.log(a * Number(newString[1]));
    console.log(a * Number(newString[0]));
    console.log(a * b);
}
