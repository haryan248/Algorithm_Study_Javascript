const fs = require("fs");
const { exit } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const INF = Number.MAX_VALUE;
let pointer = 1;
const T = Number(input[0]);
for (let i = 0; i < T; i++) {
    const [N, M, K] = input[pointer++].split(" ").map((i) => Number(i));
    let graph = new Array(N + 1).fill(0).map(() => new Array());

    for (let j = pointer; j < K + pointer; j++) {
        let [u, v, c, d] = input[j].split(" ").map((i) => Number(i));
        graph[u].push([v, c, d]);
    }
    pointer += K;
    let dp = new Array(N + 1).fill(0).map(() => new Array(M + 1).fill(INF));

    solution(graph, N, M, dp);
}

function solution(graph, N, M, dp) {
    dp[1][0] = 0;

    for (let c = 0; c < M + 1; c++) {
        for (let d = 1; d < N + 1; d++) {
            if (dp[d][c] === INF) continue;
            let t = dp[d][c]; // c의 비용으로 d에 도착했을 때의 시간

            graph[d].forEach((e) => {
                let [dv, dc, dd] = e;
                if (dc + c > M) {
                    return;
                }
                dp[dv][dc + c] = Math.min(dp[dv][dc + c], t + dd);
            });
        }
    }
    let result = Math.min(...dp[N]);
    console.log(result === INF ? "Poor KCM" : result);
}
// 우선순위 큐 = [거리, 현재 노드]
