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
    },
    {
      id: "en-grammar1",
      titre: "Grammar : be, have, l'impératif, there is / there are",
      resume: "Tout ce qui tombe au contrôle du 24 septembre : se présenter, présenter quelqu'un, dire ses goûts.",
      savaisTu: [
        "L'anglais ne fait aucune différence entre « tu » et « vous » : c'est you dans les deux cas. En revanche, I s'écrit toujours avec une majuscule, même au milieu d'une phrase.",
        "En anglais, l'ordre des mots ne bouge presque jamais : sujet, verbe, complément. C'est ce qui permet de se passer d'accords compliqués.",
        "Les verbes de goût (like, love, hate, enjoy) sont suivis d'un nom, d'un pronom, ou d'un verbe en -ing : I like reading. Avec l'infinitif, c'est possible aussi, sauf après enjoy."
      ],
      supports: [],
      quiz: [
        { q: "She ___ two brothers.", options: ["has", "have", "is"], bonne: 0, explication: "He, she et it prennent has. Partout ailleurs, c'est have.", point: "Choisir entre be et have", fixe: true },
        { q: "We ___ ready for the new school year.", options: ["are", "is", "have"], bonne: 0, explication: "We are : être prêt, c'est be, pas have.", point: "Choisir entre be et have", fixe: true },
        { q: "I ___ a dog and two cats.", options: ["have", "has", "am"], bonne: 0, explication: "I have. Attention, jamais « I has ».", point: "Choisir entre be et have" },
        { q: "You ___ very tall.", options: ["are", "is", "have"], bonne: 0, explication: "Être grand, c'est be : you are.", point: "Choisir entre be et have" },
        { q: "I ___ 12 years old.", options: ["am", "have", "is"], bonne: 0, explication: "Le piège classique : en anglais on ne « possède » pas son âge, on l'est. I am 12 years old.", point: "Choisir entre be et have", fixe: true },
        { q: "My classmates ___ very nice.", options: ["are", "is", "have"], bonne: 0, explication: "Classmates est au pluriel : are.", point: "Choisir entre be et have" },
        { q: "He ___ a new blue backpack.", options: ["has", "is", "have"], bonne: 0, explication: "Il possède un sac : he has.", point: "Choisir entre be et have" },
        { q: "Comment contracte-t-on « I am » à l'oral ?", options: ["I'm", "I're", "I's"], bonne: 0, explication: "I am → I'm, it is → it's, we are → we're.", point: "Les contractions" },
        { q: "Quelle est la contraction de « we are » ?", options: ["we're", "we'are", "wer'e"], bonne: 0, explication: "L'apostrophe remplace le a qui disparaît.", point: "Les contractions" },
        { q: "Le pronom « I » s'écrit…", options: ["toujours avec une majuscule", "avec une minuscule sauf en début de phrase", "comme on veut"], bonne: 0, explication: "Toujours en majuscule, même au milieu d'une phrase.", point: "Les pronoms personnels sujets", fixe: true },
        { q: "Pour dire « tu » et « vous », l'anglais utilise…", options: ["you dans les deux cas", "you et thou", "you et yours"], bonne: 0, explication: "Une seule forme : you.", point: "Les pronoms personnels sujets", fixe: true },
        { q: "Quel pronom remplace « the cat » ?", options: ["it", "he", "they"], bonne: 0, explication: "Pour un animal ou un objet, on utilise it.", point: "Les pronoms personnels sujets" },
        { q: "À l'impératif affirmatif, on utilise…", options: ["la base verbale, sans sujet : Listen!", "le sujet + le verbe : You listen!", "to + verbe : To listen!"], bonne: 0, explication: "Listen! Be kind to your classmates!", point: "L'impératif", fixe: true },
        { q: "Comment dit-on « ne bavarde pas en classe » ?", options: ["Don't chitchat in class!", "No chitchat in class!", "Not chitchat in class!"], bonne: 0, explication: "À la forme négative : don't (contraction de do not) suivi de la base verbale.", point: "L'impératif", fixe: true },
        { q: "« Don't be late for class! » veut dire…", options: ["Ne sois pas en retard en cours", "Ne viens pas en cours", "Sois en retard en cours"], bonne: 0, explication: "Même avec be, la négation se fait avec don't.", point: "L'impératif" },
        { q: "There ___ a new student in my class.", options: ["is", "are", "have"], bonne: 0, explication: "There is + singulier. There are + pluriel.", point: "There is / There are", fixe: true },
        { q: "There ___ books in my backpack.", options: ["are", "is", "have"], bonne: 0, explication: "Books est au pluriel : there are.", point: "There is / There are", fixe: true },
        { q: "There ___ four notebooks in my school bag.", options: ["are", "is"], bonne: 0, explication: "Quatre cahiers : pluriel, donc are.", point: "There is / There are" },
        { q: "There ___ a computer in the classroom.", options: ["is", "are"], bonne: 0, explication: "Un seul ordinateur : is.", point: "There is / There are" },
        { q: "« There is » et « there are » servent à dire…", options: ["il y a", "il est", "ils ont"], bonne: 0, explication: "C'est l'équivalent de « il y a », et il s'accorde avec le nom qui suit.", point: "There is / There are" },
        { q: "Après « I like », on peut mettre…", options: ["un verbe en -ing : I like reading", "un verbe à l'infinitif avec to seulement", "rien du tout"], bonne: 0, explication: "Un nom, un pronom, ou un verbe en -ing. L'infinitif est possible aussi, sauf après enjoy.", point: "Exprimer ses goûts", fixe: true },
        { q: "Quel verbe exprime le goût le plus fort, en positif ?", options: ["love", "like", "enjoy"], bonne: 0, explication: "I love my friends est plus fort que I like my friends.", point: "Exprimer ses goûts" },
        { q: "Comment dit-on « je déteste les araignées » ?", options: ["I hate spiders", "I dislike spiders", "I don't like spiders"], bonne: 0, explication: "Hate, c'est détester. Dislike et don't like sont plus doux.", point: "Exprimer ses goûts" },
        { q: "Pour dire son livre préféré, on utilise…", options: ["My favourite book is Harry Potter", "My prefered book is Harry Potter", "I favourite Harry Potter"], bonne: 0, explication: "Favourite est un adjectif, placé devant le nom.", point: "Exprimer ses goûts", fixe: true },
        { q: "Remets dans l'ordre : pizza / burgers / like / and / I", options: ["I like pizza and burgers.", "I pizza and burgers like.", "Like I pizza and burgers."], bonne: 0, explication: "Sujet, verbe, complément : l'ordre ne change pas.", point: "Construire une phrase", fixe: true },
        { q: "Remets dans l'ordre : superhero / Batman / is / favourite / my", options: ["Batman is my favourite superhero.", "My favourite is Batman superhero.", "Batman my favourite is superhero."], bonne: 0, explication: "L'adjectif favourite se place avant le nom superhero.", point: "Construire une phrase" },
        { q: "Remets dans l'ordre : comic / love / books / I / reading", options: ["I love reading comic books.", "I reading love comic books.", "Love I reading comic books."], bonne: 0, explication: "Après love, le verbe prend -ing.", point: "Construire une phrase" },
        { q: "Remets dans l'ordre : homework / like / my / doing / I / don't", options: ["I don't like doing my homework.", "I like don't doing my homework.", "Don't I like doing my homework."], bonne: 0, explication: "La négation don't se place entre le sujet et le verbe.", point: "Construire une phrase" },
        { q: "Pour présenter quelqu'un, on commence souvent par…", options: ["His name is… / Her name is…", "He name is…", "Name his is…"], bonne: 0, explication: "His pour un garçon, her pour une fille.", point: "Présenter une personne", fixe: true },
        { q: "Wednesday Addams a un frère, Pugsley. Comment le dire ?", options: ["She has one brother.", "She have one brother.", "She is one brother."], bonne: 0, explication: "She has : troisième personne du singulier.", point: "Présenter une personne" },
        { q: "Comment dire qu'elle a les cheveux noirs et les yeux sombres ?", options: ["She has black hair and dark eyes.", "She is black hair and dark eyes.", "She have black hair and dark eyes."], bonne: 0, explication: "Décrire physiquement, c'est have. Décrire un caractère, c'est be : she is serious.", point: "Présenter une personne", fixe: true },
        { q: "Comment dire d'où vient Paddington ?", options: ["He is a bear from Peru.", "He has a bear from Peru.", "He is come from Peru."], bonne: 0, explication: "L'origine et la nationalité se disent avec be.", point: "Présenter une personne", fixe: true },
        { q: "Comment dire qu'il est poli et gentil ?", options: ["He is very polite and kind.", "He has very polite and kind.", "He very polite and kind."], bonne: 0, explication: "Un caractère, un adjectif : be.", point: "Présenter une personne" },
        { q: "Comment dire qu'il a un manteau bleu et un chapeau rouge ?", options: ["He has a blue coat and a red hat.", "He is a blue coat and a red hat.", "He have a blue coat and a red hat."], bonne: 0, explication: "Ce qu'on possède ou ce qu'on porte : have, et has à la troisième personne.", point: "Présenter une personne" },
        { q: "En anglais, l'adjectif de couleur se place…", options: ["devant le nom : a blue coat", "après le nom : a coat blue", "n'importe où"], bonne: 0, explication: "Toujours devant le nom, contrairement au français.", point: "Présenter une personne", fixe: true }
      ]
    }
  ]
});
