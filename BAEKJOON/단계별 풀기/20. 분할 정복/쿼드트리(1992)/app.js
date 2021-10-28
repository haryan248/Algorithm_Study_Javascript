const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = +input.shift();
let testcaseArray = [];
let result = [];
for (let i = 0; i < n; i++) {
    let temp = input[i]
        .trim()
        .split("")
        .map((item) => +item);
    testcaseArray.push(temp);
}
function QuadTree(x, y, size) {
    // 압축이 가능할 경우 하나의 색상으로 압축해준다.
    if (isPossible(x, y, size)) {
        result.push(testcaseArray[x][y]);
        return;
    }

    let newSize = size / 2; // 압축이 불가능 할 경우 사이즈를 절반으로 나누어야 한다.}
    result.push("(");
    QuadTree(x, y, newSize); // 왼쪽 위
    QuadTree(x, y + newSize, newSize); // 오른쪽 위
    QuadTree(x + newSize, y, newSize); // 왼쪽 아래
    QuadTree(x + newSize, y + newSize, newSize); // 오른쪽 아래
    result.push(")");
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

QuadTree(0, 0, n);
console.log(result.join(""));
