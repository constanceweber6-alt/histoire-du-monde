HISTOIRE.ajouterPays({
  id: 'chine',
  nom: 'Chine',
  region: 'asie-est',
  accroche: "Deux mille ans de dynasties, d'unifications et de divisions, une économie longtemps première du monde, et un passé que le pouvoir actuel raconte à sa manière.",
  intro: "La Chine se présente souvent comme une civilisation continue de cinq mille ans. Son histoire réelle alterne pourtant unité et éclatement, dynasties chinoises et dynasties venues des steppes, ouverture et repli.",
  sources: "Jacques Gernet, Le Monde chinois ; Timothy Brook (dir.), History of Imperial China ; Frank Dikötter, La Grande Famine de Mao.",
  phases: [
    {
      titre: 'L\'empire des Han',
      debut: 1, fin: 220,
      chapo: "En l'an 1, l'empire Han compte environ 58 millions d'habitants, autant que l'Empire romain. Il fixe pour deux millénaires le modèle de l'État chinois.",
      recit: [
        "Les Han gouvernent depuis 206 av. J.-C. Le recensement de l'an 2 est l'un des plus anciens au monde. En l'an 9, le ministre Wang Mang usurpe le trône et lance des réformes radicales, avant d'être renversé. La dynastie est restaurée en 25 avec Luoyang pour capitale : ce sont les Han orientaux.",
        "Le confucianisme devient la doctrine officielle et sert à former les fonctionnaires. Le papier est perfectionné, attribué à Cai Lun vers 105. Le bouddhisme arrive par les routes de la Soie. Au IIe siècle, les intrigues des eunuques et des familles de l'impératrice affaiblissent la cour. La révolte des Turbans jaunes (184) précipite la chute de la dynastie en 220."
      ],
      consensus: [
        "Les Han font du confucianisme la doctrine de l'État et de la formation des lettrés.",
        "L'empire Han est comparable à l'Empire romain par sa population et son étendue.",
        "Le bouddhisme pénètre en Chine sous les Han orientaux par l'Asie centrale."
      ],
      debats: [
        {
          question: "La Chine est-elle une civilisation « continue » ?",
          positions: [
            { titre: "Une continuité unique", texte: "Écriture, culte des ancêtres, État bureaucratique : la civilisation chinoise se perpétue depuis l'Antiquité sans rupture majeure.", qui: "Discours officiel chinois, nombreux sinologues" },
            { titre: "Une continuité construite", texte: "Les historiens officiels de chaque dynastie ont écrit l'histoire comme une succession légitime, gommant les ruptures, les conquêtes étrangères et les périodes de division.", qui: "Historiens de la « Nouvelle histoire des Qing »" }
          ],
          etat: "La continuité de l'écriture et de certains modèles politiques est réelle, mais les historiens soulignent que l'idée d'une Chine éternelle et unitaire est aussi un récit politique."
        }
      ],
      moinsConnu: "Le recensement de l'an 2 dénombre précisément 57 671 400 personnes. Les Han utilisaient déjà des registres de population pour lever l'impôt et organiser le service militaire, des siècles avant tout équivalent européen.",
      evenements: [
        { annee: 2, titre: "Recensement de l'empire Han", lieu: [34.27, 108.9] },
        { annee: 9, titre: "Usurpation de Wang Mang", lieu: [34.27, 108.9] },
        { annee: 25, titre: "Restauration Han, capitale à Luoyang", lieu: [34.62, 112.45] },
        { annee: 105, titre: "Cai Lun et le papier", lieu: [34.62, 112.45] },
        { annee: 184, titre: "Révolte des Turbans jaunes", lieu: [36.5, 115.0] },
        { annee: 208, titre: "Bataille de la Falaise rouge", lieu: [29.87, 113.62] }
      ]
    },
    {
      titre: 'La grande division',
      debut: 220, fin: 581,
      chapo: "Pendant plus de trois siècles, la Chine est divisée entre royaumes rivaux et dynasties du Nord fondées par des peuples des steppes.",
      recit: [
        "La période des Trois Royaumes (220 à 280), qui inspirera l'un des grands romans chinois, voit s'affronter Wei, Shu et Wu. Une brève réunification sous les Jin s'effondre au début du IVe siècle, lorsque des peuples non chinois, comme les Xiongnu et les Xianbei, prennent le contrôle du Nord.",
        "Des millions de Chinois fuient vers le Sud, qui se développe. Au Nord, les Wei du Nord, d'origine xianbei, adoptent la culture chinoise et promeuvent le bouddhisme : les grottes de Yungang et de Longmen en témoignent. Le bouddhisme devient une religion majeure dans toute la Chine."
      ],
      consensus: [
        "Le bouddhisme se diffuse massivement durant cette période de division.",
        "Le sud de la Chine, autour du Yangzi, se peuple et se développe fortement.",
        "Les dynasties du Nord fondées par des peuples des steppes ont profondément marqué la culture chinoise."
      ],
      debats: [
        {
          question: "Les peuples des steppes se sont-ils « sinisés » ?",
          positions: [
            { titre: "Une assimilation", texte: "Les conquérants auraient adopté la langue, les institutions et les mœurs chinoises, absorbés par une civilisation supérieure.", qui: "Historiographie chinoise traditionnelle" },
            { titre: "Un métissage", texte: "La culture chinoise elle-même s'est transformée au contact des steppes : vêtements, musique, chevaux, et même les dynasties Sui et Tang qui en sont issues.", qui: "Historiens récents" }
          ],
          etat: "La notion de sinisation à sens unique est très critiquée. On insiste sur les influences réciproques."
        }
      ],
      moinsConnu: "Les grandes familles aristocratiques du Sud cultivaient un art de vivre raffiné : c'est à cette époque que Wang Xizhi fixe l'idéal de la calligraphie chinoise, et que la poésie de la nature prend son essor avec Tao Yuanming.",
      evenements: [
        { annee: 311, titre: "Sac de Luoyang par les Xiongnu", lieu: [34.62, 112.45] },
        { annee: 353, titre: "Préface du pavillon des Orchidées de Wang Xizhi", lieu: [30.0, 120.58] },
        { annee: 460, titre: "Grottes de Yungang", lieu: [40.11, 113.12] }
      ]
    },
    {
      titre: 'Sui et Tang, un empire cosmopolite',
      debut: 581, fin: 907,
      chapo: "La Chine réunifiée devient sous les Tang un empire ouvert, dont la capitale Chang'an est la plus grande ville du monde.",
      recit: [
        "Les Sui réunifient la Chine en 589 et creusent le Grand Canal, qui relie le Nord et le Sud. Leurs guerres ruineuses en Corée provoquent leur chute. Les Tang (618 à 907) dominent l'Asie centrale. Chang'an accueille marchands sogdiens, perses, arabes, moines indiens et étudiants japonais.",
        "Wu Zetian devient en 690 la seule femme impératrice de l'histoire chinoise. La poésie connaît son âge d'or avec Li Bai et Du Fu. La défaite de Talas (751) face aux Abbassides, puis la rébellion d'An Lushan (755 à 763) affaiblissent la dynastie, qui s'effondre en 907."
      ],
      consensus: [
        "Le Grand Canal est l'un des plus grands chantiers de l'histoire.",
        "Chang'an est une ville cosmopolite d'environ un million d'habitants.",
        "La rébellion d'An Lushan marque le début du déclin des Tang."
      ],
      debats: [
        {
          question: "Wu Zetian : usurpatrice ou grande souveraine ?",
          positions: [
            { titre: "Une usurpatrice", texte: "Les historiens confucéens la décrivent comme une femme cruelle et ambitieuse, ayant éliminé ses rivaux et même ses enfants.", qui: "Histoire officielle des Tang" },
            { titre: "Une souveraine efficace", texte: "Elle renforce les examens, promeut des fonctionnaires compétents et maintient la stabilité de l'empire.", qui: "Historiens actuels" }
          ],
          etat: "Les historiens soulignent que son image noire vient de sources hostiles à l'idée qu'une femme règne. Son bilan politique est aujourd'hui réévalué."
        }
      ],
      moinsConnu: "La rébellion d'An Lushan aurait fait, selon les recensements, chuter la population enregistrée de plus de la moitié. Ce chiffre reflète surtout l'effondrement de l'administration, mais la guerre a bien été l'une des plus meurtrières de son temps.",
      evenements: [
        { annee: 605, titre: "Début du Grand Canal", lieu: [32.39, 119.42] },
        { annee: 629, titre: "Voyage du moine Xuanzang en Inde", lieu: [34.27, 108.9] },
        { annee: 690, titre: "Wu Zetian impératrice", lieu: [34.62, 112.45] },
        { annee: 751, titre: "Bataille de Talas", lieu: [42.52, 72.24] },
        { annee: 755, titre: "Rébellion d'An Lushan", lieu: [39.9, 116.4] }
      ]
    },
    {
      titre: 'Les Song et les Mongols',
      debut: 907, fin: 1368,
      chapo: "Sous les Song, la Chine connaît une révolution économique et technique sans équivalent, avant d'être conquise par les Mongols.",
      recit: [
        "Après une période de division, les Song réunifient la Chine en 960, mais doivent céder le Nord aux Jürchen en 1127. La Chine des Song invente la monnaie papier, développe l'imprimerie, la boussole marine et la poudre. Les examens impériaux deviennent la voie normale vers le pouvoir.",
        "Les Mongols de Gengis Khan attaquent le Nord en 1211. Kubilai Khan fonde la dynastie Yuan en 1271 et achève la conquête du Sud en 1279. Pékin devient capitale. Marco Polo décrit une Chine prospère. Les épidémies, les famines et les révoltes renversent les Yuan en 1368."
      ],
      consensus: [
        "La Chine des Song est la société la plus urbanisée et la plus avancée techniquement de son temps.",
        "La monnaie papier est une invention chinoise des Song.",
        "La conquête mongole a été extrêmement meurtrière dans le nord de la Chine."
      ],
      debats: [
        {
          question: "Pourquoi la Chine des Song n'a-t-elle pas connu de révolution industrielle ?",
          positions: [
            { titre: "Un blocage culturel", texte: "L'idéal confucéen méprisait le commerce et la technique, et l'État contrôlait trop l'économie.", qui: "Joseph Needham (« la question de Needham »), Mark Elvin" },
            { titre: "Une question mal posée", texte: "Il n'y a pas de raison d'attendre une révolution industrielle : la Chine a suivi sa propre trajectoire, et l'Europe a bénéficié de circonstances particulières.", qui: "Kenneth Pomeranz, R. Bin Wong" }
          ],
          etat: "La question de Needham est aujourd'hui jugée trop européocentrée par beaucoup d'historiens, sans être totalement abandonnée."
        },
        {
          question: "Les Yuan : dynastie chinoise ou occupation étrangère ?",
          positions: [
            { titre: "Une dynastie chinoise", texte: "Les Yuan sont intégrés à la succession officielle des dynasties chinoises.", qui: "Historiographie officielle, y compris actuelle" },
            { titre: "Un empire mongol", texte: "Les Yuan faisaient partie d'un empire mongol plus vaste et traitaient les Chinois du Sud comme la catégorie la plus basse de la population.", qui: "Historiens de l'empire mongol" }
          ],
          etat: "Les historiens voient les Yuan à la fois comme une dynastie chinoise et comme une partie de l'empire mongol. La question a aussi des enjeux pour la Mongolie actuelle."
        }
      ],
      moinsConnu: "La pratique des pieds bandés se répand dans l'élite sous les Song. Elle touchera ensuite des centaines de millions de femmes jusqu'à son interdiction au début du XXe siècle.",
      evenements: [
        { annee: 960, titre: "Fondation des Song", lieu: [34.8, 114.3] },
        { annee: 1024, titre: "Premiers billets émis par l'État", lieu: [30.66, 104.06] },
        { annee: 1127, titre: "Perte du Nord, capitale à Hangzhou", lieu: [30.27, 120.15] },
        { annee: 1215, titre: "Prise de Pékin par Gengis Khan", lieu: [39.9, 116.4] },
        { annee: 1279, titre: "Fin des Song, dynastie Yuan", lieu: [22.3, 113.1] }
      ]
    },
    {
      titre: 'Les Ming et les Qing',
      debut: 1368, fin: 1839,
      chapo: "Deux grandes dynasties gouvernent un empire peuplé et prospère, qui atteint sous les Qing sa plus grande extension.",
      recit: [
        "Les Ming chassent les Mongols, reconstruisent la Grande Muraille et bâtissent la Cité interdite. Entre 1405 et 1433, les flottes de l'amiral Zheng He naviguent jusqu'en Afrique de l'Est, puis l'empire cesse ces expéditions. L'argent américain afflue en Chine en échange de soie et de porcelaine.",
        "En 1644, les Mandchous fondent la dynastie Qing. Sous Kangxi, Yongzheng et Qianlong, l'empire double de taille en conquérant la Mongolie, le Xinjiang et le Tibet. La population passe d'environ 150 à plus de 300 millions au XVIIIe siècle. En 1793, l'ambassade britannique de Macartney est éconduite."
      ],
      consensus: [
        "La Chine est la première économie du monde jusqu'au début du XIXe siècle.",
        "Les Qing mandchous ont donné à la Chine l'essentiel de ses frontières actuelles.",
        "La conquête des Dzoungars au Xinjiang (1755 à 1758) a anéanti une grande partie de ce peuple."
      ],
      debats: [
        {
          question: "La Chine s'est-elle « fermée » au monde ?",
          positions: [
            { titre: "Un repli", texte: "L'arrêt des expéditions de Zheng He et les restrictions commerciales auraient isolé la Chine et causé son retard.", qui: "Récit classique" },
            { titre: "Une ouverture contrôlée", texte: "La Chine commerce intensément avec l'Asie et le monde entier via l'argent américain. Elle encadre les échanges sans s'isoler.", qui: "Timothy Brook, Andre Gunder Frank" }
          ],
          etat: "L'image d'une Chine fermée est largement abandonnée. On parle plutôt d'un commerce régulé et très intégré à l'économie mondiale."
        },
        {
          question: "Les Qing : empire chinois ou empire mandchou ?",
          positions: [
            { titre: "Un empire chinois", texte: "Les Mandchous adoptent le modèle impérial chinois et gouvernent par les institutions confucéennes.", qui: "Ping-ti Ho" },
            { titre: "Un empire d'Asie intérieure", texte: "Les Qing gouvernent différemment Chinois, Mongols, Tibétains et Ouïghours, et gardent une identité mandchoue distincte.", qui: "Mark Elliott, Evelyn Rawski, « Nouvelle histoire des Qing »" }
          ],
          etat: "Le débat est vif et politique : Pékin rejette la « Nouvelle histoire des Qing », qui remet en cause l'idée d'une appartenance ancienne du Tibet et du Xinjiang à la Chine."
        }
      ],
      moinsConnu: "La transition Ming-Qing a été d'une grande violence : massacre de Yangzhou en 1645, obligation pour tous les hommes de porter la natte mandchoue sous peine de mort. La population a fortement chuté au milieu du XVIIe siècle.",
      evenements: [
        { annee: 1405, titre: "Première expédition de Zheng He", lieu: [32.06, 118.78] },
        { annee: 1420, titre: "Achèvement de la Cité interdite", lieu: [39.916, 116.397] },
        { annee: 1644, titre: "Chute des Ming, entrée des Mandchous à Pékin", lieu: [39.9, 116.4] },
        { annee: 1757, titre: "Conquête de la Dzoungarie", lieu: [44.0, 87.0] },
        { annee: 1793, titre: "Ambassade Macartney", lieu: [40.98, 117.93] }
      ]
    },
    {
      titre: 'Guerres, révolutions et invasions',
      debut: 1839, fin: 1949,
      chapo: "Guerres de l'opium, rébellions, chute de l'empire, guerre civile et invasion japonaise : un siècle que la Chine appelle le « siècle des humiliations ».",
      recit: [
        "Pour imposer le commerce de l'opium, le Royaume-Uni attaque la Chine en 1839. Les traités inégaux ouvrent des ports et cèdent Hong Kong. La révolte des Taiping (1850 à 1864) fait peut-être 20 à 30 millions de morts. Défaite par le Japon en 1895, la Chine voit les puissances se partager des zones d'influence.",
        "La révolution de 1911 renverse les Qing et fonde la République. Le pays se morcelle entre seigneurs de la guerre. Les nationalistes de Tchang Kaï-chek et les communistes de Mao s'affrontent. Le Japon envahit la Mandchourie (1931) puis la Chine (1937) : massacre de Nankin. Après 1945, la guerre civile reprend et les communistes l'emportent en 1949."
      ],
      consensus: [
        "Les guerres de l'opium ont été menées pour imposer un commerce de drogue à la Chine.",
        "La révolte des Taiping est l'une des guerres civiles les plus meurtrières de l'histoire.",
        "Le massacre de Nankin (1937 à 1938) a fait des dizaines de milliers à plus de 200 000 victimes civiles et militaires désarmées."
      ],
      debats: [
        {
          question: "Le « siècle des humiliations » : réalité historique ou récit politique ?",
          positions: [
            { titre: "Une réalité", texte: "Guerres, traités inégaux, concessions étrangères, invasion japonaise : la Chine a bien été dominée et dépecée.", qui: "" },
            { titre: "Un récit mobilisé", texte: "Le Parti communiste utilise ce récit pour fonder sa légitimité comme sauveur de la nation, en minimisant les causes internes et ses propres responsabilités.", qui: "Zheng Wang, William Callahan" }
          ],
          etat: "Les historiens reconnaissent la réalité de l'agression étrangère tout en analysant l'usage politique du récit dans l'éducation patriotique."
        },
        {
          question: "Qui a vraiment combattu le Japon ?",
          positions: [
            { titre: "Les communistes", texte: "Les communistes auraient mené la résistance populaire contre l'envahisseur.", qui: "Historiographie officielle de la RPC" },
            { titre: "Les nationalistes", texte: "L'armée nationaliste a supporté l'essentiel des grandes batailles et des pertes, les communistes ménageant leurs forces.", qui: "Rana Mitter, historiens taïwanais" }
          ],
          etat: "Les historiens s'accordent à dire que les nationalistes ont porté l'essentiel du combat conventionnel. La RPC elle-même a partiellement reconnu ce rôle."
        }
      ],
      moinsConnu: "Le mouvement du 4 mai 1919, lancé par des étudiants contre le traité de Versailles qui donnait des territoires chinois au Japon, a aussi été une révolution culturelle : langue écrite moderne, critique du confucianisme, émancipation des femmes.",
      evenements: [
        { annee: 1842, titre: "Traité de Nankin, Hong Kong cédé", lieu: [22.28, 114.16] },
        { annee: 1851, titre: "Révolte des Taiping", lieu: [32.06, 118.78] },
        { annee: 1900, titre: "Révolte des Boxers", lieu: [39.9, 116.4] },
        { annee: 1911, titre: "Révolution, fin de l'empire", lieu: [30.59, 114.3] },
        { annee: 1934, titre: "Longue Marche", lieu: [26.6, 106.7] },
        { annee: 1937, titre: "Invasion japonaise, massacre de Nankin", lieu: [32.06, 118.78] }
      ]
    },
    {
      titre: 'La République populaire',
      debut: 1949, fin: 2025,
      chapo: "Le Parti communiste impose le maoïsme et ses catastrophes, puis lance des réformes qui font de la Chine la deuxième économie du monde.",
      recit: [
        "Mao Zedong proclame la République populaire le 1er octobre 1949. Les nationalistes se replient à Taïwan. Le Grand Bond en avant (1958 à 1962) provoque la plus grande famine de l'histoire. La Révolution culturelle (1966 à 1976) plonge le pays dans le chaos et la violence.",
        "Après la mort de Mao, Deng Xiaoping lance en 1978 la « réforme et l'ouverture ». Des centaines de millions de personnes sortent de la pauvreté. En 1989, le mouvement de Tiananmen est écrasé. Sous Xi Jinping, au pouvoir depuis 2012, le contrôle politique se renforce, notamment au Xinjiang et à Hong Kong."
      ],
      consensus: [
        "La famine du Grand Bond en avant a fait entre 15 et 45 millions de morts selon les estimations.",
        "Les réformes économiques depuis 1978 ont permis une croissance exceptionnelle et un recul massif de la pauvreté.",
        "La répression de Tiananmen en juin 1989 a fait des centaines, peut-être des milliers de morts."
      ],
      debats: [
        {
          question: "Comment juger Mao ?",
          positions: [
            { titre: "« 70 % de bon, 30 % d'erreurs »", texte: "Mao a unifié et libéré le pays, même s'il a commis de graves erreurs à la fin de sa vie.", qui: "Résolution officielle du Parti communiste (1981)" },
            { titre: "Le plus grand meurtrier du siècle", texte: "Famines, campagnes de terreur et Révolution culturelle font de son règne l'une des tragédies majeures du XXe siècle.", qui: "Frank Dikötter, Yang Jisheng" }
          ],
          etat: "En dehors de Chine, les historiens insistent sur l'ampleur des catastrophes. En Chine, le jugement officiel de 1981 reste la règle et le débat libre est impossible."
        },
        {
          question: "Ce qui se passe au Xinjiang : lutte antiterroriste ou crimes contre l'humanité ?",
          positions: [
            { titre: "Lutte antiterroriste", texte: "Les « centres de formation professionnelle » viseraient à prévenir l'extrémisme et la pauvreté.", qui: "Gouvernement chinois" },
            { titre: "Répression de masse", texte: "Internement d'au moins un million d'Ouïghours et d'autres musulmans, travail forcé, contrôle des naissances, destruction de lieux de culte.", qui: "Adrian Zenz, Darren Byler, rapport de l'ONU (2022)" }
          ],
          etat: "Le Haut-Commissariat des Nations unies aux droits de l'homme a évoqué en 2022 de possibles crimes contre l'humanité. Plusieurs parlements parlent de génocide, un terme discuté par les juristes."
        }
      ],
      moinsConnu: "La politique de l'enfant unique (1980 à 2015) a entraîné stérilisations et avortements forcés, ainsi qu'un fort déséquilibre entre hommes et femmes, lié à l'élimination de fœtus et de nouveau-nés féminins.",
      evenements: [
        { annee: 1949, titre: "Proclamation de la République populaire", lieu: [39.9, 116.39] },
        { annee: 1959, titre: "Grande famine, fuite du dalaï-lama", lieu: [29.65, 91.1] },
        { annee: 1966, titre: "Début de la Révolution culturelle", lieu: [39.9, 116.4] },
        { annee: 1978, titre: "Réforme et ouverture", lieu: [22.54, 114.06] },
        { annee: 1989, titre: "Répression de Tiananmen", lieu: [39.905, 116.39] },
        { annee: 1997, titre: "Rétrocession de Hong Kong", lieu: [22.28, 114.16] }
      ]
    }
  ]
});
