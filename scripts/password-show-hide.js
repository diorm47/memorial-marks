document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("passwordInput");
  const showPassword = document.getElementById("showPassword");
  const hidePassword = document.getElementById("hidePassword");

  showPassword.addEventListener("click", function () {
    passwordInput.type = "text";
    showPassword.style.display = "none";
    hidePassword.style.display = "inline";
  });

  hidePassword.addEventListener("click", function () {
    passwordInput.type = "password";
    showPassword.style.display = "inline";
    hidePassword.style.display = "none";
  });
});
