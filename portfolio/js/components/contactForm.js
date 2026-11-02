/**
 * Contact form.
 *  - PORTFOLIO_CONFIG.formEndpoint set  -> POST JSON to that URL (Formspree-compatible).
 *  - formEndpoint empty                 -> opens the visitor's email app with a pre-filled message.
 */
(function () {
  var P = window.Portfolio = window.Portfolio || {};

  function init() {
    var form = document.getElementById("contact-form");
    if (!form) return;
    var C = window.PORTFOLIO_CONFIG;
    var status = document.getElementById("form-status");
    var btn = document.getElementById("cf-submit");

    function setError(name, msg) {
      var field = form.elements[name].closest(".field");
      field.classList.toggle("has-error", !!msg);
      form.elements[name].setAttribute("aria-invalid", msg ? "true" : "false");
      var out = form.querySelector('[data-error-for="' + name + '"]');
      if (out) out.textContent = msg || "";
    }
    function validate() {
      var ok = true, v = function (n) { return form.elements[n].value.trim(); };
      var checks = {
        name: v("name").length >= 2 ? "" : "Please enter your name.",
        email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v("email")) ? "" : "Please enter a valid email address.",
        message: v("message").length >= 10 ? "" : "Please write at least 10 characters."
      };
      Object.keys(checks).forEach(function (k) { setError(k, checks[k]); if (checks[k]) ok = false; });
      if (!ok) { var first = form.querySelector(".has-error input, .has-error textarea"); if (first) first.focus(); }
      return ok;
    }
    function say(msg, kind) { status.textContent = msg; status.className = "form-status " + (kind || ""); }

    ["name", "email", "message"].forEach(function (n) {
      form.elements[n].addEventListener("input", function () { setError(n, ""); });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      say("");
      if (form.elements.company.value) return; // honeypot: bots fill this
      if (!validate()) { say("Please fix the highlighted fields.", "is-err"); return; }

      var data = {
        name: form.elements.name.value.trim(),
        email: form.elements.email.value.trim(),
        subject: form.elements.subject.value.trim() || "Portfolio enquiry from " + form.elements.name.value.trim(),
        message: form.elements.message.value.trim()
      };

      if (C.formEndpoint) {
        btn.disabled = true; say("Sending…");
        fetch(C.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) })
          .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); form.reset(); say("Thanks, " + data.name + "! Your message has been sent.", "is-ok"); })
          .catch(function () { say("Sorry, that didn't send. Please email me directly at " + C.email + ".", "is-err"); })
          .then(function () { btn.disabled = false; });
      } else {
        var body = data.message + "\n\n— " + data.name + " (" + data.email + ")";
        window.location.href = "mailto:" + C.email + "?subject=" + encodeURIComponent(data.subject) + "&body=" + encodeURIComponent(body);
        say("Opening your email app with the message ready to send. If nothing opens, write to " + C.email + ".", "is-ok");
      }
    });
  }

  P.contactForm = { init: init };
})();
