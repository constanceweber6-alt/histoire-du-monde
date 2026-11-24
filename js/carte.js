/* Carte interactive : frontieres historiques par date + evenements des pays. */
HISTOIRE.carte = (function () {
  var U = HISTOIRE.util;
  var NS = 'http://www.w3.org/2000/svg';
  var VUE = { x: 0, y: -30, w: 2758, h: 2150 }; // marge en bas pour que l'Antarctique ne passe pas sous le curseur
  var etat = { annee: 1, lecture: null, filtre: '', vue: null, chargees: {} };
  var GRIS = ['#3b3b3b', '#474747', '#545454', '#626262', '#717171', '#808080', '#8f8f8f'];

  /* Noms des entites du jeu de donnees rattachees a chaque pays (nom propre ou entite de tutelle).
     Le rattachement par tutelle fait apparaitre les colonies : c'est voulu. */
  var CORRESPONDANCES = {
    'france': /^(Franks|Frankish Kingdom|West Francia|Kingdom of France|France|Comté de Toulouse)$/,
    'royaume-uni': /^(England|Scotland|English territory|England and Ireland|United Kingdom.*|Great Britain|UK|British East India Company|British Raj)$/,
    'allemagne': /^(Holy Roman Empire|East Francia|Germany|German Empire|East Germany|West Germany|Prussia|East Prussia|Bavaria|Saxony)$/,
    'italie': /^(Roman Empire|Western Roman Empire|Rome \(.*\)|Lombard principalities|Lombard duchies|Papal States|Venice|Lombardy|Italy|Kingdom of Italy)$/,
    'espagne': /^(Visigoths|Visigothic Kingdom|Navarre|Castilla|Castile|Castille|Aragón|Granada|Spain|Spanish Habsburg|.*C[oó]rdoba.*)$/,
    'russie': /^(Rus' Khaganate|Kyivan Rus|Kievan Rus|Other Rus Principalities|Principality of Novgorod|Principality of Vladimir-Suzdal|Novgorod|Tsardom of Muscovy|Russian Empire|Russia|USSR|Soviet Union)$/,
    'chine': /^(Han|Jin|Jin Empire|Han Zhao|Toba Wei|Sui Empire|Tang Empire|Song Empire|Great Khanate|Ming Empire|Ming Chinese Empire|Post-Ming Warlords|Qing Empire|China|Chinese [Ww]arlords)$/,
    'japon': /^(Yamato|Japan.*|Imperial Japan.*|Shogun Japan.*|Empire of Japan)$/,
    'coree': /^(Silla|Koguryo|Paekche|Goryeo|Korea.*)$/,
    'inde': /^(Kushan Empire|Kushan Principalities|Gupta Empire|Chola|Cholas|Chola Empire|Sultanate of Delhi|Vijayanagara|Mughal Empire|Maratha|Maratha Confederacy|British East India Company|British Raj|India)$/,
    'mongolie': /^(Xiongnu|Southern Xiongnu|S\. Xiongnu|Göktürks|Uyghurs|Mongols|Mongol Empire|Oirat Confederation|Mongolia)$/,
    'iran': /^(Parthian Empire|Persia|Persi|Sasanian Empire|Samanid Empire|Buyid Emirate|Buyid dynasty|Seljuk Empire|Ilkhanate|Timurid Empire|Timurid Emirates|Safavid Empire|Iran)$/,
    'turquie': /^(Eastern Roman Empire|Byzantine Empire|Seljuk Caliphate|Ottoman Empire|Ottoman Sultanate|Republic of Turkey|Turkey)$/,
    'vietnam': /^(Annam|Cochin China|Tonkin|Vietnam)$/,
    'thailande': /^(Dvaravati|Thai Kingdoms|Kingdom of Sukhotai|Sukhothai|Ayutthaya|Lan Na|Siam|Thailand)$/,
    'indonesie': /^(Mataram|Srivijaya Empire|East Java|Kediri|Aceh|Dutch East Indies|Netherlands Indies|Neterlands|Indonesia)$/,
    'pakistan': /^(Kingdom of Sind|Sindh|Sind|Punjab|Pakistan)$/,
    'afghanistan': /^(Ghaznavid Emirate|Afghanistan)$/,
    'birmanie': /^(Pyu state|Pagan|Kingdom of Pagan|Bagan|Burmese kingdoms|Pegu|Ava|Burma|Myanmar)$/,
    'cambodge': /^(Funan|Khmer Empire|Cambodia)$/,
    'philippines': /^(Philippines)$/,
    'pologne': /^(Polanes|Poland|Poland-Lithuania|Polish\u2013Lithuanian Commonwealth)$/,
    'ukraine': /^(Principality of Galicia-Volhynia|Principality of Kyiv|Ukraine)$/,
    'grece': /^(Greece)$/,
    'irak': /^(Abbasid Caliphate|Mesopotamia \(GB\)|Iraq)$/,
    'kazakhstan': /^(Kimek-Kipchak khaganate|Cuman-Kipchak confederation|White Horde|Kazakhstan)$/,
    'ouzbekistan': /^(Khwarazmian dynasty|Khiva Khanate|Bokhara Khanate|Uzbekistan)$/,
    'israel-palestine': /^(Judea|Mandatory Palestine \(GB\)|Israel|Palestine)$/,
    'syrie': /^(Umayyad Caliphate|Syria)$/,
    'arabie-saoudite': /^(Hejaz|Nejd|Arabia|Arabia \(Nejd\)|Saudi Arabia)$/,
    'pays-bas': /^(Frisians|Habsburg Netherlands|Dutch Republic|Batavian Republic|Netherlands)$/,
    'suede': /^(Swedes|Swedes and Goths|Sweden|Sweden\u2013Norway)$/,
    'hongrie': /^(Magyars|Hungary|Kingdom of Hungary|Imperial Hungary|Austria Hungary|Austro-Hungarian Empire)$/,
    'etats-unis': /^(United States of America|United States|British American colonies)$/,
    'bresil': /^(Portuguese Brazil|Viceroyalty of Brazil|Kingdom of Brazil|Empire of Brazil|Brazil)$/,
    'argentine': /^(Viceroyalty of the R\u00edo de la Plata|United Provinces of the R\u00edo de la Plata|Argentina|Argentine Confederation)$/,
    'perou': /^(Moche|Nazca|Huari Empire|Inca Empire|Viceroyalty of Peru|Peru)$/,
    'colombie': /^(Muisca|Viceroyalty of New Granada|Gran Colombia|Colombia|New Granada)$/,
    'chili': /^(Chile)$/,
    'venezuela': /^(Venezuela)$/,
    'mexique': /^(Teotihuacan|Toltec Empire|Aztec Empire|Viceroyalty of New Spain|Mexico)$/,
    'canada': /^(New France|Quebec|Rupert's Land|Canada)$/,
    'cuba': /^(Cuba|Cuba \(Spain\))$/,
    'haiti': /^(Haiti|Hispaniola \(Spain\))$/,
    'egypte': /^(Egypt|Ptolemaic Kingdom|Fatimid Caliphate|Mamluke Sultanate|Harer \(Egypt\))$/,
    'maroc': /^(Mauretania|Idrisid Caliphate|Almoravid dynasty|Almohad Caliphate|Morocco|Watassid Morocco|Morocco \(France\)|Spanish Morocco)$/,
    'algerie': /^(Numidia|Zayyanid Caliphate|Algiers|Algeria|Algeria \(FR\)|Algeria \(France\))$/,
    'nigeria': /^(Kanem|Kanem-Bornu|Hausa States|Oyo|Benin|Sokoto Caliphate|Nigeria)$/,
    'senegal': /^(Takrur|Senegal|Senegal \(FR\))$/,
    'mali': /^(Empire of Ghana|Ghana|Mali|Songhai)$/,
    'ethiopie': /^(Axum|Ethiopia|Abyssinia|Ethiopia \(Italy\))$/,
    'rdc': /^(Congo|Luba|Lunda|Belgian Congo|Zaire|Zaire \(Belgium\))$/,
    'kenya': /^(Kenya|British East Africa)$/,
    'australie': /^(Australian aboriginal hunter-gatherers|Tasmanian hunter-gatherers|Aboriginal Tasmanians|New South Wales|New South Wales \(UK\)|Queensland \(UK\)|Victoria \(UK\)|South Australia \(UK\)|Western Australia \(UK\)|Australia)$/,
    'nouvelle-zelande': /^(Maori|Maoris|M\u0101ori|New Zealand)$/,
    'ghana': /^(Asante|Gold Coast|Gold Coast \(GB\)|Ghana)$/,
    'rwanda': /^(Rwanda|Rwanda \(Belgium\))$/,
    'angola': /^(Ndongo|Angola|Angola \(Portugal\))$/,
    'bolivie': /^(Tiahuanaco Empire|Bolivia)$/,
    'equateur': /^(Ecuador)$/,
    'tanzanie': /^(Zanzibar|Sultanate of Zanzibar|Sultinate of Zanzibar|German E\. Africa \(Tanganyika\)|Tanzania, United Republic of)$/,
    'fidji': /^(Fiji)$/,
    'papouasie': /^(Papuans|Papuan|Papua New Guinea)$/,
    'afrique-du-sud': /^(Cape Colony|Zulu|Zululand|Natal|Transvaal|Orange Free State|Union of South Africa|South Africa)$/
  };

  /* Noms ambigus : valables seulement pour certaines annees de carte
     (le royaume du Benin n'est pas l'Etat moderne, l'empire du Ghana n'est pas le Ghana actuel). */
  var PERIODES = {
    'mali|Ghana': [0, 1300], 'ghana|Ghana': [1900, 9999],
    'nigeria|Benin': [0, 1800], 'rdc|Congo': [0, 1890]
  };
  function teste(id, nom) {
    var re = CORRESPONDANCES[id];
    if (!re || !nom || !re.test(nom)) return false;
    var per = PERIODES[id + '|' + nom];
    if (!per) return true;
    var a = anneeCarte(etat.annee);
    return a >= per[0] && a < per[1];
  }

  function rattache(f) {
    var re = CORRESPONDANCES[etat.filtre];
    return re ? (teste(etat.filtre, f.n) || teste(etat.filtre, f.s)) : false;
  }

  /* Pays du site auquel appartient une entite de la carte (ou null) */
  function paysDeEntite(f) {
    // d'abord le nom propre de l'entite (l'Ilkhanat mene a l'Iran), puis sa tutelle (une colonie mene a la metropole)
    var id;
    for (id in CORRESPONDANCES) if (teste(id, f.n)) return id;
    for (id in CORRESPONDANCES) if (teste(id, f.s)) return id;
    return null;
  }

  function phasePourAnnee(p, a) {
    for (var i = 0; i < p.phases.length; i++) if (a >= p.phases[i].debut && a < p.phases[i].fin) return i;
    return p.phases.length - 1;
  }

  /* Navigation vers l'explication */
  function allerEvenement(o) {
    location.hash = '#/pays/' + o.pays.id + '/' + o.phase + '/' + o.index + '?depuis=' + etat.annee;
  }
  function allerPays(id) {
    var p = U.paysParId(id);
    if (p) location.hash = '#/pays/' + id + '/' + phasePourAnnee(p, etat.annee) + '?depuis=' + etat.annee;
  }

  function teinte(nom) {
    var h = 0;
    for (var i = 0; i < nom.length; i++) h = (h * 31 + nom.charCodeAt(i)) >>> 0;
    return GRIS[h % GRIS.length];
  }

  function anneeCarte(a) {
    var liste = HISTOIRE.anneesCartes, r = liste[0];
    for (var i = 0; i < liste.length; i++) if (liste[i] <= a) r = liste[i];
    return r;
  }

  function charger(annee, rappel) {
    if (HISTOIRE.cartes[annee]) return rappel();
    if (etat.chargees[annee]) { etat.chargees[annee].push(rappel); return; }
    etat.chargees[annee] = [rappel];
    var s = document.createElement('script');
    s.src = 'data/cartes/' + annee + '.js';
    s.onload = function () { var r = etat.chargees[annee]; delete etat.chargees[annee]; r.forEach(function (f) { f(); }); };
    s.onerror = function () { delete etat.chargees[annee]; };
    document.head.appendChild(s);
  }

  function evenementsProches(a) {
    var res = [];
    HISTOIRE.pays.forEach(function (p) {
      if (etat.filtre && p.id !== etat.filtre) return;
      p.phases.forEach(function (ph, i) {
        (ph.evenements || []).forEach(function (ev, j) {
          if (ev.lieu && Math.abs(ev.annee - a) <= 40) res.push({ ev: ev, pays: p, phase: i, index: j });
        });
      });
    });
    return res;
  }

  function ere(a) {
    var p = HISTOIRE.pays.find(function (x) { return x.id === etat.filtre; });
    if (p) {
      var ph = p.phases.find(function (x) { return a >= x.debut && a < x.fin; }) || p.phases[p.phases.length - 1];
      return p.nom + ' · ' + ph.titre;
    }
    if (a < 500) return 'Antiquité tardive';
    if (a < 1000) return 'Haut Moyen Âge (repère européen)';
    if (a < 1500) return 'Moyen Âge central et tardif (repère européen)';
    if (a < 1800) return 'Époque moderne';
    if (a < 1914) return 'Long XIXe siècle';
    return 'XXe et XXIe siècles';
  }

  function dessiner() {
    var svg = document.getElementById('carte-svg');
    if (!svg) return;
    var ac = anneeCarte(etat.annee);
    document.getElementById('carte-annee').textContent = U.annee(etat.annee);
    document.getElementById('carte-ere').textContent = ere(etat.annee);
    document.getElementById('carte-source').textContent = 'Frontières : état ' + U.annee(ac);
    charger(ac, function () {
      if (anneeCarte(etat.annee) !== ac) return;
      var g = document.getElementById('couche-etats');
      var frag = document.createDocumentFragment();
      HISTOIRE.cartes[ac].forEach(function (f) {
        var p = document.createElementNS(NS, 'path');
        p.setAttribute('d', f.d);
        if (f.n) {
          p.setAttribute('class', 'etat' + (etat.filtre && rattache(f) ? ' choisi' : ''));
          p.setAttribute('fill', teinte(f.s || f.n));
          p.dataset.nom = f.n;
          if (f.s && f.s !== f.n) p.dataset.dep = f.s;
          var idp = paysDeEntite(f);
          if (idp) { p.dataset.pays = idp; p.classList.add('lien'); }
        } else {
          p.setAttribute('class', 'terre');
        }
        frag.appendChild(p);
      });
      g.replaceChildren(frag);
    });
    var m = document.getElementById('couche-marqueurs');
    var fragm = document.createDocumentFragment();
    evenementsProches(etat.annee).forEach(function (o) {
      var xy = U.projeter(o.ev.lieu[0], o.ev.lieu[1]);
      var grp = document.createElementNS(NS, 'g');
      grp.setAttribute('class', 'marqueur');
      grp.setAttribute('transform', 'translate(' + xy[0].toFixed(1) + ' ' + xy[1].toFixed(1) + ')');
      var k = VUE.w / etat.vue.w;
      var halo = document.createElementNS(NS, 'circle'); halo.setAttribute('class', 'halo'); halo.setAttribute('r', 14 / k);
      var pt = document.createElementNS(NS, 'circle'); pt.setAttribute('class', 'point'); pt.setAttribute('r', 5.5 / k);
      grp.appendChild(halo); grp.appendChild(pt);
      grp._evenement = o;
      grp.setAttribute('role', 'link');
      grp.setAttribute('tabindex', '0');
      grp.setAttribute('aria-label', U.annee(o.ev.annee) + ', ' + o.ev.titre + ' : lire l\'explication');
      grp.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); allerEvenement(o); } });
      grp.addEventListener('pointerenter', function (e) { bulle(U.annee(o.ev.annee) + ' · ' + o.ev.titre + ' (' + o.pays.nom + ')\nCliquer pour lire l\'explication', e); });
      grp.addEventListener('pointerleave', function () { bulle(null); });
      fragm.appendChild(grp);
    });
    m.replaceChildren(fragm);
    var r = document.getElementById('curseur-annee');
    if (r && +r.value !== etat.annee) r.value = etat.annee;
    history.replaceState(null, '', '#/carte?annee=' + etat.annee + (etat.filtre ? '&pays=' + etat.filtre : ''));
  }

  function bulle(texte, e) {
    var b = document.getElementById('bulle');
    if (!texte) { b.style.display = 'none'; return; }
    b.textContent = texte; b.style.display = 'block';
    b.style.left = (e.clientX + 14) + 'px'; b.style.top = (e.clientY + 14) + 'px';
  }

  function appliquerVue() {
    var svg = document.getElementById('carte-svg');
    var v = etat.vue;
    svg.setAttribute('viewBox', v.x + ' ' + v.y + ' ' + v.w + ' ' + v.h);
    var k = VUE.w / v.w;
    svg.querySelectorAll('.marqueur .halo').forEach(function (c) { c.setAttribute('r', 14 / k); });
    svg.querySelectorAll('.marqueur .point').forEach(function (c) { c.setAttribute('r', 5.5 / k); });
  }

  function zoomer(f, cx, cy) {
    var v = etat.vue;
    var nw = Math.max(160, Math.min(VUE.w * 1.4, v.w / f));
    var r = nw / v.w;
    if (cx == null) { cx = v.x + v.w / 2; cy = v.y + v.h / 2; }
    v.x = cx - (cx - v.x) * r; v.y = cy - (cy - v.y) * r;
    v.w = nw; v.h = v.h * r;
    appliquerVue();
  }

  function interactions(svg) {
    var depart = null;
    function pointSvg(e) {
      var r = svg.getBoundingClientRect(), v = etat.vue;
      var s = Math.max(v.w / r.width, v.h / r.height);
      var ox = (r.width * s - v.w) / 2, oy = (r.height * s - v.h) / 2;
      return [v.x - ox + (e.clientX - r.left) * s, v.y - oy + (e.clientY - r.top) * s, s];
    }
    svg.addEventListener('wheel', function (e) {
      e.preventDefault();
      var p = pointSvg(e);
      zoomer(e.deltaY < 0 ? 1.18 : 1 / 1.18, p[0], p[1]);
    }, { passive: false });
    svg.addEventListener('pointerdown', function (e) {
      depart = { x: e.clientX, y: e.clientY, vx: etat.vue.x, vy: etat.vue.y, s: pointSvg(e)[2], bouge: false, cible: e.target, id: e.pointerId };
    });
    svg.addEventListener('pointermove', function (e) {
      if (depart) {
        var dx = e.clientX - depart.x, dy = e.clientY - depart.y;
        if (!depart.bouge && Math.abs(dx) + Math.abs(dy) > 5) {
          depart.bouge = true; svg.classList.add('glisse'); bulle(null);
          try { svg.setPointerCapture(depart.id); } catch (err) {}
        }
        if (depart.bouge) {
          etat.vue.x = depart.vx - dx * depart.s; etat.vue.y = depart.vy - dy * depart.s;
          appliquerVue();
          return;
        }
      }
      var t = e.target;
      if (t.classList && t.classList.contains('etat')) {
        var p = t.dataset.pays ? U.paysParId(t.dataset.pays) : null;
        bulle(t.dataset.nom + (t.dataset.dep ? ' (dépend de ' + t.dataset.dep + ')' : '') +
          (p ? '\nCliquer pour lire l\'histoire : ' + p.nom + ' en ' + U.annee(etat.annee) : ''), e);
      } else if (!t.closest('.marqueur')) bulle(null);
    });
    svg.addEventListener('pointerup', function () {
      var d = depart; depart = null; svg.classList.remove('glisse');
      if (!d || d.bouge) return;
      var t = d.cible;
      var m = t.closest && t.closest('.marqueur');
      if (m && m._evenement) { bulle(null); allerEvenement(m._evenement); return; }
      if (t.dataset && t.dataset.pays) { bulle(null); allerPays(t.dataset.pays); }
    });
    svg.addEventListener('pointercancel', function () { depart = null; svg.classList.remove('glisse'); });
    svg.addEventListener('pointerleave', function () { bulle(null); });
  }

  function lecture() {
    var b = document.getElementById('bouton-lecture');
    if (etat.lecture) { clearInterval(etat.lecture); etat.lecture = null; b.textContent = '▶'; b.setAttribute('aria-label', 'Lancer'); return; }
    b.textContent = '❚❚'; b.setAttribute('aria-label', 'Pause');
    if (etat.annee >= 2026) etat.annee = 1;
    etat.lecture = setInterval(function () {
      etat.annee = Math.min(2026, etat.annee + 25);
      dessiner();
      if (etat.annee >= 2026) lecture();
    }, 900);
  }

  function afficher(app, params) {
    etat.annee = Math.max(1, Math.min(2026, parseInt(params.annee || etat.annee || 1, 10) || 1));
    etat.filtre = params.pays || '';
    etat.vue = { x: VUE.x, y: VUE.y, w: VUE.w, h: VUE.h };
    var options = '<option value="">Tous les pays</option>' + HISTOIRE.pays.map(function (p) {
      return '<option value="' + p.id + '"' + (p.id === etat.filtre ? ' selected' : '') + '>' + U.esc(p.nom) + '</option>';
    }).join('');
    var grad = [1, 400, 800, 1200, 1600, 2000].map(function (a) { return '<span style="left:' + ((a - 1) / 2025 * 100).toFixed(2) + '%">' + a + '</span>'; }).join('');
    app.innerHTML =
      '<section class="carte-page">' +
        '<svg id="carte-svg" viewBox="0 -30 2758 2150" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Carte des frontières historiques du monde">' +
          '<g id="couche-etats"></g><g id="couche-continents" aria-hidden="true"><text x="613" y="360">AMÉRIQUE DU NORD</text><text x="919" y="960">AMÉRIQUE DU SUD</text><text x="1494" y="300">EUROPE</text><text x="1532" y="790">AFRIQUE</text><text x="2068" y="340">ASIE</text><text x="2405" y="1090">OCÉANIE</text><text x="1379" y="1620">ANTARCTIQUE</text><text x="1072" y="90">ARCTIQUE</text></g><g id="couche-marqueurs"></g>' +
        '</svg>' +
        '<div class="carte-haut">' +
          '<div><p class="surtitre">Carte interactive</p><div class="carte-annee" id="carte-annee"></div><div class="carte-ere" id="carte-ere"></div></div>' +
          '<div class="carte-zoom"><select id="filtre-pays" class="bouton bouton-gris" aria-label="Filtrer les événements par pays">' + options + '</select>' +
          '<button id="zoom-plus" aria-label="Zoomer">+</button><button id="zoom-moins" aria-label="Dézoomer">−</button><button id="zoom-zero" aria-label="Recentrer">⟲</button></div>' +
        '</div>' +
        '<div class="carte-bas">' +
          '<div class="curseur-ligne"><button id="bouton-lecture" aria-label="Lancer">▶</button>' +
          '<input type="range" id="curseur-annee" min="1" max="2026" step="1" value="' + etat.annee + '" aria-label="Choisir une année"></div>' +
          '<div class="graduations">' + grad + '</div>' +
        '</div>' +
        '<p class="carte-credit"><span id="carte-source"></span>. Données : <a href="https://github.com/aourednik/historical-basemaps" target="_blank" rel="noopener">historical-basemaps</a> (A. Ourednik, GPL-3.0), noms en anglais. Les frontières anciennes sont des approximations. Points verts : événements à ±40 ans, cliquables. En blanc : le pays filtré, colonies comprises.</p>' +
      '</section>';
    var svg = document.getElementById('carte-svg');
    interactions(svg);
    document.getElementById('curseur-annee').addEventListener('input', function (e) { etat.annee = +e.target.value; dessiner(); });
    document.getElementById('bouton-lecture').addEventListener('click', lecture);
    document.getElementById('zoom-plus').addEventListener('click', function () { zoomer(1.4); });
    document.getElementById('zoom-moins').addEventListener('click', function () { zoomer(1 / 1.4); });
    document.getElementById('zoom-zero').addEventListener('click', function () { etat.vue = { x: VUE.x, y: VUE.y, w: VUE.w, h: VUE.h }; appliquerVue(); });
    document.getElementById('filtre-pays').addEventListener('change', function (e) { etat.filtre = e.target.value; dessiner(); });
    dessiner();
  }

  function quitter() {
    if (etat.lecture) { clearInterval(etat.lecture); etat.lecture = null; }
    var b = document.getElementById('bulle'); if (b) b.style.display = 'none';
  }

  return { afficher: afficher, quitter: quitter };
})();
