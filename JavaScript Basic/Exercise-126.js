Write a JavaScript program to get the largest even number from an array of integers.

JavaScript Code:

function max_even(arra) {

  arra.sort((x, y) => y - x);

  for (var i = 0; i < arra.length; i++) {
    if (arra[i] % 2 == 0)
      return arra[i];
    }
  }

console.log(max_even([20, 40, 200]));
console.log(max_even([20, 40, 200, 301]));
 

200
200


ES6 Version:

function max_even(arra) {

  arra.sort((x, y) => y - x);

  for (let i = 0; i < arra.length; i++) {
    if (arra[i] % 2 == 0)
      return arra[i];
    }
  }

console.log(max_even([20, 40, 200]));
console.log(max_even([20, 40, 200, 301]));