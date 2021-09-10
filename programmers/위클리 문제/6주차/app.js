function solution(weights, head2head) {
    let answer = [];
    let count = weights.length;
    let win_rate = Array.from({ length: weights.length }, () => 0);
    let high_weight_rate = Array.from({ length: weights.length }, () => 0);

    weights.forEach((_, i) => {
        let temp = head2head[i].split("");
        high_weight_rate[i] = temp.filter((x, index) => x === "W" && weights[i] < weights[index]).length;
        let win = temp.filter((x) => x === "W").length;
        let lose = temp.filter((x) => x === "L").length;
        win_rate[i] = win + lose === 0 ? 0 : (win / (win + lose)) * 100;
    });
    for (let i = 0; i < count; i++) {
        let temp = [win_rate[i], high_weight_rate[i], weights[i], i + 1];
        answer.push(temp);
    }
    answer.sort((next, now) => now[0] - next[0] || now[1] - next[1] || now[2] - next[2] || next[3] - now[3]);
    return answer.map((x) => x[3]);
}
// weights = [60, 70, 60];
// head2head = ["NNN", "NNN", "NNN"];
// console.log(solution(weights, head2head));
