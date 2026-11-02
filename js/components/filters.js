/** Project grid rendering + category filters. */
(function () {
  var P = window.Portfolio = window.Portfolio || {};

  function matches(p, filter) {
    if (filter === "All") return true;
    if (filter === "Featured") return p.featured;
    return p.tags.indexOf(filter) !== -1;
  }

  function init() {
    var grid = document.getElementById("project-grid");
    var bar = document.getElementById("filters");
    var status = document.getElementById("result-count");
    if (!grid || !bar) return;

    var projects = window.PortfolioData.projects;
    var filters = window.PortfolioData.filters;
    var byRepo = {};
    var cards = projects.map(function (p) {
      byRepo[p.repo] = p;
      var c = P.projectCard.create(p);
      grid.appendChild(c);
      return { p: p, el: c };
    });
    P.icons.apply(grid);

    filters.forEach(function (f, i) {
      var n = projects.filter(function (p) { return matches(p, f); }).length;
      var b = document.createElement("button");
      b.type = "button"; b.className = "filter"; b.setAttribute("data-filter", f);
      b.setAttribute("aria-pressed", i === 0 ? "true" : "false");
      b.innerHTML = f + '<span class="count">' + n + "</span>";
      bar.appendChild(b);
    });

    function apply(filter) {
      var shown = 0;
      cards.forEach(function (c) {
        var ok = matches(c.p, filter);
        c.el.hidden = !ok;
        if (ok) {
          c.el.style.setProperty("--i", shown++);
          // restart entrance animation
          c.el.style.animation = "none"; void c.el.offsetWidth; c.el.style.animation = "";
        }
      });
      Array.prototype.forEach.call(bar.children, function (b) {
        b.setAttribute("aria-pressed", b.getAttribute("data-filter") === filter ? "true" : "false");
      });
      status.textContent = "Showing " + shown + " of " + projects.length + " projects" + (filter === "All" ? "" : " · " + filter);
    }

    bar.addEventListener("click", function (e) {
      var b = e.target.closest("[data-filter]");
      if (b) apply(b.getAttribute("data-filter"));
    });
    grid.addEventListener("click", function (e) {
      var b = e.target.closest("[data-open]");
      if (b) P.projectCard.open(byRepo[b.getAttribute("data-open")]);
    });

    P.projectCard.init();
    apply("All");
  }

  P.filters = { init: init };
})();
