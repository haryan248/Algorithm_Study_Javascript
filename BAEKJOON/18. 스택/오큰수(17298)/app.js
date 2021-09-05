const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = +input.shift();
let testcaseArray = input[0].split(" ").map((item) => +item);
let result = new Array(n).fill(-1);
let stack = [];
for (let i = 0; i < n; i++) {
    // stack에 있을때, 스택의 맨 위의 인덱스가 현재 index 값 보다 작을때까지 while
    while (stack.length && testcaseArray[stack[stack.length - 1]] < testcaseArray[i]) {
        result[stack.pop()] = testcaseArray[i];
    }
    stack.push(i);
}
console.log(result.join(" "));
