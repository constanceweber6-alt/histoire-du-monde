# Zones grises · Histoire du monde

Ce site raconte l'histoire des pays d'Europe, d'Asie, d'Afrique, des Amériques et d'Océanie depuis l'an 1, phase par phase, en montrant ce qui fait consensus, ce qui fait débat et ce qu'on raconte moins. L'idée : en histoire, il y a rarement une seule version des faits, ni d'un côté les bons et de l'autre les méchants.

## Ce que contient le site

- **Carte interactive** : les frontières du monde entier, Antarctique compris, de l'an 1 à aujourd'hui, avec un curseur temporel, une lecture automatique et les événements placés sur la carte. Le filtre par pays surligne ses territoires, colonies comprises.
- **Frise comparée** : les phases de chaque pays côte à côte, filtrables par région.
- **Pages pays** : pour chaque phase, le récit, ce qui fait consensus, les débats (positions opposées puis état actuel de la recherche), ce qu'on raconte moins, les acteurs de la période (plus de 1 100 personnes, connues ou oubliées) et des repères datés.
- **Pages régions** : Europe de l'Ouest, Europe du Sud, Europe de l'Est, Asie de l'Ouest, Asie centrale, Asie de l'Est, Asie du Sud, Asie du Sud-Est, Amérique du Nord et Caraïbes, Amérique du Sud, Afrique du Nord, Afrique de l'Ouest, Afrique de l'Est, Afrique centrale et australe, Océanie, avec un débat transversal par région.

Pays disponibles : France, Royaume-Uni, Allemagne, Pays-Bas, Suède, Italie, Espagne, Grèce, Pologne, Hongrie, Ukraine, Russie, Chine, Japon, Corée, Mongolie, Inde, Pakistan, Afghanistan, Iran, Turquie, Irak, Syrie, Israël et Palestine, Arabie saoudite, Kazakhstan, Ouzbékistan, Birmanie, Thaïlande, Cambodge, Vietnam, Indonésie, Philippines, États-Unis, Brésil, Argentine, Pérou, Colombie, Chili, Venezuela, Mexique, Canada, Cuba, Haïti, Égypte, Maroc, Algérie, Nigeria, Sénégal, Mali, Éthiopie, Kenya, RD Congo, Afrique du Sud, Ghana, Rwanda, Angola, Australie, Nouvelle-Zélande, Bolivie, Équateur, Tanzanie, Fidji, Papouasie-Nouvelle-Guinée, Portugal, Autriche, Roumanie, Irlande, Liban, Arménie, Bangladesh, Tunisie, Côte d'Ivoire, Guatemala, Belgique, Suisse, Tchéquie, Serbie, Danemark, Norvège, Finlande, Soudan, Somalie, Ouganda, Estonie, Lettonie, Lituanie, Slovaquie, Bulgarie, Croatie, Bosnie-Herzégovine, Albanie, Biélorussie, Moldavie, Géorgie, Azerbaïdjan, Jordanie, Yémen, Émirats arabes unis, Qatar, Oman, Koweït, Népal, Sri Lanka, Malaisie, Laos, Taïwan, Singapour, Brunei, Kirghizistan, Tadjikistan, Turkménistan, Bhoutan, Timor oriental, Libye, Cameroun, Madagascar, Zimbabwe, Mozambique, Burkina Faso, Niger, Tchad, Zambie, Soudan du Sud, Paraguay, Uruguay, République dominicaine, Honduras, Nicaragua, Salvador, Costa Rica, Panamá, Jamaïque, Porto Rico, Gabon, Congo, Bénin, Togo, Guinée, Sierra Leone, Liberia, Malawi, Botswana, Namibie, Slovénie, Macédoine du Nord, Monténégro, Kosovo, Islande, Luxembourg, Malte, Chypre, Andorre, Monaco, Érythrée, Djibouti, Burundi, Mauritanie, Gambie, Guinée-Bissau, Cap-Vert, Centrafrique, Guinée équatoriale, Lesotho.

## Publier avec GitHub Pages

Le site est en ligne à l'adresse https://constanceweber6-alt.github.io/histoire-du-monde/ .

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

## Licences et crédits

- Code : licence MIT (voir `LICENSE`).
- Textes historiques : CC BY-SA 4.0.
- Frontières (`data/cartes/`) : dérivées du projet [historical-basemaps](https://github.com/aourednik/historical-basemaps) d'André Ourednik, sous licence GPL-3.0 (voir `data/cartes/LICENSE`). Les frontières anciennes sont des approximations.
- Inspiration graphique : [Projet Humanity](https://humanity.latelier-conceptionweb.com) de L'Atelier.
