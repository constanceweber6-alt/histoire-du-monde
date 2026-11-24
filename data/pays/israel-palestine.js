HISTOIRE.ajouterPays({
  id: 'israel-palestine',
  nom: 'Israël et Palestine',
  region: 'asie-ouest',
  accroche: "Une petite terre au cœur de trois religions, conquise de nombreuses fois, où deux peuples revendiquent aujourd'hui le même territoire.",
  intro: "Ce territoire, entre la Méditerranée et le Jourdain, porte plusieurs noms selon les époques et les récits : Judée, Palestine, Terre sainte, Israël. Il est traité ici comme un seul espace, car son histoire est commune avant d'être disputée. Peu d'histoires sont autant chargées politiquement : chaque étape est racontée différemment par les uns et les autres.",
  sources: "Vincent Lemire (dir.), Histoire de Jérusalem ; Henry Laurens, La Question de Palestine ; Benny Morris, 1948 ; Rashid Khalidi, The Hundred Years' War on Palestine ; Anita Shapira, Israël.",
  phases: [
    {
      titre: 'La Judée romaine',
      debut: 1, fin: 135,
      chapo: "La Judée est sous domination romaine. Deux grandes révoltes juives aboutissent à la destruction du Temple et à l'expulsion des Juifs de Jérusalem.",
      recit: [
        "En l'an 1, Hérode le Grand vient de mourir. Ses fils se partagent le royaume sous tutelle romaine, puis la Judée devient une province administrée par des préfets, comme Ponce Pilate. C'est dans ce contexte que vit et meurt Jésus de Nazareth.",
        "En 66, une grande révolte juive éclate. En 70, les légions de Titus prennent Jérusalem et détruisent le Second Temple. Le siège de Massada se termine en 73 ou 74. En 132, la révolte de Bar Kokhba est écrasée en 135 : les Juifs sont interdits de séjour à Jérusalem, rebaptisée Aelia Capitolina, et la province prend le nom de Syria Palaestina."
      ],
      consensus: [
        "Le Second Temple de Jérusalem a été détruit par les Romains en 70.",
        "Après la révolte de Bar Kokhba, Rome renomme la province « Syria Palaestina ».",
        "Le christianisme naît dans le judaïsme de Judée et de Galilée au Ier siècle."
      ],
      debats: [
        {
          question: "Pourquoi Rome a-t-elle donné le nom de « Palestine » à la province ?",
          positions: [
            { titre: "Pour effacer la Judée", texte: "Hadrien aurait choisi ce nom, tiré des Philistins, pour rompre le lien entre le peuple juif et sa terre après la révolte.", qui: "Lecture répandue, surtout en Israël" },
            { titre: "Un nom déjà en usage", texte: "Le terme « Palestine » était utilisé par les auteurs grecs depuis Hérodote pour désigner la région. Le changement de nom suivait aussi une logique administrative.", qui: "Historiens de l'Antiquité" }
          ],
          etat: "Les historiens admettent que le changement de nom a une portée punitive probable, tout en rappelant que le mot était ancien. Le débat est aujourd'hui fortement politisé."
        }
      ],
      moinsConnu: "Après 135, le centre de la vie juive se déplace en Galilée, où est rédigée la Mishna vers 200, puis en Mésopotamie. Le judaïsme rabbinique, centré sur l'étude plutôt que sur le Temple, naît de cette catastrophe.",
      evenements: [
        { annee: 30, titre: "Crucifixion de Jésus à Jérusalem (date approximative)", lieu: [31.78, 35.23] },
        { annee: 70, titre: "Destruction du Second Temple", lieu: [31.777, 35.235] },
        { annee: 73, titre: "Chute de Massada", lieu: [31.31, 35.35] },
        { annee: 135, titre: "Écrasement de la révolte de Bar Kokhba", lieu: [31.73, 35.13] }
      ]
    },
    {
      titre: 'Terre sainte byzantine et islamique',
      debut: 135, fin: 1099,
      chapo: "La Palestine devient une terre sainte chrétienne sous Byzance, puis une province du monde musulman, où Jérusalem est la troisième ville sainte de l'islam.",
      recit: [
        "Au IVe siècle, Constantin et sa mère Hélène font construire le Saint-Sépulcre. La région se couvre d'églises et de monastères, et devient majoritairement chrétienne. Les communautés juives restent présentes, surtout en Galilée, où est achevé le Talmud de Jérusalem.",
        "En 638, le calife Omar entre à Jérusalem. Les Omeyyades construisent le Dôme du Rocher (691) et la mosquée al-Aqsa sur l'esplanade du Temple. Pendant plusieurs siècles, la population s'arabise et s'islamise progressivement, tandis que chrétiens et juifs conservent leurs communautés."
      ],
      consensus: [
        "La région a été majoritairement chrétienne à l'époque byzantine.",
        "Le Dôme du Rocher, achevé en 691, est l'un des plus anciens monuments de l'islam.",
        "L'arabisation et l'islamisation de la population ont été progressives, sur plusieurs siècles."
      ],
      debats: [
        {
          question: "Qui sont les ancêtres des Palestiniens d'aujourd'hui ?",
          positions: [
            { titre: "Des descendants d'Arabes venus avec la conquête", texte: "La population arabe actuelle descendrait surtout de migrants arrivés avec les conquêtes et aux époques ultérieures.", qui: "Certains récits israéliens" },
            { titre: "Une population locale continue", texte: "La majorité de la population locale, juive puis chrétienne, se serait convertie et arabisée sur place au fil des siècles, avec des apports extérieurs.", qui: "Nombreux historiens, études génétiques" }
          ],
          etat: "Les historiens et généticiens soulignent une forte continuité de peuplement local, mêlée d'apports multiples. Juifs et Palestiniens partagent d'ailleurs une partie de leur ascendance génétique ancienne."
        }
      ],
      moinsConnu: "Lors de la conquête perse de 614, Jérusalem est prise et une partie de la population chrétienne massacrée. Les communautés juives, qui avaient soutenu les Perses, sont ensuite durement réprimées par les Byzantins revenus en 629.",
      evenements: [
        { annee: 335, titre: "Consécration du Saint-Sépulcre", lieu: [31.778, 35.23] },
        { annee: 614, titre: "Prise de Jérusalem par les Perses", lieu: [31.78, 35.23] },
        { annee: 638, titre: "Le calife Omar à Jérusalem", lieu: [31.78, 35.23] },
        { annee: 691, titre: "Achèvement du Dôme du Rocher", lieu: [31.778, 35.235] }
      ]
    },
    {
      titre: 'Croisades et Mamelouks',
      debut: 1099, fin: 1517,
      chapo: "Les croisés fondent le royaume latin de Jérusalem. Saladin le reprend en grande partie, puis les Mamelouks d'Égypte chassent les derniers croisés.",
      recit: [
        "En 1099, la première croisade prend Jérusalem et massacre une grande partie de ses habitants musulmans et juifs. Le royaume latin de Jérusalem dure près d'un siècle. En 1187, Saladin bat les croisés à Hattin et reprend Jérusalem.",
        "Les croisés gardent des villes côtières, comme Acre, jusqu'en 1291, quand les Mamelouks d'Égypte s'en emparent. Sous les Mamelouks, Jérusalem devient une ville de pèlerinage et d'études religieuses musulmanes, avec de nombreuses madrasas."
      ],
      consensus: [
        "La prise de Jérusalem en 1099 s'est accompagnée de massacres.",
        "Saladin reprend Jérusalem en 1187 sans massacre généralisé.",
        "La chute d'Acre en 1291 met fin à la présence croisée en Terre sainte."
      ],
      debats: [
        {
          question: "Les croisades : guerres saintes ou colonisation ?",
          positions: [
            { titre: "Une guerre de défense", texte: "Les croisades auraient été une réponse à l'expansion musulmane et aux appels à l'aide de Byzance.", qui: "Jonathan Riley-Smith, Thomas Madden" },
            { titre: "Une première colonisation", texte: "Les croisades auraient été une entreprise de conquête et de peuplement européenne, précurseur du colonialisme moderne.", qui: "Lecture répandue dans le monde arabe" }
          ],
          etat: "Les historiens se méfient des deux lectures, qui projettent des catégories modernes sur le Moyen Âge. Les croisades sont aussi devenues une métaphore politique utilisée de tous côtés."
        }
      ],
      moinsConnu: "Pendant les croisades, les relations n'étaient pas que guerrières : trêves, commerce et échanges savants étaient fréquents. Le chroniqueur syrien Usama ibn Munqidh a laissé des mémoires où il décrit, avec ironie et parfois amitié, les Francs qu'il côtoyait.",
      evenements: [
        { annee: 1099, titre: "Prise de Jérusalem par les croisés", lieu: [31.78, 35.23] },
        { annee: 1187, titre: "Bataille de Hattin, Saladin reprend Jérusalem", lieu: [32.8, 35.45] },
        { annee: 1291, titre: "Chute d'Acre", lieu: [32.93, 35.08] }
      ]
    },
    {
      titre: 'Palestine ottomane et débuts du sionisme',
      debut: 1517, fin: 1917,
      chapo: "Pendant quatre siècles, la région fait partie de l'Empire ottoman. À la fin du XIXe siècle, le sionisme et le nationalisme arabe y font naître deux projets concurrents.",
      recit: [
        "Les Ottomans conquièrent la région en 1516 et 1517. Soliman le Magnifique fait reconstruire les murailles de Jérusalem, toujours visibles. La région est divisée en districts dépendant de Damas ou de Beyrouth. Au XVIIIe siècle, des pouvoirs locaux comme Zahir al-Umar en Galilée gagnent en autonomie.",
        "À partir de 1882, des immigrants juifs venus d'Europe de l'Est, fuyant les pogroms, fondent des colonies agricoles. En 1897, Theodor Herzl organise le premier congrès sioniste à Bâle. Vers 1914, la population compte environ 600 000 à 700 000 habitants, dont environ 85 000 Juifs. Un sentiment national arabe et palestinien se développe dans la presse et les élites urbaines."
      ],
      consensus: [
        "La population de la région était majoritairement arabe musulmane et chrétienne à la fin de la période ottomane.",
        "Une petite communauté juive ancienne y vivait, surtout dans les villes saintes, avant le sionisme.",
        "L'immigration sioniste commence dans les années 1880."
      ],
      debats: [
        {
          question: "Le sionisme : mouvement de libération ou projet colonial ?",
          positions: [
            { titre: "Une libération nationale", texte: "Le sionisme est le mouvement national d'un peuple persécuté qui revient sur la terre de ses ancêtres, où une présence juive n'a jamais cessé.", qui: "Récit sioniste et israélien" },
            { titre: "Un colonialisme de peuplement", texte: "Venus d'Europe, soutenus par une puissance impériale, les colons ont acquis des terres et cherché à remplacer la population locale.", qui: "Rashid Khalidi, Edward Said, études postcoloniales" },
            { titre: "Un phénomène hybride", texte: "Le sionisme combine des traits de mouvement national et de colonisation, sans métropole qui l'envoie : aucune catégorie seule ne suffit.", qui: "Anita Shapira, Derek Penslar" }
          ],
          etat: "Le débat est l'un des plus vifs de l'historiographie. De nombreux historiens retiennent un caractère hybride, mais la qualification reste au cœur des controverses politiques."
        }
      ],
      moinsConnu: "Le mot « Palestine » était utilisé par des Arabes de la région bien avant 1948 : un journal palestinien s'appelait « Filastin » dès 1911, à Jaffa. Il défendait déjà les paysans arabes face aux achats de terres.",
      evenements: [
        { annee: 1517, titre: "Conquête ottomane", lieu: [31.78, 35.23] },
        { annee: 1538, titre: "Murailles de Jérusalem par Soliman", lieu: [31.78, 35.23] },
        { annee: 1882, titre: "Première alya, colonie de Rishon LeZion", lieu: [31.96, 34.8] },
        { annee: 1909, titre: "Fondation de Tel-Aviv", lieu: [32.08, 34.78] },
        { annee: 1911, titre: "Journal Filastin à Jaffa", lieu: [32.05, 34.75] }
      ]
    },
    {
      titre: 'Mandat britannique et guerre de 1948',
      debut: 1917, fin: 1949,
      chapo: "Les Britanniques promettent un « foyer national juif ». Les tensions explosent, l'ONU propose un partage, et la guerre de 1948 crée Israël et provoque l'exode palestinien.",
      recit: [
        "En 1917, la déclaration Balfour promet un « foyer national pour le peuple juif » en Palestine, en préservant les droits des « communautés non juives ». Le mandat britannique commence en 1920. L'immigration juive augmente, surtout après 1933. La grande révolte arabe de 1936 à 1939 est réprimée.",
        "Après la Shoah, l'ONU vote en novembre 1947 un plan de partage, accepté par les dirigeants juifs et rejeté par les dirigeants arabes. La guerre civile puis la guerre avec les États arabes suivent la proclamation de l'État d'Israël le 14 mai 1948. Environ 700 000 Palestiniens fuient ou sont expulsés : c'est la Nakba (« catastrophe »). Des centaines de villages sont détruits."
      ],
      consensus: [
        "La déclaration Balfour (1917) promet un foyer national juif.",
        "Le plan de partage de l'ONU (1947) a été accepté par les dirigeants sionistes et rejeté par les dirigeants arabes.",
        "Environ 700 000 Palestiniens ont quitté leurs foyers en 1947 à 1949 et n'ont pas pu y revenir."
      ],
      debats: [
        {
          question: "L'exode de 1948 : fuite ou expulsion planifiée ?",
          positions: [
            { titre: "Une fuite dans la guerre", texte: "Les Palestiniens seraient partis à cause des combats, de la peur ou à l'appel des dirigeants arabes.", qui: "Récit israélien officiel des premières décennies" },
            { titre: "Une expulsion planifiée", texte: "Le plan Daleth et les ordres d'expulsion montrent une volonté organisée de vider le territoire de sa population arabe : un « nettoyage ethnique ».", qui: "Ilan Pappé, Walid Khalidi" },
            { titre: "Un produit de la guerre", texte: "Il n'y a pas eu de plan général d'expulsion, mais de nombreuses expulsions et massacres locaux, et une décision d'empêcher le retour.", qui: "Benny Morris" }
          ],
          etat: "L'ouverture des archives israéliennes a ruiné la thèse d'une fuite à l'appel des dirigeants arabes. Les historiens débattent du degré de planification, mais reconnaissent expulsions et massacres, comme à Deir Yassin."
        }
      ],
      moinsConnu: "Entre 1948 et le début des années 1950, environ 800 000 Juifs ont quitté ou été poussés à quitter les pays arabes et l'Iran, dont beaucoup sont arrivés en Israël. Cet exode est souvent oublié dans le récit de 1948.",
      evenements: [
        { annee: 1917, titre: "Déclaration Balfour et prise de Jérusalem par les Britanniques", lieu: [31.78, 35.23] },
        { annee: 1936, titre: "Grande révolte arabe", lieu: [32.22, 35.25] },
        { annee: 1947, titre: "Plan de partage de l'ONU" },
        { annee: 1948, titre: "Proclamation de l'État d'Israël et Nakba", lieu: [32.06, 34.77] },
        { annee: 1948, titre: "Massacre de Deir Yassin", lieu: [31.79, 35.18] }
      ]
    },
    {
      titre: 'Israël, guerres et occupation',
      debut: 1949, fin: 1993,
      chapo: "Israël se construit et accueille des immigrants du monde entier. La guerre de 1967 place la Cisjordanie et Gaza sous occupation israélienne.",
      recit: [
        "Israël accueille des centaines de milliers de rescapés de la Shoah et de Juifs des pays arabes. La Cisjordanie est annexée par la Jordanie, Gaza administrée par l'Égypte. En 1956, Israël participe à l'expédition de Suez. En 1964, l'Organisation de libération de la Palestine (OLP) est créée.",
        "En juin 1967, la guerre des Six Jours donne à Israël Jérusalem-Est, la Cisjordanie, Gaza, le Golan et le Sinaï. La colonisation des territoires occupés commence. La guerre de 1973 est suivie de la paix avec l'Égypte (1979), qui récupère le Sinaï. En 1987, la première Intifada, soulèvement palestinien, éclate dans les territoires occupés."
      ],
      consensus: [
        "Depuis 1967, la Cisjordanie et Gaza sont sous occupation israélienne au regard du droit international.",
        "Le traité de paix de 1979 avec l'Égypte est le premier entre Israël et un pays arabe.",
        "La colonisation de la Cisjordanie est jugée illégale par la grande majorité des États et par la Cour internationale de justice."
      ],
      debats: [
        {
          question: "La guerre de 1967 : guerre préventive ou guerre de conquête ?",
          positions: [
            { titre: "Une guerre défensive", texte: "Face au blocus du détroit de Tiran et à la concentration des troupes égyptiennes, Israël aurait frappé pour survivre.", qui: "Récit israélien" },
            { titre: "Une guerre d'opportunité", texte: "Israël savait que ses voisins n'étaient pas prêts à attaquer et en a profité pour conquérir de nouveaux territoires.", qui: "Historiens critiques, récit arabe" }
          ],
          etat: "Les historiens décrivent une escalade où la peur était réelle en Israël, mais où ses dirigeants savaient leur armée nettement supérieure. Le débat porte surtout sur l'intention de conquête."
        }
      ],
      moinsConnu: "Les citoyens arabes d'Israël, Palestiniens restés en 1948, ont vécu sous administration militaire jusqu'en 1966. Ils représentent aujourd'hui environ un cinquième de la population israélienne.",
      evenements: [
        { annee: 1956, titre: "Crise de Suez et massacre de Kafr Qasim", lieu: [32.11, 34.97] },
        { annee: 1964, titre: "Création de l'OLP", lieu: [31.78, 35.23] },
        { annee: 1967, titre: "Guerre des Six Jours", lieu: [31.78, 35.23] },
        { annee: 1973, titre: "Guerre du Kippour" },
        { annee: 1979, titre: "Paix avec l'Égypte" },
        { annee: 1987, titre: "Première Intifada", lieu: [31.52, 34.45] }
      ]
    },
    {
      titre: "D'Oslo à la guerre de Gaza",
      debut: 1993, fin: 2026,
      chapo: "Les accords d'Oslo font naître l'espoir d'une paix, puis échouent. L'attaque du Hamas le 7 octobre 2023 déclenche une guerre dévastatrice à Gaza.",
      recit: [
        "En 1993, Israël et l'OLP se reconnaissent mutuellement par les accords d'Oslo. L'Autorité palestinienne est créée. Mais le Premier ministre Yitzhak Rabin est assassiné par un extrémiste juif en 1995, les attentats suicides du Hamas et la colonisation se poursuivent. La seconde Intifada (2000 à 2005) fait des milliers de morts. Israël évacue Gaza en 2005 ; le Hamas en prend le contrôle en 2007, et le territoire est soumis à un blocus.",
        "Le 7 octobre 2023, le Hamas attaque le sud d'Israël, tue environ 1 200 personnes, en majorité des civils, et enlève 251 otages. Israël lance une guerre à Gaza qui fait des dizaines de milliers de morts, détruit la plus grande partie du territoire et provoque une crise humanitaire et une famine. Un cessez-le-feu entre en vigueur le 10 octobre 2025 ; en novembre 2026, il reste très fragile, avec des frappes et des morts presque quotidiens."
      ],
      consensus: [
        "L'attaque du 7 octobre 2023 est la plus meurtrière de l'histoire d'Israël.",
        "La guerre à Gaza a fait des dizaines de milliers de morts palestiniens, selon des chiffres du ministère de la Santé de Gaza jugés fiables par l'ONU.",
        "La grande majorité des bâtiments de Gaza ont été endommagés ou détruits."
      ],
      debats: [
        {
          question: "La guerre à Gaza est-elle un génocide ?",
          positions: [
            { titre: "Un génocide", texte: "L'ampleur des morts civiles, la destruction des conditions de vie, le blocage de l'aide et certaines déclarations de dirigeants israéliens révéleraient une intention génocidaire.", qui: "Commission d'enquête de l'ONU (2025), Amnesty International, plusieurs spécialistes du génocide" },
            { titre: "Une guerre contre le Hamas", texte: "Israël mènerait une guerre de défense après le 7 octobre contre un groupe qui se cache parmi les civils, sans intention de détruire le peuple palestinien.", qui: "Gouvernement israélien, gouvernement américain, certains juristes" }
          ],
          etat: "La Cour internationale de justice, saisie par l'Afrique du Sud, a ordonné des mesures conservatoires en 2024 ; l'affaire sur le fond n'est pas tranchée. La Cour pénale internationale a émis des mandats d'arrêt contre des dirigeants israéliens et du Hamas. La qualification reste juridiquement et politiquement débattue."
        },
        {
          question: "La solution à deux États est-elle encore possible ?",
          positions: [
            { titre: "La seule voie", texte: "Deux États vivant côte à côte restent la solution soutenue par l'ONU, l'Union européenne et de nombreux pays, dont plusieurs ont reconnu l'État de Palestine en 2025.", qui: "Communauté internationale" },
            { titre: "Une option dépassée", texte: "Avec plus de 700 000 colons en Cisjordanie et à Jérusalem-Est, la séparation serait devenue impossible. Certains plaident pour un seul État, d'autres pour d'autres formes.", qui: "Une partie des chercheurs et des militants" }
          ],
          etat: "La question est ouverte et dépend de choix politiques futurs. Le site présente ici les positions, sans trancher."
        }
      ],
      moinsConnu: "Des mouvements de paix israéliens et palestiniens existent depuis des décennies, comme le Parents Circle, qui réunit des familles endeuillées des deux côtés. Ils sont peu visibles dans les médias en temps de guerre.",
      evenements: [
        { annee: 1993, titre: "Accords d'Oslo" },
        { annee: 1995, titre: "Assassinat de Yitzhak Rabin", lieu: [32.08, 34.78] },
        { annee: 2000, titre: "Seconde Intifada", lieu: [31.78, 35.23] },
        { annee: 2007, titre: "Le Hamas prend le contrôle de Gaza, blocus", lieu: [31.52, 34.45] },
        { annee: 2023, titre: "Attaque du 7 octobre et début de la guerre de Gaza", lieu: [31.4, 34.4] },
        { annee: 2025, titre: "Cessez-le-feu du 10 octobre", lieu: [31.52, 34.45] }
      ]
    }
  ]
});
