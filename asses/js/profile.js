document.addEventListener("DOMContentLoaded", function () {
  const fullNameInput = document.querySelector('input[type="text"]');
  const idInput = document.querySelector(
    'input[type="text"][placeholder="Enter your ID"]'
  );
  const emailInput = document.getElementById("email");
  const phoneNumberInput = document.querySelector('input[type="tel"]');
  const passwordInput = document.querySelector(
    'input[type="password"][placeholder="New password"]'
  );
  const confirmPasswordInput = document.querySelector(
    'input[type="password"][placeholder="Confirm password"]'
  );
  const updateButton = document.querySelector(".btn_update");

  // ràng buộc cho id,,,, chỉ được 12 số (theo format cccd VN ó)
  const idPattern = /^\d{12}$/;

  // hàm để valid cái id
  function validateID() {
    if (!idPattern.test(idInput.value)) {
      alert("ID must be 12 digits long!");
      idInput.focus();
      return false;
    }
    return true;
  }

  // hàm để valid cái email
  function validateEmail() {
    // format của email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      alert("Please enter a valid email address!");
      emailInput.focus();
      return false;
    }
    return true;
  }

  // hàm để valid cái phone number
  function validatephoneNumber() {
    // format của số điện thoại VN ó,,,, bắt đầu với +84(0)
    const phoneNumberPattern = /^(0\d{9,10})$/;
    if (!phoneNumberPattern.test(phoneNumberInput.value)) {
      alert("Please enter a valid Vietnamese phone number!");
      phoneNumberInput.focus();
      return false;
    }
    return true;
  }

  function validateCurrentPassword() {
    const currentPasswordInput = document.querySelector(
      'input[type="password"][placeholder="Curent password"]'
    );
    const currentPassword = currentPasswordInput.value;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordPattern.test(currentPassword)) {
      alert(
        "Current password must be at least 6 characters long and contain both letters and numbers!"
      );
      currentPasswordInput.focus();
      return false;
    }
    return true;
  }

  // hàm để valid cái password
  function validatePassword() {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordPattern.test(passwordInput.value)) {
      alert(
        "Password must be at least 6 characters long and contain both letters and numbers!"
      );
      passwordInput.focus();
      return false;
    }
    return true;
  }

  // hàm để valid cái confirm password
  function validateConfirmPassword() {
    if (confirmPasswordInput.value !== passwordInput.value) {
      alert("Confirm password does not match!");
      confirmPasswordInput.focus();
      return false;
    }
    return true;
  }

  // hàm để valid cái full name
  function validateFullName() {
    const words = fullNameInput.value.split(" ");
    for (const word of words) {
      if (!/^[A-Z]/.test(word)) {
        alert("Full name must start with a capital letter for each word!");
        fullNameInput.focus();
        return false;
      }
    }
    return true;
  }

  // xét mấy cái validation trước khi submit
  function validateForm(event) {
    if (
      !validateFullName() ||
      !validateID() ||
      !validateEmail() ||
      !validatephoneNumber() ||
      !validateCurrentPassword() ||
      !validatePassword() ||
      !validateConfirmPassword()
    ) {
      event.preventDefault();
    }
  }

  updateButton.addEventListener("click", validateForm);
});

window.addEventListener("load", function () {
  const congratsAction = document.querySelector(".congratulation__action");
  const infoPersonal = document.querySelector(".info__personal");

  let isInfoPersonalVisible = false;

  congratsAction.addEventListener("click", function () {
    if (!isInfoPersonalVisible) {
      infoPersonal.style.display = "block";
      isInfoPersonalVisible = true;
    } else {
      infoPersonal.style.display = "none";
      isInfoPersonalVisible = false;
    }
  });
});
