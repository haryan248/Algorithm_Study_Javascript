const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = +input.shift();
let stack = [];
for (let i = 0; i < n; i++) {
    let num = +input[i].trim();
    if (num === 0) {
        stack.splice(stack.length - 1, 1);
    } else {
        stack.push(num);
    }
}
console.log(stack.reduce((sum, acc) => sum + acc, 0));
