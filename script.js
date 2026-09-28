const modal = document.getElementById("letterModal");
const buttons = [
  document.getElementById("openLetter"),
  document.getElementById("heroLetter"),
  document.getElementById("finalLetter")
];
const close = document.getElementById("closeLetter");

function openModal() {
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

buttons.forEach(button => {
  button.addEventListener("click", openModal);
});

close.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (event) => {
  glow.style.left = event.clientX + "px";
  glow.style.top = event.clientY + "px";
});
