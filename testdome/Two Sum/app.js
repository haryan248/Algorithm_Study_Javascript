/**
 * @param {number[]} numbers The array of numbers.
 * @param {number} sum The required target sum.
 * @return {number[]} An array of 2 indices. The indices of the two elements whose sum is equal to sum.
 */
var twoSum = function (nums, target) {
    //hash table
    var hash = {};

    for (let i = 0; i <= nums.length; i++) {
        //current number
        var currentNumber = nums[i];
        //difference in the target and current number
        var requiredNumber = target - currentNumber;
        // find the difference number from hashTable
        const index2 = hash[requiredNumber];

        // if number found, return index
        // it will return undefined if not found
        console.log(hash);

        if (index2 != undefined) {
            return [index2, i];
        } else {
            // if not number found, we add the number into the hashTable
            hash[currentNumber] = i;
        }
    }

    return null;
};

const indices = twoSum([3, 1, 5, 7, 5, 9], 10);
console.log(indices);
