# Zones grises · Histoire du monde

Ce site raconte l'histoire des pays d'Europe, d'Asie, d'Afrique, des Amériques et d'Océanie depuis l'an 1, phase par phase, en montrant ce qui fait consensus, ce qui fait débat et ce qu'on raconte moins. L'idée : en histoire, il y a rarement une seule version des faits, ni d'un côté les bons et de l'autre les méchants.

## Ce que contient le site

- **Carte interactive** : les frontières du monde entier, Antarctique compris, de l'an 1 à aujourd'hui, avec un curseur temporel, une lecture automatique et les événements placés sur la carte. Le filtre par pays surligne ses territoires, colonies comprises.
- **Frise comparée** : les phases de chaque pays côte à côte, filtrables par région.
- **Pages pays** : pour chaque phase, le récit, ce qui fait consensus, les débats (positions opposées puis état actuel de la recherche), ce qu'on raconte moins, les acteurs de la période (plus de 1 100 personnes, connues ou oubliées) et des repères datés.
- **Pages régions** : Europe de l'Ouest, Europe du Sud, Europe de l'Est, Asie de l'Ouest, Asie centrale, Asie de l'Est, Asie du Sud, Asie du Sud-Est, Amérique du Nord et Caraïbes, Amérique du Sud, Afrique du Nord, Afrique de l'Ouest, Afrique de l'Est, Afrique centrale et australe, Océanie, avec un débat transversal par région.

Pays disponibles : France, Royaume-Uni, Allemagne, Pays-Bas, Suède, Italie, Espagne, Grèce, Pologne, Hongrie, Ukraine, Russie, Chine, Japon, Corée, Mongolie, Inde, Pakistan, Afghanistan, Iran, Turquie, Irak, Syrie, Israël et Palestine, Arabie saoudite, Kazakhstan, Ouzbékistan, Birmanie, Thaïlande, Cambodge, Vietnam, Indonésie, Philippines, États-Unis, Brésil, Argentine, Pérou, Colombie, Chili, Venezuela, Mexique, Canada, Cuba, Haïti, Égypte, Maroc, Algérie, Nigeria, Sénégal, Mali, Éthiopie, Kenya, RD Congo, Afrique du Sud, Ghana, Rwanda, Angola, Australie, Nouvelle-Zélande, Bolivie, Équateur, Tanzanie, Fidji, Papouasie-Nouvelle-Guinée.

## Lancer le site en local

Le site est entièrement statique, sans dépendance ni étape de compilation. Il suffit d'ouvrir `index.html` dans un navigateur, ou de lancer un petit serveur :

```bash
python3 -m http.server 8000
```

puis d'ouvrir http://localhost:8000.

## Publier avec GitHub Pages

Dans les réglages du dépôt : **Settings > Pages > Build and deployment**, source **Deploy from a branch**, branche `main`, dossier `/ (root)`. Le site sera en ligne à l'adresse `https://constanceweber6-alt.github.io/histoire-du-monde/`.

## Ajouter un pays

1. Copier un fichier de `data/pays/` (par exemple `japon.js`) et le renommer.
2. Remplir les champs : `id`, `nom`, `region`, `accroche`, `intro`, puis la liste des `phases`. Chaque phase contient `titre`, `debut`, `fin`, `chapo`, `recit`, `consensus`, `debats`, `moinsConnu` et `evenements`. Les événements avec un `lieu` (`[latitude, longitude]`) apparaissent sur la carte.
3. Ajouter une ligne `<script src="data/pays/nouveau-pays.js"></script>` dans `index.html`.
4. Pour que le filtre de la carte surligne le pays, ajouter ses noms d'entités dans `CORRESPONDANCES` (fichier `js/carte.js`).

## Structure

```
index.html            page unique, routage par #/
css/style.css         styles
js/socle.js           espace de noms et utilitaires
js/app.js             routeur, accueil, pages pays, régions, méthode
js/carte.js           carte interactive (SVG, sans bibliothèque)
js/frise.js           frise comparée
js/particules.js      animation des en-têtes
data/regions.js       régions et débats transversaux
data/pays/*.js        contenu des pays
data/acteurs*.js      acteurs de chaque phase ([nom, dates, rôle])
data/cartes/*.js      frontières simplifiées par année
tools/cartes.py       script de génération des cartes
```

Pour régénérer les cartes à partir des données d'origine :

```bash
git clone --depth 1 https://github.com/aourednik/historical-basemaps.git
python3 tools/cartes.py historical-basemaps/geojson data/cartes
```

## Licences et crédits

- Code : licence MIT (voir `LICENSE`).
- Textes historiques : CC BY-SA 4.0.
- Frontières (`data/cartes/`) : dérivées du projet [historical-basemaps](https://github.com/aourednik/historical-basemaps) d'André Ourednik, sous licence GPL-3.0 (voir `data/cartes/LICENSE`). Les frontières anciennes sont des approximations.
- Inspiration graphique : [Projet Humanity](https://humanity.latelier-conceptionweb.com) de L'Atelier.
