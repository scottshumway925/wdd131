const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImg = document.createElement("img");
newImg.src = "https://picsum.photos/200"
newImg.alt = "Here is a test image"
document.body.appendChild(newImg)

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv)

const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerText = "DOM Basics";
newSection.appendChild(newH2)
const newP = document.createElement("p");
newP.innerText = "This was added through Javascript by Scott Shumway";
newSection.appendChild(newP)
document.body.appendChild(newSection)