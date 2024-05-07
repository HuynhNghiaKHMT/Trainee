document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".form.Sign.in form");
  const passwordInput = document.querySelector(".password");

  loginForm.addEventListener("submit", function (event) {
    const usernameInput = document.querySelector(".input"); // Sử dụng querySelector để lấy input user name

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!isValidUsername(username)) {
      alert("Please enter a valid username.");
      event.preventDefault();
      return;
    }

    if (!isValidPassword(password)) {
      alert(
        "Password must be at least 6 characters long and contain both letters and numbers."
      );
      event.preventDefault();
      return;
    }
  });

  function isValidUsername(username) {
    return (
      username.length >= 6 && /\d/.test(username) && /[a-zA-Z]/.test(username)
    );
  }

  function isValidPassword(password) {
    return (
      password.length >= 6 && /\d/.test(password) && /[a-zA-Z]/.test(password)
    );
  }
});
