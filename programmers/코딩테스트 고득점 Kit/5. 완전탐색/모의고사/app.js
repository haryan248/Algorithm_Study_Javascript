function solution(answers) {
    var answer = [];
    let first = [1, 2, 3, 4, 5];
    let second = [2, 1, 2, 3, 2, 4, 2, 5];
    let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let correct = [0, 0, 0];
    answers.forEach((e, index) => {
        if (first[index % first.length] === e) {
            correct[0]++;
        }
        if (second[index % second.length] === e) {
            correct[1]++;
        }
        if (third[index % third.length] === e) {
            correct[2]++;
        }
    });
    let max = Math.max(...correct);

    correct.forEach((e, index) => {
        if (e === max) answer.push(index + 1);
    });
    return answer;
}
