function solution(N, costs) {
    const INF = Number.MAX_VALUE;
    var answer = 0;
    let graph = new Array(N + 1).fill(0).map(() => new Array(N + 1).fill(INF));

    // 대각선의 비용은 0으로 초기화
    // 자기자신으로 가는 비용은 없으므로
    for (let i = 1; i < N + 1; i++) {
        for (let j = 1; j < N + 1; j++) {
            if (i === j) {
                graph[i][j] = 0;
            }
        }
    }

    for (const cost of costs) {
        let [a, b, c] = cost;
        graph[a][b] = Math.min(graph[a][b], c);
    }
    console.log(graph);

    for (let k = 1; k < N + 1; k++) {
        for (let i = 1; i < N + 1; i++) {
            for (let j = 1; j < N + 1; j++) {
                graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
            }
        }
    }
    for (let i = 1; i < N; i++) {
        answer += graph[0][i];
    }
    // console.log(graph);
    return answer;
}

const n = 4;
const costs = [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
];
solution(n, costs);
[
    ["INF", 1, 2, "INF", "INF"],
    ["INF", 0, 5, 1, "INF"],
    ["INF", "INF", 0, 8, "INF"],
    ["INF", "INF", "INF", 0, "INF"],
    ["INF", "INF", "INF", "INF", 0],
];
[
    ["INF", 1, 2, "INF", "INF"],
    ["INF", 0, 5, 1, "INF"],
    ["INF", "INF", 0, 8, "INF"],
    ["INF", "INF", "INF", 0, "INF"],
    ["INF", "INF", "INF", "INF", 0],
];
