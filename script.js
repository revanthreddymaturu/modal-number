"use strict";
const modal = document.querySelector(".modal");
const child = document.querySelectorAll(".child");
const closeModal = document.querySelector(".close-modal");
const showModal = function () {
  modal.classList.remove("hidden");
};

const hideModal = function () {
  modal.classList.add("hidden");
};

for (let i = 0; i < child.length; i++) {
  child[i].addEventListener("click", function () {
    showModal();
  });
}

document.querySelector(".close-modal").addEventListener("click", function () {
  hideModal();
});

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") hideModal();
});
