const fs = require("fs");
const { exit } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const number = +input.shift();
let testcaseArray = input.map((item) =>
    item
        .trim()
        .split(" ")
        .map((e) => +e)
);
let min = Number.MAX_SAFE_INTEGER;
let select = new Array(number).fill(0);
function dfs(index, cnt) {
    if (cnt === parseInt(number / 2)) {
        let start = 0;
        let link = 0;
        for (let i = 0; i < number; i++) {
            for (let j = 0; j < number; j++) {
                if (select[i] && select[j]) {
                    start += testcaseArray[i][j];
                } else if (!select[i] && !select[j]) {
                    link += testcaseArray[i][j];
                }
            }
        }
        min = Math.min(min, Math.abs(start - link));
    }

    for (let i = index; i < number; i++) {
        if (select[i] === 0) {
            select[i] = 1;
            dfs(i + 1, cnt + 1);
            select[i] = 0;
        }
    }
}
dfs(0, 0);
console.log(min);
