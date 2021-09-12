const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = Number(input[0]);
let testcaseArray = input[1].split(" ").map(Number);

let dp = [];
dp[0] = 0;
for (let i = 0; i < n; i++) {
    let start = 0;
    let end = dp.length - 1;
    // 들어갈 위치 찾기
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (dp[mid] < testcaseArray[i]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    // 들어갈 위치가 dp 길이보다 크면 뒤에 넣기
    if (start >= dp.length) {
        dp.push(testcaseArray[i]);
    } else {
        // 아닐 경우 들어갈 위치에 넣기
        dp[start] = testcaseArray[i];
    }
}
console.log(dp.length - 1);
