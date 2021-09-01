const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let testcaseArray = input[0].split(" ").map((item) => +item);
let dp = new Array(1001).fill(0).map(() => new Array(1001).fill(0));
let n = testcaseArray[0];
let k = testcaseArray[1];
for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
        if (i === j || j === 0) dp[i][j] = 1;
        else dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % 10007;
    }
}
console.log(dp[n][k]);
