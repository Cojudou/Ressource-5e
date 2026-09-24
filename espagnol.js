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
    },
    {
      id: "es-alfabeto",
      titre: "El alfabeto español",
      resume: "Dire les lettres, reconnaître les sons propres à l'espagnol, épeler.",
      savaisTu: [
        "L'espagnol a une lettre que le français n'a pas : la ñ. Son petit trait ondulé vient des copistes du Moyen Âge, qui écrivaient une seule n surmontée d'une barre pour éviter d'écrire nn.",
        "En espagnol, le h ne se prononce jamais : hola se dit « ola », hoy se dit « oï ».",
        "Jusqu'en 1994, ch et ll étaient rangées comme des lettres à part entière dans les dictionnaires espagnols. Elles sont maintenant classées avec le c et le l.",
        "En Espagne, le z et le c devant e ou i se prononcent langue entre les dents, comme le th anglais. En Amérique latine, ils se prononcent comme un s."
      ],
      supports: [
        { id: "es-alfabeto-video", titre: "L'alphabet espagnol : les 27 lettres", source: "Cours d'espagnol pour débutants", type: "video", lien: "https://www.youtube.com/watch?v=MwomqYAMVdc", etiquette: "decouvrir", verifier: true, noteParent: "Leçon en français qui dit les 27 lettres une par une. Chaîne d'apprentissage non institutionnelle : un aperçu rapide suffit à valider." },
        { id: "es-sons", titre: "Les sons propres à l'espagnol : j, ll, ñ, r roulé", source: "Prononciation, leçon 1", type: "video", lien: "https://www.youtube.com/watch?v=LqjRaxd4QIc", etiquette: "consolider", verifier: true, noteParent: "Leçon de prononciation lettre par lettre, avec exemples. Même remarque : un aperçu rapide suffit." }
      ],
      quiz: [
        { q: "Combien de lettres compte l'alphabet espagnol ?", options: ["27", "26", "25"], bonne: 0, explication: "Les 26 lettres de l'alphabet latin, plus la ñ.", point: "L'alphabet espagnol", revoir: "es-alfabeto-video", fixe: true },
        { q: "Quelle lettre existe en espagnol et pas en français ?", options: ["ñ", "ç", "ß"], bonne: 0, explication: "La ñ, qu'on appelle « eñe ». On la trouve dans España, mañana, niño.", point: "L'alphabet espagnol", revoir: "es-alfabeto-video" },
        { q: "Comment se prononce le h dans « hola » ?", options: ["Il ne se prononce pas", "Comme le h de « hamac »", "Comme un s"], bonne: 0, explication: "En espagnol, le h est toujours muet : on dit « ola ».", point: "Les sons de l'espagnol", revoir: "es-sons" },
        { q: "Dans « Juan », le j se prononce…", options: ["comme un son raclé, venu du fond de la gorge", "comme le j de « jambe »", "comme un y"], bonne: 0, explication: "C'est le son de la jota, qu'on entend aussi dans José, trabajo, jugar.", point: "Les sons de l'espagnol", revoir: "es-sons" },
        { q: "Dans « llama », le ll se prononce à peu près…", options: ["comme le y de « yoyo »", "comme un double l", "comme un j français"], bonne: 0, explication: "Llamar, lluvia, calle : le ll se dit comme un y dans la plupart des régions.", point: "Les sons de l'espagnol", revoir: "es-sons" },
        { q: "« Deletrear » veut dire…", options: ["épeler", "lire à voix haute", "écrire vite"], bonne: 0, explication: "Deletrear : dire une à une les lettres d'un mot.", point: "Le vocabulaire de l'alphabet" },
        { q: "« Las vocales », ce sont…", options: ["les voyelles", "les consonnes", "les accents"], bonne: 0, explication: "Las vocales : a, e, i, o, u. Las consonantes : les consonnes.", point: "Le vocabulaire de l'alphabet" },
        { q: "« El sonido », c'est…", options: ["le son", "la lettre", "le mot"], bonne: 0, explication: "El sonido : le son. Une même lettre peut avoir plusieurs sons.", point: "Le vocabulaire de l'alphabet" },
        { q: "En espagnol, « la tilde » désigne…", options: ["l'accent écrit sur une voyelle, comme dans camión", "le point sur le i", "la majuscule"], bonne: 0, explication: "La tilde, c'est l'accent écrit. Le petit trait ondulé de la ñ porte, lui, le nom de virgulilla.", point: "Le vocabulaire de l'alphabet" },
        { q: "Comment épelle-t-on « hola » en espagnol ?", options: ["hache, o, ele, a", "h, o, l, a comme en français", "ache, o, elle, a"], bonne: 0, explication: "Le nom des lettres : h se dit hache, l se dit ele.", point: "Épeler en espagnol", revoir: "es-alfabeto-video", fixe: true },
        { q: "La lettre ñ se dit…", options: ["eñe", "ene", "enio"], bonne: 0, explication: "Ene, c'est le n ordinaire ; eñe, c'est le n avec son trait ondulé.", point: "Épeler en espagnol", revoir: "es-alfabeto-video" },
        { q: "Dans « perro », le rr se prononce…", options: ["roulé, bien appuyé", "comme un r français", "on ne le prononce pas"], bonne: 0, explication: "Le rr est roulé. Perro (le chien) et pero (mais) ne veulent pas dire la même chose.", point: "Les sons de l'espagnol", revoir: "es-sons" }
      ]
    },
    {
      id: "es-acentuacion",
      titre: "La acentuación : savoir accentuer les mots espagnols",
      resume: "La syllabe tonique, les trois familles de mots, et quand écrire l'accent.",
      savaisTu: [
        "En espagnol, chaque mot a une syllabe qui sonne plus fort que les autres : la sílaba tónica. Les autres sont dites átonas.",
        "L'accent écrit ne se met que pour signaler une exception. La plupart des mots espagnols n'en portent pas, et pourtant ils ont tous une syllabe tonique.",
        "Un accent déplacé change le sens : papa veut dire pomme de terre, papá veut dire papa. De même, hablo (je parle) et habló (il parla).",
        "En espagnol il n'existe qu'un seul accent écrit, celui qui penche vers la droite : á, é, í, ó, ú. Ni accent grave, ni circonflexe."
      ],
      missions: [
        { titre: "Les trois règles, à redire à voix haute", etapes: [
          "Agudas : la syllabe tonique est la dernière. Accent écrit si le mot finit par une voyelle, par n ou par s. Camión, jamón, café, inglés.",
          "Llanas : la syllabe tonique est l'avant-dernière. Accent écrit si le mot finit par une consonne autre que n ou s. Lápiz, árbol, difícil, fácil.",
          "Esdrújulas : la syllabe tonique est l'antépénultième. Accent écrit, toujours, sans aucune exception. Teléfono, música, sábado, rápido.",
          "Le raccourci : agudas et llanas suivent des règles inverses l'une de l'autre. Les esdrújulas, elles, prennent toujours l'accent."
        ] }
      ],
      supports: [],
      quiz: [
        { q: "Qu'est-ce que la « sílaba tónica » ?", options: ["La syllabe qu'on prononce le plus fort", "La première syllabe du mot", "La syllabe qui porte un accent écrit"], bonne: 0, explication: "Tous les mots ont une syllabe tonique ; seuls certains portent un accent écrit.", point: "Le vocabulaire de l'accentuation" },
        { q: "Comment appelle-t-on les autres syllabes ?", options: ["Sílabas átonas", "Sílabas mudas", "Sílabas largas"], bonne: 0, explication: "Átonas : sans accent tonique.", point: "Le vocabulaire de l'accentuation" },
        { q: "« Llevar acento » veut dire…", options: ["porter un accent écrit", "parler fort", "changer de syllabe"], bonne: 0, explication: "C'est l'expression du lexique : une palabra lleva acento, un mot porte un accent.", point: "Le vocabulaire de l'accentuation" },
        { q: "« La pronunciación », c'est…", options: ["la prononciation", "l'accentuation écrite", "la ponctuation"], bonne: 0, explication: "Un mot proche du français, avec un accent écrit sur la dernière syllabe.", point: "Le vocabulaire de l'accentuation" },
        { q: "Une palabra aguda porte l'accent tonique sur…", options: ["la dernière syllabe", "l'avant-dernière syllabe", "l'antépénultième syllabe"], bonne: 0, explication: "Ca-FÉ, ca-MIÓN : la voix monte à la fin.", point: "Les palabras agudas" },
        { q: "Une palabra aguda porte un accent écrit si elle finit par…", options: ["une voyelle, n ou s", "une consonne autre que n ou s", "n'importe quelle lettre"], bonne: 0, explication: "Camión, jamón, café, inglés, mamá.", point: "Les palabras agudas" },
        { q: "Le mot « camion » en espagnol s'écrit…", options: ["camión", "camion", "cámion"], bonne: 0, explication: "Aguda finissant par n : elle porte l'accent écrit.", point: "Les palabras agudas" },
        { q: "« Español » porte-t-il un accent écrit ?", options: ["Non : c'est une aguda qui finit par l", "Oui, sur le o", "Oui, sur le a"], bonne: 0, explication: "Elle finit par une consonne autre que n ou s : pas d'accent écrit.", point: "Les palabras agudas" },
        { q: "Une palabra llana porte l'accent tonique sur…", options: ["l'avant-dernière syllabe", "la dernière syllabe", "la première syllabe"], bonne: 0, explication: "CA-sa, LI-bro : c'est la famille la plus fréquente en espagnol.", point: "Les palabras llanas" },
        { q: "Une palabra llana porte un accent écrit si elle finit par…", options: ["une consonne autre que n ou s", "une voyelle, n ou s", "toujours"], bonne: 0, explication: "C'est la règle inverse de celle des agudas.", point: "Les palabras llanas" },
        { q: "« Lápiz » (crayon) porte un accent parce que…", options: ["c'est une llana qui finit par z", "c'est une aguda", "c'est une esdrújula"], bonne: 0, explication: "Llana finissant par une consonne autre que n ou s : accent écrit.", point: "Les palabras llanas" },
        { q: "« Casa » porte-t-il un accent écrit ?", options: ["Non : c'est une llana qui finit par une voyelle", "Oui, sur le a", "Oui, sur le premier a"], bonne: 0, explication: "Llana finissant par une voyelle : pas d'accent.", point: "Les palabras llanas" },
        { q: "« Hablan » porte-t-il un accent écrit ?", options: ["Non : c'est une llana qui finit par n", "Oui, sur le a", "Oui, sur le second a"], bonne: 0, explication: "Llana finissant par n : pas d'accent.", point: "Les palabras llanas" },
        { q: "Une palabra esdrújula porte l'accent tonique sur…", options: ["l'antépénultième syllabe", "la dernière syllabe", "l'avant-dernière syllabe"], bonne: 0, explication: "La troisième syllabe en partant de la fin : te-LÉ-fo-no.", point: "Les palabras esdrújulas" },
        { q: "Quand une esdrújula porte-t-elle un accent écrit ?", options: ["Toujours, sans exception", "Seulement si elle finit par une voyelle", "Jamais"], bonne: 0, explication: "C'est la règle la plus simple des trois.", point: "Les palabras esdrújulas" },
        { q: "Lequel de ces mots est une esdrújula ?", options: ["música", "camión", "casa"], bonne: 0, explication: "MÚ-si-ca : l'accent tonique est sur la troisième syllabe en partant de la fin.", point: "Les palabras esdrújulas" },
        { q: "« Sabado » ou « sábado » ?", options: ["sábado", "sabado", "sabadó"], bonne: 0, explication: "SÁ-ba-do : esdrújula, donc accent écrit obligatoire.", point: "Les palabras esdrújulas" },
        { q: "« Telefono » ou « teléfono » ?", options: ["teléfono", "telefono", "telefonó"], bonne: 0, explication: "Esdrújula : l'accent est toujours écrit.", point: "Les palabras esdrújulas" },
        { q: "Quelle différence entre « papa » et « papá » ?", options: ["papa = la pomme de terre, papá = le papa", "Aucune, c'est le même mot", "papa = le papa, papá = la pomme de terre"], bonne: 0, explication: "Un accent écrit peut changer complètement le sens d'un mot.", point: "Pourquoi l'accent compte" },
        { q: "Combien d'accents écrits différents existent en espagnol ?", options: ["Un seul : á, é, í, ó, ú", "Deux : l'aigu et le grave", "Trois, comme en français"], bonne: 0, explication: "Ni accent grave, ni circonflexe : un seul accent, toujours penché vers la droite.", point: "Pourquoi l'accent compte" }
      ]
    }
  ]
});
