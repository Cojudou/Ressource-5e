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
    },
    {
      id: "pc-changements",
      titre: "Les changements d'état de l'eau",
      resume: "Fusion, solidification, vaporisation, liquéfaction, et le parcours de l'eau. Chapitre en cours.",
      savaisTu: [
        "L'eau pure gèle à 0 °C et bout à 100 °C au niveau de la mer. En altitude, elle bout plus tôt : au sommet du mont Blanc, vers 85 °C. Les pâtes y cuisent donc beaucoup moins bien.",
        "En gelant, l'eau prend plus de place : c'est pour cela qu'une bouteille pleine oubliée au congélateur se fend. L'eau est une exception, presque toutes les autres matières se contractent en devenant solides.",
        "Un changement d'état ne change pas la masse : un kilo de glace donne un kilo d'eau liquide, puis un kilo de vapeur."
      ],
      supports: [
        { id: "pc-cycle-cea", titre: "Le cycle de l'eau", source: "CEA", type: "video", lien: "", etiquette: "decouvrir", noteParent: "Vidéo vue en classe : adresse à récupérer sur la chaîne officielle du CEA." },
        { id: "pc-cycle-rappel", titre: "Les états de la matière et le cycle de l'eau (rappel)", source: "Cours de collège, 5e", type: "video", lienDe: "pc-etats-video", etiquette: "consolider", noteParent: "Même vidéo que dans le chapitre précédent : le lien est repris automatiquement." }
      ],
      quiz: [
        { q: "Le passage de l'état solide à l'état liquide s'appelle…", options: ["la fusion", "la solidification", "la vaporisation"], bonne: 0, explication: "Un glaçon qui fond, c'est une fusion.", point: "Le nom des changements d'état", revoir: "pc-cycle-cea", fixe: true },
        { q: "Le passage de l'état liquide à l'état solide s'appelle…", options: ["la solidification", "la fusion", "la liquéfaction"], bonne: 0, explication: "L'eau du bac à glaçons qui gèle : solidification.", point: "Le nom des changements d'état", fixe: true },
        { q: "Le passage de l'état liquide à l'état gazeux s'appelle…", options: ["la vaporisation", "la liquéfaction", "la fusion"], bonne: 0, explication: "Vaporisation : l'eau devient vapeur, soit en bouillant, soit en s'évaporant doucement.", point: "Le nom des changements d'état", fixe: true },
        { q: "Le passage de l'état gazeux à l'état liquide s'appelle…", options: ["la liquéfaction", "la vaporisation", "la solidification"], bonne: 0, explication: "La liquéfaction, qu'on appelle aussi condensation : la vapeur redevient liquide.", point: "Le nom des changements d'état", fixe: true },
        { q: "À quelle température l'eau pure gèle-t-elle ?", options: ["0 °C", "10 °C", "−10 °C"], bonne: 0, explication: "0 °C pour la fusion comme pour la solidification : c'est la même température, dans les deux sens.", point: "Les températures de l'eau" },
        { q: "À quelle température l'eau pure bout-elle, au niveau de la mer ?", options: ["100 °C", "80 °C", "120 °C"], bonne: 0, explication: "100 °C au niveau de la mer ; moins haut en altitude.", point: "Les températures de l'eau" },
        { q: "De la buée apparaît sur une vitre froide. C'est…", options: ["de la vapeur d'eau qui est redevenue liquide", "de l'eau qui a traversé la vitre", "de la poussière"], bonne: 0, explication: "La vapeur de l'air touche la vitre froide et se liquéfie en gouttelettes.", point: "Reconnaître un changement d'état" },
        { q: "Une flaque disparaît au soleil sans bouillir. C'est…", options: ["une évaporation", "une fusion", "une solidification"], bonne: 0, explication: "L'évaporation se fait doucement, à la surface, sans atteindre 100 °C.", point: "Reconnaître un changement d'état" },
        { q: "Un kilo de glace fond entièrement. On obtient…", options: ["un kilo d'eau liquide", "moins d'un kilo", "plus d'un kilo"], bonne: 0, explication: "La masse se conserve lors d'un changement d'état.", point: "La masse se conserve" },
        { q: "Une bouteille d'eau pleine et fermée éclate au congélateur. Pourquoi ?", options: ["En gelant, l'eau occupe plus de place", "L'eau devient plus lourde", "Le froid fragilise le plastique"], bonne: 0, explication: "Le volume augmente quand l'eau devient solide, alors que la masse, elle, ne change pas.", point: "La masse se conserve" },
        { q: "Dans le cycle de l'eau, l'eau des océans monte dans l'air par…", options: ["évaporation", "précipitation", "infiltration"], bonne: 0, explication: "Chauffée par le Soleil, l'eau s'évapore et monte dans l'atmosphère.", point: "Le cycle de l'eau", revoir: "pc-cycle-cea" },
        { q: "Les nuages se forment quand la vapeur…", options: ["se refroidit en altitude et redevient gouttelettes", "se transforme en air", "descend vers le sol"], bonne: 0, explication: "En altitude, il fait froid : la vapeur se liquéfie en minuscules gouttelettes, qui forment le nuage.", point: "Le cycle de l'eau", revoir: "pc-cycle-cea" },
        { q: "Quand la pluie tombe sur le sol, une partie…", options: ["s'infiltre dans le sol et rejoint les nappes souterraines", "disparaît complètement", "remonte aussitôt en vapeur"], bonne: 0, explication: "Une partie ruisselle vers les rivières, une autre s'infiltre : c'est l'eau qu'on pompe ensuite pour la rendre potable.", point: "Le cycle de l'eau", revoir: "pc-cycle-cea" }
      ]
    }
  ]
});
