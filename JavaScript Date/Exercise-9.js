Write a JavaScript function to get the last day of a month.

Test Data:
console.log(lastday(2014,0)); 
console.log(lastday(2014,1)); 
console.log(lastday(2014,11));
Output :
31 
28 
31







JavaScript Code:

var lastday = function(y,m){
return  new Date(y, m +1, 0).getDate();
}
console.log(lastday(2014,0));
console.log(lastday(2014,1));
console.log(lastday(2014,11));

Copy
Sample Output:

31
28
31