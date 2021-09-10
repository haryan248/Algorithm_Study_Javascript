let res = {};
let idx = 0;
let arr = ["A", "E", "I", "O", "U"];
let word = "AAAAE";
const dfs = (now, cnt) => {
    if (cnt > 5) return;
    res[now] = idx++;
    if (now === word) {
        console.log(now);
        return;
    }
    for (let i = 0; i < 5; i++) {
        let next = now + arr[i];
        dfs(next, cnt + 1);
    }
};

function solution(word) {
    dfs("", 0);
    return res[word];
}
solution(word);
