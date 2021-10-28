const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input[0]);
const card = input[1].trim().split(" ").map(Number);
card.sort((a, b) => a - b);
const m = parseInt(input[2]);
const m_arr = input[3].split(" ").map(Number);
let result = [];
// map 풀이
// const myMap = new Map();
// n_arr.forEach((v) => {
//     if (myMap.has(v)) myMap.set(v, myMap.get(v) + 1);
//     //key, value
//     else myMap.set(v, 1);
// });
// const answer = [];
// m_arr.forEach((v) => answer.push(myMap.get(v) || 0));
// console.log(answer.join(" "));

//이분 탐색
function down_binary(target) {
    let left = 0;
    let right = n - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        // 찾으려는 값이 중간값보다 작거나 같으면
        if (card[mid] >= target) {
            right = mid - 1;
            // 찾으려는 값이 중간값 크면
        } else if (card[mid] < target) {
            left = mid + 1;
        }
    }
    return left;
}
function up_binary(target) {
    let left = 0;
    let right = n - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        // 찾으려는 값이 중간값보다 작으면
        if (card[mid] > target) {
            right = mid - 1;
        } else if (card[mid] <= target) {
            // 찾으려는 값이 중간값 크거나 같으면
            left = mid + 1;
        }
    }
    return left;
}

for (let i = 0; i < m; i++) {
    result.push(up_binary(m_arr[i]) - down_binary(m_arr[i]));
}
console.log(result.join(" "));
