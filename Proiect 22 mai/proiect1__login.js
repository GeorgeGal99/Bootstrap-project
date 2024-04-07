const loginEmail = document.querySelector("#emailInput");
const loginPassword = document.querySelector("#passwordInput");
let loginBtn = document.querySelector("#btn_login");



loginBtn.addEventListener('click', login);

function login() {


    let valid = true;

    if (loginEmail.value.trim() === "") {
        toastr["error"]("ups,something wrong!");
        valid = false;
    } else if (!validEmail(loginEmail.value.trim())) {
        toastr["error"]("ups,something wrong!");
        valid = false;
    } else {
        toastr["success"]("Login Successful", "Hello!")
    }
    if (loginPassword.value.trim() === "") {
        toastr["error"]("ups,something wrong!");
        valid = false;

    } else if (loginPassword.value.length < 5) {
        toastr["error"]("ups,something wrong!");
        valid = false;
    } else {
        toastr["success"]("Login Successful", "Hello!");
    }

    if (valid) {
        loginUser();
    }

};

function validEmail(email) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);

}


function loginUser() {
    let users = JSON.parse(localStorage.getItem("user")) || [];
    let email = loginEmail.value.trim();
    let password = loginPassword.value.trim();



    if (users.email == email && users.password == password) {
        toastr["success"]("Login Successful", "Hello!");
        localStorage.setItem("currentUserEmail", email);
        // Redirecționează către pagina home google
        window.location.href = "proiect1_home.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }

}



toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
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