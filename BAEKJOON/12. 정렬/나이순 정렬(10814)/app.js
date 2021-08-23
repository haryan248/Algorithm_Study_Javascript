const fs = require("fs");
// split 조절
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input.shift();
const coordsArr = input.map((coords) => coords.split(" ").map((nums) => nums));
let results = "";
coordsArr
    .sort((next, prev) => {
        if (next[0] === prev[0]) {
            return prev[0] - next[0];
        }
        return next[0] - prev[0];
    })
    .forEach((coords) => {
        results += `${coords[0]} ${coords[1]}\n`;
    });

console.log(results);
