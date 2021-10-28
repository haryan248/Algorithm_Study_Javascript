const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = BigInt(input.shift());
let arry = [
    [1, 1],
    [1, 0],
];
let mod = BigInt(1000000007);

function dnq(A, n) {
    if (n === BigInt(1)) return A;
    let x = dnq(A, n / BigInt(2));
    if (n % BigInt(2) === 0n) {
        // 짝수
        return prod(x, x); // 아닐경우 A^n * A^n
    } else {
        // 홀수
        return prod(prod(x, x), A); //홀수일 경우 A^n, A^n 하고 A를 곱한게 답
    }
}
// 함수 prod는 n*n 행렬의 행렬곱을 반환
function prod(A, B) {
    let result = [];
    for (let i = 0; i < 2; i++) {
        let temp = [];
        for (let j = 0; j < 2; j++) {
            let sum = BigInt(0);
            for (let k = 0; k < 2; k++) {
                sum += (((BigInt(A[i][k]) % mod) * BigInt(B[k][j])) % mod) % mod;
            }
            temp.push(sum % mod);
        }
        result.push(temp);
    }
    return result;
}
console.log(String(BigInt(dnq(arry, n)[0][1]) % mod));
