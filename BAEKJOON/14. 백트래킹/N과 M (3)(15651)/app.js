const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let N = +input[0].split(" ")[0];
let M = +input[0].split(" ")[1];
let result = "";
let output = []
function dfs() {
    if (output.length === M) {
        result += `${output.join(" ")}\n`;
        return;
    }
    for (let i = 1; i <= N; i++) {
        output.push(i);
        dfs();
        output.pop();
    }
}
dfs();
console.log(result.trim());
