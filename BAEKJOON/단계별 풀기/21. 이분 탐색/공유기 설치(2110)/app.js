const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, c] = input[0].split(" ").map(Number);
let testcaseArray = [];
for (let i = 1; i <= n; i++) {
    testcaseArray.push(Number(input[i].trim()));
}
testcaseArray.sort((a, b) => a - b);
let start = 1;
let end = testcaseArray[n - 1] - testcaseArray[0];
while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let pick = testcaseArray[0];
    let count = 1;
    testcaseArray.forEach((x, i) => {
        if (i !== 0) {
            let distance = x - pick;
            if (distance >= mid) {
                count++;
                pick = x;
            }
        }
    });
    console.log(mid);
    if (count >= c) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}
console.log(end);
