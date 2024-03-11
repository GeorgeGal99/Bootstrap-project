// pentru inceput selectam elem de care avem nevoie;
// 1 inputul de km
// 2inputul de litri
// 3butonul de calculeaza consum
// 4locul in care vom afisa rezultatul calculului consum

let km = document.querySelector("#km");
let litri = document.querySelector("#litri");
let butonCalc = document.querySelector("#calcBtn");
let consumInstant = document.querySelector("#consum__instant");
let consumFinal = document.querySelector("#consumfinal");

butonCalc.addEventListener("click", function () {
  let result = (100 * litri.value) / km.value;

  consumFinal.innerHTML = result.toFixed(1);
});

litri.addEventListener("keyup", function () {
  let result = (100 * litri.value) / km.value;
  consumInstant.value = result.toFixed(1);
});
