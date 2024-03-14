// DECLARAM VARIABILELE GLOBALE PENTRU A LE PUTEA FOLOSI IN DIFERITE FUNCTII
placeInput = document.querySelector("#placeInput");
hoursInput = document.querySelector("#hoursInput");

// preluam divul din html pentru a arata un mesaj sub input in caz de eroare
let validateMessagePlaceInput = document.querySelector(
  "#validateMessagePlaceInput"
);

// preluam divul din html pentru a arata un mesaj sub input in caz de eroare
let validateMessageHoursInput = document.querySelector(
  "#validateMessageHoursInput"
);

// preluam din html modal pentru saveShiftBtn
let myModal = new bootstrap.Modal(document.getElementById("confirmModal"));

let tableBody = document.querySelector("#tableShift tbody");

// aray gol pentru  validare inputuri
let valid = [];

// ca sa apara numele  userului hello...
document.addEventListener("DOMContentLoaded", function () {
  // PRELUAM LOCAL STORAGE DIN PAGINA DE LOGIN
  let userEmail = localStorage.getItem("currentUserEmail");
  if (userEmail) {
    let userName = extractUserName(userEmail);
    // aratam numele userului in divul de message
    let welcomeMessage = document.querySelector("#welcomeMessage");
    welcomeMessage.value = `Hello ${userName}...`;
  }
});

// EXTRAGEM NUMELE DE UTILIZATOR SA FIE VIZIBILA DOAR PANA LA @
function extractUserName(email) {
  return email.split("@")[0];
}

// APELAM FUNCTIA ADD SHIFT

function addShift() {
  // CAND APAS PE ADD SHIFT, SA APARA FORMULARUL
  formShift.style.display = "block";
  tableShift.style.display = "none";

  // Preluam PLACEINPUTUL DE PE PAGINA SI ADAUGAM STYLE
  placeInput.style.borderColor = "black";
  placeInput.style.backgroundColor = "rgb(228, 220, 206)";
  placeInput.style.fontFamily = "Gill Sans";

  // Preluam HOURSINPUTUL DE PE PAGINA SI ADAUGAM STYLE
  hoursInput.style.borderColor = "black";
  hoursInput.style.backgroundColor = "rgb(228, 220, 206)";
  hoursInput.style.fontFamily = "Gill Sans";

  // Resetarea valorilor inputurilor la șirul gol
  placeInput.value = "";
  hoursInput.value = "";

  // pentru atunci cand apas din nou pe add shift sa nu mi mai arate validari sub input
  validateMessagePlaceInput.textContent = "";
  validateMessageHoursInput.textContent = "";
  document.querySelector("#sortButton").style.display = "none";
}

// APELAM FUNCTIA SAVESHIFTBTN

function saveShiftBtn() {
  valid = [];
  validatePlaceInput();
  validateHoursInput();

  if (valid.every((value) => value)) {
    saveToLocalStorage();
  }
}

// VALIDAM INPUTUL DE PLACESHIFT
function validatePlaceInput() {
  // regexul pentru letters only
  let lettersOnlyPlaceInput = /^[a-zA-Z\s-]*$/;

  if (placeInput.value.trim() == "") {
    placeInput.style.border = "2px solid red";
    validateMessagePlaceInput.textContent = "Can't be blank";
    validateMessagePlaceInput.style.color = "red";
    validateMessagePlaceInput.style.fontFamily = "Gill Sans";
    return valid.push(false);
  } else if (!lettersOnlyPlaceInput.test(placeInput.value)) {
    placeInput.style.border = "2px solid red";
    validateMessagePlaceInput.textContent = "Letters Only";
    validateMessagePlaceInput.style.color = "red";

    validateMessagePlaceInput.style.fontFamily = "Gill Sans";
    return valid.push(false);
  } else {
    placeInput.style.border = "2px solid rgb(0, 225, 67)";
    validateMessagePlaceInput.textContent = "Place Valid";
    validateMessagePlaceInput.style.color = "rgb(0, 225, 67)";
    validateMessagePlaceInput.style.fontFamily = "Gill Sans";
    return valid.push(true);
  }
}

