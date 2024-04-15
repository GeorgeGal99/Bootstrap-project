
function ShowCard(cardId) {
    let card = document.getElementById(cardId);
    card.style = "display:block";
}

function ToggleCard(cardId) {
    let card = document.getElementById(cardId);
    let display = window.getComputedStyle(card).display;


    // if (display == "flex") {

    //     card.classList.add('hide');
    //     card.style.display = "none";

    // } else {
    //     card.classList.add('show');
    //     card.style.display = "flex";
    // }

    if (card.classList.contains('hide')) {
        card.classList.add('show');
        card.classList.remove('hide');
    }
    else {
        card.classList.add('hide');
        card.classList.remove('show');
    }

    //cod short hand
    // card.style.display = display == "flex" ? "none" : "flex";
}

document.getElementById("addFlatForm").addEventListener("submit", function (e) {
    e.preventDefault();
    //pentru toate elem din forma,mai putin btn Submit,citim valoarile
    let ad = {}

    for (let i = 0; i < e.target.length; i++) {
        if (e.target[i].type === "submit") {
            continue
        }
        switch (e.target[i].id) {
            case "city_input":
                ad.city = e.target[i].value;
            case "street_name":
                ad.street_name = e.target[i].value;
            case "street_number":
                ad.street_number = e.target[i].value;
            case "area_size":
                ad.area_size = e.target[i].value;
            case "has_ac":
                ad.has_ac = e.target[i].value;
            case "year_built":
                ad.year_built = e.target[i].value;
            case "rent_price":
                ad.rent_price = e.target[i].value;
            case "date_avilable":
                ad.date_avilable = e.target[i].value;
        }

    }

    // incarcam lista de anunturi din local storage
    let ads = JSON.parse(localStorage.getItem("ads") || "[]");
    //adaugam unnanunt in lista(array);
    ads.push(ad);
    // Salvam lista de anunturi
    localStorage.setItem("ads", JSON.stringify(ads));
    e.target.reset();
    ToggleCard("addFlatForm");
});


document.getElementById("editProfile").addEventListener("submit", function (e) {
    e.preventDefault();
    //pentru toate elem din forma,mai putin btn Submit,citim valoarile
    let user = {}

    for (let i = 0; i < e.target.length; i++) {
        if (e.target[i].type === "submit") {
            continue
        }
        switch (e.target[i].id) {
            case "email_profile":
                user.email = e.target[i].value;
            case "password_profile":
                user.password = e.target[i].value;
            case "first_name":
                user.first_name = e.target[i].value;
            case "last_name":
                user.last_name = e.target[i].value;
            case "data_nastere":
                user.data_nastere = e.target[i].value;

        }
    }

    // incarcam lista de anunturi din local storage
    let ads = JSON.parse(localStorage.getItem("ads") || "[]");
    //adaugam unnanunt in lista(array);
    ads.push(ad);
    // Salvam lista de anunturi
    localStorage.setItem("ads", JSON.stringify(ads));
    e.target.reset();
    ToggleCard("addFlatForm");
});




