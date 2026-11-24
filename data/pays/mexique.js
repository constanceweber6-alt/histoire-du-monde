HISTOIRE.ajouterPays({
  id: 'mexique',
  nom: 'Mexique',
  region: 'amerique-nord',
  accroche: "Le pays de Teotihuacan, des Mayas et des Aztèques, conquis par l'Espagne, secoué par une révolution fondatrice et aujourd'hui partagé entre essor économique et violence des cartels.",
  intro: "Le Mexique se pense comme un pays métis, né de la rencontre violente entre les civilisations mésoaméricaines et l'Espagne. Son histoire est faite de grandes ruptures : la conquête, l'indépendance, la Réforme, la Révolution. Le voisinage des États-Unis, qui lui ont pris la moitié de son territoire en 1848, pèse sur toute son histoire moderne.",
  sources: "Enrique Florescano, Memoria mexicana ; Alan Knight, The Mexican Revolution ; Serge Gruzinski, La Colonisation de l'imaginaire ; Matthew Restall, Seven Myths of the Spanish Conquest.",
  phases: [
    {
      titre: 'Teotihuacan, Mayas et Toltèques',
      debut: 1, fin: 1325,
      chapo: "Une grande cité, Teotihuacan, domine le centre du Mexique, tandis que les cités mayas fleurissent au sud-est.",
      recit: [
        "Teotihuacan, avec ses pyramides du Soleil et de la Lune, compte peut-être 100 000 habitants vers 500, l'une des plus grandes villes du monde à l'époque. Elle décline vers 550, peut-être après des révoltes internes et un incendie.",
        "Au sud-est, les cités mayas (Palenque, Calakmul, Chichén Itzá) développent l'écriture, l'astronomie et un calendrier précis. Beaucoup sont abandonnées vers 900. Au centre, les Toltèques de Tula dominent entre 900 et 1150 et deviennent pour les peuples suivants un modèle de civilisation."
      ],
      consensus: [
        "Teotihuacan était l'une des plus grandes villes du monde vers 500.",
        "Les Mayas ont développé un système d'écriture complet, aujourd'hui en grande partie déchiffré.",
        "Les grandes cités mayas des basses terres ont été abandonnées vers 800 à 900."
      ],
      debats: [
        {
          question: "Pourquoi les cités mayas ont-elles été abandonnées ?",
          positions: [
            { titre: "La sécheresse", texte: "Des carottes de sédiments montrent des sécheresses sévères entre 800 et 1000, qui auraient ruiné l'agriculture.", qui: "Climatologues, Gerald Haug" },
            { titre: "Les guerres et la crise politique", texte: "Les guerres incessantes entre cités et la perte de légitimité des rois divins auraient provoqué l'effondrement.", qui: "Archéologues spécialistes des inscriptions" }
          ],
          etat: "La plupart des chercheurs combinent les deux causes. Ils rappellent aussi que les Mayas n'ont pas disparu : des millions de leurs descendants vivent au Mexique et au Guatemala."
        }
      ],
      moinsConnu: "Les relevés au laser (lidar) réalisés depuis 2018 ont révélé des dizaines de milliers de structures mayas cachées sous la forêt, signe que les basses terres étaient bien plus peuplées qu'on ne le pensait.",
      evenements: [
        { annee: 100, titre: "Construction de la pyramide du Soleil à Teotihuacan", lieu: [19.69, -98.84] },
        { annee: 683, titre: "Mort de Pakal, roi de Palenque", lieu: [17.48, -92.05] },
        { annee: 950, titre: "Apogée de Tula, capitale toltèque", lieu: [20.06, -99.34] },
        { annee: 1100, titre: "Apogée de Chichén Itzá", lieu: [20.68, -88.57] }
      ]
    },
    {
      titre: "L'Empire aztèque",
      debut: 1325, fin: 1521,
      chapo: "Les Mexicas fondent Tenochtitlan sur un lac et bâtissent en deux siècles un empire tributaire qui domine le centre du Mexique.",
      recit: [
        "Selon la tradition, les Mexicas fondent Tenochtitlan en 1325 sur un îlot du lac Texcoco. En 1428, la Triple Alliance avec Texcoco et Tlacopan lance une expansion rapide. Tenochtitlan, reliée à la terre par des chaussées, compte peut-être 200 000 habitants.",
        "L'empire prélève des tributs sur des centaines de cités. La religion d'État pratique des sacrifices humains, notamment au Templo Mayor. Les peuples soumis, et les Tlaxcaltèques restés indépendants, en veulent aux Mexicas."
      ],
      consensus: [
        "Tenochtitlan était l'une des plus grandes villes du monde au début du XVIe siècle.",
        "L'empire aztèque reposait sur le tribut plus que sur une administration directe.",
        "Les sacrifices humains étaient une réalité, confirmée par l'archéologie du Templo Mayor."
      ],
      debats: [
        {
          question: "Quelle était l'ampleur des sacrifices humains ?",
          positions: [
            { titre: "Des dizaines de milliers", texte: "Les chroniqueurs espagnols parlent de 80 000 victimes lors de l'inauguration du Templo Mayor en 1487.", qui: "Chroniques coloniales" },
            { titre: "Des chiffres exagérés", texte: "Les conquérants avaient intérêt à grossir les chiffres pour justifier la conquête. L'archéologie indique un nombre important, mais bien inférieur.", qui: "Historiens actuels" }
          ],
          etat: "Les fouilles du Templo Mayor, dont un mur de crânes découvert en 2015, confirment l'importance des sacrifices. Les chiffres exacts restent impossibles à établir."
        }
      ],
      moinsConnu: "Nezahualcóyotl, roi de Texcoco au XVe siècle, était un poète et un bâtisseur d'aqueducs. Ses poèmes en nahuatl, transcrits après la conquête, sont parmi les plus anciens textes littéraires des Amériques.",
      evenements: [
        { annee: 1325, titre: "Fondation de Tenochtitlan", lieu: [19.43, -99.13] },
        { annee: 1428, titre: "Triple Alliance aztèque", lieu: [19.51, -98.88] },
        { annee: 1487, titre: "Inauguration du Templo Mayor", lieu: [19.435, -99.131] },
        { annee: 1519, titre: "Débarquement de Cortés à Veracruz", lieu: [19.2, -96.13] }
      ]
    },
    {
      titre: 'Conquête et Nouvelle-Espagne',
      debut: 1521, fin: 1810,
      chapo: "Cortés et ses alliés autochtones abattent l'empire aztèque. La Nouvelle-Espagne devient la colonie la plus riche de l'empire espagnol.",
      recit: [
        "Hernán Cortés débarque en 1519. Avec des dizaines de milliers d'alliés tlaxcaltèques et l'aide de son interprète Malintzin, il assiège Tenochtitlan, qui tombe en 1521, déjà ravagée par la variole. Mexico est bâtie sur ses ruines.",
        "Les épidémies font chuter la population autochtone de peut-être 90 % en un siècle. Les mines d'argent de Zacatecas et Guanajuato enrichissent l'Espagne. Une société métisse naît, marquée par la religion catholique et le culte de la Vierge de Guadalupe."
      ],
      consensus: [
        "Les alliés autochtones ont joué un rôle décisif dans la chute de Tenochtitlan.",
        "Les épidémies ont provoqué un effondrement démographique massif.",
        "La Nouvelle-Espagne était la colonie la plus peuplée et la plus riche de l'empire espagnol."
      ],
      debats: [
        {
          question: "Malintzin (la Malinche) : traîtresse ou figure tragique ?",
          positions: [
            { titre: "Une traîtresse", texte: "Dans le nationalisme mexicain, « malinchismo » désigne la préférence pour l'étranger. Elle aurait livré son peuple aux Espagnols.", qui: "Octavio Paz, nationalisme du XXe siècle" },
            { titre: "Une femme sans choix", texte: "Vendue comme esclave par sa propre famille, offerte aux Espagnols, elle n'avait aucune loyauté envers les Mexicas, qui n'étaient pas son peuple.", qui: "Historiennes féministes, Camilla Townsend" }
          ],
          etat: "Les historiens actuels rejettent l'idée de trahison : la notion de « peuple mexicain » n'existait pas en 1519."
        }
      ],
      moinsConnu: "Sor Juana Inés de la Cruz, religieuse de Mexico au XVIIe siècle, fut l'une des plus grandes poétesses de langue espagnole. Elle défendit le droit des femmes à l'étude avant d'être réduite au silence par sa hiérarchie.",
      evenements: [
        { annee: 1521, titre: "Chute de Tenochtitlan", lieu: [19.43, -99.13] },
        { annee: 1531, titre: "Apparition de la Vierge de Guadalupe selon la tradition", lieu: [19.48, -99.12] },
        { annee: 1546, titre: "Découverte de l'argent de Zacatecas", lieu: [22.77, -102.58] }
      ]
    },
    {
      titre: 'Indépendance, guerres et Réforme',
      debut: 1810, fin: 1876,
      chapo: "Un pays indépendant instable, amputé de la moitié de son territoire par les États-Unis, envahi par la France, puis refondé par Benito Juárez.",
      recit: [
        "Le 16 septembre 1810, le curé Miguel Hidalgo lance le « cri de Dolores ». Après onze ans de guerre, l'indépendance est acquise en 1821. Le pays connaît des dizaines de gouvernements. Le Texas fait sécession en 1836.",
        "La guerre contre les États-Unis (1846 à 1848) coûte au Mexique la moitié de son territoire. Benito Juárez, avocat zapotèque, mène la Réforme qui sépare l'Église et l'État. Napoléon III impose l'empereur Maximilien (1864), fusillé en 1867 après la victoire des républicains."
      ],
      consensus: [
        "Le Mexique a perdu environ la moitié de son territoire face aux États-Unis en 1848.",
        "Benito Juárez a été le premier président d'origine autochtone.",
        "L'intervention française s'est soldée par un échec et l'exécution de Maximilien."
      ],
      debats: [
        {
          question: "Qui a fait l'indépendance du Mexique ?",
          positions: [
            { titre: "Le peuple insurgé", texte: "Hidalgo et Morelos ont mené une révolte populaire d'autochtones et de métis pour l'indépendance et l'égalité.", qui: "Récit national" },
            { titre: "Les élites conservatrices", texte: "L'indépendance de 1821 a été conclue par Iturbide, officier royaliste, pour protéger l'Église et les élites d'une Espagne devenue libérale.", qui: "Historiens actuels" }
          ],
          etat: "Les historiens distinguent la révolte populaire de 1810, vaincue, et l'indépendance conservatrice de 1821."
        }
      ],
      moinsConnu: "Le bataillon de Saint-Patrick, formé de déserteurs irlandais de l'armée américaine, a combattu aux côtés du Mexique en 1847. Ses membres capturés ont été pendus. Le Mexique les honore encore chaque année.",
      evenements: [
        { annee: 1810, titre: "Cri de Dolores", lieu: [21.16, -100.93] },
        { annee: 1821, titre: "Indépendance du Mexique", lieu: [19.43, -99.13] },
        { annee: 1847, titre: "Prise de Mexico par l'armée américaine", lieu: [19.42, -99.18] },
        { annee: 1862, titre: "Victoire de Puebla contre les Français", lieu: [19.04, -98.2] },
        { annee: 1867, titre: "Exécution de Maximilien à Querétaro", lieu: [20.59, -100.39] }
      ]
    },
    {
      titre: 'Porfiriat et Révolution',
      debut: 1876, fin: 1940,
      chapo: "La dictature modernisatrice de Porfirio Díaz est renversée par une révolution sanglante qui fonde le Mexique moderne.",
      recit: [
        "Porfirio Díaz gouverne de 1876 à 1911. Chemins de fer, mines et investissements étrangers modernisent le pays, mais les paysans perdent leurs terres au profit des grandes haciendas.",
        "En 1910, Francisco Madero lance la Révolution. Emiliano Zapata et Pancho Villa mènent des armées paysannes. Les combats font peut-être un million de morts. La Constitution de 1917 prévoit la réforme agraire et des droits sociaux. Lázaro Cárdenas distribue les terres et nationalise le pétrole en 1938."
      ],
      consensus: [
        "La Révolution mexicaine est l'une des premières grandes révolutions sociales du XXe siècle.",
        "La Constitution de 1917 était très avancée en matière de droits sociaux.",
        "Lázaro Cárdenas a nationalisé le pétrole en 1938."
      ],
      debats: [
        {
          question: "La Révolution a-t-elle tenu ses promesses ?",
          positions: [
            { titre: "Une révolution sociale", texte: "Elle a détruit le pouvoir des grands propriétaires et redistribué la moitié des terres cultivables.", qui: "Alan Knight" },
            { titre: "Une révolution confisquée", texte: "Elle a surtout mis en place un nouveau parti-État, le futur PRI, qui a gouverné sans partage pendant soixante-dix ans.", qui: "Historiens révisionnistes" }
          ],
          etat: "Les historiens reconnaissent ses transformations sociales réelles et le régime autoritaire qui en est sorti."
        }
      ],
      moinsConnu: "Les « soldaderas », femmes qui suivaient et parfois commandaient les armées révolutionnaires, comme la colonelle Amelia Robles, ont été nombreuses. La chanson « La Adelita » leur rend hommage.",
      evenements: [
        { annee: 1910, titre: "Début de la Révolution mexicaine", lieu: [19.43, -99.13] },
        { annee: 1914, titre: "Villa et Zapata à Mexico", lieu: [19.43, -99.13] },
        { annee: 1917, titre: "Constitution de Querétaro", lieu: [20.59, -100.39] },
        { annee: 1919, titre: "Assassinat d'Emiliano Zapata", lieu: [18.59, -99.07] },
        { annee: 1938, titre: "Nationalisation du pétrole", lieu: [19.43, -99.13] }
      ]
    },
    {
      titre: 'Le règne du PRI',
      debut: 1940, fin: 2000,
      chapo: "Le Parti révolutionnaire institutionnel gouverne sans interruption, assurant croissance et stabilité au prix de la répression.",
      recit: [
        "De 1940 aux années 1970, le « miracle mexicain » apporte une forte croissance. Le PRI contrôle syndicats, paysans et élections. Le 2 octobre 1968, à Tlatelolco, l'armée tire sur des étudiants : des dizaines, peut-être des centaines de morts.",
        "La crise de la dette de 1982 et le séisme de 1985 affaiblissent le régime. L'élection de 1988 est entachée de fraude. En 1994, l'ALENA entre en vigueur et les zapatistes se soulèvent au Chiapas. En 2000, Vicente Fox, du PAN, met fin à 71 ans de pouvoir du PRI."
      ],
      consensus: [
        "Le PRI a gouverné le Mexique de 1929 à 2000.",
        "Le massacre de Tlatelolco a eu lieu dix jours avant les Jeux olympiques de 1968.",
        "L'élection de 2000 a marqué la première alternance pacifique au sommet de l'État."
      ],
      debats: [
        {
          question: "L'ALENA a-t-il profité au Mexique ?",
          positions: [
            { titre: "Un succès", texte: "Le Mexique est devenu une puissance industrielle exportatrice, intégrée aux chaînes de production nord-américaines.", qui: "Économistes libéraux" },
            { titre: "Un échec social", texte: "Les petits paysans ont été ruinés par le maïs américain subventionné, ce qui a nourri l'émigration, et les salaires ont peu augmenté.", qui: "Zapatistes, économistes critiques" }
          ],
          etat: "Les effets sont contrastés : forte hausse des exportations et de l'industrie au nord, mais croissance moyenne faible et inégalités régionales accrues."
        }
      ],
      moinsConnu: "Pendant la « guerre sale » des années 1960 et 1970, l'État a fait disparaître des centaines d'opposants. Une commission de vérité a été créée en 2021 pour faire la lumière sur ces crimes.",
      evenements: [
        { annee: 1968, titre: "Massacre de Tlatelolco", lieu: [19.45, -99.14] },
        { annee: 1985, titre: "Séisme de Mexico", lieu: [19.43, -99.13] },
        { annee: 1994, titre: "Soulèvement zapatiste et ALENA", lieu: [16.74, -92.64] },
        { annee: 2000, titre: "Fin de 71 ans de règne du PRI", lieu: [19.43, -99.13] }
      ]
    },
    {
      titre: 'Démocratie et guerre des cartels',
      debut: 2000, fin: 2026,
      chapo: "La démocratie s'installe, mais la « guerre contre le narcotrafic » fait des centaines de milliers de morts. En 2024, Claudia Sheinbaum devient la première présidente.",
      recit: [
        "En 2006, Felipe Calderón lance l'armée contre les cartels. Les homicides explosent : plus de 450 000 morts et plus de 100 000 disparus depuis. En 2014, la disparition de 43 étudiants d'Ayotzinapa choque le pays.",
        "En 2018, Andrés Manuel López Obrador, de gauche, est élu. Claudia Sheinbaum, de son parti Morena, lui succède en 2024. Elle doit gérer la pression de Donald Trump sur le commerce, la migration et les cartels. En 2026, le Mexique coorganise la Coupe du monde de football avec les États-Unis et le Canada."
      ],
      consensus: [
        "La guerre contre les cartels a fait des centaines de milliers de victimes depuis 2006.",
        "Plus de 100 000 personnes sont portées disparues au Mexique.",
        "Claudia Sheinbaum est la première femme présidente du Mexique."
      ],
      debats: [
        {
          question: "Faut-il militariser la lutte contre les cartels ?",
          positions: [
            { titre: "Une nécessité", texte: "Face à des cartels armés comme des armées, seule l'armée peut reprendre le contrôle du territoire.", qui: "Gouvernements successifs" },
            { titre: "Une erreur", texte: "La militarisation a multiplié les violences et les violations des droits humains sans affaiblir durablement le trafic, alimenté par la demande et les armes venues des États-Unis.", qui: "ONG, chercheurs en sécurité" }
          ],
          etat: "Les études montrent que les opérations militaires ont souvent fragmenté les cartels et accru la violence. Les gouvernements de gauche ont pourtant renforcé le rôle de l'armée avec la Garde nationale."
        }
      ],
      moinsConnu: "Des « mères chercheuses », des femmes dont les enfants ont disparu, fouillent elles-mêmes le sol à la recherche de fosses clandestines. Plusieurs ont été assassinées.",
      evenements: [
        { annee: 2006, titre: "Début de la guerre contre le narcotrafic", lieu: [19.43, -99.13] },
        { annee: 2014, titre: "Disparition des 43 étudiants d'Ayotzinapa", lieu: [18.35, -99.54] },
        { annee: 2018, titre: "Élection d'Andrés Manuel López Obrador", lieu: [19.43, -99.13] },
        { annee: 2024, titre: "Claudia Sheinbaum, première présidente", lieu: [19.43, -99.13] },
        { annee: 2026, titre: "Coupe du monde au stade Azteca", lieu: [19.3, -99.15] }
      ]
    }
  ]
});
