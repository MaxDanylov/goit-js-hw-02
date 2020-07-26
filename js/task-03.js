'use strict';
const findLongestWord = function (string) {
  const array = string.split(' ');
  let bigestWord = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (array[i].length > bigestWord.length) {
      bigestWord = array[i];
    }
  }
  return bigestWord;
};
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
