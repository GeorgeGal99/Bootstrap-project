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
let listSortBy = document.getElementById("listSortBy").value
let regexLeters = /^[a-zA-Z]+$/;
let regexNumbers = /^[0-9]+$/;
const USERS = "users"
const CURENT_USER_EMAIL = "currentUserEmail"
let flats = [];


// functia de afisare ca view flat
// display function as view flat

function ShowCard(cardId) {
    let card = document.getElementById(cardId);
    card.style = "display:block";
}

// functia de comutare flat si my profile
// flat and my profile switching function

function ToggleCard(cardId) {
    let card = document.getElementById(cardId);
    let documentSize = window.screen.width;

    if (documentSize > 450) {
        card.style.display = "block";
        if (card.classList.contains('hide')) {
            card.classList.add('show');
            card.classList.remove('hide');

        }
        else {
            card.classList.add('hide');
            card.classList.remove('show');
        }
    } else {
        if (card.classList.contains('hide')) {
            card.classList.add('show');
            card.classList.remove('hide');
            card.style.display = "block";
        }
        else {
            card.classList.add('hide');
            card.classList.remove('show');
            card.style.display = "none";
        }
    }
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
                break
            case "street_name":
                ad.street_name = e.target[i].value;
                break
            case "street_number":
                ad.street_number = e.target[i].value;
                break
            case "area_size":
                ad.area_size = e.target[i].value;
                break
            case "has_ac_on":
            case "has_ac_off":
                if (e.target[i].checked) {
                    ad.has_ac = e.target[i].value;
                }
                break
            case "year_built":
                ad.year_built = e.target[i].value;
                break
            case "rent_price":
                ad.rent_price = e.target[i].value;
                break
            case "date_available":
                ad.date_available = e.target[i].value;
                break
            default:
                console.log("warning: missing attribute: ", e.target[i])
        }

    }

    if (ad.city.trim() == "") {
        toastr["error"]("ciy please!");

        return

    } else if (!city_input.value.match(/^[a-zA-Z]+$/)) {
        toastr["error"]("city name ,no numbers!");

        return

    }
    if (ad.street_name.trim() == "") {
        toastr["error"]("Please insert street!");

        return

    }

    if (ad.street_number.trim() == "") {
        toastr["error"]("Please insert street number!");

        return
    } else if (!street_number.value.match(/^[0-9]+$/)) {
        toastr["error"]("Street nr,no leters");

        return

    }

    if (ad.area_size.trim() == "") {
        toastr["error"]("Please insert area size!");

        return

    } else if (!area_size.value.match(/^[0-9]+$/)) {
        toastr["error"]("Area size,no leters!");

        return
    }

    if (ad.year_built.trim() == "") {
        toastr["error"]("Please insert year built!");

        return

    } else if (!year_built.value.match(/^[0-9]+$/)) {
        toastr["error"]("Year built,no leters!");

        return
    }

    if (ad.rent_price.trim() == "") {
        toastr["error"]("Please insert rent price!");

        return

    } else if (!rent_price.value.match(/^[0-9]+$/)) {
        toastr["error"]("Rent price,no leters!");

        return
    }


    //adaugam unnanunt in lista(array);
    ad.index = flats.length - 1;
    flats.push(ad);

    // Adaugam anuntul in html
    AddFlatToList(ad);

    // Obtinem adresa de email a userului logat
    let user_email = localStorage.getItem(CURENT_USER_EMAIL);

    // Keie stocare anunturi per user
    let ads_key = "ads-" + user_email;

    // Salvam lista de anunturi
    localStorage.setItem(ads_key, JSON.stringify(flats));

    e.target.reset();
    //ToggleCard("addFlatForm");
});

