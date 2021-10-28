    const fs = require("fs");
    const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
    let input = fs.readFileSync(filePath).toString().split("\n");

    solution(+input[0]);
    function solution(num) {
        result = "";
        for (let i = num; i > 0; i--) {
            for (let j = 0; j <= i - 2; j++) {
                result += " ";
            }
            for (let j = 0; j <= num - i; j++) {
                result += "*";
            }
            result += "\n";
        }

        console.log(result);
    }
