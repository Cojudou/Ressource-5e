matiere({
  id: "histoire", nom: "Histoire", couleur: "#9A6423", icone: "🏰",
  chapitres: [
    {
      id: "hi-byzance",
      titre: "Byzance et l'Europe carolingienne",
      resume: "L'Empire byzantin, Justinien, la mosaïque de Ravenne, Constantinople, le Code Justinien.",
      savaisTu: [
        "Sur la mosaïque de Saint-Vital de Ravenne, l'impératrice Théodora fait face à Justinien. En 532, pendant la révolte Nika, c'est elle qui convainc l'empereur de rester et de résister.",
        "Une mosaïque est faite de milliers de petits cubes de pierre ou de verre, appelés tesselles.",
        "Sainte-Sophie a été construite sous Justinien en cinq ans environ, de 532 à 537. Sa coupole est restée l'une des plus grandes du monde pendant près de mille ans."
      ],
      supports: [
        { id: "hi-istanbul-1", titre: "Istanbul, c'est Byzance ! (1re partie : l'Empire byzantin)", source: "C'est pas sorcier", type: "video", lien: "", fin: 600, etiquette: "decouvrir", duree: "10 min", noteParent: "Prendre la version de la chaîne officielle ou d'apps.education, pas la copie d'un particulier. La fin est réglée à 10 min (partie byzantine) ; ajustez si besoin." },
        { id: "hi-istanbul-2", titre: "Istanbul, c'est Byzance ! (la suite)", source: "C'est pas sorcier", type: "video", lienDe: "hi-istanbul-1", debut: 600, etiquette: "plusloin", noteParent: "Même vidéo que la 1re partie : le lien est repris automatiquement." },
        { id: "hi-theodora", titre: "Théodora, l'impératrice", type: "video", lien: "", etiquette: "plusloin", noteParent: "La plupart des émissions sur Théodora sont pour adultes : chercher un format adapté." }
      ],
      quiz: [
        { q: "Justinien a régné de…", options: ["527 à 565", "800 à 814", "1453 à 1461"], bonne: 0, explication: "Justinien règne au VIe siècle, de 527 à 565.", point: "Justinien et son règne", revoir: "hi-istanbul-1" },
        { q: "Que veut dire « basileus » ?", options: ["« Roi des rois », en grec", "« Grand prêtre », en latin", "« Chef de guerre », en arabe"], bonne: 0, explication: "Basileus est le titre grec de l'empereur byzantin.", point: "Le vocabulaire du pouvoir byzantin", revoir: "hi-istanbul-1" },
        { q: "Où se trouve la mosaïque de Justinien ?", options: ["Dans l'église Saint-Vital de Ravenne, en Italie", "À Sainte-Sophie de Constantinople", "Au Sénat de Rome"], bonne: 0, explication: "Elle date du milieu du VIe siècle et se trouve à Ravenne, en Italie.", point: "La mosaïque de Ravenne" },
        { q: "Qu'est-ce qu'une mosaïque ?", options: ["Un assemblage de petits cubes multicolores qui forment un dessin", "Une peinture sur un mur", "Une tapisserie brodée"], bonne: 0, explication: "Les petits cubes juxtaposés, les tesselles, forment l'image.", point: "La mosaïque de Ravenne" },
        { q: "Sur la mosaïque, à quoi voit-on que l'empereur est un personnage sacré ?", options: ["À l'auréole autour de sa tête", "À sa longue cape", "À ses chaussures"], bonne: 0, explication: "L'auréole qui nimbe sa tête montre son caractère sacré.", point: "Le vocabulaire du pouvoir byzantin" },
        { q: "La chlamyde, c'est…", options: ["la longue cape de l'empereur", "sa couronne", "la broche sur son épaule"], bonne: 0, explication: "La chlamyde est la longue cape, de couleur pourpre.", point: "Le vocabulaire du pouvoir byzantin" },
        { q: "La fibule, c'est…", options: ["la broche qui retient la cape", "le plat tenu par l'empereur", "le symbole du Christ"], bonne: 0, explication: "La fibule retient la chlamyde sur l'épaule droite.", point: "Le vocabulaire du pouvoir byzantin" },
        { q: "Quelle couleur est réservée à l'empereur ?", options: ["Le pourpre", "Le vert", "Le blanc"], bonne: 0, explication: "Le pourpre est la couleur impériale.", point: "Le vocabulaire du pouvoir byzantin" },
        { q: "Le chrisme, c'est…", options: ["le symbole formé des premières lettres du nom du Christ en grec", "une coupe pour la messe", "un vêtement de prêtre"], bonne: 0, explication: "Le chrisme associe les lettres grecques X et P : c'est un signe que l'Empire est chrétien.", point: "Un Empire chrétien" },
        { q: "Les trois groupes autour de Justinien représentent…", options: ["les pouvoirs politique, militaire et religieux", "les trois fils de l'empereur", "les peuples ennemis"], bonne: 0, explication: "Hauts fonctionnaires, soldats et prêtres : l'empereur réunit les trois pouvoirs.", point: "Les pouvoirs de l'empereur" },
        { q: "Quel monument de Constantinople montre l'influence chrétienne ?", options: ["Sainte-Sophie", "L'hippodrome", "Le Sénat"], bonne: 0, explication: "Les églises, dont Sainte-Sophie, et les monastères sont chrétiens ; l'hippodrome et le Sénat rappellent Rome.", point: "Constantinople et ses influences", revoir: "hi-istanbul-1" },
        { q: "L'hippodrome et les forums de Constantinople rappellent…", options: ["Rome", "la Grèce", "l'Égypte"], bonne: 0, explication: "Forums, palais, Sénat, hippodrome, aqueduc : c'est l'héritage romain. L'Acropole, elle, rappelle la Grèce.", point: "Constantinople et ses influences", revoir: "hi-istanbul-1" },
        { q: "Par ses conquêtes, quel empire Justinien veut-il reconstituer ?", options: ["L'Empire romain antique", "L'empire d'Alexandre le Grand", "L'Empire carolingien"], bonne: 0, explication: "Il reconquiert l'Italie, le nord de l'Afrique et le sud de l'Espagne pour refaire l'Empire romain.", point: "Les conquêtes de Justinien" },
        { q: "Lequel de ces territoires Justinien a-t-il conquis ?", options: ["L'Italie", "La Gaule", "La Bretagne"], bonne: 0, explication: "Ses conquêtes : l'Italie, le nord de l'Afrique et le sud de l'Espagne.", point: "Les conquêtes de Justinien" },
        { q: "Après 534, dans quelle langue les lois nouvelles sont-elles rédigées ?", options: ["En grec", "En latin", "En arabe"], bonne: 0, explication: "Le Code Justinien reprend les lois romaines, mais les lois nouvelles sont écrites en grec.", point: "Le Code Justinien" },
        { q: "Qui est Théodora ?", options: ["L'impératrice, épouse de Justinien", "La mère de Justinien", "Une reine lombarde"], bonne: 0, explication: "Sa mosaïque fait face à celle de Justinien à Ravenne ; en 532, elle le pousse à ne pas fuir.", point: "Théodora", revoir: "hi-theodora" },
        { q: "Quelle menace pèse sur l'Empire byzantin ?", options: ["Les attaques de peuples voisins : Lombards, Slaves, Arabes, Turcs", "Aucune : ses frontières sont sûres et bien gardées"], bonne: 0, explication: "L'Empire a du mal à tenir ses frontières, notamment face aux incursions turques.", point: "Les menaces sur l'Empire" }
      ]
    },
    {
      id: "hi-islam",
      titre: "De la naissance de l'islam à la prise de Bagdad",
      resume: "La seconde partie du thème 1.",
      supports: [
        { id: "hi-arabie", titre: "À quoi ressemblait l'Arabie avant l'arrivée de l'islam ?", source: "Nota Bene", type: "video", lien: "", etiquette: "decouvrir", duree: "13 min", noteParent: "Mis de côté pour la seconde partie du thème : adresse à récupérer quand le chapitre commence." }
      ]
    }
  ]
});
