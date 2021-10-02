function dp(start, end, arr, d) {
    if (memo[start][end] !== undefined) {
        return memo[start][end];
    } else if (start === end - 1) {
        memo[start][end] = 0;
        return 0;
    } else {
        let min = Infinity;
        for (let i = start + 1; i < end; i++) {
            min = Math.min(min, dp(start, i, arr, d) + dp(i, end, arr, d) + d[start] * d[i] * d[end]);
        }
        memo[start][end] = min;
        return min;
    }
}

const matrix = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .slice(1)
    .map((el) => el.split(" ").map(Number));

const memo = new Array(matrix.length + 1).fill(0).map((el) => new Array(matrix.length + 1));

const d = new Array(matrix.length + 1).fill(0).map((el, idx) => (idx === 0 ? (el = matrix[0][0]) : (el = matrix[idx - 1][1])));

console.log(dp(0, matrix.length, matrix, d));
