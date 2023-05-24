document.addEventListener("DOMContentLoaded", function () {
    var toggleCuadrados = document.querySelector("#toggleCuadrados");
    var toggleCuadrados2 = document.querySelector("#toggleCuadrados2");
    var cuadrado1 = document.getElementById("cuadrado1");
    var cuadrado3 = document.getElementById("cuadrado3");
  
    toggleCuadrados.addEventListener("click", function (event) {
      cuadrado1.classList.toggle("hidden");
      cuadrado3.classList.toggle("hidden");
    });
  
    toggleCuadrados2.addEventListener("click", function (event) {
      cuadrado1.classList.toggle("hidden");
      cuadrado3.classList.toggle("hidden");
    });
  });