Write a JavaScript function that reverse a number.
Sample Data and output: 
Example x = 32243; 
Expected Output: 34223




JavaScript Code:

function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverse_a_number(32243));

Copy
Sample Output:

34223