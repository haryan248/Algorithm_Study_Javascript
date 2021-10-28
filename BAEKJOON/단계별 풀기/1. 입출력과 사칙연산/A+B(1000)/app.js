const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .split(" ")
    .map((value) => +value);

const [a, b] = input;
console.log(a + b);
