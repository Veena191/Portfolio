/** Project card + project details dialog. */
(function () {
  var P = window.Portfolio = window.Portfolio || {};

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function chips(list) {
    return list.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
  }
  function pad(n) { return n < 10 ? "0" + n : String(n); }

  function createCard(p) {
    var li = document.createElement("article");
    li.className = "card" + (p.featured ? " is-featured" : "");
    li.setAttribute("data-slug", p.repo);
    li.innerHTML =
      '<div class="card-media">' +
        '<img src="' + esc(p.image) + '" alt="' + esc(p.alt) + '" width="800" height="450" loading="' + (p.rank <= 4 ? "eager" : "lazy") + '" decoding="async">' +
        '<span class="card-rank">' + pad(p.rank) + "</span>" +
        '<span class="card-tier">' + esc(p.tier) + "</span>" +
      "</div>" +
      '<div class="card-body">' +
        "<h3>" + esc(p.name) + "</h3>" +
        "<p>" + esc(p.summary) + "</p>" +
        '<ul class="chips" aria-label="Technology and focus">' + chips(p.stack) + "</ul>" +
        '<div class="card-foot">' +
          '<button type="button" class="btn btn-ghost" data-open="' + esc(p.repo) + '" aria-haspopup="dialog">View Project <span aria-hidden="true">→</span></button>' +
          '<a class="icon-link" data-icon="github" href="' + esc(p.url) + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(p.name) + ' on GitHub (opens in a new tab)"></a>' +
        "</div>" +
      "</div>";

    if (window.matchMedia("(hover: hover)").matches && !window.matchMedia("(pointer: coarse)").matches) {
      var moveFrame = null;
      li.addEventListener("pointermove", function (e) {
        if (moveFrame) return;
        moveFrame = requestAnimationFrame(function () {
          var r = li.getBoundingClientRect();
          li.style.setProperty("--mx", e.clientX - r.left + "px");
          li.style.setProperty("--my", e.clientY - r.top + "px");
          moveFrame = null;
        });
      }, { passive: true });
    }
    return li;
  }

  var dialog;
  function openDialog(p) {
    dialog = dialog || document.getElementById("project-dialog");
    if (!dialog || typeof dialog.showModal !== "function") { window.open(p.url, "_blank", "noopener"); return; }
    var img = document.getElementById("dlg-img");
    img.src = p.image; img.alt = p.alt;
    document.getElementById("dlg-tier").textContent = "#" + pad(p.rank) + " · " + p.tier + (p.featured ? " · Featured" : "");
    document.getElementById("dlg-title").textContent = p.name;
    document.getElementById("dlg-summary").textContent = p.summary;
    document.getElementById("dlg-stack").innerHTML = chips(p.stack);
    document.getElementById("dlg-focus").innerHTML = chips(p.focus);
    document.getElementById("dlg-link").href = p.url;
    dialog.showModal();
  }

  function initDialog() {
    dialog = document.getElementById("project-dialog");
    if (!dialog) return;
    dialog.addEventListener("click", function (e) { if (e.target === dialog) dialog.close(); });
  }

  P.projectCard = { create: createCard, open: openDialog, init: initDialog };
})();
