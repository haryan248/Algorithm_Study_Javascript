function solution(progresses, speeds) {
    let answer = [];
    let beforeCommitDay = 0;

    progresses.map((a, i) => {
        let day = Math.ceil((100 - a) / speeds[i]);

        if (day > beforeCommitDay) {
            answer.push(1);
            console.log(`1 : answer : ${answer}, day ${day}, beforeCommitDay : ${beforeCommitDay}`);
            beforeCommitDay = day;
        } else {
            // 제일 뒤의 스택에 배포 가능 수 1개 추가
            answer[answer.length - 1]++;
            console.log(`2 : answer : ${answer}, day ${day}, beforeCommitDay : ${beforeCommitDay}`);
        }
    });
    console.log(answer);
    return answer;
}
progresses = [95, 95, 95, 95];
speeds = [1, 1, 1, 1];
solution(progresses, speeds);

// [5, 10, 1, 1, 20, 1];
