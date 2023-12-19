const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(mail) {
  let domain = '';

  for (i = 0; i < mail.length; i++){
      if(mail[i] === '@') {
          domain = mail.slice(i + 1);
      }
      
  }
  return domain;
}

module.exports = {
  getEmailDomain
};
