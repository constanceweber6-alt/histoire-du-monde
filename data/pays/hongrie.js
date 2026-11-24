HISTOIRE.ajouterPays({
  id: 'hongrie',
  nom: 'Hongrie',
  region: 'europe-est',
  accroche: "Des cavaliers magyars devenus un royaume chrétien, coupé en trois par les Ottomans, partenaire de l'Autriche, amputé à Trianon, puis passé du communisme à la démocratie.",
  intro: "Les Hongrois parlent une langue sans parenté avec celles de leurs voisins, venue des steppes. Leur histoire est faite de grandeur médiévale, d'occupations successives et d'un traumatisme, le traité de Trianon de 1920, qui pèse encore sur la politique du pays.",
  sources: "Paul Lendvai, Les Hongrois ; Miklós Molnár, Histoire de la Hongrie ; István Deák, Europe on Trial.",
  phases: [
    {
      titre: 'Pannonie romaine et peuples des steppes',
      debut: 1, fin: 895,
      chapo: "La Pannonie est une province frontière de Rome sur le Danube, puis un territoire de passage pour les Huns, les Goths, les Lombards et les Avars.",
      recit: [
        "En l'an 1, Rome achève la conquête de la Pannonie, à l'ouest du Danube. Aquincum, sur le site de Budapest, devient une ville militaire importante. Le Danube forme le limes face aux Sarmates et aux Germains. L'empereur Marc Aurèle y combat et y écrit une partie de ses Pensées.",
        "Au Ve siècle, Attila installe le centre de l'empire hunnique dans la plaine. Les Lombards, puis les Avars à partir de 568, dominent le bassin des Carpates. Charlemagne détruit l'empire avar à la fin du VIIIe siècle."
      ],
      consensus: [
        "La Pannonie a été une province romaine pendant environ quatre siècles.",
        "Aquincum, sur le site de Budapest, était une ville romaine importante.",
        "Les Avars ont dominé le bassin des Carpates pendant plus de deux siècles."
      ],
      debats: [
        {
          question: "Les Hongrois descendent-ils des Huns ?",
          positions: [
            { titre: "Une parenté hunnique", texte: "Les chroniques médiévales hongroises font descendre les Magyars d'Attila, une tradition encore populaire en Hongrie.", qui: "Chroniques médiévales, tradition populaire" },
            { titre: "Des peuples distincts", texte: "Les Magyars parlent une langue ouralienne, apparentée au finnois et à l'estonien. Leur arrivée en 895 est séparée des Huns par plus de quatre siècles.", qui: "Linguistes et historiens" }
          ],
          etat: "Les linguistes rattachent le hongrois à la famille ouralienne. Les études génétiques récentes montrent toutefois des liens partiels entre élites magyares et populations des steppes."
        }
      ],
      moinsConnu: "Le futur empereur Septime Sévère était gouverneur de Pannonie supérieure quand ses légions le proclamèrent empereur en 193. La province a donné plusieurs empereurs à Rome.",
      evenements: [
        { annee: 9, titre: "Fin de la conquête de la Pannonie", lieu: [47.5, 19.04] },
        { annee: 106, titre: "Aquincum, capitale de la Pannonie inférieure", lieu: [47.56, 19.05] },
        { annee: 445, titre: "Attila règne depuis la plaine pannonienne", lieu: [47.0, 20.0] },
        { annee: 568, titre: "Arrivée des Avars", lieu: [47.0, 19.5] }
      ]
    },
    {
      titre: 'La conquête magyare',
      debut: 895, fin: 1000,
      chapo: "Les tribus magyares, guidées par Árpád, s'installent dans le bassin des Carpates et lancent des raids dans toute l'Europe.",
      recit: [
        "Vers 895, sept tribus magyares, venues des steppes au nord de la mer Noire, franchissent les Carpates : c'est la « conquête de la patrie ». Elles sont dirigées par le chef Árpád, fondateur de la dynastie.",
        "Pendant un demi-siècle, les cavaliers magyars lancent des raids jusqu'en Italie, en Allemagne et en France. Leur défaite face à Otton Ier au Lechfeld, en 955, met fin à ces expéditions. Le prince Géza se rapproche de la chrétienté latine."
      ],
      consensus: [
        "Les Magyars s'installent dans le bassin des Carpates vers 895.",
        "Leurs raids ont touché une grande partie de l'Europe occidentale au Xe siècle.",
        "La défaite du Lechfeld (955) marque la fin des raids."
      ],
      debats: [
        {
          "question": "La « conquête de la patrie » : arrivée sur une terre vide ou mélange de peuples ?",
          "positions": [
            {
              "titre": "Une terre conquise",
              "texte": "Le récit national présente l'arrivée d'Árpád comme la prise de possession d'un territoire destiné aux Hongrois.",
              "qui": "Récit national hongrois"
            },
            {
              "titre": "Un mélange de peuples",
              "texte": "Les Magyars se sont mêlés aux Slaves, aux Avars restants et à d'autres populations déjà présentes dans le bassin des Carpates.",
              "qui": "Archéologues et historiens"
            }
          ],
          "etat": "Les historiens insistent sur le mélange des populations. La question des origines reste très sensible politiquement en Hongrie."
        }
      ],
      moinsConnu: "Une partie des Magyars n'a pas suivi la migration vers l'ouest. Au XIIIe siècle, le moine hongrois Julien est parti à leur recherche et a retrouvé, près de la Volga, des hommes parlant encore sa langue, peu avant l'invasion mongole.",
      evenements: [
        { annee: 895, titre: "Conquête du bassin des Carpates", lieu: [48.4, 22.7] },
        { annee: 926, titre: "Raid magyar jusqu'à Saint-Gall", lieu: [47.42, 9.37] },
        { annee: 955, titre: "Défaite du Lechfeld", lieu: [48.3, 10.9] }
      ]
    },
    {
      titre: 'Le royaume de Hongrie',
      debut: 1000, fin: 1526,
      chapo: "Étienne Ier fonde un royaume chrétien qui devient l'une des grandes puissances de l'Europe centrale, jusqu'au désastre de Mohács.",
      recit: [
        "À Noël de l'an 1000, Étienne Ier est couronné roi avec une couronne envoyée par le pape. Il christianise le pays. Le royaume s'étend à la Croatie au XIe siècle. En 1241 et 1242, l'invasion mongole tue peut-être un quart de la population.",
        "Au XVe siècle, Jean Hunyadi arrête les Ottomans devant Belgrade (1456). Son fils Matthias Corvin, roi de 1458 à 1490, fait de Buda un centre de la Renaissance avec sa célèbre bibliothèque. En 1526, l'armée hongroise est écrasée par les Ottomans à Mohács ; le roi Louis II y meurt."
      ],
      consensus: [
        "Étienne Ier, couronné en 1000, est le fondateur du royaume chrétien de Hongrie.",
        "L'invasion mongole de 1241 a dévasté le pays.",
        "La bataille de Mohács (1526) marque la fin de la Hongrie médiévale indépendante."
      ],
      debats: [
        {
          question: "Mohács : catastrophe inévitable ou faute des élites ?",
          positions: [
            { titre: "Une faute des élites", texte: "Les querelles entre nobles et l'affaiblissement du pouvoir royal après Matthias Corvin auraient livré le pays aux Ottomans.", qui: "Historiographie hongroise classique" },
            { titre: "Un rapport de force écrasant", texte: "Face à l'Empire ottoman de Soliman, au sommet de sa puissance, la Hongrie seule ne pouvait pas gagner.", qui: "Historiens actuels" }
          ],
          etat: "Les historiens combinent les deux : divisions internes réelles, mais déséquilibre militaire décisif."
        }
      ],
      moinsConnu: "La Sainte Couronne de Hongrie, symbole de l'État, a été emportée aux États-Unis à la fin de la Seconde Guerre mondiale pour la soustraire aux Soviétiques. Elle n'a été rendue à la Hongrie qu'en 1978.",
      evenements: [
        { annee: 1000, titre: "Couronnement d'Étienne Ier", lieu: [47.79, 18.74] },
        { annee: 1241, titre: "Invasion mongole, bataille de Mohi", lieu: [47.95, 20.92] },
        { annee: 1456, titre: "Victoire de Hunyadi à Belgrade", lieu: [44.82, 20.46] },
        { annee: 1458, titre: "Règne de Matthias Corvin", lieu: [47.5, 19.03] },
        { annee: 1526, titre: "Défaite de Mohács", lieu: [45.99, 18.68] }
      ]
    },
    {
      titre: 'Partage ottoman et domination des Habsbourg',
      debut: 1526, fin: 1867,
      chapo: "Le pays est coupé en trois pendant un siècle et demi, puis intégré à l'empire des Habsbourg, contre lequel les Hongrois se soulèvent à plusieurs reprises.",
      recit: [
        "Après Mohács, la Hongrie est divisée : l'ouest et le nord aux Habsbourg, le centre aux Ottomans (Buda tombe en 1541), et la Transylvanie, principauté autonome vassale des Ottomans. Les Habsbourg reprennent Buda en 1686.",
        "Les révoltes de Rákóczi (1703 à 1711) échouent. En 1848, la révolution hongroise, menée par Lajos Kossuth et le poète Sándor Petőfi, proclame l'indépendance. Elle est écrasée en 1849 avec l'aide de l'armée russe. En 1867, le Compromis crée l'Autriche-Hongrie, une double monarchie où la Hongrie gagne une large autonomie."
      ],
      consensus: [
        "La Hongrie a été divisée en trois pendant près de 150 ans.",
        "La révolution de 1848 a été écrasée avec l'aide de la Russie.",
        "Le Compromis de 1867 crée la double monarchie austro-hongroise."
      ],
      debats: [
        {
          "question": "Le Compromis de 1867 : réussite ou piège ?",
          "positions": [
            {
              "titre": "Une réussite",
              "texte": "Le Compromis a donné à la Hongrie une large autonomie et un demi-siècle de croissance spectaculaire.",
              "qui": "Libéraux hongrois"
            },
            {
              "titre": "Un piège",
              "texte": "En liant la Hongrie à Vienne et en opprimant les minorités, le Compromis a préparé la catastrophe de 1918 et de Trianon.",
              "qui": "Historiens critiques, mémoire des minorités slaves et roumaines"
            }
          ],
          "etat": "Les historiens reconnaissent l'essor économique, mais aussi la responsabilité de la politique de magyarisation dans l'éclatement du royaume en 1920."
        }
      ],
      moinsConnu: "La Transylvanie a été au XVIe siècle l'un des premiers États d'Europe à garantir la liberté religieuse, par l'édit de Torda (1568), qui reconnaissait catholiques, luthériens, calvinistes et unitariens.",
      evenements: [
        { annee: 1541, titre: "Buda tombe aux mains des Ottomans", lieu: [47.5, 19.03] },
        { annee: 1568, titre: "Édit de Torda en Transylvanie", lieu: [46.57, 23.78] },
        { annee: 1686, titre: "Reprise de Buda par les Habsbourg", lieu: [47.5, 19.03] },
        { annee: 1848, titre: "Révolution hongroise", lieu: [47.49, 19.06] },
        { annee: 1867, titre: "Compromis austro-hongrois", lieu: [47.5, 19.04] }
      ]
    },
    {
      titre: 'Autriche-Hongrie, Trianon et guerre',
      debut: 1867, fin: 1945,
      chapo: "Budapest devient une métropole européenne. La défaite de 1918 et le traité de Trianon font perdre deux tiers du territoire. Le régime Horthy s'allie à l'Allemagne nazie.",
      recit: [
        "Buda et Pest fusionnent en 1873. La Hongrie connaît une forte croissance mais impose la magyarisation aux minorités slaves et roumaines. Après la défaite de 1918, une éphémère république des conseils communiste (1919) est suivie de la « terreur blanche ».",
        "Le traité de Trianon (1920) attribue environ deux tiers du territoire et un tiers des Hongrois aux pays voisins. Le régent Miklós Horthy gouverne de 1920 à 1944, adopte des lois antijuives et s'allie à l'Allemagne pour récupérer des territoires. En 1944, après l'occupation allemande, environ 437 000 Juifs hongrois sont déportés à Auschwitz en quelques semaines."
      ],
      consensus: [
        "Le traité de Trianon a fait perdre à la Hongrie environ deux tiers de son territoire.",
        "Environ 565 000 Juifs hongrois ont été tués pendant la Shoah.",
        "Les autorités et la gendarmerie hongroises ont organisé les déportations de 1944."
      ],
      debats: [
        {
          question: "Horthy : rempart contre le pire ou complice ?",
          positions: [
            { titre: "Un moindre mal", texte: "Horthy aurait protégé les Juifs de Budapest jusqu'en 1944 et arrêté les déportations en juillet 1944.", qui: "Une partie de la droite hongroise" },
            { titre: "Un responsable", texte: "Son régime a adopté des lois antijuives dès 1920 et ses autorités ont organisé la déportation de 437 000 personnes en moins de deux mois.", qui: "Historiens, Randolph Braham" }
          ],
          etat: "Les historiens reconnaissent qu'il a stoppé les déportations en juillet 1944, mais soulignent la responsabilité de son régime. Sa réhabilitation partielle sous Viktor Orbán a été très critiquée."
        }
      ],
      moinsConnu: "Raoul Wallenberg, diplomate suédois, a sauvé des dizaines de milliers de Juifs de Budapest en 1944 en leur délivrant des passeports protecteurs. Arrêté par les Soviétiques en 1945, il a disparu ; la Suède l'a déclaré mort en 2016.",
      evenements: [
        { annee: 1873, titre: "Fusion de Buda et Pest", lieu: [47.5, 19.04] },
        { annee: 1919, titre: "République des conseils", lieu: [47.5, 19.04] },
        { annee: 1920, titre: "Traité de Trianon", lieu: [48.81, 2.1] },
        { annee: 1944, titre: "Déportation des Juifs hongrois", lieu: [47.5, 19.04] }
      ]
    },
    {
      titre: 'Communisme, 1956 et démocratie',
      debut: 1945, fin: 2026,
      chapo: "Le régime communiste écrase l'insurrection de 1956. La Hongrie ouvre le rideau de fer en 1989, rejoint l'Europe, puis vit seize ans sous Viktor Orbán.",
      recit: [
        "Les communistes prennent le pouvoir en 1948-1949 sous la direction de Mátyás Rákosi. En octobre 1956, une insurrection populaire porte Imre Nagy au pouvoir et annonce la sortie du pacte de Varsovie. Les chars soviétiques l'écrasent : environ 2 500 morts et 200 000 exilés. Sous János Kádár, un « communisme du goulasch » plus souple s'installe.",
        "En 1989, la Hongrie ouvre sa frontière avec l'Autriche, précipitant la chute du rideau de fer. Elle entre dans l'OTAN (1999) et l'Union européenne (2004). Viktor Orbán, au pouvoir à partir de 2010, met en place une « démocratie illibérale ». Aux élections d'avril 2026, il est battu par le conservateur pro-européen Péter Magyar."
      ],
      consensus: [
        "L'insurrection de 1956 a été écrasée par l'armée soviétique.",
        "L'ouverture de la frontière austro-hongroise en 1989 a contribué à la chute du mur de Berlin.",
        "Viktor Orbán a gouverné la Hongrie de 2010 à 2026."
      ],
      debats: [
        {
          question: "La « démocratie illibérale » d'Orbán : défense de la nation ou recul de l'État de droit ?",
          positions: [
            { titre: "Une défense de la nation", texte: "Orbán aurait protégé la souveraineté, la famille chrétienne et les frontières face à Bruxelles et à l'immigration.", qui: "Fidesz et ses soutiens" },
            { titre: "Un recul démocratique", texte: "Contrôle des médias, de la justice et des universités, corruption : l'Union européenne a gelé des fonds pour violation de l'État de droit.", qui: "Commission européenne, Parlement européen, ONG" }
          ],
          etat: "Les institutions européennes ont jugé que l'État de droit s'était fortement dégradé. La défaite d'Orbán en 2026 ouvre une phase de transition dont l'issue reste à écrire."
        }
      ],
      moinsConnu: "Le 19 août 1989, un « pique-nique paneuropéen » à la frontière austro-hongroise près de Sopron permet à environ 600 Allemands de l'Est de passer à l'Ouest. C'est la première brèche dans le rideau de fer.",
      evenements: [
        { annee: 1956, titre: "Insurrection de Budapest", lieu: [47.5, 19.04] },
        { annee: 1989, titre: "Pique-nique paneuropéen, ouverture de la frontière", lieu: [47.74, 16.68] },
        { annee: 2004, titre: "Entrée dans l'Union européenne", lieu: [47.5, 19.04] },
        { annee: 2010, titre: "Retour de Viktor Orbán au pouvoir", lieu: [47.5, 19.04] },
        { annee: 2026, titre: "Défaite d'Orbán, Péter Magyar Premier ministre", lieu: [47.5, 19.04] }
      ]
    }
  ]
});
