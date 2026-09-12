matiere({
  id: "arts", nom: "Arts plastiques", couleur: "#A5449F", icone: "🎨",
  chapitres: [
    {
      id: "ar-monstre",
      titre: "J'ai vu un monstre !",
      resume: "Gargouilles, chimères et créatures hybrides.",
      savaisTu: [
        "Une gargouille est d'abord une gouttière : sa gueule ouverte crache l'eau de pluie loin des murs. Un lien avec l'eau en physique-chimie.",
        "Dans la mythologie grecque, la Chimère est un monstre à la fois lion, chèvre et serpent. Le héros Bellérophon la vainc, monté sur le cheval ailé Pégase.",
        "Les célèbres chimères de Notre-Dame de Paris ne sont pas médiévales : elles ont été ajoutées au XIXe siècle par l'architecte Viollet-le-Duc."
      ],
      supports: [
        { id: "ar-gargouilles", titre: "Gargouilles : vous ne les regarderez plus comme avant", source: "YouTube", type: "video", lien: "https://www.youtube.com/watch?v=VP-wLg73Rto", etiquette: "decouvrir", verifier: true, noteParent: "Chaîne non identifiée : à visionner avant d'ouvrir." },
        { id: "ar-bosch", titre: "Jérôme Bosch, entre ciel et enfer", source: "Documentaire", type: "video", lien: "https://www.youtube.com/watch?v=5gZUTBD84CU", etiquette: "plusloin", verifier: true, noteParent: "À regarder d'abord par les parents : visions d'enfer, nus." }
      ],
      quiz: [
        { q: "Une esquisse, c'est…", options: ["un premier dessin rapide qui pose les grandes lignes d'une œuvre", "une œuvre terminée et encadrée", "une sculpture en pierre"], bonne: 0, explication: "L'esquisse prépare l'œuvre : on cherche la composition avant les détails.", point: "Esquisse et croquis" },
        { q: "Un croquis, c'est…", options: ["un dessin rapide fait sur le vif, souvent d'après ce qu'on observe", "un tableau à l'huile", "une photographie"], bonne: 0, explication: "Le croquis saisit l'essentiel d'un sujet en quelques traits.", point: "Esquisse et croquis" },
        { q: "Une créature hybride est…", options: ["composée de parties de plusieurs êtres différents", "un animal très grand", "un monstre invisible"], bonne: 0, explication: "Tête d'un animal, corps d'un autre : c'est un hybride, comme la Chimère.", point: "Hybrides et chimères" },
        { q: "Dans la mythologie grecque, la Chimère est à la fois…", options: ["lion, chèvre et serpent", "aigle, cheval et poisson", "loup, ours et dragon"], bonne: 0, explication: "Un seul monstre, trois animaux : c'est l'hybride le plus célèbre.", point: "Hybrides et chimères" },
        { q: "À quoi sert d'abord une gargouille ?", options: ["À évacuer l'eau de pluie loin des murs", "À faire peur aux voleurs", "À soutenir le toit"], bonne: 0, explication: "C'est une gouttière sculptée : l'eau sort par sa gueule.", point: "Gargouilles et chimères", revoir: "ar-gargouilles" },
        { q: "À Notre-Dame de Paris, quelle différence entre une gargouille et une chimère ?", options: ["La gargouille évacue l'eau, la chimère est seulement décorative", "Aucune, c'est la même chose", "La chimère évacue l'eau, la gargouille est décorative"], bonne: 0, explication: "Les chimères, ajoutées par Viollet-le-Duc, ne crachent pas d'eau.", point: "Gargouilles et chimères", revoir: "ar-gargouilles" }
      ]
    }
  ]
});
