
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

let btnSaveFlatList = document.querySelector("#btn_save");
btnSaveFlatList.addEventListener()

function addListToMain() {
    event.preventDefault();
    let controlsInput = document.getElementById("controlsInput");
    let mainContainer = document.getElementById("mainContainer")

    if (controlsInput.value.trim() == "") {
        alert("Please insert something!")


    } else {
        let newDiv = document.createElement("div")
        mainContainer.appendChild(newDiv);
        newDiv.classList.add("create-div");

        let topDiv = document.createElement("div");
        newDiv.appendChild(topDiv);
        topDiv.classList.add("top-div");

        let titleContainer = document.createElement("div");
        titleContainer.classList.add("title__container");
        topDiv.appendChild(titleContainer);


        let divTitle = document.createElement("h2");
        divTitle.innerText = `Title: ${controlsInput.value}`;
        divTitle.classList.add("h2__div")
        titleContainer.appendChild(divTitle);

        let removeListContainer = document.createElement("div");
        removeListContainer.classList.add("remove__list__container");
        topDiv.appendChild(removeListContainer);



        let removeList = document.createElement("button");
        removeList.innerText = "Remove List";
        removeList.classList.add("remove__list__button")
        removeListContainer.appendChild(removeList);

        // removeList.addEventListener("click", function() {
        //     newDiv.remove();
        // });


        addRemoveListEvent(removeList, newDiv);




        let bottomDiv = document.createElement("div");
        newDiv.appendChild(bottomDiv);
        bottomDiv.classList.add("bottom__div");


        let secondInputContainer = document.createElement("div");
        bottomDiv.appendChild(secondInputContainer);
        secondInputContainer.classList.add("second__input__container");



        let newInput = document.createElement("input");
        secondInputContainer.appendChild(newInput);
        newInput.classList.add("second__input")
        newInput.type = "text";
        newInput.placeholder = 'Insert your list';


        let secondAddButtonContainer = document.createElement("div");
        secondAddButtonContainer.classList.add("second__add__button__container");
        bottomDiv.appendChild(secondAddButtonContainer);



        let addSecondListButton = document.createElement("button");
        addSecondListButton.innerText = "Add Item";
        addSecondListButton.classList.add("second__button");
        secondAddButtonContainer.appendChild(addSecondListButton);

        addSecondListButton.addEventListener("click", function () {
            if (newInput.value.trim() != "") {

                let newUl = document.createElement("ul");
                let newItem = document.createElement("li");
                let removeItem = document.createElement("span");

                newItem.classList.add("list__item");
                newUl.classList.add("list__ul")
                newDiv.appendChild(newUl);
                newUl.appendChild(newItem);
                newItem.innerText = newInput.value;


                removeItem.innerText = "x";
                removeItem.classList.add("remove__each__item");
                newItem.appendChild(removeItem);


                removeItem.addEventListener('click', function () {
                    newItem.remove();
                })

                newInput.value = "";
            } else {
                alert("Insert something!")
            }
        });



        controlsInput.value = "";


    }
}

function addRemoveListEvent(removeList, newDiv) {
    removeList.addEventListener("click", function () {
        newDiv.remove();
    });
}


