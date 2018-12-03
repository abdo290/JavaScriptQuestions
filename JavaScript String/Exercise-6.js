Write a JavaScript function to capitalize the first letter of a string.

Test Data :
console.log(capitalize('js string exercises'));
"Js string exercises"






JavaScript Code:

capitalize = function(str1){
  return str1.charAt(0).toUpperCase() + str1.slice(1);
}
    
 console.log(capitalize('js string exercises'));
 

Copy
Sample Output:

Js string exercises