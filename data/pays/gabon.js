HISTOIRE.ajouterPays({
  id: 'gabon',
  nom: 'Gabon',
  region: 'afrique-centrale',
  accroche: "Les gravures de la Lopé, les marchands mpongwés de l'estuaire, Libreville fondée par des esclaves libérés, les explorations de Brazza, l'okoumé et l'hôpital de Schweitzer, quarante-deux ans d'Omar Bongo, puis le coup d'État de 2023 et l'élection de Brice Oligui Nguema.",
  intro: "Le Gabon, pays équatorial couvert aux trois quarts de forêt, est l'un des États les plus riches d'Afrique par habitant grâce au pétrole, au manganèse et au bois, mais une grande partie de sa population reste pauvre. Colonie française jusqu'en 1960, il a été gouverné pendant plus d'un demi-siècle par la famille Bongo, pilier de la « Françafrique ». En août 2023, un coup d'État a renversé Ali Bongo. Son auteur, Brice Clotaire Oligui Nguema, a été élu président en avril 2025.",
  sources: "Nicolas Metegue N'Nah, Histoire du Gabon ; Christopher Gray, Colonial Rule and Crisis in Equatorial Africa ; Florence Bernault, Démocraties ambiguës en Afrique centrale ; Richard Oslisly, travaux sur la Lopé.",
  phases: [
    {
      titre: "Peuples de la forêt",
      debut: 1, fin: 1472,
      chapo: "Des chasseurs-cueilleurs pygmées et des agriculteurs bantous, qui maîtrisent le fer, peuplent la forêt et les savanes de l'Ogooué.",
      recit: [
        "Les ancêtres des peuples pygmées, comme les Bakoya et les Babongo, vivent depuis des millénaires dans la forêt. À partir du premier millénaire avant notre ère, des agriculteurs de langues bantoues arrivent du nord et travaillent le fer, comme le montrent des fourneaux retrouvés dans la vallée de l'Ogooué.",
        "Dans la réserve de la Lopé, des centaines de gravures rupestres, cercles, spirales et outils, témoignent de cette présence ancienne. Les sociétés s'organisent en clans et en lignages, sans grand royaume centralisé."
      ],
      consensus: [
        "Les peuples pygmées sont les plus anciens habitants connus de la région.",
        "La métallurgie du fer est attestée très tôt dans la vallée de l'Ogooué.",
        "Le paysage de la Lopé est inscrit au patrimoine mondial depuis 2007."
      ],
      debats: [
        {
          question: "La forêt a-t-elle reculé il y a 2 500 ans ?",
          positions: [
            { titre: "Une crise climatique", texte: "Un assèchement aurait ouvert des savanes dans la forêt, facilitant l'expansion des agriculteurs bantous.", qui: "Richard Oslisly, paléoclimatologues" },
            { titre: "Un rôle humain", texte: "Les défrichements des premiers agriculteurs auraient eux-mêmes contribué au recul de la forêt.", qui: "Certains archéologues" }
          ],
          etat: "Les chercheurs penchent pour une crise climatique, dont les agriculteurs ont profité."
        }
      ],
      moinsConnu: "À Oklo, près de Franceville, des gisements d'uranium ont fonctionné naturellement comme des réacteurs nucléaires il y a environ deux milliards d'années, un phénomène unique connu sur Terre.",
      evenements: [
        { annee: 100, titre: "Métallurgie du fer dans l'Ogooué", lieu: [-0.9, 11.5] },
        { annee: 700, titre: "Gravures rupestres de la Lopé", lieu: [-0.2, 11.6] }
      ]
    },
    {
      titre: "Le temps de la traite",
      debut: 1472, fin: 1839,
      chapo: "Les Portugais atteignent l'estuaire en 1472. Les peuples côtiers deviennent des intermédiaires dans le commerce de l'ivoire, du bois et des esclaves.",
      recit: [
        "Les navigateurs portugais nomment l'estuaire Gabão, d'après la forme d'un manteau à capuchon. Les Mpongwés de l'estuaire et le royaume orungu du cap Lopez contrôlent les échanges avec les Européens : ivoire, bois rouge, cire, puis esclaves.",
        "La traite s'intensifie au XVIIIe et au début du XIXe siècle, surtout au cap Lopez, où les navires négriers continuent d'acheter des captifs après l'interdiction britannique de 1807. Les marchands côtiers s'enrichissent en servant de relais avec l'intérieur."
      ],
      consensus: [
        "Le nom du Gabon vient du portugais.",
        "Les Mpongwés et les Orungus étaient les principaux intermédiaires du commerce.",
        "Le cap Lopez a été un port de traite actif jusqu'au milieu du XIXe siècle."
      ],
      debats: [
        {
          question: "Combien de captifs sont partis des côtes gabonaises ?",
          positions: [
            { titre: "Un rôle secondaire", texte: "Comparé à l'Angola ou au golfe du Bénin, le Gabon n'aurait fourni qu'une petite part des captifs.", qui: "Base de données Slave Voyages" },
            { titre: "Un rôle sous-estimé", texte: "La traite illégale du XIXe siècle, mal documentée, aurait été plus importante qu'on ne le pense.", qui: "Historiens gabonais" }
          ],
          etat: "Les estimations restent incertaines pour la période de la traite clandestine."
        }
      ],
      moinsConnu: "Les rois orungus du cap Lopez, comme le roi Pasol, recevaient les capitaines européens dans des palais garnis de meubles et de vaisselle importés d'Europe.",
      evenements: [
        { annee: 1472, titre: "Arrivée des Portugais dans l'estuaire", lieu: [0.4, 9.45] },
        { annee: 1700, titre: "Essor du royaume orungu", lieu: [-0.63, 8.7] },
        { annee: 1820, titre: "Traite clandestine au cap Lopez", lieu: [-0.63, 8.7] }
      ]
    },
    {
      titre: "La pénétration française",
      debut: 1839, fin: 1910,
      chapo: "La France s'installe dans l'estuaire, fonde Libreville avec des esclaves libérés, puis Brazza explore l'intérieur. Des compagnies concessionnaires exploitent le pays.",
      recit: [
        "En 1839, le roi mpongwé Antchouwé Kowe Rapontchombo, dit « roi Denis », signe un traité avec la France. En 1849, des captifs libérés d'un navire négrier fondent Libreville. Les migrations des Fangs, venus du nord, transforment la carte humaine de la région.",
        "Pierre Savorgnan de Brazza remonte l'Ogooué de 1875 à 1880 et ouvre la route vers le Congo. À partir de 1899, de grandes compagnies concessionnaires reçoivent d'immenses territoires et imposent travail forcé et impôts, provoquant révoltes et famines."
      ],
      consensus: [
        "Le traité de 1839 est le point de départ de la présence française.",
        "Libreville a été fondée par des esclaves libérés.",
        "Le régime des concessions a été très violent."
      ],
      debats: [
        {
          question: "Brazza : explorateur pacifique ou conquérant ?",
          positions: [
            { titre: "Un explorateur humaniste", texte: "Brazza aurait privilégié les traités et dénoncé les abus des compagnies, notamment dans sa mission de 1905.", qui: "Tradition française, gouvernement congolais" },
            { titre: "Un agent de la colonisation", texte: "Ses traités ont ouvert la voie à la conquête et au régime des concessions.", qui: "Historiens africains critiques" }
          ],
          etat: "Les historiens reconnaissent son opposition aux abus, sans en faire un anticolonialiste."
        }
      ],
      moinsConnu: "Le nom de Libreville a été choisi sur le modèle de Freetown, en Sierra Leone, autre ville fondée par des esclaves libérés.",
      evenements: [
        { annee: 1839, titre: "Traité avec le roi Denis", lieu: [0.39, 9.45] },
        { annee: 1849, titre: "Fondation de Libreville", lieu: [0.39, 9.45] },
        { annee: 1875, titre: "Brazza remonte l'Ogooué", lieu: [-0.7, 10.24] },
        { annee: 1899, titre: "Régime des concessions", lieu: [-0.5, 11.0] }
      ]
    },
    {
      titre: "La colonie de l'okoumé",
      debut: 1910, fin: 1960,
      chapo: "Intégré à l'Afrique-Équatoriale française, le Gabon vit de l'exploitation de l'okoumé. Une élite instruite émerge et prépare l'indépendance.",
      recit: [
        "En 1910, le Gabon devient une colonie de l'Afrique-Équatoriale française. L'okoumé, bois léger recherché pour le contreplaqué, devient la principale ressource, exploitée par le travail forcé. En 1913, le médecin alsacien Albert Schweitzer ouvre un hôpital à Lambaréné.",
        "Après 1945, les Gabonais élisent des représentants. Léon Mba, chef du Bloc démocratique gabonais, l'emporte sur Jean-Hilaire Aubame. En 1958, Mba envisage même que le Gabon devienne un département français, avant l'indépendance du 17 août 1960."
      ],
      consensus: [
        "L'okoumé a dominé l'économie coloniale.",
        "Le travail forcé a été généralisé jusqu'en 1946.",
        "L'indépendance a été négociée sans guerre."
      ],
      debats: [
        {
          question: "Albert Schweitzer : bienfaiteur ou paternaliste ?",
          positions: [
            { titre: "Un bienfaiteur", texte: "Son hôpital a soigné des milliers de malades et lui a valu le prix Nobel de la paix en 1952.", qui: "Admirateurs, Fondation Schweitzer" },
            { titre: "Un paternaliste", texte: "Ses propos sur les Africains, qu'il comparait à des enfants, reflétaient le racisme colonial.", qui: "Chinua Achebe, critiques" }
          ],
          etat: "Son œuvre médicale est saluée, son regard sur les Africains critiqué."
        }
      ],
      moinsConnu: "En 1940, le Gabon fut le théâtre d'affrontements entre Français : les Forces françaises libres prirent Libreville aux partisans de Vichy après de brefs combats.",
      evenements: [
        { annee: 1910, titre: "Colonie de l'AEF", lieu: [0.39, 9.45] },
        { annee: 1913, titre: "Hôpital de Schweitzer à Lambaréné", lieu: [-0.7, 10.24] },
        { annee: 1940, titre: "Bataille du Gabon", lieu: [0.39, 9.45] },
        { annee: 1960, titre: "Indépendance", lieu: [0.39, 9.45] }
      ]
    },
    {
      titre: "L'ère Bongo",
      debut: 1960, fin: 2023,
      chapo: "Après Léon Mba, Omar Bongo gouverne quarante-deux ans grâce au pétrole et au soutien de la France. Son fils Ali lui succède en 2009.",
      recit: [
        "En 1964, des militaires renversent Léon Mba, mais des parachutistes français le rétablissent en deux jours. À sa mort en 1967, Albert-Bernard Bongo, devenu Omar Bongo, lui succède. Le pétrole, exploité par Elf, finance l'État, le clientélisme et les réseaux politiques en France.",
        "Le multipartisme revient en 1990 après des émeutes. À la mort d'Omar Bongo en 2009, son fils Ali est élu. Sa réélection de 2016, très contestée, est suivie de violences. Victime d'un AVC en 2018, il est proclamé réélu en août 2023, mais l'armée le renverse le 30 août."
      ],
      consensus: [
        "Omar Bongo est l'un des chefs d'État restés le plus longtemps au pouvoir.",
        "Le pétrole a enrichi l'élite sans réduire durablement la pauvreté.",
        "Le Gabon était l'un des principaux alliés de la France en Afrique."
      ],
      debats: [
        {
          question: "La « Françafrique » : quel poids réel ?",
          positions: [
            { titre: "Une dépendance organisée", texte: "L'affaire Elf a révélé des financements occultes de partis français et le rôle de la France dans le maintien du régime.", qui: "François-Xavier Verschave, juges de l'affaire Elf" },
            { titre: "Une relation à double sens", texte: "Omar Bongo savait aussi peser sur la politique française et jouer des rivalités.", qui: "Historiens, journalistes" }
          ],
          etat: "Les deux dimensions sont admises ; l'affaire des biens mal acquis vise encore la famille Bongo en France."
        }
      ],
      moinsConnu: "Le Gabon a créé en 2002 treize parcs nationaux couvrant environ 11 % de son territoire, et abrite une grande part des éléphants de forêt d'Afrique.",
      evenements: [
        { annee: 1964, titre: "Coup d'État déjoué par la France", lieu: [0.39, 9.45] },
        { annee: 1967, titre: "Omar Bongo président", lieu: [0.39, 9.45] },
        { annee: 1990, titre: "Retour du multipartisme", lieu: [0.39, 9.45] },
        { annee: 2009, titre: "Mort d'Omar Bongo, élection d'Ali Bongo", lieu: [0.39, 9.45] },
        { annee: 2016, titre: "Violences post-électorales", lieu: [0.39, 9.45] }
      ]
    },
    {
      titre: "Transition et Ve République",
      debut: 2023, fin: 2026,
      chapo: "Le général Oligui Nguema mène une transition, fait adopter une nouvelle Constitution, puis est élu président en 2025.",
      recit: [
        "Le coup d'État du 30 août 2023, sans effusion de sang, est accueilli par des scènes de joie. Le général Brice Clotaire Oligui Nguema, ancien chef de la garde républicaine et cousin d'Ali Bongo, dirige la transition. Une nouvelle Constitution est approuvée par référendum en novembre 2024.",
        "Élu le 12 avril 2025 avec 94,85 % des voix, Oligui Nguema forme en janvier 2026 un gouvernement qui marque la fin formelle de la transition. Le Gabon retrouve sa place à l'Union africaine, mais les coupures d'eau et d'électricité, le chômage des jeunes et la dette pèsent sur sa popularité."
      ],
      consensus: [
        "Le coup d'État de 2023 a mis fin à 56 ans de pouvoir de la famille Bongo.",
        "La transition a abouti à une élection en moins de deux ans.",
        "Le pays reste très dépendant du pétrole et du manganèse."
      ],
      debats: [
        {
          question: "Une transition exemplaire ou une confiscation du pouvoir ?",
          positions: [
            { titre: "Une transition réussie", texte: "Le Gabon a retrouvé un ordre constitutionnel rapidement, sans violence, et a été réintégré par ses partenaires.", qui: "Gouvernement, Union africaine" },
            { titre: "Un pouvoir verrouillé", texte: "L'auteur du coup d'État s'est fait élire avec un score écrasant et la nouvelle Constitution concentre les pouvoirs.", qui: "Alain Claude Bilie-By-Nze, opposition, ONG" }
          ],
          etat: "La transition est jugée rapide, mais l'évolution des libertés publiques suscite des inquiétudes."
        }
      ],
      moinsConnu: "La nouvelle Constitution supprime le poste de Premier ministre et exige que le président soit né de parents gabonais, ce qui a écarté de fait certains anciens dignitaires.",
      evenements: [
        { annee: 2023, titre: "Coup d'État contre Ali Bongo", lieu: [0.39, 9.45] },
        { annee: 2024, titre: "Référendum constitutionnel", lieu: [0.39, 9.45] },
        { annee: 2025, titre: "Élection de Brice Oligui Nguema", lieu: [0.39, 9.45] },
        { annee: 2026, titre: "Fin formelle de la transition", lieu: [0.39, 9.45] }
      ]
    }
  ]
});
