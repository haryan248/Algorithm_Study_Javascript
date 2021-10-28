const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let testcaseArray = [];
for (let i = 1; i <= input[0]; i++) {
    temp = input[i].split(" ").map((item) => +item);
    testcaseArray.push(temp.toString());
}
console.log(testcaseArray.sort((a, b) => a - b).join("\n"));
