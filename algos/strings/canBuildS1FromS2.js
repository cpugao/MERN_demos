/* 

  Given two strings,
  return true if the first string can be built from the letters in the 2nd string
  Ignore case

  .indexOf will only tell you if the letter is found one time
*/

const strA1 = "Hello World";
const strB1 = "lloeh wordl";
const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

/**
 * Determines whether @s1 can be built using the chars of @s2
 * @param   {string} s1
 * @param   {string} s2
 * @return  {boolean}
 * Time:    O(n + m) -> O(n) linear
 *          n = @neededStr length, m = @availableStr length.
 * Space:   O(m) -> O(n)
 *          Since it's still linear just call it n for simplicity.
 */
function canBuildS1FromS2(neededStr, availableStr) {
  const availableCharsFreq = {};

  for (const availableChar of availableStr) {
    const availableCharLower = availableChar.toLowerCase();

    if (availableCharsFreq.hasOwnProperty(availableCharLower)) {
      availableCharsFreq[availableCharLower]++;
    } else {
      availableCharsFreq[availableCharLower] = 1;
    }
  }

  for (const neededChar of neededStr) {
    const neededCharLower = neededChar.toLowerCase();

    if (
      availableCharsFreq.hasOwnProperty(neededCharLower) === false ||
      availableCharsFreq[neededCharLower] === 0
    ) {
      return false;
    } else {
      availableCharsFreq[neededCharLower]--;
    }
  }
  return true;
}

module.exports = { canBuildS1FromS2 };
