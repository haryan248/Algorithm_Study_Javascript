const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let first = input[0].trim();
let second = input[1].trim();
let firstLength = first.length;
let secondLength = second.length;
let dp = new Array(firstLength + 1).fill(0).map(() => Array(secondLength + 1).fill(0));
// 문자열 X, Y 각각의 i, j번째 글자까지의 최장 공통 부분 문자열의 길이
for (let i = 1; i <= firstLength; i++) {
    for (let j = 1; j <= secondLength; j++) {
        if (first[i - 1] === second[j - 1]) {
            dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
}
console.log(dp[firstLength][secondLength]);
