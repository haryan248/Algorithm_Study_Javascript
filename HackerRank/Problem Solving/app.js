/*
 * Complete the 'longestSubarray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let num = Number(input[0].trim());
let arr = [];
for (let i = 1; i < num + 1; i++) {
    arr.push(Number(input[i].trim()));
}
// console.log(arr);

// function longestSubarray(arr) {
//     // Write your code here
//     const sortedArr = arr.sort((a, b) => a - b);
//     const obj = {};
//     for (const value of sortedArr) {
//         if (!obj[value]) {
//             obj[value] = 1;
//         } else {
//             obj[value]++;
//         }
//     }
//     let answer = 0;

//     for (const [key, value] of Object.entries(obj)) {
//         let first = obj[key];
//         let next = obj[String(Number(key) + 1)] === undefined ? 0 : obj[String(Number(key) + 1)];
//         answer = Math.max(first + next, answer);
//     }
//     console.log(obj);
//     // return answer;
// }
function longestSubarray(arr) {
    if (A.length < 2) return A.length;

    let best = 1;
    let bestLower = 1;
    let bestHigher = 1;

    for (let i = 1; i < A.length; i++) {
        if (A[i] == A[i - 1]) {
            bestLower = bestLower + 1;
            bestHigher = bestHigher + 1;
        } else if (A[i] - 1 == A[i - 1]) {
            bestLower = 1 + bestHigher;
            bestHigher = 1;
        } else if (A[i] + 1 == A[i - 1]) {
            bestHigher = 1 + bestLower;
            bestLower = 1;
        } else {
            bestLower = 1;
            bestHigher = 1;
        }

        best = Math.max(best, bestLower, bestHigher);
    }

    return best;
}
longestSubarray(arr);
