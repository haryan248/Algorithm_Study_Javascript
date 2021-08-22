const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let testcaseArray = [];
for (let i = 1; i <= input[0]; i++) {
    temp = input[i].split(" ").map((item) => +item);
    testcaseArray.push(temp);
}
console.log(testcaseArray);
let rank = new Array(testcaseArray.length).fill(0);
for (let i = 0; i < testcaseArray.length; i++) {
    for (let j = 0; j < testcaseArray.length; j++) {
        if (i !== j) {
            if (testcaseArray[i][0] < testcaseArray[j][0] && testcaseArray[i][1] < testcaseArray[j][1]) {
                rank[i] += 1;
            }
        }
    }
}
rank = rank.map((item) => item + 1);
console.log(rank.join(" "));
