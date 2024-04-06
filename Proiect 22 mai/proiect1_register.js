const name = document.querySelector("#registerName");
const registerEmail = document.querySelector("#registerEmail");
const registerPassword = document.querySelector("#registerPassword");
const confirmPassword = document.querySelector("#confirmPassword");
const dataNastere = document.querySelector("#dataNastere");
let btnregister = document.querySelector("#btn__register");
let regex = /^[a-zA-Z]+$/;
document.getElementById("test_label").innerText = "";
let user = [];



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




function validateInput() {
    // let emailExists = user.some(user => user.email === registerEmail);
    class User {
        constructor(email, password, confirmPassword, name, dataNastere) {
            this.email = email;
            this.password = password;
            this.confirmPassword = confirmPassword;
            this.name = name;
            this.dataNastere = dataNastere;
        }
    }

    if (name.value.trim() == "") {
        toastr["error"](" Name can't be blank");
        valid = false;
    } else if (!name.value.match(/^[a-zA-Z]+$/)) {
        toastr["error"]("No numbers");
        valid = false;
    } else if ((name.value).length < 2) {
        toastr["error"]("Name to short");
        valid = false;
    } else {

        valid = true;

    }

    if (registerEmail.value.trim() == "") {
        valid = false;
        toastr["error"](" Mail can't be blank");
    }

    // } if (registerEmail.value) {
    //     user = JSON.parse(localStorage.getItem('user') || '[]');

    // } if (emailExists) {
    //     console.log('Această adresă de e-mail este deja înregistrată.');
    // }
    // } else {
    //     // Adaugă utilizatorul în lista de utilizatori
    //     // newUser = { name: 'Nume utilizator', email: enteredEmail };
    //     user.push(newUser);
    //     // localStorage.setItem('user', JSON.stringify(user));
    // }
    else if (!registerEmail.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        valid = false;
        toastr["error"]("Email wrong format");
    } else {
        valid = true;
    }



    if (registerPassword.value.trim() == "") {
        valid = false;
        toastr["error"]("Put password");
    } else if (!registerPassword.value.match(/^[A-Za-z]\w{5,14}$/)) {
        valid = false;
        toastr["error"]("Password wrong format");
    } else {
        valid = true;


    }


    if (confirmPassword.value.trim() == "") {

        valid = false;
        toastr["error"]("Confirm password");
    }
    if (registerPassword.value !== confirmPassword.value) {
        valid = false
        toastr["error"]("Password not identic");

    } else {
        valid = true;

    }


    if (dataNastere.value.trim() == "") {

        valid = false;
        toastr["error"]("Date birth can't be blank");
    } else {
        valid = true;


    } if (valid) {
        let user = new User(registerEmail.value, registerPassword.value, confirmPassword.value, name.value, dataNastere.value);
        saveUserToLocalStorage(user, localStorage.getItem("user"));
        return true;
    } else {
        return false;
    }

}

dataNastere.addEventListener('change', () => {
    const enteredDate = new Date(dataNastere.value);
    const currentDate = new Date();

    if (enteredDate <= currentDate) {
        console.log('Data de naștere este validă.');
    } else {
        console.log('Data de naștere nu poate fi în viitor.');
        return
    }

});





function saveUserToLocalStorage(newUser, localStorage2) {
    user = [];
    if (localStorage2) {
        user = JSON.parse(localStorage2);

    } user.push(newUser);
    // Convertim obiectul user într-un șir de caractere JSON
    const userString = JSON.stringify(user);

    // Salvăm șirul de caractere în localStorage
    localStorage.setItem('user', userString);
    toastr["success"]("Register Succefull");
}


btnregister.addEventListener('click', btn_register);

function btn_register() {
    let valid = false
    if (validateInput()) {
        window.location.href = "proiect1__login.html";

    } else {
        valid = false;
        toastr["error"]("completeaza toate campurile");
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
