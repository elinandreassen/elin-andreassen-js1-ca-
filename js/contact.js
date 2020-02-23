const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();
  console.log("The form was submitted");

  const firstName = document.querySelector("#firstName");
  const firstNameError = document.querySelector("#firstNameError");
  const firstNameValue = firstName.value;

  if (checkInputLength(firstNameValue) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  const lastName = document.querySelector("#lastName");
  const lastNameError = document.querySelector("#lastNameError");
  const lastNameValue = firstName.value;

  if (checkInputLength(firstNameValue) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");
  const invalidEmailError = document.querySelector("#invalidEmailError");

  const emailValue = email.value;

  if (checkInputLength(emailValue) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (validateEmail(emailValue) === true) {
    invalidEmailError.style.display = "none";
  } else {
    invalidEmailError.style.display = "block";
  }
};

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const messageValue = message.value;

if (checkInputLength(messageValue) === true) {
  messageError.style.display = "none";
} else {
  messageError.style.display = "block";
}
function checkInputLength(value) {
  const trimmedValue = value.trim();

  if (trimmedValue.length > 10) {
    return true;
  } else {
    return false;
  }
};

function checkInputLength(value) {
  const trimmedValue = value.trim();

  if (trimmedValue.length > 10) {
    return true;
  } else {
    return false;
  }
};

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
};
