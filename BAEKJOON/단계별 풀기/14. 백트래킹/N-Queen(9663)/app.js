const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let number = +input;
solution(number);
function solution(params) {
    const n = parseInt(params);
    let count = 0;
    // array[i] 는 i열에 퀸을 놓은 행의 index
    const array = new Array(n).fill(0);

    dfs(0);
    console.log(count);

    function dfs(x) {
        // 퀸을 n개까지 다 놓았다면 count를 한다.
        if (x == n) {
            count++;
        } else {
            // 각 행에다 퀸을 놓아본다.
            for (let i = 0; i < n; i++) {
                array[x] = i;
                // 만약 x위치에 퀸을 놓을 수 있다면 다음 열로 넘어간다.
                if (check(x)) {
                    dfs(x + 1);
                }
            }
        }
    }

    // x 위치에 퀸을 놓을 수 있는지 없는지 확인
    function check(x) {
        // x 이전의 열들을 모두 검사
        for (let i = 0; i < x; i++) {
            // 같은 행 X
            if (array[x] == array[i]) {
                return false;
            }
            // 대각선 X
            if (Math.abs(array[x] - array[i]) == x - i) {
                return false;
            }
        }
        return true;
    }
}
