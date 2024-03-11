document.addEventListener("DOMContentLoaded", function () {
  let userEmail = localStorage.getItem("currentUserEmail");
  console.log(userEmail);
  if (userEmail) {
    let userName = extractUserName(userEmail);
    let welcomeMessageElement = document.getElementById("welcomeMessage");
    welcomeMessageElement.value = "Hello, " + userName;
  }
});

function extractUserName(email) {
  return email.split("@")[0];
}
