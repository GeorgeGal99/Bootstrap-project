let loginEmail = document.querySelector("#loginEmail");
let loginPassword = document.querySelector("#loginPassword");
let loginBtn = document.querySelector("#loginBtn");

let errorLoginEmail = document.querySelector("#errorLoginEmail");
let newLoginParagraph = document.createElement("p");
errorLoginEmail.appendChild(newLoginParagraph);

let errorLoginPassword = document.querySelector("#errorLoginPassword");
let newLoginParagraph2 = document.createElement("p");
errorLoginPassword.appendChild(newLoginParagraph2);

loginBtn.addEventListener("click", function () {
  let valid = true;

  if (loginEmail.value.trim() === "") {
    newLoginParagraph.textContent = "Email can't be blank";
    valid = false;
  } else if (!isValidEmail(loginEmail.value.trim())) {
    newLoginParagraph.textContent = "Invalid email format";
    valid = false;
  } else {
    newLoginParagraph.textContent = "Email is good";
  }
  if (loginPassword.value.trim() === "") {
    newLoginParagraph2.textContent = "Password can't be blank";
    valid = false;
  } else if (loginPassword.value.length < 5) {
    newLoginParagraph2.textContent = "Password is too short";
    valid = false;
  } else {
    newLoginParagraph2.textContent = "Password is good";
  }

  if (valid) {
    loginUser();
  }
});

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
  return emailRegex.test(email);
}

function loginUser() {
  let users = JSON.parse(localStorage.getItem("Users")) || [];
  let email = loginEmail.value.trim();
  let password = loginPassword.value.trim();

  let userFound = users.find(
    (user) => user.email === email && user.password === password
  );

  if (userFound) {
    alert("Login successful");
    localStorage.setItem("currentUserEmail", email);
    // Redirecționează către pagina principală de căutare Google
    window.location.href = "home_page.html";
  } else {
    alert("Invalid email or password. Please try again.");
  }
}
