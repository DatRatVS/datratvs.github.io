// add an input listener to the input field
document.getElementById("input").addEventListener("input", function(e) {
    // get the value of the input field
    var input = document.getElementById("input").value;
    // check if the input value is a color
    if (input.match(/^#[0-9A-F]{6}$/i)) {
    // set the background color of the output field to the color
    document.body.style.backgroundColor = input;
    } else {
    // if the input is not a color, set the output field to empty
    document.body.style.backgroundColor = "#ffffff";
    }
});

// make h1 say "I'm now in red!" when you hover over it
document.getElementById("h1").addEventListener("mouseover", function(e) {
    document.getElementById("h1").innerHTML = "I'm now in red!";
});

// make it normal again if you are not hovering over it
document.getElementById("h1").addEventListener("mouseout", function(e) {
    document.getElementById("h1").innerHTML = "Give me a cool color!";
});