function AddFlatToList(flat) {
    // cautam template-ul
    const template = document.querySelector("#flatAddTemplate");
    // clonam template-ul 
    const clone = template.content.cloneNode(true);

    // Cautam toate elementele span
    let placeholders = clone.querySelectorAll("span");

    for (let placeholder of placeholders) {
        // Ne asiguram ca span are setat keya obiectului in proprietatea title
        if (placeholder.title.trim() != "") {
            placeholder.innerText = flat[placeholder.title]
        }
    }

    let buttons = clone.querySelectorAll("button");



    for (let button of buttons) {

        if (button.id == "removeFlat") {

            button.addEventListener("click", function () {


                let div = document.getElementById('id_confirmdiv');
                let par = div.querySelector('p');
                div.setAttribute('style', 'display:block !important');
                par.innerText = "Do you want to delete this Apartement?";
                document.getElementById('id_truebtn').onclick = function () {
                    //facem cod
                    RemoveFlatFromList(flat.index);
                    div.style.display = "none";
                }
                document.getElementById('id_falsebtn').onclick = function () {
                    // nu facem cod
                    div.style.display = "none";
                }
            });

        }
        if (button.id == "addToFavorite") {

            if (flat.favorit != undefined && flat.favorit === true) {
                button.classList.add("btn-warning");
            }

            button.addEventListener("click", function () {

                let div = document.getElementById('id_confirmdiv');
                let par = div.querySelector('p');
                div.setAttribute('style', 'display:block !important');
                if (this.classList.contains('btn-warning')) {

                    par.innerText = "Do you want to remove this Apartement from favorites?";
                }
                else {
                    par.innerText = "Do you want to add this Apartement from favorites?";
                }

                document.getElementById('id_truebtn').onclick = function () {
                    AddToFavorite(flat.index);
                    div.style.display = "none";
                }
                document.getElementById('id_falsebtn').onclick = function () {
                    div.style.display = "none";
                }

            });
        }
    }
    // Adaugam anuntul in lista 
    mainContainer.appendChild(clone);
}


function ListFlats(flats, sortBy) {
    mainContainer.innerHTML = ""

    flats = flats.map((flat, index) => {
        flat.index = index
        return flat
    });

    let sortFn
    switch (sortBy) {
        case "price_asc":
            sortFn = function (a, b) {
                return Number(a.rent_price) > Number(b.rent_price) ? 1 : -1
            }
            break;
        case "price_desc":
            sortFn = function (a, b) {
                return Number(a.rent_price) > Number(b.rent_price) ? -1 : 1
            }
            break;
        case "year_desc":
            sortFn = function (a, b) {
                return Number(a.year_built) > Number(b.year_built) ? -1 : 1
            }
            break
        case "year_asc":
            sortFn = function (a, b) {
                return Number(a.year_built) > Number(b.year_built) ? 1 : -1
            }
            break
    }

    flats.sort(sortFn);

    flats.sort(function (a, b) {
        if (a.favorit != undefined && a.favorit) {
            return -1;
        }
        return 0;
    })

    for (let index = 0; index < flats.length; index++) {
        AddFlatToList(flats[index]);
    }
}

function AddToFavorite(index) {
    // Obtinem adresa de email a userului logat
    let user_email = localStorage.getItem(CURENT_USER_EMAIL);

    // Keie stocare anunturi per user
    let ads_key = "ads-" + user_email;

    // incarcam lista de anunturi din local storage
    let flats = JSON.parse(localStorage.getItem(ads_key) || "[]");

    if (flats[index] == undefined) {
        flats[index] == false
    }

    flats[index].favorit = !flats[index].favorit;


    // Salvam lista de anunturi
    localStorage.setItem(ads_key, JSON.stringify(flats));
    ListFlats(flats, listSortBy)
}

function RemoveFlatFromList(index) {
    // Obtinem adresa de email a userului logat
    let user_email = localStorage.getItem(CURENT_USER_EMAIL);

    // Keie stocare anunturi per user
    let ads_key = "ads-" + user_email;

    // incarcam lista de anunturi din local storage
    let flats = JSON.parse(localStorage.getItem(ads_key) || "[]");
    let newAds = []
    for (let i = 0; i < flats.length; i++) {
        if (i != index) {
            newAds.push(flats[i])
        }
    }

    // Salvam lista de anunturi
    localStorage.setItem(ads_key, JSON.stringify(newAds));
    ListFlats(newAds, listSortBy)
}



// Cand se termina de incarcat pagina html
document.addEventListener("DOMContentLoaded", (event) => {

    // incarcam adresa de email a utilizatorului authentificat
    let curent_user_email = localStorage.getItem(CURENT_USER_EMAIL);

    // Pagina de gardă pentru utilizatorii neautentificați
    if (curent_user_email === null) {
        document.location = "index.html"
    }

    // incarcam lista de utilizatori
    let users = JSON.parse(localStorage.getItem(USERS) || "[]");

    // iteram prin lista de utilizatori si cautam userul cu adresa de email
    for (let user of users) {
        if (user.email === curent_user_email) {
            document.getElementById("username").innerText = user.first_name + " " + user.last_name
            document.getElementById("email_profile").value = user.email;
            document.getElementById("password_profile").value = user.password;
            document.getElementById("first_name").value = user.first_name;
            document.getElementById("last_name").value = user.last_name;
            document.getElementById("data_nastere").value = user.data_nastere;
            // Iesim din bucla dupa primul utilizator gasit
            break
        }
    }

    flats = JSON.parse(localStorage.getItem("ads-" + curent_user_email) || "[]");

    ListFlats(flats, listSortBy)

});

