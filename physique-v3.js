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
        { q: "Un solide a…", options: ["une forme propre, et on peut le saisir entre les doigts", "la forme du récipient qui le contient", "aucune forme"], bonne: 0, explication: "C'est le critère du manuel : un solide possède une forme propre et peut être saisi.", point: "Les propriétés des solides", fixe: true },
        { q: "Un liquide…", options: ["coule et prend la forme du récipient qui le contient", "garde toujours la même forme", "occupe tout l'espace disponible"], bonne: 0, explication: "Il n'a pas de forme propre : il épouse celle du récipient.", point: "Les propriétés des liquides", fixe: true },
        { q: "La surface libre d'un liquide au repos est…", options: ["plane et horizontale", "toujours bombée", "inclinée comme le récipient"], bonne: 0, explication: "C'est ce que montre l'expérience du verre incliné avec le fil à plomb : la surface libre reste horizontale.", point: "Les propriétés des liquides", fixe: true },
        { q: "Qu'appelle-t-on la « surface libre » ?", options: ["La surface du liquide en contact avec l'air", "Le fond du récipient", "La paroi du verre"], bonne: 0, explication: "C'est le vocabulaire de l'activité 2.", point: "Les propriétés des liquides" },
        { q: "Un gaz…", options: ["prend la forme du récipient et occupe tout l'espace disponible", "se dépose au fond du récipient", "garde une forme propre"], bonne: 0, explication: "Il est expansible : il occupe tout l'espace qu'il peut.", point: "Les propriétés des gaz", fixe: true },
        { q: "« Expansible » veut dire…", options: ["qu'il occupe tout l'espace disponible", "qu'on peut le comprimer", "qu'il est invisible"], bonne: 0, explication: "Deux propriétés différentes : expansible (il s'étend) et compressible (on peut réduire son volume).", point: "Les propriétés des gaz", fixe: true },
        { q: "« Compressible » veut dire…", options: ["qu'on peut réduire l'espace qu'il occupe", "qu'il s'étend tout seul", "qu'il devient liquide"], bonne: 0, explication: "C'est l'expérience de la seringue bouchée : on enfonce le piston, le gaz se comprime. Avec de l'eau, impossible.", point: "Les propriétés des gaz", fixe: true },
        { q: "Peut-on comprimer un liquide dans une seringue bouchée ?", options: ["Non, ou très peu", "Oui, aussi facilement qu'un gaz"], bonne: 0, explication: "C'est ce qui distingue les deux : les liquides ne sont pratiquement pas compressibles.", point: "Les propriétés des gaz" },
        { q: "La vapeur d'eau au-dessus d'une casserole qui bout est…", options: ["invisible : ce qu'on voit est de la buée, de l'eau liquide", "un nuage de gaz visible", "de la fumée"], bonne: 0, explication: "C'est la réponse de Max dans « Qui a raison ? » : la vapeur est présente dans les bulles et au-dessus, mais elle est invisible.", point: "Reconnaître un changement d'état", fixe: true },
        { q: "Comment identifier l'eau par ses températures de changement d'état ?", options: ["Fusion à 0 °C et ébullition à 100 °C", "Fusion à 100 °C et ébullition à 0 °C", "Fusion à 10 °C et ébullition à 90 °C"], bonne: 0, explication: "Ces températures sont caractéristiques de l'eau pure, dans les conditions normales.", point: "Identifier l'eau", fixe: true },
        { q: "Quel test permet d'identifier l'eau ?", options: ["Le sulfate de cuivre anhydre", "Le test de la flamme", "Le papier pH"], bonne: 0, explication: "C'est le test caractéristique de l'eau, vu en activité 5.", point: "Le test du sulfate de cuivre", fixe: true },
        { q: "Au contact de l'eau, le sulfate de cuivre anhydre…", options: ["passe du blanc au bleu", "passe du bleu au blanc", "ne change pas de couleur"], bonne: 0, explication: "Blanc au départ, bleu en présence d'eau.", point: "Le test du sulfate de cuivre", fixe: true },
        { q: "« Anhydre » veut dire…", options: ["qui ne contient pas d'eau", "qui est bleu", "qui est dangereux"], bonne: 0, explication: "C'est le vocabulaire de l'activité : le sulfate de cuivre anhydre est privé d'eau.", point: "Le test du sulfate de cuivre" },
        { q: "Le Coca-Cola fait bleuir le sulfate de cuivre anhydre. Cela prouve…", options: ["qu'il contient de l'eau", "qu'il est pur", "qu'il est acide"], bonne: 0, explication: "Le test dit si un liquide contient de l'eau, pas s'il est de l'eau pure.", point: "Le test du sulfate de cuivre" },
        { q: "La vaporisation peut se produire…", options: ["par évaporation ou par ébullition", "par ébullition uniquement", "par évaporation uniquement"], bonne: 0, explication: "Deux façons pour un liquide de devenir gaz.", point: "Le nom des changements d'état", fixe: true },
        { q: "Dans le cycle de l'eau, quel est le moteur ?", options: ["Le Soleil, qui fournit l'énergie nécessaire à l'évaporation", "Le vent", "Les rivières"], bonne: 0, explication: "C'est écrit dans le bilan du manuel : le Soleil est le moteur du cycle.", point: "Le cycle de l'eau", fixe: true },
        { q: "L'activité humaine peut-elle influencer le cycle de l'eau ?", options: ["Oui : déforestation, irrigation, urbanisation", "Non, jamais", "Seulement en ville"], bonne: 0, explication: "Ces activités épuisent aussi les ressources en eau potable.", point: "Le cycle de l'eau" },
        { q: "À l'échelle microscopique, dans un solide, les molécules sont…", options: ["ordonnées et liées les unes aux autres", "dispersées et très agitées", "immobiles et très éloignées"], bonne: 0, explication: "C'est la modélisation moléculaire : ordonnées dans le solide, désordonnées mais serrées dans le liquide, dispersées et agitées dans le gaz.", point: "La modélisation moléculaire" },
        { q: "Dans un gaz, les molécules sont…", options: ["dispersées, désordonnées et très agitées", "rangées en lignes", "collées les unes aux autres"], bonne: 0, explication: "C'est ce qui explique qu'un gaz soit compressible : il y a beaucoup de vide entre les molécules.", point: "La modélisation moléculaire" },
        { q: "Dans un liquide, les molécules sont…", options: ["désordonnées mais glissent les unes sur les autres", "parfaitement ordonnées", "très éloignées les unes des autres"], bonne: 0, explication: "C'est pour cela qu'un liquide coule tout en gardant le même volume.", point: "La modélisation moléculaire" },
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
    },
    {
      id: "pc-melanges",
      titre: "Mélanges et dissolutions",
      resume: "Homogène ou hétérogène, miscible ou non, et la dissolution des solides.",
      savaisTu: [
        "« Homogène » vient du grec homos, « semblable », et genos, « origine » : tout y a le même aspect. « Hétérogène » commence par heteros, « autre » : on y distingue plusieurs choses différentes.",
        "Un mélange homogène n'est pas forcément pur. L'eau salée a l'air d'être de l'eau, et pourtant ce n'en est pas : c'est bien un mélange, mais on ne le voit pas.",
        "C'est pour cela qu'une eau polluée peut être parfaitement transparente. Beaucoup de polluants se dissolvent dans l'eau et deviennent invisibles à l'œil nu : il faut une analyse en laboratoire pour les détecter.",
        "L'huile et l'eau ne se mélangent jamais, mais une vinaigrette bien secouée a l'air homogène pendant quelques secondes. Laissez-la reposer : les deux couches reviennent toujours."
      ],
      missions: [
        { titre: "Le bilan du chapitre, à redire à voix haute", etapes: [
          "Un mélange est homogène lorsqu'on ne peut pas distinguer ses constituants à l'œil nu.",
          "Un mélange est hétérogène lorsqu'on peut distinguer au moins deux constituants à l'œil nu.",
          "Deux liquides sont miscibles si le résultat de leur mélange est homogène.",
          "Le contraire : deux liquides sont non-miscibles si leur mélange est hétérogène.",
          "Les trois mots à ne pas confondre : homogène et hétérogène décrivent ce qu'on voit ; miscible décrit ce que deux liquides font ensemble."
        ] },
        { titre: "Le réflexe pour trancher, face à un mélange", etapes: [
          "Je regarde à l'œil nu, sans microscope et sans loupe.",
          "Si je distingue au moins deux constituants : le mélange est hétérogène.",
          "Si je n'en distingue aucun : le mélange est homogène.",
          "S'il s'agit de deux liquides et que le résultat est homogène : ils sont miscibles.",
          "Attention : homogène ne veut pas dire pur. L'eau sucrée est homogène, et pourtant ce n'est plus de l'eau seule."
        ] }
      ],
      supports: [],
      quiz: [
        { q: "Un mélange est homogène lorsque…", options: ["on ne peut pas distinguer ses constituants à l'œil nu", "il est transparent", "il contient de l'eau"], bonne: 0, explication: "C'est la définition du bilan, mot pour mot.", point: "Homogène ou hétérogène" },
        { q: "Un mélange est hétérogène lorsque…", options: ["on peut distinguer au moins deux constituants à l'œil nu", "il est coloré", "il contient un solide"], bonne: 0, explication: "Au moins deux : c'est le mot important de la définition.", point: "Homogène ou hétérogène" },
        { q: "« À l'œil nu » veut dire…", options: ["sans loupe ni microscope", "les yeux fermés", "avec un microscope"], bonne: 0, explication: "C'est ce qui rend la définition utilisable : on tranche avec ses yeux, rien d'autre.", point: "Homogène ou hétérogène" },
        { q: "De l'eau et de l'huile, c'est un mélange…", options: ["hétérogène", "homogène", "pur"], bonne: 0, explication: "On distingue deux couches : au moins deux constituants visibles.", point: "Reconnaître un mélange" },
        { q: "De l'eau et du sirop de menthe, c'est un mélange…", options: ["homogène", "hétérogène", "non miscible"], bonne: 0, explication: "Le sirop se répartit partout : on ne distingue plus les deux liquides.", point: "Reconnaître un mélange" },
        { q: "De l'eau et du sable, c'est un mélange…", options: ["hétérogène", "homogène", "miscible"], bonne: 0, explication: "Le sable reste visible au fond du verre.", point: "Reconnaître un mélange" },
        { q: "De l'eau boueuse, c'est un mélange…", options: ["hétérogène", "homogène", "pur"], bonne: 0, explication: "On distingue les particules de terre en suspension.", point: "Reconnaître un mélange" },
        { q: "De l'eau et du sel bien remué, c'est un mélange…", options: ["homogène", "hétérogène", "non miscible"], bonne: 0, explication: "Le sel a disparu à l'œil nu : c'est une dissolution, et le résultat est homogène.", point: "Reconnaître un mélange" },
        { q: "Une vinaigrette au repos, c'est un mélange…", options: ["hétérogène : l'huile et le vinaigre se séparent en deux couches", "homogène", "miscible"], bonne: 0, explication: "Même bien secouée, elle finit toujours par se séparer.", point: "Reconnaître un mélange" },
        { q: "Deux liquides sont miscibles si…", options: ["le résultat de leur mélange est homogène", "ils ont la même couleur", "ils se séparent en deux couches"], bonne: 0, explication: "C'est la définition du bilan.", point: "Miscible ou non-miscible" },
        { q: "Deux liquides sont non-miscibles si…", options: ["le résultat de leur mélange est hétérogène", "ils sont transparents", "ils se dissolvent l'un dans l'autre"], bonne: 0, explication: "C'est le contraire de miscible.", point: "Miscible ou non-miscible" },
        { q: "L'eau et l'huile sont…", options: ["non-miscibles", "miscibles", "homogènes"], bonne: 0, explication: "Leur mélange est hétérogène : deux couches bien visibles.", point: "Miscible ou non-miscible" },
        { q: "L'eau et le sirop sont…", options: ["miscibles", "non-miscibles", "hétérogènes"], bonne: 0, explication: "Leur mélange est homogène.", point: "Miscible ou non-miscible" },
        { q: "Le mot « miscible » s'emploie pour…", options: ["deux liquides", "un solide et un liquide", "deux solides"], bonne: 0, explication: "C'est le piège le plus fréquent : miscible concerne des liquides entre eux. Pour un solide dans un liquide, on parle de dissolution.", point: "Miscible ou non-miscible" },
        { q: "Un mélange homogène est-il forcément un corps pur ?", options: ["Non : l'eau salée est homogène, mais ce n'est pas de l'eau pure", "Oui, toujours", "Oui, s'il est transparent"], bonne: 0, explication: "Homogène décrit ce qu'on voit, pas ce que le mélange contient.", point: "Le piège du corps pur" },
        { q: "Une eau parfaitement transparente est-elle forcément propre ?", options: ["Non : un polluant dissous ne se voit pas à l'œil nu", "Oui, toujours", "Oui, si elle n'a pas d'odeur"], bonne: 0, explication: "C'est tout l'enjeu de l'activité sur la pollution : l'invisible peut être dangereux.", point: "Mélanges et pollution" },
        { q: "Pourquoi la pollution de l'eau est-elle souvent difficile à repérer ?", options: ["Parce que beaucoup de polluants forment avec l'eau un mélange homogène", "Parce que l'eau est toujours trouble", "Parce que les polluants flottent"], bonne: 0, explication: "Un mélange homogène ne laisse rien voir : il faut analyser l'eau en laboratoire.", point: "Mélanges et pollution" },
        { q: "Quel mélange une marée noire forme-t-elle avec l'eau de mer ?", options: ["Un mélange hétérogène : le pétrole reste en surface", "Un mélange homogène", "Une dissolution"], bonne: 0, explication: "Le pétrole et l'eau ne sont pas miscibles, c'est pourquoi on peut pomper la nappe en surface.", point: "Mélanges et pollution" },
        { q: "Comment appelle-t-on le mélange d'un solide avec de l'eau quand le solide disparaît à l'œil nu ?", options: ["Une dissolution", "Une fusion", "Une vaporisation"], bonne: 0, explication: "Attention à ne pas confondre avec la fusion, qui est un changement d'état dû à la chaleur.", point: "Dissolution ou pas" },
        { q: "Dissoudre et fondre, est-ce la même chose ?", options: ["Non : fondre, c'est passer du solide au liquide en chauffant ; dissoudre, c'est disparaître dans un liquide", "Oui, c'est la même chose", "Non : fondre concerne les liquides"], bonne: 0, explication: "Le sucre dans l'eau froide se dissout, il ne fond pas. C'est la confusion la plus fréquente.", point: "Dissolution ou pas" },
        { q: "De la craie broyée remuée dans l'eau donne un mélange…", options: ["hétérogène : la craie ne se dissout pas", "homogène", "miscible"], bonne: 0, explication: "Les particules restent visibles en suspension, puis se déposent au fond.", point: "Dissolution ou pas" },
        { q: "Comment séparer le sable de l'eau après les avoir mélangés ?", options: ["Par filtration, ou en laissant reposer puis en versant doucement", "En chauffant l'eau", "C'est impossible"], bonne: 0, explication: "Le sable ne s'est pas dissous : il peut être retenu par un filtre.", point: "Dissolution ou pas" },
        { q: "Peut-on séparer le sel de l'eau salée avec un filtre ?", options: ["Non : le sel est dissous, il passe à travers le filtre", "Oui, facilement", "Oui, avec un filtre très fin"], bonne: 0, explication: "C'est ce qui distingue un mélange homogène d'un mélange hétérogène en pratique.", point: "Dissolution ou pas" },
        { q: "Que se passe-t-il quand on dissout un solide dans l'eau ?", options: ["Il disparaît à l'œil nu et forme un mélange homogène", "Il tombe au fond du récipient", "Il flotte à la surface"], bonne: 0, explication: "C'est le début de la seconde partie du chapitre : la dissolution.", point: "La dissolution" },
        { q: "Du sucre remué dans l'eau donne un mélange…", options: ["homogène", "hétérogène", "non-miscible"], bonne: 0, explication: "Le sucre se dissout : on ne le distingue plus.", point: "La dissolution" },
        { q: "De la farine remuée dans l'eau donne un mélange…", options: ["hétérogène", "homogène", "miscible"], bonne: 0, explication: "La farine ne se dissout pas : elle reste en suspension, bien visible.", point: "La dissolution" },
        { q: "Tous les solides se dissolvent-ils dans l'eau ?", options: ["Non : le sel et le sucre oui, le sable et la farine non", "Oui, tous", "Non, aucun"], bonne: 0, explication: "C'est ce que l'on cherche à trier dans la seconde partie du chapitre.", point: "La dissolution" },
        { q: "Le sucre dissous dans l'eau a-t-il disparu ?", options: ["Non : il est toujours là, mais on ne le voit plus", "Oui, il a disparu", "Oui, il s'est transformé en eau"], bonne: 0, explication: "La preuve : l'eau a le goût sucré, et sa masse a augmenté.", point: "La dissolution" }
      ]
    },
    {
      id: "pc-identifier",
      titre: "Identifier l'eau",
      resume: "Les températures de changement d'état et le test au sulfate de cuivre anhydre.",
      savaisTu: [
        "Le fer fond à 1 538 °C et bout à 2 861 °C. Toutes les substances ont leurs deux températures à elles : c'est ce qui permet de les reconnaître, comme une empreinte digitale.",
        "Le sucre, lui, ne bout jamais : chauffé trop fort, il est détruit par la chaleur avant d'atteindre l'ébullition. C'est ce qui se passe quand un caramel brûle.",
        "L'alcool fond à −114 °C : c'est pour cela qu'un thermomètre à alcool fonctionne encore dans les régions polaires, là où un thermomètre à eau serait gelé depuis longtemps.",
        "Le sulfate de cuivre anhydre est blanc comme du sucre en poudre. Dès qu'une goutte d'eau le touche, il devient bleu vif. C'est une réaction chimique, pas une simple coloration.",
        "L'eau de l'air suffit à le faire bleuir : il faut le conserver dans un flacon bien fermé, sinon il bleuit tout seul sur l'étagère."
      ],
      missions: [
        { titre: "Le bilan « Identifier l'eau », à redire à voix haute", etapes: [
          "L'eau, comme tous les corps purs, est identifiable grâce à ses températures de changements d'état.",
          "L'ébullition de l'eau liquide se produit à 100 °C.",
          "La fusion de la glace se produit à 0 °C.",
          "Ces valeurs sont données dans les conditions normales.",
          "L'eau est la seule substance qui réagit chimiquement avec le sulfate de cuivre anhydre : à son contact, il passe de la couleur blanche à la couleur bleue.",
          "C'est le test caractéristique de l'eau."
        ] },
        { titre: "Les trois définitions du vocabulaire", etapes: [
          "Corps pur : substance composée d'un seul constituant.",
          "Ébullition : passage d'un corps de l'état liquide à l'état gazeux lorsqu'on le chauffe.",
          "Fusion : passage d'un corps de l'état solide à l'état liquide.",
          "Anhydre : qui ne contient pas d'eau."
        ] },
        { titre: "Les quatre changements d'état, dans les deux sens", etapes: [
          "Solide vers liquide : fusion. Liquide vers solide : solidification.",
          "Liquide vers gazeux : vaporisation. Gazeux vers liquide : liquéfaction.",
          "Exemple de l'eau : fusion de la glace à 0 °C, vaporisation de l'eau liquide à 100 °C.",
          "La vaporisation peut se produire par évaporation ou par ébullition."
        ] }
      ],
      supports: [],
      quiz: [
        { q: "Qu'est-ce qu'un corps pur ?", options: ["Une substance composée d'un seul constituant", "Une substance transparente", "Une substance sans danger"], bonne: 0, explication: "C'est la définition du vocabulaire, mot pour mot.", point: "Le vocabulaire du chapitre" },
        { q: "Qu'est-ce que l'ébullition ?", options: ["Le passage d'un corps de l'état liquide à l'état gazeux lorsqu'on le chauffe", "Le passage de l'état solide à l'état liquide", "Le passage de l'état gazeux à l'état liquide"], bonne: 0, explication: "Liquide vers gazeux, en chauffant.", point: "Le vocabulaire du chapitre" },
        { q: "Qu'est-ce que la fusion ?", options: ["Le passage d'un corps de l'état solide à l'état liquide", "Le passage de l'état liquide à l'état gazeux", "Le mélange de deux corps"], bonne: 0, explication: "Attention au piège : en français courant, « fusionner » veut dire mélanger. En chimie, la fusion est un changement d'état.", point: "Le vocabulaire du chapitre" },
        { q: "À quelle température l'eau liquide bout-elle, dans les conditions normales ?", options: ["100 °C", "0 °C", "78 °C"], bonne: 0, explication: "C'est la valeur à connaître par cœur.", point: "Les températures de l'eau" },
        { q: "À quelle température la glace fond-elle ?", options: ["0 °C", "100 °C", "−114 °C"], bonne: 0, explication: "La fusion de la glace se produit à 0 °C.", point: "Les températures de l'eau" },
        { q: "Pourquoi précise-t-on « dans les conditions normales » ?", options: ["Parce qu'en altitude, l'eau bout à une température plus basse", "Parce que l'eau doit être propre", "Parce qu'il faut un thermomètre neuf"], bonne: 0, explication: "Au sommet du mont Blanc, l'eau bout vers 85 °C.", point: "Les températures de l'eau" },
        { q: "Pourquoi les températures de changement d'état permettent-elles d'identifier une substance ?", options: ["Parce que chaque corps pur a ses propres températures de fusion et d'ébullition", "Parce que toutes les substances fondent à 0 °C", "Parce qu'elles changent avec la couleur"], bonne: 0, explication: "C'est la conclusion de l'activité : ces deux nombres sont la carte d'identité du corps pur.", point: "Identifier un corps pur" },
        { q: "À quelle température le fer devient-il liquide ?", options: ["1 538 °C", "2 861 °C", "186 °C"], bonne: 0, explication: "C'est sa température de fusion. 2 861 °C est sa température d'ébullition.", point: "Le tableau des corps purs" },
        { q: "À quelle température l'alcool bout-il ?", options: ["78 °C", "100 °C", "−114 °C"], bonne: 0, explication: "Bien plus bas que l'eau : c'est ce qui permet de séparer l'alcool de l'eau en chauffant.", point: "Le tableau des corps purs" },
        { q: "À quelle température l'alcool fond-il ?", options: ["−114 °C", "0 °C", "78 °C"], bonne: 0, explication: "Une température négative : l'alcool reste liquide très loin en dessous de zéro.", point: "Le tableau des corps purs" },
        { q: "Que se passe-t-il quand on chauffe fortement le sucre ?", options: ["Il est détruit par la chaleur avant de bouillir", "Il bout à 186 °C", "Il devient un gaz"], bonne: 0, explication: "Le sucre fond à 186 °C, mais il n'a pas de température d'ébullition : il brûle avant.", point: "Le tableau des corps purs" },
        { q: "Un liquide fond à 0 °C et bout à 100 °C. De quoi s'agit-il ?", options: ["De l'eau", "De l'alcool", "Du fer"], bonne: 0, explication: "C'est exactement ce que demande l'activité : identifier une substance grâce à ses deux températures.", point: "Identifier un corps pur" },
        { q: "Quel produit sert au test caractéristique de l'eau ?", options: ["Le sulfate de cuivre anhydre", "Le sulfate de cuivre bleu", "L'eau de chaux"], bonne: 0, explication: "Anhydre, c'est-à-dire sans eau : c'est le mot important.", point: "Le test au sulfate de cuivre" },
        { q: "« Anhydre » veut dire…", options: ["qui ne contient pas d'eau", "qui est en poudre", "qui est dangereux"], bonne: 0, explication: "C'est la définition du vocabulaire de l'activité.", point: "Le test au sulfate de cuivre" },
        { q: "De quelle couleur est le sulfate de cuivre anhydre avant le test ?", options: ["Blanc", "Bleu", "Vert"], bonne: 0, explication: "Blanc d'abord, bleu ensuite : c'est le sens à ne pas inverser.", point: "Le test au sulfate de cuivre" },
        { q: "De quelle couleur devient-il au contact de l'eau ?", options: ["Bleu", "Blanc", "Rouge"], bonne: 0, explication: "Du blanc vers le bleu. Si on retient « bleu au contact de l'eau », on ne se trompe pas.", point: "Le test au sulfate de cuivre" },
        { q: "Pourquoi dit-on que c'est le test caractéristique de l'eau ?", options: ["Parce que l'eau est la seule substance qui réagit chimiquement avec lui", "Parce qu'il est très facile à faire", "Parce qu'il marche avec tous les liquides"], bonne: 0, explication: "Caractéristique veut dire : propre à l'eau, et à elle seule.", point: "Le test au sulfate de cuivre" },
        { q: "On verse une goutte d'huile sur du sulfate de cuivre anhydre. Que se passe-t-il ?", options: ["Rien : il reste blanc, car l'huile ne contient pas d'eau", "Il devient bleu", "Il devient vert"], bonne: 0, explication: "C'est la première question de l'activité 5 : l'huile ne contient pas d'eau.", point: "Le test au sulfate de cuivre" },
        { q: "On teste du jus de fruit avec le sulfate de cuivre anhydre : il bleuit. Qu'en conclut-on ?", options: ["Le jus de fruit contient de l'eau", "Le jus de fruit est de l'eau pure", "Le jus de fruit est un corps pur"], bonne: 0, explication: "Le test dit si un liquide contient de l'eau, pas s'il est de l'eau pure.", point: "Le test au sulfate de cuivre" },
        { q: "Un liquide fait bleuir le sulfate de cuivre anhydre. Est-ce forcément de l'eau pure ?", options: ["Non : il contient de l'eau, mais il peut contenir autre chose aussi", "Oui, toujours", "Non, il ne contient pas d'eau"], bonne: 0, explication: "C'est le piège de ce test. Le Coca-Cola bleuit le sulfate, et pourtant ce n'est pas de l'eau pure.", point: "Le test au sulfate de cuivre" },
        { q: "Comment s'appelle le passage de l'état liquide à l'état solide ?", options: ["La solidification", "La fusion", "La liquéfaction"], bonne: 0, explication: "C'est le changement inverse de la fusion.", point: "Les quatre changements d'état" },
        { q: "Comment s'appelle le passage de l'état gazeux à l'état liquide ?", options: ["La liquéfaction", "La vaporisation", "La solidification"], bonne: 0, explication: "C'est le changement inverse de la vaporisation.", point: "Les quatre changements d'état" },
        { q: "La vaporisation peut se produire…", options: ["par évaporation ou par ébullition", "par ébullition uniquement", "par évaporation uniquement"], bonne: 0, explication: "C'est la remarque du bilan : deux façons pour un liquide de devenir gaz.", point: "Les quatre changements d'état" },
        { q: "Dans l'expérience, on place le thermomètre dans la glace pilée pour mesurer…", options: ["la température de fusion de la glace", "la température d'ébullition de l'eau", "la température de la pièce"], bonne: 0, explication: "C'est l'expérience 2 du protocole.", point: "Le protocole expérimental" },
        { q: "Pourquoi utilise-t-on de la glace pilée plutôt qu'un gros glaçon ?", options: ["Pour que le thermomètre soit bien entouré de glace et mesure la bonne température", "Pour que la glace fonde plus vite", "Pour voir à travers"], bonne: 0, explication: "Le thermomètre doit être au contact de la glace partout, sinon il mesure l'air.", point: "Le protocole expérimental" }
      ]
    }
  ]
});
