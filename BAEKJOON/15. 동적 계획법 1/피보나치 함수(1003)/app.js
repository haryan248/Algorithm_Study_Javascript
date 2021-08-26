const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let number = +input.shift();
let testcaseArray = input.map((item) => +item.trim());
let zero_dp = new Array(number);
let one_dp = new Array(number);

zero_dp[0] = 1;
zero_dp[1] = 0;
one_dp[0] = 0;
one_dp[1] = 1;
function fibonacci(num) {
    if (num < 2) {
        return `${zero_dp[num]} ${one_dp[num]}`;
    } else {
        for (let i = 2; i <= num; i++) {
            zero_dp[i] = zero_dp[i - 1] + zero_dp[i - 2];
            one_dp[i] = one_dp[i - 1] + one_dp[i - 2];
        }
        return `${zero_dp[num]} ${one_dp[num]}`;
    }
}
for (let i = 0; i < number; i++) {
    console.log(fibonacci(testcaseArray[i]));
}
