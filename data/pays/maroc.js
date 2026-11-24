HISTOIRE.ajouterPays({
  id: 'maroc',
  nom: 'Maroc',
  region: 'afrique-nord',
  accroche: "Une terre amazighe, romaine à ses marges, berceau de grands empires almoravide et almohade, seul pays arabe jamais conquis par les Ottomans, protectorat français, puis monarchie qui se réforme sans renoncer au pouvoir.",
  intro: "Le Maroc est un royaume ancien : la dynastie alaouite règne depuis le XVIIe siècle. Son identité mêle racines amazighes, islam, héritage andalou, présence juive et influence africaine. La question du Sahara occidental et l'équilibre entre monarchie et partis dominent sa vie politique.",
  sources: "Daniel Rivet, Histoire du Maroc ; Abdallah Laroui, L'Histoire du Maghreb ; Susan Gilson Miller, A History of Modern Morocco.",
  phases: [
    {
      titre: 'Maurétanie et Berbères',
      debut: 1, fin: 788,
      chapo: "Le royaume de Maurétanie devient une province romaine. Les tribus amazighes restent largement autonomes, puis les Arabes arrivent à la fin du VIIe siècle.",
      recit: [
        "Au début de notre ère, le roi Juba II, allié de Rome et marié à la fille de Cléopâtre, règne sur la Maurétanie depuis Volubilis et Caesarea. En 40, l'empereur Caligula fait assassiner son fils Ptolémée et annexe le royaume. La province de Maurétanie tingitane couvre le nord du Maroc actuel.",
        "Les Romains se retirent de l'intérieur à la fin du IIIe siècle. Les tribus amazighes gouvernent l'essentiel du territoire. Les armées arabes atteignent l'Atlantique vers 680. En 739, la grande révolte berbère contre le califat omeyyade éclate au Maroc."
      ],
      consensus: [
        "La Maurétanie a été un royaume allié de Rome avant d'être annexée en 40.",
        "La domination romaine n'a couvert que le nord du pays.",
        "La révolte berbère de 739 a mis fin au contrôle direct du califat sur le Maghreb occidental."
      ],
      debats: [
        {
          question: "Les Amazighs ont-ils été romanisés ?",
          positions: [
            { titre: "Une romanisation profonde", texte: "Les villes, le latin et le christianisme se seraient implantés durablement en Afrique du Nord.", qui: "Historiographie coloniale française" },
            { titre: "Une résistance", texte: "La romanisation est restée limitée aux villes ; les campagnes et les montagnes ont gardé leur langue et leurs structures.", qui: "Abdallah Laroui, historiens maghrébins" }
          ],
          etat: "Les historiens décrivent une romanisation réelle mais localisée, surtout au nord et dans les villes."
        }
      ],
      moinsConnu: "Juba II était un savant : il a écrit en grec des ouvrages de géographie et d'histoire naturelle, aujourd'hui perdus, et aurait donné son nom à l'euphorbe.",
      evenements: [
        { annee: 20, titre: "Règne de Juba II à Volubilis", lieu: [34.07, -5.55] },
        { annee: 40, titre: "Annexion de la Maurétanie par Rome", lieu: [35.78, -5.81] },
        { annee: 681, titre: "Arrivée des armées arabes", lieu: [30.4, -9.6] },
        { annee: 739, titre: "Grande révolte berbère", lieu: [35.78, -5.81] }
      ]
    },
    {
      titre: 'Idrissides, Almoravides et Almohades',
      debut: 788, fin: 1269,
      chapo: "Les Idrissides fondent le premier État musulman marocain. Puis deux empires berbères, almoravide et almohade, unifient le Maghreb et al-Andalus.",
      recit: [
        "En 788, Idris, descendant du Prophète réfugié au Maroc, fonde la dynastie idrisside. Son fils fonde Fès, où Fatima al-Fihriya crée la mosquée al-Qarawiyyin en 859.",
        "Au XIe siècle, les Almoravides, nomades sahariens, fondent Marrakech (vers 1070) et conquièrent al-Andalus. Les Almohades, mouvement religieux venu de l'Atlas, les remplacent en 1147 et dominent le Maghreb jusqu'à la défaite de Las Navas de Tolosa (1212)."
      ],
      consensus: [
        "Fès a été fondée par les Idrissides au IXe siècle.",
        "Les Almoravides et les Almohades ont été parmi les plus grands empires de l'histoire de l'Afrique du Nord.",
        "La mosquée al-Qarawiyyin est l'une des plus anciennes institutions d'enseignement encore actives."
      ],
      debats: [
        {
          question: "Al-Qarawiyyin est-elle la plus ancienne université du monde ?",
          positions: [
            { titre: "Oui", texte: "Fondée en 859, elle enseigne sans interruption depuis le Moyen Âge, ce qui en fait la plus ancienne université encore en activité.", qui: "UNESCO, Guinness" },
            { titre: "Pas au sens strict", texte: "Elle fut d'abord une mosquée-école ; le statut d'université moderne ne date que de 1963. Le terme « université » renvoie à une institution européenne différente.", qui: "Historiens de l'éducation" }
          ],
          etat: "La querelle porte surtout sur la définition du mot « université ». L'ancienneté de l'enseignement à al-Qarawiyyin n'est pas contestée."
        }
      ],
      moinsConnu: "Le philosophe Averroès (Ibn Rushd), originaire de Cordoue, a fini sa vie à Marrakech au service des califes almohades, avant d'être brièvement disgracié.",
      evenements: [
        { annee: 789, titre: "Fondation de Fès", lieu: [34.06, -4.98] },
        { annee: 859, titre: "Mosquée al-Qarawiyyin", lieu: [34.065, -4.973] },
        { annee: 1070, titre: "Fondation de Marrakech", lieu: [31.63, -7.99] },
        { annee: 1147, titre: "Prise de Marrakech par les Almohades", lieu: [31.63, -7.99] },
        { annee: 1212, titre: "Défaite de Las Navas de Tolosa", lieu: [38.28, -3.58] }
      ]
    },
    {
      titre: 'Mérinides, Saadiens et Alaouites',
      debut: 1269, fin: 1912,
      chapo: "Des dynasties successives gouvernent le Maroc, qui résiste aux Portugais, aux Espagnols et aux Ottomans, avant de tomber sous la pression européenne.",
      recit: [
        "Les Mérinides font de Fès une capitale brillante (XIIIe et XIVe siècles). Le voyageur Ibn Battuta en part en 1325. Après la chute de Grenade (1492), des musulmans et des juifs andalous s'installent au Maroc. Les Portugais s'emparent de ports. En 1578, les Saadiens écrasent le Portugal à la bataille des Trois Rois ; en 1591, ils conquièrent Tombouctou.",
        "Les Alaouites règnent depuis 1666. Moulay Ismaïl bâtit Meknès avec une armée d'esclaves noirs, les Abid al-Bukhari. Au XIXe siècle, la France bat le Maroc à Isly (1844) et l'Espagne occupe Tétouan (1860). Les crises de Tanger (1905) et d'Agadir (1911) préparent le protectorat."
      ],
      consensus: [
        "Le Maroc est le seul pays arabe à n'avoir jamais été conquis par l'Empire ottoman.",
        "La bataille des Trois Rois (1578) a été une défaite décisive pour le Portugal.",
        "La dynastie alaouite règne depuis le XVIIe siècle."
      ],
      debats: [
        {
          question: "Le Maroc précolonial : État ou « pays de la dissidence » ?",
          positions: [
            { titre: "Une division", texte: "Le pays aurait été partagé entre le « bled makhzen », soumis au sultan, et le « bled siba », tribus insoumises.", qui: "Ethnographie coloniale française" },
            { titre: "Un État cohérent", texte: "Les tribus dites insoumises reconnaissaient l'autorité religieuse du sultan ; l'opposition makhzen et siba a servi à justifier la conquête.", qui: "Abdallah Laroui, Edmund Burke III" }
          ],
          etat: "Les historiens jugent la dichotomie makhzen et siba trop simpliste, même si l'autorité du sultan variait fortement selon les régions."
        }
      ],
      moinsConnu: "En 1777, le Maroc a été l'un des premiers pays à reconnaître l'indépendance des États-Unis. Le traité d'amitié maroco-américain de 1786 est toujours en vigueur.",
      evenements: [
        { annee: 1325, titre: "Départ d'Ibn Battuta de Tanger", lieu: [35.78, -5.81] },
        { annee: 1578, titre: "Bataille des Trois Rois", lieu: [35.0, -5.9] },
        { annee: 1591, titre: "Conquête de Tombouctou", lieu: [16.77, -3.0] },
        { annee: 1672, titre: "Règne de Moulay Ismaïl à Meknès", lieu: [33.89, -5.55] },
        { annee: 1844, titre: "Bataille d'Isly contre la France", lieu: [34.68, -1.9] }
      ]
    },
    {
      titre: 'Le protectorat',
      debut: 1912, fin: 1956,
      chapo: "La France et l'Espagne se partagent le Maroc. Lyautey modernise tout en gardant le sultan, tandis que la guerre du Rif oppose Abdelkrim aux deux puissances.",
      recit: [
        "Le traité de Fès (1912) instaure le protectorat français ; l'Espagne obtient le nord et le sud. Lyautey, résident général, conserve le sultan et bâtit des villes nouvelles à côté des médinas. Casablanca devient le grand port.",
        "En 1921, Abdelkrim el-Khattabi écrase l'armée espagnole à Anoual et fonde une république du Rif. Il est vaincu en 1926 par 400 000 soldats français et espagnols, qui utilisent des gaz chimiques. Le parti de l'Istiqlal réclame l'indépendance en 1944. L'exil du sultan Mohammed ben Youssef en 1953 provoque une insurrection."
      ],
      consensus: [
        "Le Maroc a été divisé entre protectorats français et espagnol de 1912 à 1956.",
        "La guerre du Rif a été l'une des grandes guerres anticoloniales du XXe siècle.",
        "L'armée espagnole a utilisé des armes chimiques contre les Rifains."
      ],
      debats: [
        {
          question: "Lyautey : colonisateur respectueux ou habile ?",
          positions: [
            { titre: "Un respect des traditions", texte: "Lyautey a préservé les médinas, le sultan et les institutions, en refusant l'assimilation pratiquée en Algérie.", qui: "Historiographie française classique" },
            { titre: "Une domination efficace", texte: "Conserver les élites traditionnelles permettait de contrôler le pays à moindre coût ; la « politique berbère » visait à diviser.", qui: "Historiens marocains, Daniel Rivet" }
          ],
          etat: "Les historiens voient dans sa méthode une domination indirecte plus subtile, mais une domination coloniale tout de même."
        }
      ],
      moinsConnu: "Pendant la Seconde Guerre mondiale, le sultan Mohammed ben Youssef aurait refusé d'appliquer pleinement les lois antijuives de Vichy. Son rôle exact fait débat chez les historiens.",
      evenements: [
        { annee: 1912, titre: "Traité de Fès", lieu: [34.06, -4.98] },
        { annee: 1921, titre: "Bataille d'Anoual", lieu: [35.04, -3.6] },
        { annee: 1930, titre: "Dahir berbère", lieu: [34.02, -6.84] },
        { annee: 1943, titre: "Conférence d'Anfa", lieu: [33.58, -7.65] },
        { annee: 1953, titre: "Exil du sultan, insurrection", lieu: [34.02, -6.84] }
      ]
    },
    {
      titre: 'Hassan II et les années de plomb',
      debut: 1956, fin: 1999,
      chapo: "Indépendant en 1956, le Maroc est gouverné d'une main de fer par Hassan II, qui survit à deux coups d'État et lance la Marche verte vers le Sahara.",
      recit: [
        "L'indépendance est proclamée en 1956. Hassan II succède à son père en 1961. L'opposant Mehdi Ben Barka disparaît à Paris en 1965. Après les tentatives de coup d'État de 1971 et 1972, la répression s'abat : ce sont les « années de plomb », avec le bagne de Tazmamart.",
        "En 1975, 350 000 Marocains participent à la Marche verte vers le Sahara espagnol. Le Polisario, soutenu par l'Algérie, mène une guerre jusqu'au cessez-le-feu de 1991. À la fin de son règne, Hassan II ouvre le jeu politique avec un gouvernement d'alternance."
      ],
      consensus: [
        "Les années de plomb ont été marquées par des disparitions forcées et des détentions secrètes.",
        "La Marche verte de 1975 a permis au Maroc de prendre le contrôle de l'essentiel du Sahara occidental.",
        "Le conflit avec le Polisario est gelé par un cessez-le-feu depuis 1991."
      ],
      debats: [
        {
          question: "À qui appartient le Sahara occidental ?",
          positions: [
            { titre: "Un territoire marocain", texte: "Des liens d'allégeance unissaient les tribus sahraouies au sultan avant la colonisation espagnole. Le Maroc propose une large autonomie.", qui: "Maroc, États-Unis depuis 2020, France depuis 2024" },
            { titre: "Un peuple à décolonisation", texte: "La Cour internationale de justice (1975) a jugé que ces liens n'établissaient pas de souveraineté ; le peuple sahraoui doit se prononcer par référendum.", qui: "Polisario, Algérie, Union africaine" }
          ],
          etat: "En octobre 2025, le Conseil de sécurité de l'ONU a fait du plan d'autonomie marocain la base des négociations. Le référendum prévu en 1991 n'a jamais eu lieu."
        }
      ],
      moinsConnu: "En 2004, le Maroc a créé l'Instance équité et réconciliation, première commission de vérité du monde arabe, qui a recueilli les témoignages des victimes des années de plomb.",
      evenements: [
        { annee: 1956, titre: "Indépendance du Maroc", lieu: [34.02, -6.84] },
        { annee: 1965, titre: "Enlèvement de Mehdi Ben Barka à Paris", lieu: [48.85, 2.33] },
        { annee: 1971, titre: "Coup d'État manqué de Skhirat", lieu: [33.85, -7.03] },
        { annee: 1975, titre: "Marche verte", lieu: [27.15, -13.2] }
      ]
    },
    {
      titre: 'Mohammed VI',
      debut: 1999, fin: 2026,
      chapo: "Mohammed VI engage des réformes, adopte une nouvelle constitution en 2011 et fait du Maroc une puissance régionale, mais les inégalités alimentent la contestation.",
      recit: [
        "Mohammed VI succède à son père en 1999. La réforme du code de la famille (2004) améliore les droits des femmes. Après les manifestations du 20 février 2011, une nouvelle constitution reconnaît la langue amazighe. Les islamistes du PJD dirigent le gouvernement de 2011 à 2021.",
        "Le Maroc rejoint l'Union africaine (2017), normalise ses relations avec Israël (2020) et s'impose comme carrefour économique. À l'automne 2025, le mouvement de jeunes « GenZ 212 » manifeste contre l'état des hôpitaux et des écoles. Aux législatives du 23 septembre 2026, le PAM arrive en tête, avec une participation de 38 %."
      ],
      consensus: [
        "La Constitution de 2011 a fait de l'amazigh une langue officielle.",
        "Le Maroc a réintégré l'Union africaine en 2017.",
        "Le roi conserve des pouvoirs étendus, notamment sur l'armée, la religion et la diplomatie."
      ],
      debats: [
        {
          question: "La monarchie marocaine se démocratise-t-elle ?",
          positions: [
            { titre: "Une transition graduelle", texte: "Réformes de 2004 et 2011, alternance des partis, commission de vérité : le Maroc avancerait pas à pas, sans rupture violente.", qui: "Gouvernement, une partie des analystes" },
            { titre: "Une façade", texte: "Le Palais garde les décisions essentielles ; journalistes et militants du Rif sont emprisonnés et l'abstention montre la défiance envers les partis.", qui: "ONG, opposants, politistes critiques" }
          ],
          etat: "Les politistes parlent souvent d'autoritarisme libéralisé : plus de pluralisme qu'ailleurs dans la région, mais un pouvoir royal peu contrôlé."
        }
      ],
      moinsConnu: "Le Hirak du Rif (2016 et 2017), déclenché par la mort d'un vendeur de poisson broyé dans une benne à ordures, a valu à son leader Nasser Zefzafi une condamnation à vingt ans de prison.",
      evenements: [
        { annee: 2004, titre: "Nouveau code de la famille", lieu: [34.02, -6.84] },
        { annee: 2011, titre: "Mouvement du 20 février et nouvelle constitution", lieu: [34.02, -6.84] },
        { annee: 2016, titre: "Hirak du Rif", lieu: [35.25, -3.93] },
        { annee: 2023, titre: "Séisme d'Al-Haouz", lieu: [31.06, -8.39] },
        { annee: 2026, titre: "Victoire du PAM aux législatives", lieu: [34.02, -6.84] }
      ]
    }
  ]
});
