// prompt for marks input
let marks= prompt ("Enter the marks of the student: ");
// convert the input to integer
marks=Number(marks);
// check if the marks are valid
if (marks < 0  || marks > 100) {
    console .log("Invalid marks");
    } else {
        // calculate the grade
        let grade;
        if  (marks >= 79) {
            grade = "A";
            } else if (marks >= 69) {
                grade = "B";
                } else if (marks >= 49) {
                    grade = "C";
                    } else if (marks >= 40) {
                        grade = "D";
                        } else {
                            grade = "E";
                        }
                        // display the grade
    console.log (`The grade of the student is ${grade}`);
    
                            
    }