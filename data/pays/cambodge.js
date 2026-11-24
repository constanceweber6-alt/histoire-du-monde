HISTOIRE.ajouterPays({
  id: 'cambodge',
  nom: 'Cambodge',
  region: 'asie-sud-est',
  accroche: "L'empire d'Angkor, l'un des plus grands de l'Asie médiévale, des siècles de recul, le protectorat français, puis le génocide des Khmers rouges.",
  intro: "Le Cambodge vit avec deux héritages écrasants : la grandeur d'Angkor, symbole national jusque sur son drapeau, et le traumatisme du régime khmer rouge, qui a tué près d'un quart de la population en moins de quatre ans.",
  sources: "David Chandler, A History of Cambodia ; Ben Kiernan, Le Génocide au Cambodge ; Rithy Panh, L'Élimination.",
  phases: [
    {
      titre: 'Funan et Chenla',
      debut: 1, fin: 802,
      chapo: "Dans le delta du Mékong, le Funan est un grand carrefour maritime. Le Chenla, plus continental, lui succède.",
      recit: [
        "Le Funan, connu surtout par les sources chinoises, contrôle aux premiers siècles un commerce maritime entre l'Inde et la Chine. Son port d'Oc Eo, dans le Vietnam actuel, a livré des monnaies romaines et des objets indiens. Les élites adoptent hindouisme, bouddhisme et sanskrit.",
        "Au VIe siècle, le Chenla, situé plus au nord, s'impose. Les premières inscriptions en khmer apparaissent en 611. Au VIIIe siècle, le pays se divise en plusieurs principautés rivales."
      ],
      consensus: [
        "Le Funan est l'un des premiers États d'Asie du Sud-Est, connu par les textes chinois.",
        "La plus ancienne inscription datée en langue khmère remonte à 611.",
        "Les élites ont adopté des modèles religieux et politiques d'origine indienne."
      ],
      debats: [
        {
          "question": "Le Funan était-il un royaume khmer ?",
          "positions": [
            {
              "titre": "Un royaume khmer",
              "texte": "Le Funan serait le premier État khmer, et le delta du Mékong une terre khmère depuis l'origine.",
              "qui": "Historiographie nationaliste cambodgienne"
            },
            {
              "titre": "Une identité incertaine",
              "texte": "La langue de la population du Funan n'est pas connue avec certitude. Les premières inscriptions en khmer datent du Chenla.",
              "qui": "Michael Vickery, archéologues"
            }
          ],
          "etat": "La question reste ouverte. Elle est sensible parce qu'elle touche aux revendications sur le delta du Mékong, aujourd'hui vietnamien."
        }
      ],
      moinsConnu: "Le delta du Mékong, aujourd'hui vietnamien, a longtemps été khmer. Les Khmers Krom, minorité khmère du sud du Vietnam, en gardent la mémoire.",
      evenements: [
        { annee: 150, titre: "Port d'Oc Eo, Funan", lieu: [10.25, 105.15] },
        { annee: 611, titre: "Première inscription datée en khmer", lieu: [11.0, 104.8] },
        { annee: 630, titre: "Sambor Prei Kuk, capitale du Chenla", lieu: [12.87, 105.04] }
      ]
    },
    {
      titre: "L'empire d'Angkor",
      debut: 802, fin: 1431,
      chapo: "Pendant six siècles, Angkor domine une grande partie de l'Asie du Sud-Est continentale et bâtit des temples sans équivalent.",
      recit: [
        "En 802, Jayavarman II se proclame « roi universel » sur le mont Kulen. Ses successeurs installent la capitale à Angkor. Suryavarman II construit Angkor Vat au XIIe siècle, le plus grand monument religieux du monde, dédié à Vishnou. Un réseau hydraulique immense alimente les rizières.",
        "Jayavarman VII (1181 à vers 1218) repousse les Chams, fait du bouddhisme la religion de cour et bâtit Angkor Thom et le Bayon. Aux XIVe et XVe siècles, l'empire décline. En 1431, Ayutthaya prend Angkor, et la capitale se déplace vers le sud."
      ],
      consensus: [
        "Angkor Vat est le plus grand monument religieux du monde.",
        "Angkor était une très vaste agglomération urbaine, peut-être la plus étendue du monde préindustriel.",
        "Jayavarman VII est le plus grand bâtisseur de l'empire."
      ],
      debats: [
        {
          question: "Pourquoi Angkor a-t-il été abandonné ?",
          positions: [
            { titre: "La conquête siamoise", texte: "Les attaques d'Ayutthaya, jusqu'à la prise de 1431, auraient forcé le départ de la cour.", qui: "Récit traditionnel" },
            { titre: "Une crise environnementale", texte: "Des sécheresses et des pluies extrêmes aux XIVe et XVe siècles auraient endommagé le système hydraulique.", qui: "Roland Fletcher, études des cernes d'arbres" },
            { titre: "Un déplacement commercial", texte: "Le centre économique s'est déplacé vers le Mékong et le commerce maritime, autour de Phnom Penh.", qui: "Historiens récents" }
          ],
          etat: "Les chercheurs pensent que plusieurs causes se sont combinées. Les relevés laser (lidar) montrent que la ville n'a jamais été totalement abandonnée."
        }
      ],
      moinsConnu: "Un diplomate chinois, Zhou Daguan, a séjourné à Angkor en 1296 et laissé la seule description directe de la vie quotidienne : marchés tenus par des femmes, fêtes, esclaves, bains dans les rivières.",
      evenements: [
        { annee: 802, titre: "Jayavarman II proclamé roi au mont Kulen", lieu: [13.57, 104.1] },
        { annee: 1150, titre: "Achèvement d'Angkor Vat", lieu: [13.41, 103.87] },
        { annee: 1181, titre: "Règne de Jayavarman VII, construction du Bayon", lieu: [13.44, 103.86] },
        { annee: 1296, titre: "Séjour de Zhou Daguan", lieu: [13.44, 103.86] },
        { annee: 1431, titre: "Prise d'Angkor par Ayutthaya", lieu: [13.41, 103.87] }
      ]
    },
    {
      titre: 'Entre Siam et Vietnam',
      debut: 1431, fin: 1863,
      chapo: "Le royaume, recentré autour de Phnom Penh, est pris en tenaille entre ses deux puissants voisins.",
      recit: [
        "La capitale se déplace vers Phnom Penh puis Longvek et Oudong. Le bouddhisme theravada devient la religion du peuple. Des marchands chinois, japonais, portugais et malais fréquentent le royaume. Le Siam prend Longvek en 1594.",
        "Aux XVIIe et XVIIIe siècles, les Vietnamiens s'emparent du delta du Mékong. Au XIXe siècle, le Cambodge est disputé entre Bangkok et Huế : les Vietnamiens occupent le pays dans les années 1830 et tentent de le « vietnamiser ». En 1863, le roi Norodom accepte le protectorat français."
      ],
      consensus: [
        "Le royaume khmer perd le delta du Mékong au profit du Vietnam.",
        "Au XIXe siècle, le Cambodge est un vassal disputé entre le Siam et le Vietnam.",
        "Le protectorat français est accepté en 1863 face à la pression de ces voisins."
      ],
      debats: [
        {
          question: "Une « période sombre » de déclin ?",
          positions: [
            { titre: "Un déclin", texte: "Après Angkor, le Cambodge n'aurait connu que guerres, pertes territoriales et décadence.", qui: "Historiographie coloniale française" },
            { titre: "Une autre époque", texte: "Cette période voit l'essor du bouddhisme populaire, de la littérature khmère et du commerce. Le terme de « période sombre » reflète surtout le manque de monuments.", qui: "David Chandler, Grégory Mikaelian" }
          ],
          etat: "Les historiens rejettent l'idée d'un âge sombre et parlent de « période moyenne »."
        }
      ],
      moinsConnu: "Le Reamker, version khmère du Ramayana indien, est l'une des grandes œuvres de cette période. Ses scènes sont peintes sur les murs du palais royal de Phnom Penh.",
      evenements: [
        { annee: 1434, titre: "Phnom Penh devient capitale", lieu: [11.56, 104.92] },
        { annee: 1594, titre: "Prise de Longvek par le Siam", lieu: [12.02, 104.75] },
        { annee: 1835, titre: "Occupation vietnamienne", lieu: [11.56, 104.92] },
        { annee: 1863, titre: "Protectorat français", lieu: [11.8, 104.8] }
      ]
    },
    {
      titre: 'Le protectorat français',
      debut: 1863, fin: 1953,
      chapo: "Le Cambodge fait partie de l'Indochine. La France récupère des provinces perdues, « redécouvre » Angkor, mais exploite le pays.",
      recit: [
        "La France gouverne en maintenant la monarchie. En 1907, elle obtient du Siam la restitution des provinces de Battambang et Siem Reap, où se trouve Angkor. L'École française d'Extrême-Orient restaure les temples. Le pays exporte riz, poivre et caoutchouc.",
        "Les impôts lourds provoquent des révoltes. Le nationalisme khmer se développe dans les années 1930. En 1941, les Français placent sur le trône le jeune Norodom Sihanouk. Il obtient l'indépendance en 1953 par une « croisade royale » pacifique."
      ],
      consensus: [
        "Le protectorat a permis au Cambodge de récupérer les provinces d'Angkor en 1907.",
        "La France a restauré Angkor et fait d'elle un symbole national.",
        "Sihanouk obtient l'indépendance en 1953 sans guerre ouverte."
      ],
      debats: [
        {
          question: "La France a-t-elle « sauvé » le Cambodge ?",
          positions: [
            { titre: "Une protection", texte: "Sans le protectorat, le Cambodge aurait été partagé entre le Siam et le Vietnam.", qui: "Récit colonial, une partie de la mémoire cambodgienne" },
            { titre: "Une domination", texte: "La France a d'abord servi ses intérêts, imposé des impôts écrasants et peu développé l'éducation.", qui: "Historiens de la colonisation" }
          ],
          etat: "Les historiens reconnaissent que le protectorat a figé les frontières, tout en soulignant son caractère colonial et inégal."
        }
      ],
      moinsConnu: "En 1925, le résident français Félix Bardez est tué par des villageois excédés par les impôts. Les représailles touchent tout le village. Peu avant, en 1923, l'écrivain André Malraux avait été arrêté pour avoir prélevé des sculptures du temple de Banteay Srei ; l'expérience du système colonial nourrira ensuite ses positions anticoloniales.",
      evenements: [
        { annee: 1907, titre: "Restitution de Battambang et Siem Reap", lieu: [13.1, 103.2] },
        { annee: 1925, titre: "Affaire Bardez", lieu: [12.25, 104.67] },
        { annee: 1941, titre: "Norodom Sihanouk roi", lieu: [11.56, 104.93] },
        { annee: 1953, titre: "Indépendance", lieu: [11.56, 104.92] }
      ]
    },
    {
      titre: 'De Sihanouk aux Khmers rouges',
      debut: 1953, fin: 1979,
      chapo: "Neutralité fragile, coup d'État, bombardements américains, puis le régime khmer rouge qui fait environ 1,7 million de morts.",
      recit: [
        "Sihanouk tente de maintenir le pays neutre pendant la guerre du Vietnam. En 1970, il est renversé par le général Lon Nol, soutenu par les États-Unis. Les bombardements américains sur l'est du pays et la guerre civile font des centaines de milliers de morts.",
        "Le 17 avril 1975, les Khmers rouges de Pol Pot entrent à Phnom Penh et vident les villes. Le « Kampuchéa démocratique » abolit monnaie, écoles, religion et familles. Exécutions, travail forcé et famine tuent environ 1,7 million de personnes, près d'un quart de la population. Le centre S-21 torture et exécute des milliers de prisonniers. En janvier 1979, l'armée vietnamienne renverse le régime."
      ],
      consensus: [
        "Le régime khmer rouge a causé la mort d'environ 1,7 million de personnes en moins de quatre ans.",
        "Les minorités cham et vietnamienne ont été spécifiquement visées.",
        "Les bombardements américains de 1969 à 1973 ont été massifs."
      ],
      debats: [
        {
          question: "Les crimes khmers rouges sont-ils un génocide ?",
          positions: [
            { titre: "Un génocide", texte: "Les Chams musulmans et les Vietnamiens ont été exterminés en tant que groupes, ce qui correspond à la définition juridique.", qui: "Ben Kiernan ; jugement du tribunal spécial en 2018" },
            { titre: "Un « autogénocide » politique", texte: "La plupart des victimes étaient des Khmers tués pour des raisons politiques ou sociales, ce que la définition juridique du génocide couvre mal.", qui: "Certains juristes et historiens" }
          ],
          etat: "Le tribunal spécial a condamné en 2018 deux dirigeants pour génocide contre les Chams et les Vietnamiens, et pour crimes contre l'humanité pour le reste des victimes."
        }
      ],
      moinsConnu: "Après 1979, les Khmers rouges ont conservé le siège du Cambodge à l'ONU pendant plus de dix ans, soutenus par la Chine, la Thaïlande et les pays occidentaux, hostiles au gouvernement installé par le Vietnam.",
      evenements: [
        { annee: 1970, titre: "Coup d'État de Lon Nol", lieu: [11.56, 104.92] },
        { annee: 1973, titre: "Bombardements américains intensifs", lieu: [11.9, 105.4] },
        { annee: 1975, titre: "Prise de Phnom Penh par les Khmers rouges", lieu: [11.56, 104.92] },
        { annee: 1976, titre: "Centre de détention S-21", lieu: [11.55, 104.92] },
        { annee: 1979, titre: "Chute du régime", lieu: [11.56, 104.92] }
      ]
    },
    {
      titre: 'Reconstruction',
      debut: 1979, fin: 2025,
      chapo: "Occupation vietnamienne, guerre civile, accords de paix de 1991 et règne d'un parti dominant.",
      recit: [
        "Le gouvernement installé par le Vietnam affronte les Khmers rouges et les royalistes jusqu'aux accords de Paris de 1991. L'ONU organise des élections en 1993 et Sihanouk redevient roi. Les Khmers rouges se dissolvent à la fin des années 1990, après la mort de Pol Pot en 1998.",
        "Hun Sen dirige le pays de 1985 à 2023, puis transmet le pouvoir à son fils Hun Manet. Le Cambodge connaît une forte croissance, liée au textile, au tourisme et aux investissements chinois, tandis que l'opposition est dissoute et la presse muselée."
      ],
      consensus: [
        "Les accords de Paris de 1991 mettent fin à la guerre civile.",
        "Un tribunal mixte, avec l'ONU, a jugé plusieurs dirigeants khmers rouges.",
        "Hun Sen a dirigé le pays pendant près de quarante ans."
      ],
      debats: [
        {
          "question": "Le tribunal khmer rouge : justice rendue ou justice manquée ?",
          "positions": [
            {
              "titre": "Une justice rendue",
              "texte": "Le tribunal a reconnu le génocide et condamné les principaux dirigeants encore vivants, en associant les victimes comme parties civiles.",
              "qui": "ONU, associations de victimes"
            },
            {
              "titre": "Une justice tardive et limitée",
              "texte": "Seules trois personnes ont été condamnées en seize ans, pour plus de 300 millions de dollars. Le gouvernement a bloqué les poursuites contre d'autres responsables, dont certains d'anciens Khmers rouges proches du pouvoir.",
              "qui": "Juristes, Human Rights Watch"
            }
          ],
          "etat": "Le bilan est jugé important sur le plan historique et symbolique, mais insuffisant sur le plan judiciaire."
        }
      ],
      moinsConnu: "Les mines antipersonnel posées pendant les guerres ont blessé ou tué plus de 60 000 Cambodgiens depuis 1979. Le déminage, aidé notamment par des rats détecteurs, se poursuit encore.",
      evenements: [
        { annee: 1991, titre: "Accords de paix de Paris", lieu: [48.86, 2.35] },
        { annee: 1993, titre: "Élections organisées par l'ONU", lieu: [11.56, 104.92] },
        { annee: 1998, titre: "Mort de Pol Pot", lieu: [14.17, 103.97] },
        { annee: 2018, titre: "Condamnation pour génocide par le tribunal spécial", lieu: [11.5, 104.85] }
      ]
    }
  ]
});