document.getElementById("listSortBy").addEventListener("change", function (e) {
    sortBy = e.target.value;
    ListFlats(flats, sortBy)
})


// Aici adaugam pe 'editare profil' un eveniment si incepem functia de editare profil a userului
// Here we add an event on 'profile editing' and start the user's profile editing function

document.getElementById("editProfile").addEventListener("submit", function (e) {
    e.preventDefault();

    // citim valoarile din input pentru toate elementele din forma,mai putin btn Submit,
    // read the values from input ​​for all elemements in the form, except btn Submit

    let user = {}

    for (let i = 0; i < e.target.length; i++) {
        if (e.target[i].type === "submit") {
            continue
        }
        switch (e.target[i].id) {
            case "email_profile":
                user.email = e.target[i].value;
                break
            case "password_profile":
                user.password = e.target[i].value;
                break
            case "first_name":
                user.first_name = e.target[i].value;
                break
            case "last_name":
                user.last_name = e.target[i].value;
                break
            case "data_nastere":
                user.data_nastere = e.target[i].value;
                break
            default:
        }
    }

    // incarcam lista de anunturi din local storage
    // load the list of announcements from local storage

    let users = JSON.parse(localStorage.getItem(USERS) || "[]");

    // Obtinem adresa de email a userului logat
    // We get the email address of the logged in use

    let user_email = localStorage.getItem(CURENT_USER_EMAIL);

    // iteram prin useri sa vedem daca avem useri cu acelasi nume
    // we iterate through the users to see if we have users with the same name

    for (let registered_user of users) {
        if (registered_user.email == user.email) {
            toastr["error"]("adresa deja exista");
            // guard duplicate email address
            return
        }
    }

    //  Iteram prin useri si gasim userul dupa adresa de email a utilizatorului 
    // autentificat ca sa putem modifica datele personale

    // We iterate through the users and find the user by the user's email address
    // authenticated so we can change personal data

    for (let i = 0; i < users.length; i++) {
        if (users[i].email == user_email) {
            users[i].email = user.email
            users[i].first_name = user.first_name
            users[i].last_name = user.last_name
            users[i].password = user.password
            users[i].data_nastere = user.data_nastere

            // actualizam adresa de email a utilizatorului autentificat cu noua valoare si apoi obligam sa se logheze din nou
            // update the email address of the authenticated user with the new value and then force him to log in again

            if (user_email != user.email) {
                localStorage.setItem(CURENT_USER_EMAIL, user.email);
                localStorage.setItem("ads-" + user.email, localStorage.getItem("ads-" + user_email));
                localStorage.removeItem("ads-" + user_email);
                document.location = "index.html"
            }
        }
    }
    // Salvam lista de anunturi

    localStorage.setItem(USERS, JSON.stringify(users));
    e.target.reset();
    ToggleCard("addFlatForm");

});


function logoutBtn() {

    let div = document.getElementById('id_confirmdiv');
    let par = div.querySelector('p');
    div.setAttribute('style', 'display:block !important');
    par.innerText = "Do you want to Logout?";
    document.getElementById('id_truebtn').onclick = function () {
        localStorage.removeItem(CURENT_USER_EMAIL)
        document.location = "index.html"
        div.style.display = "none";
    }
    document.getElementById('id_falsebtn').onclick = function () {
        div.style.display = "none";
    }
}

function addRemoveListEvent(removeList, newDiv) {
    removeList.addEventListener("click", function () {
        newDiv.remove();
    });
}

//  functie logout de inactivitate
// inactivity logout function

let stop = false;
let initial_timer = (35 * 60 * 1000);
let timer = initial_timer;

if (!stop) {
    setInterval(function () {
        timer -= 1000;
        // console.log("Timer:" + timer);
        if (timer == 0 || timer < 0) {
            logoutBtn()
            stop = true;
        }
    }, 1000);
}

$('body').bind('click dblclick mousedown mouseenter mouseleave keyup mouseover',
    function (e) {
        timer = initial_timer;
    });


toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "3000",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}