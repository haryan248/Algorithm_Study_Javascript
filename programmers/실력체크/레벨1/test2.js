s = "trys hello world";
function replaceString(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            result += str[i].toUpperCase();
        } else {
            result += str[i].toLowerCase();
        }
    }
    return result;
}
function solution(s) {
    let answer = "";
    let testcaseArray = s.split(" ");
    for (let i = 0; i < testcaseArray.length; i++) {
        if (i === testcaseArray.length - 1) {
            answer += replaceString(testcaseArray[i]);
        } else {
            answer += replaceString(testcaseArray[i]) + " ";
        }
    }
    return answer;
}
console.log(solution(s));
