const fs = require("fs");
// split 조절
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let N = +input[0].split(" ")[0];
let M = +input[0].split(" ")[1];
let result = [];

function dfs(start) {
    if (result.length === M) {
        console.log(result.join(" "));
        return;
    }
    for (let i = start; i <= N; i++) {
        if (result.indexOf(i) === -1) {
            result.push(i);
            dfs(i + 1);
            result.pop();
        }
    }
}
dfs(1);
    