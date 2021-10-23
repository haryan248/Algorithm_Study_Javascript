function dfs(x, y, result) {
    if (x < 0 || x >= N || y < 0 || y >= N) {
        return false;
    }
    // 상, 하, 좌, 우
    if (map[x][y] === 1) {
        map[x][y] = 0;
        result.push([x, y]);
        dfs(x - 1, y, result);
        dfs(x + 1, y, result);
        dfs(x, y + 1, result);
        dfs(x, y - 1, result);
    }

    res.push(allVisit(map));
}
let res = []
function allVisit() {
    return;
}
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        let result = [];
        if (map[i][j] === 2 && dfs(i, j, result)) {
            res.push(1);
        }
    }
}
