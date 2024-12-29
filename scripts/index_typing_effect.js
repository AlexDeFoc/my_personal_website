let text_data = "Choose a card"
let text_element = document.getElementById("page_header");

let index = 0;

function addChar() {
    if (index < text_data.length) {
        text_element.innerHTML += text_data.charAt(index);
        index += 1;
    }
}

function startTypingPageHeader() {
    // reset inner contents (add 2 dots to make it so the buttons dont fly down, cuz the contents would be empty)
    text_element.innerHTML = "..";

    // every x ms add call the function
    setInterval(addChar, 170)
}

window.onload = startTypingPageHeader;
