Write a JavaScript program to check from two given integers if either one is 8 or their sum or difference is 8.

JavaScript Code:

function check8(x, y) {
  if (x == 8 || y == 8) {
    return true;
  }

  if (x + y == 8 || Math.abs(x - y) == 8)
  {
    return true;
  }

  return false;
}

console.log(check8(7, 8));
console.log(check8(16, 8));
console.log(check8(24, 32));
console.log(check8(17, 18));

Copy
Sample Output:

true
true
true
false


ES6 Version:

function check8(x, y) {
  if (x == 8 || y == 8) {
    return true;
  }

  if (x + y == 8 || Math.abs(x - y) == 8)
  {
    return true;
  }

  return false;
}

console.log(check8(7, 8));
console.log(check8(16, 8));
console.log(check8(24, 32));
console.log(check8(17, 18));