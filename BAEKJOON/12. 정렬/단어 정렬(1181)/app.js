const fs = require("fs");
// split 조절
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input.shift();
const coordsArr = input.map((items) => items);
const set = new Set(coordsArr);
const uniqueArr = [...set];
let results;
results = uniqueArr.sort((a, b) => {
    if (a.length === b.length) {
        console.log(a.length, b.length);

        return a.localeCompare(b);
    }
    return a.length - b.length;
});

console.log(results.join("\n"));
