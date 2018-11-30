Write a JavaScript program to convert a given number to hours and minutes.

JavaScript Code:

function time_convert(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + ":" + minutes;         
}

console.log(time_convert(71));
console.log(time_convert(450));
console.log(time_convert(1441));

Copy
Sample Output:

1:11
7:30
24:1



ES6 Version:

function time_convert(num)
 { 
  const hours = Math.floor(num / 60);  
  const minutes = num % 60;
  return `${hours}:${minutes}`;         
}

console.log(time_convert(71));
console.log(time_convert(450));
console.log(time_convert(1441));