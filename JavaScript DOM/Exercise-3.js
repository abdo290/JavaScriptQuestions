Write a JavaScript program to set the background color of a paragraph.

Sample Solution: -

HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Set the background color of a paragraph</title>
</head>
<body>
<input type="button" value="Click to set paragraph background color" onclick="set_background()">
<p>w3resource JavaScript Exercises</p>
<p>w3resource PHP Exercises</p> 
</body>
</html>

Copy
JavaScript Code:

function set_background() {
 docBody = document.getElementsByTagName("body")[0];
  //Get all the p elements that are descendants of the body
  myBodyElements = docBody.getElementsByTagName("p");
// get the first p elements
  myp1 = myBodyElements[0];
  myp1.style.background = "rgb(255,0,0)";
// get the second p elements
  myp2 = myBodyElements[1];
  myp2.style.background = "rgb(255,255,0)";
}