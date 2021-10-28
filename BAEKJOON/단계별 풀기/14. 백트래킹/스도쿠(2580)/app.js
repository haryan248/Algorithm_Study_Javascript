const fs = require("fs");
const { exit } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let testcaseArray = input.map((item) => item.trim().split(" "));
let result = "";
let zeroArray = [];
// 0의 개수 미리 카운트
for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        if (+testcaseArray[i][j] === 0) {
            zeroArray.push([i, j]);
        }
    }
}
function dfs(x) {
    // 0다 채우면 결과 출력
    if (x === zeroArray.length) {
        for (let i = 0; i < 9; i++) {
            result += testcaseArray[i].join(" ") + "\n";
        }
        console.log(result);
        exit();
    }
    let col = zeroArray[x][0];
    let row = zeroArray[x][1];
    // 스도쿠 수가 0이면
    let val = check(col, row);
    for (let k = 0; k < val.length; k++) {
        testcaseArray[col][row] = val[k].toString();
        dfs(x + 1);
        testcaseArray[col][row] = "0";
    }
}

function check(col, row) {
    let templist = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 9; i++) {
        // 열 검사
        let colCheck = templist.indexOf(+testcaseArray[i][row]);
        if (colCheck !== -1) {
            templist.splice(colCheck, 1);
        }
        // 행 검사
        let rowCheck = templist.indexOf(+testcaseArray[col][i]);
        if (rowCheck !== -1) {
            templist.splice(rowCheck, 1);
        }
    }
    let startCol = parseInt(col / 3) * 3;
    let startRow = parseInt(row / 3) * 3;
    // 3x3 박스 검사
    for (let i = startCol; i < startCol + 3; i++) {
        for (let j = startRow; j < startRow + 3; j++) {
            let boxCheck = templist.indexOf(+testcaseArray[i][j]);
            if (boxCheck !== -1) {
                templist.splice(boxCheck, 1);
            }
        }
    }
    return templist;
}
dfs(0);
