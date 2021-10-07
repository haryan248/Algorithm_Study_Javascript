function solution(grid) {
    const answer = [];

    const X = grid.length;
    const Y = grid[0].length;

    const directions = [
        [0, 1],
        [-1, 0],
        [0, -1],
        [1, 0],
    ];
    const visit = grid.map((s) => Array.from(s).map(() => Array(4).fill(0)));
    console.log(visit);

    for (let i = 0; i < X; i++) {
        for (let j = 0; j < Y; j++) {
            for (let k = 0; k < 4; k++) {
                if (visit[i][j][k]) continue;

                let cycle = 1;
                // 순환 횟수

                const que = [[i, j, k, 1]];
                visit[i][j][k] = 1;
                // 왼쪽에서 부터 넣음 -> direction[0] 이 [0,1] 이기 때문
                // 전체 탐색
                while (que.length) {
                    let [x, y, z, c] = que.shift();
                    console.log(`x : ${x}, y: ${y}, grid[x][y] : ${grid[x][y]}`);
                    // x, y는 현재 빛의 위치
                    // grid[x][y]는 빛의 위치에서 움직일 방향
                    // d는 현재 상태 S, L, R
                    // z는 배열에서 현재 이동할 방향 index를 결정함
                    // 0: 오른쪽으로(우), 1: 위로(상), 2: 왼쪽으로(좌), 3: 아래로(하)

                    const d = grid[x][y];

                    cycle = Math.max(cycle, c);

                    if (d === "L") z = (z + 1) % 4;
                    else if (d === "R") z = (z + 3) % 4;

                    console.log(`d : ${d}, z : ${z}`);

                    x += directions[z][0];
                    y += directions[z][1];

                    // 이동한 위치가 음수일 때 맨 끝으로
                    // 이동한 위치가 배열의 밖으로 벗어날때 맨 앞으로
                    if (x < 0) x = X - 1;
                    else if (x >= X) x = 0;

                    if (y < 0) y = Y - 1;
                    else if (y >= Y) y = 0;

                    console.log(`x : ${x}, y : ${y}`);

                    if (visit[x][y][z] === 0) {
                        // 방문하지 않았으면
                        visit[x][y][z] = 1;
                        que.push([x, y, z, c + 1]);
                        // 새로운 사이클로 돌기
                    }
                }

                answer.push(cycle);
            }
        }
    }

    answer.sort((a, b) => a - b);

    return answer;
}

grid = ["SL", "LR"];
console.log(solution(grid));
