/**
 * Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
 * For example, given the array [−2,1,−3,4,−1,2,1,−5,4], the contiguous subarray [4,−1,2,1] has the largest sum = 6.
 */

const maxSubarray = (array) => {
    if (!array || !array.length) {
        return 0;
    }
    
    let previousMax = array[0];
    let max = array[0];
    
    for (let i = 1; i < array.length; i++) {
        previousMax = Math.max(array[i], previousMax + array[i]);
        max = Math.max(max, previousMax);
    }

    return max;
};

// Driver program
(() => {
    const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const array2 = [-8, -3, 4, -1, -2, 1, 5, -3];

    console.log(maxSubarray(array));
    console.log(maxSubarray(array2));
})();