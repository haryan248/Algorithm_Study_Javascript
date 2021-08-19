const { reverse } = require("dns");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().toLowerCase();
const result = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
    result[input.charCodeAt(i) - 97]++;
}
console.log(result);
const max = Math.max(...result);
const index = result.indexOf(max);

let isSame = false;

for (let j = 0; j < 26; j++) {
    if (result[j] === max && index != j) {
        isSame = true;
        break;
    }
}

console.log(isSame ? "?" : String.fromCharCode(index + 65));
