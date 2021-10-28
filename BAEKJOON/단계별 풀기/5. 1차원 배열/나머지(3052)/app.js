const { reverse } = require("dns");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testcaseArray = [];
input.forEach((item) => {
    const num = item % 42;
    if (testcaseArray.indexOf(num) === -1) {
        testcaseArray.push(num);
    }
});
console.log(testcaseArray.length);
