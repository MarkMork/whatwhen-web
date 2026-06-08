(function () {
  // Theme toggle — mirrors the WhatWhen app's localStorage key
  var themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('whatwhen-theme', next);
    });
  }

  // Copy-to-clipboard for all .copy-btn elements
  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetId = btn.getAttribute('data-code');
      var el = document.getElementById(targetId);
      if (!el) return;
      navigator.clipboard.writeText(el.textContent.trim()).then(function () {
        var orig = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(function () { btn.textContent = orig; }, 2000);
      });
    });
  });
})();
