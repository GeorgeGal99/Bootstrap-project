
function ShowCard(cardId) {
    let card = document.getElementById(cardId);
    card.style = "display:block";
}

function ToggleCard(cardId) {
    let card = document.getElementById(cardId);
    let display = window.getComputedStyle(card).display;
    /*
    if (display == "flex") {
        card.style.display = "none"
    } else {
        card.style.display = "flex"
    }*/
    card.style.display = display == "flex" ? "none" : "flex";
}



