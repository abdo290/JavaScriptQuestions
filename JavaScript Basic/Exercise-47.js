Write a JavaScript program to check if a given number in the range 40..10000 presents in two number (in same range).
For example 40 presents in 400 and 4000.



JavaScript Code:

function test_digit(x, y, n) 
  {    
    if (n < 40 || n > 10000)
      return false;
    else
      if (n >= x && n <= y)
        return true;
      else
        return false;
  }
console.log(test_digit(40, 4000, 45));  
console.log(test_digit(80, 320, 79));  
console.log(test_digit(89, 4000, 30));

Copy
Sample Output:

true
false
false





ES6 Version:

function test_digit(x, y, n) 
  {    
    if (n < 40 || n > 10000)
      return false;
    else
      if (n >= x && n <= y)
        return true;
      else
        return false;
  }
console.log(test_digit(40, 4000, 45));  
console.log(test_digit(80, 320, 79));  
console.log(test_digit(89, 4000, 30));
