matiere({
  id: "physique", nom: "Physique-chimie", couleur: "#1B8FC7", icone: "⚗️",
  chapitres: [
    {
      id: "pc-etats",
      titre: "Les états de la matière",
      resume: "Les trois états de l'eau et leurs caractéristiques. L'eau sur Terre, potable ou non.",
      savaisTu: [
        "Les nuages sont faits d'eau liquide, en minuscules gouttelettes. La vraie vapeur d'eau est invisible.",
        "Le panache blanc au-dessus d'une casserole n'est pas de la vapeur : ce sont déjà des gouttelettes d'eau liquide.",
        "En 2010, l'ONU a reconnu l'accès à l'eau potable comme un droit humain."
      ],
      supports: [
        { id: "pc-etats-video", titre: "Les états de la matière et le cycle de l'eau", source: "Cours de collège, 5e", type: "video", lien: "https://www.youtube.com/watch?v=pFMHgHHxvDk", etiquette: "consolider", verifier: true, noteParent: "Chaîne non identifiée : à visionner avant d'ouvrir." },
        { id: "pc-eau1", titre: "D'où vient l'eau qu'on boit ?", source: "C'est pas sorcier", type: "video", lien: "https://www.youtube.com/watch?v=5LC6gyBH8xE", etiquette: "decouvrir", duree: "26 min", verifier: true, noteParent: "Garder l'un des deux épisodes sur l'eau après visionnage (celui-ci ou « D'où vient l'eau du robinet ? »), retirer l'autre." },
        { id: "pc-eau2", titre: "D'où vient l'eau du robinet ?", source: "C'est pas sorcier", type: "video", lien: "https://www.youtube.com/watch?v=MPtGC9my94M", etiquette: "decouvrir", duree: "26 min", verifier: true, noteParent: "Garder l'un des deux épisodes sur l'eau après visionnage, retirer l'autre." },
        { id: "pc-zimbabwe", titre: "Comment survivre sans eau potable ?", source: "C'est pas sorcier", type: "video", lien: "https://www.youtube.com/watch?v=_1iwdYd2GF0", etiquette: "plusloin", duree: "26 min", note: "Tourné au Zimbabwe. Servira aussi en géographie." }
      ],
      quiz: [
        { q: "Quels sont les trois états de la matière ?", options: ["Solide, liquide, gazeux", "Chaud, tiède, froid", "Glace, eau, nuage"], bonne: 0, explication: "La matière peut être solide, liquide ou gazeuse selon la température et la pression.", point: "Les trois états", revoir: "pc-etats-video" },
        { q: "L'état de la matière dépend…", options: ["de la température et de la pression", "de la couleur", "de la forme du récipient"], bonne: 0, explication: "C'est le bilan du cours : température et pression décident de l'état.", point: "Les trois états", revoir: "pc-etats-video" },
        { q: "Un solide…", options: ["possède une forme propre", "prend la forme du récipient", "se comprime facilement"], bonne: 0, explication: "Un glaçon garde sa forme, quel que soit le récipient.", point: "Les caractéristiques des états", revoir: "pc-etats-video" },
        { q: "Un liquide…", options: ["prend la forme du récipient, avec une surface libre, plane et horizontale", "garde toujours sa forme", "remplit tout l'espace disponible"], bonne: 0, explication: "L'eau épouse le verre, et sa surface reste plane et horizontale.", point: "Les caractéristiques des états", revoir: "pc-etats-video" },
        { q: "On penche un verre d'eau. La surface de l'eau…", options: ["reste horizontale", "penche avec le verre", "devient courbe"], bonne: 0, explication: "La surface libre d'un liquide au repos est toujours plane et horizontale.", point: "Les caractéristiques des états", revoir: "pc-etats-video" },
        { q: "Quel état est expansible et compressible ?", options: ["Le gaz", "Le liquide", "Le solide"], bonne: 0, explication: "Un gaz occupe tout l'espace qu'on lui donne (expansible) et on peut le comprimer, comme l'air d'une pompe à vélo.", point: "Les caractéristiques des états", revoir: "pc-etats-video" },
        { q: "Comment s'appelle l'eau à l'état gazeux ?", options: ["La vapeur d'eau", "La buée", "Le nuage"], bonne: 0, explication: "L'eau gazeuse s'appelle la vapeur d'eau.", point: "L'eau dans ses trois états", revoir: "pc-etats-video" },
        { q: "Les nuages sont faits…", options: ["de gouttelettes d'eau liquide", "de vapeur d'eau", "de fumée"], bonne: 0, explication: "On voit les nuages parce qu'ils sont faits de gouttelettes : la vapeur, elle, est invisible.", point: "L'eau dans ses trois états" },
        { q: "Peut-on voir la vapeur d'eau ?", options: ["Non, elle est invisible", "Oui, c'est le panache blanc de la casserole"], bonne: 0, explication: "Le panache blanc est fait de gouttelettes déjà redevenues liquides.", point: "L'eau dans ses trois états" },
        { q: "Un glacier, c'est de l'eau à l'état…", options: ["solide", "liquide", "gazeux"], bonne: 0, explication: "Glaciers, banquise, neige et glaçons : de l'eau solide.", point: "L'eau dans ses trois états" },
        { q: "Où se trouve la plus grande partie de l'eau sur Terre ?", options: ["Dans les océans", "Dans les glaciers", "Dans les rivières"], bonne: 0, explication: "Les océans contiennent l'immense majorité de l'eau de la planète, mais elle est salée.", point: "L'eau sur Terre", revoir: ["pc-eau1", "pc-eau2"] },
        { q: "Une eau potable est une eau…", options: ["qu'on peut boire sans danger pour la santé", "claire et transparente", "qui sort d'une source"], bonne: 0, explication: "Une eau transparente peut contenir des microbes invisibles : potable veut dire sans danger.", point: "Eau potable et non potable", revoir: "pc-zimbabwe" }
      ]
    }
  ]
});
