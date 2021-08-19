const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input[0].split(" ");
first = input[0].split("").reverse().join("");
second = input[1].split("").reverse().join("");
console.log(parseInt(first) > parseInt(second) ? first : second);
