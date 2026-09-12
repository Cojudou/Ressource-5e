/* Hygiène : pas de quiz. On parle de ce que le corps sait faire, pas de son apparence. */
matiere({
  id: "hygiene", nom: "Hygiène", couleur: "#2E9F92", icone: "🧼",
  chapitres: [
    {
      id: "hy-dents",
      titre: "Les dents et la plaque dentaire",
      resume: "Pourquoi la plaque revient toujours, et comment la déloger.",
      savaisTu: [
        "La plaque dentaire est un film de bactéries qui se reforme sans arrêt. D'où le brossage deux fois par jour, deux minutes.",
        "L'émail des dents est la matière la plus dure du corps humain, plus dure que les os."
      ],
      supports: [
        { id: "hy-bouche", titre: "La bouche et les dents", source: "Il était une fois la vie", type: "video", lien: "https://www.youtube.com/watch?v=LXlOt0VMkvQ", etiquette: "decouvrir", duree: "26 min", noteParent: "À remplacer si la série est jugée trop enfantine." }
      ]
    },
    {
      id: "hy-peau",
      titre: "La peau, le visage, les boutons",
      resume: "Pourquoi les boutons et les points noirs arrivent à l'adolescence.",
      savaisTu: [
        "À l'adolescence, les hormones poussent la peau à produire plus de sébum. Quand il bouche un pore, ça fait un point noir ; si des bactéries s'en mêlent, un bouton.",
        "Si les boutons deviennent nombreux ou gênants, on en parle au médecin : il a des solutions."
      ],
      supports: [
        { id: "hy-peau-cps", titre: "Des sorciers bien dans leur peau", source: "C'est pas sorcier", type: "video", lien: "", etiquette: "decouvrir", duree: "26 min", noteParent: "Adresse à récupérer." }
      ]
    },
    {
      id: "hy-microbes",
      titre: "Microbes, mains et ongles",
      resume: "Où vivent les microbes, ce qu'ils aiment, comment les tenir à distance.",
      savaisTu: [
        "Se laver les mains au savon pendant une vingtaine de secondes élimine la plupart des microbes qu'elles transportent.",
        "Les microbes adorent se cacher sous les ongles : des ongles courts se nettoient beaucoup plus facilement.",
        "La plupart des bactéries sont inoffensives, et beaucoup nous sont même utiles, par exemple dans l'intestin pour digérer."
      ],
      supports: [
        { id: "hy-defenses", titre: "Les défenses du corps", source: "Il était une fois la vie", type: "video", lien: "", etiquette: "decouvrir", noteParent: "Chercher d'abord dans Il était une fois la vie (épisodes sur les défenses du corps)." }
      ]
    },
    {
      id: "hy-cheveux",
      titre: "Les cheveux",
      resume: "Propreté, et pourquoi on les attache.",
      savaisTu: [
        "Cheveux longs attachés en cuisine, en sport, au laboratoire, près des machines, au tir à l'arc (la corde !) et à la boxe : ils ne gênent plus et ne se prennent nulle part."
      ],
      supports: [
        { id: "hy-cheveux-cps", titre: "Les sorciers coupent le cheveu en quatre", source: "C'est pas sorcier", type: "video", lien: "", etiquette: "decouvrir", duree: "26 min", noteParent: "Adresse à récupérer." }
      ]
    }
  ]
});
