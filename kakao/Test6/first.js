function solution(board, skill) {
    var answer = 0;
    for (let skill_index of skill) {
        let degree = skill_index[5];
        let start = skill_index.slice(1, 3);
        let end = skill_index.slice(3, 5);
        if (skill_index[0] === 1) {
            attack(board, start, end, degree);
        } else {
            recover(board, start, end, degree);
        }
    }

    board.forEach((element) => {
        answer += element.filter((x) => x > 0).length;
    });
    return answer;
}
function attack(board, start, end, degree) {
    for (let i = start[0]; i <= end[0]; i++) {
        for (let j = start[1]; j <= end[1]; j++) {
            board[i][j] -= degree;
        }
    }
}
function recover(board, start, end, degree) {
    for (let i = start[0]; i <= end[0]; i++) {
        for (let j = start[1]; j <= end[1]; j++) {
            board[i][j] += degree;
        }
    }
}