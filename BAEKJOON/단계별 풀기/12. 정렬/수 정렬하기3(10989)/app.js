const fs = require("fs");
// split 조절
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 문제 풀이 (카운팅 정렬)
const n = +input[0];
const nums = [];
for (let i = 1; i <= n; i++) {
    nums.push(+input[i]);
}

const countNums = Array.from({ length: 10001 }, () => 0);

nums.forEach((v) => {
    countNums[v]++;
});
console.log(countNums);
let print = "";
for (let i = 1; i < countNums.length; i++) {
    const num = i;
    const count = countNums[i];
    if (count > 0) {
        print += (num + "\n").repeat(count);
    }
}
console.log(print.trim());
