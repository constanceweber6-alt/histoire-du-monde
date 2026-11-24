HISTOIRE.ajouterPays({
  id: 'suede',
  nom: 'Suède',
  region: 'europe-ouest',
  accroche: "Des Vikings aux Vasa, une grande puissance militaire au XVIIe siècle devenue un modèle social neutre, puis membre de l'OTAN en 2024.",
  intro: "La Suède a été tour à tour un royaume viking, une grande puissance qui dominait la Baltique, un pays pauvre d'émigration, puis l'un des États-providence les plus célèbres du monde. Son image de pays pacifique et égalitaire a aussi ses zones d'ombre.",
  sources: "Neil Kent, A Concise History of Sweden ; Maurice Carrez, Histoire de la Suède ; Peter Englund, La Bataille de Poltava.",
  phases: [
    {
      titre: 'Peuples du Nord',
      debut: 1, fin: 793,
      chapo: "Des communautés agricoles et marchandes en contact avec l'Empire romain, autour d'Uppsala et de l'île de Gotland.",
      recit: [
        "Au début de notre ère, Tacite évoque les Suiones, ancêtres des Suédois, puissants par leurs navires. Des objets romains arrivent par le commerce. L'écriture runique apparaît vers le IIe siècle.",
        "Aux Ve et VIe siècles, les tombes royales d'Uppsala et les trésors d'or de Gotland témoignent de la richesse des élites. Les Svear, autour du lac Mälar, et les Götar, plus au sud, forment les principaux groupes. Le centre commercial de Helgö précède Birka."
      ],
      consensus: [
        "Les Suiones sont mentionnés par Tacite au Ier siècle.",
        "L'écriture runique se développe dans la région à partir du IIe siècle.",
        "Uppsala est un centre religieux et politique important avant le christianisme."
      ],
      debats: [
        {
          question: "Les Goths venaient-ils de Suède ?",
          positions: [
            { titre: "Une origine scandinave", texte: "L'historien Jordanès, au VIe siècle, fait venir les Goths de « Scandza ». Les rois de Suède se sont longtemps dits rois « des Goths ».", qui: "Jordanès, gothicisme suédois du XVIIe siècle" },
            { titre: "Un mythe d'origine", texte: "L'archéologie ne permet pas de confirmer cette migration. Le récit pourrait être une construction littéraire.", qui: "Historiens et archéologues actuels" }
          ],
          etat: "La question reste débattue. Le « gothicisme » a surtout servi à glorifier la Suède à l'époque de sa grandeur."
        }
      ],
      moinsConnu: "Un petit Bouddha en bronze venu du nord de l'Inde a été retrouvé à Helgö, près de Stockholm, dans des couches datées du VIe siècle. Il témoigne des réseaux d'échange bien avant les Vikings.",
      evenements: [
        { annee: 98, titre: "Tacite décrit les Suiones" },
        { annee: 500, titre: "Tertres royaux d'Uppsala", lieu: [59.9, 17.63] },
        { annee: 550, titre: "Bouddha de Helgö", lieu: [59.35, 17.79] }
      ]
    },
    {
      titre: 'Vikings et royaume chrétien',
      debut: 793, fin: 1397,
      chapo: "Les Vikings suédois se tournent vers l'est, jusqu'à Byzance et Bagdad. Le royaume se christianise et s'unifie lentement.",
      recit: [
        "Les Vikings de Suède, souvent appelés Varègues, naviguent sur les fleuves russes vers Constantinople et le califat abbasside. Birka, sur le lac Mälar, est un grand centre de commerce. Le missionnaire Anschaire y prêche dès 829.",
        "Le christianisme s'impose lentement : le roi Olof Skötkonung est baptisé vers 1008, mais le temple païen d'Uppsala subsiste jusqu'à la fin du XIe siècle. Le royaume s'unifie aux XIIe et XIIIe siècles et conquiert la Finlande. Birger Jarl fonde Stockholm vers 1250."
      ],
      consensus: [
        "Les Vikings suédois se sont surtout tournés vers l'est et la Russie.",
        "La christianisation de la Suède a été plus tardive que celle du Danemark ou de la Norvège.",
        "La Finlande a fait partie du royaume de Suède pendant environ six siècles."
      ],
      debats: [
        {
          question: "La conquête de la Finlande : croisade ou expansion ?",
          positions: [
            { titre: "Des croisades", texte: "La tradition parle de « croisades » pour christianiser les Finnois, comme celle du roi Erik au XIIe siècle.", qui: "Tradition suédoise" },
            { titre: "Une expansion politique", texte: "L'intégration de la Finlande a été progressive et commerciale autant que militaire, et la « première croisade » est en partie légendaire.", qui: "Historiens finlandais et suédois" }
          ],
          etat: "Les historiens parlent d'une intégration progressive de la Finlande, plus complexe que le récit des croisades."
        }
      ],
      moinsConnu: "Une tombe de guerrier viking de haut rang à Birka, longtemps supposée masculine, a été identifiée par l'ADN en 2017 comme celle d'une femme. L'interprétation, guerrière ou non, fait débat.",
      evenements: [
        { annee: 829, titre: "Mission d'Anschaire à Birka", lieu: [59.33, 17.54] },
        { annee: 1008, titre: "Baptême d'Olof Skötkonung", lieu: [58.43, 13.3] },
        { annee: 1252, titre: "Fondation de Stockholm", lieu: [59.33, 18.07] },
        { annee: 1350, titre: "Peste noire et code de Magnus Eriksson", lieu: [59.33, 18.07] }
      ]
    },
    {
      titre: 'Union de Kalmar et dynastie Vasa',
      debut: 1397, fin: 1611,
      chapo: "La Suède est unie au Danemark et à la Norvège, puis s'en libère avec Gustave Vasa, qui fonde la monarchie moderne et adopte le luthéranisme.",
      recit: [
        "En 1397, la reine Marguerite de Danemark réunit les trois royaumes scandinaves dans l'union de Kalmar. Les Suédois supportent mal la domination danoise. En 1520, le roi danois Christian II fait exécuter plus de 80 nobles et notables à Stockholm : c'est le « bain de sang de Stockholm ».",
        "Gustave Vasa mène la révolte, devient roi en 1523 et rompt avec le Danemark. Il confisque les biens de l'Église et adopte la Réforme luthérienne. Ses successeurs renforcent l'État et lancent l'expansion vers la Baltique."
      ],
      consensus: [
        "L'union de Kalmar (1397) réunit les trois royaumes scandinaves sous un même souverain.",
        "Gustave Vasa, élu roi en 1523, est le fondateur de la Suède moderne.",
        "La Suède devient luthérienne au XVIe siècle."
      ],
      debats: [
        {
          "question": "L'union de Kalmar : union scandinave ou domination danoise ?",
          "positions": [
            {
              "titre": "Une union fraternelle",
              "texte": "L'union aurait été une première forme de coopération nordique, préfigurant le « scandinavisme » du XIXe siècle.",
              "qui": "Courant scandinaviste"
            },
            {
              "titre": "Une domination danoise",
              "texte": "En Suède, l'union est surtout restée le souvenir d'une domination danoise, culminant avec le bain de sang de Stockholm.",
              "qui": "Récit national suédois"
            }
          ],
          "etat": "Les historiens décrivent une union dynastique instable, où la noblesse suédoise défendait ses intérêts face au pouvoir danois."
        }
      ],
      moinsConnu: "La « Vasaloppet », course de ski de fond de 90 km disputée chaque année, commémore la fuite de Gustave Vasa à skis en 1520, poursuivi par les Danois, avant que des paysans de Dalécarlie ne le rattrapent pour lui confier la révolte.",
      evenements: [
        { annee: 1397, titre: "Union de Kalmar", lieu: [56.66, 16.36] },
        { annee: 1520, titre: "Bain de sang de Stockholm", lieu: [59.325, 18.07] },
        { annee: 1523, titre: "Gustave Vasa élu roi", lieu: [59.62, 16.54] },
        { annee: 1527, titre: "Diète de Västerås, début de la Réforme", lieu: [59.61, 16.55] }
      ]
    },
    {
      titre: "L'ère de grandeur",
      debut: 1611, fin: 1809,
      chapo: "La Suède devient une grande puissance qui domine la Baltique, avant d'être vaincue par la Russie à Poltava et de perdre la Finlande.",
      recit: [
        "Gustave II Adolphe intervient dans la guerre de Trente Ans pour défendre les protestants et meurt à Lützen en 1632. Les traités de Westphalie (1648) donnent à la Suède des territoires en Allemagne. La reine Christine, qui abdique en 1654 pour se convertir au catholicisme, attire Descartes à Stockholm. La Suède prend la Scanie au Danemark en 1658.",
        "Charles XII affronte une coalition menée par la Russie de Pierre le Grand. Sa défaite à Poltava (1709) met fin à la puissance suédoise. Le XVIIIe siècle est une « ère de liberté » parlementaire, puis Gustave III restaure l'absolutisme. En 1809, la Suède perd la Finlande au profit de la Russie."
      ],
      consensus: [
        "Au XVIIe siècle, la Suède domine une grande partie de la Baltique.",
        "La défaite de Poltava (1709) marque la fin de la Suède comme grande puissance.",
        "La perte de la Finlande en 1809 réduit le royaume à peu près à ses frontières actuelles."
      ],
      debats: [
        {
          question: "La grandeur suédoise : gloire nationale ou fardeau pour le peuple ?",
          positions: [
            { titre: "Une gloire nationale", texte: "Gustave II Adolphe et Charles XII ont fait de la Suède une puissance européenne respectée.", qui: "Historiographie nationaliste du XIXe siècle" },
            { titre: "Un fardeau", texte: "Les guerres incessantes ont saigné un pays peu peuplé, levé de lourds impôts et coûté la vie à des dizaines de milliers de soldats paysans.", qui: "Historiens sociaux, Peter Englund" }
          ],
          etat: "Les historiens soulignent le coût humain de l'époque de grandeur, sans nier son importance européenne."
        }
      ],
      moinsConnu: "Le navire de guerre Vasa, fierté de la marine de Gustave II Adolphe, a coulé en 1628 dans le port de Stockholm lors de son voyage inaugural, après à peine 1 300 mètres. Renfloué en 1961, il est aujourd'hui exposé dans un musée.",
      evenements: [
        { annee: 1628, titre: "Naufrage du Vasa", lieu: [59.33, 18.09] },
        { annee: 1632, titre: "Mort de Gustave II Adolphe à Lützen", lieu: [51.26, 12.14] },
        { annee: 1658, titre: "Traité de Roskilde, conquête de la Scanie", lieu: [55.6, 13.0] },
        { annee: 1709, titre: "Défaite de Poltava", lieu: [49.59, 34.55] },
        { annee: 1809, titre: "Perte de la Finlande", lieu: [60.17, 24.94] }
      ]
    },
    {
      titre: 'Neutralité et naissance du modèle suédois',
      debut: 1809, fin: 1945,
      chapo: "Un pays pauvre, d'où émigre un quart de la population, devient une démocratie industrielle et choisit la neutralité.",
      recit: [
        "En 1810, le maréchal français Bernadotte est élu prince héritier ; sa dynastie règne toujours. La Suède n'a plus connu de guerre depuis 1814. Entre 1850 et 1930, environ 1,3 million de Suédois émigrent, surtout vers les États-Unis, fuyant la pauvreté et les famines.",
        "L'industrialisation (bois, fer, inventions comme la dynamite d'Alfred Nobel) transforme le pays. Le suffrage universel est adopté en 1921. Les sociaux-démocrates arrivent au pouvoir en 1932 et posent les bases de l'État-providence, le « foyer du peuple ». La Suède reste neutre pendant les deux guerres mondiales."
      ],
      consensus: [
        "La Suède n'a pas connu de guerre sur son sol depuis 1814.",
        "Une grande partie de la population a émigré vers l'Amérique au XIXe siècle.",
        "Les sociaux-démocrates ont gouverné presque sans interruption de 1932 à 1976."
      ],
      debats: [
        {
          question: "La neutralité suédoise pendant la Seconde Guerre mondiale était-elle vraiment neutre ?",
          positions: [
            { titre: "Une neutralité de survie", texte: "Entourée par l'Allemagne et l'URSS, la Suède a préservé son indépendance et accueilli des réfugiés, notamment les Juifs du Danemark en 1943.", qui: "Récit officiel" },
            { titre: "Une complaisance", texte: "La Suède a vendu son fer à l'Allemagne nazie et laissé passer des troupes allemandes sur son territoire en 1940 et 1941.", qui: "Historiens critiques" }
          ],
          etat: "Les historiens décrivent une neutralité pragmatique, favorable à l'Allemagne jusqu'en 1943, puis aux Alliés."
        }
      ],
      moinsConnu: "De 1934 à 1976, environ 63 000 personnes, en majorité des femmes, ont été stérilisées en Suède dans le cadre de politiques eugénistes, souvent sans véritable consentement. L'État a indemnisé les victimes en 1999.",
      evenements: [
        { annee: 1818, titre: "Bernadotte devient roi sous le nom de Charles XIV Jean", lieu: [59.33, 18.07] },
        { annee: 1867, titre: "Grande famine et pic d'émigration", lieu: [63.8, 20.3] },
        { annee: 1901, titre: "Premiers prix Nobel", lieu: [59.33, 18.07] },
        { annee: 1921, titre: "Suffrage universel", lieu: [59.33, 18.07] },
        { annee: 1943, titre: "Accueil des Juifs danois", lieu: [55.6, 13.0] }
      ]
    },
    {
      titre: 'La Suède contemporaine',
      debut: 1945, fin: 2026,
      chapo: "Un État-providence célèbre, une société d'immigration, et une neutralité abandonnée en 2024 avec l'entrée dans l'OTAN.",
      recit: [
        "L'après-guerre est l'âge d'or du « modèle suédois » : plein emploi, protection sociale, égalité entre femmes et hommes. Olof Palme incarne une Suède engagée contre la guerre du Vietnam et l'apartheid ; il est assassiné en 1986. La Suède entre dans l'Union européenne en 1995.",
        "Le pays accueille de nombreux réfugiés, notamment en 2015. Les Démocrates de Suède, parti d'extrême droite, progressent et soutiennent le gouvernement de droite à partir de 2022. Après l'invasion russe de l'Ukraine, la Suède abandonne deux siècles de neutralité et rejoint l'OTAN en 2024. En septembre 2026, le bloc de centre gauche de Magdalena Andersson remporte de justesse les élections."
      ],
      consensus: [
        "La Suède est l'un des pays les plus égalitaires du monde.",
        "L'assassinat d'Olof Palme (1986) est resté longtemps non élucidé.",
        "La Suède a rejoint l'OTAN en mars 2024."
      ],
      debats: [
        {
          question: "Le modèle suédois est-il en déclin ?",
          positions: [
            { titre: "Un modèle qui résiste", texte: "La Suède reste l'un des pays les plus riches, innovants et égalitaires du monde.", qui: "" },
            { titre: "Un modèle fragilisé", texte: "Privatisations, hausse des inégalités, ségrégation urbaine et violences liées aux gangs remettent en cause l'image du « foyer du peuple ».", qui: "Débat politique suédois" }
          ],
          etat: "Les chercheurs constatent une hausse des inégalités depuis les années 1990, à partir d'un niveau très bas. Le débat est au cœur des élections."
        }
      ],
      moinsConnu: "Les Samis, peuple autochtone du nord de la Scandinavie, ont subi des politiques d'assimilation, de déplacements forcés et même d'études raciales en Suède. Une commission de vérité a été lancée en 2021.",
      evenements: [
        { annee: 1986, titre: "Assassinat d'Olof Palme", lieu: [59.336, 18.06] },
        { annee: 1995, titre: "Entrée dans l'Union européenne", lieu: [59.33, 18.07] },
        { annee: 2015, titre: "Accueil de plus de 160 000 demandeurs d'asile", lieu: [55.6, 13.0] },
        { annee: 2024, titre: "Entrée dans l'OTAN", lieu: [59.33, 18.07] }
      ]
    }
  ]
});
