function solution(genres, plays) {
    var answer = [];
    let filterObj = {};
    let countObj = {};

    genres.forEach((genre, index) => {
        if (filterObj[genre] === undefined) {
            filterObj[genre] = [[index, plays[index]]];
        } else {
            filterObj[genre].push([index, plays[index]]);
        }
        if (countObj[genre] === undefined) {
            countObj[genre] = plays[index];
        } else {
            countObj[genre] += plays[index];
        }
    });
    let countSort = [];
    for (let key in countObj) {
        countSort.push([key, countObj[key]]);
    }
    countSort.sort((a, b) => b[1] - a[1]);
    for (let key in filterObj) {
        let temp = [...filterObj[key]];
        temp.sort((a, b) => b[1] - a[1]);
        filterObj[key] = temp;
    }
    countSort.forEach((e) => {
        let genre = e[0];
        console.log(filterObj[genre]);
        [...filterObj[genre]].forEach((e, index) => {
            if (index >= 2) return;
            answer.push(e[0]);
        });
        if (answer.length >= 4) return;
    });
    return answer;
}
