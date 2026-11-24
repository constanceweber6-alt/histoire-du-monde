HISTOIRE.ajouterPays({
  id: 'allemagne',
  nom: 'Allemagne',
  region: 'europe-ouest',
  accroche: "Un espace morcelé pendant mille ans, unifié tardivement, responsable de la Shoah, et devenu un modèle de travail de mémoire.",
  intro: "L'Allemagne n'est un État unifié que depuis 1871. Avant, il y a des tribus germaniques, un Saint-Empire aux centaines de principautés, et une question qui revient sans cesse : qu'est-ce qui fait l'Allemagne ?",
  sources: "Heinrich August Winkler, Histoire de l'Allemagne ; Ian Kershaw, Hitler ; Christopher Clark, Histoire de la Prusse.",
  phases: [
    {
      titre: 'La Germanie face à Rome',
      debut: 1, fin: 476,
      chapo: "Rome échoue à conquérir la Germanie et fixe sa frontière sur le Rhin et le Danube, au contact de peuples qui finiront par entrer dans l'Empire.",
      recit: [
        "En l'an 1, Auguste veut étendre l'Empire jusqu'à l'Elbe. En l'an 9, le chef chérusque Arminius, ancien officier romain, détruit trois légions dans la forêt de Teutoburg. Rome renonce et s'appuie sur le limes, une frontière fortifiée. Cologne, Trèves, Mayence ou Augsbourg sont des villes romaines.",
        "Les peuples germaniques ne forment pas une nation : Chérusques, Alamans, Francs, Saxons, Goths et d'autres changent d'alliances, commercent avec Rome et servent dans ses armées. Aux IVe et Ve siècles, poussés notamment par les Huns, plusieurs d'entre eux s'installent dans l'Empire."
      ],
      consensus: [
        "La défaite de Varus en l'an 9 met fin aux projets romains de conquête jusqu'à l'Elbe.",
        "L'ouest et le sud de l'Allemagne actuelle ont été romains pendant plusieurs siècles.",
        "Les « Germains » étaient des peuples variés, sans conscience commune d'appartenir à une même nation."
      ],
      debats: [
        {
          question: "Arminius est-il le « premier Allemand » ?",
          positions: [
            { titre: "Un héros fondateur", texte: "Il aurait libéré la Germanie de Rome. Le XIXe siècle lui élève un monument géant, le Hermannsdenkmal.", qui: "Nationalisme allemand du XIXe siècle" },
            { titre: "Un anachronisme", texte: "Arminius est un chef de guerre, formé par Rome, qui défend les intérêts de son peuple et de sa famille. Il est assassiné par ses proches.", qui: "Historiens actuels" }
          ],
          etat: "Les historiens rejettent la lecture nationale. Le lieu exact de la bataille, probablement Kalkriese, a été identifié par l'archéologie en 1987."
        }
      ],
      moinsConnu: "Trèves fut au IVe siècle l'une des capitales de l'Empire romain, résidence de Constantin. Ses monuments, comme la Porta Nigra, sont parmi les mieux conservés au nord des Alpes.",
      evenements: [
        { annee: 9, titre: "Bataille de Teutoburg", lieu: [52.41, 8.13] },
        { annee: 50, titre: "Fondation de Cologne comme colonie romaine", lieu: [50.94, 6.96] },
        { annee: 260, titre: "Abandon des Champs Décumates par Rome", lieu: [48.5, 9.0] },
        { annee: 306, titre: "Constantin réside à Trèves", lieu: [49.76, 6.64] }
      ]
    },
    {
      titre: "Des Francs à l'Empire",
      debut: 476, fin: 962,
      chapo: "Intégrée au monde franc, la future Allemagne naît du partage de l'empire de Charlemagne.",
      recit: [
        "Les Francs étendent leur domination sur les Alamans, les Thuringiens et les Bavarois. Des missionnaires comme Boniface évangélisent les régions à l'est du Rhin au VIIIe siècle. Charlemagne soumet les Saxons au terme de trente ans de guerres très violentes et installe sa capitale à Aix-la-Chapelle.",
        "Le traité de Verdun (843) crée une Francie orientale, embryon de l'Allemagne. Au Xe siècle, les ducs saxons deviennent rois. Otton Ier bat les Hongrois au Lechfeld en 955 et se fait couronner empereur à Rome en 962."
      ],
      consensus: [
        "La conquête de la Saxe par Charlemagne s'accompagne de baptêmes forcés et de massacres.",
        "La Francie orientale issue de Verdun est l'ancêtre politique du royaume de Germanie.",
        "Le couronnement d'Otton Ier en 962 fonde l'Empire qui sera appelé plus tard Saint-Empire romain germanique."
      ],
      debats: [
        {
          question: "Quand commence l'histoire « allemande » ?",
          positions: [
            { titre: "En 843", texte: "Le partage de Verdun crée une entité politique distincte, de langue majoritairement germanique.", qui: "" },
            { titre: "Vers l'an 1000", texte: "Le mot « deutsch » appliqué à un peuple et un royaume n'apparaît qu'aux Xe et XIe siècles.", qui: "Carlrichard Brühl" },
            { titre: "Bien plus tard", texte: "Une identité nationale allemande ne se forme qu'avec l'humanisme, la Réforme puis le XIXe siècle.", qui: "" }
          ],
          etat: "La plupart des historiens parlent de genèse progressive et refusent une date de naissance unique."
        }
      ],
      moinsConnu: "Le massacre de Verden (782), où Charlemagne aurait fait exécuter environ 4 500 Saxons, a longtemps été passé sous silence. Les nazis l'ont ensuite instrumentalisé contre le christianisme. Le chiffre lui-même est discuté.",
      evenements: [
        { annee: 754, titre: "Mort de saint Boniface en Frise", lieu: [53.2, 5.8] },
        { annee: 782, titre: "Massacre de Verden", lieu: [52.92, 9.23] },
        { annee: 794, titre: "Aix-la-Chapelle devient résidence principale de Charlemagne", lieu: [50.78, 6.08] },
        { annee: 955, titre: "Bataille du Lechfeld", lieu: [48.3, 10.9] },
        { annee: 962, titre: "Otton Ier couronné empereur", lieu: [41.9, 12.45] }
      ]
    },
    {
      titre: 'Le Saint-Empire médiéval',
      debut: 962, fin: 1517,
      chapo: "Un empire prestigieux mais décentralisé, où l'empereur doit composer avec le pape, les princes et des villes riches.",
      recit: [
        "Les empereurs revendiquent l'héritage de Rome et s'opposent aux papes lors de la querelle des Investitures : Henri IV s'humilie à Canossa en 1077. Les Hohenstaufen, comme Frédéric Barberousse, échouent à soumettre l'Italie. Après eux, le pouvoir impérial s'affaiblit au profit des princes.",
        "La Bulle d'or de 1356 confie l'élection de l'empereur à sept princes électeurs. La Hanse relie les villes marchandes de la Baltique. Des colons allemands s'installent vers l'est. Vers 1450, Gutenberg met au point l'imprimerie à caractères mobiles à Mayence."
      ],
      consensus: [
        "Le Saint-Empire n'a jamais été un État centralisé comme la France ou l'Angleterre.",
        "L'imprimerie de Gutenberg a révolutionné la diffusion des textes en Europe.",
        "La Hanse a dominé le commerce de l'Europe du Nord du XIIIe au XVe siècle."
      ],
      debats: [
        {
          question: "La faiblesse de l'Empire est-elle un échec ou une autre forme de réussite ?",
          positions: [
            { titre: "Un échec", texte: "Faute d'État fort, l'Allemagne aurait pris un « retard » national sur ses voisins, qui expliquerait ses crises futures.", qui: "Historiographie nationale du XIXe siècle, thèse du Sonderweg" },
            { titre: "Un modèle original", texte: "L'Empire était un système fédéral de droit, protégeant les petits États et les minorités religieuses, qui a fonctionné pendant des siècles.", qui: "Peter H. Wilson, Barbara Stollberg-Rilinger" }
          ],
          etat: "La réhabilitation du Saint-Empire comme système politique original est aujourd'hui largement partagée."
        }
      ],
      moinsConnu: "La « colonisation vers l'Est » (Ostsiedlung) a été glorifiée par les nazis comme une conquête de l'espace vital. Les historiens la décrivent plutôt comme une migration souvent appelée par des princes slaves ou hongrois eux-mêmes, avec une cohabitation de populations.",
      evenements: [
        { annee: 1077, titre: "Henri IV à Canossa", lieu: [44.58, 10.46] },
        { annee: 1190, titre: "Mort de Frédéric Barberousse en croisade", lieu: [36.38, 33.93] },
        { annee: 1356, titre: "Bulle d'or", lieu: [50.94, 6.96] },
        { annee: 1358, titre: "La Hanse devient une ligue de villes", lieu: [53.87, 10.69] },
        { annee: 1454, titre: "Bible de Gutenberg", lieu: [50.0, 8.27] }
      ]
    },
    {
      titre: 'Réforme, guerres et princes',
      debut: 1517, fin: 1806,
      chapo: "La Réforme de Luther divise l'Empire, ravagé ensuite par la guerre de Trente Ans, avant que la Prusse et l'Autriche ne s'imposent.",
      recit: [
        "En 1517, Martin Luther publie ses thèses contre les indulgences. La Réforme se répand grâce à l'imprimerie. La guerre des Paysans (1525) est écrasée. La paix d'Augsbourg (1555) laisse chaque prince choisir la religion de son territoire.",
        "La guerre de Trente Ans (1618 à 1648) dévaste l'Empire, qui perd peut-être un tiers de sa population dans certaines régions. Les traités de Westphalie confirment l'autonomie des princes. Au XVIIIe siècle, la Prusse des Hohenzollern devient une grande puissance militaire. Napoléon dissout le Saint-Empire en 1806."
      ],
      consensus: [
        "La Réforme luthérienne transforme durablement la carte religieuse de l'Europe.",
        "La guerre de Trente Ans est l'une des catastrophes démographiques majeures de l'histoire européenne.",
        "Le Saint-Empire disparaît en 1806 sous la pression napoléonienne."
      ],
      debats: [
        {
          question: "Luther : libérateur des consciences ou figure ambiguë ?",
          positions: [
            { titre: "Le réformateur", texte: "Il libère l'individu de l'autorité de l'Église, traduit la Bible en allemand et contribue à fixer la langue.", qui: "" },
            { titre: "La part d'ombre", texte: "Il appelle à écraser les paysans révoltés en 1525 et publie en 1543 des écrits violemment antijuifs, plus tard récupérés par les nazis.", qui: "Thomas Kaufmann" }
          ],
          etat: "Les Églises protestantes allemandes ont officiellement pris leurs distances avec les écrits antijuifs de Luther, notamment lors des 500 ans de la Réforme en 2017."
        }
      ],
      moinsConnu: "Les chasses aux sorcières ont été particulièrement intenses dans le Saint-Empire : peut-être 25 000 exécutions entre 1560 et 1660, soit près de la moitié du total européen, en majorité des femmes.",
      evenements: [
        { annee: 1517, titre: "Les 95 thèses de Luther", lieu: [51.87, 12.65] },
        { annee: 1525, titre: "Guerre des Paysans", lieu: [51.31, 11.1] },
        { annee: 1555, titre: "Paix d'Augsbourg", lieu: [48.37, 10.9] },
        { annee: 1631, titre: "Sac de Magdebourg", lieu: [52.13, 11.62] },
        { annee: 1648, titre: "Traités de Westphalie", lieu: [51.96, 7.63] },
        { annee: 1740, titre: "Frédéric II roi de Prusse", lieu: [52.52, 13.4] }
      ]
    },
    {
      titre: "De la nation à l'Empire allemand",
      debut: 1806, fin: 1918,
      chapo: "Le nationalisme naît contre Napoléon, l'unité se fait par la guerre sous la Prusse, et le nouvel empire devient la première puissance du continent.",
      recit: [
        "Après les guerres napoléoniennes, la Confédération germanique regroupe 39 États. La révolution de 1848 tente une unification libérale à Francfort, qui échoue. L'industrialisation est rapide : Ruhr, chemins de fer, chimie.",
        "Bismarck, chancelier de Prusse, unifie l'Allemagne par trois guerres (contre le Danemark, l'Autriche et la France). L'Empire est proclamé à Versailles en 1871. Il crée les premières assurances sociales, se dote de colonies en Afrique et dans le Pacifique, puis entre en guerre en 1914. La défaite de 1918 entraîne l'abdication de Guillaume II."
      ],
      consensus: [
        "L'unité allemande de 1871 se fait autour de la Prusse, en excluant l'Autriche.",
        "Bismarck instaure les premières assurances sociales obligatoires du monde dans les années 1880.",
        "Les troupes allemandes ont commis un génocide contre les Herero et les Nama en Namibie (1904 à 1908)."
      ],
      debats: [
        {
          question: "L'Allemagne est-elle responsable de la Première Guerre mondiale ?",
          positions: [
            { titre: "Une responsabilité principale", texte: "Les dirigeants allemands ont poussé l'Autriche à la guerre et poursuivi des buts de conquête.", qui: "Fritz Fischer (1961)" },
            { titre: "Des somnambules", texte: "Toutes les grandes puissances ont glissé vers la guerre par une série de décisions, sans plan unique.", qui: "Christopher Clark (2012)" }
          ],
          etat: "Le débat reste ouvert. La plupart des historiens reconnaissent un rôle important de Berlin sans en faire l'unique responsable."
        },
        {
          question: "Existe-t-il un « chemin particulier » (Sonderweg) qui mène au nazisme ?",
          positions: [
            { titre: "Oui", texte: "Une unification autoritaire, sans révolution libérale réussie, aurait laissé l'Allemagne entre les mains d'élites antidémocratiques.", qui: "Hans-Ulrich Wehler" },
            { titre: "Non", texte: "L'Allemagne impériale avait un parlement, des partis puissants, une société civile active. Rien n'était écrit.", qui: "David Blackbourn, Geoff Eley" }
          ],
          etat: "La thèse forte d'un Sonderweg est largement abandonnée, mais la question des continuités reste discutée."
        }
      ],
      moinsConnu: "Le génocide des Herero et des Nama, premier génocide du XXe siècle, a fait des dizaines de milliers de morts. L'Allemagne ne l'a reconnu officiellement qu'en 2021.",
      evenements: [
        { annee: 1848, titre: "Parlement de Francfort", lieu: [50.11, 8.68] },
        { annee: 1871, titre: "Proclamation de l'Empire allemand à Versailles", lieu: [48.8, 2.12] },
        { annee: 1884, titre: "Conférence de Berlin sur l'Afrique", lieu: [52.51, 13.38] },
        { annee: 1904, titre: "Génocide des Herero et des Nama en Namibie" },
        { annee: 1918, titre: "Révolution et fin de l'Empire", lieu: [52.52, 13.4] }
      ]
    },
    {
      titre: 'Weimar, nazisme et Shoah',
      debut: 1918, fin: 1945,
      chapo: "Une démocratie fragile s'effondre, le régime nazi déclenche la Seconde Guerre mondiale et organise l'extermination des Juifs d'Europe.",
      recit: [
        "La République de Weimar affronte l'humiliation du traité de Versailles, l'hyperinflation de 1923 puis la crise de 1929. Le parti nazi profite du chômage de masse. Hitler est nommé chancelier en janvier 1933 et instaure une dictature en quelques mois.",
        "Le régime persécute les opposants, les Juifs, les Roms, les homosexuels et les handicapés. La guerre commence en 1939. La Shoah tue environ six millions de Juifs, dans les centres de mise à mort comme Auschwitz et par les fusillades massives à l'Est. L'Allemagne capitule le 8 mai 1945."
      ],
      consensus: [
        "Hitler arrive au pouvoir légalement, nommé par le président Hindenburg, avant de détruire la démocratie.",
        "La Shoah est un génocide planifié qui a tué environ six millions de Juifs.",
        "La Wehrmacht a participé aux crimes de masse, contrairement au mythe d'une armée « propre »."
      ],
      debats: [
        {
          question: "Comment la Shoah a-t-elle été décidée ?",
          positions: [
            { titre: "Intentionnalistes", texte: "Hitler avait l'extermination en tête dès le départ et l'a mise en œuvre selon un plan.", qui: "Lucy Dawidowicz" },
            { titre: "Fonctionnalistes", texte: "L'extermination résulte d'une radicalisation progressive, de la concurrence entre administrations et des initiatives locales, notamment à l'Est en 1941.", qui: "Hans Mommsen, Martin Broszat" }
          ],
          etat: "Les historiens combinent aujourd'hui les deux approches : la volonté d'Hitler est centrale, mais la mise en œuvre passe par de multiples acteurs. Ce débat porte sur les mécanismes, jamais sur la réalité du génocide."
        },
        {
          question: "Les Allemands « ordinaires » savaient-ils ?",
          positions: [
            { titre: "Une ignorance relative", texte: "La population ignorait l'ampleur des crimes commis loin, à l'Est.", qui: "Discours d'après-guerre" },
            { titre: "Un savoir diffus", texte: "Rumeurs, lettres de soldats, spoliations visibles : beaucoup savaient ou pouvaient savoir. Des centaines de milliers de personnes ont participé.", qui: "Christopher Browning, Peter Longerich" }
          ],
          etat: "La thèse de l'ignorance générale est réfutée. Le débat porte sur le degré de connaissance et d'adhésion."
        }
      ],
      moinsConnu: "Le génocide des Roms et des Sinti, appelé Porajmos, a fait entre 200 000 et 500 000 victimes. Il n'a été reconnu par la République fédérale qu'en 1982.",
      evenements: [
        { annee: 1919, titre: "Constitution de Weimar", lieu: [50.98, 11.33] },
        { annee: 1933, titre: "Hitler chancelier", lieu: [52.51, 13.38] },
        { annee: 1938, titre: "Nuit de Cristal", lieu: [52.52, 13.4] },
        { annee: 1942, titre: "Conférence de Wannsee", lieu: [52.43, 13.17] },
        { annee: 1943, titre: "Auschwitz-Birkenau au maximum de son activité", lieu: [50.03, 19.18] },
        { annee: 1945, titre: "Capitulation", lieu: [52.49, 13.52] }
      ]
    },
    {
      titre: 'Division et réunification',
      debut: 1945, fin: 2026,
      chapo: "Coupée en deux par la guerre froide, l'Allemagne se réunifie en 1990 et devient le pilier de l'Europe, avec une mémoire exigeante de son passé.",
      recit: [
        "Occupée par les Alliés, l'Allemagne est divisée en 1949 : République fédérale à l'Ouest, démocratique et alliée des États-Unis, République démocratique à l'Est, communiste et alignée sur Moscou. Le mur de Berlin, construit en 1961, devient le symbole de la guerre froide.",
        "Le « miracle économique » fait de la RFA une puissance industrielle. Le mur tombe en novembre 1989 et l'Allemagne est réunifiée le 3 octobre 1990. Elle accueille plus d'un million de réfugiés en 2015 et occupe une place centrale dans l'Union européenne."
      ],
      consensus: [
        "La RFA a construit une démocratie stable et une économie parmi les plus puissantes du monde.",
        "La RDA était une dictature reposant sur une police politique très étendue, la Stasi.",
        "Le travail de mémoire sur le nazisme est devenu un élément central de l'identité allemande."
      ],
      debats: [
        {
          question: "La réunification a-t-elle été une « annexion » de l'Est ?",
          positions: [
            { titre: "Une réussite historique", texte: "Réunification pacifique, libertés retrouvées, transferts financiers massifs vers l'Est.", qui: "" },
            { titre: "Une prise de contrôle", texte: "Fermetures d'usines, élites de l'Est remplacées, chômage de masse : beaucoup d'Allemands de l'Est se sont sentis dépossédés.", qui: "Ilko-Sascha Kowalczuk, Dirk Oschmann" }
          ],
          etat: "Les deux constats coexistent. Les différences entre Est et Ouest en matière de revenus et de vote restent visibles plus de trente ans après."
        }
      ],
      moinsConnu: "La dénazification a été très incomplète en RFA : de nombreux juges, diplomates et fonctionnaires ayant servi le régime nazi ont poursuivi leur carrière. Le procès d'Auschwitz à Francfort (1963 à 1965), porté par le procureur Fritz Bauer, a été décisif pour briser le silence.",
      evenements: [
        { annee: 1949, titre: "Création de la RFA et de la RDA", lieu: [50.73, 7.1] },
        { annee: 1961, titre: "Construction du mur de Berlin", lieu: [52.516, 13.377] },
        { annee: 1970, titre: "Agenouillement de Willy Brandt à Varsovie", lieu: [52.25, 21.0] },
        { annee: 1989, titre: "Chute du mur de Berlin", lieu: [52.516, 13.377] },
        { annee: 1990, titre: "Réunification", lieu: [52.52, 13.4] }
      ]
    }
  ]
});
