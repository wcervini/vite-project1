import "./styles.css";

const boton = document.getElementById("boton");
const modal = document.getElementById("modal");
const cerrar = document.getElementById("close");
boton.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

cerrar.addEventListener("click", () => {
  modal.classList.add("hidden");
});
