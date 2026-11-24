HISTOIRE.ajouterPays({
  id: 'algerie',
  nom: 'Algérie',
  region: 'afrique-nord',
  accroche: "Terre numide et romaine, patrie de saint Augustin, régence ottomane, colonie française pendant 132 ans, puis pays d'une guerre d'indépendance qui pèse encore sur les mémoires des deux rives.",
  intro: "L'Algérie est le plus grand pays d'Afrique. Son histoire moderne est dominée par la colonisation française, qui a duré de 1830 à 1962, et par une guerre d'indépendance très violente. Après l'indépendance, le pays a connu un régime de parti unique, une guerre civile dans les années 1990 et le grand mouvement du Hirak en 2019.",
  sources: "Benjamin Stora, Histoire de l'Algérie coloniale ; Charles-Robert Ageron, Histoire de l'Algérie contemporaine ; Mohammed Harbi, Le FLN, mirage et réalité ; Raphaëlle Branche, La Torture et l'armée.",
  phases: [
    {
      titre: 'Numidie romaine et chrétienne',
      debut: 1, fin: 647,
      chapo: "L'ancienne Numidie devient une riche province romaine, couverte de villes. Le christianisme y fleurit avec saint Augustin, avant l'arrivée des Vandales et des Byzantins.",
      recit: [
        "Après la défaite du roi Juba Ier en 46 av. J.-C., la Numidie est intégrée à l'Afrique romaine. Des villes comme Timgad, Djemila ou Tipasa se développent. En 17, le chef numide Tacfarinas lance une révolte de sept ans contre Rome.",
        "Augustin, né à Thagaste (Souk Ahras) en 354, devient évêque d'Hippone (Annaba) et l'un des plus grands penseurs chrétiens. Les Vandales assiègent Hippone en 430, l'année de sa mort. Les Byzantins reprennent la région en 533."
      ],
      consensus: [
        "Saint Augustin est né et a vécu dans l'actuelle Algérie.",
        "L'Afrique romaine était l'une des provinces les plus riches et urbanisées de l'empire.",
        "Le donatisme a divisé profondément l'Église d'Afrique du Nord."
      ],
      debats: [
        {
          question: "Augustin : Africain, Romain ou Berbère ?",
          positions: [
            { titre: "Un Romain d'Afrique", texte: "Augustin pensait et écrivait en latin et se considérait comme romain.", qui: "Historiographie classique" },
            { titre: "Un Amazigh", texte: "Sa mère, Monique, portait un nom d'origine berbère ; Augustin est revendiqué comme une figure du patrimoine algérien et amazigh.", qui: "Colloque d'Alger (2001), mouvement amazigh" }
          ],
          etat: "Les historiens rappellent que ces catégories ne s'excluaient pas : Augustin était un Africain romanisé, d'origine probablement en partie berbère."
        }
      ],
      moinsConnu: "Le mouvement donatiste, très puissant en Numidie, refusait de réintégrer les chrétiens ayant cédé pendant les persécutions. Ses partisans les plus radicaux, les circoncellions, s'attaquaient aux grands propriétaires.",
      evenements: [
        { annee: 17, titre: "Révolte de Tacfarinas", lieu: [35.5, 6.5] },
        { annee: 100, titre: "Fondation de Timgad", lieu: [35.48, 6.47] },
        { annee: 396, titre: "Augustin évêque d'Hippone", lieu: [36.88, 7.75] },
        { annee: 430, titre: "Siège d'Hippone par les Vandales", lieu: [36.88, 7.75] }
      ]
    },
    {
      titre: 'Islamisation et dynasties berbères',
      debut: 647, fin: 1516,
      chapo: "Les Arabes conquièrent le Maghreb malgré la résistance de la Kahina. Des dynasties berbères se succèdent, des Rostémides aux Zianides de Tlemcen.",
      recit: [
        "Les armées arabes entrent au Maghreb à partir de 647. La reine amazighe Dihya, dite la Kahina, leur résiste avant d'être tuée vers 701. L'islam s'impose progressivement. Les Rostémides, kharidjites, fondent un État autour de Tahert au VIIIe siècle.",
        "Les Fatimides partent de Kabylie pour conquérir l'Égypte au Xe siècle. Les Hammadides fondent Béjaïa, grand centre intellectuel où le mathématicien Fibonacci aurait appris les chiffres arabes. Les Zianides règnent à Tlemcen de 1235 au XVIe siècle."
      ],
      consensus: [
        "La reine Dihya (la Kahina) a mené la résistance amazighe à la conquête arabe.",
        "La conquête fatimide de l'Égypte a été menée par des troupes kabyles Kutama.",
        "Tlemcen et Béjaïa étaient de grands centres commerciaux et intellectuels."
      ],
      debats: [
        {
          question: "Qui était la Kahina ?",
          positions: [
            { titre: "Une reine juive", texte: "Certaines sources médiévales la disent de religion juive, ce qui a été repris par l'historiographie coloniale.", qui: "Ibn Khaldoun, historiens coloniaux" },
            { titre: "Une figure reconstruite", texte: "Les sources sont tardives et contradictoires ; sa religion est incertaine. Elle est devenue un symbole pour les nationalistes, les féministes et le mouvement amazigh.", qui: "Historiens actuels" }
          ],
          etat: "Son existence est admise, mais beaucoup de détails de sa vie relèvent de la légende et des usages politiques."
        }
      ],
      moinsConnu: "Le nom de la ville de Béjaïa, en français Bougie, est à l'origine du mot « bougie » : la ville exportait la cire servant à fabriquer les chandelles.",
      evenements: [
        { annee: 701, titre: "Mort de la Kahina", lieu: [35.4, 7.15] },
        { annee: 777, titre: "Royaume rostémide de Tahert", lieu: [35.37, 1.32] },
        { annee: 1067, titre: "Béjaïa capitale hammadide", lieu: [36.75, 5.08] },
        { annee: 1235, titre: "Royaume zianide de Tlemcen", lieu: [34.88, -1.32] }
      ]
    },
    {
      titre: 'La régence d\'Alger',
      debut: 1516, fin: 1830,
      chapo: "Les frères Barberousse placent Alger sous protection ottomane. La régence, enrichie par la course en Méditerranée, devient un État largement autonome.",
      recit: [
        "En 1516, le corsaire Aroudj Barberousse prend Alger ; son frère Khayr ad-Din la place sous la suzeraineté ottomane. La régence d'Alger est gouvernée par des pachas, puis par des deys élus par la milice des janissaires.",
        "La course en Méditerranée rapporte butin et captifs chrétiens, dont Cervantès (1575 à 1580). Au XVIIIe siècle, la régence signe des traités avec les puissances européennes. En 1827, le dey Hussein frappe le consul de France d'un coup d'éventail."
      ],
      consensus: [
        "Alger devient une régence ottomane au XVIe siècle, largement autonome au XVIIIe siècle.",
        "La course et l'esclavage des captifs chrétiens étaient une activité importante.",
        "L'« affaire de l'éventail » de 1827 a servi de prétexte à l'expédition française."
      ],
      debats: [
        {
          question: "La régence d'Alger : nid de pirates ou État ?",
          positions: [
            { titre: "Un repaire de pirates", texte: "La régence vivait du pillage et de l'esclavage des chrétiens, ce qui aurait justifié l'intervention européenne.", qui: "Historiographie coloniale" },
            { titre: "Un État à part entière", texte: "La régence avait une administration, une diplomatie et des traités avec les puissances européennes ; les puissances chrétiennes pratiquaient aussi la course et l'esclavage.", qui: "Historiens actuels, Lemnouar Merouche" }
          ],
          etat: "Les historiens décrivent un État ottoman original, dont la course était une activité parmi d'autres, en déclin au début du XIXe siècle."
        }
      ],
      moinsConnu: "La France avait une dette importante envers la régence pour des livraisons de blé faites à l'époque du Directoire. Ce contentieux est à l'origine de la crise de 1827.",
      evenements: [
        { annee: 1516, titre: "Aroudj Barberousse prend Alger", lieu: [36.78, 3.06] },
        { annee: 1541, titre: "Échec de l'expédition de Charles Quint", lieu: [36.75, 3.1] },
        { annee: 1575, titre: "Captivité de Cervantès à Alger", lieu: [36.78, 3.06] },
        { annee: 1827, titre: "Coup d'éventail du dey Hussein", lieu: [36.78, 3.06] }
      ]
    },
    {
      titre: "L'Algérie coloniale",
      debut: 1830, fin: 1954,
      chapo: "La France conquiert l'Algérie dans la violence, en fait trois départements français et y installe un million d'Européens, tandis que les « indigènes » restent privés de droits.",
      recit: [
        "Alger est prise le 5 juillet 1830. L'émir Abdelkader résiste jusqu'en 1847. La conquête est brutale : enfumades, razzias, famines. La révolte kabyle de 1871 est écrasée et des terres confisquées. Le décret Crémieux (1870) fait des juifs d'Algérie des citoyens français.",
        "Le code de l'indigénat soumet les musulmans à un régime d'exception. Les colons s'emparent des meilleures terres. Le mouvement national naît dans l'entre-deux-guerres avec Messali Hadj. Le 8 mai 1945, des manifestations à Sétif et Guelma sont suivies d'une répression qui fait des milliers de morts."
      ],
      consensus: [
        "La conquête de l'Algérie a été d'une grande violence.",
        "Les musulmans d'Algérie étaient soumis à un statut juridique inférieur.",
        "Les massacres de Sétif, Guelma et Kherrata en mai 1945 ont fait des milliers de victimes algériennes."
      ],
      debats: [
        {
          question: "Combien de morts à Sétif et Guelma en 1945 ?",
          positions: [
            { titre: "Environ 1 500", texte: "Le chiffre officiel français de l'époque.", qui: "Gouvernement français de 1945" },
            { titre: "45 000", texte: "Le chiffre retenu par l'État algérien.", qui: "Algérie" }
          ],
          etat: "La plupart des historiens estiment le bilan entre 15 000 et 20 000 morts, sans pouvoir le fixer précisément. Le bilan européen est d'environ 100 morts."
        }
      ],
      moinsConnu: "Lalla Fatma N'Soumer, femme de Kabylie, mena la résistance contre l'armée française jusqu'à sa capture en 1857.",
      evenements: [
        { annee: 1830, titre: "Prise d'Alger", lieu: [36.78, 3.06] },
        { annee: 1847, titre: "Reddition de l'émir Abdelkader", lieu: [35.0, -1.5] },
        { annee: 1871, titre: "Insurrection kabyle d'El Mokrani", lieu: [36.3, 4.7] },
        { annee: 1945, titre: "Massacres de Sétif, Guelma et Kherrata", lieu: [36.19, 5.41] }
      ]
    },
    {
      titre: "La guerre d'indépendance",
      debut: 1954, fin: 1962,
      chapo: "Le FLN déclenche l'insurrection le 1er novembre 1954. Huit ans de guerre, marqués par la torture, les attentats et les déplacements de population, mènent à l'indépendance.",
      recit: [
        "Le 1er novembre 1954, le FLN lance une série d'attaques. La France envoie jusqu'à 450 000 soldats. Pendant la bataille d'Alger (1957), l'armée pratique la torture à grande échelle. Deux millions de paysans sont regroupés dans des camps.",
        "Le FLN mène aussi des attentats et élimine ses rivaux du MNA. De Gaulle, revenu au pouvoir en 1958, s'oriente vers l'autodétermination. Les accords d'Évian sont signés le 18 mars 1962. L'OAS multiplie les attentats. L'indépendance est proclamée le 5 juillet 1962. Près d'un million de pieds-noirs partent pour la France ; des milliers de harkis sont massacrés."
      ],
      consensus: [
        "L'armée française a pratiqué la torture de manière systématique.",
        "La guerre a fait plusieurs centaines de milliers de morts algériens.",
        "Des milliers de harkis ont été tués après l'indépendance."
      ],
      debats: [
        {
          question: "Combien de morts pendant la guerre d'Algérie ?",
          positions: [
            { titre: "Un million et demi de martyrs", texte: "Le chiffre officiel algérien, au cœur de la mémoire nationale.", qui: "État algérien" },
            { titre: "Entre 250 000 et 400 000", texte: "Les estimations démographiques donnent un ordre de grandeur plus bas pour les morts algériens.", qui: "Charles-Robert Ageron, Guy Pervillé, démographes" }
          ],
          etat: "Les historiens retiennent généralement 300 000 à 400 000 morts algériens et environ 25 000 soldats français. Le rapport Stora (2021) a appelé à un travail de mémoire commun."
        }
      ],
      moinsConnu: "Le 17 octobre 1961, à Paris, la police réprime une manifestation pacifique d'Algériens : des dizaines, peut-être plus de cent personnes sont tuées, certaines jetées dans la Seine. L'événement a été longtemps passé sous silence.",
      evenements: [
        { annee: 1954, titre: "Toussaint rouge, début de l'insurrection", lieu: [35.5, 6.5] },
        { annee: 1957, titre: "Bataille d'Alger", lieu: [36.785, 3.06] },
        { annee: 1961, titre: "Massacre du 17 octobre à Paris", lieu: [48.85, 2.35] },
        { annee: 1962, titre: "Accords d'Évian et indépendance", lieu: [46.4, 6.59] }
      ]
    },
    {
      titre: "L'Algérie indépendante",
      debut: 1962, fin: 2026,
      chapo: "Un régime de parti unique dominé par l'armée, une guerre civile dans les années 1990, puis le Hirak de 2019 qui met fin à l'ère Bouteflika.",
      recit: [
        "Ahmed Ben Bella est renversé en 1965 par Houari Boumédiène, qui nationalise les hydrocarbures et mène une politique socialiste. Après les émeutes d'octobre 1988, le multipartisme est instauré. En 1992, l'armée annule les élections remportées par le Front islamique du salut.",
        "La « décennie noire » fait entre 100 000 et 200 000 morts. Abdelaziz Bouteflika, élu en 1999, fait voter la réconciliation nationale. En 2019, le Hirak, mouvement pacifique de millions de manifestants, empêche son cinquième mandat. Abdelmadjid Tebboune est élu en 2019 et réélu en 2024. Les relations avec la France traversent une crise grave depuis 2024."
      ],
      consensus: [
        "La guerre civile des années 1990 a fait entre 100 000 et 200 000 morts.",
        "Le Hirak de 2019 a été l'un des plus grands mouvements de protestation pacifique du monde arabe.",
        "L'armée reste au centre du pouvoir algérien depuis l'indépendance."
      ],
      debats: [
        {
          question: "Qui tuait qui pendant la décennie noire ?",
          positions: [
            { titre: "Les groupes islamistes", texte: "Les grands massacres de civils, comme Bentalha en 1997, ont été commis par le GIA.", qui: "État algérien, majorité des historiens" },
            { titre: "Des zones d'ombre", texte: "Des témoignages d'anciens militaires évoquent l'infiltration du GIA par les services de sécurité et la passivité de l'armée lors de certains massacres.", qui: "Habib Souaïdia, journalistes, certaines ONG" }
          ],
          etat: "La responsabilité principale des groupes armés islamistes est établie. La loi de réconciliation de 2005 a interdit toute enquête sur les agissements des forces de sécurité, laissant ces questions en suspens."
        }
      ],
      moinsConnu: "Yennayer, le Nouvel An amazigh, est devenu un jour férié en Algérie en 2018, après des décennies de revendications culturelles amazighes, notamment le « printemps berbère » de 1980.",
      evenements: [
        { annee: 1965, titre: "Coup d'État de Boumédiène", lieu: [36.78, 3.06] },
        { annee: 1980, titre: "Printemps berbère", lieu: [36.71, 4.05] },
        { annee: 1992, titre: "Annulation des élections, début de la décennie noire", lieu: [36.78, 3.06] },
        { annee: 1997, titre: "Massacre de Bentalha", lieu: [36.65, 3.1] },
        { annee: 2019, titre: "Hirak et départ de Bouteflika", lieu: [36.77, 3.06] }
      ]
    }
  ]
});
