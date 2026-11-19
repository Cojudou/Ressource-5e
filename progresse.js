/* Je progresse — jeux, vidéos et méthodes pour consolider ce qui n'est pas encore acquis, en repartant des bases.
   Construit à partir du bilan de compétences préparé pour le conseil de classe du 1er décembre 2026.
   Chaque module = un « chapitre ». En plus des champs habituels (supports, quiz, missions, savaisTu) :
   - matiere : l'onglet concerné (affiché en pastille de couleur) ; objectif : une phrase courte.
   - jeux : liste de jeux { id (unique), type, titre, niveau (1, 2 ou 3), consigne, point (pour le suivi parent), revoir (id de vidéo) }
     type "tri"    : boites [{ id, t, i }], cartes [{ t, b (id de la boîte), e (explication) }], nb (cartes par partie)
     type "mots"   : items [{ phrase, c (consigne), e }] ; dans la phrase, [mots à toucher] et {mot en gras}
     type "memory" : paires [[a, b, explication facultative]], nb
     type "ordre"  : series [{ titre, etapes [{ t, d, e }] ou [mots], mots (true = phrase à reconstruire), trad, explication }], nb
     type "eclair" : questions [{ q, options, bonne, e }], duree (secondes, 0 = sans chrono), nb, etoiles [seuils]
     type "graphe" : series [{ titre, x, y, points, questions }]
   Le texte entre **double étoile** s'affiche en gras. */
