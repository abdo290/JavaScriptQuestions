//Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
//


//<body>
//<form>
//1st Number : <input type="text" id="firstNumber" /><br>
//2nd Number: <input type="text" id="secondNumber" /><br>
//<input type="button" onClick="multiplyBy()" Value="Multiply" />
//<input type="button" onClick="divideBy()" Value="Divide" />
//</form>
//<p>The Result is : <br>
//<span id = "result"></span>
//</p>
//</body>


function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}