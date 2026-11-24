HISTOIRE.ajouterPays({
  id: 'liban',
  nom: 'Liban',
  region: 'asie-ouest',
  accroche: "La terre des cités phéniciennes, refuge des minorités religieuses dans ses montagnes, créé par la France en 1920, ravagé par quinze ans de guerre civile et pris depuis dans les conflits de la région.",
  intro: "Le Liban est un petit pays où vivent dix-huit communautés religieuses reconnues. Son système politique répartit le pouvoir entre elles : le président est chrétien maronite, le Premier ministre musulman sunnite, le président du Parlement musulman chiite. Ce partage a permis la coexistence, mais aussi bloqué l'État et ouvert la porte aux ingérences étrangères.",
  sources: "Kamal Salibi, Une maison aux nombreuses demeures ; Samir Kassir, Histoire de Beyrouth ; Georges Corm, Le Liban contemporain ; Fawwaz Traboulsi, A History of Modern Lebanon.",
  phases: [
    {
      titre: 'Cités phéniciennes et Liban romain',
      debut: 1, fin: 636,
      chapo: "Les anciennes cités phéniciennes, Tyr, Sidon, Byblos, Béryte, vivent sous Rome puis Byzance. Béryte abrite une célèbre école de droit.",
      recit: [
        "Les Phéniciens, inventeurs d'un alphabet dont dérivent les nôtres, ont fondé Tyr, Sidon et Byblos bien avant notre ère. Sous Rome, Béryte (Beyrouth) devient une colonie romaine et son école de droit est réputée dans tout l'empire. Le temple de Jupiter à Baalbek est l'un des plus grands du monde romain.",
        "Le christianisme se répand. En 551, un séisme et un raz-de-marée détruisent Béryte. Au VIIe siècle, les moines de saint Maron s'installent dans les montagnes du nord."
      ],
      consensus: [
        "L'alphabet phénicien est l'ancêtre des alphabets grec, latin et arabe.",
        "Béryte abritait l'une des principales écoles de droit de l'Empire romain.",
        "Les temples de Baalbek comptent parmi les plus grands édifices romains."
      ],
      debats: [
        {
          question: "Les Libanais sont-ils les héritiers des Phéniciens ?",
          positions: [
            { titre: "Une identité phénicienne", texte: "Le Liban serait l'héritier des Phéniciens, ce qui le distinguerait du monde arabe.", qui: "Courant « phénicianiste », surtout chrétien, au XXe siècle" },
            { titre: "Une identité arabe", texte: "Le Liban fait partie du monde arabe par sa langue et sa culture ; le phénicianisme serait une construction politique.", qui: "Nationalisme arabe" }
          ],
          etat: "Des études génétiques montrent une forte continuité de population depuis l'Antiquité, mais les identités culturelles se sont profondément transformées. Le débat est surtout politique."
        }
      ],
      moinsConnu: "La pourpre de Tyr, teinture tirée de coquillages, était si coûteuse que la couleur pourpre est devenue celle des empereurs.",
      evenements: [
        { annee: 60, titre: "Temple de Jupiter à Baalbek", lieu: [34.01, 36.2] },
        { annee: 200, titre: "École de droit de Béryte", lieu: [33.89, 35.5] },
        { annee: 551, titre: "Séisme qui détruit Béryte", lieu: [33.89, 35.5] }
      ]
    },
    {
      titre: 'Montagne refuge et émirat',
      debut: 636, fin: 1860,
      chapo: "Après la conquête arabe, la montagne libanaise devient un refuge pour les maronites et les druzes. Sous les Ottomans, des émirs y gouvernent avec une large autonomie.",
      recit: [
        "Les Arabes conquièrent la côte en 636. Les maronites dans le nord, puis les druzes, apparus au XIe siècle, s'installent dans la montagne. Les croisés occupent la côte aux XIIe et XIIIe siècles ; les maronites se rapprochent alors de Rome.",
        "Sous les Ottomans, à partir de 1516, l'émirat du Mont-Liban jouit d'une grande autonomie. L'émir druze Fakhreddine II (1572 à 1635) étend son pouvoir et s'ouvre à l'Europe. Bachir II Chehab domine au XIXe siècle. En 1860, des massacres entre druzes et maronites provoquent une intervention française."
      ],
      consensus: [
        "La montagne libanaise a servi de refuge à des minorités religieuses.",
        "L'émirat du Mont-Liban a bénéficié d'une large autonomie sous les Ottomans.",
        "Les massacres de 1860 ont fait des milliers de morts chrétiens."
      ],
      debats: [
        {
          question: "Fakhreddine II, père du Liban ?",
          positions: [
            { titre: "Le fondateur du Liban", texte: "Fakhreddine aurait unifié la montagne et préfiguré un Liban indépendant et pluraliste.", qui: "Récit national libanais" },
            { titre: "Un seigneur ottoman", texte: "Il était un notable de l'empire cherchant à étendre son pouvoir, sans projet national.", qui: "Kamal Salibi, historiens actuels" }
          ],
          etat: "Les historiens jugent anachronique de voir en lui le fondateur d'un État libanais."
        }
      ],
      moinsConnu: "Après 1860, le Mont-Liban devint une « moutassarifiya », province autonome dirigée par un gouverneur chrétien non libanais, sous la garantie des puissances européennes.",
      evenements: [
        { annee: 636, titre: "Conquête arabe", lieu: [33.89, 35.5] },
        { annee: 1109, titre: "Prise de Tripoli par les croisés", lieu: [34.44, 35.85] },
        { annee: 1613, titre: "Exil de Fakhreddine en Toscane", lieu: [33.7, 35.58] },
        { annee: 1860, titre: "Massacres de 1860 et intervention française", lieu: [33.8, 35.75] }
      ]
    },
    {
      titre: 'Mandat français et indépendance',
      debut: 1860, fin: 1975,
      chapo: "La France crée le Grand Liban en 1920. Indépendant en 1943, le pays devient la « Suisse du Moyen-Orient », mais ses équilibres sont fragiles.",
      recit: [
        "Beyrouth devient un grand port et un centre intellectuel de la Nahda, la renaissance arabe. Pendant la Première Guerre mondiale, une famine tue peut-être un tiers de la population du Mont-Liban. En 1920, la France proclame le Grand Liban, en y ajoutant des régions à majorité musulmane.",
        "L'indépendance est acquise en 1943 ; le Pacte national répartit le pouvoir entre communautés. Beyrouth prospère grâce à la banque et au tourisme. L'arrivée de réfugiés palestiniens en 1948, puis de combattants de l'OLP après 1970, déstabilise le pays."
      ],
      consensus: [
        "La famine de 1915 à 1918 a fait des dizaines de milliers de morts au Mont-Liban.",
        "Le Grand Liban a été proclamé par la France en 1920.",
        "Le Pacte national de 1943 a réparti le pouvoir entre les communautés religieuses."
      ],
      debats: [
        {
          question: "Le confessionnalisme : garantie de coexistence ou cause des crises ?",
          positions: [
            { titre: "Une garantie", texte: "Le partage du pouvoir entre communautés protège les minorités et évite la domination d'un groupe.", qui: "Une partie des responsables communautaires" },
            { titre: "Un piège", texte: "Le système fige les communautés, favorise le clientélisme et paralyse l'État ; la répartition repose sur un recensement de 1932.", qui: "Mouvements laïques, manifestants de 2019" }
          ],
          etat: "L'accord de Taëf (1989) prévoyait d'abolir progressivement le confessionnalisme politique, ce qui n'a jamais été fait."
        }
      ],
      moinsConnu: "Le dernier recensement officiel du Liban date de 1932. Aucun gouvernement n'a voulu en organiser un autre, de peur de remettre en cause le partage du pouvoir.",
      evenements: [
        { annee: 1916, titre: "Grande famine du Mont-Liban", lieu: [33.9, 35.7] },
        { annee: 1920, titre: "Proclamation du Grand Liban", lieu: [33.89, 35.5] },
        { annee: 1943, titre: "Indépendance et Pacte national", lieu: [33.89, 35.5] },
        { annee: 1958, titre: "Crise de 1958", lieu: [33.89, 35.5] }
      ]
    },
    {
      titre: 'La guerre civile',
      debut: 1975, fin: 1990,
      chapo: "Quinze ans de guerre entre milices, avec l'intervention de la Syrie, d'Israël et des Palestiniens, font environ 150 000 morts.",
      recit: [
        "En avril 1975, la guerre éclate entre milices chrétiennes et forces palestiniennes et musulmanes. La Syrie intervient en 1976. Beyrouth est coupée en deux par la « ligne verte ». En 1982, Israël envahit le Liban et assiège Beyrouth ; des miliciens chrétiens massacrent des centaines de civils palestiniens à Sabra et Chatila.",
        "Le Hezbollah, milice chiite soutenue par l'Iran, naît au début des années 1980. Des attentats visent les forces américaines et françaises (1983). L'accord de Taëf (1989) met fin à la guerre, sous tutelle syrienne. Une loi d'amnistie efface en 1991 la plupart des crimes."
      ],
      consensus: [
        "La guerre civile a fait environ 150 000 morts et 17 000 disparus.",
        "Le massacre de Sabra et Chatila a eu lieu en septembre 1982.",
        "L'accord de Taëf a mis fin à la guerre en 1989 et 1990."
      ],
      debats: [
        {
          question: "Guerre civile ou « guerre des autres » ?",
          positions: [
            { titre: "Une guerre des autres", texte: "Le Liban aurait été le champ de bataille des conflits de la région, entre Palestiniens, Syriens, Israéliens et Iraniens.", qui: "Ghassan Tuéni, une partie des responsables libanais" },
            { titre: "Une guerre libanaise", texte: "Les causes étaient aussi internes : inégalités sociales, déséquilibres communautaires, milices libanaises.", qui: "Samir Kassir, Fawwaz Traboulsi" }
          ],
          etat: "Les historiens combinent les causes internes et les ingérences étrangères. L'absence de travail de mémoire officiel laisse ce débat ouvert."
        }
      ],
      moinsConnu: "Le sort de 17 000 disparus de la guerre civile reste inconnu. Leurs familles ont obtenu en 2018 une loi créant une commission nationale chargée de les rechercher.",
      evenements: [
        { annee: 1975, titre: "Début de la guerre civile", lieu: [33.87, 35.52] },
        { annee: 1982, titre: "Invasion israélienne, Sabra et Chatila", lieu: [33.86, 35.49] },
        { annee: 1983, titre: "Attentats contre les forces américaines et françaises", lieu: [33.83, 35.49] },
        { annee: 1989, titre: "Accord de Taëf", lieu: [21.27, 40.42] }
      ]
    },
    {
      titre: 'Reconstruction et tutelle syrienne',
      debut: 1990, fin: 2019,
      chapo: "Rafic Hariri reconstruit Beyrouth. Son assassinat en 2005 provoque le départ des troupes syriennes. Le Hezbollah devient la principale force armée du pays.",
      recit: [
        "Le milliardaire Rafic Hariri, Premier ministre, reconstruit le centre de Beyrouth, en endettant fortement l'État. La Syrie contrôle la vie politique. Israël se retire du sud en 2000.",
        "Le 14 février 2005, Hariri est tué dans un attentat. Les manifestations de la « révolution du Cèdre » obtiennent le départ de l'armée syrienne. En 2006, une guerre de 34 jours oppose Israël au Hezbollah. Le Hezbollah intervient en Syrie aux côtés d'Assad à partir de 2012."
      ],
      consensus: [
        "Rafic Hariri a été assassiné le 14 février 2005.",
        "L'armée syrienne a quitté le Liban en 2005.",
        "Le Hezbollah dispose d'un arsenal supérieur à celui de l'armée libanaise."
      ],
      debats: [
        {
          question: "Le Hezbollah : résistance ou État dans l'État ?",
          positions: [
            { titre: "Une résistance", texte: "Le Hezbollah a chassé Israël du sud en 2000 et protégerait le Liban contre de nouvelles agressions.", qui: "Hezbollah, une grande partie des chiites" },
            { titre: "Un État dans l'État", texte: "Armé par l'Iran, il impose ses décisions de guerre et de paix au pays et échappe à l'autorité de l'État.", qui: "Opposants libanais, pays occidentaux et arabes" }
          ],
          etat: "En 2020, le Tribunal spécial pour le Liban a condamné un membre du Hezbollah pour l'assassinat de Hariri. Le désarmement du Hezbollah est au cœur des débats depuis 2024."
        }
      ],
      moinsConnu: "Le centre-ville de Beyrouth reconstruit par la société Solidere a été critiqué comme un quartier de luxe vidé de ses anciens habitants.",
      evenements: [
        { annee: 2000, titre: "Retrait israélien du sud", lieu: [33.27, 35.2] },
        { annee: 2005, titre: "Assassinat de Hariri, révolution du Cèdre", lieu: [33.9, 35.49] },
        { annee: 2006, titre: "Guerre entre Israël et le Hezbollah", lieu: [33.27, 35.4] }
      ]
    },
    {
      titre: 'Effondrement et guerres',
      debut: 2019, fin: 2026,
      chapo: "Une crise financière historique, l'explosion du port de Beyrouth et deux guerres entre Israël et le Hezbollah plongent le Liban dans la détresse.",
      recit: [
        "En octobre 2019, une taxe sur WhatsApp déclenche une révolte contre la classe politique. Le système bancaire s'effondre ; la livre perd plus de 95 % de sa valeur. Le 4 août 2020, l'explosion de nitrate d'ammonium dans le port de Beyrouth fait plus de 200 morts.",
        "En 2024, la guerre entre Israël et le Hezbollah tue son chef Hassan Nasrallah. Joseph Aoun est élu président en janvier 2025 et Nawaf Salam devient Premier ministre ; ils s'engagent à désarmer le Hezbollah. En mars 2026, après la mort de Khamenei, le Hezbollah attaque Israël ; la guerre qui suit fait des milliers de morts au Liban. La force de l'ONU, la FINUL, doit quitter le pays fin 2026."
      ],
      consensus: [
        "La crise financière libanaise est l'une des pires du monde depuis le XIXe siècle selon la Banque mondiale.",
        "L'explosion du port de Beyrouth a fait plus de 200 morts.",
        "Hassan Nasrallah a été tué par Israël en septembre 2024."
      ],
      debats: [
        {
          question: "Qui est responsable de l'effondrement financier ?",
          positions: [
            { titre: "La classe politique et les banques", texte: "Un système de type pyramidal, organisé par la Banque centrale et les banques, a dilapidé l'épargne des déposants au profit des élites.", qui: "Banque mondiale, manifestants de 2019" },
            { titre: "Les crises extérieures", texte: "La guerre en Syrie, les sanctions et l'isolement régional ont asphyxié l'économie.", qui: "Une partie de la classe politique libanaise" }
          ],
          etat: "La Banque mondiale a qualifié la crise de « dépression délibérée » organisée par les élites. L'ancien gouverneur de la Banque centrale a été arrêté en 2024."
        }
      ],
      moinsConnu: "Plus de quatre ans après l'explosion du port, l'enquête du juge Tarek Bitar a été bloquée à plusieurs reprises par des responsables politiques qu'il voulait interroger.",
      evenements: [
        { annee: 2019, titre: "Révolution d'octobre", lieu: [33.89, 35.5] },
        { annee: 2020, titre: "Explosion du port de Beyrouth", lieu: [33.9, 35.52] },
        { annee: 2024, titre: "Guerre et mort de Nasrallah", lieu: [33.85, 35.5] },
        { annee: 2025, titre: "Élection de Joseph Aoun", lieu: [33.89, 35.5] },
        { annee: 2026, titre: "Nouvelle guerre avec Israël", lieu: [33.27, 35.4] }
      ]
    }
  ]
});
