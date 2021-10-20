function solution(name) {
    let maxALength = 0;

    const changeAlphabet = (letter) => (letter > 78 ? 91 - letter : letter - 65);
    const findConsecutiveA = (str, i) => {
        let cnt;
        console.log(str, i)
        // AAAAM 
        for (cnt = 0; cnt < str.length; cnt++) {
            if (str[cnt] !== "A") break;
        }
        // cnt : A의 연속된 길이가 몇인지 체크 (AAAAM => 4)
        console.log(cnt, maxALength)
        return cnt - (i - 1) > maxALength ? cnt - (i - 1) : maxALength;
    };

    const totalMove = [...name].reduce((totalMove, letter, i) => {
        // 총 움직임, 글자, index
        // 위 아래로 조이스틱을 움직일때 최소값 설정
        if (letter !== "A") return totalMove + changeAlphabet(name.charCodeAt(i)) + 1;

        // 되돌아가야 하는 거리가 연속되는 A의 길이보다 짧을 때 왼쪽으로 움직이는 것이 효율적이다.

        // 예를 들면, name = "PRAAAAM" 일 때는 R에서 다시 왼쪽으로 돌아가는 것이 효율적이다.
        // name = "JJONAATHAN" 일때는 오른쪽으로 계속 진행하는 것이 효율적이다.
        
        // 계속 오른쪽으로 진행하는 것이 일반적인 이동이라면,
        // 연속되는 "A"의 길이에서 되돌아가야 하는 거리를 뺀만큼 일반적인 이동보다 이동 횟수가 줄어든다.
         
        // 되돌아가야하는 거리는 "A"가 나오기 바로 전 index 번호와 같다.
            
        if (i === 0 || name[i - 1] !== "A") {
    
            maxALength = findConsecutiveA(name.slice(i), i);
        }
        return totalMove + 1;
    }, 0);

    return totalMove - maxALength - 1;
}

let name = "PRAAAAM";
solution(name);
