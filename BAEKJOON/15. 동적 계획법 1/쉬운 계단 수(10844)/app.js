const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let number = +input.shift();
let dp = new Array(number).fill(0).map(() => Array(10).fill(0));
dp[0] = [BigInt(0), BigInt(1), BigInt(1), BigInt(1), BigInt(1), BigInt(1), BigInt(1), BigInt(1), BigInt(1), BigInt(1)];
// dp[i][j] i자리수에서 j로 끝나는 수에 올 수 있는 경우의 수
for (let i = 1; i < number; i++) {
    for (let j = 0; j < 10; j++) {
        if (j === 0) {
            //뒷자리가 0 일때는 1에서 온 것이다.
            dp[i][j] = dp[i - 1][j + 1];
        } else if (j === 9) {
            //뒷자리가 9 일땐 8에서 온 것이다.
            dp[i][j] = dp[i - 1][j - 1];
        } else {
            // 뒷자리가 1~ 8일땐 앞뒤에서 온것
            dp[i][j] = dp[i - 1][j + 1] + dp[i - 1][j - 1];
        }
    }
}
const sum = dp[number - 1].reduce((sum, acc) => sum + acc);
const mod = BigInt(1000000000);
console.log(String(sum % mod));
