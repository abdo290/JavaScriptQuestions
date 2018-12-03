Write a JavaScript function to add specified weeks to a date.

Test Data :
dt = new Date(2014,10,2); 
console.log(add_weeks(dt, 10).toString());
Output :
"Sun Jan 11 2015 00:00:00 GMT+0530 (India Standard Time)"







JavaScript Code:

function add_weeks(dt, n) 
 {
 return new Date(dt.setDate(dt.getDate() + (n * 7)));      
 }

dt = new Date();
console.log(add_weeks(dt, 10).toString());  

dt = new Date(2014,10,2);
console.log(add_weeks(dt, 10).toString());

Copy
Sample Output:

Wed Aug 29 2018 16:56:47 GMT+0530 (India Standard Time)
Sun Jan 11 2015 00:00:00 GMT+0530 (India Standard Time)