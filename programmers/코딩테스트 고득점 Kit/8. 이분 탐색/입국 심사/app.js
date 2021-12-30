function solution(n, times) {
    times.sort((a, b) => a - b);
    let left = 1;
    let right = n * times[times.length - 1];
    let answer = right; // 최대값.
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let count = 0;
        times.forEach((value) => {
            count += Math.floor(mid / value); // 한 사람당 몇명 할 수 있는지
            if (count >= n) {
                answer = Math.min(mid, answer); // 최솟값
                return;
            }
        });
        if (count >= n) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return answer;
}
