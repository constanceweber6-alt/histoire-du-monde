HISTOIRE.ajouterPays({
  id: 'italie',
  nom: 'Italie',
  region: 'europe-sud',
  accroche: "Centre du monde romain, berceau de la Renaissance, unifiée seulement en 1861, puis premier pays fasciste d'Europe.",
  intro: "« L'Italie n'est qu'une expression géographique », disait Metternich en 1847. Pendant quatorze siècles, la péninsule a été divisée, convoitée et brillante à la fois.",
  sources: "Christopher Duggan, The Force of Destiny ; Emilio Gentile, Qu'est-ce que le fascisme ? ; Mary Beard, SPQR.",
  phases: [
    {
      titre: "Le cœur de l'Empire romain",
      debut: 1, fin: 476,
      chapo: "En l'an 1, l'Italie est le centre d'un empire qui va de l'Atlantique à l'Euphrate. Rome compte peut-être un million d'habitants.",
      recit: [
        "Auguste a mis fin aux guerres civiles et instauré le principat, une monarchie qui ne dit pas son nom. Les Ier et IIe siècles sont la période de la Pax Romana. L'Italie bénéficie de privilèges fiscaux et d'un réseau dense de villes. L'éruption du Vésuve en 79 ensevelit Pompéi et Herculanum.",
        "Peu à peu, le centre de gravité de l'Empire se déplace vers les provinces et les frontières. Constantin fonde Constantinople en 330 et favorise le christianisme. Rome est pillée par les Wisigoths en 410, puis par les Vandales en 455. En 476, Odoacre dépose le dernier empereur d'Occident, Romulus Augustule."
      ],
      consensus: [
        "Rome est l'une des plus grandes villes du monde antique, avec plusieurs centaines de milliers d'habitants.",
        "L'économie romaine reposait largement sur le travail des esclaves, très nombreux en Italie.",
        "La déposition de Romulus Augustule en 476 a eu peu d'écho sur le moment."
      ],
      debats: [
        {
          question: "476 est-il vraiment la « chute » de l'Empire romain ?",
          positions: [
            { titre: "Une date symbolique", texte: "La fin de l'empereur d'Occident marque la fin d'un monde et le début du Moyen Âge.", qui: "Tradition scolaire" },
            { titre: "Une non-date", texte: "L'Empire continue à l'Est jusqu'en 1453, et Odoacre puis Théodoric gouvernent en reconnaissant l'empereur de Constantinople.", qui: "Historiens de l'Antiquité tardive" }
          ],
          etat: "Les historiens utilisent encore 476 comme repère, tout en soulignant qu'il s'agit d'une convention."
        }
      ],
      moinsConnu: "En Italie, les esclaves représentaient peut-être 15 à 25 % de la population au début de l'Empire. Leur origine était très diverse, et beaucoup d'affranchis ont fait fortune, à l'image des riches commerçants de Pompéi.",
      evenements: [
        { annee: 14, titre: "Mort d'Auguste", lieu: [40.85, 14.42] },
        { annee: 79, titre: "Éruption du Vésuve", lieu: [40.75, 14.49] },
        { annee: 80, titre: "Inauguration du Colisée", lieu: [41.89, 12.49] },
        { annee: 410, titre: "Sac de Rome par les Wisigoths", lieu: [41.9, 12.5] },
        { annee: 476, titre: "Déposition de Romulus Augustule", lieu: [44.42, 12.2] }
      ]
    },
    {
      titre: 'Goths, Byzantins et Lombards',
      debut: 476, fin: 1000,
      chapo: "L'Italie passe de main en main : Ostrogoths, reconquête byzantine, Lombards, Francs, tandis que la papauté s'affirme.",
      recit: [
        "Théodoric, roi des Ostrogoths, gouverne l'Italie depuis Ravenne (493 à 526) en préservant l'administration romaine. Justinien lance la reconquête byzantine : la guerre des Goths (535 à 554) ravage la péninsule. En 568, les Lombards envahissent le nord et le centre.",
        "L'Italie reste coupée en deux pendant des siècles : Lombards d'un côté, Byzantins à Ravenne, Rome et dans le sud de l'autre. Les papes s'allient aux Francs : Pépin le Bref leur donne des terres qui forment les États pontificaux. Au IXe siècle, la Sicile est conquise par des musulmans venus d'Ifriqiya."
      ],
      consensus: [
        "La guerre des Goths a été plus destructrice pour l'Italie que les invasions du Ve siècle.",
        "Les États pontificaux naissent au VIIIe siècle de l'alliance entre la papauté et les Francs.",
        "La Sicile musulmane (IXe au XIe siècle) a connu un essor agricole et culturel important."
      ],
      debats: [
        {
          question: "Le « Haut Moyen Âge » italien : âge sombre ou âge de transition ?",
          positions: [
            { titre: "Un effondrement", texte: "La population chute, Rome se vide, l'économie se replie sur elle-même.", qui: "" },
            { titre: "Une recomposition", texte: "Venise naît, Ravenne brille, les Lombards produisent un droit et un art originaux. Le terme d'« âge sombre » vient surtout du manque de sources.", qui: "Chris Wickham" }
          ],
          etat: "Les historiens parlent d'un recul matériel réel mais refusent l'image d'un âge obscur uniforme."
        }
      ],
      moinsConnu: "La Donation de Constantin, document par lequel l'empereur aurait donné l'Occident au pape, est un faux fabriqué vers le VIIIe siècle. Lorenzo Valla l'a démontré en 1440 par l'analyse du latin employé.",
      evenements: [
        { annee: 493, titre: "Théodoric roi d'Italie", lieu: [44.42, 12.2] },
        { annee: 547, titre: "Mosaïques de Saint-Vital de Ravenne", lieu: [44.42, 12.2] },
        { annee: 568, titre: "Invasion lombarde", lieu: [45.19, 9.16] },
        { annee: 756, titre: "Donation de Pépin : naissance des États pontificaux", lieu: [41.9, 12.45] },
        { annee: 827, titre: "Début de la conquête musulmane de la Sicile", lieu: [37.5, 12.6] }
      ]
    },
    {
      titre: 'Communes, papes et Renaissance',
      debut: 1000, fin: 1527,
      chapo: "Les villes italiennes deviennent les plus riches d'Europe et inventent la banque, l'humanisme et une nouvelle façon de voir le monde.",
      recit: [
        "Au nord, les villes se gouvernent elles-mêmes en communes et résistent à l'empereur. Venise et Gênes dominent le commerce méditerranéen. Au sud, les Normands puis les Hohenstaufen fondent un royaume brillant en Sicile, mêlant cultures latine, grecque et arabe.",
        "Au XIVe siècle, Dante, Pétrarque et Boccace écrivent en langue vulgaire. Les banquiers florentins, comme les Médicis, financent l'Europe. Au XVe siècle, la Renaissance culmine avec Brunelleschi, Léonard de Vinci, Michel-Ange et Raphaël. À partir de 1494, les guerres d'Italie amènent Français et Espagnols dans la péninsule, jusqu'au sac de Rome en 1527."
      ],
      consensus: [
        "L'Italie du Nord est la région la plus urbanisée et la plus riche d'Europe vers 1300.",
        "La banque moderne (lettre de change, comptabilité en partie double) se développe en Italie.",
        "Les guerres d'Italie (1494 à 1559) mettent fin à l'indépendance de la plupart des États italiens."
      ],
      debats: [
        {
          question: "La Renaissance est-elle une rupture avec le Moyen Âge ?",
          positions: [
            { titre: "Une rupture", texte: "L'humanisme invente l'individu moderne et redécouvre l'Antiquité après des siècles d'obscurité.", qui: "Jacob Burckhardt (1860)" },
            { titre: "Une continuité", texte: "Le Moyen Âge a connu plusieurs « renaissances » et la culture du XVe siècle reste profondément chrétienne et médiévale.", qui: "Charles Haskins, Jacques Le Goff" },
            { titre: "Une Renaissance connectée", texte: "La Renaissance doit beaucoup aux échanges avec Byzance et le monde islamique, qui avaient conservé et enrichi les savoirs antiques.", qui: "Jerry Brotton" }
          ],
          etat: "La notion de Renaissance reste utilisée, mais son caractère de rupture absolue et purement européenne est abandonné."
        }
      ],
      moinsConnu: "Florence et Venise pratiquaient l'esclavage domestique à la Renaissance : des femmes venues de la mer Noire, du Caucase ou des Balkans servaient dans les grandes familles. Venise a aussi créé en 1516 le premier « ghetto », quartier où les Juifs étaient obligés de résider.",
      evenements: [
        { annee: 1130, titre: "Royaume normand de Sicile", lieu: [38.12, 13.36] },
        { annee: 1176, titre: "Bataille de Legnano", lieu: [45.6, 8.92] },
        { annee: 1348, titre: "La Peste noire à Florence", lieu: [43.77, 11.25] },
        { annee: 1436, titre: "Coupole de Brunelleschi à Florence", lieu: [43.773, 11.256] },
        { annee: 1494, titre: "Début des guerres d'Italie", lieu: [43.77, 11.25] },
        { annee: 1527, titre: "Sac de Rome", lieu: [41.9, 12.45] }
      ]
    },
    {
      titre: 'Sous domination étrangère',
      debut: 1527, fin: 1796,
      chapo: "L'Espagne puis l'Autriche dominent la péninsule. L'Italie reste un foyer artistique et scientifique, mais perd sa puissance économique.",
      recit: [
        "Après 1559, l'Espagne contrôle Milan, Naples, la Sicile et la Sardaigne. Rome mène la Contre-Réforme : concile de Trente, Inquisition, Index des livres interdits. En 1633, Galilée est condamné pour avoir défendu l'héliocentrisme.",
        "Le baroque fait de Rome une capitale artistique. Au XVIIIe siècle, les Habsbourg d'Autriche remplacent les Espagnols dans le nord. Naples et Milan participent aux Lumières, avec des penseurs comme Cesare Beccaria, qui plaide contre la torture et la peine de mort."
      ],
      consensus: [
        "Le procès de Galilée est devenu le symbole du conflit entre science et autorité religieuse.",
        "Le commerce méditerranéen perd de son importance face à l'Atlantique.",
        "L'Italie reste la destination majeure du « Grand Tour » des élites européennes."
      ],
      debats: [
        {
          question: "L'affaire Galilée : science contre religion ?",
          positions: [
            { titre: "Un conflit de principe", texte: "L'Église a réprimé une vérité scientifique pour défendre son autorité.", qui: "Tradition des Lumières" },
            { titre: "Un conflit plus complexe", texte: "La preuve de l'héliocentrisme n'était pas encore complète, et Galilée s'est aussi brouillé personnellement avec le pape Urbain VIII, son ancien soutien.", qui: "Historiens des sciences" }
          ],
          etat: "Les historiens nuancent l'opposition simple, sans nier la condamnation. L'Église catholique a reconnu ses torts en 1992."
        }
      ],
      moinsConnu: "Les côtes italiennes ont subi pendant des siècles les raids des corsaires barbaresques. Des dizaines de milliers d'Italiens ont été capturés et vendus comme esclaves en Afrique du Nord, un pan de l'histoire de l'esclavage méditerranéen peu enseigné.",
      evenements: [
        { annee: 1545, titre: "Ouverture du concile de Trente", lieu: [46.07, 11.12] },
        { annee: 1571, titre: "Bataille de Lépante", lieu: [38.25, 21.3] },
        { annee: 1633, titre: "Condamnation de Galilée", lieu: [41.9, 12.47] },
        { annee: 1764, titre: "Des délits et des peines de Beccaria", lieu: [45.46, 9.19] }
      ]
    },
    {
      titre: 'Risorgimento et Italie libérale',
      debut: 1796, fin: 1922,
      chapo: "L'Italie s'unifie en 1861 autour du Piémont, mais le nouvel État reste fragile, inégal et peu populaire au sud.",
      recit: [
        "Napoléon redessine la carte italienne et diffuse les idées révolutionnaires. Après 1815, l'Autriche domine à nouveau. Les patriotes du Risorgimento, comme Mazzini, rêvent d'unité. Cavour, ministre du Piémont, s'allie à la France contre l'Autriche, tandis que Garibaldi conquiert la Sicile et Naples avec ses Mille en 1860.",
        "Le royaume d'Italie est proclamé en 1861, Rome en devient la capitale en 1871. Le nouvel État affronte le « brigandage » au sud, la pauvreté et une émigration massive : plus de 14 millions d'Italiens partent entre 1876 et 1915. L'Italie entre en guerre en 1915 aux côtés des Alliés."
      ],
      consensus: [
        "L'unification se fait autour de la monarchie piémontaise de Savoie.",
        "L'émigration italienne est l'une des plus importantes de l'histoire moderne.",
        "L'écart économique entre Nord et Sud s'est creusé après l'unité."
      ],
      debats: [
        {
          question: "L'unification : libération nationale ou conquête du Sud ?",
          positions: [
            { titre: "Une libération", texte: "Le Risorgimento a libéré les Italiens de dynasties étrangères et réactionnaires.", qui: "Récit national" },
            { titre: "Une conquête", texte: "Le Sud a été annexé militairement. La répression du « brigandage » a fait des milliers de morts et l'unité a profité d'abord au Nord.", qui: "Antonio Gramsci, courants méridionalistes" }
          ],
          etat: "Les historiens reconnaissent la violence de l'intégration du Sud, tout en rejetant les thèses qui idéalisent le royaume des Bourbons de Naples."
        }
      ],
      moinsConnu: "Les émigrés italiens ont souvent été victimes de racisme : en 1893, à Aigues-Mortes, en France, des ouvriers italiens sont massacrés par une foule. En 1891, onze Italiens sont lynchés à La Nouvelle-Orléans.",
      evenements: [
        { annee: 1848, titre: "Révolutions et première guerre d'indépendance", lieu: [45.46, 9.19] },
        { annee: 1860, titre: "Expédition des Mille", lieu: [37.8, 12.43] },
        { annee: 1861, titre: "Proclamation du royaume d'Italie", lieu: [45.07, 7.69] },
        { annee: 1871, titre: "Rome capitale", lieu: [41.9, 12.5] },
        { annee: 1917, titre: "Défaite de Caporetto", lieu: [46.25, 13.58] }
      ]
    },
    {
      titre: 'Fascisme et guerre',
      debut: 1922, fin: 1946,
      chapo: "Mussolini invente le fascisme, mène des guerres coloniales, s'allie à Hitler et entraîne l'Italie dans la défaite et la guerre civile.",
      recit: [
        "Profitant des tensions d'après-guerre, Mussolini organise la Marche sur Rome en 1922 et devient chef du gouvernement. Après l'assassinat du député socialiste Matteotti en 1924, il établit une dictature. Le régime signe les accords du Latran avec l'Église (1929) et envahit l'Éthiopie (1935).",
        "En 1938, les lois raciales excluent les Juifs. L'Italie entre en guerre aux côtés de l'Allemagne en 1940. Après le débarquement allié, Mussolini est renversé en 1943. Le pays est coupé en deux : les Allemands occupent le nord, où la Résistance combat. Mussolini est exécuté en avril 1945. En 1946, les Italiens choisissent la République."
      ],
      consensus: [
        "Le fascisme italien est le premier régime de ce type et a servi de modèle à d'autres mouvements.",
        "La conquête de l'Éthiopie s'est accompagnée de l'usage de gaz toxiques contre les populations.",
        "Les lois raciales de 1938 ont été une décision du régime fasciste, pas une simple imposition allemande."
      ],
      debats: [
        {
          question: "Le fascisme italien était-il « moins grave » que le nazisme ?",
          positions: [
            { titre: "Un régime plus modéré", texte: "Le fascisme n'aurait pas eu la dimension exterminatrice du nazisme et Mussolini aurait été un dictateur « bon enfant ».", qui: "Récit d'après-guerre, Renzo De Felice en partie" },
            { titre: "Un régime criminel", texte: "Violence politique, camps en Libye, gaz en Éthiopie, lois raciales, participation à la déportation sous la République de Salò : le fascisme a été pleinement criminel.", qui: "Angelo Del Boca, Emilio Gentile" }
          ],
          etat: "Le mythe des « Italiens bonne gens » (italiani brava gente) est fortement remis en cause par les historiens depuis les années 1990."
        }
      ],
      moinsConnu: "En Libye, la répression de la résistance menée par Omar al-Mokhtar (1929 à 1932) a conduit à l'internement de près de 100 000 personnes dans des camps de concentration, où une grande partie est morte.",
      evenements: [
        { annee: 1922, titre: "Marche sur Rome", lieu: [41.9, 12.5] },
        { annee: 1929, titre: "Accords du Latran", lieu: [41.9, 12.45] },
        { annee: 1935, titre: "Invasion de l'Éthiopie", lieu: [9.03, 38.74] },
        { annee: 1943, titre: "Chute de Mussolini et occupation allemande", lieu: [41.9, 12.5] },
        { annee: 1946, titre: "Référendum : naissance de la République", lieu: [41.9, 12.5] }
      ]
    },
    {
      titre: 'La République italienne',
      debut: 1946, fin: 2026,
      chapo: "Miracle économique, années de plomb, lutte contre la mafia et instabilité politique : une démocratie vivante et tourmentée.",
      recit: [
        "La Démocratie chrétienne domine la vie politique pendant près de cinquante ans, face au plus grand Parti communiste d'Occident. L'Italie participe à la fondation de l'Europe (traité de Rome, 1957). Le « miracle économique » des années 1950 et 1960 transforme le pays.",
        "Les années 1970 sont marquées par le terrorisme d'extrême gauche et d'extrême droite : les « années de plomb ». Au début des années 1990, l'opération « Mains propres » fait tomber les partis traditionnels. La lutte contre la mafia coûte la vie aux juges Falcone et Borsellino en 1992."
      ],
      consensus: [
        "Le miracle économique a fait de l'Italie l'une des grandes puissances industrielles mondiales.",
        "Les années de plomb ont fait plusieurs centaines de morts.",
        "La mafia sicilienne a assassiné de nombreux magistrats, policiers et élus."
      ],
      debats: [
        {
          question: "Les années de plomb : terrorismes isolés ou « stratégie de la tension » ?",
          positions: [
            { titre: "Des groupes autonomes", texte: "Les Brigades rouges et les groupes néofascistes ont agi selon leurs propres logiques idéologiques.", qui: "" },
            { titre: "Une stratégie organisée", texte: "Certains attentats d'extrême droite auraient été couverts par des secteurs des services secrets pour pousser le pays vers un régime autoritaire.", qui: "Enquêtes judiciaires et parlementaires" }
          ],
          etat: "Les procès ont établi des complicités de membres des services de l'État dans plusieurs attentats néofascistes, mais de nombreuses zones d'ombre demeurent."
        }
      ],
      moinsConnu: "L'Italie est passée en quelques décennies d'un pays d'émigration à un pays d'immigration. Depuis les années 1990, elle est en première ligne des arrivées par la Méditerranée, où des dizaines de milliers de migrants sont morts.",
      evenements: [
        { annee: 1957, titre: "Traité de Rome", lieu: [41.89, 12.48] },
        { annee: 1969, titre: "Attentat de la piazza Fontana", lieu: [45.46, 9.19] },
        { annee: 1978, titre: "Enlèvement et assassinat d'Aldo Moro", lieu: [41.9, 12.5] },
        { annee: 1992, titre: "Assassinat des juges Falcone et Borsellino", lieu: [38.12, 13.36] }
      ]
    }
  ]
});
