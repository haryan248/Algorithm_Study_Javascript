const { reverse } = require("dns");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let answer = [];
answer = input[0].split(" ");
if (answer[0] == "") {
    console.log(0);
} else console.log(answer.length);
