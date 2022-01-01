function solution(triangle) {
    const dp = triangle.slice();

    // (원본 배열 길이 - 2) 라인부터 0까지 진행하는 것에 주의하자
    for (let i = dp.length - 2; i >= 0; i--) {
        for (let j = 0; j < dp[i].length; j++) {
            dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
        }
    }

    return dp[0][0];
}
