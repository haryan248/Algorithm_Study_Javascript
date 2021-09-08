const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = parseInt(input[0]);
let testcase_n = input[1].split(" ").map(Number);
let m = parseInt(input[2]);
let testcase_m = input[3].split(" ").map(Number);
testcase_n.sort((next, now) => next - now);
let answer = "";
testcase_m.forEach((elem, idx) => {
    if (binarySearch(0, n - 1, elem) !== -1) {
        answer += idx === m - 1 ? "1" : "1\n";
    } else {
        answer += idx === m - 1 ? "0" : "0\n";
    }
});

function binarySearch(start, end, target) {
    let mid = -1;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (testcase_n[mid] === target) {
            return 1;
        } else if (testcase_n[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}
console.log(answer);
