matiere({
  id: "maths", nom: "Mathématiques", couleur: "#6547C9", icone: "📐",
  chapitres: [
    {
      id: "ma-relatifs",
      titre: "Nombres relatifs et repérage",
      resume: "Nombres positifs et négatifs, droite graduée, coordonnées dans un repère.",
      savaisTu: [
        "« Abscisse » vient du latin abscissa, la ligne coupée. Le mot est employé par Leibniz en 1692.",
        "On dit « repère cartésien » en l'honneur de René Descartes, qui a eu l'idée de repérer des points avec des nombres.",
        "Au sommet du mont Blanc, il fait souvent −20 °C l'hiver. Au fond de la mer Morte, on est à environ 430 m sous le niveau de la mer : une altitude négative."
      ],
      supports: [
        { id: "ma-droite", titre: "Placer des nombres relatifs sur une droite graduée", source: "Maths et tiques · Yvan Monka", type: "video", lien: "https://www.youtube.com/watch?v=SImiMoRB0vU", etiquette: "consolider", duree: "5 min" },
        { id: "ma-comparer", titre: "Comparer des nombres relatifs", source: "Maths et tiques · Yvan Monka", type: "video", lien: "https://www.youtube.com/watch?v=DYbRr4B42h8", etiquette: "consolider" },
        { id: "ma-repere", titre: "Placer des points dans un repère", source: "Maths et tiques · Yvan Monka", type: "video", lien: "https://www.youtube.com/watch?v=AHNYuKCoCvU", etiquette: "consolider" },
        { id: "ma-coord", titre: "Exercice : placer des points et lire des coordonnées", source: "Maths et tiques · Yvan Monka", type: "video", lien: "https://www.youtube.com/watch?v=kAtwKV3DqKI", etiquette: "consolider" },
        { id: "ma-cours", titre: "Le cours complet : nombres relatifs", source: "Maths et tiques · Yvan Monka", type: "video", lien: "https://www.youtube.com/watch?v=YivvFtSuzno", etiquette: "consolider", duree: "plus de 20 min", note: "Long : regarde-le en plusieurs fois, l'appli garde ta place." },
        { id: "ma-histoire", titre: "L'histoire des nombres négatifs", type: "video", lien: "", etiquette: "plusloin", noteParent: "Vidéo encore à trouver." }
      ],
      quiz: [
        { q: "Lequel de ces nombres est négatif ?", options: ["−3", "3", "0,5"], bonne: 0, explication: "Un nombre négatif s'écrit avec le signe − et se place à gauche de zéro.", point: "Nombres positifs et négatifs", revoir: "ma-cours" },
        { q: "Le nombre 0 est…", options: ["à la fois positif et négatif", "seulement positif", "seulement négatif"], bonne: 0, explication: "Zéro est le seul nombre qui est à la fois positif et négatif.", point: "Nombres positifs et négatifs", revoir: "ma-cours" },
        { q: "Quel est l'opposé de −7 ?", options: ["7", "−7", "0"], bonne: 0, explication: "Deux nombres opposés sont à la même distance de zéro, de part et d'autre : −7 et 7.", point: "L'opposé d'un nombre", revoir: "ma-cours" },
        { q: "Compare −5 et −2.", options: ["−5 < −2", "−5 > −2"], bonne: 0, explication: "Sur la droite graduée, −5 est plus à gauche que −2, donc il est plus petit.", point: "Comparer des relatifs", revoir: "ma-comparer" },
        { q: "Compare −2,5 et −2,7.", options: ["−2,5 > −2,7", "−2,5 < −2,7"], bonne: 0, explication: "−2,7 est plus loin de zéro vers la gauche : c'est lui le plus petit.", point: "Comparer des relatifs", revoir: "ma-comparer" },
        { q: "Quel est le bon rangement du plus petit au plus grand ?", options: ["−4 < −1 < 0 < 1", "−1 < −4 < 0 < 1", "0 < −1 < 1 < −4"], bonne: 0, explication: "On lit la droite graduée de gauche à droite : −4, puis −1, puis 0, puis 1.", point: "Comparer des relatifs", revoir: "ma-comparer" },
        { q: "Quelle température est la plus froide ?", options: ["−8 °C", "−3 °C"], bonne: 0, explication: "−8 est plus petit que −3 : il fait plus froid à −8 °C.", point: "Comparer des relatifs", revoir: "ma-comparer" },
        { q: "Sur une droite graduée, l'abscisse d'un point, c'est…", options: ["le nombre qui repère sa position", "la longueur de la droite", "le nom du point"], bonne: 0, explication: "Chaque point de la droite graduée est repéré par un nombre : son abscisse.", point: "Abscisse sur une droite graduée", revoir: "ma-droite" },
        { q: "Dans un repère, le point A a pour coordonnées (3 ; −2). Quelle est son abscisse ?", options: ["3", "−2"], bonne: 0, explication: "On écrit toujours l'abscisse en premier, puis l'ordonnée.", point: "Coordonnées dans un repère", revoir: "ma-repere" },
        { q: "Pour placer B(−4 ; 1), en partant de l'origine, on se déplace…", options: ["de 4 vers la gauche, puis de 1 vers le haut", "de 4 vers le bas, puis de 1 vers la droite", "de 1 vers la gauche, puis de 4 vers le haut"], bonne: 0, explication: "L'abscisse −4 se lit sur l'axe horizontal (vers la gauche), l'ordonnée 1 sur l'axe vertical (vers le haut).", point: "Coordonnées dans un repère", revoir: "ma-coord" },
        { q: "Quelles sont les coordonnées de l'origine du repère ?", options: ["(0 ; 0)", "(1 ; 1)", "(0 ; 1)"], bonne: 0, explication: "L'origine est le point où les deux axes se croisent : abscisse 0 et ordonnée 0.", point: "Coordonnées dans un repère", revoir: "ma-repere" },
        { q: "Le point C(0 ; 5) se trouve…", options: ["sur l'axe des ordonnées", "sur l'axe des abscisses"], bonne: 0, explication: "Son abscisse vaut 0 : on ne bouge pas vers la gauche ni vers la droite, on reste sur l'axe vertical.", point: "Coordonnées dans un repère", revoir: "ma-coord" }
      ]
    },
    {
      id: "ma-decimaux",
      titre: "Multiplier et diviser par 10, 100, 0,1, 0,01",
      resume: "Le déplacement de la virgule, et les automatismes du début de séance.",
      savaisTu: [
        "Multiplier par 0,1, c'est diviser par 10. Deux opérations qui semblent opposées donnent le même résultat : c'est ce qui rend la notion déroutante.",
        "Le mot « décimal » vient du latin decem, dix. Tout notre système de nombres est construit sur des paquets de dix, et c'est pour cela que la virgule se déplace si simplement.",
        "Une astuce de vérification qui ne trompe pas : si on multiplie par un nombre plus petit que 1, le résultat doit être plus petit que le nombre de départ. Si on divise par un nombre plus petit que 1, il doit être plus grand."
      ],
      supports: [
        { id: "ma-mult01", titre: "Multiplier par 0,1", source: "Yvan Monka", type: "video", lien: "https://youtu.be/XFXZJgOcOzY", etiquette: "consolider", duree: "3 min", note: "Court et centré sur l'astuce : multiplier par 0,1 revient à diviser par 10." },
        { id: "ma-mult10", titre: "Multiplier par 10, 100, 1000", source: "Yvan Monka", type: "video", lien: "https://youtu.be/pPnCPmWGqyo", etiquette: "consolider", duree: "4 min", note: "La règle des rangs, avant d'attaquer 0,1 et 0,01." }
      ],
      quiz: [
        { q: "Multiplier un nombre par 0,1, c'est la même chose que…", options: ["le diviser par 10", "le multiplier par 10", "lui ajouter 10"], bonne: 0, explication: "0,1, c'est un dixième. Prendre un dixième d'un nombre, c'est le diviser par 10.", point: "Multiplier par 0,1", revoir: "ma-mult01", fixe: true },
        { q: "Multiplier par 0,01, c'est…", options: ["diviser par 100", "diviser par 10", "multiplier par 100"], bonne: 0, explication: "0,01, c'est un centième : deux zéros dans 100, deux rangs vers la droite.", point: "Multiplier par 0,1", revoir: "ma-mult01", fixe: true },
        { q: "Diviser par 0,1, c'est…", options: ["multiplier par 10", "diviser par 10", "multiplier par 0,1"], bonne: 0, explication: "Combien de dixièmes dans un nombre ? Dix fois plus : le résultat grandit.", point: "Diviser par 0,1", fixe: true },
        { q: "592 × 0,1 = …", options: ["59,2", "5920", "5,92"], bonne: 0, explication: "On divise par 10 : la virgule recule d'un rang.", point: "Multiplier par 0,1", revoir: "ma-mult01" },
        { q: "63 × 0,01 = …", options: ["0,63", "6,3", "630"], bonne: 0, explication: "Divisé par 100 : deux rangs vers la droite.", point: "Multiplier par 0,1", revoir: "ma-mult01" },
        { q: "1,2 × 0,001 = …", options: ["0,0012", "0,12", "1200"], bonne: 0, explication: "Trois zéros dans 1000, donc trois rangs.", point: "Multiplier par 0,1" },
        { q: "51 : 0,01 = …", options: ["5100", "0,51", "510"], bonne: 0, explication: "Diviser par 0,01 revient à multiplier par 100.", point: "Diviser par 0,1" },
        { q: "5,2 : 0,1 = …", options: ["52", "0,52", "520"], bonne: 0, explication: "Diviser par 0,1 revient à multiplier par 10.", point: "Diviser par 0,1" },
        { q: "312 × 0,001 et 312 : 1000 donnent…", options: ["le même résultat : 0,312", "des résultats différents", "0,312 et 312 000"], bonne: 0, explication: "C'est exactement la même opération, écrite de deux façons.", point: "Multiplier par 0,1" },
        { q: "On multiplie 45 par 0,1. Le résultat sera…", options: ["plus petit que 45", "plus grand que 45", "égal à 45"], bonne: 0, explication: "Multiplier par un nombre plus petit que 1 fait toujours diminuer. C'est le meilleur moyen de vérifier qu'on ne s'est pas trompé de sens.", point: "Vérifier son résultat", fixe: true },
        { q: "On divise 45 par 0,1. Le résultat sera…", options: ["plus grand que 45", "plus petit que 45", "égal à 45"], bonne: 0, explication: "Diviser par un nombre plus petit que 1 fait toujours grandir.", point: "Vérifier son résultat", fixe: true },
        { q: "21,23 × 0,1 = …", options: ["2,123", "212,3", "0,2123"], bonne: 0, explication: "Un seul rang vers la droite.", point: "Multiplier par 0,1", revoir: "ma-mult01" },
        { q: "6,3 : 100 = …", options: ["0,063", "0,63", "630"], bonne: 0, explication: "Deux rangs vers la droite : 6,3 devient 0,063.", point: "Diviser par 10 et 100", revoir: "ma-mult10" },
        { q: "0,012 × 100 = …", options: ["1,2", "0,12", "12"], bonne: 0, explication: "Deux rangs vers la gauche.", point: "Diviser par 10 et 100", revoir: "ma-mult10" }
      ]
    },
    {
      id: "ma-triangles",
      titre: "Construire des triangles et tracer la médiatrice",
      resume: "Les trois façons de construire un triangle, la médiatrice et sa propriété.",
      savaisTu: [
        "Le mot « médiatrice » est très récent : il a été formé en 1923 par une association de professeurs, à partir de « médiane » et de « bissectrice ». Media pour le milieu, sectrice pour couper.",
        "La propriété d'équidistance sert dans la vraie vie : pour placer une antenne à égale distance de deux villages, on la pose sur la médiatrice du segment qui les relie.",
        "Les trois médiatrices d'un triangle se coupent toujours en un seul et même point. Ce point est le centre du cercle qui passe par les trois sommets."
      ],
      supports: [
        { id: "ma-tri-cours", titre: "Géométrie du triangle : tout le cours", source: "Yvan Monka", type: "video", lien: "https://youtu.be/T4J7tNykV-o", etiquette: "decouvrir", note: "Le chapitre entier, à regarder en plusieurs fois." },
        { id: "ma-tri-3cotes", titre: "Construire un triangle dont on connaît les trois côtés", source: "Yvan Monka", type: "video", lien: "https://youtu.be/-7UGauYeTdk", etiquette: "consolider", duree: "5 min", note: "Au compas, étape par étape." },
        { id: "ma-tri-2cotes", titre: "Construire un triangle : deux côtés et un angle", source: "Yvan Monka", type: "video", lien: "https://youtu.be/6mFBqacFzws", etiquette: "consolider", duree: "5 min" },
        { id: "ma-tri-2angles", titre: "Construire un triangle : un côté et deux angles", source: "Yvan Monka", type: "video", lien: "https://youtu.be/tX-vhEtJJzY", etiquette: "consolider", duree: "5 min" },
        { id: "ma-med-equerre", titre: "Construire une médiatrice à l'équerre", source: "Yvan Monka", type: "video", lien: "https://youtu.be/aKy4obIcRCI", etiquette: "consolider", duree: "4 min" },
        { id: "ma-med-compas", titre: "Construire une médiatrice au compas", source: "Yvan Monka", type: "video", lien: "https://www.youtube.com/watch?v=9CCbE3eMSqM", etiquette: "consolider", duree: "4 min", note: "La méthode attendue au contrôle." }
      ],
      missions: [
        { titre: "Tracer une médiatrice au compas, sans se tromper", etapes: [
          "Tracer le segment [AB] à la règle.",
          "Écarter le compas de plus de la moitié de AB. Si le segment fait 6 cm, écarter de plus de 3 cm.",
          "Pointe sur A : tracer un arc au-dessus et un arc en dessous du segment.",
          "Même écartement, pointe sur B : tracer deux nouveaux arcs qui coupent les premiers.",
          "Les arcs se croisent en deux points. Tracer la droite qui les relie : c'est la médiatrice.",
          "Vérifier : elle doit passer par le milieu de [AB] et former un angle droit. Coder la figure."
        ] }
      ],
      quiz: [
        { q: "La médiatrice d'un segment est la droite qui…", options: ["passe par le milieu du segment et lui est perpendiculaire", "passe par le milieu du segment seulement", "est perpendiculaire au segment seulement"], bonne: 0, explication: "Les deux conditions sont nécessaires : le milieu ET l'angle droit.", point: "La définition de la médiatrice", revoir: "ma-med-equerre" },
        { q: "Quelle est la propriété de la médiatrice ?", options: ["Tous ses points sont à égale distance des extrémités du segment", "Tous ses points sont à égale distance du milieu", "Elle coupe le segment en trois"], bonne: 0, explication: "Si M est sur la médiatrice de [AB], alors MA = MB. On dit que M est équidistant de A et de B.", point: "La propriété d'équidistance", revoir: "ma-med-compas" },
        { q: "« Équidistant » veut dire…", options: ["à égale distance", "sur la même droite", "au même endroit"], bonne: 0, explication: "Équi, comme dans équilatéral : égal.", point: "La propriété d'équidistance" },
        { q: "M est sur la médiatrice de [AB] et MA = 5 cm. Combien vaut MB ?", options: ["5 cm", "10 cm", "2,5 cm"], bonne: 0, explication: "C'est la propriété : MA = MB.", point: "La propriété d'équidistance" },
        { q: "Un point est à égale distance de A et de B. Alors…", options: ["il appartient à la médiatrice de [AB]", "il est le milieu de [AB]", "il est sur le segment [AB]"], bonne: 0, explication: "C'est la réciproque, celle qui justifie la construction au compas.", point: "La propriété d'équidistance", revoir: "ma-med-compas" },
        { q: "Pour construire la médiatrice au compas, quel écartement faut-il prendre ?", options: ["Plus de la moitié de la longueur du segment", "Exactement la moitié", "N'importe lequel"], bonne: 0, explication: "Avec un écartement trop petit, les arcs ne se croisent jamais.", point: "Construire au compas", revoir: "ma-med-compas" },
        { q: "Dans la construction au compas, où place-t-on la pointe du compas ?", options: ["Sur A, puis sur B, sans changer l'écartement", "Sur le milieu du segment", "N'importe où sur le segment"], bonne: 0, explication: "Deux arcs depuis A, deux arcs depuis B, même écartement.", point: "Construire au compas", revoir: "ma-med-compas" },
        { q: "Les arcs se coupent en deux points. Que fait-on ensuite ?", options: ["On trace la droite qui passe par ces deux points", "On les relie à A et à B", "On efface le segment"], bonne: 0, explication: "Ces deux points sont équidistants de A et de B : la droite qui les joint est la médiatrice.", point: "Construire au compas" },
        { q: "Pour construire la médiatrice à l'équerre, on commence par…", options: ["placer le milieu du segment", "tracer un cercle", "mesurer un angle"], bonne: 0, explication: "On place le milieu, puis on trace la perpendiculaire qui passe par ce point.", point: "Construire à l'équerre", revoir: "ma-med-equerre" },
        { q: "Comment code-t-on une médiatrice sur une figure ?", options: ["Un angle droit et deux marques égales de part et d'autre du milieu", "Une flèche", "Rien de particulier"], bonne: 0, explication: "Le codage montre les deux propriétés : perpendiculaire, et milieu.", point: "La définition de la médiatrice" },
        { q: "Combien un triangle a-t-il de médiatrices ?", options: ["Trois, une par côté", "Une seule", "Deux"], bonne: 0, explication: "Une médiatrice de triangle est la médiatrice de l'un de ses côtés.", point: "Les médiatrices d'un triangle" },
        { q: "Les trois médiatrices d'un triangle…", options: ["se coupent en un même point", "sont parallèles", "ne se coupent jamais"], bonne: 0, explication: "Ce point est à égale distance des trois sommets.", point: "Les médiatrices d'un triangle" },
        { q: "Pour construire un triangle dont on connaît les trois côtés, on utilise…", options: ["la règle et le compas", "le rapporteur", "l'équerre seule"], bonne: 0, explication: "On trace un côté, puis deux arcs de cercle dont le croisement donne le troisième sommet.", point: "Construire un triangle", revoir: "ma-tri-3cotes" },
        { q: "Tracer le triangle ABC avec AB = 5 cm, AC = 4 cm, BC = 6 cm. Par quoi commencer ?", options: ["Tracer l'un des côtés à la règle, par exemple [BC] de 6 cm", "Tracer un arc de cercle", "Placer le point A"], bonne: 0, explication: "On trace toujours un côté d'abord, puis on cherche le troisième sommet au compas.", point: "Construire un triangle", revoir: "ma-tri-3cotes" },
        { q: "On connaît deux côtés et l'angle entre les deux. Quel instrument s'ajoute ?", options: ["Le rapporteur", "Le compas seul", "L'équerre"], bonne: 0, explication: "Le rapporteur pour l'angle, la règle pour les longueurs.", point: "Construire un triangle", revoir: "ma-tri-2cotes" },
        { q: "Avant de construire une figure, que conseille-t-on de faire ?", options: ["Une figure à main levée, avec les mesures notées", "Rien, on se lance", "Recopier l'énoncé trois fois"], bonne: 0, explication: "Le croquis à main levée sert de modèle et évite de se tromper d'ordre.", point: "Construire un triangle", revoir: "ma-tri-cours" }
      ]
    }
  ]
});
