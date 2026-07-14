(function () {
  "use strict";

  var config = document.getElementById("site-analytics");
  if (!config) {
    return;
  }

  var started = false;
  var idleCallback = 0;
  var idleFallbackTimer = 0;
  var interactionTimer = 0;
  var postLoadTimer = 0;
  var hardFallbackTimer = window.setTimeout(loadAnalytics, 15000);
  var interactionEvents = ["pointerdown", "keydown", "touchstart"];

  function appendScript(source, attributes) {
    var script = document.createElement("script");
    script.async = true;
    script.src = source;
    Object.keys(attributes || {}).forEach(function (name) {
      script.setAttribute(name, attributes[name]);
    });
    document.head.appendChild(script);
  }

  function removeTriggers() {
    interactionEvents.forEach(function (eventName) {
      document.removeEventListener(eventName, scheduleInteractionLoad);
    });
    window.removeEventListener("scroll", scheduleInteractionLoad);
    window.removeEventListener("load", schedulePostLoad);

    if (idleCallback && "cancelIdleCallback" in window) {
      window.cancelIdleCallback(idleCallback);
    }
    window.clearTimeout(idleFallbackTimer);
    window.clearTimeout(interactionTimer);
    window.clearTimeout(postLoadTimer);
    window.clearTimeout(hardFallbackTimer);
  }

  function loadAnalytics() {
    if (started) {
      return;
    }
    started = true;
    removeTriggers();

    var googleId = config.dataset.googleId;
    if (googleId) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", googleId);
      appendScript("https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(googleId));
    }

    var clarityId = config.dataset.clarityId;
    if (clarityId) {
      window.clarity = window.clarity || function () {
        (window.clarity.q = window.clarity.q || []).push(arguments);
      };
      appendScript("https://www.clarity.ms/tag/" + encodeURIComponent(clarityId));
    }

    var umamiSource = config.dataset.umamiSrc;
    var umamiId = config.dataset.umamiId;
    if (umamiSource && umamiId) {
      appendScript(umamiSource, { "data-website-id": umamiId });
    }
  }

  function scheduleIdleLoad(timeout) {
    if (started || idleCallback || idleFallbackTimer) {
      return;
    }

    if ("requestIdleCallback" in window) {
      idleCallback = window.requestIdleCallback(loadAnalytics, { timeout: timeout });
    } else {
      idleFallbackTimer = window.setTimeout(loadAnalytics, 250);
    }
  }

  function scheduleInteractionLoad() {
    if (started || interactionTimer) {
      return;
    }

    interactionEvents.forEach(function (eventName) {
      document.removeEventListener(eventName, scheduleInteractionLoad);
    });
    window.removeEventListener("scroll", scheduleInteractionLoad);
    interactionTimer = window.setTimeout(function () {
      scheduleIdleLoad(1500);
    }, 750);
  }

  function schedulePostLoad() {
    if (started || postLoadTimer) {
      return;
    }

    postLoadTimer = window.setTimeout(function () {
      scheduleIdleLoad(2000);
    }, 3500);
  }

  interactionEvents.forEach(function (eventName) {
    document.addEventListener(eventName, scheduleInteractionLoad, { once: true, passive: true });
  });
  window.addEventListener("scroll", scheduleInteractionLoad, { once: true, passive: true });

  if (document.readyState === "complete") {
    schedulePostLoad();
  } else {
    window.addEventListener("load", schedulePostLoad, { once: true });
  }
}());