// // VALIDAM INPUTUL DE HOURSSHIFT
function validateHoursInput() {
  // regexul pentru numbers only
  let numbersOnlyHoursInput = /^\d+$/;

  if (hoursInput.value.trim() == "") {
    hoursInput.style.border = "2px solid red";
    validateMessageHoursInput.textContent = "Can't be blank";
    validateMessageHoursInput.style.color = "red";
    validateMessageHoursInput.style.fontFamily = "Gill Sans";
    return valid.push(false);
  } else if (!numbersOnlyHoursInput.test(hoursInput.value)) {
    hoursInput.style.border = "2px solid red";
    validateMessageHoursInput.textContent = "Numbers Only";
    validateMessageHoursInput.style.color = "red";
    validateMessageHoursInput.style.fontFamily = "Gill Sans";
    return valid.push(false);
  } else if (hoursInput.value < 0 || hoursInput.value > 24) {
    hoursInput.style.border = "2px solid red";
    validateMessageHoursInput.textContent =
      "The number must be between 0 and 24";
    validateMessageHoursInput.style.color = "red";
    validateMessageHoursInput.style.fontFamily = "Gill Sans";
    return valid.push(false);
  } else {
    hoursInput.style.border = "2px solid rgb(0, 225, 67)";
    validateMessageHoursInput.textContent = "No. Of Hours Valid";
    validateMessageHoursInput.style.color = "rgb(0, 225, 67)";
    validateMessageHoursInput.style.fontFamily = "Gill Sans";
    return valid.push(true);
  }
}

function saveToLocalStorage() {
  // FACEM VIZIBIL MODALUL
  myModal.show();

  // INCHIDEM MODALUL DACA ALEGEM OPTIUNEA "ANULARE"
  document.querySelector("#cancelBtn").addEventListener("click", function () {
    myModal.hide();
  });

  // CE SE INTAMPLA CAND APASAM "DA"?
  document.querySelector("#confirmBtn").addEventListener(
    "click",
    function (event) {
      let newShiftData = {
        place: placeInput.value,
        hours: hoursInput.value,
      };

      // Verifică dacă există deja datele în localStorage
      let storedShiftData = localStorage.getItem("shiftData");
      let shiftDataArray = storedShiftData ? JSON.parse(storedShiftData) : [];

      // Adaugă datele noi la array-ul existent
      shiftDataArray.push(newShiftData);

      // Actualizează datele în localStorage
      localStorage.setItem("shiftData", JSON.stringify(shiftDataArray));

      // Ascunde formularul de adăugare a shiftului si modalul
      formShift.style.display = "none";
      myModal.hide();
    },
    { once: true }
  );
}

function viewShift() {
  formShift.style.display = "none";

  let shiftDataArray = JSON.parse(localStorage.getItem("shiftData"));

  if (shiftDataArray && shiftDataArray.length > 0) {
    tableBody.innerHTML = ""; // Clear the table body before adding new rows

    shiftDataArray.forEach((shift, index) => {
      let row = `<tr>
                            <th scope="row">${index + 1}</th>
                            <td>${shift.place}</td>
                            <td>${shift.hours}</td>
                        </tr>`;
      tableBody.innerHTML += row;
    });

    // Afiseaza tabelul si butonul de sortare
    document.querySelector("#tableShift").style.display = "table";
    document.querySelector("#sortButton").style.display = "block";
  } else {
    // Ascunde tabelul și butonul de sortare dacă nu există date
    document.querySelector("#tableShift").style.display = "none";
    document.querySelector("#sortButton").style.display = "none";
    alert("Nu există date de afișat.");
  }
}

function sortTable() {
  let rows = Array.from(tableBody.querySelectorAll("tr"));

  // Sortează rândurile în ordine descrescătoare în funcție de numărul de ore
  rows.sort((rowA, rowB) => {
    let hoursA = parseInt(rowA.cells[2].textContent);
    let hoursB = parseInt(rowB.cells[2].textContent);
    return hoursB - hoursA;
  });

  // Rearanjează rândurile în tabel în funcție de ordinea sortată
  rows.forEach((row) => {
    tableBody.removeChild(row);
    tableBody.appendChild(row);
  });
}

// APELAM FUNCTIA LOG OUT
function logoutBtn() {
  // Deschideți modalul de confirmare
  let confirmModaLogOut = new bootstrap.Modal(
    document.getElementById("confirmModalLogOut")
  );
  confirmModaLogOut.show();

  // Adăugați un ascultător de evenimente pentru butonul "DA"
  document
    .getElementById("confirmLogout")
    .addEventListener("click", function () {
      localStorage.removeItem("shiftData");
      // Redirecționați utilizatorul către pagina de deconectare
      window.location.href = "login.html";
    });

  // Adăugați un ascultător de evenimente pentru butonul "Anulare"
  document
    .querySelector("#cancelLogOut")
    .addEventListener("click", function () {
      // Închideți modalul de confirmare
      confirmModaLogOut.hide();
    });
}
