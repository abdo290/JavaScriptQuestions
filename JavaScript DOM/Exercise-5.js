Write a JavaScript function to add rows to a table.

Sample HTML file:


<!DOCTYPE html>
<html><head><meta charset=utf-8 />
<title>Insert row in a table - w3resource</title>
</head><body>
<table id="sampleTable" border="1">
<tr><td>Row1 cell1</td>
<td>Row1 cell2</td></tr>
<tr><td>Row2 cell1</td>
<td>Row2 cell2</td></tr>
</table><br>
<input type="button" onclick="insert_Row()" value="Insert row"> 
</body></html>

Copy
Sample Solution: -

HTML Code:

<!DOCTYPE html> 
<html><head> 
<meta charset=utf-8 /> 
<title>Insert row in a table - w3resource</title> 
</head><body> 
<table id="sampleTable" border="1"> 
<tr><td>Row1 cell1</td> 
<td>Row1 cell2</td></tr> 
<tr><td>Row2 cell1</td> 
<td>Row2 cell2</td></tr> 
</table><br> 
<input type="button" onclick="insert_Row()" value="Insert row">  
</body></html>

Copy
JavaScript Code:

function insert_Row()
{
var x=document.getElementById('sampleTable').insertRow(0);
var y = x.insertCell(0);
var z = x.insertCell(1);
y.innerHTML="New Cell1";
z.innerHTML="New Cell2";
}
