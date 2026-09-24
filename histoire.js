matiere({
  id: "histoire", nom: "Histoire", couleur: "#9A6423", icone: "🏰",
  chapitres: [
    {
      id: "hi-byzance",
      titre: "Byzance et l'Europe carolingienne",
      resume: "L'Empire byzantin, Justinien, la mosaïque de Ravenne, Constantinople, le Code Justinien.",
      savaisTu: [
        "Sur la mosaïque de Saint-Vital de Ravenne, l'impératrice Théodora fait face à Justinien. En 532, pendant la révolte Nika, c'est elle qui convainc l'empereur de rester et de résister.",
        "Une mosaïque est faite de milliers de petits cubes de pierre ou de verre, appelés tesselles.",
        "Sainte-Sophie a été construite sous Justinien en cinq ans environ, de 532 à 537. Sa coupole est restée l'une des plus grandes du monde pendant près de mille ans."
      ],
      missions: [
        { titre: "Les 12 réponses de l'interrogation, à redire à voix haute", etapes: [
          "Nom de l'empereur ? Justinien.",
          "Siècle et dates de règne ? VIe siècle, de 527 à 565.",
          "Capitale ? Constantinople.",
          "Titre porté, qui veut dire « roi » en grec ? Basileus.",
          "Ce qui montre sur la mosaïque de Ravenne qu'il est sacré ? L'auréole.",
          "Ses pouvoirs ? Politique, militaire et religieux.",
          "Ce qu'il a voulu réaliser ? Reconstituer l'Empire romain antique.",
          "Régions conquises ? L'Italie, le sud de l'Espagne, le nord de l'Afrique.",
          "Bâtiment religieux ? Sainte-Sophie.",
          "Recueil de lois ? Le Code Justinien.",
          "Peuples menaçants ? Lombards, Slaves, Arabes, Turcs.",
          "Fin de l'empire ? 1453, prise de Constantinople par les Turcs."
        ] }
      ],
      supports: [
        { id: "hi-istanbul-1", titre: "Istanbul, c'est Byzance ! (1re partie : l'Empire byzantin)", source: "C'est pas sorcier", type: "video", lien: "https://www.youtube.com/watch?v=wDSoXY4zfv4", fin: 600, etiquette: "decouvrir", duree: "10 min", noteParent: "Version de la chaîne officielle C'est pas sorcier. La fin est réglée à 10 min, la partie qui concerne Byzance ; ajustez si besoin." },
        { id: "hi-istanbul-2", titre: "Istanbul, c'est Byzance ! (la suite)", source: "C'est pas sorcier", type: "video", lienDe: "hi-istanbul-1", debut: 600, etiquette: "plusloin", noteParent: "Même vidéo que la 1re partie : le lien est repris automatiquement." }
      ],
      quiz: [
        { q: "À quel siècle règne l'empereur Justinien ?", options: ["Au VIe siècle", "Au IIIe siècle", "Au IXe siècle", "Au XVe siècle"], bonne: 0, explication: "527-565 : ce sont des années 500, donc le VIe siècle. Astuce : on ajoute 1 au chiffre des centaines.", point: "L'interrogation : Justinien", revoir: "hi-istanbul-1" },
        { q: "Quels sont les pouvoirs de l'empereur byzantin ?", options: ["Politique, militaire et religieux", "Uniquement militaire", "Politique et commercial", "Uniquement religieux"], bonne: 0, explication: "Trois pouvoirs, trois groupes autour de lui sur la mosaïque : les fonctionnaires, les soldats, les prêtres.", point: "L'interrogation : Justinien", revoir: "hi-istanbul-1" },
        { q: "Qu'a voulu réaliser Justinien sous son règne ?", options: ["Reconstituer l'Empire romain antique", "Rassembler les lois romaines", "Construire Constantinople", "Convertir les Turcs"], bonne: 0, explication: "Son grand projet, c'est de refaire l'Empire romain. Le Code est un autre de ses actes, mais ce n'est pas la réponse attendue ici.", point: "L'interrogation : Justinien", revoir: "hi-istanbul-1" },
        { q: "Quelles régions Justinien a-t-il conquises ?", options: ["L'Italie, le sud de l'Espagne et le nord de l'Afrique", "La Gaule, la Saxe et la Bavière", "La Grèce et la Turquie", "L'Égypte et la Syrie"], bonne: 0, explication: "Trois régions à citer ensemble : l'Italie, le sud de l'Espagne, le nord de l'Afrique.", point: "L'interrogation : Justinien" },
        { q: "Quel bâtiment religieux est construit sous son règne ?", options: ["La basilique Sainte-Sophie de Constantinople", "Saint-Pierre de Rome", "La chapelle d'Aix-la-Chapelle", "Notre-Dame de Paris"], bonne: 0, explication: "Sainte-Sophie, construite de 532 à 537.", point: "L'interrogation : Justinien", revoir: "hi-istanbul-1" },
        { q: "Quel est le nom exact du recueil de lois rédigé sous son règne ?", options: ["Le Code Justinien", "La Bible", "Le traité de Verdun", "Les Annales de Lorsch"], bonne: 0, explication: "Au contrôle, il faut donner le nom : « le Code Justinien ». Expliquer ce qu'il contient ne suffit pas.", point: "L'interrogation : Justinien" },
        { q: "Quels peuples menacent l'Empire byzantin entre le VIe et le XIe siècle ?", options: ["Les Lombards, les Slaves, les Arabes et les Turcs", "Les Lombards et les Slaves seulement", "Les Vikings et les Hongrois", "Les Francs et les Saxons"], bonne: 0, explication: "Quatre peuples. Les Lombards et les Slaves ne suffisent pas : il faut aussi les Arabes et les Turcs.", point: "L'interrogation : Justinien" },
        { q: "Quelle année et quel événement marquent la fin de l'Empire byzantin ?", options: ["1453, la prise de Constantinople par les Turcs", "565, la mort de Justinien", "1054, le schisme", "1071, la bataille de Manzikert"], bonne: 0, explication: "L'empire survit longtemps à Justinien : il ne disparaît qu'en 1453, quand les Turcs prennent Constantinople.", point: "L'interrogation : Justinien" },
        { q: "En quelle année l'Empire romain est-il partagé en deux ?", options: ["395", "476", "529"], bonne: 0, explication: "395 : l'Empire romain d'Occident d'un côté, l'Empire romain d'Orient de l'autre. L'Empire byzantin naît de cette moitié orientale.", point: "Les dates de Byzance", revoir: "hi-istanbul-1" },
        { q: "En 529, Justinien fait rassembler…", options: ["les anciennes lois romaines dans un code", "les armées de l'empire", "les impôts de l'empire"], bonne: 0, explication: "Le Code Justinien : l'empereur veut un État bien gouverné en temps de paix comme en temps de guerre.", point: "Le Code Justinien" },
        { q: "Le mot « byzantin » vient…", options: ["de Byzance, nom que portait Constantinople avant le IVe siècle", "du nom d'un empereur", "d'une région de Grèce"], bonne: 0, explication: "La ville s'appelait Byzance avant de devenir Constantinople.", point: "Le vocabulaire du pouvoir byzantin" },
        { q: "Quelle religion l'Empire byzantin suit-il ?", options: ["le christianisme orthodoxe", "le catholicisme romain", "l'islam"], bonne: 0, explication: "L'empereur s'appuie sur la religion chrétienne orthodoxe. Sur les manuscrits, le Christ protège le basileus et garantit son pouvoir.", point: "Un Empire chrétien" },
        { q: "Que se passe-t-il en 1071 à Manzikert ?", options: ["Les Turcs écrasent les Byzantins et capturent le basileus", "Les Byzantins reprennent Rome", "Constantinople est fondée"], bonne: 0, explication: "Une lourde défaite : le basileus Romain IV Diogène est fait prisonnier.", point: "Les menaces sur l'Empire" },
        { q: "Justinien a régné de…", options: ["527 à 565", "800 à 814", "1453 à 1461"], bonne: 0, explication: "Justinien règne au VIe siècle, de 527 à 565.", point: "Justinien et son règne", revoir: "hi-istanbul-1" },
        { q: "Que veut dire « basileus » ?", options: ["« Roi des rois », en grec", "« Grand prêtre », en latin", "« Chef de guerre », en arabe"], bonne: 0, explication: "Basileus est le titre grec de l'empereur byzantin.", point: "Le vocabulaire du pouvoir byzantin", revoir: "hi-istanbul-1" },
        { q: "Où se trouve la mosaïque de Justinien ?", options: ["Dans l'église Saint-Vital de Ravenne, en Italie", "À Sainte-Sophie de Constantinople", "Au Sénat de Rome"], bonne: 0, explication: "Elle date du milieu du VIe siècle et se trouve à Ravenne, en Italie.", point: "La mosaïque de Ravenne" },
        { q: "Qu'est-ce qu'une mosaïque ?", options: ["Un assemblage de petits cubes multicolores qui forment un dessin", "Une peinture sur un mur", "Une tapisserie brodée"], bonne: 0, explication: "Les petits cubes juxtaposés, les tesselles, forment l'image.", point: "La mosaïque de Ravenne" },
        { q: "Sur la mosaïque, à quoi voit-on que l'empereur est un personnage sacré ?", options: ["À l'auréole autour de sa tête", "À sa longue cape", "À ses chaussures"], bonne: 0, explication: "L'auréole qui nimbe sa tête montre son caractère sacré.", point: "Le vocabulaire du pouvoir byzantin" },
        { q: "La chlamyde, c'est…", options: ["la longue cape de l'empereur", "sa couronne", "la broche sur son épaule"], bonne: 0, explication: "La chlamyde est la longue cape, de couleur pourpre.", point: "Le vocabulaire du pouvoir byzantin" },
        { q: "La fibule, c'est…", options: ["la broche qui retient la cape", "le plat tenu par l'empereur", "le symbole du Christ"], bonne: 0, explication: "La fibule retient la chlamyde sur l'épaule droite.", point: "Le vocabulaire du pouvoir byzantin" },
        { q: "Quelle couleur est réservée à l'empereur ?", options: ["Le pourpre", "Le vert", "Le blanc"], bonne: 0, explication: "Le pourpre est la couleur impériale.", point: "Le vocabulaire du pouvoir byzantin" },
        { q: "Le chrisme, c'est…", options: ["le symbole formé des premières lettres du nom du Christ en grec", "une coupe pour la messe", "un vêtement de prêtre"], bonne: 0, explication: "Le chrisme associe les lettres grecques X et P : c'est un signe que l'Empire est chrétien.", point: "Un Empire chrétien" },
        { q: "Les trois groupes autour de Justinien représentent…", options: ["les pouvoirs politique, militaire et religieux", "les trois fils de l'empereur", "les peuples ennemis"], bonne: 0, explication: "Hauts fonctionnaires, soldats et prêtres : l'empereur réunit les trois pouvoirs.", point: "Les pouvoirs de l'empereur" },
        { q: "Quel monument de Constantinople montre l'influence chrétienne ?", options: ["Sainte-Sophie", "L'hippodrome", "Le Sénat"], bonne: 0, explication: "Les églises, dont Sainte-Sophie, et les monastères sont chrétiens ; l'hippodrome et le Sénat rappellent Rome.", point: "Constantinople et ses influences", revoir: "hi-istanbul-1" },
        { q: "L'hippodrome et les forums de Constantinople rappellent…", options: ["Rome", "la Grèce", "l'Égypte"], bonne: 0, explication: "Forums, palais, Sénat, hippodrome, aqueduc : c'est l'héritage romain. L'Acropole, elle, rappelle la Grèce.", point: "Constantinople et ses influences", revoir: "hi-istanbul-1" },
        { q: "Par ses conquêtes, quel empire Justinien veut-il reconstituer ?", options: ["L'Empire romain antique", "L'empire d'Alexandre le Grand", "L'Empire carolingien"], bonne: 0, explication: "Il reconquiert l'Italie, le nord de l'Afrique et le sud de l'Espagne pour refaire l'Empire romain.", point: "Les conquêtes de Justinien" },
        { q: "Lequel de ces territoires Justinien a-t-il conquis ?", options: ["L'Italie", "La Gaule", "La Bretagne"], bonne: 0, explication: "Ses conquêtes : l'Italie, le nord de l'Afrique et le sud de l'Espagne.", point: "Les conquêtes de Justinien" },
        { q: "Après 534, dans quelle langue les lois nouvelles sont-elles rédigées ?", options: ["En grec", "En latin", "En arabe"], bonne: 0, explication: "Le Code Justinien reprend les lois romaines, mais les lois nouvelles sont écrites en grec.", point: "Le Code Justinien" },
        { q: "Qui est Théodora ?", options: ["L'impératrice, épouse de Justinien", "La mère de Justinien", "Une reine lombarde"], bonne: 0, explication: "Sa mosaïque fait face à celle de Justinien à Ravenne ; en 532, elle le pousse à ne pas fuir.", point: "Théodora" },
        { q: "Quelle menace pèse sur l'Empire byzantin ?", options: ["Les attaques de peuples voisins : Lombards, Slaves, Arabes, Turcs", "Aucune : ses frontières sont sûres et bien gardées"], bonne: 0, explication: "L'Empire a du mal à tenir ses frontières, notamment face aux incursions turques.", point: "Les menaces sur l'Empire" }
      ]
    },
    {
      id: "hi-carolingiens",
      titre: "Un Empire carolingien éphémère",
      resume: "Charlemagne : conquérir, se faire sacrer, gouverner. Et un empire qui ne lui survit pas.",
      savaisTu: [
        "Éginhard, qui a écrit la vie de Charlemagne, raconte qu'il gardait des tablettes de cire sous son oreiller pour s'exercer à écrire la nuit : il s'y était mis trop tard et n'y est jamais vraiment arrivé.",
        "Son prénom, Karl, a donné le mot « roi » dans plusieurs langues slaves : král en tchèque, król en polonais.",
        "Sur ses deniers d'argent, on lit KAROLUS IMP AUG : Charles empereur auguste, exactement les titres des empereurs romains. Au revers, une église et les mots RELIGIO CHRISTIANA.",
        "La chapelle qu'il a fait construire à Aix-la-Chapelle existe toujours. Sa forme à huit côtés s'inspire des églises byzantines, celles de la séance précédente.",
        "« Carolingien » vient de Karolus, la forme latine de Charles : la dynastie porte le nom de son membre le plus célèbre."
      ],
      missions: [
        { titre: "Les réponses de la correction, à redire à voix haute", etapes: [
          "Directions des conquêtes ? L'est (Saxe, Bavière, Carinthie, Lombardie) et le sud-ouest (Catalogne).",
          "Qui couronne Charlemagne, et pourquoi ? Le pape Léon III : Charlemagne domine Rome et une partie de l'ancien Empire romain d'Occident, et le titre n'est plus porté à Byzance.",
          "Héritier des Romains ? Couronne de laurier, fibule et toge, titre d'Imperator Augustus.",
          "Chrétien ? Églises et croix sur ses pièces.",
          "Sur qui s'appuie-t-il ? Les comtes, les évêques, les missi dominici qui surveillent les comtes.",
          "Comment l'unité est-elle brisée ? Louis le Pieux meurt en 840 ; en 843, traité de Verdun entre ses trois fils.",
          "Les trois royaumes ? Francie occidentale (Charles le Chauve), Lotharingie (Lothaire), Francie orientale (Louis le Germanique).",
          "Peuples menaçants ? Vikings au nord, Sarrasins au sud, Hongrois à l'est."
        ] }
      ],
      supports: [
        { id: "hi-charlemagne", titre: "L'Empire carolingien et le règne de Charlemagne", source: "Cours de collège, 5e", type: "video", lien: "https://www.youtube.com/watch?v=mQ9O_Db1Z60", etiquette: "decouvrir", verifier: true, noteParent: "Vidéo de professeur, chaîne non identifiée : à visionner avant de l'ouvrir. Elle résume le chapitre pour des élèves de 5e." },
        { id: "hi-revision", titre: "Byzance et l'Europe carolingienne : la révision du chapitre", source: "Cours de collège, 5e", type: "video", lien: "https://www.youtube.com/watch?v=sSIS3FY_YOU", etiquette: "consolider", verifier: true, noteParent: "Vidéo de révision couvrant les deux empires, utile avant le contrôle. Chaîne non identifiée : à visionner avant de l'ouvrir." }
      ],
      quiz: [
        { q: "Qui fonde la dynastie des Carolingiens, en 751 ?", options: ["Pépin le Bref", "Charlemagne", "Charles Martel"], bonne: 0, explication: "Pépin le Bref, fils de Charles Martel et père de Charlemagne.", point: "La dynastie carolingienne", revoir: "hi-charlemagne", fixe: true },
        { q: "En 768, Charlemagne devient…", options: ["roi des Francs", "empereur", "pape"], bonne: 0, explication: "Il est d'abord roi des Francs. L'empire viendra trente-deux ans plus tard.", point: "La dynastie carolingienne", fixe: true },
        { q: "Quelles sont les dates du règne de Charlemagne ?", options: ["768-814", "751-800", "800-843"], bonne: 0, explication: "768-814 : quarante-six ans de règne.", point: "La dynastie carolingienne", fixe: true },
        { q: "D'où vient le mot « carolingien » ?", options: ["De Karolus, le nom latin de Charles", "Du nom d'une ville", "D'un mot signifiant « guerrier »"], bonne: 0, explication: "Les Carolingiens sont les descendants de Charles Martel et de son fils Pépin.", point: "Le vocabulaire du chapitre" },
        { q: "Comment Charlemagne agrandit-il son royaume ?", options: ["Par des conquêtes, notamment la Saxe et la Lombardie", "Par des mariages seulement", "Par des achats de territoires"], bonne: 0, explication: "Il conquiert sans relâche : la carte du manuel distingue le royaume de 768 et l'empire de 814.", point: "Charlemagne conquiert l'Europe", revoir: "hi-charlemagne" },
        { q: "Où et quand Charlemagne est-il sacré empereur ?", options: ["À Rome, le jour de Noël de l'an 800", "À Aix-la-Chapelle, en 768", "À Constantinople, en 814"], bonne: 0, explication: "Il part à Rome et reçoit le titre à Noël 800.", point: "Le sacre de l'an 800", revoir: "hi-charlemagne", fixe: true },
        { q: "Qui le couronne ?", options: ["Le pape Léon III", "L'empereur byzantin", "Son père Pépin"], bonne: 0, explication: "Le pape le couronne : c'est ce qui fait de lui un empereur chrétien.", point: "Le sacre de l'an 800", fixe: true },
        { q: "Pourquoi le titre d'empereur était-il alors disponible en Occident ?", options: ["Parce qu'à Byzance une femme, l'impératrice Irène, régnait seule", "Parce que l'Empire byzantin avait disparu", "Parce que le pape l'avait supprimé"], bonne: 0, explication: "Les Annales de Lorsch expliquent que, le trône impérial étant occupé par une femme, le titre paraissait vacant aux yeux des Francs.", point: "Le sacre de l'an 800", revoir: "hi-charlemagne" },
        { q: "Quelle est la capitale de l'Empire carolingien ?", options: ["Aix-la-Chapelle", "Paris", "Rome"], bonne: 0, explication: "Aix-la-Chapelle, la capitale fondée par Charlemagne.", point: "Gouverner l'empire", fixe: true },
        { q: "Qu'est-ce qu'un comte ?", options: ["Un personnage qui dirige un comté au nom de l'empereur", "Un chef religieux", "Un soldat"], bonne: 0, explication: "Les comtes dirigent un comté : ils rendent la justice, lèvent les impôts et rassemblent l'armée.", point: "Gouverner l'empire", fixe: true },
        { q: "Qu'est-ce qu'un évêque ?", options: ["Un chef catholique qui dirige un diocèse", "Un grand propriétaire terrien", "Un juge du roi"], bonne: 0, explication: "Un diocèse est un territoire qui regroupe plusieurs églises. Les évêques font respecter l'ordre voulu par l'empereur.", point: "Gouverner l'empire", fixe: true },
        { q: "Que sont les missi dominici ?", options: ["Les « envoyés du seigneur », qui contrôlent comtes et évêques", "Les soldats de la garde impériale", "Les impôts levés dans l'empire"], bonne: 0, explication: "Envoyés par deux, ils inspectent l'administration au nom de l'empereur. Le mot est en latin.", point: "Gouverner l'empire", fixe: true },
        { q: "Comtes et évêques sont liés à l'empereur par…", options: ["un serment de fidélité", "un contrat de travail", "un lien de famille"], bonne: 0, explication: "Le schéma du manuel le montre : l'empereur nomme, ils jurent fidélité.", point: "Gouverner l'empire" },
        { q: "Sur quoi Charlemagne appuie-t-il l'unité de son empire ?", options: ["Sur la religion chrétienne et une administration organisée", "Sur une seule langue parlée partout", "Sur la monnaie uniquement"], bonne: 0, explication: "Un empereur sacré par le pape, des évêques dans l'administration, des deniers frappés RELIGIO CHRISTIANA.", point: "Un empereur chrétien" },
        { q: "Dans quelles directions Charlemagne oriente-t-il ses conquêtes ?", options: ["Vers l'est et le sud-ouest", "Vers le nord et l'ouest", "Vers le sud-est uniquement"], bonne: 0, explication: "Vers l'est : la Saxe, la Bavière, la Carinthie, la Lombardie. Vers le sud-ouest : la Catalogne.", point: "Charlemagne conquiert l'Europe", revoir: "hi-charlemagne", fixe: true },
        { q: "Lequel de ces territoires Charlemagne a-t-il conquis ?", options: ["La Saxe", "L'Angleterre", "L'Égypte"], bonne: 0, explication: "Saxe, Bavière, Carinthie, Lombardie à l'est, Catalogne au sud-ouest.", point: "Charlemagne conquiert l'Europe" },
        { q: "Pourquoi le pape Léon III décide-t-il de couronner Charlemagne ?", options: ["Parce qu'il estime qu'il le mérite : il domine Rome et une partie de l'ancien Empire romain d'Occident", "Parce que Charlemagne l'a menacé", "Parce que l'empereur byzantin le lui a demandé"], bonne: 0, explication: "Et parce qu'à cette époque, le titre d'empereur n'est plus porté à Byzance.", point: "Le sacre de l'an 800", revoir: "hi-charlemagne", fixe: true },
        { q: "Sur son denier, comment Charlemagne montre-t-il qu'il est l'héritier des empereurs romains ?", options: ["Il porte une couronne de laurier, la fibule et la toge, et se fait appeler Imperator Augustus", "Il fait graver une carte de l'empire", "Il se fait représenter à cheval"], bonne: 0, explication: "Trois signes romains sur une même pièce : la couronne de laurier, l'habit impérial, et le titre latin.", point: "Un empereur romain et chrétien", revoir: "hi-charlemagne", fixe: true },
        { q: "Et comment montre-t-il qu'il est chrétien ?", options: ["Par les églises et les croix gravées sur ses pièces", "Par une couronne d'épines", "Par son prénom"], bonne: 0, explication: "Au revers du denier : une église et les mots RELIGIO CHRISTIANA.", point: "Un empereur romain et chrétien", fixe: true },
        { q: "« Imperator Augustus », que Charlemagne fait graver, veut dire…", options: ["empereur auguste, comme les empereurs romains", "roi des Francs", "protecteur de Rome"], bonne: 0, explication: "Ce sont exactement les titres portés par les empereurs de Rome.", point: "Un empereur romain et chrétien" },
        { q: "Sur qui Charlemagne s'appuie-t-il pour gouverner l'empire ?", options: ["Les comtes, les évêques et les missi dominici", "Uniquement son armée", "Les marchands des villes"], bonne: 0, explication: "C'est la réponse attendue, en trois mots : comtes, évêques, missi dominici.", point: "Gouverner l'empire", revoir: "hi-charlemagne", fixe: true },
        { q: "À quoi servent précisément les missi dominici ?", options: ["À surveiller l'action des comtes, partout dans l'empire", "À collecter les impôts eux-mêmes", "À diriger les armées"], bonne: 0, explication: "Charlemagne les choisit et les envoie dans tout l'empire pour contrôler ceux qui gouvernent en son nom.", point: "Gouverner l'empire", fixe: true },
        { q: "Que se passe-t-il en 843 ?", options: ["L'empire est partagé entre les trois fils de Louis le Pieux", "Charlemagne meurt", "Les Vikings prennent Aix-la-Chapelle"], bonne: 0, explication: "Louis le Pieux, fils de Charlemagne, meurt en 840. En 843, le traité de Verdun partage l'empire entre ses trois fils.", point: "Le partage de 843", revoir: "hi-charlemagne", fixe: true },
        { q: "Comment s'appelle le traité de 843 ?", options: ["Le traité de Verdun", "Le traité d'Aix-la-Chapelle", "Le traité de Rome"], bonne: 0, explication: "Signé à Verdun, il divise l'empire en trois royaumes.", point: "Le partage de 843", fixe: true },
        { q: "Quels sont les trois royaumes issus du partage ?", options: ["Francie occidentale, Lotharingie, Francie orientale", "France, Italie, Espagne", "Saxe, Bavière, Lombardie"], bonne: 0, explication: "Ce sont les noms portés sur la carte du manuel.", point: "Le partage de 843" },
        { q: "Quels peuples menacent les royaumes carolingiens aux IXe et Xe siècles ?", options: ["Les Vikings au nord, les Sarrasins au sud, les Hongrois à l'est", "Les Turcs et les Slaves", "Les Lombards seulement"], bonne: 0, explication: "Trois menaces, sur trois côtés, alors que l'empire est déjà divisé.", point: "Un empire qui s'affaiblit", fixe: true },
        { q: "Les Sarrasins, ce sont…", options: ["les musulmans venus du sud", "les habitants de la Saxe", "les marchands de Constantinople"], bonne: 0, explication: "C'est le nom donné à l'époque aux musulmans qui attaquent par le sud.", point: "Un empire qui s'affaiblit" },
        { q: "Qui sont les trois fils qui se partagent l'empire en 843 ?", options: ["Charles le Chauve, Louis le Germanique et Lothaire", "Pépin, Charles Martel et Louis", "Léon, Charles et Verdun"], bonne: 0, explication: "Charles le Chauve reçoit la Francie occidentale, Louis le Germanique la Francie orientale, et Lothaire la Lotharingie, entre les deux.", point: "Le partage de 843", fixe: true },
        { q: "Qui succède à Charlemagne à sa mort, en 814 ?", options: ["Son fils Louis le Pieux", "Le pape Léon III", "Son petit-fils Lothaire"], bonne: 0, explication: "Louis le Pieux règne jusqu'en 840. C'est à sa mort que l'empire se divise.", point: "Le partage de 843", fixe: true },
        { q: "« Éphémère », dans le titre de la séance, veut dire…", options: ["qui dure peu de temps", "très puissant", "très étendu"], bonne: 0, explication: "L'Empire carolingien dure moins d'un siècle après le sacre, alors que l'Empire byzantin est millénaire.", point: "Comparer les deux empires", fixe: true },
        { q: "Qu'ont en commun l'Empire byzantin et l'Empire carolingien ?", options: ["Ce sont deux empires chrétiens qui se veulent héritiers de l'Empire romain", "Ils ont la même capitale", "Ils parlent la même langue"], bonne: 0, explication: "C'est la question qui ouvre le chapitre : quels sont les facteurs d'unité et de division de ces deux empires ?", point: "Comparer les deux empires", fixe: true },
        { q: "Quelle est la capitale de chacun des deux empires ?", options: ["Constantinople pour Byzance, Aix-la-Chapelle pour les Carolingiens", "Rome pour les deux", "Rome et Constantinople"], bonne: 0, explication: "C'est la question 3 du « Je me repère ».", point: "Comparer les deux empires", fixe: true },
        { q: "Lequel des deux empires dure le plus longtemps ?", options: ["L'Empire byzantin, près de mille ans", "L'Empire carolingien", "Les deux autant"], bonne: 0, explication: "395-1453 pour Byzance ; 800-843 avant le partage pour les Carolingiens.", point: "Comparer les deux empires" }
      ]
    },
    {
      id: "hi-eglises",
      titre: "Une religion, deux Églises",
      resume: "Ce qui unit et ce qui distingue les chrétiens byzantins et carolingiens : catholiques et orthodoxes.",
      savaisTu: [
        "« Catholique » vient d'un mot grec qui veut dire « universel ». « Orthodoxe » veut dire « croyance droite, juste ». Chacune des deux Églises s'est choisi un nom qui dit qu'elle a raison.",
        "L'alphabet cyrillique, inventé pour évangéliser les peuples de l'Est, porte le nom du moine Cyrille. C'est toujours l'alphabet du russe, du bulgare ou du serbe aujourd'hui.",
        "Le mot « schisme » vient du grec et veut dire « séparation », « coupure ». En 1054, le pape et le patriarche de Constantinople s'excluent l'un l'autre de l'Église.",
        "Le plan d'une église se lit vu du ciel : une croix latine a une branche plus longue que les autres, une croix grecque a quatre branches égales."
      ],
      missions: [
        { titre: "Le tableau des deux Églises, à redire à voix haute", etapes: [
          "Situation ? Catholique à l'ouest, l'Occident. Orthodoxe à l'est, l'Orient.",
          "Chef religieux ? Le pape à Rome. Le patriarche de Constantinople.",
          "Prêtres ? Catholiques : célibataires et imberbes. Orthodoxes : peuvent se marier et porter la barbe.",
          "Langue de la messe ? Latin. Grec.",
          "Plan des églises ? Croix latine. Croix grecque.",
          "Évangélisation ? Catholiques : parfois par la force, comme les Saxons. Orthodoxes : avec l'alphabet cyrillique, pour les peuples de l'Est comme les Russes.",
          "Communion ? Catholiques : pain sans levain. Orthodoxes : pain avec levain.",
          "Baptême ? Catholiques : par aspersion. Orthodoxes : par immersion, trois fois.",
          "Icônes ? Catholiques : condamnées. Orthodoxes : vénérées.",
          "Séparation ? Le schisme de 1054."
        ] }
      ],
      supports: [],
      quiz: [
        { q: "Qui sont Cyrille et Méthode ?", options: ["Deux moines envoyés convertir les peuples slaves", "Deux empereurs byzantins", "Deux papes de Rome"], bonne: 0, explication: "Deux moines envoyés au IXe siècle par le basileus et le patriarche de Constantinople.", point: "Cyrille et Méthode" },
        { q: "Qui envoie Cyrille et Méthode en mission ?", options: ["Le basileus et le patriarche de Constantinople", "Le pape de Rome", "Charlemagne"], bonne: 0, explication: "Les deux autorités de l'Empire byzantin, la politique et la religieuse, ensemble.", point: "Cyrille et Méthode" },
        { q: "À quel siècle sont-ils envoyés ?", options: ["Au IXe siècle", "Au Ve siècle", "Au XIIIe siècle"], bonne: 0, explication: "Le IXe siècle, celui de Charlemagne et de ses successeurs.", point: "Cyrille et Méthode" },
        { q: "Quels peuples vont-ils convertir ?", options: ["Les peuples de langue slave : Serbes, Bulgares, Slovaques, Russes", "Les Saxons", "Les Arabes"], bonne: 0, explication: "Les peuples slaves de l'Est de l'Europe.", point: "Cyrille et Méthode" },
        { q: "Pourquoi inventent-ils l'alphabet cyrillique ?", options: ["Pour traduire la Bible dans la langue de ces peuples", "Pour écrire les lois de l'empire", "Pour remplacer le grec"], bonne: 0, explication: "Convertir, c'est d'abord se faire comprendre : d'où un alphabet nouveau pour traduire la Bible.", point: "Cyrille et Méthode" },
        { q: "L'alphabet cyrillique porte le nom…", options: ["du moine Cyrille", "d'une ville", "d'un empereur"], bonne: 0, explication: "C'est encore l'alphabet du russe, du bulgare et du serbe aujourd'hui.", point: "Cyrille et Méthode" },
        { q: "Que se passe-t-il en 1204 ?", options: ["Les chrétiens d'Occident prennent et pillent Constantinople", "Le schisme entre les deux Églises", "La chute de l'Empire byzantin"], bonne: 0, explication: "La quatrième croisade : des chrétiens pillent la capitale d'autres chrétiens. L'opposition entre les deux Églises en sort renforcée.", point: "La quatrième croisade" },
        { q: "Lors de quel événement Constantinople est-elle pillée en 1204 ?", options: ["La quatrième croisade", "La première croisade", "La bataille de Manzikert"], bonne: 0, explication: "Une croisade partie pour Jérusalem qui s'est arrêtée à Constantinople.", point: "La quatrième croisade" },
        { q: "Avec quel pain les catholiques font-ils la communion ?", options: ["Du pain sans levain", "Du pain avec levain", "Ils n'utilisent pas de pain"], bonne: 0, explication: "Sans levain chez les catholiques, avec levain chez les orthodoxes.", point: "D'autres différences de pratique" },
        { q: "Et les orthodoxes ?", options: ["Du pain avec levain", "Du pain sans levain", "Du pain grillé"], bonne: 0, explication: "Le levain, c'est ce qui fait gonfler le pain.", point: "D'autres différences de pratique" },
        { q: "Comment se fait le baptême catholique ?", options: ["Par aspersion : on verse un peu d'eau", "Par immersion, trois fois", "Sans eau"], bonne: 0, explication: "Aspersion : quelques gouttes sur le front.", point: "D'autres différences de pratique" },
        { q: "Comment se fait le baptême orthodoxe ?", options: ["Par immersion, trois fois", "Par aspersion", "Une seule fois, par immersion"], bonne: 0, explication: "Le baptisé est plongé entièrement dans l'eau, trois fois.", point: "D'autres différences de pratique" },
        { q: "Qu'est-ce qu'une icône ?", options: ["Une image religieuse représentant le Christ ou un saint", "Une croix en bois", "Un livre de prières"], bonne: 0, explication: "Les orthodoxes les vénèrent, les catholiques les ont condamnées.", point: "D'autres différences de pratique" },
        { q: "Quelle Église vénère les icônes ?", options: ["L'Église orthodoxe", "L'Église catholique", "Les deux également"], bonne: 0, explication: "Vénérées à l'est, condamnées à l'ouest : c'est l'une des différences du tableau.", point: "D'autres différences de pratique" },
        { q: "Le christianisme est une religion…", options: ["monothéiste : on croit en un seul Dieu", "polythéiste : on croit en plusieurs dieux", "sans dieu"], bonne: 0, explication: "C'est le rappel qui ouvre la séance.", point: "Le christianisme" },
        { q: "Où et quand le christianisme est-il apparu ?", options: ["Dans l'Empire romain, au Ier siècle", "À Constantinople, au VIe siècle", "À Rome, en 800"], bonne: 0, explication: "Au Ier siècle, dans l'Empire romain.", point: "Le christianisme" },
        { q: "Pour les chrétiens, Jésus-Christ est le Messie. « Messie » veut dire…", options: ["l'envoyé de Dieu", "le roi des Juifs", "le premier pape"], bonne: 0, explication: "Le Messie, c'est l'envoyé de Dieu annoncé par les prophètes de l'Ancien Testament.", point: "Le christianisme" },
        { q: "Qu'est-ce qui est au cœur de la foi chrétienne ?", options: ["La résurrection de Jésus", "Le pèlerinage à Rome", "La construction des églises"], bonne: 0, explication: "La foi en la résurrection de Jésus est au cœur du christianisme.", point: "Le christianisme" },
        { q: "Qu'est-ce qui unit l'Empire byzantin et l'Empire carolingien ?", options: ["Ce sont deux empires chrétiens", "Ils ont le même empereur", "Ils parlent la même langue"], bonne: 0, explication: "Même religion, mais des façons de pratiquer différentes, source de nombreux conflits.", point: "Unir et distinguer" },
        { q: "Que veut dire « catholique », en grec ?", options: ["Universel", "Croyance droite, juste", "Venu de Rome"], bonne: 0, explication: "Catholique : universel. Orthodoxe : croyance droite, juste.", point: "Le vocabulaire des deux Églises" },
        { q: "Que veut dire « orthodoxe », en grec ?", options: ["Croyance droite, juste", "Universel", "Venu de l'Orient"], bonne: 0, explication: "Ortho, c'est droit ; doxa, l'opinion, la croyance.", point: "Le vocabulaire des deux Églises" },
        { q: "Où se situe l'Église catholique ?", options: ["À l'ouest, en Occident", "À l'est, en Orient", "Au sud, en Afrique"], bonne: 0, explication: "L'Église catholique est celle de l'Occident, l'Église orthodoxe celle de l'Orient.", point: "Le tableau des deux Églises" },
        { q: "Qui est le chef de l'Église catholique ?", options: ["Le pape, à Rome", "Le patriarche de Constantinople", "L'empereur"], bonne: 0, explication: "Le pape siège à Rome.", point: "Le tableau des deux Églises" },
        { q: "Qui est le chef de l'Église orthodoxe ?", options: ["Le patriarche de Constantinople", "Le pape, à Rome", "Le basileus"], bonne: 0, explication: "Le patriarche, à Constantinople.", point: "Le tableau des deux Églises" },
        { q: "Les prêtres catholiques doivent être…", options: ["célibataires et imberbes", "mariés et barbus", "moines"], bonne: 0, explication: "Imberbe : sans barbe. Les prêtres orthodoxes, eux, peuvent se marier et porter la barbe.", point: "Le tableau des deux Églises" },
        { q: "« Imberbe » veut dire…", options: ["sans barbe", "sans cheveux", "sans famille"], bonne: 0, explication: "C'est le mot du tableau.", point: "Le vocabulaire des deux Églises" },
        { q: "Les prêtres orthodoxes…", options: ["peuvent se marier et porter la barbe", "doivent être célibataires", "doivent se raser la tête"], bonne: 0, explication: "C'est l'une des différences les plus visibles entre les deux Églises.", point: "Le tableau des deux Églises" },
        { q: "Dans quelle langue se dit la messe catholique ?", options: ["En latin", "En grec", "En français"], bonne: 0, explication: "Latin à l'ouest, grec à l'est.", point: "Le tableau des deux Églises" },
        { q: "Dans quelle langue se dit la messe orthodoxe ?", options: ["En grec", "En latin", "En arabe"], bonne: 0, explication: "Le grec, langue de l'Empire byzantin.", point: "Le tableau des deux Églises" },
        { q: "Quel est le plan des églises catholiques ?", options: ["Une croix latine", "Une croix grecque", "Un cercle"], bonne: 0, explication: "Croix latine : une branche plus longue que les autres.", point: "Le tableau des deux Églises" },
        { q: "Quel est le plan des églises orthodoxes ?", options: ["Une croix grecque, aux quatre branches égales", "Une croix latine", "Un rectangle"], bonne: 0, explication: "Croix grecque : quatre branches de même longueur.", point: "Le tableau des deux Églises" },
        { q: "Comment l'Église catholique évangélise-t-elle ?", options: ["Parfois par la force, comme avec les Saxons", "Uniquement par l'écriture", "Elle n'évangélise pas"], bonne: 0, explication: "Charlemagne convertit les Saxons de force : c'est l'exemple du manuel.", point: "L'évangélisation" },
        { q: "Comment l'Église orthodoxe évangélise-t-elle les peuples de l'Est ?", options: ["Grâce à l'invention de l'alphabet cyrillique", "Par la force, comme les Saxons", "En imposant le latin"], bonne: 0, explication: "L'alphabet cyrillique permet d'écrire la religion dans la langue de ces peuples, comme les Russes.", point: "L'évangélisation" },
        { q: "« Évangéliser », c'est…", options: ["convertir un peuple au christianisme", "construire une église", "élire un pape"], bonne: 0, explication: "Le mot vient d'Évangile.", point: "Le vocabulaire des deux Églises" },
        { q: "Comment appelle-t-on la rupture entre catholiques et orthodoxes ?", options: ["Le schisme", "Le traité", "La croisade"], bonne: 0, explication: "Schisme : séparation, coupure.", point: "Le schisme de 1054" },
        { q: "En quelle année a lieu le schisme ?", options: ["1054", "843", "1453"], bonne: 0, explication: "1054 : ne pas confondre avec 843, le partage de l'Empire carolingien, ni 1453, la fin de Byzance.", point: "Le schisme de 1054" }
      ]
    },
    {
      id: "hi-islam",
      titre: "De la naissance de l'islam à la prise de Bagdad",
      resume: "La seconde partie du thème 1.",
      supports: [
        { id: "hi-arabie", titre: "À quoi ressemblait l'Arabie avant l'arrivée de l'islam ?", source: "Nota Bene", type: "video", lien: "", etiquette: "decouvrir", duree: "13 min", noteParent: "Mis de côté pour la seconde partie du thème : adresse à récupérer quand le chapitre commence." }
      ]
    }
  ]
});
