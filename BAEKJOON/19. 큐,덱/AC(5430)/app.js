const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = +input.shift();
let cursor = 0;
for (let i = 0; i < n; i++) {
    command = input[cursor].trim();
    cursor++;
    num = +input[cursor].trim();
    cursor++;
    let arry = new Array(num);
    let toggle = true; //toggle true 면 뒤집기 전
    arry = input[cursor]
        .trim()
        .substring(1, input[cursor].trim().length - 1)
        .split(",");
    if (arry[0] === "") arry = [];

    let top = 0;
    let rear = arry.length - 1;
    let result = [];

    for (let j = 0; j < command.length; j++) {
        if (command[j] === "R") {
            toggle = !toggle;
        } else {
            if (rear < top) {
                result.push("error");
                break;
            } else {
                toggle ? top++ : rear--;
            }
        }
    }
    if (result.includes("error")) {
        console.log("error");
    } else {
        for (let i = top; i <= rear; i++) {
            result.push(arry[i]);
        }
        console.log(`[${toggle ? result.join(",") : result.reverse().join(",")}]`);
    }
    cursor++;
}
