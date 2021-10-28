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
// 가방에 담은 물건의 무게 합이 i일 때, 처음 j개의 물건 중 담을 수 있는 최대 가치 ( 1 < i <=M)
for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= k; j++) {
        let w = testcaseArray[i][0]; //해당 무게
        let v = testcaseArray[i][1]; //해당 가치

        if (j < w) {
            //들 수 없으므로 넣기 이전의 최대값
            dp[i][j] = dp[i - 1][j];
        } else {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w] + v);
            // 이전의 최대 가치와 w를 들었을 때의 가치 중 max 값
            // w를 들었을 때의 최대 값은 w를 뺸만큼 + 현재 무게의 값
        }
    }
}
console.log(dp[number][k]);
