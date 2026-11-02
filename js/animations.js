/** Motion: scroll reveal, rotating hero words, count-up stats, cursor glow, loader. */
(function () {
  var P = window.Portfolio = window.Portfolio || {};
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function reveal() {
    var els = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window) || reduce) { els.forEach(function (e) { e.classList.add("is-visible"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  function rotator() {
    var el = document.getElementById("rotator");
    if (!el || reduce) return;
    var words = window.PortfolioData.profile.rotatingWords, i = 0;
    setInterval(function () {
      el.classList.add("is-out");
      setTimeout(function () { i = (i + 1) % words.length; el.textContent = words[i]; el.classList.remove("is-out"); }, 380);
    }, 2600);
  }

  function countUp() {
    var nums = document.querySelectorAll("[data-count]");
    if (reduce || !("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        var el = en.target, end = +el.getAttribute("data-count"), t0 = performance.now(), dur = 1100;
        (function tick(t) {
          var k = Math.min(1, (t - t0) / dur);
          el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3)));
          if (k < 1) requestAnimationFrame(tick);
        })(t0);
      });
    }, { threshold: 0.6 });
    nums.forEach(function (n) { n.textContent = "0"; io.observe(n); });
  }

  function cursorGlow() {
    var g = document.getElementById("cursor-glow");
    if (!g || reduce || window.matchMedia("(hover: hover)").matches === false || window.matchMedia("(pointer: coarse)").matches) return;
    var x = 0, y = 0, raf = 0;
    window.addEventListener("pointermove", function (e) {
      x = e.clientX; y = e.clientY; g.style.opacity = 1;
      if (!raf) raf = requestAnimationFrame(function () { g.style.transform = "translate(" + x + "px," + y + "px)"; raf = 0; });
    }, { passive: true });
    document.addEventListener("pointerleave", function () { g.style.opacity = 0; });
  }

  function loader() {
    var done = false;
    function ready() { if (done) return; done = true; document.body.classList.add("is-ready"); }
    if (document.readyState === "complete") setTimeout(ready, 250);
    else window.addEventListener("load", function () { setTimeout(ready, 250); });
    setTimeout(ready, 1200);
  }

  P.animations = { init: function () { reveal(); rotator(); countUp(); cursorGlow(); }, loader: loader };
})();
