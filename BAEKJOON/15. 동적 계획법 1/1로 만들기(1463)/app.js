const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let number = +input.shift();
let dp = new Array(number).fill(0);
if (number === 1) {
    console.log(0);
} else if (number === 2) {
    console.log(1);
} else if (number === 3) {
    console.log(1);
} else {
    dp[2] = 1;
    dp[3] = 1;
    for (let i = 4; i <= number; i++) {
        let first = Number.MAX_SAFE_INTEGER;
        let second = Number.MAX_SAFE_INTEGER;
        if (i % 3 == 0) {
            first = 1 + dp[parseInt(i / 3)];
        }
        if (i % 2 == 0) {
            second = 1 + dp[parseInt(i / 2)];
        }
        dp[i] = Math.min(1 + dp[i - 1], first, second);
    }
    console.log(dp[number]);
}
