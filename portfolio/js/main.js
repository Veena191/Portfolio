/** Entry point: builds data-driven sections, then wires interactions. */
(function () {
  var P = window.Portfolio;
  document.documentElement.classList.remove("no-js");
  P.animations.loader();
  P.sections.init();   // marquee, stats, services, skills, journey, education, email
  P.filters.init();    // project grid + filters + details dialog
  P.nav.init();
  P.contactForm.init();
  P.animations.init(); // must run after sections render so [data-reveal] elements exist
  P.icons.apply(document);
})();
