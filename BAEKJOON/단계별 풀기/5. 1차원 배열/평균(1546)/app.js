const { reverse } = require("dns");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

testcaselength = +input[0];
testcaseArray = input[1].split(" ").map((item) => +item);
maxscore = Math.max.apply(null, testcaseArray);
testcaseArray = testcaseArray.map((item) => (item / maxscore) * 100);
result = testcaseArray.reduce((sum, curr) => sum + curr, 0);
console.log(result / testcaselength);

// let total = 1;
// for (let i = 0; i < 3; i++) {
//     total *= input[i];
// }
// total = String(total);
// let numberArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// for (let i = 0; i < 10; i++) {
//     numberArr[Number(total[i])] += 1;
// }
// numberArr.forEach((item) => {
//     console.log(item);
// });
