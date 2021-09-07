const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, k] = input[0].split(" ").map(BigInt);
let mod = BigInt(1000000007);
const pow = (a, b, c) => {
    if (b == 0) {
        return BigInt(1);
    }

    const temp = pow(a, BigInt(parseInt(b / BigInt(2))), c);
    if (b % BigInt(2)) {
        return (((temp * temp) % c) * a) % c;
    } else {
        return (temp * temp) % c;
    }
};

let factorial = new Array(Number(n) + 1).fill(BigInt(1));
for (let i = 2; i <= Number(n); i++) {
    factorial[i] = (factorial[i - 1] * BigInt(i)) % mod;
}
let A = factorial[n];
let B = (factorial[n - k] * factorial[k]) % mod;
console.log(String(((A % mod) * (pow(B, mod - BigInt(2), mod) % mod)) % mod));
