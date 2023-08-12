window.onload = function () {
  const div = document.querySelector("div");
  const button = document.getElementById("button");

  div.addEventListener("click", function alerta() {
    alert("Hola! Soy el div");
  });

  button.addEventListener("click", (e) => {
    e.stopPropagation();
    alert("Hola!");
  });
};
