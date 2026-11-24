HISTOIRE.ajouterPays({
  id: 'espagne',
  nom: 'Espagne',
  region: 'europe-sud',
  accroche: "Huit siècles d'al-Andalus, un empire mondial, une guerre civile fratricide et une transition démocratique devenue modèle.",
  intro: "L'Espagne est sans doute le pays d'Europe où le passé est le plus disputé : al-Andalus, la conquête de l'Amérique, la guerre civile et le franquisme divisent encore historiens et citoyens.",
  sources: "Joseph Pérez, Histoire de l'Espagne ; Paul Preston, The Spanish Holocaust ; Maribel Fierro, Al-Andalus.",
  phases: [
    {
      titre: "L'Hispanie romaine",
      debut: 1, fin: 409,
      chapo: "Après deux siècles de conquête, la péninsule devient l'une des provinces les plus romanisées de l'Empire.",
      recit: [
        "La conquête romaine s'achève sous Auguste en 19 av. J.-C., après de longues guerres contre les Cantabres et les Astures. L'Hispanie exporte de l'huile d'olive, du vin, du garum et des métaux, notamment l'or des mines de Las Médulas.",
        "Elle donne à Rome des écrivains comme Sénèque et Martial, et des empereurs comme Trajan et Hadrien, nés à Italica près de Séville. Le christianisme s'y implante tôt. Au début du Ve siècle, Vandales, Suèves et Alains franchissent les Pyrénées."
      ],
      consensus: [
        "L'Hispanie est l'une des régions les plus romanisées de l'Empire, d'où l'origine latine du castillan, du catalan et du portugais.",
        "Les empereurs Trajan et Hadrien sont originaires d'Hispanie.",
        "Les mines hispaniques ont été parmi les plus importantes de l'Empire."
      ],
      debats: [
        {
          question: "Les peuples préromains ont-ils disparu avec la romanisation ?",
          positions: [
            { titre: "Une assimilation", texte: "Ibères, Celtibères et autres peuples se fondent dans le monde romain en quelques générations.", qui: "" },
            { titre: "Des survivances", texte: "Le basque, seule langue préromaine survivante en Europe de l'Ouest, prouve que certaines populations ont gardé leur langue et leur identité.", qui: "Linguistes et archéologues" }
          ],
          etat: "La romanisation est très forte au sud et à l'est, plus faible au nord, où le basque se maintient."
        }
      ],
      moinsConnu: "Les mines de Las Médulas ont été exploitées par une technique, la ruina montium, qui consistait à faire s'effondrer des montagnes entières grâce à l'eau. Le paysage spectaculaire qui en résulte est aujourd'hui classé au patrimoine mondial.",
      evenements: [
        { annee: 53, titre: "Naissance de Trajan à Italica", lieu: [37.44, -6.05] },
        { annee: 100, titre: "Aqueduc de Ségovie", lieu: [40.95, -4.12] },
        { annee: 150, titre: "Mines d'or de Las Médulas en pleine activité", lieu: [42.46, -6.77] },
        { annee: 409, titre: "Vandales, Suèves et Alains en Hispanie", lieu: [42.8, -1.6] }
      ]
    },
    {
      titre: 'Le royaume wisigoth',
      debut: 409, fin: 711,
      chapo: "Les Wisigoths fondent un royaume qui unifie la péninsule et adopte le catholicisme, avant de s'effondrer en quelques années.",
      recit: [
        "Chassés de Gaule par les Francs en 507, les Wisigoths s'installent en Hispanie et font de Tolède leur capitale. Le roi Léovigild unifie presque toute la péninsule. Son fils Récarède se convertit au catholicisme en 589, abandonnant l'arianisme.",
        "Les conciles de Tolède encadrent le pouvoir royal. Isidore de Séville compose ses Étymologies, encyclopédie lue pendant tout le Moyen Âge. Mais la monarchie élective provoque des guerres de succession, et les Juifs subissent des persécutions croissantes."
      ],
      consensus: [
        "Les Wisigoths réalisent la première unification politique de la péninsule.",
        "La conversion de Récarède en 589 rapproche la royauté de l'Église et des élites hispano-romaines.",
        "Le royaume adopte des lois de plus en plus dures contre les Juifs au VIIe siècle."
      ],
      debats: [
        {
          question: "Le royaume wisigoth est-il la première « Espagne » ?",
          positions: [
            { titre: "Oui", texte: "Il donne à la péninsule une unité politique et religieuse que la Reconquête chercherait à restaurer.", qui: "Historiographie nationale espagnole" },
            { titre: "Non", texte: "Projeter la nation espagnole sur un royaume germanique du VIIe siècle est anachronique. Ce récit a été construit plus tard par les rois asturiens.", qui: "Historiens actuels" }
          ],
          etat: "Les historiens se méfient de la continuité « wisigothique » de l'Espagne, qu'ils voient comme une construction idéologique médiévale."
        }
      ],
      moinsConnu: "En 694, le XVIIe concile de Tolède décrète que tous les Juifs du royaume seront réduits en esclavage. Certains historiens pensent que cela explique pourquoi une partie des communautés juives a accueilli favorablement l'arrivée des musulmans en 711.",
      evenements: [
        { annee: 507, titre: "Bataille de Vouillé", lieu: [46.64, 0.17] },
        { annee: 589, titre: "Conversion de Récarède, IIIe concile de Tolède", lieu: [39.86, -4.02] },
        { annee: 625, titre: "Isidore de Séville rédige les Étymologies", lieu: [37.39, -5.99] },
        { annee: 711, titre: "Bataille du Guadalete", lieu: [36.6, -6.0] }
      ]
    },
    {
      titre: 'Al-Andalus et royaumes chrétiens',
      debut: 711, fin: 1492,
      chapo: "Pendant près de huit siècles, la péninsule est partagée entre pouvoirs musulmans et chrétiens, entre guerres et échanges intenses.",
      recit: [
        "En 711, une armée arabo-berbère traverse le détroit de Gibraltar et conquiert l'essentiel de la péninsule en quelques années. Al-Andalus devient un émirat puis, en 929, le califat de Cordoue, l'un des États les plus riches et raffinés d'Europe. Au nord, de petits royaumes chrétiens se maintiennent dans les Asturies et les Pyrénées.",
        "Après la chute du califat en 1031, les royaumes chrétiens (Castille, Aragon, Portugal, Navarre) progressent vers le sud. Tolède tombe en 1085, la victoire de Las Navas de Tolosa (1212) ouvre l'Andalousie. Seul le royaume nasride de Grenade subsiste, jusqu'à sa prise par les Rois catholiques en janvier 1492. La même année, les Juifs sont expulsés."
      ],
      consensus: [
        "Cordoue est au Xe siècle l'une des plus grandes villes d'Europe.",
        "Al-Andalus a joué un rôle majeur dans la transmission à l'Europe latine des savoirs grecs et arabes.",
        "L'expulsion de 1492 force des dizaines de milliers de Juifs à l'exil ou à la conversion."
      ],
      debats: [
        {
          question: "La « convivencia » : coexistence harmonieuse ou mythe ?",
          positions: [
            { titre: "Un âge d'or de tolérance", texte: "Musulmans, juifs et chrétiens auraient vécu ensemble et créé une civilisation commune brillante.", qui: "Américo Castro, María Rosa Menocal" },
            { titre: "Une domination hiérarchisée", texte: "Juifs et chrétiens avaient un statut de protégés inférieurs (dhimmis), et les périodes de violence et de persécution n'ont pas manqué.", qui: "Serafín Fanjul, Darío Fernández-Morera" },
            { titre: "Une coexistence conflictuelle", texte: "La coexistence a été réelle, mais faite à la fois d'échanges, de rivalités et de violences, très variable selon les époques et les lieux.", qui: "David Nirenberg, Maribel Fierro" }
          ],
          etat: "La plupart des historiens rejettent à la fois le mythe du paradis tolérant et celui d'une oppression permanente. Le débat est aussi très politique dans l'Espagne actuelle."
        },
        {
          question: "Faut-il parler de « Reconquête » ?",
          positions: [
            { titre: "Une reconquête", texte: "Les royaumes chrétiens auraient eu, dès le VIIIe siècle, le projet de reprendre une terre perdue.", qui: "Historiographie nationale" },
            { titre: "Une conquête", texte: "Le terme est forgé au XIXe siècle. Les royaumes chrétiens ont souvent combattu entre eux, allié à des princes musulmans, et l'idée de croisade n'apparaît qu'aux XIe et XIIe siècles.", qui: "Martín Ríos Saloma, Alejandro García Sanjuán" }
          ],
          etat: "Le mot reste courant, mais de nombreux historiens le jugent idéologique et préfèrent parler de conquêtes chrétiennes."
        }
      ],
      moinsConnu: "Le Cid, héros national castillan, a aussi servi des princes musulmans de Saragosse. Les mercenaires changeaient souvent de camp, et les alliances entre chrétiens et musulmans contre d'autres chrétiens ou musulmans étaient fréquentes.",
      evenements: [
        { annee: 711, titre: "Débarquement de Tariq ibn Ziyad", lieu: [36.14, -5.35] },
        { annee: 785, titre: "Début de la grande mosquée de Cordoue", lieu: [37.88, -4.78] },
        { annee: 929, titre: "Califat de Cordoue", lieu: [37.88, -4.78] },
        { annee: 1085, titre: "Prise de Tolède par la Castille", lieu: [39.86, -4.02] },
        { annee: 1212, titre: "Bataille de Las Navas de Tolosa", lieu: [38.3, -3.58] },
        { annee: 1492, titre: "Prise de Grenade et expulsion des Juifs", lieu: [37.18, -3.59] }
      ]
    },
    {
      titre: "L'Empire espagnol",
      debut: 1492, fin: 1700,
      chapo: "De Christophe Colomb à Philippe II, l'Espagne devient le premier empire mondial, au prix de la destruction des sociétés amérindiennes.",
      recit: [
        "En 1492, Colomb atteint les Caraïbes pour le compte des Rois catholiques. En quelques décennies, les conquistadors abattent les empires aztèque (1521) et inca (1532). L'argent de Potosí et du Mexique afflue vers Séville. Charles Quint hérite d'un empire « sur lequel le soleil ne se couche jamais ».",
        "Philippe II domine l'Europe catholique, combat les Ottomans et les protestants. L'Inquisition surveille les convertis juifs et musulmans. Les Morisques, descendants des musulmans, sont expulsés en 1609. Le Siècle d'or voit fleurir Cervantès, Vélasquez et Lope de Vega, mais le royaume s'épuise dans les guerres."
      ],
      consensus: [
        "La population amérindienne s'effondre au XVIe siècle, de l'ordre de 80 à 90 % dans de nombreuses régions.",
        "L'argent américain transforme l'économie mondiale, jusqu'en Chine.",
        "L'expulsion des Morisques (environ 300 000 personnes) appauvrit plusieurs régions, notamment Valence."
      ],
      debats: [
        {
          question: "L'effondrement amérindien est-il un génocide ?",
          positions: [
            { titre: "Avant tout les épidémies", texte: "La variole, la rougeole et la grippe, contre lesquelles les Amérindiens n'avaient pas d'immunité, expliquent l'essentiel des morts.", qui: "Alfred Crosby, Jared Diamond" },
            { titre: "La violence coloniale", texte: "Massacres, travail forcé dans les mines (mita), déplacements et désorganisation sociale ont fortement aggravé les épidémies.", qui: "Andrés Reséndez, Massimo Livi Bacci" },
            { titre: "La légende noire", texte: "L'image d'une Espagne particulièrement cruelle a été amplifiée par ses rivaux protestants, alors que d'autres colonisations ont été aussi violentes.", qui: "María Elvira Roca Barea" }
          ],
          etat: "Les épidémies restent la première cause de mortalité, mais le rôle aggravant de l'exploitation coloniale est largement reconnu. La qualification de génocide est débattue."
        }
      ],
      moinsConnu: "Dès 1511, le dominicain Antonio de Montesinos dénonce à Hispaniola les violences contre les Amérindiens. En 1550, la controverse de Valladolid oppose Bartolomé de Las Casas et Juan Ginés de Sepúlveda sur la nature des Amérindiens : un débat sur les droits humains au cœur de l'empire.",
      evenements: [
        { annee: 1492, titre: "Premier voyage de Colomb", lieu: [37.22, -6.94] },
        { annee: 1521, titre: "Chute de Tenochtitlan" },
        { annee: 1545, titre: "Découverte de l'argent de Potosí" },
        { annee: 1550, titre: "Controverse de Valladolid", lieu: [41.65, -4.72] },
        { annee: 1605, titre: "Don Quichotte de Cervantès", lieu: [40.42, -3.7] },
        { annee: 1609, titre: "Expulsion des Morisques", lieu: [39.47, -0.38] }
      ]
    },
    {
      titre: 'Bourbons, révolutions et fin de l\'empire',
      debut: 1700, fin: 1898,
      chapo: "Une nouvelle dynastie réforme le pays, Napoléon l'envahit, l'Amérique s'émancipe et le XIXe siècle s'enlise dans les guerres civiles.",
      recit: [
        "La guerre de Succession d'Espagne installe les Bourbons en 1714. Philippe V centralise le pays et supprime les institutions propres à l'Aragon et à la Catalogne. Charles III mène des réformes inspirées des Lumières.",
        "En 1808, Napoléon impose son frère Joseph : le peuple se soulève et mène une guerre de guérilla. Les Cortes de Cadix adoptent en 1812 une constitution libérale. Les colonies américaines deviennent indépendantes entre 1810 et 1825. Le XIXe siècle est marqué par les guerres carlistes et les pronunciamientos. En 1898, la défaite contre les États-Unis fait perdre Cuba, Porto Rico et les Philippines."
      ],
      consensus: [
        "Les décrets de Nueva Planta (1707 à 1716) suppriment les institutions politiques de la couronne d'Aragon.",
        "La Constitution de Cadix (1812) est l'une des premières constitutions libérales d'Europe.",
        "La perte de Cuba en 1898 provoque une profonde crise d'identité nationale."
      ],
      debats: [
        {
          question: "1714 en Catalogne : guerre de succession ou guerre de libération ?",
          positions: [
            { titre: "Une guerre dynastique", texte: "La Catalogne a soutenu un prétendant, l'archiduc Charles, contre un autre dans un conflit européen de succession.", qui: "" },
            { titre: "Une perte des libertés", texte: "La chute de Barcelone, le 11 septembre 1714, marque la fin des institutions catalanes. Elle est devenue la fête nationale de la Catalogne.", qui: "Historiographie catalaniste" }
          ],
          etat: "Les historiens rappellent que le conflit était dynastique et non indépendantiste, mais reconnaissent la suppression réelle des institutions catalanes."
        }
      ],
      moinsConnu: "L'Espagne a maintenu l'esclavage à Cuba jusqu'en 1886, l'une des dernières abolitions des Amériques. Barcelone et d'autres villes ont tiré profit du commerce du sucre cubain.",
      evenements: [
        { annee: 1714, titre: "Chute de Barcelone", lieu: [41.39, 2.17] },
        { annee: 1808, titre: "Soulèvement du Dos de Mayo à Madrid", lieu: [40.42, -3.7] },
        { annee: 1812, titre: "Constitution de Cadix", lieu: [36.53, -6.29] },
        { annee: 1824, titre: "Bataille d'Ayacucho : fin de l'empire continental" },
        { annee: 1898, titre: "Perte de Cuba et des Philippines", lieu: [14.6, 120.98] }
      ]
    },
    {
      titre: 'République, guerre civile et franquisme',
      debut: 1898, fin: 1975,
      chapo: "La Deuxième République, la guerre civile et quarante ans de dictature franquiste : la période la plus douloureuse de l'Espagne moderne.",
      recit: [
        "Après la dictature de Primo de Rivera (1923 à 1930), la Deuxième République est proclamée en 1931 : vote des femmes, réforme agraire, laïcité, autonomie catalane. Les tensions sociales et politiques sont fortes. En juillet 1936, une partie de l'armée, menée notamment par Franco, se soulève.",
        "La guerre civile (1936 à 1939) oppose républicains et nationalistes, soutenus par l'Allemagne nazie et l'Italie fasciste. Elle fait environ 500 000 morts. Franco instaure une dictature : répression massive, exil, censure, catholicisme d'État. À partir des années 1960, le pays s'industrialise et s'ouvre au tourisme. Franco meurt en 1975."
      ],
      consensus: [
        "La guerre civile a été marquée par une violence de masse dans les deux camps, sans être symétrique.",
        "La répression franquiste après 1939 a fait des dizaines de milliers d'exécutions.",
        "Le bombardement de Guernica en 1937 par l'aviation allemande est devenu un symbole universel."
      ],
      debats: [
        {
          question: "Les violences des deux camps se valent-elles ?",
          positions: [
            { titre: "Deux terreurs", texte: "Les républicains ont tué environ 50 000 personnes, dont des milliers de prêtres et religieux. Les deux camps ont commis des crimes.", qui: "" },
            { titre: "Une asymétrie", texte: "La violence nationaliste, environ 130 000 morts pendant et après la guerre, était planifiée par les chefs militaires, tandis que la violence républicaine a été en partie le fait de groupes incontrôlés que l'État a cherché à freiner.", qui: "Paul Preston, Julián Casanova" }
          ],
          etat: "Les historiens reconnaissent les crimes des deux camps, mais la plupart soulignent l'ampleur plus grande et le caractère systématique de la répression franquiste."
        }
      ],
      moinsConnu: "Des milliers de bébés ont été retirés à des mères républicaines puis, plus tard, à des mères célibataires, pour être confiés à des familles proches du régime. Cette affaire des « enfants volés » a duré jusque dans les années 1980.",
      evenements: [
        { annee: 1931, titre: "Proclamation de la Deuxième République", lieu: [40.42, -3.7] },
        { annee: 1936, titre: "Coup d'État et début de la guerre civile", lieu: [35.89, -5.32] },
        { annee: 1937, titre: "Bombardement de Guernica", lieu: [43.32, -2.68] },
        { annee: 1939, titre: "Victoire de Franco, exil de 500 000 républicains", lieu: [42.47, 3.1] },
        { annee: 1959, titre: "Plan de stabilisation et ouverture économique", lieu: [40.42, -3.7] }
      ]
    },
    {
      titre: "L'Espagne démocratique",
      debut: 1975, fin: 2026,
      chapo: "Une transition pacifique vers la démocratie, l'entrée dans l'Europe, puis des débats ouverts sur la mémoire et l'unité du pays.",
      recit: [
        "Après la mort de Franco, le roi Juan Carlos et le Premier ministre Adolfo Suárez conduisent la transition. La Constitution de 1978 crée une monarchie parlementaire et un État des autonomies. Le 23 février 1981, une tentative de coup d'État militaire échoue. L'Espagne entre dans la CEE en 1986.",
        "Le terrorisme de l'ETA basque fait plus de 800 morts avant sa dissolution en 2018. Les attentats islamistes de Madrid en 2004 tuent 192 personnes. La loi de mémoire historique (2007) puis la loi de mémoire démocratique (2022) relancent les débats sur le franquisme. En 2017, le référendum d'indépendance catalan provoque une crise majeure."
      ],
      consensus: [
        "La transition démocratique espagnole a été étudiée dans le monde entier comme un modèle.",
        "L'État des autonomies a donné une large autonomie aux régions, notamment au Pays basque et à la Catalogne.",
        "L'ETA a renoncé à la violence en 2011 et s'est dissoute en 2018."
      ],
      debats: [
        {
          question: "La transition : modèle de réconciliation ou « pacte de l'oubli » ?",
          positions: [
            { titre: "Un modèle", texte: "La loi d'amnistie de 1977 et le consensus entre anciens adversaires ont permis une démocratie stable sans nouvelle guerre civile.", qui: "" },
            { titre: "Un pacte de l'oubli", texte: "Les crimes franquistes n'ont jamais été jugés, des dizaines de milliers de disparus reposent encore dans des fosses communes.", qui: "Associations de mémoire historique, Emilio Silva" }
          ],
          etat: "Le débat est très vif. Les exhumations se sont multipliées et la dépouille de Franco a été retirée du Valle de los Caídos en 2019."
        }
      ],
      moinsConnu: "L'Espagne est l'un des pays au monde qui comptent le plus de fosses communes non ouvertes : on estime à plus de 100 000 le nombre de disparus de la guerre civile et de la répression.",
      evenements: [
        { annee: 1978, titre: "Constitution démocratique", lieu: [40.42, -3.7] },
        { annee: 1981, titre: "Tentative de coup d'État du 23-F", lieu: [40.416, -3.697] },
        { annee: 1992, titre: "Jeux olympiques de Barcelone et Exposition de Séville", lieu: [41.39, 2.17] },
        { annee: 2004, titre: "Attentats de Madrid", lieu: [40.4, -3.69] },
        { annee: 2017, titre: "Référendum d'indépendance de la Catalogne", lieu: [41.39, 2.17] }
      ]
    }
  ]
});
