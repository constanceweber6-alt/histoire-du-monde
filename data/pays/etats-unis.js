HISTOIRE.ajouterPays({
  id: 'etats-unis',
  nom: 'États-Unis',
  region: 'amerique-nord',
  accroche: "Des sociétés autochtones millénaires, treize colonies devenues république, une nation construite sur la liberté et sur l'esclavage, devenue première puissance mondiale.",
  intro: "Les États-Unis se racontent souvent comme une nation née en 1776. Leur territoire a pourtant une histoire bien plus longue, celle des peuples autochtones. Et leur récit fondateur de liberté coexiste avec l'esclavage, la conquête de l'Ouest et la ségrégation, des sujets qui divisent encore profondément le pays.",
  sources: "Howard Zinn, Une histoire populaire des États-Unis ; Jill Lepore, Ces vérités-là ; Gordon Wood, The Radicalism of the American Revolution ; Ned Blackhawk, The Rediscovery of America.",
  phases: [
    {
      titre: 'Les peuples autochtones',
      debut: 1, fin: 1492,
      chapo: "Bien avant les Européens, l'Amérique du Nord est peuplée de sociétés diverses : chasseurs des plaines, agriculteurs, bâtisseurs de villes et de tertres.",
      recit: [
        "Au début de notre ère, la culture Hopewell, dans la vallée de l'Ohio, construit de grands tertres et commerce sur tout le continent. Dans le Sud-Ouest, les Ancestral Pueblos (Anasazis) bâtissent des villages de pierre et des habitations troglodytes, comme à Chaco Canyon et Mesa Verde.",
        "Vers 1050, Cahokia, près de l'actuelle Saint-Louis, est la plus grande ville au nord du Mexique, avec peut-être 15 000 à 20 000 habitants et une pyramide de terre géante. La culture mississippienne s'étend dans le Sud-Est. Au Nord-Est, les nations iroquoises forment une confédération, la Ligue des Cinq Nations."
      ],
      consensus: [
        "Des millions de personnes vivaient en Amérique du Nord avant 1492, dans des sociétés très diverses.",
        "Cahokia a été la plus grande ville d'Amérique du Nord avant l'époque moderne.",
        "Le maïs, domestiqué au Mexique, s'est diffusé dans une grande partie du continent."
      ],
      debats: [
        {
          question: "Combien d'habitants comptait l'Amérique du Nord avant 1492 ?",
          positions: [
            { titre: "Une population faible", texte: "Le continent aurait été peu peuplé, avec environ un million d'habitants, une « terre vierge » à occuper.", qui: "Estimations anciennes, A. L. Kroeber" },
            { titre: "Une population importante", texte: "Avant les épidémies, l'Amérique du Nord aurait compté de 5 à 18 millions d'habitants. Les premiers colons ont souvent trouvé des terres déjà vidées par les maladies.", qui: "Henry Dobyns, Charles Mann" }
          ],
          etat: "Les estimations actuelles se situent généralement entre 4 et 10 millions pour l'Amérique au nord du Mexique. L'idée d'un continent vide est abandonnée."
        }
      ],
      moinsConnu: "La confédération iroquoise, avec son grand conseil et ses règles de décision par consensus, a été citée par certains fondateurs américains, comme Benjamin Franklin. Son influence sur la Constitution est réelle mais débattue.",
      evenements: [
        { annee: 100, titre: "Culture Hopewell dans la vallée de l'Ohio", lieu: [39.3, -83.0] },
        { annee: 900, titre: "Chaco Canyon, centre des Ancestral Pueblos", lieu: [36.06, -107.96] },
        { annee: 1050, titre: "Apogée de Cahokia", lieu: [38.66, -90.06] },
        { annee: 1190, titre: "Habitations de Mesa Verde", lieu: [37.18, -108.49] }
      ]
    },
    {
      titre: 'Colonisation européenne',
      debut: 1492, fin: 1763,
      chapo: "Espagnols, Français, Néerlandais et Anglais s'installent. Les épidémies ravagent les peuples autochtones et l'esclavage africain s'enracine.",
      recit: [
        "Les Espagnols fondent Saint Augustine en Floride en 1565 et Santa Fe en 1610. Les Anglais fondent Jamestown, en Virginie, en 1607. En 1619, les premiers Africains réduits en esclavage y arrivent. En 1620, les puritains du Mayflower s'installent à Plymouth. Les Néerlandais fondent La Nouvelle-Amsterdam, future New York.",
        "Treize colonies anglaises se développent le long de la côte atlantique. Le Sud repose sur les plantations de tabac et de riz cultivées par des esclaves. Les guerres avec les autochtones se multiplient. La guerre de Sept Ans (1756 à 1763) chasse la France d'Amérique du Nord."
      ],
      consensus: [
        "Les épidémies apportées par les Européens ont décimé les populations autochtones.",
        "L'esclavage africain est présent dans les colonies anglaises dès 1619.",
        "La guerre de Sept Ans fait de la Grande-Bretagne la puissance dominante en Amérique du Nord."
      ],
      debats: [
        {
          question: "Quand commence l'histoire américaine : 1607, 1619 ou 1620 ?",
          positions: [
            { titre: "1620, les pèlerins", texte: "L'arrivée des puritains du Mayflower, fuyant la persécution religieuse, symboliserait les valeurs de liberté du pays.", qui: "Récit national traditionnel" },
            { titre: "1619, l'esclavage", texte: "L'arrivée des premiers Africains réduits en esclavage serait la véritable date fondatrice, tant l'esclavage a façonné le pays.", qui: "« Projet 1619 » du New York Times (2019)" }
          ],
          etat: "Le débat a été très politique. Les historiens rappellent que les deux réalités coexistent, et que l'histoire du territoire commence bien avant, avec les peuples autochtones."
        }
      ],
      moinsConnu: "Pocahontas, fille d'un chef powhatan, n'a pas vécu une histoire d'amour avec John Smith comme dans les films. Elle a été enlevée par les colons, convertie, mariée à un planteur de tabac, et est morte en Angleterre à environ 21 ans.",
      evenements: [
        { annee: 1565, titre: "Fondation de Saint Augustine", lieu: [29.9, -81.31] },
        { annee: 1607, titre: "Fondation de Jamestown", lieu: [37.21, -76.78] },
        { annee: 1619, titre: "Arrivée des premiers Africains réduits en esclavage en Virginie", lieu: [37.0, -76.3] },
        { annee: 1620, titre: "Arrivée du Mayflower à Plymouth", lieu: [41.96, -70.67] },
        { annee: 1692, titre: "Procès des sorcières de Salem", lieu: [42.52, -70.9] }
      ]
    },
    {
      titre: 'Révolution et jeune république',
      debut: 1763, fin: 1861,
      chapo: "Les colonies se révoltent, proclament leur indépendance et inventent une république fédérale, tandis que l'esclavage s'étend et que les autochtones sont chassés vers l'ouest.",
      recit: [
        "Les taxes britanniques provoquent la révolte : Boston Tea Party (1773), guerre d'indépendance (1775 à 1783). Le 4 juillet 1776, la Déclaration d'indépendance proclame que « tous les hommes sont créés égaux ». La Constitution de 1787 crée une république fédérale ; George Washington devient le premier président.",
        "Le pays s'étend vers l'ouest : achat de la Louisiane à la France (1803), guerre contre le Mexique (1846 à 1848), qui donne la Californie et le Texas. L'Indian Removal Act (1830) déporte les nations du Sud-Est : c'est la « Piste des larmes ». L'esclavage se développe avec le coton, et la question de son extension divise le Nord et le Sud."
      ],
      consensus: [
        "La Déclaration d'indépendance de 1776 a inspiré de nombreuses révolutions dans le monde.",
        "La Constitution comptait les esclaves pour trois cinquièmes d'une personne dans la répartition des sièges.",
        "La déportation des Cherokees en 1838 et 1839 a fait des milliers de morts."
      ],
      debats: [
        {
          question: "Les pères fondateurs : héros de la liberté ou hypocrites ?",
          positions: [
            { titre: "Des visionnaires", texte: "Ils ont fondé la première grande république moderne sur des principes universels de liberté et d'égalité, qui ont ensuite servi à combattre l'esclavage.", qui: "Gordon Wood, récit national" },
            { titre: "Des contradictions", texte: "Washington, Jefferson et Madison possédaient des esclaves. L'« égalité » proclamée excluait les Noirs, les femmes et les autochtones.", qui: "Historiens critiques, Annette Gordon-Reed" }
          ],
          etat: "Les historiens tiennent ensemble les deux faces : des principes révolutionnaires réels et une pratique profondément inégale."
        }
      ],
      moinsConnu: "Environ 20 000 Afro-Américains réduits en esclavage ont combattu aux côtés des Britanniques pendant la guerre d'indépendance, en échange de la promesse de leur liberté. Certains ont été évacués vers la Nouvelle-Écosse puis la Sierra Leone.",
      evenements: [
        { annee: 1773, titre: "Boston Tea Party", lieu: [42.35, -71.05] },
        { annee: 1776, titre: "Déclaration d'indépendance", lieu: [39.95, -75.15] },
        { annee: 1787, titre: "Constitution des États-Unis", lieu: [39.95, -75.15] },
        { annee: 1803, titre: "Achat de la Louisiane", lieu: [29.95, -90.07] },
        { annee: 1838, titre: "Piste des larmes", lieu: [35.5, -89.0] },
        { annee: 1848, titre: "Fin de la guerre contre le Mexique, ruée vers l'or", lieu: [38.8, -120.9] }
      ]
    },
    {
      titre: 'Guerre de Sécession et conquête de l\'Ouest',
      debut: 1861, fin: 1898,
      chapo: "La guerre de Sécession met fin à l'esclavage, mais la Reconstruction échoue. L'Ouest est conquis au prix de la destruction des nations autochtones.",
      recit: [
        "L'élection d'Abraham Lincoln en 1860 provoque la sécession de onze États du Sud. La guerre de Sécession (1861 à 1865) fait environ 700 000 morts. En 1863, Lincoln proclame l'émancipation des esclaves ; le 13e amendement abolit l'esclavage en 1865. Lincoln est assassiné.",
        "Pendant la Reconstruction, les Afro-Américains obtiennent la citoyenneté et le droit de vote, et sont élus au Congrès. Après 1877, les États du Sud imposent la ségrégation (lois Jim Crow) et la terreur du Ku Klux Klan. Dans l'Ouest, les guerres indiennes s'achèvent par le massacre de Wounded Knee (1890). Le chemin de fer transcontinental et l'industrialisation font des États-Unis la première économie mondiale."
      ],
      consensus: [
        "L'esclavage est la cause principale de la guerre de Sécession.",
        "La guerre de Sécession est le conflit le plus meurtrier de l'histoire américaine.",
        "Après 1877, les Afro-Américains du Sud ont été privés de leurs droits par la ségrégation et la violence."
      ],
      debats: [
        {
          question: "La guerre de Sécession : pour l'esclavage ou pour les droits des États ?",
          positions: [
            { titre: "Les droits des États", texte: "Le Sud se serait battu pour défendre son autonomie et son mode de vie face à un gouvernement fédéral envahissant : c'est la « cause perdue ».", qui: "Mythe sudiste de la « Lost Cause »" },
            { titre: "L'esclavage", texte: "Les déclarations de sécession des États du Sud citent explicitement la défense de l'esclavage comme motif principal.", qui: "James McPherson, Eric Foner, consensus historien" }
          ],
          etat: "Les historiens sont unanimes : l'esclavage est la cause centrale de la sécession. Le mythe de la « cause perdue » reste pourtant présent dans la mémoire publique, comme le montrent les débats sur les statues confédérées."
        }
      ],
      moinsConnu: "En 1873, à Colfax, en Louisiane, une milice blanche massacre des dizaines, peut-être plus d'une centaine d'Afro-Américains qui défendaient le tribunal du comté. C'est l'un des pires massacres de la Reconstruction.",
      evenements: [
        { annee: 1861, titre: "Début de la guerre de Sécession à Fort Sumter", lieu: [32.75, -79.87] },
        { annee: 1863, titre: "Proclamation d'émancipation, bataille de Gettysburg", lieu: [39.82, -77.23] },
        { annee: 1865, titre: "Fin de la guerre, assassinat de Lincoln", lieu: [38.9, -77.03] },
        { annee: 1869, titre: "Chemin de fer transcontinental", lieu: [41.62, -112.55] },
        { annee: 1876, titre: "Bataille de Little Bighorn", lieu: [45.57, -107.43] },
        { annee: 1890, titre: "Massacre de Wounded Knee", lieu: [43.14, -102.36] }
      ]
    },
    {
      titre: 'Puissance mondiale, crise et guerres',
      debut: 1898, fin: 1945,
      chapo: "Les États-Unis deviennent une puissance impériale, traversent la Grande Dépression et sortent de la Seconde Guerre mondiale comme première puissance du monde.",
      recit: [
        "La guerre contre l'Espagne (1898) donne aux États-Unis Porto Rico, Guam et les Philippines. Ils entrent dans la Première Guerre mondiale en 1917. Les femmes obtiennent le droit de vote en 1920. Les « années folles » se terminent par le krach de 1929 et la Grande Dépression : jusqu'à un quart de la population active au chômage.",
        "Franklin D. Roosevelt lance le New Deal. Après l'attaque japonaise de Pearl Harbor (1941), les États-Unis entrent dans la Seconde Guerre mondiale. Plus de 120 000 Américains d'origine japonaise sont internés. En août 1945, les États-Unis larguent les bombes atomiques sur Hiroshima et Nagasaki."
      ],
      consensus: [
        "La Grande Dépression a été la plus grave crise économique de l'histoire américaine.",
        "Le New Deal a créé les bases de l'État social américain.",
        "L'internement des Américains d'origine japonaise a été reconnu comme une injustice par le Congrès en 1988."
      ],
      debats: [
        {
          question: "Le New Deal a-t-il sorti le pays de la crise ?",
          positions: [
            { titre: "Oui", texte: "Grands travaux, protection sociale et régulation bancaire ont relancé l'économie et redonné confiance.", qui: "Historiens keynésiens, majorité des historiens" },
            { titre: "Pas vraiment", texte: "Le chômage restait élevé en 1939 : c'est la Seconde Guerre mondiale qui a mis fin à la crise.", qui: "Économistes libéraux, Amity Shlaes" }
          ],
          etat: "Les historiens reconnaissent que le New Deal a soulagé la crise et transformé l'État, mais que la reprise complète vient de la mobilisation de guerre."
        }
      ],
      moinsConnu: "En 1921, à Tulsa, dans l'Oklahoma, une foule blanche détruit Greenwood, un quartier noir prospère surnommé « Black Wall Street », et tue peut-être jusqu'à 300 personnes. Le massacre a été effacé des manuels pendant des décennies.",
      evenements: [
        { annee: 1898, titre: "Guerre hispano-américaine" },
        { annee: 1920, titre: "Droit de vote des femmes", lieu: [38.9, -77.03] },
        { annee: 1921, titre: "Massacre de Tulsa", lieu: [36.16, -95.99] },
        { annee: 1929, titre: "Krach de Wall Street", lieu: [40.71, -74.01] },
        { annee: 1941, titre: "Pearl Harbor, entrée en guerre" },
        { annee: 1945, titre: "Bombes atomiques sur Hiroshima et Nagasaki", lieu: [34.39, 132.45] }
      ]
    },
    {
      titre: 'Superpuissance et droits civiques',
      debut: 1945, fin: 1991,
      chapo: "Les États-Unis dominent le monde occidental pendant la guerre froide, tandis que le mouvement des droits civiques met fin à la ségrégation légale.",
      recit: [
        "Après 1945, les États-Unis lancent le plan Marshall et fondent l'OTAN. La guerre froide contre l'URSS entraîne la guerre de Corée, le maccarthysme et la course à l'espace. Les États-Unis soutiennent aussi des coups d'État en Iran, au Guatemala ou au Chili.",
        "Le mouvement des droits civiques, mené par Rosa Parks, Martin Luther King et bien d'autres, obtient la fin de la ségrégation (Civil Rights Act, 1964) et le droit de vote effectif des Noirs (1965). La guerre du Vietnam divise le pays. En 1969, Neil Armstrong marche sur la Lune. Le scandale du Watergate pousse Nixon à la démission (1974). L'URSS s'effondre en 1991."
      ],
      consensus: [
        "Le Civil Rights Act de 1964 met fin à la ségrégation légale.",
        "Les États-Unis ont soutenu des coups d'État contre des gouvernements élus pendant la guerre froide.",
        "La guerre du Vietnam a profondément divisé la société américaine."
      ],
      debats: [
        {
          question: "Le mouvement des droits civiques : réforme réussie ou révolution inachevée ?",
          positions: [
            { titre: "Une réussite", texte: "En une décennie, la ségrégation légale a été abolie et le droit de vote garanti, grâce à une lutte non violente exemplaire.", qui: "Récit national" },
            { titre: "Une révolution inachevée", texte: "Les inégalités de richesse, de logement et face à la police ont persisté. Martin Luther King lui-même se tournait vers la question économique avant d'être assassiné.", qui: "Historiens de la « longue lutte », mouvement Black Lives Matter" }
          ],
          etat: "Les historiens reconnaissent les victoires juridiques décisives et la persistance d'inégalités raciales profondes."
        }
      ],
      moinsConnu: "Claudette Colvin, une lycéenne de 15 ans, a refusé de céder sa place dans un bus de Montgomery neuf mois avant Rosa Parks, en 1955. Elle a été écartée du récit car jugée moins « présentable » par les organisateurs.",
      evenements: [
        { annee: 1955, titre: "Boycott des bus de Montgomery", lieu: [32.38, -86.3] },
        { annee: 1963, titre: "Marche sur Washington, discours « I have a dream »", lieu: [38.89, -77.05] },
        { annee: 1964, titre: "Civil Rights Act", lieu: [38.9, -77.03] },
        { annee: 1968, titre: "Assassinat de Martin Luther King", lieu: [35.13, -90.06] },
        { annee: 1969, titre: "Premiers pas sur la Lune" },
        { annee: 1974, titre: "Démission de Richard Nixon", lieu: [38.9, -77.03] }
      ]
    },
    {
      titre: "Les États-Unis depuis 1991",
      debut: 1991, fin: 2026,
      chapo: "Seule superpuissance après la guerre froide, les États-Unis sont frappés par le 11 septembre, s'engagent en Afghanistan et en Irak, et se polarisent fortement.",
      recit: [
        "Les années 1990 sont celles de la mondialisation et de l'essor d'Internet. Le 11 septembre 2001, Al-Qaïda tue près de 3 000 personnes. Les États-Unis envahissent l'Afghanistan, puis l'Irak en 2003. La crise financière de 2008 provoque une grave récession. Barack Obama devient le premier président afro-américain.",
        "Donald Trump, élu en 2016, battu en 2020, voit ses partisans envahir le Capitole le 6 janvier 2021. Il est réélu en 2024. Son second mandat est marqué par des droits de douane élevés, une politique migratoire très dure, la capture de Nicolás Maduro au Venezuela et la guerre contre l'Iran en 2026. Aux élections de mi-mandat de novembre 2026, les démocrates reprennent le contrôle des deux chambres du Congrès."
      ],
      consensus: [
        "Les attentats du 11 septembre 2001 sont les plus meurtriers de l'histoire du pays.",
        "L'assaut du Capitole du 6 janvier 2021 visait à empêcher la certification de l'élection présidentielle.",
        "La société américaine est fortement polarisée politiquement depuis les années 2010."
      ],
      debats: [
        {
          question: "Les États-Unis sont-ils en déclin ?",
          positions: [
            { titre: "Un déclin relatif", texte: "La montée de la Chine, les guerres coûteuses, la polarisation et la crise des institutions affaibliraient la puissance américaine.", qui: "Paul Kennedy, de nombreux analystes" },
            { titre: "Une puissance durable", texte: "Les États-Unis restent la première économie, la première armée, le cœur de l'innovation technologique et de la finance mondiale.", qui: "Joseph Nye, Michael Beckley" }
          ],
          etat: "Le débat est ancien et revient régulièrement depuis les années 1970. Les chercheurs s'accordent sur une puissance encore dominante mais plus contestée."
        }
      ],
      moinsConnu: "Les États-Unis comptent environ 574 nations autochtones reconnues par l'État fédéral. En 2020, la Cour suprême a reconnu qu'une grande partie de l'est de l'Oklahoma restait juridiquement une réserve, en vertu de traités du XIXe siècle.",
      evenements: [
        { annee: 2001, titre: "Attentats du 11 septembre", lieu: [40.71, -74.01] },
        { annee: 2008, titre: "Crise financière, élection de Barack Obama", lieu: [40.71, -74.01] },
        { annee: 2021, titre: "Assaut du Capitole", lieu: [38.89, -77.01] },
        { annee: 2026, titre: "Les démocrates reprennent le Congrès", lieu: [38.89, -77.01] }
      ]
    }
  ]
});
