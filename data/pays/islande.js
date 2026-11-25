HISTOIRE.ajouterPays({
  id: 'islande',
  nom: 'Islande',
  region: 'europe-ouest',
  accroche: "Une île vide jusqu'aux Vikings, l'Althing fondé en 930, la conversion au christianisme par un vote, les sagas, des siècles sous la couronne norvégienne puis danoise, l'éruption du Laki, l'indépendance de 1944, les guerres de la morue, la faillite des banques en 2008, et un « non » à l'Europe en 2026.",
  intro: "L'Islande, île volcanique au bord du cercle polaire, est l'un des derniers territoires d'Europe à avoir été peuplés, par des Norvégiens et leurs esclaves celtes, à partir de 874. Ses colons ont fondé dès 930 une assemblée, l'Althing, souvent présentée comme l'un des plus anciens parlements du monde. Après des siècles sous domination norvégienne puis danoise, l'île est devenue une république en 1944. En août 2026, les Islandais ont refusé par référendum de reprendre les négociations d'adhésion à l'Union européenne.",
  sources: "Gunnar Karlsson, The History of Iceland ; Jesse Byock, Viking Age Iceland ; Guðni Thorlacius Jóhannesson, The History of Iceland ; Robert Wade et Silla Sigurgeirsdóttir, travaux sur la crise de 2008.",
  phases: [
    {
      titre: "Une île inhabitée",
      debut: 1, fin: 874,
      chapo: "L'Islande reste inhabitée pendant la plus grande partie du premier millénaire. Des moines irlandais y séjournent peut-être avant les Vikings.",
      recit: [
        "Des auteurs antiques évoquent une terre lointaine du nord, Thulé, que certains identifient à l'Islande. Aucune population ne s'y installe durablement.",
        "Selon le moine irlandais Dicuil, vers 825, des ermites irlandais, les papar, passaient l'été sur une île du nord où le soleil ne se couchait pas. Les sagas islandaises affirment que les premiers Norvégiens trouvèrent sur place des cloches et des livres irlandais."
      ],
      consensus: [
        "L'Islande n'avait pas de population permanente avant le IXe siècle.",
        "Des navigateurs irlandais connaissaient probablement l'île.",
        "L'île possède une faune terrestre très pauvre, avec le renard polaire pour seul mammifère indigène."
      ],
      debats: [
        {
          question: "Les papar irlandais ont-ils vraiment vécu en Islande ?",
          positions: [
            { titre: "Une présence réelle", texte: "Les textes de Dicuil et des sagas, ainsi que des noms de lieux en papa-, attesteraient leur présence.", qui: "Historiens s'appuyant sur les textes" },
            { titre: "Aucune preuve matérielle", texte: "Les fouilles n'ont trouvé aucune trace certaine d'occupation irlandaise antérieure aux Vikings.", qui: "Archéologues" }
          ],
          etat: "La présence des papar reste plausible mais non démontrée archéologiquement."
        }
      ],
      moinsConnu: "Une couche de cendres volcaniques déposée vers 871, très bien datée, permet aux archéologues de savoir quelles maisons ont été construites avant ou après le début de la colonisation.",
      evenements: [
        { annee: 825, titre: "Récit de Dicuil sur les ermites du nord", lieu: [64.0, -16.5] },
        { annee: 871, titre: "Couche de cendres de la colonisation", lieu: [64.15, -21.9] }
      ]
    },
    {
      titre: "La république des chefs",
      debut: 874, fin: 1262,
      chapo: "Des colons norvégiens s'installent et fondent l'Althing en 930. Les Islandais adoptent le christianisme par un vote en l'an 1000 et rédigent les sagas.",
      recit: [
        "Selon la tradition, Ingólfur Arnarson s'installe à Reykjavík en 874. En soixante ans, les colons, Norvégiens accompagnés d'esclaves et d'épouses venus d'Irlande et d'Écosse, occupent les terres habitables. En 930, ils fondent l'Althing à Þingvellir, une assemblée qui légifère et juge chaque été.",
        "En l'an 1000, pour éviter une guerre civile, l'Althing décide que tous les Islandais deviendront chrétiens, en tolérant le culte païen en privé. Des Islandais, comme Leifur Eiríksson, atteignent l'Amérique du Nord. Au XIIIe siècle, les guerres entre grandes familles, l'âge des Sturlungar, ouvrent la voie à la domination norvégienne."
      ],
      consensus: [
        "L'Islande a été colonisée en quelques décennies à partir de 874.",
        "L'Althing a été fondé vers 930.",
        "Les sagas, rédigées au XIIIe siècle, sont un monument de la littérature médiévale."
      ],
      debats: [
        {
          question: "L'Althing, premier parlement du monde ?",
          positions: [
            { titre: "Le plus ancien parlement", texte: "Réuni depuis 930, l'Althing serait le plus ancien parlement encore existant.", qui: "Tradition islandaise" },
            { titre: "Une assemblée de chefs", texte: "C'était une assemblée de chefs et de leurs hommes, sans représentation au sens moderne, et elle a été suspendue de 1800 à 1845.", qui: "Historiens" }
          ],
          etat: "L'Althing est l'une des plus anciennes assemblées d'Europe, mais pas un parlement démocratique au sens moderne."
        }
      ],
      moinsConnu: "Selon des études génétiques, une grande partie des premières Islandaises étaient d'origine irlandaise ou écossaise, alors que la plupart des hommes venaient de Norvège.",
      evenements: [
        { annee: 874, titre: "Ingólfur Arnarson à Reykjavík", lieu: [64.15, -21.94] },
        { annee: 930, titre: "Fondation de l'Althing", lieu: [64.26, -21.13] },
        { annee: 1000, titre: "Conversion au christianisme", lieu: [64.26, -21.13] },
        { annee: 1220, titre: "Snorri Sturluson et l'âge des Sturlungar", lieu: [64.66, -21.29] }
      ]
    },
    {
      titre: "Sous les couronnes norvégienne et danoise",
      debut: 1262, fin: 1814,
      chapo: "L'Islande se soumet au roi de Norvège en 1262, puis passe au Danemark. Épidémies, monopole commercial et catastrophes volcaniques appauvrissent l'île.",
      recit: [
        "Par l'Ancien Pacte de 1262, les Islandais reconnaissent le roi de Norvège, puis l'île passe avec la Norvège sous la couronne danoise. La peste noire frappe en 1402 et tue une grande partie de la population. Le roi impose la Réforme luthérienne ; le dernier évêque catholique, Jón Arason, est décapité en 1550.",
        "De 1602 à 1787, un monopole commercial danois limite les échanges. En 1627, des corsaires barbaresques enlèvent des centaines d'Islandais. L'éruption du Laki, en 1783, empoisonne le bétail et provoque une famine qui tue environ un cinquième de la population."
      ],
      consensus: [
        "La population islandaise a beaucoup souffert des épidémies et des famines.",
        "Le monopole commercial danois a freiné l'économie.",
        "L'éruption du Laki est l'une des catastrophes les plus meurtrières de l'histoire islandaise."
      ],
      debats: [
        {
          question: "Le déclin islandais : faute du Danemark ou de la nature ?",
          positions: [
            { titre: "La domination danoise", texte: "Le monopole commercial et l'exploitation coloniale expliqueraient la pauvreté de l'île.", qui: "Historiographie nationaliste du XIXe siècle" },
            { titre: "Le climat et les catastrophes", texte: "Le petit âge glaciaire, les épidémies et les éruptions ont pesé autant que la politique danoise.", qui: "Gunnar Karlsson, historiens récents" }
          ],
          etat: "Les historiens nuancent aujourd'hui la responsabilité danoise."
        }
      ],
      moinsConnu: "Le nuage de soufre du Laki s'est répandu sur toute l'Europe en 1783 et aurait causé des milliers de morts jusqu'en Angleterre, ainsi que de mauvaises récoltes en France.",
      evenements: [
        { annee: 1262, titre: "Ancien Pacte avec la Norvège", lieu: [64.26, -21.13] },
        { annee: 1402, titre: "Peste noire", lieu: [64.15, -21.94] },
        { annee: 1550, titre: "Exécution de Jón Arason", lieu: [64.04, -20.51] },
        { annee: 1627, titre: "Raids des corsaires barbaresques", lieu: [63.44, -20.27] },
        { annee: 1783, titre: "Éruption du Laki", lieu: [64.07, -18.23] }
      ]
    },
    {
      titre: "Vers l'indépendance",
      debut: 1814, fin: 1944,
      chapo: "Restée danoise en 1814, l'Islande obtient le rétablissement de l'Althing, l'autonomie, puis devient un royaume associé au Danemark, avant de proclamer la république en 1944.",
      recit: [
        "Quand le Danemark cède la Norvège à la Suède en 1814, l'Islande reste danoise. Le mouvement national, mené par Jón Sigurðsson, obtient le rétablissement de l'Althing en 1845, une Constitution en 1874 et l'autonomie en 1904. La pêche se modernise et Reykjavík grandit.",
        "En 1918, l'Islande devient un royaume souverain uni au Danemark par le roi. En 1940, après l'invasion du Danemark par l'Allemagne, les Britanniques occupent l'île, relayés par les Américains. Le 17 juin 1944, l'Islande proclame la république à Þingvellir."
      ],
      consensus: [
        "Jón Sigurðsson est le héros de l'indépendance islandaise.",
        "L'indépendance s'est faite par étapes et sans violence.",
        "La république a été proclamée pendant l'occupation alliée."
      ],
      debats: [
        {
          question: "Proclamer la république en 1944 : opportunisme ou droit ?",
          positions: [
            { titre: "Un droit", texte: "L'acte d'union de 1918 permettait une révision après 25 ans, et le Danemark occupé ne pouvait plus exercer ses fonctions.", qui: "Gouvernement islandais" },
            { titre: "Un geste discutable", texte: "Une partie des Danois jugea déloyal de rompre pendant que leur pays était occupé.", qui: "Opinion danoise de l'époque" }
          ],
          etat: "Le roi Christian X envoya un message de félicitations, et la rupture se fit sans conflit."
        }
      ],
      moinsConnu: "Près d'un cinquième des Islandais émigrèrent vers le Canada et les États-Unis à la fin du XIXe siècle ; le Manitoba compte encore une importante communauté d'origine islandaise.",
      evenements: [
        { annee: 1845, titre: "Rétablissement de l'Althing", lieu: [64.15, -21.94] },
        { annee: 1874, titre: "Première Constitution", lieu: [64.15, -21.94] },
        { annee: 1918, titre: "Royaume d'Islande", lieu: [64.15, -21.94] },
        { annee: 1940, titre: "Occupation britannique", lieu: [64.15, -21.94] },
        { annee: 1944, titre: "Proclamation de la république", lieu: [64.26, -21.13] }
      ]
    },
    {
      titre: "La république d'Islande",
      debut: 1944, fin: 2026,
      chapo: "L'Islande rejoint l'OTAN, gagne les guerres de la morue, élit la première femme présidente au monde, traverse la faillite de 2008 et refuse en 2026 de reprendre les négociations avec l'UE.",
      recit: [
        "L'Islande devient membre fondateur de l'OTAN en 1949, malgré des émeutes. Pour protéger ses pêcheries, elle étend ses eaux territoriales et affronte le Royaume-Uni lors de trois « guerres de la morue », de 1958 à 1976, qu'elle remporte. En 1980, Vigdís Finnbogadóttir devient la première femme élue présidente au monde.",
        "En octobre 2008, les trois grandes banques s'effondrent. La « révolution des casseroles » fait tomber le gouvernement, et des banquiers sont condamnés. L'Islande dépose une candidature à l'UE en 2009, puis la gèle en 2015. Le 29 août 2026, 52,8 % des électeurs refusent de reprendre les négociations."
      ],
      consensus: [
        "L'Islande a gagné les guerres de la morue.",
        "La crise bancaire de 2008 a été l'une des plus violentes au monde, rapportée à la taille du pays.",
        "L'Islande est membre de l'Espace économique européen, sans être dans l'UE."
      ],
      debats: [
        {
          question: "Faut-il entrer dans l'Union européenne ?",
          positions: [
            { titre: "Oui", texte: "L'adhésion stabiliserait la monnaie et l'économie, et renforcerait la sécurité dans un contexte arctique tendu.", qui: "Gouvernement de Kristrún Frostadóttir, Alliance sociale-démocrate, Réforme" },
            { titre: "Non", texte: "L'adhésion ferait perdre à l'Islande le contrôle de ses ressources de pêche et de sa politique agricole.", qui: "Parti de l'indépendance, industrie de la pêche" }
          ],
          etat: "Le gouvernement a promis de respecter le « non » du référendum d'août 2026."
        }
      ],
      moinsConnu: "Le 24 octobre 1975, environ 90 % des Islandaises firent grève pour une journée afin de montrer leur rôle dans la société ; l'événement a contribué à l'élection de Vigdís Finnbogadóttir.",
      evenements: [
        { annee: 1949, titre: "Adhésion à l'OTAN", lieu: [64.15, -21.94] },
        { annee: 1976, titre: "Fin de la troisième guerre de la morue", lieu: [65.0, -13.0] },
        { annee: 1980, titre: "Élection de Vigdís Finnbogadóttir", lieu: [64.15, -21.94] },
        { annee: 1986, titre: "Sommet Reagan-Gorbatchev à Reykjavík", lieu: [64.15, -21.94] },
        { annee: 2008, titre: "Effondrement des banques", lieu: [64.15, -21.94] },
        { annee: 2026, titre: "Référendum sur l'UE", lieu: [64.15, -21.94] }
      ]
    }
  ]
});
