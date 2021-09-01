const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let number = +input.shift();
let testcaseArray = [];
for (let i = 0; i < number; i++) {
    testcaseArray.push(+input[i].trim());
}
testcaseArray.sort((a, b) => a - b);
testcaseArray = testcaseArray.map((item) => BigInt(item));

let interval = [];
for (let i = 1; i < number; i++) {
    interval.push(testcaseArray[i] - testcaseArray[i - 1]);
}
function gcd(num1, num2) {
    if (num2 == 0) return num1;
    else return gcd(num2, num1 % num2);
}

let prev = interval[0];
for (let i = 1; i < interval.length; i++) {
    prev = gcd(prev, interval[i]);
}
let result = [];
for (let i = 2n; i <= sqrt(prev) + 1n; i++) {
    if (prev % i == 0) {
        result.push(i);
        result.push(prev / i);
    }
}
result.push(prev);
let set = result.filter((element, index) => {
    return result.indexOf(element) === index;
});
console.log(set.join(" ").trim());

function sqrt(value) {
    if (value < 0n) {
        throw "square root of negative numbers is not supported";
    }

    if (value < 2n) {
        return value;
    }

    function newtonIteration(n, x0) {
        const x1 = (n / x0 + x0) >> 1n;
        if (x0 === x1 || x0 === x1 - 1n) {
            return x0;
        }
        return newtonIteration(n, x1);
    }

    return newtonIteration(value, 1n);
}