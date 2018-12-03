Write a JavaScript function to get 24-hour format of an hour without leading zeros.

Test Data :
dt = new Date(1989, 10, 1); 
console.log(hours_without_zeroes(dt));
0





JavaScript Code:

function hours_without_zeroes(dt) 
{ 
  return dt.getHours();
}

dt = new Date(); 
console.log(hours_without_zeroes(dt)); 

dt = new Date(1989, 10, 1); 
console.log(hours_without_zeroes(dt));

Copy
Sample Output:

15
0