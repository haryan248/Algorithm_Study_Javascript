// 예를 들어, 배열의 가장 큰 합계 | 5, 9, 7, 11 ]은 요소 9와 11의 합입니다.
// var findMaxSum = function (arr) {
//     if (arr.length === 1) {
//         return arr[0];
//     }
//     let left_max = arr[0];
//     let right_max = arr[arr.length / 2];
//     for (let i = 0; i < arr.length / 2; i++) {
//         if (left_max < arr[i]) {
//             left_max = arr[i];
//         }
//     }
//     for (let i = arr.length / 2; i < arr.length; i++) {
//         if (right_max < arr[i]) {
//             right_max = arr[i];
//         }
//     }
//     return left_max + right_max;
// };

function quickSort(array) {
    if (array.length < 2) {
        return array;
    }
    const pivot = [array[0]];
    const left = [];
    const right = [];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else if (array[i] > pivot) {
            right.push(array[i]);
        } else {
            pivot.push(array[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

var findMaxSum = (arr) => {
    // max1 = Math.max.apply(null, arr);
    // const idx = arr.indexOf(max);
    // if (idx > -1) arr.splice(idx, 1);
    // console.log(arr);
    // max2 = Math.max.apply(null, arr);
    arr = quickSort(arr);
    console.log();
    return arr[arr.length - 1] + arr[arr.length - 2];
};
console.log(findMaxSum([4])); // should print 20
