const name = document.querySelector("#registerName");
const registerEmail = document.querySelector("#registerEmail");
const registerPassword = document.querySelector("#registerPassword");
const confirmPassword = document.querySelector("#confirmPassword");
const dataNastere = document.querySelector("#dataNastere");
let btnregister = document.querySelector("#btn__register");
let regex = /^[a-zA-Z]+$/;
let user = [];
lastName = document.querySelector("#lastName")






function validateInput() {
    check = []
    valid = false;
    class User {
        constructor(email, password, confirmPassword, name, dataNastere, lastName) {
            this.email = email;
            this.password = password;
            this.confirmPassword = confirmPassword;
            this.name = name;
            this.dataNastere = dataNastere;
            this.lastName = lastName;
        }
    }

    if (name.value.trim() == "") {
        toastr["error"](" Name can't be blank");
        valid = false;
        check.push(valid);
    } else if (!name.value.match(/^[a-zA-Z]+$/)) {
        toastr["error"]("No numbers");
        valid = false;
        check.push(valid);

    } else if ((name.value).length < 2) {
        toastr["error"]("Name to short");
        valid = false;
        check.push(valid);

    } else {
        valid = true;
        check.push(valid);

    }

    if (lastName.value.trim() == "") {
        toastr["error"](" Name can't be blank");
        valid = false;
        check.push(valid);

    } else if (!lastName.value.match(/^[a-zA-Z]+$/)) {
        toastr["error"]("No numbers");
        valid = false;
        check.push(valid);

    } else if ((lastName.value).length < 2) {
        toastr["error"]("Name to short");
        valid = false;
        check.push(valid);

    } else {
        valid = true;
        check.push(valid);

    }

    if (registerEmail.value.trim() == "") {
        valid = false;
        check.push(valid);

        toastr["error"](" Mail can't be blank");
    }


    else if (!registerEmail.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        valid = false;
        check.push(valid);

        toastr["error"]("Email wrong format");
    } else {
        valid = true;
        check.push(valid);

    }

    if (registerPassword.value.trim() == "") {
        valid = false;
        check.push(valid);

        toastr["error"]("Put password");
    } else if (!/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/.test(registerPassword.value)) {
        valid = false;
        check.push(valid);

        toastr["error"]("Password wrong format");
    }
    else if (!(registerPassword.value.length >= 5 && registerPassword.value.length <= 15)) {
        valid = false;
        check.push(valid);

        toastr["error"]("Password wrong format");
    }
    else {
        valid = true;
        check.push(valid);



    }


    if (confirmPassword.value.trim() == "") {

        valid = false;
        check.push(valid);

        toastr["error"]("Confirm password");
    }
    if (registerPassword.value !== confirmPassword.value) {
        valid = false
        check.push(valid);

        toastr["error"]("Password not identic");

    } else {
        valid = true;
        check.push(valid);


    }


    if (dataNastere.value.trim() == "") {

        valid = false;
        check.push(valid);

        toastr["error"]("Date birth can't be blank");
    } else {
        valid = true;
        check.push(valid);



    }
    for (let ele of check) {
        if (ele == false) {
            return false;

        }

    }
    let user = new User(registerEmail.value, registerPassword.value, confirmPassword.value, name.value, dataNastere.value, lastName.value);
    saveUserToLocalStorage(user, localStorage.getItem("user"));
    return true;
}

dataNastere.addEventListener('change', () => {
    const enteredDate = new Date(dataNastere.value);
    const currentDate = new Date();

    if (enteredDate <= currentDate) {
        console.log('Data de naștere este validă.');
    } else {
        dataNastere.value = "";
        toastr["error"]("You are not the terminator!");
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

// let emailExists = user.some(user => user.email === registerEmail);
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