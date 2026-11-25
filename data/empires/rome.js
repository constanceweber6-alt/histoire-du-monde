HISTOIRE.ajouterEmpire({
  id: 'rome',
  nom: 'Empire romain',
  region: 'europe-sud',
  aire: "Tout le pourtour de la Méditerranée",
  debut: -27, fin: 476,
  accroche: "L'empire qui a fait de la Méditerranée un lac intérieur. Sa chute en Occident est la plus étudiée de l'histoire : un historien a compté plus de deux cents causes proposées.",
  intro: "À partir d'Auguste, Rome gouverne un empire qui va de l'Écosse à l'Égypte et de l'Espagne à la Mésopotamie, avec peut-être soixante millions d'habitants. Il traverse une grave crise au IIIe siècle, se réorganise, se christianise, puis se divise. La partie occidentale disparaît au Ve siècle, tandis que la partie orientale dure encore mille ans à Constantinople. Pourquoi l'Occident est-il tombé ? La question n'a jamais cessé d'être débattue.",
  sources: "Edward Gibbon, Histoire du déclin et de la chute de l'Empire romain ; Peter Brown, Le monde de l'Antiquité tardive ; Peter Heather, The Fall of the Roman Empire ; Bryan Ward-Perkins, La chute de Rome ; Kyle Harper, Comment l'Empire romain s'est effondré.",
  paysActuels: ['italie', 'france', 'espagne', 'grece', 'turquie', 'egypte', 'tunisie', 'royaume-uni', 'syrie'],
  phases: [
    {
      titre: "Le principat et la paix romaine",
      debut: -27, fin: 192,
      chapo: "Auguste transforme la République en empire tout en gardant ses apparences. Deux siècles de paix relative suivent, la pax romana.",
      recit: [
        "En 27 av. J.-C., Octave reçoit le titre d'Auguste. Il garde les institutions républicaines mais concentre tous les pouvoirs. Ses successeurs connaissent des règnes violents, mais l'empire reste stable : routes, villes, droit et armée de métier unifient le monde méditerranéen.",
        "Sous Trajan, en 117, l'empire atteint son extension maximale. Les Antonins sont souvent présentés comme les « bons empereurs ». Une grande épidémie, la peste antonine, frappe l'empire à partir de 165, sous Marc Aurèle."
      ],
      consensus: [
        "L'empire atteint son extension maximale sous Trajan.",
        "La paix intérieure a favorisé le commerce et l'urbanisation.",
        "L'esclavage était au cœur de l'économie romaine."
      ],
      debats: [
        {
          question: "La pax romana : âge d'or ou paix imposée ?",
          positions: [
            { titre: "Un âge d'or", texte: "Pour Gibbon, l'époque des Antonins fut la période la plus heureuse de l'histoire humaine : sécurité, prospérité, droit commun.", qui: "Edward Gibbon, tradition classique" },
            { titre: "Une paix des vainqueurs", texte: "Cette paix reposait sur des conquêtes brutales, l'esclavage de millions de personnes et l'écrasement des révoltes, comme en Judée ou en Bretagne.", qui: "Historiens de l'impérialisme et des provinces" }
          ],
          etat: "Les historiens reconnaissent la prospérité réelle de l'époque tout en rappelant son coût pour les peuples conquis et les esclaves."
        }
      ],
      moinsConnu: "Le mur d'Hadrien n'était pas une frontière fermée : des portes régulières permettaient de contrôler et de taxer les passages, et des soldats venus de Syrie ou d'Irak y étaient stationnés.",
      evenements: [
        { annee: -27, titre: "Octave devient Auguste", lieu: [41.89, 12.48] },
        { annee: 117, titre: "Extension maximale sous Trajan", lieu: [41.89, 12.48] },
        { annee: 122, titre: "Construction du mur d'Hadrien", lieu: [55.0, -2.3] },
        { annee: 165, titre: "Début de la peste antonine", lieu: [41.89, 12.48] }
      ],
      acteurs: [
        ["Auguste", "63 av. J.-C. à 14 apr. J.-C.", "Premier empereur"],
        ["Trajan", "53-117", "Empereur de l'extension maximale"],
        ["Marc Aurèle", "121-180", "Empereur philosophe"]
      ]
    },
    {
      titre: "Crise et réinvention",
      debut: 192, fin: 395,
      chapo: "Au IIIe siècle, l'empire manque de se disloquer. Dioclétien et Constantin le réorganisent, le christianisme devient religion d'État.",
      recit: [
        "Entre 235 et 284, une vingtaine d'empereurs se succèdent, presque tous assassinés. Les Perses sassanides capturent l'empereur Valérien en 260. Des empires séparatistes naissent en Gaule et à Palmyre. La monnaie s'effondre.",
        "Dioclétien partage le pouvoir entre quatre empereurs, la tétrarchie, et renforce l'armée et l'impôt. Constantin se convertit au christianisme et fonde Constantinople en 330. En 378, les Goths tuent l'empereur Valens à Andrinople. Théodose fait du christianisme la religion officielle, et l'empire est partagé entre ses deux fils à sa mort en 395."
      ],
      consensus: [
        "Le IIIe siècle a été une période de guerres civiles et d'invasions.",
        "Dioclétien et Constantin ont profondément transformé l'État.",
        "La défaite d'Andrinople a installé durablement les Goths dans l'empire."
      ],
      debats: [
        {
          question: "Le christianisme a-t-il affaibli l'empire ?",
          positions: [
            { titre: "Oui", texte: "Pour Gibbon, le christianisme a détourné les énergies de la défense de l'État vers le salut de l'âme et enrichi l'Église aux dépens du trésor.", qui: "Edward Gibbon (XVIIIe siècle)" },
            { titre: "Non", texte: "L'Orient, plus chrétien que l'Occident, a survécu mille ans. L'Église a même servi de relais à l'administration impériale.", qui: "Peter Brown, la plupart des historiens actuels" }
          ],
          etat: "La thèse de Gibbon n'est plus défendue par les spécialistes."
        }
      ],
      moinsConnu: "En 212, l'édit de Caracalla accorda la citoyenneté romaine à presque tous les hommes libres de l'empire, soit plusieurs dizaines de millions de personnes.",
      evenements: [
        { annee: 212, titre: "Citoyenneté pour tous les hommes libres", lieu: [41.89, 12.48] },
        { annee: 260, titre: "L'empereur Valérien capturé par les Perses", lieu: [37.0, 38.8] },
        { annee: 284, titre: "Dioclétien proclamé empereur à Nicomédie", lieu: [40.77, 29.92] },
        { annee: 330, titre: "Fondation de Constantinople", lieu: [41.01, 28.98] },
        { annee: 378, titre: "Défaite d'Andrinople", lieu: [41.68, 26.56] }
      ],
      acteurs: [
        ["Dioclétien", "vers 244-311", "Réorganisateur de l'empire"],
        ["Zénobie", "IIIe siècle", "Reine de Palmyre en rébellion"],
        ["Constantin Ier", "vers 272-337", "Premier empereur chrétien"],
        ["Théodose Ier", "347-395", "Dernier empereur à régner sur tout l'empire"]
      ]
    },
    {
      titre: "La chute de l'Occident",
      debut: 395, fin: 476,
      chapo: "Rome est pillée en 410, l'Afrique tombe aux mains des Vandales en 439. En 476, un chef germanique dépose le dernier empereur d'Occident.",
      recit: [
        "En Occident, les généraux, souvent d'origine germanique, gouvernent à la place d'empereurs faibles. Les Wisigoths d'Alaric pillent Rome en 410, un choc immense. Les Vandales prennent Carthage en 439 et privent l'Occident de sa province la plus riche.",
        "Attila est arrêté en Gaule en 451. Rome est de nouveau pillée en 455. En 476, Odoacre dépose le jeune Romulus Augustule et renvoie les insignes impériaux à Constantinople. Beaucoup de contemporains n'y voient pas une rupture."
      ],
      consensus: [
        "L'empire d'Orient survit, l'Occident se fragmente en royaumes germaniques.",
        "La perte de l'Afrique a privé l'Occident d'une grande partie de ses impôts.",
        "La date de 476 a été choisie après coup comme symbole."
      ],
      debats: [
        {
          question: "Pourquoi l'Empire romain d'Occident est-il tombé ?",
          positions: [
            { titre: "Des invasions", texte: "L'empire a été abattu de l'extérieur : la poussée des Huns a jeté les peuples germaniques sur les frontières, et l'Occident n'a pas pu absorber le choc.", qui: "Peter Heather" },
            { titre: "Une transformation", texte: "Il n'y a pas eu de chute brutale mais une lente mutation : les élites romaines se sont adaptées aux rois germaniques, la culture a continué.", qui: "Peter Brown, Walter Goffart" },
            { titre: "Un effondrement réel", texte: "L'archéologie montre un recul spectaculaire : moins de poterie, de monnaie, de constructions, du bétail plus petit. Ce fut une vraie catastrophe.", qui: "Bryan Ward-Perkins" }
          ],
          etat: "Le débat reste ouvert. Les recherches récentes ajoutent le climat et les épidémies (Kyle Harper), sans faire consensus sur leur poids exact."
        }
      ],
      moinsConnu: "L'historien allemand Alexander Demandt a recensé 210 causes proposées pour la chute de Rome, de la décadence morale à l'intoxication au plomb.",
      evenements: [
        { annee: 410, titre: "Sac de Rome par Alaric", lieu: [41.89, 12.48] },
        { annee: 439, titre: "Les Vandales prennent Carthage", lieu: [36.85, 10.33] },
        { annee: 451, titre: "Bataille des champs Catalauniques", lieu: [48.8, 4.4] },
        { annee: 455, titre: "Sac de Rome par les Vandales", lieu: [41.89, 12.48] },
        { annee: 476, titre: "Odoacre dépose Romulus Augustule", lieu: [44.42, 12.2] }
      ],
      acteurs: [
        ["Stilicon", "vers 359-408", "Général d'origine vandale, défenseur de l'Occident"],
        ["Alaric Ier", "vers 370-410", "Roi des Wisigoths"],
        ["Attila", "mort en 453", "Roi des Huns"],
        ["Odoacre", "vers 433-493", "Chef qui dépose le dernier empereur"]
      ]
    }
  ],
  lecons: [
    {
      titre: "Les guerres civiles coûtent plus cher que les ennemis",
      texte: "Au IIIe siècle comme au Ve, les Romains ont dépensé une énergie considérable à se battre entre eux pour le trône, retirant des troupes des frontières au pire moment.",
      objection: "Les guerres civiles sont aussi le symptôme d'une crise plus profonde, notamment fiscale et militaire, plutôt que sa cause."
    },
    {
      titre: "Un État vit de ses impôts",
      texte: "Quand l'Occident perd l'Afrique et l'Espagne, il perd les recettes qui payaient l'armée. Sans armée, il ne peut pas reprendre ses provinces : l'engrenage est fatal.",
      objection: "L'Orient a lui aussi perdu des provinces majeures et a survécu, ce qui montre que d'autres facteurs, comme la géographie de Constantinople, ont compté."
    },
    {
      titre: "Se méfier des leçons trop faciles",
      texte: "La chute de Rome est utilisée depuis des siècles pour défendre des causes actuelles : contre le luxe, contre le christianisme, contre l'immigration. Les Goths entrés dans l'empire étaient des armées en armes, négociant avec un État affaibli, pas des migrants ordinaires.",
      objection: "Certains auteurs maintiennent que l'intégration ratée de groupes armés autonomes, les fédérés, a bien joué un rôle, et que la question de l'intégration n'est pas absurde à poser."
    }
  ]
});
