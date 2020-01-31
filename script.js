// debilitate submit button

let parkingForm = document.querySelector("#parking-form");

parkingForm.addEventListener("submit", function(e) {
    e.preventDefault();
    nameValidate();

});

// document.querySelector("submit-button").disabled = true;

// run program on mouseclick on submit button; no run on submit

//check for string and convert to number? Beause all inputs will be strings? 

function nameValidate() {
    const name = document.querySelector("name");
    if (name.value.length > 0) && (name.value == String) {
        parent.classList.add("input-valid");
        inputBox.value = "";
    }
} else {
    parent.classList.add("input-invalid");
    inputBox.value = "'Name' is required!";
}
}

function carModelValidate() {


}

function validateDate() {
    let parkingDate = document.querySelector("start-date");
    if (parkingDate = instanceof date
    }

    //invalidates or validates ALL based on input of any kind and length

    // function nameValidate() {
    //     const inputBoxes = document.querySelector("input");

    //     for (let inputBox of inputBoxes) {
    //         parent = inputBox.parentElement;
    //         // if (box.value.length = 0) {
    //         //     return false;
    //         if (inputBox.value.length > 0) {
    //             if (!parent.classList.contains("input-valid")) {
    //                 parent.classList.add("input-valid");
    //                 inputBox.value = "";
    //             }
    //         } else {
    //             !parent.classList.contains("input-invalid");
    //             parent.classList.add("input-invalid");
    //             inputBox.value = "Please enter a valid ";
    //         }
    //     }
    // }

    //Hypothetical (THERE IS NO EMAIL VALIDATE)

    // function validateEmail() {
    //     let emailInput = document.querySelector("#email-input");
    //     let emailAddress = emailInput.value;
    //     let parentDiv = emailInput.parentNode;

    //     if (emailAddress !== "" && emailAddress.contains("@")) {
    //         parentDiv.classList.remove("input-invalid");
    //         parentDiv.classList.add("input-valid");
    //     } else {
    //         parentDiv.classList.remove("input-valid");
    //         parentDiv.classList.add("input-invalid");
    //     }
    // }