HISTOIRE.ajouterPays({
  id: 'turquie',
  nom: 'Turquie',
  region: 'asie-ouest',
  accroche: "Une terre grecque, romaine et arménienne devenue turque, cœur de l'Empire ottoman puis république fondée par Atatürk.",
  intro: "La Turquie actuelle occupe l'Anatolie et la Thrace. Pendant mille ans, ce territoire a été romain et byzantin avant d'être turc. L'histoire du pays est donc aussi celle des Grecs, des Arméniens, des Kurdes et de bien d'autres.",
  sources: "Hamit Bozarslan, Histoire de la Turquie ; Caroline Finkel, Osman's Dream ; Raymond Kévorkian, Le Génocide des Arméniens.",
  phases: [
    {
      titre: "L'Anatolie romaine et byzantine",
      debut: 1, fin: 1071,
      chapo: "Pendant un millénaire, l'Anatolie est l'un des cœurs de l'Empire romain puis byzantin, et Constantinople sa capitale.",
      recit: [
        "En l'an 1, l'Anatolie est divisée en provinces romaines riches et urbanisées : Éphèse, Pergame, Antioche. Le christianisme s'y diffuse très tôt, avec les voyages de Paul et les communautés d'Asie mineure. En 330, Constantin fonde Constantinople sur le site de Byzance.",
        "Après la chute de Rome en Occident, l'Empire romain d'Orient, appelé plus tard byzantin, continue. Justinien fait construire Sainte-Sophie (537). L'Anatolie résiste aux Perses puis aux Arabes, qui assiègent Constantinople en 674 et 717. Au XIe siècle, les Turcs seldjoukides arrivent d'Iran."
      ],
      consensus: [
        "L'Anatolie a été l'une des régions les plus riches et les plus christianisées de l'Empire romain.",
        "Les grands conciles chrétiens de Nicée (325) et Chalcédoine (451) ont eu lieu en Anatolie.",
        "Constantinople a été pendant des siècles la plus grande ville chrétienne du monde."
      ],
      debats: [
        {
          question: "« Byzance » : empire grec ou empire romain ?",
          positions: [
            { titre: "Un empire grec", texte: "Langue grecque, orthodoxie : Byzance serait une civilisation grecque médiévale distincte de Rome.", qui: "Historiographie occidentale classique" },
            { titre: "L'Empire romain continué", texte: "Ses habitants se disaient « Romains » (Rhomaioi) jusqu'au bout. Le mot « byzantin » a été inventé au XVIe siècle par des érudits occidentaux.", qui: "Anthony Kaldellis" }
          ],
          etat: "Les historiens insistent de plus en plus sur la continuité romaine, tout en gardant le terme « byzantin » par commodité."
        }
      ],
      moinsConnu: "La Cappadoce abritait des villes souterraines capables d'accueillir des milliers de personnes, comme Derinkuyu, utilisées par les chrétiens pour se protéger lors des raids.",
      evenements: [
        { annee: 50, titre: "Paul fonde des communautés à Éphèse", lieu: [37.94, 27.34] },
        { annee: 325, titre: "Concile de Nicée", lieu: [40.43, 29.72] },
        { annee: 330, titre: "Fondation de Constantinople", lieu: [41.01, 28.98] },
        { annee: 537, titre: "Consécration de Sainte-Sophie", lieu: [41.008, 28.98] },
        { annee: 717, titre: "Échec du siège arabe de Constantinople", lieu: [41.01, 28.98] }
      ]
    },
    {
      titre: 'Seldjoukides et beyliks turcs',
      debut: 1071, fin: 1299,
      chapo: "Après la victoire de Manzikert, des Turcs venus d'Asie centrale s'installent en Anatolie et y fondent le sultanat de Roum.",
      recit: [
        "En 1071, le sultan seldjoukide Alp Arslan bat l'empereur byzantin à Manzikert. Des tribus turques, souvent nomades, s'installent en Anatolie. Le sultanat seldjoukide de Roum, avec Konya pour capitale, adopte la culture persane et construit caravansérails et médersas. Les croisés traversent la région.",
        "Le poète mystique Rûmî s'installe à Konya, où naît l'ordre des derviches tourneurs. En 1204, les croisés prennent et pillent Constantinople. En 1243, les Mongols battent les Seldjoukides, et l'Anatolie se divise en petites principautés turques, les beyliks."
      ],
      consensus: [
        "La bataille de Manzikert ouvre l'Anatolie à l'installation durable de populations turques.",
        "Le sultanat de Roum a été un foyer de culture persane et islamique.",
        "Le sac de Constantinople par la quatrième croisade (1204) a durablement affaibli Byzance."
      ],
      debats: [
        {
          question: "Comment l'Anatolie est-elle devenue turque et musulmane ?",
          positions: [
            { titre: "Une conquête et un remplacement", texte: "Les invasions et les guerres auraient chassé ou éliminé une grande partie de la population chrétienne.", qui: "Speros Vryonis" },
            { titre: "Une lente transformation", texte: "Une grande partie de la population locale s'est convertie et turquisée au fil des siècles, par mariages, conversions et intégration.", qui: "Historiens récents, études génétiques" }
          ],
          etat: "Les historiens combinent les deux : violences et déplacements réels, mais surtout conversion et assimilation progressives sur plusieurs siècles."
        }
      ],
      moinsConnu: "Rûmî, aujourd'hui l'un des poètes les plus lus au monde, écrivait en persan, pas en turc. Le sultanat de Roum était plurilingue : persan pour la culture, arabe pour la religion, grec et turc dans la vie quotidienne.",
      evenements: [
        { annee: 1071, titre: "Bataille de Manzikert", lieu: [39.15, 42.53] },
        { annee: 1097, titre: "Les croisés prennent Nicée", lieu: [40.43, 29.72] },
        { annee: 1204, titre: "Sac de Constantinople par les croisés", lieu: [41.01, 28.98] },
        { annee: 1243, titre: "Défaite seldjoukide face aux Mongols à Köse Dağ", lieu: [40.1, 38.7] },
        { annee: 1273, titre: "Mort de Rûmî à Konya", lieu: [37.87, 32.5] }
      ]
    },
    {
      titre: "L'essor ottoman",
      debut: 1299, fin: 1566,
      chapo: "Une petite principauté devient un empire à cheval sur trois continents, qui prend Constantinople et atteint son apogée sous Soliman.",
      recit: [
        "Vers 1299, Osman fonde une principauté au nord-ouest de l'Anatolie. Ses successeurs passent en Europe, prennent Andrinople et battent les Serbes au Kosovo (1389). Tamerlan les défait en 1402, mais l'empire se relève. En 1453, Mehmed II prend Constantinople, qui devient Istanbul.",
        "Sélim Ier conquiert la Syrie, l'Égypte et les villes saintes de l'islam (1516 à 1517). Soliman le Magnifique (1520 à 1566) prend Belgrade, Rhodes, la Hongrie et assiège Vienne en 1529. Son architecte Sinan bâtit la mosquée Süleymaniye. L'empire gouverne une population très diverse."
      ],
      consensus: [
        "La prise de Constantinople en 1453 met fin à l'Empire byzantin.",
        "Sous Soliman, l'Empire ottoman est l'une des premières puissances du monde.",
        "Le système du devchirmé enlevait des garçons chrétiens des Balkans pour en faire des janissaires ou des administrateurs."
      ],
      debats: [
        {
          question: "L'Empire ottoman était-il tolérant ?",
          positions: [
            { titre: "Un modèle de coexistence", texte: "Juifs et chrétiens pouvaient pratiquer leur religion et s'organiser en communautés. L'empire a accueilli les Juifs chassés d'Espagne en 1492.", qui: "" },
            { titre: "Une hiérarchie", texte: "Les non-musulmans payaient un impôt spécial, subissaient des restrictions et le devchirmé. La tolérance était une domination organisée.", qui: "" }
          ],
          etat: "Les historiens parlent d'une coexistence hiérarchisée : plus ouverte que bien des États européens de l'époque, mais fondée sur l'inégalité entre croyants."
        }
      ],
      moinsConnu: "Le harem impérial n'était pas qu'un lieu de plaisir : au XVIe et XVIIe siècle, des femmes comme Hürrem, épouse de Soliman, ou Kösem ont exercé un pouvoir politique considérable, au point qu'on parle de « sultanat des femmes ».",
      evenements: [
        { annee: 1326, titre: "Prise de Bursa, première capitale ottomane", lieu: [40.19, 29.06] },
        { annee: 1389, titre: "Bataille du Kosovo", lieu: [42.69, 21.13] },
        { annee: 1453, titre: "Prise de Constantinople", lieu: [41.01, 28.98] },
        { annee: 1517, titre: "Conquête de l'Égypte", lieu: [30.04, 31.24] },
        { annee: 1529, titre: "Siège de Vienne", lieu: [48.21, 16.37] },
        { annee: 1557, titre: "Mosquée Süleymaniye de Sinan", lieu: [41.016, 28.964] }
      ]
    },
    {
      titre: "L'empire face à l'Europe",
      debut: 1566, fin: 1908,
      chapo: "L'empire résiste longtemps, puis perd des territoires face à l'Autriche et à la Russie, et se réforme pour survivre.",
      recit: [
        "Après Soliman, l'empire reste puissant mais échoue devant Vienne en 1683. Il recule ensuite face aux Habsbourg et surtout à la Russie, qui prend la Crimée en 1783. Au XIXe siècle, la Grèce (1830), puis la Serbie, la Roumanie et la Bulgarie deviennent indépendantes.",
        "Les sultans lancent les Tanzimat (1839 à 1876) : égalité des sujets, armée moderne, codes juridiques. Une constitution est adoptée en 1876, puis suspendue par Abdülhamid II, qui gouverne de façon autoritaire. Les massacres d'Arméniens de 1894 à 1896 font des dizaines de milliers de victimes."
      ],
      consensus: [
        "Le second siège de Vienne (1683) marque le début du recul ottoman en Europe.",
        "Les Tanzimat sont une tentative sérieuse de modernisation de l'État.",
        "Les massacres hamidiens (1894 à 1896) ont visé les Arméniens de l'empire."
      ],
      debats: [
        {
          question: "L'« homme malade de l'Europe » : déclin réel ou cliché ?",
          positions: [
            { titre: "Un long déclin", texte: "Après Soliman, l'empire se serait figé et serait tombé lentement, incapable de se moderniser.", qui: "Historiographie classique" },
            { titre: "Une transformation", texte: "L'empire s'est adapté, a réformé son administration et survécu jusqu'en 1922. Le « déclin » est un récit européen qui justifiait les ambitions sur ses territoires.", qui: "Donald Quataert, Baki Tezcan" }
          ],
          etat: "La thèse du déclin continu est largement abandonnée par les historiens ottomanistes, au profit de l'idée de transformations successives."
        }
      ],
      moinsConnu: "Pendant les guerres du Caucase et des Balkans au XIXe siècle, des centaines de milliers de musulmans, Tcherkesses, Tatars ou Turcs des Balkans, ont été tués ou chassés vers l'Anatolie. Ces exodes sont peu connus en Europe mais ont profondément marqué la Turquie moderne.",
      evenements: [
        { annee: 1571, titre: "Défaite navale de Lépante", lieu: [38.25, 21.3] },
        { annee: 1683, titre: "Échec devant Vienne", lieu: [48.21, 16.37] },
        { annee: 1830, titre: "Indépendance de la Grèce", lieu: [37.98, 23.73] },
        { annee: 1839, titre: "Début des Tanzimat", lieu: [41.01, 28.98] },
        { annee: 1876, titre: "Première constitution ottomane", lieu: [41.01, 28.98] },
        { annee: 1895, titre: "Massacres hamidiens", lieu: [38.5, 43.38] }
      ]
    },
    {
      titre: 'Fin de l\'empire et naissance de la République',
      debut: 1908, fin: 1950,
      chapo: "Les Jeunes-Turcs prennent le pouvoir, l'empire entre en guerre, organise le génocide des Arméniens et s'effondre. Mustafa Kemal fonde la République.",
      recit: [
        "En 1908, la révolution jeune-turque rétablit la constitution. Le comité Union et Progrès entraîne l'empire dans la Première Guerre mondiale aux côtés de l'Allemagne. En 1915, il organise la déportation et l'extermination des Arméniens : environ 1,2 million de victimes. Assyriens et Grecs pontiques sont aussi massacrés.",
        "Après la défaite, les Alliés veulent dépecer l'Anatolie. Mustafa Kemal mène la guerre d'indépendance (1919 à 1922) contre la Grèce et les Alliés. Le traité de Lausanne (1923) reconnaît la Turquie et organise un échange de populations avec la Grèce. La République est proclamée en 1923 : abolition du califat, alphabet latin, droit de vote des femmes (1934)."
      ],
      consensus: [
        "Le génocide des Arméniens a fait environ 1,2 million de morts en 1915 et 1916.",
        "La bataille des Dardanelles (1915) est une victoire ottomane où Mustafa Kemal se distingue.",
        "Les réformes kémalistes ont profondément transformé la société turque en quelques années."
      ],
      debats: [
        {
          question: "Les massacres de 1915 sont-ils un génocide ?",
          positions: [
            { titre: "Un génocide", texte: "La déportation et l'extermination des Arméniens ont été planifiées par le gouvernement jeune-turc pour détruire ce peuple. C'est le cas qui a inspiré le juriste Raphael Lemkin pour forger le mot « génocide ».", qui: "Très grande majorité des historiens, dont des historiens turcs comme Taner Akçam ; reconnu par la France, l'Allemagne, les États-Unis" },
            { titre: "Des morts de guerre", texte: "Les morts seraient dues à la guerre, aux épidémies et à des violences entre communautés, dans un contexte de révolte arménienne soutenue par la Russie.", qui: "Position officielle de l'État turc" }
          ],
          etat: "La qualification de génocide fait consensus parmi les historiens spécialistes. Le refus de la reconnaître relève d'une position politique de l'État turc. En Turquie, en parler reste risqué."
        },
        {
          question: "Atatürk : père de la nation ou modernisateur autoritaire ?",
          positions: [
            { titre: "Le fondateur", texte: "Il a sauvé l'Anatolie du dépeçage et fait de la Turquie un État moderne, laïque, ouvert aux femmes.", qui: "Récit national turc" },
            { titre: "Un régime autoritaire", texte: "Parti unique, répression des révoltes kurdes (Dersim, 1937 à 1938), turquisation forcée et culte de la personnalité.", qui: "Historiens critiques, Hamit Bozarslan" }
          ],
          etat: "Les historiens reconnaissent l'ampleur de ses réformes et le caractère autoritaire du régime. En Turquie, critiquer Atatürk est puni par la loi."
        }
      ],
      moinsConnu: "L'échange de populations de 1923 a forcé environ 1,2 million de chrétiens orthodoxes à quitter la Turquie pour la Grèce, et environ 400 000 musulmans à faire le chemin inverse. Le critère était la religion, pas la langue : des orthodoxes turcophones et des musulmans hellénophones ont été déplacés.",
      evenements: [
        { annee: 1908, titre: "Révolution jeune-turque", lieu: [40.64, 22.94] },
        { annee: 1915, titre: "Génocide des Arméniens et bataille des Dardanelles", lieu: [40.2, 26.4] },
        { annee: 1922, titre: "Victoire kémaliste, incendie de Smyrne", lieu: [38.42, 27.14] },
        { annee: 1923, titre: "Traité de Lausanne et proclamation de la République", lieu: [39.93, 32.86] },
        { annee: 1928, titre: "Adoption de l'alphabet latin", lieu: [39.93, 32.86] },
        { annee: 1938, titre: "Massacre de Dersim, mort d'Atatürk", lieu: [39.1, 39.55] }
      ]
    },
    {
      titre: 'La Turquie contemporaine',
      debut: 1950, fin: 2025,
      chapo: "Multipartisme, coups d'État militaires, conflit kurde, croissance économique, puis concentration du pouvoir sous Recep Tayyip Erdoğan.",
      recit: [
        "Les premières élections libres de 1950 portent au pouvoir le Parti démocrate. La Turquie entre dans l'OTAN en 1952. L'armée, gardienne autoproclamée du kémalisme, intervient en 1960, 1971 et 1980. En 1974, la Turquie intervient militairement à Chypre, qui reste divisée. La guérilla du PKK, à partir de 1984, et la répression font plus de 40 000 morts.",
        "L'AKP de Recep Tayyip Erdoğan arrive au pouvoir en 2002. Il réduit le rôle de l'armée et ouvre des négociations avec l'Union européenne, puis devient de plus en plus autoritaire, surtout après la tentative de coup d'État de 2016. La Turquie accueille plusieurs millions de réfugiés syriens. Le séisme de février 2023 fait plus de 50 000 morts."
      ],
      consensus: [
        "L'armée turque a renversé ou contraint des gouvernements civils à plusieurs reprises.",
        "Le conflit entre l'État et le PKK a fait plus de 40 000 morts depuis 1984.",
        "Après 2016, des dizaines de milliers de personnes ont été arrêtées ou limogées."
      ],
      debats: [
        {
          question: "L'AKP : démocratisation ou islamisation autoritaire ?",
          positions: [
            { titre: "Une démocratisation", texte: "En brisant la tutelle militaire et en ouvrant l'espace aux croyants, l'AKP aurait rendu le pouvoir à la majorité.", qui: "Partisans de l'AKP, certains libéraux dans les années 2000" },
            { titre: "Une dérive autoritaire", texte: "Contrôle des médias et de la justice, emprisonnement d'opposants et de journalistes : le régime s'est transformé en pouvoir personnel.", qui: "Observateurs internationaux, opposition turque" }
          ],
          etat: "Beaucoup de chercheurs distinguent une première décennie réformatrice et une dérive autoritaire nette après 2013."
        }
      ],
      moinsConnu: "Le pogrom d'Istanbul de septembre 1955 a visé les Grecs, Arméniens et Juifs de la ville : magasins, églises et maisons détruits. Il a accéléré le départ de la communauté grecque d'Istanbul, qui comptait plus de 100 000 personnes et n'en compte plus que quelques milliers.",
      evenements: [
        { annee: 1952, titre: "Entrée dans l'OTAN", lieu: [39.93, 32.86] },
        { annee: 1955, titre: "Pogrom d'Istanbul", lieu: [41.03, 28.98] },
        { annee: 1974, titre: "Intervention à Chypre", lieu: [35.17, 33.36] },
        { annee: 1980, titre: "Coup d'État militaire", lieu: [39.93, 32.86] },
        { annee: 2016, titre: "Tentative de coup d'État", lieu: [41.01, 28.98] },
        { annee: 2023, titre: "Séisme dans le sud-est du pays", lieu: [37.58, 36.92] }
      ]
    }
  ]
});
