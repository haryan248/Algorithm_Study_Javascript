const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let number = +input.shift();
let testcaseArray = [];
for (let i = 0; i < number; i++) {
    let temp = input[i]
        .trim()
        .split(" ")
        .map((item) => +item);
    testcaseArray.push(temp);
}
function gcd(num1, num2) {
    if (num2 === 0) return num1;
    else return gcd(num2, num1 % num2);
}
for (let i = 0; i < testcaseArray.length; i++) {
    let result = gcd(testcaseArray[i][0], testcaseArray[i][1]);
    console.log((testcaseArray[i][0] * testcaseArray[i][1]) / result);
}
