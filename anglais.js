matiere({
  id: "anglais", nom: "Anglais", couleur: "#0B7A7F", icone: "💂",
  chapitres: [
    {
      id: "en-unit1",
      titre: "Classroom English et Unit 1 : Back in the game",
      resume: "Les phrases de la classe, « Do you like…? », pays et nationalités, pronoms, possessifs et verbe BE.",
      savaisTu: [
        "Le Royaume-Uni réunit quatre nations : l'Angleterre, l'Écosse, le pays de Galles et l'Irlande du Nord.",
        "En anglais, les nationalités et les langues prennent toujours une majuscule : French, Spanish, English.",
        "« Please » vient du vieux français « plaisir », de la même famille que « s'il vous plaît »."
      ],
      supports: [
        { id: "en-pronoms", titre: "Pronoms, adjectifs et pronoms possessifs", source: "Cours de collège", type: "video", lien: "https://www.youtube.com/watch?v=QASym8pkj2I", etiquette: "consolider", note: "Arrête-toi avant les pronoms relatifs : ce n'est pas au programme cette année.", noteParent: "Vous pouvez régler l'heure de fin juste avant la partie sur les relatifs (champ « fin »)." },
        { id: "en-tobe", titre: "To Be with Countries and Nationalities", source: "YouTube", type: "video", lien: "https://www.youtube.com/watch?v=PAB18ECDgto", etiquette: "consolider", note: "Tout en anglais.", verifier: true, noteParent: "Chaîne non identifiée : à visionner avant d'ouvrir." },
        { id: "en-4nations", titre: "Word on the Street : Four Nations", source: "British Council LearnEnglish Teens", type: "video", lien: "", etiquette: "decouvrir", noteParent: "Adresse YouTube à récupérer sur la chaîne officielle du British Council." }
      ],
      quiz: [
        { q: "Tu ne comprends pas ce que dit le professeur. Tu dis…", options: ["I don't understand.", "I don't know.", "I'm late!"], bonne: 0, explication: "« I don't understand » : je ne comprends pas. « I don't know » veut dire je ne sais pas.", point: "Classroom English : demander de l'aide" },
        { q: "Tu cherches un mot en anglais. Tu demandes…", options: ["How do you say… ?", "Can I have a tissue?", "May I go to the bin?"], bonne: 0, explication: "« How do you say… ? » ou « What's the English for… ? » servent à demander un mot.", point: "Classroom English : demander de l'aide" },
        { q: "Tu arrives en retard en cours. Tu dis…", options: ["I'm late!", "I didn't do my homework.", "Good afternoon!"], bonne: 0, explication: "« I'm late » : je suis en retard. On l'accompagne de « Sorry! ».", point: "Classroom English : s'excuser" },
        { q: "Tu as oublié ton cahier. Tu dis…", options: ["I don't have my notebook.", "I don't have my homework.", "Can you close the blinds?"], bonne: 0, explication: "« Notebook » veut dire cahier.", point: "Classroom English : s'excuser" },
        { q: "Pour demander poliment d'aller aux toilettes, tu dis…", options: ["May I go to the toilet?", "Can you switch on the lights?", "May I open the windows?"], bonne: 0, explication: "« May I… ? » est la façon polie de demander la permission.", point: "Classroom English : demander poliment" },
        { q: "La consigne « Underline » veut dire…", options: ["Souligner", "Entourer", "Barrer"], bonne: 0, explication: "« Line », c'est la ligne : « underline », tracer une ligne dessous.", point: "Classroom English : les consignes" },
        { q: "La consigne « Circle » veut dire…", options: ["Entourer", "Cocher", "Colorier"], bonne: 0, explication: "« Circle », c'est le cercle : on entoure.", point: "Classroom English : les consignes" },
        { q: "La consigne « Tick » veut dire…", options: ["Cocher", "Barrer", "Relier"], bonne: 0, explication: "« Tick », c'est le petit signe ✓ qu'on trace pour cocher.", point: "Classroom English : les consignes" },
        { q: "La consigne « Cross out » veut dire…", options: ["Barrer", "Souligner", "Surligner"], bonne: 0, explication: "« Cross », c'est la croix : on barre.", point: "Classroom English : les consignes" },
        { q: "La consigne « Match » veut dire…", options: ["Relier", "Écouter", "Dessiner"], bonne: 0, explication: "« Match » : associer deux éléments qui vont ensemble, souvent en les reliant.", point: "Classroom English : les consignes" },
        { q: "« Do you like football? » Quelle réponse est correcte ?", options: ["Yes, I do.", "Yes, I like.", "Yes, I am."], bonne: 0, explication: "On reprend l'auxiliaire de la question : « Do you…? » → « Yes, I do » ou « No, I don't ».", point: "Do you like… ?" },
        { q: "She is from Spain. She is…", options: ["Spanish", "Spain", "Spanol"], bonne: 0, explication: "Spain est le pays, Spanish la nationalité (et la langue).", point: "Pays et nationalités", revoir: "en-tobe" },
        { q: "Vrai ou faux : en anglais, « french » s'écrit sans majuscule, comme en français.", options: ["Vrai", "Faux"], bonne: 1, explication: "En anglais, nationalités et langues prennent toujours une majuscule : French.", point: "Pays et nationalités", revoir: "en-tobe" },
        { q: "They ___ from Scotland.", options: ["are", "is", "am"], bonne: 0, explication: "BE au présent : I am, he / she / it is, we / you / they are.", point: "Le verbe BE", revoir: "en-tobe" },
        { q: "I ___ twelve.", options: ["am", "is", "are"], bonne: 0, explication: "Avec I, toujours « am » : I am twelve (l'âge se dit avec BE).", point: "Le verbe BE", revoir: "en-tobe" },
        { q: "My brother is ten. ___ is funny.", options: ["He", "She", "It"], bonne: 0, explication: "Pour un garçon ou un homme, le pronom sujet est « he ».", point: "Pronoms sujets", revoir: "en-pronoms" },
        { q: "Emma has a blue bag. ___ bag is blue.", options: ["Her", "His", "Its"], bonne: 0, explication: "Le possessif s'accorde avec le possesseur : Emma est une fille, donc « her ».", point: "Adjectifs possessifs", revoir: "en-pronoms" },
        { q: "Tom and his sister live here. ___ house is big.", options: ["Their", "His", "Our"], bonne: 0, explication: "Plusieurs possesseurs (ils / elles) : « their ».", point: "Adjectifs possessifs", revoir: "en-pronoms" }
      ]
    }
  ]
});
