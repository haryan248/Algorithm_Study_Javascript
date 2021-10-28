const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let theNumberAtTheEnd = 665;

while (input > 0) {
    theNumberAtTheEnd++;

    if (theNumberAtTheEnd.toString().includes("666")) {
        input--;
    }
}

console.log(theNumberAtTheEnd);
