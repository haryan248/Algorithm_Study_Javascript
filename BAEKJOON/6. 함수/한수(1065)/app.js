const { reverse } = require("dns");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let number = Number(input[0]);
let cnt = 0;
function hansu(index) {
    let diff;
    index = String(index);
    let before = Number(index[1]) - Number(index[0]);
    for (let i = 2; i < index.length; i++) {
        diff = Number(index[i]) - Number(index[i - 1]);
        if (before === diff) {
            continue;
        } else {
            return 0;
        }
    }
    return 1;
}
for (let i = 1; i <= number; i++) {
    if (i < 10) {
        cnt++;
    } else {
        cnt += hansu(i);
    }
}
console.log(cnt);
