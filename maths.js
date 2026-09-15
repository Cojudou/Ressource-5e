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
    }
  ]
});
