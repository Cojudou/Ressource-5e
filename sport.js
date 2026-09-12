/* Sport et corps : pas de quiz. Ton : direct, factuel, un peu d'humour, jamais moralisateur. */
matiere({
  id: "sport", nom: "Sport et corps", couleur: "#C98F00", icone: "🏹",
  chapitres: [
    {
      id: "sp-arc",
      titre: "Tir à l'arc : le paradoxe de l'archer",
      resume: "Au ralenti, la flèche se tord et ondule pour contourner l'arc. Elle ne part pas tout droit !",
      savaisTu: [
        "Comme la flèche ondule et contourne la poignée, l'archer vise légèrement à côté de la cible. Ce phénomène porte un nom depuis 1913 : le paradoxe de l'archer.",
        "Dans le film d'animation Rebelle, on voit la flèche onduler au ralenti : les animateurs ont respecté la physique."
      ],
      supports: [
        { id: "sp-arc-ralenti", titre: "La flèche au ralenti", source: "Ralenti sans commentaire", type: "video", lien: "https://www.youtube.com/watch?v=40PogXpvVpo", etiquette: "decouvrir", note: "Regarde bien la flèche juste après le lâcher." },
        { id: "sp-arc-explication", titre: "Le paradoxe de l'archer expliqué", type: "video", lien: "", etiquette: "consolider", noteParent: "Vidéo d'explication encore à trouver (le ralenti n'a pas de commentaire)." }
      ]
    },
    {
      id: "sp-savate",
      titre: "Savate boxe française : ce qu'elle développe",
      resume: "Parer, esquiver, se coordonner, viser juste, garder la tête froide. Et mieux connaître son corps.",
      savaisTu: [
        "En assaut, la forme pratiquée avant 18 ans, on touche sans puissance. Les points récompensent la technique, le style et la précision : les mêmes qualités qu'au tir à l'arc.",
        "La savate a été présentée aux Jeux olympiques de Paris en 1924, en démonstration.",
        "Parer et esquiver entraînent les réflexes : le cerveau apprend à lire un mouvement avant qu'il arrive."
      ],
      supports: [
        { id: "sp-savate-assaut", titre: "L'assaut en savate boxe française", source: "Fédération française de savate", type: "video", lien: "", etiquette: "decouvrir", noteParent: "Vidéos à choisir sur la chaîne officielle de la FF Savate, sous l'angle technique et précision." }
      ]
    },
    {
      id: "sp-effort",
      titre: "Pourquoi on ressort content d'une séance",
      resume: "Même quand on n'avait pas envie d'y aller.",
      savaisTu: [
        "Pendant l'effort, le cerveau libère des substances qui améliorent l'humeur et atténuent la sensation de fatigue. C'est pour ça qu'on ressort souvent de meilleure humeur qu'on n'est entré.",
        "L'activité physique améliore aussi le sommeil et la concentration. Ce n'est pas une promesse de coach : c'est mesuré."
      ],
      supports: [
        { id: "sp-effort-cps", titre: "Faire du sport, c'est physique et chimique", source: "C'est pas sorcier", type: "video", lien: "", etiquette: "decouvrir", duree: "26 min", noteParent: "Adresse à récupérer sur la chaîne officielle ou apps.education." }
      ]
    },
    {
      id: "sp-tenue",
      titre: "Se tenir droit, un corps solide",
      resume: "Posture au bureau, sac sur le dos, gainage : un corps qui tient bien, pour longtemps.",
      savaisTu: [
        "Les os se renforcent quand on les sollicite : courir, sauter, porter. C'est à l'adolescence qu'on construit l'essentiel de la solidité de ses os pour toute la vie.",
        "Un sac porté sur les deux épaules répartit le poids des deux côtés du dos."
      ],
      supports: [
        { id: "sp-os", titre: "Les os", source: "Il était une fois la vie", type: "video", lien: "", etiquette: "decouvrir", noteParent: "Épisode sur les os : adresse à récupérer." },
        { id: "sp-muscles", titre: "Les muscles", source: "Il était une fois la vie", type: "video", lien: "", etiquette: "decouvrir", noteParent: "Épisode sur les muscles : adresse à récupérer. En lien avec le chapitre de SVT sur les organes à l'effort." }
      ]
    }
  ]
});
