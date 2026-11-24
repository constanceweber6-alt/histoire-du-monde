HISTOIRE.ajouterPays({
  id: 'albanie',
  nom: 'Albanie',
  region: 'europe-sud',
  accroche: "Les Illyriens, Skanderbeg qui résiste aux Ottomans, quatre siècles de domination ottomane, l'indépendance en 1912, la dictature isolée d'Enver Hoxha, puis une démocratie qui frappe à la porte de l'Europe.",
  intro: "L'Albanie, au bord de l'Adriatique, parle une langue indo-européenne sans proche parente. Sa population est majoritairement musulmane, avec d'importantes minorités orthodoxes et catholiques. Sous Enver Hoxha, elle a été le pays le plus fermé d'Europe. Elle est aujourd'hui candidate à l'Union européenne.",
  sources: "Miranda Vickers, The Albanians ; Oliver Jens Schmitt, Die Albaner ; Robert Elsie, A Biographical Dictionary of Albanian History.",
  phases: [
    {
      titre: 'Illyriens, Romains et Byzantins',
      debut: 1, fin: 1385,
      chapo: "La région des Illyriens devient romaine, puis byzantine. Les Albanais apparaissent dans les sources au XIe siècle.",
      recit: [
        "Dyrrachium (Durrës) et Apollonia sont des villes importantes de l'Empire romain. La via Egnatia, qui relie Dyrrachium à Constantinople, traverse le pays. Après la division de l'Empire, la région devient byzantine.",
        "Les Albanais sont mentionnés pour la première fois au XIe siècle. La région est disputée entre Byzantins, Bulgares, Normands, Angevins et Serbes. Des principautés albanaises se forment au XIVe siècle."
      ],
      consensus: [
        "La via Egnatia traversait l'Albanie.",
        "L'albanais forme une branche isolée des langues indo-européennes.",
        "Les Albanais sont mentionnés à partir du XIe siècle."
      ],
      debats: [
        {
          question: "Les Albanais descendent-ils des Illyriens ?",
          positions: [
            { titre: "Une continuité illyrienne", texte: "Les Albanais seraient les descendants directs des Illyriens, ce qui prouverait leur ancienneté dans les Balkans.", qui: "Historiographie albanaise, régime de Hoxha" },
            { titre: "Une question ouverte", texte: "On connaît trop mal la langue illyrienne pour établir un lien certain ; des liens avec les Thraces ou les Daces ont aussi été proposés.", qui: "Linguistes" }
          ],
          etat: "La thèse illyrienne est la plus répandue, mais les linguistes la jugent plausible sans être prouvée."
        }
      ],
      moinsConnu: "Le site de Butrint, au sud du pays, réunit des vestiges grecs, romains, byzantins et vénitiens sur une même péninsule.",
      evenements: [
        { annee: 50, titre: "Dyrrachium, port romain", lieu: [41.32, 19.45] },
        { annee: 400, titre: "Butrint byzantine", lieu: [39.75, 20.02] },
        { annee: 1043, titre: "Première mention des Albanais", lieu: [41.3, 20.0] }
      ]
    },
    {
      titre: 'Skanderbeg et la conquête ottomane',
      debut: 1385, fin: 1479,
      chapo: "Les Ottomans arrivent en Albanie. Skanderbeg mène pendant vingt-cinq ans une résistance qui en fait le héros national.",
      recit: [
        "Les Ottomans arrivent en 1385. Georges Castriote, élevé à la cour du sultan sous le nom d'Iskender bey, déserte en 1443 et unit les princes albanais dans la ligue de Lezhë (1444).",
        "Skanderbeg repousse de nombreuses armées ottomanes et défend Krujë. Le pape le proclame « athlète du Christ ». Après sa mort en 1468, la résistance s'effondre ; Shkodër tombe en 1479."
      ],
      consensus: [
        "Skanderbeg a résisté aux Ottomans pendant vingt-cinq ans.",
        "La ligue de Lezhë a uni les principautés albanaises en 1444.",
        "L'Albanie a été conquise après la mort de Skanderbeg."
      ],
      debats: [
        {
          question: "Skanderbeg : héros national ou héros chrétien ?",
          positions: [
            { titre: "Un héros national", texte: "Skanderbeg aurait été le premier à unir les Albanais, et son drapeau à l'aigle noir est devenu celui de l'Albanie.", qui: "Nationalisme albanais" },
            { titre: "Un prince chrétien de son temps", texte: "Il défendait ses terres et la chrétienté, dans un système d'alliances féodales, sans conscience nationale moderne.", qui: "Oliver Jens Schmitt, historiens critiques" }
          ],
          etat: "Le livre d'Oliver Jens Schmitt (2009), qui nuançait le mythe, a provoqué une vive polémique en Albanie."
        }
      ],
      moinsConnu: "Vivaldi et d'autres compositeurs baroques ont écrit des opéras consacrés à Skanderbeg, devenu un héros populaire en Europe.",
      evenements: [
        { annee: 1385, titre: "Arrivée des Ottomans", lieu: [40.7, 19.6] },
        { annee: 1444, titre: "Ligue de Lezhë", lieu: [41.78, 19.64] },
        { annee: 1450, titre: "Siège de Krujë", lieu: [41.51, 19.79] },
        { annee: 1479, titre: "Chute de Shkodër", lieu: [42.07, 19.51] }
      ]
    },
    {
      titre: 'L\'Albanie ottomane',
      debut: 1479, fin: 1912,
      chapo: "Sous les Ottomans, la majorité des Albanais se convertit à l'islam. Certains deviennent grands vizirs. Au XIXe siècle naît le mouvement national albanais.",
      recit: [
        "La majorité des Albanais se convertit à l'islam aux XVIIe et XVIIIe siècles. Des Albanais jouent un grand rôle dans l'Empire : la famille Köprülü fournit plusieurs grands vizirs. Au début du XIXe siècle, Ali Pacha de Tepelena règne presque en souverain sur l'Épire.",
        "En 1878, la ligue de Prizren défend les terres albanaises contre leur partage. Le mouvement de la « Rilindja » promeut la langue albanaise ; l'alphabet latin est adopté au congrès de Monastir en 1908."
      ],
      consensus: [
        "La majorité des Albanais s'est convertie à l'islam sous les Ottomans.",
        "Plusieurs grands vizirs ottomans étaient d'origine albanaise.",
        "L'alphabet albanais a été fixé en 1908."
      ],
      debats: [
        {
          question: "Pourquoi les Albanais se sont-ils convertis à l'islam ?",
          positions: [
            { titre: "Pour des avantages", texte: "Les conversions auraient été motivées par l'exemption de taxes et l'accès aux carrières dans l'Empire.", qui: "Historiens économiques" },
            { titre: "Par une religiosité souple", texte: "Les confréries soufies, notamment les Bektachis, ont favorisé des conversions progressives, et beaucoup gardaient des pratiques chrétiennes.", qui: "Historiens des religions" }
          ],
          etat: "Les historiens combinent motivations économiques, politiques et religieuses, sur une longue durée."
        }
      ],
      moinsConnu: "Le siège mondial de l'ordre soufi bektachi est installé à Tirana depuis 1925, après son interdiction en Turquie.",
      evenements: [
        { annee: 1656, titre: "Les Köprülü grands vizirs", lieu: [41.01, 28.97] },
        { annee: 1800, titre: "Règne d'Ali Pacha de Tepelena", lieu: [39.67, 20.85] },
        { annee: 1878, titre: "Ligue de Prizren", lieu: [42.21, 20.74] },
        { annee: 1908, titre: "Congrès de Monastir", lieu: [41.03, 21.33] }
      ]
    },
    {
      titre: 'Indépendance et dictature de Hoxha',
      debut: 1912, fin: 1991,
      chapo: "L'Albanie devient indépendante en 1912. Après le roi Zog et l'occupation italienne, Enver Hoxha instaure une dictature communiste parmi les plus fermées du monde.",
      recit: [
        "Ismail Qemali proclame l'indépendance à Vlorë le 28 novembre 1912, mais près de la moitié des Albanais, notamment au Kosovo, restent hors du nouvel État. Ahmet Zogu se proclame roi en 1928. L'Italie de Mussolini envahit le pays en 1939.",
        "Enver Hoxha prend le pouvoir en 1944. Il rompt successivement avec la Yougoslavie, l'URSS et la Chine. En 1967, il proclame le premier État athée du monde. Des centaines de milliers de bunkers sont construits. Les opposants sont envoyés dans des camps comme Spaç."
      ],
      consensus: [
        "L'Albanie est devenue indépendante en 1912.",
        "Enver Hoxha a dirigé une dictature communiste de 1944 à 1985.",
        "L'Albanie a été proclamée État athée en 1967."
      ],
      debats: [
        {
          question: "Hoxha : bâtisseur ou tyran ?",
          positions: [
            { titre: "Un modernisateur", texte: "Le régime a alphabétisé le pays, électrifié les campagnes et préservé l'indépendance face aux grandes puissances.", qui: "Nostalgiques, une partie des anciens communistes" },
            { titre: "Un tyran", texte: "Il a enfermé, exécuté ou persécuté des dizaines de milliers d'Albanais et isolé totalement le pays.", qui: "Victimes, historiens, Institut des études sur les crimes du communisme" }
          ],
          etat: "Les crimes du régime sont documentés. Le travail de mémoire progresse, avec des musées comme « Bunk'Art » à Tirana."
        }
      ],
      moinsConnu: "Pendant la Seconde Guerre mondiale, l'Albanie est l'un des rares pays d'Europe où la population juive a augmenté, grâce à la protection offerte au nom du code d'honneur, la « besa ».",
      evenements: [
        { annee: 1912, titre: "Proclamation de l'indépendance à Vlorë", lieu: [40.47, 19.49] },
        { annee: 1939, titre: "Invasion italienne", lieu: [41.33, 19.82] },
        { annee: 1944, titre: "Prise du pouvoir par Enver Hoxha", lieu: [41.33, 19.82] },
        { annee: 1967, titre: "État athée", lieu: [41.33, 19.82] },
        { annee: 1978, titre: "Rupture avec la Chine", lieu: [41.33, 19.82] }
      ]
    },
    {
      titre: 'Démocratie et candidature européenne',
      debut: 1991, fin: 2026,
      chapo: "L'Albanie s'ouvre en 1991. Après la crise des pyramides financières de 1997, elle rejoint l'OTAN et négocie son adhésion à l'Union européenne.",
      recit: [
        "En 1991, des dizaines de milliers d'Albanais fuient vers l'Italie par bateaux. Le pluralisme est instauré. En 1997, l'effondrement des « pyramides » financières ruine des centaines de milliers de familles et provoque une quasi-guerre civile.",
        "L'Albanie rejoint l'OTAN en 2009 et devient candidate à l'Union européenne en 2014. Edi Rama, Premier ministre depuis 2013, remporte un quatrième mandat en 2025. L'Albanie a ouvert tous les chapitres de négociation fin 2025 et vise une adhésion vers 2030."
      ],
      consensus: [
        "La crise des pyramides financières de 1997 a plongé le pays dans le chaos.",
        "L'Albanie a rejoint l'OTAN en 2009.",
        "Elle négocie son adhésion à l'Union européenne."
      ],
      debats: [
        {
          question: "L'accord migratoire avec l'Italie : coopération ou sous-traitance ?",
          positions: [
            { titre: "Une coopération", texte: "L'Albanie accueille des centres pour migrants gérés par l'Italie, au nom de la solidarité européenne.", qui: "Edi Rama, Giorgia Meloni" },
            { titre: "Une sous-traitance", texte: "Ces centres externalisent l'asile hors de l'Union européenne et posent des problèmes juridiques et humains.", qui: "ONG, juges italiens, opposition" }
          ],
          etat: "Les centres ouverts en 2024 ont été largement vides à cause de décisions de justice ; le dispositif reste contesté."
        }
      ],
      moinsConnu: "En 2025, Edi Rama a nommé une « ministre » virtuelle créée par intelligence artificielle, Diella, chargée de surveiller les marchés publics.",
      evenements: [
        { annee: 1991, titre: "Exode vers l'Italie", lieu: [41.32, 19.45] },
        { annee: 1997, titre: "Crise des pyramides", lieu: [40.47, 19.49] },
        { annee: 2009, titre: "Entrée dans l'OTAN", lieu: [41.33, 19.82] },
        { annee: 2025, titre: "Ouverture de tous les chapitres de négociation", lieu: [41.33, 19.82] }
      ]
    }
  ]
});
