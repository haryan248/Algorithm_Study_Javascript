const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let number = +input.shift();
let testcaseArray = input[0].split(" ").map((item) => +item);
for (let i = 1; i < testcaseArray.length; i++) {
    let result = gcp(testcaseArray[0], testcaseArray[i]);
    console.log(`${parseInt(testcaseArray[0] / result)}/${parseInt(testcaseArray[i] / result)}`);
}
function gcp(num1, num2) {
    if (num2 === 0) return num1;
    else return gcp(num2, num1 % num2);
}
