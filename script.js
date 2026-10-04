document.addEventListener("DOMContentLoaded", function () {

  const botones = document.querySelectorAll(".menu-btn");
  const secciones = document.querySelectorAll(".info-section");

  botones.forEach(function (boton) {

    boton.addEventListener("click", function () {

      const seccionSeleccionada = boton.getAttribute("data-section");

      // Amaga totes les seccions
      secciones.forEach(function (seccion) {
        seccion.classList.remove("active-section");
      });

      // Mostra la secció seleccionada
      const seccion = document.getElementById(seccionSeleccionada);

      if (seccion) {
        seccion.classList.add("active-section");
      }

      // Canvia l'estat visual dels botons
      botones.forEach(function (b) {
        b.classList.remove("active");
      });

      boton.classList.add("active");

      // Canvia el títol de la pàgina
      document.title = boton.textContent.trim() + " - Minecraft Guide";
    });

  });

  console.log("Minecraft Guide carregada correctament.");
});
