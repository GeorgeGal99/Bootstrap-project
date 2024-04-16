
// Obiect pentru a ține evidența stării de validare
// let validationState = {
//   cardHolderName: false,
//   cardNumber: false,
//   cvc: false,
//   expiryDate: false
// };

let valid = [];
function confirmData() {
   valid = [];

  // Apelează funcțiile de validare pentru toate câmpurile
  validateCardHolderName();
  validateCardNumber();
  validateCVC();
  validateExpiryDate();
  displayCardInformation();


  // Verifică starea de validare pentru toate câmpurile
  // if (
  //   validationState.cardHolderName &&
  //   validationState.cardNumber &&
  //   validationState.cvc &&
  //   validationState.expiryDate
  // ) {
  //   // Toate câmpurile sunt validate cu succes, afișează mesajul "Thank You"
  //   document.getElementById("userForm").style.display = "none";
  //   document.getElementById("thankYouMessage").style.display = "block";


    
  // }

  if(valid.every(value => value)) {
    console.log("hthntfht");
    window.location.href = "index4.html";
  }



}


function displayCardInformation() {
  // Obține valorile din input-uri
  var cardHolderName = document.getElementById("cardHolderName").value;
  var cardNumber = document.getElementById("cardNumber").value;
  var expiryMonth = document.getElementById("expiryMonth").value;
  var expiryYear = document.getElementById("expiryYear").value;

  // Afiseaza Cardholder Name si Card Number pe partea din față a cardului
  document.getElementById("cardHolderDisplay").textContent = cardHolderName;
  document.getElementById("cardNumberDisplay").textContent = cardNumber;

  // Rearanjează cifrele în grupuri de câte 4 pentru a afișa pe card
  var formattedNumber = cardNumber.replace(/(\d{4})/g, '$1 ');
  document.getElementById("cardNumberDisplay").textContent = formattedNumber.trim();

  // Afiseaza Exp. Date pe partea din față a cardului
  document.getElementById("expiryDateDisplay").textContent = `${expiryMonth}/${expiryYear}`;

  // Afiseaza CVC pe partea din spate a cardului
  var cvcInput = document.getElementById("cvcNumber").value;
  document.getElementById("backCardCvcDisplay").textContent = cvcInput;

}

// Modifică funcțiile de validare pentru a actualiza starea de validare
function validateCardHolderName() {

  var cardHolderNameInput = document.getElementById("cardHolderName");
  var errorDiv = document.getElementById("validateName");
  errorDiv.textContent = "";

  if (cardHolderNameInput.value.trim() == "") {
    errorDiv.textContent = "Acest camp este obligatoriu";
    errorDiv.style.color = "red";
    cardHolderNameInput.classList.remove("success-border");
    cardHolderNameInput.classList.add("error-border");
    return valid.push(false);
  } else if (cardHolderNameInput.value.length <= 6) {
    errorDiv.textContent = "Numele trebuie să aibă mai mult de 7 caractere.";
    errorDiv.style.color = "red";
    cardHolderNameInput.classList.remove("success-border");
    cardHolderNameInput.classList.add("error-border");
    return valid.push(false);
  } else if (!/^[a-zA-Z\s-]+$/.test(cardHolderNameInput.value)) {
    errorDiv.textContent = "Numele nu trebuie să conțină cifre sau caractere speciale.";
    errorDiv.style.color = "red";
    cardHolderNameInput.classList.remove("success-border");
    cardHolderNameInput.classList.add("error-border");
    return valid.push(false);

  } else if (cardHolderNameInput.value.split(' ').length < 2) {
    errorDiv.textContent = "Introduceți cel puțin un prenume și un nume de familie.";
    errorDiv.style.color = "red";
    cardHolderNameInput.classList.remove("success-border");
    cardHolderNameInput.classList.add("error-border");
    return valid.push(false);

  } else {
    // Dacă nu există erori, adaugă o clasă pentru border verde
    errorDiv.textContent = "Numele este valid.";
    errorDiv.style.color = "green";
    cardHolderNameInput.classList.remove("error-border");
    cardHolderNameInput.classList.add("success-border");
    return valid.push(true);

  }

  // Actualizează starea de validare pentru acest câmp
  // validationState.cardHolderName = !errorDiv.textContent;
}

