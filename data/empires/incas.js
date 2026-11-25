HISTOIRE.ajouterEmpire({
  id: 'incas',
  nom: 'Empire inca',
  region: 'amerique-sud',
  aire: "Le long des Andes, de l'Équateur au Chili",
  debut: 1438, fin: 1572,
  accroche: "Le plus grand empire des Amériques, bâti en moins d'un siècle sans roue ni écriture alphabétique. Une guerre civile et une épidémie précèdent l'arrivée de 168 Espagnols à Cajamarca.",
  intro: "Les Incas appelaient leur empire Tawantinsuyu, les « quatre parties réunies ». Partis de la vallée de Cuzco, ils soumettent en quelques décennies un territoire de plus de 4 000 kilomètres le long des Andes, relié par un immense réseau de routes. Ils gouvernent des millions de personnes grâce au travail obligatoire, aux greniers et aux quipus, des cordelettes à nœuds. En 1532, au sortir d'une guerre civile, l'Inca Atahualpa est capturé par Francisco Pizarro. La résistance se poursuit jusqu'en 1572.",
  sources: "Nathan Wachtel, La vision des vaincus ; Terence D'Altroy, The Incas ; Franklin Pease, Los Incas ; Felipe Guamán Poma de Ayala, Nueva corónica y buen gobierno ; Kim MacQuarrie, Les derniers jours des Incas.",
  paysActuels: ['perou', 'bolivie', 'equateur', 'chili', 'argentine', 'colombie'],
  phases: [
    {
      titre: "Pachacutec et l'expansion",
      debut: 1438, fin: 1493,
      chapo: "Après avoir repoussé les Chancas, Pachacutec transforme un petit royaume de la région de Cuzco en empire. Son fils Topa Inca le porte jusqu'au Chili.",
      recit: [
        "Selon la tradition, vers 1438, le prince Cusi Yupanqui défend Cuzco contre les Chancas alors que son père a fui. Devenu l'Inca Pachacutec, « celui qui transforme le monde », il rebâtit Cuzco, réorganise la religion autour du Soleil et lance les conquêtes.",
        "Son fils Topa Inca Yupanqui soumet le royaume chimú de la côte nord, l'actuelle Bolivie, le nord-ouest de l'Argentine et le Chili jusqu'au río Maule. Machu Picchu est probablement construit à cette époque comme domaine royal."
      ],
      consensus: [
        "L'expansion inca a été extraordinairement rapide, en moins d'un siècle.",
        "Pachacutec est considéré comme le fondateur de l'empire.",
        "Les dates précises de cette époque sont incertaines, car elles viennent de chroniques espagnoles."
      ],
      debats: [
        {
          question: "Les chroniques de l'expansion sont-elles fiables ?",
          positions: [
            { titre: "Une chronologie utilisable", texte: "Les chroniqueurs espagnols ont recueilli les récits des nobles incas, qui donnent une succession cohérente des souverains et de leurs conquêtes.", qui: "Historiens s'appuyant sur Cieza de León et Betanzos" },
            { titre: "Une histoire dynastique arrangée", texte: "Ces récits étaient des histoires officielles des lignages royaux, chacun grossissant le rôle de son ancêtre. La datation au carbone 14 suggère que l'expansion a commencé plus tôt que 1438.", qui: "Archéologues, travaux récents de datation" }
          ],
          etat: "La date de 1438 reste un repère commode, mais des datations récentes laissent penser que l'expansion a débuté quelques décennies plus tôt."
        }
      ],
      moinsConnu: "Le nom Inca désignait d'abord le souverain et la noblesse de Cuzco, pas l'ensemble des peuples de l'empire, qui parlaient de nombreuses langues.",
      evenements: [
        { annee: 1438, titre: "Victoire contre les Chancas", lieu: [-13.53, -71.97] },
        { annee: 1450, titre: "Construction de Machu Picchu", lieu: [-13.16, -72.55] },
        { annee: 1470, titre: "Conquête du royaume chimú", lieu: [-8.11, -79.07] },
        { annee: 1485, titre: "Conquêtes jusqu'au Chili central", lieu: [-35.3, -71.5] }
      ],
      acteurs: [
        ["Pachacutec", "règne vers 1438-1471", "Fondateur de l'empire"],
        ["Topa Inca Yupanqui", "règne vers 1471-1493", "Grand conquérant"],
        ["Minchançaman", "XVe siècle", "Dernier roi chimú"]
      ]
    },
    {
      titre: "L'empire des routes et des quipus",
      debut: 1493, fin: 1527,
      chapo: "Huayna Capac étend l'empire vers le nord. Un État sans monnaie ni marché fonctionne grâce au travail obligatoire, aux greniers et aux déplacements de population.",
      recit: [
        "Huayna Capac mène de longues campagnes dans l'actuel Équateur et réside souvent à Tomebamba, loin de Cuzco. Le Qhapaq Ñan, réseau de plus de 30 000 kilomètres de chemins, relie l'empire ; des coureurs se relaient pour transmettre les messages.",
        "Chaque communauté doit des journées de travail à l'État, la mit'a, pour cultiver ses terres, construire ou combattre. Les greniers stockent les surplus. Les Incas déplacent des communautés entières, les mitmaq, pour peupler ou surveiller les régions conquises."
      ],
      consensus: [
        "Le réseau routier inca est inscrit au patrimoine mondial de l'UNESCO.",
        "L'État reposait sur le travail et non sur l'impôt en monnaie.",
        "Les quipus servaient au moins à la comptabilité et aux recensements."
      ],
      debats: [
        {
          question: "L'empire inca était-il un « empire socialiste » ?",
          positions: [
            { titre: "Un État-providence", texte: "Greniers publics, redistribution, absence de misère : l'empire aurait garanti la subsistance de chacun.", qui: "Louis Baudin (L'Empire socialiste des Inka, 1928), lectures idéalisées" },
            { titre: "Un empire autoritaire et tributaire", texte: "Le système reposait sur le travail forcé, les déplacements de population et la domination d'une élite qui captait les surplus.", qui: "John Murra, Terence D'Altroy, historiens actuels" }
          ],
          etat: "Les historiens rejettent l'étiquette socialiste, anachronique, tout en reconnaissant l'efficacité de la redistribution inca."
        },
        {
          question: "Les quipus étaient-ils une écriture ?",
          positions: [
            { titre: "Un simple outil de comptage", texte: "Les nœuds enregistraient des nombres selon un système décimal ; le sens était gardé en mémoire par des spécialistes.", qui: "Interprétation classique" },
            { titre: "Un système plus riche", texte: "Couleurs, sens des nœuds et types de fils auraient pu encoder des noms ou des récits.", qui: "Gary Urton, Sabine Hyland" }
          ],
          etat: "La lecture numérique est établie ; la possibilité d'un contenu narratif reste une hypothèse de recherche."
        }
      ],
      moinsConnu: "Les Incas ne connaissaient ni la roue utilitaire ni le fer, et l'empire fonctionnait sans monnaie : la richesse se comptait en travail et en tissus, très précieux.",
      evenements: [
        { annee: 1500, titre: "Campagnes de Huayna Capac en Équateur", lieu: [-2.9, -79.0] },
        { annee: 1510, titre: "Apogée du réseau routier", lieu: [-13.53, -71.97] }
      ],
      acteurs: [
        ["Huayna Capac", "mort vers 1527", "Dernier Inca de l'empire uni"],
        ["Mama Ocllo", "XVe-XVIe siècles", "Coya, épouse et sœur de Topa Inca"],
        ["Quipucamayocs", "XVe-XVIe siècles", "Spécialistes chargés des quipus"]
      ]
    },
    {
      titre: "Guerre civile, Cajamarca et Vilcabamba",
      debut: 1527, fin: 1572,
      chapo: "Une épidémie tue Huayna Capac et son héritier. Ses fils Huáscar et Atahualpa se font la guerre. Atahualpa vient de l'emporter quand il est capturé par Pizarro en 1532.",
      recit: [
        "Vers 1527, une épidémie, probablement la variole arrivée avant les Espagnols, tue Huayna Capac et son héritier désigné. Huáscar à Cuzco et Atahualpa au nord s'affrontent dans une guerre très meurtrière. Atahualpa l'emporte en 1532.",
        "Le 16 novembre 1532, à Cajamarca, Atahualpa vient rencontrer les 168 Espagnols de Pizarro avec une escorte peu armée. Il est capturé, verse une rançon d'or et d'argent, puis est exécuté en 1533. Manco Inca se révolte en 1536 et fonde un État indépendant à Vilcabamba. Le dernier souverain, Túpac Amaru, est exécuté à Cuzco en 1572."
      ],
      consensus: [
        "La guerre civile a profondément divisé l'empire juste avant l'arrivée des Espagnols.",
        "La capture d'Atahualpa à Cajamarca a été un coup décisif.",
        "La résistance inca a duré près de quarante ans après Cajamarca."
      ],
      debats: [
        {
          question: "Comment 168 Espagnols ont-ils pu renverser l'empire ?",
          positions: [
            { titre: "La supériorité technique", texte: "Acier, chevaux, armes à feu et tactiques forgées en Europe donnaient un avantage écrasant en combat.", qui: "Jared Diamond (De l'inégalité parmi les sociétés), récit classique" },
            { titre: "Un empire déjà affaibli", texte: "L'épidémie et la guerre civile avaient tué des dirigeants, divisé les élites et épuisé l'armée.", qui: "Nathan Wachtel, Franklin Pease" },
            { titre: "Les alliés indigènes", texte: "Cañaris, Chachapoyas et partisans de Huáscar, qui détestaient Atahualpa ou les Incas, ont combattu aux côtés des Espagnols par milliers.", qui: "Historiens récents de la conquête" }
          ],
          etat: "Les historiens combinent ces trois facteurs ; l'idée d'une victoire due aux seuls Espagnols est abandonnée."
        }
      ],
      moinsConnu: "Vers 1615, Felipe Guamán Poma de Ayala, noble andin, adressa au roi d'Espagne une chronique de près de 1 200 pages illustrées dénonçant les abus coloniaux. Elle ne fut redécouverte qu'en 1908, à Copenhague.",
      evenements: [
        { annee: 1527, titre: "Mort de Huayna Capac lors d'une épidémie", lieu: [-0.22, -78.51] },
        { annee: 1532, titre: "Capture d'Atahualpa à Cajamarca", lieu: [-7.16, -78.51] },
        { annee: 1533, titre: "Exécution d'Atahualpa", lieu: [-7.16, -78.51] },
        { annee: 1536, titre: "Révolte de Manco Inca et siège de Cuzco", lieu: [-13.53, -71.97] },
        { annee: 1572, titre: "Exécution de Túpac Amaru", lieu: [-13.53, -71.97] }
      ],
      acteurs: [
        ["Huáscar", "mort en 1532", "Inca de Cuzco, vaincu par son frère"],
        ["Atahualpa", "vers 1502-1533", "Dernier Inca de l'empire"],
        ["Francisco Pizarro", "vers 1478-1541", "Conquistador"],
        ["Manco Inca", "vers 1516-1544", "Chef de la résistance"],
        ["Túpac Amaru", "mort en 1572", "Dernier souverain de Vilcabamba"]
      ]
    }
  ],
  lecons: [
    {
      titre: "L'excès de confiance du vainqueur",
      texte: "Atahualpa venait de vaincre son frère et commandait une armée immense. Il jugeait sans danger une poignée d'étrangers et vint à Cajamarca presque sans armes. Cette confiance lui coûta l'empire.",
      objection: "Atahualpa ignorait tout des armes et des méthodes espagnoles, et rien dans l'expérience andine ne laissait prévoir une capture au milieu de son armée. Son erreur n'est évidente qu'après coup."
    },
    {
      titre: "Un pouvoir trop concentré se paralyse",
      texte: "Tout reposait sur la personne de l'Inca, fils du Soleil. Sa capture a paralysé l'appareil d'État, qui attendait ses ordres.",
      objection: "La résistance a continué pendant quarante ans sous Manco Inca et ses fils, ce qui montre que la structure n'était pas aussi dépendante d'un seul homme."
    },
    {
      titre: "Un empire jeune est un empire fragile",
      texte: "Beaucoup de peuples avaient été conquis depuis moins de deux générations et déplacés de force. Ils ont vu dans les Espagnols un moyen de se libérer des Incas.",
      objection: "Ces peuples ont ensuite subi une domination coloniale bien plus dure ; leur choix ne prouve pas que l'empire inca était plus mal accepté qu'un autre."
    }
  ]
});
