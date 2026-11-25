HISTOIRE.ajouterEmpire({
  id: 'mali',
  nom: 'Empire du Mali',
  region: 'afrique-ouest',
  aire: "De l'Atlantique à la boucle du Niger",
  debut: 1235, fin: 1600,
  accroche: "Soundiata, Mansa Moussa et l'or qui fit baisser les prix au Caire. Un empire riche du commerce transsaharien, qui perd ses provinces et voit le commerce partir vers l'Atlantique.",
  intro: "Au XIIIe siècle, le prince mandingue Soundiata Keïta fonde un empire qui domine bientôt l'Afrique de l'Ouest, des côtes du Sénégal à Tombouctou et Gao. Il contrôle les mines d'or et les routes caravanières vers l'Afrique du Nord. Son roi le plus célèbre, Mansa Moussa, éblouit Le Caire en 1324. Au XVe siècle, querelles dynastiques, révoltes et montée de l'empire songhaï réduisent le Mali à son cœur mandingue.",
  sources: "Djibril Tamsir Niane, Soundjata ou l'épopée mandingue ; Nehemia Levtzion, Ancient Ghana and Mali ; François-Xavier Fauvelle, Le Rhinocéros d'or ; Michael Gomez, African Dominion.",
  paysActuels: ['mali', 'senegal', 'guinee', 'gambie', 'mauritanie', 'guinee-bissau'],
  phases: [
    {
      titre: "Soundiata et la fondation",
      debut: 1235, fin: 1312,
      chapo: "Soundiata Keïta bat le roi sosso Soumaoro Kanté et fonde l'empire. Ses successeurs l'étendent vers le Sahel et le Niger.",
      recit: [
        "Selon l'épopée transmise par les griots, Soundiata, prince infirme dans son enfance et exilé, revient unir les Mandingues et bat Soumaoro Kanté, roi du Sosso, à la bataille de Kirina, vers 1235. Une assemblée aurait alors fixé les règles de la société du Manden.",
        "Les mansas, les rois du Mali, étendent leur pouvoir vers l'ouest jusqu'à l'Atlantique et vers l'est jusqu'à la boucle du Niger. L'empire contrôle l'or du Bambouk et du Bouré, très recherché dans le monde méditerranéen."
      ],
      consensus: [
        "Soundiata Keïta est considéré comme le fondateur de l'empire.",
        "L'histoire de cette période est surtout connue par la tradition orale et des auteurs arabes.",
        "L'or était la principale source de richesse de l'empire."
      ],
      debats: [
        {
          question: "La charte du Manden est-elle une déclaration des droits médiévale ?",
          positions: [
            { titre: "Une charte fondatrice", texte: "Transmise par les griots, elle proclame le respect de la vie humaine et l'abolition de certaines formes d'esclavage. Elle est inscrite au patrimoine immatériel de l'UNESCO depuis 2009.", qui: "Traditionalistes, UNESCO, une partie des historiens africains" },
            { titre: "Un texte reconstruit", texte: "Le texte connu a été fixé par écrit en 1998, après des siècles de transmission orale. Il est difficile de savoir ce qui remonte au XIIIe siècle et ce qui reflète des valeurs plus récentes.", qui: "Historiens critiques des sources orales" }
          ],
          etat: "La valeur de la tradition orale est reconnue, mais la datation du contenu exact de la charte reste discutée."
        }
      ],
      moinsConnu: "Soumaoro Kanté, le vaincu, est présenté dans l'épopée comme un roi forgeron et magicien. Il est aussi célébré dans d'autres traditions comme un résistant.",
      evenements: [
        { annee: 1235, titre: "Bataille de Kirina", lieu: [12.7, -8.3] },
        { annee: 1236, titre: "Assemblée de Kouroukan Fouga", lieu: [11.9, -8.6] },
        { annee: 1285, titre: "Extension vers la boucle du Niger", lieu: [16.27, -0.04] }
      ],
      acteurs: [
        ["Soundiata Keïta", "mort vers 1255", "Fondateur de l'empire"],
        ["Soumaoro Kanté", "XIIIe siècle", "Roi du Sosso vaincu à Kirina"],
        ["Sogolon", "XIIIe siècle", "Mère de Soundiata dans l'épopée"]
      ]
    },
    {
      titre: "L'apogée de Mansa Moussa",
      debut: 1312, fin: 1360,
      chapo: "Mansa Moussa fait du Mali une puissance connue jusqu'en Europe. Son pèlerinage à La Mecque reste l'un des voyages les plus célèbres du Moyen Âge.",
      recit: [
        "Mansa Moussa règne environ de 1312 à 1337. En 1324, il passe par Le Caire en route vers La Mecque avec une suite immense et distribue tant d'or que, selon l'auteur égyptien al-Umari, le cours de l'or y baissa pendant des années. Il ramène des savants et l'architecte Abou Ishaq es-Saheli, associé à la grande mosquée Djingareyber de Tombouctou.",
        "Tombouctou et Djenné deviennent des centres de commerce et de savoir. En 1352-1353, le voyageur marocain Ibn Battuta visite la cour de Mansa Souleymane et décrit la sécurité des routes et la piété des habitants."
      ],
      consensus: [
        "Le pèlerinage de 1324 a rendu le Mali célèbre dans le monde musulman et en Europe.",
        "Tombouctou devient un centre intellectuel à cette époque.",
        "Le Mali apparaît sur l'Atlas catalan de 1375, avec un roi tenant une pépite d'or."
      ],
      debats: [
        {
          question: "Abou Bakr II a-t-il traversé l'Atlantique ?",
          positions: [
            { titre: "Une expédition vers l'Amérique", texte: "Mansa Moussa a raconté au Caire que son prédécesseur était parti avec des centaines de pirogues explorer l'océan. Certains y voient une arrivée en Amérique avant Colomb.", qui: "Gaoussou Diawara, certains auteurs" },
            { titre: "Aucune preuve", texte: "Le récit d'al-Umari mentionne une expédition partie et jamais revenue. Aucune trace archéologique ou génétique d'une arrivée en Amérique n'a été trouvée.", qui: "La plupart des historiens" }
          ],
          etat: "L'expédition est possible, son arrivée en Amérique n'est pas démontrée."
        }
      ],
      moinsConnu: "Les classements modernes présentent souvent Mansa Moussa comme « l'homme le plus riche de l'histoire ». Ces estimations sont invérifiables : sa richesse était surtout celle d'un État qui contrôlait l'or.",
      evenements: [
        { annee: 1324, titre: "Pèlerinage de Mansa Moussa au Caire", lieu: [30.04, 31.24] },
        { annee: 1327, titre: "Construction de la mosquée Djingareyber", lieu: [16.77, -3.01] },
        { annee: 1352, titre: "Visite d'Ibn Battuta", lieu: [11.4, -8.2] }
      ],
      acteurs: [
        ["Mansa Moussa", "règne vers 1312-1337", "Empereur de l'apogée"],
        ["Abou Ishaq es-Saheli", "mort en 1346", "Architecte et poète andalou"],
        ["Mansa Souleymane", "mort vers 1360", "Successeur de Moussa"],
        ["Ibn Battuta", "1304-1377", "Voyageur marocain"]
      ]
    },
    {
      titre: "Querelles, Songhaï et routes nouvelles",
      debut: 1360, fin: 1600,
      chapo: "Les querelles dynastiques affaiblissent le pouvoir central. Les Touaregs prennent Tombouctou, l'empire songhaï s'impose, et le commerce se tourne vers l'Atlantique.",
      recit: [
        "Après Mansa Souleymane, les luttes pour le trône se multiplient. Les provinces de l'est se détachent : les Touaregs s'emparent de Tombouctou en 1433, puis le Songhaï de Sonni Ali conquiert la boucle du Niger à partir de 1464.",
        "Au même moment, les navigateurs portugais arrivent sur les côtes et achètent or et captifs directement, détournant une partie du commerce des routes sahariennes. Le Mali se replie vers l'ouest et échoue devant Djenné en 1599. Il se réduit ensuite à des chefferies mandingues."
      ],
      consensus: [
        "Les querelles de succession ont affaibli l'autorité des mansas.",
        "L'empire songhaï a remplacé le Mali comme principale puissance du Sahel.",
        "L'arrivée des Portugais a modifié les circuits commerciaux."
      ],
      debats: [
        {
          question: "Pourquoi le Mali a-t-il décliné ?",
          positions: [
            { titre: "Des causes internes", texte: "Querelles dynastiques et éloignement des provinces ont permis aux vassaux de s'émanciper.", qui: "Nehemia Levtzion, historiens de l'État" },
            { titre: "Un basculement commercial", texte: "Le développement du commerce atlantique a privé les routes sahariennes d'une partie de leur valeur et enrichi d'autres pouvoirs.", qui: "Historiens de l'économie atlantique" },
            { titre: "La force des voisins", texte: "Le Mali n'a pas tant décliné qu'il a été dépassé par le Songhaï, mieux organisé militairement sur le Niger.", qui: "Autres historiens" }
          ],
          etat: "Les historiens combinent ces facteurs, avec un rôle croissant donné au commerce atlantique à partir du XVe siècle."
        }
      ],
      moinsConnu: "La capitale de l'empire au temps de sa splendeur n'a toujours pas été localisée avec certitude par les archéologues ; Niani, en Guinée, est le site le plus souvent proposé.",
      evenements: [
        { annee: 1433, titre: "Les Touaregs prennent Tombouctou", lieu: [16.77, -3.01] },
        { annee: 1455, titre: "Les Portugais sur le fleuve Gambie", lieu: [13.45, -16.6] },
        { annee: 1464, titre: "Essor du Songhaï de Sonni Ali", lieu: [16.27, -0.04] },
        { annee: 1599, titre: "Échec du Mali devant Djenné", lieu: [13.9, -4.55] }
      ],
      acteurs: [
        ["Sonni Ali", "mort en 1492", "Fondateur de la puissance songhaï"],
        ["Askia Mohammed", "vers 1443-1538", "Souverain songhaï"],
        ["Mahmoud Kâti", "XVIe siècle", "Lettré associé à une chronique de Tombouctou"]
      ]
    }
  ],
  lecons: [
    {
      titre: "Une richesse fondée sur une route dépend de cette route",
      texte: "Le Mali vivait du contrôle de l'or et des caravanes sahariennes. Quand une partie du commerce a gagné la côte atlantique, ses revenus et son poids ont diminué.",
      objection: "Le commerce transsaharien est resté actif longtemps après l'arrivée des Portugais ; le déclin du Mali commence avant que l'Atlantique ne devienne dominant."
    },
    {
      titre: "La richesse affichée attire les regards",
      texte: "Le pèlerinage de Mansa Moussa a fait connaître le Mali jusqu'en Europe et alimenté le mythe d'un pays de l'or, que les Portugais ont ensuite cherché à atteindre par la mer.",
      objection: "Ce prestige a aussi servi le Mali : il a attiré savants, marchands et reconnaissance religieuse. Lui attribuer l'arrivée des Portugais est excessif."
    },
    {
      titre: "Un empire de vassaux tient tant que le centre est fort",
      texte: "Le Mali laissait une large autonomie aux chefferies soumises. Cette souplesse a permis une expansion rapide, mais les provinces se sont détachées dès que la cour s'est divisée.",
      objection: "Aucun État de l'époque n'aurait pu administrer directement un territoire aussi vaste ; ce modèle était sans doute le seul possible."
    }
  ]
});
