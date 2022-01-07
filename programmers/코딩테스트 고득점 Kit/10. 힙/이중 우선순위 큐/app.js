function solution(operations) {
    var answer = [];
    let len = operations.length;
    let arr = [];
    let num;
    for (let i = 0; i < len; i++) {
        switch (operations[i][0]) {
            case "I":
                num = parseInt(operations[i].substring(2));
                arr.push(num);
                break;
            case "D":
                if (arr.length == 0) continue;
                num = parseInt(operations[i].substring(2));
                if (num == -1) arr.shift();
                else arr.pop();
                break;
            default:
                break;
        }
        arr.sort((u, v) => {
            return u - v;
        });
    }

    len = arr.length;

    if (len >= 1) answer.push(arr[len - 1], arr[0]);
    else answer.push(0, 0);

    return answer;
}
