sizes = [
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
];
function solution(sizes) {
    let w = 0;
    let h = 0;
    sizes.forEach((s) => {
        // 오름차순
        const [a, b] = s.sort((a, b) => a - b);
        console.log(s);
        console.log(a, b);
        if (a > h) h = a;
        if (b > w) w = b;
    });

    return w * h;
}
solution(sizes);
