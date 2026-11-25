HISTOIRE.ajouterPays({
  id: 'salvador',
  nom: 'Salvador',
  region: 'amerique-nord',
  accroche: "Le village maya de Joya de Cerén figé sous les cendres, le royaume pipil de Cuzcatlán, l'indigo puis le café d'une oligarchie terrienne, le massacre de 1932, douze ans de guerre civile, les gangs, puis Nayib Bukele et son régime d'exception.",
  intro: "Le Salvador, plus petit et plus densément peuplé des pays d'Amérique centrale, est le seul à n'avoir pas de côte caraïbe. Une oligarchie du café y a longtemps dominé, appuyée par l'armée. Le massacre paysan de 1932 et la guerre civile de 1980 à 1992 ont profondément marqué le pays, puis la violence des gangs. Nayib Bukele, président depuis 2019, a fait chuter les homicides grâce à un régime d'exception très critiqué, et peut désormais se représenter sans limite.",
  sources: "Erik Ching, Authoritarian El Salvador ; Héctor Lindo-Fuentes, Erik Ching et Rafael Lara-Martínez, Remembering a Massacre in El Salvador ; Elisabeth Wood, Insurgent Collective Action and Civil War in El Salvador ; Payson Sheets, The Ceren Site.",
  phases: [
    {
      titre: "Volcans, Mayas et Pipils",
      debut: 1, fin: 1524,
      chapo: "Des villages mayas prospèrent dans l'ouest malgré de violentes éruptions. Les Pipils, de langue nahua, fondent ensuite le royaume de Cuzcatlán.",
      recit: [
        "Au Ve siècle, l'éruption du volcan Ilopango, l'une des plus fortes de l'histoire humaine récente, recouvre le centre du pays de cendres. Vers 600, une éruption plus petite ensevelit le village maya de Joya de Cerén, conservant maisons, jardins et objets du quotidien.",
        "À partir du Xe siècle, les Pipils, venus du Mexique, s'installent et fondent plusieurs seigneuries, dont Cuzcatlán. Ils cultivent le maïs, le cacao et le baumier, et parlent le nawat, une langue proche du nahuatl."
      ],
      consensus: [
        "L'éruption d'Ilopango a dévasté la région au Ve ou au VIe siècle.",
        "Joya de Cerén est un témoignage exceptionnel de la vie quotidienne maya.",
        "Les Pipils parlaient une langue nahua venue du Mexique."
      ],
      debats: [
        {
          question: "L'éruption d'Ilopango a-t-elle refroidi le climat mondial en 536 ?",
          positions: [
            { titre: "Une cause du refroidissement", texte: "L'éruption aurait projeté assez de soufre pour contribuer au refroidissement de 536, ressenti jusqu'en Europe et en Chine.", qui: "Robert Dull et ses collègues" },
            { titre: "Une date plus ancienne", texte: "De nouvelles datations placent l'éruption vers 431, ce qui l'écarterait des événements de 536.", qui: "Victoria Smith et ses collègues" }
          ],
          etat: "La datation vers 431 est de plus en plus retenue ; l'ampleur de l'éruption fait consensus."
        }
      ],
      moinsConnu: "Joya de Cerén a été découverte en 1976 par un conducteur de bulldozer qui nivelait le terrain pour construire des silos à grains ; on la surnomme la « Pompéi des Amériques ».",
      evenements: [
        { annee: 431, titre: "Éruption de l'Ilopango", lieu: [13.67, -89.05] },
        { annee: 600, titre: "Ensevelissement de Joya de Cerén", lieu: [13.83, -89.37] },
        { annee: 1000, titre: "Installation des Pipils", lieu: [13.73, -89.2] }
      ]
    },
    {
      titre: "Conquête et indigo",
      debut: 1524, fin: 1821,
      chapo: "Pedro de Alvarado conquiert les Pipils après une résistance acharnée. La province prospère grâce à l'indigo, cultivé sur de grands domaines.",
      recit: [
        "En 1524, Pedro de Alvarado affronte les Pipils à Acajutla, où il est blessé à la jambe. La conquête prend plus de quinze ans. San Salvador est fondée en 1525 puis déplacée plusieurs fois.",
        "La province, rattachée au royaume du Guatemala, se spécialise dans l'indigo, colorant bleu exporté vers l'Europe. Les grands domaines, les haciendas, exploitent le travail des communautés autochtones. En 1811, un premier soulèvement contre l'Espagne éclate à San Salvador."
      ],
      consensus: [
        "La conquête des Pipils a été longue et difficile.",
        "L'indigo est la principale richesse de la province coloniale.",
        "Le soulèvement de 1811 est l'un des premiers de l'isthme."
      ],
      debats: [
        {
          question: "Atlacatl a-t-il existé ?",
          positions: [
            { titre: "Un chef réel", texte: "Atlacatl aurait été le seigneur de Cuzcatlán qui résista à Alvarado.", qui: "Tradition nationale salvadorienne" },
            { titre: "Une figure inventée", texte: "Aucun document de la conquête ne mentionne ce nom, apparu au XIXe siècle pour donner un héros autochtone à la nation.", qui: "Historiens récents" }
          ],
          etat: "La plupart des historiens jugent Atlacatl légendaire, mais il reste une figure nationale."
        }
      ],
      moinsConnu: "Le nom de Salvador, le « Sauveur », vient de la ville de San Salvador, fondée par les Espagnols en l'honneur du Christ ; le pays porte officiellement le nom de « El Salvador ».",
      evenements: [
        { annee: 1524, titre: "Bataille d'Acajutla", lieu: [13.59, -89.83] },
        { annee: 1525, titre: "Fondation de San Salvador", lieu: [13.69, -89.19] },
        { annee: 1811, titre: "Premier cri d'indépendance", lieu: [13.69, -89.19] }
      ]
    },
    {
      titre: "La république du café",
      debut: 1821, fin: 1932,
      chapo: "Indépendant et membre de la Fédération centraméricaine, le Salvador devient une république du café, dominée par une oligarchie qui s'empare des terres communales.",
      recit: [
        "Le Salvador refuse l'annexion au Mexique en 1822 et joue un rôle central dans la Fédération centraméricaine, dont il est le dernier défenseur. À partir des années 1850, le café remplace l'indigo et gagne les pentes des volcans.",
        "En 1881 et 1882, des lois abolissent les terres communales et les ejidos des villages autochtones, au profit des planteurs. Une oligarchie de grandes familles contrôle la terre, le crédit et l'exportation. Les communautés pipils perdent leurs terres et deviennent des journaliers."
      ],
      consensus: [
        "Le café a transformé l'économie et la société au XIXe siècle.",
        "L'abolition des terres communales a profité aux planteurs.",
        "Une petite élite contrôle l'essentiel des richesses."
      ],
      debats: [
        {
          question: "Les « quatorze familles » : réalité ou mythe ?",
          positions: [
            { titre: "Une oligarchie fermée", texte: "Un petit groupe de familles aurait contrôlé la terre, les banques et le pouvoir politique.", qui: "Tradition populaire, mouvements de gauche" },
            { titre: "Une image simplificatrice", texte: "L'élite était plus large et changeante, et le nombre de quatorze est symbolique.", qui: "Jeffery Paige, historiens économistes" }
          ],
          etat: "L'expression est symbolique, mais la concentration de la richesse était réelle."
        }
      ],
      moinsConnu: "Le Salvador a été le dernier État à défendre la Fédération centraméricaine ; Francisco Morazán y établit la capitale fédérale en 1834.",
      evenements: [
        { annee: 1821, titre: "Indépendance", lieu: [13.69, -89.19] },
        { annee: 1834, titre: "Capitale fédérale à San Salvador", lieu: [13.69, -89.19] },
        { annee: 1881, titre: "Abolition des terres communales", lieu: [13.69, -89.19] },
        { annee: 1917, titre: "Séisme de San Salvador", lieu: [13.69, -89.19] }
      ]
    },
    {
      titre: "La Matanza, les militaires et la guerre civile",
      debut: 1932, fin: 1992,
      chapo: "Le massacre de 1932 ouvre un demi-siècle de régimes militaires. La répression mène à une guerre civile de douze ans, qui s'achève par les accords de paix de 1992.",
      recit: [
        "En janvier 1932, un soulèvement paysan dans l'ouest, préparé en partie par le Parti communiste de Farabundo Martí, est écrasé par le général Maximiliano Hernández Martínez. L'armée tue des milliers de paysans, surtout autochtones. Les militaires gouvernent ensuite le pays jusqu'en 1979.",
        "L'assassinat de l'archevêque Óscar Romero en mars 1980 précède la guerre entre l'armée et la guérilla du FMLN. Les escadrons de la mort et l'armée, soutenue par les États-Unis, commettent des massacres comme celui d'El Mozote en 1981. La guerre fait environ 75 000 morts avant les accords de Chapultepec, en 1992."
      ],
      consensus: [
        "La Matanza de 1932 a fait des milliers de victimes, surtout parmi les Pipils.",
        "La commission vérité de l'ONU a attribué la grande majorité des crimes de guerre à l'armée et aux escadrons de la mort.",
        "Les accords de paix de 1992 ont transformé le FMLN en parti politique."
      ],
      debats: [
        {
          question: "Combien de victimes lors de la Matanza de 1932 ?",
          positions: [
            { titre: "Environ 30 000", texte: "Ce chiffre, devenu traditionnel, montrerait l'ampleur d'un massacre ethnique.", qui: "Thomas Anderson, mémoire populaire" },
            { titre: "Moins de 10 000", texte: "Des recherches dans les registres paroissiaux et militaires suggèrent un chiffre plus bas, qui reste énorme pour la région.", qui: "Erik Ching, Jeffrey Gould" }
          ],
          etat: "Le chiffre reste discuté ; le caractère massif et ciblé de la répression fait consensus."
        },
        {
          question: "Le soulèvement de 1932 : révolte communiste ou indigène ?",
          positions: [
            { titre: "Une révolte communiste", texte: "Le Parti communiste a planifié l'insurrection, comme le montre le rôle de Farabundo Martí.", qui: "Historiographie militaire et anticommuniste, une partie de la gauche" },
            { titre: "Une révolte des communautés", texte: "Les communautés autochtones, dépossédées de leurs terres, ont agi selon leurs propres logiques, en alliance avec les communistes.", qui: "Jeffrey Gould, Aldo Lauria-Santiago" }
          ],
          etat: "Les historiens insistent sur l'alliance entre militants communistes et communautés autochtones."
        }
      ],
      moinsConnu: "Après 1932, de nombreux Pipils cessèrent de parler le nawat et de porter leurs vêtements traditionnels par peur d'être identifiés ; il ne reste aujourd'hui que quelques centaines de locuteurs.",
      evenements: [
        { annee: 1932, titre: "La Matanza", lieu: [13.72, -89.72] },
        { annee: 1969, titre: "Guerre du football contre le Honduras", lieu: [14.0, -88.9] },
        { annee: 1980, titre: "Assassinat d'Óscar Romero", lieu: [13.71, -89.22] },
        { annee: 1981, titre: "Massacre d'El Mozote", lieu: [13.9, -88.11] },
        { annee: 1989, titre: "Offensive du FMLN et assassinat des jésuites de l'UCA", lieu: [13.68, -89.24] },
        { annee: 1992, titre: "Accords de paix de Chapultepec", lieu: [19.42, -99.18] }
      ]
    },
    {
      titre: "Après-guerre, gangs et ère Bukele",
      debut: 1992, fin: 2026,
      chapo: "La paix laisse place à une violence des gangs parmi les pires du monde. Nayib Bukele, élu en 2019, l'écrase par un régime d'exception et concentre les pouvoirs.",
      recit: [
        "L'ARENA, à droite, gouverne de 1989 à 2009, adopte le dollar en 2001 et signe un accord de libre-échange avec les États-Unis. Les gangs MS-13 et Barrio 18, nés à Los Angeles et renforcés par des expulsions de membres vers le Salvador, prennent le contrôle de nombreux quartiers. Le FMLN gouverne de 2009 à 2019.",
        "Nayib Bukele, élu en 2019, fait du bitcoin une monnaie légale en 2021 et instaure en 2022 un régime d'exception qui permet plus de 80 000 arrestations. Les homicides s'effondrent. Réélu en 2024 malgré l'interdiction constitutionnelle, il fait adopter en juillet 2025 la réélection présidentielle indéfinie. Il est candidat à l'élection de février 2027."
      ],
      consensus: [
        "Le Salvador a eu l'un des taux d'homicides les plus élevés du monde dans les années 2010.",
        "Le taux d'homicides a fortement baissé depuis 2022.",
        "Bukele bénéficie d'une très forte popularité."
      ],
      debats: [
        {
          question: "Le « modèle Bukele » : sécurité retrouvée ou démocratie sacrifiée ?",
          positions: [
            { titre: "Une sécurité retrouvée", texte: "La population peut de nouveau circuler librement dans des quartiers longtemps contrôlés par les gangs ; plusieurs dirigeants latino-américains veulent imiter le modèle.", qui: "Nayib Bukele, majorité de l'opinion salvadorienne" },
            { titre: "Une démocratie sacrifiée", texte: "Des milliers d'innocents ont été arrêtés, des centaines de détenus sont morts en prison, et les contre-pouvoirs ont été supprimés.", qui: "Human Rights Watch, Amnesty International, Cristosal" }
          ],
          etat: "La baisse de la violence est reconnue ; les organisations de défense des droits humains documentent des abus massifs, et plusieurs d'entre elles ont quitté le pays."
        },
        {
          question: "Une trêve secrète avec les gangs ?",
          positions: [
            { titre: "Des négociations ont eu lieu", texte: "Des enquêtes journalistiques et le Trésor américain affirment que le gouvernement a négocié avec les chefs de gangs avant 2022.", qui: "El Faro, département du Trésor américain" },
            { titre: "Aucun pacte", texte: "Le gouvernement nie toute négociation et attribue les résultats à sa politique de sécurité.", qui: "Gouvernement Bukele" }
          ],
          etat: "La question reste disputée ; le journal El Faro a transféré ses activités au Costa Rica."
        }
      ],
      moinsConnu: "En 2025, le Salvador a accepté d'incarcérer dans la méga-prison du CECOT des centaines de migrants vénézuéliens expulsés par les États-Unis, en échange d'un paiement de l'administration Trump.",
      evenements: [
        { annee: 2001, titre: "Dollarisation", lieu: [13.69, -89.19] },
        { annee: 2019, titre: "Élection de Nayib Bukele", lieu: [13.69, -89.19] },
        { annee: 2021, titre: "Le bitcoin monnaie légale", lieu: [13.69, -89.19] },
        { annee: 2022, titre: "Régime d'exception", lieu: [13.69, -89.19] },
        { annee: 2023, titre: "Ouverture du CECOT", lieu: [13.6, -88.88] },
        { annee: 2025, titre: "Réélection indéfinie adoptée", lieu: [13.69, -89.19] }
      ]
    }
  ]
});
