
function ShowCard(cardId) {
    let card = document.getElementById(cardId);
    card.style = "display:block";
}

function ToggleCard(cardId) {
    let card = document.getElementById(cardId);
    let display = window.getComputedStyle(card).display;

    if (display == "flex") {
        card.style.display = "none"
    } else {
        card.style.display = "flex"
    }

    //cod short hand
    // card.style.display = display == "flex" ? "none" : "flex";
}

document.getElementById("addFlatForm").addEventListener("submit", function (e) {
    e.preventDefault();

    for (let i = 0; i < e.target.length; i++) {
        if (e.target[i].type === "submit") {
            continue
        }
        console.log(e.target[i].id + "-" + e.target[i].value);
    }
})

/*
function AddFlat(event) {
    // prevent form submision (reloading page)
    event.preventDefault();

    console.log('add');
}*/



