window.onload = function () {
  document
    .getElementById("mobile-menu-button")
    .addEventListener("click", function () {
      document.getElementById("mobile-menu-button").classList.toggle("open");
      const open = document
        .getElementById("mobile-menu-button")
        .classList.contains("open");
      document.body.style.overflow = open ? "hidden" : "auto";
    });
};
