matiere({
  id: "techno", nom: "Technologie", couleur: "#5B6778", icone: "💻",
  chapitres: [
    {
      id: "te-fichiers",
      titre: "Fichiers et dossiers",
      resume: "Enregistrer un fichier dans un dossier. « Enregistrer » ou « Enregistrer sous » ?",
      savaisTu: [
        "L'icône « Enregistrer » représente une disquette, un support des années 1980-1990 qui contenait environ 1,4 Mo, à peine une photo de téléphone.",
        "« Arborescence » vient d'« arbre » : le dossier principal est le tronc, les sous-dossiers sont les branches, les fichiers sont les feuilles."
      ],
      missions: [
        { titre: "Mission à la maison : ranger ses fichiers", etapes: [
          "Crée un dossier « Collège ».",
          "À l'intérieur, crée un sous-dossier par matière.",
          "Ouvre un nouveau document, écris une phrase et enregistre-le dans le bon sous-dossier.",
          "Modifie la phrase et clique sur « Enregistrer ».",
          "Clique sur « Enregistrer sous » et donne-lui un autre nom. Tu as maintenant deux fichiers !"
        ] }
      ],
      supports: [],
      quiz: [
        { q: "Que fait « Enregistrer » sur un fichier déjà enregistré ?", options: ["Il garde les modifications dans le même fichier, au même endroit", "Il crée une copie avec un nouveau nom", "Il supprime le fichier"], bonne: 0, explication: "Même nom, même endroit : l'ancienne version est remplacée.", point: "Enregistrer et Enregistrer sous" },
        { q: "Que permet « Enregistrer sous » ?", options: ["Choisir un nouveau nom ou un nouvel emplacement", "Fermer le logiciel", "Imprimer le document"], bonne: 0, explication: "On crée un nouveau fichier ; l'ancien reste tel qu'il était.", point: "Enregistrer et Enregistrer sous" },
        { q: "Tu veux garder l'ancienne version ET la nouvelle. Tu utilises…", options: ["Enregistrer sous", "Enregistrer"], bonne: 0, explication: "« Enregistrer » écraserait l'ancienne version ; « Enregistrer sous » crée un second fichier.", point: "Enregistrer et Enregistrer sous" },
        { q: "La première fois qu'on clique sur « Enregistrer » pour un nouveau document…", options: ["l'ordinateur demande un nom et un emplacement", "rien ne se passe", "le document est envoyé par mail"], bonne: 0, explication: "Le document n'existe pas encore : l'ordinateur agit comme « Enregistrer sous ».", point: "Enregistrer et Enregistrer sous" },
        { q: "À quoi sert un dossier ?", options: ["À ranger des fichiers et d'autres dossiers", "À écrire un texte", "À allumer l'ordinateur"], bonne: 0, explication: "Un dossier est un contenant, comme un classeur.", point: "Fichier, dossier, sous-dossier" },
        { q: "Un sous-dossier, c'est…", options: ["un dossier rangé dans un autre dossier", "un fichier abîmé", "un dossier vide"], bonne: 0, explication: "Par exemple, le dossier « Maths » rangé dans le dossier « Collège ».", point: "Fichier, dossier, sous-dossier" },
        { q: "Lequel est un fichier ?", options: ["exposé.docx", "Collège", "Maths"], bonne: 0, explication: "Un fichier a souvent une extension après le point (.docx, .jpg) : c'est un document.", point: "Fichier, dossier, sous-dossier" },
        { q: "L'arborescence, c'est…", options: ["l'organisation des dossiers et sous-dossiers, comme les branches d'un arbre", "la liste des logiciels", "le fond d'écran"], bonne: 0, explication: "On part du dossier principal et on descend de branche en branche.", point: "L'arborescence" }
      ]
    }
  ]
});
