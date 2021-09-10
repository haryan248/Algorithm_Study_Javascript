function solution(price, money, count) {
    var answer = -1;
    for (let i = 0; i <= count; i++) {
        money -= price * i;
    }
    answer = money > 0 ? 0 : -money;
    return answer;
}
