const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let number = +input.shift();
let testcaseArray = input.map((item) => +item);
let dp = new Array();
dp[0] = 1;
dp[1] = 1;
dp[2] = 1;
function wave(n) {
    if (n <= 2) {
        return dp[n];
    }
    for (let i = 3; i < n; i++) {
        dp[i] = dp[i - 2] + dp[i - 3];
    }
    return dp[n - 1];
}
for (let i = 0; i < testcaseArray.length; i++) {
    console.log(wave(testcaseArray[i]));
}
