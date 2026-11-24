HISTOIRE.ajouterPays({
  id: 'ouganda',
  nom: 'Ouganda',
  region: 'afrique-est',
  accroche: "Les royaumes du Buganda et du Bunyoro autour des Grands Lacs, un protectorat britannique, puis un pays marqué par les dictatures d'Obote et d'Idi Amin, avant le long règne de Yoweri Museveni.",
  intro: "L'Ouganda, sur les rives du lac Victoria et aux sources du Nil, abritait des royaumes puissants et organisés. Après l'indépendance en 1962, le pays a traversé deux dictatures sanglantes. Yoweri Museveni, au pouvoir depuis 1986, a été réélu en janvier 2026 pour un septième mandat contesté.",
  sources: "Samwiri Lwanga-Lunyiigo, A History of the Political Economy of Uganda ; Richard Reid, A History of Modern Uganda ; Phares Mutibwa, Uganda since Independence.",
  phases: [
    {
      titre: 'Peuplement des Grands Lacs',
      debut: 1, fin: 1500,
      chapo: "Des agriculteurs de langue bantoue et des éleveurs peuplent la région des Grands Lacs, où naissent les premières chefferies.",
      recit: [
        "Les agriculteurs de langue bantoue, arrivés au premier millénaire av. J.-C., cultivent la banane, qui devient l'aliment de base, et travaillent le fer. Des éleveurs nilotiques s'installent au nord.",
        "Au cours du second millénaire, des chefferies se forment. Le site de Bigo, avec ses fossés de terre, témoigne d'un pouvoir organisé vers le XIVe siècle, que la tradition associe à la dynastie légendaire des Chwezi."
      ],
      consensus: [
        "Les peuples bantous ont introduit l'agriculture et le fer dans la région.",
        "La banane est devenue l'aliment de base des royaumes des Grands Lacs.",
        "Le site de Bigo témoigne d'une organisation politique ancienne."
      ],
      debats: [
        {
          question: "Les Chwezi ont-ils existé ?",
          positions: [
            { titre: "Une dynastie réelle", texte: "Les Chwezi auraient régné sur un vaste empire, le Kitara, dont Bigo serait une capitale.", qui: "Traditions orales du Bunyoro" },
            { titre: "Des figures mythiques", texte: "Les Chwezi sont des divinités ou héros mythiques, toujours vénérés dans des cultes de possession.", qui: "Historiens et anthropologues" }
          ],
          etat: "Les historiens restent prudents : les Chwezi relèvent surtout du mythe, même si Bigo atteste un pouvoir réel."
        }
      ],
      moinsConnu: "Les sites de Ntusi et Bigo, au centre de l'Ouganda, ont livré des traces d'élevage de bétail à grande échelle dès le XIe siècle.",
      evenements: [
        { annee: 500, titre: "Agriculteurs bantous et bananeraies", lieu: [0.3, 32.6] },
        { annee: 1050, titre: "Site de Ntusi", lieu: [-0.05, 31.22] },
        { annee: 1350, titre: "Site de Bigo", lieu: [-0.08, 31.35] }
      ]
    },
    {
      titre: 'Royaumes du Buganda et du Bunyoro',
      debut: 1500, fin: 1894,
      chapo: "Le Bunyoro, puis le Buganda deviennent des royaumes puissants. Au XIXe siècle, marchands arabes et missionnaires européens arrivent.",
      recit: [
        "Le royaume du Bunyoro domine la région au XVIe et au XVIIe siècle. Le Buganda, au bord du lac Victoria, s'étend au XVIIIe siècle grâce à un roi, le kabaka, entouré de chefs nommés et d'une flotte de pirogues.",
        "Au XIXe siècle, les marchands arabes apportent armes et islam. L'explorateur Speke atteint les sources du Nil en 1862. Des missionnaires protestants et catholiques arrivent. Le kabaka Mwanga fait exécuter des convertis chrétiens en 1886. Des guerres de religion opposent ensuite catholiques, protestants et musulmans au Buganda."
      ],
      consensus: [
        "Le Buganda était un royaume très centralisé au XIXe siècle.",
        "Speke a identifié le lac Victoria comme source du Nil en 1862.",
        "Des chrétiens ont été exécutés au Buganda en 1886."
      ],
      debats: [
        {
          question: "Les martyrs de l'Ouganda : persécution religieuse ou crise politique ?",
          positions: [
            { titre: "Une persécution", texte: "Le kabaka a fait exécuter des pages convertis qui refusaient d'abandonner leur foi.", qui: "Église catholique, qui les a canonisés en 1964" },
            { titre: "Une crise de pouvoir", texte: "Mwanga craignait que les convertis, liés aux étrangers, ne lui obéissent plus.", qui: "Historiens" }
          ],
          etat: "Les historiens voient une crise à la fois religieuse et politique, dans un contexte de menace coloniale."
        }
      ],
      moinsConnu: "Chaque 3 juin, des centaines de milliers de pèlerins, venus parfois à pied de pays voisins, se rendent au sanctuaire de Namugongo en mémoire des martyrs.",
      evenements: [
        { annee: 1600, titre: "Puissance du Bunyoro", lieu: [1.43, 31.35] },
        { annee: 1750, titre: "Expansion du Buganda", lieu: [0.3, 32.55] },
        { annee: 1862, titre: "Speke aux sources du Nil", lieu: [0.42, 33.2] },
        { annee: 1886, titre: "Martyrs de Namugongo", lieu: [0.39, 32.65] }
      ]
    },
    {
      titre: 'Protectorat britannique',
      debut: 1894, fin: 1962,
      chapo: "Les Britanniques imposent un protectorat en s'appuyant sur le Buganda, qui obtient une position privilégiée.",
      recit: [
        "En 1894, la Grande-Bretagne proclame un protectorat. Elle s'appuie sur les chefs du Buganda, qui l'aident à conquérir le Bunyoro. L'accord de 1900 donne aux chefs baganda de vastes terres. Le chemin de fer de l'Ouganda relie le pays à Mombasa.",
        "Le coton, puis le café, deviennent les cultures d'exportation. Des commerçants venus d'Inde contrôlent une grande partie du commerce. Le nord sert de réservoir de soldats et de main-d'œuvre, ce qui creuse un écart avec le sud."
      ],
      consensus: [
        "Les Britanniques ont gouverné en s'appuyant sur le Buganda.",
        "Le Bunyoro a perdu des territoires au profit du Buganda.",
        "Le nord a été moins développé que le sud sous la colonisation."
      ],
      debats: [
        {
          question: "Les « comtés perdus » du Bunyoro : injustice coloniale ?",
          positions: [
            { titre: "Une spoliation", texte: "Les Britanniques ont donné au Buganda des terres du Bunyoro, y compris des tombes royales.", qui: "Royaume du Bunyoro" },
            { titre: "Une décision réglée", texte: "Un référendum de 1964 a rendu deux des comtés au Bunyoro.", qui: "Gouvernement ougandais de l'époque" }
          ],
          etat: "Le référendum de 1964 a réglé une partie de la question, mais les rivalités entre royaumes ont pesé sur la politique ougandaise."
        }
      ],
      moinsConnu: "Winston Churchill, après une visite en 1907, a qualifié l'Ouganda de « perle de l'Afrique ».",
      evenements: [
        { annee: 1894, titre: "Protectorat britannique", lieu: [0.31, 32.58] },
        { annee: 1900, titre: "Accord du Buganda", lieu: [0.31, 32.58] },
        { annee: 1901, titre: "Chemin de fer jusqu'au lac Victoria", lieu: [-0.1, 34.75] },
        { annee: 1953, titre: "Exil du kabaka Mutesa II", lieu: [0.31, 32.58] }
      ]
    },
    {
      titre: 'Obote et Idi Amin',
      debut: 1962, fin: 1986,
      chapo: "L'Ouganda indépendant tombe dans l'autoritarisme avec Milton Obote, puis dans la terreur sous Idi Amin Dada.",
      recit: [
        "L'Ouganda devient indépendant le 9 octobre 1962, avec le kabaka Mutesa II comme président et Milton Obote comme Premier ministre. En 1966, Obote fait attaquer le palais du kabaka par l'armée d'Idi Amin et abolit les royaumes.",
        "En 1971, Idi Amin renverse Obote. Il expulse en 1972 environ 80 000 Asiatiques. Son régime tue peut-être 300 000 personnes. Il est chassé en 1979 par l'armée tanzanienne. Obote revient au pouvoir ; la guerre du « triangle de Luwero » contre la rébellion de Museveni fait encore des centaines de milliers de morts."
      ],
      consensus: [
        "Idi Amin a expulsé la communauté asiatique en 1972.",
        "Son régime a fait des centaines de milliers de morts.",
        "La Tanzanie a renversé Amin en 1979."
      ],
      debats: [
        {
          question: "Idi Amin : bouffon sanguinaire ou produit de son époque ?",
          positions: [
            { titre: "Un tyran", texte: "Amin a régné par la terreur, faisant tuer opposants, intellectuels et groupes ethniques entiers.", qui: "Commissions d'enquête, survivants" },
            { titre: "Une figure plus complexe", texte: "L'image caricaturale d'Amin, diffusée par les médias occidentaux, masque le soutien britannique et israélien initial à son coup d'État.", qui: "Mahmood Mamdani, Mark Leopold" }
          ],
          etat: "Ses crimes sont documentés. Les historiens insistent aussi sur le contexte de guerre froide et sur les violences du régime d'Obote, parfois aussi meurtrier."
        }
      ],
      moinsConnu: "En 1976, des commandos israéliens ont libéré à l'aéroport d'Entebbe les otages d'un avion détourné, accueilli par Amin.",
      evenements: [
        { annee: 1962, titre: "Indépendance", lieu: [0.31, 32.58] },
        { annee: 1966, titre: "Attaque du palais du kabaka", lieu: [0.3, 32.55] },
        { annee: 1972, titre: "Expulsion des Asiatiques", lieu: [0.31, 32.58] },
        { annee: 1976, titre: "Raid d'Entebbe", lieu: [0.04, 32.44] },
        { annee: 1979, titre: "Chute d'Idi Amin", lieu: [0.31, 32.58] }
      ]
    },
    {
      titre: 'L\'ère Museveni',
      debut: 1986, fin: 2026,
      chapo: "Yoweri Museveni ramène la stabilité au sud, combat l'Armée de résistance du Seigneur au nord et reste au pouvoir pendant quatre décennies.",
      recit: [
        "Museveni prend Kampala en janvier 1986. Il rétablit l'ordre, relance l'économie et lutte avec succès contre le sida dans les années 1990. Les royaumes traditionnels sont restaurés en 1993. Au nord, l'Armée de résistance du Seigneur de Joseph Kony enlève des dizaines de milliers d'enfants.",
        "Museveni fait supprimer la limite des mandats (2005) puis la limite d'âge (2017). L'opposant Bobi Wine, chanteur populaire, l'affronte en 2021 et en 2026. Le 15 janvier 2026, Museveni est réélu avec 71,65 % des voix, dans un scrutin marqué par une coupure d'Internet et des accusations de fraude."
      ],
      consensus: [
        "Museveni est au pouvoir depuis 1986.",
        "L'Ouganda a été l'un des premiers pays africains à faire reculer le sida.",
        "L'Armée de résistance du Seigneur a enlevé des dizaines de milliers d'enfants."
      ],
      debats: [
        {
          question: "Museveni : stabilisateur ou autocrate ?",
          positions: [
            { titre: "Un stabilisateur", texte: "Après les dictatures, Museveni a apporté la paix, la croissance et accueilli plus d'un million de réfugiés.", qui: "Partisans, une partie des bailleurs" },
            { titre: "Un autocrate", texte: "Il a supprimé les limites constitutionnelles, réprimé l'opposition et fait de l'armée un pilier du pouvoir.", qui: "Opposition, ONG de défense des droits" }
          ],
          etat: "Les observateurs reconnaissent les acquis des débuts, mais soulignent le durcissement autoritaire. La question de la succession, avec son fils Muhoozi Kainerugaba, est ouverte."
        }
      ],
      moinsConnu: "L'Ouganda accueille près de 1,8 million de réfugiés, l'un des plus grands nombres d'Afrique, et leur accorde des terres et le droit de travailler.",
      evenements: [
        { annee: 1986, titre: "Prise de Kampala par Museveni", lieu: [0.31, 32.58] },
        { annee: 1993, titre: "Restauration des royaumes", lieu: [0.3, 32.55] },
        { annee: 2005, titre: "Kony inculpé par la CPI", lieu: [2.77, 32.3] },
        { annee: 2026, titre: "Septième mandat de Museveni", lieu: [0.31, 32.58] }
      ]
    }
  ]
});
