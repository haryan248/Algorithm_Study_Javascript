const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = Number(input[0]);
const [N, M] = input[0].split(" ").map((i) => Number(i));
let graph = [];
const INF = Number.MAX_VALUE;
let distance = new Array(N + 1).fill(INF);

for (let i = 1; i < M + 1; i++) {
    let [a, b, c] = input[i].split(" ").map((i) => Number(i));
    graph.push([a, b, c]);
}
function belmanford(distance, start, graph) {
    // 시작 노드에 대해서 초기화
    distance[start] = 0;
    // 전체 n번의 라운드(round)를 반복
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            let [cur, next_node, cost] = graph[j];
            // 현재 간선을 거쳐서 다른 노드로 이동하는 거리가 더 짧은 경우
            if (distance[cur] !== INF && distance[next_node] > distance[cur] + cost) {
                distance[next_node] = distance[cur] + cost;
                // n번째 라운드에서도 값이 갱신된다면 음수 순환이 존재
                if (i === N - 1) {
                    return true;
                }
            }
        }
    }

    return false;
}
let negative_cycle = belmanford(distance, 1, graph);

// 음수 순환이 존재한다면 -1 출력
if (negative_cycle) {
    console.log(-1);
} else {
    for (let i = 2; i < distance.length; i++) {
        if (distance[i] === INF) {
            console.log(-1);
        } else console.log(distance[i]);
    }
}
