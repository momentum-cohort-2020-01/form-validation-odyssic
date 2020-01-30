// submit button examples

// let el = document.querySelector(".example-form");

// el.addEventListener("submit", function(e) {
//   e.preventDefault();
//   console.log(e);
//   console.log(e.target);
// });


function nameValidate() {
    const inputBoxes = document.querySelectorAll("input");
    for (let box of inputBoxes) {
        parent = box.parentElement;
        if (box.value.length >= 2) {

            if (!parent.classList.contains('input-valid')) {
                parent.classList.add('input-valid')
            }
        } else {
            if (!parent.classList.contains('input-invalid')) {
                parent.classList.add('input-invalid')
            }


        }
    }
}

nameValidate()

// add listener 
// div class = "input-field input-valid" >
//     <
//     label > Valid < /label> <
// input type = "text" >
//     <
//     /div>

// <
// div class = "input-field input-invalid" >
//     <
//     label > Invalid < /label> <
// input type = "text" >
//     <
//     /div>

// validate various fields. what can we validate by group? Above could probably apply to all fields. If empty

// <
// div class = "input-field input-valid" >
//     <
//     label > Valid < /label> <
// input type = "text" >
//     <
//     /div>

// <
// div class = "input-field input-invalid" >
//     <
//     label > Invalid < /label> <
// input type = "text" >
//     <
//     /div>