HISTOIRE.ajouterPays({
  id: 'france',
  nom: 'France',
  region: 'europe-ouest',
  accroche: "De la Gaule romaine à la Ve République, un État très ancien dont le récit national a été écrit, réécrit et contesté.",
  intro: "La France aime se raconter comme une nation éternelle. Son histoire réelle est faite de ruptures, de peuples mêlés et de mémoires qui s'affrontent encore.",
  sources: "Patrick Boucheron (dir.), Histoire mondiale de la France ; collection Histoire de France (Belin) ; Pierre Nora (dir.), Les Lieux de mémoire.",
  phases: [
    {
      titre: 'La Gaule romaine',
      debut: 1, fin: 486,
      chapo: "Conquise par César un demi-siècle plus tôt, la Gaule devient l'une des provinces les plus riches de l'Empire avant d'être disputée entre Rome et les peuples germaniques.",
      recit: [
        "En l'an 1, la Gaule est découpée en provinces par Auguste. Lyon (Lugdunum) en est le centre administratif. Les élites gauloises adoptent rapidement le latin, la citoyenneté romaine et le mode de vie urbain : thermes, amphithéâtres, villas agricoles.",
        "Le christianisme s'implante à partir du IIe siècle, d'abord dans les villes. Au IIIe siècle, crises militaires et usurpations fragilisent la région, qui forme même brièvement un « Empire des Gaules ». Au Ve siècle, Wisigoths, Burgondes et Francs s'installent, souvent comme alliés officiels de Rome, avant de devenir les vrais maîtres du territoire."
      ],
      consensus: [
        "La romanisation des élites gauloises a été rapide et profonde, notamment par la langue latine.",
        "L'organisation en cités romaines a servi de base aux futurs diocèses et à de nombreuses villes actuelles.",
        "Les peuples germaniques se sont installés progressivement, souvent par traités avec Rome."
      ],
      debats: [
        {
          question: "La fin de la Gaule romaine : chute brutale ou lente transformation ?",
          positions: [
            { titre: "Une catastrophe", texte: "Les invasions ont détruit une civilisation : baisse de la population, fin de l'économie monétaire, recul de l'écrit, villes rétractées derrière leurs murailles.", qui: "Bryan Ward-Perkins, archéologie des niveaux de vie" },
            { titre: "Une transformation", texte: "Il n'y a pas eu d'effondrement soudain mais une recomposition : les rois germaniques reprennent l'administration romaine et s'appuient sur les évêques gallo-romains.", qui: "Peter Brown, école de « l'Antiquité tardive »" }
          ],
          etat: "La plupart des historiens admettent les deux : continuité des institutions et de la religion, mais net recul matériel mesuré par l'archéologie."
        },
        {
          question: "« Nos ancêtres les Gaulois » : héritage réel ou mythe du XIXe siècle ?",
          positions: [
            { titre: "Un héritage", texte: "Une partie des populations, des toponymes et des pratiques agricoles remonte bien aux Gaulois.", qui: "" },
            { titre: "Une construction", texte: "Le culte de Vercingétorix est une invention politique du XIXe siècle, destinée à donner une origine non royale et non franque à la nation.", qui: "Christian Goudineau, Suzanne Citron" }
          ],
          etat: "Les historiens voient dans le « Gaulois ancêtre » un mythe national, tout en reconnaissant une continuité de peuplement. La France est le produit de multiples apports."
        }
      ],
      moinsConnu: "Le monde gallo-romain n'était pas que latin. Des inscriptions en langue gauloise circulent encore au IIe siècle, et dans les campagnes le gaulois a pu survivre jusqu'au Ve ou VIe siècle. Les Gaules accueillaient aussi des soldats et commerçants venus de tout l'Empire, d'Afrique du Nord à la Syrie.",
      evenements: [
        { annee: 12, titre: "Autel des Trois Gaules à Lyon", lieu: [45.77, 4.83], texte: "Lieu de culte impérial et assemblée annuelle des délégués des cités gauloises." },
        { annee: 177, titre: "Martyrs de Lyon", lieu: [45.76, 4.83], texte: "Persécution de la communauté chrétienne de Lyon, l'une des premières attestées en Gaule." },
        { annee: 260, titre: "Empire des Gaules", lieu: [49.75, 6.64], texte: "Postumus fonde un État gallo-romain séparé de Rome, qui dure jusqu'en 274." },
        { annee: 451, titre: "Bataille des champs Catalauniques", lieu: [48.95, 4.36], texte: "Romains, Wisigoths et Francs arrêtent Attila." }
      ]
    },
    {
      titre: 'Les royaumes francs',
      debut: 486, fin: 987,
      chapo: "Des Mérovingiens aux Carolingiens, les Francs construisent le plus puissant royaume d'Occident, jusqu'à l'empire de Charlemagne.",
      recit: [
        "En 486, Clovis bat Syagrius, dernier représentant du pouvoir romain dans le nord de la Gaule. Son baptême catholique lui assure l'appui des évêques. Ses successeurs mérovingiens se partagent le royaume entre héritiers, ce qui provoque de longues guerres familiales.",
        "Au VIIIe siècle, les maires du palais carolingiens prennent le pouvoir. Charles Martel arrête une expédition omeyyade près de Poitiers en 732, Pépin le Bref devient roi en 751 et Charlemagne est couronné empereur à Rome en 800. L'empire est partagé en 843 au traité de Verdun : sa partie occidentale, la Francie occidentale, est l'ancêtre de la France."
      ],
      consensus: [
        "Le baptême de Clovis a rapproché le pouvoir franc de l'Église et des élites gallo-romaines.",
        "La renaissance carolingienne a sauvé une grande partie des textes latins antiques, recopiés dans les monastères.",
        "Le traité de Verdun (843) découpe l'empire en trois royaumes, dont naîtront la France et l'Allemagne."
      ],
      debats: [
        {
          question: "La bataille de Poitiers (732) a-t-elle « sauvé l'Occident » ?",
          positions: [
            { titre: "Un tournant décisif", texte: "Sans cette victoire, l'expansion musulmane aurait pu se poursuivre en Gaule. Charles Martel aurait fixé la frontière de la chrétienté.", qui: "Edward Gibbon, tradition historiographique" },
            { titre: "Un raid parmi d'autres", texte: "Il s'agissait d'une expédition de pillage vers Tours, pas d'une conquête. Les incursions continuent ensuite en Provence et l'expansion s'arrête surtout pour des raisons internes au monde musulman.", qui: "William Blanc, Christophe Naudin, médiévistes" }
          ],
          etat: "Les médiévistes relativisent fortement la portée de la bataille. Elle est surtout devenue un symbole politique, encore mobilisé aujourd'hui par l'extrême droite."
        },
        {
          question: "Les « rois fainéants » mérovingiens : réalité ou propagande ?",
          positions: [
            { titre: "Des rois effacés", texte: "À la fin de la dynastie, les rois n'ont plus de pouvoir réel, exercé par les maires du palais.", qui: "" },
            { titre: "Une image fabriquée", texte: "Le portrait vient d'Éginhard, biographe de Charlemagne, qui avait intérêt à discréditer la dynastie renversée.", qui: "Historiographie récente" }
          ],
          etat: "La perte de pouvoir est réelle, mais l'image caricaturale des rois oisifs est une construction carolingienne."
        }
      ],
      moinsConnu: "Les femmes de pouvoir sont centrales à l'époque mérovingienne. Les reines Brunehaut et Frédégonde ont gouverné, fait la guerre et négocié pendant des décennies. Leur image de « reines cruelles » doit beaucoup à des chroniqueurs hostiles.",
      evenements: [
        { annee: 496, titre: "Baptême de Clovis à Reims (date discutée)", lieu: [49.25, 4.03], texte: "Les historiens hésitent entre 496, 498 et 508." },
        { annee: 732, titre: "Bataille de Poitiers", lieu: [46.66, 0.36], texte: "Charles Martel arrête une armée omeyyade menée par Abd al-Rahman." },
        { annee: 800, titre: "Couronnement de Charlemagne", lieu: [41.9, 12.45], texte: "Le pape Léon III le couronne empereur à Rome." },
        { annee: 843, titre: "Traité de Verdun", lieu: [49.16, 5.38], texte: "Partage de l'empire entre les petits-fils de Charlemagne." },
        { annee: 911, titre: "Traité de Saint-Clair-sur-Epte", lieu: [49.2, 1.68], texte: "Les Vikings de Rollon reçoivent ce qui deviendra la Normandie." }
      ]
    },
    {
      titre: 'Le royaume capétien',
      debut: 987, fin: 1453,
      chapo: "D'un petit domaine autour de Paris, les Capétiens bâtissent un royaume puissant, avant que la guerre de Cent Ans ne manque de le faire disparaître.",
      recit: [
        "En 987, Hugues Capet est élu roi. Son pouvoir réel ne dépasse guère l'Île-de-France, face à des princes plus riches que lui, comme le duc de Normandie devenu roi d'Angleterre en 1066. Par la guerre, les mariages et le droit, ses successeurs étendent le domaine royal : Philippe Auguste prend la Normandie en 1204, Saint Louis renforce la justice royale.",
        "Les XIIe et XIIIe siècles sont une période d'essor : défrichements, villes, cathédrales gothiques, université de Paris. Le XIVe siècle est celui des catastrophes : famines, Peste noire de 1348 qui tue peut-être un tiers de la population, et guerre de Cent Ans contre les rois d'Angleterre, terminée par la victoire française en 1453."
      ],
      consensus: [
        "La population et l'économie croissent fortement entre l'an mil et 1300.",
        "La Peste noire provoque une mortalité massive, de l'ordre d'un tiers de la population.",
        "La guerre de Cent Ans renforce l'autorité royale et un sentiment d'appartenance au royaume."
      ],
      debats: [
        {
          question: "Y a-t-il eu une « mutation féodale » brutale autour de l'an mil ?",
          positions: [
            { titre: "Une révolution", texte: "Vers l'an mil, l'autorité publique s'effondre : les seigneurs bâtissent des châteaux et imposent leur domination aux paysans par la force.", qui: "Georges Duby, Guy Bois, Jean-Pierre Poly" },
            { titre: "Une évolution lente", texte: "Les sources changent plus que la société. Les seigneurs existaient déjà sous les Carolingiens et le passage est progressif.", qui: "Dominique Barthélemy" }
          ],
          etat: "La thèse d'une rupture brutale a été largement nuancée. On parle plutôt d'une transformation étalée sur plusieurs générations."
        },
        {
          question: "Jeanne d'Arc : sainte, héroïne nationale ou figure politique ?",
          positions: [
            { titre: "Héroïne nationale", texte: "Elle incarne la résistance à l'occupation anglaise et le sentiment national naissant.", qui: "Jules Michelet, tradition républicaine" },
            { titre: "Figure religieuse", texte: "Son action et son procès s'inscrivent dans une culture prophétique médiévale. L'Église l'a canonisée en 1920.", qui: "" },
            { titre: "Mémoire disputée", texte: "Revendiquée par les républicains, les catholiques, Vichy, la Résistance puis l'extrême droite, elle en dit autant sur ceux qui la célèbrent que sur le XVe siècle.", qui: "Gerd Krumeich" }
          ],
          etat: "Les faits sont bien documentés grâce aux procès. Le débat porte sur l'usage politique de sa mémoire."
        }
      ],
      moinsConnu: "Le royaume médiéval était linguistiquement très divers : la langue d'oc dominait tout le Sud, avec une littérature prestigieuse, celle des troubadours. La croisade contre les Albigeois (1209 à 1229) a aussi été une conquête du Midi par le Nord.",
      evenements: [
        { annee: 987, titre: "Élection d'Hugues Capet", lieu: [49.41, 2.82], texte: "Élu à Senlis, il fonde la dynastie capétienne." },
        { annee: 1163, titre: "Début de la construction de Notre-Dame de Paris", lieu: [48.853, 2.35] },
        { annee: 1214, titre: "Bataille de Bouvines", lieu: [50.58, 3.18], texte: "Philippe Auguste bat une coalition anglo-impériale." },
        { annee: 1348, titre: "La Peste noire atteint le royaume", lieu: [43.3, 5.37], texte: "Arrivée par Marseille, l'épidémie gagne tout le pays." },
        { annee: 1429, titre: "Levée du siège d'Orléans", lieu: [47.9, 1.91], texte: "Jeanne d'Arc contribue à libérer la ville." },
        { annee: 1453, titre: "Bataille de Castillon", lieu: [44.86, -0.04], texte: "Fin de la guerre de Cent Ans." }
      ]
    },
    {
      titre: 'La monarchie, de la Renaissance aux Lumières',
      debut: 1453, fin: 1789,
      chapo: "Un royaume devenu le plus peuplé d'Europe, déchiré par les guerres de Religion, puis gouverné par une monarchie qui se veut absolue.",
      recit: [
        "François Ier attire les artistes italiens et impose le français dans les actes officiels (1539). La Réforme protestante divise le royaume : les guerres de Religion (1562 à 1598) culminent avec le massacre de la Saint-Barthélemy, avant l'édit de Nantes d'Henri IV qui tolère le protestantisme.",
        "Au XVIIe siècle, Richelieu puis Louis XIV renforcent l'État : Versailles, armée permanente, centralisation. La France participe à la colonisation de l'Amérique, des Antilles et à la traite atlantique. Au XVIIIe siècle, les Lumières critiquent l'absolutisme, tandis que la crise financière de l'État s'aggrave."
      ],
      consensus: [
        "Les guerres de Religion ont été parmi les conflits les plus meurtriers de l'histoire du royaume.",
        "Louis XIV a renforcé l'État central, mais son règne se termine dans l'endettement et la lassitude.",
        "La France a été une grande puissance négrière : environ 1,4 million d'Africains déportés par des navires français."
      ],
      debats: [
        {
          question: "L'absolutisme était-il vraiment absolu ?",
          positions: [
            { titre: "Un pouvoir sans partage", texte: "Le roi concentre tous les pouvoirs et ne rend de comptes qu'à Dieu. Louis XIV en est l'incarnation.", qui: "Lecture traditionnelle" },
            { titre: "Un pouvoir négocié", texte: "Le roi gouverne en négociant sans cesse avec les nobles, les parlements, les provinces et les corps. L'absolutisme est autant une image qu'une pratique.", qui: "William Beik, Fanny Cosandey, Robert Descimon" }
          ],
          etat: "L'idée d'un pouvoir négocié est largement admise. L'absolutisme est vu comme une ambition et une mise en scène plus que comme une réalité totale."
        }
      ],
      moinsConnu: "Le Code noir de 1685 encadre l'esclavage dans les colonies françaises. La prospérité de ports comme Bordeaux, Nantes ou La Rochelle repose largement sur le commerce triangulaire et le sucre des Antilles, un aspect longtemps absent des manuels.",
      evenements: [
        { annee: 1539, titre: "Ordonnance de Villers-Cotterêts", lieu: [49.25, 3.09], texte: "Le français remplace le latin dans les actes de justice." },
        { annee: 1572, titre: "Massacre de la Saint-Barthélemy", lieu: [48.86, 2.34], texte: "Des milliers de protestants tués à Paris puis en province." },
        { annee: 1598, titre: "Édit de Nantes", lieu: [47.22, -1.55] },
        { annee: 1682, titre: "La cour s'installe à Versailles", lieu: [48.8, 2.12] },
        { annee: 1685, titre: "Révocation de l'édit de Nantes et Code noir", lieu: [48.8, 2.12] }
      ]
    },
    {
      titre: "L'âge des révolutions",
      debut: 1789, fin: 1870,
      chapo: "La Révolution abolit la monarchie et les privilèges, puis le pays alterne pendant quatre-vingts ans entre républiques, empires et monarchies.",
      recit: [
        "En 1789, la crise financière mène à la réunion des États généraux. Les députés du tiers état se proclament Assemblée nationale, la Bastille est prise et la Déclaration des droits de l'homme et du citoyen est adoptée. La monarchie tombe en 1792, Louis XVI est exécuté en 1793. La Terreur, la guerre contre l'Europe et la guerre civile en Vendée font des centaines de milliers de morts.",
        "Napoléon Bonaparte prend le pouvoir en 1799, se fait sacrer empereur et domine l'Europe avant sa défaite de 1815. Suivent la Restauration, la monarchie de Juillet, la révolution de 1848 qui instaure le suffrage universel masculin et abolit l'esclavage, puis le Second Empire de Napoléon III, qui s'effondre face à la Prusse en 1870."
      ],
      consensus: [
        "La Révolution abolit les privilèges et proclame l'égalité civile, des principes repris dans le monde entier.",
        "Les guerres révolutionnaires et napoléoniennes ont fait plusieurs millions de morts en Europe.",
        "Le Code civil de 1804 a durablement structuré le droit français et de nombreux droits étrangers."
      ],
      debats: [
        {
          question: "Comment expliquer la Révolution française ?",
          positions: [
            { titre: "Une révolution bourgeoise", texte: "La bourgeoisie montante renverse l'ordre féodal pour prendre le pouvoir, dans une lutte de classes.", qui: "Albert Soboul, lecture marxiste" },
            { titre: "Une révolution politique", texte: "Les causes sont d'abord politiques et culturelles : une nouvelle conception de la souveraineté et de l'opinion publique. La dynamique révolutionnaire porte en elle la Terreur.", qui: "François Furet, lecture « révisionniste »" },
            { titre: "Une révolution plurielle", texte: "Paysans, femmes, esclaves de Saint-Domingue, sans-culottes : il y a eu plusieurs révolutions entremêlées, avec des acteurs souvent oubliés.", qui: "Histoire sociale et globale récente" }
          ],
          etat: "La lecture marxiste a perdu son hégémonie, mais celle de Furet est aussi critiquée. Les travaux récents insistent sur la diversité des acteurs et sur la dimension atlantique."
        },
        {
          question: "Les massacres de Vendée sont-ils un génocide ?",
          positions: [
            { titre: "Oui", texte: "L'extermination de populations civiles ordonnée par la Convention viserait un groupe en tant que tel.", qui: "Reynald Secher" },
            { titre: "Non", texte: "Il s'agit de massacres de guerre civile d'une grande violence, visant des rebelles et non un peuple. Le terme de génocide est un anachronisme juridique et politique.", qui: "Jean-Clément Martin, majorité des historiens" }
          ],
          etat: "La très grande majorité des historiens rejette la qualification de génocide, sans minimiser l'ampleur des massacres (environ 170 000 morts selon les estimations courantes)."
        },
        {
          question: "Napoléon : héros ou fossoyeur de la Révolution ?",
          positions: [
            { titre: "Le bâtisseur", texte: "Il stabilise les acquis de la Révolution : Code civil, préfets, lycées, Banque de France.", qui: "" },
            { titre: "Le despote", texte: "Il rétablit l'esclavage en 1802, restreint les libertés et entraîne l'Europe dans des guerres sans fin.", qui: "" }
          ],
          etat: "Les historiens reconnaissent les deux faces. Le rétablissement de l'esclavage, longtemps passé sous silence, est aujourd'hui pleinement intégré au bilan."
        }
      ],
      moinsConnu: "La révolution des esclaves de Saint-Domingue (1791 à 1804) est la seule révolte servile victorieuse de l'histoire moderne. Elle oblige la France à abolir l'esclavage en 1794 et donne naissance à Haïti, première république noire. Haïti a dû payer à la France une « dette de l'indépendance » pendant plus d'un siècle.",
      evenements: [
        { annee: 1789, titre: "Prise de la Bastille", lieu: [48.853, 2.369] },
        { annee: 1793, titre: "Exécution de Louis XVI et début de la guerre de Vendée", lieu: [46.67, -1.43] },
        { annee: 1804, titre: "Sacre de Napoléon et indépendance d'Haïti", lieu: [48.853, 2.35] },
        { annee: 1815, titre: "Bataille de Waterloo", lieu: [50.68, 4.41] },
        { annee: 1848, titre: "Deuxième République, suffrage universel masculin, abolition de l'esclavage", lieu: [48.86, 2.35] },
        { annee: 1870, titre: "Défaite de Sedan", lieu: [49.7, 4.94], texte: "Napoléon III capturé, proclamation de la République." }
      ]
    },
    {
      titre: 'République, guerres et empire colonial',
      debut: 1870, fin: 1962,
      chapo: "La République s'enracine, la France bâtit le deuxième empire colonial du monde et traverse deux guerres mondiales.",
      recit: [
        "Après la Commune de Paris, écrasée en 1871, la IIIe République s'installe : école gratuite, laïque et obligatoire, séparation des Églises et de l'État en 1905. L'affaire Dreyfus divise le pays. L'empire colonial s'étend en Afrique et en Asie.",
        "La Première Guerre mondiale tue 1,4 million de soldats français. En 1940, la défaite face à l'Allemagne mène au régime de Vichy, qui collabore avec l'occupant et participe à la déportation des Juifs, tandis que la Résistance et la France libre poursuivent le combat. Après 1945, les guerres d'Indochine et d'Algérie mènent à la fin de l'empire."
      ],
      consensus: [
        "Les lois scolaires et la loi de 1905 ont façonné la laïcité française.",
        "Le régime de Vichy a mené sa propre politique antisémite et a collaboré à la déportation d'environ 75 000 Juifs de France.",
        "La guerre d'Algérie a donné lieu à l'usage de la torture par l'armée française, reconnu officiellement par l'État."
      ],
      debats: [
        {
          question: "Vichy a-t-il « protégé » les Français ?",
          positions: [
            { titre: "Le bouclier", texte: "Pétain aurait servi de « bouclier » pendant que de Gaulle était « l'épée », limitant les exigences allemandes.", qui: "Robert Aron (1954), thèse reprise par certains polémistes" },
            { titre: "La collaboration choisie", texte: "Les archives montrent que Vichy a devancé les demandes allemandes, notamment par le statut des Juifs de 1940, adopté sans pression de l'occupant.", qui: "Robert Paxton, Michael Marrus, Serge Klarsfeld" }
          ],
          etat: "La thèse du bouclier est réfutée par les historiens. La responsabilité de l'État français a été reconnue par Jacques Chirac en 1995."
        },
        {
          question: "La colonisation a-t-elle eu des « aspects positifs » ?",
          positions: [
            { titre: "Un bilan mitigé", texte: "Routes, hôpitaux, écoles : la colonisation aurait apporté des infrastructures, à mettre en regard de ses violences.", qui: "Débat autour de la loi de 2005, rapidement abrogée sur ce point" },
            { titre: "Un système de domination", texte: "Les infrastructures servaient l'exploitation, l'accès à l'école restait très limité pour les colonisés, et le système reposait sur l'inégalité juridique, le travail forcé et la violence.", qui: "Majorité des historiens de la colonisation" }
          ],
          etat: "Les historiens refusent la logique du bilan comptable et analysent la colonisation comme un système fondé sur l'inégalité. Le sujet reste très politique en France."
        }
      ],
      moinsConnu: "Environ 200 000 tirailleurs venus d'Afrique ont combattu pour la France en 1914 à 1918, et des centaines de milliers d'Africains et de Maghrébins ont participé à la libération en 1944. Le massacre de Thiaroye (1944), où l'armée française a tiré sur des tirailleurs réclamant leur solde, est resté longtemps occulté.",
      evenements: [
        { annee: 1871, titre: "Commune de Paris", lieu: [48.886, 2.343] },
        { annee: 1905, titre: "Loi de séparation des Églises et de l'État", lieu: [48.86, 2.32] },
        { annee: 1916, titre: "Bataille de Verdun", lieu: [49.2, 5.43] },
        { annee: 1940, titre: "Armistice et régime de Vichy", lieu: [46.13, 3.43] },
        { annee: 1942, titre: "Rafle du Vél d'Hiv", lieu: [48.854, 2.288], texte: "Plus de 13 000 Juifs arrêtés par la police française." },
        { annee: 1954, titre: "Dien Bien Phu et début de la guerre d'Algérie", lieu: [21.39, 103.02] }
      ]
    },
    {
      titre: 'La France contemporaine',
      debut: 1962, fin: 2025,
      chapo: "Fin de l'empire, construction européenne, croissance puis crises : une puissance moyenne qui interroge son modèle et sa mémoire.",
      recit: [
        "La Ve République, fondée en 1958, donne un pouvoir fort au président. Après les accords d'Évian (1962), la France se recentre sur l'Europe et le couple franco-allemand. Mai 1968 bouleverse les mœurs plus que les institutions. Les Trente Glorieuses s'achèvent avec les chocs pétroliers.",
        "Depuis les années 1980 : chômage de masse, alternances politiques, construction européenne avec l'euro, immigration et débats sur l'identité, attentats, crises sociales comme les Gilets jaunes. La mémoire de la colonisation, de l'esclavage et de Vichy fait l'objet de reconnaissances officielles et de vives controverses."
      ],
      consensus: [
        "La construction européenne est un axe central de la politique française depuis 1950.",
        "Les Trente Glorieuses ont transformé le niveau de vie, l'urbanisation et la consommation.",
        "La France est devenue une société d'immigration ancienne et diverse."
      ],
      debats: [
        {
          question: "Faut-il parler de « repentance » ou de travail de mémoire ?",
          positions: [
            { titre: "Contre la repentance", texte: "Juger le passé avec les valeurs du présent fragiliserait la cohésion nationale.", qui: "Une partie de la classe politique et des essayistes" },
            { titre: "Pour la reconnaissance", texte: "Reconnaître les crimes passés n'est pas se flageller : c'est rendre l'histoire plus complète et inclure tous les citoyens.", qui: "Benjamin Stora, nombreux historiens" }
          ],
          etat: "Les historiens rappellent que leur travail n'est ni d'accuser ni d'absoudre, mais de comprendre. Le débat est surtout politique."
        }
      ],
      moinsConnu: "Le 17 octobre 1961, la police parisienne réprime une manifestation pacifique d'Algériens : des dizaines de morts au moins, certains jetés dans la Seine. L'événement a été nié pendant des décennies avant d'être reconnu officiellement.",
      evenements: [
        { annee: 1962, titre: "Accords d'Évian, indépendance de l'Algérie", lieu: [46.4, 6.59] },
        { annee: 1968, titre: "Mai 68", lieu: [48.85, 2.34] },
        { annee: 1992, titre: "Traité de Maastricht ratifié par référendum", lieu: [48.86, 2.35] },
        { annee: 2015, titre: "Attentats de Paris et accord de Paris sur le climat", lieu: [48.86, 2.37] }
      ]
    }
  ]
});
