const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = +input.shift();
let cursor = 0;
let result = [];
for (let i = 1; i <= n; i++) {
    let [n, m] = input[cursor].split(" ").map((item) => +item.trim());
    let temp = input[++cursor].split(" ").map((item) => +item);
    // m
    // 몇 번째로 인쇄되었는지 궁금한 문서가 현재 Queue에서 몇 번째에 놓여 있는지를 나타내는 정수
    let pointer = m;
    let flag = false;
    let cnt = 0;

    while (flag !== true) {
        if (temp.length === 1) {
            result.push(cnt + 1);
            break;
        }
        for (let k = 1; k < temp.length; k++) {
            if (temp[0] < temp[k]) {
                temp.push(temp.shift());
                pointer--;
                if (pointer === -1) {
                    pointer = temp.length - 1;
                }
                break;
            }
            if (k === temp.length - 1) {
                temp.shift();
                cnt++;
                pointer--;
                if (pointer === -1) {
                    result.push(cnt);
                    flag = true;
                    break;
                }
            }
        }
    }
    cursor += 1;
}
console.log(result.join("\n"));
