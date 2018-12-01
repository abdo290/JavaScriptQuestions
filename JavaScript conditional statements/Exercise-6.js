Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.

Student Name	Marks
David	80
Vinoth	77
Divya	88
Ishitha	95
Thomas	68
The grades are computed as follows:

Range	Grade
<60	F
<70	D
<80	C
<90	B
<100	A











JavaScript Code:

var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}

Copy
Sample Output:

Average grade: 81.6
Grade : B