HISTOIRE.ajouterEmpire({
  id: 'perse-achemenide',
  nom: 'Empire perse achéménide',
  region: 'asie-ouest',
  aire: "De l'Égypte à l'Indus",
  debut: -550, fin: -330,
  accroche: "Le premier empire à unir le Proche-Orient, l'Égypte et l'Asie centrale. Une administration admirée, une tolérance calculée, puis une chute en trois batailles face à Alexandre.",
  intro: "En deux générations, les rois perses de la dynastie achéménide bâtissent le plus vaste empire que le monde ait connu jusque-là, de la mer Égée à l'Indus. Ils gouvernent des dizaines de peuples par des satrapies, des routes et une relative tolérance religieuse. Longtemps vu à travers les yeux des Grecs, qui en ont fait le modèle du despotisme oriental, l'empire est aujourd'hui réévalué par les historiens.",
  sources: "Pierre Briant, Histoire de l'Empire perse ; Amélie Kuhrt, The Persian Empire ; Hérodote, Enquêtes ; Arrien, Anabase.",
  paysActuels: ['iran', 'irak', 'turquie', 'egypte', 'syrie', 'afghanistan', 'pakistan', 'ouzbekistan'],
  phases: [
    {
      titre: "Cyrus et la conquête",
      debut: -550, fin: -522,
      chapo: "Un roi d'une petite principauté perse renverse les Mèdes, puis conquiert la Lydie et Babylone en une quinzaine d'années.",
      recit: [
        "Vers 550 av. J.-C., Cyrus II, roi d'Anshan dans le sud de l'Iran, renverse son suzerain mède Astyage. Il conquiert ensuite la riche Lydie du roi Crésus, puis les cités grecques d'Ionie.",
        "En 539, il entre dans Babylone presque sans combat. Il se présente comme le restaurateur des cultes locaux et autorise le retour des Juifs exilés à Jérusalem. Son fils Cambyse conquiert l'Égypte en 525."
      ],
      consensus: [
        "Cyrus a fondé l'empire en une génération par une série de conquêtes rapides.",
        "Il a laissé les peuples vaincus garder leurs dieux et souvent leurs élites.",
        "La Bible présente Cyrus de façon très favorable, comme un libérateur des Juifs."
      ],
      debats: [
        {
          question: "Le cylindre de Cyrus est-il la première charte des droits de l'homme ?",
          positions: [
            { titre: "Une charte précoce", texte: "Le texte annonce le retour des peuples déportés et le respect des cultes. Il a été présenté comme une première déclaration de tolérance, et une copie est exposée au siège de l'ONU.", qui: "Monarchie iranienne des années 1970, une partie de la tradition populaire" },
            { titre: "Une propagande royale classique", texte: "Le cylindre reprend les formules des rois mésopotamiens : un nouveau roi se présente comme choisi par le dieu Marduk et dénigre son prédécesseur. Il ne parle pas de droits.", qui: "La grande majorité des assyriologues et historiens" }
          ],
          etat: "Les spécialistes y voient un texte de légitimation, sans nier que la politique de Cyrus était réellement plus conciliante que celle des Assyriens."
        }
      ],
      moinsConnu: "Le tombeau de Cyrus à Pasargades, un simple édifice de pierre, a été respecté par Alexandre le Grand, qui fit punir ceux qui l'avaient pillé.",
      evenements: [
        { annee: -550, titre: "Cyrus renverse les Mèdes", lieu: [34.8, 48.5] },
        { annee: -547, titre: "Conquête de la Lydie", lieu: [38.5, 28.0] },
        { annee: -539, titre: "Entrée de Cyrus à Babylone", lieu: [32.54, 44.42] },
        { annee: -525, titre: "Cambyse conquiert l'Égypte", lieu: [30.0, 31.2] }
      ],
      acteurs: [
        ["Cyrus II le Grand", "mort en 530 av. J.-C.", "Fondateur de l'empire"],
        ["Crésus", "VIe siècle av. J.-C.", "Roi de Lydie vaincu par Cyrus"],
        ["Cambyse II", "mort en 522 av. J.-C.", "Conquérant de l'Égypte"]
      ]
    },
    {
      titre: "L'apogée de Darius et Xerxès",
      debut: -522, fin: -465,
      chapo: "Darius organise l'empire en satrapies, construit routes et palais. Les guerres contre les Grecs, souvent présentées comme un tournant, ne l'ébranlent pas vraiment.",
      recit: [
        "Darius Ier prend le pouvoir en 522 après des révoltes. Il divise l'empire en provinces confiées à des satrapes, lève un tribut régulier, frappe une monnaie d'or, la darique, et relie Sardes à Suse par la route royale, avec des relais de poste. Il fait bâtir Persépolis.",
        "La révolte des cités grecques d'Ionie, soutenues par Athènes, provoque les guerres médiques. Les Perses sont battus à Marathon en 490, puis Xerxès échoue à Salamine en 480 et à Platées en 479. Pour l'empire, ces défaites restent une affaire de frontière."
      ],
      consensus: [
        "Darius a donné à l'empire une organisation qui lui survit jusqu'à Alexandre.",
        "Persépolis montrait les peuples de l'empire apportant leurs tributs au roi.",
        "Les guerres médiques sont surtout connues par Hérodote, un auteur grec."
      ],
      debats: [
        {
          question: "Les guerres médiques : choc des civilisations ou guerre de frontière ?",
          positions: [
            { titre: "Un tournant de l'histoire", texte: "La victoire grecque a sauvé la liberté et la démocratie face au despotisme : c'est la lecture des Grecs eux-mêmes, reprise par l'Europe moderne.", qui: "Hérodote, Eschyle, tradition occidentale" },
            { titre: "Un épisode périphérique", texte: "Pour le Grand Roi, la Grèce était une marge pauvre. L'empire n'a perdu aucune province vitale et a continué à peser sur les Grecs par l'argent et la diplomatie.", qui: "Pierre Briant, Amélie Kuhrt" }
          ],
          etat: "Les historiens de la Perse relativisent l'importance des guerres médiques, sans nier leur rôle majeur pour l'identité grecque."
        }
      ],
      moinsConnu: "Les tablettes de Persépolis, des milliers de documents administratifs en élamite, montrent que des femmes travaillaient dans les ateliers royaux et recevaient des rations, avec parfois un supplément à la naissance d'un enfant.",
      evenements: [
        { annee: -518, titre: "Début de la construction de Persépolis", lieu: [29.93, 52.89] },
        { annee: -499, titre: "Révolte de l'Ionie", lieu: [37.94, 27.34] },
        { annee: -490, titre: "Défaite de Marathon", lieu: [38.12, 23.97] },
        { annee: -480, titre: "Défaite navale de Salamine", lieu: [37.95, 23.55] }
      ],
      acteurs: [
        ["Darius Ier", "règne 522-486 av. J.-C.", "Organisateur de l'empire"],
        ["Xerxès Ier", "règne 486-465 av. J.-C.", "Roi des guerres en Grèce"],
        ["Thémistocle", "vers 524-459 av. J.-C.", "Stratège athénien de Salamine, mort au service de la Perse"]
      ]
    },
    {
      titre: "Intrigues, révoltes et chute",
      debut: -465, fin: -330,
      chapo: "L'empire reste immense et riche, mais les complots de palais et les révoltes provinciales se multiplient. Alexandre le renverse en trois batailles.",
      recit: [
        "Les règnes suivants sont marqués par des assassinats à la cour et des révoltes. L'Égypte redevient indépendante de 404 à 343. Artaxerxès III la reconquiert, puis il est empoisonné en 338 par l'eunuque Bagoas.",
        "Darius III monte sur le trône en 336. Alexandre de Macédoine franchit l'Hellespont en 334 et l'emporte au Granique, à Issos en 333, puis à Gaugamèles en 331. Darius est assassiné par ses propres satrapes en 330, et Persépolis est incendiée."
      ],
      consensus: [
        "L'empire est encore puissant et riche à l'arrivée d'Alexandre.",
        "Darius III a été tué par des membres de sa propre noblesse, pas par Alexandre.",
        "Alexandre a gardé une grande partie de l'administration perse."
      ],
      debats: [
        {
          question: "L'empire était-il déjà en déclin ?",
          positions: [
            { titre: "Un empire décadent", texte: "Mollesse de la cour, révoltes, rois faibles : l'empire était un colosse aux pieds d'argile que la première armée sérieuse devait renverser.", qui: "Auteurs grecs, historiens du XIXe siècle" },
            { titre: "Un empire solide battu par un génie", texte: "Ce tableau vient de sources grecques hostiles. L'empire venait de reconquérir l'Égypte, et Darius III a résisté avec méthode. La défaite tient surtout au talent militaire d'Alexandre.", qui: "Pierre Briant, Darius dans l'ombre d'Alexandre" }
          ],
          etat: "La thèse de la décadence est largement abandonnée par les spécialistes, qui y voient un cliché hérité des Grecs."
        }
      ],
      moinsConnu: "Pierre Briant parle d'Alexandre comme du « dernier des Achéménides » : il épousa des princesses perses, adopta une partie du cérémonial de la cour et garda des satrapes iraniens.",
      evenements: [
        { annee: -404, titre: "L'Égypte reprend son indépendance", lieu: [30.0, 31.2] },
        { annee: -338, titre: "Artaxerxès III empoisonné", lieu: [29.93, 52.89] },
        { annee: -333, titre: "Bataille d'Issos", lieu: [36.84, 36.2] },
        { annee: -331, titre: "Bataille de Gaugamèles", lieu: [36.36, 43.25] },
        { annee: -330, titre: "Mort de Darius III et incendie de Persépolis", lieu: [29.93, 52.89] }
      ],
      acteurs: [
        ["Artaxerxès III", "règne 358-338 av. J.-C.", "Reconquiert l'Égypte"],
        ["Bagoas", "mort en 336 av. J.-C.", "Eunuque faiseur de rois"],
        ["Darius III", "règne 336-330 av. J.-C.", "Dernier roi achéménide"],
        ["Alexandre le Grand", "356-323 av. J.-C.", "Conquérant de l'empire"]
      ]
    }
  ],
  lecons: [
    {
      titre: "Gouverner la diversité plutôt que l'effacer",
      texte: "Les Achéménides ont laissé aux peuples leurs dieux, leurs langues et souvent leurs élites, en échange du tribut et de la loyauté. Ce modèle leur a permis de tenir deux siècles sur un territoire immense.",
      objection: "Cette tolérance était un outil de pouvoir, pas un principe. Les révoltes étaient écrasées durement, et des sanctuaires ont été détruits quand des villes se soulevaient."
    },
    {
      titre: "Tout reposait sur la personne du roi",
      texte: "Le loyalisme des satrapes allait au Grand Roi. Quand Darius III fut vaincu puis tué, une grande partie de l'empire passa à Alexandre sans résistance prolongée.",
      objection: "Des régions, comme la Sogdiane ou la Bactriane, ont résisté plusieurs années. Et le transfert rapide montre aussi la solidité de l'administration, qui a simplement changé de maître."
    },
    {
      titre: "Perdre une guerre n'est pas perdre l'empire",
      texte: "Les défaites contre les Grecs, présentées comme humiliantes, n'ont pas ébranlé l'empire, qui a continué à dominer la région un siècle et demi. Le récit des vainqueurs grossit souvent l'importance d'une bataille.",
      objection: "L'échec en Grèce a pu nourrir le mythe d'une Perse vulnérable, qu'Alexandre a utilisé pour justifier sa campagne de « vengeance »."
    }
  ]
});
