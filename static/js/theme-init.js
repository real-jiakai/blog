(function () {
  "use strict";

  var stored = localStorage.getItem("theme");
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  var theme = stored === "light" || stored === "dark"
    ? stored
    : (prefersDark ? "dark" : "light");

  document.documentElement.setAttribute("data-bs-theme", theme);
}());
