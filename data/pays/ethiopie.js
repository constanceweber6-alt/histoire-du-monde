HISTOIRE.ajouterPays({
  id: 'ethiopie',
  nom: 'Éthiopie',
  region: 'afrique-est',
  accroche: "Le royaume d'Aksoum, l'un des premiers États chrétiens du monde, l'empire des Salomonides, seul pays africain à avoir battu une armée coloniale à Adoua, puis le pays de Haïlé Sélassié, du Derg et d'Abiy Ahmed.",
  intro: "L'Éthiopie a une histoire écrite de près de deux mille ans, avec sa propre écriture, le guèze, et son propre calendrier. Elle n'a été colonisée que brièvement, par l'Italie fasciste (1936 à 1941), ce qui en a fait un symbole pour tout le continent. Mais c'est aussi un empire bâti par conquêtes, dont les peuples se disputent aujourd'hui encore la place.",
  sources: "Harold Marcus, A History of Ethiopia ; Bahru Zewde, A History of Modern Ethiopia ; Richard Pankhurst, The Ethiopians ; Alex de Waal, Evil Days.",
  phases: [
    {
      titre: "Le royaume d'Aksoum",
      debut: 1, fin: 940,
      chapo: "Aksoum est l'une des grandes puissances du monde antique, entre Rome, la Perse et l'Inde. Il adopte le christianisme au IVe siècle.",
      recit: [
        "Aksoum contrôle le commerce de la mer Rouge par le port d'Adoulis. Ses rois frappent leur propre monnaie et élèvent des stèles monumentales. Le prophète perse Mani le cite au IIIe siècle parmi les quatre grands royaumes du monde.",
        "Vers 330, le roi Ezana se convertit au christianisme. Au VIe siècle, Aksoum intervient au Yémen. En 615, selon la tradition, des compagnons du prophète Mahomet trouvent refuge auprès du roi d'Aksoum. Le royaume décline ensuite, coupé du commerce de la mer Rouge."
      ],
      consensus: [
        "Aksoum était l'un des grands empires commerciaux de l'Antiquité tardive.",
        "Le roi Ezana s'est converti au christianisme vers 330.",
        "Les stèles d'Aksoum comptent parmi les plus grands monolithes jamais dressés."
      ],
      debats: [
        {
          question: "L'Arche d'alliance se trouve-t-elle à Aksoum ?",
          positions: [
            { titre: "Oui, selon la tradition", texte: "Le Kebra Nagast raconte que Ménélik, fils de Salomon et de la reine de Saba, a rapporté l'Arche à Aksoum, où elle serait gardée dans une chapelle.", qui: "Église orthodoxe éthiopienne" },
            { titre: "Une légende", texte: "Le Kebra Nagast date du XIVe siècle et servait à légitimer la dynastie salomonide ; aucun chercheur n'a jamais pu voir l'objet.", qui: "Historiens" }
          ],
          etat: "Pour les historiens, il s'agit d'une tradition religieuse et politique, invérifiable. Pour les fidèles, chaque église éthiopienne garde une réplique de l'Arche, le tabot."
        }
      ],
      moinsConnu: "Un obélisque d'Aksoum, emporté par les Italiens en 1937 et dressé à Rome, a été rendu à l'Éthiopie en 2005 et remonté sur son site d'origine en 2008.",
      evenements: [
        { annee: 100, titre: "Essor du port d'Adoulis", lieu: [15.26, 39.66] },
        { annee: 330, titre: "Conversion du roi Ezana", lieu: [14.13, 38.72] },
        { annee: 525, titre: "Expédition aksoumite au Yémen", lieu: [14.5, 44.0] },
        { annee: 615, titre: "Premier exil des musulmans en Abyssinie", lieu: [14.13, 38.72] }
      ]
    },
    {
      titre: 'Zagwé et Salomonides',
      debut: 940, fin: 1632,
      chapo: "La dynastie zagwé fait creuser les églises de Lalibela. La dynastie salomonide s'impose en 1270, résiste à l'invasion d'Ahmed Gragn et s'allie aux Portugais.",
      recit: [
        "Selon la tradition, la reine Gudit dévaste Aksoum au Xe siècle. La dynastie zagwé règne ensuite ; le roi Lalibela fait creuser dans la roche onze églises monolithes. En 1270, Yekouno Amlak fonde la dynastie salomonide, qui se dit descendante de Salomon.",
        "De 1529 à 1543, l'imam Ahmed ibn Ibrahim, dit Gragn, chef du sultanat d'Adal, conquiert la majeure partie de l'empire. Les Éthiopiens, aidés par des mousquetaires portugais, le tuent en 1543. Les peuples oromos s'installent alors dans une grande partie du pays."
      ],
      consensus: [
        "Les églises de Lalibela ont été creusées sous la dynastie zagwé.",
        "L'invasion d'Ahmed Gragn a failli détruire l'empire chrétien.",
        "Les migrations oromos du XVIe siècle ont transformé le peuplement du pays."
      ],
      debats: [
        {
          question: "Comment raconter l'expansion oromo ?",
          positions: [
            { titre: "Une invasion", texte: "Les chroniques chrétiennes, comme celle du moine Bahrey (1593), décrivent l'arrivée des Oromos comme une invasion de « barbares ».", qui: "Chroniques impériales" },
            { titre: "Un retour", texte: "Les Oromos auraient occupé des terres qui leur appartenaient déjà en partie, avec un système politique sophistiqué, le gadaa.", qui: "Historiens oromos, Mohammed Hassen" }
          ],
          etat: "Les historiens rejettent aujourd'hui le récit de l'invasion barbare. Le gadaa a été inscrit au patrimoine immatériel de l'UNESCO en 2016."
        }
      ],
      moinsConnu: "Le moine éthiopien Tasfa Seyon a fait imprimer à Rome en 1548 le premier Nouveau Testament en guèze. Une communauté éthiopienne vivait au Vatican depuis le XVe siècle.",
      evenements: [
        { annee: 960, titre: "Destruction d'Aksoum attribuée à la reine Gudit", lieu: [14.13, 38.72] },
        { annee: 1200, titre: "Églises de Lalibela", lieu: [12.03, 39.04] },
        { annee: 1270, titre: "Avènement de la dynastie salomonide", lieu: [11.0, 39.5] },
        { annee: 1543, titre: "Mort d'Ahmed Gragn", lieu: [12.2, 37.3] }
      ]
    },
    {
      titre: 'Gondar et l\'ère des princes',
      debut: 1632, fin: 1855,
      chapo: "Les empereurs s'installent à Gondar et rompent avec les jésuites. Au XVIIIe siècle, le pouvoir impérial s'effondre au profit de princes régionaux.",
      recit: [
        "L'empereur Susneyos se convertit au catholicisme sous l'influence des jésuites, ce qui provoque une guerre civile. Son fils Fasilidès rétablit l'Église orthodoxe, expulse les jésuites en 1632 et fonde Gondar, capitale aux châteaux de pierre.",
        "À partir de 1769, l'empereur n'est plus qu'une marionnette : c'est le Zemene Mesafint, « l'ère des princes », où des seigneurs régionaux se disputent le pouvoir pendant près d'un siècle."
      ],
      consensus: [
        "Gondar a été la capitale impériale de 1636 au milieu du XIXe siècle.",
        "La conversion de Susneyos au catholicisme a provoqué une crise grave.",
        "Le Zemene Mesafint a été une période de fragmentation politique."
      ],
      debats: [
        {
          question: "L'ère des princes : anarchie ou fédéralisme de fait ?",
          positions: [
            { titre: "Une anarchie", texte: "Les chroniques décrivent une période de guerres incessantes et de déclin.", qui: "Chroniques impériales, historiographie nationale" },
            { titre: "Une décentralisation", texte: "Les régions ont gagné en autonomie, avec des pouvoirs locaux parfois efficaces, et le commerce s'est maintenu.", qui: "Une partie des historiens actuels" }
          ],
          etat: "Les historiens nuancent l'image d'une pure anarchie, mais la faiblesse du pouvoir central est incontestable."
        }
      ],
      moinsConnu: "Mentewab, impératrice au XVIIIe siècle, gouverna l'Éthiopie comme régente pendant plus de trente ans et fit construire plusieurs palais et églises à Gondar.",
      evenements: [
        { annee: 1632, titre: "Expulsion des jésuites", lieu: [12.6, 37.47] },
        { annee: 1636, titre: "Fondation de Gondar", lieu: [12.6, 37.47] },
        { annee: 1769, titre: "Début de l'ère des princes", lieu: [12.6, 37.47] }
      ]
    },
    {
      titre: "Réunification et victoire d'Adoua",
      debut: 1855, fin: 1936,
      chapo: "Tewodros II, Yohannes IV puis Ménélik II réunifient et agrandissent l'empire. En 1896, l'Éthiopie écrase l'armée italienne à Adoua.",
      recit: [
        "Tewodros II rétablit l'autorité impériale en 1855 ; il se suicide en 1868 face à une expédition britannique. Ménélik II, empereur en 1889, fonde Addis-Abeba et conquiert les régions du sud et de l'ouest, doublant la taille de l'empire.",
        "Le 1er mars 1896, son armée bat les Italiens à Adoua. L'Éthiopie entre à la Société des Nations en 1923. Le ras Tafari devient l'empereur Haïlé Sélassié en 1930. L'esclavage, encore pratiqué, n'est aboli officiellement qu'en 1942."
      ],
      consensus: [
        "La victoire d'Adoua en 1896 est la plus grande défaite d'une armée européenne face à une armée africaine à l'époque coloniale.",
        "Ménélik II a considérablement agrandi l'empire par des conquêtes au sud.",
        "Addis-Abeba a été fondée par Ménélik II et l'impératrice Taytu vers 1886."
      ],
      debats: [
        {
          question: "Les conquêtes de Ménélik : unification ou colonisation africaine ?",
          positions: [
            { titre: "Une unification", texte: "Ménélik a réuni des terres qui avaient fait partie de l'empire et protégé le pays de la colonisation européenne.", qui: "Historiographie nationale amhara" },
            { titre: "Une colonisation interne", texte: "Les peuples du sud, oromos notamment, ont subi des massacres, la confiscation des terres et l'asservissement.", qui: "Nationalistes oromos, une partie des historiens" }
          ],
          etat: "La question divise profondément l'Éthiopie actuelle. Les historiens reconnaissent la violence de ces conquêtes."
        }
      ],
      moinsConnu: "L'impératrice Taytu Betul joua un rôle décisif dans le rejet du traité de Wuchale, dont la version italienne faisait de l'Éthiopie un protectorat, et commanda des troupes à Adoua.",
      evenements: [
        { annee: 1868, titre: "Mort de Tewodros à Magdala", lieu: [11.42, 39.15] },
        { annee: 1886, titre: "Fondation d'Addis-Abeba", lieu: [9.03, 38.74] },
        { annee: 1896, titre: "Bataille d'Adoua", lieu: [14.17, 38.9] },
        { annee: 1930, titre: "Couronnement de Haïlé Sélassié", lieu: [9.03, 38.74] }
      ]
    },
    {
      titre: 'Occupation italienne, Haïlé Sélassié et le Derg',
      debut: 1936, fin: 1991,
      chapo: "L'Italie fasciste occupe le pays, puis Haïlé Sélassié revient. Renversé en 1974, il est remplacé par la dictature marxiste du Derg.",
      recit: [
        "L'Italie de Mussolini envahit l'Éthiopie en 1935 en utilisant des gaz de combat. Haïlé Sélassié en appelle à la Société des Nations. En 1937, après un attentat contre le vice-roi Graziani, des milliers d'habitants d'Addis-Abeba sont massacrés. L'empereur revient en 1941 avec les Britanniques.",
        "En 1974, une junte militaire, le Derg, renverse Haïlé Sélassié. Mengistu Haïlé Mariam mène la « terreur rouge » (1977 et 1978). La famine de 1984 et 1985 fait des centaines de milliers de morts. Le Derg tombe en 1991 face aux rebelles tigréens et érythréens."
      ],
      consensus: [
        "L'Italie a utilisé des armes chimiques en Éthiopie en 1935 et 1936.",
        "La terreur rouge du Derg a fait des dizaines de milliers de victimes.",
        "La famine de 1984 et 1985 a été aggravée par la politique du régime."
      ],
      debats: [
        {
          question: "Haïlé Sélassié : modernisateur ou autocrate ?",
          positions: [
            { titre: "Un modernisateur", texte: "Il a donné une constitution, fondé l'Organisation de l'unité africaine à Addis-Abeba et incarné la résistance au fascisme.", qui: "Admirateurs, mouvement rastafari" },
            { titre: "Un autocrate", texte: "Il a gouverné en monarque absolu et caché la famine du Wollo en 1973, qui a fait des dizaines de milliers de morts.", qui: "Révolutionnaires de 1974, historiens critiques" }
          ],
          etat: "Les historiens reconnaissent son prestige international et l'immobilisme de son régime face aux problèmes du pays."
        }
      ],
      moinsConnu: "Les patriotes éthiopiens, les arbegnoch, ont mené une guérilla pendant toute l'occupation italienne. Des femmes, comme Shewareged Gedle, y ont joué un rôle important.",
      evenements: [
        { annee: 1936, titre: "Prise d'Addis-Abeba par les Italiens", lieu: [9.03, 38.74] },
        { annee: 1937, titre: "Massacre de Yekatit 12", lieu: [9.03, 38.74] },
        { annee: 1963, titre: "Fondation de l'OUA à Addis-Abeba", lieu: [9.03, 38.76] },
        { annee: 1974, titre: "Renversement de Haïlé Sélassié", lieu: [9.03, 38.74] },
        { annee: 1984, titre: "Grande famine", lieu: [13.5, 39.5] }
      ]
    },
    {
      titre: 'Fédéralisme ethnique et guerres',
      debut: 1991, fin: 2026,
      chapo: "Le Front tigréen instaure un fédéralisme ethnique. Abiy Ahmed, prix Nobel de la paix, arrive en 2018, avant la guerre dévastatrice du Tigré.",
      recit: [
        "Meles Zenawi, du Front populaire de libération du Tigré, gouverne de 1991 à 2012. L'Érythrée devient indépendante en 1993 ; la guerre de 1998 à 2000 entre les deux pays fait près de 80 000 morts. L'Éthiopie connaît une forte croissance et construit le Grand barrage de la Renaissance sur le Nil.",
        "Abiy Ahmed, Premier ministre en 2018, fait la paix avec l'Érythrée et reçoit le prix Nobel. De 2020 à 2022, la guerre du Tigré fait peut-être plusieurs centaines de milliers de morts. Des conflits persistent en Amhara et en Oromia. Le Parti de la prospérité d'Abiy remporte largement les élections de juin 2026."
      ],
      consensus: [
        "La guerre du Tigré (2020 à 2022) a été l'un des conflits les plus meurtriers du XXIe siècle.",
        "Le Grand barrage de la Renaissance est le plus grand barrage hydroélectrique d'Afrique.",
        "Abiy Ahmed a reçu le prix Nobel de la paix en 2019."
      ],
      debats: [
        {
          question: "Le fédéralisme ethnique : solution ou problème ?",
          positions: [
            { titre: "Une reconnaissance", texte: "Pour la première fois, les peuples d'Éthiopie ont obtenu le droit à leur langue, leur région et l'autodétermination.", qui: "FPLT, nationalistes oromos" },
            { titre: "Une bombe", texte: "Découper le pays selon les ethnies a figé les identités, attisé les conflits pour la terre et préparé les guerres actuelles.", qui: "Abiy Ahmed, partisans d'une identité éthiopienne unifiée" }
          ],
          etat: "Les politistes restent divisés. Le système a donné des droits réels aux groupes autrefois marginalisés, mais n'a pas empêché les conflits."
        }
      ],
      moinsConnu: "Le Grand barrage de la Renaissance a été financé en grande partie par les Éthiopiens eux-mêmes, par des obligations et des contributions, faute de prêts internationaux. Il a été inauguré en septembre 2025.",
      evenements: [
        { annee: 1993, titre: "Indépendance de l'Érythrée", lieu: [15.33, 38.93] },
        { annee: 2018, titre: "Abiy Ahmed Premier ministre, paix avec l'Érythrée", lieu: [9.03, 38.74] },
        { annee: 2020, titre: "Début de la guerre du Tigré", lieu: [13.5, 39.47] },
        { annee: 2025, titre: "Inauguration du Grand barrage de la Renaissance", lieu: [11.21, 35.09] },
        { annee: 2026, titre: "Victoire du Parti de la prospérité aux élections", lieu: [9.03, 38.74] }
      ]
    }
  ]
});
