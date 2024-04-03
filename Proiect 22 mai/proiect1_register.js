const name = document.querySelector("#registerName");
const registerEmail = document.querySelector("#registerEmail");
const registerPassword = document.querySelector("#registerPassword");
const confirmPassword = document.querySelector("#confirmPassword");
const dataNastere = document.querySelector("#dataNastere");
let btnregister = document.querySelector("#btn__register");



// functie html
let allInputs = document.querySelectorAll("input");
for (let ele of allInputs) {
    ele.addEventListener("keyup", test);
}
//   functie html
function test(e) {
    if (e.target.value == "") {
        let parrentDiv = e.target.parentNode;
        let label = parrentDiv.querySelector("label");
        console.log(e.target.placeholder);
        label.innerText = e.target.placeholder;
        return;
    }
    e.target.addEventListener("focusout", focusOut);
}

// functie html 
function focusOut(e) {
    if (e.target.value != "") {
        let parrentDiv = e.target.parentNode;
        let label = parrentDiv.querySelector("label");
        console.log(e.target);
        label.innerText = "";
    }
}

const username = 'john_doe';
const email = 'john.doe@example.com';
saveUserToLocalStorage(username, email);



btnregister.addEventListener('click', btn_register);
function btn_register() {
    toastr["success"]("Register Successful", "Hello!");
    document.getElementById("test_label").innerText = "";

};

































function saveUserToLocalStorage(username, email) {
    try {
        // Creăm un obiect pentru utilizator
        const user = {
            username: username,
            email: email
        };

        // Convertim obiectul într-un șir JSON
        const userJSON = JSON.stringify(user);

        // Salvăm șirul JSON în local storage
        localStorage.setItem('user', userJSON);

        console.log('Utilizatorul a fost salvat în local storage.');
    } catch (error) {
        console.error('A apărut o eroare la salvarea utilizatorului:', error);
    }
}





let user = [];



if (valid input()) {

    let stocare = localStorage.getItem("user-1")
    if (stocare) {
        user = JSON.parse(stocare)
        let newUser(email, value, password...toate)
    }


}




class User {
    constructor(email, password, confpassword, firstname, name, bisrtdate) {
        this.email = email;
        this.password = password;
        this.confpassword = confpassword;
        this.firstname = firstbane;
        this.name = name;
        this.bisrtdate = birthdate;
    }
}




















toastr.options = {
    "closeButton": false,
    "debug": true,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}