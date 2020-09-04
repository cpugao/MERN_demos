/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

// add params if needed for recursion
function sumArr(nums) {}

module.exports = { sumArr };

/* ******************************************************************************** */

// Time: O(n) linear
// Space: O(1) constant
function sumArr(nums, i = 0) {
  if (i === nums.length) {
    return 0;
  }
  return nums[i] + sumArr(nums, i + 1);
}

function sumArr2(nums, sum = 0, i = 0) {
  if (i === nums.length) {
    return sum;
  }
  return sumArr2(nums, sum + nums[i], i + 1);
}
