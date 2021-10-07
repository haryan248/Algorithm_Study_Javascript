function solution(numbers) {
    let compare = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = 0;
    compare.forEach((e) => {
        if (numbers.indexOf(e) === -1) {
            result += e;
        }
    });
    return result;
}
