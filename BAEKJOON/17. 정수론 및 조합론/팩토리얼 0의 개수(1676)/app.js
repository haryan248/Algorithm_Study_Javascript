const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
function factorial(N) {
    if (n == 0 || n == 1) {
        return 1;
    }
    let dp = new Array(N + 1).fill(BigInt(1));
    for (let i = 1; i <= N; i++) {
        dp[i] = dp[i - 1] * BigInt(i);
    }
    return dp[N];
}
result = String(factorial(n));
let cnt = 0;
for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] !== "0") {
        break;
    } else {
        cnt++;
    }
}
console.log(cnt);
