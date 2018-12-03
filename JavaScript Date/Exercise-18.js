Write a JavaScript program to calculate age.

Test Data:
console.log(calculate_age(new Date(1982, 11, 4))); 
35
console.log(calculate_age(new Date(1962, 1, 1)));
56







JavaScript Code:

function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

console.log(calculate_age(new Date(1982, 11, 4)));

console.log(calculate_age(new Date(1962, 1, 1)));

Copy
Sample Output:

35
56