// Given an array, find the integer that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    const nums = {}

    // loop through array and add the value as a key to the nums
    // object, if it already exists increase the value of the key by 1
    // else initialize it to 1
    for (let i = 0; i < A.length; i++) {
        nums[A[i]] = nums[A[i]] ? nums[A[i]] + 1 : 1
    }

    // search through all the keys in nums
    // to find which key's value is an odd number
    for (let num in nums) {
        if (nums[num] % 2 !== 0) {
            return parseInt(num);
        }
    }
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); // return 5
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])); // return -1