Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position.

Test Data :
console.log(array_range(1, 4)); 
[1, 2, 3, 4]
console.log(array_range(-6, 4));
[-6, -5, -4, -3]




JavaScript Code:

function array_range(start, len) 
     {
		var arr = new Array(len);
		for (var i = 0; i < len; i++, start++) 
        {
			arr[i] = start;
		}
      		return arr;
}


console.log(array_range(1, 4));

console.log(array_range(-6, 4));
Copy
Sample Output:

[1,2,3,4]
[-6,-5,-4,-3]







ES6 Version:

function array_range(start, len) 
     {
		const arr = new Array(len);
		for (let i = 0; i < len; i++, start++) 
        {
			arr[i] = start;
		}
      		return arr;
}


console.log(array_range(1, 4));

console.log(array_range(-6, 4));