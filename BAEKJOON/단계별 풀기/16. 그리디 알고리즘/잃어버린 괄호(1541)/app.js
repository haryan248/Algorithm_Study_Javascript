const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let string = input[0].split("-");
for (let i = 0; i < string.length; i++) {
    let temp = string[i].split("+");
    string[i] = temp.reduce((sum, acc) => +sum + +acc, 0);
}
console.log(string.reduce((sum, acc) => sum - acc));
