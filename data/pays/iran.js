HISTOIRE.ajouterPays({
  id: 'iran',
  nom: 'Iran',
  region: 'asie-ouest',
  accroche: "L'un des plus anciens États du monde, conquis plusieurs fois sans jamais perdre sa langue, et passé d'un empire à une république islamique.",
  intro: "L'Iran a été conquis par les Arabes, les Turcs et les Mongols, et à chaque fois sa culture a fini par transformer ses conquérants. Son histoire récente, de la révolution de 1979 aux sanctions, est l'une des plus disputées au monde.",
  sources: "Ervand Abrahamian, Histoire de l'Iran moderne ; Touraj Daryaee, Sasanian Persia ; Yann Richard, L'Iran de 1800 à nos jours.",
  phases: [
    {
      titre: 'Les Parthes',
      debut: 1, fin: 224,
      chapo: "En l'an 1, l'Empire parthe s'étend de l'Euphrate à l'Indus. C'est le grand rival de Rome en Orient.",
      recit: [
        "Les Arsacides, une dynastie venue des steppes du nord-est, gouvernent depuis le IIIe siècle av. J.-C. Leur empire est très décentralisé : de grandes familles nobles et des rois vassaux gouvernent les provinces. La capitale d'hiver est Ctésiphon, sur le Tigre.",
        "Les Parthes contrôlent un tronçon central des routes de la Soie entre Rome et la Chine. Leurs archers à cheval infligent plusieurs défaites aux Romains, qui prennent pourtant Ctésiphon à plusieurs reprises au IIe siècle. Affaiblie par les guerres et les querelles dynastiques, la dynastie est renversée en 224 par Ardashir, un prince du Fars."
      ],
      consensus: [
        "L'Empire parthe est pendant trois siècles la seule puissance capable de tenir tête à Rome.",
        "Les Parthes servent d'intermédiaires commerciaux entre la Méditerranée, l'Inde et la Chine.",
        "Leur pouvoir repose sur une alliance avec de grandes familles nobles qui garderont leur influence sous les Sassanides."
      ],
      debats: [
        {
          question: "Les Parthes étaient-ils des « barbares » philhellènes ou de vrais héritiers perses ?",
          positions: [
            { titre: "Des nomades hellénisés", texte: "Venus des steppes, les Parthes auraient surtout imité la culture grecque héritée d'Alexandre, sans véritable identité perse.", qui: "Sources romaines, historiographie ancienne" },
            { titre: "Des souverains iraniens", texte: "Les Parthes ont préservé les traditions iraniennes, le zoroastrisme et l'épopée orale. Leur image négative vient des Sassanides, qui voulaient effacer leurs prédécesseurs.", qui: "Historiens récents" }
          ],
          etat: "Les historiens réhabilitent les Parthes : leur effacement de la mémoire iranienne est largement le fait de la propagande sassanide."
        }
      ],
      moinsConnu: "Une grande partie de l'épopée nationale iranienne, reprise plus tard par Ferdowsi dans le Shahnameh, remonte à des traditions orales d'époque parthe, alors même que les Parthes y sont presque absents comme dynastie.",
      evenements: [
        { annee: 1, titre: "Empire parthe à son apogée, capitale à Ctésiphon", lieu: [33.09, 44.58] },
        { annee: 116, titre: "Trajan prend Ctésiphon", lieu: [33.09, 44.58] },
        { annee: 165, titre: "Les Romains incendient Ctésiphon et Séleucie", lieu: [33.1, 44.52] },
        { annee: 224, titre: "Ardashir renverse le dernier roi parthe", lieu: [29.6, 52.53] }
      ]
    },
    {
      titre: "L'Empire sassanide",
      debut: 224, fin: 651,
      chapo: "Les Sassanides bâtissent un État centralisé, zoroastrien, qui rivalise avec Rome puis Byzance pendant quatre siècles.",
      recit: [
        "Ardashir et son fils Shapour Ier fondent un empire plus centralisé que celui des Parthes. Shapour bat trois empereurs romains et capture Valérien en 260, scène gravée dans la roche à Naqsh-e Rostam. Le zoroastrisme devient religion d'État, mais chrétiens, juifs et manichéens sont nombreux dans l'empire.",
        "Au VIe siècle, Khosro Ier réforme l'impôt et l'armée et accueille des philosophes chassés de Byzance. La guerre totale contre Byzance (602 à 628) épuise les deux empires. Les armées arabes, portées par l'islam, battent les Sassanides à Qadisiyya puis Nahavand. Le dernier roi, Yazdegerd III, est tué en 651."
      ],
      consensus: [
        "L'Empire sassanide est l'une des deux grandes puissances du monde antique tardif, avec Rome.",
        "La capture de l'empereur Valérien en 260 est un fait unique dans l'histoire romaine.",
        "La guerre de 602 à 628 a affaibli Perses et Byzantins juste avant les conquêtes arabes."
      ],
      debats: [
        {
          question: "Pourquoi l'Empire sassanide est-il tombé si vite face aux Arabes ?",
          positions: [
            { titre: "Un empire épuisé", texte: "La guerre contre Byzance, la peste et une guerre civile après 628 avaient vidé les caisses et divisé l'aristocratie.", qui: "" },
            { titre: "Une société fracturée", texte: "Une partie de la population, chrétiens de Mésopotamie ou paysans écrasés d'impôts, n'avait pas de raison de défendre le régime.", qui: "" },
            { titre: "Une conquête plus lente qu'on ne le dit", texte: "La conquête du plateau iranien a pris des décennies, avec de nombreuses révoltes, et l'islamisation de la population a duré plusieurs siècles.", qui: "Parvaneh Pourshariati, Richard Bulliet" }
          ],
          etat: "Les historiens combinent ces facteurs. L'image d'une chute éclair est nuancée par la longueur de la résistance et de l'islamisation."
        }
      ],
      moinsConnu: "Le mouvement de Mazdak, à la fin du Ve siècle, prônait le partage des biens et a été soutenu un temps par le roi Kavadh Ier avant d'être écrasé. Certains y voient l'un des premiers mouvements égalitaires de l'histoire, d'autres une construction de ses adversaires.",
      evenements: [
        { annee: 260, titre: "Shapour Ier capture l'empereur Valérien", lieu: [37.27, 37.6] },
        { annee: 531, titre: "Règne de Khosro Ier", lieu: [33.09, 44.58] },
        { annee: 614, titre: "Les Perses prennent Jérusalem", lieu: [31.78, 35.23] },
        { annee: 636, titre: "Bataille de Qadisiyya", lieu: [31.8, 44.47] },
        { annee: 642, titre: "Bataille de Nahavand", lieu: [34.19, 48.37] }
      ]
    },
    {
      titre: 'Islamisation et renaissance persane',
      debut: 651, fin: 1220,
      chapo: "L'Iran devient musulman mais garde sa langue. Des dynasties iraniennes puis turques y font naître une brillante culture persane islamique.",
      recit: [
        "Sous les Omeyyades puis les Abbassides, l'Iran est intégré au califat. Les Iraniens jouent un rôle majeur dans l'administration et la culture : la révolution abbasside de 750 part du Khorassan. La conversion à l'islam s'étale sur plusieurs siècles.",
        "Aux IXe et Xe siècles, des dynasties locales comme les Samanides font renaître le persan, écrit désormais en alphabet arabe. Ferdowsi achève le Shahnameh vers 1010. Avicenne, Al-Biruni et Omar Khayyam illustrent l'âge d'or scientifique. Au XIe siècle, les Turcs seldjoukides prennent le pouvoir mais adoptent la culture persane."
      ],
      consensus: [
        "L'Iran est l'un des rares pays conquis par les Arabes à avoir gardé sa propre langue.",
        "Le persan devient une grande langue de culture et d'administration, de l'Anatolie à l'Inde.",
        "Des savants iraniens comme Avicenne ont influencé la médecine et la philosophie européennes."
      ],
      debats: [
        {
          question: "L'islam a-t-il été « imposé » aux Iraniens ?",
          positions: [
            { titre: "Une religion imposée", texte: "La conquête arabe aurait détruit la culture zoroastrienne et contraint les Iraniens à se convertir.", qui: "Nationalisme iranien du XXe siècle" },
            { titre: "Une conversion progressive", texte: "La majorité des Iraniens ne s'est convertie qu'au IXe ou Xe siècle, pour des raisons sociales et économiques. Les Iraniens ont ensuite profondément façonné la civilisation islamique.", qui: "Richard Bulliet, majorité des historiens" }
          ],
          etat: "La thèse d'une conversion lente et largement volontaire domine. Le débat a une forte charge politique dans l'Iran d'aujourd'hui."
        }
      ],
      moinsConnu: "Des zoroastriens ont fui vers l'Inde à partir du VIIIe ou Xe siècle : ce sont les Parsis, toujours présents à Bombay, d'où sont issues des familles comme les Tata. Des communautés zoroastriennes subsistent aussi en Iran, à Yazd et Kerman.",
      evenements: [
        { annee: 750, titre: "Révolution abbasside partie du Khorassan", lieu: [37.6, 61.83] },
        { annee: 900, titre: "Les Samanides à Boukhara, renaissance du persan", lieu: [39.77, 64.42] },
        { annee: 1010, titre: "Ferdowsi achève le Shahnameh", lieu: [36.27, 59.6] },
        { annee: 1037, titre: "Mort d'Avicenne à Hamadan", lieu: [34.8, 48.51] },
        { annee: 1092, titre: "Mort du vizir Nizam al-Mulk", lieu: [34.4, 47.9] }
      ]
    },
    {
      titre: 'Mongols et Timourides',
      debut: 1220, fin: 1501,
      chapo: "Les invasions mongoles dévastent l'Iran, puis les Ilkhanides et les Timourides en font un foyer de science, d'art et de poésie.",
      recit: [
        "En 1219 à 1221, les armées de Gengis Khan ravagent le Khorassan : Nichapour, Merv et d'autres villes sont détruites. En 1258, Hülegü prend Bagdad et fonde l'Ilkhanat, centré sur l'Iran. Ses successeurs se convertissent à l'islam en 1295 et construisent à Tabriz et Soltaniyeh.",
        "Hafez et Saadi composent leurs poèmes à Chiraz. À la fin du XIVe siècle, Tamerlan conquiert l'Iran avec une grande violence. Ses descendants, les Timourides, font de Hérat et Samarcande des capitales d'un art raffiné : miniatures, architecture, astronomie avec l'observatoire d'Ouloug Beg."
      ],
      consensus: [
        "Les invasions mongoles ont causé des destructions et une mortalité considérables en Iran.",
        "L'Ilkhanat a relié l'Iran à la Chine, favorisant les échanges artistiques et scientifiques.",
        "Hafez et Saadi sont encore récités par cœur par de nombreux Iraniens."
      ],
      debats: [
        {
          question: "Les Mongols ont-ils seulement détruit ?",
          positions: [
            { titre: "Une catastrophe", texte: "Massacres, ruine des systèmes d'irrigation, effondrement démographique : l'Iran aurait mis des siècles à s'en remettre.", qui: "Chroniqueurs persans, historiographie classique" },
            { titre: "Une ouverture", texte: "Une fois installés, les Mongols ont favorisé le commerce, les sciences et les échanges avec la Chine. L'historien Rachid al-Din écrit sous eux la première histoire du monde.", qui: "Thomas Allsen, Jack Weatherford" }
          ],
          etat: "Les deux aspects sont admis. Les historiens débattent surtout de l'ampleur réelle des massacres, que les chroniqueurs ont souvent exagérée."
        }
      ],
      moinsConnu: "L'observatoire de Maragha, fondé en 1259 par l'astronome Nasir al-Din Tusi sous protection mongole, a produit des modèles astronomiques que certains historiens rapprochent de ceux de Copernic, trois siècles plus tard.",
      evenements: [
        { annee: 1221, titre: "Destruction de Nichapour et Merv", lieu: [36.21, 58.8] },
        { annee: 1259, titre: "Observatoire de Maragha", lieu: [37.39, 46.24] },
        { annee: 1295, titre: "Conversion de l'ilkhan Ghazan à l'islam", lieu: [38.08, 46.29] },
        { annee: 1389, titre: "Mort de Hafez à Chiraz", lieu: [29.62, 52.53] },
        { annee: 1420, titre: "Observatoire d'Ouloug Beg à Samarcande", lieu: [39.67, 66.98] }
      ]
    },
    {
      titre: 'Safavides et Qadjars',
      debut: 1501, fin: 1905,
      chapo: "Les Safavides imposent le chiisme et refondent l'État iranien. Les Qadjars, affaiblis, cèdent des territoires à la Russie et des concessions aux Britanniques.",
      recit: [
        "En 1501, Ismaïl Ier fonde la dynastie safavide et impose le chiisme duodécimain comme religion d'État, souvent par la force. Chah Abbas Ier (1588 à 1629) fait d'Ispahan une capitale magnifique et combat les Ottomans. L'empire tombe en 1722 face à des Afghans.",
        "Après Nader Chah et les Zand, les Qadjars règnent à partir de 1789, avec Téhéran pour capitale. Ils perdent le Caucase au profit de la Russie (traités de 1813 et 1828). Les puissances européennes obtiennent concessions et privilèges. En 1891, la révolte du tabac force le chah à annuler une concession britannique."
      ],
      consensus: [
        "La conversion de l'Iran au chiisme date des Safavides : le pays était majoritairement sunnite avant 1501.",
        "Ispahan sous Chah Abbas est l'une des grandes capitales du monde au XVIIe siècle.",
        "Au XIXe siècle, l'Iran devient le terrain de rivalité entre la Russie et la Grande-Bretagne."
      ],
      debats: [
        {
          question: "Les Safavides ont-ils créé l'identité iranienne moderne ?",
          positions: [
            { titre: "Oui", texte: "En unissant le territoire et en imposant le chiisme face aux Ottomans sunnites, ils ont donné à l'Iran ses frontières et son identité.", qui: "" },
            { titre: "C'est plus ancien", texte: "La langue persane, la conscience d'un « Iran » et l'épopée nationale existaient bien avant eux. Les Safavides, d'origine turcophone, ont utilisé cet héritage.", qui: "" }
          ],
          etat: "Les historiens voient les Safavides comme une étape décisive, mais pas comme un point de départ absolu."
        }
      ],
      moinsConnu: "La famine de 1870 à 1872 a tué peut-être 10 % de la population iranienne. Une autre famine pendant la Première Guerre mondiale, alors que le pays était occupé par des troupes étrangères bien que neutre, a fait des centaines de milliers de morts, voire davantage.",
      evenements: [
        { annee: 1501, titre: "Ismaïl Ier fonde la dynastie safavide", lieu: [38.08, 46.29] },
        { annee: 1598, titre: "Ispahan devient capitale", lieu: [32.65, 51.67] },
        { annee: 1722, titre: "Chute d'Ispahan face aux Afghans", lieu: [32.65, 51.67] },
        { annee: 1739, titre: "Nader Chah pille Delhi", lieu: [28.65, 77.23] },
        { annee: 1828, titre: "Traité de Turkmanchai : perte du Caucase", lieu: [37.6, 47.4] },
        { annee: 1891, titre: "Révolte du tabac", lieu: [35.69, 51.39] }
      ]
    },
    {
      titre: 'Constitution, Pahlavi et pétrole',
      debut: 1905, fin: 1979,
      chapo: "Une révolution constitutionnelle, une dynastie modernisatrice et autoritaire, et un coup d'État lié au pétrole.",
      recit: [
        "La révolution constitutionnelle de 1905 à 1911 crée un Parlement, le Majlis. Le pétrole est découvert en 1908 et exploité par une compagnie britannique. En 1925, Reza Khan fonde la dynastie Pahlavi : il modernise l'armée, l'école et le droit, et interdit le voile en 1936.",
        "Les Alliés le forcent à abdiquer en 1941 au profit de son fils, Mohammad Reza. Le Premier ministre Mossadegh nationalise le pétrole en 1951. En 1953, il est renversé par un coup d'État organisé par la CIA et les services britanniques. Le chah gouverne ensuite de façon de plus en plus autoritaire, avec la police politique SAVAK, tout en lançant la « révolution blanche »."
      ],
      consensus: [
        "Le coup d'État de 1953 contre Mossadegh a été organisé avec la CIA et le MI6, ce que les États-Unis ont reconnu.",
        "Les Pahlavi ont modernisé le pays par le haut, de façon autoritaire.",
        "La SAVAK a pratiqué la torture contre les opposants."
      ],
      debats: [
        {
          question: "Le coup de 1953 : œuvre étrangère ou crise iranienne ?",
          positions: [
            { titre: "Un coup étranger", texte: "Sans la CIA et le MI6, Mossadegh n'aurait pas été renversé. Le coup a détruit la démocratie iranienne et nourri l'anti-américanisme de 1979.", qui: "Ervand Abrahamian, Stephen Kinzer" },
            { titre: "Des acteurs iraniens décisifs", texte: "Le clergé, l'armée, le chah et une partie de la population s'étaient retournés contre Mossadegh. L'aide étrangère a compté mais n'explique pas tout.", qui: "Darioush Bayandor, Ray Takeyh" }
          ],
          etat: "Le rôle américain et britannique est établi par les archives. Le débat porte sur le poids des acteurs iraniens."
        }
      ],
      moinsConnu: "Les femmes iraniennes ont joué un rôle actif dans la révolution constitutionnelle, en créant des associations et des écoles. Elles obtiennent le droit de vote en 1963 sous le chah.",
      evenements: [
        { annee: 1906, titre: "Premier Parlement (Majlis)", lieu: [35.69, 51.42] },
        { annee: 1908, titre: "Découverte du pétrole à Masjed Soleiman", lieu: [31.94, 49.3] },
        { annee: 1925, titre: "Reza Chah fonde la dynastie Pahlavi", lieu: [35.69, 51.39] },
        { annee: 1951, titre: "Nationalisation du pétrole", lieu: [35.69, 51.39] },
        { annee: 1953, titre: "Coup d'État contre Mossadegh", lieu: [35.69, 51.39] }
      ]
    },
    {
      titre: 'La République islamique',
      debut: 1979, fin: 2026,
      chapo: "Une révolution populaire renverse le chah et aboutit à un régime théocratique, marqué par les guerres, les sanctions et des contestations répétées.",
      recit: [
        "En 1978 et 1979, une révolution réunit religieux, libéraux, marxistes et étudiants. Le chah s'exile, l'ayatollah Khomeini rentre et fonde la République islamique, dirigée par un Guide suprême. L'ambassade américaine est occupée. Le voile devient obligatoire et les opposants sont éliminés.",
        "L'Irak de Saddam Hussein envahit l'Iran en 1980 : la guerre dure huit ans et fait plusieurs centaines de milliers de morts. Le régime alterne phases réformatrices et conservatrices. Le programme nucléaire entraîne des sanctions. Les manifestations de 2009, puis « Femme, vie, liberté » en 2022 après la mort de Mahsa Amini, sont durement réprimées.",
        "Le 28 février 2026, les États-Unis et Israël lancent une offensive contre l'Iran. Le Guide suprême Ali Khamenei est tué dès le premier jour ; l'Assemblée des experts désigne son fils Mojtaba Khamenei pour lui succéder. L'Iran riposte contre les pays du Golfe et ferme le détroit d'Ormuz, par où transitait environ un cinquième du pétrole mondial. Un protocole d'accord est signé en juin, mais les affrontements autour du détroit reprennent ensuite."
      ],
      consensus: [
        "La révolution de 1979 a été un mouvement de masse rassemblant des courants très divers.",
        "La guerre Iran-Irak (1980 à 1988) est l'une des plus meurtrières de la fin du XXe siècle, avec l'usage d'armes chimiques par l'Irak.",
        "En 1988, des milliers de prisonniers politiques ont été exécutés en quelques semaines."
      ],
      debats: [
        {
          question: "La révolution de 1979 était-elle d'abord islamique ?",
          positions: [
            { titre: "Une révolution religieuse", texte: "Le clergé chiite et ses réseaux de mosquées ont porté et dirigé le mouvement.", qui: "Récit officiel de la République islamique" },
            { titre: "Une révolution confisquée", texte: "La révolution était plurielle : libéraux, gauche et femmes y ont joué un rôle majeur avant d'être écartés par les islamistes de Khomeini.", qui: "Ervand Abrahamian, nombreux exilés" }
          ],
          etat: "Les historiens décrivent une révolution plurielle, dont les religieux ont pris le contrôle grâce à leur organisation et au charisme de Khomeini."
        }
      ],
      moinsConnu: "L'Iran est un pays jeune, très urbanisé, avec plus de femmes que d'hommes à l'université depuis les années 2000. Ce contraste entre la société et le régime aide à comprendre les mouvements de contestation.",
      evenements: [
        { annee: 1979, titre: "Révolution, retour de Khomeini", lieu: [35.69, 51.39] },
        { annee: 1980, titre: "Invasion irakienne, début de la guerre", lieu: [30.43, 48.17] },
        { annee: 1988, titre: "Fin de la guerre et exécutions de prisonniers", lieu: [35.69, 51.39] },
        { annee: 2009, titre: "Mouvement vert", lieu: [35.7, 51.4] },
        { annee: 2015, titre: "Accord sur le nucléaire", lieu: [48.2, 16.37] },
        { annee: 2022, titre: "Mouvement « Femme, vie, liberté »", lieu: [35.69, 51.39] },
        { annee: 2026, titre: "Offensive américano-israélienne, mort de Khamenei, fermeture d'Ormuz", texte: "Guerre déclenchée le 28 février 2026.", lieu: [27.1, 56.3] }
      ]
    }
  ]
});
