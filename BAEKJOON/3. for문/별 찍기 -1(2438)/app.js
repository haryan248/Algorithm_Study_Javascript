const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);
function solution(num) {
    result = "";
    for (let i = 0; i < num; i++) {
        for (let j = 0; j <= i; j++) {
            result += "*";
        }
        result += "\n";
    }

    console.log(result);
}
