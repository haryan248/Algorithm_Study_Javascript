const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map((i) => Number(i));
const memoryArray = input[1].split(" ").map((i) => Number(i));
const costArray = input[2].split(" ").map((i) => Number(i));
memoryArray.unshift(0);
costArray.unshift(0);
let sumCost = costArray.reduce((acc, num) => acc + num, 0);
let dp = new Array(n + 1).fill(0).map(() => new Array(sumCost + 1).fill(0));
// dp[j] : 비용이 j 일때 확보 할 수 있는 메모리 양
let result = sumCost;

for (let i = 1; i < n + 1; i++) {
    let memory = memoryArray[i];
    let cost = costArray[i];
    for (let j = 1; j < sumCost + 1; j++) {
        if (j < cost) {
            dp[i][j] = dp[i - 1][j];
        } else {
            // 같은 cost 내에서 현재 앱을 끈 뒤의 byte와 현재 앱을 끄지 않은 뒤의 byte를 비교
            dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - cost] + memory);
        }
    }
}
result = dp[n].length - dp[n].filter((i) => i >= m).length;
console.log(result);
