const { reverse } = require("dns");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let A = "a";
let Z = "z";
let answer = "";
for (let i = A.charCodeAt(0); i <= Z.charCodeAt(0); i++) {
    answer += input[0].indexOf(String.fromCharCode(i)) + " ";
}
console.log(answer);
