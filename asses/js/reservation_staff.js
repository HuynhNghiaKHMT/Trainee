document.addEventListener("DOMContentLoaded", function () {
  const ticketIssueDates = document.querySelectorAll("td:nth-child(9)");
  ticketIssueDates.forEach(function (date) {
    if (date.textContent.trim() !== "") {
      date.closest("tr").querySelector(".issue-ticket-btn").disabled = true;
    }
  });
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

const dl_remove_class = document.getElementById("dialog_remove_class");
const btnRemoveClass = document.getElementById("btnRemoveClass");
const btnConRemoveClass = document.getElementById("confirmRemoveClass");
const btnCanRemoveClass = document.getElementById("cancelRemoveClass");

btnRemoveClass.addEventListener("click", function () {
  dl_remove_class.showModal();
});
btnCanRemoveClass.addEventListener("click", function (e) {
  dl_remove_class.close();
});
btnConRemoveClass.addEventListener("click", function () {});

const dl_remove_pass = document.getElementById("dialog_remove_pass");
const btnRemovePass = document.getElementById("btnRemovePass");
const btnConRemovePass = document.getElementById("confirmRemovePass");
const btnCanRemovePass = document.getElementById("cancelRemovePass");

btnRemovePass.addEventListener("click", function () {
  dl_remove_pass.showModal();
});
btnCanRemovePass.addEventListener("click", function (e) {
  dl_remove_pass.close();
});
btnConRemovePass.addEventListener("click", function () {});
