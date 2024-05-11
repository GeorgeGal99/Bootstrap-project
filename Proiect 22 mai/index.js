const loginEmail = document.querySelector("#emailInput");
const loginPassword = document.querySelector("#passwordInput");
let loginBtn = document.querySelector("#btn_login");
loginBtn.addEventListener('click', login);



// validari login
// validations login

function login(e) {
    e.preventDefault()

    let valid = true;

    if (loginEmail.value.trim() === "") {

        valid = false;
    } else if (!validEmail(loginEmail.value.trim())) {

        valid = false;
    }
    if (loginPassword.value.trim() === "") {

        valid = false;

    } else if (loginPassword.value.length < 5) {

        valid = false;
    }
    if (valid) {
        loginUser();
    } else {
        toastr["error"]("ups,invalid mail or password  wrong!");
    }
};

//  verifică dacă adresa de e-mail este formatată corect

function validEmail(email) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);

}


function loginUser() {

    // creez o variabila  users care preia datele stocate în localStorage 
    // sub denumirea cheia “users” ,daca nu gaseste se va folosi de un Array gol

    // I create a users variable that retrieves the data stored in localStorage
    // under the name of the key "users", if it does not find it, it will use an empty Array

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // se ia valoarea din inputul email si parola
    // the value is taken from the input email and password

    let email = loginEmail.value.trim();
    let password = loginPassword.value.trim();

    // iteram prin fiecare utilizator din lista users.
    // we iterate through each user in the users list

    for (let user of users) {

        // verificăm dacă adresa de e-mail și parola introduse de utilizator 
        // (email și password) corespund cu datele unui utilizator din lista

        // we checks if the e-mail address and password entered by the user 
        // (email and password) correspond to the data of a user in the list

        if (user.email == email && user.password == password) {
            toastr["success"]("Login Successful", "Hello!");

            // stocham adresa de e-mail curentă în memoria locală sub cheia “currentUserEmail”
            // we store the current email address in local memory under the key "currentUserEmail"

            localStorage.setItem("currentUserEmail", email);

            // Redirecționează către pagina home flat  daca toate verificarile sunt valide
            // Redirects to the home flat page if all checks are valid
            window.location.href = "proiect1_home.html";
            return
        }
    }
    toastr["error"]("ups,invalid mail or password  wrong!");
}

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
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