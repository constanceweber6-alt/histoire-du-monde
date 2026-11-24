HISTOIRE.ajouterPays({
  id: 'haiti',
  nom: 'Haïti',
  region: 'amerique-nord',
  accroche: "La plus riche colonie du monde au XVIIIe siècle, devenue en 1804 la première république noire après la seule révolution d'esclaves victorieuse de l'histoire, puis un pays étranglé par la dette, les dictatures et les gangs.",
  intro: "La révolution haïtienne a été longtemps oubliée des grands récits, alors qu'elle a aboli l'esclavage et vaincu l'armée de Napoléon. Le pays a ensuite payé très cher sa liberté : une dette imposée par la France, l'occupation américaine, la dictature des Duvalier. Il traverse aujourd'hui une crise profonde.",
  sources: "Laurent Dubois, Avengers of the New World ; C. L. R. James, Les Jacobins noirs ; Michel-Rolph Trouillot, Silencing the Past ; enquête du New York Times « The Ransom » (2022).",
  phases: [
    {
      titre: 'Ayiti, terre des Taïnos',
      debut: 1, fin: 1492,
      chapo: "L'île, que les Taïnos appellent Ayiti, « terre des hautes montagnes », est divisée en cinq grandes chefferies.",
      recit: [
        "Les Taïnos s'installent dans l'île vers 600 à 1000. Ils cultivent le manioc et le maïs et vivent dans des villages dirigés par des caciques.",
        "À l'arrivée des Européens, l'île est partagée en cinq caciquats, dont celui du Xaragua, dirigé par Bohechío puis par sa sœur Anacaona."
      ],
      consensus: [
        "L'île était divisée en plusieurs chefferies taïnos.",
        "Le nom « Haïti » vient du nom taïno de l'île.",
        "La population taïno était importante avant 1492."
      ],
      debats: [
        {
          question: "Combien de Taïnos vivaient sur l'île en 1492 ?",
          positions: [
            { titre: "Des millions", texte: "Certains chroniqueurs, comme Las Casas, parlaient de 3 à 4 millions d'habitants.", qui: "Bartolomé de las Casas, Sherburne Cook et Woodrow Borah" },
            { titre: "Quelques centaines de milliers", texte: "Les estimations fondées sur les ressources agricoles et l'archéologie donnent des chiffres bien plus faibles.", qui: "Massimo Livi Bacci" }
          ],
          etat: "Les estimations varient de 100 000 à plusieurs millions. Tous s'accordent sur un effondrement presque total en quelques décennies."
        }
      ],
      moinsConnu: "En choisissant le nom « Haïti » en 1804, les révolutionnaires ont voulu rendre hommage aux premiers habitants de l'île, exterminés par la colonisation.",
      evenements: [
        { annee: 800, titre: "Installation des Taïnos", lieu: [19.0, -72.5] },
        { annee: 1450, titre: "Caciquat du Xaragua", lieu: [18.5, -72.5] }
      ]
    },
    {
      titre: 'Hispaniola et Saint-Domingue',
      debut: 1492, fin: 1791,
      chapo: "Les Espagnols détruisent la société taïno. Au XVIIIe siècle, la partie française, Saint-Domingue, devient la colonie la plus riche du monde grâce à 500 000 esclaves.",
      recit: [
        "Colomb fonde La Navidad en 1492. En quelques décennies, les Taïnos sont presque exterminés par le travail forcé, les massacres et les épidémies. La cacique Anacaona est pendue en 1503. Au XVIIe siècle, des flibustiers français s'installent à l'ouest ; l'Espagne cède cette partie à la France en 1697.",
        "Saint-Domingue produit près de la moitié du sucre et du café consommés en Europe. Environ 500 000 esclaves y travaillent dans des conditions si dures que beaucoup meurent en quelques années. En 1758, le marron Makandal, accusé d'empoisonnements, est brûlé vif."
      ],
      consensus: [
        "Saint-Domingue était la colonie la plus rentable du monde à la fin du XVIIIe siècle.",
        "La colonie comptait environ 500 000 esclaves pour 30 000 Blancs et 28 000 libres de couleur.",
        "La mortalité des esclaves y était extrêmement élevée."
      ],
      debats: [
        {
          question: "Qui a profité de la richesse de Saint-Domingue ?",
          positions: [
            { titre: "Les planteurs", texte: "La richesse revenait surtout aux grands planteurs et à leurs créanciers.", qui: "Historiographie coloniale" },
            { titre: "Toute l'économie française", texte: "Les ports de Nantes, Bordeaux et La Rochelle, les raffineries et la banque ont été enrichis par la traite et le sucre ; une part de la croissance française du XVIIIe siècle en dépend.", qui: "Historiens de l'esclavage, Éric Saunier, Olivier Pétré-Grenouilleau" }
          ],
          etat: "Les historiens s'accordent sur l'importance de Saint-Domingue pour l'économie atlantique française, même si son poids exact dans la croissance nationale est discuté."
        }
      ],
      moinsConnu: "Les libres de couleur, souvent métis, possédaient environ un tiers des plantations et un quart des esclaves de la colonie, mais étaient privés de droits politiques.",
      evenements: [
        { annee: 1492, titre: "Fondation de La Navidad par Colomb", lieu: [19.77, -72.2] },
        { annee: 1503, titre: "Exécution d'Anacaona", lieu: [18.43, -72.86] },
        { annee: 1697, titre: "Saint-Domingue devient française", lieu: [19.76, -72.2] },
        { annee: 1758, titre: "Exécution de Makandal", lieu: [19.76, -72.2] }
      ]
    },
    {
      titre: 'La révolution haïtienne',
      debut: 1791, fin: 1804,
      chapo: "Les esclaves se soulèvent, obtiennent l'abolition, vainquent l'armée de Napoléon et proclament l'indépendance.",
      recit: [
        "Dans la nuit du 22 au 23 août 1791, après la cérémonie du Bois-Caïman, les esclaves du Nord se soulèvent. En 1793, les commissaires français abolissent l'esclavage ; la Convention l'étend à toutes les colonies en 1794. Toussaint Louverture, ancien esclave, devient le maître de la colonie.",
        "En 1802, Napoléon envoie une armée pour rétablir l'esclavage. Toussaint est arrêté et meurt en captivité dans le Jura. Jean-Jacques Dessalines mène la guerre ; les Français sont vaincus à Vertières en novembre 1803. Le 1er janvier 1804, Haïti proclame son indépendance."
      ],
      consensus: [
        "La révolution haïtienne est la seule révolte d'esclaves qui ait abouti à un État indépendant.",
        "Elle a forcé la France à abolir l'esclavage en 1794.",
        "L'armée envoyée par Napoléon a été vaincue en 1803."
      ],
      debats: [
        {
          question: "Pourquoi la révolution haïtienne a-t-elle été si longtemps oubliée ?",
          positions: [
            { titre: "Un silence volontaire", texte: "Une révolution menée par des esclaves noirs était « impensable » pour les Européens de l'époque, qui l'ont minimisée puis effacée des récits.", qui: "Michel-Rolph Trouillot" },
            { titre: "Un oubli progressif", texte: "Elle a été très discutée à l'époque, dans les journaux et par les abolitionnistes, mais marginalisée ensuite par des histoires nationales centrées sur l'Europe.", qui: "Laurent Dubois, Ada Ferrer" }
          ],
          etat: "Les historiens reconnaissent aujourd'hui la révolution haïtienne comme l'une des grandes révolutions de l'âge des révolutions, au même titre que les révolutions américaine et française."
        }
      ],
      moinsConnu: "Sanité Bélair, lieutenante de l'armée de Toussaint, a été fusillée par les Français en 1802. Elle figure sur les billets haïtiens de dix gourdes.",
      evenements: [
        { annee: 1791, titre: "Cérémonie du Bois-Caïman et insurrection", lieu: [19.7, -72.25] },
        { annee: 1793, titre: "Abolition de l'esclavage à Saint-Domingue", lieu: [19.76, -72.2] },
        { annee: 1802, titre: "Expédition de Leclerc, arrestation de Toussaint", lieu: [19.76, -72.2] },
        { annee: 1803, titre: "Bataille de Vertières", lieu: [19.74, -72.22] },
        { annee: 1804, titre: "Indépendance d'Haïti aux Gonaïves", lieu: [19.45, -72.69] }
      ]
    },
    {
      titre: 'La première république noire',
      debut: 1804, fin: 1915,
      chapo: "Haïti est isolée par les puissances esclavagistes et doit payer à la France une énorme indemnité pour faire reconnaître son indépendance.",
      recit: [
        "Dessalines se proclame empereur et fait massacrer une grande partie des Français restés sur l'île en 1804 ; il est assassiné en 1806. Le pays se divise entre le royaume de Christophe au nord et la république de Pétion au sud, réunifiés en 1820. Haïti occupe la partie espagnole de l'île de 1822 à 1844.",
        "En 1825, sous la menace d'une flotte, Charles X impose à Haïti une indemnité de 150 millions de francs pour dédommager les anciens colons. Le pays s'endette auprès de banques françaises pendant des décennies. L'instabilité politique est grande à la fin du siècle."
      ],
      consensus: [
        "Haïti a dû payer à la France une indemnité pour faire reconnaître son indépendance.",
        "Les États-Unis n'ont reconnu Haïti qu'en 1862.",
        "Haïti a aidé Bolívar en échange de la promesse d'abolir l'esclavage."
      ],
      debats: [
        {
          question: "Quel a été le coût réel de la « double dette » ?",
          positions: [
            { titre: "Une ruine durable", texte: "Une enquête du New York Times (2022) estime que les paiements ont privé Haïti de 21 à 115 milliards de dollars actuels de croissance.", qui: "New York Times, économistes" },
            { titre: "Une cause parmi d'autres", texte: "La dette a pesé lourd, mais l'instabilité politique et les choix des élites haïtiennes expliquent aussi le retard du pays.", qui: "Une partie des historiens de l'économie" }
          ],
          etat: "L'existence et le poids de cette dette ne sont plus contestés. Des voix demandent des réparations à la France, qui a annoncé en 2025, pour le bicentenaire de l'ordonnance, une commission mixte d'historiens franco-haïtiens."
        }
      ],
      moinsConnu: "En 1815, le président Pétion a accueilli Simón Bolívar en exil et lui a fourni armes et argent, à condition qu'il abolisse l'esclavage dans les pays qu'il libérerait.",
      evenements: [
        { annee: 1806, titre: "Assassinat de Dessalines", lieu: [18.56, -72.33] },
        { annee: 1815, titre: "Pétion soutient Bolívar", lieu: [18.23, -73.75] },
        { annee: 1820, titre: "Citadelle Laferrière, mort du roi Christophe", lieu: [19.57, -72.24] },
        { annee: 1825, titre: "Ordonnance de Charles X et indemnité", lieu: [18.54, -72.34] }
      ]
    },
    {
      titre: 'Occupation américaine et Duvalier',
      debut: 1915, fin: 1986,
      chapo: "Les États-Unis occupent Haïti pendant dix-neuf ans. Puis François Duvalier et son fils imposent une dictature sanglante de près de trente ans.",
      recit: [
        "En 1915, les marines américains débarquent et occupent le pays jusqu'en 1934. Ils rétablissent le travail forcé, la corvée, et répriment la résistance des Cacos de Charlemagne Péralte. En 1937, le dictateur dominicain Trujillo fait massacrer des milliers d'Haïtiens à la frontière.",
        "François « Papa Doc » Duvalier, élu en 1957, se proclame président à vie et fait régner la terreur avec sa milice, les tontons macoutes. Son fils Jean-Claude lui succède en 1971. Des dizaines de milliers d'Haïtiens sont tués ou s'exilent. Une révolte populaire chasse « Baby Doc » en 1986."
      ],
      consensus: [
        "Les États-Unis ont occupé Haïti de 1915 à 1934.",
        "Le massacre du Persil, en 1937, a fait des milliers de victimes haïtiennes.",
        "La dictature des Duvalier a été l'une des plus violentes des Amériques."
      ],
      debats: [
        {
          question: "L'occupation américaine : modernisation ou domination ?",
          positions: [
            { titre: "Une modernisation", texte: "Les Américains ont construit routes, hôpitaux et écoles et rétabli l'ordre financier.", qui: "Discours officiel américain de l'époque" },
            { titre: "Une domination", texte: "L'occupation a pris le contrôle des finances, imposé une constitution permettant aux étrangers d'acheter des terres et créé une armée qui servira les dictatures.", qui: "Historiens haïtiens, Mary Renda" }
          ],
          etat: "Les historiens soulignent surtout la violence de l'occupation et son héritage : la centralisation à Port-au-Prince et une armée tournée contre la population."
        }
      ],
      moinsConnu: "Pour masquer le massacre de 1937, des soldats dominicains auraient demandé aux victimes de prononcer le mot « perejil » (persil). Ceux qui ne roulaient pas le « r » à l'espagnole étaient tués.",
      evenements: [
        { annee: 1915, titre: "Débarquement des marines américains", lieu: [18.54, -72.34] },
        { annee: 1919, titre: "Assassinat de Charlemagne Péralte", lieu: [19.15, -72.0] },
        { annee: 1937, titre: "Massacre du Persil", lieu: [19.5, -71.7] },
        { annee: 1957, titre: "Élection de François Duvalier", lieu: [18.54, -72.34] },
        { annee: 1986, titre: "Chute de Jean-Claude Duvalier", lieu: [18.54, -72.34] }
      ]
    },
    {
      titre: 'Démocratie fragile, séisme et gangs',
      debut: 1986, fin: 2026,
      chapo: "Coups d'État, séisme dévastateur, assassinat du président : Haïti s'enfonce dans la crise, et les gangs contrôlent une grande partie de la capitale.",
      recit: [
        "Jean-Bertrand Aristide, prêtre populaire, est élu en 1990, renversé en 1991, rétabli en 1994 par les États-Unis, puis chassé de nouveau en 2004. Le 12 janvier 2010, un séisme fait plus de 200 000 morts. Les Casques bleus de l'ONU introduisent le choléra, qui tue près de 10 000 personnes.",
        "Le président Jovenel Moïse est assassiné en 2021. Les gangs prennent le contrôle de l'essentiel de Port-au-Prince. Un Conseil présidentiel de transition gouverne à partir de 2024, puis cède le pouvoir au Premier ministre Alix Didier Fils-Aimé le 7 février 2026. Une Force de répression des gangs, avec des soldats salvadoriens, est déployée, mais les élections sont reportées."
      ],
      consensus: [
        "Le séisme de 2010 a été l'une des catastrophes les plus meurtrières du siècle.",
        "Le choléra a été introduit en Haïti par des Casques bleus népalais.",
        "Haïti n'a pas organisé d'élections nationales depuis 2016."
      ],
      debats: [
        {
          question: "Les interventions étrangères aident-elles Haïti ?",
          positions: [
            { titre: "Une aide nécessaire", texte: "L'État haïtien n'a pas les moyens de vaincre seul des gangs lourdement armés ; une force internationale est indispensable.", qui: "ONU, États-Unis, une partie de la population" },
            { titre: "Une ingérence récurrente", texte: "Occupations, missions de l'ONU, aide humanitaire : un siècle d'interventions a affaibli l'État haïtien et alimenté la dépendance.", qui: "Intellectuels haïtiens, critiques de l'aide internationale" }
          ],
          etat: "Le débat est vif. Les échecs des missions passées, dont le scandale du choléra, nourrissent la méfiance, mais l'urgence sécuritaire pousse à de nouvelles interventions."
        }
      ],
      moinsConnu: "En 2016, l'ONU a reconnu sa responsabilité morale dans l'épidémie de choléra, après des années de déni, mais le fonds promis aux victimes n'a été que très partiellement financé.",
      evenements: [
        { annee: 1990, titre: "Élection de Jean-Bertrand Aristide", lieu: [18.54, -72.34] },
        { annee: 2010, titre: "Séisme de Port-au-Prince", lieu: [18.46, -72.53] },
        { annee: 2021, titre: "Assassinat du président Jovenel Moïse", lieu: [18.51, -72.29] },
        { annee: 2024, titre: "Les gangs s'emparent de la capitale", lieu: [18.54, -72.34] },
        { annee: 2026, titre: "Fils-Aimé seul au pouvoir, force contre les gangs", lieu: [18.54, -72.34] }
      ]
    }
  ]
});
