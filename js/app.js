/* Routeur et pages : accueil, pays (liste + fiche), region, methode. */
(function () {
  var U = HISTOIRE.util;
  var app = document.getElementById('app');
  var observateur = null;

  function compter() {
    var c = { phases: 0, debats: 0, evenements: 0 };
    HISTOIRE.pays.forEach(function (p) {
      c.phases += p.phases.length;
      p.phases.forEach(function (ph) { c.debats += (ph.debats || []).length; c.evenements += (ph.evenements || []).length; });
    });
    return c;
  }

  function animer() {
    if (observateur) observateur.disconnect();
    observateur = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('vu'); observateur.unobserve(e.target); } });
    }, { threshold: 0.08 });
    app.querySelectorAll('.apparait').forEach(function (el) { observateur.observe(el); });
  }

  /* ---------- Accueil ---------- */
  function accueil() {
    var c = compter();
    document.body.className = '';
    app.innerHTML =
      '<section class="accueil pointilles">' +
        '<p class="surtitre">Projet</p>' +
        '<h1 class="titre-geant">Zones grises</h1>' +
        '<p class="sous-titre">L\'histoire des pays d\'Europe et d\'Asie depuis l\'an 1, avec ses certitudes, ses débats et ses zones d\'ombre.</p>' +
        '<hr class="separateur">' +
        '<div class="cartes">' +
          '<a class="carte carte-noire" href="#/carte"><h3>Explorer la carte</h3><p>Faites défiler deux mille ans de frontières et retrouvez les événements là où ils ont eu lieu.</p><span class="bouton bouton-blanc">Ouvrir la carte</span></a>' +
          '<a class="carte" href="#/pays"><h3>Lire par pays</h3><p>Chaque pays découpé en phases : le récit, ce qui fait consensus, ce qui fait débat, ce qu\'on raconte moins.</p><span class="bouton bouton-gris">Choisir un pays</span></a>' +
        '</div>' +
        '<p class="note">Les grandes lignes font souvent consensus. Les causes, les chiffres et les jugements beaucoup moins : c\'est ce que ce site veut montrer.</p>' +
        '<div class="chiffres">' +
          '<div><strong>' + HISTOIRE.pays.length + '</strong><span>Pays</span></div>' +
          '<div><strong>' + c.phases + '</strong><span>Phases</span></div>' +
          '<div><strong>' + c.debats + '</strong><span>Débats</span></div>' +
          '<div><strong>' + c.evenements + '</strong><span>Événements</span></div>' +
        '</div>' +
      '</section>';
  }

  /* ---------- Liste des pays par region ---------- */
  function cartePays(p, noire) {
    var nbD = p.phases.reduce(function (s, ph) { return s + (ph.debats || []).length; }, 0);
    return '<a class="carte carte-pays' + (noire ? ' carte-noire' : '') + '" href="#/pays/' + p.id + '">' +
      '<span class="periode">' + p.phases.length + ' phases</span>' +
      '<h3>' + U.esc(p.nom) + '</h3><p>' + U.esc(p.accroche) + '</p>' +
      '<span class="compteurs">' + nbD + ' débats ouverts</span></a>';
  }

  function listePays() {
    document.body.className = '';
    var html = HISTOIRE.regions.map(function (r) {
      var pays = HISTOIRE.pays.filter(function (p) { return p.region === r.id; });
      return '<div class="region-bloc apparait"><h2 class="titre-2">' + U.esc(r.nom) + ' <a href="#/region/' + r.id + '">Voir la région →</a></h2>' +
        '<div class="cartes">' + pays.map(function (p, i) { return cartePays(p, i === 0); }).join('') + '</div></div>';
    }).join('');
    app.innerHTML =
      '<section class="pointilles"><div class="entete-claire conteneur"><p class="surtitre">Pays et régions</p><h1 class="titre-1">Choisir<br>un pays</h1>' +
      '<p class="chapo">' + HISTOIRE.pays.length + ' pays regroupés en ' + HISTOIRE.regions.length + ' régions. D\'autres suivront.</p></div>' +
      '<div class="conteneur">' + html + '</div></section>';
    animer();
  }

  /* ---------- Region ---------- */
  function region(id) {
    var r = U.regionParId(id);
    if (!r) return introuvable();
    document.body.className = 'sombre';
    var pays = HISTOIRE.pays.filter(function (p) { return p.region === r.id; });
    var debats = (r.debats || []).map(rendreDebat).join('');
    app.innerHTML =
      '<header class="chapitre"><canvas></canvas>' +
        '<div class="fil-ariane"><a href="#/pays">Pays et régions</a> / ' + U.esc(r.nom) + '</div>' +
        '<p class="surtitre">Région</p><h1 class="titre-1">' + U.esc(r.nom) + '</h1>' +
        '<p class="chapo">' + U.esc(r.chapo) + '</p>' +
        '<span class="pastille">' + pays.length + ' pays</span>' +
      '</header>' +
      '<div class="conteneur section">' +
        '<div class="recit apparait">' + r.texte.map(function (t) { return '<p style="font-size:17px;line-height:1.7;max-width:760px;color:#e4e4e4">' + U.esc(t) + '</p>'; }).join('') + '</div>' +
        (debats ? '<div class="bloc-titre debat">Débats à l\'échelle de la région</div><div class="apparait">' + debats + '</div>' : '') +
        '<div class="bloc-titre">Les pays</div><div class="cartes apparait">' + pays.map(function (p) { return cartePays(p, false); }).join('') + '</div>' +
      '</div>';
    HISTOIRE.particules.lancer(app.querySelector('.chapitre canvas'));
    animer();
  }

  /* ---------- Fiche pays ---------- */
  function rendreDebat(d) {
    return '<div class="debat">' +
      '<div class="debat-question">' + U.esc(d.question) + '</div>' +
      '<div class="debat-positions">' + d.positions.map(function (p) {
        return '<div class="position"><h4>' + U.esc(p.titre) + '</h4><p>' + U.esc(p.texte) + '</p>' + (p.qui ? '<span class="qui">' + U.esc(p.qui) + '</span>' : '') + '</div>';
      }).join('') + '</div>' +
      (d.etat ? '<div class="debat-etat"><strong>Aujourd\'hui</strong>' + U.esc(d.etat) + '</div>' : '') +
    '</div>';
  }

  function rendrePhase(p, ph, i) {
    var evts = (ph.evenements || []).map(function (ev, j) {
      return '<li id="evt-' + i + '-' + j + '"><span class="annee">' + U.esc(U.annee(ev.annee)) + '</span>' + U.esc(ev.titre) +
        (ev.texte ? '<span class="evt-texte">' + U.esc(ev.texte) + '</span>' : '') +
        (ev.lieu ? '<a class="voir-carte" href="#/carte?annee=' + Math.max(1, ev.annee) + '&pays=' + p.id + '">voir sur la carte</a>' : '') + '</li>';
    }).join('');
    return '<section class="phase" id="phase-' + i + '">' +
      '<div class="conteneur">' +
        '<div class="phase-entete apparait"><span class="phase-dates">Chapitre ' + (i + 1) + ' · ' + U.esc(U.periode(ph.debut, ph.fin)) + '</span>' +
        '<h2 class="titre-1" style="font-size:clamp(34px,5.4vw,64px)">' + U.esc(ph.titre) + '</h2></div>' +
        '<p class="chapo apparait" style="color:#cfcfcf">' + U.esc(ph.chapo) + '</p>' +
        '<div class="recit apparait">' + ph.recit.map(function (t) { return '<p>' + U.esc(t) + '</p>'; }).join('') + '</div>' +
        '<div class="bloc-titre consensus">Ce qui fait consensus</div>' +
        '<ul class="liste-consensus apparait">' + ph.consensus.map(function (c) { return '<li>' + U.esc(c) + '</li>'; }).join('') + '</ul>' +
        ((ph.debats || []).length ? '<div class="bloc-titre debat">Ce qui fait débat</div><div class="apparait">' + ph.debats.map(rendreDebat).join('') + '</div>' : '') +
        (ph.moinsConnu ? '<div class="bloc-titre ombre">Ce qu\'on raconte moins</div><div class="moins-connu apparait">' + U.esc(ph.moinsConnu) + '</div>' : '') +
        (evts ? '<div class="bloc-titre">Repères</div><ul class="evenements apparait">' + evts + '</ul>' : '') +
      '</div></section>';
  }

  function fichePays(id, phase, evt, depuis) {
    var p = U.paysParId(id);
    if (!p) return introuvable();
    document.body.className = 'sombre';
    var r = U.regionParId(p.region);
    var idx = HISTOIRE.pays.indexOf(p);
    var prec = HISTOIRE.pays[(idx - 1 + HISTOIRE.pays.length) % HISTOIRE.pays.length];
    var suiv = HISTOIRE.pays[(idx + 1) % HISTOIRE.pays.length];
    app.innerHTML =
      '<header class="chapitre"><canvas></canvas>' +
        '<div class="fil-ariane"><a href="#/pays">Pays et régions</a> / <a href="#/region/' + r.id + '">' + U.esc(r.nom) + '</a></div>' +
        '<p class="surtitre">' + p.phases.length + ' chapitres · de l\'an 1 à aujourd\'hui</p>' +
        '<h1 class="titre-geant">' + U.esc(p.nom) + '</h1>' +
        '<p class="chapo">' + U.esc(p.intro) + '</p>' +
        '<a class="pastille" href="#phase-0" data-ancre="phase-0" style="text-decoration:none">Commencer la lecture</a>' +
      '</header>' +
      '<nav class="sommaire" aria-label="Phases"><div class="conteneur">' +
        p.phases.map(function (ph, i) { return '<a href="#phase-' + i + '" data-ancre="phase-' + i + '">' + (i + 1) + '. ' + U.esc(ph.titre) + '</a>'; }).join('') +
      '</div></nav>' +
      p.phases.map(function (ph, i) { return rendrePhase(p, ph, i); }).join('') +
      '<div class="conteneur"><div class="pays-nav">' +
        '<a class="bouton bouton-fantome" href="#/pays/' + prec.id + '">← ' + U.esc(prec.nom) + '</a>' +
        '<a class="bouton bouton-blanc" href="#/frise">Comparer sur la frise</a>' +
        '<a class="bouton bouton-fantome" href="#/pays/' + suiv.id + '">' + U.esc(suiv.nom) + ' →</a>' +
      '</div>' + (p.sources ? '<p class="discret" style="font-size:13px;margin-top:40px">Pour aller plus loin : ' + U.esc(p.sources) + '</p>' : '') + '</div>';

    HISTOIRE.particules.lancer(app.querySelector('.chapitre canvas'));
    app.querySelectorAll('[data-ancre]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var cible = document.getElementById(a.dataset.ancre);
        if (cible) cible.scrollIntoView({ behavior: 'smooth' });
      });
    });
    var liens = app.querySelectorAll('.sommaire a');
    var suivi = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (e) {
        if (e.isIntersecting) {
          liens.forEach(function (l) {
            var on = l.dataset.ancre === e.target.id;
            l.classList.toggle('actif', on);
            if (on) l.scrollIntoView({ block: 'nearest', inline: 'center' });
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    app.querySelectorAll('.phase').forEach(function (s) { suivi.observe(s); });
    animer();
    if (phase != null) {
      var cible = document.getElementById('phase-' + phase);
      if (cible) {
        var ph = p.phases[phase];
        var ev = evt != null && ph ? (ph.evenements || [])[evt] : null;
        if (depuis != null || ev) {
          var bandeau = document.createElement('div');
          bandeau.className = 'depuis-carte conteneur';
          bandeau.innerHTML =
            '<div class="depuis-carte-boite">' +
              '<div><p class="surtitre">' + (ev ? 'Vous avez cliqué sur la carte · ' + U.esc(U.annee(ev.annee)) : 'Depuis la carte · ' + U.esc(U.annee(+depuis))) + '</p>' +
              '<h3>' + (ev ? U.esc(ev.titre) : U.esc(p.nom + ' en ' + U.annee(+depuis))) + '</h3>' +
              (ev && ev.texte ? '<p>' + U.esc(ev.texte) + '</p>' : '') +
              '<p class="discret">' + (ev ? 'Cet événement appartient au chapitre ci-dessous : le récit, les débats et les repères l\'expliquent.' : 'Voici le chapitre de l\'histoire de ce pays qui couvre cette date.') + '</p></div>' +
              '<a class="bouton bouton-blanc" href="#/carte?annee=' + Math.max(1, +(depuis || (ev && ev.annee) || 1)) + '">← Retour à la carte</a>' +
            '</div>';
          cible.insertBefore(bandeau, cible.firstChild);
        }
        if (ev) {
          var li = document.getElementById('evt-' + phase + '-' + evt);
          if (li) li.classList.add('surligne');
        }
        cible.querySelectorAll('.apparait').forEach(function (el) { el.classList.add('vu'); });
        setTimeout(function () { cible.scrollIntoView(); }, 30);
      }
    }
  }

  /* ---------- Methode ---------- */
  function methode() {
    document.body.className = '';
    app.innerHTML =
      '<section class="pointilles"><div class="entete-claire conteneur"><p class="surtitre">Méthode</p><h1 class="titre-1">Pourquoi<br>« zones grises »</h1>' +
      '<p class="chapo">En histoire, il y a rarement d\'un côté les bons et de l\'autre les méchants, ni une seule version des faits. L\'histoire repose sur des sources incomplètes, lues par des historiens qui ne sont pas d\'accord entre eux, et souvent récupérée par le présent.</p></div></section>' +
      '<div class="conteneur section"><div class="texte-long">' +
        '<h2>Comment lire une phase</h2>' +
        '<div class="legende">' +
          '<div style="background:#111;color:#fff">Le récit : ce qui s\'est passé, raconté simplement.</div>' +
          '<div style="background:#fff;border:1px solid #ddd">Ce qui fait consensus : les faits que presque tous les historiens acceptent.</div>' +
          '<div style="background:linear-gradient(90deg,#fff,#8f8f8f 50%,#111);color:#111">Ce qui fait débat : les interprétations qui s\'opposent, présentées côte à côte, puis l\'état actuel de la recherche.</div>' +
          '<div style="border:1px dashed #999">Ce qu\'on raconte moins : les acteurs, les régions ou les faits souvent laissés hors du récit national.</div>' +
        '</div>' +
        '<h2>Les choix assumés</h2>' +
        '<ul>' +
          '<li><strong>Départ en l\'an 1.</strong> Il n\'y a pas d\'an 0 dans notre calendrier : on passe de 1 av. J.-C. à 1 apr. J.-C. Ce point de départ est lui-même un repère chrétien et européen, utilisé ici par commodité.</li>' +
          '<li><strong>Un découpage par pays.</strong> Chaque pays garde sa propre périodisation. Le « Moyen Âge » est une catégorie européenne qui a peu de sens en Chine ou en Inde.</li>' +
          '<li><strong>Des pays qui n\'existaient pas.</strong> Parler de « l\'Allemagne » ou de « l\'Italie » au IIe siècle est un anachronisme. On suit le territoire actuel pour se repérer, sans prétendre que la nation existait déjà.</li>' +
          '<li><strong>Le débat n\'est pas le relativisme.</strong> Présenter deux positions ne veut pas dire qu\'elles se valent. Quand la recherche a tranché, la rubrique « Aujourd\'hui » le dit. Les faits établis (génocides, crimes de masse documentés) ne sont pas présentés comme des opinions.</li>' +
        '</ul>' +
        '<h2>La carte</h2>' +
        '<p>Les frontières viennent du projet libre <a href="https://github.com/aourednik/historical-basemaps" target="_blank" rel="noopener">historical-basemaps</a> d\'André Ourednik (licence GPL-3.0). Avant le XIXe siècle, une frontière nette est une simplification : les pouvoirs s\'exerçaient par zones d\'influence, tributs et allégeances plutôt que par des lignes.</p>' +
        '<h2>Contribuer</h2>' +
        '<p>Le contenu est écrit dans des fichiers simples (<code>data/pays/*.js</code>). Une erreur, un débat oublié, une source à ajouter : ouvrez une issue sur le dépôt GitHub.</p>' +
      '</div></div>';
  }

  function introuvable() {
    document.body.className = '';
    app.innerHTML = '<section class="accueil pointilles"><p class="surtitre">Erreur</p><h1 class="titre-1">Page introuvable</h1><hr class="separateur"><a class="bouton bouton-noir" href="#/">Retour à l\'accueil</a></section>';
  }

  /* ---------- Routeur ---------- */
  function route() {
    var h = location.hash || '#/';
    if (/^#phase-\d+$/.test(h)) return; // ancre interne
    var parts = h.replace(/^#\/?/, '').split('?');
    var chemin = parts[0].split('/').filter(Boolean);
    var params = {};
    (parts[1] || '').split('&').forEach(function (kv) { if (kv) { var p = kv.split('='); params[p[0]] = decodeURIComponent(p[1] || ''); } });

    HISTOIRE.particules.arreter();
    HISTOIRE.carte.quitter();
    var nom = chemin[0] || 'accueil';
    document.querySelectorAll('.dock a').forEach(function (a) {
      var r = a.dataset.route;
      a.classList.toggle('actif', r === nom || (r === 'pays' && nom === 'region'));
    });
    window.scrollTo(0, 0);

    if (nom === 'accueil') accueil();
    else if (nom === 'carte') { document.body.className = 'sombre'; HISTOIRE.carte.afficher(app, params); }
    else if (nom === 'frise') { document.body.className = 'sombre'; HISTOIRE.frise.afficher(app); }
    else if (nom === 'pays' && chemin[1]) fichePays(chemin[1], chemin[2] != null ? +chemin[2] : null, chemin[3] != null ? +chemin[3] : null, params.depuis != null ? params.depuis : null);
    else if (nom === 'pays') listePays();
    else if (nom === 'region') region(chemin[1]);
    else if (nom === 'methode') methode();
    else introuvable();

    var titre = { accueil: '', carte: 'Carte', frise: 'Frise', pays: 'Pays', region: 'Région', methode: 'Méthode' }[nom];
    var p = chemin[1] && nom === 'pays' ? U.paysParId(chemin[1]) : null;
    document.title = (p ? p.nom + ' · ' : titre ? titre + ' · ' : '') + 'Zones grises';
  }

  var derniereRoute = null;
  window.addEventListener('hashchange', function () {
    // le replaceState de la carte ne declenche pas hashchange ; on ignore les ancres internes
    if (/^#phase-\d+$/.test(location.hash)) return;
    route();
  });
  route();
})();
