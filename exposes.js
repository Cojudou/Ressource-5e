matiere({
  id: "exposes", nom: "Exposés", couleur: "#6B46C1", icone: "🎤",
  chapitres: [
    {
      id: "ex-methode",
      titre: "Réussir son exposé à l'oral",
      resume: "Ce qui est noté, et comment s'y préparer sans passer trois heures dessus.",
      savaisTu: [
        "Le trac fait battre le cœur plus vite et monte la voix dans les aigus. Les comédiens professionnels le ressentent aussi. Ils ne cherchent pas à le faire disparaître : ils savent qu'il retombe tout seul, en général au bout d'une trentaine de secondes.",
        "Devant une classe, il faut parler à peu près aussi fort que pour appeler quelqu'un au bout d'un couloir. De l'intérieur, on a l'impression de crier. De l'extérieur, jamais.",
        "Pour donner l'impression de regarder tout le monde, il suffit de regarder trois personnes placées à trois endroits différents de la salle, à tour de rôle.",
        "Le débit est ce qui se dérègle le plus avec le trac : on accélère sans s'en rendre compte. Un truc simple : respirer à chaque point. Ça force à ralentir et ça s'entend comme de l'assurance."
      ],
      missions: [
        { titre: "Préparer un exposé en cinq fois, sans y passer ses soirées", etapes: [
          "Jour 1 — Chercher. Note tout ce que tu trouves, en vrac, sans te soucier de l'ordre.",
          "Jour 2 — Trier. Garde seulement ce qui répond aux quatre questions du professeur : qui elle est, ce qu'elle a fait, pourquoi c'est remarquable, pourquoi elle t'inspire.",
          "Jour 3 — Fabriquer la fiche. Des mots-clés et des chiffres, jamais des phrases entières : une fiche avec des phrases, ça se lit, et lire est justement ce qu'il faut éviter.",
          "Jour 4 — Dire à voix haute, sans regarder la fiche, puis vérifier ce que tu as oublié. Chronomètre : deux minutes, c'est court.",
          "Jour 5 — Le dire à quelqu'un, debout. C'est le seul entraînement qui compte vraiment."
        ] },
        { titre: "La veille et le jour même", etapes: [
          "La veille : deux répétitions, pas plus. Au-delà, on ne progresse plus, on s'épuise.",
          "Le jour même : relis ta fiche une fois, puis range-la.",
          "Avant de commencer : les deux pieds bien à plat, les épaules basses, et une respiration complète.",
          "Si tu perds le fil : regarde ta fiche, prends le temps de trouver, puis repars. Un silence de trois secondes ne s'entend presque pas."
        ] }
      ],
      supports: [],
      quiz: [
        { q: "Combien de temps doit durer l'exposé ?", options: ["2 minutes", "10 minutes", "Le temps qu'on veut"], bonne: 0, explication: "Deux minutes. C'est court : mieux vaut trois idées bien dites que dix survolées.", point: "Les consignes de l'exposé", fixe: true },
        { q: "Sur quoi porte la note ?", options: ["Sur l'oral uniquement", "Sur l'oral et sur le support écrit", "Sur le support écrit"], bonne: 0, explication: "Note d'oral uniquement : inutile de passer des heures à faire une belle affiche.", point: "Les consignes de l'exposé", fixe: true },
        { q: "Peut-on avoir ses notes à la main ?", options: ["Oui, mais sans les lire du début à la fin", "Non, rien du tout", "Oui, et on peut tout lire"], bonne: 0, explication: "Les notes sont autorisées comme filet de sécurité, pas comme texte à réciter.", point: "Les consignes de l'exposé", fixe: true },
        { q: "Quels sont les cinq critères notés ?", options: ["Volume, articulation et débit, regard, posture, niveau de langue", "Orthographe, présentation, longueur, dessin, voix", "Mémoire, rapidité, humour, décor, sourire"], bonne: 0, explication: "Ce sont les cinq points annoncés par le professeur. Rien sur le contenu écrit.", point: "Les cinq critères", fixe: true },
        { q: "« Le volume », dans ces critères, veut dire…", options: ["parler assez fort pour être entendu du fond", "parler longtemps", "avoir beaucoup de choses à dire"], bonne: 0, explication: "C'est la force de la voix. Le critère le plus facile à travailler : il suffit de viser le fond de la salle.", point: "Les cinq critères" },
        { q: "« Le débit », c'est…", options: ["la vitesse à laquelle on parle", "le nombre de mots qu'on connaît", "le ton de la voix"], bonne: 0, explication: "Avec le trac, on accélère. Respirer à chaque point suffit à retrouver un bon rythme.", point: "Les cinq critères" },
        { q: "« Le niveau de langue » attendu pour un exposé, c'est…", options: ["le langage courant, sans mots familiers", "le langage familier, comme avec ses amis", "un langage très savant"], bonne: 0, explication: "Pas de « trop cool », pas de « genre », pas de « du coup » à chaque phrase. Mais pas besoin de mots compliqués non plus.", point: "Les cinq critères" },
        { q: "Sur une fiche de notes, il vaut mieux écrire…", options: ["des mots-clés et des chiffres", "des phrases entières", "tout le texte de l'exposé"], bonne: 0, explication: "Des phrases entières se lisent toutes seules, et le regard ne quitte plus la feuille.", point: "Préparer sa fiche" },
        { q: "Quel est le meilleur entraînement, la veille ?", options: ["Le dire à voix haute à quelqu'un, debout", "Le relire dans sa tête plusieurs fois", "Le recopier au propre"], bonne: 0, explication: "Dire à voix haute, c'est exactement ce qu'on aura à faire. Relire donne l'illusion de savoir.", point: "Préparer sa fiche" },
        { q: "Pendant l'exposé, tu perds le fil. Que faire ?", options: ["Regarder sa fiche, trouver, puis repartir", "S'excuser et tout reprendre depuis le début", "Parler plus vite pour rattraper"], bonne: 0, explication: "Un silence de trois secondes passe inaperçu. C'est pour ça que la fiche est autorisée.", point: "Le jour de l'exposé" },
        { q: "Où regarder pendant qu'on parle ?", options: ["Trois personnes à trois endroits de la salle, à tour de rôle", "Ses chaussures", "Le professeur uniquement"], bonne: 0, explication: "Cela donne l'impression de s'adresser à toute la classe, sans avoir à balayer la salle.", point: "Le jour de l'exposé" },
        { q: "Le mot d'ordre annoncé pour toute la classe le jour des exposés est…", options: ["la bienveillance", "le silence", "la rapidité"], bonne: 0, explication: "Personne ne se moque : c'est la règle posée par le professeur pour tout le monde.", point: "Le jour de l'exposé" }
      ]
    },
    {
      id: "ex-bessie",
      titre: "Bessie Coleman, exploratrice du ciel",
      resume: "Les faits à connaître pour l'exposé, et le plan en quatre parties.",
      savaisTu: [
        "Son avion d'entraînement, un Nieuport 82, était surnommé « la Grosse Julie ».",
        "La formation de pilote durait dix mois. Bessie Coleman l'a terminée en sept.",
        "Elle prenait des cours de français le soir, après ses journées au salon de beauté, parce qu'aucune école américaine ne voulait d'elle et que la France, elle, acceptait.",
        "Aux États-Unis, on la surnommait « Queen Bess ».",
        "Elle a obtenu son brevet deux ans avant qu'Amelia Earhart, bien plus connue, n'obtienne le sien."
      ],
      missions: [
        { titre: "Le plan de l'exposé, en quatre parties", etapes: [
          "Qui elle est — nom, dates, d'où elle vient. « Bessie Coleman, née en 1892 au Texas, morte en 1926 en Floride. Fille de cueilleurs de coton, dixième de treize enfants. »",
          "Ce qu'elle a accompli — c'est la partie la plus longue, le professeur attend des informations précises. Le brevet du 15 juin 1921, la France, les sept mois, les meetings aériens.",
          "Pourquoi c'est remarquable — aucune école américaine n'acceptait une femme noire ; elle a appris le français et traversé l'Atlantique pour contourner l'obstacle.",
          "Pourquoi elle t'inspire — à toi de le dire, avec tes mots. Il n'y a pas de bonne réponse attendue, mais il faut avoir choisi la sienne avant de monter au tableau."
        ] },
        { titre: "Les cinq chiffres à ne pas oublier", etapes: [
          "1892 — sa naissance.",
          "15 juin 1921 — son brevet de pilote.",
          "7 mois de formation, au lieu de 10.",
          "29 ans, son âge le jour du brevet.",
          "1926 — sa mort, à 34 ans."
        ] }
      ],
      supports: [
        { id: "ex-bessie-video", titre: "Bessie Coleman, première femme pilote noire", type: "video", lien: "https://www.youtube.com/watch?v=aMiUoH41ZQo", etiquette: "decouvrir", verifier: true, noteParent: "Chaîne non identifiée : à visionner avant de l'ouvrir à Julie." },
        { id: "ex-bessie-crotoy", titre: "Bessie Coleman au Crotoy, avec les frères Caudron", type: "video", lien: "", etiquette: "plusloin", noteParent: "Lien à récupérer : France 3 Hauts-de-France a consacré un reportage à son passage à l'école Caudron du Crotoy. Chercher la version vidéo sur une chaîne officielle." }
      ],
      quiz: [
        { q: "En quelle année Bessie Coleman est-elle née ?", options: ["1892", "1902", "1878"], bonne: 0, explication: "Née le 26 janvier 1892 à Atlanta, au Texas.", point: "Sa naissance et son enfance", fixe: true },
        { q: "Dans quel État américain a-t-elle grandi ?", options: ["Le Texas", "La Californie", "New York"], bonne: 0, explication: "Au Texas, où ses parents travaillaient dans les champs de coton.", point: "Sa naissance et son enfance" },
        { q: "Combien avait-elle de frères et sœurs ?", options: ["Douze : elle était la dixième de treize enfants", "Deux", "Aucun"], bonne: 0, explication: "Treize enfants en tout. Un détail qui frappe, facile à replacer à l'oral.", point: "Sa naissance et son enfance" },
        { q: "Quel métier exerçait-elle à Chicago avant de devenir pilote ?", options: ["Manucure dans un salon de beauté", "Institutrice", "Infirmière"], bonne: 0, explication: "C'est là qu'elle entendait les récits des pilotes revenus de la Première Guerre mondiale.", point: "Avant l'aviation" },
        { q: "Pourquoi est-elle venue apprendre à piloter en France ?", options: ["Aucune école américaine n'acceptait une femme noire", "Parce que les avions français étaient les meilleurs", "Parce que sa famille y habitait"], bonne: 0, explication: "C'est le cœur de l'exposé : elle a contourné l'obstacle au lieu de renoncer.", point: "Pourquoi la France", fixe: true },
        { q: "Qu'a-t-elle fait pour pouvoir partir en France ?", options: ["Elle a appris le français le soir, après le travail", "Elle a attendu dix ans", "Elle a écrit au président"], bonne: 0, explication: "Des cours de français le soir, et des économies mises de côté chaque mois.", point: "Pourquoi la France" },
        { q: "Dans quelle école a-t-elle appris à piloter ?", options: ["L'école Caudron, au Crotoy", "L'école de Toulouse", "Une école de Paris"], bonne: 0, explication: "Au Crotoy, dans la Somme, en baie de Somme : la plage servait de piste.", point: "Sa formation en France", fixe: true },
        { q: "À quelle date obtient-elle son brevet de pilote ?", options: ["Le 15 juin 1921", "Le 1er janvier 1920", "Le 30 avril 1926"], bonne: 0, explication: "Le 15 juin 1921 : c'est la date à retenir absolument.", point: "Le brevet de 1921", fixe: true },
        { q: "Quel organisme lui a délivré ce brevet ?", options: ["La Fédération aéronautique internationale", "L'armée française", "L'école Caudron seule"], bonne: 0, explication: "Une licence internationale, reconnue partout : c'est ce qui fait la valeur du diplôme.", point: "Le brevet de 1921" },
        { q: "Combien de temps a duré sa formation ?", options: ["7 mois, au lieu des 10 habituels", "3 ans", "2 semaines"], bonne: 0, explication: "Sept mois : elle était la meilleure élève de sa promotion de douze.", point: "Le brevet de 1921", fixe: true },
        { q: "Quel âge avait-elle en obtenant son brevet ?", options: ["29 ans", "18 ans", "40 ans"], bonne: 0, explication: "29 ans, en 1921.", point: "Le brevet de 1921" },
        { q: "Que faisait-elle après son retour aux États-Unis ?", options: ["Des meetings aériens, avec des figures de voltige", "Elle pilotait des avions de ligne", "Elle enseignait les mathématiques"], bonne: 0, explication: "Les compagnies aériennes ne l'auraient pas embauchée. Les meetings étaient le seul moyen de vivre de l'aviation.", point: "Sa carrière" },
        { q: "Quel était son grand projet ?", options: ["Ouvrir une école de pilotage ouverte aux Noirs américains", "Traverser l'Atlantique en avion", "Devenir actrice"], bonne: 0, explication: "Elle donnait des conférences dans les écoles et les églises pour la financer. Elle est morte avant de l'ouvrir.", point: "Sa carrière", fixe: true },
        { q: "Que refusait-elle pendant ses spectacles aériens ?", options: ["De se produire devant un public séparé, Noirs et Blancs à des entrées différentes", "De voler par mauvais temps", "De faire des figures dangereuses"], bonne: 0, explication: "Dans le Sud des années 1920, exiger une entrée unique pour tous était un vrai acte de courage.", point: "Sa carrière" },
        { q: "Comment la surnommait-on ?", options: ["Queen Bess", "Lady Sky", "Miss Coleman"], bonne: 0, explication: "« Queen Bess », la reine Bess.", point: "Sa carrière" },
        { q: "En quelle année est-elle morte ?", options: ["1926", "1946", "1921"], bonne: 0, explication: "Le 30 avril 1926, à 34 ans, lors d'un vol de préparation en Floride.", point: "Sa mort", fixe: true },
        { q: "Après sa mort, son projet d'école…", options: ["a inspiré des clubs d'aviation qui ont formé des pilotes noirs", "a été oublié", "a été repris par l'armée"], bonne: 0, explication: "Les Bessie Coleman Aero Clubs ont vu le jour en son nom, et ont préparé le terrain aux aviateurs de Tuskegee.", point: "Sa mort" }
      ]
    }
  ]
});
