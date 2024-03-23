//Creates a function 
function getGrade(marks) {
    marks = parseInt(document.getElementById('marks').value, 10) || 0;

if (marks < 0 || marks >100) {
alert( 'Enter a valid marks between 0 and 100.');
return;
}

let grade =

marks > 79 ? 'A' :
marks >= 60 ? 'B' :
marks >= 50 ? 'C' :
marks >= 40 ? 'D' :
'E';
  console.log (grade)

    
    document.getElementById('results').innerText = `Your Grade: ${marks} is: ${grade}` 
}
