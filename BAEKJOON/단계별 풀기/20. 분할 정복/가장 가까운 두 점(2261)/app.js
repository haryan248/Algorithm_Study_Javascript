const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = +input.shift();
let testcase = [];

for (let i = 0; i < n; i++) {
    let temp = input[i].split(" ").map(Number);
    testcase.push(temp);
}
xComp(testcase);

// 두 Point의 거리를 반환하는 메소드 (x^2 + y^2)
function dist(o1, o2) {
    return (o1[0] - o2[0]) * (o1[0] - o2[0]) + (o1[1] - o2[1]) * (o1[1] - o2[1]);
}
function xComp(arry) {
    arry.sort((next, now) => next[0] - now[0]);
}
function yComp(arry) {
    arry.sort((next, now) => next[1] - now[1]);
}
// 분할정복을 할 중심 메소드
function closest(start, end) {
    // p[start] ~ p[end] 원소가 3개 이하라면 브루트포스로 거리 반환
    if (end - start === 1) {
        return dist(testcase[start], testcase[end]);
    }

    // 가운데 index를 구한다.
    let mid = Math.floor((start + end) / 2);

    // left는 start ~ mid, right는 mid+1 ~ end로 분할하여 탐색
    let left = closest(start, mid);
    let right = closest(mid, end);

    // 각 각의 거리 중 최솟값을 구한 뒤 반환
    let minDist = Math.min(left, right);

    // 중간 영역의 최소 거리
    let candidate_list = [];
    for (let i = start; i < end + 1; i++) {
        if ((testcase[mid][0] - testcase[i][0]) * (testcase[mid][0] - testcase[i][0]) < minDist) {
            candidate_list.push(testcase[i]);
        }
    }
    yComp(candidate_list);

    for (let i = 0; i < candidate_list.length - 1; i++) {
        for (let j = i + 1; j < candidate_list.length; j++) {
            if ((candidate_list[i][1] - candidate_list[j][1]) * (candidate_list[i][1] - candidate_list[j][1]) < minDist) {
                minDist = Math.min(minDist, dist(candidate_list[i], candidate_list[j]));
            } else {
                break;
            }
        }
    }

    return minDist; // 둘 중 작은 값을 반환
}

console.log(closest(0, n - 1));
