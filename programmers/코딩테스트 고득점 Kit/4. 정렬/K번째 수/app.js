function solution(numbers) {
    let result = [];
    result = numbers
        .map((c) => c + "")
        .sort((a, b) => {
            return b + a - (a + b);
        })
        .join("");
    return result[0] === "0" ? "0" : result;
}
