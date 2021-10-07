function solution(n, m, x, y, queries) {
    let count = 0;
    let result = [0, 0, 0, 0];
    for (let k = 0; k < queries.length; k++) {
        let command = queries[k][0];
        let move = queries[k][1];
        if (command === 0) {
            result[0] += move;
        } else if (command === 1) {
            result[1] += move;
        } else if (command === 2) {
            result[2] += move;
        } else {
            result[3] += move;
        }
    }
    let max_row = Math.max(result[0], result[1]); //1
    let max_col = Math.max(result[2], result[3]); //6
    console.log(max_row, max_col);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (Math.abs(x - j) > max_row || Math.abs(y - i) > max_col) continue;
            let now_x = i;
            let now_y = j;
            for (let k = 0; k < queries.length; k++) {
                let command = queries[k][0];
                let move = queries[k][1];
                if (now_x === 0) {
                    if (command === 2) continue;
                    else if (now_y === 0 && command === 0) continue;
                    else if (now_y === m - 1 && command === 1) continue;
                } else if (now_x === n - 1) {
                    if (command === 3) continue;
                    else if (now_y === 0 && command === 0) continue;
                    else if (now_y === m - 1 && command === 1) continue;
                } else if (now_y === 0 && command === 0) continue;
                else if (now_y === m - 1 && command === 1) continue;

                if (command === 0) {
                    now_y -= move;
                } else if (command === 1) {
                    now_y += move;
                } else if (command === 2) {
                    now_x -= move;
                } else {
                    now_x += move;
                }
                if (now_x < 0) {
                    now_x = 0;
                } else if (now_x > n - 1) {
                    now_x = n - 1;
                }
                if (now_y < 0) {
                    now_y = 0;
                } else if (now_y > m - 1) {
                    now_y = m - 1;
                }
            }
            if (now_x === x && now_y === y) {
                count++;
            }
        }
    }
    console.log(count);
    return count;
}
let n = 2;
let m = 5;
let x = 0;
let y = 1;
let queries = [
    [3, 1],
    [2, 2],
    [1, 1],
    [2, 3],
    [0, 1],
    [2, 1],
];
// let n = 2;
// let m = 5;
// let x = 0;
// let y = 1;
// let queries = [
//     [3, 1],
//     [2, 2],
//     [1, 1],
//     [2, 3],
//     [0, 1],
//     [2, 1],
// ];
solution(n, m, x, y, queries);
