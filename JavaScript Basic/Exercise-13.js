//Write a JavaScript exercise to create a variable using a user-defined name.
//


var var_name = 'abcd';
var n = 120;
this[var_name] = n;
console.log(this[var_name])



//
//Sample Output:
//
//120
//ES6 Version:

const var_name = 'abcd';
const n = 120;
this[var_name] = n;
console.log(this[var_name])