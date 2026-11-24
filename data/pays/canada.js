HISTOIRE.ajouterPays({
  id: 'canada',
  nom: 'Canada',
  region: 'amerique-nord',
  accroche: "Un immense territoire de Premières Nations, disputé entre Français et Britanniques, devenu un État bilingue et multiculturel qui revisite aujourd'hui son passé colonial.",
  intro: "Le Canada s'est construit lentement, sans révolution, par compromis entre deux peuples européens, francophones et anglophones, et souvent au détriment des peuples autochtones. Depuis les années 2000, la reconnaissance des pensionnats autochtones a bouleversé le récit national.",
  sources: "Margaret Conrad, A Concise History of Canada ; Commission de vérité et réconciliation du Canada, rapport final (2015) ; Jacques Lacoursière, Histoire populaire du Québec.",
  phases: [
    {
      titre: 'Premières Nations et Inuits',
      debut: 1, fin: 1534,
      chapo: "Des centaines de peuples occupent le territoire, des chasseurs inuits de l'Arctique aux agriculteurs iroquoiens des Grands Lacs.",
      recit: [
        "Sur la côte pacifique, les Haïdas et les peuples voisins bâtissent des villages de maisons en bois et sculptent des mâts totémiques. Dans les plaines, les Cris et les Pieds-Noirs chassent le bison. Autour des Grands Lacs, les Wendats et les Haudenosaunee cultivent le maïs, la courge et le haricot.",
        "Vers l'an 1000, les ancêtres des Inuits, la culture de Thulé, se répandent dans l'Arctique. À la même époque, des Vikings venus du Groenland s'installent brièvement à L'Anse aux Meadows, à Terre-Neuve."
      ],
      consensus: [
        "Le territoire canadien était occupé par des centaines de peuples aux modes de vie très variés.",
        "Les Vikings ont fondé un établissement à Terre-Neuve vers l'an 1000.",
        "La Confédération haudenosaunee (iroquoise) a créé un système politique fédéral avant l'arrivée des Européens."
      ],
      debats: [
        {
          question: "La Confédération iroquoise a-t-elle inspiré la démocratie américaine ?",
          positions: [
            { titre: "Une influence réelle", texte: "Benjamin Franklin connaissait la Grande Loi de la paix iroquoise, et le Congrès américain l'a reconnue en 1988 comme une source d'inspiration.", qui: "Donald Grinde, Bruce Johansen" },
            { titre: "Une influence exagérée", texte: "Les rédacteurs de la Constitution s'inspiraient surtout des modèles européens et antiques ; les preuves directes sont minces.", qui: "Elisabeth Tooker" }
          ],
          etat: "Le débat reste ouvert. Les historiens admettent que les colons connaissaient la confédération, mais l'ampleur de son influence est discutée."
        }
      ],
      moinsConnu: "Les traditions orales des Premières Nations, longtemps ignorées par les historiens, sont aujourd'hui acceptées comme preuves devant les tribunaux canadiens depuis l'arrêt Delgamuukw de la Cour suprême en 1997.",
      evenements: [
        { annee: 1000, titre: "Établissement viking de L'Anse aux Meadows", lieu: [51.6, -55.53] },
        { annee: 1100, titre: "Expansion de la culture de Thulé dans l'Arctique", lieu: [68.0, -95.0] },
        { annee: 1450, titre: "Confédération haudenosaunee", lieu: [43.0, -76.0] }
      ]
    },
    {
      titre: 'La Nouvelle-France',
      debut: 1534, fin: 1763,
      chapo: "Les Français explorent le Saint-Laurent, fondent Québec et bâtissent un empire du commerce des fourrures, allié à de nombreux peuples autochtones.",
      recit: [
        "Jacques Cartier remonte le Saint-Laurent en 1534. Samuel de Champlain fonde Québec en 1608. La colonie vit du commerce des fourrures avec les Wendats, les Algonquins et les Innus. Les colons, peu nombreux, sont environ 70 000 en 1760.",
        "La Grande Paix de Montréal (1701) réunit les Français et une quarantaine de nations autochtones. Les rivalités avec les colonies britanniques mènent à la guerre. Les Acadiens sont déportés par les Britanniques en 1755. Québec tombe en 1759 après la bataille des plaines d'Abraham ; la France cède la colonie en 1763."
      ],
      consensus: [
        "La Nouvelle-France reposait sur des alliances commerciales et militaires avec les peuples autochtones.",
        "La déportation des Acadiens en 1755 a touché plus de 10 000 personnes.",
        "La France cède le Canada à la Grande-Bretagne par le traité de Paris de 1763."
      ],
      debats: [
        {
          question: "La Conquête de 1760 : catastrophe ou bienfait pour les Canadiens français ?",
          positions: [
            { titre: "Une catastrophe", texte: "La Conquête aurait décapité la société canadienne-française, privée de ses élites et soumise économiquement aux Britanniques.", qui: "École de Montréal (Maurice Séguin, Michel Brunet)" },
            { titre: "Une continuité", texte: "La société canadienne-française a gardé sa langue, sa religion et son droit civil, et ses difficultés venaient aussi de facteurs internes.", qui: "École de Québec (Fernand Ouellet)" }
          ],
          etat: "Ce débat des années 1950 et 1960 a profondément marqué le nationalisme québécois. Les historiens nuancent aujourd'hui les deux positions."
        }
      ],
      moinsConnu: "L'esclavage a existé en Nouvelle-France : environ 4 000 personnes, surtout autochtones (appelées « panis ») mais aussi africaines, y ont été réduites en esclavage.",
      evenements: [
        { annee: 1534, titre: "Jacques Cartier à Gaspé", lieu: [48.83, -64.48] },
        { annee: 1608, titre: "Fondation de Québec", lieu: [46.81, -71.21] },
        { annee: 1701, titre: "Grande Paix de Montréal", lieu: [45.5, -73.55] },
        { annee: 1755, titre: "Déportation des Acadiens", lieu: [45.1, -64.3] },
        { annee: 1759, titre: "Bataille des plaines d'Abraham", lieu: [46.8, -71.22] }
      ]
    },
    {
      titre: "L'Amérique du Nord britannique",
      debut: 1763, fin: 1867,
      chapo: "Les Britanniques gouvernent une population francophone, accueillent les loyalistes fuyant la révolution américaine et répriment les rébellions de 1837.",
      recit: [
        "L'Acte de Québec (1774) garantit aux Canadiens français leur religion catholique et leur droit civil. Après l'indépendance américaine, des dizaines de milliers de loyalistes s'installent au Canada. En 1791, la colonie est divisée en Haut-Canada (anglophone) et Bas-Canada (francophone).",
        "Les Américains envahissent le Canada en 1812 mais sont repoussés, avec l'aide de guerriers autochtones menés par Tecumseh. En 1837 et 1838, les patriotes de Louis-Joseph Papineau et les réformistes du Haut-Canada se révoltent ; la répression est sévère. Le rapport Durham recommande l'assimilation des francophones."
      ],
      consensus: [
        "L'Acte de Québec a permis aux Canadiens français de conserver leur religion et leur droit civil.",
        "Les guerriers autochtones ont joué un rôle important dans la défense du Canada en 1812.",
        "Les rébellions de 1837 et 1838 ont été écrasées par l'armée britannique."
      ],
      debats: [
        {
          question: "Les rébellions de 1837 : nationalistes ou démocratiques ?",
          positions: [
            { titre: "Une révolte nationale", texte: "Les patriotes du Bas-Canada défendaient la nation canadienne-française contre la domination britannique.", qui: "Historiographie nationaliste québécoise" },
            { titre: "Une révolte démocratique", texte: "Les deux rébellions, anglophone et francophone, réclamaient un gouvernement responsable devant les élus, sur le modèle républicain américain.", qui: "Allan Greer" }
          ],
          etat: "Les historiens y voient les deux dimensions, avec une forte composante républicaine et démocratique."
        }
      ],
      moinsConnu: "Par le chemin de fer clandestin, environ 30 000 esclaves fugitifs américains ont trouvé refuge au Canada avant la guerre de Sécession.",
      evenements: [
        { annee: 1774, titre: "Acte de Québec", lieu: [46.81, -71.21] },
        { annee: 1813, titre: "Laura Secord prévient les Britanniques d'une attaque", lieu: [43.16, -79.24] },
        { annee: 1837, titre: "Rébellion des patriotes", lieu: [45.65, -73.2] },
        { annee: 1840, titre: "Union du Haut et du Bas-Canada", lieu: [45.5, -73.55] }
      ]
    },
    {
      titre: 'La Confédération et l\'Ouest',
      debut: 1867, fin: 1945,
      chapo: "Le Canada devient une fédération, s'étend jusqu'au Pacifique, colonise l'Ouest au détriment des Métis et des Premières Nations et gagne son autonomie dans les guerres mondiales.",
      recit: [
        "Le 1er juillet 1867, le Dominion du Canada est créé. Le chemin de fer transcontinental atteint le Pacifique en 1885. La même année, la rébellion des Métis de Louis Riel est écrasée et Riel est pendu. Les traités numérotés cèdent l'Ouest au gouvernement, et la Loi sur les Indiens (1876) place les Premières Nations sous tutelle.",
        "Les pensionnats autochtones, financés par l'État et gérés par les Églises, retirent environ 150 000 enfants à leurs familles. Le Canada perd 60 000 soldats en 1914 à 1918 ; la bataille de la crête de Vimy (1917) devient un symbole national. Le statut de Westminster (1931) consacre l'indépendance législative du pays."
      ],
      consensus: [
        "La Confédération de 1867 a créé une fédération de quatre provinces.",
        "Louis Riel a été exécuté en 1885 après la rébellion du Nord-Ouest.",
        "Environ 150 000 enfants autochtones sont passés par les pensionnats."
      ],
      debats: [
        {
          question: "Louis Riel : traître ou père fondateur ?",
          positions: [
            { titre: "Un rebelle", texte: "Riel a pris les armes contre le gouvernement et a été jugé pour haute trahison.", qui: "Ontario orangiste de l'époque" },
            { titre: "Un fondateur", texte: "Riel a défendu les droits des Métis et négocié l'entrée du Manitoba dans la Confédération.", qui: "Métis, Québécois, historiens actuels" }
          ],
          etat: "Riel est aujourd'hui largement reconnu comme le fondateur du Manitoba, qui lui consacre un jour férié en février."
        }
      ],
      moinsConnu: "La « taxe d'entrée » imposée aux immigrants chinois de 1885 à 1923, puis leur exclusion totale jusqu'en 1947, a visé les familles des ouvriers qui avaient construit le chemin de fer.",
      evenements: [
        { annee: 1867, titre: "Confédération canadienne", lieu: [45.42, -75.7] },
        { annee: 1885, titre: "Pendaison de Louis Riel, dernier crampon du chemin de fer", lieu: [50.45, -104.61] },
        { annee: 1917, titre: "Bataille de la crête de Vimy", lieu: [50.38, 2.77] },
        { annee: 1931, titre: "Statut de Westminster", lieu: [51.5, -0.13] }
      ]
    },
    {
      titre: 'Révolution tranquille et nouvelle Constitution',
      debut: 1945, fin: 1995,
      chapo: "L'État-providence se développe, le Québec se modernise et réclame sa souveraineté, et le Canada rapatrie sa Constitution.",
      recit: [
        "Après la guerre, le Canada bâtit un État-providence avec l'assurance-maladie universelle. Au Québec, la Révolution tranquille des années 1960 sécularise la société et nationalise l'électricité. La crise d'Octobre 1970, enlèvements par le FLQ, mène à la loi sur les mesures de guerre.",
        "Le Parti québécois, au pouvoir en 1976, adopte la loi 101 sur la langue française. En 1982, Pierre Elliott Trudeau rapatrie la Constitution avec une Charte des droits, sans l'accord du Québec. Les référendums sur la souveraineté de 1980 et 1995 sont perdus par les souverainistes, le second de justesse (50,6 % contre 49,4 %)."
      ],
      consensus: [
        "La Révolution tranquille a transformé profondément la société québécoise.",
        "Le Québec n'a jamais signé la Constitution de 1982.",
        "Le référendum de 1995 a été perdu par les souverainistes avec moins de 55 000 voix d'écart."
      ],
      debats: [
        {
          question: "Le Québec est-il une nation ?",
          positions: [
            { titre: "Une nation", texte: "Avec sa langue, sa culture et ses institutions propres, le Québec forme une nation, qui devrait disposer d'un statut particulier ou de l'indépendance.", qui: "Souverainistes, nationalistes québécois" },
            { titre: "Une province comme les autres", texte: "Le Canada est une fédération de provinces égales, avec une Charte des droits individuels qui vaut pour tous.", qui: "Pierre Elliott Trudeau, fédéralistes" }
          ],
          etat: "En 2006, la Chambre des communes a reconnu que « les Québécois forment une nation au sein d'un Canada uni ». Le sens juridique de cette reconnaissance reste débattu."
        }
      ],
      moinsConnu: "Le dernier pensionnat autochtone financé par l'État fédéral a fermé en 1996.",
      evenements: [
        { annee: 1960, titre: "Début de la Révolution tranquille", lieu: [46.81, -71.21] },
        { annee: 1970, titre: "Crise d'Octobre", lieu: [45.5, -73.57] },
        { annee: 1982, titre: "Rapatriement de la Constitution", lieu: [45.42, -75.7] },
        { annee: 1990, titre: "Crise d'Oka", lieu: [45.47, -74.08] },
        { annee: 1995, titre: "Référendum sur la souveraineté du Québec", lieu: [46.81, -71.21] }
      ]
    },
    {
      titre: 'Réconciliation et souveraineté',
      debut: 1995, fin: 2026,
      chapo: "Le Canada affronte l'héritage des pensionnats autochtones, puis les pressions économiques de Donald Trump.",
      recit: [
        "En 1999, le Nunavut, territoire à majorité inuite, est créé. En 2008, le gouvernement présente des excuses pour les pensionnats. La Commission de vérité et réconciliation (2015) parle de « génocide culturel ». En 2021, la détection de tombes anonymes près d'anciens pensionnats provoque une onde de choc.",
        "En 2025, face aux droits de douane et aux menaces d'annexion de Donald Trump, les libéraux de Mark Carney remportent les élections. Le gouvernement cherche à réduire la dépendance économique du pays envers les États-Unis et se rapproche de l'Europe."
      ],
      consensus: [
        "Le Nunavut a été créé en 1999.",
        "La Commission de vérité et réconciliation a qualifié les pensionnats de « génocide culturel ».",
        "Les menaces de Donald Trump ont fortement pesé sur l'élection canadienne de 2025."
      ],
      debats: [
        {
          question: "Les pensionnats autochtones : génocide culturel ou génocide ?",
          positions: [
            { titre: "Un génocide culturel", texte: "Le système visait à détruire les cultures et les langues autochtones, sans intention d'exterminer physiquement les peuples.", qui: "Commission de vérité et réconciliation (2015)" },
            { titre: "Un génocide", texte: "Le transfert forcé d'enfants d'un groupe à un autre figure dans la définition juridique du génocide, et des milliers d'enfants sont morts.", qui: "Juristes et historiens, pape François en 2022" }
          ],
          etat: "La Chambre des communes a voté en 2022 une motion reconnaissant un génocide. Le débat porte sur la qualification juridique, pas sur la réalité des souffrances."
        }
      ],
      moinsConnu: "Le Nunavut a pour langues officielles l'inuktitut et l'inuinnaqtun, en plus de l'anglais et du français.",
      evenements: [
        { annee: 1999, titre: "Création du Nunavut", lieu: [63.75, -68.52] },
        { annee: 2015, titre: "Rapport de la Commission de vérité et réconciliation", lieu: [45.42, -75.7] },
        { annee: 2021, titre: "Découverte de tombes anonymes à Kamloops", lieu: [50.68, -120.34] },
        { annee: 2025, titre: "Victoire de Mark Carney face aux menaces de Trump", lieu: [45.42, -75.7] }
      ]
    }
  ]
});
