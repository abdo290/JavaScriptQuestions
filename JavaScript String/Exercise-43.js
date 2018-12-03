Write a JavaScript function to test whether the character at the provided (character) index is upper case.

Test Data:
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
false





JavaScript Code:

function isUpperCaseAt(str, index) {
 return str.charAt(index).toUpperCase() === str.charAt(index);
    }
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));

Copy
Sample Output:

false