function solution(brown, yellow) {
    var answer = [];
    let total = brown + yellow;
    let candidate = [];
    for (let i = total; i >= 1; i--) {
        if (total % i === 0 && i >= total / i) {
            candidate.push([i, total / i]);
        }
    }
    candidate.forEach((e) => {
        let range = e[0] * 2 + e[1] * 2 - 4;
        if (range === brown) {
            if (e[0] * e[1] - range === yellow) {
                answer.push(e[0], e[1]);
            }
        }
    });
    return answer;
}
