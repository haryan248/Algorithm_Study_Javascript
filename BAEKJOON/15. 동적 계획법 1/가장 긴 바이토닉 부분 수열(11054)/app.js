const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let number = +input.shift();
let testcaseArray = input[0].split(" ").map((item) => +item);
let reverse_testcaseArray = [...testcaseArray].reverse();
let dp = new Array(number).fill(1);
let reverse_dp = new Array(number).fill(1);
for (let i = 0; i < testcaseArray.length; i++) {
    for (let j = 0; j < i; j++) {
        if (testcaseArray[j] < testcaseArray[i]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
        if (reverse_testcaseArray[j] < reverse_testcaseArray[i]) {
            reverse_dp[i] = Math.max(reverse_dp[i], reverse_dp[j] + 1);
        }
    }
}
result = new Array(number).fill(0);
for (let i = 0; i < number; i++) {
    // 서로 반대방향 더한후 중복값 1개 뺴기
    result[i] = dp[i] + reverse_dp[number - i - 1] - 1;
}
console.log(Math.max(...result));
console.log(dp);
console.log(reverse_dp);
console.log(result);
