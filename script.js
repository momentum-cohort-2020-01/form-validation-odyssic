// debilitate submit button

let parkingForm = document.querySelector("#parking-form");

parkingForm.addEventListener("submit", function(event) {
    event.preventDefault();
    nameValidate();
    // carModelValidate();
    // function getTotal(){}
    //add all functions
});
// variables for whole document

const letters = /^[A-Za-z]+$/;
const numbers = /^[0-9]+$/;

function nameValidate() {
    const wholeName = document.querySelector("#name");

    let myNewDiv = wholeName.before("Valid name");
    let upperCaseName = wholeName.value.toUppercase();

    if (wholeName.value.length > 1) {
        wholeName.parentElement.classList.add("input-valid");
        return upperCaseName;
        // && (wholeName.value.match(letters))
    } else {
        wholeName.parentElement.classList.add("input-invalid");
        myNewDiv.innerHTML = "*Valid Name Required";
        alert("Please enter a valid name!");
    }
}

// function carYearValidate() {
//     const carYear = document.querySelector("#car-year")
//     if ((carYear.value != "") && ()) {

//     }

//     carMakeValidate()

//     carModelValidate()

// }

// function validateParkingDate() {
//     let parkingDate = document.querySelector("#start-date");
//     if (parkingDate = date
//     }

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