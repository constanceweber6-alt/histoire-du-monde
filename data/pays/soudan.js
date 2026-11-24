HISTOIRE.ajouterPays({
  id: 'soudan',
  nom: 'Soudan',
  region: 'afrique-est',
  accroche: "La Nubie des pyramides de Méroé et des royaumes chrétiens, le sultanat de Funj, l'État mahdiste, le condominium anglo-égyptien, puis un pays déchiré par les guerres, du Darfour à la guerre de 2023.",
  intro: "Le Soudan, au confluent du Nil Blanc et du Nil Bleu, a été le siège de civilisations brillantes : Koush, Méroé, les royaumes chrétiens de Nubie. Depuis l'indépendance en 1956, il a connu des guerres presque continues, la sécession du Soudan du Sud en 2011 et, depuis avril 2023, une guerre qui a provoqué la plus grave crise humanitaire du monde.",
  sources: "P. M. Holt et M. W. Daly, A History of the Sudan ; Derek Welsby, The Kingdom of Kush ; Alex de Waal, Darfur: A New History of a Long War ; rapports de l'ONU.",
  phases: [
    {
      titre: 'Méroé et la Nubie chrétienne',
      debut: 1, fin: 1504,
      chapo: "Le royaume de Méroé, héritier de Koush, prospère jusqu'au IVe siècle. Puis trois royaumes chrétiens de Nubie résistent pendant des siècles à l'expansion arabe.",
      recit: [
        "Le royaume de Koush, dont les pharaons noirs avaient dominé l'Égypte, a sa capitale à Méroé. Ses rois et reines, les candaces, se font enterrer sous des centaines de pyramides. Méroé travaille le fer et commerce avec Rome. Le royaume décline au IVe siècle.",
        "Au VIe siècle, les royaumes nubiens de Nobatie, Makurie et Alodie se convertissent au christianisme. En 652, la Makurie repousse les armées arabes et signe le « baqt », un traité qui dure six siècles. Les royaumes chrétiens déclinent à partir du XIVe siècle, tandis que l'islam se diffuse."
      ],
      consensus: [
        "Le Soudan compte plus de pyramides que l'Égypte, notamment à Méroé.",
        "Les royaumes chrétiens de Nubie ont existé pendant près d'un millénaire.",
        "Le traité du baqt a réglé les relations entre la Nubie et l'Égypte pendant des siècles."
      ],
      debats: [
        {
          question: "Méroé : civilisation africaine originale ou reflet de l'Égypte ?",
          positions: [
            { titre: "Un reflet de l'Égypte", texte: "Les pyramides, les dieux et l'écriture montreraient une civilisation imitant l'Égypte.", qui: "Égyptologues du début du XXe siècle" },
            { titre: "Une civilisation originale", texte: "Méroé avait sa propre écriture, ses dieux comme Apedemak et un rôle central des reines.", qui: "Archéologues actuels" }
          ],
          etat: "Les chercheurs reconnaissent l'originalité de Méroé. Son écriture, le méroïtique, peut être lue mais reste largement incomprise."
        }
      ],
      moinsConnu: "La reine candace Amanirenas, borgne selon Strabon, a combattu les Romains vers 25 av. J.-C. et obtenu une paix favorable.",
      evenements: [
        { annee: 50, titre: "Méroé, capitale de Koush", lieu: [16.94, 33.75] },
        { annee: 350, titre: "Déclin de Méroé", lieu: [16.94, 33.75] },
        { annee: 652, titre: "Traité du baqt", lieu: [18.22, 30.75] },
        { annee: 1000, titre: "Cathédrale de Faras", lieu: [22.2, 31.48] }
      ]
    },
    {
      titre: 'Sultanats de Funj et du Darfour',
      debut: 1504, fin: 1821,
      chapo: "Le sultanat de Funj, à Sennar, et le sultanat du Darfour dominent la région. L'islam et la langue arabe se diffusent.",
      recit: [
        "Vers 1504, le sultanat de Funj s'établit à Sennar, sur le Nil Bleu. Il se convertit à l'islam et devient un centre de commerce et d'enseignement religieux. À l'ouest, le sultanat du Darfour, fondé par la dynastie Keira au XVIIe siècle, contrôle les routes caravanières.",
        "Ces sultanats pratiquent la traite des esclaves, razziés dans le sud et vendus vers l'Égypte et l'Arabie. Les confréries soufies répandent l'islam dans les campagnes."
      ],
      consensus: [
        "Le sultanat de Funj a dominé le Soudan central pendant trois siècles.",
        "Le Darfour était un sultanat indépendant jusqu'en 1916.",
        "La traite des esclaves vers le nord était au cœur de l'économie."
      ],
      debats: [
        {
          question: "Le Soudan : arabe ou africain ?",
          positions: [
            { titre: "Une identité arabe", texte: "L'islamisation et l'arabisation auraient fait du nord du Soudan un pays arabe.", qui: "Élites du nord, nationalisme arabe" },
            { titre: "Une identité africaine", texte: "Les populations du Soudan sont d'origine africaine ; l'« arabité » est une identité adoptée et une hiérarchie sociale.", qui: "Francis Deng, mouvements du Darfour et du sud" }
          ],
          etat: "La question de l'identité est au cœur des conflits soudanais ; les chercheurs y voient une construction historique et politique."
        }
      ],
      moinsConnu: "Le Darfour envoyait chaque année en Égypte une grande caravane, appelée « route des quarante jours », chargée d'ivoire, de plumes d'autruche et d'esclaves.",
      evenements: [
        { annee: 1504, titre: "Sultanat de Funj à Sennar", lieu: [13.55, 33.63] },
        { annee: 1650, titre: "Sultanat du Darfour", lieu: [13.63, 25.35] },
        { annee: 1780, titre: "Route des quarante jours", lieu: [14.4, 24.9] }
      ]
    },
    {
      titre: 'Turkiyya, Mahdi et condominium',
      debut: 1821, fin: 1956,
      chapo: "L'Égypte conquiert le Soudan en 1821. Le Mahdi chasse les Égyptiens et les Britanniques en 1885. La Grande-Bretagne reconquiert le pays et le gouverne avec l'Égypte.",
      recit: [
        "En 1821, les armées de Méhémet Ali conquièrent le Soudan ; c'est la « Turkiyya ». Khartoum est fondée. La traite des esclaves s'intensifie. En 1881, Muhammad Ahmad se proclame Mahdi et soulève le pays ; ses partisans prennent Khartoum en 1885 et tuent le général britannique Gordon.",
        "L'État mahdiste dure jusqu'en 1898, quand l'armée de Kitchener écrase les mahdistes à Omdurman : plus de 10 000 Soudanais sont tués. Le Soudan devient un condominium anglo-égyptien, dirigé en fait par les Britanniques, qui administrent séparément le nord arabe et le sud."
      ],
      consensus: [
        "L'État mahdiste a gouverné le Soudan de 1885 à 1898.",
        "La bataille d'Omdurman a été un massacre dû aux mitrailleuses britanniques.",
        "Les Britanniques ont administré séparément le nord et le sud."
      ],
      debats: [
        {
          question: "Le Mahdi : héros national ou fanatique ?",
          positions: [
            { titre: "Un fanatique", texte: "La propagande britannique présentait le Mahdi comme un fanatique cruel, assassin du héros Gordon.", qui: "Presse britannique de l'époque" },
            { titre: "Un libérateur", texte: "Le Mahdi a mené la première révolte africaine victorieuse contre l'impérialisme et unifié les Soudanais.", qui: "Nationalisme soudanais, historiens actuels" }
          ],
          etat: "Les historiens voient dans le mahdisme un mouvement religieux et anticolonial. Son successeur, le calife Abdullahi, a toutefois gouverné de façon très dure."
        }
      ],
      moinsConnu: "Le jeune Winston Churchill a participé à la charge de cavalerie d'Omdurman en 1898 et en a fait le récit dans un livre.",
      evenements: [
        { annee: 1821, titre: "Conquête égyptienne", lieu: [15.6, 32.53] },
        { annee: 1885, titre: "Prise de Khartoum par le Mahdi", lieu: [15.6, 32.53] },
        { annee: 1898, titre: "Bataille d'Omdurman", lieu: [15.64, 32.48] },
        { annee: 1916, titre: "Annexion du Darfour", lieu: [13.63, 25.35] }
      ]
    },
    {
      titre: 'Indépendance et guerres du Sud',
      debut: 1956, fin: 2011,
      chapo: "Le Soudan indépendant alterne coups d'État et guerres. Le sud se bat pendant des décennies. Le régime d'Omar el-Béchir commet des crimes de masse au Darfour.",
      recit: [
        "Le Soudan devient indépendant le 1er janvier 1956. Une première guerre avec le sud dure de 1955 à 1972. Le général Nimeiry instaure la charia en 1983, ce qui relance la guerre ; John Garang dirige la rébellion sudiste. Cette deuxième guerre fait environ deux millions de morts.",
        "Omar el-Béchir prend le pouvoir en 1989 avec les islamistes. En 2003, la guerre du Darfour éclate ; les milices janjawids massacrent les populations non arabes. En 2005, un accord de paix met fin à la guerre du sud, qui vote son indépendance en janvier 2011."
      ],
      consensus: [
        "Les guerres entre le nord et le sud ont fait environ deux millions de morts.",
        "La Cour pénale internationale a émis un mandat d'arrêt contre Omar el-Béchir pour le Darfour.",
        "Le Soudan du Sud est devenu indépendant en juillet 2011."
      ],
      debats: [
        {
          question: "Le Darfour : génocide ?",
          positions: [
            { titre: "Un génocide", texte: "Les massacres visant les Four, Massalit et Zaghawa avaient pour but de détruire ces groupes.", qui: "États-Unis (2004), Cour pénale internationale (mandat de 2010)" },
            { titre: "Des crimes contre l'humanité", texte: "Les violences relèvent de crimes de guerre massifs, sans intention génocidaire prouvée.", qui: "Commission d'enquête de l'ONU (2005)" }
          ],
          etat: "La CPI a inclus le génocide dans le mandat contre Béchir en 2010. Le conflit a fait environ 300 000 morts selon l'ONU."
        }
      ],
      moinsConnu: "Le Soudan a abrité Oussama ben Laden de 1991 à 1996, avant de l'expulser sous la pression américaine.",
      evenements: [
        { annee: 1956, titre: "Indépendance", lieu: [15.6, 32.53] },
        { annee: 1983, titre: "Charia et reprise de la guerre", lieu: [15.6, 32.53] },
        { annee: 1989, titre: "Coup d'État d'Omar el-Béchir", lieu: [15.6, 32.53] },
        { annee: 2003, titre: "Guerre du Darfour", lieu: [13.63, 25.35] },
        { annee: 2011, titre: "Indépendance du Soudan du Sud", lieu: [4.85, 31.58] }
      ]
    },
    {
      titre: 'Révolution et nouvelle guerre',
      debut: 2011, fin: 2026,
      chapo: "La révolution de 2019 renverse Béchir, mais les militaires reprennent le pouvoir. En avril 2023, l'armée et les Forces de soutien rapide entrent en guerre.",
      recit: [
        "En décembre 2018, des manifestations contre la hausse du prix du pain deviennent une révolution. Béchir est renversé en avril 2019. Un gouvernement civil de transition est formé, mais l'armée du général Burhan et les Forces de soutien rapide (FSR) du général Hemedti, issues des janjawids, font un coup d'État en octobre 2021.",
        "Le 15 avril 2023, les deux généraux entrent en guerre. Les FSR prennent El-Fasher, dernière ville du Darfour tenue par l'armée, fin octobre 2025, avec des massacres de civils. En février 2026, une mission de l'ONU évoque les « signes distinctifs d'un génocide ». Plus de 11 millions de personnes ont été déplacées."
      ],
      consensus: [
        "La révolution de 2019 a renversé Omar el-Béchir après trente ans de pouvoir.",
        "La guerre qui a éclaté en 2023 a provoqué l'une des pires crises humanitaires du monde.",
        "Les FSR sont accusées de massacres ethniques au Darfour."
      ],
      debats: [
        {
          question: "Qui alimente la guerre au Soudan ?",
          positions: [
            { titre: "Une guerre de généraux", texte: "La guerre est d'abord une lutte de pouvoir entre deux généraux et leurs réseaux économiques, or compris.", qui: "Analystes soudanais" },
            { titre: "Une guerre par procuration", texte: "Les Émirats arabes unis sont accusés d'armer les FSR, l'Égypte, l'Iran et la Turquie de soutenir l'armée.", qui: "Experts de l'ONU, ONG" }
          ],
          etat: "Les rapports de l'ONU documentent des livraisons d'armes extérieures ; les Émirats démentent soutenir les FSR. Les tentatives de cessez-le-feu ont échoué jusqu'ici."
        }
      ],
      moinsConnu: "Pendant la révolution de 2019, l'étudiante Alaa Salah, vêtue de blanc et debout sur une voiture, est devenue l'icône des manifestations. Les femmes représentaient une grande partie des manifestants.",
      evenements: [
        { annee: 2019, titre: "Révolution et chute de Béchir", lieu: [15.6, 32.53] },
        { annee: 2021, titre: "Coup d'État militaire", lieu: [15.6, 32.53] },
        { annee: 2023, titre: "Début de la guerre", lieu: [15.6, 32.53] },
        { annee: 2025, titre: "Chute d'El-Fasher", lieu: [13.63, 25.35] }
      ]
    }
  ]
});
