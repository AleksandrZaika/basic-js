const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const splitOne = s1.toString().split('');
  const splitTwo = s2.toString().split('');
  let count = 0;

  for (let i = 0; i < splitOne.length; i++) {
    if (splitOne[i] === splitTwo[i]) {
      count++;
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
