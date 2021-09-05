const fs = require("fs");
const { exit } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = +input.shift();
let answer = input.map((item) => +item.trim());
let stack = [];
let result = [];
let max_r = 0;

for (let i = 0; i < answer.length; i++) {
    if (max_r < answer[i]) {
        push(max_r + 1, answer[i]);
        pop();
    } else if (stack[stack.length - 1] === answer[i]) {
        pop();
    } else {
        console.log("NO");
        exit();
    }
}
function push(start, n) {
    for (let i = start; i <= n; i++) {
        stack.push(i);
        result.push("+");
    }
    max_r = Math.max(max_r, n);
}
function pop() {
    max_r = Math.max(max_r, stack[stack.length - 1]);
    stack.splice(stack.length - 1, 1);
    result.push("-");
}
console.log(result.join("\n"));
