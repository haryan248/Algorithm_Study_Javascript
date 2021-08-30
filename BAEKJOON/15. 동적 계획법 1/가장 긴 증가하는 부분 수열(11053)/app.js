const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let number = +input.shift();
let testcaseArray = input[0].split(" ").map((item) => +item);
console.log(testcaseArray);
// {10, 20, 10, 30, 20, 50} 이고, 길이는 4이다.
// 10 20 30 50
// dp[i] i번째 수로 시작하는
let dp = [];
for (let i = 0; i < testcaseArray.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
        if (testcaseArray[j] < testcaseArray[i]) {
            //현재값이 전에 모든 값보다 크면
            dp[i] = Math.max(dp[i], dp[j] + 1);
            // 한개 추가한개 큰지
        }
    }
}

console.log(Math.max(...dp));
