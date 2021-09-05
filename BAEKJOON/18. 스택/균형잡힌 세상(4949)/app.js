const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let result = [];
input.slice(0, input.length - 1).forEach((str) => {
    let flag = false;
    let stack = [];
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === "(" || str[i] === "[") {
            stack.push(str[i]);
        } else if (str[i] === ")" || str[i] === "]") {
            if (stack.length === 0) {
                flag = true;
                break;
            } else {
                if (str[i] === ")" && stack[stack.length - 1] === "[") {
                    flag = true;
                    break;
                } else if (str[i] === "]" && stack[stack.length - 1] === "(") {
                    flag = true;
                    break;
                } else {
                    stack.splice(stack.length - 1, 1);
                }
            }
        }
    }

    if (flag === true || stack.length !== 0) {
        result.push("no");
    } else if (stack.length === 0) {
        result.push("yes");
    }
});
console.log(result.join("\n"));
