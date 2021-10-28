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
let dp = [...testcaseArray];
for (let i = 1; i < testcaseArray.length; i++) {
    dp[i][0] = dp[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
    dp[i][1] = dp[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
    dp[i][2] = dp[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
}
console.log(Math.min.apply(null, dp[number - 1]));
