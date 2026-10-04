document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".menu-btn");
  const sections = document.querySelectorAll(".info-section");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const targetId = button.getAttribute("data-section");

      sections.forEach(function (section) {
        section.hidden = true;
      });

      const target = document.getElementById(targetId);

      if (target) {
        target.hidden = false;
      }

      buttons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      document.title = button.textContent.trim() + " - Minecraft Guide";
    });
  });
});
