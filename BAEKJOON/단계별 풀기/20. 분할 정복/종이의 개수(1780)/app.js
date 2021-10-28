const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = +input.shift();
let testcaseArray = [];
let result = [];
for (let i = 0; i < n; i++) {
    let temp = input[i]
        .trim()
        .split(" ")
        .map((item) => +item);
    testcaseArray.push(temp);
}
function Tree(x, y, size) {
    if (isPossible(x, y, size)) {
        result.push(testcaseArray[x][y]);
        return;
    }
    let newSize = parseInt(size / 3); // 9 -> 3

    Tree(x, y, newSize); // 1 (00 ~ 22)
    Tree(x, y + newSize, newSize); // 2 (03 ~ 25)
    Tree(x, y + newSize * 2, newSize); // 3 (05 ~ 28)

    Tree(x + newSize, y, newSize); // 4 (30 ~ 52)
    Tree(x + newSize, y + newSize, newSize); // 5 (33 ~ 55)
    Tree(x + newSize, y + newSize * 2, newSize); // 6 (35 ~ 38)

    Tree(x + newSize * 2, y, newSize); // 7 (60 ~ 62)
    Tree(x + newSize * 2, y + newSize, newSize); // 8
    Tree(x + newSize * 2, y + newSize * 2, newSize); // 9
}
function isPossible(x, y, size) {
    let value = testcaseArray[x][y];
    for (let i = x; i < x + size; i++) {
        for (let j = y; j < y + size; j++) {
            if (value != testcaseArray[i][j]) {
                return false;
            }
        }
    }
    return true;
}

Tree(0, 0, n);
console.log(result.filter((x) => x === -1).length);
console.log(result.filter((x) => x === 0).length);
console.log(result.filter((x) => x === 1).length);
