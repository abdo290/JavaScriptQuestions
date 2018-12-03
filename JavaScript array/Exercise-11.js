Write a JavaScript program to find the sum of squares of a numeric vector.



JavaScript Code:

function sum_sq(array) {
  var sum = 0, 
      i = array.length;
  while (i--) 
   sum += Math.pow(array[i], 2);
  return sum;
}
 
console.log(sum_sq([0,1,2,3,4])); 

Copy
Sample Output:

30





ES6 Version:

function sum_sq(array) {
  var sum = 0,
      i = array.length;
  while (i--) {
    sum += Math.pow(array[i], 2);
  }return sum;
}

console.log(sum_sq([0, 1, 2, 3, 4]));