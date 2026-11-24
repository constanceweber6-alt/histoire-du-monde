HISTOIRE.ajouterPays({
  id: 'argentine',
  nom: 'Argentine',
  region: 'amerique-sud',
  accroche: "Une colonie périphérique devenue l'un des pays les plus riches du monde vers 1900, puis l'histoire d'un déclin, du péronisme, des dictatures et des crises.",
  intro: "L'Argentine se raconte souvent comme un pays d'immigrants européens. Ce récit a longtemps effacé les peuples autochtones, la population afro-argentine et la conquête du Sud. Le pays est aussi une énigme économique : riche au début du XXe siècle, il a connu ensuite crises et inflation à répétition.",
  sources: "Luis Alberto Romero, Breve historia contemporánea de la Argentina ; Felipe Pigna, Los mitos de la historia argentina ; Marcos Novaro, La dictadura militar.",
  phases: [
    {
      titre: 'Les peuples autochtones',
      debut: 1, fin: 1536,
      chapo: "Du nord-ouest andin à la Patagonie, des sociétés très diverses occupent le territoire, dont une partie est intégrée à l'Empire inca.",
      recit: [
        "Au nord-ouest, les cultures andines, comme les Diaguitas, cultivent en terrasses et construisent des villages fortifiés. Dans le Chaco et la région du Paraná, Guaranis et autres peuples pratiquent l'agriculture et la pêche.",
        "Dans la Pampa et en Patagonie, des peuples chasseurs, comme les Tehuelches, vivent de la chasse au guanaco et au nandou. Au XVe siècle, l'Empire inca étend sa domination jusqu'au nord-ouest de l'Argentine actuelle."
      ],
      consensus: [
        "Le nord-ouest argentin a été intégré à l'Empire inca au XVe siècle.",
        "La Patagonie était peuplée de chasseurs nomades.",
        "Les peuples autochtones étaient nombreux et divers avant la colonisation."
      ],
      debats: [
        {
          question: "L'Argentine est-elle un pays « sans Indiens » ?",
          positions: [
            { titre: "Un pays européen", texte: "Le récit national a longtemps décrit les Argentins comme « descendus des bateaux », issus de l'immigration européenne.", qui: "Récit national traditionnel" },
            { titre: "Un pays métissé", texte: "Les études génétiques montrent qu'une majorité d'Argentins ont des ancêtres autochtones. Près d'un million de personnes se déclarent aujourd'hui autochtones.", qui: "Généticiens, mouvements autochtones" }
          ],
          etat: "Les chercheurs rejettent l'image d'un pays exclusivement européen. Le recensement de 2022 a compté plus de 1,3 million de personnes se reconnaissant autochtones."
        }
      ],
      moinsConnu: "La grotte des Mains, en Patagonie, est couverte de centaines de mains peintes au pochoir, dont les plus anciennes ont environ 9 000 ans.",
      evenements: [
        { annee: 1000, titre: "Cultures andines du nord-ouest", lieu: [-24.8, -65.4] },
        { annee: 1480, titre: "Expansion inca dans le nord-ouest", lieu: [-25.0, -66.0] }
      ]
    },
    {
      titre: 'La colonie espagnole',
      debut: 1536, fin: 1810,
      chapo: "Buenos Aires, fondée deux fois, reste longtemps un petit port de contrebande, avant de devenir la capitale de la vice-royauté du Río de la Plata.",
      recit: [
        "Pedro de Mendoza fonde Buenos Aires en 1536, mais la ville est abandonnée ; elle est refondée en 1580. Le centre de la colonie est d'abord au nord-ouest, tourné vers les mines d'argent de Potosí. Les jésuites fondent des missions guaranies.",
        "En 1776, l'Espagne crée la vice-royauté du Río de la Plata avec Buenos Aires pour capitale. En 1806 et 1807, les habitants repoussent deux invasions britanniques, ce qui renforce leur confiance. Des esclaves africains représentent alors une part importante de la population de Buenos Aires."
      ],
      consensus: [
        "Buenos Aires a été fondée deux fois, en 1536 et en 1580.",
        "La vice-royauté du Río de la Plata est créée en 1776.",
        "Une importante population africaine vivait à Buenos Aires à la fin de l'époque coloniale."
      ],
      debats: [
        {
          question: "Que sont devenus les Afro-Argentins ?",
          positions: [
            { titre: "Une disparition", texte: "Les guerres, la fièvre jaune de 1871 et le métissage auraient fait disparaître la population noire.", qui: "Récit traditionnel" },
            { titre: "Une invisibilisation", texte: "Les Afro-Argentins n'ont pas disparu : ils ont été effacés des recensements et du récit national, qui voulait une Argentine blanche.", qui: "George Reid Andrews, chercheurs afro-argentins" }
          ],
          etat: "Les historiens parlent d'invisibilisation plus que de disparition. Le recensement de 2022 a de nouveau inclus une question sur l'ascendance africaine."
        }
      ],
      moinsConnu: "Vers 1810, environ un tiers des habitants de Buenos Aires étaient d'origine africaine. Le tango doit une partie de ses racines aux musiques et danses afro-argentines, comme le candombe.",
      evenements: [
        { annee: 1536, titre: "Première fondation de Buenos Aires", lieu: [-34.6, -58.38] },
        { annee: 1580, titre: "Refondation de Buenos Aires", lieu: [-34.6, -58.38] },
        { annee: 1776, titre: "Vice-royauté du Río de la Plata", lieu: [-34.6, -58.38] },
        { annee: 1806, titre: "Invasions britanniques repoussées", lieu: [-34.6, -58.38] }
      ]
    },
    {
      titre: 'Indépendance et guerres civiles',
      debut: 1810, fin: 1880,
      chapo: "La révolution de Mai ouvre la voie à l'indépendance, suivie de décennies de guerres entre Buenos Aires et les provinces.",
      recit: [
        "En mai 1810, Buenos Aires forme un gouvernement autonome. L'indépendance est proclamée à Tucumán le 9 juillet 1816. Le général José de San Martín traverse les Andes et contribue à libérer le Chili et le Pérou.",
        "Le pays se déchire entre « unitaires », partisans d'un pouvoir centralisé à Buenos Aires, et « fédéraux », défenseurs des provinces. Juan Manuel de Rosas domine le pays de 1829 à 1852. La Constitution de 1853 fonde une république fédérale. L'Argentine participe à la guerre contre le Paraguay (1864 à 1870)."
      ],
      consensus: [
        "L'indépendance est proclamée en 1816 à Tucumán.",
        "San Martín a joué un rôle majeur dans les indépendances du Chili et du Pérou.",
        "Le conflit entre Buenos Aires et les provinces a marqué tout le XIXe siècle."
      ],
      debats: [
        {
          question: "Rosas : tyran ou défenseur de la souveraineté ?",
          positions: [
            { titre: "Un tyran", texte: "Rosas a gouverné par la terreur, avec sa police politique, la Mazorca, et persécuté les opposants.", qui: "Historiographie libérale, Domingo Sarmiento" },
            { titre: "Un défenseur national", texte: "Rosas a résisté aux blocus français et britanniques et défendu la souveraineté du pays.", qui: "Révisionnisme historique nationaliste, péronisme" }
          ],
          etat: "Les historiens reconnaissent à la fois la violence de son régime et sa défense face aux puissances étrangères. Le débat a longtemps opposé libéraux et nationalistes."
        }
      ],
      moinsConnu: "María Remedios del Valle, une femme afro-argentine, a combattu dans les guerres d'indépendance et a été nommée capitaine. Oubliée pendant plus d'un siècle, elle a donné son nom à la Journée des Afro-Argentins, le 8 novembre.",
      evenements: [
        { annee: 1810, titre: "Révolution de Mai", lieu: [-34.61, -58.37] },
        { annee: 1816, titre: "Indépendance à Tucumán", lieu: [-26.83, -65.2] },
        { annee: 1817, titre: "San Martín traverse les Andes", lieu: [-32.9, -68.85] },
        { annee: 1853, titre: "Constitution fédérale", lieu: [-31.63, -60.7] },
        { annee: 1879, titre: "Conquête du désert", lieu: [-39.0, -68.0] }
      ]
    },
    {
      titre: "L'Argentine de l'immigration",
      debut: 1880, fin: 1946,
      chapo: "Après la conquête du Sud, des millions d'immigrants arrivent et l'Argentine devient l'un des pays les plus riches du monde grâce au blé et à la viande.",
      recit: [
        "La « conquête du désert » (1878 à 1885), menée par le général Julio Roca, soumet les Mapuches et les Tehuelches de la Pampa et de la Patagonie. Des milliers d'autochtones sont tués, déplacés ou réduits au travail forcé.",
        "Entre 1880 et 1930, environ 6 millions d'immigrants, surtout italiens et espagnols, arrivent. L'Argentine exporte céréales et viande ; vers 1910, son revenu par habitant est parmi les plus élevés du monde. Le suffrage universel masculin est adopté en 1912. En 1930, un coup d'État militaire ouvre la « décennie infâme »."
      ],
      consensus: [
        "L'Argentine a été l'un des principaux pays d'immigration au monde entre 1880 et 1930.",
        "Vers 1910, l'Argentine figurait parmi les pays les plus riches du monde par habitant.",
        "La « conquête du désert » a dépossédé et tué de nombreux autochtones."
      ],
      debats: [
        {
          question: "La « conquête du désert » : expansion nationale ou génocide ?",
          positions: [
            { titre: "Une expansion nationale", texte: "La campagne aurait intégré la Patagonie au territoire national face aux revendications chiliennes. Roca figure sur les billets de banque.", qui: "Récit national traditionnel" },
            { titre: "Un génocide", texte: "Massacres, déportations, camps et séparation des familles visaient à éliminer les peuples autochtones en tant que groupes.", qui: "Diana Lenton, Walter Delrio, mouvements autochtones" }
          ],
          etat: "Le terme de génocide est de plus en plus utilisé par les historiens argentins. Les statues de Roca font l'objet de contestations."
        }
      ],
      moinsConnu: "Le « désert » n'en était pas un : le mot désignait des territoires peuplés de communautés autochtones, que l'État considérait comme vides car non soumis à son autorité.",
      evenements: [
        { annee: 1880, titre: "Buenos Aires capitale fédérale", lieu: [-34.6, -58.38] },
        { annee: 1912, titre: "Loi Sáenz Peña, suffrage universel masculin", lieu: [-34.6, -58.38] },
        { annee: 1930, titre: "Coup d'État militaire", lieu: [-34.6, -58.38] }
      ]
    },
    {
      titre: 'Péronisme et dictatures',
      debut: 1946, fin: 1983,
      chapo: "Juan Perón transforme le pays, est renversé en 1955, et l'Argentine alterne ensuite gouvernements fragiles et coups d'État jusqu'à la dictature la plus sanglante de son histoire.",
      recit: [
        "Juan Perón, élu en 1946, donne de nouveaux droits aux travailleurs, nationalise des entreprises et accorde le vote aux femmes (1947), avec le rôle central de son épouse Eva Perón. Son régime devient autoritaire. Il est renversé en 1955 et le péronisme est interdit.",
        "Perón revient en 1973 et meurt en 1974. En 1976, une junte militaire prend le pouvoir. Le « Processus de réorganisation nationale » fait disparaître environ 30 000 personnes selon les organisations de défense des droits humains, dont les corps sont souvent jetés à la mer. La défaite face au Royaume-Uni aux Malouines (1982) précipite la chute de la junte."
      ],
      consensus: [
        "La dictature de 1976 à 1983 a pratiqué la disparition forcée systématique des opposants.",
        "Des centaines d'enfants de disparus ont été volés et confiés à d'autres familles.",
        "La guerre des Malouines (1982) a précipité la fin de la dictature."
      ],
      debats: [
        {
          question: "Le péronisme : démocratie sociale ou populisme autoritaire ?",
          positions: [
            { titre: "Une justice sociale", texte: "Perón a donné dignité, droits et participation politique aux travailleurs et aux femmes.", qui: "Mouvement péroniste" },
            { titre: "Un populisme autoritaire", texte: "Le régime a muselé la presse, emprisonné des opposants, accueilli des criminels de guerre nazis et ruiné l'économie.", qui: "Antipéronistes, historiens critiques" }
          ],
          etat: "Les historiens décrivent un mouvement complexe, à la fois démocratisation sociale et pratique autoritaire. Le péronisme reste au cœur de la vie politique argentine."
        }
      ],
      moinsConnu: "Les Mères de la place de Mai ont commencé en 1977 à marcher chaque jeudi devant le palais présidentiel pour réclamer leurs enfants disparus. Les Grands-Mères ont retrouvé, grâce à l'ADN, plus de 130 petits-enfants volés.",
      evenements: [
        { annee: 1946, titre: "Élection de Juan Perón", lieu: [-34.61, -58.37] },
        { annee: 1952, titre: "Mort d'Eva Perón", lieu: [-34.61, -58.37] },
        { annee: 1955, titre: "Coup d'État contre Perón", lieu: [-34.61, -58.37] },
        { annee: 1976, titre: "Coup d'État de la junte militaire", lieu: [-34.61, -58.37] },
        { annee: 1977, titre: "Premières marches des Mères de la place de Mai", lieu: [-34.608, -58.372] },
        { annee: 1982, titre: "Guerre des Malouines" }
      ]
    },
    {
      titre: "L'Argentine démocratique",
      debut: 1983, fin: 2026,
      chapo: "Retour de la démocratie, procès des juntes, crises économiques à répétition, et l'arrivée au pouvoir de Javier Milei.",
      recit: [
        "Raúl Alfonsín est élu en 1983. Le procès des juntes (1985) condamne les principaux dirigeants militaires, un fait unique en Amérique latine. Les années 1990 de Carlos Menem sont marquées par les privatisations et la parité entre le peso et le dollar, qui s'effondre lors de la crise de 2001 : faillite, chômage massif, cinq présidents en deux semaines.",
        "Les Kirchner gouvernent de 2003 à 2015, rouvrent les procès de la dictature et mènent une politique sociale. L'inflation reste chronique. En 2023, l'économiste libertarien Javier Milei est élu en promettant de réduire drastiquement l'État ; son parti gagne les élections législatives de mi-mandat en octobre 2025."
      ],
      consensus: [
        "Le procès des juntes de 1985 a condamné les principaux responsables de la dictature.",
        "La crise de 2001 a été l'une des plus graves de l'histoire économique argentine.",
        "L'Argentine a connu des épisodes répétés de très forte inflation."
      ],
      debats: [
        {
          question: "Pourquoi l'Argentine a-t-elle « décroché » ?",
          positions: [
            { titre: "La faute du péronisme", texte: "Le protectionnisme, l'interventionnisme et les dépenses publiques depuis les années 1940 auraient ruiné le pays.", qui: "Économistes libéraux, Javier Milei" },
            { titre: "Une instabilité politique", texte: "Les coups d'État répétés, la dépendance aux matières premières et les crises de dette expliqueraient le déclin bien plus qu'une seule politique.", qui: "Historiens économiques" }
          ],
          etat: "Les économistes débattent depuis des décennies de ce « paradoxe argentin ». La plupart combinent instabilité institutionnelle et choix économiques changeants."
        }
      ],
      moinsConnu: "En 1994, un attentat contre l'association juive AMIA à Buenos Aires a tué 85 personnes. Attribué à l'Iran et au Hezbollah, il n'a jamais été pleinement élucidé, et le procureur Alberto Nisman a été retrouvé mort en 2015.",
      evenements: [
        { annee: 1985, titre: "Procès des juntes", lieu: [-34.6, -58.38] },
        { annee: 1994, titre: "Attentat contre l'AMIA", lieu: [-34.6, -58.4] },
        { annee: 2001, titre: "Crise économique et politique", lieu: [-34.61, -58.37] },
        { annee: 2023, titre: "Élection de Javier Milei", lieu: [-34.61, -58.37] }
      ]
    }
  ]
});
