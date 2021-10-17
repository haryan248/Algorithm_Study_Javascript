function solution(clothes) {
    var answer = 0;
    let clothesObj = {};
    clothes.forEach((e) => {
        if (clothesObj[e[1]] === undefined) {
            clothesObj[e[1]] = [e[0]];
        } else {
            clothesObj[e[1]].push(e[0]);
        }
    });
    // 경우의 수 (A + 1) * (B + 1) - 1
    let result = 1;
    Object.keys(clothesObj).forEach((key) => {
        result *= [...clothesObj[key]].length + 1;
    });
    return result - 1;
}
