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
      supports: [
        { id: "hi-istanbul-1", titre: "Istanbul, c'est Byzance ! (1re partie : l'Empire byzantin)", source: "C'est pas sorcier", type: "video", lien: "", fin: 600, etiquette: "decouvrir", duree: "10 min", noteParent: "Prendre la version de la chaîne officielle ou d'apps.education, pas la copie d'un particulier. La fin est réglée à 10 min (partie byzantine) ; ajustez si besoin." },
        { id: "hi-istanbul-2", titre: "Istanbul, c'est Byzance ! (la suite)", source: "C'est pas sorcier", type: "video", lienDe: "hi-istanbul-1", debut: 600, etiquette: "plusloin", noteParent: "Même vidéo que la 1re partie : le lien est repris automatiquement." },
        { id: "hi-theodora", titre: "Théodora, l'impératrice", type: "video", lien: "", etiquette: "plusloin", noteParent: "La plupart des émissions sur Théodora sont pour adultes : chercher un format adapté." }
      ],
      quiz: [
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
        { q: "Qui est Théodora ?", options: ["L'impératrice, épouse de Justinien", "La mère de Justinien", "Une reine lombarde"], bonne: 0, explication: "Sa mosaïque fait face à celle de Justinien à Ravenne ; en 532, elle le pousse à ne pas fuir.", point: "Théodora", revoir: "hi-theodora" },
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
      supports: [
        { id: "hi-charlemagne", titre: "Charlemagne et l'Empire carolingien", type: "video", lien: "", etiquette: "decouvrir", noteParent: "Vidéo à récupérer : chercher sur Lumni ou une chaîne officielle un format court couvrant 768, le sacre de 800 et le partage de 843." }
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
        { q: "Que se passe-t-il en 843 ?", options: ["L'empire est partagé entre les trois petits-fils de Charlemagne", "Charlemagne meurt", "Les Normands prennent Aix-la-Chapelle"], bonne: 0, explication: "Le traité de Verdun : Francie occidentale, Lotharingie, Francie orientale.", point: "Le partage de 843", revoir: "hi-charlemagne", fixe: true },
        { q: "Comment s'appelle le traité de 843 ?", options: ["Le traité de Verdun", "Le traité d'Aix-la-Chapelle", "Le traité de Rome"], bonne: 0, explication: "Signé à Verdun, il divise l'empire en trois royaumes.", point: "Le partage de 843", fixe: true },
        { q: "Quels sont les trois royaumes issus du partage ?", options: ["Francie occidentale, Lotharingie, Francie orientale", "France, Italie, Espagne", "Saxe, Bavière, Lombardie"], bonne: 0, explication: "Ce sont les noms portés sur la carte du manuel.", point: "Le partage de 843" },
        { q: "Quels peuples menacent l'Europe carolingienne après le partage ?", options: ["Les Normands, les Sarrasins et les Hongrois", "Les Turcs et les Slaves", "Les Lombards seulement"], bonne: 0, explication: "Trois menaces extérieures, du nord, du sud et de l'est, sur un empire déjà affaibli.", point: "Un empire qui s'affaiblit" },
        { q: "« Éphémère », dans le titre de la séance, veut dire…", options: ["qui dure peu de temps", "très puissant", "très étendu"], bonne: 0, explication: "L'Empire carolingien dure moins d'un siècle après le sacre, alors que l'Empire byzantin est millénaire.", point: "Comparer les deux empires", fixe: true },
        { q: "Qu'ont en commun l'Empire byzantin et l'Empire carolingien ?", options: ["Ce sont deux empires chrétiens qui se veulent héritiers de l'Empire romain", "Ils ont la même capitale", "Ils parlent la même langue"], bonne: 0, explication: "C'est la question qui ouvre le chapitre : quels sont les facteurs d'unité et de division de ces deux empires ?", point: "Comparer les deux empires", fixe: true },
        { q: "Quelle est la capitale de chacun des deux empires ?", options: ["Constantinople pour Byzance, Aix-la-Chapelle pour les Carolingiens", "Rome pour les deux", "Rome et Constantinople"], bonne: 0, explication: "C'est la question 3 du « Je me repère ».", point: "Comparer les deux empires", fixe: true },
        { q: "Lequel des deux empires dure le plus longtemps ?", options: ["L'Empire byzantin, près de mille ans", "L'Empire carolingien", "Les deux autant"], bonne: 0, explication: "395-1453 pour Byzance ; 800-843 avant le partage pour les Carolingiens.", point: "Comparer les deux empires" }
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
