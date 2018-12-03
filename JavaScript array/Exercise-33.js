Write a JavaScript script to empty an array keeping the original.



JavaScript Code:

var arr = [1, 3, 6, 3, -5];
console.log(arr);
arr.length = 0;
console.log(arr);

Copy
Sample Output:

[1,3,6,3,-5]
[]
ES6 Version:

var arr = [1, 3, 6, 3, -5];
console.log(arr);
arr.length = 0;
console.log(arr);