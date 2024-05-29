const form = document.querySelector(".signup-form");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

form.addEventListener("submit", (event) => {
  if (passwordInput.value !== confirmPasswordInput.value) {
    event.preventDefault(); // Prevent form submission if passwords don't match
    alert("Passwords do not match! Please re-enter your password.");
  }
});
