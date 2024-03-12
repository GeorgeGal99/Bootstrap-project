let registerEmail = document.querySelector("#registerEmail");
let registerPassword = document.querySelector("#registerPassword");
let submitBtn = document.querySelector("#submitBtn");

let errorEmail = document.querySelector("#errorEmail");
let newParagraph = document.createElement("p");
errorEmail.appendChild(newParagraph);

let errorPassword = document.querySelector("#errorPassword");
let newParagraph2 = document.createElement("p");
errorPassword.appendChild(newParagraph2);

submitBtn.addEventListener("click", function () {
  let valid = true;

  if (registerEmail.value.trim() == "") {
    newParagraph.textContent = "Email can't be blank";
    valid = false;
  } else if (!isValidEmail(registerEmail.value.trim())) {
    newParagraph.textContent = "Invalid email format";
    valid = false;
  } else {
    newParagraph.textContent = "Email is good";
  }

  if (registerPassword.value.trim() == "") {
    newParagraph2.textContent = "Password can't be blank";
    valid = false;
  } else if (registerPassword.value.length < 5) {
    newParagraph2.textContent = "Password is too short";
    valid = false;
  } else {
    newParagraph2.textContent = "Password is good";
  }

  if (valid) {
    console.log("Sdfgf");
    saveUserToLocalStorage();
  }
});

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
  return emailRegex.test(email);
}

function saveUserToLocalStorage() {
  let userData = {
    email: registerEmail.value.trim(),
    password: registerPassword.value.trim(),
  };

  let users = JSON.parse(localStorage.getItem("Users")) || [];
  users.push(userData);
  localStorage.setItem("Users", JSON.stringify(users));

  alert("User registered successfully");
  window.location.href = "login.html";
}
