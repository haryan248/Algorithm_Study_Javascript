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

// 선택 정렬
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j;
            }
        }
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

// 삽입 정렬

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let cur = array[i];
        let left = i - 1;
        while (left >= 0 && array[left] > cur) {
            array[left + 1] = array[left];
            left--;
        }
        array[left + 1] = cur;
        console.log(`${i}회전: ${array}`);
    }
    return array;
}
// console.log(insertionSort([5, 4, 3, 2, 1]));

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
console.log(quickSort([1, 12, 5, 26, 7, 14, 3, 7]));
