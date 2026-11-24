HISTOIRE.ajouterPays({
  id: 'indonesie',
  nom: 'Indonésie',
  region: 'asie-sud-est',
  accroche: "Plus de 17 000 îles, des royaumes hindous et bouddhistes, des sultanats, trois siècles de présence néerlandaise et le plus grand pays musulman du monde.",
  intro: "L'Indonésie n'existe comme pays que depuis 1945. Avant, l'archipel est un carrefour maritime entre l'Inde, la Chine et le monde arabe, où se sont succédé royaumes, sultanats et comptoirs. Son unité est en grande partie l'héritage de la colonisation néerlandaise.",
  sources: "Denys Lombard, Le Carrefour javanais ; M. C. Ricklefs, A History of Modern Indonesia ; Robert Cribb, The Indonesian Killings ; David Van Reybrouck, Revolusi.",
  phases: [
    {
      titre: 'Premiers royaumes indianisés',
      debut: 1, fin: 650,
      chapo: "L'archipel s'insère dans les grandes routes maritimes entre l'Inde et la Chine, et adopte des modèles religieux et politiques venus de l'Inde.",
      recit: [
        "Au début de notre ère, les peuples austronésiens de l'archipel sont d'habiles navigateurs, qui ont même peuplé Madagascar. Ils commercent épices, bois précieux et or avec l'Inde et la Chine. L'hindouisme et le bouddhisme se diffusent par les marchands et les religieux.",
        "Les premières inscriptions, en sanskrit, apparaissent au Ve siècle : royaume de Kutai à Bornéo, Tarumanagara à l'ouest de Java. Les rois adoptent titres, rites et écritures d'origine indienne, sans colonisation indienne directe."
      ],
      consensus: [
        "Les influences indiennes sont arrivées par le commerce et les échanges religieux, pas par la conquête.",
        "Les premières inscriptions de l'archipel datent du Ve siècle.",
        "Les navigateurs austronésiens ont peuplé Madagascar dans le premier millénaire."
      ],
      debats: [
        {
          question: "L'« indianisation » : un apport extérieur ou une appropriation locale ?",
          positions: [
            { titre: "Une civilisation importée", texte: "Les royaumes de l'archipel seraient des copies de l'Inde, apportées par des brahmanes et des princes indiens.", qui: "George Cœdès, historiographie coloniale" },
            { titre: "Une adaptation locale", texte: "Les élites locales ont choisi et transformé des éléments indiens selon leurs propres besoins, en gardant leurs croyances et leur organisation sociale.", qui: "Oliver Wolters, Denys Lombard" }
          ],
          etat: "La thèse de l'appropriation locale domine. On parle plutôt de « localisation » des influences indiennes."
        }
      ],
      moinsConnu: "Les grottes de Sulawesi abritent des peintures rupestres parmi les plus anciennes du monde, datées de plus de 45 000 ans, plus anciennes que celles de Lascaux.",
      evenements: [
        { annee: 400, titre: "Inscriptions du royaume de Kutai", lieu: [-0.43, 116.98] },
        { annee: 450, titre: "Royaume de Tarumanagara", lieu: [-6.2, 106.8] }
      ]
    },
    {
      titre: 'Srivijaya, Borobudur et Majapahit',
      debut: 650, fin: 1500,
      chapo: "Un empire maritime bouddhiste à Sumatra, des temples monumentaux à Java, puis l'empire de Majapahit, que l'Indonésie moderne revendique comme ancêtre.",
      recit: [
        "Au VIIe siècle, Srivijaya, centré sur Palembang à Sumatra, contrôle le détroit de Malacca et devient un grand centre du bouddhisme. À Java, les Sailendra construisent Borobudur, le plus grand monument bouddhiste du monde, et les Sanjaya le temple hindou de Prambanan.",
        "Au XIIIe siècle, Java repousse une expédition mongole. L'empire de Majapahit, fondé en 1293, atteint son apogée sous le Premier ministre Gajah Mada au XIVe siècle. L'islam, apporté par des marchands, s'implante dans le nord de Sumatra dès la fin du XIIIe siècle."
      ],
      consensus: [
        "Srivijaya a dominé le commerce du détroit de Malacca pendant des siècles.",
        "Borobudur et Prambanan comptent parmi les plus grands monuments religieux d'Asie.",
        "Majapahit est le plus puissant des royaumes javanais."
      ],
      debats: [
        {
          question: "Majapahit était-il un empire couvrant toute l'Indonésie ?",
          positions: [
            { titre: "Une Indonésie avant l'heure", texte: "Le poème Nagarakretagama énumère des territoires couvrant presque toute l'Indonésie actuelle : Majapahit serait la préfiguration du pays.", qui: "Nationalisme indonésien, Mohammad Yamin" },
            { titre: "Un réseau d'influence", texte: "La liste du poème mêle tributaires réels, partenaires commerciaux et revendications. Le pouvoir effectif se limitait surtout à Java et Bali.", qui: "Historiens actuels" }
          ],
          etat: "Les historiens voient Majapahit comme une puissance javanaise à l'influence large mais inégale, pas comme un État unifié de tout l'archipel."
        }
      ],
      moinsConnu: "Srivijaya a été presque oublié pendant des siècles. Il n'a été « redécouvert » qu'en 1918 par l'historien français George Cœdès, à partir d'inscriptions et de textes chinois.",
      evenements: [
        { annee: 683, titre: "Inscription de Kedukan Bukit, Srivijaya", lieu: [-2.99, 104.76] },
        { annee: 825, titre: "Achèvement de Borobudur", lieu: [-7.61, 110.2] },
        { annee: 856, titre: "Temple de Prambanan", lieu: [-7.75, 110.49] },
        { annee: 1293, titre: "Échec mongol et fondation de Majapahit", lieu: [-7.56, 112.38] },
        { annee: 1297, titre: "Premier sultan musulman attesté à Samudra Pasai", lieu: [5.15, 97.25] },
        { annee: 1365, titre: "Poème Nagarakretagama", lieu: [-7.56, 112.38] }
      ]
    },
    {
      titre: 'Sultanats et épices',
      debut: 1500, fin: 1800,
      chapo: "L'islam devient majoritaire, les sultanats prospèrent, et les Européens arrivent pour les épices. La Compagnie néerlandaise des Indes orientales s'impose par la force.",
      recit: [
        "Au XVe et XVIe siècle, l'islam se diffuse dans les ports, souvent par le soufisme et le commerce. Le sultanat de Demak supplante Majapahit, puis Mataram domine Java. Aceh, Banten, Ternate et Makassar sont de puissants sultanats. Les Portugais prennent Malacca en 1511.",
        "En 1602, les Néerlandais créent la Compagnie des Indes orientales (VOC). Elle fonde Batavia (Jakarta) en 1619. Pour contrôler la noix muscade, Jan Pieterszoon Coen fait massacrer et déporter la population des îles Banda en 1621. La VOC étend progressivement son contrôle sur Java."
      ],
      consensus: [
        "L'islam s'est diffusé surtout par le commerce et les confréries, sans grande conquête militaire.",
        "La VOC a été l'une des premières sociétés par actions de l'histoire.",
        "La conquête des îles Banda en 1621 a anéanti une grande partie de la population locale."
      ],
      debats: [
        {
          question: "Jan Pieterszoon Coen : héros national ou criminel ?",
          positions: [
            { titre: "Un fondateur", texte: "Coen a fondé Batavia et l'empire commercial néerlandais. Sa statue se dresse depuis 1893 à Hoorn.", qui: "Récit national néerlandais traditionnel" },
            { titre: "Un responsable de massacres", texte: "La conquête des Banda, qu'il a dirigée, est qualifiée par certains historiens de génocide.", qui: "Historiens néerlandais et indonésiens récents" }
          ],
          etat: "Les historiens reconnaissent la violence extrême de la conquête des Banda. La statue de Coen fait l'objet de débats récurrents aux Pays-Bas."
        }
      ],
      moinsConnu: "La noix muscade ne poussait alors qu'aux îles Banda. Pour en garder le monopole, les Néerlandais échangèrent en 1667 avec les Anglais la petite île de Run contre une autre colonie : Manhattan.",
      evenements: [
        { annee: 1511, titre: "Les Portugais prennent Malacca", lieu: [2.19, 102.25] },
        { annee: 1527, titre: "Fondation de Jayakarta par le sultanat de Demak", lieu: [-6.13, 106.81] },
        { annee: 1619, titre: "Fondation de Batavia par la VOC", lieu: [-6.13, 106.81] },
        { annee: 1621, titre: "Conquête et massacre des îles Banda", lieu: [-4.53, 129.9] },
        { annee: 1755, titre: "Partage de Mataram : Yogyakarta et Surakarta", lieu: [-7.8, 110.36] }
      ]
    },
    {
      titre: 'Les Indes néerlandaises',
      debut: 1800, fin: 1942,
      chapo: "L'État néerlandais remplace la VOC, impose les cultures forcées, conquiert l'ensemble de l'archipel, et voit naître le nationalisme indonésien.",
      recit: [
        "La VOC fait faillite en 1799 et l'État néerlandais prend le relais. La guerre de Java (1825 à 1830), menée par le prince Diponegoro, fait environ 200 000 morts. Le « système des cultures » oblige ensuite les paysans javanais à produire café, sucre et indigo pour l'exportation, enrichissant les Pays-Bas.",
        "Les Néerlandais conquièrent les dernières régions indépendantes : la guerre d'Aceh dure de 1873 à 1904, Bali est soumise en 1906 et 1908. Au début du XXe siècle, des mouvements nationalistes apparaissent : Budi Utomo (1908), Sarekat Islam, puis le Parti national de Sukarno. En 1928, le serment de la jeunesse proclame « une patrie, un peuple, une langue »."
      ],
      consensus: [
        "Le système des cultures a rapporté d'énormes revenus aux Pays-Bas et provoqué des famines à Java.",
        "La guerre d'Aceh est l'un des plus longs conflits coloniaux de l'histoire.",
        "Le malais, rebaptisé indonésien, a été choisi comme langue nationale dès 1928."
      ],
      debats: [
        {
          question: "La « politique éthique » : réforme sincère ou colonialisme rénové ?",
          positions: [
            { titre: "Une réforme", texte: "À partir de 1901, les Pays-Bas investissent dans l'école, l'irrigation et la santé pour rembourser une « dette d'honneur ».", qui: "Récit colonial néerlandais" },
            { titre: "Un paternalisme", texte: "Les moyens sont restés limités et l'objectif était de maintenir la domination. L'école a d'ailleurs formé les nationalistes qui ont combattu la colonie.", qui: "Historiens indonésiens et néerlandais récents" }
          ],
          etat: "Les historiens y voient une réforme limitée et ambiguë, qui a eu des effets inattendus."
        }
      ],
      moinsConnu: "Le roman « Max Havelaar » (1860), écrit par un ancien fonctionnaire colonial sous le nom de Multatuli, a dénoncé les abus du système des cultures et choqué l'opinion néerlandaise. Il est souvent comparé à « La Case de l'oncle Tom ».",
      evenements: [
        { annee: 1825, titre: "Guerre de Java menée par Diponegoro", lieu: [-7.8, 110.36] },
        { annee: 1830, titre: "Début du système des cultures", lieu: [-6.9, 107.6] },
        { annee: 1873, titre: "Début de la guerre d'Aceh", lieu: [5.55, 95.32] },
        { annee: 1906, titre: "Conquête de Bali, « puputan »", lieu: [-8.65, 115.22] },
        { annee: 1928, titre: "Serment de la jeunesse", lieu: [-6.18, 106.83] }
      ]
    },
    {
      titre: 'Occupation japonaise et révolution',
      debut: 1942, fin: 1965,
      chapo: "Le Japon chasse les Néerlandais. Sukarno proclame l'indépendance en 1945 et l'obtient après quatre ans de guerre.",
      recit: [
        "En 1942, le Japon occupe l'archipel. Il s'appuie sur des nationalistes comme Sukarno, mais impose le travail forcé à des centaines de milliers de romusha. Le 17 août 1945, deux jours après la capitulation japonaise, Sukarno et Hatta proclament l'indépendance.",
        "Les Pays-Bas tentent de reprendre le contrôle : la révolution indonésienne (1945 à 1949) fait des dizaines de milliers de morts. Sous pression internationale, les Néerlandais reconnaissent l'indépendance en 1949. Sukarno organise la conférence de Bandung (1955), fondatrice du non-alignement, puis instaure une « démocratie dirigée » autoritaire."
      ],
      consensus: [
        "L'indépendance est proclamée le 17 août 1945 par Sukarno et Hatta.",
        "Les Pays-Bas ont mené une guerre pour reconquérir l'archipel entre 1945 et 1949.",
        "La conférence de Bandung (1955) est un moment fondateur du tiers-monde."
      ],
      debats: [
        {
          question: "Les « actions de police » néerlandaises : maintien de l'ordre ou guerre coloniale ?",
          positions: [
            { titre: "Des opérations de police", texte: "Les Pays-Bas ont longtemps présenté leurs interventions comme des opérations limitées de rétablissement de l'ordre.", qui: "Discours officiel néerlandais jusqu'aux années 2000" },
            { titre: "Une guerre avec violences extrêmes", texte: "Une vaste étude de 2022 conclut à l'usage systématique et structurel de la violence extrême par l'armée néerlandaise.", qui: "Études de l'institut KITLV, NIOD et NIMH (2022)" }
          ],
          etat: "Le gouvernement néerlandais a présenté ses excuses en 2022 après la publication de cette étude. Il reconnaît désormais le 17 août 1945 comme date d'indépendance."
        }
      ],
      moinsConnu: "Pendant la révolution, la période dite « bersiap » (1945 à 1946) a vu des milliers de civils néerlandais, eurasiens, chinois et indonésiens jugés pro-néerlandais tués par des groupes révolutionnaires. Ce chapitre reste douloureux et controversé des deux côtés.",
      evenements: [
        { annee: 1942, titre: "Invasion japonaise", lieu: [-6.2, 106.85] },
        { annee: 1945, titre: "Proclamation de l'indépendance", lieu: [-6.2, 106.84] },
        { annee: 1947, titre: "Massacre de Rawagede", lieu: [-6.3, 107.3] },
        { annee: 1949, titre: "Reconnaissance de l'indépendance", lieu: [52.08, 4.3] },
        { annee: 1955, titre: "Conférence de Bandung", lieu: [-6.92, 107.61] }
      ]
    },
    {
      titre: "L'Ordre nouveau et la Reformasi",
      debut: 1965, fin: 2026,
      chapo: "Des massacres de masse portent Suharto au pouvoir pour 32 ans. Sa chute en 1998 ouvre une transition vers la démocratie.",
      recit: [
        "En 1965, après une tentative de putsch attribuée au Parti communiste, l'armée du général Suharto et des milices massacrent entre 500 000 et un million de personnes accusées de communisme. Suharto instaure l'« Ordre nouveau » : croissance économique, corruption, autoritarisme. L'Indonésie envahit le Timor oriental en 1975 ; l'occupation fait plus de 100 000 morts.",
        "La crise financière de 1997 provoque la chute de Suharto en 1998. La Reformasi apporte élections libres, décentralisation et liberté de la presse. Le Timor oriental devient indépendant en 2002. Le tsunami de 2004 tue plus de 160 000 personnes à Aceh, où un accord de paix est signé en 2005."
      ],
      consensus: [
        "Les massacres de 1965 à 1966 sont parmi les pires tueries de masse du XXe siècle.",
        "L'occupation du Timor oriental (1975 à 1999) a fait plus de 100 000 morts.",
        "L'Indonésie est devenue une démocratie électorale depuis 1998."
      ],
      debats: [
        {
          question: "Qui porte la responsabilité des massacres de 1965 ?",
          positions: [
            { titre: "Une réaction populaire", texte: "Le récit officiel de l'Ordre nouveau présente les tueries comme une réaction spontanée de la population contre un coup communiste.", qui: "Récit officiel indonésien pendant des décennies" },
            { titre: "Une extermination organisée", texte: "Les archives montrent que l'armée a planifié et encadré les massacres, avec le soutien diplomatique des États-Unis et du Royaume-Uni.", qui: "Geoffrey Robinson, John Roosa, Jess Melvin" }
          ],
          etat: "Les historiens s'accordent sur le rôle central de l'armée. L'État indonésien n'a jamais engagé de poursuites, et le sujet reste très sensible."
        }
      ],
      moinsConnu: "Le documentaire « The Act of Killing » (2012), où d'anciens bourreaux de 1965 rejouent leurs meurtres avec fierté, a révélé au monde l'impunité dont ils jouissaient encore.",
      evenements: [
        { annee: 1965, titre: "Tentative de putsch et début des massacres", lieu: [-6.2, 106.85] },
        { annee: 1975, titre: "Invasion du Timor oriental", lieu: [-8.56, 125.57] },
        { annee: 1998, titre: "Chute de Suharto", lieu: [-6.2, 106.82] },
        { annee: 2002, titre: "Indépendance du Timor oriental", lieu: [-8.56, 125.57] },
        { annee: 2004, titre: "Tsunami à Aceh", lieu: [5.55, 95.32] }
      ]
    }
  ]
});
