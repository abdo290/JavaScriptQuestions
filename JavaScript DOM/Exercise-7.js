Write a JavaScript function that creates a table, accept row, column numbers from the user, and input row-column number as content (e.g. Row-0 Column-0) of a cell.

Sample HTML file:


<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Change the content of a cell</title>
<style type="text/css">
body {margin: 30px;}
</style>  
</head><body>
<table id="myTable" border="1">
</table><form>
<input type="button" onclick="createTable()" value="Create the table">
</form></body></html>

Copy
Sample Solution: -

HTML Code:

<!DOCTYPE html> 
<html> 
<head> 
<meta charset=utf-8 /> 
<title>Create a table</title> 
<style type="text/css"> 
body {margin: 30px;} 
</style>  
</head><body> 
<table id="myTable" border="1"> 
</table><form> 
<input type="button" onclick="createTable()" value="Create the table"> 
</form></body></html>

Copy
JavaScript Code:

function createTable()
{
rn = window.prompt("Input number of rows", 1);
cn = window.prompt("Input number of columns",1);
  
 for(var r=0;r<parseInt(rn,10);r++)
  {
   var x=document.getElementById('myTable').insertRow(r);
   for(var c=0;c<parseInt(cn,10);c++)  
    {
     var y=  x.insertCell(c);
     y.innerHTML="Row-"+r+" Column-"+c; 
    }
   }
}