(function () {
  "use strict";

  function numberLines() {
    document.querySelectorAll("pre code").forEach(function (code) {
      var parts = code.innerHTML.split("\n");
      if (parts.length && parts[parts.length - 1].trim() === "") parts.pop();
      var block = document.createElement("div");
      block.className = "code-block";
      parts.forEach(function (part, i) {
        var row = document.createElement("div");
        row.className = "code-line";
        var num = document.createElement("span");
        num.className = "code-line-num";
        num.textContent = i + 1;
        var content = document.createElement("span");
        content.className = "code-line-content";
        content.innerHTML = part;
        var marker = document.createElement("span");
        marker.className = "code-line-marker";
        marker.textContent = "\u21B2";
        marker.title = "该行已自动换行";
        row.appendChild(num);
        row.appendChild(content);
        row.appendChild(marker);
        block.appendChild(row);
      });
      code.parentNode.replaceChild(block, code);
    });
  }

  function markWrapped() {
    document.querySelectorAll(".code-line").forEach(function (row) {
      var content = row.querySelector(".code-line-content");
      if (!content) return;
      var lineHeight = parseFloat(getComputedStyle(content).lineHeight) || 0;
      var height = content.getBoundingClientRect().height;
      row.classList.toggle("line-wrapped", height > lineHeight + 1);
    });
  }

  function init() {
    numberLines();
    markWrapped();
    window.addEventListener("load", markWrapped);
    var t;
    window.addEventListener("resize", function () {
      clearTimeout(t);
      t = setTimeout(markWrapped, 150);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
