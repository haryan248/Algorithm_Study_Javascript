function solution(table, languages, preference) {
    var answer = "";
    let map = [];
    for (let i = 0; i < table.length; i++) {
        table[i] = table[i].split(" ");
    }
    table.sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0));
    for (let i = 0; i < table.length; i++) {
        let temp_score = 0;

        for (let j = 0; j < languages.length; j++) {
            let score = table[i].findIndex((x) => x === languages[j]);
            if (score !== -1) {
                temp_score += (table[i].length - score) * preference[j];
            }
        }
        map.push(temp_score);
    }
    let max = Math.max(...map);
    answer = table[map.findIndex((x) => x === max)][0];
    return answer;
}
