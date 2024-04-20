const firstName = document.querySelector("#registerName");
const email = document.querySelector("#registerEmail");
const password = document.querySelector("#registerPassword");
const confirmPassword = document.querySelector("#confirmPassword");
const birthDate = document.querySelector("#dataNastere");
let btnregister = document.querySelector("#btn__register");
let regex = /^[a-zA-Z]+$/;
let user = [];
lastName = document.querySelector("#lastName")


function btn_register() {
    check = [];
    valid = false;
    class User {
        constructor(firstName, lastName, email, password, birthDate) {
            this.first_name = firstName;
            this.last_name = lastName;
            this.email = email;
            this.password = password;
            this.data_nastere = birthDate;
        }
    }

    if (firstName.value.trim() == "") {
        toastr["error"](" Name can't be blank");
        valid = false;
        check.push(valid);
    } else if (!firstName.value.match(/^[a-zA-Z]+$/)) {
        toastr["error"]("No numbers");
        valid = false;
        check.push(valid);

    } else if ((firstName.value).length < 2) {
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

    if (email.value.trim() == "") {
        valid = false;
        check.push(valid);

        toastr["error"](" Mail can't be blank");
    }


    else if (!email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        valid = false;
        check.push(valid);

        toastr["error"]("Email wrong format");
    } else {
        valid = true;
        check.push(valid);

    }

    if (password.value.trim() == "") {
        valid = false;
        check.push(valid);

        toastr["error"]("Put password");
    } else if (!/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/.test(registerPassword.value)) {
        valid = false;
        check.push(valid);

        toastr["error"]("Password wrong format");
    }
    else if (!(password.value.length >= 5 && registerPassword.value.length <= 15)) {
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
    if (password.value !== confirmPassword.value) {
        valid = false;
        check.push(valid);

        toastr["error"]("Password not identic");

    } else {
        valid = true;
        check.push(valid);


    }


    if (birthDate.value.trim() == "") {
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

    let user = new User(firstName.value, lastName.value, email.value, password.value, birthDate.value,);

    // Citim lista de utilizatori din localstorage
    let users = JSON.parse(localStorage.getItem("users") || "[]");

    for (let registered_user of users) {
        if (registered_user.email == user.email) {
            toastr["error"](" Email " + user.email + " allready exists");
            valid = false;
            check.push(valid);

            // Previne salvarea utilizatorului in localstorate
            return false
        }
    }

    // Adaugam userul in listate de utilizatori in array-ul de utilizatori
    users.push(user);

    // salvam lista de utiliatori in localstorage
    localStorage.setItem('users', JSON.stringify(users));

    window.location.href = "index.html";
}


dataNastere.addEventListener('change', () => {
    const enteredDate = new Date(dataNastere.value);
    const currentDate = new Date();

    const varstaMinima = 18;

    // Calculează diferența de ani între data curentă și data de naștere
    const diferentaAni = currentDate.getFullYear() - enteredDate.getFullYear();


    if (enteredDate <= currentDate) {

        console.log("it,s ok");
    }
    else {
        dataNastere.value = "";
        toastr["error"]("You are not the terminator!");


        return
    }

    if (diferentaAni >= varstaMinima) {
        // Stochează datele utilizatorului sau efectuează alte acțiuni
        console.log("Utilizatorul este eligibil pentru înregistrare.");


    } else {
        toastr["error"]("nu ai 18 ani!");

        return
    }




});










btnregister.addEventListener('click', btn_register);



toastr.options = {
    "closeButton": false,
    "debug": true,
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

