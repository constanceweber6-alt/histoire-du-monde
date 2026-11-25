HISTOIRE.ajouterEmpire({
  id: 'abbassides',
  nom: 'Califat abbasside',
  region: 'asie-ouest',
  aire: "Du Maghreb à l'Asie centrale",
  debut: 750, fin: 1258,
  accroche: "Bagdad, la Maison de la sagesse, les Mille et une nuits. Un califat qui perd peu à peu le pouvoir réel au profit de ses propres soldats, puis disparaît sous les coups des Mongols.",
  intro: "En 750, la famille des Abbassides renverse les Omeyyades et installe le centre du monde musulman en Irak. Bagdad, fondée en 762, devient l'une des plus grandes villes du monde, un carrefour du commerce et du savoir. Mais dès le IXe siècle, le calife dépend de sa garde turque, les provinces s'émancipent, et des dynasties étrangères gouvernent en son nom. En 1258, les Mongols prennent Bagdad et tuent le dernier calife.",
  sources: "Hugh Kennedy, When Baghdad Ruled the Muslim World ; Dimitri Gutas, Pensée grecque, culture arabe ; Gabriel Martinez-Gros, Brève histoire des empires ; André Clot, Haroun al-Rachid et le temps des Mille et une nuits.",
  paysActuels: ['irak', 'iran', 'syrie', 'egypte', 'arabie-saoudite', 'turquie', 'ouzbekistan', 'tunisie'],
  phases: [
    {
      titre: "La révolution abbasside et l'âge de Bagdad",
      debut: 750, fin: 861,
      chapo: "Portés par une révolte partie du Khorassan, les Abbassides prennent le pouvoir, fondent Bagdad et font de la traduction des savoirs grecs et persans une affaire d'État.",
      recit: [
        "La révolution abbasside part de l'est de l'Iran, s'appuie sur les musulmans non arabes mécontents et l'emporte sur la rivière Zab en 750. Presque tous les Omeyyades sont massacrés ; l'un d'eux s'enfuit et fonde un émirat en Espagne. En 762, le calife al-Mansour fonde Bagdad, ville ronde au bord du Tigre.",
        "Sous Haroun al-Rachid puis al-Mamoun, Bagdad attire marchands, savants et traducteurs. Les œuvres grecques, persanes et indiennes sont traduites en arabe. Al-Khwarizmi y écrit le traité qui donnera son nom à l'algèbre."
      ],
      consensus: [
        "Les Abbassides ont déplacé le centre du monde musulman vers l'Irak et l'influence persane.",
        "Le mouvement de traduction a préservé et enrichi une partie de la science grecque.",
        "La bataille de Talas en 751 a contribué à diffuser le papier vers l'ouest."
      ],
      debats: [
        {
          question: "Parler d'« âge d'or islamique » a-t-il un sens ?",
          positions: [
            { titre: "Un âge d'or réel", texte: "Sciences, médecine, philosophie, mathématiques : le monde abbasside a été pendant des siècles le centre intellectuel du monde.", qui: "De nombreux historiens des sciences" },
            { titre: "Une notion à manier avec prudence", texte: "L'expression est moderne. Elle laisse croire à un déclin brutal ensuite, alors que la science a continué ailleurs, et elle oublie la part des savants chrétiens, juifs ou zoroastriens.", qui: "Historiens critiques du « paradigme du déclin »" }
          ],
          etat: "La vitalité intellectuelle de Bagdad fait consensus, mais l'idée d'un âge d'or suivi d'une longue décadence est de plus en plus contestée."
        }
      ],
      moinsConnu: "La Maison de la sagesse, souvent décrite comme une grande université, était peut-être d'abord une bibliothèque palatiale ; son rôle exact est discuté par les historiens.",
      evenements: [
        { annee: 750, titre: "Victoire du Zab, fin des Omeyyades", lieu: [36.0, 43.4] },
        { annee: 751, titre: "Bataille de Talas", lieu: [42.5, 72.2] },
        { annee: 762, titre: "Fondation de Bagdad", lieu: [33.31, 44.36] },
        { annee: 830, titre: "Essor de la Maison de la sagesse", lieu: [33.31, 44.36] }
      ],
      acteurs: [
        ["Al-Mansour", "vers 714-775", "Calife fondateur de Bagdad"],
        ["Haroun al-Rachid", "vers 766-809", "Calife des Mille et une nuits"],
        ["Al-Mamoun", "786-833", "Calife protecteur des traducteurs"],
        ["Al-Khwarizmi", "vers 780-850", "Mathématicien à l'origine du mot algèbre"]
      ]
    },
    {
      titre: "Le calife prisonnier de ses soldats",
      debut: 861, fin: 1055,
      chapo: "La garde turque assassine un calife en 861. Les provinces deviennent autonomes, des dynasties rivales se proclament califes, et les Bouyides prennent Bagdad.",
      recit: [
        "Pour ne plus dépendre des clans arabes et iraniens, les califes ont recruté des esclaves-soldats turcs. En 861, ces soldats assassinent le calife al-Mutawakkil, et une décennie d'anarchie suit. La révolte des Zanj, esclaves noirs des plantations du sud de l'Irak, dure de 869 à 883.",
        "L'Égypte, l'Iran oriental et le Maghreb passent à des dynasties autonomes. Les Fatimides fondent un califat rival en 909 puis prennent l'Égypte. En 945, les Bouyides, une famille iranienne chiite, s'emparent de Bagdad : le calife n'a plus qu'un rôle religieux."
      ],
      consensus: [
        "Le recours à des soldats esclaves a fini par placer les califes sous leur contrôle.",
        "À partir de 945, le calife ne gouverne plus réellement.",
        "Le monde musulman se divise entre plusieurs califats rivaux."
      ],
      debats: [
        {
          question: "La fragmentation est-elle un déclin ?",
          positions: [
            { titre: "Un déclin", texte: "La perte d'unité politique et l'impuissance des califes marquent le début de la fin de la puissance abbasside.", qui: "Récit traditionnel" },
            { titre: "Une diffusion", texte: "Les dynasties régionales, comme les Samanides ou les Fatimides, ont fait naître de nouveaux foyers de culture au Caire, à Boukhara ou à Cordoue. La civilisation s'est étendue en se divisant.", qui: "Hugh Kennedy et d'autres historiens" }
          ],
          etat: "Les historiens distinguent aujourd'hui le déclin du pouvoir califal de la vitalité du monde musulman."
        }
      ],
      moinsConnu: "Le mot « mamelouk », qui désigne ces esclaves-soldats, a donné son nom à la dynastie qui gouverna l'Égypte de 1250 à 1517 et arrêta les Mongols en 1260.",
      evenements: [
        { annee: 861, titre: "Assassinat d'al-Mutawakkil", lieu: [34.2, 43.87] },
        { annee: 869, titre: "Début de la révolte des Zanj", lieu: [30.5, 47.8] },
        { annee: 909, titre: "Naissance du califat fatimide", lieu: [35.5, 10.0] },
        { annee: 945, titre: "Les Bouyides prennent Bagdad", lieu: [33.31, 44.36] }
      ],
      acteurs: [
        ["Al-Mutawakkil", "822-861", "Calife assassiné par sa garde"],
        ["Ali ibn Muhammad", "mort en 883", "Chef de la révolte des Zanj"],
        ["Al-Razi", "vers 865-925", "Médecin et philosophe"],
        ["Mu'izz al-Dawla", "mort en 967", "Émir bouyide maître de Bagdad"]
      ]
    },
    {
      titre: "Seldjoukides, renouveau et sac de Bagdad",
      debut: 1055, fin: 1258,
      chapo: "Les Turcs seldjoukides prennent le pouvoir au nom du calife. Un dernier sursaut ne résiste pas aux Mongols de Houlagou en 1258.",
      recit: [
        "En 1055, le Turc Tughrul Beg entre dans Bagdad et prend le titre de sultan : il gouverne, le calife légitime. Au XIIe siècle, l'empire seldjoukide se divise, et le calife al-Nasir, qui règne de 1180 à 1225, reconstitue un petit État autour de Bagdad.",
        "En 1258, l'armée mongole de Houlagou assiège Bagdad. Le calife al-Musta'sim, qui avait refusé de se soumettre, se rend. La ville est pillée pendant des jours, une grande partie de la population tuée, et le calife exécuté."
      ],
      consensus: [
        "Après 1055, les sultans seldjoukides détiennent le pouvoir réel.",
        "Le sac de Bagdad de 1258 a fait de très nombreuses victimes.",
        "Une branche abbasside survit au Caire comme califat symbolique jusqu'en 1517."
      ],
      debats: [
        {
          question: "Le sac de 1258 marque-t-il la fin d'une civilisation ?",
          positions: [
            { titre: "Une catastrophe fondatrice", texte: "La destruction de Bagdad, de ses bibliothèques et de ses canaux d'irrigation marque la fin de la grandeur de l'Irak et de l'âge classique de l'islam.", qui: "Mémoire collective, récit traditionnel" },
            { titre: "Une rupture à relativiser", texte: "Bagdad avait déjà perdu sa place centrale. Les Mongols eux-mêmes ont financé l'observatoire de Maragha, et Le Caire, l'Iran ou l'Inde ont pris le relais.", qui: "Historiens des sciences et des Mongols" }
          ],
          etat: "Le traumatisme est réel, mais les historiens refusent d'en faire la fin brutale de la science dans le monde musulman."
        }
      ],
      moinsConnu: "Selon les récits, le calife al-Musta'sim fut enroulé dans un tapis et piétiné par des chevaux : les Mongols évitaient de verser le sang d'un souverain.",
      evenements: [
        { annee: 1055, titre: "Tughrul Beg entre à Bagdad", lieu: [33.31, 44.36] },
        { annee: 1180, titre: "Avènement d'al-Nasir", lieu: [33.31, 44.36] },
        { annee: 1258, titre: "Sac de Bagdad par les Mongols", lieu: [33.31, 44.36] }
      ],
      acteurs: [
        ["Tughrul Beg", "vers 990-1063", "Premier sultan seldjoukide à Bagdad"],
        ["Nizam al-Mulk", "1018-1092", "Vizir des Seldjoukides"],
        ["Al-Nasir", "1158-1225", "Calife du dernier sursaut"],
        ["Al-Musta'sim", "1213-1258", "Dernier calife de Bagdad"],
        ["Houlagou", "vers 1217-1265", "Chef mongol, conquérant de Bagdad"]
      ]
    }
  ],
  lecons: [
    {
      titre: "Qui tient l'armée tient le pouvoir",
      texte: "En confiant leur sécurité à des soldats étrangers qui ne devaient rien qu'à eux, les califes croyaient gagner en indépendance. Ces soldats sont devenus les vrais maîtres.",
      objection: "Le système des esclaves-soldats a aussi produit des États solides, comme celui des Mamelouks en Égypte. Le problème tenait moins au système qu'à l'affaiblissement financier des califes."
    },
    {
      titre: "Le prestige ne remplace pas la force",
      texte: "En 1258, le calife comptait sur son autorité religieuse et refusa de se soumettre. Les Mongols n'accordaient aucune valeur à ce prestige.",
      objection: "Al-Musta'sim n'avait guère de choix : se soumettre n'avait pas sauvé d'autres villes, et les sources qui le décrivent comme arrogant sont souvent postérieures et hostiles."
    },
    {
      titre: "Le savoir comme puissance",
      texte: "En attirant savants et traducteurs de toutes origines, Bagdad est devenue un centre du monde. Ce rayonnement a survécu à la chute politique du califat.",
      objection: "Le mécénat dépendait de la richesse et des goûts des souverains ; il n'a pas empêché l'affaiblissement de l'État, et une partie de cette science était réservée à une petite élite."
    }
  ]
});
