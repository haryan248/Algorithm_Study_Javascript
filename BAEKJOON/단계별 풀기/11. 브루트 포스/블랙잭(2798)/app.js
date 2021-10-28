const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
number = input[0].split(" ");
let N = parseInt(number[0]);
let M = number[1];
let testcaseArray = [];
testcaseArray = input[1].split(" ").map((item) => +item);
let result = 0;
let thirdCard, secondCard, firstCard;
for (let i = 0; i < N; i++) {
    firstCard = testcaseArray[i];
    let total = 0;
    for (let j = i + 1; j < N; j++) {
        secondCard = testcaseArray[j];
        for (let k = j + 1; k < N; k++) {
            thirdCard = testcaseArray[k];
            total = firstCard + secondCard + thirdCard;
            if (total > M) {
                continue;
            }
            result = Math.max(result, total);
        }
    }
}
console.log(result);
