Write a JavaScript function to get the highest number from three different numbers.

Test Data: 
console.log(highest_of_three(-5, 4, 2));
4




avaScript Code:

function highest_of_three(num1, num2, num3)
{
    return Math.max(num1, num2, num3);  
}

console.log(highest_of_three(-5, 4, 2));

Copy
Sample Output:

4