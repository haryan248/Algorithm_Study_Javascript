const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);
function solution(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 == 0) {
        console.log(1);
    } else {
        console.log(0);
    }
}
