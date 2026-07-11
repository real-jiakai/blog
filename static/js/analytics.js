(function () {
  "use strict";

  var config = document.getElementById("site-analytics");
  if (!config) {
    return;
  }

  var googleId = config.dataset.googleId;
  if (googleId) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", googleId);

    var googleScript = document.createElement("script");
    googleScript.async = true;
    googleScript.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(googleId);
    document.head.appendChild(googleScript);
  }

  var clarityId = config.dataset.clarityId;
  if (clarityId) {
    window.clarity = window.clarity || function () {
      (window.clarity.q = window.clarity.q || []).push(arguments);
    };

    var clarityScript = document.createElement("script");
    clarityScript.async = true;
    clarityScript.src = "https://www.clarity.ms/tag/" + encodeURIComponent(clarityId);
    document.head.appendChild(clarityScript);
  }
}());
