/* 
  Given to me (Neil) in an interview

  Given a string
  return whether or not it's possible to make a palindrome out of the string's characters

  What is it about a string that makes it possible for it to be a palindrome?
*/

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * @param   {string} str
 * @return  {boolean}
 * Time:    O(n) linear
 *          n = @str length
 * Space:   O(n)
 */
function canStringBecomePalindrome(str) {
  if (str.length === 0) {
    return false;
  }

  const leftoverCharsMap = {};

  for (const char of str) {
    if (leftoverCharsMap.hasOwnProperty(char)) {
      delete leftoverCharsMap[char];
    } else {
      leftoverCharsMap[char] = true;
    }
  }
  return Object.keys(leftoverCharsMap).length <= 1 ? true : false;
}

/**
 * The loop over the object at the end is like the Object.keys loop above,
 * except the above sln already deleted keys that could be cancelled out,
 * so there are less iterations required in above sln, but the overall
 * time complexity remains the same.
 * Time:    O(n) linear
 *          n = @str length
 * Space:   O(n)
 */
function canBecomePalindrome(str) {
  if (str.length === 0) {
    return false;
  }

  const charFrequencies = {};
  let oddFreqCount = 0;
  let isOddLen = str.length % 2 !== 0;

  for (const char of str) {
    if (!charFrequencies.hasOwnProperty(char)) {
      charFrequencies[char] = 1;
    } else {
      charFrequencies[char]++;
    }
  }

  for (const key in charFrequencies) {
    const charFreq = charFrequencies[key];

    // if odd occurrences
    if (charFreq % 2 !== 0) {
      oddFreqCount++;

      if ((isOddLen && oddFreqCount > 1) || (!isOddLen && oddFreqCount > 0)) {
        return false;
      }
    }
  }
  return true;
}

module.exports = { canStringBecomePalindrome };
