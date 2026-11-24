HISTOIRE.ajouterPays({
  id: 'royaume-uni',
  nom: 'Royaume-Uni',
  region: 'europe-ouest',
  accroche: "Quatre nations sur deux îles, un empire qui couvrait un quart du monde et une mémoire impériale encore très disputée.",
  intro: "Le Royaume-Uni n'existe sous ce nom que depuis 1801. Avant lui, il y a eu des Bretons, des Romains, des Anglo-Saxons, des Vikings, des Normands, et quatre nations qui ne racontent pas la même histoire.",
  sources: "Simon Schama, A History of Britain ; Linda Colley, Britons ; David Olusoga, Black and British.",
  phases: [
    {
      titre: 'La Bretagne romaine',
      debut: 1, fin: 410,
      chapo: "Conquise à partir de 43, la province de Britannia reste aux marges de l'Empire, gardée par un mur face aux peuples du Nord.",
      recit: [
        "En l'an 1, l'île est peuplée de peuples celtes, en contact commercial avec la Gaule romaine. L'empereur Claude lance la conquête en 43. En 60 ou 61, la reine Boudicca des Icènes mène une grande révolte qui détruit Londinium avant d'être écrasée.",
        "Les Romains ne conquièrent jamais durablement l'Écosse. Le mur d'Hadrien, construit à partir de 122, marque la frontière. La province se couvre de villes, de routes et de villas. Au début du Ve siècle, Rome retire ses troupes et laisse les Bretons se défendre seuls."
      ],
      consensus: [
        "La conquête romaine commence en 43 sous Claude et ne s'étend jamais à toute l'Écosse.",
        "Londres est une fondation romaine.",
        "Le départ des légions vers 410 met fin à l'administration romaine."
      ],
      debats: [
        {
          question: "Les Bretons étaient-ils vraiment romanisés ?",
          positions: [
            { titre: "Une province romaine", texte: "Villes, villas, latin et monnaie montrent une intégration réelle, au moins dans le sud-est.", qui: "" },
            { titre: "Un vernis", texte: "La romanisation touchait surtout les élites et les zones militaires. Les campagnes et l'ouest restaient très largement bretons de langue et de mode de vie.", qui: "Archéologie récente" }
          ],
          etat: "L'idée d'une romanisation inégale selon les régions et les milieux sociaux fait aujourd'hui consensus."
        }
      ],
      moinsConnu: "La garnison du mur d'Hadrien était cosmopolite : des soldats venus de Syrie, des Pays-Bas actuels ou d'Afrique du Nord y ont servi. Une unité de « Maures » est attestée au IIIe siècle près de Carlisle.",
      evenements: [
        { annee: 43, titre: "Début de la conquête romaine", lieu: [51.28, 1.08] },
        { annee: 61, titre: "Révolte de Boudicca", lieu: [51.51, -0.09] },
        { annee: 122, titre: "Construction du mur d'Hadrien", lieu: [55.0, -2.3] },
        { annee: 410, titre: "Fin de l'administration romaine", lieu: [51.51, -0.12] }
      ]
    },
    {
      titre: 'Anglo-Saxons et Vikings',
      debut: 410, fin: 1066,
      chapo: "Des peuples venus de Germanie et de Scandinavie s'installent, tandis que l'Angleterre se forme lentement face aux royaumes celtes.",
      recit: [
        "Aux Ve et VIe siècles, Angles, Saxons et Jutes s'installent dans l'est et le sud de l'île. Plusieurs royaumes apparaissent : Northumbrie, Mercie, Wessex, Est-Anglie. Le christianisme revient par Rome (mission d'Augustin en 597) et par les moines irlandais.",
        "À partir de 793, les Vikings pillent puis s'installent dans le nord et l'est, le Danelaw. Alfred le Grand, roi du Wessex, leur résiste. Ses successeurs unifient l'Angleterre au Xe siècle. L'Écosse se forme au nord, le pays de Galles reste divisé en principautés."
      ],
      consensus: [
        "La langue anglaise est issue des parlers germaniques des Anglo-Saxons.",
        "Les Vikings ont durablement marqué le nord et l'est de l'Angleterre, jusque dans la langue.",
        "Un royaume d'Angleterre unifié existe au milieu du Xe siècle."
      ],
      debats: [
        {
          question: "L'arrivée des Anglo-Saxons : invasion massive ou élite minoritaire ?",
          positions: [
            { titre: "Remplacement de population", texte: "Les Bretons auraient été massacrés ou repoussés vers l'ouest, comme le suggèrent les textes anciens.", qui: "Gildas, Bède le Vénérable" },
            { titre: "Élite conquérante", texte: "Une minorité germanique aurait imposé sa langue et sa culture à une population restée majoritairement bretonne.", qui: "Archéologues des années 1990" },
            { titre: "Migration importante", texte: "L'ADN ancien montre une forte contribution génétique venue du continent dans l'est de l'Angleterre, avec des mélanges.", qui: "Études génétiques de 2022" }
          ],
          etat: "Les études génétiques récentes ont relancé l'hypothèse d'une migration importante, variable selon les régions, sans remplacement total."
        },
        {
          question: "Le roi Arthur a-t-il existé ?",
          positions: [
            { titre: "Un chef réel", texte: "Il pourrait s'inspirer d'un chef breton ayant résisté aux Saxons vers 500.", qui: "" },
            { titre: "Un mythe", texte: "Aucune source contemporaine ne le mentionne. Le personnage est construit plusieurs siècles plus tard.", qui: "Majorité des historiens" }
          ],
          etat: "La plupart des historiens considèrent Arthur comme une figure légendaire."
        }
      ],
      moinsConnu: "Les Vikings n'étaient pas seulement des pillards : ils ont fondé des villes marchandes comme York (Jorvik) et intégré l'Angleterre dans un réseau commercial allant de l'Irlande à Bagdad. Des monnaies arabes ont été retrouvées dans des trésors vikings anglais.",
      evenements: [
        { annee: 597, titre: "Mission d'Augustin à Canterbury", lieu: [51.28, 1.08] },
        { annee: 625, titre: "Sépulture royale de Sutton Hoo", lieu: [52.09, 1.34] },
        { annee: 793, titre: "Pillage du monastère de Lindisfarne", lieu: [55.67, -1.8] },
        { annee: 878, titre: "Alfred le Grand bat les Danois à Edington", lieu: [51.28, -2.1] },
        { annee: 927, titre: "Æthelstan, premier roi de toute l'Angleterre", lieu: [51.06, -1.31] }
      ]
    },
    {
      titre: "L'Angleterre médiévale",
      debut: 1066, fin: 1485,
      chapo: "La conquête normande fait de l'Angleterre un royaume tourné vers la France, où naissent les premières limites au pouvoir royal.",
      recit: [
        "En 1066, Guillaume de Normandie bat Harold à Hastings. Une élite francophone remplace l'aristocratie anglo-saxonne. Le Domesday Book (1086) recense le royaume. Les rois Plantagenêt contrôlent au XIIe siècle un vaste ensemble allant de l'Écosse aux Pyrénées.",
        "En 1215, les barons imposent à Jean sans Terre la Magna Carta. Le Parlement apparaît au XIIIe siècle. Édouard Ier conquiert le pays de Galles mais échoue en Écosse face à William Wallace et Robert Bruce. La guerre de Cent Ans puis la guerre des Deux-Roses déchirent le royaume jusqu'à l'avènement des Tudors en 1485."
      ],
      consensus: [
        "La conquête normande transforme l'aristocratie, l'Église et la langue anglaise.",
        "Le pays de Galles est conquis par l'Angleterre à la fin du XIIIe siècle.",
        "L'Écosse conserve son indépendance après la victoire de Bannockburn (1314)."
      ],
      debats: [
        {
          question: "La Magna Carta est-elle l'acte de naissance de la démocratie ?",
          positions: [
            { titre: "Un texte fondateur", texte: "Elle pose le principe que le roi est soumis à la loi et inspire plus tard les constitutions modernes.", qui: "Tradition whig, juristes américains" },
            { titre: "Un accord féodal", texte: "C'est un traité de paix entre un roi et ses barons, défendant leurs privilèges. Le pape l'annule quelques semaines plus tard.", qui: "Médiévistes" }
          ],
          etat: "Les historiens y voient un accord féodal devenu, des siècles plus tard, un mythe politique très puissant."
        }
      ],
      moinsConnu: "En 1290, Édouard Ier expulse tous les Juifs d'Angleterre, première expulsion générale d'un royaume européen. Ils ne seront officiellement réadmis qu'en 1656 sous Cromwell.",
      evenements: [
        { annee: 1066, titre: "Bataille de Hastings", lieu: [50.91, 0.49] },
        { annee: 1086, titre: "Domesday Book", lieu: [51.06, -1.31] },
        { annee: 1215, titre: "Magna Carta", lieu: [51.44, -0.56] },
        { annee: 1314, titre: "Bataille de Bannockburn", lieu: [56.09, -3.92] },
        { annee: 1381, titre: "Révolte des paysans", lieu: [51.51, -0.1] },
        { annee: 1485, titre: "Bataille de Bosworth, avènement des Tudors", lieu: [52.59, -1.41] }
      ]
    },
    {
      titre: 'Tudors, Stuarts et révolutions',
      debut: 1485, fin: 1707,
      chapo: "Rupture avec Rome, union des couronnes, guerres civiles et révolution : un siècle et demi qui fixe la monarchie parlementaire.",
      recit: [
        "Henri VIII rompt avec Rome en 1534 pour annuler son mariage et fonde l'Église d'Angleterre. Élisabeth Ier consolide le protestantisme et repousse l'Invincible Armada espagnole en 1588. En 1603, Jacques VI d'Écosse devient aussi roi d'Angleterre.",
        "Les conflits entre la couronne et le Parlement mènent aux guerres civiles des années 1640. Charles Ier est exécuté en 1649 et Cromwell gouverne une république. La monarchie est restaurée en 1660, puis la « Glorieuse Révolution » de 1688 installe Guillaume d'Orange et limite les pouvoirs du roi. En 1707, l'Acte d'Union crée la Grande-Bretagne."
      ],
      consensus: [
        "La Réforme anglaise est d'abord une décision politique du roi avant d'être un mouvement religieux.",
        "Le Bill of Rights (1689) établit la supériorité du Parlement sur la couronne.",
        "L'Acte d'Union de 1707 fusionne les parlements anglais et écossais."
      ],
      debats: [
        {
          question: "La « Glorieuse Révolution » était-elle pacifique et consensuelle ?",
          positions: [
            { titre: "Une révolution sans violence", texte: "Le changement de roi s'est fait presque sans combat en Angleterre et a fondé une monarchie modérée.", qui: "Thomas Macaulay, tradition whig" },
            { titre: "Une invasion et des guerres", texte: "C'est une invasion néerlandaise réussie, suivie de guerres sanglantes en Irlande et en Écosse, et de discriminations durables contre les catholiques.", qui: "Steve Pincus, historiens irlandais" }
          ],
          etat: "Le caractère « glorieux » et pacifique est contesté : il ne vaut que pour l'Angleterre, et encore partiellement."
        }
      ],
      moinsConnu: "La conquête de l'Irlande par Cromwell (1649 à 1653) a été d'une violence extrême, avec massacres, famines et confiscations massives de terres au profit de colons protestants. Elle reste un épisode central de la mémoire irlandaise.",
      evenements: [
        { annee: 1534, titre: "Acte de suprématie", lieu: [51.5, -0.12] },
        { annee: 1588, titre: "Défaite de l'Invincible Armada", lieu: [50.3, -3.5] },
        { annee: 1603, titre: "Union des couronnes", lieu: [55.95, -3.19] },
        { annee: 1649, titre: "Exécution de Charles Ier", lieu: [51.504, -0.126] },
        { annee: 1688, titre: "Glorieuse Révolution", lieu: [50.4, -3.5] },
        { annee: 1707, titre: "Acte d'Union : naissance de la Grande-Bretagne", lieu: [55.95, -3.19] }
      ]
    },
    {
      titre: "Commerce, industrie et empire",
      debut: 1707, fin: 1914,
      chapo: "Première puissance industrielle et maritime, la Grande-Bretagne bâtit le plus grand empire de l'histoire.",
      recit: [
        "Au XVIIIe siècle, la Grande-Bretagne domine la traite atlantique, s'impose en Inde et en Amérique du Nord, mais perd les Treize Colonies en 1783. La révolution industrielle démarre dans le nord de l'Angleterre : machine à vapeur, textile, charbon, chemins de fer. En 1801, l'Irlande est intégrée : naît le Royaume-Uni.",
        "La traite est abolie en 1807, l'esclavage en 1833. Sous Victoria, l'empire s'étend sur tous les continents. Les villes industrielles connaissent misère et réformes. En Irlande, la Grande Famine (1845 à 1852) tue environ un million de personnes et en pousse un autre million à l'exil."
      ],
      consensus: [
        "La révolution industrielle commence en Grande-Bretagne au XVIIIe siècle.",
        "La Grande-Bretagne a été le premier transporteur d'esclaves au XVIIIe siècle, avant d'abolir la traite en 1807.",
        "Lors de l'abolition de 1833, ce sont les propriétaires d'esclaves qui ont été indemnisés, pas les esclaves."
      ],
      debats: [
        {
          question: "L'Empire britannique : bilan « civilisateur » ou système d'exploitation ?",
          positions: [
            { titre: "Un empire modernisateur", texte: "L'empire aurait diffusé le libre-échange, le droit, le parlementarisme et l'anglais, posant les bases de la mondialisation.", qui: "Niall Ferguson" },
            { titre: "Un empire prédateur", texte: "Famines en Inde, répressions sanglantes, camps au Kenya, ponction économique : l'empire a enrichi la métropole au détriment des colonisés.", qui: "Shashi Tharoor, Caroline Elkins" }
          ],
          etat: "Les historiens de l'empire décrivent un système fondé sur la domination et la violence, tout en étudiant ses héritages complexes. Le débat public britannique reste très polarisé."
        },
        {
          question: "La Grande Famine irlandaise : catastrophe naturelle ou responsabilité politique ?",
          positions: [
            { titre: "Un fléau naturel", texte: "Le mildiou détruit la pomme de terre, base de l'alimentation, et l'État n'avait pas les moyens d'y faire face.", qui: "" },
            { titre: "Une faute politique", texte: "L'Irlande continue d'exporter des céréales pendant la famine. Le dogme du laisser-faire et le mépris envers les Irlandais aggravent le désastre.", qui: "Cormac Ó Gráda, Christine Kinealy" }
          ],
          etat: "La responsabilité du gouvernement britannique est largement reconnue. Le terme de génocide reste minoritaire chez les historiens."
        }
      ],
      moinsConnu: "Le travail des enfants dans les mines et les filatures était massif au début du XIXe siècle, avec des enfants de cinq ou six ans. La prospérité industrielle s'est aussi construite sur le coton cultivé par des esclaves dans le sud des États-Unis.",
      evenements: [
        { annee: 1757, titre: "Bataille de Plassey : début de la domination en Inde", lieu: [23.8, 88.25] },
        { annee: 1769, titre: "Machine à vapeur de Watt", lieu: [55.86, -4.25] },
        { annee: 1807, titre: "Abolition de la traite", lieu: [51.5, -0.12] },
        { annee: 1830, titre: "Ligne Liverpool-Manchester", lieu: [53.45, -2.6] },
        { annee: 1846, titre: "Grande Famine en Irlande", lieu: [53.35, -6.26] },
        { annee: 1877, titre: "Victoria proclamée impératrice des Indes", lieu: [28.65, 77.23] }
      ]
    },
    {
      titre: "Guerres mondiales et fin de l'empire",
      debut: 1914, fin: 1973,
      chapo: "Victorieux mais épuisé par deux guerres mondiales, le Royaume-Uni perd son empire et invente l'État-providence.",
      recit: [
        "La Première Guerre mondiale coûte près de 900 000 morts à l'Empire. En Irlande, l'insurrection de Pâques (1916) mène à la guerre d'indépendance et à la partition de 1921. En 1940, sous Churchill, le pays résiste seul face à l'Allemagne nazie lors de la bataille d'Angleterre.",
        "Après 1945, le gouvernement travailliste crée le National Health Service et nationalise des industries. L'Inde devient indépendante en 1947 dans une partition sanglante. La crise de Suez (1956) révèle la fin de la puissance impériale. Des immigrés des Caraïbes, d'Inde et du Pakistan viennent reconstruire le pays."
      ],
      consensus: [
        "La résistance britannique de 1940 a été décisive pour la suite de la Seconde Guerre mondiale.",
        "La création du NHS en 1948 reste l'un des piliers de l'identité britannique.",
        "La décolonisation britannique a été rapide entre 1947 et le milieu des années 1960."
      ],
      debats: [
        {
          question: "Churchill : sauveur de la nation ou impérialiste sans scrupules ?",
          positions: [
            { titre: "L'homme de 1940", texte: "Son refus de négocier avec Hitler en 1940 a sauvé le pays et l'Europe libre.", qui: "Andrew Roberts" },
            { titre: "L'impérialiste", texte: "Hostile à l'indépendance indienne, il porte une responsabilité dans la gestion de la famine du Bengale (1943) qui fait environ trois millions de morts.", qui: "Madhusree Mukerjee, historiens indiens" }
          ],
          etat: "Les deux aspects sont documentés. Le degré de sa responsabilité dans la famine du Bengale reste discuté parmi les historiens."
        },
        {
          question: "La décolonisation britannique a-t-elle été « pacifique » ?",
          positions: [
            { titre: "Un retrait ordonné", texte: "Comparée aux guerres française et portugaise, la Grande-Bretagne aurait négocié sa sortie.", qui: "Récit officiel longtemps dominant" },
            { titre: "Des guerres oubliées", texte: "Malaisie, Kenya, Chypre, Aden : la répression a été violente. Au Kenya, des dizaines de milliers de Kikuyu ont été internés et torturés.", qui: "Caroline Elkins, David Anderson" }
          ],
          etat: "Le mythe d'une décolonisation pacifique est abandonné par les historiens. Le gouvernement britannique a indemnisé des victimes kényanes en 2013."
        }
      ],
      moinsConnu: "La « génération Windrush », venue des Caraïbes à partir de 1948 à l'appel du gouvernement, a subi un racisme ouvert. En 2018, le scandale Windrush a révélé que certains d'entre eux, pourtant citoyens, avaient été menacés d'expulsion.",
      evenements: [
        { annee: 1916, titre: "Insurrection de Pâques à Dublin", lieu: [53.35, -6.26] },
        { annee: 1921, titre: "Traité anglo-irlandais et partition de l'Irlande", lieu: [54.6, -5.93] },
        { annee: 1940, titre: "Bataille d'Angleterre", lieu: [51.3, 0.5] },
        { annee: 1947, titre: "Indépendance et partition de l'Inde", lieu: [31.6, 74.87] },
        { annee: 1948, titre: "Création du NHS et arrivée du Windrush", lieu: [51.45, 0.35] },
        { annee: 1956, titre: "Crise de Suez", lieu: [30.6, 32.3] }
      ]
    },
    {
      titre: 'Le Royaume-Uni contemporain',
      debut: 1973, fin: 2026,
      chapo: "Entrée puis sortie de l'Europe, thatchérisme, paix en Irlande du Nord et poussée des nations : un royaume en question.",
      recit: [
        "Le Royaume-Uni entre dans la Communauté européenne en 1973. Margaret Thatcher (1979 à 1990) privatise, affronte les syndicats et transforme l'économie. En Irlande du Nord, les « Troubles » font environ 3 500 morts avant l'accord du Vendredi saint (1998).",
        "L'Écosse et le pays de Galles obtiennent leurs propres parlements en 1999. Les Écossais rejettent l'indépendance en 2014. En 2016, les Britanniques votent pour quitter l'Union européenne, une sortie effective en 2020 qui reste un sujet de division."
      ],
      consensus: [
        "Le thatchérisme a profondément transformé l'économie britannique, au prix d'une désindustrialisation rapide.",
        "L'accord du Vendredi saint (1998) a mis fin à l'essentiel de la violence en Irlande du Nord.",
        "Le Brexit a été voté à une courte majorité (52 %) avec de fortes différences entre nations et générations."
      ],
      debats: [
        {
          question: "Le Brexit : reconquête de souveraineté ou repli nostalgique ?",
          positions: [
            { titre: "Souveraineté retrouvée", texte: "Le vote exprimerait une volonté démocratique de reprendre le contrôle des lois, des frontières et du commerce.", qui: "Partisans du Leave" },
            { titre: "Nostalgie impériale", texte: "Le vote aurait été nourri par un récit idéalisé du passé impérial et de 1940, et par le rejet de l'immigration.", qui: "Danny Dorling, Fintan O'Toole" }
          ],
          etat: "Les politistes soulignent la diversité des motivations des électeurs. Le rôle de la mémoire impériale est débattu."
        }
      ],
      moinsConnu: "Le « Bloody Sunday » de 1972 à Derry, où des parachutistes britanniques tuent 14 manifestants civils, n'a été officiellement reconnu comme injustifié qu'en 2010, après une première enquête qui avait blanchi les soldats.",
      evenements: [
        { annee: 1973, titre: "Entrée dans la CEE", lieu: [50.85, 4.35] },
        { annee: 1984, titre: "Grève des mineurs", lieu: [53.55, -1.48] },
        { annee: 1998, titre: "Accord du Vendredi saint", lieu: [54.6, -5.93] },
        { annee: 2016, titre: "Référendum sur le Brexit", lieu: [51.5, -0.12] }
      ]
    }
  ]
});
