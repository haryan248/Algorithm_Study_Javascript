const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, k] = input[0].split(" ").map((item) => +item);
let queue = Array.from({ length: n }, (v, i) => i + 1);
let result = [];
// 1,2,3,4,5,6,7
// 1,2,4,5,[],7
for (let i = 0; i < n; i++) {
    for (let i = 0; i < k - 1; i++) {
        let num = queue.shift();
        queue.push(num);
    }
    let num = queue.shift();
    result.push(num);
}
console.log(`<${result.join(", ").trim()}>`);
