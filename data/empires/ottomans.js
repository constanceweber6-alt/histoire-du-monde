HISTOIRE.ajouterEmpire({
  id: 'ottomans',
  nom: 'Empire ottoman',
  region: 'asie-ouest',
  aire: "Balkans, Anatolie, monde arabe, Afrique du Nord",
  debut: 1299, fin: 1922,
  accroche: "Six siècles d'histoire, de la petite principauté d'Osman à la prise de Constantinople et aux portes de Vienne. Son « long déclin » est aujourd'hui l'un des récits les plus contestés par les historiens.",
  intro: "Né à la fin du XIIIe siècle dans le nord-ouest de l'Anatolie, l'État d'Osman prend Constantinople en 1453 et domine au XVIe siècle les Balkans, le monde arabe et l'Afrique du Nord. Il gouverne des peuples de toutes religions et résiste longtemps aux puissances européennes. Aux XVIIIe et XIXe siècles, il perd des territoires et se réforme. Son entrée dans la Première Guerre mondiale aux côtés de l'Allemagne entraîne sa disparition : le sultanat est aboli en 1922.",
  sources: "Robert Mantran (dir.), Histoire de l'Empire ottoman ; Caroline Finkel, Osman's Dream ; Cemal Kafadar, Between Two Worlds ; Baki Tezcan, The Second Ottoman Empire ; Eugene Rogan, La chute des Ottomans.",
  paysActuels: ['turquie', 'grece', 'bulgarie', 'serbie', 'hongrie', 'egypte', 'syrie', 'irak', 'arabie-saoudite', 'tunisie'],
  phases: [
    {
      titre: "De la principauté à Constantinople",
      debut: 1299, fin: 1453,
      chapo: "La principauté d'Osman grandit aux dépens de Byzance, passe en Europe, survit à la catastrophe d'Ankara en 1402 et prend Constantinople en 1453.",
      recit: [
        "Osman et son fils Orhan prennent Bursa en 1326 et s'installent en Europe à partir de 1354. Les Ottomans battent les Serbes au Kosovo en 1389. Le corps des janissaires, formé de jeunes chrétiens enlevés et convertis, devient l'élite de l'armée.",
        "En 1402, Tamerlan écrase le sultan Bayezid Ier à Ankara et le capture. L'État manque de disparaître dans une guerre entre ses fils, puis se relève. Le 29 mai 1453, Mehmed II prend Constantinople, qui devient la capitale."
      ],
      consensus: [
        "L'État ottoman s'est construit en grande partie sur d'anciens territoires byzantins.",
        "La défaite d'Ankara a failli faire disparaître l'empire.",
        "La prise de Constantinople en 1453 fait des Ottomans une grande puissance."
      ],
      debats: [
        {
          question: "Les débuts ottomans : guerre sainte ou opportunisme ?",
          positions: [
            { titre: "Un État de guerriers de la foi", texte: "Les premiers Ottomans étaient des ghazis, guerriers menant la guerre sainte contre les chrétiens, ce qui expliquerait leur dynamisme.", qui: "Paul Wittek (années 1930)" },
            { titre: "Une coalition pragmatique", texte: "Les premiers sultans s'alliaient volontiers à des chrétiens, épousaient des princesses byzantines et intégraient des nobles grecs. Leur succès tient à leur souplesse.", qui: "Cemal Kafadar, Heath Lowry" }
          ],
          etat: "La thèse de la guerre sainte a été très nuancée : les historiens soulignent le caractère mixte et pragmatique du premier État ottoman."
        }
      ],
      moinsConnu: "Le devchirmé, le prélèvement de garçons chrétiens dans les Balkans, a produit non seulement des janissaires mais aussi plusieurs grands vizirs, parmi les hommes les plus puissants de l'empire.",
      evenements: [
        { annee: 1326, titre: "Prise de Bursa", lieu: [40.19, 29.06] },
        { annee: 1389, titre: "Bataille du Kosovo", lieu: [42.7, 21.1] },
        { annee: 1402, titre: "Défaite d'Ankara face à Tamerlan", lieu: [39.93, 32.85] },
        { annee: 1453, titre: "Prise de Constantinople", lieu: [41.01, 28.98] }
      ],
      acteurs: [
        ["Osman Ier", "mort vers 1324", "Fondateur de la dynastie"],
        ["Bayezid Ier", "1360-1403", "Sultan vaincu par Tamerlan"],
        ["Tamerlan", "1336-1405", "Conquérant d'Asie centrale"],
        ["Mehmed II", "1432-1481", "Conquérant de Constantinople"]
      ]
    },
    {
      titre: "L'apogée de Soliman et les portes de Vienne",
      debut: 1453, fin: 1683,
      chapo: "Sélim Ier conquiert l'Égypte et les lieux saints, Soliman le Magnifique la Hongrie. L'empire est l'une des premières puissances du monde, jusqu'à l'échec devant Vienne en 1683.",
      recit: [
        "Sélim Ier bat les Mamelouks et prend la Syrie et l'Égypte en 1516-1517. Soliman, qui règne de 1520 à 1566, écrase la Hongrie à Mohács en 1526, assiège Vienne en 1529 et prend Bagdad. Ses juristes codifient le droit, et l'architecte Sinan couvre l'empire de mosquées.",
        "Après Soliman, l'empire connaît des révoltes, des sultans contestés et des défaites, comme Lépante en 1571, mais aussi des redressements sous les grands vizirs Köprülü. En 1683, le grand vizir Kara Mustafa assiège Vienne ; une armée de secours menée par le roi de Pologne Jean III Sobieski le met en déroute."
      ],
      consensus: [
        "Au XVIe siècle, l'empire est l'une des plus grandes puissances du monde.",
        "L'échec devant Vienne en 1683 ouvre une série de défaites face aux Habsbourg.",
        "L'empire gouvernait des populations musulmanes, chrétiennes et juives selon leurs communautés."
      ],
      debats: [
        {
          question: "L'empire est-il entré en déclin après Soliman ?",
          positions: [
            { titre: "Un long déclin", texte: "Après Soliman, des sultans faibles, l'influence du harem, la corruption et le retard militaire expliqueraient un déclin continu jusqu'en 1922.", qui: "Historiographie classique, européenne et ottomane elle-même" },
            { titre: "Une transformation", texte: "Le « paradigme du déclin » est rejeté : l'empire s'est adapté, avec un pouvoir plus partagé entre sultan, élites et janissaires, une sorte de « second empire ».", qui: "Baki Tezcan, Cemal Kafadar, Suraiya Faroqhi" }
          ],
          etat: "La plupart des spécialistes ont abandonné l'idée d'un déclin continu depuis 1566, tout en reconnaissant le recul militaire à partir de la fin du XVIIe siècle."
        }
      ],
      moinsConnu: "Hürrem, appelée Roxelane en Europe, esclave d'origine ruthène, devint l'épouse légale de Soliman, une première, et joua un rôle politique majeur.",
      evenements: [
        { annee: 1517, titre: "Conquête de l'Égypte", lieu: [30.04, 31.24] },
        { annee: 1526, titre: "Victoire de Mohács", lieu: [45.99, 18.68] },
        { annee: 1529, titre: "Premier siège de Vienne", lieu: [48.21, 16.37] },
        { annee: 1571, titre: "Défaite navale de Lépante", lieu: [38.25, 21.15] },
        { annee: 1683, titre: "Échec du second siège de Vienne", lieu: [48.21, 16.37] }
      ],
      acteurs: [
        ["Sélim Ier", "vers 1470-1520", "Conquérant de l'Égypte"],
        ["Soliman le Magnifique", "1494-1566", "Sultan de l'apogée"],
        ["Hürrem (Roxelane)", "vers 1502-1558", "Épouse et conseillère de Soliman"],
        ["Mimar Sinan", "vers 1490-1588", "Architecte impérial"],
        ["Kara Mustafa Pacha", "1634-1683", "Grand vizir du siège de Vienne"]
      ]
    },
    {
      titre: "Réformes, pertes et disparition",
      debut: 1683, fin: 1922,
      chapo: "L'empire perd des territoires, se réforme en profondeur au XIXe siècle et tente de survivre entre les grandes puissances. La Première Guerre mondiale lui est fatale.",
      recit: [
        "Le traité de Karlowitz en 1699 consacre la perte de la Hongrie, puis la Russie avance au nord. Au XIXe siècle, la Grèce, la Serbie et la Bulgarie deviennent indépendantes, l'Égypte et l'Algérie échappent à Istanbul. Les réformes du Tanzimat, à partir de 1839, modernisent l'État et proclament l'égalité des sujets. L'empire fait faillite en 1875 et passe sous contrôle financier européen.",
        "Les Jeunes-Turcs prennent le pouvoir en 1908. En 1914, l'empire entre en guerre aux côtés de l'Allemagne. Les autorités organisent en 1915-1916 la déportation et l'extermination des Arméniens. Vaincu, l'empire est dépecé ; Mustafa Kemal mène la guerre d'indépendance, abolit le sultanat en 1922 et proclame la République de Turquie en 1923."
      ],
      consensus: [
        "Le XIXe siècle est une période de réformes profondes, pas d'immobilisme.",
        "Le génocide des Arméniens est reconnu par la grande majorité des historiens, mais toujours nié par l'État turc.",
        "L'entrée en guerre de 1914 a précipité la disparition de l'empire."
      ],
      debats: [
        {
          question: "L'« homme malade de l'Europe » était-il condamné ?",
          positions: [
            { titre: "Un empire condamné", texte: "Nationalismes, retard économique et appétits des puissances rendaient sa disparition inévitable ; le tsar Nicolas Ier parlait déjà d'un « homme malade ».", qui: "Diplomatie européenne du XIXe siècle, récit classique" },
            { titre: "Un empire qui aurait pu survivre", texte: "Les réformes fonctionnaient, l'État se modernisait. C'est le choix de la guerre en 1914, aux côtés des perdants, qui a été fatal.", qui: "Eugene Rogan, Michael Reynolds" }
          ],
          etat: "Les historiens actuels insistent sur la vitalité des réformes et sur le caractère contingent de la chute, liée à la guerre."
        }
      ],
      moinsConnu: "En 1924, la République turque abolit aussi le califat : le dernier calife, Abdülmecid II, partit en exil et mourut à Paris en 1944.",
      evenements: [
        { annee: 1699, titre: "Traité de Karlowitz", lieu: [45.2, 19.93] },
        { annee: 1839, titre: "Début des réformes du Tanzimat", lieu: [41.01, 28.98] },
        { annee: 1875, titre: "Faillite de l'État ottoman", lieu: [41.01, 28.98] },
        { annee: 1915, titre: "Génocide des Arméniens", lieu: [39.0, 39.5] },
        { annee: 1922, titre: "Abolition du sultanat", lieu: [39.93, 32.85] }
      ],
      acteurs: [
        ["Mahmud II", "1785-1839", "Sultan réformateur, supprime les janissaires"],
        ["Abdülhamid II", "1842-1918", "Sultan autoritaire"],
        ["Enver Pacha", "1881-1922", "Dirigeant jeune-turc de l'entrée en guerre"],
        ["Mustafa Kemal", "1881-1938", "Fondateur de la République de Turquie"]
      ]
    }
  ],
  lecons: [
    {
      titre: "Le siège de trop",
      texte: "En 1683, Kara Mustafa, sûr de la victoire, aurait négligé l'arrivée de l'armée de secours. Sa défaite déclenche seize ans de guerre et des pertes territoriales majeures.",
      objection: "Le tournant de 1683 est peut-être surestimé : l'empire a ensuite repris des territoires au XVIIIe siècle, et le recul militaire tient à des causes structurelles plus qu'à un homme."
    },
    {
      titre: "Se réformer, mais à temps",
      texte: "Les réformes ottomanes du XIXe siècle ont été profondes, mais elles ont été menées sous la pression de puissances déjà plus fortes et endettaient l'État.",
      objection: "Aucun empire non européen n'a vraiment réussi à rattraper l'Europe au XIXe siècle, sauf le Japon. Juger les réformes ottomanes trop tardives revient à leur demander l'impossible."
    },
    {
      titre: "Le choix des alliances peut être fatal",
      texte: "En 1914, une poignée de dirigeants a engagé l'empire aux côtés de l'Allemagne. La défaite a entraîné son démembrement.",
      objection: "Rester neutre n'était pas une garantie : la Russie, la France et le Royaume-Uni avaient eux aussi des visées sur les territoires ottomans."
    }
  ]
});
