// Mise en évidence de la page active dans le menu
(function () {
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("[data-nav]").forEach((a) => {
    const target = (a.getAttribute("data-nav") || "").toLowerCase();
    if (target === path) a.classList.add("is-active");
  });
})();
