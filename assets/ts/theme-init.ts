(function () {
  "use strict";

  const stored: string | null = localStorage.getItem("theme");
  const prefersDark: boolean = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme: "light" | "dark" = stored === "light" || stored === "dark"
    ? stored
    : (prefersDark ? "dark" : "light");

  document.documentElement.setAttribute("data-bs-theme", theme);
}());
