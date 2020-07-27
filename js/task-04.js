'use strict';
const formatString = function (string) {
  if (string.length > 40) {
    const splitString = string.split('');
    splitString.length = 40;
    const modifiedString = splitString.join('');
    string = `${modifiedString}...`;
  }

  return string;
};
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
