const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let number = +input.shift();
let testcaseArray = [];
for (let i = 0; i < number; i++) {
    let temp = input[i].split(" ").map((item) => +item);
    testcaseArray.push(temp);
}
function factorial(n) {
    if (n <= 1) {
        return 1;
    } else return n * factorial(n - 1);
}
for (let i = 0; i < testcaseArray.length; i++) {
    let n = testcaseArray[i][0];
    let m = testcaseArray[i][1];
    let bridge = factorial(m) / (factorial(n) * factorial(m - n));
    console.log(parseInt(bridge + 0.5));
}
