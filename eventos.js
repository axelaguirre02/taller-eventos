document.addEventListener("DOMContentLoaded", () => {
  const divElement = document.querySelector("div");

  divElement.addEventListener("click", () => {
    alert("Hola! Soy el div");
  });

  const buttonElement = document.querySelector("button");

  buttonElement.addEventListener("click", (e) => {
    alert("Hola!");
    e.stopPropagation();
  });
});
