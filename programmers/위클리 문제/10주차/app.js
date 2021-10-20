function solution(line) {
    var answer = [];
    let cross = [];
    let minX = Number.MAX_SAFE_INTEGER,
        minY = Number.MAX_SAFE_INTEGER;
    let maxX = Number.MIN_SAFE_INTEGER,
        maxY = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < line.length; i++) {
        for (let j = 0; j < line.length; j++) {
            if (i === j) continue;
            let [A, B, E] = line[i];
            let [C, D, F] = line[j];
            let x = (B * F - E * D) / (A * D - B * C);
            let y = (E * C - A * F) / (A * D - B * C);
            if (Number.isInteger(x) && Number.isInteger(y)) {
                minX = Math.min(minX, x) === -0 ? 0 : Math.min(minX, x);
                maxX = Math.max(maxX, x) === -0 ? 0 : Math.max(maxX, x);
                minY = Math.min(minY, y) === -0 ? 0 : Math.min(minY, y);
                maxY = Math.max(maxY, y) === -0 ? 0 : Math.max(maxY, y);
                cross.push([x === -0 ? 0 : x, y === -0 ? 0 : y]);
            }
        }
    }
    cross = multiDimensionalUnique(cross);
    let row = maxY - minY + 1;
    let col = maxX - minX + 1;
    let dimention = new Array(row).fill(".").map(() => new Array(col).fill("."));
    let newCross = cross.map((i) => {
        let y = Math.abs(i[0] - minX);
        let x = Math.abs(i[1] - maxY);
        return [x, y];
    });
    newCross.forEach((i) => {
        dimention[i[0]][i[1]] = "*";
    });
    for (let i = 0; i < dimention.length; i++) {
        answer.push(dimention[i].join(""));
    }
    return answer;
}
function multiDimensionalUnique(arr) {
    let uniques = [];
    let itemsFound = {};
    for (let i = 0, l = arr.length; i < l; i++) {
        let stringified = JSON.stringify(arr[i]);
        if (itemsFound[stringified]) continue;
        uniques.push(arr[i]);
        itemsFound[stringified] = true;
    }
    return uniques;
}
