// 버블 정렬
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        let swap;
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swap;
            }
        }
        console.log(`${i}회전: ${array}`);
        if (!swap) {
            break;
        }
    }
    return array;
}
// console.log(bubbleSort([5, 4, 3, 2, 1]));
// 시간 복잡도 O(n^2)

// 선택 정렬
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j;
            }
        }
        // 뒤에서 최소를 선택한다음 맨앞과 swap
        // minIndex <-> i
        if (minIndex !== i) {
            let swap = array[minIndex];
            array[minIndex] = array[i];
            array[i] = swap;
        }
        console.log(`${i}회전: ${array}`);
    }
    return array;
}
// console.log(selectSort([5, 4, 3, 2, 1]));
// 시간 복잡도 O(n^2)

// 삽입 정렬
function insertionSort(array) {
    // console.log(`${0}회전: ${array}`);

    for (let i = 1; i < array.length; i++) {
        let cur = array[i];
        let left = i - 1;
        // 현재값(cur) 이 left값보다 작으면 계속 true
        while (left >= 0 && array[left] > cur) {
            array[left + 1] = array[left];
            left--;
            console.log(i, array);
        }
        // left + 1는 들어갈 자리
        array[left + 1] = cur;
        console.log(`${i}회전: ${array} left + 1: ${left + 1}, cur :${cur}`);
    }
    return array;
}
// console.log(insertionSort([5, 4, 2, 3, 1]));
// 최선의 경우는 O(n) 의 시간복잡도를 갖고, 평균과 최악의 경우 O(n^2)

// 퀵 소트
function quickSort(array, left = 0, right = array.length - 1) {
    if (left >= right) {
        return;
    }
    const mid = Math.floor((left + right) / 2);
    const pivot = array[mid];
    const partition = divide(array, left, right, pivot);
    quickSort(array, left, partition - 1);
    quickSort(array, partition, right);

    function divide(array, left, right, pivot) {
        while (left <= right) {
            while (array[left] < pivot) {
                left++;
            }
            while (array[right] > pivot) {
                right--;
            }

            if (left <= right) {
                let temp = array[left];
                array[left] = array[right];
                array[right] = temp;
                left++;
                right--;
            }
        }
        return left;
    }
    return array;
}
// console.log(quickSort([1, 12, 5, 26, 7, 14, 3, 7]));

let arry = [1, 2, 3];
arry.sort((next, now) => {
    console.log(next, now);
});
