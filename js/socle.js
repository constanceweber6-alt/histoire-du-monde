/* Espace de noms commun et petits utilitaires. */
window.HISTOIRE = {
  regions: [],
  pays: [],
  cartes: {},
  anneesCartes: [],
  ajouterPays: function (p) { this.pays.push(p); }
};

HISTOIRE.util = {
  esc: function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  },
  annee: function (a) {
    if (a < 0) return Math.abs(a) + ' av. J.-C.';
    return String(a);
  },
  periode: function (d, f) {
    var u = HISTOIRE.util;
    return u.annee(d) + ' à ' + (f >= 2026 ? "aujourd'hui" : u.annee(f));
  },
  paysParId: function (id) {
    return HISTOIRE.pays.find(function (p) { return p.id === id; });
  },
  regionParId: function (id) {
    return HISTOIRE.regions.find(function (r) { return r.id === id; });
  },
  /* Transforme lat/lon en coordonnees du SVG de la carte (meme projection que tools/cartes.py) */
  projeter: function (lat, lon) {
    var kx = 10 * Math.cos(40 * Math.PI / 180);
    return [(lon + 25) * kx, (78 - lat) * 10];
  }
};
