const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let N = +input[0].split(" ")[0];
let M = +input[0].split(" ")[1];
let result = [];
let output = "";
function dfs(start) {
    if (result.length === M) {
        output += `${result.join(" ")}\n`;
        return;
    }
    for (let i = start; i <= N; i++) {
        result.push(i);
        dfs(i);
        result.pop();
    }
}
dfs(1);
console.log(output.trim());
