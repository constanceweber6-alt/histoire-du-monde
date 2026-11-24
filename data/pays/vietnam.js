HISTOIRE.ajouterPays({
  id: 'vietnam',
  nom: 'Vietnam',
  region: 'asie-sud-est',
  accroche: "Mille ans sous domination chinoise, neuf siècles d'indépendance, une expansion vers le sud, la colonisation française et trente ans de guerre.",
  intro: "Le récit national vietnamien insiste sur la résistance aux envahisseurs : Chinois, Mongols, Français, Américains. C'est vrai, mais c'est aussi l'histoire d'un État qui a lui-même conquis ses voisins du sud, et d'une guerre qui fut aussi une guerre civile.",
  sources: "Keith Taylor, A History of the Vietnamese ; Christopher Goscha, Vietnam, un État né de la guerre ; Pierre Brocheux et Daniel Hémery, Indochine, la colonisation ambiguë.",
  phases: [
    {
      titre: 'Sous domination chinoise',
      debut: 1, fin: 938,
      chapo: "Le delta du fleuve Rouge est gouverné par la Chine pendant près de mille ans, entrecoupés de grandes révoltes.",
      recit: [
        "Depuis 111 av. J.-C., le nord du Vietnam actuel, appelé Giao Chỉ, est une province chinoise. En l'an 40, les sœurs Trưng mènent une grande révolte contre les Han et gouvernent pendant trois ans, avant d'être vaincues par le général Ma Yuan.",
        "La région adopte l'écriture chinoise, le confucianisme et le bouddhisme, tout en gardant sa langue. Au sud, le royaume de Champa, hindouiste puis en partie musulman, et le Funan dans le delta du Mékong se développent indépendamment. En 938, Ngô Quyền bat les Chinois sur le fleuve Bạch Đằng et met fin à la domination chinoise."
      ],
      consensus: [
        "Le nord du Vietnam a été administré par les dynasties chinoises pendant environ mille ans.",
        "La révolte des sœurs Trưng (40 à 43) est l'un des grands symboles nationaux.",
        "Le centre et le sud appartenaient alors à d'autres peuples, Chams et Khmers notamment."
      ],
      debats: [
        {
          question: "Mille ans de résistance ou mille ans de fusion ?",
          positions: [
            { titre: "Une résistance continue", texte: "Le peuple vietnamien aurait gardé son identité et résisté sans relâche pendant mille ans jusqu'à l'indépendance.", qui: "Historiographie nationale vietnamienne" },
            { titre: "Une société mixte", texte: "Les élites locales étaient souvent sino-vietnamiennes et collaboraient avec l'empire. L'indépendance de 938 profite du chaos de la fin des Tang.", qui: "Keith Taylor, Liam Kelley" }
          ],
          etat: "Les historiens insistent sur le métissage culturel et politique, sans nier les révoltes. Le récit d'une résistance millénaire est en partie une construction du XXe siècle."
        }
      ],
      moinsConnu: "Les tambours de bronze de Đông Sơn, fabriqués avant et pendant la domination chinoise, ont été retrouvés dans toute l'Asie du Sud-Est, jusqu'en Indonésie. Ils témoignent d'une culture propre et de vastes réseaux d'échange.",
      evenements: [
        { annee: 40, titre: "Révolte des sœurs Trưng", lieu: [21.03, 105.85] },
        { annee: 192, titre: "Fondation du royaume de Champa", lieu: [15.77, 108.12] },
        { annee: 544, titre: "Lý Bí proclame un royaume indépendant éphémère", lieu: [21.03, 105.85] },
        { annee: 938, titre: "Victoire de Bạch Đằng", lieu: [20.85, 106.75] }
      ]
    },
    {
      titre: 'Đại Việt indépendant',
      debut: 938, fin: 1527,
      chapo: "Les dynasties Lý, Trần et Lê construisent un État confucéen, repoussent les Mongols et les Ming, et s'étendent aux dépens du Champa.",
      recit: [
        "La dynastie Lý (1009 à 1225) installe la capitale à Thăng Long, l'actuelle Hanoï, et fonde le temple de la Littérature (1070). Les Trần repoussent trois invasions mongoles, notamment grâce au général Trần Hưng Đạo, qui renouvelle la victoire de Bạch Đằng en 1288.",
        "Les Ming occupent le pays de 1407 à 1427. Lê Lợi les chasse après dix ans de guerre et fonde la dynastie Lê. Sous Lê Thánh Tông, le Đại Việt écrase le Champa en 1471 et adopte un code de lois qui protège certains droits des femmes."
      ],
      consensus: [
        "Le Đại Việt a repoussé les invasions mongoles à trois reprises.",
        "L'État vietnamien adopte un modèle confucéen avec des examens de mandarins.",
        "La défaite du Champa en 1471 ouvre la voie à l'expansion vietnamienne vers le sud."
      ],
      debats: [
        {
          question: "L'avancée vers le sud : expansion naturelle ou colonisation ?",
          positions: [
            { titre: "Une marche naturelle", texte: "Le « Nam tiến » (marche vers le sud) est présenté comme le peuplement progressif de terres par des paysans vietnamiens.", qui: "Historiographie nationale" },
            { titre: "Une conquête", texte: "C'est une conquête militaire de royaumes cham et khmer, avec annexions, déplacements de populations et assimilation forcée.", qui: "Historiens de l'Asie du Sud-Est, mémoire cham et khmère" }
          ],
          etat: "Les historiens parlent de plus en plus de conquête et de colonisation, un point sensible au Vietnam comme au Cambodge."
        }
      ],
      moinsConnu: "Le code Hồng Đức (XVe siècle) permettait aux filles d'hériter au même titre que les fils dans certains cas, et aux femmes de posséder des biens propres, une situation rare dans le monde confucéen.",
      evenements: [
        { annee: 1010, titre: "Capitale à Thăng Long (Hanoï)", lieu: [21.03, 105.85] },
        { annee: 1070, titre: "Temple de la Littérature", lieu: [21.03, 105.84] },
        { annee: 1288, titre: "Défaite mongole à Bạch Đằng", lieu: [20.85, 106.75] },
        { annee: 1428, titre: "Lê Lợi chasse les Ming", lieu: [21.03, 105.85] },
        { annee: 1471, titre: "Conquête de Vijaya, capitale du Champa", lieu: [13.9, 109.1] }
      ]
    },
    {
      titre: 'Divisions et unification',
      debut: 1527, fin: 1858,
      chapo: "Le pays se divise entre seigneurs Trịnh au nord et Nguyễn au sud, puis la révolte des Tây Sơn et la dynastie Nguyễn le réunifient.",
      recit: [
        "Au XVIe siècle, la dynastie Lê ne règne plus que de nom. Les seigneurs Trịnh au nord et Nguyễn au sud se font la guerre pendant des décennies. Les Nguyễn s'emparent du delta du Mékong au détriment du Cambodge. Des missionnaires européens arrivent : Alexandre de Rhodes contribue à l'écriture latine du vietnamien (quốc ngữ).",
        "En 1771, la révolte des frères Tây Sơn renverse les deux familles et bat une armée chinoise en 1789. Nguyễn Ánh, avec l'aide de quelques Français, reprend le pouvoir et fonde la dynastie Nguyễn en 1802, avec Huế pour capitale. Le pays prend alors le nom de Việt Nam."
      ],
      consensus: [
        "Le delta du Mékong, khmer à l'origine, devient vietnamien aux XVIIe et XVIIIe siècles.",
        "L'écriture latinisée du vietnamien a été élaborée par des missionnaires au XVIIe siècle.",
        "La dynastie Nguyễn unifie en 1802 un territoire proche du Vietnam actuel."
      ],
      debats: [
        {
          question: "Les Tây Sơn : révolution paysanne ou guerre de factions ?",
          positions: [
            { titre: "Une révolution", texte: "Les Tây Sơn auraient mené une révolte paysanne contre l'injustice des seigneurs.", qui: "Historiographie communiste vietnamienne" },
            { titre: "Une lutte pour le pouvoir", texte: "Le mouvement a mobilisé paysans, marchands chinois et minorités, mais a fini en dynastie comme les autres.", qui: "George Dutton" }
          ],
          etat: "Les historiens nuancent la lecture révolutionnaire, sans nier la dimension sociale du mouvement."
        }
      ],
      moinsConnu: "Les Nguyễn ont longtemps été présentés par le régime communiste comme des traîtres pour avoir fait appel à des Français. Leur rôle dans l'unification et dans la construction de Huế est aujourd'hui réévalué.",
      evenements: [
        { annee: 1627, titre: "Début de la guerre Trịnh-Nguyễn", lieu: [17.2, 106.8] },
        { annee: 1698, titre: "Fondation administrative de Saigon", lieu: [10.78, 106.7] },
        { annee: 1789, titre: "Victoire de Quang Trung sur les Qing", lieu: [21.03, 105.85] },
        { annee: 1802, titre: "Dynastie Nguyễn, capitale à Huế", lieu: [16.47, 107.58] }
      ]
    },
    {
      titre: "L'Indochine française",
      debut: 1858, fin: 1945,
      chapo: "La France conquiert le pays en plusieurs étapes et l'intègre à l'Indochine. Les mouvements nationalistes et communistes s'organisent.",
      recit: [
        "En 1858, une expédition franco-espagnole attaque Đà Nẵng. La France prend la Cochinchine (1862 à 1867), puis impose son protectorat sur l'Annam et le Tonkin (1883 à 1885). L'Indochine française est créée en 1887 avec le Cambodge, puis le Laos.",
        "La colonisation développe les plantations d'hévéas, le riz d'exportation et les chemins de fer, au prix du travail forcé et d'impôts lourds. Les révoltes se multiplient. Hồ Chí Minh fonde le Parti communiste indochinois en 1930. En 1940, le Japon occupe l'Indochine avec l'accord de Vichy. La famine de 1944 à 1945 tue environ un million de personnes au nord."
      ],
      consensus: [
        "La conquête française s'étale sur près de trente ans, de 1858 à 1885.",
        "Les plantations d'hévéas reposaient sur un recrutement forcé et des conditions très dures.",
        "La famine de 1945 a fait environ un million de morts, dans un contexte d'occupation japonaise et d'administration française."
      ],
      debats: [
        {
          question: "La « mission civilisatrice » : modernisation ou exploitation ?",
          positions: [
            { titre: "Une modernisation", texte: "Routes, ports, chemin de fer transindochinois, écoles et instituts Pasteur auraient modernisé le pays.", qui: "Récit colonial" },
            { titre: "Une exploitation", texte: "Les infrastructures servaient l'exportation, l'école restait réservée à une minorité, et les monopoles de l'opium, du sel et de l'alcool pesaient sur les paysans.", qui: "Pierre Brocheux, Daniel Hémery" }
          ],
          etat: "Les historiens parlent d'une colonisation « ambiguë » : transformations réelles, mais au service de la métropole et dans la violence."
        }
      ],
      moinsConnu: "L'administration coloniale française vendait de l'opium aux Vietnamiens par un monopole d'État, qui fournissait une part importante du budget de l'Indochine au début du XXe siècle.",
      evenements: [
        { annee: 1858, titre: "Attaque franco-espagnole de Đà Nẵng", lieu: [16.05, 108.2] },
        { annee: 1885, titre: "Protectorat sur l'Annam et le Tonkin", lieu: [16.47, 107.58] },
        { annee: 1930, titre: "Fondation du Parti communiste indochinois", lieu: [22.28, 114.16] },
        { annee: 1940, titre: "Occupation japonaise", lieu: [21.03, 105.85] },
        { annee: 1945, titre: "Famine au Tonkin", lieu: [20.5, 106.2] }
      ]
    },
    {
      titre: 'Trente ans de guerre',
      debut: 1945, fin: 1975,
      chapo: "Indépendance proclamée, guerre contre la France, partition, puis guerre contre le Sud soutenu par les États-Unis jusqu'à la chute de Saigon.",
      recit: [
        "Le 2 septembre 1945, Hồ Chí Minh proclame l'indépendance. La France veut revenir : la guerre d'Indochine commence en 1946 et se termine par la défaite française de Điện Biên Phủ en 1954. Les accords de Genève coupent le pays en deux au 17e parallèle.",
        "Au Nord, la République démocratique communiste ; au Sud, la République du Vietnam soutenue par les États-Unis. L'insurrection soutenue par le Nord grandit. Les États-Unis envoient jusqu'à 540 000 soldats. Bombardements massifs, napalm, agent orange : la guerre fait plusieurs millions de morts. Saigon tombe le 30 avril 1975."
      ],
      consensus: [
        "La défaite de Điện Biên Phủ met fin à la présence coloniale française.",
        "La guerre du Vietnam a fait environ trois millions de morts vietnamiens, civils et militaires.",
        "L'agent orange, défoliant utilisé par l'armée américaine, a des effets sanitaires encore visibles aujourd'hui."
      ],
      debats: [
        {
          question: "Guerre de libération nationale ou guerre civile ?",
          positions: [
            { titre: "Une guerre de libération", texte: "Le Vietnam a combattu des puissances étrangères pour son indépendance et son unité. Le Sud n'était qu'un régime créé par les Américains.", qui: "Récit officiel vietnamien, historiens orthodoxes américains" },
            { titre: "Une guerre civile", texte: "Le Sud avait ses propres forces politiques, nationalistes non communistes, catholiques, bouddhistes. Des millions de Vietnamiens ont combattu ou fui le communisme.", qui: "Historiens « révisionnistes », Christopher Goscha, mémoire de la diaspora" }
          ],
          etat: "Les historiens reconnaissent de plus en plus la double nature du conflit : guerre contre l'intervention étrangère et guerre entre Vietnamiens."
        }
      ],
      moinsConnu: "La réforme agraire du Nord (1953 à 1956) a fait des milliers de victimes, souvent des paysans accusés à tort d'être propriétaires. Le régime lui-même a reconnu des « erreurs » en 1956.",
      evenements: [
        { annee: 1945, titre: "Proclamation de l'indépendance à Hanoï", lieu: [21.04, 105.83] },
        { annee: 1954, titre: "Điện Biên Phủ et accords de Genève", lieu: [21.39, 103.02] },
        { annee: 1963, titre: "Immolation de Thích Quảng Đức, coup contre Diệm", lieu: [10.78, 106.7] },
        { annee: 1968, titre: "Offensive du Têt, massacre de Mỹ Lai", lieu: [15.18, 108.87] },
        { annee: 1975, titre: "Chute de Saigon", lieu: [10.78, 106.7] }
      ]
    },
    {
      titre: 'Le Vietnam réunifié',
      debut: 1975, fin: 2026,
      chapo: "Après les années difficiles de l'après-guerre, le Đổi Mới ouvre l'économie : le Vietnam devient l'un des pays à la croissance la plus rapide du monde, sous un parti unique.",
      recit: [
        "Le pays est réunifié en 1976. Des centaines de milliers de Sud-Vietnamiens sont envoyés en camps de rééducation. Plus d'un million de personnes fuient, souvent par la mer : ce sont les « boat people ». Le Vietnam envahit le Cambodge des Khmers rouges en 1978, puis subit une attaque chinoise en 1979.",
        "En 1986, le Đổi Mới (« renouveau ») introduit l'économie de marché. Les relations avec les États-Unis sont normalisées en 1995. Le Vietnam devient un grand pays exportateur, tandis que le Parti communiste garde le monopole du pouvoir."
      ],
      consensus: [
        "Plus d'un million de Vietnamiens ont fui le pays après 1975, dont beaucoup sont morts en mer.",
        "L'intervention vietnamienne au Cambodge a renversé le régime des Khmers rouges.",
        "Le Đổi Mới a permis une croissance rapide et un fort recul de la pauvreté."
      ],
      debats: [
        {
          question: "L'invasion du Cambodge en 1978 : libération ou occupation ?",
          positions: [
            { titre: "Une libération", texte: "Le Vietnam a mis fin au génocide perpétré par les Khmers rouges.", qui: "Gouvernement vietnamien, une partie des Cambodgiens" },
            { titre: "Une occupation", texte: "Le Vietnam est resté dix ans au Cambodge et y a installé un gouvernement à sa main.", qui: "Chine, pays de l'ASEAN, Occident à l'époque" }
          ],
          etat: "Les historiens reconnaissent que l'intervention a stoppé le génocide, tout en soulignant les intérêts stratégiques vietnamiens."
        }
      ],
      moinsConnu: "Une partie importante des boat people étaient des Vietnamiens d'origine chinoise (Hoa), poussés au départ par les persécutions et les nationalisations, surtout au moment de la guerre avec la Chine en 1979.",
      evenements: [
        { annee: 1976, titre: "Réunification officielle", lieu: [21.03, 105.85] },
        { annee: 1979, titre: "Prise de Phnom Penh et guerre sino-vietnamienne", lieu: [22.4, 106.0] },
        { annee: 1986, titre: "Lancement du Đổi Mới", lieu: [21.03, 105.85] },
        { annee: 1995, titre: "Normalisation avec les États-Unis, entrée dans l'ASEAN", lieu: [21.03, 105.85] }
      ]
    }
  ]
});
