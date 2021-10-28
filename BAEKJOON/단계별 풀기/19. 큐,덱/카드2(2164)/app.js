const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = +input.shift();

// 맨위 1, 2, 3, 4, 5, 6 맨아래
// 1. 제일 위 카드 버리기
// 2. 제일 위를 제일 밑으로 이동
// 3. 1, 2 반복
let card = Array.from({ length: n }, (v, i) => i + 1);
let pointer = 0;
for (let i = 0; i < n - 1; i++) {
    pointer++;
    if (pointer === card.length - 1) {
        break;
    }
    let top = card[pointer];
    pointer++;
    card.push(top);
}
console.log(card[pointer]);
