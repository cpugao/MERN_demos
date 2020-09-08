/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.

  Output: only the shared values between the two arrays (deduped).

  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7, 10, 20];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

/**
 * Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * @param   {Array<number>} sortedA
 * @param   {Array<number>} sortedB
 *          @sortedA and @sortedB are both sorted multisets
 *          (multi in that it can contain multiple dupes)
 * @return  {Array<number>}
 *          The sorted set intersection: a new array that
 *          is sorted and contains only the shared values
 *          between the two arrays deduped
 * Time:    O(n) linear, n = max(sortedA.length, sortedB.length)
 *          when there are dupes we may end up looping over all
 *          items of longer arr
 * Space:   O(n) n = shorter array length
 */
function orderedIntersection(sortedA, sortedB) {
  let idx1 = 0,
    idx2 = 0;

  const intersection = [];

  while (idx1 < sortedA.length && idx2 < sortedB.length) {
    if (sortedA[idx1] === sortedB[idx2]) {
      if (intersection[intersection.length - 1] !== sortedA[idx1]) {
        // add it only if the last num added isn't the same num
        intersection.push(sortedA[idx1]);
      }
      idx1++;
      idx2++;
    } else if (sortedA[idx1] < sortedB[idx2]) {
      idx1++;
    } else {
      idx2++;
    }
  }
  return intersection;
}

module.exports = { orderedIntersection };
