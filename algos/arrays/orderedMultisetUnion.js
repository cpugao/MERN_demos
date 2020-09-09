/* 
  Union Sorted Arrays

  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.

  Unions by default will take the set of dupes
  that has the highest occurrences from one array.

  Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA = [1, 2, 2, 2, 7];
const numsB = [2, 2, 6, 6, 7];
const expected = [1, 2, 2, 2, 6, 6, 7];
/* 
  Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
  because it occurs 3 times at most in ONE set
*/

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * @param  {Array<number>} sortedA
 * @param  {Array<number>} sortedB
 *         @sortedA and @sortedB are both sorted multisets (contain dupes)
 * @return {Array<number>}
 *         An ordered multiset union of @sortedA and @sortedB
 *         The return should include dupes, but the amount of dupes for each int should be based on
 *         the max amount that dupe appears from one set, not the combined amount from both sets.
 * Time:   O(n) linear, where n = longest length
 * Space:  O(n + m) where n = sortedA.length, m = sortedB.length because if there are no dupes all will be kept from both
 */
function orderedMultisetUnion(sortedA, sortedB) {
  const res = [];
  let idx1 = 0,
    idx2 = 0;

  while (idx1 < sortedA.length || idx2 < sortedB.length) {
    if (idx1 === sortedA.length) {
      // sortedB is longer, push in all remaining sortedB nums
      res.push(sortedB[idx2++]);
      continue;
    } else if (idx2 === sortedB.length) {
      // sortedA is longer, push in remaining sortedA nums
      res.push(sortedA[idx1++]);
      continue;
    }

    if (sortedA[idx1] === sortedB[idx2]) {
      res.push(sortedA[idx1++]);
      idx2++; // since both were same, increment both
    } else if (sortedA[idx1] < sortedB[idx2]) {
      res.push(sortedA[idx1++]);
    } else {
      res.push(sortedB[idx2++]);
    }
  }
  return res;
}

function orderedMultisetUnion2(sortedA, sortedB) {
  let idx1 = 0,
    idx2 = 0;
  const ret = [],
    len1 = sortedA.length,
    len2 = sortedB.length;

  while (idx1 < len1 && idx2 < len2) {
    const n1 = sortedA[idx1],
      n2 = sortedB[idx2];

    if (n1 === n2) {
      ret.push(n1);
      idx1++;
      idx2++;
    } else if (n1 < n2) {
      ret.push(n1);
      idx1++;
    } else {
      ret.push(n2);
      idx2++;
    }
  }
  // arrays might be different lengths, if any elems are remaining, concat them
  return ret.concat(sortedA.slice(idx1)).concat(sortedB.slice(idx2));
}

module.exports = { orderedMultisetUnion };
