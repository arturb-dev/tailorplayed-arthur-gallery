(function () {
  var box = document.getElementById("lightbox");
  var img = document.getElementById("lb-img");
  var close = document.getElementById("lb-close");
  if (!box || !img) return;

  function open(src, alt) {
    img.src = src;
    img.alt = alt || "";
    box.hidden = false;
  }
  function hide() {
    box.hidden = true;
    img.removeAttribute("src");
  }

  document.addEventListener("click", function (e) {
    var a = e.target.closest("a[data-full]");
    if (!a) return;
    e.preventDefault();
    open(a.getAttribute("data-full"), (e.target.alt || a.textContent || "").trim());
  });
  close.addEventListener("click", hide);
  box.addEventListener("click", function (e) {
    if (e.target === box) hide();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") hide();
  });
})();
