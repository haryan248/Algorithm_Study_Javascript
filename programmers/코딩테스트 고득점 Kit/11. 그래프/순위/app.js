function solution(n, results) {
    const battle = [...Array(n + 1)].map((_) => Array(n + 1).fill(false));

    results.forEach(([a, b]) => (battle[a][b] = true));
    for (var i = 1; i <= n; i++) for (var j = 1; j <= n; j++) for (var k = 1; k <= n; k++) if (battle[j][i] && battle[i][k]) battle[j][k] = true;

    var ans = 0;
    for (var i = 1; i <= n; i++) {
        var cnt = 0;
        for (var j = 1; j <= n; j++) if (battle[i][j] || battle[j][i]) cnt++;
        if (cnt === n - 1) ans++;
    }
    return ans;
}
