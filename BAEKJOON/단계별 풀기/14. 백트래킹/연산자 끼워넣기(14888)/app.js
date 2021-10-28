const fs = require("fs");
const { exit } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let num_list = input[1].split(" ").map((item) => +item);
let oper_list = input[2].split(" ").map((item) => +item);
const opCnt = oper_list.reduce((a, b) => a + b);
let max_result = Number.MIN_SAFE_INTEGER;
let min_result = Number.MAX_SAFE_INTEGER;
function dfs(depth, result) {
    if (depth === opCnt) {
        max_result = Math.max(max_result, result);
        min_result = Math.min(min_result, result);
        return;
    }
    for (let i = 0; i < 4; i++) {
        let temp = result;
        if (oper_list[i] === 0) continue;
        if (i === 0) {
            result += num_list[depth + 1];
        } else if (i === 1) {
            result -= num_list[depth + 1];
        } else if (i === 2) {
            result *= num_list[depth + 1];
        } else if (i === 3) {
            result = result < 0 ? -1 * Math.floor(Math.abs(result) / num_list[depth + 1]) : Math.floor(result / num_list[depth + 1]);
        }
        oper_list[i]--;
        dfs(depth + 1, result);
        oper_list[i]++;
        result = temp;
    }
}
dfs(0, num_list[0], 0);
console.log(`${max_result} \n${min_result}`);
