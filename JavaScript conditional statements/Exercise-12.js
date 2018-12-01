Write a JavaScript program to sum the multiples of 3 and 5 under 1000.




JavaScript Code:

var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);

Copy
Sample Output:

233168