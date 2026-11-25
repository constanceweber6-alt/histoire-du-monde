/* Frise chronologique comparee : une ligne par pays, un bloc par phase. */
HISTOIRE.frise = (function () {
  var U = HISTOIRE.util;
  var DEBUT = 0, FIN = 2026;
  var echelle = 1; // pixels par annee

  function largeurParDefaut() {
    return Math.max(900, Math.min(2400, window.innerWidth * 1.4));
  }

  function rendre(conteneur, filtreRegion) {
    var largeur = largeurParDefaut() * echelle;
    var px = largeur / (FIN - DEBUT);
    var axe = '';
    for (var a = 0; a <= 2000; a += 100) {
      axe += '<span style="left:' + ((a - DEBUT) * px).toFixed(1) + 'px">' + (a === 0 ? '1' : a) + '</span>';
    }
    var reperes = '';
    for (var b = 100; b <= 2000; b += 100) reperes += '<div class="frise-repere" style="left:' + (150 + (b - DEBUT) * px).toFixed(1) + 'px"></div>';
    var lignes = HISTOIRE.pays.filter(function (p) { return !filtreRegion || p.region === filtreRegion; }).map(function (p) {
      var tons = U.continentDuPays(p.id).tons;
      var blocs = p.phases.map(function (ph, i) {
        var d = Math.max(DEBUT, ph.debut), f = Math.min(FIN, ph.fin);
        var g = (d - DEBUT) * px, l = Math.max(6, (f - d) * px - 2);
        return '<a class="frise-bloc" style="background:' + tons[i % 2 ? 1 : (i % 4 ? 2 : 0)] + ';left:' + g.toFixed(1) + 'px;width:' + l.toFixed(1) + 'px" href="#/pays/' + p.id + '/' + i + '" title="' + U.esc(ph.titre + ' (' + U.periode(ph.debut, ph.fin) + ')') + '">' + U.esc(ph.titre) + '</a>';
      }).join('');
      return '<div class="frise-ligne"><a class="frise-nom" href="#/pays/' + p.id + '">' + U.esc(p.nom) + '</a><div class="frise-piste" style="width:' + largeur.toFixed(0) + 'px">' + blocs + '</div></div>';
    }).join('');
    conteneur.innerHTML = '<div class="frise" style="width:' + (largeur + 150).toFixed(0) + 'px">' + reperes +
      '<div class="frise-axe" style="width:' + largeur.toFixed(0) + 'px">' + axe + '</div>' + lignes + '</div>';
  }

  function afficher(app) {
    var regions = HISTOIRE.regions.map(function (r) { return '<button data-region="' + r.id + '">' + U.esc(r.nom) + '</button>'; }).join('');
    app.innerHTML =
      '<section class="frise-page pointilles">' +
        '<div class="entete-claire conteneur" style="padding-bottom:0">' +
          '<p class="surtitre">Frise comparée</p><h1 class="titre-1">Deux mille ans<br>côte à côte</h1>' +
          '<p class="chapo" style="color:#ccc">Chaque pays a son propre découpage : les historiens japonais ne parlent pas de « Moyen Âge » comme les historiens français. Comparer les lignes montre ce qui se passe au même moment ailleurs.</p>' +
          '<div class="frise-outils"><button data-region="" class="actif">Tous</button>' + regions + '</div>' +
          '<div class="frise-outils"><button data-zoom="0.7">Vue d\'ensemble</button><button data-zoom="1" class="actif">Normal</button><button data-zoom="2.2">Détail</button></div>' +
        '</div>' +
        '<div class="frise-legende conteneur">' + U.legendeContinents() + '<span class="discret">Les tons alternent d\'une phase à l\'autre.</span></div>' +
        '<div class="frise-cadre" id="frise-cadre"></div>' +
      '</section>';
    var cadre = document.getElementById('frise-cadre');
    var region = '';
    rendre(cadre, region);
    app.querySelectorAll('[data-region]').forEach(function (b) {
      b.addEventListener('click', function () {
        region = b.dataset.region;
        app.querySelectorAll('[data-region]').forEach(function (x) { x.classList.toggle('actif', x === b); });
        rendre(cadre, region);
      });
    });
    app.querySelectorAll('[data-zoom]').forEach(function (b) {
      b.addEventListener('click', function () {
        echelle = +b.dataset.zoom;
        app.querySelectorAll('[data-zoom]').forEach(function (x) { x.classList.toggle('actif', x === b); });
        rendre(cadre, region);
      });
    });
  }

  return { afficher: afficher };
})();
