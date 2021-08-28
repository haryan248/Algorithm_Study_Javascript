const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let number = +input.shift();
let testcaseArray = input.map((item) =>
    item
        .trim()
        .split(" ")
        .map((e) => +e)
);
let dp = new Array(number);
for (let i = 1; i < testcaseArray.length; i++) {
    for (let j = 0; j < testcaseArray[i].length; j++) {
        if (j == 0) {
            testcaseArray[i][j] += testcaseArray[i - 1][j];
        } else if (j == testcaseArray[i].length - 1) {
            testcaseArray[i][j] += testcaseArray[i - 1][j - 1];
        } else {
            testcaseArray[i][j] += Math.max(testcaseArray[i - 1][j], testcaseArray[i - 1][j - 1]);
        }
    }
}
console.log(Math.max.apply(null, testcaseArray[number - 1]));
