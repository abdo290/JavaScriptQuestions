//Write a JavaScript program to check a given integer is within 20 of 100 or 400.
//



//JavaScript Code:

function testhundred(x) {
  return ((Math.abs(100 - x) <= 20) ||
	 (Math.abs(400 - x) <= 20));
}

console.log(testhundred(10));
console.log(testhundred(90));
console.log(testhundred(99));
console.log(testhundred(199));
console.log(testhundred(200));

//Copy
//Sample Output:
//
//false
//true
//true
//false
//false

//
//ES6 Version:

function testhundred(x) {
  return ((Math.abs(100 - x) <= 20) ||
	 (Math.abs(400 - x) <= 20));
}

console.log(testhundred(10));
console.log(testhundred(90));
console.log(testhundred(99));
console.log(testhundred(199));
console.log(testhundred(200));