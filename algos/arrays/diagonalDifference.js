// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
const expected = 2;
/* 
  left to right diagonal: 1 + 5 + 9 = 15
  right to left diagonal: 3 + 5 + 9 = 17
  absolute difference = 2
*/

/**
 * Calculates the absolute diagonal difference of a square matrix
 * @param   {Array<Array<number>>} sqrMatrix
 *          2d array of numbers representing a square matrix (rows and columns)
 * @return  {number}
 *          Represents the absolute (Math.abs) difference between
 *          the top left to bottom right diagonal and the top right to bottom left diagonal
 * Time:    O(n) linear
 * Space:   O(1) constant
 */
function diagonalDifference(sqrMatrix) {
  let ltrSum = 0,
    rtlSum = 0;

  for (let i = 0; i < sqrMatrix.length; i++) {
    const row = sqrMatrix[i];
    ltrSum += row[i];
    rtlSum += row[row.length - i - 1];
  }
  return Math.abs(ltrSum - rtlSum);
}

function diagonalDifference2(sqrMatrix) {
  let diff = 0;

  sqrMatrix.forEach((row, i) => (diff += row[i] - row[row.length - i - 1]));
  return Math.abs(diff);
}

module.exports = { diagonalDifference };
