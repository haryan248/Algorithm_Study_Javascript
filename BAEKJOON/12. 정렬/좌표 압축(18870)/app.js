const fs = require("fs");
// split 조절
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input.shift();
const coordsArr = input[0].split(" ").map((item) => +item);
const set = new Set(coordsArr);
let uniqueArr = [...set].sort((a, b) => {
    return a - b;
});
for (let i in coordsArr) {
    coordsArr[i] = uniqueArr.indexOf(coordsArr[i]);
}
console.log(coordsArr.join(" "));
