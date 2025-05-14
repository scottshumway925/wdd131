// The menu button
const menuButton = document.querySelector(".menu");

// The modal variables
const gallery = document.querySelector(".gallery");
const dialog = document.querySelector(".image-viewer");
const dialogImg = dialog.querySelector("img");
const dialogButton = document.querySelector(".close-viewer");

// img variables
const imgSrc = document.body.querySelector("img").src;
imgSrc.split("-");
const newSrc = imgSrc[0] + "-full.jpeg";
const altText = "Full Image";

function menuButtonHandler() {
    const navSection = document.querySelector(".list");
    navSection.classList.toggle("hide");
}

function handleResize() {
    const navSection = document.querySelector(".list");
    if (window.innerWidth > 1000) {
        navSection.classList.remove("hide")
    } else {
        navSection.classList.add("hide")
    }
}

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
    <span class="close-viewer">X</span>
    <img src="${pic}" alt="${alt}">
    </div>`
}

function addInnerHTML() {
    document.body.insertAdjacentHTML(
        'afterbegin',
        viewerTemplate('norris-full.jpeg', altText)
    )

    const closeButton = document.querySelector(".close-viewer")
    closeButton.addEventListener('click', () => {
        document.querySelector(".viewer").remove()}
    )
}

handleResize()
window.addEventListener("resize", handleResize);
menuButton.addEventListener("click", menuButtonHandler);
gallery.addEventListener("click", addInnerHTML);