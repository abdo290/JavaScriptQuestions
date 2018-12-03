Write a JavaScript function to round up an integer value to the next multiple of 5.

Test Data: 
console.log(int_round5(32)); 
35
console.log(int_round5(137));
140






JavaScript Code:

function int_round5(num)
{
    return Math.ceil(num/5)*5;
}

console.log(int_round5(32));
console.log(int_round5(137));
console.log(int_round5(142));

Copy
Sample Output:

35
140
145