function onClick() {
    let textInput = document.getElementById("textbox").value;
    let replacedText = textInput.replace(/ /gi, "+");
    console.log("Redirecting to: https://www.google.com/search?q=" + replacedText);
    window.location.href = "https://www.google.com/search?q=" + replacedText;
}