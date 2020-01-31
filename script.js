// debilitate submit button

let parkingForm = document.querySelector("#parking-form");

parkingForm.addEventListener("submit", function() {
    e.preventDefault();
});

// run program on mouseclick on submit button; no run on submit

const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("onclick", nameValidate());

function nameValidate() {
    const inputBoxes = document.querySelectorAll("input");

    for (let inputBox of inputBoxes) {
        parent = inputBox.parentElement;
        // if (box.value.length = 0) {
        //     return false;
        if (inputBox.value.length > 0) {
            if (!parent.classList.contains("input-valid")) {
                parent.classList.add("input-valid");
                inputBox.value = "";
            }
        } else {
            !parent.classList.contains("input-invalid");
            parent.classList.add("input-invalid");
            inputBox.value = "Please enter a valid ";
        }
    }
}

function validateEmail() {
    let emailInput = document.querySelector("#email-input");
    let emailAddress = emailInput.value;
    let parentDiv = emailInput.parentNode;

    if (emailAddress !== "") {
        parentDiv.classList.remove("input-invalid");
        parentDiv.classList.add("input-valid");
    } else {
        parentDiv.classList.remove("input-valid");
        parentDiv.classList.add("input-invalid");
    }
}