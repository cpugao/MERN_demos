/* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.

  The first element is never considered non-consecutive.

  Return an array of objects where each object contains the number itself
  and it's index.
*/

const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];
const expected1 = [
  { i: 4, n: 6 },
  { i: 7, n: 10 },
];

/**
 * Finds all the non-consecutive numbers from @sortedNums
 * @param    {Array<number>} sortedNums
 * @typedef  {Array<{i: number, n: number}>} output - Array of objects
 * @property {number} i
 *           The index of the non consecutive number
 * @property {number} n
 *           The non consecutive number itself that is at the @i position
 * @return   {output}
 *           Array of objects that detail the found non-consecutive numbers
 *           and their location, see above typedef.
 * Time:     O(n) linear time
 * Space:    O(n) potentially all are saved in new array
 */
function allNonConsecutive(sortedNums) {
  const output = [];

  for (let i = 1; i < sortedNums.length; i++) {
    const prevNum = sortedNums[i - 1];
    const currNum = sortedNums[i];

    if (prevNum + 1 !== currNum) {
      output.push({
        i: i,
        n: currNum,
      });
    }
  }
  return output;
}

module.exports = { allNonConsecutive };
