const numberCardWrite = document.getElementById("card-number-mod");
const nameCard = document.getElementById("card-name-mod");
const expCard = document.getElementById("card-exp-mod");
const cvcCard = document.getElementById("card-cvc-mod");
const ownerName = document.getElementById("owner-name").value;
const cardNumber = document.getElementById("card-number").value;
const dateMonth = document.getElementById("date-month").value;
const dateYear = document.getElementById("date-year").value;
const cvc = document.getElementById("cvc").value;
const btnConfirm = document.getElementById("btn-confirm-select");

const form = document.getElementById('form-main')


btnConfirm.addEventListener("click", () => {
  event.preventDefault();

  nameCard.textContent = ownerName.toUpperCase();
  numberCardWrite.textContent = cardNumber;
  expCard.textContent = dateMonth + "/" + dateYear;
  cvcCard.textContent = cvc;

});
