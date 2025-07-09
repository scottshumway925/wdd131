import projects from "./projects.js";

function projectTemplate(project) {
    return `<section class="individual_project">
            ${project.image}
            <div class="project_info">
                <h2 class="foodtitle">${project.name}</h2>
                <p>${project.description}</p>
                ${project.link}
            </div>
        </section>
    `
}

function renderProjects(projectList) {
    const projectContainer = document.querySelector(".listed_projects")
    let projectStrings = ``
    projectList.forEach(project => {
        projectStrings += projectTemplate(project)
    })
    projectContainer.innerHTML = projectStrings
}

function filterProjects(searchValue) {
    const filtered = projects.filter(project => {
        return (
            project.type.toLowerCase().includes(searchValue)
        )
    })

    filtered.sort((a, b) => a.name.localeCompare(b.name))
    return filtered
}

renderProjects(filterProjects("personal"))
document.querySelector(".website_button").addEventListener("click", () => {renderProjects(filterProjects("website"))})
document.querySelector(".class_button").addEventListener("click", () => {renderProjects(filterProjects("class"))})
document.querySelector(".personal_button").addEventListener("click", () => {renderProjects(filterProjects("personal"))})