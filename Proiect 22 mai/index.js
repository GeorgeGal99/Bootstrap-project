const loginEmail = document.querySelector("#emailInput");
const loginPassword = document.querySelector("#passwordInput");
let loginBtn = document.querySelector("#btn_login");
loginBtn.addEventListener('click', login);


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


function validEmail(email) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);

}


function loginUser() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let email = loginEmail.value.trim();
    let password = loginPassword.value.trim();
    for (let user of users) {

        if (user.email == email && user.password == password) {
            toastr["success"]("Login Successful", "Hello!");
            localStorage.setItem("currentUserEmail", email);
            // Redirecționează către pagina home google
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