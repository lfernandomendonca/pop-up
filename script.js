const modal = document.querySelector(".modal");
const btn = document.querySelector(".btn");
const close = document.querySelector(".close");
const modalContent = document.querySelector(".modalContent");

btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

// abrir modal//

function openModal(e) {
  e.preventDefault();
  modal.style.display = "block";
}

// fechar modal//
function closeModal() {
  modalContent.classList.add("slideUp");
  setTimeout(() => {
    modal.style.display = "none";
    modalContent.classList.remove("slideUp");
  }, 500);
}
