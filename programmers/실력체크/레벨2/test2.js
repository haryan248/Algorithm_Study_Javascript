function solution(brown, yellow) {
    var answer = [];
    let total = brown + yellow;
    for (let i = 1; i < Math.floor(total / 2); i++) {
        if (total % i === 0) {
            let x = i;
            let y = total / i;
            if (2 * x + 2 * y - 4 === brown) {
                answer = [x, y];
            }
        }
    }
    return answer;
}
brown = 10;
yellow = 2;
console.log(solution(brown, yellow));
