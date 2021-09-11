function solution(n, k) {
    var answer = 0;
    let format_n;
    // 진수 변환
    format_n = n.toString(k);
    format_n.split("0").forEach((element) => {
        if (element !== "" && isPrime(Number(element))) {
            answer++;
        }
    });
    return answer;
}
// 소수 확인
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    if (n === 2 || n === 3) {
        return true;
    }
    if (n % 2 === 0) {
        return false;
    }
    let divisor = 3;
    let limit = Math.sqrt(n);
    while (limit >= 3) {
        if (n % divisor === 0) {
            return false;
        }
        divisor += 2;
    }
    return true;
}

n = 1000000;
k = 5;
console.log(solution(n, k));
// 1. 10진수 -> 2진수

// 0P0처럼 소수 양 쪽에 0이 있는 경우
// P0처럼 소수 오른쪽에만 0이 있고 왼쪽에는 아무것도 없는 경우
// 0P처럼 소수 왼쪽에만 0이 있고 오른쪽에는 아무것도 없는 경우
// P처럼 소수 양쪽에 아무것도 없는 경우
// 211020101011
// 211 020  011
// 211{0}""{0}2{0}2{0}110"""
// [ '211', '', '2', '2', '11', '' ]
