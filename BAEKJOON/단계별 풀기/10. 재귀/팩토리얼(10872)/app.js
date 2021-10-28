const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
function factorial(number) {
    if (number <=1) {
        return 1;
    }
    return factorial(number - 1) * number;
}
console.log(factorial(input[0]));
