function solution(participant, completion) {
    var answer = "";
    let Obj = {};
    participant.forEach((i) => {
        if (Obj[i] === undefined) {
            Obj[i] = 1;
        } else {
            Obj[i]++;
        }
    });
    completion.forEach((val) => Obj[val]--);
    for (let key in Obj) {
        if (Obj[key]) {
            answer = key;
            break;
        }
    }
    return answer;
}
