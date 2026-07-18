document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  // Puppy select prefill: ?puppy=Name on inquiry page
  var params = new URLSearchParams(window.location.search);
  var puppyParam = params.get('puppy');
  var puppySelect = document.getElementById('puppy-interest');
  if (puppyParam && puppySelect) {
    var opt = Array.from(puppySelect.options).find(function (o) {
      return o.value.toLowerCase() === puppyParam.toLowerCase();
    });
    if (opt) puppySelect.value = opt.value;
  }
});
