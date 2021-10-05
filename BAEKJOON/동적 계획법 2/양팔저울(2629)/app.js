const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
const weight = input[1].split(" ").map((i) => Number(i));
const marble = Number(input[2]);
const marbleArr = input[3].split(" ").map((i) => Number(i));
let sum = weight.reduce((a, b) => a + b, 0);
let possible = new Array(sum + 1).fill(false);
possible[0] = true;

weight.forEach((w) => {
    let check = [...possible];
    check.forEach((chk, i) => {
        if (chk === true && possible[i + w] === false) {
            possible[i + w] = true;
        }
    });
});

weight.forEach((w) => {
    let check = [...possible];
    check.forEach((chk, i) => {
        if (i - w >= 0) {
            if (chk === true && possible[i - w] == false) {
                possible[i - w] = true;
            }
        }
    });
});

let result = "";
marbleArr.forEach((marble) => {
    if (marble > sum) {
        result += "N";
    } else {
        if (possible[marble]) {
            result += "Y";
        } else {
            result += "N";
        }
    }
});

console.log(result.split("").join(" "));
