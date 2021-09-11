function solution(board, skill) {
    var answer = 0;
    let col = board.length;
    let row = board[0].length;
    let array = Array.from({ length: col }, () => new Array(row).fill(0));
    let result_arr = [];
    let index = 0;

    for (let skill_index of skill) {
        let degree = skill_index[5];
        let start = skill_index.slice(1, 3);
        let end = skill_index.slice(3, 5);
        let type = skill_index[0];

        array.forEach((x, i) => {
            let temp = "";
            if (i <= end[0] && i >= start[0]) {
                temp += String(0).repeat(start[1] - 0) + String(degree).repeat(end[1] - start[1] + 1) + String(0).repeat(row - 1 - end[1]);
            } else {
                temp += String(0).repeat(row);
            }
            let temp_list = [];
            if (type === 1) {
                temp_list = x.map((e, i) => {
                    return e - temp.split("").map(Number)[i];
                });
            } else {
                temp_list = x.map((e, i) => {
                    return e + temp.split("").map(Number)[i];
                });
            }
            array.map((value, index) => value + secondArray[index]);
            if (index === col - 1) {
                index = 0;
            } else {
                index++;
            }
            console.log(index, result_arr, result_arr[index]);

            result_arr.push(temp_list);
        });
    }
    result_arr.forEach((x) => {
        x.forEach((e, i) => {
            board[index][i] = e + board[index][i];
        });
        if (index === col - 1) {
            index = 0;
        } else {
            index++;
        }
    });
    board.forEach((element) => {
        answer += element.filter((x) => x > 0).length;
    });
    console.log(answer);
    return answer;
}

board = [
    [5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5],
];

skill = [
    [1, 0, 0, 3, 4, 4],
    [1, 2, 0, 2, 3, 2],
    [2, 1, 0, 3, 1, 2],
    [1, 0, 1, 3, 3, 1],
];

// board = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// skill = [
//     [1, 1, 1, 2, 2, 4],
//     [1, 0, 0, 1, 1, 2],
//     [2, 2, 0, 2, 0, 100],
// ];
solution(board, skill);
