function solution(citations) {
    citations.sort((a, b) => a - b);
    let count = 0;
    let hIndex = 0;
    while (true) {
        let len = citations.filter((i) => count <= i).length;
        if (count <= len) hIndex = count;
        else break;
        count++;
    }
    return hIndex;
}
