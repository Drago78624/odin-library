"use strict";

const modal = document.getElementById("modal");
const modalBtn = document.getElementById("openModal");

modalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
