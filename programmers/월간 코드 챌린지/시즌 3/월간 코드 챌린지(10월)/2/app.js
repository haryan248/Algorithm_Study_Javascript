function solution(n, left, right) {
    let resultArr = "";
    let start_row = Math.floor(left / n);
    let start_col = (left % n) + 1;

    let end_row = Math.floor(right / n);
    let end_col = (right % n) + 1;
    let start = start_row + 1;
    let diff = start_row + 1;
    while (true) {
        if (start === end_row + 2) break;
        let temp = [];
        for (let j = start; j < start + diff; j++) {
            temp.push(start);
        }

        let fill = n - temp.length;
        let first = start;
        for (let i = 0; i < fill; i++) {
            first++;
            temp.push(first);
        }
        start++;
        diff++;
        resultArr += temp.join(" ") + " ";
    }
    resultArr = resultArr
        .trim()
        .split(" ")
        .map((i) => Number(i));

    return resultArr.slice(left - n * start_row, right - n * start_row + 1);
}
let n = 4;
let left = 7;
let right = 14;
// console.log(solution(n, left, right));
solution(n, left, right);
