'use strict';

let input;
const numbers = [];
let total = 0;

const calculator = function () {
  do {
    input = prompt('Введите число');

    if (Number.isNaN(Number(input))) {
      alert('Было введено не число, попробуйте еще раз');
      continue;
    }

    numbers.push(input);
  } while (input !== null);

  for (let number of numbers) {
    total += Number(number);
  }
  return console.log(total);
};

calculator();
