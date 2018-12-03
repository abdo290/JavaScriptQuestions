Here is a sample html file with a submit button. Now modify the style of the paragraph text through javascript code.

Sample HTML file:

<!DOCTYPE html>
<html><head>
<meta charset=utf-8 />
<title>JS DOM paragraph style</title>
</head> 
<body>
<p id ='text'>JavaScript Exercises - w3resource</p> 
<div>
<button id="jsstyle"
onclick="js_style()">Style</button>
</div>
</body>
</html>

Copy
Tips: Clicking on the button the font, font size, and color of the paragraph text will be changed.

Sample Solution: -

HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JS DOM paragraph style</title>
</head> 
<body>
<p id ='text'>JavaScript Exercises - w3resource</p> 
<div>
<button id="jsstyle"
onclick="js_style()">Style</button>
</div>
</body>
</html>

Copy
JavaScript Code:

function js_style() 
{
//font styles added by JS:
 text.style.fontSize = "14pt";
 text.style.fontFamily = "Comic Sans MS";
 text.style.color = "green";
}