matiere({
  id: "svt", nom: "SVT", couleur: "#5E8F1C", icone: "🌱",
  chapitres: [
    {
      id: "sv-climat",
      titre: "Phénomènes climatiques et météorologiques",
      resume: "Ne pas confondre climatologie et météorologie. Les trois zones climatiques et l'énergie du Soleil.",
      savaisTu: [
        "Le climat se calcule sur une période de référence de 30 ans.",
        "« Le climat, c'est ce qu'on attend ; la météo, c'est ce qu'on a. »",
        "1 mm de précipitations, c'est 1 litre d'eau tombé sur chaque mètre carré.",
        "Le mot « météorologie » vient du grec meteoros, qui veut dire « élevé dans les airs ». Les Grecs appelaient météores tous les phénomènes du ciel, y compris les étoiles filantes : c'est le même mot qui a donné météorite.",
        "Il fait plus chaud à l'équateur non pas parce qu'on y est plus près du Soleil, mais parce que ses rayons y arrivent presque droits. Aux pôles, ils arrivent inclinés et la même quantité d'énergie s'étale sur une surface bien plus grande.",
        "Les normales de saison ne sont pas des prévisions : ce sont des moyennes calculées sur trente ans. Dire qu'un mois est « au-dessus des normales » ne dit rien du climat, seulement de ce mois-là."
      ],
      missions: [
        { titre: "Les définitions du lexique, à redire à voix haute", etapes: [
          "Climatologie : conditions météorologiques moyennes (températures, précipitations…) qui règnent sur une région donnée pendant une longue période, plusieurs décennies.",
          "Météorologie : étude du temps à court terme, dans des zones limitées.",
          "Les trois zones climatiques : la zone chaude, la zone tempérée, la zone froide (ou polaire), de part et d'autre de l'équateur.",
          "Pourquoi ces zones existent : l'énergie solaire est inégalement répartie à la surface de la Terre. Elle est plus concentrée à l'équateur qu'aux pôles.",
          "La conclusion du chapitre : on ne mesure pas un dérèglement climatique à partir d'un seul phénomène météorologique, mais lorsqu'il se répète sur plusieurs zones et plusieurs années."
        ] }
      ],
      supports: [
        { id: "sv-meteo1", titre: "Météo : prévoir le temps de demain", source: "C'est pas sorcier", type: "video", lien: "https://www.youtube.com/watch?v=V1sVOEq51_o", etiquette: "decouvrir", duree: "26 min" },
        { id: "sv-meteo2", titre: "Comment prédire la météo ?", source: "C'est pas sorcier", type: "video", lien: "https://www.youtube.com/watch?v=RjWvJCDPW1I", etiquette: "consolider", duree: "26 min", note: "Le bulletin météo, c'est le document 2 de l'activité sur Lisa et le tournoi de tennis." },
        { id: "sv-climat", titre: "Le climat : son histoire et ses changements", source: "C'est pas sorcier", type: "video", lien: "https://www.youtube.com/watch?v=lShBAXMb2yU", etiquette: "plusloin", duree: "26 min" }
      ],
      quiz: [
        { q: "« Demain, il pleuvra sur Paris. » C'est…", options: ["de la météo", "du climat"], bonne: 0, explication: "Une prévision à court terme, sur une zone limitée : c'est de la météorologie.", point: "Trier météo et climat", revoir: "sv-meteo1", fixe: true },
        { q: "« En moyenne, il fait plus chaud en été qu'en hiver à Paris. » C'est…", options: ["de la météo", "du climat"], bonne: 1, explication: "Une moyenne calculée sur de nombreuses années : c'est du climat.", point: "Trier météo et climat", revoir: "sv-climat", fixe: true },
        { q: "« Cette semaine, des matchs du tournoi de tennis ont été reportés à cause de la pluie. » C'est…", options: ["de la météo", "du climat"], bonne: 0, explication: "Un épisode de quelques jours : c'est un événement météorologique.", point: "Trier météo et climat", revoir: "sv-meteo2", fixe: true },
        { q: "« Le Sahara reçoit très peu de pluie, année après année. » C'est…", options: ["de la météo", "du climat"], bonne: 1, explication: "Ce qui se répète en moyenne sur des années décrit le climat.", point: "Trier météo et climat", revoir: "sv-climat", fixe: true },
        { q: "« Un orage violent a éclaté hier soir. » C'est…", options: ["de la météo", "du climat"], bonne: 0, explication: "Un phénomène ponctuel, à court terme : c'est de la météo.", point: "Trier météo et climat", revoir: "sv-meteo1", fixe: true },
        { q: "La climatologie étudie…", options: ["les valeurs moyennes des températures et des précipitations sur de nombreuses années", "le temps qu'il fera demain", "les tremblements de terre"], bonne: 0, explication: "Ces moyennes sont établies grâce à des mesures régulières pendant des années.", point: "Définir climat et météo", revoir: "sv-climat" },
        { q: "La météorologie étudie…", options: ["les phénomènes à court terme sur une zone limitée", "les moyennes sur des centaines d'années", "l'histoire de la Terre"], bonne: 0, explication: "Précipitations, température, vent : la météo prévoit les jours qui viennent.", point: "Définir climat et météo", revoir: "sv-meteo2" },
        { q: "Sur combien d'années calcule-t-on un climat de référence ?", options: ["30 ans", "1 an", "1 mois"], bonne: 0, explication: "La période de référence est de 30 ans.", point: "Définir climat et météo", revoir: "sv-climat" },
        { q: "1 mm de précipitations correspond à…", options: ["1 litre d'eau par mètre carré", "1 goutte par mètre carré", "1 seau d'eau par mètre carré"], bonne: 0, explication: "C'est la définition donnée dans le document 1.", point: "Les précipitations" },
        { q: "Un mois de mai très pluvieux prouve-t-il que le climat se dérègle ?", options: ["Non, c'est un événement météorologique", "Oui, forcément"], bonne: 0, explication: "Pour parler de climat, il faut comparer des moyennes sur de nombreuses années, pas un seul mois.", point: "Trier météo et climat", revoir: "sv-meteo2" },
        { q: "Pourquoi existe-t-il plusieurs zones climatiques sur Terre ?", options: ["Parce que le rayonnement du Soleil est inégalement réparti", "Parce que certains pays sont plus près du Soleil", "Parce que les océans chauffent l'air"], bonne: 0, explication: "Près de l'équateur, les rayons arrivent presque droits ; près des pôles, ils arrivent inclinés et se répartissent sur une plus grande surface.", point: "Les zones climatiques", revoir: "sv-climat" },
        { q: "Quel est le mot exact pour l'étude des moyennes sur une longue durée ?", options: ["la climatologie", "la météorologie", "la géologie"], bonne: 0, explication: "Climatologie : conditions moyennes (températures, précipitations) sur une région donnée, pendant plusieurs décennies.", point: "Le lexique du chapitre", revoir: "sv-climat", fixe: true },
        { q: "Et pour l'étude du temps à court terme, sur une zone limitée ?", options: ["la météorologie", "la climatologie", "l'astronomie"], bonne: 0, explication: "C'est la définition du lexique, mot pour mot.", point: "Le lexique du chapitre", revoir: "sv-meteo1", fixe: true },
        { q: "Combien y a-t-il de grandes zones climatiques sur Terre ?", options: ["Trois", "Deux", "Cinq"], bonne: 0, explication: "Trois : la zone chaude, la zone tempérée et la zone froide, qu'on appelle aussi polaire.", point: "Les zones climatiques", revoir: "sv-climat", fixe: true },
        { q: "Comment ces trois zones sont-elles disposées ?", options: ["De part et d'autre de l'équateur", "Du nord au sud, en bandes verticales", "Au hasard"], bonne: 0, explication: "La carte du document 1 le montre : la zone chaude autour de l'équateur, puis les zones tempérées, puis les zones froides vers les pôles.", point: "Les zones climatiques", revoir: "sv-climat" },
        { q: "Qu'est-ce qui explique l'existence de ces zones ?", options: ["L'inégale répartition de l'énergie solaire à la surface de la Terre", "La distance entre chaque pays et le Soleil", "La profondeur des océans"], bonne: 0, explication: "C'est ce que démontre le modèle expérimental : l'énergie solaire est plus concentrée à l'équateur qu'aux pôles.", point: "Les zones climatiques", revoir: "sv-climat", fixe: true },
        { q: "En zone tempérée, les relevés donnent 9,7 °C et 767 mm par an. En climat équatorial…", options: ["23,8 °C et 1617 mm par an", "5 °C et 200 mm par an", "les mêmes valeurs"], bonne: 0, explication: "Températures et précipitations sont bien plus élevées en zone chaude : ce sont les chiffres des graphiques de l'activité.", point: "Lire les graphiques", revoir: "sv-climat" },
        { q: "Sur quelles deux mesures repose la définition d'un climat ?", options: ["Les températures et les précipitations", "Le vent et les nuages", "L'humidité et la pression"], bonne: 0, explication: "Températures et précipitations moyennes, sur une longue période et une grande zone.", point: "Le lexique du chapitre", fixe: true },
        { q: "Le grand-père de Lisa pense qu'il va pleuvoir parce qu'il a plu l'an dernier. A-t-il raison ?", options: ["Non : un épisode de pluie ne dit rien de l'année suivante", "Oui : la pluie revient toujours à la même date"], bonne: 0, explication: "C'est la conclusion de l'activité : on ne déduit rien d'un seul phénomène météorologique.", point: "Le raisonnement de l'activité", revoir: "sv-meteo2", fixe: true },
        { q: "Le graphique du document 4 montre que les précipitations…", options: ["varient d'une année à l'autre, parfois au-dessus des normales, parfois en dessous", "augmentent chaque année sans exception", "sont identiques tous les ans"], bonne: 0, explication: "Plus fortes en 2007 et 2013, plus faibles en 2011 et 2015 : cette variation est normale.", point: "Le raisonnement de l'activité", revoir: "sv-meteo2" },
        { q: "Quand peut-on parler d'un dérèglement climatique ?", options: ["Quand un phénomène se répète sur plusieurs zones et sur plusieurs années", "Dès qu'un mois est plus pluvieux que d'habitude", "Quand un orage est très violent"], bonne: 0, explication: "C'est la phrase de conclusion du cours : un seul phénomène ne suffit jamais.", point: "Le raisonnement de l'activité", revoir: "sv-climat", fixe: true },
        { q: "Quelques jours de pluie à Paris en juin 2017, c'est…", options: ["un phénomène météorologique", "une preuve de dérèglement climatique"], bonne: 0, explication: "Le document 3 sert justement à montrer le piège : quelques jours ne relèvent pas de la climatologie.", point: "Trier météo et climat", revoir: "sv-meteo2" },
        { q: "Le climat se définit sur…", options: ["une grande surface et une longue période", "une petite zone et quelques jours", "une ville et une saison"], bonne: 0, explication: "C'est l'opposition centrale du chapitre : grande surface et longue durée pour le climat, petite zone et court terme pour la météo.", point: "Définir climat et météo", fixe: true },
        { q: "Où fait-il en moyenne le plus chaud ?", options: ["Près de l'équateur", "Près des pôles"], bonne: 0, explication: "C'est là que le Soleil chauffe le plus, car ses rayons y sont concentrés sur une petite surface.", point: "Les zones climatiques", revoir: "sv-climat" }
      ]
    },
    {
      id: "sv-courants",
      titre: "Les origines du climat : les courants atmosphériques",
      resume: "Les mouvements dans la basse et la haute atmosphère : vents, cyclones et jet-streams.",
      savaisTu: [
        "L'atmosphère est une enveloppe de 800 km d'épaisseur autour de la Terre, constituée principalement de gaz et de vapeur d'eau. Pourtant, presque tout le temps qu'il fait se joue dans les douze premiers kilomètres.",
        "L'Everest culmine à 8 848 m : il tient tout entier dans la basse atmosphère. Les avions de ligne, eux, volent au-dessus, à la limite de la haute atmosphère, là où soufflent les jet-streams.",
        "Les avions qui traversent l'Atlantique d'ouest en est gagnent presque une heure en se plaçant dans un jet-stream : le vent les pousse à 300 km/h. Dans l'autre sens, ils l'évitent.",
        "Une montgolfière vole grâce à une seule règle : l'air chaud monte, parce qu'il est plus léger que l'air froid qui l'entoure.",
        "Quand on ouvre la porte d'un four, l'air chaud file vers le plafond et l'air froid rase le sol : c'est un courant atmosphérique en miniature.",
        "Sans les vents, l'équateur serait encore plus brûlant et les pôles encore plus glacés. L'air en mouvement redistribue la chaleur du Soleil sur toute la planète.",
        "La pression de l'air se mesure avec un baromètre, en hectopascals. Autour de 1013 hPa, c'est la pression normale au niveau de la mer."
      ],
      missions: [
        { titre: "Le bilan de l'activité 2, à redire à voix haute", etapes: [
          "L'atmosphère est affectée en permanence de mouvements.",
          "Dans la basse atmosphère, les vents soufflent de manière diverse et peuvent donner des cyclones.",
          "Dans la haute atmosphère, le vent violent, ou jet-stream, circule régulièrement d'ouest en est.",
          "La définition à connaître — Jet-stream : vent très violent, de 90 à 360 km/h, soufflant d'ouest en est, à la limite de la basse et de la haute atmosphère."
        ] },
        { titre: "Les chiffres des documents", etapes: [
          "Épaisseur de l'atmosphère : 800 km.",
          "Basse atmosphère : de 0 à 12 km environ. C'est là que montent les fumées d'incendie, jusqu'à 4 km.",
          "Cyclone Fran : vents à 185 km/h, altitude 8 km, œil de 35 km, perturbation de 550 km.",
          "Éruption du volcan Sarytchev, 12 juin 2009 : poussières et gaz propulsés jusqu'à 14 km, puis nuage propagé entre 12 et 14 km.",
          "Jet-streams : 300 km/h, entre 10 et 15 km d'altitude. Le polaire vers 60° N, le subtropical vers 30° N."
        ] }
      ],
      supports: [
        { id: "sv-masses-air", titre: "Anticyclone et dépression : le mouvement des masses d'air", source: "C'est pas sorcier, extrait (apps.education)", type: "video", lien: "https://tube-sciences-technologies.apps.education.fr/w/9EpejRcFHxo9oqrLoLHJQn", etiquette: "decouvrir", note: "Un extrait court, préparé pour les élèves de 5e.", noteParent: "Plateforme de l'Éducation nationale (apps.education), extrait de C'est pas sorcier monté pour la 5e. C'est la première vidéo apps.education de l'application : si elle refuse de se lancer, signalez-le." },
        { id: "sv-vent-meteo", titre: "D'où vient le vent ? (Météo, l'émission complète)", source: "C'est pas sorcier", type: "video", lienDe: "sv-meteo1", etiquette: "consolider", noteParent: "Même épisode que dans le chapitre précédent : le lien est repris automatiquement." }
      ],
      quiz: [
        { q: "Quelle est l'épaisseur de l'atmosphère ?", options: ["Environ 800 km", "Environ 80 km", "Environ 8 000 km"], bonne: 0, explication: "C'est le chiffre du document 3 : une enveloppe de 800 km autour de la Terre.", point: "L'organisation de l'atmosphère" },
        { q: "De quoi l'atmosphère est-elle principalement constituée ?", options: ["De gaz et de vapeur d'eau", "De nuages et de poussières", "D'air liquide"], bonne: 0, explication: "C'est la définition du document 3.", point: "L'organisation de l'atmosphère" },
        { q: "Jusqu'à quelle altitude s'étend la basse atmosphère ?", options: ["Environ 12 km", "Environ 100 km", "Environ 800 km"], bonne: 0, explication: "De 0 à 12 km environ : c'est là que se jouent les vents et les cyclones.", point: "L'organisation de l'atmosphère" },
        { q: "Comment s'appelle la couche la plus basse de l'atmosphère ?", options: ["La troposphère", "La stratosphère", "La tropopause"], bonne: 0, explication: "Troposphère, puis tropopause qui la sépare de la stratosphère.", point: "L'organisation de l'atmosphère" },
        { q: "Où se trouve la couche d'ozone ?", options: ["Dans la stratosphère", "Dans la troposphère", "Au niveau du sol"], bonne: 0, explication: "Au-dessus de la tropopause, dans la stratosphère.", point: "L'organisation de l'atmosphère" },
        { q: "Quelle est l'altitude de l'Everest ?", options: ["8 848 m", "14 000 m", "4 000 m"], bonne: 0, explication: "Il tient entièrement dans la basse atmosphère.", point: "L'organisation de l'atmosphère" },
        { q: "Jusqu'à quelle hauteur montent les fumées d'un incendie de forêt ?", options: ["Environ 4 km", "Environ 14 km", "Environ 40 km"], bonne: 0, explication: "C'est la donnée du document 1 : la fumée reste dans la basse atmosphère.", point: "Les mouvements dans la basse atmosphère" },
        { q: "Que révèle la dispersion des fumées lors d'un incendie ?", options: ["L'existence de vents dans la basse atmosphère", "La présence de la couche d'ozone", "La vitesse des jet-streams"], bonne: 0, explication: "Les fumées sont entraînées par le vent : elles rendent le mouvement de l'air visible.", point: "Les mouvements dans la basse atmosphère" },
        { q: "À quelle vitesse soufflaient les vents du cyclone Fran ?", options: ["185 km/h", "85 km/h", "300 km/h"], bonne: 0, explication: "185 km/h, pour une altitude de 8 km.", point: "Les cyclones" },
        { q: "Quel est le diamètre de l'œil du cyclone Fran ?", options: ["35 km", "550 km", "8 km"], bonne: 0, explication: "35 km pour l'œil, mais 550 km pour toute la perturbation.", point: "Les cyclones" },
        { q: "Un cyclone est un mouvement de…", options: ["la basse atmosphère", "la haute atmosphère", "la stratosphère"], bonne: 0, explication: "Le cyclone Fran atteignait 8 km : il reste dans la basse atmosphère.", point: "Les cyclones" },
        { q: "Que s'est-il passé le 12 juin 2009 aux îles Kouriles ?", options: ["L'éruption du volcan Sarytchev", "Le passage du cyclone Fran", "Un incendie de forêt"], bonne: 0, explication: "Une éruption photographiée depuis la Station spatiale internationale.", point: "Les mouvements dans la haute atmosphère" },
        { q: "Jusqu'à quelle altitude la colonne de poussières du volcan est-elle montée ?", options: ["14 km", "4 km", "40 km"], bonne: 0, explication: "Puis le nuage s'est propagé entre 12 et 14 km d'altitude.", point: "Les mouvements dans la haute atmosphère" },
        { q: "Quel gaz le volcan a-t-il principalement rejeté ?", options: ["Du dioxyde de soufre", "Du dioxyde de carbone", "De l'ozone"], bonne: 0, explication: "C'est précisé dans le document 4.", point: "Les mouvements dans la haute atmosphère" },
        { q: "Comment les poussières volcaniques se sont-elles déplacées ensuite ?", options: ["Horizontalement, sur de grandes distances", "Verticalement, vers le sol", "Elles sont restées sur place"], bonne: 0, explication: "D'abord propulsées verticalement, puis entraînées horizontalement par les jet-streams.", point: "Les mouvements dans la haute atmosphère" },
        { q: "Qu'est-ce qu'un jet-stream ?", options: ["Un vent très violent, de 90 à 360 km/h, soufflant d'ouest en est à la limite de la basse et de la haute atmosphère", "Un courant marin chaud", "Un cyclone de haute altitude"], bonne: 0, explication: "C'est la définition à connaître mot pour mot.", point: "Les jet-streams" },
        { q: "Dans quel sens soufflent les jet-streams ?", options: ["D'ouest en est", "D'est en ouest", "Du nord au sud"], bonne: 0, explication: "Toujours d'ouest en est, régulièrement.", point: "Les jet-streams" },
        { q: "À quelle altitude circulent les jet-streams ?", options: ["Entre 10 et 15 km", "Entre 1 et 5 km", "Entre 100 et 150 km"], bonne: 0, explication: "À la limite entre la basse et la haute atmosphère.", point: "Les jet-streams" },
        { q: "Quelle est la vitesse des vents d'un jet-stream, d'après le document 5 ?", options: ["300 km/h", "185 km/h", "30 km/h"], bonne: 0, explication: "Bien plus rapide que les vents du cyclone Fran, qui soufflaient à 185 km/h.", point: "Les jet-streams" },
        { q: "Comment s'appellent les deux jet-streams de l'hémisphère nord ?", options: ["Le jet-stream polaire et le jet-stream subtropical", "Le jet-stream équatorial et le jet-stream polaire", "Le jet-stream chaud et le jet-stream froid"], bonne: 0, explication: "Le polaire vers 60° N, le subtropical vers 30° N.", point: "Les jet-streams" },
        { q: "Dans la basse atmosphère, les vents…", options: ["soufflent de manière diverse et peuvent donner des cyclones", "soufflent toujours d'ouest en est", "ne soufflent jamais"], bonne: 0, explication: "C'est la première moitié du bilan.", point: "Le bilan de l'activité 2" },
        { q: "Dans la haute atmosphère, le vent…", options: ["circule régulièrement d'ouest en est : c'est le jet-stream", "souffle dans tous les sens", "est très faible"], bonne: 0, explication: "C'est la seconde moitié du bilan : diversité en bas, régularité en haut.", point: "Le bilan de l'activité 2" },
        { q: "Que fait l'air chaud par rapport à l'air froid ?", options: ["Il monte", "Il descend", "Il reste immobile"], bonne: 0, explication: "C'est ce qui fait voler une montgolfière : l'air chaud monte.", point: "L'air chaud monte", revoir: "sv-masses-air" },
        { q: "Pourquoi l'air chaud monte-t-il ?", options: ["Parce qu'il est plus léger que l'air froid", "Parce que le vent le pousse", "Parce qu'il est attiré par le Soleil"], bonne: 0, explication: "Chauffé, l'air se dilate et devient moins dense : il s'élève au-dessus de l'air froid.", point: "L'air chaud monte" },
        { q: "Et l'air froid ?", options: ["Il descend, car il est plus lourd", "Il monte encore plus vite", "Il disparaît"], bonne: 0, explication: "L'air froid, plus dense, descend et prend la place de l'air chaud qui s'élève.", point: "L'air chaud monte" },
        { q: "Qu'est-ce qu'un vent ?", options: ["Un déplacement d'une masse d'air", "Un nuage qui avance", "De l'eau qui s'évapore"], bonne: 0, explication: "Le vent, c'est de l'air qui se déplace d'une zone à une autre.", point: "Les vents", revoir: "sv-masses-air" },
        { q: "Un anticyclone, c'est une zone de…", options: ["hautes pressions", "basses pressions", "pluie permanente"], bonne: 0, explication: "Anticyclone : pression élevée. Dépression : pression basse.", point: "Anticyclone et dépression", revoir: "sv-masses-air" },
        { q: "Une dépression, c'est une zone de…", options: ["basses pressions", "hautes pressions", "vent nul"], bonne: 0, explication: "Le mot le dit : la pression y est plus basse qu'ailleurs.", point: "Anticyclone et dépression", revoir: "sv-masses-air" },
        { q: "Dans quel sens souffle le vent ?", options: ["Des hautes pressions vers les basses pressions", "Des basses pressions vers les hautes pressions", "Toujours du nord vers le sud"], bonne: 0, explication: "L'air se déplace de l'anticyclone vers la dépression, comme de l'air qui s'échappe d'un ballon trop gonflé.", point: "Anticyclone et dépression", revoir: "sv-masses-air" },
        { q: "Quel temps un anticyclone apporte-t-il le plus souvent ?", options: ["Du beau temps", "De la pluie et des nuages", "De la neige à coup sûr"], bonne: 0, explication: "Quand la météo annonce un anticyclone, c'est en général le beau temps.", point: "Anticyclone et dépression" },
        { q: "Et une dépression ?", options: ["Des nuages et de la pluie", "Un grand soleil", "Aucun changement"], bonne: 0, explication: "Dans une dépression, l'air monte, se refroidit, et l'eau qu'il contient forme des nuages.", point: "Anticyclone et dépression" },
        { q: "À l'équateur, l'air très chauffé par le Soleil…", options: ["monte en altitude", "descend vers le sol", "reste sur place"], bonne: 0, explication: "C'est le point de départ des grands courants atmosphériques.", point: "Les courants à l'échelle de la Terre" },
        { q: "Quel est le rôle des courants atmosphériques pour le climat ?", options: ["Ils transportent la chaleur de l'équateur vers les pôles", "Ils refroidissent l'équateur jusqu'à le geler", "Ils n'ont aucun effet"], bonne: 0, explication: "Ils redistribuent l'énergie du Soleil, inégalement reçue selon la latitude.", point: "Les courants à l'échelle de la Terre" },
        { q: "Pourquoi l'air se met-il en mouvement à l'échelle de la planète ?", options: ["Parce que l'énergie solaire est inégalement répartie : l'équateur chauffe plus que les pôles", "Parce que la Terre est ronde, sans autre raison", "Parce que les océans le poussent"], bonne: 0, explication: "C'est le lien avec la première partie du chapitre : l'inégale répartition de l'énergie solaire crée des différences de température, donc des mouvements d'air.", point: "Les courants à l'échelle de la Terre" },
        { q: "Avec quel instrument mesure-t-on la pression atmosphérique ?", options: ["Un baromètre", "Un thermomètre", "Un pluviomètre"], bonne: 0, explication: "Thermomètre pour la température, pluviomètre pour la pluie, baromètre pour la pression.", point: "Mesurer l'atmosphère" },
        { q: "Les courants atmosphériques peuvent-ils modifier le climat d'une région ?", options: ["Oui", "Non"], bonne: 0, explication: "Un vent venu de l'océan ou du désert change la température et l'humidité d'une région.", point: "Les courants à l'échelle de la Terre" }
      ]
    },
    {
      id: "sv-vents",
      titre: "Le moteur des vents : le sable du Sahara dans les Pyrénées",
      resume: "L'activité 3 : pourquoi l'air se met en mouvement, et l'expérience de l'encens.",
      savaisTu: [
        "En janvier 2017, les skieurs des Pyrénées ont trouvé les pistes couvertes de sable orange. Il venait du Sahara, à plus de 2 000 km de là, porté par le vent.",
        "Ce sable retombe parfois jusqu'en Scandinavie. Les scientifiques le suivent à la trace, parce qu'il transporte du fer et du phosphore qui nourrissent les forêts et les océans.",
        "L'expérience de l'encens tient dans un verre de montre et un bloc de glace, mais elle explique un phénomène qui couvre la planète entière : partout, l'air chaud monte et l'air froid descend."
      ],
      missions: [
        { titre: "L'hypothèse de l'activité 3, à redire à voix haute", etapes: [
          "On sait que le Sahara se trouve en zone chaude, et la France en zone plus froide, tempérée.",
          "On peut donc supposer que le déplacement de l'air provient d'une variation de température entre zone chaude et zone froide.",
          "L'air se soulèverait dans les zones chaudes, emportant le sable.",
          "Il descendrait dans les zones plus froides, déposant le sable.",
          "Conclusion : c'est la variation de température qui crée le vent."
        ] },
        { titre: "L'expérience de l'encens, étape par étape", etapes: [
          "Allumer l'encens et le tenir verticalement.",
          "Observer la direction prise par la fumée : elle monte.",
          "Positionner un bloc froid sur le trajet de la fumée.",
          "On constate que la fumée chaude monte, mais qu'au contact du froid elle redescend, à cause de la basse température.",
          "On en déduit que l'air se soulève dans les zones chaudes et redescend dans les zones froides : c'est cette variation de température qui crée le vent."
        ] }
      ],
      supports: [],
      quiz: [
        { q: "Qu'ont découvert les skieurs des Pyrénées en janvier 2017 ?", options: ["Du sable sur les pistes", "Un nuage de cendres", "De la pluie rouge"], bonne: 0, explication: "C'est l'observation qui ouvre l'activité 3.", point: "L'observation de départ" },
        { q: "D'où venait ce sable ?", options: ["Du Sahara", "Des Alpes", "De l'océan Atlantique"], bonne: 0, explication: "Le sable a traversé la Méditerranée, porté par le vent.", point: "L'observation de départ" },
        { q: "Quel problème cherche-t-on à résoudre dans l'activité 3 ?", options: ["Quel est le moteur des mouvements atmosphériques ?", "Comment se forment les nuages ?", "Pourquoi il neige en montagne ?"], bonne: 0, explication: "Autrement dit : qu'est-ce qui met l'air en mouvement ?", point: "Le problème posé" },
        { q: "Dans quelle zone climatique se trouve le Sahara ?", options: ["La zone chaude", "La zone tempérée", "La zone froide"], bonne: 0, explication: "C'est la première moitié de l'hypothèse.", point: "L'hypothèse" },
        { q: "Et la France ?", options: ["En zone tempérée, donc plus froide que le Sahara", "En zone chaude", "En zone polaire"], bonne: 0, explication: "Une zone plus froide que le Sahara : c'est cette différence qui compte.", point: "L'hypothèse" },
        { q: "D'où provient le déplacement de l'air, selon l'hypothèse ?", options: ["D'une variation de température entre une zone chaude et une zone froide", "De la rotation de la Terre", "Du relief des montagnes"], bonne: 0, explication: "C'est l'hypothèse à compléter sur la fiche réponse.", point: "L'hypothèse" },
        { q: "Dans quelles zones l'air se soulève-t-il, emportant le sable ?", options: ["Les zones chaudes", "Les zones froides", "Les zones tempérées"], bonne: 0, explication: "L'air chaud monte, et emporte le sable avec lui.", point: "L'hypothèse" },
        { q: "Dans quelles zones l'air descend-il, déposant le sable ?", options: ["Les zones plus froides", "Les zones plus chaudes", "Au-dessus des océans"], bonne: 0, explication: "C'est pour cela que le sable du Sahara retombe sur les Pyrénées.", point: "L'hypothèse" },
        { q: "Quel matériel utilise l'expérience sur l'origine du vent ?", options: ["De l'encens et un bloc froid", "Un thermomètre et un baromètre", "Une bougie et un miroir"], bonne: 0, explication: "L'encens rend le mouvement de l'air visible grâce à sa fumée.", point: "L'expérience de l'encens" },
        { q: "Pourquoi utilise-t-on de l'encens plutôt que de l'air seul ?", options: ["Parce que la fumée rend le mouvement de l'air visible", "Parce que l'encens chauffe l'air", "Parce que l'encens sent bon"], bonne: 0, explication: "On ne voit pas l'air bouger : la fumée sert de témoin.", point: "L'expérience de l'encens" },
        { q: "Que fait la fumée de l'encens, au départ ?", options: ["Elle monte", "Elle descend", "Elle reste immobile"], bonne: 0, explication: "La fumée est chaude : elle s'élève.", point: "L'expérience de l'encens" },
        { q: "Que se passe-t-il quand la fumée rencontre le bloc froid ?", options: ["Elle redescend, à cause de la basse température", "Elle monte plus vite", "Elle disparaît"], bonne: 0, explication: "C'est le « on constate que » de la fiche réponse.", point: "L'expérience de l'encens" },
        { q: "Qu'en déduit-on ?", options: ["L'air se soulève dans les zones chaudes et redescend dans les zones froides", "L'air se déplace toujours vers le nord", "La fumée est plus légère que l'air"], bonne: 0, explication: "C'est le « on en déduit que » de la fiche réponse.", point: "L'expérience de l'encens" },
        { q: "Qu'est-ce qui crée le vent ?", options: ["La variation de température entre les zones", "La rotation de la Terre seule", "Les nuages"], bonne: 0, explication: "C'est la conclusion de l'activité 3, et la réponse au problème posé.", point: "La conclusion" },
        { q: "Quelle différence y a-t-il entre « on constate que » et « on en déduit que » ?", options: ["On constate ce qu'on voit ; on en déduit ce qu'on comprend", "C'est la même chose", "On constate ce qu'on imagine ; on en déduit ce qu'on voit"], bonne: 0, explication: "Constater, c'est décrire le résultat de l'expérience. Déduire, c'est en tirer une règle.", point: "La méthode scientifique" },
        { q: "Qu'est-ce qu'une hypothèse, en sciences ?", options: ["Une explication possible, qu'il faut ensuite vérifier par une expérience", "Un résultat prouvé", "Une question"], bonne: 0, explication: "L'objectif méthodologique de l'activité : formuler une hypothèse et mettre en place un protocole pour la tester.", point: "La méthode scientifique" },
        { q: "À quoi sert un protocole expérimental ?", options: ["À décrire les étapes de l'expérience pour pouvoir la refaire", "À donner la réponse à l'avance", "À dessiner le résultat"], bonne: 0, explication: "Un protocole, ce sont les étapes numérotées, dans l'ordre.", point: "La méthode scientifique" }
      ]
    }
  ]
});
