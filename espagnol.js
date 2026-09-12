matiere({
  id: "espagnol", nom: "Espagnol", couleur: "#D9730D", icone: "🌮",
  chapitres: [
    {
      id: "es-s1",
      titre: "¡En marcha!",
      resume: "Saluer, répondre à l'appel, demander la date, la ponctuation espagnole.",
      savaisTu: [
        "En espagnol, les jours et les mois s'écrivent sans majuscule : lunes, septiembre.",
        "Les signes ¿ et ¡ ont été introduits par l'Académie royale espagnole au XVIIIe siècle, pour annoncer dès le début de la phrase une question ou une exclamation.",
        "Fin octobre, on découvrira le Día de Muertos, la fête des morts mexicaine, pleine de couleurs et de fleurs orange."
      ],
      supports: [
        { id: "es-sitcom", titre: "Spanish Sitcom A1, épisode 2 : Saludos y despedidas", source: "Spanish Sitcom", type: "video", lien: "https://www.youtube.com/watch?v=5Qpu06Ybe1s", etiquette: "decouvrir", duree: "4 min", note: "Tout en espagnol." },
        { id: "es-saludos", titre: "Saludos y despedidas en español", source: "YouTube", type: "video", lien: "https://www.youtube.com/watch?v=c2XtK4UKnO0", etiquette: "consolider", verifier: true, noteParent: "Chaîne non identifiée : à visionner avant d'ouvrir." },
        { id: "es-fecha", titre: "Demander et dire la date", type: "video", lien: "", etiquette: "consolider", noteParent: "Vidéo sur la date encore à trouver." }
      ],
      quiz: [
        { q: "Il est 9 heures du matin. Tu dis…", options: ["Buenos días", "Buenas tardes", "Buenas noches"], bonne: 0, explication: "Buenos días : bonjour, le matin.", point: "Saluer selon le moment", revoir: "es-sitcom", fixe: true },
        { q: "Il est 16 heures. Tu dis…", options: ["Buenos días", "Buenas tardes", "Buenas noches"], bonne: 1, explication: "Buenas tardes : bonjour, l'après-midi.", point: "Saluer selon le moment", revoir: "es-sitcom", fixe: true },
        { q: "Il est tard le soir. Tu dis…", options: ["Buenos días", "Buenas tardes", "Buenas noches"], bonne: 2, explication: "Buenas noches : bonsoir ou bonne nuit.", point: "Saluer selon le moment", revoir: "es-sitcom", fixe: true },
        { q: "« Hasta luego » veut dire…", options: ["À plus tard", "Bonjour", "Merci"], bonne: 0, explication: "Hasta luego : à plus tard. Adiós : au revoir.", point: "Dire au revoir", revoir: "es-saludos" },
        { q: "« Adiós » veut dire…", options: ["Au revoir", "S'il te plaît", "Présent"], bonne: 0, explication: "Adiós : au revoir.", point: "Dire au revoir", revoir: "es-saludos" },
        { q: "Le professeur fait l'appel. Tu réponds…", options: ["¡Presente!", "¡Hola!", "¡Adiós!"], bonne: 0, explication: "À l'appel, on répond « ¡Presente! ».", point: "Les formules de la classe" },
        { q: "« ¿Qué fecha es hoy? » veut dire…", options: ["Quelle est la date aujourd'hui ?", "Quelle heure est-il ?", "Comment ça va ?"], bonne: 0, explication: "Fecha : la date ; hoy : aujourd'hui.", point: "Demander la date", revoir: "es-fecha" },
        { q: "Comment écrit-on correctement une question en espagnol ?", options: ["¿Cómo estás?", "Cómo estás?", "¿Cómo estás¿"], bonne: 0, explication: "Un point d'interrogation à l'envers au début, un à l'endroit à la fin.", point: "La ponctuation espagnole" },
        { q: "Vrai ou faux : en espagnol, « Septiembre » prend une majuscule.", options: ["Vrai", "Faux"], bonne: 1, explication: "Les mois et les jours s'écrivent en minuscules : septiembre, lunes.", point: "Les jours et les mois" },
        { q: "« Lunes » veut dire…", options: ["Lundi", "Mardi", "Dimanche"], bonne: 0, explication: "Lunes, martes, miércoles, jueves, viernes, sábado, domingo.", point: "Les jours et les mois" },
        { q: "« Miércoles » veut dire…", options: ["Mercredi", "Jeudi", "Vendredi"], bonne: 0, explication: "Miércoles : mercredi. Jueves : jeudi. Viernes : vendredi.", point: "Les jours et les mois" },
        { q: "« Domingo » veut dire…", options: ["Dimanche", "Samedi", "Lundi"], bonne: 0, explication: "Domingo : dimanche. Sábado : samedi.", point: "Les jours et les mois" }
      ]
    }
  ]
});
