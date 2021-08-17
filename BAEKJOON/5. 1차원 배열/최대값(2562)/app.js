const { reverse } = require("dns");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

testcaseArray = input.map((item) => +item);
max = testcaseArray[0];
resultIndex = 0;
for (let i = 0; i < 9; i++) {
    if (max < testcaseArray[i]) {
        max = testcaseArray[i];
        resultIndex = i;
    }
}
console.log(max);
console.log(resultIndex + 1);
