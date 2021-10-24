function solution(rectangle, characterX, characterY, itemX, itemY) {
    const xmoves = [1, -1, 0, 0];
    const ymoves = [0, 0, 1, -1];

    // 최대 범위가 50이지만 좌표간의 거리를 생각해 2배 증가시킴
    const maxSize = 101;
    const board = Array.from({ length: maxSize }, () => Array(maxSize).fill(0));

    const newRect = rectangle.map((el) => el.map((v) => v * 2));

    newRect.forEach(([x1, y1, x2, y2]) => {
        for (let i = y1; i <= y2; i++) {
            for (let j = x1; j <= x2; j++) {
                // 테두리 일경우
                if (j === x1 || j === x2 || i === y1 || i === y2) {
                    // 이미 테두리 인경우 === 테두리가 교차됬을 경우는 값 유지
                    if (board[j][i] === 1) continue;
                    // 그러나, 현재 값이 테두리 이지만 저장된 값이 테두리가 아닐경우 +1
                    // (0일때는 1이 되고 1 이상일 때는 테두리가 아니므로 값이 저장되어 지나갈 수 없다.)
                    else board[j][i] += 1;
                } else board[j][i] += 2;
            }
        }
    });

    // 모든 좌표 2배 증가
    characterX *= 2;
    characterY *= 2;
    itemX *= 2;
    itemY *= 2;

    // 최단 거리이므로 bfs 실행
    const q = [[characterX, characterY, 0]];
    board[characterX][characterY] += 100;

    while (q.length) {
        const [nowX, nowY, price] = q.shift();

        // 목표 지점에 도착했을 경우 (결과값 / 2) 를 반환
        if (nowX === itemX && nowY === itemY) return price / 2;

        for (let i = 0; i < 4; i++) {
            const [nX, nY] = [nowX + xmoves[i], nowY + ymoves[i]];

            if (checkLoc(nX, nY))
                if (board[nX][nY] === 1) {
                    board[nX][nY] += 100;
                    q.push([nX, nY, price + 1]);
                }
        }
    }
}

// 다음 좌표가 범위 안인지 검사
const checkLoc = (x, y) => x >= 0 && x < 101 && y >= 0 && y < 101;
