let city_input = document.querySelector("#city_input");
let street_name = document.querySelector("#street_name");
let street_number = document.querySelector("#street_number");
let area_size = document.querySelector("#area_size");
let ac_value_on = document.querySelector("#ac_value_on");
let ac_value_off = document.querySelector("#ac_value_off");
let year_built = document.querySelector("#year_built");
let rent_price = document.querySelector("#rent_price");
let date_available = document.querySelector("#date_available");
let mainContainer = document.getElementById("mainContainer");
let btnSaveFlatList = document.querySelector("#btn_save");
btnSaveFlatList.addEventListener('click', addListCard);



function ShowCard(cardId) {
    let card = document.getElementById(cardId);
    card.style = "display:block";
}

function ToggleCard(cardId) {
    let card = document.getElementById(cardId);
    // let display = window.getComputedStyle(card).display;


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

class NewUser {
    constructor(apartaments) {

        this.apartaments = apartaments;
    }
}


function addListCard() {
    event.preventDefault();


    if (city_input.value.trim() == "") {
        alert("Please insert city!")
    } if (street_name.value.trim() == "") {
        alert("Please insert street!")


    }
    if (street_number.value.trim() == "") {
        alert("Please insert street number!")


    } if (area_size.value.trim() == "") {
        alert("Please insert area size!")


        // } if (ac_value_on.value.trim() == "") {
        //     alert("Please insert street!")


        // }
        // if (ac_value_off.value.trim() == "") {
        //     alert("Please insert street!") 


    } if (year_built.value.trim() == "") {
        alert("Please insert year built!")


    } if (rent_price.value.trim() == "") {
        alert("Please insert rent price!")


    } if (date_available.value.trim() == "") {
        alert("Please insert date available from...!")


    }

    else {
        let newDiv = document.createElement("div")
        mainContainer.appendChild(newDiv);
        newDiv.classList.add("create-div");
        newDiv.classList.add("card");
        // newDiv.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(18);
        let cardDiv = document.createElement("div");
        newDiv.appendChild(cardDiv);
        cardDiv.classList.add("card-div");

        let titleContainer = document.createElement("div");
        titleContainer.classList.add("title__container");
        cardDiv.appendChild(titleContainer);


        let divTitle = document.createElement("h2");
        divTitle.innerText = `City: ${city_input.value}`;
        divTitle.classList.add("h6_div");
        titleContainer.appendChild(divTitle);

        let divTitle1 = document.createElement("h2");
        divTitle1.innerText = `Street: ${street_name.value}`;
        divTitle1.classList.add("h6_div");
        titleContainer.appendChild(divTitle1);

        let divTitle2 = document.createElement("h2");
        divTitle2.innerText = `Street nr: ${street_number.value}`;
        divTitle2.classList.add("h6_div");
        titleContainer.appendChild(divTitle2);

        let divTitle3 = document.createElement("h2");
        divTitle13innerText = `Area size: ${area_size.value}`;
        divTitle3.classList.add("h6_div");
        titleContainer.appendChild(divTitle3);

        let divTitle4 = document.createElement("h2");
        divTitle4.innerText = `Has Ac: ${ac_value_on.value}`;
        divTitle4.classList.add("h6_div");
        titleContainer.appendChild(divTitle4);

        let divTitle5 = document.createElement("h2");
        divTitle5.innerText = `No Ac: ${ac_value_off.value}`;
        divTitle5.classList.add("h6_div");
        titleContainer.appendChild(divTitle5);

        let divTitle6 = document.createElement("h2");
        divTitle6.innerText = `Year built: ${year_built.value}`;
        divTitle6.classList.add("h6_div");
        titleContainer.appendChild(divTitle6);

        let divTitle7 = document.createElement("h2");
        divTitle7.innerText = `rent month: ${rent_price.value}`;
        divTitle7.classList.add("h6_div");
        titleContainer.appendChild(divTitle7);

        let divTitle8 = document.createElement("h2");
        divTitle8.innerText = `Date available: ${date_available.value}`;
        divTitle8.classList.add("h6_div");
        titleContainer.appendChild(divTitle8);



        let removeListContainer = document.createElement("div");
        removeListContainer.classList.add("remove__list__container");
        cardDiv.appendChild(removeListContainer);



        let removeList = document.createElement("button");
        removeList.classList.add("remove__list__button")
        removeList.innerText = "Remove";
        removeListContainer.appendChild(removeList);


        addRemoveListEvent(removeList, newDiv);






        //  resetam campurile dupa validare ca sa fie libere pentru urmatoarea scriere

        city_input.value = "";
        street_name.value = "";
        street_number.value = "";
        area_size.value = "";
        ac_value_on.value = "";
        ac_value_off.value = "";
        year_built.value = "";
        rent_price.value = "";
        date_available.value = "";
    }
}

function addRemoveListEvent(removeList, newDiv) {
    removeList.addEventListener("click", function () {
        newDiv.remove();
    });
}


