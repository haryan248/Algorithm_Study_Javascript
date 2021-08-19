const { reverse } = require("dns");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
sum = 0;
for (let i = 0; i < input[1].length; i++) {
    sum += parseInt(input[1][i]);
}
console.log(sum);
