HISTOIRE.ajouterEmpire({
  id: 'khmer',
  nom: 'Empire khmer d\'Angkor',
  region: 'asie-sud-est',
  aire: "Cambodge, Thaïlande, Laos et sud du Vietnam",
  debut: 802, fin: 1431,
  accroche: "Angkor Vat, le Bayon et une ville immense irriguée par des réservoirs géants. Un empire dont l'abandon progressif reste l'un des grands débats de l'archéologie.",
  intro: "En 802, Jayavarman II se proclame souverain universel sur le mont Kulen. Ses successeurs bâtissent autour d'Angkor l'une des plus grandes agglomérations préindustrielles du monde, avec des temples monumentaux et un réseau hydraulique colossal. L'empire domine une grande partie de l'Asie du Sud-Est continentale. À partir du XIIIe siècle, il s'affaiblit, et la cour quitte Angkor au XVe siècle pour la région de Phnom Penh.",
  sources: "Claude Jacques et Philippe Lafond, L'Empire khmer ; Michael Coe, Angkor and the Khmer Civilization ; Zhou Daguan, Mémoires sur les coutumes du Cambodge ; travaux de Damian Evans et Roland Fletcher.",
  paysActuels: ['cambodge', 'thailande', 'laos', 'vietnam'],
  phases: [
    {
      titre: "Le roi-dieu et la naissance d'Angkor",
      debut: 802, fin: 1113,
      chapo: "Jayavarman II unifie les principautés khmères. Ses successeurs installent la capitale à Angkor et creusent d'immenses réservoirs, les barays.",
      recit: [
        "Selon une inscription plus tardive, Jayavarman II se fait sacrer en 802 sur le mont Kulen comme souverain universel, indépendant de « Java ». Le culte royal associe le roi aux dieux hindous, surtout Shiva.",
        "Vers 900, Yasovarman Ier fonde Yasodharapura, la première ville d'Angkor, autour du temple du Phnom Bakheng. Les rois creusent les barays, réservoirs de plusieurs kilomètres, et l'empire s'étend vers la Thaïlande et le Laos actuels."
      ],
      consensus: [
        "L'an 802 est retenu comme date de fondation de l'empire.",
        "Les rois khmers légitimaient leur pouvoir par la religion hindoue puis bouddhique.",
        "Les barays sont parmi les plus grands ouvrages hydrauliques de leur temps."
      ],
      debats: [
        {
          question: "Angkor était-elle une « cité hydraulique » ?",
          positions: [
            { titre: "Une ville fondée sur l'irrigation", texte: "Les barays servaient à irriguer les rizières et permettaient plusieurs récoltes par an : le réseau hydraulique était la base de la puissance d'Angkor.", qui: "Bernard-Philippe Groslier, Roland Fletcher" },
            { titre: "Un rôle surtout symbolique", texte: "Les barays représentaient l'océan cosmique autour du mont Meru ; leur rôle dans l'irrigation aurait été limité.", qui: "W. J. van Liere, Robert Acker" }
          ],
          etat: "Les recherches récentes donnent raison à une fonction à la fois religieuse et pratique, avec une gestion de l'eau sophistiquée."
        }
      ],
      moinsConnu: "Les inscriptions khmères sont écrites en sanskrit pour les louanges royales, mais en vieux khmer pour les listes de serviteurs, de rizières et de biens offerts aux temples.",
      evenements: [
        { annee: 802, titre: "Sacre de Jayavarman II au mont Kulen", lieu: [13.57, 104.1] },
        { annee: 900, titre: "Fondation de Yasodharapura", lieu: [13.42, 103.86] },
        { annee: 1050, titre: "Creusement du baray occidental", lieu: [13.44, 103.8] }
      ],
      acteurs: [
        ["Jayavarman II", "vers 770-835", "Fondateur de l'empire"],
        ["Yasovarman Ier", "mort vers 910", "Fondateur de la première Angkor"],
        ["Suryavarman Ier", "mort en 1050", "Roi conquérant"]
      ]
    },
    {
      titre: "Angkor Vat et Jayavarman VII",
      debut: 1113, fin: 1220,
      chapo: "Suryavarman II construit Angkor Vat. Après le sac de la ville par les Chams en 1177, Jayavarman VII la reconstruit et porte l'empire à son apogée.",
      recit: [
        "Suryavarman II, qui règne à partir de 1113, fait bâtir Angkor Vat, le plus grand monument religieux du monde, dédié à Vishnou. En 1177, les Chams du centre du Vietnam pillent Angkor.",
        "Jayavarman VII les chasse et règne de 1181 à environ 1218. Bouddhiste, il fait construire Angkor Thom et le Bayon aux visages souriants, des routes, des gîtes d'étape et plus d'une centaine d'hôpitaux selon ses inscriptions. L'empire atteint alors sa plus grande extension."
      ],
      consensus: [
        "Angkor Vat date de la première moitié du XIIe siècle.",
        "Jayavarman VII est le plus grand bâtisseur de l'histoire khmère.",
        "Son règne marque un tournant vers le bouddhisme."
      ],
      debats: [
        {
          question: "Jayavarman VII : roi bienfaiteur ou bâtisseur épuisant ?",
          positions: [
            { titre: "Un roi bienfaiteur", texte: "Hôpitaux, routes, gîtes : ses inscriptions le montrent soucieux de ses sujets. Il est le héros national du Cambodge moderne.", qui: "Tradition cambodgienne, une partie des historiens" },
            { titre: "Un programme écrasant", texte: "Ses chantiers démesurés ont mobilisé une main-d'œuvre et des ressources énormes, peut-être au point d'épuiser le royaume après lui.", qui: "Historiens plus critiques" }
          ],
          etat: "Les deux lectures coexistent ; ses inscriptions sont des textes de propagande royale à lire avec prudence."
        }
      ],
      moinsConnu: "Les bas-reliefs du Bayon montrent la vie quotidienne : marchés, combats de coqs, cuisine, accouchements, et la bataille navale contre les Chams sur le Tonlé Sap.",
      evenements: [
        { annee: 1113, titre: "Avènement de Suryavarman II", lieu: [13.41, 103.87] },
        { annee: 1150, titre: "Achèvement d'Angkor Vat", lieu: [13.41, 103.87] },
        { annee: 1177, titre: "Sac d'Angkor par les Chams", lieu: [13.43, 103.86] },
        { annee: 1181, titre: "Avènement de Jayavarman VII", lieu: [13.44, 103.86] }
      ],
      acteurs: [
        ["Suryavarman II", "mort vers 1150", "Bâtisseur d'Angkor Vat"],
        ["Jayavarman VII", "vers 1122-1218", "Roi bâtisseur et bouddhiste"],
        ["Indradevi", "XIIe siècle", "Reine lettrée, auteure d'inscriptions"]
      ]
    },
    {
      titre: "Le lent déclin et le départ d'Angkor",
      debut: 1220, fin: 1431,
      chapo: "Le bouddhisme theravada se diffuse, les voisins thaïs s'émancipent, et les grands chantiers cessent. Ayutthaya prend Angkor en 1431.",
      recit: [
        "Après Jayavarman VII, presque plus aucun grand temple n'est construit. Le bouddhisme theravada, une forme plus sobre, se diffuse dans la population. En 1296-1297, le diplomate chinois Zhou Daguan décrit encore une ville riche et peuplée.",
        "Les royaumes thaïs, Sukhothaï puis Ayutthaya fondé en 1351, s'émancipent et attaquent l'empire. En 1431, Ayutthaya prend Angkor. La cour s'installe ensuite plus au sud, près de Phnom Penh, mieux placée pour le commerce fluvial et maritime."
      ],
      consensus: [
        "Le déclin d'Angkor a été progressif, pas brutal.",
        "Angkor Vat n'a jamais été totalement abandonné et est resté un lieu de pèlerinage.",
        "Le centre politique khmer s'est déplacé vers le sud au XVe siècle."
      ],
      debats: [
        {
          question: "Pourquoi Angkor a-t-elle été délaissée ?",
          positions: [
            { titre: "Les invasions siamoises", texte: "Les attaques répétées d'Ayutthaya ont rendu la capitale intenable.", qui: "Chroniques, récit traditionnel" },
            { titre: "Le climat et l'eau", texte: "Des sécheresses prolongées suivies de moussons violentes, visibles dans les cernes des arbres, ont endommagé un réseau hydraulique devenu trop complexe à entretenir.", qui: "Brendan Buckley, Dan Penny, Roland Fletcher" },
            { titre: "Un choix économique", texte: "Le commerce maritime avec la Chine attirait vers le sud, sur le Mékong. Les élites ont suivi les richesses.", qui: "Miriam Stark, historiens du commerce" }
          ],
          etat: "Les chercheurs privilégient aujourd'hui une combinaison de ces causes sur plus d'un siècle."
        }
      ],
      moinsConnu: "Des relevés au laser aéroporté, menés en 2012 et 2015, ont révélé sous la forêt des quartiers entiers, des routes et des champs : Angkor était bien plus étendue qu'on ne le croyait.",
      evenements: [
        { annee: 1296, titre: "Visite de Zhou Daguan", lieu: [13.44, 103.86] },
        { annee: 1351, titre: "Fondation d'Ayutthaya", lieu: [14.35, 100.57] },
        { annee: 1431, titre: "Prise d'Angkor par Ayutthaya", lieu: [13.44, 103.86] }
      ],
      acteurs: [
        ["Jayavarman VIII", "mort en 1295", "Roi d'un retour hindou"],
        ["Zhou Daguan", "XIIIe-XIVe siècles", "Diplomate chinois, témoin d'Angkor"],
        ["Ramathibodi Ier", "1314-1369", "Fondateur d'Ayutthaya"],
        ["Ponhea Yat", "XVe siècle", "Roi associé au départ vers Phnom Penh"]
      ]
    }
  ],
  lecons: [
    {
      titre: "Une infrastructure géante est une force et une fragilité",
      texte: "Le réseau hydraulique d'Angkor a nourri une population immense, mais il demandait un entretien constant et s'est révélé vulnérable aux chocs climatiques.",
      objection: "Le réseau a fonctionné pendant des siècles et a été adapté plusieurs fois ; l'accuser seul du déclin revient à oublier les facteurs politiques et commerciaux."
    },
    {
      titre: "Les monuments ne disent pas tout de la puissance",
      texte: "L'arrêt des grands chantiers a longtemps été lu comme un signe de décadence. Il peut aussi refléter un changement de religion et de priorités, avec un bouddhisme moins tourné vers les temples royaux.",
      objection: "La fin des chantiers coïncide quand même avec des pertes territoriales réelles et une pression militaire croissante."
    },
    {
      titre: "Quitter une capitale n'est pas disparaître",
      texte: "Les Khmers n'ont pas disparu en 1431 : le royaume a continué depuis le sud, et les Cambodgiens d'aujourd'hui en sont les héritiers directs.",
      objection: "Le royaume post-angkorien a été beaucoup plus faible, souvent dominé par le Siam et le Vietnam pendant des siècles."
    }
  ]
});
