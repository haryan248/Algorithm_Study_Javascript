const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let testcaseArray = input[0].split(" ").map((item) => +item);
let dp = new Array(11).fill(0).map(() => new Array(11).fill(0));
function bc(n, c) {
    if (dp[n][c] > 0) return dp[n][c];
    if (n === c || c === 0) return (dp[n][c] = 1);
    else return bc(n - 1, c) + bc(n - 1, c - 1);
}
console.log(bc(testcaseArray[0], testcaseArray[1]));
