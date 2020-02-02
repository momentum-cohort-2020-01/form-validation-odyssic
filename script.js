// debilitate submit button

let parkingForm = document.querySelector("#parking-form");

parkingForm.addEventListener("submit", function(event) {
    event.preventDefault();
    nameValidate();
    carYearValidate();
    carMakeValidate();
    carModelValidate();
    parkingDays();
    cvv();
    validateCardNumber();
});
// variables for whole document

const letters = /^[A-Za-z]+$/;
const numbers = /^[0-9]+$/;

function nameValidate() {
    const wholeName = document.querySelector("#name");
    const wholeNameParent = wholeName.parentElement;

    // let upperCaseName = wholeName.value.toUppercase();

    if (wholeName.value.length > 0 && wholeName.value.match(letters)) {
        if (wholeNameParent.classList.contains("input-invalid")) {
            wholeNameParent.classList.remove("input-invalid");
            document.querySelector(".validation-message").remove();
            wholeNameParent.classList.add("input-valid");
        } else if (!wholeNameParent.classList.contains(".input-invalid")) {
            wholeNameParent.classList.add("input-valid");
        }
    } else if (wholeName.value == "" || wholeName.value.match(numbers)) {
        if (wholeNameParent.classList.contains("input-invalid")) {
            return;
        } else {
            var block_to_insert;
            var container_block;

            block_to_insert = document.createElement("div");
            block_to_insert.innerHTML = "* Valid Name Required";
            block_to_insert.className = "validation-message";

            container_block = document.querySelector("#name");
            container_block.parentElement.appendChild(block_to_insert);

            // wholeName.innerHTML = "* Valid Name Required";

            // wholeNameParent.appendChild("*Valid Name Required");
            // wholeName.after("* Valid Name Required");
            // wholeName.appendChild("*Valid Name Required");
            wholeNameParent.classList.add("input-invalid");
        }
    }
}

function carYearValidate() {
    const carYear = document.querySelector("#car-year");
    const carYearParent = carYear.parentElement;

    if (
        carYear.value.match(numbers) &&
        carYear.value > 1900 &&
        carYear.value < 2021
    ) {
        if (carYearParent.classList.contains("input-invalid")) {
            carYearParent.classList.remove("input-invalid");
            document.querySelector(".validation-message").remove();
            carYearParent.classList.add("input-valid");
        } else if (!carYearParent.classList.contains(".input-invalid")) {
            carYearParent.classList.add("input-valid");
        }
    } else if (carYear.value == "" || carYear.value.match(numbers)) {
        if (carYearParent.classList.contains("input-invalid")) {
            return;
        } else {
            var block_to_insert;
            var container_block;

            block_to_insert = document.createElement("div");
            block_to_insert.innerHTML = "* Valid Car Year Required";
            block_to_insert.className = "validation-message";

            container_block = document.querySelector("#car-year");
            container_block.parentElement.appendChild(block_to_insert);

            carYearParent.classList.add("input-invalid");
        }
    }
}

function carMakeValidate() {
    const carMake = document.querySelector("#car-make");
    const carMakeParent = carMake.parentElement;

    if (carMake.value.length > 0 && carMake.value.match(letters)) {
        if (carMakeParent.classList.contains("input-invalid")) {
            carMakeParent.classList.remove("input-invalid");
            document.querySelector(".validation-message").remove();
            carMakeParent.classList.add("input-valid");
        } else if (!carMakeParent.classList.contains(".input-invalid")) {
            carMakeParent.classList.add("input-valid");
        }
    } else if (carMake.value == "" || carMake.value.match(numbers)) {
        if (carMakeParent.classList.contains("input-invalid")) {
            return;
        } else {
            var block_to_insert;
            var container_block;

            block_to_insert = document.createElement("div");
            block_to_insert.innerHTML = "* Valid Car Make Required";
            block_to_insert.className = "validation-message";

            container_block = document.querySelector("#car-make");
            container_block.parentElement.appendChild(block_to_insert);

            carMakeParent.classList.add("input-invalid");
        }
    }
}

function carModelValidate() {
    const carModel = document.querySelector("#car-model");
    const carModelParent = carModel.parentElement;

    if (carModel.value.length > 0 && carModel.value.match(letters)) {
        if (carModelParent.classList.contains("input-invalid")) {
            carModelParent.classList.remove("input-invalid");
            document.querySelector(".validation-message").remove();
            carModelParent.classList.add("input-valid");
        } else if (!carModelParent.classList.contains(".input-invalid")) {
            carModelParent.classList.add("input-valid");
        }
    } else if (carModel.value == "" || carModel.value.match(numbers)) {
        if (carModelParent.classList.contains("input-invalid")) {
            return;
        } else {
            var block_to_insert;
            var container_block;

            block_to_insert = document.createElement("div");
            block_to_insert.innerHTML = "* Valid Car Model Required";
            block_to_insert.className = "validation-message";

            container_block = document.querySelector("#car-model");
            container_block.parentElement.appendChild(block_to_insert);

            carModelParent.classList.add("input-invalid");
        }
    }
}

