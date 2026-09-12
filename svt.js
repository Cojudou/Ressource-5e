matiere({
  id: "svt", nom: "SVT", couleur: "#5E8F1C", icone: "🌱",
  chapitres: [
    {
      id: "sv-climat",
      titre: "Phénomènes climatiques et météorologiques",
      resume: "Ne pas confondre climat et météo. Pourquoi il existe plusieurs zones climatiques.",
      savaisTu: [
        "Le climat se calcule sur une période de référence de 30 ans.",
        "« Le climat, c'est ce qu'on attend ; la météo, c'est ce qu'on a. »",
        "1 mm de précipitations, c'est 1 litre d'eau tombé sur chaque mètre carré."
      ],
      supports: [
        { id: "sv-meteo1", titre: "Météo : prévoir le temps de demain", source: "C'est pas sorcier", type: "video", lien: "https://www.youtube.com/watch?v=V1sVOEq51_o", etiquette: "decouvrir", duree: "26 min" },
        { id: "sv-meteo2", titre: "Comment prédire la météo ?", source: "C'est pas sorcier", type: "video", lien: "https://www.youtube.com/watch?v=RjWvJCDPW1I", etiquette: "consolider", duree: "26 min", note: "Le bulletin météo, c'est le document 2 de l'activité Roland-Garros." },
        { id: "sv-climat", titre: "Le climat : son histoire et ses changements", source: "C'est pas sorcier", type: "video", lien: "https://www.youtube.com/watch?v=lShBAXMb2yU", etiquette: "plusloin", duree: "26 min" }
      ],
      quiz: [
        { q: "« Demain, il pleuvra sur Paris. » C'est…", options: ["de la météo", "du climat"], bonne: 0, explication: "Une prévision à court terme, sur une zone limitée : c'est de la météorologie.", point: "Trier météo et climat", revoir: "sv-meteo1", fixe: true },
        { q: "« En moyenne, il fait plus chaud en été qu'en hiver à Paris. » C'est…", options: ["de la météo", "du climat"], bonne: 1, explication: "Une moyenne calculée sur de nombreuses années : c'est du climat.", point: "Trier météo et climat", revoir: "sv-climat", fixe: true },
        { q: "« Cette semaine, des matchs de Roland-Garros ont été reportés à cause de la pluie. » C'est…", options: ["de la météo", "du climat"], bonne: 0, explication: "Un épisode de quelques jours : c'est un événement météorologique.", point: "Trier météo et climat", revoir: "sv-meteo2", fixe: true },
        { q: "« Le Sahara reçoit très peu de pluie, année après année. » C'est…", options: ["de la météo", "du climat"], bonne: 1, explication: "Ce qui se répète en moyenne sur des années décrit le climat.", point: "Trier météo et climat", revoir: "sv-climat", fixe: true },
        { q: "« Un orage violent a éclaté hier soir. » C'est…", options: ["de la météo", "du climat"], bonne: 0, explication: "Un phénomène ponctuel, à court terme : c'est de la météo.", point: "Trier météo et climat", revoir: "sv-meteo1", fixe: true },
        { q: "La climatologie étudie…", options: ["les valeurs moyennes des températures et des précipitations sur de nombreuses années", "le temps qu'il fera demain", "les tremblements de terre"], bonne: 0, explication: "Ces moyennes sont établies grâce à des mesures régulières pendant des années.", point: "Définir climat et météo", revoir: "sv-climat" },
        { q: "La météorologie étudie…", options: ["les phénomènes à court terme sur une zone limitée", "les moyennes sur des centaines d'années", "l'histoire de la Terre"], bonne: 0, explication: "Précipitations, température, vent : la météo prévoit les jours qui viennent.", point: "Définir climat et météo", revoir: "sv-meteo2" },
        { q: "Sur combien d'années calcule-t-on un climat de référence ?", options: ["30 ans", "1 an", "1 mois"], bonne: 0, explication: "La période de référence est de 30 ans.", point: "Définir climat et météo", revoir: "sv-climat" },
        { q: "1 mm de précipitations correspond à…", options: ["1 litre d'eau par mètre carré", "1 goutte par mètre carré", "1 seau d'eau par mètre carré"], bonne: 0, explication: "C'est la définition donnée dans le document 1.", point: "Les précipitations" },
        { q: "Un mois de mai très pluvieux prouve-t-il que le climat se dérègle ?", options: ["Non, c'est un événement météorologique", "Oui, forcément"], bonne: 0, explication: "Pour parler de climat, il faut comparer des moyennes sur de nombreuses années, pas un seul mois.", point: "Trier météo et climat", revoir: "sv-meteo2" },
        { q: "Pourquoi existe-t-il plusieurs zones climatiques sur Terre ?", options: ["Parce que le rayonnement du Soleil est inégalement réparti", "Parce que certains pays sont plus près du Soleil", "Parce que les océans chauffent l'air"], bonne: 0, explication: "Près de l'équateur, les rayons arrivent presque droits ; près des pôles, ils arrivent inclinés et se répartissent sur une plus grande surface.", point: "Les zones climatiques", revoir: "sv-climat" },
        { q: "Où fait-il en moyenne le plus chaud ?", options: ["Près de l'équateur", "Près des pôles"], bonne: 0, explication: "C'est là que le Soleil chauffe le plus, car ses rayons y sont concentrés sur une petite surface.", point: "Les zones climatiques", revoir: "sv-climat" }
      ]
    }
  ]
});
