const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numberToString = n.toString();
  let maxResult = 0;

  for (i = 0; i < numberToString.length; i++) {
      const currentResult = parseInt(numberToString.slice(0, i) + numberToString.slice(i + 1));
      maxResult = Math.max(maxResult, currentResult);
  }

  return maxResult;

}

module.exports = {
  deleteDigit
};
