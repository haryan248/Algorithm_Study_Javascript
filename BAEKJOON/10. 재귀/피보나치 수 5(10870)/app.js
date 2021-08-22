const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
function factorial(number) {
    if (number === 1) {
        return 1;
    } else if (number === 0) {
        return 0;
    }
    return factorial(number - 1) + factorial(number - 2);
}
console.log(factorial(Number(input[0])));
