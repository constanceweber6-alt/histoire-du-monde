/* Nuage de particules des en-tetes de chapitre.
   Les particules dessinent un cercle et une croix (repere, boussole),
   et s'ecartent doucement du pointeur. */
HISTOIRE.particules = (function () {
  var anim = null;

  function lancer(canvas) {
    arreter();
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w, h, pts = [], souris = { x: -9999, y: -9999 };
    var reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function cible(i, n, cx, cy, R) {
      var t = i / n;
      if (t < 0.55) {
        var a = (t / 0.55) * Math.PI * 2;
        var r = R + (Math.random() - 0.5) * R * 0.12;
        return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
      }
      if (t < 0.775) {
        var y = cy - R * 1.08 + Math.random() * R * 2.16;
        return [cx + (Math.random() - 0.5) * R * 0.16, y];
      }
      var x = cx - R * 1.08 + Math.random() * R * 2.16;
      return [x, cy + (Math.random() - 0.5) * R * 0.16];
    }

    function taille() {
      var r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(Math.min(2600, w * h / 260));
      var R = Math.min(w, h) * 0.36;
      pts = [];
      for (var i = 0; i < n; i++) {
        var c = cible(i, n, w / 2, h / 2, R);
        pts.push({ x: Math.random() * w, y: Math.random() * h, tx: c[0], ty: c[1], vx: 0, vy: 0, s: Math.random() * 1.4 + 0.4, o: Math.random() * 0.5 + 0.25 });
      }
    }

    function image() {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i];
        var dx = p.x - souris.x, dy = p.y - souris.y, d2 = dx * dx + dy * dy;
        if (d2 < 14000) { var f = (14000 - d2) / 14000 * 2.2; p.vx += dx / Math.sqrt(d2 + 1) * f; p.vy += dy / Math.sqrt(d2 + 1) * f; }
        p.vx += (p.tx - p.x) * 0.012; p.vy += (p.ty - p.y) * 0.012;
        p.vx *= 0.86; p.vy *= 0.86;
        p.x += p.vx + (Math.random() - 0.5) * 0.3; p.y += p.vy + (Math.random() - 0.5) * 0.3;
        ctx.fillStyle = 'rgba(200,200,200,' + p.o + ')';
        ctx.fillRect(p.x, p.y, p.s, p.s);
      }
      anim = requestAnimationFrame(image);
    }

    function bouge(e) {
      var r = canvas.getBoundingClientRect();
      souris.x = e.clientX - r.left; souris.y = e.clientY - r.top;
    }
    taille();
    if (reduit) { pts.forEach(function (p) { p.x = p.tx; p.y = p.ty; }); image(); cancelAnimationFrame(anim); anim = null; return; }
    window.addEventListener('resize', taille);
    canvas.parentElement.addEventListener('pointermove', bouge);
    canvas.parentElement.addEventListener('pointerleave', function () { souris.x = souris.y = -9999; });
    image();
    lancer.nettoyer = function () { window.removeEventListener('resize', taille); };
  }

  function arreter() {
    if (anim) cancelAnimationFrame(anim);
    anim = null;
    if (lancer.nettoyer) { lancer.nettoyer(); lancer.nettoyer = null; }
  }

  return { lancer: lancer, arreter: arreter };
})();
