const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, k] = input[0].split(" ").map((i) => Number(i));
let coins = [];
for (let i = 1; i < n + 1; i++) {
    coins.push(Number(input[i]));
}
let d = Array.from({ length: k + 1 }, () => 0);
// s : 갯수가 들어갈 배열
// s[i] = i + 1원을 만들 수 있는 경우의 수
// s[9] = 10원을 만들 수 있는 경우의 수
// i번째 동전의 가치(C[i])까지만의 갯수 구하기
d[0] = 1;
for (let i = 0; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
        if (j >= coins[i]) {
            d[j] += d[j - coins[i]];
        }
    }
}

console.log(d[k]);
