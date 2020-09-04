/* 
  Stable sort

  Visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/

  Time Complexity
    - Best case:    O(n log(n)) linearithmic
    - Average case: O(n log(n)) linearithmic
    - Worst case:   O(n log(n)) linearithmic

  Space: O(n) linear

  steps:
    1. create a merge function to merge two already sorted arrays into a single sorted array
      - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
      - split the array in half and recursively merge the halves using the previously created merge function
      - splitting of arrays stops when array can no longer be split
      - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array
*/

// merge
const sortedA = [1, 2, 4, 5, 6, 9];
const sortedB = [3, 7, 8, 10];
const expectedMerge = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Merges two already sorted arrays into a new sorted array
 * @param   {Array<number>} left
 * @param   {Array<number>} right
 *          @left and @right are sorted
 * @return  {Array<number>}
 *          A new sorted array containing all the elements of @left and @right
 *
 * Time:    O(n + m) -> O(n) linear
 *          n = left.length, m = right.length.
 *          Every item from each array is visited once.
 * Space:   O(n + m) => O(n) linear
 */
function merge(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  // in case one of the arrays has remaining items due to unequal lengths, all of those can be added
  while (indexLeft < left.length) {
    result.push(left[indexLeft]);
    indexLeft++;
  }

  while (indexRight < right.length) {
    result.push(right[indexRight]);
    indexRight++;
  }

  return result;

  // one liner version of adding in any left over items
  // return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

// mergeSort
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given nums being recursively split and merged
 * @param   {Array<number>} nums
 *          In any order
 * @return  {Array<number>}
 *          New sorted array
 * Best:    O(n log(n)) linearithmic
 * Avg:     O(n log(n)) linearithmic
 * Worst:   O(n log(n)) linearithmic
 */
function mergeSort(nums) {
  if (nums.length === 1) {
    // return once we hit an array with a single item
    return nums;
  }

  const middle = Math.floor(nums.length / 2); // get the middle item of the array rounded down
  const left = nums.slice(0, middle); // items on the left side
  const right = nums.slice(middle); // items on the right side

  return merge(mergeSort(left), mergeSort(right));
}

module.exports = { merge: merge2, mergeSort };
