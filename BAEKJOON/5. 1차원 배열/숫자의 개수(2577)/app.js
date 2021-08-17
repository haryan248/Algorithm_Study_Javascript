const { reverse } = require("dns");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

testcaseArray = input.map((item) => +item);
let total = 1;
for (let i = 0; i < 3; i++) {
    total *= input[i];
}
total = String(total);
let numberArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < 10; i++) {
    numberArr[Number(total[i])] += 1;
}
numberArr.forEach((item) => {
    console.log(item);
});
