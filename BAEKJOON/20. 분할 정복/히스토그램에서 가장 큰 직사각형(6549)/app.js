const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let testcaseArray = [];
for (let i = 0; i < input.length - 1; i++) {
    testcaseArray = input[i]
        .trim()
        .split(" ")
        .map((item) => +item);
    let n = testcaseArray.shift();
    console.log(getArea(0, n - 1));
}

function getArea(lo, hi) {
    if (lo === hi) {
        return testcaseArray[lo];
    }
    let mid = Math.floor((lo + hi) / 2);
    /*
     *  [2번 과정]
     *  mid를 기점으로 양쪽으로 나누어 양쪽 구간 중 큰 넓이를 저장
     *  왼쪽 부분 : lo ~ mid
     *  오른쪽 부분 : mid + 1 ~ hi
     */
    let leftArea = getArea(lo, mid);
    let rightArea = getArea(mid + 1, hi);

    let max = Math.max(leftArea, rightArea);
    // 양쪽 구간 중 큰 값과 중간 구간을 비교하여 더 큰 넓이로 갱신
    max = Math.max(max, getMidArea(lo, hi, mid));
    return max;
}

function getMidArea(lo, hi, mid) {
    let toLeft = mid;
    let toRight = mid;

    let height = testcaseArray[mid];
    let maxArea = height;

    // 양 끝 범위를 벗어나기 전까지 반복
    while (lo < toLeft && toRight < hi) {
        if (testcaseArray[toLeft - 1] < testcaseArray[toRight + 1]) {
            toRight++;
            height = Math.min(height, testcaseArray[toRight]);
        } else {
            toLeft--;
            height = Math.min(height, testcaseArray[toLeft]);
        }

        //최대 넓이 갱신
        maxArea = Math.max(maxArea, height * (toRight - toLeft + 1));
    }
    // 오른쪽 구간을 끝까지 탐색 못했다면 마저 탐색한다.
    while (toRight < hi) {
        toRight++;
        height = Math.min(height, testcaseArray[toRight]);
        maxArea = Math.max(maxArea, height * (toRight - toLeft + 1));
    }

    // 왼쪽 구간을 끝까지 탐색 못했다면 마저 탐색한다.
    while (lo < toLeft) {
        toLeft--;
        height = Math.min(height, testcaseArray[toLeft]);
        maxArea = Math.max(maxArea, height * (toRight - toLeft + 1));
    }

    return maxArea;
}
