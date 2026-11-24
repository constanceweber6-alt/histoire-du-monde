HISTOIRE.ajouterPays({
  id: 'rdc',
  nom: 'RD Congo',
  region: 'afrique-centrale',
  accroche: "Le royaume du Kongo, les empires luba et lunda, la propriété privée de Léopold II, la colonie belge, Lumumba et Mobutu, puis les guerres les plus meurtrières depuis 1945.",
  intro: "La République démocratique du Congo est le deuxième plus grand pays d'Afrique et l'un des plus riches en ressources : cuivre, cobalt, coltan, diamants. Cette richesse a nourri la convoitise : celle de Léopold II, de la Belgique, des dictateurs et des groupes armés. Les guerres de l'est du pays continuent aujourd'hui.",
  sources: "David Van Reybrouck, Congo, une histoire ; Adam Hochschild, Les Fantômes du roi Léopold ; Isidore Ndaywel è Nziem, Histoire générale du Congo ; Jason Stearns, Dancing in the Glory of Monsters.",
  phases: [
    {
      titre: 'Les peuples du bassin du Congo',
      debut: 1, fin: 1390,
      chapo: "Les peuples bantous se répandent dans la forêt et les savanes, à côté des peuples pygmées présents depuis bien plus longtemps.",
      recit: [
        "Les peuples de langue bantoue, venus du nord-ouest, s'installent progressivement dans le bassin du Congo, pratiquant l'agriculture et la métallurgie du fer. Les peuples pygmées, comme les Mbuti et les Twa, vivent de la chasse et de la cueillette dans la forêt.",
        "Dans la vallée de l'Upemba, au Katanga, des tombes du VIIIe au XIVe siècle révèlent des objets en cuivre et des croisettes servant de monnaie, signe de sociétés hiérarchisées."
      ],
      consensus: [
        "Les migrations bantoues ont peuplé l'essentiel du bassin du Congo.",
        "Les peuples pygmées sont parmi les plus anciens habitants de la forêt d'Afrique centrale.",
        "Le cuivre du Katanga est exploité depuis plus d'un millénaire."
      ],
      debats: [
        {
          question: "Comment se sont faites les migrations bantoues ?",
          positions: [
            { titre: "Une grande migration", texte: "Des agriculteurs bantous auraient migré en masse, remplaçant ou absorbant les populations antérieures.", qui: "Modèle classique" },
            { titre: "Une expansion lente", texte: "Linguistique et génétique suggèrent une diffusion progressive sur des millénaires, avec des métissages et des échanges.", qui: "Jan Vansina, généticiens" }
          ],
          etat: "Les chercheurs parlent aujourd'hui d'une expansion complexe et progressive plutôt que d'une migration unique."
        }
      ],
      moinsConnu: "L'os d'Ishango, trouvé près du lac Édouard et vieux d'environ 20 000 ans, porte des entailles que certains chercheurs interprètent comme l'un des plus anciens témoignages de calcul.",
      evenements: [
        { annee: 500, titre: "Sociétés agricoles du bassin du Congo", lieu: [-2.0, 23.0] },
        { annee: 900, titre: "Tombes de la vallée de l'Upemba", lieu: [-8.6, 26.4] }
      ]
    },
    {
      titre: 'Kongo, Luba et Lunda',
      debut: 1390, fin: 1885,
      chapo: "Le royaume du Kongo se convertit au christianisme et entretient des relations avec le Portugal et Rome. À l'intérieur, les empires luba et lunda dominent les savanes.",
      recit: [
        "Le royaume du Kongo, fondé vers 1390, rencontre les Portugais en 1483. Le roi Afonso Ier (1509 à 1542) se convertit au christianisme et écrit au roi du Portugal pour se plaindre de la traite. Celle-ci ravage pourtant le royaume, qui se divise après la bataille d'Ambuila (1665).",
        "Dans les savanes du sud, l'empire luba et l'empire lunda organisent de vastes réseaux tributaires. Au XIXe siècle, des marchands swahilis et arabes, comme Tippu Tip, pénètrent l'est à la recherche d'ivoire et d'esclaves."
      ],
      consensus: [
        "Le royaume du Kongo était un État centralisé en relation diplomatique avec l'Europe.",
        "La traite atlantique a fortement affaibli le royaume du Kongo.",
        "Les empires luba et lunda ont été des puissances majeures des savanes d'Afrique centrale."
      ],
      debats: [
        {
          question: "Le christianisme du Kongo : conversion réelle ou adaptation ?",
          positions: [
            { titre: "Une conversion profonde", texte: "Le Kongo est devenu un royaume chrétien, avec des prêtres africains et des ambassades à Rome.", qui: "John Thornton" },
            { titre: "Une réinterprétation", texte: "Le christianisme a été intégré aux croyances locales et utilisé par les rois pour renforcer leur pouvoir.", qui: "Wyatt MacGaffey" }
          ],
          etat: "Les historiens décrivent un christianisme africain original, ni simple copie ni façade."
        }
      ],
      moinsConnu: "Kimpa Vita, jeune prophétesse kongo, fonda au début du XVIIIe siècle un mouvement religieux qui affirmait que Jésus était né au Kongo. Elle fut brûlée vive en 1706.",
      evenements: [
        { annee: 1483, titre: "Arrivée des Portugais au Kongo", lieu: [-6.1, 12.4] },
        { annee: 1509, titre: "Règne d'Afonso Ier", lieu: [-6.27, 14.25] },
        { annee: 1665, titre: "Bataille d'Ambuila", lieu: [-7.6, 15.0] },
        { annee: 1706, titre: "Exécution de Kimpa Vita", lieu: [-6.27, 14.25] },
        { annee: 1700, titre: "Apogée de l'empire lunda", lieu: [-8.5, 22.5] }
      ]
    },
    {
      titre: "L'État indépendant du Congo",
      debut: 1885, fin: 1908,
      chapo: "Le roi des Belges Léopold II obtient le Congo comme propriété personnelle. L'exploitation du caoutchouc provoque des atrocités et une catastrophe démographique.",
      recit: [
        "Avec l'aide de l'explorateur Henry Morton Stanley, Léopold II se fait reconnaître le Congo à la conférence de Berlin (1885). L'État indépendant du Congo impose aux villageois des quotas de caoutchouc. La Force publique punit les retards par des prises d'otages, des massacres et des mains coupées.",
        "Le rapport du consul britannique Roger Casement (1904) et la campagne d'Edmund Morel font scandale. En 1908, sous la pression internationale, Léopold cède le Congo à la Belgique."
      ],
      consensus: [
        "L'État indépendant du Congo était la propriété personnelle de Léopold II.",
        "Le système du caoutchouc rouge a entraîné des violences massives.",
        "La pression internationale a contraint Léopold II à céder le Congo à la Belgique en 1908."
      ],
      debats: [
        {
          question: "Combien de morts sous Léopold II ?",
          positions: [
            { titre: "Dix millions", texte: "La population aurait diminué de moitié, soit environ dix millions de morts, à cause des violences, des famines et des maladies.", qui: "Adam Hochschild" },
            { titre: "Un chiffre impossible à établir", texte: "Faute de recensement avant 1885, les chiffres sont incertains ; la maladie du sommeil a aussi fait de très nombreuses victimes.", qui: "Jean-Luc Vellut, démographes" }
          ],
          etat: "Le chiffre de dix millions est largement cité mais contesté. Tous les historiens s'accordent sur un désastre démographique majeur."
        }
      ],
      moinsConnu: "La photographe missionnaire Alice Seeley Harris a pris des photos d'enfants mutilés qui ont fait le tour du monde. C'est l'une des premières campagnes humanitaires fondées sur la photographie.",
      evenements: [
        { annee: 1885, titre: "Conférence de Berlin", lieu: [52.52, 13.4] },
        { annee: 1898, titre: "Chemin de fer Matadi-Léopoldville", lieu: [-5.82, 13.45] },
        { annee: 1904, titre: "Rapport Casement", lieu: [-4.32, 15.31] },
        { annee: 1908, titre: "Cession du Congo à la Belgique", lieu: [50.85, 4.35] }
      ]
    },
    {
      titre: 'Le Congo belge',
      debut: 1908, fin: 1960,
      chapo: "La Belgique gouverne avec l'Église et les grandes compagnies minières. Le Congo devient un grand producteur de cuivre et d'uranium.",
      recit: [
        "La colonie repose sur un « trinôme » : l'État, les missions catholiques et les compagnies comme l'Union minière du Haut-Katanga. Le travail forcé persiste. L'uranium de Shinkolobwe sert aux bombes atomiques américaines de 1945.",
        "Le prophète Simon Kimbangu, qui attire des foules, est emprisonné de 1921 à sa mort en 1951. Les Congolais n'ont presque pas accès à l'enseignement supérieur. En 1959, des émeutes éclatent à Léopoldville ; la Belgique accorde l'indépendance en hâte."
      ],
      consensus: [
        "L'uranium du Congo a été utilisé pour les premières bombes atomiques.",
        "À l'indépendance, le pays comptait très peu de diplômés universitaires congolais.",
        "La Belgique a accordé l'indépendance de façon précipitée."
      ],
      debats: [
        {
          question: "Le Congo belge : colonie modèle ?",
          positions: [
            { titre: "Une colonie modèle", texte: "Écoles primaires, hôpitaux, infrastructures : la Belgique se présentait comme une puissance coloniale exemplaire.", qui: "Propagande coloniale, une partie de l'opinion belge" },
            { titre: "Un paternalisme", texte: "Les Congolais étaient tenus dans une infériorité légale, privés d'enseignement supérieur et de droits politiques.", qui: "Historiens congolais et belges actuels" }
          ],
          etat: "Une commission parlementaire belge a travaillé sur ce passé de 2020 à 2022. En 2020, le roi Philippe a exprimé ses « plus profonds regrets »."
        }
      ],
      moinsConnu: "En 1958, des Congolais ont été exposés dans un « village indigène » reconstitué à l'Exposition universelle de Bruxelles. Choqués par le traitement subi, certains sont repartis avant la fin.",
      evenements: [
        { annee: 1921, titre: "Arrestation de Simon Kimbangu", lieu: [-5.25, 14.87] },
        { annee: 1945, titre: "Uranium de Shinkolobwe", lieu: [-11.05, 26.57] },
        { annee: 1959, titre: "Émeutes de Léopoldville", lieu: [-4.32, 15.31] }
      ]
    },
    {
      titre: 'Lumumba et Mobutu',
      debut: 1960, fin: 1997,
      chapo: "L'indépendance s'ouvre sur la crise et l'assassinat de Patrice Lumumba. Mobutu prend le pouvoir et gouverne le Zaïre pendant 32 ans.",
      recit: [
        "Le 30 juin 1960, Patrice Lumumba, Premier ministre, prononce un discours dénonçant la colonisation. Le Katanga fait sécession avec le soutien belge. Lumumba, destitué, est livré aux sécessionnistes et assassiné en janvier 1961, avec la complicité de la Belgique et l'approbation américaine.",
        "Joseph-Désiré Mobutu prend le pouvoir en 1965. Il rebaptise le pays Zaïre (1971) et impose « l'authenticité ». Soutenu par l'Occident pendant la guerre froide, il pille les richesses du pays, qui s'effondre économiquement."
      ],
      consensus: [
        "Patrice Lumumba a été assassiné en janvier 1961 avec la participation de responsables belges.",
        "Mobutu a été soutenu par les États-Unis et la Belgique pendant la guerre froide.",
        "Le régime de Mobutu a été l'un des plus corrompus du monde."
      ],
      debats: [
        {
          question: "Qui est responsable de la mort de Lumumba ?",
          positions: [
            { titre: "Les Congolais", texte: "Lumumba a été tué par ses adversaires katangais, dans un conflit interne au Congo.", qui: "Version longtemps défendue par la Belgique" },
            { titre: "La Belgique et les États-Unis", texte: "Des officiers belges ont participé à l'exécution et la CIA avait projeté de l'assassiner.", qui: "Ludo De Witte, commission parlementaire belge (2001)" }
          ],
          etat: "La Belgique a reconnu en 2002 sa « responsabilité morale ». En 2022, elle a restitué à sa famille une dent de Lumumba, seul reste de son corps."
        }
      ],
      moinsConnu: "Le combat de boxe entre Mohamed Ali et George Foreman, le « Rumble in the Jungle », a eu lieu à Kinshasa en 1974, financé par Mobutu pour son prestige.",
      evenements: [
        { annee: 1960, titre: "Indépendance, discours de Lumumba", lieu: [-4.32, 15.31] },
        { annee: 1961, titre: "Assassinat de Lumumba", lieu: [-11.66, 27.48] },
        { annee: 1965, titre: "Coup d'État de Mobutu", lieu: [-4.32, 15.31] },
        { annee: 1974, titre: "Combat Ali contre Foreman à Kinshasa", lieu: [-4.33, 15.31] }
      ]
    },
    {
      titre: 'Les guerres du Congo',
      debut: 1997, fin: 2026,
      chapo: "Deux guerres impliquant neuf pays font des millions de morts. L'est du pays reste en guerre, notamment avec le M23 soutenu par le Rwanda.",
      recit: [
        "Après le génocide des Tutsi au Rwanda (1994), des génocidaires se réfugient au Zaïre. En 1997, Laurent-Désiré Kabila, soutenu par le Rwanda et l'Ouganda, renverse Mobutu. La deuxième guerre (1998 à 2003) implique neuf pays africains. Joseph Kabila succède à son père, assassiné en 2001.",
        "Félix Tshisekedi devient président en 2019. En janvier 2025, le M23, soutenu par le Rwanda, prend Goma puis Bukavu. Un accord de paix entre la RDC et le Rwanda est signé à Washington en juin 2025, et un accord-cadre avec le M23 à Doha en novembre 2025, mais les combats se poursuivent en 2026."
      ],
      consensus: [
        "Les guerres du Congo ont été les plus meurtrières depuis la Seconde Guerre mondiale.",
        "Le Rwanda soutient militairement le M23, selon les experts de l'ONU.",
        "Les violences sexuelles ont été utilisées massivement comme arme de guerre."
      ],
      debats: [
        {
          question: "Combien de morts dans les guerres du Congo ?",
          positions: [
            { titre: "5,4 millions", texte: "L'International Rescue Committee estime la surmortalité à 5,4 millions de personnes entre 1998 et 2007, surtout par maladie et malnutrition.", qui: "International Rescue Committee" },
            { titre: "Moins, mais énorme", texte: "Des chercheurs critiquent la méthode et estiment le bilan inférieur, tout en le jugeant considérable.", qui: "Rapport sur la sécurité humaine (2010)" }
          ],
          etat: "Le chiffre exact est discuté, mais tous parlent de millions de victimes."
        }
      ],
      moinsConnu: "Le docteur Denis Mukwege, qui a soigné des dizaines de milliers de femmes victimes de viols à l'hôpital de Panzi à Bukavu, a reçu le prix Nobel de la paix en 2018.",
      evenements: [
        { annee: 1997, titre: "Chute de Mobutu", lieu: [-4.32, 15.31] },
        { annee: 1998, titre: "Deuxième guerre du Congo", lieu: [-1.68, 29.22] },
        { annee: 2019, titre: "Félix Tshisekedi président", lieu: [-4.32, 15.31] },
        { annee: 2025, titre: "Le M23 prend Goma, accord de Washington", lieu: [-1.68, 29.22] }
      ]
    }
  ]
});
