//  arrays.js
// Activity 1
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`
}
const stepsHtml = steps.map(listTemplate)
document.querySelector("#myList").innerHTML = stepsHtml.join()

//Activity 2
const letterGrades = ['A', 'B', 'A']
function returnGPAString(grade) {
    let points = 0
    switch (grade) {
        case 'A':
            points = 4.0
            break
        case 'B':
            points = 3.5
            break
        case 'C':
            points = 3.0 
            break
        case 'D':
            points = 2.5
            break
    }
    return `<li>${points}</li>`
}
const gradesHtml = letterGrades.map(returnGPAString)
document.querySelector("#list2").innerHTML = gradesHtml.join()


// Activity 3
function returnGPANumbers(grade) {
    let points = 0
    switch (grade) {
        case 'A':
            points = 4.0
            break
        case 'B':
            points = 3.5
            break
        case 'C':
            points = 3.0 
            break
        case 'D':
            points = 2.5
            break
    }
    return points
}

const gpaPoints = letterGrades.map(returnGPANumbers)
const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item
})
const gpa = pointsTotal / gpaPoints.length
document.querySelector("#example3").innerHTML = `<p>${gpa.toFixed(2)}</p>`

// Activity 4
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape']
const shortWords = fruits.filter(function (word) {
    return word.length < 6
})

const shortWordsHTML = shortWords.map(word => `<li>${word}</li>`).join()

document.querySelector("#example4").innerHTML = shortWordsHTML

// Activity 5
const myArray = [12, 34, 21, 54]
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber)

document.querySelector("#example5").innerHTML = `<li>${luckyIndex}</li>S`