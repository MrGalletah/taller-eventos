window.onload = function () {
  const div = document.querySelector("div");
  const button = document.getElementById("button");

  div.addEventListener("click", () => {
    alert("Hola! Soy el div");
  });
};
