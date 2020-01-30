// submit button examples

// let el = document.querySelector(".example-form");

// el.addEventListener("submit", function(e) {
//   e.preventDefault();
//   console.log(e);
//   console.log(e.target);
// });


function nameValidate() {
    const namefield = document.querySelectorAll(".input-field");
    const input = document.querySelector("#name");
    if (input.length >= 2) {
        var message = 'Valid';

    } else { message = 'Invalid'; }
}
return message
}

nameValidate(namefield)

<
div class = "input-field input-valid" >
    <
    label > Valid < /label> <
input type = "text" >
    <
    /div>

<
div class = "input-field input-invalid" >
    <
    label > Invalid < /label> <
input type = "text" >
    <
    /div>

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