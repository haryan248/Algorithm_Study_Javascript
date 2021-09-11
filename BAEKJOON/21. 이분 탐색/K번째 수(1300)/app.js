const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = Number(input[0]);
let k = Number(input[1]);

let start = 1;
let end = k;
let result = 0;
while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let cnt = 0;
    for (let i = 1; i <= n; i++) {
        cnt += Math.min(n, Math.floor(mid / i));
    }
    if (cnt >= k) {
        result = mid;
        end = mid - 1;
    } else {
        start = mid + 1;
    }
}
console.log(result);
