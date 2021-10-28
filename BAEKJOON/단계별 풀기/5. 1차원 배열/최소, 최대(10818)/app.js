const { reverse } = require("dns");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let testcase = +input[0];
testcaseArray = [];
testcaseArray = input[1].split(" ").map((item) => +item);

min = testcaseArray[0];
max = testcaseArray[0];
for (let i = 0; i < testcase; i++) {
    if (max < testcaseArray[i]) {
        max = testcaseArray[i];
    }

    if (min > testcaseArray[i]) {
        min = testcaseArray[i];
    }
}

console.log(min, max);
