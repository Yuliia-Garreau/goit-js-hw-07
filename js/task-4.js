"use strict";

const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === "" || password === "") {
    return console.log("All form fields must be filled in");
  }
  const trimmedEmail = email.trim();
  const trimmedPassword = password.trim();
  console.log(`{Email: ${trimmedEmail}, Password: ${trimmedPassword}}`);
  form.reset();
}
