function solution(n, lost, reserve) {
    var answer = 0;
    let setArr = [];
    for (let i = 1; i <= n; i++) {
        setArr.push(1); //우선 체육복을 1개 준다.
        if (reserve.includes(i)) {
            // 체육복을 2개 가지고온 학생이라면
            setArr[i - 1]++; // 1개 추가한다. 주의- 학생번호와 index는 다르다.
        }
        if (lost.includes(i)) {
            // 체육복을 도둑 맞은 학생이라면
            setArr[i - 1]--; // 1개를 뺀다.  주의 - 학생번호와 index는 다르다.
        }
    }
    for (let i = 0; i < n; i++) {
        if (!setArr[i]) {
            // 0은 falsy 한 값이기 때문에 !를 붙여주면 truthy한 값이 된다. (setArr[i]===0) 과 같다.
            if (setArr[i - 1] === 2) {
                // 앞에 있는 학생이 체육복을 2개 가지고 있다면
                setArr[i]++; //내꺼 하나 플러스
                setArr[i - 1]--; // 앞에 학생 하나 마이너스
            } else if (setArr[i + 1] === 2) {
                // 뒤에 있는 학생이 체육복을 2개 가지고 있다면
                setArr[i]++; // 내꺼 하나 플러스
                setArr[i + 1]--; // 뒤에 있는 학생 하나 마이너스
            }
        }
    }
    for (let i = 0; i < n; i++) {
        // 체육복이 한개 이상인 학생들을 answer에 추가한다.
        if (setArr[i] >= 1) {
            answer++;
        }
    }
    console.log(setArr);
    return answer;
}

n = 5;
lost = [2, 4];
reverse = [1, 3, 5];
solution(n, lost, reverse);
