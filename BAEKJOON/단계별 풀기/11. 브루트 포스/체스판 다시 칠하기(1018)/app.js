const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
number = input[0].split(" ");
let col = number[0];
let row = number[1];
let testcaseArray = [];
let b_max = 64;
let w_max = 64;
for (let i = 1; i <= number[0]; i++) {
    temp = input[i]
        .trim()
        .split("\n")
        .map((item) => item);
    testcaseArray.push(String(temp));
}

function chess(x, y, start, second) {
    let cnt = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (i % 2 === 0) {
                if (j % 2 === 0) {
                    if (testcaseArray[i + x].charAt(j + y) !== start) {
                        cnt += 1;
                    }
                } else {
                    if (testcaseArray[i + x].charAt(j + y) !== second) {
                        cnt += 1;
                    }
                }
            } else {
                if (j % 2 === 0) {
                    if (testcaseArray[i + x].charAt(j + y) !== second) {
                        cnt += 1;
                    }
                } else {
                    if (testcaseArray[i + x].charAt(j + y) !== start) {
                        cnt += 1;
                    }
                }
            }
        }
    }
    return cnt;
}
// B로 시작하는 체스판 BWBWBWBW
for (let i = 0; i < col - 7; i++) {
    for (let j = 0; j < row - 7; j++) {
        w_max = Math.min(w_max, chess(i, j, "W", "B"));
        b_max = Math.min(b_max, chess(i, j, "B", "W"));
    }
}

console.log(Math.min(w_max, b_max));
