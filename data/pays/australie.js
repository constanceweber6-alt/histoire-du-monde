HISTOIRE.ajouterPays({
  id: 'australie',
  nom: 'Australie',
  region: 'oceanie',
  accroche: "Le continent des peuples aborigènes, présents depuis au moins 50 000 ans, devenu colonie pénitentiaire britannique en 1788, puis une démocratie prospère qui affronte encore l'héritage de la colonisation.",
  intro: "L'histoire de l'Australie a longtemps commencé en 1788 avec l'arrivée des Britanniques. On sait aujourd'hui que les Aborigènes et les insulaires du détroit de Torres forment l'une des plus anciennes cultures continues de l'humanité. La place de ces peuples dans la nation est au cœur des débats australiens, ce qu'on appelle les « guerres de l'histoire ».",
  sources: "Stuart Macintyre, A Concise History of Australia ; Henry Reynolds, The Other Side of the Frontier ; Bruce Pascoe, Dark Emu ; Lyndall Ryan, carte des massacres coloniaux (université de Newcastle).",
  phases: [
    {
      titre: 'Les peuples aborigènes',
      debut: 1, fin: 1606,
      chapo: "Plusieurs centaines de nations aborigènes, parlant plus de 250 langues, occupent tout le continent, chacune liée à son territoire, son « pays ».",
      recit: [
        "Arrivés il y a au moins 50 000 ans, les Aborigènes se sont adaptés à tous les milieux, des forêts tropicales du nord aux déserts du centre. Leur rapport au monde est organisé par le « Temps du rêve », qui relie les ancêtres, le territoire et la loi.",
        "Dans le sud-est, les Gunditjmara construisent depuis des milliers d'années des pièges à anguilles en pierre à Budj Bim. Au nord, les Yolngu commercent avec des pêcheurs makassar venus d'Indonésie, au moins depuis le XVIIIe siècle et peut-être avant."
      ],
      consensus: [
        "Les Aborigènes vivent en Australie depuis au moins 50 000 ans.",
        "Le continent comptait plus de 250 langues en 1788.",
        "Le site de Budj Bim, avec ses pièges à anguilles, est l'un des plus anciens systèmes d'aquaculture du monde."
      ],
      debats: [
        {
          question: "Les Aborigènes étaient-ils des chasseurs-cueilleurs ou des agriculteurs ?",
          positions: [
            { titre: "Des agriculteurs méconnus", texte: "Récoltes de céréales sauvages, villages, barrages à poissons : les premiers colons auraient décrit une forme d'agriculture qu'on a ensuite oubliée.", qui: "Bruce Pascoe, « Dark Emu »" },
            { titre: "Des chasseurs-cueilleurs complexes", texte: "Les Aborigènes géraient activement le territoire, notamment par le feu, sans pour autant pratiquer l'agriculture au sens strict.", qui: "Peter Sutton et Keryn Walshe, « Farmers or Hunter-gatherers? »" }
          ],
          etat: "Les chercheurs reconnaissent une gestion très sophistiquée des paysages. Le terme d'agriculture reste débattu."
        }
      ],
      moinsConnu: "Le « brûlage culturel », pratique aborigène de feux contrôlés pour entretenir les paysages, est aujourd'hui étudié et réintroduit pour limiter les grands incendies.",
      evenements: [
        { annee: 1, titre: "Pièges à anguilles de Budj Bim", lieu: [-38.07, 141.92] },
        { annee: 1000, titre: "Peintures rupestres de la terre d'Arnhem", lieu: [-12.5, 134.0] }
      ]
    },
    {
      titre: 'Explorateurs et colonie pénitentiaire',
      debut: 1606, fin: 1850,
      chapo: "Des navigateurs néerlandais, puis James Cook, explorent les côtes. En 1788, la « Première Flotte » fonde une colonie pénitentiaire à Sydney.",
      recit: [
        "Le Néerlandais Willem Janszoon aborde le nord du continent en 1606. Abel Tasman découvre la Tasmanie en 1642. En 1770, James Cook longe la côte est et la revendique pour la Grande-Bretagne.",
        "Le 26 janvier 1788, la Première Flotte débarque à Sydney Cove avec environ 750 forçats. Jusqu'en 1868, plus de 160 000 condamnés sont envoyés en Australie. La variole frappe les Aborigènes dès 1789. Les colons s'étendent, et les conflits de la frontière commencent."
      ],
      consensus: [
        "La colonisation britannique a commencé en 1788 avec une colonie pénitentiaire.",
        "Plus de 160 000 forçats ont été déportés en Australie.",
        "Les épidémies ont décimé les populations aborigènes dès la fin du XVIIIe siècle."
      ],
      debats: [
        {
          question: "Le 26 janvier : fête nationale ou « jour de l'invasion » ?",
          positions: [
            { titre: "Australia Day", texte: "Le 26 janvier marque la fondation de l'Australie moderne et réunit tous les Australiens.", qui: "Gouvernements successifs, une partie de la population" },
            { titre: "Invasion Day", texte: "Pour les Aborigènes, cette date marque le début de la dépossession et de la violence ; il faudrait changer la date de la fête nationale.", qui: "Militants aborigènes, une partie de la jeunesse" }
          ],
          etat: "Le débat est vif chaque année. Des manifestations « Invasion Day » réunissent des dizaines de milliers de personnes."
        }
      ],
      moinsConnu: "Pemulwuy, guerrier du peuple bidjigal, mena une résistance armée contre les colons de Sydney de 1790 à 1802. Sa tête fut envoyée en Angleterre.",
      evenements: [
        { annee: 1606, titre: "Willem Janszoon aborde le nord", lieu: [-12.6, 141.8] },
        { annee: 1770, titre: "James Cook à Botany Bay", lieu: [-34.0, 151.2] },
        { annee: 1788, titre: "Arrivée de la Première Flotte", lieu: [-33.86, 151.21] },
        { annee: 1838, titre: "Massacre de Myall Creek", lieu: [-29.78, 150.72] }
      ]
    },
    {
      titre: "Ruée vers l'or et Fédération",
      debut: 1850, fin: 1914,
      chapo: "La ruée vers l'or attire des centaines de milliers d'immigrants. Les colonies se fédèrent en 1901 et adoptent la politique de l'« Australie blanche ».",
      recit: [
        "L'or est découvert en Nouvelle-Galles du Sud et au Victoria en 1851. La population triple en dix ans. En 1854, la révolte des mineurs d'Eureka réclame des droits politiques. Les colonies obtiennent des gouvernements autonomes, parmi les plus démocratiques du monde.",
        "Le 1er janvier 1901, six colonies forment le Commonwealth d'Australie. L'une des premières lois, l'Immigration Restriction Act, instaure la politique de l'« Australie blanche ». Les femmes obtiennent le droit de vote fédéral en 1902, mais pas les Aborigènes."
      ],
      consensus: [
        "La ruée vers l'or a transformé l'économie et la population de l'Australie.",
        "La Fédération australienne date du 1er janvier 1901.",
        "La politique de l'Australie blanche a limité l'immigration non européenne jusqu'aux années 1970."
      ],
      debats: [
        {
          question: "Les guerres de la frontière ont-elles été des guerres ?",
          positions: [
            { titre: "Une colonisation pacifique", texte: "L'Australie aurait été « colonisée » plutôt que conquise, sans guerre organisée.", qui: "Keith Windschuttle, historiographie conservatrice" },
            { titre: "Des guerres de conquête", texte: "Les combats et massacres ont fait au moins 20 000 morts aborigènes et des milliers de colons ; il s'agissait de guerres de frontière.", qui: "Henry Reynolds, Lyndall Ryan" }
          ],
          etat: "La recherche a recensé plus de 400 massacres. La majorité des historiens parlent aujourd'hui de guerres de frontière."
        }
      ],
      moinsConnu: "Dès 1856, le Victoria introduit le vote à bulletin secret, si nouveau qu'on l'a appelé dans le monde entier le « bulletin australien ».",
      evenements: [
        { annee: 1851, titre: "Ruée vers l'or du Victoria", lieu: [-37.56, 143.85] },
        { annee: 1854, titre: "Révolte d'Eureka", lieu: [-37.56, 143.87] },
        { annee: 1901, titre: "Fédération australienne", lieu: [-37.81, 144.96] },
        { annee: 1902, titre: "Droit de vote fédéral des femmes", lieu: [-37.81, 144.96] }
      ]
    },
    {
      titre: 'Guerres mondiales et « générations volées »',
      debut: 1914, fin: 1967,
      chapo: "Gallipoli forge le mythe national de l'ANZAC. Pendant ce temps, des milliers d'enfants aborigènes sont retirés à leurs familles.",
      recit: [
        "En 1915, les soldats australiens et néo-zélandais (ANZAC) débarquent à Gallipoli ; le 25 avril devient le jour de commémoration national. La Seconde Guerre mondiale menace directement le pays : Darwin est bombardée par le Japon en 1942.",
        "De la fin du XIXe siècle aux années 1970, entre un enfant aborigène sur dix et un sur trois est retiré à sa famille et placé dans des institutions ou des familles blanches : ce sont les « générations volées ». Après 1945, l'Australie accueille des millions d'immigrants européens."
      ],
      consensus: [
        "Gallipoli occupe une place centrale dans la mémoire nationale australienne.",
        "Darwin a été bombardée par l'aviation japonaise en 1942.",
        "Des dizaines de milliers d'enfants aborigènes ont été retirés à leurs familles."
      ],
      debats: [
        {
          question: "Le mythe de l'ANZAC : identité nationale ou glorification de la guerre ?",
          positions: [
            { titre: "Le baptême de la nation", texte: "Gallipoli aurait révélé les valeurs australiennes de courage et de camaraderie, la « mateship ».", qui: "Mémoire officielle, Charles Bean" },
            { titre: "Un mythe qui en cache d'autres", texte: "La place de Gallipoli éclipse les guerres de la frontière sur le sol australien et la participation des soldats aborigènes.", qui: "Marilyn Lake, Henry Reynolds" }
          ],
          etat: "Les historiens s'interrogent sur la manière dont cette mémoire a été construite, tout en reconnaissant son importance pour les Australiens."
        }
      ],
      moinsConnu: "En 1938, le 150e anniversaire de la colonisation fut déclaré « jour de deuil » par des militants aborigènes réunis à Sydney. C'est l'une des premières grandes protestations politiques aborigènes.",
      evenements: [
        { annee: 1915, titre: "Débarquement des ANZAC à Gallipoli", lieu: [40.24, 26.28] },
        { annee: 1938, titre: "Jour de deuil aborigène", lieu: [-33.87, 151.21] },
        { annee: 1942, titre: "Bombardement de Darwin", lieu: [-12.46, 130.84] },
        { annee: 1956, titre: "Jeux olympiques de Melbourne", lieu: [-37.82, 144.98] }
      ]
    },
    {
      titre: 'Reconnaissance et réconciliation',
      debut: 1967, fin: 2008,
      chapo: "Le référendum de 1967 intègre les Aborigènes à la nation. La décision Mabo reconnaît leurs droits fonciers en 1992. L'Australie s'ouvre à l'Asie.",
      recit: [
        "En 1967, plus de 90 % des Australiens votent pour que les Aborigènes soient comptés dans la population. En 1972, une « ambassade aborigène » de tentes est installée devant le Parlement. La politique de l'Australie blanche est abandonnée en 1973. Des milliers de réfugiés vietnamiens arrivent.",
        "En 1992, la décision Mabo de la Haute Cour rejette la doctrine de la terra nullius et reconnaît les droits fonciers autochtones. Le rapport « Bringing Them Home » (1997) documente les générations volées. Le 13 février 2008, le Premier ministre Kevin Rudd présente des excuses officielles."
      ],
      consensus: [
        "Le référendum de 1967 est le plus largement approuvé de l'histoire australienne.",
        "La décision Mabo a mis fin à la doctrine de la terra nullius.",
        "L'Australie a présenté des excuses officielles aux générations volées en 2008."
      ],
      debats: [
        {
          question: "Les excuses suffisent-elles ?",
          positions: [
            { titre: "Un pas décisif", texte: "Les excuses de 2008 ont reconnu publiquement la souffrance infligée et ouvert une nouvelle ère.", qui: "Gouvernement Rudd, une majorité de l'opinion" },
            { titre: "Un geste symbolique", texte: "Sans compensation ni traité, et avec des écarts d'espérance de vie toujours importants, les excuses restent insuffisantes.", qui: "Militants aborigènes" }
          ],
          etat: "Le programme « Closing the Gap », lancé en 2008, n'a atteint qu'une partie de ses objectifs, notamment en santé et en éducation."
        }
      ],
      moinsConnu: "Eddie Mabo, insulaire de l'île de Mer dans le détroit de Torres, est mort quelques mois avant la décision qui porte son nom et qui a changé le droit australien.",
      evenements: [
        { annee: 1967, titre: "Référendum sur les Aborigènes", lieu: [-35.28, 149.13] },
        { annee: 1972, titre: "Ambassade aborigène sous tente", lieu: [-35.3, 149.13] },
        { annee: 1992, titre: "Décision Mabo", lieu: [-9.93, 144.05] },
        { annee: 2008, titre: "Excuses aux générations volées", lieu: [-35.31, 149.12] }
      ]
    },
    {
      titre: 'Climat, Voice et Pacifique',
      debut: 2008, fin: 2026,
      chapo: "Incendies géants, débat climatique, échec du référendum sur la « Voix » autochtone et rapprochement militaire avec les États-Unis dominent la période.",
      recit: [
        "Les incendies de l'été 2019 et 2020, le « Black Summer », brûlent des millions d'hectares. En 2021, l'Australie signe le pacte AUKUS avec les États-Unis et le Royaume-Uni pour acquérir des sous-marins nucléaires, provoquant une crise avec la France.",
        "Le 14 octobre 2023, 60 % des électeurs rejettent la création d'une « Voix » autochtone au Parlement. En 2025, Anthony Albanese, travailliste, remporte un second mandat, une première depuis vingt ans pour un Premier ministre sortant."
      ],
      consensus: [
        "Le Black Summer a été l'une des pires saisons d'incendies de l'histoire australienne.",
        "Le pacte AUKUS a entraîné l'annulation du contrat des sous-marins français.",
        "Le référendum sur la Voix autochtone a été rejeté en 2023."
      ],
      debats: [
        {
          question: "Pourquoi la Voix autochtone a-t-elle été rejetée ?",
          positions: [
            { titre: "Une division inutile", texte: "Inscrire un organe réservé à un groupe dans la Constitution aurait divisé les Australiens selon leur origine, et le projet était trop flou.", qui: "Partisans du « non »" },
            { titre: "Une occasion manquée", texte: "La campagne du « non » a joué sur la peur et la désinformation ; la Voix ne donnait qu'un rôle consultatif.", qui: "Partisans du « oui », la plupart des dirigeants aborigènes" }
          ],
          etat: "Les analyses montrent que le manque de soutien des deux grands partis a pesé. Aucun référendum n'est jamais passé en Australie sans ce soutien."
        }
      ],
      moinsConnu: "Depuis décembre 2025, l'Australie est le premier pays à interdire les réseaux sociaux aux moins de 16 ans.",
      evenements: [
        { annee: 2020, titre: "Incendies du Black Summer", lieu: [-36.0, 149.5] },
        { annee: 2021, titre: "Pacte AUKUS", lieu: [-35.28, 149.13] },
        { annee: 2023, titre: "Rejet de la Voix autochtone", lieu: [-35.28, 149.13] },
        { annee: 2025, titre: "Réélection d'Anthony Albanese", lieu: [-33.87, 151.21] }
      ]
    }
  ]
});
