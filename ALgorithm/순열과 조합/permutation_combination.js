// 순열: (1,2) == (2,1) ...

function permutation(arr, selectNum) {
    let result = [];
    if (selectNum === 1) return arr.map((v) => [v]);

    arr.forEach((v, idx, arr) => {
        // 한개를 고정
        const fixer = v;
        // 고정한 것 뺀 나머지
        const restArr = arr.filter((_, index) => index !== idx);
        // 나머지 배열에서 고르는 재귀
        const permuationArr = permutation(restArr, selectNum - 1);
        // 온 배열을 합침
        const combineFixer = permuationArr.map((v) => [fixer, ...v]);
        result.push(...combineFixer);
    });
    return result;
}
// permutation([1,2,3], 2)
// 1,2,3 중에서 2개를 뽑는 순열

// 1. 입력받은 arr을 forEach로 순회하며 처음에 뽑을 fixer를 선택한다.
// 2. fixer를 제외한 남은 애들을 갖고 새로운 restArr을 만든다.
// 3. permutationArr에는 restArr로 selectNum-1의 순열이 들어있다.
// 4. combineFixer에 fixer와 permutationArr과 합친 순열을 만든다.
// 5. result에 넣는다.
// 6. 끝의 수까지 반복한다.

// 중복 순열
function permutation2(arr, selectNum) {
    const result = [];
    if (selectNum === 1) return arr.map((v) => [v]);

    arr.forEach((v, idx, arr) => {
        const fixed = v;
        // 필터링을 안함
        const restArr = arr;
        const permutationArr = permutation(restArr, selectNum - 1);
        const combineFix = permutationArr.map((v) => [fixed, ...v]);
        result.push(...combineFix);
    });
    return result;
}
console.log(permutation2([1, 2, 3], 2));
// 7. 조합: (1,2) != (2,1)
function combination(arr, selectNum) {
    const result = [];
    if (selectNum === 1) return arr.map((v) => [v]);
    arr.forEach((v, idx, arr) => {
        const fixed = v;
        // 필터링 대신 뒤를 잘라버림
        const restArr = arr.slice(idx + 1);
        const combinationArr = combination(restArr, selectNum - 1);
        const combineFix = combinationArr.map((v) => [fixed, ...v]);
        result.push(...combineFix);
    });
    return result;
}
