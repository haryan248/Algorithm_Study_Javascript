const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let testcaseArray = input[0].split(" ").map((item) => +item);
let num1 = testcaseArray[0];
let num2 = testcaseArray[1];

function gcd(num1, num2) {
    if (num2 === 0) return num1;
    else return gcd(num2, num1 % num2);
}
let gcd_result = gcd(num1, num2);
console.log(gcd_result); //최대공약수
console.log((num1 * num2) / gcd_result); //최소공배수
