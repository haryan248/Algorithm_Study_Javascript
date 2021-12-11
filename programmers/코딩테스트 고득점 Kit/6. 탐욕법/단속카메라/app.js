function solution(routes) {
    let answer = 1; // 1번 관점으로 접근

    routes.sort((a, b) => a[0] - b[0]);
    // 진입 시점을 기준으로 오름차순 정렬

    let out = routes[0][1];
    // 첫 진출시점(out)은 첫 차량의 진출시점으로 초기화

    for (let i = 1; i < routes.length; i++) {
        // 진출시점보다 현재 차량의 진입이 느리다면
        // 카메라 추가 설치 및 out 시점 갱신
        if (out < routes[i][0]) {
            answer++;
            out = routes[i][1];
        }

        // 진출시점이 현재 차량의 진출시점보다 큰 경우
        // 항상 out을 갱신해주어야
        // 다음 차량 카메라 설치 여부 판별 가능
        if (out > routes[i][1]) {
            out = routes[i][1];
        }
    }

    return answer;
}
const routes = [
    [-20, -15],
    [-20, -13],
    [-14, -5],
    [-18, -13],
    [-5, -3],
];
solution(routes);
