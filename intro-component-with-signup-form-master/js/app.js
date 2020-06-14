var numberErrors = 0;
var myButton = document.getElementById("button");
var userName = document.getElementById("user-name");
var userLast = document.getElementById("user-last-name");
var userEmail = document.getElementById("user-email");
var userPassword = document.getElementById("user-password");

function validateVoidSpace(userInput, errorIcon, errorText) {
  if (userInput.value === "" || userInput.value === " ") {
    userInput.style.border = "3px solid hsl(0, 100%, 74%)";
    errorIcon.style.display = "inline";
    errorText.style.display = "block";
    numberErrors += 1;
  } else {
    userInput.style.border = "1px solid hsl(246, 25%, 77%)";
    errorIcon.style.display = "none";
    errorText.style.display = "none";
  }
}

function validateName() {
  let errorIcon = document.getElementById("error-icon-name");
  let errorText = document.getElementById("error-name");
  validateVoidSpace(userName, errorIcon, errorText);
}

function validateLastName() {
  let errorIcon = document.getElementById("error-icon-last-name");
  let errorText = document.getElementById("error-last-name");
  validateVoidSpace(userLast, errorIcon, errorText);
}

function validateEmail() {
  let errorIcon = document.getElementById("error-icon-email");
  let errorText = document.getElementById("error-email");
  if (
    !userEmail.value.includes("@") ||
    !userEmail.value.includes(".com") ||
    userEmail.value === "" ||
    userEmail.value === " "
  ) {
    userEmail.style.border = "3px solid hsl(0, 100%, 74%)";
    errorIcon.style.display = "inline";
    errorText.style.display = "block";
    numberErrors += 1;
  } else {
    userEmail.style.border = "1px solid hsl(246, 25%, 77%)";
    errorIcon.style.display = "none";
    errorText.style.display = "none";
  }
}

function validatePassword() {
  let errorIcon = document.getElementById("error-icon-password");
  let errorText = document.getElementById("error-password");
  validateVoidSpace(userPassword, errorIcon, errorText);
}

myButton.onclick = function (e) {
  e.preventDefault();
  validateName();
  validateLastName();
  validateEmail();
  validatePassword();

  if (numberErrors === 0) {
    userName.value = "";
    userLast.value = "";
    userEmail.value = "";
    userPassword.value = "";
    alert("Thank you! Registration Completed");
  }
  numberErrors = 0;
};
