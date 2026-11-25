HISTOIRE.ajouterEmpire({
  id: 'byzance',
  nom: 'Empire byzantin',
  region: 'europe-sud',
  aire: "Balkans, Anatolie, Méditerranée orientale",
  debut: 395, fin: 1453,
  accroche: "La moitié orientale de l'Empire romain, qui a duré mille ans de plus que l'autre. Ses habitants se disaient Romains ; le mot « byzantin » a été inventé après sa chute.",
  intro: "Quand l'Occident romain disparaît, l'Orient continue autour de Constantinople. Cet empire grec et chrétien résiste aux Perses, aux Arabes, aux Bulgares et aux Turcs pendant un millénaire, grâce à ses murailles, sa diplomatie et son administration. Affaibli par la défaite de Manzikert puis par le sac de 1204 commis par des croisés chrétiens, il tombe sous les canons ottomans en 1453.",
  sources: "Michel Kaplan, Pourquoi Byzance ? ; Anthony Kaldellis, The New Roman Empire ; Judith Herrin, Byzance ; Jonathan Harris, The Lost World of Byzantium.",
  paysActuels: ['turquie', 'grece', 'bulgarie', 'serbie', 'italie', 'egypte', 'syrie'],
  phases: [
    {
      titre: "Justinien et le rêve de reconquête",
      debut: 395, fin: 641,
      chapo: "L'Orient survit à la chute de l'Occident. Justinien reconquiert l'Italie et l'Afrique, avant que la peste et les guerres ne ruinent ses efforts.",
      recit: [
        "Protégée par les murailles de Théodose, Constantinople devient la plus grande ville chrétienne. Justinien, qui règne de 527 à 565, fait rédiger le Code qui porte son nom, bâtit Sainte-Sophie et reconquiert l'Afrique, l'Italie et une partie de l'Espagne.",
        "La peste de 541 tue une part considérable de la population. Au début du VIIe siècle, une guerre épuisante contre les Perses se termine par la victoire d'Héraclius en 628, mais les armées arabes surgissent aussitôt et prennent la Syrie et l'Égypte après la bataille du Yarmouk en 636."
      ],
      consensus: [
        "Le Code de Justinien est à la base du droit de nombreux pays européens.",
        "La peste de Justinien fut une pandémie majeure.",
        "La guerre contre les Perses avait épuisé les deux empires avant l'arrivée des Arabes."
      ],
      debats: [
        {
          question: "Les reconquêtes de Justinien : grandeur ou erreur ?",
          positions: [
            { titre: "Une grande œuvre", texte: "Justinien a restauré l'idée d'un empire romain universel et laissé un héritage juridique et architectural immense.", qui: "Tradition byzantine, une partie des historiens" },
            { titre: "Une surextension coûteuse", texte: "Les guerres d'Italie ont duré vingt ans, ruiné la péninsule et vidé le trésor, laissant l'Orient vulnérable face aux Perses puis aux Arabes.", qui: "Procope dans son Histoire secrète, de nombreux historiens modernes" }
          ],
          etat: "Les historiens reconnaissent l'ampleur de l'œuvre de Justinien tout en soulignant le coût de ses guerres, aggravé par la peste."
        }
      ],
      moinsConnu: "Lors de la révolte Nika en 532, Justinien aurait envisagé de fuir. Selon l'historien Procope, c'est l'impératrice Théodora qui l'en dissuada, et la révolte fut écrasée dans le sang.",
      evenements: [
        { annee: 532, titre: "Révolte Nika", lieu: [41.01, 28.98] },
        { annee: 537, titre: "Consécration de Sainte-Sophie", lieu: [41.01, 28.98] },
        { annee: 541, titre: "Peste de Justinien", lieu: [41.01, 28.98] },
        { annee: 636, titre: "Défaite du Yarmouk face aux Arabes", lieu: [32.8, 35.95] }
      ],
      acteurs: [
        ["Justinien Ier", "vers 482-565", "Empereur de la reconquête"],
        ["Théodora", "vers 500-548", "Impératrice influente"],
        ["Bélisaire", "vers 500-565", "Général des reconquêtes"],
        ["Héraclius", "vers 575-641", "Vainqueur des Perses, vaincu par les Arabes"]
      ]
    },
    {
      titre: "Résister, puis rayonner",
      debut: 641, fin: 1071,
      chapo: "Réduit à l'Anatolie et aux Balkans, l'empire tient bon face aux sièges arabes, puis retrouve sa puissance sous la dynastie macédonienne.",
      recit: [
        "Constantinople repousse deux grands sièges arabes, en 674-678 et en 717-718, notamment grâce au feu grégeois. L'empire se déchire pendant plus d'un siècle autour du culte des images, la querelle iconoclaste.",
        "Sous les empereurs macédoniens, l'empire reprend la Crète, Antioche et la Bulgarie. Basile II, mort en 1025, laisse un empire puissant. En 1054, Rome et Constantinople s'excommunient. En 1071, l'empereur Romain IV est capturé par les Turcs seldjoukides à Manzikert."
      ],
      consensus: [
        "Les sièges arabes de Constantinople ont été des tournants pour l'Europe.",
        "Byzance a converti les Slaves et la Russie au christianisme orthodoxe.",
        "Basile II marque l'apogée médiéval de l'empire."
      ],
      debats: [
        {
          question: "Manzikert : désastre militaire ou désastre politique ?",
          positions: [
            { titre: "Une défaite décisive", texte: "La bataille a ouvert l'Anatolie aux Turcs et marque le début de la fin de l'empire.", qui: "Récit traditionnel" },
            { titre: "Les guerres civiles ont fait le reste", texte: "Les pertes de la bataille étaient limitées. Ce sont les luttes pour le trône qui ont suivi, avec des prétendants appelant les Turcs à l'aide, qui ont livré l'Anatolie.", qui: "John Haldon, Jonathan Harris" }
          ],
          etat: "Les historiens insistent aujourd'hui davantage sur les guerres civiles qui ont suivi que sur la bataille elle-même."
        }
      ],
      moinsConnu: "La garde varangienne, troupe d'élite des empereurs, était composée de Scandinaves, puis d'Anglo-Saxons après la conquête normande de l'Angleterre en 1066.",
      evenements: [
        { annee: 678, titre: "Échec du premier grand siège arabe", lieu: [41.01, 28.98] },
        { annee: 718, titre: "Échec du second siège arabe", lieu: [41.01, 28.98] },
        { annee: 988, titre: "Conversion de Vladimir de Kiev", lieu: [50.45, 30.52] },
        { annee: 1054, titre: "Schisme entre Rome et Constantinople", lieu: [41.01, 28.98] },
        { annee: 1071, titre: "Défaite de Manzikert", lieu: [39.14, 42.54] }
      ],
      acteurs: [
        ["Léon III l'Isaurien", "vers 685-741", "Défenseur de Constantinople en 718"],
        ["Irène", "vers 752-803", "Première femme à régner seule"],
        ["Basile II", "958-1025", "Empereur de l'apogée médiéval"],
        ["Romain IV Diogène", "mort en 1072", "Empereur capturé à Manzikert"]
      ]
    },
    {
      titre: "Le sac de 1204 et la chute de 1453",
      debut: 1071, fin: 1453,
      chapo: "Les Comnènes redressent l'empire, mais la quatrième croisade s'empare de Constantinople en 1204. Restauré, l'empire n'est plus qu'une ombre face aux Ottomans.",
      recit: [
        "Alexis Ier Comnène appelle l'Occident à l'aide, ce qui déclenche les croisades, et accorde à Venise des privilèges commerciaux qui ruinent peu à peu les marchands byzantins. En 1204, les croisés de la quatrième croisade, détournés par Venise, pillent Constantinople et fondent un empire latin.",
        "Les Byzantins reprennent la ville en 1261, mais l'empire est réduit et divisé. Les Ottomans conquièrent l'Anatolie puis les Balkans. Le 29 mai 1453, après un siège de près de deux mois, Mehmed II prend Constantinople. Le dernier empereur, Constantin XI, meurt au combat."
      ],
      consensus: [
        "Le sac de 1204 a été commis par des croisés chrétiens.",
        "Venise a tiré un immense profit de la quatrième croisade.",
        "L'artillerie ottomane a joué un rôle important en 1453."
      ],
      debats: [
        {
          question: "Quelle est la vraie date de la fin de l'empire ?",
          positions: [
            { titre: "1453", texte: "Tant que Constantinople et un empereur romain existaient, l'empire continuait. La prise de la ville par Mehmed II est la fin officielle.", qui: "Récit classique" },
            { titre: "1204", texte: "Après le sac des croisés, l'empire ne s'est jamais relevé : la restauration de 1261 n'était qu'un petit État parmi d'autres.", qui: "Une partie des byzantinistes" }
          ],
          etat: "La date de 1453 reste la référence, mais beaucoup d'historiens voient 1204 comme le coup fatal."
        },
        {
          question: "La « décadence byzantine » : réalité ou cliché ?",
          positions: [
            { titre: "Une décadence", texte: "Intrigues de cour, querelles théologiques, empereurs aveuglés : les auteurs des Lumières ont vu Byzance comme le modèle de l'État qui se survit.", qui: "Voltaire, Gibbon, Montesquieu" },
            { titre: "Une résilience exceptionnelle", texte: "Un État qui dure mille ans, résiste à tant d'ennemis et se relève plusieurs fois ne peut pas être appelé décadent.", qui: "Anthony Kaldellis, Judith Herrin, Michel Kaplan" }
          ],
          etat: "L'image d'une Byzance décadente est rejetée par les historiens actuels."
        }
      ],
      moinsConnu: "Le fondeur de canons hongrois Urbain aurait d'abord offert ses services à Constantin XI, qui n'avait pas les moyens de le payer. Il partit chez Mehmed II et fondit pour lui les énormes canons du siège.",
      evenements: [
        { annee: 1082, titre: "Privilèges commerciaux accordés à Venise", lieu: [45.44, 12.33] },
        { annee: 1204, titre: "Sac de Constantinople par la quatrième croisade", lieu: [41.01, 28.98] },
        { annee: 1261, titre: "Reprise de Constantinople", lieu: [41.01, 28.98] },
        { annee: 1453, titre: "Prise de Constantinople par Mehmed II", lieu: [41.01, 28.98] }
      ],
      acteurs: [
        ["Alexis Ier Comnène", "1057-1118", "Empereur qui appelle les croisés"],
        ["Anne Comnène", "1083-vers 1153", "Princesse historienne"],
        ["Enrico Dandolo", "vers 1107-1205", "Doge de Venise de la quatrième croisade"],
        ["Constantin XI", "1405-1453", "Dernier empereur"],
        ["Mehmed II", "1432-1481", "Sultan conquérant de Constantinople"]
      ]
    }
  ],
  lecons: [
    {
      titre: "La diplomatie et l'argent avant l'épée",
      texte: "Byzance a souvent préféré acheter la paix, diviser ses ennemis et marier ses princesses plutôt que combattre. Cette prudence lui a permis de survivre à des adversaires plus puissants.",
      objection: "Payer des tributs et dépendre d'alliés intéressés, comme Venise, a aussi créé une dépendance qui s'est retournée contre l'empire."
    },
    {
      titre: "Les alliés d'un jour peuvent devenir les prédateurs",
      texte: "En appelant les Occidentaux à l'aide contre les Turcs et en confiant son commerce à Venise, l'empire a fait entrer chez lui ceux qui l'ont pillé en 1204.",
      objection: "L'empire avait peu d'alternatives face à la menace turque, et le détournement de 1204 tient aussi à des hasards : dettes des croisés, querelles dynastiques byzantines."
    },
    {
      titre: "Les murailles ne suffisent pas",
      texte: "Les murs de Théodose avaient repoussé tous les assauts pendant mille ans. En 1453, les canons et l'immense supériorité numérique des Ottomans les ont rendus insuffisants.",
      objection: "La ville est surtout tombée parce qu'elle était isolée, dépeuplée et sans armée de secours : les murailles n'étaient que la dernière ligne d'un empire déjà réduit à sa capitale."
    }
  ]
});
