/* Espace de noms commun et petits utilitaires. */
window.HISTOIRE = {
  regions: [],
  pays: [],
  cartes: {},
  anneesCartes: [],
  ajouterPays: function (p) { this.pays.push(p); }
};

/* Couleurs claires par continent, utilisees uniquement sur la carte et la frise.
   Trois tons proches par continent pour distinguer les entites voisines. */
HISTOIRE.CONTINENTS = [
  { id: 'europe', nom: 'Europe', tons: ['#a9c1df', '#94b2d6', '#bccfe7'] },
  { id: 'asie', nom: 'Asie', tons: ['#e6cd94', '#dbbd78', '#efdbb0'] },
  { id: 'afrique', nom: 'Afrique', tons: ['#e0ab93', '#d5987d', '#eabfab'] },
  { id: 'amerique', nom: 'Amériques', tons: ['#a6d4b6', '#90c8a4', '#bcdfc8'] },
  { id: 'oceanie', nom: 'Océanie', tons: ['#c6b5e3', '#b4a1d9', '#d6caec'] }
];

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
  /* Continent d'une region (d'apres le debut de son identifiant) */
  continent: function (regionId) {
    var id = String(regionId || '').split('-')[0];
    return HISTOIRE.CONTINENTS.find(function (c) { return c.id === id; }) || HISTOIRE.CONTINENTS[0];
  },
  continentDuPays: function (paysId) {
    var p = HISTOIRE.util.paysParId(paysId);
    return HISTOIRE.util.continent(p && p.region);
  },
  /* Pastilles de legende des continents */
  legendeContinents: function () {
    return HISTOIRE.CONTINENTS.map(function (c) {
      return '<span class="pastille-couleur"><i style="background:' + c.tons[0] + '"></i>' + HISTOIRE.util.esc(c.nom) + '</span>';
    }).join('');
  },
  /* Transforme lat/lon en coordonnees du SVG de la carte (meme projection que tools/cartes.py) */
  projeter: function (lat, lon) {
    var kx = 10 * Math.cos(40 * Math.PI / 180);
    return [(lon + 180) * kx, (84 - lat) * 10];
  }
};
