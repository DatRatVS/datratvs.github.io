function onClick() {
    let textInput = document.getElementById("textbox").value;
    let replacedText = textInput.replace(/ /gi, "+");
    console.log("Redirecting to: https://www.google.com/search?q=" + replacedText);
    window.location.href = "https://www.google.com/search?q=" + replacedText;
}

const node = document.getElementsByClassName("textbox")[0];
node.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        let textInput = document.getElementById("textbox").value;
        let replacedText = textInput.replace(/ /gi, "+");
        console.log("Redirecting to: https://www.google.com/search?q=" + replacedText);
        window.location.href = "https://www.google.com/search?q=" + replacedText;
    }
});