const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let number = +input.shift();
let testcaseArray = input.map((item) => +item.trim());
let dp = [];
if (number === 1) {
    console.log(testcaseArray[0]);
} else if (number === 2) {
    console.log(testcaseArray[0] + testcaseArray[1]);
} else if (number === 3) {
    console.log(Math.max(testcaseArray[0] + testcaseArray[1], testcaseArray[0] + testcaseArray[2], testcaseArray[1] + testcaseArray[2]));
} else {
    dp[0] = testcaseArray[0]; //1
    dp[1] = testcaseArray[0] + testcaseArray[1];
    dp[2] = Math.max(testcaseArray[0] + testcaseArray[1], testcaseArray[0] + testcaseArray[2], testcaseArray[1] + testcaseArray[2]);
    for (let i = 3; i < testcaseArray.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 3] + testcaseArray[i] + testcaseArray[i - 1], dp[i - 2] + testcaseArray[i]);
    }
    console.log(dp[number - 1]);
}
