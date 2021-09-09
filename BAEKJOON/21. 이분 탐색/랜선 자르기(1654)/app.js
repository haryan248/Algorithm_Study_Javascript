const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [k, n] = input[0].split(" ").map(Number);
let testcaseArray = [];
for (let i = 1; i <= k; i++) {
    testcaseArray.push(+input[i]);
}
console.log(testcaseArray);
testcaseArray.sort((a, b) => a - b);
let start = 1;
let end = Math.max(...testcaseArray);
let max = 0;
while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let count = 0;

    for (let i = 0; i < k; i++) {
        count += Math.floor(testcaseArray[i] / mid);
    }

    if (count >= n) {
        max = mid;
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}
console.log(max);
