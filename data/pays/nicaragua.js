HISTOIRE.ajouterPays({
  id: 'nicaragua',
  nom: 'Nicaragua',
  region: 'amerique-nord',
  accroche: "Les Nicaraos et les Chorotegas, León et Granada fondées en 1524, la Côte des Mosquitos britannique, l'aventurier William Walker devenu président, Sandino contre les Marines, la dynastie Somoza, la révolution sandiniste, la guerre des Contras, puis le pouvoir du couple Ortega-Murillo.",
  intro: "Le Nicaragua, le plus vaste pays d'Amérique centrale, est partagé entre une façade pacifique hispanique et une côte caraïbe longtemps sous influence britannique. Convoité pour un canal entre les deux océans, il a subi plusieurs interventions américaines. Après la dictature des Somoza, renversée en 1979, la révolution sandiniste a été au cœur de la guerre froide. Daniel Ortega, revenu au pouvoir en 2007, gouverne aujourd'hui avec son épouse Rosario Murillo, coprésidente depuis 2025.",
  sources: "Jeffrey Gould, To Lead as Equals ; Michel Gobat, Confronting the American Dream ; Matilde Zimmermann, Sandinista ; Gilles Bataillon, Genèse des guerres internes en Amérique centrale.",
  phases: [
    {
      titre: "Nicaraos, Chorotegas et peuples de la côte",
      debut: 1, fin: 1522,
      chapo: "Des peuples venus du Mexique s'installent près des grands lacs, tandis que des peuples de langues chibchas vivent sur la côte caraïbe.",
      recit: [
        "Les Chorotegas, venus du Mexique vers le VIIIe siècle, puis les Nicaraos, de langue nahua, s'installent entre les lacs et le Pacifique. Ils cultivent le maïs et le cacao, utilisé comme monnaie, et tiennent des marchés réguliers.",
        "L'île d'Ometepe, avec ses deux volcans au milieu du lac Cocibolca, conserve des milliers de pétroglyphes et des statues de pierre. Sur la côte caraïbe vivent des peuples comme les Mayangnas et les Ramas, apparentés aux peuples d'Amérique du Sud."
      ],
      consensus: [
        "Les Nicaraos et les Chorotegas sont d'origine mésoaméricaine.",
        "Le cacao servait de monnaie dans la région du Pacifique.",
        "La côte caraïbe était peuplée de groupes très différents de ceux du Pacifique."
      ],
      debats: [
        {
          question: "D'où vient le nom du Nicaragua ?",
          positions: [
            { titre: "Le nom d'un chef", texte: "Le pays tirerait son nom du cacique Nicarao, que les Espagnols rencontrèrent en 1522.", qui: "Chroniqueurs espagnols, tradition" },
            { titre: "Un nom de peuple ou de lieu", texte: "Nicarao désignerait le peuple ou la région, et non un individu ; l'existence d'un chef de ce nom est discutée.", qui: "Linguistes, historiens récents" }
          ],
          etat: "Les deux hypothèses coexistent ; la plupart des sources récentes voient dans Nicarao un nom de peuple ou de titre."
        }
      ],
      moinsConnu: "Les traces de pas d'Acahualinca, à Managua, laissées dans la boue volcanique il y a environ 2 100 ans par un groupe de personnes, sont parmi les plus anciennes empreintes humaines connues d'Amérique centrale.",
      evenements: [
        { annee: 100, titre: "Empreintes d'Acahualinca", lieu: [12.16, -86.29] },
        { annee: 800, titre: "Arrivée des Chorotegas", lieu: [11.9, -85.95] },
        { annee: 1200, titre: "Installation des Nicaraos", lieu: [11.44, -85.83] }
      ]
    },
    {
      titre: "Conquête et colonie",
      debut: 1522, fin: 1821,
      chapo: "Les Espagnols fondent León et Granada, déportent des milliers d'autochtones vers le Pérou, tandis que les Britanniques s'implantent sur la Côte des Mosquitos.",
      recit: [
        "Gil González Dávila explore la région en 1522, puis Francisco Hernández de Córdoba fonde Granada et León en 1524. Des dizaines de milliers d'autochtones sont réduits en esclavage et envoyés au Panamá et au Pérou. León, détruite par un séisme en 1610, est reconstruite plus loin.",
        "La province dépend du royaume du Guatemala. Granada, sur le lac, est attaquée par des pirates qui remontent le fleuve San Juan. Sur la côte caraïbe, les Britanniques établissent un protectorat sur le royaume miskito, qui couronne ses propres rois."
      ],
      consensus: [
        "León et Granada sont parmi les premières villes espagnoles du continent.",
        "La traite des esclaves autochtones a dépeuplé la région au XVIe siècle.",
        "La côte caraïbe a échappé au contrôle espagnol."
      ],
      debats: [
        {
          question: "Le royaume miskito : État autochtone ou création britannique ?",
          positions: [
            { titre: "Un royaume autochtone", texte: "Les Miskitos, peuple métissé d'autochtones et d'Africains, auraient construit une puissance régionale grâce au commerce et aux raids.", qui: "Historiens de la côte caraïbe, Miskitos" },
            { titre: "Une création britannique", texte: "Les rois miskitos étaient couronnés à la Jamaïque et servaient surtout les intérêts britanniques.", qui: "Historiographie nationale nicaraguayenne" }
          ],
          etat: "Les historiens y voient une alliance où les Miskitos gardaient une large autonomie."
        }
      ],
      moinsConnu: "Les ruines de León Viejo, abandonnée en 1610, ont été retrouvées en 1967 ; on y a découvert la tombe de Francisco Hernández de Córdoba, le fondateur de la ville, exécuté sur place en 1526.",
      evenements: [
        { annee: 1522, titre: "Expédition de Gil González Dávila", lieu: [11.44, -85.83] },
        { annee: 1524, titre: "Fondation de Granada et León", lieu: [11.93, -85.96] },
        { annee: 1610, titre: "Destruction de León Viejo", lieu: [12.4, -86.62] },
        { annee: 1687, titre: "Couronnement d'un roi miskito à la Jamaïque", lieu: [14.03, -83.39] },
        { annee: 1780, titre: "Expédition britannique sur le fleuve San Juan", lieu: [11.0, -84.4] }
      ]
    },
    {
      titre: "León contre Granada et l'épisode Walker",
      debut: 1821, fin: 1909,
      chapo: "Le Nicaragua indépendant est déchiré entre libéraux de León et conservateurs de Granada. L'Américain William Walker s'empare du pouvoir en 1856.",
      recit: [
        "La rivalité entre León et Granada nourrit des guerres civiles continuelles. En 1855, les libéraux font appel à l'aventurier américain William Walker, qui se proclame président en 1856, rétablit l'esclavage et est chassé par une coalition centraméricaine en 1857.",
        "Les conservateurs gouvernent ensuite pendant trente ans, et Managua devient capitale. Le libéral José Santos Zelaya, au pouvoir de 1893 à 1909, modernise le pays et rattache la Mosquitia en 1894. Son nationalisme et ses contacts pour un canal avec d'autres puissances inquiètent Washington, qui soutient sa chute."
      ],
      consensus: [
        "La rivalité entre León et Granada domine le XIXe siècle.",
        "Walker a gouverné le Nicaragua en 1856 et 1857.",
        "Le projet de canal a fait du Nicaragua un enjeu pour les États-Unis."
      ],
      debats: [
        {
          question: "Walker : simple aventurier ou agent de l'expansion américaine ?",
          positions: [
            { titre: "Un aventurier isolé", texte: "Walker agissait pour son compte, avec des mercenaires, et le gouvernement américain n'a pas officiellement soutenu son projet.", qui: "Historiographie américaine ancienne" },
            { titre: "Un produit de la Destinée manifeste", texte: "Il bénéficiait du soutien des sudistes esclavagistes, et Washington a reconnu son gouvernement en 1856.", qui: "Michel Gobat, historiens centraméricains" }
          ],
          etat: "Les historiens le replacent dans l'expansionnisme américain et les débats sur l'esclavage."
        }
      ],
      moinsConnu: "Pendant la ruée vers l'or californienne, des milliers de chercheurs d'or traversaient le Nicaragua par le fleuve San Juan et le lac grâce à la compagnie de Cornelius Vanderbilt.",
      evenements: [
        { annee: 1821, titre: "Indépendance", lieu: [12.43, -86.88] },
        { annee: 1851, titre: "Route de transit de Vanderbilt", lieu: [11.25, -85.87] },
        { annee: 1856, titre: "Walker président", lieu: [11.93, -85.96] },
        { annee: 1857, titre: "Défaite de Walker à Rivas", lieu: [11.44, -85.83] },
        { annee: 1894, titre: "Rattachement de la Mosquitia", lieu: [12.01, -83.76] }
      ]
    },
    {
      titre: "Marines, Sandino et Somoza",
      debut: 1909, fin: 1979,
      chapo: "Les Marines occupent le pays de 1912 à 1933. Augusto Sandino les combat, puis est assassiné par Anastasio Somoza, dont la famille règne jusqu'en 1979.",
      recit: [
        "Les États-Unis interviennent en 1912 et laissent des Marines presque sans interruption jusqu'en 1933. De 1927 à 1933, le général Augusto César Sandino mène une guérilla contre eux dans les montagnes du nord. Après leur départ, il est assassiné en 1934 sur ordre d'Anastasio Somoza García, chef de la Garde nationale.",
        "Somoza prend le pouvoir en 1936. Après son assassinat en 1956, ses fils Luis et Anastasio lui succèdent. La famille possède une grande partie de l'économie. Le détournement de l'aide après le séisme de Managua en 1972 et l'assassinat du journaliste Pedro Joaquín Chamorro en 1978 retournent le pays contre le régime."
      ],
      consensus: [
        "Sandino est devenu un symbole de la résistance à l'impérialisme américain.",
        "La dynastie Somoza a gouverné pendant plus de quarante ans.",
        "Le séisme de 1972 a accéléré le discrédit du régime."
      ],
      debats: [
        {
          question: "Les Somoza, créatures de Washington ?",
          positions: [
            { titre: "Des alliés fabriqués", texte: "La Garde nationale, créée par les Marines, et le soutien américain constant auraient permis aux Somoza de durer.", qui: "Historiens anti-impérialistes, sandinistes" },
            { titre: "Un pouvoir enraciné", texte: "Les Somoza ont aussi construit des alliances avec les élites, les syndicats et les libéraux, et Washington a souvent pris ses distances.", qui: "Knut Walter, Jeffrey Gould" }
          ],
          etat: "Les historiens soulignent les deux dimensions ; l'administration Carter a cessé de soutenir le régime en 1978 et 1979."
        }
      ],
      moinsConnu: "La phrase « c'est peut-être un fils de pute, mais c'est notre fils de pute », souvent attribuée à Franklin Roosevelt à propos de Somoza, n'apparaît dans aucune source fiable de l'époque.",
      evenements: [
        { annee: 1912, titre: "Intervention des Marines", lieu: [12.13, -86.25] },
        { annee: 1927, titre: "Début de la guérilla de Sandino", lieu: [13.63, -86.47] },
        { annee: 1934, titre: "Assassinat de Sandino", lieu: [12.13, -86.25] },
        { annee: 1956, titre: "Assassinat de Somoza García à León", lieu: [12.43, -86.88] },
        { annee: 1972, titre: "Séisme de Managua", lieu: [12.13, -86.25] },
        { annee: 1978, titre: "Assassinat de Pedro Joaquín Chamorro", lieu: [12.13, -86.25] }
      ]
    },
    {
      titre: "Révolution sandiniste et guerre des Contras",
      debut: 1979, fin: 2007,
      chapo: "Le Front sandiniste renverse Somoza en 1979. La révolution affronte une guerre soutenue par les États-Unis, puis perd les élections de 1990.",
      recit: [
        "Le 19 juillet 1979, le Front sandiniste de libération nationale entre à Managua. Il lance une campagne d'alphabétisation, une réforme agraire et nationalise les biens des Somoza. Les Contras, soutenus et armés par les États-Unis, mènent une guerre qui fait environ 30 000 morts. Les Miskitos se soulèvent aussi contre les sandinistes.",
        "En 1986, la Cour internationale de justice condamne les États-Unis pour leur soutien aux Contras. Épuisés par la guerre et l'embargo, les Nicaraguayens élisent en 1990 Violeta Barrios de Chamorro, veuve du journaliste assassiné. Suivent les gouvernements d'Arnoldo Alemán, condamné pour corruption, et d'Enrique Bolaños."
      ],
      consensus: [
        "La révolution sandiniste a été l'un des grands enjeux de la fin de la guerre froide.",
        "Le Nicaragua a gagné son procès contre les États-Unis devant la Cour internationale de justice.",
        "Les sandinistes ont accepté leur défaite électorale de 1990."
      ],
      debats: [
        {
          question: "La révolution sandiniste : démocratisation ou dérive autoritaire ?",
          positions: [
            { titre: "Une révolution populaire", texte: "Les sandinistes ont alphabétisé le pays, réparti la terre et organisé des élections en 1984, malgré la guerre imposée de l'extérieur.", qui: "Sympathisants internationaux, historiens de gauche" },
            { titre: "Un projet autoritaire", texte: "Le parti a contrôlé l'armée, la presse et les organisations de masse, et a réprimé paysans et Miskitos, nourrissant la Contra.", qui: "Gilles Bataillon, opposants, anciens sandinistes" }
          ],
          etat: "Les historiens reconnaissent les avancées sociales et les tendances autoritaires ; la Contra avait aussi une base paysanne réelle."
        }
      ],
      moinsConnu: "L'affaire Iran-Contra a révélé que des membres de l'administration Reagan finançaient secrètement la Contra avec l'argent de ventes d'armes à l'Iran, malgré l'interdiction votée par le Congrès.",
      evenements: [
        { annee: 1979, titre: "Triomphe de la révolution sandiniste", lieu: [12.13, -86.25] },
        { annee: 1980, titre: "Croisade nationale d'alphabétisation", lieu: [12.13, -86.25] },
        { annee: 1986, titre: "Arrêt de la Cour internationale de justice", lieu: [52.09, 4.3] },
        { annee: 1990, titre: "Élection de Violeta Chamorro", lieu: [12.13, -86.25] },
        { annee: 1998, titre: "Ouragan Mitch et coulée du Casita", lieu: [12.68, -86.98] }
      ]
    },
    {
      titre: "Le pouvoir d'Ortega et Murillo",
      debut: 2007, fin: 2026,
      chapo: "Revenu au pouvoir en 2007, Daniel Ortega concentre tous les pouvoirs avec son épouse Rosario Murillo, réprime le soulèvement de 2018 et fait du pays un régime fermé.",
      recit: [
        "Élu en 2006 avec 38 % des voix grâce à un pacte avec Arnoldo Alemán, Ortega supprime la limite des mandats et s'allie un temps au patronat. Rosario Murillo devient vice-présidente en 2017. En avril 2018, une réforme des retraites déclenche un soulèvement ; la répression fait plus de 300 morts selon la Commission interaméricaine.",
        "Avant l'élection de 2021, les principaux candidats d'opposition sont emprisonnés. En 2023, le régime expulse 222 prisonniers politiques vers les États-Unis et retire la nationalité à des centaines d'opposants. Une réforme constitutionnelle fait de Murillo une coprésidente en 2025. Le 19 juillet 2026, Ortega déclare qu'il n'y aura plus d'élections."
      ],
      consensus: [
        "Le régime a démantelé la presse indépendante, les ONG et l'opposition.",
        "La répression de 2018 a fait des centaines de morts.",
        "Des centaines de milliers de Nicaraguayens ont émigré depuis 2018."
      ],
      debats: [
        {
          question: "Le soulèvement de 2018 : révolte civique ou tentative de coup d'État ?",
          positions: [
            { titre: "Une révolte civique", texte: "Des étudiants, des paysans et des retraités ont manifesté pacifiquement, puis ont été réprimés par la police et des groupes paramilitaires.", qui: "Commission interaméricaine des droits de l'homme, ONU, opposition" },
            { titre: "Un coup d'État manqué", texte: "Le gouvernement affirme avoir déjoué une tentative de renversement financée par l'étranger.", qui: "Gouvernement Ortega-Murillo" }
          ],
          etat: "Les enquêtes internationales concluent à des crimes contre l'humanité commis par l'État ; le gouvernement rejette ces conclusions."
        }
      ],
      moinsConnu: "Le projet de canal interocéanique concédé en 2013 à un homme d'affaires chinois, Wang Jing, pour 50 ans renouvelables, n'a jamais été construit ; la concession a été annulée en 2024.",
      evenements: [
        { annee: 2007, titre: "Retour de Daniel Ortega", lieu: [12.13, -86.25] },
        { annee: 2013, titre: "Concession du canal interocéanique", lieu: [11.5, -85.0] },
        { annee: 2018, titre: "Soulèvement d'avril", lieu: [12.13, -86.25] },
        { annee: 2023, titre: "Expulsion de 222 prisonniers politiques", lieu: [12.13, -86.25] },
        { annee: 2025, titre: "Murillo coprésidente", lieu: [12.13, -86.25] },
        { annee: 2026, titre: "Ortega annonce la fin des élections", lieu: [12.13, -86.25] }
      ]
    }
  ]
});
