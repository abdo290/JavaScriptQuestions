Write a JavaScript program to find the maximum integer n such that 1 + 2 + ... + n <= a given integer.




JavaScript Code:

function sumn(val) {
  var sn = 0;
  var i = 0;
  while (sn <= val) {
    sn += i++;
  }
  return i - 2;
}
console.log(sumn(11))
console.log(sumn(15))
Copy
Sample Output:

4
5


ES6 Version:

function sumn(val) {
  let sn = 0;
  let i = 0;
  while (sn <= val) {
    sn += i++;
  }
  return i - 2;
}
console.log(sumn(11))
console.log(sumn(15))