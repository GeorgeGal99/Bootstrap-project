document.addEventListener("DOMContentLoaded", function () {
  let userEmail = localStorage.getItem("currentUserEmail");
  if (userEmail) {
    let userName = extractUserName(userEmail);
    let welcomeMessageElement = document.getElementById("welcomeMessage");
    welcomeMessageElement.textContent = "Hello, " + userName + "...";
  }
});

function extractUserName(email) {
  return email.split("@")[0];
}

function addShift() {
  let formShift = document.querySelector("#formShift");
  let shiftPlaceInput = document.getElementById("placeInput");
  let numOfHoursInput = document.getElementById("hoursInput");

  // Resetarea valorilor inputurilor la șirul gol
  shiftPlaceInput.value = "";
  numOfHoursInput.value = "";
  formShift.style.display = "block";
  tableShift.style.display = "none";
}

let shiftPlaceValue;
let numOfHoursValue;

function saveShiftBtn() {
  // Obține elementele de intrare din DOM
  let shiftPlaceInput = document.getElementById("placeInput");
  let numOfHoursInput = document.getElementById("hoursInput");

  // Obține valorile introduse de utilizator din elementele de intrare și le asignăm la variabilele globale
  shiftPlaceValue = shiftPlaceInput.value;
  numOfHoursValue = numOfHoursInput.value;

  if (shiftPlaceValue.trim() == "" && numOfHoursValue.trim() == "") {
    // Afisează o alertă dacă inputurile nu sunt completate
    alert("Te rog completează ambele câmpuri!");
  } else {
    // Creează un obiect pentru datele noi

    // Afiseaza o alerta după ce utilizatorul confirmă în dialogul modal
    let myModal = new bootstrap.Modal(document.getElementById("confirmModal"));
    myModal.show();
    document.querySelector("#confirmBtn").addEventListener(
      "click",
      function (event) {
        // Închideți modalul de confirmare

        console.log(event.target);
        let newShiftData = {
          place: shiftPlaceValue,
          numOfHours: numOfHoursValue,
        };

        // Adaugă datele noi la tabel
        addDataToTable(newShiftData);

        // Verifică dacă există deja datele în localStorage
        let storedShiftData = localStorage.getItem("shiftData");
        let shiftDataArray = storedShiftData ? JSON.parse(storedShiftData) : [];

        // Adaugă datele noi la array-ul existent
        shiftDataArray.push(newShiftData);

        // Actualizează datele în localStorage
        localStorage.setItem("shiftData", JSON.stringify(shiftDataArray));

        // Ascunde formularul de adăugare a shiftului
        formShift.style.display = "none";

        // Resetarea valorilor inputurilor la șirul gol
        shiftPlaceInput.value = "";
        numOfHoursInput.value = "";
        // let myModal = bootstrap.Modal.getInstance(document.getElementById('confirmModal'));
        myModal.hide();

        formShift.style.display = "none";
        // document.querySelector('#confirmBtn').removeEventListener('click',function(){});
      },
      { once: true }
    );

    document.querySelector("#cancelBtn").addEventListener("click", function () {
      // Închideți modalul de confirmare
      myModal.hide();
    });
  }
}

function addDataToTable(newShiftData) {
  // Obține referința la tbody din tabel
  let tableBody = document.querySelector("#tableShift tbody");

  // Creează un nou rând în tabel și adaugă datele
  let row = tableBody.insertRow();
  let cellIndex = row.insertCell(0);
  let cellPlace = row.insertCell(1);
  let cellHours = row.insertCell(2);

  // Incrementăm numărul de rânduri în tabel
  cellIndex.textContent = tableBody.rows.length;

  // Adaugă datele din obiectul newShiftData în celulele rândului
  cellPlace.textContent = newShiftData.place;
  cellHours.textContent = newShiftData.numOfHours;
}

function viewShift() {
  formShift.style.display = "none";
  let tableShift = document.getElementById("tableShift");
  console.log(tableShift.style.display);
  if (tableShift.style.display === "none") {
    tableShift.style.display = "block";
  }
}

function logoutBtn() {
  // Deschideți modalul de confirmare
  let confirmModal = new bootstrap.Modal(
    document.getElementById("confirmModalLogOut")
  );
  confirmModal.show();

  // Adăugați un ascultător de evenimente pentru butonul "DA"
  document
    .getElementById("confirmLogout")
    .addEventListener("click", function () {
      // Redirecționați utilizatorul către pagina de deconectare
      window.location.href = "login.html";
    });

  // Adăugați un ascultător de evenimente pentru butonul "Anulare"
  document
    .querySelector("#confirmModalLogOut .btn-secondary")
    .addEventListener("click", function () {
      // Închideți modalul de confirmare
      confirmModal.hide();
    });
}
