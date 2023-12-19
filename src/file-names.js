const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const counter = {};

  function suffixName(name, count) {
      return `${name}(${count})`;
    }

  for (let i = 0; i < names.length; i++) {
      const currentName = names[i];
      
      if (counter[currentName] === undefined) {
          counter[currentName] = 1;
      } else {
          const newName = suffixName(currentName, counter[currentName]);
          while (counter[newName] !== undefined) {
              counter[currentName]++;
              newName = suffixName(currentName, counter[currentName]);
          }
          counter[currentName]++;
          names[i] = newName;
      }
  }
  console.log(names);
  return names;
  
}

module.exports = {
  renameFiles
};
