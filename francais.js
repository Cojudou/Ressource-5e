/* Français — un fichier par matière. Pour ajouter un chapitre, copier un bloc { id: ..., } dans « chapitres ».
   Le chapitre en cours se place en premier. Champs d'un support :
   id (unique), titre, source, type ("video" ou "podcast"), lien, etiquette ("decouvrir" | "consolider" | "plusloin" | texte libre),
   duree, note (courte, visible), verifier (true = caché tant que les parents n'ont pas validé), noteParent (visible côté parent seulement),
   debut / fin (en secondes, facultatif), lienDe (reprendre le lien d'un autre support). */
matiere({
  id: "francais", nom: "Français", couleur: "#2E6BD6", icone: "✒️",
  chapitres: [
    {
      id: "fr-heroines",
      titre: "Héroïnes de tous les temps",
      resume: "Pénélope, Nellie Bly, Bessie Coleman : ce qui fait une héroïne. Et la phrase verbale ou non verbale.",
      savaisTu: [
        "Pour faire patienter les prétendants, Pénélope défaisait la nuit le linceul qu'elle tissait le jour. Sa ruse a tenu trois ans.",
        "Nellie Bly a bouclé son tour du monde en 72 jours, en 1889-1890. Phileas Fogg, le héros de Jules Verne, en mettait 80.",
        "Les écoles de pilotage américaines refusaient Bessie Coleman. Elle a appris à piloter en France, à l'école Caudron du Crotoy, dans la Somme, et obtenu son brevet le 15 juin 1921.",
        "À Ravenne, face à la mosaïque de Justinien, il y a celle de l'impératrice Théodora. En 532, pendant une révolte, c'est elle qui convainc l'empereur de ne pas fuir. Une héroïne à retrouver dans l'onglet Histoire."
      ],
      supports: [
        { id: "fr-ody1", titre: "L'Odyssée d'Ulysse 1/3 : Ulysse et Calypso", source: "Les Odyssées · France Inter", type: "podcast", lien: "https://www.youtube.com/watch?v=4y1VSK6VmQI", etiquette: "decouvrir", duree: "15 min" },
        { id: "fr-ody2", titre: "L'Odyssée d'Ulysse 2/3 : Ulysse et le terrible cyclope", source: "Les Odyssées · France Inter", type: "podcast", lien: "https://www.youtube.com/watch?v=2fat78kur8Y", etiquette: "decouvrir", duree: "15 min" },
        { id: "fr-ody3", titre: "L'Odyssée d'Ulysse 3/3 : Ulysse, Circé et les sirènes", source: "Les Odyssées · France Inter", type: "podcast", lien: "https://www.youtube.com/watch?v=M2D5modGZiE", etiquette: "decouvrir", duree: "15 min" },
        { id: "fr-penelope", titre: "Pénélope et la ruse du linceul", type: "video", lien: "", etiquette: "decouvrir", noteParent: "Chercher un support centré sur Pénélope : il n'est pas certain que la ruse du linceul soit racontée dans les trois épisodes des Odyssées." },
        { id: "fr-nellie", titre: "L'incroyable tour du monde de Nellie Bly", source: "Les Odyssées · France Inter", type: "podcast", lien: "https://www.youtube.com/watch?v=tQA4ZWRNDEI", etiquette: "decouvrir", duree: "15 min" },
        { id: "fr-bessie", titre: "Bessie Coleman, première femme pilote noire", source: "YouTube", type: "video", lien: "https://www.youtube.com/watch?v=aMiUoH41ZQo", etiquette: "Pour l'exposé", verifier: true, noteParent: "Chaîne non identifiée : à visionner avant d'ouvrir." },
        { id: "fr-heroine", titre: "Ce qui fait une héroïne", type: "video", lien: "", etiquette: "consolider", noteParent: "Vidéo sur les qualités d'une héroïne et leur vocabulaire, encore à trouver." },
        { id: "fr-phrase", titre: "Phrase verbale, phrase non verbale", source: "Les Bons Profs", type: "video", lien: "https://www.youtube.com/watch?v=r6sR6FLTTQs", etiquette: "consolider", note: "Niveau 6e, même notion." }
      ],
      quiz: [
        { q: "Pénélope attend le retour de son mari pendant vingt ans. Qui est-il ?", options: ["Ulysse", "Achille", "Hercule"], bonne: 0, explication: "Pénélope est l'épouse d'Ulysse, roi d'Ithaque, parti à la guerre de Troie puis perdu sur la mer.", point: "Pénélope et sa ruse", revoir: "fr-ody1" },
        { q: "Quelle ruse Pénélope utilise-t-elle pour faire patienter les prétendants ?", options: ["Elle défait la nuit le linceul qu'elle tisse le jour", "Elle se cache dans le palais", "Elle leur impose une course"], bonne: 0, explication: "Elle promet de choisir un époux quand le linceul sera fini, et s'arrange pour qu'il ne le soit jamais.", point: "Pénélope et sa ruse", revoir: "fr-penelope" },
        { q: "Pourquoi peut-on dire que Pénélope est une stratège ?", options: ["Elle gagne du temps par l'intelligence, pas par la force", "Elle commande une armée", "Elle part combattre à Troie"], bonne: 0, explication: "Une stratège prévoit et ruse pour atteindre son but : Pénélope protège son royaume sans jamais combattre.", point: "Qualités d'une héroïne", revoir: "fr-penelope" },
        { q: "Vrai ou faux : une héroïne est forcément quelqu'un qui se bat avec une arme.", options: ["Vrai", "Faux"], bonne: 1, explication: "Le courage, l'intelligence, la ténacité ou l'audace suffisent à faire une héroïne.", point: "Qualités d'une héroïne", revoir: "fr-heroine" },
        { q: "Quel mot désigne quelqu'un qui ne renonce pas malgré les difficultés ?", options: ["Tenace", "Téméraire", "Timide"], bonne: 0, explication: "Tenace veut dire qui tient bon ; téméraire veut dire courageux jusqu'à l'imprudence.", point: "Le vocabulaire de l'héroïne", revoir: "fr-heroine" },
        { q: "Une personne audacieuse est une personne…", options: ["qui ose", "qui obéit", "qui hésite"], bonne: 0, explication: "L'audace, c'est oser faire ce que les autres n'osent pas.", point: "Le vocabulaire de l'héroïne", revoir: "fr-heroine" },
        { q: "Qui était Nellie Bly ?", options: ["Une journaliste américaine", "Une aviatrice française", "Une reine grecque"], bonne: 0, explication: "Journaliste à New York, elle a fait le tour du monde en 72 jours pour son journal.", point: "Nellie Bly", revoir: "fr-nellie" },
        { q: "Nellie Bly voulait battre le record d'un héros de roman. Lequel ?", options: ["Phileas Fogg", "Robinson Crusoé", "Ulysse"], bonne: 0, explication: "Dans Le Tour du monde en 80 jours de Jules Verne, Phileas Fogg met 80 jours ; elle en met 72.", point: "Nellie Bly", revoir: "fr-nellie" },
        { q: "Où Bessie Coleman a-t-elle appris à piloter ?", options: ["En France", "Aux États-Unis", "En Angleterre"], bonne: 0, explication: "Refusée par les écoles américaines, elle est venue à l'école Caudron du Crotoy et a obtenu son brevet en 1921.", point: "Bessie Coleman", revoir: "fr-bessie" },
        { q: "« Quelle aventure incroyable ! » Cette phrase est…", options: ["verbale", "non verbale"], bonne: 1, explication: "Il n'y a aucun verbe conjugué : c'est une phrase non verbale.", point: "Phrase verbale et non verbale", revoir: "fr-phrase" },
        { q: "« Nellie Bly part de New York en 1889. » Cette phrase est…", options: ["verbale", "non verbale"], bonne: 0, explication: "Elle contient le verbe conjugué « part » : c'est une phrase verbale.", point: "Phrase verbale et non verbale", revoir: "fr-phrase" },
        { q: "« Départ immédiat pour le tour du monde. » Cette phrase est…", options: ["verbale", "non verbale"], bonne: 1, explication: "« Départ » est un nom, pas un verbe : la phrase n'a pas de verbe conjugué.", point: "Phrase verbale et non verbale", revoir: "fr-phrase" },
        { q: "Comment reconnaît-on une phrase verbale ?", options: ["Elle contient au moins un verbe conjugué", "Elle est longue", "Elle se termine par un point"], bonne: 0, explication: "On cherche le verbe conjugué : s'il y en a un, la phrase est verbale, quelle que soit sa longueur.", point: "Phrase verbale et non verbale", revoir: "fr-phrase" }
      ]
    }
  ]
});
