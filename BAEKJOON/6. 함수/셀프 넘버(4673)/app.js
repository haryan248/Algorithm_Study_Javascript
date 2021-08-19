const { reverse } = require("dns");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let arr = new Array(10000).fill(0);

function operator(index) {
    let answer = 0;
    let startNumber = index;
    if (index < 10) {
        return startNumber + index;
    } else {
        index = String(index);
        // 자리수 더하기
        for (var i = 0; i < index.length; i++) {
            answer += parseInt(index[i]);
        }
        if (answer + startNumber > 10000) return;
        return startNumber + answer;
    }
}

for (let i = 1; i <= 10000; i++) {
    result = operator(i);
    arr[result] = 1;
}
arr.filter((element, i) => {
    if (element !== 1 && i !== 0) {
        console.log(i);
    }
});
