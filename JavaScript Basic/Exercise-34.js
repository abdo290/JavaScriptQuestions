//Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.
//



function max_townums_range(x, y) {
  if (x >= 40 && y <= 60)
    {
     let max_val =0
     if (x > y)
       {
         max_val =x;         
       }
       else
         max_val =y;      
      return max_val;
     }
   else
    return false;
}

console.log(max_townums_range(45, 60));
console.log(max_townums_range(25, 60));
console.log(max_townums_range(45, 80));


//
//Output :
//
//60
//false
//false