function validateCardNumber() {
  var cardNumberInput = document.getElementById("cardNumber");
  var errorDiv = document.getElementById("validateNumber");
  errorDiv.textContent = "";

  // Eliminăm spațiile din numărul cardului pentru a număra doar cifrele
  var cardNumber = cardNumberInput.value.replace(/\s/g, "");

  // Rearanjează cifrele în grupuri de câte 4
  var formattedNumber = cardNumber.replace(/(\d{4})/g, '$1 ');

  // Actualizează valoarea input-ului
  cardNumberInput.value = formattedNumber.trim();

  if (cardNumber.trim() === "") {
    errorDiv.textContent = "Acest câmp este obligatoriu.";
    errorDiv.style.color = "red";
    cardNumberInput.classList.remove("success-border");
    cardNumberInput.classList.add("error-border");
    return valid.push(false);


  } else if (!/^\d+$/.test(cardNumber)) {
    errorDiv.textContent = "Numărul cardului nu trebuie să conțină litere sau caractere speciale.";
    errorDiv.style.color = "red";
    cardNumberInput.classList.remove("success-border");
    cardNumberInput.classList.add("error-border");
    return valid.push(false);

  } else if (!/^\d{16}$/.test(cardNumber)) {
    errorDiv.textContent = "Numărul cardului trebuie să conțină 16 cifre.";
    errorDiv.style.color = "red";
    cardNumberInput.classList.remove("success-border");
    cardNumberInput.classList.add("error-border");
    return valid.push(false);

  } else {
    // Dacă nu există erori, adaugă o clasă pentru border verde
    errorDiv.textContent = "Numărul cardului este valid.";
    errorDiv.style.color = "green";
    cardNumberInput.classList.remove("error-border");
    cardNumberInput.classList.add("success-border");
    return valid.push(true);
  }

  // Actualizează starea de validare pentru acest câmp
  // validationState.cardNumber = !errorDiv.textContent;
}

function validateCVC() {
  var cvcInput = document.getElementById("cvcNumber");
  var errorDiv = document.getElementById("validateCvc");
  errorDiv.textContent = "";

  // Verificăm dacă CVC-ul este completat
  if (cvcInput.value.trim() === "") {
    errorDiv.textContent = "Introduceți CVC-ul.";
    errorDiv.style.color = "red";
    cvcInput.classList.remove("success-border");
    cvcInput.classList.add("error-border");
    return valid.push(false);


  } else if (!/^\d{3}$/.test(cvcInput.value)) {
    // Verificăm dacă CVC-ul conține doar cifre 
    errorDiv.textContent = "CVC-ul trebuie să nu conțină litere.";
    errorDiv.style.color = "red";
    cvcInput.classList.remove("success-border");
    cvcInput.classList.add("error-border");
    return valid.push(false);

  } else {
    // Dacă nu există erori, adaugă o clasă pentru border verde
    errorDiv.textContent = "CVC card este valid.";
    errorDiv.style.color = "green";
    cvcInput.classList.remove("error-border");
    cvcInput.classList.add("success-border");
    return valid.push(true);
  }

  // Actualizează starea de validare pentru acest câmp
  // validationState.cvc = !errorDiv.textContent;
}

function validateExpiryDate() {
  var expiryMonthSelect = document.getElementById("expiryMonth");
  var expiryYearSelect = document.getElementById("expiryYear");
  var errorDiv = document.getElementById("validateExpiryDate");
  errorDiv.textContent = "";

  // Verificăm dacă ambele câmpuri sunt completate
  if (expiryMonthSelect.value === "" || expiryYearSelect.value === "") {
    errorDiv.textContent = "Completați data de expirare.";
    errorDiv.style.color = "red";
    expiryMonthSelect.classList.remove("success-border");
    expiryMonthSelect.classList.add("error-border");
    expiryYearSelect.classList.remove("success-border");
    expiryYearSelect.classList.add("error-border");
    return valid.push(false);

  } else {
    // Dacă nu există erori, adaugă o clasă pentru border verde
    errorDiv.textContent = "Data de expirare este validă.";
    errorDiv.style.color = "green";
    expiryMonthSelect.classList.remove("error-border");
    expiryMonthSelect.classList.add("success-border");
    expiryYearSelect.classList.remove("error-border");
    expiryYearSelect.classList.add("success-border");
    return valid.push(true);
  }

  // Actualizează starea de validare pentru acest câmp
  // validationState.expiryDate = !errorDiv.textContent;
}

 // ADD OPTIONS FOR MONTH AND YEAR FIELS
 let selectMonth = document.getElementById("expiryMonth");


 let currentMonth = new Date().getMonth();
 
 // ARRAY OF MONTHS NAMES
 let monthNames = [
   "Ianuarie", "Februarie", "Martie", "Aprilie",
   "Mai", "Iunie", "Iulie", "August",
   "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
 ];
 
 // ADD MONTH OPTIONS IN DROPDOWN
 for (let i = currentMonth; i < monthNames.length; i++) {
   let option = document.createElement("option");
   let monthIndex = i % 12 + 1;   // Pentru a asigura că indexul rămâne între 1 și 12
   option.value = (i + 1).toString().padStart(2, '0'); // FORM THE MONTH NUMBER WITH 2 DIGITS
   option.text = monthNames[i];
   selectMonth.add(option);
 }
 
 // ADD YEAR OPTIONS
 let selectYear = document.getElementById("expiryYear");
 let currentYear = new Date().getFullYear();
 
 for(let i = 0; i < 15; i++) {
   let option2 = document.createElement("option");
   let year = currentYear + i;
   option2.value = year;
   option2.text = year;
   selectYear.add(option2);
 }
 


// Adaugă evenimentul de click pentru butonul de confirmare
// document.getElementById("confirmButton").addEventListener("click", confirmData);


































































