document.addEventListener("DOMContentLoaded", function () {
  console.log("Minecraft Guide carregada correctament.");

  const pestanyes = document.querySelectorAll('[data-bs-toggle="tab"]');

  pestanyes.forEach(function (pestanya) {
    pestanya.addEventListener("shown.bs.tab", function (event) {
      const seccio = event.target.textContent.trim();
      document.title = seccio + " - Minecraft Guide";
    });
  });
});
