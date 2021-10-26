let answer = -1;
function solution(k, dungeons) {
    let result = [];
    dfs(0, k, dungeons, result);
    return answer;
}
function dfs(x, k, dungeons, result) {
    for (let i = 0; i < dungeons.length; i++) {
        if (k >= dungeons[i][0] && result.indexOf(i) === -1) {
            result.push(i);
            dfs(x + 1, k - dungeons[i][1], dungeons, result);
            result.pop();
        }
    }
    answer = Math.max(answer, x);
}
