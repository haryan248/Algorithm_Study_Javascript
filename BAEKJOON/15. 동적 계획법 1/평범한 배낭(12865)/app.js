const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let temp_list = input[0]
    .trim()
    .split(" ")
    .map((item) => +item);
let number = temp_list[0];
let k = temp_list[1];
let testcaseArray = [[0, 0]];
for (let i = 1; i <= number; i++) {
    temp_list = input[i].split(" ").map((item) => +item);
    testcaseArray.push(temp_list);
}
console.log(testcaseArray);
let dp = new Array(number + 1).fill(0).map(() => Array(k + 1).fill(0));
for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= k; j++) {
        let w = testcaseArray[i][0]; //해당 무게
        let v = testcaseArray[i][1]; //해당 가치

        if (j < w) {
            //들 수 없으므로 이전의 최대값
            dp[i][j] = dp[i - 1][j];
        } else {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w] + v);
            // 이전의 최대 가치, w를 들었을 때의 가치중 max 값
        }
    }
}
console.log(dp[number][k]);
