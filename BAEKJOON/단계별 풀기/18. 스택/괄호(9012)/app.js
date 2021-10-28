const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = +input.shift();
let result = [];
for (let i = 0; i < n; i++) {
    let testcase = input[i].trim();
    let stack = [];
    let flag = false;
    for (let j = 0; j < testcase.length; j++) {
        if (testcase[j] === "(") {
            stack.push("(");
        } else if (testcase[j] === ")") {
            if (stack.length === 0) {
                flag = true;
                break;
            } else {
                stack.splice(stack.length - 1, 1);
            }
        }
    }
    if (flag === true || stack.length !== 0) {
        result.push("NO");
    } else if (stack.length === 0) {
        result.push("YES");
    }
}
console.log(result.join("\n"));
