let n = 9;
let wires = [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
];
function solution(n, wires) {
    // 2차원 배열 생성
    const adjArr = [...Array(n + 1)].map(() => [...Array(n + 1)].map(() => 0));
    const visit = Array(n + 1).fill(0);
    let count = 0;
    // 인접 배열 초기화 (서로 연결되어있는것 표시)
    wires.forEach(([v1, v2]) => {
        adjArr[v1][v2] = 1;
        adjArr[v2][v1] = 1;
    });
    // 순회
    const dfs = (tower) => {
        visit[tower] = 1;
        count++;

        for (let i = 1; i <= n; i++) {
            adjArr[tower][i] && !visit[i] && dfs(i);
        }
    };

    // 하나씩 잘라보면서 뭐가 제일 작은지 체크
    return wires.reduce((m, [v1, v2]) => {
        // m : 초기값 9
        // 전선 끊기
        adjArr[v1][v2] = 0;
        adjArr[v2][v1] = 0;

        // 순회
        dfs(1);
        
        // 전선 회복
        adjArr[v1][v2] = 1;
        adjArr[v2][v1] = 1;

        m = Math.min(m, Math.abs(n - 2 * count)); // 송전탑 개수의 차이의 최솟값 갱신
        // 방문한 것 0 으로 초기화
        visit.forEach((_, i) => (visit[i] = 0)); // 방문 배열 초기화
        count = 0; // 개수 초기화

        return m;
    }, n);
}
solution(n, wires);
// [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//     [0, 1, 1, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 0, 1, 1, 1, 0, 0],
//     [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 1, 0, 0, 0, 1, 1],
//     [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
// ];
