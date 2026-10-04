// JavaScript propi del projecte

document.addEventListener("DOMContentLoaded", () => {
  // Mostra per consola que la pàgina s'ha carregat correctament.
  console.log("Cicles Formatius d'Informàtica carregat correctament.");

  // Quan es canvia de cicle, actualitzem el títol de la pestanya del navegador.
  const links = document.querySelectorAll('[data-bs-toggle="tab"]');

  links.forEach(link => {
    link.addEventListener("shown.bs.tab", event => {
      const nomCicle = event.target.textContent.trim();
      document.title = `${nomCicle} - Cicles Formatius d'Informàtica`;
    });
  });
});
