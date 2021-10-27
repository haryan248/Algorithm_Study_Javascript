function solution(number, k) {
    let numberArr = number.split("").map((i) => Number(i));
    let answer = [];
    numberArr.forEach((num) => {
        while (k > 0 && answer.length !== 0 && answer[answer.length - 1] < num) {
            k -= 1;

            answer.pop();
        }
        answer.push(num);
    });
    answer.splice(number.length - k, k);
    return answer.join("").trim();
}
let number = "999";
let k = 2;
console.log(solution(number, k));
