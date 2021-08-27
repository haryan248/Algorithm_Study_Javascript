const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let testcaseArray = input.map((item) =>
    item
        .trim()
        .split(" ")
        .map((e) => +e)
);
let dp = new Array(21).fill(0).map(() =>
    Array(21)
        .fill(0)
        .map(() => Array())
);
function w(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return 1;
    }
    if (a > 20 || b > 20 || c > 20) {
        return w(20, 20, 20);
    }
    if (dp[a][b][c]) return dp[a][b][c];
    if (a < b && b < c) {
        dp[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
        return dp[a][b][c];
    } else {
        dp[a][b][c] = w(a - 1, b, c) + w(a - 1, b - 1, c) + w(a - 1, b, c - 1) - w(a - 1, b - 1, c - 1);
        return dp[a][b][c];
    }
}
for (let i = 0; i < testcaseArray.length - 1; i++) {
    let result = w(testcaseArray[i][0], testcaseArray[i][1], testcaseArray[i][2]);
    console.log(`w(${testcaseArray[i][0]}, ${testcaseArray[i][1]}, ${testcaseArray[i][2]}) = ${result}`);
}
