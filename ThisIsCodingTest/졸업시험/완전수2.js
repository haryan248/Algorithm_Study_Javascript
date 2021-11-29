let num = 1;
let answer = [];
let k = 4;
while (true) {
    if (completeNumber(num) === 2 * num) answer.push(num);
    num++;
    if (answer.length === k) {
        break;
    }
}

console.log(`${k}번째로 큰 완전수는 ${answer[answer.length - 1]}`);

function completeNumber(num) {
    let answer = [];
    for (let i = 1; i * i < num + 1; i++) {
        if (num % i === 0) {
            answer.push(i);
            answer.push(num / i);
        }
    }
    const set = new Set(answer);
    const uniqueArr = [...set];
    return uniqueArr.reduce((a, b) => a + b, 0);
}
