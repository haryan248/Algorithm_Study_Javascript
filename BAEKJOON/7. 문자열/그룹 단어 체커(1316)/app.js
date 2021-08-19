const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
number = input[0];
let cnt = 0;
let testcaseArray;
let before;
for (let i = 1; i <= number; i++) {
    testcaseArray = new Array(26).fill(0);

    // input[i] = input[i].trim();
    testcaseArray[input[i][0].charCodeAt(0) - 97] = 1;

    for (let j = 1; j < input[i].length; j++) {
        if (input[i] !== input[i - 1] && testcaseArray[input[i][j].charCodeAt(0) - 97] !== 1) {
            // 해당 알파벳index에 1넣기
            testcaseArray[input[i][j].charCodeAt(0) - 97] = 1;
        } else {
            console.log(input[i][j].charCodeAt(0));
            console.log(input[i]);
            break;
        }
        if (j == input[i].length - 1) cnt++;
    }
}

console.log(cnt);
