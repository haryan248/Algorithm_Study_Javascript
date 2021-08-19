const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let cnt = 0;
for (let i = 0; i < croatia.length; i++) {
    if (input[0].indexOf(croatia[i]) != -1) {
        input[0] = input[0].replace(croatia[i], "-");
        cnt++;
        i--;
    }
}
for (let i = 0; i < input[0].length; i++) {
    if (input[0][i] != "-") {
        cnt++;
    }
}
console.log(cnt);
