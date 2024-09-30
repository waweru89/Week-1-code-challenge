let marks= prompt ("Enter the marks of the student: ");
marks=Number(marks);
if (marks < 0  || marks > 100) {
    console .log("Invalid marks");
    } else {
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
    console.log (`The grade of the student is ${grade}`);
    
                            
    }