// function parkingDateValidate() {
//     const parkingDate = document.querySelector("#start-date");
//     const parkingDateParent = parkingDate.parentElement;

//     if (
//         parkingDate.value.match(numbers) &&
//         parkingDate.value > 1900 &&
//         parkingDate.value < 2021
//     ) {
//         if (parkingDateParent.classList.contains("input-invalid")) {
//             parkingDateParent.classList.remove("input-invalid");
//             document.querySelector(".validation-message").remove();
//             parkingDateParent.classList.add("input-valid");
//         } else if (!parkingDateParent.classList.contains(".input-invalid")) {
//             parkingDateParent.classList.add("input-valid");
//         }
//     } else if (parkingDate.value == "" || parkingDate.value.match(numbers)) {
//         if (parkingDateParent.classList.contains("input-invalid")) {
//             return;
//         } else {
//             var block_to_insert;
//             var container_block;

//             block_to_insert = document.createElement("div");
//             block_to_insert.innerHTML = "* Valid Start Date Required";
//             block_to_insert.className = "validation-message";

//             container_block = document.querySelector("#start-date");
//             container_block.parentElement.appendChild(block_to_insert);

//             parkingDateParent.classList.add("input-invalid");
//         }
//     }
// }

function parkingDays() {
    const parkingDays = document.querySelector("#days");
    const parkingDaysParent = parkingDays.parentElement;

    if (
        parkingDays.value.match(numbers) &&
        parkingDays.value >= 1 &&
        parkingDays.value <= 30
    ) {
        if (parkingDaysParent.classList.contains("input-invalid")) {
            parkingDaysParent.classList.remove("input-invalid");
            document.querySelector(".parking-days-validation-message").remove();
            parkingDaysParent.classList.add("input-valid");
        } else if (!parkingDaysParent.classList.contains(".input-invalid")) {
            parkingDaysParent.classList.add("input-valid");
        }
    } else if (parkingDays.value == "" || parkingDays.value.match(numbers)) {
        if (parkingDaysParent.classList.contains("input-invalid")) {
            return;
        } else {
            var block_to_insert;
            var container_block;

            block_to_insert = document.createElement("div");
            block_to_insert.innerHTML = "* Please request between one and 30 days";
            block_to_insert.className = "parking-days-validation-message";

            container_block = document.querySelector("#days");
            container_block.parentElement.appendChild(block_to_insert);

            parkingDaysParent.classList.add("input-invalid");
        }
    }
}

// function creditCard(){}

function cvv() {
    const cvv = document.querySelector("#cvv");
    const cvvParent = cvv.parentElement;

    if (cvv.value.match(numbers) && cvv.value.length == 3) {
        if (cvvParent.classList.contains("input-invalid")) {
            cvvParent.classList.remove("input-invalid");
            document.querySelector(".ccv-validation-message").remove();
            cvvParent.classList.add("input-valid");
        } else if (!cvvParent.classList.contains(".input-invalid")) {
            cvvParent.classList.add("input-valid");
        }
    } else if (cvv.value == "" || cvv.value.match(numbers)) {
        if (cvvParent.classList.contains("input-invalid")) {
            return;
        } else {
            var block_to_insert;
            var container_block;

            block_to_insert = document.createElement("div");
            block_to_insert.innerHTML = "* Please enter a valid CVV number!";
            block_to_insert.className = "ccv-validation-message";

            container_block = document.querySelector("#cvv");
            container_block.parentElement.appendChild(block_to_insert);

            cvvParent.classList.add("input-invalid");
        }
    }
}

function va() {
    const cvv = document.querySelector("#cvv");
    const cvvParent = cvv.parentElement;

    if (cvv.value.match(numbers) && cvv.value.length == 3) {
        if (cvvParent.classList.contains("input-invalid")) {
            cvvParent.classList.remove("input-invalid");
            document.querySelector(".validation-message").remove();
            cvvParent.classList.add("input-valid");
        } else if (!cvvParent.classList.contains(".input-invalid")) {
            cvvParent.classList.add("input-valid");
        }
    } else if (cvv.value == "" || cvv.value.match(numbers)) {
        if (cvvParent.classList.contains("input-invalid")) {
            return;
        } else {
            var block_to_insert;
            var container_block;

            block_to_insert = document.createElement("div");
            block_to_insert.innerHTML = "* Please enter a valid CVV number!";
            block_to_insert.className = "validation-message";

            container_block = document.querySelector("#cvv");
            container_block.parentElement.appendChild(block_to_insert);

            cvvParent.classList.add("input-invalid");
        }
    }
}

function validateCardNumber(number) {
    const ccnumber = document.querySelector("#credit-card").value;
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(ccnumber)) return false;

    return luhnCheck(ccnumber);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return sum % 10 == 0;
}