matiere({
  id: "progresse", nom: "Je progresse", couleur: "#D9482B", icone: "⭐",
  unite: ["module", "modules"],
  intro: {
    texte: "Ici, pas de cours en plus : des **jeux de 3 à 5 minutes** et des vidéos courtes pour muscler ce qui coince encore, en repartant des bases. Chaque module monte en trois marches : 🌱 les bases, 🌿 l'entraînement, 🌳 le défi 5e. Gagne des étoiles, et rejoue quand tu veux : les questions changent à chaque partie.",
    titreForces: "Là où tu dépasses déjà les attentes 💪",
    forces: [
      "Prendre la parole en français",
      "Te présenter en anglais",
      "Calculer et résoudre des problèmes en maths",
      "Raconter tes expériences avec précision en physique-chimie",
      "Mener une expérience et expliquer la météo en SVT"
    ]
  },
  chapitres: [

    /* ============ 1. FRANÇAIS — analyser la phrase ============ */
    {
      id: "jp-phrase", matiere: "francais",
      titre: "Décortiquer une phrase",
      objectif: "repérer le verbe, le sujet, les compléments, puis compter les propositions.",
      resume: "On mène l'enquête comme un détective : d'abord le verbe conjugué, et tout le reste s'organise autour de lui.",
      savaisTu: [
        "Le mot « grimoire » vient de « grammaire ». Au Moyen Âge, les livres de grammaire étaient écrits en latin, que le peuple ne comprenait pas : ils passaient pour des livres de magie.",
        "Une phrase peut être très longue et rester simple : s'il n'y a qu'un seul verbe conjugué, il n'y a qu'une proposition.",
        "Le truc du détective : dis la phrase avec « hier » ou « demain ». Le mot qui change, c'est le verbe conjugué.",
        "Le même mot peut changer de fonction : dans « Le chat dort », chat est sujet ; dans « Je caresse le chat », chat est COD. Sa nature, elle, ne change pas : c'est toujours un nom."
      ],
      missions: [
        { titre: "La méthode du détective, en 5 questions", etapes: [
          "**Le verbe conjugué** : je dis la phrase avec « hier » ou « demain ». Le mot qui change, c'est lui.",
          "**Le sujet** : je demande « Qui est-ce qui ? » ou « Qu'est-ce qui ? » devant le verbe.",
          "**Les compléments du verbe** : verbe + « qui ? » ou « quoi ? » → COD. Verbe + « à qui ? », « à quoi ? », « de quoi ? » → COI. On ne peut ni les supprimer ni les déplacer.",
          "**Les compléments circonstanciels** : « où ? », « quand ? », « comment ? », « pourquoi ? ». Eux, on peut les déplacer ou les supprimer.",
          "**Je compte les verbes conjugués** : un seul, c'est une phrase simple. Deux ou plus, c'est une phrase complexe, avec autant de propositions que de verbes conjugués."
        ] }
      ],
      supports: [
        { id: "jp-fr-verbe", titre: "Identifier un verbe", source: "Les Fondamentaux · Canopé", type: "video", lien: "https://www.youtube.com/watch?v=0AbNfZOtcvA", etiquette: "niveau1", duree: "3 min", note: "Dessin animé du primaire : c'est voulu, on repart de la base." },
        { id: "jp-fr-constituants", titre: "Identifier les constituants de la phrase", source: "Un jour, une notion · Les Fondamentaux", type: "video", lien: "https://www.youtube.com/watch?v=ps7C1QcOqjc", etiquette: "niveau1", verifier: true, noteParent: "Série « Un jour, une notion » tirée des Fondamentaux de Canopé. Chaîne à confirmer : à visionner avant d'ouvrir." },
        { id: "jp-fr-sujet", titre: "Le groupe nominal sujet", source: "Un jour, une notion · Les Fondamentaux", type: "video", lien: "https://www.youtube.com/watch?v=Ehh3H1dN9qs", etiquette: "niveau1", verifier: true, noteParent: "Même série que « Identifier les constituants de la phrase »." },
        { id: "jp-fr-cod", titre: "Le COD", source: "Un jour, une notion · Les Fondamentaux", type: "video", lien: "https://www.youtube.com/watch?v=R66ZGeWl0kY", etiquette: "niveau2", verifier: true, noteParent: "Même série." },
        { id: "jp-fr-coi", titre: "Le COI", source: "Un jour, une notion · Les Fondamentaux", type: "video", lien: "https://www.youtube.com/watch?v=Smv0509wc8k", etiquette: "niveau2", verifier: true, noteParent: "Même série." },
        { id: "jp-fr-cc", titre: "Reconnaître les compléments circonstanciels", source: "Un jour, une notion · Les Fondamentaux", type: "video", lien: "https://www.youtube.com/watch?v=E_w1nLsN3So", etiquette: "niveau2", verifier: true, noteParent: "Même série." },
        { id: "jp-fr-nature", titre: "Nature ou fonction ?", source: "Les cours de Sandra", type: "video", lien: "https://www.youtube.com/watch?v=ECNNaEalkHo", etiquette: "niveau2", verifier: true, noteParent: "Chaîne d'une professeure, primaire et collège. À visionner avant d'ouvrir." },
        { id: "jp-fr-complexe", titre: "La phrase complexe : juxtaposition, coordination, subordination", source: "Résumé de grammaire, 5e", type: "video", lien: "https://www.youtube.com/watch?v=oSbt_b6U0HU", etiquette: "niveau3", verifier: true, noteParent: "Petit résumé niveau 5e, chaîne non identifiée : à visionner avant d'ouvrir." },
        { id: "jp-fr-attribut", titre: "L'attribut du sujet", source: "Un jour, une notion · Les Fondamentaux", type: "video", lien: "https://www.youtube.com/watch?v=YmGtqHQqAB0", etiquette: "plusloin", verifier: true, noteParent: "Même série." }
      ],
      jeux: [
        { id: "j-fr-verbe", type: "mots", niveau: 1, titre: "Chasse au verbe conjugué", consigne: "Touche le **verbe conjugué**, puis valide.", point: "Trouver le verbe conjugué", revoir: "jp-fr-verbe", nb: 6,
          items: [
            { phrase: "Le chat [dort] sur le canapé.", e: "Hier, le chat dormait : c'est « dort » qui change." },
            { phrase: "Chaque matin, mes voisins [promènent] leur chien.", e: "Demain, ils promèneront : c'est le verbe." },
            { phrase: "Nous [partirons] en vacances demain.", e: "Un seul mot conjugué, au futur." },
            { phrase: "Léa [aime] lire des bandes dessinées.", e: "« lire » est à l'infinitif : il ne change pas si on change le temps. Seul « aime » est conjugué." },
            { phrase: "Mon frère ne [mange] pas de poisson.", e: "« ne… pas » entoure le verbe, mais n'en fait pas partie." },
            { phrase: "Au loin [brillent] les lumières du port.", e: "Le verbe est placé avant son sujet, « les lumières du port » : c'est un sujet inversé." },
            { phrase: "Les élèves [écoutaient] la professeure en silence.", e: "Verbe écouter, à l'imparfait." },
            { phrase: "Tu [finis] toujours tes devoirs avant le dîner.", e: "Hier, tu finissais : c'est « finis » qui change." },
            { phrase: "Dans la forêt [vivait] un vieux bûcheron.", e: "Encore un sujet inversé : qui est-ce qui vivait ? Un vieux bûcheron." },
            { phrase: "Vous [devez] ranger vos affaires.", e: "« ranger » est à l'infinitif. Le verbe conjugué, c'est « devez »." },
            { phrase: "Le vent [souffle] fort et les volets [claquent].", c: "Touche les **deux** verbes conjugués.", e: "Deux verbes conjugués : c'est une phrase complexe, avec deux propositions." },
            { phrase: "Ulysse [rentra] enfin à Ithaque.", e: "Verbe rentrer, au passé simple." },
            { phrase: "Pénélope [défaisait] chaque nuit son ouvrage.", e: "Verbe défaire, à l'imparfait." },
            { phrase: "Les hirondelles [reviendront] au printemps.", e: "Verbe revenir, au futur." }
          ] },
        { id: "j-fr-sujet", type: "mots", niveau: 1, titre: "Qui fait l'action ? Le sujet", consigne: "Le verbe est en gras. Touche **tous les mots du sujet**.", point: "Trouver le sujet", revoir: "jp-fr-sujet", nb: 6,
          items: [
            { phrase: "[Le facteur] {dépose} un colis devant la porte.", e: "Qui est-ce qui dépose ? Le facteur." },
            { phrase: "[Les enfants du quartier] {jouent} au ballon.", e: "Tout le groupe est sujet. Le mot le plus important, le noyau, c'est « enfants »." },
            { phrase: "Ce matin, [mes parents] {sont partis} tôt.", e: "« Ce matin » dit quand : c'est un complément circonstanciel, pas le sujet." },
            { phrase: "Dans le ciel {volent} [des oies sauvages].", e: "Sujet inversé : qui est-ce qui vole ? Des oies sauvages." },
            { phrase: "[Elle] {range} sa chambre.", e: "Le sujet peut être un pronom." },
            { phrase: "[Nager] {fatigue} beaucoup.", e: "Qu'est-ce qui fatigue ? Nager. Un verbe à l'infinitif peut être sujet." },
            { phrase: "[La petite sœur de Lina] {chante} faux.", e: "Qui est-ce qui chante ? La petite sœur de Lina, tout le groupe." },
            { phrase: "[Le vieux phare au bout de la jetée] {éclaire} la mer.", e: "Le sujet peut être long : tout ce qui répond à « Qu'est-ce qui éclaire ? »." },
            { phrase: "[Nous] {visiterons} le château de Murol.", e: "Qui est-ce qui visitera ? Nous." },
            { phrase: "[Les volcans d'Auvergne] {dorment} depuis longtemps.", e: "Qu'est-ce qui dort ? Les volcans d'Auvergne." },
            { phrase: "Chaque soir, [ma grand-mère et mon grand-père] {regardent} le journal.", e: "Deux noms reliés par « et » forment ensemble le sujet : c'est pour ça que le verbe est au pluriel." },
            { phrase: "« Où vas-tu ? » {demande} [le capitaine].", e: "Après une parole rapportée, le sujet passe souvent derrière le verbe." }
          ] },
        { id: "j-fr-nature", type: "tri", niveau: 2, titre: "Nature ou fonction ?", consigne: "Ce mot de grammaire désigne-t-il une **nature** ou une **fonction** ?", point: "Distinguer nature et fonction", revoir: "jp-fr-nature", nb: 10,
          boites: [ { id: "nat", t: "Nature : ce que le mot EST", i: "🏷️" }, { id: "fon", t: "Fonction : le RÔLE qu'il joue", i: "⚙️" } ],
          cartes: [
            { t: "nom", b: "nat", e: "La nature, c'est la classe du mot, comme dans le dictionnaire : nom, verbe, adjectif…" },
            { t: "verbe", b: "nat" },
            { t: "adjectif", b: "nat" },
            { t: "déterminant", b: "nat" },
            { t: "pronom", b: "nat" },
            { t: "adverbe", b: "nat" },
            { t: "préposition", b: "nat", e: "à, de, dans, sur, avec, pour… : ce sont des prépositions, c'est leur nature." },
            { t: "conjonction de coordination", b: "nat", e: "mais, ou, et, donc, or, ni, car." },
            { t: "sujet", b: "fon", e: "La fonction, c'est le rôle dans la phrase : sujet, COD, COI, complément circonstanciel…" },
            { t: "COD", b: "fon" },
            { t: "COI", b: "fon" },
            { t: "complément circonstanciel", b: "fon" },
            { t: "attribut du sujet", b: "fon" },
            { t: "épithète", b: "fon", e: "Épithète, c'est la fonction d'un adjectif collé au nom : une robe rouge." },
            { t: "complément du nom", b: "fon" }
          ] },
        { id: "j-fr-cod", type: "mots", niveau: 2, titre: "COD ou COI ?", point: "Trouver le COD et le COI", revoir: ["jp-fr-cod", "jp-fr-coi"], nb: 6,
          items: [
            { c: "Touche le **COD**.", phrase: "Hugo mange [une pomme].", e: "Hugo mange quoi ? Une pomme. Pas de préposition : complément direct." },
            { c: "Touche le **COI**.", phrase: "Lina téléphone [à sa cousine].", e: "Lina téléphone à qui ? À sa cousine. La préposition « à » rend le complément indirect." },
            { c: "Touche le **COD**.", phrase: "Les élèves préparent [un exposé sur Byzance].", e: "Préparent quoi ? Un exposé sur Byzance : tout le groupe." },
            { c: "Touche le **COI**.", phrase: "Charlemagne pense [à son empire].", e: "Penser à quelque chose : COI." },
            { c: "Touche le **COD**.", phrase: "Le chien [la] regarde.", e: "Le chien regarde qui ? « la » (elle). Un pronom COD se place devant le verbe." },
            { c: "Touche le **COI**.", phrase: "Tom parle [de ses vacances].", e: "Parle de quoi ? De ses vacances." },
            { c: "Touche le **COD**.", phrase: "Pénélope tisse [un grand linceul].", e: "Tisse quoi ? Un grand linceul." },
            { c: "Touche le **COI**.", phrase: "Ce livre appartient [à ma sœur].", e: "Appartient à qui ? À ma sœur." },
            { c: "Touche le **COD**.", phrase: "Au marché, ma mère achète [des fromages d'Auvergne].", e: "« Au marché » dit où : c'est un complément circonstanciel. Achète quoi ? Des fromages d'Auvergne." },
            { c: "Touche le **COI**.", phrase: "Nous nous souvenons [de cette journée].", e: "Se souvenir de quelque chose : COI." },
            { c: "Touche le **COD**.", phrase: "Le soir, Ulysse raconte [ses aventures] aux enfants.", e: "Raconte quoi ? Ses aventures. « aux enfants » répond à « à qui ? » : c'est un autre complément." }
          ] },
        { id: "j-fr-cc", type: "tri", niveau: 2, titre: "Où ? Quand ? Comment ? Pourquoi ?", consigne: "Le complément en gras indique…", point: "Classer les compléments circonstanciels", revoir: "jp-fr-cc", nb: 8,
          boites: [ { id: "lieu", t: "le lieu (où ?)", i: "📍" }, { id: "temps", t: "le temps (quand ?)", i: "🕐" }, { id: "maniere", t: "la manière (comment ?)", i: "🎨" }, { id: "cause", t: "la cause (pourquoi ?)", i: "❓" } ],
          cartes: [
            { t: "Les élèves jouent **dans la cour**.", b: "lieu" },
            { t: "**Hier soir**, il a neigé sur le Sancy.", b: "temps" },
            { t: "Elle chuchote **doucement**.", b: "maniere", e: "Un adverbe en -ment indique souvent la manière." },
            { t: "Le match est annulé **à cause de la pluie**.", b: "cause" },
            { t: "**En 800**, Charlemagne devient empereur.", b: "temps" },
            { t: "Les moines copient les livres **avec soin**.", b: "maniere" },
            { t: "Les pèlerins prient **à La Mecque**.", b: "lieu" },
            { t: "Il est resté chez lui **parce qu'il était malade**.", b: "cause", e: "« parce que » introduit toujours une cause." },
            { t: "**Pendant les vacances**, nous irons à la mer.", b: "temps" },
            { t: "Le loup avance **sans bruit**.", b: "maniere" },
            { t: "**Sous le pont**, la rivière gronde.", b: "lieu" },
            { t: "**Grâce à son courage**, Bessie Coleman obtient son brevet.", b: "cause", e: "« grâce à » donne la raison, la cause." },
            { t: "Le train arrive **à 8 h 15**.", b: "temps" },
            { t: "Ulysse navigue **vers Ithaque**.", b: "lieu" }
          ] },
        { id: "j-fr-nat-eclair", type: "eclair", niveau: 2, titre: "Éclair : la nature des mots", duree: 90, etoiles: [6, 11, 16], consigne: "Quelle est la nature du mot en gras ?", point: "Reconnaître la nature d'un mot", revoir: "jp-fr-nature",
          questions: [
            { q: "« le **petit** chat dort »", options: ["un adjectif", "un nom", "un adverbe"], bonne: 0 },
            { q: "« le petit **chat** dort »", options: ["un nom", "un verbe", "un adjectif"], bonne: 0 },
            { q: "« le petit chat **dort** »", options: ["un verbe", "un nom", "un adverbe"], bonne: 0 },
            { q: "« **le** petit chat dort »", options: ["un déterminant", "un pronom", "une préposition"], bonne: 0, e: "« le » devant un nom : déterminant." },
            { q: "« je **le** vois »", options: ["un pronom", "un déterminant", "un nom"], bonne: 0, e: "« le » remplace quelqu'un, devant un verbe : pronom." },
            { q: "« **elle** chante juste »", options: ["un pronom", "un nom", "un déterminant"], bonne: 0 },
            { q: "« il court **vite** »", options: ["un adverbe", "un adjectif", "un verbe"], bonne: 0, e: "Il précise le verbe et ne s'accorde jamais : adverbe." },
            { q: "« **sous** la table »", options: ["une préposition", "un adverbe", "un nom"], bonne: 0 },
            { q: "« petit **mais** costaud »", options: ["une conjonction de coordination", "une préposition", "un adverbe"], bonne: 0, e: "mais, ou, et, donc, or, ni, car." },
            { q: "« ils prennent **leur** goûter »", options: ["un déterminant", "un pronom", "un nom"], bonne: 0, e: "« leur » devant un nom : déterminant possessif." },
            { q: "« je **leur** parle »", options: ["un pronom", "un déterminant", "un adverbe"], bonne: 0, e: "« leur » devant un verbe : pronom." },
            { q: "« une héroïne **courageuse** »", options: ["un adjectif", "un nom", "un adverbe"], bonne: 0 },
            { q: "« Ulysse rentre à **Ithaque** »", options: ["un nom propre", "un adjectif", "un verbe"], bonne: 0 },
            { q: "« **ces** livres »", options: ["un déterminant", "un pronom", "un adjectif"], bonne: 0 },
            { q: "« **avec** ses amis »", options: ["une préposition", "une conjonction de coordination", "un adverbe"], bonne: 0 },
            { q: "« **très** grand »", options: ["un adverbe", "un adjectif", "un déterminant"], bonne: 0 },
            { q: "« la **beauté** du paysage »", options: ["un nom", "un adjectif", "un verbe"], bonne: 0 },
            { q: "« nous **finissons** tôt »", options: ["un verbe", "un nom", "un adverbe"], bonne: 0 },
            { q: "« il marche **lentement** »", options: ["un adverbe", "un adjectif", "un nom"], bonne: 0 },
            { q: "« Pénélope **et** Ulysse »", options: ["une conjonction de coordination", "une préposition", "un verbe"], bonne: 0, e: "« et » relie, « est » est le verbe être." }
          ] },
        { id: "j-fr-simple", type: "tri", niveau: 3, titre: "Phrase simple ou complexe ?", consigne: "Compte les **verbes conjugués**.", point: "Phrase simple ou complexe", revoir: "jp-fr-complexe", nb: 8,
          boites: [ { id: "simple", t: "Simple : 1 verbe conjugué", i: "1️⃣" }, { id: "complexe", t: "Complexe : 2 verbes conjugués ou plus", i: "🔗" } ],
          cartes: [
            { t: "Le soleil se lève sur les volcans.", b: "simple" },
            { t: "Le soleil se lève et les oiseaux chantent.", b: "complexe", e: "« se lève » et « chantent » : deux verbes conjugués, deux propositions." },
            { t: "Je pense que tu as raison.", b: "complexe", e: "« pense » et « as » : deux verbes conjugués." },
            { t: "Après le dîner, nous jouons aux cartes.", b: "simple" },
            { t: "Léa aime lire et dessiner.", b: "simple", e: "Piège ! « lire » et « dessiner » sont à l'infinitif. Un seul verbe conjugué : « aime »." },
            { t: "Il pleut, nous restons à la maison.", b: "complexe" },
            { t: "Le garçon qui porte un sac rouge est mon cousin.", b: "complexe", e: "« porte » et « est » : deux verbes conjugués." },
            { t: "Pendant des heures, le vieux marin raconta ses aventures à ses petits-enfants.", b: "simple", e: "Elle est longue, mais il n'y a qu'un verbe conjugué : « raconta »." },
            { t: "Quand la cloche sonne, les élèves sortent.", b: "complexe" },
            { t: "Charlemagne voulait unifier son empire.", b: "simple", e: "« unifier » est à l'infinitif." },
            { t: "Les Vikings attaquent les côtes, ils pillent les monastères.", b: "complexe" },
            { t: "Tom court vite mais il arrive en retard.", b: "complexe" }
          ] },
        { id: "j-fr-liens", type: "tri", niveau: 3, titre: "Juxtaposées, coordonnées ou subordonnée ?", consigne: "Comment les deux propositions sont-elles reliées ?", point: "Juxtaposition, coordination, subordination", revoir: "jp-fr-complexe", nb: 8,
          boites: [ { id: "jux", t: "Juxtaposées : par une ponctuation , ; :", i: "✂️" }, { id: "coo", t: "Coordonnées : mais, ou, et, donc, or, ni, car", i: "🤝" }, { id: "sub", t: "Subordonnée : qui, que, quand, parce que…", i: "🪜" } ],
          cartes: [
            { t: "Il fait froid, je mets mon bonnet.", b: "jux" },
            { t: "Il fait froid donc je mets mon bonnet.", b: "coo" },
            { t: "Je mets mon bonnet parce qu'il fait froid.", b: "sub", e: "« parce qu'il fait froid » ne tient pas debout seule : c'est une proposition subordonnée." },
            { t: "Le chat miaule ; il a faim.", b: "jux" },
            { t: "Le chat miaule car il a faim.", b: "coo" },
            { t: "Le chat miaule quand il a faim.", b: "sub" },
            { t: "J'ai lu le livre que tu m'as prêté.", b: "sub", e: "« que tu m'as prêté » complète le nom « livre » : c'est une subordonnée relative." },
            { t: "Je voulais venir, mais j'étais malade.", b: "coo", e: "Il y a une virgule, mais c'est « mais » qui relie : coordination." },
            { t: "Le ciel se couvre : l'orage approche.", b: "jux" },
            { t: "Nous partirons dès que le soleil se lèvera.", b: "sub" },
            { t: "Tu viens avec nous ou tu restes ici ?", b: "coo" },
            { t: "La ville où je suis née est au bord de l'Allier.", b: "sub" },
            { t: "Je sais que tu as gagné.", b: "sub" }
          ] }
      ],
      quiz: [
        { q: "Comment vérifier qu'un mot est un verbe conjugué ?", options: ["Je change le temps de la phrase : il change", "Je regarde s'il est au début de la phrase", "Je regarde s'il est long"], bonne: 0, explication: "Avec « hier » ou « demain », le verbe conjugué change de forme.", point: "Trouver le verbe conjugué", revoir: "jp-fr-verbe" },
        { q: "Le sujet répond à la question…", options: ["« Qui est-ce qui ? » ou « Qu'est-ce qui ? » + verbe", "« Où ? »", "« Quand ? »"], bonne: 0, explication: "On pose la question devant le verbe.", point: "Trouver le sujet", revoir: "jp-fr-sujet" },
        { q: "Le COD répond à la question…", options: ["verbe + « qui ? » ou « quoi ? »", "verbe + « à qui ? »", "« où ? »"], bonne: 0, explication: "Hugo mange quoi ? Une pomme.", point: "Trouver le COD et le COI", revoir: "jp-fr-cod" },
        { q: "Comment reconnaître un COI ?", options: ["Il commence par une préposition : à, de…", "Il est toujours en début de phrase", "On peut le supprimer"], bonne: 0, explication: "Parler à quelqu'un, parler de quelque chose.", point: "Trouver le COD et le COI", revoir: "jp-fr-coi" },
        { q: "Un complément circonstanciel peut…", options: ["être déplacé ou supprimé", "remplacer le verbe", "jamais être déplacé"], bonne: 0, explication: "C'est ce qui le distingue des COD et COI.", point: "Classer les compléments circonstanciels", revoir: "jp-fr-cc" },
        { q: "Dans « Le chien la regarde », le mot « la » est…", options: ["un pronom COD", "un déterminant", "un COI"], bonne: 0, explication: "Le chien regarde qui ? la. Un pronom COD se place devant le verbe.", point: "Trouver le COD et le COI" },
        { q: "Dans « Dans le ciel volent des oies », le sujet est…", options: ["des oies", "le ciel", "volent"], bonne: 0, explication: "Qui est-ce qui vole ? Des oies : c'est un sujet inversé.", point: "Trouver le sujet" },
        { q: "« Il pleut et le vent souffle » contient combien de propositions ?", options: ["2", "1", "3"], bonne: 0, explication: "Deux verbes conjugués, deux propositions.", point: "Phrase simple ou complexe" },
        { q: "Une phrase simple contient…", options: ["un seul verbe conjugué", "moins de dix mots", "aucun verbe"], bonne: 0, explication: "La longueur ne compte pas : seuls les verbes conjugués comptent.", point: "Phrase simple ou complexe" },
        { q: "Quelles sont les conjonctions de coordination ?", options: ["mais, ou, et, donc, or, ni, car", "qui, que, quand, où", "le, la, les, des"], bonne: 0, explication: "La phrase pour s'en souvenir : « Mais où est donc Ornicar ? ».", point: "Juxtaposition, coordination, subordination" },
        { q: "Deux propositions séparées par une virgule ou un point-virgule, sans petit mot de liaison, sont…", options: ["juxtaposées", "coordonnées", "subordonnées"], bonne: 0, explication: "Juxtaposer, c'est poser à côté.", point: "Juxtaposition, coordination, subordination" },
        { q: "Dans « Je pense que tu as raison », « que tu as raison » est…", options: ["une proposition subordonnée", "une proposition juxtaposée", "un complément circonstanciel"], bonne: 0, explication: "Elle dépend de « Je pense » et ne tient pas debout seule.", point: "Juxtaposition, coordination, subordination" },
        { q: "La nature d'un mot, c'est…", options: ["sa classe : nom, verbe, adjectif…", "son rôle dans la phrase", "sa place dans la phrase"], bonne: 0, explication: "La nature ne change pas, la fonction change selon la phrase.", point: "Distinguer nature et fonction" },
        { q: "La fonction d'un mot, c'est…", options: ["son rôle dans la phrase : sujet, COD…", "sa classe grammaticale", "son nombre de lettres"], bonne: 0, explication: "Un nom peut être sujet dans une phrase et COD dans une autre.", point: "Distinguer nature et fonction" }
      ]
    },

    /* ============ 2. FRANÇAIS — orthographe et accords ============ */
    {
      id: "jp-ortho", matiere: "francais",
      titre: "Écrire juste : homophones, accords, conjugaison",
      objectif: "choisir le bon homophone, accorder dans le groupe nominal, reconnaître les temps.",
      resume: "Des astuces de remplacement qui marchent à tous les coups, et la chasse aux accords oubliés.",
      savaisTu: [
        "« Homophone » vient du grec : homo, le même, et phone, le son. Ce sont des mots qui se prononcent pareil mais ne s'écrivent pas pareil.",
        "Le « s » du pluriel ne s'entend presque jamais. C'est pour cela que l'orthographe française demande de réfléchir, pas seulement d'écouter.",
        "L'accent de « à » ne change pas le son : il sert seulement à le distinguer de « a », le verbe avoir. Il se voit, il ne s'entend pas."
      ],
      missions: [
        { titre: "Les astuces de remplacement", etapes: [
          "**a / à** : si je peux dire « avait », j'écris a. Sinon, à.",
          "**et / est** : si je peux dire « était », j'écris est. Si je peux dire « et puis », j'écris et.",
          "**son / sont** : si je peux dire « étaient », j'écris sont. Si je peux dire « mon », j'écris son.",
          "**on / ont** : si je peux dire « avaient », j'écris ont. Si je peux dire « il », j'écris on.",
          "**ces / ses** : ces montre (ces livres-là). ses appartient à quelqu'un (les siens).",
          "**-er / -é** : je remplace par « vendre » ou « vendu ». Vendre → -er. Vendu → -é.",
          "**Accords dans le groupe nominal** : je trouve le nom, je regarde s'il est masculin ou féminin, singulier ou pluriel, et j'accorde le déterminant et les adjectifs avec lui."
        ] }
      ],
      supports: [
        { id: "jp-or-homo", titre: "Les homophones grammaticaux : a / à, et / est, on / ont, son / sont", source: "Leçon en vidéo", type: "video", lien: "https://www.youtube.com/watch?v=G9k2OecsUNY", etiquette: "niveau1", verifier: true, noteParent: "Chaîne non identifiée : à visionner avant d'ouvrir." },
        { id: "jp-or-homo2", titre: "Homophones en pagaille ! (a/à, ou/où, on/ont, et/est, son/sont)", source: "Leçon en vidéo", type: "video", lien: "https://www.youtube.com/watch?v=Rz7RAEPPYJU", etiquette: "niveau2", verifier: true, noteParent: "Chaîne non identifiée : à visionner avant d'ouvrir." },
        { id: "jp-or-accord", titre: "Accord déterminant, nom et adjectif", source: "Les Fondamentaux · Canopé", type: "video", lien: "https://www.youtube.com/watch?v=mLeMHuJNq7I", etiquette: "niveau1", duree: "3 min" },
        { id: "jp-or-accord2", titre: "Quels mots s'accordent avec le nom dans le groupe nominal ?", source: "Leçon en vidéo", type: "video", lien: "https://www.youtube.com/watch?v=7Vkz0sp9VFo", etiquette: "niveau2", verifier: true, noteParent: "Chaîne non identifiée : à visionner avant d'ouvrir." },
        { id: "jp-or-temps", titre: "Les variations d'un même verbe : les temps", source: "Les Fondamentaux · Canopé", type: "video", lien: "https://www.youtube.com/watch?v=mncCDlCYIu8", etiquette: "niveau1", duree: "3 min" }
      ],
      jeux: [
        { id: "j-or-homo", type: "eclair", niveau: 1, titre: "Course aux homophones", duree: 60, etoiles: [6, 11, 16], consigne: "Choisis le bon mot. Pense à l'astuce de remplacement !", point: "Les homophones grammaticaux", revoir: "jp-or-homo",
          questions: [
            { q: "Il … un chien.", options: ["a", "à"], bonne: 0, e: "Il avait un chien → a." },
            { q: "Je vais … la piscine.", options: ["à", "a"], bonne: 0, e: "On ne peut pas dire « je vais avait la piscine » → à." },
            { q: "Elle … froid aux mains.", options: ["a", "à"], bonne: 0, e: "Elle avait froid → a." },
            { q: "C'est … toi de jouer.", options: ["à", "a"], bonne: 0 },
            { q: "Tom … perdu sa clé.", options: ["a", "à"], bonne: 0, e: "Tom avait perdu → a." },
            { q: "Nous partons … huit heures.", options: ["à", "a"], bonne: 0 },
            { q: "Le ciel … gris.", options: ["est", "et"], bonne: 0, e: "Le ciel était gris → est." },
            { q: "J'aime le pain … le fromage.", options: ["et", "est"], bonne: 0, e: "Le pain et puis le fromage → et." },
            { q: "Elle … partie tôt.", options: ["est", "et"], bonne: 0, e: "Elle était partie → est." },
            { q: "Léa … Hugo sont amis.", options: ["et", "est"], bonne: 0 },
            { q: "Ce gâteau … délicieux.", options: ["est", "et"], bonne: 0 },
            { q: "Les volets … fermés.", options: ["sont", "son"], bonne: 0, e: "Les volets étaient fermés → sont." },
            { q: "Il cherche … stylo.", options: ["son", "sont"], bonne: 0, e: "Il cherche mon stylo → son." },
            { q: "Mes amis … en retard.", options: ["sont", "son"], bonne: 0 },
            { q: "Elle range … bureau.", options: ["son", "sont"], bonne: 0 },
            { q: "Où … passés les chats ?", options: ["sont", "son"], bonne: 0 },
            { q: "Ils … gagné le match.", options: ["ont", "on"], bonne: 0, e: "Ils avaient gagné → ont." },
            { q: "… part en vacances demain.", options: ["On", "Ont"], bonne: 0, e: "Il part en vacances → On." },
            { q: "Mes cousins … un chien.", options: ["ont", "on"], bonne: 0 },
            { q: "… dirait qu'il va pleuvoir.", options: ["On", "Ont"], bonne: 0 },
            { q: "Les élèves … fini l'exercice.", options: ["ont", "on"], bonne: 0 },
            { q: "Il a oublié … clés chez lui.", options: ["ses", "ces"], bonne: 0, e: "Les siennes → ses." },
            { q: "Regarde … nuages, là-bas !", options: ["ces", "ses"], bonne: 0, e: "On les montre → ces." },
            { q: "Lina range … affaires.", options: ["ses", "ces"], bonne: 0 },
            { q: "… chaussures-là sont trop petites.", options: ["Ces", "Ses"], bonne: 0 },
            { q: "Tu veux du thé … du chocolat ?", options: ["ou", "où"], bonne: 0, e: "ou = ou bien. où = le lieu." },
            { q: "… habites-tu ?", options: ["Où", "Ou"], bonne: 0 },
            { q: "La ville … je suis née.", options: ["où", "ou"], bonne: 0 },
            { q: "Il faut … avant de partir.", options: ["manger", "mangé"], bonne: 0, e: "Il faut vendre → manger." },
            { q: "Nous avons … une crêpe.", options: ["mangé", "manger"], bonne: 0, e: "Nous avons vendu → mangé." },
            { q: "Je vais … un film.", options: ["regarder", "regardé"], bonne: 0 },
            { q: "Elle a … toute la soirée.", options: ["dansé", "danser"], bonne: 0 },
            { q: "Tu dois … ta chambre.", options: ["ranger", "rangé"], bonne: 0 },
            { q: "… mon livre préféré.", options: ["C'est", "S'est"], bonne: 0, e: "C'est = cela est." },
            { q: "Elle … réveillée tard.", options: ["s'est", "c'est"], bonne: 0, e: "Elle s'était réveillée : verbe se réveiller → s'est." }
          ] },
        { id: "j-or-accord", type: "mots", niveau: 2, titre: "Chasse à l'accord oublié", consigne: "Un mot est **mal accordé**. Touche-le.", point: "Les accords dans le groupe nominal", revoir: "jp-or-accord", nb: 6,
          items: [
            { phrase: "Les [petit] chats dorment au soleil.", e: "On écrit « petits » : l'adjectif s'accorde avec « chats », masculin pluriel." },
            { phrase: "Une robe [vert] pend dans l'armoire.", e: "On écrit « verte » : « robe » est féminin." },
            { phrase: "Mes [ami] sont arrivés.", e: "On écrit « amis » : « mes » annonce un pluriel." },
            { phrase: "De [beau] fleurs ornent la table.", e: "On écrit « belles » : « fleurs » est féminin pluriel." },
            { phrase: "La [vieil] église domine le village.", e: "On écrit « vieille » : « église » est féminin. « Vieil » ne s'emploie qu'au masculin devant une voyelle : un vieil arbre." },
            { phrase: "Les montagnes [enneigé] brillent au soleil.", e: "On écrit « enneigées » : féminin pluriel." },
            { phrase: "Un [grande] château fort se dresse sur la colline.", e: "On écrit « grand » : « château » est masculin." },
            { phrase: "[Cette] livres sont à moi.", e: "On écrit « Ces » : le déterminant s'accorde aussi avec le nom." },
            { phrase: "Les élèves [attentif] écoutent le récit.", e: "On écrit « attentifs »." },
            { phrase: "J'ai acheté des [pomme] rouges.", e: "On écrit « pommes » : après « des », le nom est au pluriel." },
            { phrase: "Une [ancien] mosquée se trouve à Cordoue.", e: "On écrit « ancienne » : « mosquée » est féminin." },
            { phrase: "Les [premier] empereurs byzantins vivaient à Constantinople.", e: "On écrit « premiers » : masculin pluriel." }
          ] },
        { id: "j-or-temps", type: "tri", niveau: 2, titre: "À quel temps ?", consigne: "Range ce verbe conjugué dans le bon temps.", point: "Reconnaître les temps", revoir: "jp-or-temps", nb: 10,
          boites: [ { id: "pres", t: "Présent", i: "⏺️" }, { id: "imp", t: "Imparfait", i: "🔙" }, { id: "ps", t: "Passé simple", i: "📜" }, { id: "fut", t: "Futur", i: "🔜" } ],
          cartes: [
            { t: "je chante", b: "pres" }, { t: "nous chantions", b: "imp", e: "-ions, -iez, -aient : terminaisons de l'imparfait." },
            { t: "il chanta", b: "ps", e: "-a à la 3e personne : passé simple des verbes en -er." }, { t: "vous chanterez", b: "fut", e: "Le « r » avant la terminaison annonce le futur." },
            { t: "je chantai", b: "ps", e: "Sans « r » : passé simple. Avec « r » (je chanterai) : futur." }, { t: "je chanterai", b: "fut" },
            { t: "elles finissaient", b: "imp" }, { t: "tu finiras", b: "fut" }, { t: "ils finirent", b: "ps" }, { t: "nous finissons", b: "pres" },
            { t: "il fut", b: "ps", e: "Passé simple du verbe être." }, { t: "il était", b: "imp" }, { t: "il sera", b: "fut" }, { t: "il est", b: "pres" },
            { t: "nous allâmes", b: "ps" }, { t: "j'irai", b: "fut" }, { t: "vous alliez", b: "imp" }, { t: "ils vont", b: "pres" },
            { t: "elle prit", b: "ps" }, { t: "tu prenais", b: "imp" }
          ] }
      ],
      quiz: [
        { q: "Pour choisir entre « a » et « à », je remplace par…", options: ["avait", "était", "étaient"], bonne: 0, explication: "Si « avait » marche, c'est le verbe avoir : a.", point: "Les homophones grammaticaux" },
        { q: "« Ils … mangé » : je peux dire « avaient », donc j'écris…", options: ["ont", "on"], bonne: 0, explication: "ont = verbe avoir.", point: "Les homophones grammaticaux" },
        { q: "Pour choisir entre « -er » et « -é », je remplace par…", options: ["vendre ou vendu", "être ou avoir", "aller ou venir"], bonne: 0, explication: "Vendre → -er ; vendu → -é.", point: "Les homophones grammaticaux" },
        { q: "« Elle … levée » : je peux dire « elle s'était levée », donc j'écris…", options: ["s'est", "c'est"], bonne: 0, explication: "C'est le verbe se lever.", point: "Les homophones grammaticaux" },
        { q: "Dans « les grandes maisons blanches », le nom qui commande les accords est…", options: ["maisons", "grandes", "blanches"], bonne: 0, explication: "C'est le nom qui donne son genre et son nombre aux autres mots.", point: "Les accords dans le groupe nominal" },
        { q: "Dans un groupe nominal, qui s'accorde avec le nom ?", options: ["Le déterminant et les adjectifs", "Seulement les adjectifs", "Personne"], bonne: 0, explication: "Les petites, la petite, le petit : tout suit le nom.", point: "Les accords dans le groupe nominal" },
        { q: "Quel groupe nominal est bien accordé ?", options: ["des histoires passionnantes", "des histoire passionnantes", "des histoires passionnante"], bonne: 0, explication: "Féminin pluriel partout.", point: "Les accords dans le groupe nominal" },
        { q: "« Un vieil homme » devient au féminin…", options: ["une vieille femme", "une vieil femme", "une vieux femme"], bonne: 0, explication: "Vieux, vieil, vieille.", point: "Les accords dans le groupe nominal" },
        { q: "« il chanta » est conjugué au…", options: ["passé simple", "imparfait", "futur"], bonne: 0, explication: "L'imparfait serait « il chantait », le futur « il chantera ».", point: "Reconnaître les temps" },
        { q: "Les terminaisons de l'imparfait sont…", options: ["-ais, -ais, -ait, -ions, -iez, -aient", "-ai, -as, -a, -âmes, -âtes, -èrent", "-rai, -ras, -ra, -rons, -rez, -ront"], bonne: 0, explication: "La deuxième ligne, c'est le passé simple ; la troisième, le futur.", point: "Reconnaître les temps" },
        { q: "Comment reconnaître le futur ?", options: ["Au « r » avant la terminaison : je chanterai", "À l'accent circonflexe", "Au « i » : nous chantions"], bonne: 0, explication: "Je finirai, tu iras, il sera : le « r » est toujours là.", point: "Reconnaître les temps" }
      ]
    },

    /* ============ 3. HISTOIRE-GÉO — écrire un paragraphe argumenté ============ */
    {
      id: "jp-paragraphe", matiere: "histoire",
      titre: "Écrire un paragraphe qui tient debout",
      objectif: "construire sa réponse : une idée, un exemple précis, une explication, et des mots pour relier.",
      resume: "En histoire-géo, on ne récite pas : on explique. Le secret, c'est l'ordre, et les petits mots de liaison.",
      savaisTu: [
        "Vers 830, Éginhard, un savant de la cour, a écrit la Vie de Charlemagne. Il raconte que l'empereur gardait des tablettes sous son oreiller pour s'entraîner à écrire la nuit… sans grand succès, car il avait commencé trop tard.",
        "Un bon paragraphe ressemble à un hamburger : l'introduction et la conclusion sont le pain, les idées avec leurs exemples sont la garniture. Sans pain, tout tombe.",
        "Les mots de liaison sont les panneaux du texte : « donc » annonce une conséquence, « car » une cause, « pourtant » une surprise. Le lecteur sait où il va."
      ],
      missions: [
        { titre: "La recette du paragraphe argumenté", etapes: [
          "**Introduction** : je présente le sujet (qui ? quand ? où ?) et je reprends la question posée.",
          "**Idée 1** : je commence par un mot de liaison (D'abord…) et j'écris l'idée en une phrase.",
          "**Exemple** : je donne un fait précis du cours, avec une date, un nom ou un lieu (Par exemple…).",
          "**Explication** : je dis ce que prouve l'exemple (Cela montre que…).",
          "**Idée 2, puis idée 3** : même méthode, avec Ensuite… De plus… Enfin…",
          "**Conclusion** : je réponds à la question en une ou deux phrases (Ainsi… / Donc…)."
        ] }
      ],
      supports: [
        { id: "jp-hg-dc", titre: "Réaliser un développement construit (paragraphe argumenté)", source: "Méthode d'histoire-géographie", type: "video", lien: "https://www.youtube.com/watch?v=SlH9dCfIwTI", etiquette: "niveau1", verifier: true, noteParent: "Conseils de méthode d'un professeur, plutôt pensés pour le brevet. À visionner avant d'ouvrir." },
        { id: "jp-hg-intro", titre: "Le paragraphe argumenté : l'introduction", source: "Méthode d'histoire-géographie", type: "video", lien: "https://www.youtube.com/watch?v=TzpFk96jtwk", etiquette: "niveau2", verifier: true, noteParent: "Chaîne d'un professeur. À visionner avant d'ouvrir." },
        { id: "jp-hg-conclu", titre: "Le paragraphe argumenté : rédiger une conclusion", source: "Méthode d'histoire-géographie", type: "video", lien: "https://www.youtube.com/watch?v=vAm30Ve0C-Q", etiquette: "niveau3", verifier: true, noteParent: "Même chaîne que la vidéo sur l'introduction." }
      ],
      jeux: [
        { id: "j-hg-connecteurs", type: "tri", niveau: 1, titre: "À quoi sert ce mot de liaison ?", consigne: "Range ce mot de liaison selon ce qu'il annonce.", point: "Le rôle des mots de liaison", revoir: "jp-hg-dc", nb: 10,
          boites: [ { id: "ajout", t: "Ajouter, mettre en ordre", i: "➕" }, { id: "cause", t: "Donner une cause", i: "🔍" }, { id: "csq", t: "Conséquence, conclusion", i: "➡️" }, { id: "opp", t: "Opposer", i: "↔️" }, { id: "ex", t: "Donner un exemple", i: "👉" } ],
          cartes: [
            { t: "D'abord", b: "ajout" }, { t: "Ensuite", b: "ajout" }, { t: "De plus", b: "ajout" }, { t: "Enfin", b: "ajout" },
            { t: "car", b: "cause" }, { t: "parce que", b: "cause" }, { t: "En effet", b: "cause", e: "« En effet » annonce l'explication de ce qu'on vient de dire." }, { t: "puisque", b: "cause" },
            { t: "donc", b: "csq" }, { t: "C'est pourquoi", b: "csq" }, { t: "Par conséquent", b: "csq" }, { t: "Ainsi", b: "csq", e: "En fin de paragraphe, « Ainsi » sert à conclure." },
            { t: "mais", b: "opp" }, { t: "Pourtant", b: "opp" }, { t: "Cependant", b: "opp" }, { t: "Au contraire", b: "opp" },
            { t: "Par exemple", b: "ex" }, { t: "C'est le cas de…", b: "ex" }, { t: "comme", b: "ex", e: "« comme » peut annoncer un exemple : des villes comme Venise." }
          ] },
        { id: "j-hg-bonmot", type: "eclair", niveau: 2, titre: "Le bon mot au bon endroit", duree: 0, nb: 8, consigne: "Choisis le mot de liaison qui donne du sens à la phrase.", point: "Choisir le bon mot de liaison", revoir: ["hi-charlemagne", "jp-hg-dc"],
          questions: [
            { q: "Charlemagne veut contrôler son empire, … il envoie des missi dominici dans les comtés.", options: ["donc", "mais", "car"], bonne: 0, e: "Envoyer les missi est la conséquence de sa volonté de contrôler." },
            { q: "Constantinople est très riche … elle contrôle des routes de commerce.", options: ["car", "donc", "pourtant"], bonne: 0, e: "Les routes de commerce sont la cause de sa richesse." },
            { q: "L'empire de Charlemagne est immense. …, il est partagé entre ses petits-fils en 843.", options: ["Pourtant", "Car", "Par exemple"], bonne: 0, e: "On s'attendrait à ce qu'un si grand empire dure : c'est une opposition." },
            { q: "Les musulmans pratiquent cinq piliers. …, ils doivent prier cinq fois par jour.", options: ["Par exemple", "Mais", "Car"], bonne: 0 },
            { q: "Catholiques et orthodoxes croient au même Dieu. …, ils se séparent en 1054.", options: ["Cependant", "Donc", "En effet"], bonne: 0 },
            { q: "Les marchands de Venise commercent avec Byzance. …, ils y achètent de la soie et des épices.", options: ["Par exemple", "Pourtant", "Car"], bonne: 0 },
            { q: "Les moines recopient les livres à la main. …, chaque manuscrit demande des mois de travail.", options: ["C'est pourquoi", "Car", "Mais"], bonne: 0 },
            { q: "La mosquée de Cordoue est impressionnante. …, sa salle de prière compte des centaines de colonnes.", options: ["En effet", "Mais", "Donc"], bonne: 0, e: "« En effet » annonce la preuve de ce qu'on vient d'affirmer." },
            { q: "Justinien veut reconstituer l'Empire romain. …, il reconquiert l'Italie.", options: ["C'est pourquoi", "Pourtant", "Car"], bonne: 0 },
            { q: "Les croisés veulent prendre Jérusalem. …, c'est une ville sainte pour les chrétiens.", options: ["En effet", "Pourtant", "Donc"], bonne: 0 },
            { q: "D'abord, Charlemagne agrandit son royaume par la guerre. …, il se fait sacrer empereur par le pape.", options: ["Ensuite", "Pourtant", "Car"], bonne: 0 },
            { q: "Il pleut beaucoup en Bretagne, … il fait souvent sec en Provence.", options: ["mais", "car", "donc"], bonne: 0 },
            { q: "Les villes attirent les habitants … on y trouve du travail.", options: ["car", "mais", "donc"], bonne: 0 },
            { q: "L'eau douce est rare sur Terre. …, il faut l'économiser.", options: ["C'est pourquoi", "Pourtant", "Par exemple"], bonne: 0 }
          ] },
        { id: "j-hg-ordre", type: "ordre", niveau: 2, titre: "Remets le paragraphe dans l'ordre", consigne: "Touche les phrases dans l'ordre : introduction, idées, conclusion.", point: "Organiser un paragraphe", revoir: "jp-hg-dc", nb: 2, libelle: "Paragraphe",
          series: [
            { titre: "Comment Charlemagne gouverne-t-il son empire ?", explication: "Introduction, trois idées annoncées par D'abord, Ensuite, De plus, puis la conclusion avec Ainsi.",
              etapes: [
                { t: "En 800, Charlemagne est sacré empereur à Rome. Il doit alors gouverner un immense territoire.", d: "Introduction" },
                { t: "D'abord, il s'appuie sur des comtes, qui le représentent dans chaque région de l'empire.", d: "Idée 1" },
                { t: "Ensuite, il les fait surveiller par les missi dominici, des envoyés qui voyagent deux par deux.", d: "Idée 2" },
                { t: "De plus, il fait connaître ses ordres par écrit, dans des textes appelés capitulaires.", d: "Idée 3" },
                { t: "Ainsi, Charlemagne contrôle son empire grâce à des hommes de confiance et à l'écrit.", d: "Conclusion" }
              ] },
            { titre: "Pourquoi Constantinople est-elle une ville puissante ?", explication: "Chaque idée apporte une raison différente : la défense, la richesse, la religion.",
              etapes: [
                { t: "Au VIe siècle, Constantinople est la capitale de l'Empire byzantin, gouverné par l'empereur Justinien.", d: "Introduction" },
                { t: "D'abord, la ville est protégée par de puissantes murailles et par la mer.", d: "Idée 1" },
                { t: "Ensuite, elle est très riche, car elle se trouve sur les routes de commerce entre l'Europe et l'Asie.", d: "Idée 2" },
                { t: "Enfin, c'est un grand centre religieux, avec la basilique Sainte-Sophie construite sous Justinien.", d: "Idée 3" },
                { t: "Constantinople est donc à la fois une forteresse, un grand marché et une capitale religieuse.", d: "Conclusion" }
              ] },
            { titre: "Pourquoi l'eau est-elle une ressource à gérer ?", explication: "En géographie aussi : une idée par phrase, reliées par des mots de liaison.",
              etapes: [
                { t: "L'eau recouvre une grande partie de la Terre, mais l'eau douce que l'on peut utiliser est rare.", d: "Introduction" },
                { t: "D'abord, presque toute l'eau de la planète est salée : elle se trouve dans les océans.", d: "Idée 1" },
                { t: "Ensuite, l'eau douce est mal répartie : certaines régions en manquent, comme le Sahel.", d: "Idée 2" },
                { t: "De plus, les besoins augmentent avec la population, l'agriculture et l'industrie.", d: "Idée 3" },
                { t: "C'est pourquoi il faut économiser l'eau et bien la partager.", d: "Conclusion" }
              ] }
          ] },
        { id: "j-hg-iee", type: "tri", niveau: 3, titre: "Idée, exemple ou explication ?", consigne: "Dans un paragraphe, cette phrase serait…", point: "Idée, exemple, explication", revoir: "jp-hg-dc", nb: 9,
          boites: [ { id: "idee", t: "une idée", i: "💡" }, { id: "ex", t: "un exemple précis", i: "📌" }, { id: "expl", t: "une explication", i: "🔗" } ],
          cartes: [
            { t: "Charlemagne s'appuie sur l'Église pour gouverner.", b: "idee" },
            { t: "En 800, il est sacré empereur par le pape Léon III, à Rome.", b: "ex", e: "Une date, un nom, un lieu : c'est un exemple précis." },
            { t: "Cela montre que son pouvoir vient aussi de Dieu.", b: "expl", e: "« Cela montre que… » : on explique ce que prouve l'exemple." },
            { t: "Byzance est une ville de commerce.", b: "idee" },
            { t: "On y vend de la soie, des épices et de l'ivoire.", b: "ex" },
            { t: "Cela s'explique par sa position entre l'Europe et l'Asie.", b: "expl" },
            { t: "La Méditerranée est un espace d'échanges.", b: "idee" },
            { t: "Les marchands de Venise et de Gênes commercent avec le port d'Alexandrie.", b: "ex" },
            { t: "Cela prouve que la mer relie les peuples plus qu'elle ne les sépare.", b: "expl" },
            { t: "L'eau douce est mal répartie sur la planète.", b: "idee" },
            { t: "Au Sahel, des habitants marchent des heures pour trouver un point d'eau.", b: "ex" },
            { t: "C'est pourquoi l'accès à l'eau crée des inégalités.", b: "expl" }
          ] }
      ],
      quiz: [
        { q: "Dans un paragraphe argumenté, l'introduction sert à…", options: ["présenter le sujet et reprendre la question", "donner tous les exemples", "conclure"], bonne: 0, explication: "Qui ? Quand ? Où ? Puis la question.", point: "Organiser un paragraphe", revoir: "jp-hg-intro" },
        { q: "Un bon exemple en histoire, c'est…", options: ["un fait précis : une date, un nom, un lieu", "une opinion personnelle", "une phrase générale"], bonne: 0, explication: "« En 800, à Rome » vaut mieux que « il y a longtemps ».", point: "Idée, exemple, explication" },
        { q: "« Cela montre que… » sert à…", options: ["expliquer ce que prouve l'exemple", "ajouter une nouvelle idée", "raconter une anecdote"], bonne: 0, explication: "C'est le lien entre l'exemple et l'idée.", point: "Idée, exemple, explication" },
        { q: "Quel mot de liaison annonce une opposition ?", options: ["Pourtant", "Ensuite", "Par exemple"], bonne: 0, explication: "Pourtant, cependant, mais.", point: "Le rôle des mots de liaison" },
        { q: "Quel mot de liaison annonce une conséquence ?", options: ["donc", "car", "mais"], bonne: 0, explication: "donc, c'est pourquoi, par conséquent.", point: "Le rôle des mots de liaison" },
        { q: "Quel mot de liaison annonce une cause ?", options: ["car", "donc", "ensuite"], bonne: 0, explication: "car, parce que, en effet.", point: "Le rôle des mots de liaison" },
        { q: "La conclusion doit…", options: ["répondre à la question posée", "apporter une idée nouvelle", "recopier l'introduction"], bonne: 0, explication: "Une ou deux phrases qui répondent, avec Ainsi ou Donc.", point: "Organiser un paragraphe", revoir: "jp-hg-conclu" },
        { q: "Chaque nouvelle idée commence…", options: ["par un mot de liaison, et à la ligne", "par une date", "par « Et »"], bonne: 0, explication: "Le retour à la ligne montre au correcteur qu'on change d'idée.", point: "Organiser un paragraphe" },
        { q: "Ce qu'il vaut mieux éviter dans un paragraphe argumenté :", options: ["les avis sans preuve, comme « je trouve que c'est bien »", "les dates", "les noms de personnages"], bonne: 0, explication: "En histoire, chaque affirmation s'appuie sur un fait.", point: "Idée, exemple, explication" }
      ]
    },

    /* ============ 4. PHYSIQUE-CHIMIE — l'eau, les graphiques, la démarche ============ */
    {
      id: "jp-eau", matiere: "physique",
      titre: "L'eau dans tous ses états, et les graphiques",
      objectif: "nommer les changements d'état, tracer et lire un graphique, mener une démarche expérimentale.",
      resume: "Glaçon, eau liquide, vapeur : on revoit les bases, puis on apprend à faire parler un graphique.",
      savaisTu: [
        "Pendant que la glace fond, sa température reste bloquée à 0 °C, même si on continue à chauffer : toute l'énergie sert à faire fondre. Sur un graphique, cela dessine un palier, un morceau de ligne bien horizontal.",
        "Le nuage blanc au-dessus d'une casserole n'est pas de la vapeur : la vapeur d'eau est invisible. Ce sont de minuscules gouttes d'eau liquide qui se sont déjà reformées.",
        "La buée sur une vitre froide, c'est la vapeur d'eau invisible de l'air qui redevient liquide : une liquéfaction.",
        "Le sulfate de cuivre anhydre est une poudre blanche qui devient bleue au contact de l'eau. Il montre qu'il y a de l'eau, mais pas que le liquide est de l'eau pure. Il se manipule avec des lunettes et des gants, jamais à la maison.",
        "L'eau de l'Allier qui passe à Issoire rejoint la Loire, puis l'océan Atlantique. Un jour, elle repartira en nuage."
      ],
      missions: [
        { titre: "Les 5 règles d'un beau graphique", etapes: [
          "**Un titre** : « Évolution de … en fonction de … ».",
          "**Les axes** : à l'horizontale (axe des abscisses), ce qu'on choisit, souvent le temps. À la verticale (axe des ordonnées), ce qu'on mesure.",
          "**Le nom et l'unité** au bout de chaque axe : Temps (min), Température (°C).",
          "**Une échelle régulière** : chaque carreau vaut toujours la même chose, du début à la fin de l'axe.",
          "**Les points en petites croix**, puis une ligne qui les relie sans forcer."
        ] },
        { titre: "La démarche scientifique, dans l'ordre", etapes: [
          "**Question** : y a-t-il de l'eau dans le jus d'orange ?",
          "**Hypothèse** : je pense que oui, car c'est un liquide qu'on boit.",
          "**Expérience** : je dépose quelques gouttes de jus sur du sulfate de cuivre anhydre. À côté, un peu de sulfate seul sert de témoin.",
          "**Observation** : le sulfate devient bleu ; le témoin reste blanc.",
          "**Conclusion** : le jus d'orange contient de l'eau. Mon hypothèse est validée."
        ] }
      ],
      supports: [
        { id: "jp-pc-rappel", titre: "Les états de la matière et le cycle de l'eau (rappel)", source: "Cours de collège, 5e", type: "video", lienDe: "pc-etats-video", etiquette: "niveau1", note: "La vidéo de l'onglet Physique-chimie, pour revoir les bases." },
        { id: "jp-pc-cycle", titre: "Le cycle de l'eau", source: "CEA · Comment ça marche ?", type: "video", lien: "https://www.youtube.com/watch?v=pGfwOC9iyrc", etiquette: "niveau1", verifier: true, noteParent: "Série « Comment ça marche ? » du CEA, à confirmer. C'est probablement le lien qui manque à « Le cycle de l'eau (CEA) » dans l'onglet Physique-chimie." },
        { id: "jp-pc-graph", titre: "Tracer un graphique (5e)", source: "Cours de chimie, épisode 11", type: "video", lien: "https://www.youtube.com/watch?v=0HEXs9nE9Sw", etiquette: "niveau2", verifier: true, noteParent: "Méthode pas à pas, niveau 5e. Chaîne d'un professeur : à visionner avant d'ouvrir." },
        { id: "jp-pc-palier", titre: "Qu'est-ce qu'un palier de changement d'état ?", source: "Cours de 5e", type: "video", lien: "https://www.youtube.com/watch?v=ldOx_Ztq2_Y", etiquette: "niveau2", verifier: true, noteParent: "Chaîne d'un professeur : à visionner avant d'ouvrir." },
        { id: "jp-pc-fusion", titre: "La température pendant la fusion de l'eau pure", source: "Vidéo flash, physique-chimie collège", type: "video", lien: "https://www.youtube.com/watch?v=W3DY-iaqb2o", etiquette: "niveau2", verifier: true, noteParent: "Expérience filmée avec le palier. À visionner avant d'ouvrir." },
        { id: "jp-pc-sulfate", titre: "Comment mettre en évidence la présence d'eau ?", source: "Vidéo flash, physique-chimie collège", type: "video", lien: "https://www.youtube.com/watch?v=V_4DnsvF36s", etiquette: "niveau3", verifier: true, noteParent: "Même chaîne que la vidéo sur la fusion." }
      ],
      jeux: [
        { id: "j-pc-memory", type: "memory", niveau: 1, titre: "Memory des changements d'état", point: "Nommer les changements d'état", revoir: ["jp-pc-rappel", "jp-pc-cycle"], nb: 6,
          paires: [
            ["Fusion", "solide → liquide", "Le glaçon fond."],
            ["Solidification", "liquide → solide", "L'eau gèle."],
            ["Vaporisation", "liquide → gaz", "L'eau bout ou s'évapore."],
            ["Liquéfaction", "gaz → liquide", "La buée sur la vitre. On dit aussi condensation."],
            ["0 °C", "la glace d'eau pure fond", "Et l'eau pure gèle à la même température."],
            ["100 °C", "l'eau pure bout", "Au niveau de la mer."]
          ] },
        { id: "j-pc-etats", type: "tri", niveau: 1, titre: "Solide, liquide ou gaz ?", consigne: "À quel état correspond cette carte ?", point: "Les propriétés des états de la matière", revoir: "jp-pc-rappel", nb: 9,
          boites: [ { id: "s", t: "Solide", i: "🧊" }, { id: "l", t: "Liquide", i: "💧" }, { id: "g", t: "Gaz", i: "💨" } ],
          cartes: [
            { t: "A une forme propre : on peut le saisir avec les doigts.", b: "s" },
            { t: "Prend la forme du récipient, avec une surface libre plane et horizontale.", b: "l" },
            { t: "Occupe tout l'espace disponible.", b: "g" },
            { t: "Se comprime facilement, comme l'air dans une seringue bouchée.", b: "g" },
            { t: "Un glaçon", b: "s" },
            { t: "La vapeur d'eau (invisible)", b: "g" },
            { t: "L'huile dans une bouteille", b: "l" },
            { t: "Le sable", b: "s", e: "Il coule, mais chaque grain garde sa forme : c'est un solide en poudre." },
            { t: "L'air d'un ballon", b: "g" },
            { t: "Le lait", b: "l" },
            { t: "Sa surface reste horizontale même quand on penche le verre.", b: "l" },
            { t: "Le sucre en poudre", b: "s" }
          ] },
        { id: "j-pc-cycle", type: "ordre", niveau: 1, titre: "Le voyage d'une goutte d'eau", consigne: "Remets les étapes dans l'ordre.", point: "Le cycle de l'eau", revoir: "jp-pc-cycle", nb: 2, libelle: "Voyage",
          series: [
            { titre: "Le cycle de l'eau", explication: "Et le cycle recommence, sans fin : la même eau circule sur Terre depuis des milliards d'années.",
              etapes: [
                { t: "Le Soleil chauffe la mer : l'eau s'évapore.", d: "Évaporation : liquide → gaz" },
                { t: "En montant, la vapeur se refroidit et forme des nuages de gouttelettes.", d: "Condensation (liquéfaction) : gaz → liquide" },
                { t: "Les gouttes grossissent et tombent en pluie, ou en neige s'il fait froid.", d: "Précipitations" },
                { t: "L'eau ruisselle vers les rivières ou s'infiltre dans le sol.", d: "Ruissellement et infiltration" },
                { t: "Les rivières ramènent l'eau jusqu'à la mer.", d: "Retour à la mer" }
              ] },
            { titre: "De la neige du Sancy jusqu'à l'océan", explication: "Fusion, ruissellement, évaporation, condensation : les mêmes étapes, près de chez toi.",
              etapes: [
                { t: "L'hiver, la neige s'accumule sur le massif du Sancy.", d: "Précipitations (eau solide)" },
                { t: "Au printemps, la neige fond.", d: "Fusion : solide → liquide" },
                { t: "L'eau de fonte descend par les Couzes jusqu'à l'Allier, vers Issoire.", d: "Ruissellement" },
                { t: "L'Allier rejoint la Loire, qui se jette dans l'océan Atlantique.", d: "Retour à l'océan" },
                { t: "Au-dessus de l'océan, l'eau s'évapore et forme des nuages qui repartent vers l'Auvergne.", d: "Évaporation, puis condensation" }
              ] }
          ] },
        { id: "j-pc-vf", type: "eclair", niveau: 2, titre: "Vrai ou faux express", duree: 60, etoiles: [6, 10, 14], fixe: "ordre", consigne: "Vrai ou faux ? Réponds vite !", point: "Les changements d'état", revoir: "jp-pc-palier",
          questions: [
            { q: "La glace d'eau pure fond à 0 °C.", options: ["Vrai", "Faux"], bonne: 0 },
            { q: "L'eau pure bout à 100 °C.", options: ["Vrai", "Faux"], bonne: 0 },
            { q: "Le nuage blanc au-dessus d'une casserole, c'est de la vapeur d'eau.", options: ["Vrai", "Faux"], bonne: 1, e: "La vapeur est invisible. Le nuage, ce sont des gouttelettes d'eau liquide." },
            { q: "Quand l'eau gèle, sa masse change.", options: ["Vrai", "Faux"], bonne: 1, e: "La masse se conserve lors d'un changement d'état." },
            { q: "Quand l'eau gèle, son volume augmente.", options: ["Vrai", "Faux"], bonne: 0, e: "C'est pour ça qu'une bouteille pleine éclate au congélateur." },
            { q: "La fusion, c'est le passage de l'état liquide à l'état solide.", options: ["Vrai", "Faux"], bonne: 1, e: "Fusion : solide → liquide. Liquide → solide, c'est la solidification." },
            { q: "La liquéfaction, c'est le passage de l'état gazeux à l'état liquide.", options: ["Vrai", "Faux"], bonne: 0 },
            { q: "Pendant un changement d'état de l'eau pure, la température reste constante.", options: ["Vrai", "Faux"], bonne: 0, e: "C'est le palier." },
            { q: "Le sulfate de cuivre anhydre devient bleu en présence d'eau.", options: ["Vrai", "Faux"], bonne: 0 },
            { q: "Si le sulfate de cuivre devient bleu, le liquide est de l'eau pure.", options: ["Vrai", "Faux"], bonne: 1, e: "Il dit seulement qu'il y a de l'eau : le jus d'orange le fait bleuir aussi." },
            { q: "La surface libre d'un liquide au repos est horizontale.", options: ["Vrai", "Faux"], bonne: 0 },
            { q: "Un gaz a une forme propre.", options: ["Vrai", "Faux"], bonne: 1, e: "Il occupe tout l'espace qu'on lui donne." },
            { q: "Sur un graphique, le temps se place en général sur l'axe horizontal.", options: ["Vrai", "Faux"], bonne: 0 },
            { q: "On peut changer d'échelle au milieu d'un axe.", options: ["Vrai", "Faux"], bonne: 1, e: "L'échelle doit rester régulière du début à la fin." },
            { q: "La buée sur une vitre froide est une liquéfaction.", options: ["Vrai", "Faux"], bonne: 0 },
            { q: "L'eau ne s'évapore qu'à 100 °C.", options: ["Vrai", "Faux"], bonne: 1, e: "Le linge sèche à 20 °C : l'évaporation se fait à toute température. À 100 °C, l'eau bout." },
            { q: "Un glaçon qui fond dans un verre, c'est une solidification.", options: ["Vrai", "Faux"], bonne: 1 },
            { q: "La masse se conserve quand la glace fond.", options: ["Vrai", "Faux"], bonne: 0 }
          ] },
        { id: "j-pc-graphe", type: "graphe", niveau: 2, titre: "Trace et lis le graphique", point: "Tracer et lire un graphique", revoir: ["jp-pc-graph", "jp-pc-palier"],
          series: [
            { titre: "Évolution de la température de l'eau en fonction du temps",
              consigne: "On a plongé un tube d'eau pure dans un mélange de glace et de sel, et relevé la température chaque minute. Place les points du tableau sur le quadrillage.",
              x: { nom: "Temps", unite: "min", min: 0, max: 8, pas: 1 },
              y: { nom: "Température", unite: "°C", min: -8, max: 18, pas: 2 },
              points: [[0, 16], [1, 10], [2, 4], [3, 0], [4, 0], [5, 0], [6, 0], [7, -4], [8, -6]],
              questions: [
                { q: "Quel titre convient à ce graphique ?", options: ["Évolution de la température en fonction du temps", "Évolution du temps en fonction de la température", "La glace"], bonne: 0, e: "On nomme d'abord ce qu'on mesure (axe vertical), puis « en fonction de » ce qui est sur l'axe horizontal." },
                { q: "À quelle température la courbe forme-t-elle un palier ?", options: ["0 °C", "4 °C", "−4 °C"], bonne: 0, e: "Le palier est la partie horizontale : la température ne bouge plus." },
                { q: "Combien de temps dure le palier ?", options: ["3 minutes", "6 minutes", "1 minute"], bonne: 0, e: "Il commence à 3 min et s'arrête à 6 min : 6 − 3 = 3 minutes." },
                { q: "Que se passe-t-il pendant le palier ?", options: ["L'eau se transforme en glace : il y a du liquide et du solide", "L'eau bout", "Rien du tout"], bonne: 0, e: "C'est la solidification. Tant qu'elle n'est pas finie, la température reste à 0 °C." },
                { q: "À 8 minutes, dans quel état est l'eau ?", options: ["Solide : c'est de la glace", "Liquide", "Gazeux"], bonne: 0, e: "Après le palier, toute l'eau a gelé, et la glace continue de refroidir." },
                { q: "Ce palier à 0 °C nous apprend que…", options: ["c'est sûrement de l'eau pure", "c'est de l'eau salée", "c'est de l'huile"], bonne: 0, e: "Un palier net à 0 °C est la signature de l'eau pure qui gèle." }
              ] },
            { titre: "Évolution de la température de l'eau en fonction du temps",
              consigne: "On chauffe de l'eau pure dans une casserole et on relève la température chaque minute. Place les points du tableau sur le quadrillage.",
              x: { nom: "Temps", unite: "min", min: 0, max: 8, pas: 1 },
              y: { nom: "Température", unite: "°C", min: 0, max: 110, pas: 10 },
              points: [[0, 20], [1, 40], [2, 60], [3, 80], [4, 100], [5, 100], [6, 100], [7, 100]],
              questions: [
                { q: "Quel titre convient à ce graphique ?", options: ["Évolution de la température en fonction du temps", "Évolution du temps en fonction de la température", "La casserole"], bonne: 0, e: "Ce qu'on mesure, « en fonction de » ce qu'on a choisi." },
                { q: "Quelle était la température au départ ?", options: ["20 °C", "0 °C", "100 °C"], bonne: 0, e: "On lit la valeur à 0 min." },
                { q: "De combien la température monte-t-elle chaque minute, avant le palier ?", options: ["20 °C", "10 °C", "40 °C"], bonne: 0, e: "20, 40, 60, 80 : + 20 °C à chaque minute." },
                { q: "À quelle température se trouve le palier ?", options: ["100 °C", "80 °C", "20 °C"], bonne: 0, e: "L'eau pure bout à 100 °C." },
                { q: "À partir de quelle minute l'eau bout-elle ?", options: ["4 min", "0 min", "7 min"], bonne: 0 },
                { q: "Pendant le palier, l'eau…", options: ["bout : elle se transforme en vapeur", "gèle", "ne change pas d'état"], bonne: 0, e: "C'est la vaporisation. Toute l'énergie du feu sert à changer l'eau en vapeur." }
              ] }
          ] },
        { id: "j-pc-demarche", type: "ordre", niveau: 3, titre: "La démarche scientifique", consigne: "Remets les étapes de l'expérience dans l'ordre.", point: "La démarche expérimentale", revoir: "jp-pc-sulfate", nb: 2, libelle: "Expérience",
          series: [
            { titre: "Le jus d'orange contient-il de l'eau ?", explication: "Question, hypothèse, expérience, observation, conclusion : l'ordre de toute démarche scientifique.",
              etapes: [
                { t: "Y a-t-il de l'eau dans le jus d'orange ?", d: "Question" },
                { t: "Je pense que oui, car c'est un liquide qu'on boit.", d: "Hypothèse" },
                { t: "Avec lunettes et gants, je dépose quelques gouttes de jus sur du sulfate de cuivre anhydre.", d: "Expérience" },
                { t: "Le sulfate de cuivre devient bleu.", d: "Observation" },
                { t: "Le jus d'orange contient de l'eau : mon hypothèse est validée.", d: "Conclusion" }
              ] },
            { titre: "L'huile contient-elle de l'eau ?", explication: "Une hypothèse fausse n'est pas un échec : l'expérience a répondu à la question.",
              etapes: [
                { t: "L'huile de cuisine contient-elle de l'eau ?", d: "Question" },
                { t: "Je pense que oui, puisque c'est un liquide.", d: "Hypothèse" },
                { t: "Je dépose quelques gouttes d'huile sur du sulfate de cuivre anhydre, à côté d'un tas témoin.", d: "Expérience" },
                { t: "Le sulfate de cuivre reste blanc, comme le témoin.", d: "Observation" },
                { t: "L'huile ne contient pas d'eau : mon hypothèse était fausse.", d: "Conclusion" }
              ] },
            { titre: "L'eau prend-elle plus de place en gelant ?", explication: "La même démarche marche pour toutes les questions de sciences.",
              etapes: [
                { t: "L'eau prend-elle plus de place quand elle gèle ?", d: "Question" },
                { t: "Je pense qu'elle garde la même place.", d: "Hypothèse" },
                { t: "Je remplis un pot d'eau jusqu'à un trait, je le mets au congélateur, puis je regarde le niveau.", d: "Expérience" },
                { t: "La glace dépasse le trait.", d: "Observation" },
                { t: "En gelant, l'eau prend plus de place : mon hypothèse était fausse.", d: "Conclusion" }
              ] }
          ] }
      ],
      quiz: []
    },

    /* ============ 5. TECHNOLOGIE — pourquoi les objets évoluent ============ */
    {
      id: "jp-techno", matiere: "techno",
      titre: "Pourquoi les objets évoluent",
      objectif: "relier un objet à son usage, puis expliquer pourquoi il a changé au fil du temps.",
      resume: "Un objet change quand les besoins changent, ou quand une invention le rend possible. Le vélo, le téléphone et la lampe en sont les champions.",
      savaisTu: [
        "En 1815, l'éruption du volcan Tambora, en Indonésie, a refroidi le climat du monde entier. L'année suivante, les récoltes sont mauvaises et on manque d'avoine pour nourrir les chevaux. On raconte que c'est ce qui a poussé Karl Drais à inventer, en 1817, une machine pour se déplacer sans cheval : la draisienne.",
        "Le grand-bi avait une roue avant immense parce qu'il n'y avait pas de chaîne : un tour de pédale, un tour de roue. Plus la roue était grande, plus on allait vite… et plus on tombait de haut.",
        "Le premier appel avec un téléphone portable a été passé à New York en 1973 par Martin Cooper. Son appareil pesait plus d'un kilo, et sa batterie tenait à peine une demi-heure de conversation.",
        "Une lampe LED consomme beaucoup moins d'électricité qu'une ampoule à incandescence pour éclairer autant. C'est le besoin d'économiser l'énergie qui l'a imposée."
      ],
      missions: [
        { titre: "Les mots à connaître", etapes: [
          "**Besoin** : ce dont l'utilisateur a besoin ou envie : se déplacer, communiquer, s'éclairer.",
          "**Fonction d'usage** : à quoi sert l'objet. Elle répond à la question « À quoi ça sert ? ».",
          "**Solution technique** : comment l'objet réalise sa fonction. La chaîne transmet le mouvement des pédales à la roue.",
          "**Famille d'objets** : des objets qui ont la même fonction d'usage : tous les objets pour s'éclairer.",
          "**Lignée d'objets** : des objets d'une même famille, qui fonctionnent sur le même principe, rangés dans le temps : de la draisienne au vélo électrique.",
          "**OST** : objets et systèmes techniques."
        ] },
        { titre: "La phrase pour justifier une évolution", etapes: [
          "Je nomme l'objet avant et après : le grand-bi est devenu la bicyclette.",
          "Je dis quel **besoin** a poussé le changement : plus de sécurité, de confort, de vitesse, consommer moins, emporter partout.",
          "Je dis quel **progrès technique** l'a rendu possible : un nouveau matériau, une nouvelle source d'énergie, une nouvelle invention.",
          "J'assemble : « Le … a évolué pour répondre au besoin de …, grâce à … ».",
          "Exemple : « Le vélo a évolué pour répondre au besoin de **sécurité**, grâce à l'invention de **la chaîne**, qui a permis d'avoir deux roues de la même taille. »"
        ] }
      ],
      supports: [
        { id: "jp-te-besoins", titre: "Les objets techniques en réponse aux besoins", source: "Édith Éprouvette · Pass Éducation", type: "video", lien: "https://www.youtube.com/watch?v=3xS6VFzi5jI", etiquette: "niveau1", verifier: true, noteParent: "Leçon niveau CM1 de Pass Éducation : on repart de la base. À visionner avant d'ouvrir." },
        { id: "jp-te-pourquoi", titre: "Pourquoi les objets techniques évoluent-ils ?", source: "Technologie 6e · d'après Canopé", type: "video", lien: "https://www.youtube.com/watch?v=jnMM8nv5m70", etiquette: "niveau2", verifier: true, noteParent: "Vidéo Canopé remise en ligne par un professeur. À visionner avant d'ouvrir." },
        { id: "jp-te-possible", titre: "Qu'est-ce qui rend possible l'évolution des objets techniques ?", source: "Édith Éprouvette · Pass Éducation", type: "video", lien: "https://www.youtube.com/watch?v=fMb5e9Attvk", etiquette: "niveau2", verifier: true, noteParent: "Même série que la vidéo sur les besoins (Pass Éducation)." },
        { id: "jp-te-velo", titre: "L'incroyable histoire de l'invention du vélo", source: "Histoire en vidéo", type: "video", lien: "https://www.youtube.com/watch?v=KJmbJAWWt5s", etiquette: "niveau2", verifier: true, noteParent: "Raconte le lien entre l'éruption du Tambora et la draisienne. Chaîne non identifiée : à visionner avant d'ouvrir." },
        { id: "jp-te-portable", titre: "Depuis quand le téléphone portable existe-t-il ?", source: "1 jour, 1 question", type: "video", lien: "https://www.youtube.com/watch?v=0QnWm4WrRcg", etiquette: "niveau1", duree: "2 min" },
        { id: "jp-te-trottinette", titre: "Qui a inventé les trottinettes électriques ?", source: "1 jour, 1 question", type: "video", lien: "https://www.youtube.com/watch?v=LovrEo_Iepw", etiquette: "niveau1", duree: "2 min" }
      ],
      jeux: [
        { id: "j-te-usage", type: "memory", niveau: 1, titre: "Memory : l'objet et son usage", consigne: "Associe chaque objet à sa **fonction d'usage** : à quoi sert-il ?", point: "Relier un objet à son usage", revoir: "jp-te-besoins", nb: 6,
          paires: [
            ["Le vélo", "Se déplacer"], ["La lampe", "S'éclairer"], ["Le téléphone", "Communiquer à distance"],
            ["Le réfrigérateur", "Conserver les aliments au frais"], ["La montre", "Lire l'heure"], ["Le lave-linge", "Laver le linge"],
            ["Le parapluie", "Se protéger de la pluie"], ["Le casque de vélo", "Protéger la tête"]
          ] },
        { id: "j-te-frise", type: "ordre", niveau: 2, titre: "La frise des objets", consigne: "Du plus ancien au plus récent : touche les objets dans l'ordre.", point: "Situer l'évolution d'un objet", revoir: ["jp-te-velo", "jp-te-portable"], nb: 2, libelle: "Frise",
          series: [
            { titre: "La lignée du vélo", explication: "À chaque étape, un besoin (vitesse, sécurité, confort, moins d'effort) et un progrès technique.",
              etapes: [
                { t: "La draisienne", d: "1817", e: "On avance en poussant le sol avec les pieds." },
                { t: "Le vélocipède à pédales", d: "années 1860", e: "Les pédales sont fixées sur la roue avant." },
                { t: "Le grand-bi", d: "années 1870", e: "Une roue avant géante pour aller plus vite, mais on tombe de haut." },
                { t: "La bicyclette à chaîne", d: "1885", e: "Deux roues de même taille, la chaîne entraîne la roue arrière : plus sûr." },
                { t: "Le pneu gonflable", d: "1888", e: "De l'air dans un tube de caoutchouc : bien plus confortable." },
                { t: "Le VTT", d: "années 1970-1980", e: "Des vitesses, de bons freins et de gros pneus pour les chemins." },
                { t: "Le vélo à assistance électrique", d: "années 1990-2000", e: "Un moteur et une batterie aident à pédaler." }
              ] },
            { titre: "La lignée du téléphone", explication: "Le besoin de communiquer ne change pas ; ce qui change, c'est la façon de le faire, de plus en plus vite, et de partout.",
              etapes: [
                { t: "Le téléphone de Graham Bell", d: "1876", e: "Le premier brevet du téléphone." },
                { t: "Le téléphone mural à manivelle", d: "fin du XIXe siècle", e: "On tourne la manivelle pour appeler une opératrice, qui branche la ligne." },
                { t: "Le téléphone à cadran", d: "à partir des années 1920", e: "On compose soi-même le numéro : plus besoin d'opératrice." },
                { t: "Le téléphone à touches", d: "années 1970-1980", e: "Des touches à la place du cadran : plus rapide." },
                { t: "Le téléphone portable", d: "1973, puis pour tous dans les années 1990", e: "On peut appeler de partout, sans fil." },
                { t: "Le smartphone", d: "années 2000-2010", e: "Téléphone, appareil photo, GPS et Internet dans un seul objet." }
              ] },
            { titre: "La famille des objets pour s'éclairer", explication: "Moins de danger (plus de flamme), puis moins d'énergie consommée.",
              etapes: [
                { t: "La lampe à huile", d: "Antiquité", e: "Une mèche trempe dans l'huile et brûle." },
                { t: "La lampe à pétrole", d: "XIXe siècle", e: "Plus lumineuse, avec un verre qui protège la flamme." },
                { t: "L'ampoule à incandescence", d: "1879", e: "Un filament chauffé par l'électricité devient lumineux : plus de flamme." },
                { t: "La lampe fluocompacte", d: "années 1980", e: "Elle consomme moins, mais met du temps à bien éclairer." },
                { t: "La lampe LED", d: "années 2010", e: "Elle consomme très peu et dure très longtemps." }
              ] }
          ] },
        { id: "j-te-besoin", type: "tri", niveau: 3, titre: "Quel besoin a fait évoluer l'objet ?", consigne: "Cette évolution répond surtout à quel besoin ?", point: "Justifier une évolution par un besoin", revoir: "jp-te-pourquoi", nb: 10,
          boites: [ { id: "secu", t: "Sécurité", i: "🛡️" }, { id: "confort", t: "Confort", i: "🛋️" }, { id: "vite", t: "Aller plus vite, gagner du temps", i: "⚡" }, { id: "eco", t: "Consommer moins, protéger la planète", i: "🌍" }, { id: "partout", t: "Emporter partout", i: "🎒" } ],
          cartes: [
            { t: "La bicyclette à chaîne remplace le grand-bi, dont on tombait de très haut.", b: "secu" },
            { t: "Le pneu gonflable remplace la roue cerclée de fer.", b: "confort" },
            { t: "La lampe LED remplace l'ampoule à incandescence.", b: "eco" },
            { t: "Le téléphone devient portable.", b: "partout" },
            { t: "Le grand-bi a une roue avant géante.", b: "vite" },
            { t: "Les VTT reçoivent des freins à disque.", b: "secu" },
            { t: "Le lave-linge automatique remplace le lavage à la main.", b: "vite", e: "Des heures de travail gagnées chaque semaine." },
            { t: "La voiture électrique ne rejette pas de gaz en roulant.", b: "eco" },
            { t: "L'ordinateur portable remplace l'ordinateur de bureau.", b: "partout" },
            { t: "Le casque devient obligatoire à vélo pour les enfants.", b: "secu" },
            { t: "Le TGV relie Paris à Lyon en deux heures.", b: "vite" },
            { t: "Les sièges de voiture deviennent réglables et chauffants.", b: "confort" },
            { t: "La trottinette se plie pour entrer dans le bus.", b: "partout" }
          ] },
        { id: "j-te-progres", type: "tri", niveau: 3, titre: "Quel progrès l'a rendu possible ?", consigne: "Qu'est-ce qui a permis cette évolution ?", point: "Justifier une évolution par un progrès technique", revoir: "jp-te-possible", nb: 8,
          boites: [ { id: "mat", t: "Un nouveau matériau", i: "🧱" }, { id: "ener", t: "Une nouvelle source d'énergie", i: "🔋" }, { id: "inv", t: "Une nouvelle invention", i: "💡" } ],
          cartes: [
            { t: "Le cadre de vélo en carbone, très léger", b: "mat" },
            { t: "Le vélo à assistance électrique", b: "ener", e: "Une batterie fournit l'énergie au moteur." },
            { t: "La chaîne qui relie le pédalier à la roue arrière", b: "inv" },
            { t: "L'écran tactile du smartphone", b: "inv" },
            { t: "La batterie qui permet au téléphone de fonctionner sans fil", b: "ener" },
            { t: "La coque de téléphone en plastique au lieu du bois", b: "mat" },
            { t: "La lampe électrique qui remplace la lampe à huile", b: "ener", e: "On passe de l'huile qui brûle à l'électricité." },
            { t: "Le vêtement de sport en tissu synthétique qui sèche vite", b: "mat" },
            { t: "Le GPS qui donne la position grâce aux satellites", b: "inv" },
            { t: "La raquette de tennis en fibre de carbone au lieu du bois", b: "mat" },
            { t: "La voiture électrique", b: "ener" }
          ] }
      ],
      quiz: [
        { q: "La fonction d'usage d'un objet répond à la question…", options: ["« À quoi ça sert ? »", "« Comment est-il fabriqué ? »", "« Combien coûte-t-il ? »"], bonne: 0, explication: "Un vélo sert à se déplacer : c'est sa fonction d'usage.", point: "Relier un objet à son usage", revoir: "jp-te-besoins" },
        { q: "La fonction d'usage d'un vélo, c'est…", options: ["se déplacer", "avoir deux roues", "être en métal"], bonne: 0, explication: "Deux roues et le métal, ce sont des solutions techniques et des matériaux.", point: "Relier un objet à son usage" },
        { q: "Une solution technique, c'est…", options: ["la façon dont l'objet réalise une fonction", "le prix de l'objet", "la couleur de l'objet"], bonne: 0, explication: "La chaîne est la solution technique pour transmettre le mouvement.", point: "Relier un objet à son usage" },
        { q: "Une famille d'objets regroupe des objets qui…", options: ["ont la même fonction d'usage", "ont la même couleur", "ont été inventés la même année"], bonne: 0, explication: "Bougie, lampe à pétrole, LED : la famille des objets pour s'éclairer.", point: "Situer l'évolution d'un objet" },
        { q: "Une lignée d'objets, c'est…", options: ["des objets d'une même famille qui fonctionnent sur le même principe, rangés dans le temps", "des objets alignés sur une étagère", "des objets de marques différentes"], bonne: 0, explication: "De la draisienne au vélo électrique.", point: "Situer l'évolution d'un objet" },
        { q: "Que veut dire OST ?", options: ["Objets et systèmes techniques", "Outils scolaires et techniques", "Objets sans technologie"], bonne: 0, explication: "C'est le vocabulaire de ton bulletin.", point: "Relier un objet à son usage" },
        { q: "Pourquoi le grand-bi a-t-il été abandonné ?", options: ["Il était dangereux : on tombait de haut", "Il était trop lent", "Il coûtait trop cher"], bonne: 0, explication: "La bicyclette à chaîne, avec deux roues égales, répond au besoin de sécurité.", point: "Justifier une évolution par un besoin", revoir: "jp-te-velo" },
        { q: "Qu'est-ce qui a permis d'avoir deux roues de la même taille sans aller moins vite ?", options: ["La chaîne", "Le pneu gonflable", "Le moteur"], bonne: 0, explication: "Avec la chaîne, un tour de pédale fait faire plusieurs tours à la roue arrière.", point: "Justifier une évolution par un progrès technique" },
        { q: "« Le vélo a évolué pour répondre au besoin de …, grâce à l'invention du pneu gonflable. »", options: ["confort", "vitesse", "communication"], bonne: 0, explication: "L'air dans le pneu amortit les chocs.", point: "Justifier une évolution par un besoin" },
        { q: "Pour expliquer l'évolution d'un objet, je cite…", options: ["un besoin et un progrès technique", "seulement la date", "la couleur de l'objet"], bonne: 0, explication: "« pour répondre au besoin de…, grâce à… ».", point: "Justifier une évolution par un besoin" }
      ]
    },

    /* ============ 6. MUSIQUE — décrire une œuvre avec le bon vocabulaire ============ */
    {
      id: "jp-musique", matiere: "musique",
      titre: "Décrire une musique avec les bons mots",
      objectif: "écouter, puis dire précisément qui joue, à quelle vitesse, avec quelle force, et quelle émotion.",
      resume: "Six questions à se poser à chaque écoute, et des œuvres célèbres pour s'entraîner.",
      savaisTu: [
        "Dans Pierre et le loup, Prokofiev donne un instrument à chaque personnage : on reconnaît le loup aux cors avant même que le récitant ne le nomme.",
        "Le Boléro de Ravel répète les deux mêmes mélodies du début à la fin. Ce qui change, ce sont les instruments qui les jouent, et la puissance, qui ne fait qu'augmenter : un immense crescendo.",
        "Dans Le Carnaval des animaux, les Tortues dansent le célèbre French cancan d'Offenbach… mais joué très, très lentement. Changer le tempo suffit à rendre la musique drôle.",
        "Saint-Saëns trouvait Le Carnaval des animaux trop léger pour sa réputation. Il a interdit qu'on le publie de son vivant, sauf Le Cygne."
      ],
      missions: [
        { titre: "Les 6 questions de l'écoute", etapes: [
          "**Qui joue ?** La formation : soliste, duo, trio, quatuor, orchestre, chœur. Et quels instruments ou quelles voix.",
          "**À quelle vitesse ?** Le tempo : lento, moderato, allegro, presto.",
          "**Fort ou doux ?** La nuance : pp, p, mf, f, ff. Et si ça change : crescendo, decrescendo.",
          "**Quelle émotion ?** Le caractère : joyeux, triste, militaire, royal, féérique, effrayant, serein.",
          "**Comment c'est construit ?** La forme : AB, ABA, rondo, thème et variations, canon.",
          "**De quand ça date ?** L'époque : baroque, classique, romantique, moderne…",
          "La phrase modèle : « Cet extrait est joué par … Le tempo est … et la nuance … Son caractère est … parce que … »"
        ] }
      ],
      supports: [
        { id: "jp-mu-cordes", titre: "À la découverte de la famille des cordes", source: "Orchestre symphonique de Montréal", type: "video", lien: "https://www.youtube.com/watch?v=dYpMg8QuOo0", etiquette: "niveau1" },
        { id: "jp-mu-bois", titre: "La famille des bois", source: "Orchestre symphonique de Montréal", type: "video", lien: "https://www.youtube.com/watch?v=hneu1GEDKEc", etiquette: "niveau1" },
        { id: "jp-mu-percu", titre: "Dans la famille percussion", source: "Orchestre symphonique de Montréal", type: "video", lien: "https://www.youtube.com/watch?v=eQzkR9GI2bQ", etiquette: "niveau1" },
        { id: "jp-mu-pierre", titre: "Pierre et le loup, de Prokofiev (récitant : Lambert Wilson)", source: "Orchestre philharmonique de Radio France", type: "video", lien: "https://www.youtube.com/watch?v=eN4Iyb8HKjM", etiquette: "niveau2", note: "Long : écoute-le en plusieurs fois, l'appli garde ta place." },
        { id: "jp-mu-cygne", titre: "Le Carnaval des animaux : Le Cygne", source: "Orchestre philharmonique de Radio France", type: "video", lien: "https://www.youtube.com/watch?v=M2Wcjli8KvQ", etiquette: "niveau2" },
        { id: "jp-mu-tortues", titre: "Le Carnaval des animaux : Tortues", source: "Orchestre philharmonique de Radio France", type: "video", lien: "https://www.youtube.com/watch?v=4IPv-ORwRm0", etiquette: "niveau2" },
        { id: "jp-mu-lion", titre: "Le Carnaval des animaux : Marche royale du lion", source: "Orchestre philharmonique de Radio France", type: "video", lien: "https://www.youtube.com/watch?v=e46zRWyOazY", etiquette: "niveau2" },
        { id: "jp-mu-bolero", titre: "Le Boléro de Ravel", source: "Orchestre philharmonique de Radio France", type: "video", lien: "https://www.youtube.com/watch?v=6NDwT6SCfk4", etiquette: "niveau3", note: "Écoute qui joue la mélodie à chaque fois, et comment la force augmente." },
        { id: "jp-mu-caisse", titre: "Le rythme de caisse claire du Boléro", source: "Orchestre philharmonique de Radio France", type: "video", lien: "https://www.youtube.com/watch?v=AQH3ZFC64r4", etiquette: "plusloin" }
      ],
      jeux: [
        { id: "j-mu-italien", type: "memory", niveau: 1, titre: "Memory des mots italiens", point: "Le vocabulaire du tempo et des nuances", nb: 6,
          paires: [
            ["piano", "doux"], ["forte", "fort"], ["pianissimo", "très doux"], ["fortissimo", "très fort"],
            ["crescendo", "de plus en plus fort"], ["decrescendo", "de moins en moins fort"], ["lento", "lent"],
            ["allegro", "rapide"], ["presto", "très rapide"], ["moderato", "modéré"], ["mezzo forte", "moyennement fort"]
          ] },
        { id: "j-mu-familles", type: "tri", niveau: 1, titre: "Quelle famille d'instruments ?", consigne: "Range l'instrument dans sa famille.", point: "Les familles d'instruments", revoir: ["jp-mu-bois", "jp-mu-cordes"], nb: 10,
          boites: [ { id: "cordes", t: "Cordes", i: "🎻" }, { id: "bois", t: "Bois", i: "🌬️" }, { id: "cuivres", t: "Cuivres", i: "🎺" }, { id: "percu", t: "Percussions", i: "🥁" }, { id: "clav", t: "Claviers", i: "🎹" } ],
          cartes: [
            { t: "le violon", b: "cordes" }, { t: "l'alto", b: "cordes" }, { t: "le violoncelle", b: "cordes" }, { t: "la contrebasse", b: "cordes" }, { t: "la harpe", b: "cordes", e: "Ses cordes sont pincées." },
            { t: "la flûte traversière", b: "bois", e: "Elle est en métal, mais c'est bien un bois : on souffle sur un trou, sans embouchure de cuivre." },
            { t: "le hautbois", b: "bois" }, { t: "la clarinette", b: "bois" }, { t: "le basson", b: "bois" },
            { t: "le saxophone", b: "bois", e: "En métal lui aussi, mais il a une anche en roseau : c'est un bois." },
            { t: "la trompette", b: "cuivres" }, { t: "le cor", b: "cuivres" }, { t: "le trombone", b: "cuivres" }, { t: "le tuba", b: "cuivres" },
            { t: "les timbales", b: "percu" }, { t: "la caisse claire", b: "percu" }, { t: "la grosse caisse", b: "percu" }, { t: "le triangle", b: "percu" },
            { t: "le xylophone", b: "percu", e: "Il joue des notes, mais on le frappe : percussion." },
            { t: "le piano", b: "clav", e: "Ses cordes sont frappées par des marteaux, mais on le joue avec un clavier." },
            { t: "le clavecin", b: "clav", e: "Un clavier dont les cordes sont pincées." }, { t: "l'orgue", b: "clav" }
          ] },
        { id: "j-mu-cases", type: "tri", niveau: 2, titre: "Range le mot dans la bonne case", consigne: "Ce mot sert à décrire…", point: "Le vocabulaire pour analyser une œuvre", nb: 10,
          boites: [ { id: "tempo", t: "le tempo (vitesse)", i: "⏱️" }, { id: "nuance", t: "la nuance (force)", i: "🔊" }, { id: "form", t: "la formation (qui joue)", i: "👥" }, { id: "carac", t: "le caractère (émotion)", i: "🎭" }, { id: "forme", t: "la forme (structure)", i: "🧱" } ],
          cartes: [
            { t: "allegro", b: "tempo" }, { t: "lento", b: "tempo" }, { t: "presto", b: "tempo" }, { t: "moderato", b: "tempo" },
            { t: "forte", b: "nuance" }, { t: "pianissimo", b: "nuance" }, { t: "crescendo", b: "nuance" }, { t: "mezzo forte", b: "nuance" },
            { t: "quatuor", b: "form" }, { t: "soliste", b: "form" }, { t: "orchestre", b: "form" }, { t: "chœur", b: "form" }, { t: "trio", b: "form" },
            { t: "majestueux", b: "carac" }, { t: "mélancolique", b: "carac" }, { t: "joyeux", b: "carac" }, { t: "effrayant", b: "carac" }, { t: "féérique", b: "carac" },
            { t: "rondo", b: "forme" }, { t: "canon", b: "forme" }, { t: "ABA", b: "forme" }, { t: "thème et variations", b: "forme" }
          ] },
        { id: "j-mu-pierre", type: "memory", niveau: 2, titre: "Pierre et le loup : qui joue qui ?", point: "Reconnaître les timbres", revoir: "jp-mu-pierre", nb: 6,
          paires: [
            ["Pierre", "les cordes (le quatuor)"], ["L'oiseau", "la flûte traversière"], ["Le canard", "le hautbois"],
            ["Le chat", "la clarinette"], ["Le grand-père", "le basson"], ["Le loup", "les trois cors"], ["Les chasseurs", "les timbales et la grosse caisse"]
          ] },
        { id: "j-mu-epoques", type: "ordre", niveau: 2, titre: "Les époques de la musique", consigne: "De la plus ancienne à la plus récente.", point: "Situer une œuvre dans le temps", nb: 2, libelle: "Frise",
          series: [
            { titre: "Les grandes périodes", explication: "Moyen Âge, Renaissance, baroque, classique, romantique, moderne, contemporain : c'est l'ordre de ta fiche.",
              etapes: [
                { t: "Moyen Âge", d: "du Ve au XVe siècle", e: "Le chant grégorien." },
                { t: "Renaissance", d: "XVIe siècle", e: "Le luth." },
                { t: "Baroque", d: "1600 à 1750", e: "Le clavecin. Vivaldi, Bach." },
                { t: "Classique", d: "1750 à 1800", e: "Mozart, Haydn." },
                { t: "Romantique", d: "XIXe siècle", e: "Le piano. Chopin, Saint-Saëns." },
                { t: "Moderne", d: "1900 à 1950", e: "Le jazz. Ravel, Prokofiev." },
                { t: "Contemporain", d: "depuis 1950" }
              ] },
            { titre: "Ces œuvres célèbres", explication: "Une date suffit pour retrouver l'époque d'une œuvre.",
              etapes: [
                { t: "Les Quatre Saisons, de Vivaldi", d: "1725", e: "Baroque." },
                { t: "La Petite Musique de nuit, de Mozart", d: "1787", e: "Classique." },
                { t: "Le Carnaval des animaux, de Saint-Saëns", d: "1886", e: "Romantique." },
                { t: "Le Boléro, de Ravel", d: "1928", e: "Moderne." },
                { t: "Pierre et le loup, de Prokofiev", d: "1936", e: "Moderne." }
              ] }
          ] },
        { id: "j-mu-ecoute", type: "eclair", niveau: 3, titre: "Défi d'écoute", duree: 0, nb: 8, consigne: "Écoute d'abord les vidéos de ce module, puis réponds avec les bons mots.", point: "Analyser une œuvre avec un vocabulaire précis", revoir: ["jp-mu-bolero", "jp-mu-cygne"],
          questions: [
            { q: "Le Cygne : quel instrument joue la mélodie ?", options: ["le violoncelle", "la trompette", "la flûte"], bonne: 0, e: "Un violoncelle soliste, accompagné par deux pianos." },
            { q: "Le Cygne : quel est le tempo ?", options: ["lent", "rapide", "très rapide"], bonne: 0 },
            { q: "Le Cygne : quel est son caractère ?", options: ["serein", "militaire", "effrayant"], bonne: 0, e: "Calme, paisible, comme le cygne qui glisse sur l'eau." },
            { q: "Tortues : le French cancan y est joué…", options: ["très lentement", "très vite", "à l'envers"], bonne: 0, e: "Un air de danse endiablé devient lent comme une tortue : c'est l'humour de Saint-Saëns." },
            { q: "Marche royale du lion : quel est son caractère ?", options: ["royal, majestueux", "féérique", "mélancolique"], bonne: 0 },
            { q: "Boléro : quel instrument répète le même rythme du début à la fin ?", options: ["la caisse claire", "le piano", "la harpe"], bonne: 0 },
            { q: "Boléro : comment évolue la nuance ?", options: ["un long crescendo, du très doux au très fort", "elle reste toujours piano", "de plus en plus doux"], bonne: 0 },
            { q: "Un rythme répété sans arrêt pendant tout un morceau s'appelle…", options: ["un ostinato", "un canon", "un refrain"], bonne: 0, e: "Ostinato vient de l'italien : obstiné, têtu." },
            { q: "Boléro : qu'est-ce qui change d'un passage à l'autre ?", options: ["les instruments qui jouent la mélodie : le timbre", "la mélodie elle-même", "le tempo"], bonne: 0, e: "La mélodie reste la même ; elle passe de la flûte à la clarinette, au basson… jusqu'à tout l'orchestre." },
            { q: "Pierre et le loup : quelle est la formation ?", options: ["un orchestre symphonique et un récitant", "un quatuor à cordes", "un chœur d'enfants"], bonne: 0 },
            { q: "Le Boléro (1928) et Pierre et le loup (1936) appartiennent à la période…", options: ["moderne", "baroque", "romantique"], bonne: 0, e: "De 1900 à 1950." },
            { q: "Le Carnaval des animaux (1886) appartient à la période…", options: ["romantique", "baroque", "contemporaine"], bonne: 0, e: "Le XIXe siècle." },
            { q: "Pierre et le loup : quel instrument représente l'oiseau ?", options: ["la flûte traversière", "le basson", "le cor"], bonne: 0, e: "Aiguë et agile, comme un oiseau." }
          ] }
      ],
      quiz: []
    },

    /* ============ 7. ESPAGNOL — prononcer, mémoriser, écrire ============ */
    {
      id: "jp-espagnol", matiere: "espagnol",
      titre: "Parler et écrire en espagnol sans stress",
      objectif: "bien prononcer, mémoriser le vocabulaire et écrire des phrases simples sans erreur.",
      resume: "Des sons, des mots, puis des phrases : on construit petit à petit, en jouant.",
      savaisTu: [
        "En espagnol, presque toutes les lettres se prononcent : le « e » se dit toujours « é » et le « u » se dit « ou ». Une fois les sons connus, on peut lire presque n'importe quel mot.",
        "Le point d'exclamation et le point d'interrogation à l'envers, ¡ et ¿, annoncent dès le début de la phrase le ton à prendre. Pratique pour lire à voix haute !",
        "Astuce de mémoire : dire un mot à voix haute, l'écrire une fois, puis le réutiliser le lendemain marche mieux que le relire dix fois de suite."
      ],
      missions: [
        { titre: "Écrire trois phrases sur soi, sans erreur", etapes: [
          "**Me llamo…** : je m'appelle…",
          "**Tengo … años** : j'ai … ans. Avec le verbe tener, comme « avoir » en français.",
          "**Vivo en…** : j'habite à…",
          "**Me gusta** + un nom au singulier ou un verbe : me gusta el chocolate, me gusta leer. **Me gustan** + un nom au pluriel : me gustan los gatos.",
          "**Ma liste de vérification** : ¡ et ¿ au début des phrases, les accents écrits, une majuscule aux prénoms et aux villes, mais pas aux jours ni aux mois."
        ] }
      ],
      supports: [
        { id: "jp-es-sons", titre: "Les sons propres à l'espagnol (rappel)", source: "Prononciation", type: "video", lienDe: "es-sons", etiquette: "niveau1", note: "La vidéo de l'onglet Espagnol : j, ll, ñ et r roulé." },
        { id: "jp-es-alfabeto", titre: "L'alphabet espagnol (rappel)", source: "Cours d'espagnol pour débutants", type: "video", lienDe: "es-alfabeto-video", etiquette: "niveau1" },
        { id: "jp-es-presentar", titre: "Se présenter en espagnol en moins de 10 minutes", source: "Espagnol débutant", type: "video", lien: "https://www.youtube.com/watch?v=Ms3im3NSBS4", etiquette: "niveau2", verifier: true, noteParent: "Cours d'un professeur francophone, niveau débutant. À visionner avant d'ouvrir." }
      ],
      jeux: [
        { id: "j-es-saludos", type: "memory", niveau: 1, titre: "Memory : los saludos", point: "Le vocabulaire des salutations", revoir: "es-saludos", nb: 6,
          paires: [
            ["¡Hola!", "Salut !"], ["Buenos días", "Bonjour (le matin)"], ["Buenas tardes", "Bon après-midi"], ["Buenas noches", "Bonne nuit, bonsoir"],
            ["¡Adiós!", "Au revoir !"], ["¡Hasta luego!", "À plus tard !"], ["¡Hasta mañana!", "À demain !"], ["¿Qué tal?", "Comment ça va ?"],
            ["Gracias", "Merci"], ["Por favor", "S'il te plaît"], ["¿Cómo te llamas?", "Comment t'appelles-tu ?"], ["Me llamo…", "Je m'appelle…"]
          ] },
        { id: "j-es-fechas", type: "memory", niveau: 1, titre: "Memory : los días y los meses", point: "Les jours et les mois", nb: 6,
          paires: [
            ["lunes", "lundi"], ["martes", "mardi"], ["miércoles", "mercredi"], ["jueves", "jeudi"], ["viernes", "vendredi"], ["sábado", "samedi"],
            ["domingo", "dimanche"], ["enero", "janvier"], ["febrero", "février"], ["mayo", "mai"], ["junio", "juin"], ["julio", "juillet"], ["agosto", "août"]
          ] },
        { id: "j-es-tonica", type: "tri", niveau: 2, titre: "Aguda, llana ou esdrújula ?", consigne: "Où tombe la syllabe qu'on prononce le plus fort ?", point: "La syllabe tonique", revoir: "es-sons", nb: 10,
          boites: [ { id: "ag", t: "Aguda : la dernière syllabe", i: "➡️" }, { id: "ll", t: "Llana : l'avant-dernière", i: "⏺️" }, { id: "es", t: "Esdrújula : l'antépénultième", i: "⬅️" } ],
          cartes: [
            { t: "café", b: "ag", e: "ca-FÉ" }, { t: "camión", b: "ag", e: "ca-MIÓN" }, { t: "español", b: "ag", e: "es-pa-ÑOL : aguda qui finit par l, donc pas d'accent écrit." },
            { t: "hablar", b: "ag", e: "ha-BLAR : tous les infinitifs sont des agudas." }, { t: "inglés", b: "ag", e: "in-GLÉS" }, { t: "ciudad", b: "ag", e: "ciu-DAD" }, { t: "reloj", b: "ag", e: "re-LOJ" },
            { t: "casa", b: "ll", e: "CA-sa" }, { t: "lápiz", b: "ll", e: "LÁ-piz : llana qui finit par z, donc accent écrit." }, { t: "árbol", b: "ll", e: "ÁR-bol" },
            { t: "libro", b: "ll", e: "LI-bro" }, { t: "hablan", b: "ll", e: "HA-blan : llana qui finit par n, pas d'accent écrit." }, { t: "amigo", b: "ll", e: "a-MI-go" }, { t: "examen", b: "ll", e: "e-XA-men" },
            { t: "música", b: "es", e: "MÚ-si-ca" }, { t: "sábado", b: "es", e: "SÁ-ba-do" }, { t: "teléfono", b: "es", e: "te-LÉ-fo-no" }, { t: "miércoles", b: "es", e: "MIÉR-co-les" },
            { t: "rápido", b: "es", e: "RÁ-pi-do" }, { t: "pájaro", b: "es", e: "PÁ-ja-ro" }
          ] },
        { id: "j-es-comose", type: "eclair", niveau: 2, titre: "¿Cómo se dice?", duree: 60, etoiles: [5, 9, 13], consigne: "Comment dit-on en espagnol… ?", point: "Le vocabulaire de base", revoir: "jp-es-presentar",
          questions: [
            { q: "Bonjour (le matin)", options: ["Buenos días", "Buenas noches", "Adiós"], bonne: 0 },
            { q: "Merci", options: ["Gracias", "Por favor", "De nada"], bonne: 0 },
            { q: "Je m'appelle Lucía.", options: ["Me llamo Lucía.", "Me llama Lucía.", "Te llamo Lucía."], bonne: 0 },
            { q: "J'ai treize ans.", options: ["Tengo trece años.", "Soy trece años.", "Hay trece años."], bonne: 0, e: "Comme en français, on « a » ses années : verbe tener." },
            { q: "lundi", options: ["lunes", "martes", "luna"], bonne: 0 },
            { q: "dimanche", options: ["domingo", "sábado", "día"], bonne: 0 },
            { q: "mercredi", options: ["miércoles", "martes", "jueves"], bonne: 0 },
            { q: "janvier", options: ["enero", "junio", "julio"], bonne: 0 },
            { q: "Comment ça va ?", options: ["¿Qué tal?", "¿Qué hora es?", "¿Dónde está?"], bonne: 0 },
            { q: "Au revoir !", options: ["¡Adiós!", "¡Hola!", "¡Gracias!"], bonne: 0 },
            { q: "À demain !", options: ["¡Hasta mañana!", "¡Hasta luego!", "¡Buenos días!"], bonne: 0 },
            { q: "J'habite à Issoire.", options: ["Vivo en Issoire.", "Soy en Issoire.", "Tengo en Issoire."], bonne: 0 },
            { q: "J'aime le chocolat.", options: ["Me gusta el chocolate.", "Me gustan el chocolate.", "Yo gusta chocolate."], bonne: 0, e: "Un nom au singulier → me gusta." },
            { q: "J'aime les chats.", options: ["Me gustan los gatos.", "Me gusta los gatos.", "Me gusto los gatos."], bonne: 0, e: "Un nom au pluriel → me gustan." },
            { q: "S'il te plaît", options: ["Por favor", "De nada", "Perdón"], bonne: 0 },
            { q: "Comment t'appelles-tu ?", options: ["¿Cómo te llamas?", "¿Cómo estás?", "¿Cuántos años tienes?"], bonne: 0 },
            { q: "Quel âge as-tu ?", options: ["¿Cuántos años tienes?", "¿Cómo te llamas?", "¿Dónde vives?"], bonne: 0 },
            { q: "Où habites-tu ?", options: ["¿Dónde vives?", "¿Cómo vives?", "¿Cuándo vives?"], bonne: 0 },
            { q: "Quelle est la date aujourd'hui ?", options: ["¿Qué fecha es hoy?", "¿Qué hora es?", "¿Qué tal hoy?"], bonne: 0 }
          ] },
        { id: "j-es-frases", type: "ordre", niveau: 3, titre: "Reconstruis la phrase", consigne: "Touche les mots dans l'ordre pour reconstruire la phrase.", point: "Écrire une phrase simple", nb: 3, libelle: "Phrase",
          series: [
            { mots: true, etapes: ["Me", "llamo", "Lucía", "y", "tengo", "trece", "años."], trad: "Je m'appelle Lucía et j'ai treize ans." },
            { mots: true, etapes: ["¿Cómo", "te", "llamas?"], trad: "Comment t'appelles-tu ?" },
            { mots: true, etapes: ["Vivo", "en", "Issoire,", "en", "Francia."], trad: "J'habite à Issoire, en France." },
            { mots: true, etapes: ["Me", "gusta", "el", "chocolate", "pero", "no", "me", "gusta", "el", "té."], trad: "J'aime le chocolat mais je n'aime pas le thé." },
            { mots: true, etapes: ["Hoy", "es", "lunes", "doce", "de", "octubre."], trad: "Aujourd'hui, c'est lundi 12 octobre." },
            { mots: true, etapes: ["Mi", "cumpleaños", "es", "en", "mayo."], trad: "Mon anniversaire est en mai." },
            { mots: true, etapes: ["¡Hasta", "mañana,", "profesora!"], trad: "À demain, madame !" },
            { mots: true, etapes: ["Mi", "color", "favorito", "es", "el", "azul."], trad: "Ma couleur préférée est le bleu." }
          ] }
      ],
      quiz: [
        { q: "En espagnol, une question commence par…", options: ["¿", "?", "rien de spécial"], bonne: 0, explication: "¿Cómo te llamas? : un point d'interrogation à l'envers au début, un à l'endroit à la fin.", point: "Écrire une phrase simple" },
        { q: "« J'ai 13 ans » se dit…", options: ["Tengo trece años", "Soy trece años", "Estoy trece años"], bonne: 0, explication: "Avec tener, le verbe avoir.", point: "Écrire une phrase simple" },
        { q: "« Me gusta » s'emploie avec…", options: ["un nom au singulier ou un verbe", "un nom au pluriel", "seulement des personnes"], bonne: 0, explication: "Me gusta el chocolate, me gusta leer.", point: "Écrire une phrase simple" },
        { q: "« Me gustan » s'emploie avec…", options: ["un nom au pluriel", "un nom au singulier", "un verbe"], bonne: 0, explication: "Me gustan los gatos.", point: "Écrire une phrase simple" },
        { q: "Les jours et les mois prennent-ils une majuscule en espagnol ?", options: ["Non : lunes, enero", "Oui : Lunes, Enero", "Seulement les mois"], bonne: 0, explication: "Comme en français, d'ailleurs.", point: "Les jours et les mois" },
        { q: "La lettre « j » de « jamón » se prononce…", options: ["comme un « r » raclé au fond de la gorge", "comme le « j » de « jour »", "elle est muette"], bonne: 0, explication: "C'est la jota.", point: "La prononciation" },
        { q: "La lettre « ñ » se prononce…", options: ["« gn », comme dans « montagne »", "« n » tout simple", "elle est muette"], bonne: 0, explication: "España, mañana.", point: "La prononciation" },
        { q: "Le « u » espagnol se prononce…", options: ["« ou »", "« u » comme en français", "il est toujours muet"], bonne: 0, explication: "Música se dit « moussica ».", point: "La prononciation" },
        { q: "Le « ll » de « llamo » se prononce à peu près…", options: ["comme un « y »", "comme deux « l »", "il est muet"], bonne: 0, explication: "Me llamo se dit à peu près « mé yamo ».", point: "La prononciation" }
      ]
    }
  ]
});
