const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
number = parseInt(input, 10);
for (let i = 1; i < Number(number); i++) {
    let sum = i;
    let stringValue = i.toString();
    for (let j = 0; j < stringValue.length; j++) {
        sum += parseInt(stringValue[j], 10);
    }
    if (sum === Number(number)) {
        console.log(i);
        return;
    }
}
console.log(0);
