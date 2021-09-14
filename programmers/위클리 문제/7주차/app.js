enter = [1, 3, 2];
leave = [1, 2, 3];
function solution(enter, leave) {
    let answer = [...enter].sort().map((v) => [v, 0]);
    let room = [];
    let output = 0;
    let outIndex = 0;
    //room은 특정 시간에 회의실에 존재하는 사람들을 저장하는 리스트이다.
    enter = enter.reverse();
    leave = leave.reverse();
    while (leave.length != 0) {
        output = leave.pop();
        outIndex = room.indexOf(output);
        console.log({ enter, leave, room, output, outIndex });
        // 맨처음 나간 사람이 방에 없다면
        if (outIndex === -1) {
            leave.push(output);
            if (enter.length > 0) room.push(enter.pop());
        } else {
            room.splice(outIndex, 1);
            answer[output - 1][1] += room.length;
            room.forEach((v) => {
                answer[v - 1][1] += 1;
            });
        }
        console.log({ room });
    }
    return answer.map((v) => v[1]);
}
console.log(solution(enter, leave));
