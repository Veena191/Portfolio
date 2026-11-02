/** Data-driven sections: marquee, stats, services, skills, journey, education, contact email. */
(function () {
  var P = window.Portfolio = window.Portfolio || {};

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(id) { return document.getElementById(id); }

  function init() {
    var D = window.PortfolioData, C = window.PORTFOLIO_CONFIG;

    // Marquee (list repeated twice for a seamless loop)
    var track = $("marquee-track");
    if (track) {
      var once = D.marquee.map(function (w) { return "<span>" + esc(w) + "</span>"; }).join("");
      track.innerHTML = once + once;
    }

    // Stats are computed from project data so they can never drift
    var stats = $("stats");
    if (stats) {
      var all = D.projects.length;
      var web = D.projects.filter(function (p) { return p.tags.indexOf("Web Apps") !== -1; }).length;
      var ai = D.projects.filter(function (p) { return p.tags.indexOf("AI/ML") !== -1; }).length;
      stats.innerHTML = [[all, "Projects built"], [web, "Web applications"], [ai, "AI / ML projects"]].map(function (s) {
        return '<li><strong data-count="' + s[0] + '">' + s[0] + "</strong><span>" + s[1] + "</span></li>";
      }).join("");
    }

    // What I do
    var sv = $("services-grid");
    if (sv) {
      sv.innerHTML = D.services.map(function (s, i) {
        return '<article class="service" data-reveal style="--d:' + i * 0.08 + 's">' + P.icons.service(s.icon) +
          "<h3>" + esc(s.title) + "</h3><p>" + esc(s.text) + "</p></article>";
      }).join("");
      if (window.matchMedia("(hover: hover)").matches && !window.matchMedia("(pointer: coarse)").matches) {
        var serviceFrame = null;
        sv.addEventListener("pointermove", function (e) {
          var el = e.target.closest(".service"); if (!el || serviceFrame) return;
          serviceFrame = requestAnimationFrame(function () {
            var r = el.getBoundingClientRect();
            el.style.setProperty("--mx", e.clientX - r.left + "px");
            el.style.setProperty("--my", e.clientY - r.top + "px");
            serviceFrame = null;
          });
        }, { passive: true });
      }
    }

    // Skills
    var sk = $("skills-grid");
    if (sk) {
      sk.innerHTML = D.skills.map(function (g, gi) {
        return '<article class="skill-group" data-reveal style="--d:' + gi * 0.07 + 's"><h3>' + esc(g.title) + '</h3><ul class="skill-list">' +
          g.items.map(function (it, i) {
            return '<li class="skill' + (it.featured ? " is-top" : "") + '" style="--i:' + i + '">' + esc(it.name) + "</li>";
          }).join("") + "</ul></article>";
      }).join("");
    }

    // Journey + education
    var tl = $("timeline");
    if (tl) tl.innerHTML = D.experience.map(function (e, i) {
      return '<li class="t-item" data-reveal style="--d:' + i * 0.1 + 's"><p class="t-period">' + esc(e.period) + "</p><h3>" + esc(e.role) +
        '</h3><p class="t-org">' + esc(e.org) + '</p><p class="t-place">' + esc(e.place) + '</p><p class="t-text">' + esc(e.text) + "</p></li>";
    }).join("");
    var ed = $("edu-list");
    if (ed) ed.innerHTML = D.education.map(function (e, i) {
      return '<li class="t-item" data-reveal style="--d:' + i * 0.1 + 's"><p class="t-period">' + esc(e.period) + "</p><h3>" + esc(e.school) +
        '</h3><p class="t-org">' + esc(e.degree) + "</p></li>";
    }).join("");

    // Contact email link from config
    var em = $("email-link");
    if (em) { em.href = "mailto:" + C.email; em.textContent = C.email; }
    var yr = $("year"); if (yr) yr.textContent = new Date().getFullYear();

    P.icons.apply(document);
  }

  P.sections = { init: init };
})();
