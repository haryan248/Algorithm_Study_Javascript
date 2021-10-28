const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = +input.shift();
let stack = [];
let result = [];
for (let i = 0; i < n; i++) {
    let command = input[i].trim().split(" ");
    if (command[0] === "push") {
        stack.push(+command[1]);
    } else if (command[0] === "top") {
        result.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
    } else if (command[0] === "size") {
        result.push(stack.length);
    } else if (command[0] === "empty") {
        result.push(stack.length === 0 ? 1 : 0);
    } else if (command[0] === "pop") {
        if (stack.length === 0) {
            result.push(-1);
        } else {
            result.push(stack[stack.length - 1]);
            stack.splice(stack.length - 1, 1);
        }
    }
}
console.log(result.join("\n"));
