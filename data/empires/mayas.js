HISTOIRE.ajouterEmpire({
  id: 'mayas',
  nom: 'Royaumes mayas classiques',
  region: 'amerique-nord',
  aire: "Sud du Mexique, Guatemala, Belize, Honduras",
  debut: 250, fin: 950,
  accroche: "Des dizaines de cités-États rivales, Tikal, Calakmul, Palenque, Copán, avec écriture, astronomie et pyramides. Leur abandon au IXe siècle est le cas d'école des débats sur l'effondrement.",
  intro: "Les Mayas n'ont jamais formé un empire unique, mais un ensemble de royaumes gouvernés par des rois sacrés, alliés ou rivaux. À la période classique, de 250 à 900 environ, ils bâtissent des cités monumentales dans les forêts des basses terres, développent l'écriture la plus complète des Amériques et un calendrier très précis. Puis, en un siècle, les grandes cités du sud sont abandonnées. Les Mayas, eux, n'ont pas disparu : des millions de personnes parlent encore leurs langues.",
  sources: "Simon Martin et Nikolai Grube, Chronicle of the Maya Kings and Queens ; Michael Coe, The Maya ; Patricia McAnany et Norman Yoffee, Questioning Collapse ; Jared Diamond, Effondrement.",
  paysActuels: ['mexique', 'guatemala', 'honduras', 'salvador'],
  phases: [
    {
      titre: "Le classique ancien",
      debut: 250, fin: 562,
      chapo: "Les rois mayas érigent des stèles datées et des pyramides. La grande cité de Teotihuacan, au centre du Mexique, intervient à Tikal en 378.",
      recit: [
        "Vers 250, les rois commencent à ériger des stèles gravées de dates en compte long, qui permettent de suivre leurs règnes. Tikal, au Guatemala, devient l'une des cités les plus puissantes.",
        "En 378, un personnage venu de Teotihuacan, Siyaj K'ak', arrive à Tikal le jour même de la mort du roi local, et une nouvelle dynastie liée à Teotihuacan s'installe. Au VIe siècle, la dynastie du Serpent, à Calakmul, construit un réseau d'alliances rival."
      ],
      consensus: [
        "Le monde maya classique était politiquement divisé en cités-États.",
        "L'écriture maya a été en grande partie déchiffrée depuis les années 1970-1980.",
        "Teotihuacan a exercé une forte influence sur Tikal au IVe siècle."
      ],
      debats: [
        {
          question: "L'« entrée » de 378 à Tikal : conquête ou alliance ?",
          positions: [
            { titre: "Une conquête", texte: "La mort du roi le jour de l'arrivée de Siyaj K'ak' et le changement de dynastie suggèrent un coup de force militaire de Teotihuacan.", qui: "David Stuart et d'autres épigraphistes" },
            { titre: "Une alliance ou une influence", texte: "Teotihuacan aurait plutôt soutenu une faction locale ; parler de conquête projette des modèles impériaux sur une relation mal connue.", qui: "Autres mayanistes" }
          ],
          etat: "L'idée d'une intervention politique de Teotihuacan est largement acceptée ; sa nature exacte reste débattue."
        }
      ],
      moinsConnu: "Les Mayas utilisaient le zéro dans leur système de numération, plusieurs siècles avant qu'il ne se diffuse en Europe.",
      evenements: [
        { annee: 292, titre: "Plus ancienne stèle datée de Tikal", lieu: [17.22, -89.62] },
        { annee: 378, titre: "Arrivée de Siyaj K'ak' à Tikal", lieu: [17.22, -89.62] },
        { annee: 426, titre: "Fondation de la dynastie de Copán", lieu: [14.84, -89.14] }
      ],
      acteurs: [
        ["Siyaj K'ak'", "IVe siècle", "Envoyé de Teotihuacan à Tikal"],
        ["Yax Nuun Ayiin Ier", "IVe-Ve siècles", "Roi de Tikal lié à Teotihuacan"],
        ["K'inich Yax K'uk' Mo'", "Ve siècle", "Fondateur de la dynastie de Copán"]
      ]
    },
    {
      titre: "Tikal contre Calakmul",
      debut: 562, fin: 800,
      chapo: "Calakmul bat Tikal en 562. Pendant plus d'un siècle, les deux superpuissances s'affrontent par alliés interposés, tandis que Palenque et Copán brillent.",
      recit: [
        "En 562, Calakmul et son allié Caracol battent Tikal, qui entre dans un long silence. Calakmul domine un réseau de cités vassales. À Palenque, le roi Pakal règne près de soixante-dix ans et se fait enterrer dans une tombe somptueuse sous le temple des Inscriptions.",
        "En 695, Tikal prend sa revanche sur Calakmul. Le VIIIe siècle est une période de prospérité et de forte population, mais aussi de guerres incessantes entre cités. À Copán, le roi « 18 Lapin » est capturé et sacrifié par son vassal de Quiriguá en 738."
      ],
      consensus: [
        "La rivalité entre Tikal et Calakmul a structuré la politique maya.",
        "La population des basses terres a atteint un maximum au VIIIe siècle.",
        "Les rois capturés étaient souvent sacrifiés."
      ],
      debats: [
        {
          question: "Combien de personnes vivaient dans les basses terres mayas ?",
          positions: [
            { titre: "Des populations très denses", texte: "Les relevés au laser de 2018 au Guatemala ont révélé des dizaines de milliers de structures inconnues, suggérant des millions d'habitants.", qui: "Projet PACUNAM, Marcello Canuto, Francisco Estrada-Belli" },
            { titre: "Des estimations à prendre avec prudence", texte: "Toutes les structures n'étaient pas habitées en même temps, et les calculs de population à partir des bâtiments restent très incertains.", qui: "Archéologues plus prudents" }
          ],
          etat: "L'idée d'une population bien plus nombreuse qu'on ne le pensait est acceptée, mais les chiffres varient beaucoup."
        }
      ],
      moinsConnu: "Des reines ont gouverné plusieurs cités mayas, comme Ix Yohl Ik'nal à Palenque au VIe siècle ou la Dame Six Ciel à Naranjo au VIIe siècle.",
      evenements: [
        { annee: 562, titre: "Calakmul et Caracol battent Tikal", lieu: [17.22, -89.62] },
        { annee: 615, titre: "Avènement de Pakal à Palenque", lieu: [17.48, -92.05] },
        { annee: 695, titre: "Revanche de Tikal sur Calakmul", lieu: [18.1, -89.81] },
        { annee: 738, titre: "« 18 Lapin » sacrifié à Quiriguá", lieu: [15.27, -89.04] }
      ],
      acteurs: [
        ["Yuknoom Ch'een II", "600-vers 686", "Roi de Calakmul à son apogée"],
        ["K'inich Janaab' Pakal", "603-683", "Roi de Palenque"],
        ["Dame Six Ciel", "VIIe-VIIIe siècles", "Reine de Naranjo"],
        ["Jasaw Chan K'awiil Ier", "règne 682-734", "Roi de Tikal, vainqueur de Calakmul"]
      ]
    },
    {
      titre: "L'abandon des cités du sud",
      debut: 800, fin: 950,
      chapo: "En un peu plus d'un siècle, les rois cessent d'ériger des stèles et les grandes cités du sud se vident. Le nord du Yucatán, autour de Chichén Itzá, prend le relais.",
      recit: [
        "À partir de 800, les dates gravées se raréfient. Les dernières inscriptions en compte long datent du début du Xe siècle, en 909 à Toniná. Les cités de Copán, Palenque, Tikal ou Calakmul perdent leurs rois puis la plus grande partie de leurs habitants.",
        "Au même moment, Chichén Itzá prospère au nord du Yucatán, puis Mayapán au XIIIe siècle. Les Mayas continuent à vivre dans la région et résistent longtemps aux Espagnols : la dernière cité indépendante, Nojpetén, tombe en 1697."
      ],
      consensus: [
        "Le système des rois sacrés des basses terres du sud s'est effondré au IXe siècle.",
        "Les populations ont migré ou diminué, mais n'ont pas disparu.",
        "Le nord du Yucatán a connu une phase de prospérité à la même époque."
      ],
      debats: [
        {
          question: "Pourquoi les cités mayas du sud ont-elles été abandonnées ?",
          positions: [
            { titre: "Des sécheresses", texte: "Les sédiments des lacs et les stalagmites montrent plusieurs sécheresses sévères entre 800 et 1000, dans une région qui dépendait des pluies.", qui: "Gerald Haug, David Hodell" },
            { titre: "L'épuisement de l'environnement", texte: "La déforestation et l'érosion causées par une population trop nombreuse ont rendu la région vulnérable.", qui: "Jared Diamond" },
            { titre: "Une crise politique", texte: "Les guerres incessantes et la perte de légitimité de rois qui promettaient la prospérité ont fait s'effondrer le système politique, poussant les gens à partir.", qui: "Simon Martin, Arthur Demarest" }
          ],
          etat: "La plupart des chercheurs combinent sécheresses et crise politique. Beaucoup refusent aussi le mot « effondrement », qui fait oublier la survie des Mayas."
        }
      ],
      moinsConnu: "La croyance selon laquelle le calendrier maya prédisait la fin du monde en 2012 est une invention moderne : la date marquait seulement la fin d'un grand cycle du calendrier.",
      evenements: [
        { annee: 822, titre: "Dernier monument royal de Copán", lieu: [14.84, -89.14] },
        { annee: 869, titre: "Dernière date connue à Tikal", lieu: [17.22, -89.62] },
        { annee: 900, titre: "Essor de Chichén Itzá", lieu: [20.68, -88.57] },
        { annee: 909, titre: "Dernière inscription en compte long, à Toniná", lieu: [16.9, -92.0] }
      ],
      acteurs: [
        ["Yax Pasaj Chan Yopaat", "règne 763-vers 810", "Dernier grand roi de Copán"],
        ["Jasaw Chan K'awiil II", "IXe siècle", "Dernier roi connu de Tikal"],
        ["K'ak'upakal", "IXe siècle", "Seigneur de Chichén Itzá"]
      ]
    }
  ],
  lecons: [
    {
      titre: "La rivalité permanente épuise tout le monde",
      texte: "Les cités mayas se sont fait la guerre pendant des siècles sans qu'aucune ne parvienne à unifier la région. Ces conflits ont mobilisé hommes et ressources au moment où le climat se dégradait.",
      objection: "La guerre maya était souvent limitée et rituelle pendant longtemps ; elle peut être un symptôme de la crise plus qu'une cause."
    },
    {
      titre: "Un pouvoir qui promet la prospérité perd tout s'il ne la livre plus",
      texte: "Les rois mayas se présentaient comme les intermédiaires des dieux, garants de la pluie et des récoltes. Face aux sécheresses, leur légitimité s'est effondrée.",
      objection: "Cette lecture est une hypothèse séduisante mais difficile à prouver : les inscriptions parlent peu des récoltes et des famines."
    },
    {
      titre: "Les royaumes tombent, les peuples restent",
      texte: "Parler de « disparition des Mayas » est faux : ce sont des royaumes et un système politique qui ont disparu. Leurs descendants vivent toujours au Mexique et en Amérique centrale.",
      objection: "Il y a bien eu une rupture majeure : écriture monumentale, grandes villes et royautés sacrées du sud ne se sont jamais relevées."
    }
  ]
});
