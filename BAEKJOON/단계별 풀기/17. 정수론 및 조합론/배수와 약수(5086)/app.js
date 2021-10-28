const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let i = 0;
let testcaseArray = [];
while (input[i] !== "0 0") {
    let numbers = input[i].split(" ").map((item) => +item);
    testcaseArray.push(numbers);
    i++;
}
for (let i = 0; i < testcaseArray.length; i++) {
    if (testcaseArray[i][1] % testcaseArray[i][0] === 0) console.log("factor");
    else if (testcaseArray[i][0] % testcaseArray[i][1] === 0) console.log("multiple");
    else console.log("neither");
}
