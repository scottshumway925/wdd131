import recipes from "./recipes.js";

function random(number) {
    return Math.floor(Math.random() * number)
}

function getRandomListEntry(list) {
    const listLength = list.length
    const randomNum = random(listLength)
    return list[randomNum]
}

function recipeTemplate(recipe) {
    return `<section class="recipe">
            <img src="${recipe.image}" alt="Image of the presented food">
            <div class="foodinfo">
                <ul class="typeoffood">${tagsTemplate(recipe.tags)}</ul>
                <h2 class="foodtitle">${recipe.name}</h2>
                <span
                    class="rating"
                    role="img"
                    aria-label="Rating: 4 out of 5 stars"
                >
                    ${ratingTemplate(recipe.rating)}
                </span>
                <p>${recipe.description}</p>
            </div>
        </section>
    `
}

function tagsTemplate(tags) {
    let html = ``
    for (let item of tags) {
        html += `<li>${item}</li>`
    }
    return html
}

function ratingTemplate(rating) {
    	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`

    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`
        }
        else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
        }
    }

    html += `</span>`

    return html
}

function renderRecipes(recipeList) {
    const recipeContainer = document.getElementById("recipe-container")
    let recipeStrings = ``
    recipeList.forEach(recipe => {
        recipeStrings += recipeTemplate(recipe)
    })
    recipeContainer.innerHTML = recipeStrings
}

function init() {
    const recipe = getRandomListEntry(recipes)
    renderRecipes([recipe])
}

function filterRecipes(searchValue) {
    const filtered = recipes.filter(recipe => {
        return (
            recipe.name.toLowerCase().includes(searchValue) ||
            recipe.description.toLowerCase().includes(searchValue) ||
            recipe.recipeIngredient.find(recipe => recipe.toLowerCase().includes(searchValue)) ||
            recipe.tags.find(tag => tag.toLowerCase().includes(searchValue))
        )
    })

    filtered.sort((a, b) => a.name.localeCompare(b.name))
    return filtered
}

function onButtonClick() {
    event.preventDefault()
    const searchValue = document.getElementById("searchbar").value.toLowerCase()
    const filteredList = filterRecipes(searchValue)
    renderRecipes(filteredList)
}



init()
document.querySelector(".searchButton").addEventListener("click", onButtonClick)