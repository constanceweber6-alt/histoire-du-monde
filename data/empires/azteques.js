HISTOIRE.ajouterEmpire({
  id: 'azteques',
  nom: 'Empire aztèque',
  region: 'amerique-nord',
  aire: "Centre et sud du Mexique",
  debut: 1428, fin: 1521,
  accroche: "Tenochtitlan, ville lacustre plus grande que la plupart des villes d'Europe, une Triple Alliance qui exige tributs et captifs, puis une chute en deux ans face à Cortés et à ses dizaines de milliers d'alliés indigènes.",
  intro: "Les Mexicas, un peuple venu du nord, fondent Tenochtitlan sur une île du lac de Texcoco vers 1325. En 1428, ils forment avec Texcoco et Tlacopan une Triple Alliance qui soumet une grande partie du Mexique central et du sud. L'empire repose sur le tribut et la guerre, qui fournit aussi des captifs pour les sacrifices. Entre 1519 et 1521, l'arrivée des Espagnols, l'alliance de peuples hostiles aux Mexicas et une épidémie de variole provoquent sa chute.",
  sources: "Serge Gruzinski, Le destin brisé de l'empire aztèque ; Camilla Townsend, Fifth Sun ; Matthew Restall, When Montezuma Met Cortés ; Bernardino de Sahagún, Codex de Florence.",
  paysActuels: ['mexique'],
  phases: [
    {
      titre: "Des tributaires qui deviennent maîtres",
      debut: 1325, fin: 1440,
      chapo: "Les Mexicas, longtemps vassaux, fondent Tenochtitlan, renversent leurs suzerains et forment la Triple Alliance en 1428.",
      recit: [
        "Selon leur tradition, les Mexicas fondent Tenochtitlan vers 1325 là où leur dieu leur a montré un aigle posé sur un cactus. Ils servent d'abord de mercenaires et de tributaires aux Tépanèques d'Azcapotzalco.",
        "En 1428, le roi Itzcoatl s'allie avec Nezahualcoyotl de Texcoco et la cité de Tlacopan pour vaincre Azcapotzalco. La Triple Alliance commence à soumettre les cités du bassin de Mexico."
      ],
      consensus: [
        "Tenochtitlan a été fondée au XIVe siècle sur une île du lac de Texcoco.",
        "La Triple Alliance de 1428 est l'acte de naissance de l'empire.",
        "Le mot « Aztèque » est une appellation moderne ; ils se nommaient Mexicas."
      ],
      debats: [
        {
          question: "Les Mexicas ont-ils réécrit leur histoire ?",
          positions: [
            { titre: "Une réécriture délibérée", texte: "Selon des sources du XVIe siècle, Itzcoatl fit brûler les anciens livres pour imposer une histoire glorieuse des Mexicas, peuple élu du dieu Huitzilopochtli.", qui: "Codex de Florence, Miguel León-Portilla" },
            { titre: "Un récit à nuancer", texte: "L'épisode n'est rapporté que par quelques sources tardives ; il peut lui-même relever d'une construction.", qui: "Historiens prudents sur les sources" }
          ],
          etat: "L'idée d'une histoire officielle remodelée est acceptée, mais l'ampleur de la destruction des livres reste discutée."
        }
      ],
      moinsConnu: "Le drapeau du Mexique actuel reprend le mythe de fondation de Tenochtitlan : un aigle sur un cactus dévorant un serpent.",
      evenements: [
        { annee: 1325, titre: "Fondation de Tenochtitlan", lieu: [19.43, -99.13] },
        { annee: 1428, titre: "Formation de la Triple Alliance", lieu: [19.43, -99.13] }
      ],
      acteurs: [
        ["Itzcoatl", "mort en 1440", "Roi fondateur de l'empire"],
        ["Tlacaelel", "1397-1487", "Conseiller, architecte de l'idéologie impériale"],
        ["Nezahualcoyotl", "1402-1472", "Roi poète de Texcoco"]
      ]
    },
    {
      titre: "Un empire du tribut et de la guerre",
      debut: 1440, fin: 1502,
      chapo: "Moctezuma Ier puis Ahuitzotl étendent l'empire jusqu'au Pacifique et au Guatemala. Tenochtitlan devient une métropole de peut-être deux cent mille habitants.",
      recit: [
        "L'empire ne gouverne pas directement : il laisse en place les rois locaux qui paient un tribut en maïs, coton, plumes, cacao ou or. Les guerres fleuries contre Tlaxcala, jamais conquise, fournissent des captifs pour les sacrifices.",
        "Ahuitzotl, qui règne de 1486 à 1502, mène les campagnes les plus lointaines. En 1487, le Grand Temple de Tenochtitlan est agrandi et inauguré par de nombreux sacrifices. La ville, reliée à la terre par des chaussées, émerveillera les Espagnols."
      ],
      consensus: [
        "L'empire était fondé sur le tribut plutôt que sur une administration directe.",
        "Tlaxcala est restée indépendante et hostile.",
        "Le sacrifice humain était central dans la religion mexica."
      ],
      debats: [
        {
          question: "Quelle était l'ampleur des sacrifices humains ?",
          positions: [
            { titre: "Des chiffres très élevés", texte: "Les chroniqueurs parlent de dizaines de milliers de victimes en 1487. Les fouilles du Huei Tzompantli, depuis 2015, ont mis au jour des centaines de crânes et confirment une pratique massive.", qui: "Chroniques espagnoles et indigènes, archéologues du Templo Mayor" },
            { titre: "Des chiffres exagérés", texte: "Les Espagnols avaient intérêt à grossir les chiffres pour justifier la conquête, et certaines estimations sont matériellement impossibles.", qui: "Historiens critiques des sources coloniales" }
          ],
          etat: "La réalité d'une pratique importante est établie par l'archéologie ; les chiffres les plus élevés sont considérés comme exagérés."
        }
      ],
      moinsConnu: "Les chinampas, jardins flottants construits sur le lac, produisaient plusieurs récoltes par an et nourrissaient une grande partie de la ville ; on peut encore en voir à Xochimilco.",
      evenements: [
        { annee: 1450, titre: "Grande famine dans le bassin de Mexico", lieu: [19.43, -99.13] },
        { annee: 1487, titre: "Inauguration du Grand Temple agrandi", lieu: [19.43, -99.13] },
        { annee: 1497, titre: "Campagnes d'Ahuitzotl vers le Soconusco", lieu: [15.0, -92.5] }
      ],
      acteurs: [
        ["Moctezuma Ier", "vers 1398-1469", "Empereur bâtisseur"],
        ["Axayacatl", "mort en 1481", "Empereur vaincu par les Tarasques"],
        ["Ahuitzotl", "mort en 1502", "Empereur conquérant"]
      ]
    },
    {
      titre: "La chute",
      debut: 1502, fin: 1521,
      chapo: "Hernán Cortés débarque en 1519 avec quelques centaines d'hommes, s'allie à Tlaxcala et aux ennemis des Mexicas. Après une épidémie de variole, Tenochtitlan tombe en août 1521.",
      recit: [
        "Moctezuma II centralise le pouvoir. En 1519, Cortés débarque sur la côte du golfe. Guidé par Malintzin, interprète nahua, il s'allie à Tlaxcala et entre à Tenochtitlan en novembre. Moctezuma est retenu prisonnier et meurt en 1520 dans des circonstances discutées.",
        "Chassés lors de la Noche Triste en juin 1520, les Espagnols reviennent avec des dizaines de milliers d'alliés. La variole tue une grande partie des habitants et l'empereur Cuitláhuac. Après un siège de près de trois mois, Cuauhtémoc est capturé le 13 août 1521."
      ],
      consensus: [
        "Les alliés indigènes formaient l'immense majorité des combattants contre Tenochtitlan.",
        "La variole a dévasté la ville avant et pendant le siège.",
        "Malintzin a joué un rôle essentiel d'interprète et d'intermédiaire."
      ],
      debats: [
        {
          question: "Moctezuma croyait-il que Cortés était le dieu Quetzalcoatl ?",
          positions: [
            { titre: "Oui, d'après les sources", texte: "Des récits du XVIe siècle affirment que Moctezuma vit en Cortés le dieu revenu, ce qui expliquerait son accueil.", qui: "Codex de Florence, récit traditionnel" },
            { titre: "Un mythe construit après coup", texte: "Ces récits ont été écrits des décennies plus tard, par des Espagnols et des indigènes christianisés qui cherchaient à expliquer la défaite. Rien ne prouve que Moctezuma y ait cru.", qui: "Camilla Townsend, Matthew Restall, Serge Gruzinski" }
          ],
          etat: "La plupart des historiens actuels considèrent cette croyance comme un mythe postérieur."
        },
        {
          question: "Conquête espagnole ou guerre entre peuples indigènes ?",
          positions: [
            { titre: "Une conquête espagnole", texte: "Armes d'acier, chevaux, tactiques et détermination des conquistadors ont été décisifs.", qui: "Récit classique depuis Bernal Díaz del Castillo" },
            { titre: "Une guerre indigène", texte: "Tlaxcaltèques, Totonaques et Texcocains, qui avaient leurs propres raisons de combattre les Mexicas, ont fourni l'essentiel des troupes. Les Espagnols étaient une force d'appoint.", qui: "Matthew Restall, Ross Hassig" }
          ],
          etat: "Les historiens insistent aujourd'hui sur le rôle des alliés indigènes, sans nier l'apport militaire espagnol."
        }
      ],
      moinsConnu: "Les Tlaxcaltèques obtinrent de la couronne espagnole des privilèges et le droit de garder leur noblesse, et certains participèrent ensuite à la colonisation du nord du Mexique.",
      evenements: [
        { annee: 1519, titre: "Débarquement de Cortés et entrée à Tenochtitlan", lieu: [19.2, -96.13] },
        { annee: 1520, titre: "Noche Triste et épidémie de variole", lieu: [19.43, -99.13] },
        { annee: 1521, titre: "Chute de Tenochtitlan", lieu: [19.43, -99.13] }
      ],
      acteurs: [
        ["Moctezuma II", "vers 1466-1520", "Empereur à l'arrivée des Espagnols"],
        ["Hernán Cortés", "1485-1547", "Conquistador"],
        ["Malintzin", "vers 1500-vers 1529", "Interprète et intermédiaire"],
        ["Xicotencatl le Jeune", "mort en 1521", "Chef tlaxcaltèque hostile aux Espagnols"],
        ["Cuauhtémoc", "vers 1497-1525", "Dernier empereur"]
      ]
    }
  ],
  lecons: [
    {
      titre: "Un empire détesté fournit des alliés à ses ennemis",
      texte: "Les Mexicas exigeaient tributs et captifs sans intégrer les peuples soumis. Quand un ennemi extérieur est apparu, des dizaines de milliers d'indigènes se sont joints à lui.",
      objection: "D'autres peuples sont restés fidèles jusqu'au bout, et les alliés des Espagnols ne pouvaient pas prévoir qu'ils seraient ensuite soumis à leur tour."
    },
    {
      titre: "Mal comprendre l'adversaire",
      texte: "Les Mexicas faisaient la guerre pour capturer, pas pour anéantir, et ont longtemps hésité sur la nature des étrangers. Les Espagnols, eux, cherchaient à détruire le pouvoir central.",
      objection: "Moctezuma a agi avec prudence et méthode selon les règles diplomatiques qu'il connaissait ; l'idée d'un souverain naïf vient en grande partie des récits des vainqueurs."
    },
    {
      titre: "Les épidémies ont fait plus que les armes",
      texte: "La variole a tué une grande partie de la population de Tenochtitlan et son empereur au pire moment. Dans tout le continent, les maladies venues d'Europe ont été la première cause de mortalité.",
      objection: "La maladie n'explique pas tout : elle frappait aussi les alliés des Espagnols, et c'est la combinaison avec la guerre et les alliances qui a été décisive."
    }
  ]
});
