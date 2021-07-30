const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .split(" ")
    .map((value) => +value);

const [h, m] = input;
solution(h, m);
function solution(h, m) {
    if (m < 45) {
        h -= 1;
        if (h < 0) {
            h = 23;
        }
        m = 60 - (45 - m);
        console.log(h, m);
    } else {
        console.log(h, m - 45);
    }
}
