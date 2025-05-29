function GetGrades() {
    const gradesString = document.querySelector("#grades").value
    let grades = gradesString.split(",")
    const separatedGrades = grades.map(grade => grade.trim().toUpperCase())
    return separatedGrades
}

function LookupGrade(grade) {
    let pointValue = 0
    switch (grade) {
        case "A":
            pointValue = 4
            break
        case "B":
            pointValue = 3
            break
        case "C":
            pointValue = 2
            break
        case "D":
            pointValue = 1
            break
    }
    return pointValue
}

function CalculateGpa(grades) {
    const gradeValues = grades.map(LookupGrade)
    const gradeTotal = gradeValues.reduce(function(total, item) {
        return total + item
    })
    const overallGpa = gradeTotal / gradeValues.length
    return overallGpa.toFixed(2)
}

function OutputGpa(gpa, selector) {
    selector.innerHTML = `<p>${gpa}</p>`
}

function ClickHandler() {
    const output = document.querySelector("#output");
    const button = document.querySelector("#submitButton");
    button.addEventListener("click", function() {
        const grades = GetGrades()
        const gpa = CalculateGpa(grades)
        OutputGpa(gpa, output)
    });   
}


ClickHandler()