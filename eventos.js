document.addEventListener("DOMContentLoaded", () => {
  const divElement = document.querySelector("div");

  divElement.addEventListener("click", () => {
    alert("Hola! Soy el div");
  });
});
