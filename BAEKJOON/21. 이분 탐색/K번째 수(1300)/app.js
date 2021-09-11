const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = Number(input[0]);
let k = Number(input[1]);
// k번째 수
// k 번째 수를 구하기위해선 B[k] 보다 작은 개수가 k이상이여야 한다.
// 예) K번째 수(mid)보다 작은 개수가 S(S>=k)개면 k번째 수(mid)는 S입니다.
let start = 1;
let end = k;
let result = 0;
while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let cnt = 0;
    // cnt : mid보다 작은 수의 개수를 새기 위한것
    for (let i = 1; i <= n; i++) {
        // Math.min(n, Math.floor(mid / i)) : 각 행에서 mid 보다 작거나 같은 수의 개수
        cnt += Math.min(n, Math.floor(mid / i));
    }
    console.log(`cnt:${cnt}, start: ${start}, end: ${end}, mid:${mid}`);
    //
    if (cnt >= k) {
        result = mid;
        end = mid - 1;
    } else {
        start = mid + 1;
    }
}
console.log(result);
