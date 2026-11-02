/** Navigation: mobile menu, scroll spy, sticky header state, progress bar, back-to-top. */
(function () {
  var P = window.Portfolio = window.Portfolio || {};

  function init() {
    var header = document.getElementById("site-header");
    var toggle = document.getElementById("nav-toggle");
    var menu = document.getElementById("nav-menu");
    var bar = document.getElementById("progress");
    var top = document.getElementById("to-top");

    function setOpen(open) {
      header.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }
    toggle.addEventListener("click", function () { setOpen(toggle.getAttribute("aria-expanded") !== "true"); });
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });
    document.addEventListener("click", function (e) { if (!header.contains(e.target)) setOpen(false); });

    // Scroll spy
    var links = {};
    menu.querySelectorAll("[data-nav]").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    var alias = { services: "about", connect: "journey" }; // sections without their own nav item
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          var id = alias[en.target.id] || en.target.id;
          Object.keys(links).forEach(function (k) {
            var on = k === id;
            links[k].classList.toggle("is-active", on);
            if (on) links[k].setAttribute("aria-current", "true"); else links[k].removeAttribute("aria-current");
          });
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      document.querySelectorAll("main section[id]").forEach(function (s) { io.observe(s); });
    }

    // Scroll-driven UI (rAF throttled)
    var ticking = false;
    function onScroll() {
      var y = window.scrollY, max = document.documentElement.scrollHeight - window.innerHeight;
      header.classList.toggle("is-scrolled", y > 24);
      bar.style.transform = "scaleX(" + (max > 0 ? Math.min(1, y / max) : 0) + ")";
      top.hidden = y < 700;
      ticking = false;
    }
    window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
    onScroll();

    top.addEventListener("click", function () {
      var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      var h = document.getElementById("hero-title"); if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
    });
  }

  P.nav = { init: init };
})();
