const overlay = document.getElementById("modal-overlay");

document.getElementById("open-modal").addEventListener("click", function () {
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
});

function closeModal() {
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("close-modal").addEventListener("click", closeModal);

overlay.addEventListener("click", function (e) {
  if (e.target === overlay) {
    closeModal();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
