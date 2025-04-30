const themeSelector = document.getElementById('select');
const logoImg = document.getElementById('img')
function changeTheme() {
    if (themeSelector.value === "dark") {
        document.body.classList.add("dark")
        logoImg.setAttribute("src", "byui-logo_white.png")
    } else {
        document.body.classList.remove("dark")
        logoImg.setAttribute("src", "byui-logo_blue.webp")
    }
}
themeSelector.addEventListener('change', changeTheme)