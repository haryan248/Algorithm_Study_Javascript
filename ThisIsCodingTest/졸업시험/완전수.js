const number = [121, 486, 496, 512];

number.forEach((i) => {
    if (completeNumber(i) === 2 * i) {
        console.log("완전수입니다.");
    } else console.log("완전수가 아닙니다.");
});

function completeNumber(num) {
    let answer = [];
    for (let i = 1; i < num + 1; i++) {
        if (num % i === 0) {
            answer.push(i);
        }
    }
    return answer.reduce((a, b) => a + b, 0);
}
