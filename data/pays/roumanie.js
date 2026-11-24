HISTOIRE.ajouterPays({
  id: 'roumanie',
  nom: 'Roumanie',
  region: 'europe-est',
  accroche: "La Dacie romaine, les principautés de Valachie et de Moldavie entre Hongrois, Ottomans et Russes, une nation unifiée au XIXe siècle, puis la dictature de Ceaușescu renversée dans le sang en 1989.",
  intro: "La Roumanie est le seul grand pays d'Europe de l'Est à parler une langue latine, entouré de peuples slaves et hongrois. Son histoire a longtemps été écrite autour de la question de ses origines et de son unité, revendiquées par les nationalistes et instrumentalisées par les régimes autoritaires.",
  sources: "Lucian Boia, Histoire et mythe dans la conscience roumaine ; Keith Hitchins, A Concise History of Romania ; Catherine Durandin, Histoire des Roumains ; Rapport Tismăneanu sur le communisme (2006).",
  phases: [
    {
      titre: 'Dacie romaine et grandes migrations',
      debut: 1, fin: 1310,
      chapo: "Trajan conquiert la Dacie en 106. Après le départ des Romains en 271, la région est traversée pendant des siècles par les peuples migrateurs.",
      recit: [
        "Le roi dace Décébale tient tête à Rome avant d'être vaincu par l'empereur Trajan en 106 ; la colonne Trajane, à Rome, raconte cette guerre. La Dacie devient une province riche en or. L'empereur Aurélien l'abandonne en 271.",
        "Goths, Huns, Gépides, Avars, Slaves, Bulgares, Petchénègues et Coumans traversent la région. Au XIe et au XIIe siècle, le royaume de Hongrie conquiert la Transylvanie et y installe des colons saxons."
      ],
      consensus: [
        "La Dacie a été une province romaine de 106 à 271.",
        "Le roumain est une langue issue du latin.",
        "La Transylvanie a été intégrée au royaume de Hongrie au Moyen Âge."
      ],
      debats: [
        {
          question: "Où sont nés les Roumains ?",
          positions: [
            { titre: "La continuité daco-romaine", texte: "Les Roumains descendraient des Daces romanisés restés sur place après 271, en particulier en Transylvanie.", qui: "Historiographie roumaine" },
            { titre: "Une migration du sud", texte: "Les ancêtres des Roumains se seraient formés au sud du Danube et seraient arrivés en Transylvanie après les Hongrois.", qui: "Robert Roesler (1871), historiographie hongroise" }
          ],
          etat: "Faute de sources entre le IVe et le Xe siècle, la question n'est pas tranchée. Elle a été très politisée à cause de la rivalité roumano-hongroise sur la Transylvanie."
        }
      ],
      moinsConnu: "Le trésor de Pietroasele, une vingtaine d'objets en or attribués aux Goths du IVe siècle, a été envoyé à Moscou pendant la Première Guerre mondiale avec le trésor national roumain ; seule une partie est revenue.",
      evenements: [
        { annee: 106, titre: "Conquête de la Dacie par Trajan", lieu: [45.62, 23.31] },
        { annee: 271, titre: "Abandon de la Dacie par Aurélien", lieu: [45.86, 22.9] },
        { annee: 1100, titre: "Conquête hongroise de la Transylvanie", lieu: [46.77, 23.6] }
      ]
    },
    {
      titre: 'Valachie, Moldavie et Transylvanie',
      debut: 1310, fin: 1821,
      chapo: "Les principautés de Valachie et de Moldavie naissent au XIVe siècle et luttent pour leur autonomie face aux Ottomans, tandis que la Transylvanie reste hongroise.",
      recit: [
        "La Valachie (vers 1310) et la Moldavie (vers 1359) deviennent des principautés. Vlad III l'Empaleur combat les Ottomans au XVe siècle ; Étienne le Grand de Moldavie (1457 à 1504) leur résiste. Les deux principautés finissent par payer tribut au sultan, tout en gardant leurs princes.",
        "En 1600, Michel le Brave réunit brièvement la Valachie, la Moldavie et la Transylvanie. Au XVIIIe siècle, les Ottomans confient les principautés à des princes grecs de Constantinople, les Phanariotes."
      ],
      consensus: [
        "La Valachie et la Moldavie sont restées autonomes sous suzeraineté ottomane.",
        "Étienne le Grand a été l'un des principaux adversaires des Ottomans au XVe siècle.",
        "Michel le Brave a uni brièvement les trois régions en 1600."
      ],
      debats: [
        {
          question: "Vlad l'Empaleur : héros ou tyran ?",
          positions: [
            { titre: "Un héros national", texte: "Vlad a défendu la Valachie contre les Ottomans et imposé l'ordre contre les boyards corrompus.", qui: "Mémoire nationale roumaine, régime de Ceaușescu" },
            { titre: "Un tyran sanguinaire", texte: "Les pamphlets allemands de l'époque décrivent des milliers d'empalements, y compris de civils et de marchands saxons.", qui: "Sources allemandes du XVe siècle" }
          ],
          etat: "Les historiens reconnaissent sa cruauté réelle, amplifiée par la propagande de l'époque, puis par la légende de Dracula créée par Bram Stoker en 1897."
        }
      ],
      moinsConnu: "Les monastères peints de Bucovine, aux fresques extérieures colorées du XVe et du XVIe siècle, sont inscrits au patrimoine mondial.",
      evenements: [
        { annee: 1330, titre: "Bataille de Posada, indépendance de la Valachie", lieu: [45.3, 24.1] },
        { annee: 1462, titre: "Vlad l'Empaleur contre les Ottomans", lieu: [44.93, 25.45] },
        { annee: 1475, titre: "Victoire d'Étienne le Grand à Vaslui", lieu: [46.64, 27.73] },
        { annee: 1600, titre: "Union de Michel le Brave", lieu: [46.07, 23.58] }
      ]
    },
    {
      titre: 'Naissance de la Roumanie',
      debut: 1821, fin: 1918,
      chapo: "La Valachie et la Moldavie s'unissent en 1859, deviennent indépendantes en 1878, puis réalisent la « Grande Roumanie » en 1918.",
      recit: [
        "Le soulèvement de Tudor Vladimirescu (1821) met fin au règne des Phanariotes. En 1859, les deux principautés élisent le même prince, Alexandru Ioan Cuza : c'est la naissance de la Roumanie. Cuza abolit le servage avant d'être renversé ; Carol de Hohenzollern lui succède.",
        "La Roumanie devient indépendante en 1878. La jacquerie de 1907 est réprimée dans le sang. Entrée en guerre en 1916 du côté de l'Entente, elle obtient en 1918 la Transylvanie, la Bessarabie et la Bucovine."
      ],
      consensus: [
        "L'union de 1859 est l'acte fondateur de la Roumanie moderne.",
        "La Roumanie a obtenu son indépendance en 1878.",
        "La révolte paysanne de 1907 a fait des milliers de morts."
      ],
      debats: [
        {
          question: "La Grande Union de 1918 : volonté populaire ou conquête ?",
          positions: [
            { titre: "Une volonté populaire", texte: "Les assemblées de Transylvanie, de Bessarabie et de Bucovine ont voté le rattachement à la Roumanie.", qui: "Historiographie roumaine" },
            { titre: "Un rattachement contesté", texte: "Les Hongrois, les Ukrainiens et une partie des minorités n'ont pas été consultés et sont devenus des minorités.", qui: "Historiographie hongroise, ukrainienne, soviétique" }
          ],
          etat: "Le 1er décembre, jour de l'union d'Alba Iulia, est la fête nationale roumaine. Les historiens soulignent la légitimité populaire roumaine et l'exclusion des minorités."
        }
      ],
      moinsConnu: "La Roumanie n'a accordé la citoyenneté à la plupart de ses Juifs qu'en 1923, malgré les obligations imposées par le traité de Berlin en 1878.",
      evenements: [
        { annee: 1821, titre: "Soulèvement de Tudor Vladimirescu", lieu: [44.43, 26.1] },
        { annee: 1859, titre: "Union des principautés", lieu: [47.16, 27.59] },
        { annee: 1877, titre: "Guerre d'indépendance", lieu: [43.42, 24.6] },
        { annee: 1907, titre: "Grande jacquerie", lieu: [47.75, 26.67] },
        { annee: 1918, titre: "Grande Union à Alba Iulia", lieu: [46.07, 23.58] }
      ]
    },
    {
      titre: 'La Grande Roumanie et la guerre',
      debut: 1918, fin: 1947,
      chapo: "La Roumanie agrandie est minée par l'antisémitisme de la Garde de fer. Sous le maréchal Antonescu, allié d'Hitler, elle participe à la Shoah.",
      recit: [
        "Le mouvement fasciste de la Garde de fer, mené par Corneliu Codreanu, grandit dans les années 1930. Le roi Carol II instaure une dictature en 1938. En 1940, la Roumanie perd la Bessarabie au profit de l'URSS et le nord de la Transylvanie au profit de la Hongrie.",
        "Le maréchal Ion Antonescu prend le pouvoir et s'allie à l'Allemagne. Les Roumains massacrent les Juifs de Iași (1941) et déportent les Juifs et les Roms de Bessarabie et de Bucovine en Transnistrie. Entre 280 000 et 380 000 Juifs meurent. En août 1944, la Roumanie change de camp ; les communistes prennent le pouvoir avec l'appui soviétique."
      ],
      consensus: [
        "Le régime d'Antonescu a été responsable de la mort de centaines de milliers de Juifs.",
        "La Roumanie a changé de camp le 23 août 1944.",
        "Le roi Michel a été contraint d'abdiquer en 1947."
      ],
      debats: [
        {
          question: "La Roumanie a-t-elle reconnu son rôle dans la Shoah ?",
          positions: [
            { titre: "Un long déni", texte: "Pendant des décennies, le communisme puis une partie des nationalistes ont nié ou minimisé la responsabilité roumaine.", qui: "Historiens, associations juives" },
            { titre: "Une reconnaissance officielle", texte: "Le rapport de la commission présidée par Elie Wiesel (2004) a établi les faits, et l'État les a reconnus.", qui: "Commission Wiesel, présidence roumaine" }
          ],
          etat: "Depuis 2004, la responsabilité de l'État roumain est officiellement reconnue. Le négationnisme et le culte d'Antonescu restent présents à l'extrême droite."
        }
      ],
      moinsConnu: "Au moins 11 000 Roms roumains sont morts après leur déportation en Transnistrie. Ce génocide, longtemps ignoré, n'a été reconnu officiellement qu'au début des années 2000.",
      evenements: [
        { annee: 1938, titre: "Dictature royale de Carol II", lieu: [44.43, 26.1] },
        { annee: 1940, titre: "Pertes territoriales et prise de pouvoir d'Antonescu", lieu: [44.43, 26.1] },
        { annee: 1941, titre: "Pogrom de Iași", lieu: [47.16, 27.59] },
        { annee: 1944, titre: "Changement de camp du 23 août", lieu: [44.43, 26.1] }
      ]
    },
    {
      titre: 'Le communisme et Ceaușescu',
      debut: 1947, fin: 1989,
      chapo: "La République populaire est l'une des dictatures les plus dures du bloc soviétique. Nicolae Ceaușescu impose un culte de la personnalité délirant avant d'être renversé et exécuté en 1989.",
      recit: [
        "Le régime emprisonne des centaines de milliers d'opposants ; à la prison de Pitești, les détenus sont forcés de se torturer entre eux. Nicolae Ceaușescu, au pouvoir en 1965, condamne l'invasion de la Tchécoslovaquie (1968) et devient populaire en Occident.",
        "Dans les années 1980, pour rembourser la dette, il impose des privations extrêmes : rationnement, froid, coupures d'électricité. L'interdiction de l'avortement provoque des milliers de morts de femmes et remplit des orphelinats sordides. En décembre 1989, la révolte de Timișoara s'étend à Bucarest ; Ceaușescu et sa femme sont exécutés le 25 décembre."
      ],
      consensus: [
        "Le régime communiste roumain a été l'un des plus répressifs d'Europe de l'Est.",
        "Le décret de 1966 interdisant l'avortement a eu des conséquences dramatiques.",
        "La révolution de 1989 a été la seule révolution violente du bloc de l'Est."
      ],
      debats: [
        {
          question: "1989 : révolution ou coup d'État ?",
          positions: [
            { titre: "Une révolution populaire", texte: "Le soulèvement de Timișoara et de Bucarest a été spontané, et des centaines de personnes sont mortes pour la liberté.", qui: "Mémoire des révolutionnaires" },
            { titre: "Un coup d'État confisqué", texte: "Une partie de l'appareil communiste, autour d'Ion Iliescu, aurait profité de la révolte pour prendre le pouvoir ; la plupart des morts sont survenues après la fuite de Ceaușescu.", qui: "Une partie des historiens et des journalistes" }
          ],
          etat: "Le débat reste ouvert. Le procès sur les crimes de la révolution, visant notamment Iliescu, n'a jamais abouti à une condamnation."
        }
      ],
      moinsConnu: "Le Palais du Parlement, construit sous Ceaușescu à Bucarest sur un quartier rasé, est l'un des plus grands bâtiments administratifs du monde.",
      evenements: [
        { annee: 1949, titre: "Expérience de la prison de Pitești", lieu: [44.86, 24.87] },
        { annee: 1966, titre: "Interdiction de l'avortement", lieu: [44.43, 26.1] },
        { annee: 1968, titre: "Ceaușescu condamne l'invasion de Prague", lieu: [44.43, 26.1] },
        { annee: 1989, titre: "Révolution et exécution des Ceaușescu", lieu: [45.75, 21.23] }
      ]
    },
    {
      titre: 'Démocratie et Europe',
      debut: 1989, fin: 2026,
      chapo: "La Roumanie devient une démocratie, entre dans l'OTAN et l'Union européenne, lutte contre la corruption et traverse en 2024 et 2025 une crise électorale inédite.",
      recit: [
        "Ion Iliescu fait appel aux mineurs pour réprimer les manifestants en 1990. La transition économique est difficile ; des millions de Roumains émigrent. Le pays entre dans l'OTAN en 2004 et l'Union européenne en 2007. La lutte anticorruption menée par Laura Codruța Kövesi marque les années 2010.",
        "En décembre 2024, la Cour constitutionnelle annule le premier tour de la présidentielle, remporté par le candidat d'extrême droite Călin Georgescu, en raison d'une campagne massive sur les réseaux sociaux soupçonnée d'ingérence russe. En mai 2025, le maire centriste de Bucarest, Nicușor Dan, est élu président face au nationaliste George Simion."
      ],
      consensus: [
        "La Roumanie a rejoint l'OTAN en 2004 et l'Union européenne en 2007.",
        "Plusieurs millions de Roumains vivent à l'étranger.",
        "La présidentielle de 2024 a été annulée par la Cour constitutionnelle."
      ],
      debats: [
        {
          question: "L'annulation de l'élection de 2024 : protection ou atteinte à la démocratie ?",
          positions: [
            { titre: "Une protection", texte: "Une campagne de manipulation massive, soupçonnée d'être orchestrée par la Russie, a faussé le vote ; l'annuler protégeait la démocratie.", qui: "Cour constitutionnelle, institutions européennes" },
            { titre: "Une atteinte", texte: "Annuler un vote sans preuves publiques solides aurait privé les électeurs de leur choix.", qui: "Extrême droite roumaine, une partie de l'administration américaine" }
          ],
          etat: "Le précédent reste très discuté en Europe. Le nouveau scrutin de 2025 a été jugé régulier."
        }
      ],
      moinsConnu: "La Roumanie possède l'un des réseaux Internet fixes les plus rapides du monde, développé dans les années 2000 par de petits réseaux de quartier.",
      evenements: [
        { annee: 1990, titre: "Minériade de Bucarest", lieu: [44.43, 26.1] },
        { annee: 2007, titre: "Entrée dans l'Union européenne", lieu: [44.43, 26.1] },
        { annee: 2015, titre: "Incendie du club Colectiv", lieu: [44.42, 26.11] },
        { annee: 2024, titre: "Annulation de la présidentielle", lieu: [44.43, 26.1] },
        { annee: 2025, titre: "Élection de Nicușor Dan", lieu: [44.43, 26.1] }
      ]
    }
  ]
});
