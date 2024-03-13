// Exercise 2: Move Zeros
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

// **Constraints:**

// 1 <= nums.length <= 10**4
// -2**31 <= nums[i] <= 2**31 - 1

function moveZeroes(nums) {
  let newNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      newNums.push(nums[i]);
    }
  }
  while (newNums.length < nums.length) {
    newNums.push(0);
  }
  return newNums;
}

const result1 = moveZeroes([0, 1, 0, 3, 12]);
const result2 = moveZeroes([0]);
const result3 = moveZeroes([3, 0, 2, 10, 1, 0, 5]);

console.log(result1); // [1,3,12,0,0]
console.log(result2); // [0]
console.log(result3); // [3,2,10,1,5,0,0]
