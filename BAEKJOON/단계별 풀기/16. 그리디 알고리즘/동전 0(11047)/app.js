const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let N = +input[0].trim().split(" ")[0];
let K = +input[0].trim().split(" ")[1];
let testcaseArray = [];
for (let i = 1; i <= N; i++) {
    testcaseArray.push(+input[i]);
}
let cnt = 0;
for (let i = N - 1; i >= 0; i--) {
    if (testcaseArray[i] <= K) {
        K -= testcaseArray[i];
        cnt++;
        i++;
    }
}
console.log(cnt);
