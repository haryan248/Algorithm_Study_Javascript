const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = +input[0].split(" ")[0];
let m = +input[0].split(" ")[1];

//  n! / (n-m)!m!
const getTwoFive = (x) => {
    let five = 0;
    let two = 0;
    for (let i = 2; i <= x; i *= 2) {
        two += parseInt(x / i);
    }
    for (let i = 5; i <= x; i *= 5) {
        five += parseInt(x / i);
    }
    return [two, five];
};

const [nt, nf] = getTwoFive(n);
const [mt, mf] = getTwoFive(m);
const [nmt, nmf] = getTwoFive(n - m);
const two = nt - mt - nmt;
const five = nf - mf - nmf;
console.log(Math.min(two, five));
// 그리고 조합 공식에서 분자의 값에서 분모의 값들을 빼주고,
// 2의 배수의 개수와 5의 배수의 개수를 구한 값 중 작은 값을 출력하면 된다.
