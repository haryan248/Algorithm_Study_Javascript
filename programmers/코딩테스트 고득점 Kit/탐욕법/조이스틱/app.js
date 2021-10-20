function replaceAt(str, index, letter) {
    return str.substr(0, index) + letter + str.substr(index + 1);
}

function solution(name) {
    var answer = 0;
    let len = name.length;
    let result = Array.from({ length: len }, () => "A").join("");
	let index = 0;

    while (result !== name) {
        let next = 0;
        for (let i = 0; i < len; i++) {
            let left = (index - i + len) % len;
            let right = (index + i) % len;

            if (name[right] !== result[right]) next = right;
            else if (name[left] !== result[left]) next = left;
			else continue;
			
			// 위로 올리는것이 좋은지 아래로 내리는 것이 좋은지 선택
            answer += i + Math.min(name.charCodeAt(next) - "A".charCodeAt(0), "Z".charCodeAt(0) - name.charCodeAt(next) + 1);
            result = replaceAt(result, next, name[next]);
            break;
        }
        index = next;
    }

    return answer;
}
let name = "JEROEN";
solution(name);
