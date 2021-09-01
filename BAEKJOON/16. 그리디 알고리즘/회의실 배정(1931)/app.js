const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let number = +input.shift();
let testcaseArray = [];
for (let i = 0; i < number; i++) {
    let temp = input[i].split(" ").map((item) => +item);
    testcaseArray.push(temp);
}

testcaseArray.sort((next, now) => {
    if (next[1] === now[1]) {
        return next[0] - now[0];
    } else {
        return next[1] - now[1];
    }
});

let finish = 0;
let cnt = 0;
for (let i = 0; i < testcaseArray.length; i++) {
    if (finish <= testcaseArray[i][0]) {
        finish = testcaseArray[i][1];
        cnt++;
    }
}
console.log(cnt);
