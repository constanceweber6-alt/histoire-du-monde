HISTOIRE.ajouterPays({
  id: 'belgique',
  nom: 'Belgique',
  region: 'europe-ouest',
  accroche: "Un carrefour de l'Europe, des riches villes flamandes du Moyen Âge aux Pays-Bas des Habsbourg, devenu un royaume indépendant en 1830, puissance industrielle et coloniale, puis un État fédéral partagé entre Flamands et francophones.",
  intro: "La Belgique est un pays jeune, né en 1830, sur un territoire très ancien, traversé par la frontière entre langues romanes et germaniques. Champ de bataille de l'Europe, de Waterloo à Ypres, elle a aussi été l'un des berceaux de la révolution industrielle et la puissance coloniale du Congo. Aujourd'hui, elle accueille les institutions européennes.",
  sources: "Henri Pirenne, Histoire de Belgique ; Els Witte, Jan Craeybeckx et Alain Meynen, Histoire politique de la Belgique ; Marc Reynebeau, Histoire belge.",
  phases: [
    {
      titre: 'Gaule Belgique et Francs',
      debut: 1, fin: 843,
      chapo: "La province romaine de Gaule Belgique est envahie par les Francs, dont la dynastie mérovingienne naît à Tournai.",
      recit: [
        "Les tribus belges, que César disait « les plus braves de tous les Gaulois », sont soumises par Rome. Tongres et Tournai deviennent des villes romaines. Au IVe et au Ve siècle, les Francs s'installent dans le nord.",
        "Childéric Ier, roi franc, est enterré à Tournai vers 481 ; son fils Clovis fonde le royaume franc. Sous les Carolingiens, la région est au cœur de l'empire : Charlemagne serait né dans la région de Liège."
      ],
      consensus: [
        "Jules César a conquis les peuples belges au Ier siècle av. J.-C.",
        "La tombe du roi franc Childéric a été découverte à Tournai en 1653.",
        "La frontière linguistique entre parlers romans et germaniques remonte en partie à cette époque."
      ],
      debats: [
        {
          question: "Les Belges de César sont-ils les ancêtres des Belges ?",
          positions: [
            { titre: "Une continuité", texte: "Le nationalisme belge du XIXe siècle a fait des Belges de César les ancêtres de la nation, avec Ambiorix comme héros.", qui: "Historiographie nationale du XIXe siècle" },
            { titre: "Une construction", texte: "Les peuples de César n'ont aucun lien direct avec l'État belge créé en 1830, dont le nom a été choisi par référence à l'Antiquité.", qui: "Historiens actuels" }
          ],
          etat: "Les historiens voient dans ce lien une construction de l'identité nationale au XIXe siècle."
        }
      ],
      moinsConnu: "La statue d'Ambiorix, chef des Éburons qui massacra une légion romaine en 54 av. J.-C., a été érigée à Tongres en 1866 pour donner un héros ancien à la jeune Belgique.",
      evenements: [
        { annee: 100, titre: "Tongres, cité romaine", lieu: [50.78, 5.46] },
        { annee: 481, titre: "Tombe de Childéric à Tournai", lieu: [50.61, 3.39] },
        { annee: 800, titre: "Région au cœur de l'empire carolingien", lieu: [50.63, 5.57] }
      ]
    },
    {
      titre: 'Comtés, principautés et villes flamandes',
      debut: 843, fin: 1384,
      chapo: "Le territoire est partagé entre le comté de Flandre, vassal de la France, et des principautés relevant de l'Empire. Les villes flamandes deviennent parmi les plus riches d'Europe.",
      recit: [
        "Le traité de Verdun (843) place la Flandre dans le royaume de France et le reste dans la Lotharingie, puis l'Empire. La principauté épiscopale de Liège, le Brabant, le Hainaut se forment. Bruges, Gand et Ypres prospèrent grâce au drap fabriqué avec la laine anglaise.",
        "En 1302, à la bataille des Éperons d'or, près de Courtrai, les milices flamandes écrasent la chevalerie française. Bruges devient un grand port de commerce international, siège de la Hanse et des banquiers italiens."
      ],
      consensus: [
        "La Flandre était vassale du roi de France, alors que la plupart des autres principautés relevaient de l'Empire.",
        "Les villes flamandes étaient parmi les plus riches et peuplées d'Europe au XIIIe siècle.",
        "La bataille de Courtrai (1302) a vu des milices urbaines battre une armée de chevaliers."
      ],
      debats: [
        {
          question: "La bataille des Éperons d'or : naissance de la nation flamande ?",
          positions: [
            { titre: "Un mythe fondateur flamand", texte: "La victoire de 1302 symboliserait la résistance flamande à la domination française ; le 11 juillet est la fête de la Flandre.", qui: "Mouvement flamand, roman « Le Lion de Flandre » (1838)" },
            { titre: "Une révolte sociale", texte: "Il s'agissait d'un soulèvement des artisans contre les patriciens alliés au roi, sans conscience nationale moderne.", qui: "Historiens" }
          ],
          etat: "Les historiens y voient une révolte sociale et politique, devenue un symbole national au XIXe siècle."
        }
      ],
      moinsConnu: "Les béguinages, communautés de femmes pieuses vivant sans vœux perpétuels, sont nés dans la région au XIIIe siècle. Treize d'entre eux sont inscrits au patrimoine mondial.",
      evenements: [
        { annee: 843, titre: "Traité de Verdun", lieu: [49.16, 5.38] },
        { annee: 980, titre: "Principauté de Liège", lieu: [50.63, 5.57] },
        { annee: 1302, titre: "Bataille des Éperons d'or", lieu: [50.83, 3.26] },
        { annee: 1340, titre: "Bruges, grand port international", lieu: [51.21, 3.22] }
      ]
    },
    {
      titre: 'Pays-Bas bourguignons, espagnols et autrichiens',
      debut: 1384, fin: 1794,
      chapo: "Les ducs de Bourgogne réunissent les principautés, puis les Habsbourg en héritent. Après la révolte du XVIe siècle, le sud reste catholique sous l'Espagne, puis l'Autriche.",
      recit: [
        "Les ducs de Bourgogne réunissent la plupart des principautés à partir de 1384 ; leur cour à Bruxelles est l'une des plus brillantes d'Europe. Les primitifs flamands, comme Van Eyck et Memling, révolutionnent la peinture. Charles Quint naît à Gand en 1500.",
        "La révolte contre Philippe II (1568) coupe les Pays-Bas en deux : le nord devient les Provinces-Unies protestantes, le sud reste espagnol et catholique. Anvers, qui était la métropole commerciale de l'Europe, décline. En 1714, les Pays-Bas du Sud passent à l'Autriche."
      ],
      consensus: [
        "Les ducs de Bourgogne ont unifié les principautés des Pays-Bas.",
        "La révolte du XVIe siècle a séparé le nord protestant du sud catholique.",
        "Anvers a été au XVIe siècle la principale place commerciale d'Europe."
      ],
      debats: [
        {
          question: "La séparation de 1585 a-t-elle créé la Belgique ?",
          positions: [
            { titre: "Une préfiguration", texte: "La séparation entre nord et sud aurait dessiné la future frontière belge et une identité catholique propre.", qui: "Henri Pirenne" },
            { titre: "Un hasard militaire", texte: "La frontière correspond à la ligne où se sont arrêtées les armées espagnoles, et non à une identité préexistante.", qui: "Pieter Geyl, historiens néerlandais" }
          ],
          etat: "La thèse de Pirenne d'une Belgique en germe depuis le Moyen Âge est aujourd'hui largement critiquée."
        }
      ],
      moinsConnu: "Le peintre Pieter Bruegel l'Ancien a représenté dans « Le Massacre des Innocents » des soldats espagnols attaquant un village flamand, une allusion à la répression de l'époque.",
      evenements: [
        { annee: 1432, titre: "Retable de l'Agneau mystique des Van Eyck", lieu: [51.05, 3.72] },
        { annee: 1500, titre: "Naissance de Charles Quint à Gand", lieu: [51.05, 3.72] },
        { annee: 1585, titre: "Chute d'Anvers", lieu: [51.22, 4.4] },
        { annee: 1714, titre: "Passage à l'Autriche", lieu: [50.85, 4.35] }
      ]
    },
    {
      titre: 'Révolution et jeune royaume',
      debut: 1794, fin: 1914,
      chapo: "Annexée par la France, puis unie aux Pays-Bas, la Belgique devient indépendante en 1830. Elle s'industrialise très vite et Léopold II s'empare du Congo.",
      recit: [
        "La France annexe la région en 1795. Napoléon est battu à Waterloo en 1815. Le congrès de Vienne unit la Belgique aux Pays-Bas. En août 1830, une révolution éclate à Bruxelles ; la Belgique devient un royaume indépendant avec Léopold Ier.",
        "La Belgique devient la deuxième puissance industrielle au monde après la Grande-Bretagne, grâce au charbon et à la sidérurgie de Wallonie. La pauvreté ouvrière provoque des grèves sanglantes en 1886. Léopold II se fait attribuer le Congo à titre personnel en 1885, avant de le céder à la Belgique en 1908."
      ],
      consensus: [
        "La Belgique est devenue indépendante en 1830.",
        "Elle a été l'une des premières nations industrialisées du continent européen.",
        "Léopold II a possédé le Congo à titre personnel de 1885 à 1908."
      ],
      debats: [
        {
          question: "La révolution de 1830 : nationale ou sociale ?",
          positions: [
            { titre: "Une révolution nationale", texte: "Catholiques et libéraux unis ont rejeté la domination du roi des Pays-Bas.", qui: "Historiographie nationale belge" },
            { titre: "Une révolte bourgeoise", texte: "Les élites francophones ont confisqué une révolte populaire, et le nouvel État a exclu la majorité, flamande et ouvrière, du vote.", qui: "Historiens flamands, historiens sociaux" }
          ],
          etat: "Les historiens soulignent la dimension bourgeoise et francophone du nouvel État, qui a nourri le mouvement flamand."
        }
      ],
      moinsConnu: "Le premier chemin de fer du continent européen, entre Bruxelles et Malines, a été inauguré en 1835.",
      evenements: [
        { annee: 1815, titre: "Bataille de Waterloo", lieu: [50.68, 4.41] },
        { annee: 1830, titre: "Révolution belge", lieu: [50.85, 4.35] },
        { annee: 1835, titre: "Premier chemin de fer du continent", lieu: [51.03, 4.48] },
        { annee: 1886, titre: "Grèves ouvrières de Wallonie", lieu: [50.41, 4.44] }
      ]
    },
    {
      titre: 'Guerres mondiales et colonie',
      debut: 1914, fin: 1960,
      chapo: "La Belgique neutre est envahie deux fois par l'Allemagne. Elle garde le Congo jusqu'en 1960.",
      recit: [
        "En août 1914, l'Allemagne viole la neutralité belge ; des milliers de civils sont tués lors des « atrocités allemandes ». Le front s'immobilise sur l'Yser ; Ypres est rasée. Le suffrage universel masculin est adopté en 1919.",
        "En 1940, la Belgique est de nouveau envahie. Le roi Léopold III reste dans le pays occupé, tandis que le gouvernement s'exile à Londres. Après la guerre, la « question royale » divise le pays ; Léopold III abdique en 1951. Le Congo devient indépendant en 1960."
      ],
      consensus: [
        "La Belgique a été envahie par l'Allemagne en 1914 et en 1940.",
        "La « question royale » a profondément divisé le pays après 1945.",
        "Le Congo belge est devenu indépendant le 30 juin 1960."
      ],
      debats: [
        {
          question: "Léopold III : traître ou roi resté avec son peuple ?",
          positions: [
            { titre: "Un roi resté auprès des siens", texte: "En capitulant en 1940 et en restant en Belgique, le roi aurait protégé la population.", qui: "Partisans du roi, majoritaires en Flandre" },
            { titre: "Une attitude ambiguë", texte: "Il a rencontré Hitler en 1940 et refusé de suivre le gouvernement à Londres.", qui: "Opposants, majoritaires en Wallonie et à Bruxelles" }
          ],
          etat: "La consultation de 1950 a donné 57 % au roi, mais avec une forte opposition en Wallonie, ce qui a mené à son abdication."
        }
      ],
      moinsConnu: "Des milliers de Belges ont participé à la collaboration, en Flandre comme en Wallonie, et des dizaines de milliers ont été jugés après la guerre.",
      evenements: [
        { annee: 1914, titre: "Invasion allemande, bataille de l'Yser", lieu: [51.13, 2.77] },
        { annee: 1917, titre: "Bataille de Passchendaele", lieu: [50.9, 3.02] },
        { annee: 1940, titre: "Capitulation de Léopold III", lieu: [50.85, 4.35] },
        { annee: 1950, titre: "Question royale", lieu: [50.85, 4.35] },
        { annee: 1960, titre: "Indépendance du Congo", lieu: [-4.32, 15.31] }
      ]
    },
    {
      titre: 'L\'État fédéral',
      debut: 1960, fin: 2026,
      chapo: "La Belgique se transforme en État fédéral pour apaiser les tensions entre Flamands et francophones, et Bruxelles devient la capitale de l'Europe.",
      recit: [
        "Les réformes de l'État, de 1970 à 2011, transforment la Belgique unitaire en fédération de régions (Flandre, Wallonie, Bruxelles) et de communautés linguistiques. En 1968, l'université de Louvain est coupée en deux. La Flandre devient plus riche que la Wallonie, frappée par la désindustrialisation.",
        "L'affaire Dutroux (1996) provoque une crise de confiance. Le pays reste 541 jours sans gouvernement en 2010 et 2011. Les attentats du 22 mars 2016 font 32 morts à Bruxelles. En 2025, le nationaliste flamand Bart De Wever devient Premier ministre."
      ],
      consensus: [
        "La Belgique est un État fédéral depuis 1993.",
        "Bruxelles accueille les principales institutions de l'Union européenne et l'OTAN.",
        "Le pays a connu une très longue période sans gouvernement en 2010 et 2011."
      ],
      debats: [
        {
          question: "La Belgique va-t-elle se séparer ?",
          positions: [
            { titre: "Une évaporation lente", texte: "Chaque réforme transfère davantage de pouvoirs aux régions ; la Belgique finirait par s'« évaporer ».", qui: "Nationalistes flamands" },
            { titre: "Un compromis durable", texte: "Bruxelles, la dette et la monarchie rendent la séparation très difficile ; une majorité de Belges ne la souhaite pas.", qui: "Partis fédéralistes, sondages" }
          ],
          etat: "Les sondages montrent une minorité favorable à l'indépendance flamande, mais les partis nationalistes pèsent lourd en Flandre."
        }
      ],
      moinsConnu: "La Belgique compte trois langues officielles : le néerlandais, le français et l'allemand, parlé par environ 80 000 personnes dans l'est du pays.",
      evenements: [
        { annee: 1968, titre: "Scission de l'université de Louvain", lieu: [50.88, 4.7] },
        { annee: 1993, titre: "La Belgique devient un État fédéral", lieu: [50.85, 4.35] },
        { annee: 2011, titre: "Fin de 541 jours sans gouvernement", lieu: [50.85, 4.35] },
        { annee: 2016, titre: "Attentats de Bruxelles", lieu: [50.84, 4.37] },
        { annee: 2025, titre: "Bart De Wever Premier ministre", lieu: [50.85, 4.35] }
      ]
    }
  ]
});
