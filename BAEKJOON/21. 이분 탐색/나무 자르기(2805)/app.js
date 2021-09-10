const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
let testcaseArray = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
let start = 1;
let end = 1000000000;
let max = 0;
while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let count = 0;
    testcaseArray.forEach((x) => {
        if (x > mid) {
            count += x - mid;
        }
    });
    if (count >= m) {
        start = mid + 1;
        max = mid;
    } else {
        end = mid - 1;
    }
}
console.log(max);
