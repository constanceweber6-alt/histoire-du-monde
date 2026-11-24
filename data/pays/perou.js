HISTOIRE.ajouterPays({
  id: 'perou',
  nom: 'Pérou',
  region: 'amerique-sud',
  accroche: "Moche, Nazca, Wari puis l'immense Empire inca, conquis par une poignée d'Espagnols, cœur de l'empire colonial, puis une république marquée par les fractures entre côte et Andes.",
  intro: "Le Pérou a vu naître certaines des plus grandes civilisations des Amériques, qui se sont développées sans écriture alphabétique, sans roue pour le transport et sans contact avec l'Ancien Monde. Ses fractures actuelles, entre Lima et les Andes, entre créoles et autochtones, plongent leurs racines dans la conquête.",
  sources: "John Hemming, La Conquête des Incas ; Nathan Wachtel, La Vision des vaincus ; Carlos Contreras et Marcos Cueto, Historia del Perú contemporáneo.",
  phases: [
    {
      titre: 'Moche, Nazca et Wari',
      debut: 1, fin: 1438,
      chapo: "Sur la côte désertique et dans les Andes, des civilisations brillantes se succèdent, maîtrisant l'irrigation, la métallurgie et l'art.",
      recit: [
        "Au début de notre ère, les Moche, sur la côte nord, construisent d'immenses pyramides de terre crue et produisent des céramiques très réalistes. La tombe du seigneur de Sipán, découverte en 1987, révèle leur richesse. Au sud, les Nazca tracent dans le désert des géoglyphes géants.",
        "Entre 600 et 1000, l'empire Wari, centré près d'Ayacucho, et Tiwanaku, autour du lac Titicaca, dominent les Andes. Après eux, le royaume Chimú, avec sa capitale Chan Chan, la plus grande ville en terre crue d'Amérique, domine la côte nord."
      ],
      consensus: [
        "Les Moche ont été de grands bâtisseurs et céramistes.",
        "Les lignes de Nazca sont des géoglyphes tracés entre 500 av. J.-C. et 500 apr. J.-C.",
        "Chan Chan, capitale chimú, est la plus grande ville en terre crue des Amériques."
      ],
      debats: [
        {
          question: "À quoi servaient les lignes de Nazca ?",
          positions: [
            { titre: "Un calendrier astronomique", texte: "Les lignes indiqueraient les levers du soleil et des étoiles à certaines dates.", qui: "Maria Reiche" },
            { titre: "Des chemins rituels", texte: "Les lignes auraient été parcourues lors de cérémonies liées à l'eau et à la fertilité, dans un désert où l'eau est vitale.", qui: "Johan Reinhard, archéologues actuels" }
          ],
          etat: "Les archéologues privilégient aujourd'hui une fonction rituelle liée à l'eau. Les théories extraterrestres, populaires, n'ont aucun fondement scientifique."
        }
      ],
      moinsConnu: "Caral, sur la côte centrale, est l'une des plus anciennes villes des Amériques, contemporaine des pyramides d'Égypte, vers 2600 av. J.-C. Elle témoigne d'une civilisation bien antérieure aux Incas.",
      evenements: [
        { annee: 250, titre: "Tombe du seigneur de Sipán", lieu: [-6.8, -79.6] },
        { annee: 300, titre: "Lignes de Nazca", lieu: [-14.74, -75.13] },
        { annee: 700, titre: "Empire Wari", lieu: [-13.06, -74.2] },
        { annee: 1300, titre: "Chan Chan, capitale chimú", lieu: [-8.11, -79.07] }
      ]
    },
    {
      titre: "L'Empire inca",
      debut: 1438, fin: 1532,
      chapo: "En moins d'un siècle, les Incas de Cuzco bâtissent le plus grand empire des Amériques, de l'Équateur au Chili.",
      recit: [
        "Vers 1438, l'Inca Pachacutec transforme le petit royaume de Cuzco en empire, le Tawantinsuyu. Ses successeurs conquièrent un territoire de près de 4 000 km de long, peuplé d'environ 10 millions d'habitants. Machu Picchu est construit vers 1450.",
        "L'empire est relié par un réseau de 30 000 km de routes. Il n'utilise pas la monnaie : l'État organise le travail obligatoire, la mita, et redistribue les récoltes stockées. Les comptes sont tenus avec des cordelettes à nœuds, les quipus. Vers 1527, une guerre civile oppose deux fils de l'Inca, Huáscar et Atahualpa."
      ],
      consensus: [
        "L'Empire inca a été le plus vaste État des Amériques précolombiennes.",
        "Le réseau routier inca (Qhapaq Ñan) couvrait environ 30 000 km.",
        "Une guerre civile divisait l'empire à l'arrivée des Espagnols."
      ],
      debats: [
        {
          question: "L'Empire inca : État socialiste ou empire conquérant ?",
          positions: [
            { titre: "Un « empire socialiste »", texte: "L'État inca aurait garanti à chacun nourriture et sécurité grâce à la redistribution, sans propriété privée ni faim.", qui: "Louis Baudin (1928)" },
            { titre: "Un empire de conquête", texte: "Les Incas ont soumis par la force de nombreux peuples, déplacé des populations entières (mitimaes) et imposé le travail obligatoire.", qui: "John Murra, María Rostworowski" }
          ],
          etat: "Les historiens rejettent l'image d'un « socialisme » inca, tout en reconnaissant l'efficacité de son système de redistribution."
        }
      ],
      moinsConnu: "Les quipus, cordelettes à nœuds, servaient aux comptes, mais certains chercheurs pensent qu'ils pouvaient aussi enregistrer des récits. Leur déchiffrement complet reste un défi.",
      evenements: [
        { annee: 1438, titre: "Pachacutec fonde l'empire", lieu: [-13.53, -71.97] },
        { annee: 1450, titre: "Construction de Machu Picchu", lieu: [-13.16, -72.55] },
        { annee: 1527, titre: "Guerre civile entre Huáscar et Atahualpa", lieu: [-13.53, -71.97] }
      ]
    },
    {
      titre: 'Conquête et vice-royauté',
      debut: 1532, fin: 1821,
      chapo: "Francisco Pizarro capture Atahualpa en 1532. Le Pérou devient le cœur de l'empire espagnol en Amérique du Sud, avec l'argent de Potosí.",
      recit: [
        "En 1532, à Cajamarca, Pizarro et moins de 200 Espagnols capturent l'Inca Atahualpa, qui paie une rançon d'or et d'argent avant d'être exécuté en 1533. Les épidémies, la guerre et la mita minière font chuter la population. Un État inca résiste à Vilcabamba jusqu'en 1572.",
        "Lima, fondée en 1535, devient la capitale d'une vice-royauté qui couvre presque toute l'Amérique du Sud espagnole. En 1780, Túpac Amaru II mène la plus grande révolte autochtone de l'époque coloniale, écrasée dans le sang. L'indépendance est proclamée en 1821 par San Martín."
      ],
      consensus: [
        "La capture d'Atahualpa à Cajamarca en 1532 marque le début de la conquête.",
        "La population andine a chuté de façon dramatique au XVIe siècle.",
        "La révolte de Túpac Amaru II (1780) est la plus grande insurrection autochtone de l'époque coloniale."
      ],
      debats: [
        {
          question: "Comment si peu d'Espagnols ont-ils vaincu l'Empire inca ?",
          positions: [
            { titre: "La supériorité technique", texte: "Armes à feu, acier, chevaux et épidémies auraient donné un avantage décisif aux conquérants.", qui: "Jared Diamond" },
            { titre: "Les alliés autochtones", texte: "Les Espagnols ont profité de la guerre civile et ont été aidés par des milliers d'alliés andins, comme les Cañaris et les Chachapoyas, qui voulaient se libérer des Incas.", qui: "Historiens actuels, Matthew Restall" }
          ],
          etat: "Les historiens insistent sur le rôle décisif des alliés autochtones et de la guerre civile, sans nier l'effet des épidémies."
        }
      ],
      moinsConnu: "Felipe Guamán Poma de Ayala, un noble andin, a écrit vers 1615 une lettre illustrée de près de 1 200 pages au roi d'Espagne pour dénoncer les abus coloniaux. Retrouvée à Copenhague en 1908, elle est une source exceptionnelle.",
      evenements: [
        { annee: 1532, titre: "Capture d'Atahualpa à Cajamarca", lieu: [-7.16, -78.51] },
        { annee: 1535, titre: "Fondation de Lima", lieu: [-12.05, -77.04] },
        { annee: 1572, titre: "Chute de Vilcabamba, exécution de Túpac Amaru Ier", lieu: [-13.53, -71.97] },
        { annee: 1780, titre: "Révolte de Túpac Amaru II", lieu: [-14.27, -71.23] },
        { annee: 1821, titre: "Proclamation de l'indépendance", lieu: [-12.05, -77.04] }
      ]
    },
    {
      titre: 'La République et la guerre du Pacifique',
      debut: 1821, fin: 1968,
      chapo: "Une république instable, enrichie un temps par le guano, défaite par le Chili, et dominée par une oligarchie face à des Andes marginalisées.",
      recit: [
        "Après l'indépendance, consolidée par Bolívar et la bataille d'Ayacucho (1824), les caudillos militaires se succèdent. Au milieu du XIXe siècle, l'exportation du guano, engrais d'oiseaux marins, enrichit l'État. Des travailleurs chinois sous contrat, les coolies, sont employés dans des conditions proches de l'esclavage.",
        "La guerre du Pacifique (1879 à 1884) contre le Chili est un désastre : Lima est occupée et le Pérou perd des provinces du sud. Au XXe siècle, l'APRA de Víctor Raúl Haya de la Torre défend les classes populaires et les autochtones face à l'oligarchie."
      ],
      consensus: [
        "La bataille d'Ayacucho (1824) met fin à la domination espagnole en Amérique du Sud.",
        "Environ 100 000 travailleurs chinois sont arrivés au Pérou entre 1849 et 1874.",
        "La guerre du Pacifique a fait perdre au Pérou des territoires riches en salpêtre."
      ],
      debats: [
        {
          question: "Pourquoi le Pérou a-t-il perdu la guerre du Pacifique ?",
          positions: [
            { titre: "Une faiblesse de l'État", texte: "Divisions politiques, caudillos rivaux et finances ruinées après la fin du guano auraient laissé le pays sans défense.", qui: "Jorge Basadre" },
            { titre: "Une société fracturée", texte: "Les élites créoles se méfiaient des paysans autochtones et n'ont pas voulu d'une mobilisation nationale. Certains ont même préféré l'occupant à une révolte paysanne.", qui: "Heraclio Bonilla, Florencia Mallon" }
          ],
          etat: "Les deux lectures se complètent. Le débat a nourri une réflexion durable sur l'exclusion des peuples autochtones de la nation péruvienne."
        }
      ],
      moinsConnu: "La cuisine péruvienne doit beaucoup aux immigrants chinois et japonais : le « chifa » (cuisine sino-péruvienne) et le « nikkei » (japonais-péruvien) sont devenus des emblèmes nationaux.",
      evenements: [
        { annee: 1824, titre: "Bataille d'Ayacucho", lieu: [-13.0, -74.13] },
        { annee: 1849, titre: "Arrivée des premiers travailleurs chinois", lieu: [-12.05, -77.04] },
        { annee: 1881, titre: "Occupation de Lima par le Chili", lieu: [-12.05, -77.04] },
        { annee: 1924, titre: "Fondation de l'APRA", lieu: [-12.05, -77.04] }
      ]
    },
    {
      titre: 'Militaires, Sentier lumineux et Fujimori',
      debut: 1968, fin: 2000,
      chapo: "Une dictature militaire réformiste, puis une guerre interne contre le Sentier lumineux, et le régime autoritaire d'Alberto Fujimori.",
      recit: [
        "En 1968, le général Juan Velasco Alvarado prend le pouvoir et lance une grande réforme agraire, nationalise le pétrole et reconnaît le quechua comme langue officielle. La démocratie revient en 1980.",
        "La même année, le Sentier lumineux, guérilla maoïste, déclenche une guerre d'une grande violence. Alberto Fujimori, élu en 1990, dissout le Congrès en 1992 (« auto-coup d'État »), fait capturer le chef du Sentier, Abimael Guzmán, et vainc l'hyperinflation. Son régime est corrompu et responsable de massacres et de stérilisations forcées. Il fuit au Japon en 2000."
      ],
      consensus: [
        "Le conflit interne (1980 à 2000) a fait environ 70 000 morts, dont 75 % de langue quechua.",
        "Le Sentier lumineux est responsable de la plus grande partie des morts, mais l'armée aussi de massacres.",
        "Alberto Fujimori a été condamné en 2009 pour violations des droits humains et corruption."
      ],
      debats: [
        {
          question: "Fujimori : sauveur du pays ou dictateur ?",
          positions: [
            { titre: "Le sauveur", texte: "Il a vaincu le Sentier lumineux et l'hyperinflation, et redressé un pays au bord de l'effondrement.", qui: "Fujimoristes, une partie de l'opinion" },
            { titre: "Un dictateur", texte: "Il a fermé le Congrès, couvert des escadrons de la mort, fait stériliser de force plus de 270 000 femmes, surtout autochtones, et organisé une corruption massive.", qui: "Commission de la vérité, justice péruvienne" }
          ],
          etat: "La justice a condamné Fujimori, mort en 2024. Le pays reste profondément divisé sur son héritage, comme le montre l'élection de sa fille Keiko en 2026."
        }
      ],
      moinsConnu: "La Commission de la vérité et de la réconciliation (2003) a révélé que le nombre de morts était près de trois fois supérieur aux estimations, et que la majorité des victimes étaient des paysans andins dont la mort était passée presque inaperçue à Lima.",
      evenements: [
        { annee: 1969, titre: "Réforme agraire de Velasco", lieu: [-12.05, -77.04] },
        { annee: 1980, titre: "Début de la lutte armée du Sentier lumineux", lieu: [-13.16, -74.22] },
        { annee: 1992, titre: "Auto-coup d'État de Fujimori, capture de Guzmán", lieu: [-12.05, -77.04] },
        { annee: 2000, titre: "Fuite de Fujimori au Japon", lieu: [-12.05, -77.04] }
      ]
    },
    {
      titre: 'Une démocratie instable',
      debut: 2000, fin: 2026,
      chapo: "Une croissance forte grâce aux mines, mais une crise politique permanente, avec des présidents destitués, emprisonnés ou poussés au départ.",
      recit: [
        "Le Pérou connaît une forte croissance tirée par le cuivre et l'or. Mais presque tous les présidents depuis 2000 ont été poursuivis pour corruption, notamment dans le scandale Odebrecht. En 2022, le président Pedro Castillo, instituteur rural de gauche, tente de dissoudre le Congrès, est destitué et arrêté. La répression des manifestations qui suivent fait des dizaines de morts dans le sud andin.",
        "Huit présidents se succèdent entre 2016 et 2026. En juin 2026, Keiko Fujimori, fille d'Alberto Fujimori, remporte de justesse le second tour de la présidentielle face au candidat de gauche Roberto Sánchez."
      ],
      consensus: [
        "Plusieurs anciens présidents péruviens ont été poursuivis ou condamnés pour corruption.",
        "Les manifestations de 2022 et 2023 ont fait des dizaines de morts, surtout dans le sud andin.",
        "Le pays reste divisé entre Lima et les régions andines."
      ],
      debats: [
        {
          question: "Pourquoi le Pérou est-il si instable politiquement ?",
          positions: [
            { titre: "La faute des institutions", texte: "La Constitution permet au Congrès de destituer facilement le président pour « incapacité morale », ce qui rend tout pouvoir fragile.", qui: "Constitutionnalistes" },
            { titre: "Une fracture sociale", texte: "Les partis sont faibles et le fossé entre Lima et les régions pauvres, souvent autochtones, empêche toute majorité stable.", qui: "Politistes, Alberto Vergara" }
          ],
          etat: "Les chercheurs combinent ces facteurs. La question est au cœur de la vie politique du pays."
        }
      ],
      moinsConnu: "Machu Picchu n'a jamais été « perdu » : des familles paysannes vivaient et cultivaient sur le site quand l'explorateur américain Hiram Bingham l'a fait connaître au monde en 1911.",
      evenements: [
        { annee: 2001, titre: "Retour à la démocratie", lieu: [-12.05, -77.04] },
        { annee: 2022, titre: "Destitution de Pedro Castillo", lieu: [-12.05, -77.04] },
        { annee: 2026, titre: "Élection de Keiko Fujimori", lieu: [-12.05, -77.04] }
      ]
    }
  ]
});
