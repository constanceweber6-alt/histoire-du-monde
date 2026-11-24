HISTOIRE.ajouterPays({
  id: 'egypte',
  nom: 'Égypte',
  region: 'afrique-nord',
  accroche: "Province romaine, berceau du monachisme chrétien, cœur du monde arabe avec Le Caire, colonie britannique de fait, puis pays de Nasser, de la révolution de 2011 et du régime de Sissi.",
  intro: "En l'an 1, l'Égypte des pharaons vient de s'achever avec la mort de Cléopâtre (30 av. J.-C.). Le pays passe ensuite d'un empire à l'autre : Rome, Byzance, les califes arabes, les Fatimides, les Mamelouks, les Ottomans, les Britanniques. Le Caire devient l'une des grandes capitales du monde musulman, et l'Égypte le pays le plus peuplé du monde arabe.",
  sources: "Alan K. Bowman, Egypt after the Pharaohs ; André Raymond, Le Caire ; Khaled Fahmy, All the Pasha's Men ; Robert Solé, L'Égypte, passion française.",
  phases: [
    {
      titre: "L'Égypte romaine et chrétienne",
      debut: 1, fin: 641,
      chapo: "Grenier à blé de Rome, l'Égypte devient l'un des grands foyers du christianisme, avec Alexandrie et les premiers moines du désert.",
      recit: [
        "Province personnelle de l'empereur, l'Égypte nourrit Rome de son blé. Alexandrie, avec sa bibliothèque et son phare, reste l'une des capitales intellectuelles du monde méditerranéen. La mathématicienne Hypatie y est tuée par une foule chrétienne en 415.",
        "Le christianisme se répand tôt. Antoine et Pacôme fondent au désert le monachisme. Après le concile de Chalcédoine (451), l'Église copte se sépare de Constantinople. Les Perses occupent l'Égypte de 619 à 629."
      ],
      consensus: [
        "L'Égypte était la principale source de blé de Rome puis de Constantinople.",
        "Le monachisme chrétien est né dans les déserts d'Égypte au IVe siècle.",
        "L'Église copte s'est séparée de l'Église byzantine après 451."
      ],
      debats: [
        {
          question: "Qui a détruit la bibliothèque d'Alexandrie ?",
          positions: [
            { titre: "César", texte: "Un incendie lors de la guerre de César en 48 av. J.-C. aurait détruit une grande partie des rouleaux.", qui: "Plutarque, Sénèque" },
            { titre: "Les chrétiens ou les Arabes", texte: "On a accusé tour à tour les chrétiens, qui détruisent le Sérapéum en 391, et le calife Omar en 642.", qui: "Traditions anciennes et médiévales" }
          ],
          etat: "Les historiens pensent à un déclin progressif sur plusieurs siècles, faute de financement, plutôt qu'à une destruction unique. Le récit visant Omar date du XIIIe siècle et est jugé légendaire."
        }
      ],
      moinsConnu: "Les papyrus d'Oxyrhynque, retrouvés dans les déchets d'une ville d'Égypte, ont livré des centaines de milliers de fragments : lettres, contrats, listes de courses, mais aussi des textes perdus de Sappho et d'Euripide.",
      evenements: [
        { annee: 270, titre: "Antoine se retire au désert", lieu: [28.92, 32.35] },
        { annee: 391, titre: "Destruction du Sérapéum d'Alexandrie", lieu: [31.18, 29.9] },
        { annee: 415, titre: "Meurtre d'Hypatie", lieu: [31.2, 29.92] },
        { annee: 451, titre: "Séparation de l'Église copte", lieu: [31.2, 29.92] }
      ]
    },
    {
      titre: 'Conquête arabe et Fatimides',
      debut: 641, fin: 1250,
      chapo: "Les Arabes conquièrent l'Égypte. Les Fatimides fondent Le Caire en 969, puis Saladin fait du pays le centre de la lutte contre les croisés.",
      recit: [
        "Amr ibn al-As conquiert l'Égypte en 641 et fonde Fostat. L'islamisation est lente : les coptes restent majoritaires pendant plusieurs siècles. Au Xe siècle, les Fatimides, dynastie chiite venue d'Ifriqiya, fondent Le Caire (969) et la mosquée al-Azhar.",
        "Saladin met fin aux Fatimides en 1171 et fonde la dynastie ayyoubide. Il reprend Jérusalem aux croisés en 1187. En 1250, Louis IX, qui a envahi l'Égypte, est capturé à Mansourah."
      ],
      consensus: [
        "Le Caire a été fondé par les Fatimides en 969.",
        "La majorité de la population égyptienne est restée chrétienne plusieurs siècles après la conquête arabe.",
        "Saladin a fait de l'Égypte la base de sa reconquête de Jérusalem."
      ],
      debats: [
        {
          question: "Quand l'Égypte est-elle devenue majoritairement musulmane ?",
          positions: [
            { titre: "Assez tôt", texte: "Dès le IXe siècle, les révoltes coptes écrasées et la pression fiscale auraient accéléré les conversions.", qui: "Une partie des historiens" },
            { titre: "Très tard", texte: "La majorité musulmane ne serait atteinte qu'au XIIe, voire au XIVe siècle, sous les Mamelouks.", qui: "Tamer el-Leithy, autres travaux récents" }
          ],
          etat: "Faute de recensements, la date reste discutée. On s'accorde sur une conversion lente et inégale selon les régions."
        }
      ],
      moinsConnu: "La geniza du Caire, une réserve de vieux papiers d'une synagogue de Fostat, a livré plus de 300 000 documents qui éclairent la vie quotidienne et le commerce méditerranéen du Xe au XIIIe siècle.",
      evenements: [
        { annee: 641, titre: "Conquête arabe, fondation de Fostat", lieu: [30.0, 31.23] },
        { annee: 969, titre: "Fondation du Caire", lieu: [30.05, 31.26] },
        { annee: 972, titre: "Mosquée al-Azhar", lieu: [30.046, 31.263] },
        { annee: 1171, titre: "Saladin met fin aux Fatimides", lieu: [30.03, 31.26] },
        { annee: 1250, titre: "Capture de Louis IX à Mansourah", lieu: [31.04, 31.38] }
      ]
    },
    {
      titre: 'Mamelouks et Ottomans',
      debut: 1250, fin: 1798,
      chapo: "D'anciens esclaves militaires, les Mamelouks, gouvernent l'Égypte et arrêtent les Mongols. Les Ottomans conquièrent le pays en 1517.",
      recit: [
        "Les Mamelouks, soldats d'origine turque ou circassienne achetés enfants, prennent le pouvoir en 1250. En 1260, ils battent les Mongols à Aïn Djalout. Le Caire devient la plus grande ville du monde musulman, contrôlant le commerce des épices. La peste noire (1348) tue peut-être un tiers de la population.",
        "En 1517, les Ottomans conquièrent l'Égypte. Le pays reste une province riche, où les beys mamelouks retrouvent peu à peu leur influence. Le commerce du café enrichit Le Caire au XVIIe siècle."
      ],
      consensus: [
        "Les Mamelouks ont arrêté l'avancée mongole en 1260.",
        "Le Caire était l'une des plus grandes villes du monde au XIVe siècle.",
        "L'Égypte devient une province ottomane en 1517."
      ],
      debats: [
        {
          question: "L'Égypte ottomane : déclin ou dynamisme ?",
          positions: [
            { titre: "Un déclin", texte: "Sous les Ottomans, l'Égypte aurait stagné, mal gouvernée par des beys rivaux, jusqu'au réveil provoqué par Bonaparte.", qui: "Historiographie coloniale et nationaliste" },
            { titre: "Une société vivante", texte: "Le Caire ottoman était prospère, avec un commerce du café florissant et une vie intellectuelle active.", qui: "André Raymond, Nelly Hanna" }
          ],
          etat: "Les historiens ont largement abandonné l'idée d'un long déclin ottoman suivi d'un réveil apporté par l'Europe."
        }
      ],
      moinsConnu: "Chajar ad-Durr, ancienne esclave, fut proclamée sultane en 1250. C'est l'une des rares femmes à avoir régné en son nom propre dans l'Égypte médiévale.",
      evenements: [
        { annee: 1250, titre: "Chajar ad-Durr sultane, prise du pouvoir mamelouk", lieu: [30.03, 31.26] },
        { annee: 1260, titre: "Bataille d'Aïn Djalout", lieu: [32.55, 35.36] },
        { annee: 1348, titre: "Peste noire au Caire", lieu: [30.05, 31.25] },
        { annee: 1517, titre: "Conquête ottomane", lieu: [30.05, 31.25] }
      ]
    },
    {
      titre: 'Méhémet Ali et la domination britannique',
      debut: 1798, fin: 1952,
      chapo: "Après l'expédition de Bonaparte, Méhémet Ali modernise le pays. Le canal de Suez attire les Britanniques, qui occupent l'Égypte en 1882.",
      recit: [
        "Bonaparte débarque en 1798 avec une armée et des savants ; les Français partent en 1801. Méhémet Ali, officier albanais, prend le pouvoir en 1805, massacre les Mamelouks et crée une armée, des usines et des écoles. Le canal de Suez est inauguré en 1869.",
        "Endetté, le khédive vend ses parts du canal. Les Britanniques écrasent la révolte d'Urabi et occupent l'Égypte en 1882. La révolution de 1919 mène à une indépendance limitée en 1922. Les Frères musulmans sont fondés en 1928. L'Égypte reste sous influence britannique."
      ],
      consensus: [
        "Méhémet Ali est considéré comme le fondateur de l'Égypte moderne.",
        "Le canal de Suez, ouvert en 1869, a fait de l'Égypte un enjeu stratégique majeur.",
        "Les Britanniques ont occupé l'Égypte de 1882 aux années 1950."
      ],
      debats: [
        {
          question: "L'expédition de Bonaparte a-t-elle ouvert l'Égypte à la modernité ?",
          positions: [
            { titre: "Un choc fondateur", texte: "La rencontre avec la science française, l'imprimerie et la Description de l'Égypte aurait éveillé le pays.", qui: "Historiographie française et nationaliste classique" },
            { titre: "Une invasion brutale", texte: "L'expédition a été une occupation violente de trois ans ; la modernisation est surtout l'œuvre de Méhémet Ali et s'enracinait dans des évolutions internes.", qui: "Juan Cole, Khaled Fahmy" }
          ],
          etat: "Les historiens relativisent aujourd'hui le rôle de l'expédition, tout en reconnaissant son importance pour l'égyptologie."
        }
      ],
      moinsConnu: "Le canal de Suez a été creusé en grande partie par des centaines de milliers de paysans égyptiens soumis à la corvée ; des milliers sont morts sur le chantier.",
      evenements: [
        { annee: 1798, titre: "Bataille des Pyramides", lieu: [30.05, 31.15] },
        { annee: 1811, titre: "Massacre des Mamelouks à la Citadelle", lieu: [30.03, 31.26] },
        { annee: 1869, titre: "Inauguration du canal de Suez", lieu: [30.6, 32.3] },
        { annee: 1882, titre: "Occupation britannique", lieu: [31.2, 29.92] },
        { annee: 1919, titre: "Révolution de 1919", lieu: [30.05, 31.24] }
      ]
    },
    {
      titre: 'Nasser, Sadate, Moubarak',
      debut: 1952, fin: 2011,
      chapo: "Les Officiers libres renversent la monarchie. Nasser devient le héros du nationalisme arabe ; Sadate fait la paix avec Israël ; Moubarak gouverne trente ans.",
      recit: [
        "En 1952, les Officiers libres renversent le roi Farouk. Gamal Abdel Nasser nationalise le canal de Suez en 1956 et résiste à l'attaque franco-britannique et israélienne. Il construit le haut barrage d'Assouan, mais l'Égypte est écrasée par Israël en 1967.",
        "Anouar el-Sadate lance la guerre d'octobre 1973, puis signe la paix avec Israël à Camp David (1978). Il est assassiné par des islamistes en 1981. Hosni Moubarak gouverne sous état d'urgence jusqu'en 2011."
      ],
      consensus: [
        "La nationalisation du canal de Suez en 1956 a fait de Nasser une figure du tiers-monde.",
        "L'Égypte a été le premier pays arabe à signer la paix avec Israël, en 1979.",
        "Moubarak a gouverné sous état d'urgence pendant presque tout son mandat."
      ],
      debats: [
        {
          question: "Nasser : libérateur ou fondateur d'un régime autoritaire ?",
          positions: [
            { titre: "Un libérateur", texte: "Nasser a mis fin à la domination britannique, réalisé la réforme agraire et rendu sa dignité au monde arabe.", qui: "Nationalistes arabes" },
            { titre: "Un autocrate", texte: "Il a interdit les partis, emprisonné communistes et Frères musulmans, et conduit le pays au désastre de 1967.", qui: "Libéraux, islamistes, historiens critiques" }
          ],
          etat: "Les historiens reconnaissent son rôle dans la décolonisation et la nature militaire et autoritaire du régime, qui perdure depuis 1952."
        }
      ],
      moinsConnu: "La construction du haut barrage d'Assouan a noyé la Nubie égyptienne : environ 100 000 Nubiens ont été déplacés, et le temple d'Abou Simbel a été découpé et remonté plus haut grâce à une campagne de l'UNESCO.",
      evenements: [
        { annee: 1952, titre: "Révolution des Officiers libres", lieu: [30.05, 31.24] },
        { annee: 1956, titre: "Nationalisation du canal de Suez", lieu: [30.6, 32.3] },
        { annee: 1967, titre: "Guerre des Six Jours", lieu: [30.5, 33.8] },
        { annee: 1970, titre: "Achèvement du haut barrage d'Assouan", lieu: [23.97, 32.88] },
        { annee: 1981, titre: "Assassinat de Sadate", lieu: [30.07, 31.32] }
      ]
    },
    {
      titre: 'Révolution et retour des militaires',
      debut: 2011, fin: 2026,
      chapo: "La révolution de la place Tahrir chasse Moubarak. Le Frère musulman Mohamed Morsi est élu, puis renversé par l'armée. Abdel Fattah al-Sissi gouverne depuis.",
      recit: [
        "En janvier 2011, des millions d'Égyptiens manifestent place Tahrir ; Moubarak démissionne le 11 février. Mohamed Morsi, des Frères musulmans, est élu en 2012. Après des manifestations massives contre lui, l'armée le renverse le 3 juillet 2013.",
        "Le 14 août 2013, la dispersion du sit-in de Rabaa fait plus de 800 morts. Abdel Fattah al-Sissi est élu en 2014 et réélu en 2018 et 2023. Des dizaines de milliers d'opposants sont emprisonnés. Le pays, endetté, construit une nouvelle capitale administrative et subit la baisse des revenus du canal de Suez liée à la guerre à Gaza."
      ],
      consensus: [
        "La révolution de 2011 a chassé Hosni Moubarak après trente ans de pouvoir.",
        "La dispersion de Rabaa en 2013 a été l'un des massacres de manifestants les plus meurtriers de l'histoire récente.",
        "Le régime de Sissi emprisonne un très grand nombre d'opposants."
      ],
      debats: [
        {
          question: "Le 3 juillet 2013 : coup d'État ou seconde révolution ?",
          positions: [
            { titre: "Une seconde révolution", texte: "Des millions d'Égyptiens ont manifesté le 30 juin contre un président accusé de confisquer le pouvoir au profit des Frères musulmans ; l'armée a répondu à la rue.", qui: "Gouvernement égyptien, une partie de la population" },
            { titre: "Un coup d'État", texte: "L'armée a renversé le premier président élu librement, puis instauré un régime plus répressif encore que celui de Moubarak.", qui: "Frères musulmans, ONG de droits humains, nombreux politistes" }
          ],
          etat: "La plupart des politistes parlent de coup d'État militaire soutenu par une partie de la population."
        }
      ],
      moinsConnu: "Alaa Abdel Fattah, blogueur figure de la révolution de 2011, a passé la plus grande partie de la décennie suivante en prison. Il a été gracié en septembre 2025.",
      evenements: [
        { annee: 2011, titre: "Révolution de la place Tahrir", lieu: [30.044, 31.236] },
        { annee: 2012, titre: "Élection de Mohamed Morsi", lieu: [30.05, 31.24] },
        { annee: 2013, titre: "Renversement de Morsi, massacre de Rabaa", lieu: [30.06, 31.32] },
        { annee: 2023, titre: "Troisième élection de Sissi", lieu: [30.02, 31.75] }
      ]
    }
  ]
});
