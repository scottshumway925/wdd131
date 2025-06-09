// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
        sectionNum: 1,
        roomNum: "STC 353",
        enrolled: 26,
        days: "TTh",
        instructor: "Bro T"
    }, 
    {
        sectionNum: 2,
        roomNum: "STC 347",
        enrolled: 28,
        days: "TTh",
        instructor: "Sis A"
    },
  ],
  enrollStudent: function (sectionNum, add = true) {
    const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
    )
    if (sectionIndex >= 0) {
        if (add) {
            this.sections[sectionIndex].enrolled++
            renderSections(this.sections)
        } else {
            this.sections[sectionIndex].enrolled--
            renderSections(this.sections)
        }
    }
  },
};

function SetCourseInfoHtml(course) {
    const courseName = document.querySelector("#courseName")
    const courseCode = document.querySelector("#courseCode")
    courseName.innerHTML = course.name
    courseCode.innerHTML = course.code
}

function sectionTemplate(section) {
    return `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate)
    document.querySelector("#sections").innerHTML = html.join("")
}

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value
    aCourse.enrollStudent(sectionNum)
})
document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value
    aCourse.enrollStudent(sectionNum, add=false)
})

SetCourseInfoHtml(aCourse)
renderSections(aCourse.sections)