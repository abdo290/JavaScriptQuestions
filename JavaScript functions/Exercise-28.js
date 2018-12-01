Write a JavaScript program to pass a 'JavaScript function' as parameter.

JavaScript Code:

function addStudent(id, refreshCallback)
{
    refreshCallback();  
}

function refreshStudentList() {
    console.log('Hello');
}

addStudent(1, refreshStudentList);

Copy
Output:

Hello