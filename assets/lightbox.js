(function () {
  "use strict";

  var overlay = null;

  function close() {
    if (overlay) {
      var el = overlay;
      overlay = null;
      el.classList.add("hidden");
      setTimeout(function () {
        if (el.parentNode) el.remove();
      }, 200);
    }
    document.body.classList.remove("lightbox-open");
  }

  function open(img) {
    close();
    var el = document.createElement("div");
    el.className = "lightbox";

    var boxImg = document.createElement("img");
    boxImg.src = img.currentSrc || img.src;
    boxImg.alt = img.alt || "";

    el.appendChild(boxImg);
    el.addEventListener("click", close);
    document.body.appendChild(el);
    overlay = el;
    document.body.classList.add("lightbox-open");
  }

  function init() {
    document.querySelectorAll("main img").forEach(function (img) {
      img.addEventListener("click", function () {
        open(img);
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
