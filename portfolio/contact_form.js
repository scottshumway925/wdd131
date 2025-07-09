function validateForm(event) {
    const theForm = event.target;
    const errors = [];
    let isValid = true;
    const email = theForm.email.value;

    

    if (!email.endsWith(".com") && !email.endsWith(".edu")) {
        isValid = false;
        errors.push("Error: Email must end with '.com' or '.edu'");
    }

    if (!isValid) {
        event.preventDefault();
        showErrors(errors);
        return false;
    }
}

function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    const html = errors.map((error) => `<p>${error}</p>`);
    errorEl.innerHTML = html.join("");
}

document.querySelector("#checkoutForm").addEventListener("submit", validateForm)