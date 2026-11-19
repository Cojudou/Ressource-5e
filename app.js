/* Ressources 5e — médiathèque fermée par matière.
   Aucun lien sortant côté élève. Lecture dans l'application, reprise, fermeture automatique en fin de support.
   Toutes les données (progression, quiz, réglages parent) restent dans le navigateur de l'appareil. */
(function () {
  'use strict';

  var VERSION = '1.1';
  var ORDRE = ['francais', 'maths', 'anglais', 'espagnol', 'histoire', 'geographie', 'emc', 'svt', 'physique', 'techno', 'arts', 'sport', 'hygiene'];
  var ETIQ = {
    decouvrir: { t: 'Pour découvrir', i: '🔎' },
    consolider: { t: 'Pour consolider', i: '🔁' },
    plusloin: { t: 'Pour aller plus loin', i: '🚀' },
    niveau1: { t: 'Niveau 1 · les bases', i: '🌱' },
    niveau2: { t: 'Niveau 2 · entraînement', i: '🌿' },
    niveau3: { t: 'Niveau 3 · défi 5e', i: '🌳' }
  };
  var NB_QUESTIONS = 8;

  /* ================= Utilitaires ================= */
  function $(s, r) { return (r || document).querySelector(s); }
  function h(tag, props) {
    var e = document.createElement(tag);
    if (props) {
      Object.keys(props).forEach(function (k) {
        var v = props[k];
        if (v == null || v === false) return;
        if (k === 'class') e.className = v;
        else if (k === 'style') e.style.cssText = v;
        else if (k === 'text') e.textContent = v;
        else if (k.slice(0, 2) === 'on') e.addEventListener(k.slice(2), v);
        else if (k === 'value' || k === 'disabled' || k === 'checked' || k === 'selected') e[k] = v;
        else e.setAttribute(k, v === true ? '' : v);
      });
    }
    for (var i = 2; i < arguments.length; i++) ajouter(e, arguments[i]);
    return e;
  }
  function ajouter(e, k) {
    if (k == null || k === false) return;
    if (Array.isArray(k)) { k.forEach(function (x) { ajouter(e, x); }); return; }
    e.appendChild(typeof k === 'string' || typeof k === 'number' ? document.createTextNode(String(k)) : k);
  }
  function vider(e) { while (e.firstChild) e.removeChild(e.firstChild); return e; }
  function melanger(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function fmt(t) {
    t = Math.max(0, Math.floor(t || 0));
    var hh = Math.floor(t / 3600), m = Math.floor((t % 3600) / 60), s = t % 60;
    return (hh ? hh + ':' + String(m).padStart(2, '0') : m) + ':' + String(s).padStart(2, '0');
  }
  function lireTemps(txt) { // "1:30" -> 90 ; "" -> null ; invalide -> NaN
    txt = String(txt == null ? '' : txt).trim();
    if (!txt) return null;
    if (!/^\d+(:\d{1,2}){0,2}$/.test(txt)) return NaN;
    return txt.split(':').reduce(function (acc, x) { return acc * 60 + parseInt(x, 10); }, 0);
  }
  function melange(hex, part, vers) { // mélange une couleur avec du blanc (vers=255) ou du noir (vers=0)
    var n = parseInt(hex.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    var f = function (c) { return Math.round(c + (vers - c) * part); };
    return 'rgb(' + f(r) + ',' + f(g) + ',' + f(b) + ')';
  }
  function varsCouleur(c) {
    return '--c:' + c + ';--teinte:' + melange(c, 0.84, 255) + ';--teinte2:' + melange(c, 0.92, 255) + ';--fonce:' + melange(c, 0.42, 0);
  }
  function hacher(s) { var x = 5381; for (var i = 0; i < s.length; i++) x = ((x << 5) + x + s.charCodeAt(i)) >>> 0; return 'h' + x.toString(36); }
  function toast(msg) {
    var t = h('div', { class: 'toast', role: 'status', text: msg });
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 2600);
  }

  /* ================= Stockage (navigateur, avec repli en mémoire) ================= */
  var Store = (function () {
    var ok = true, mem = {};
    try { localStorage.setItem('__r5e', '1'); localStorage.removeItem('__r5e'); } catch (e) { ok = false; }
    return {
      ok: function () { return ok; },
      get: function (k, def) {
        try { var v = ok ? localStorage.getItem(k) : mem[k]; return v == null ? def : JSON.parse(v); } catch (e) { return def; }
      },
      set: function (k, v) {
        var s = JSON.stringify(v);
        if (ok) { try { localStorage.setItem(k, s); return; } catch (e) { ok = false; } }
        mem[k] = s;
      },
      del: function (k) { if (ok) { try { localStorage.removeItem(k); } catch (e) {} } delete mem[k]; }
    };
  })();
  if (navigator.storage && navigator.storage.persist) { try { navigator.storage.persist(); } catch (e) {} }

  var CLES = { prog: 'r5e.progression', quiz: 'r5e.quiz', parent: 'r5e.parent', code: 'r5e.code', onglet: 'r5e.onglet', jeux: 'r5e.jeux' };
  var prog = Store.get(CLES.prog, {});
  var QS = Store.get(CLES.quiz, { points: {}, rates: {} });
  var JX = Store.get(CLES.jeux, {}); // résultats des jeux : { idJeu: { etoiles, record, parties, t } }
  if (!JX || typeof JX !== 'object') JX = {};
  function sauverJX() { Store.set(CLES.jeux, JX); }
  var P = normaliserParent(Store.get(CLES.parent, {}));
  function normaliserParent(p) {
    p = p || {};
    ['ajouts', 'retires', 'valides', 'chapitres'].forEach(function (k) { if (!Array.isArray(p[k])) p[k] = []; });
    ['liens', 'reglages', 'erreurs'].forEach(function (k) { if (!p[k] || typeof p[k] !== 'object') p[k] = {}; });
    return p;
  }
  function sauverProg() { Store.set(CLES.prog, prog); }
  function sauverQS() { Store.set(CLES.quiz, QS); }
  function sauverP() { Store.set(CLES.parent, P); }

  /* ================= Liens ================= */
  function lireT(v) { // paramètre t= de YouTube : "90", "90s", "1m30s"
    if (!v) return 0;
    if (/^\d+$/.test(v)) return +v;
    var m = v.match(/(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?/);
    return m ? (+(m[1] || 0)) * 3600 + (+(m[2] || 0)) * 60 + (+(m[3] || 0)) : 0;
  }
  function analyserLien(url) {
    url = String(url || '').trim();
    if (!url) return null;
    if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
    var u; try { u = new URL(url); } catch (e) { return null; }
    var hote = u.hostname.replace(/^(www\.|m\.|music\.)/, '');
    var id = null;
    if (hote === 'youtu.be') id = u.pathname.slice(1).split('/')[0];
    else if (/^youtube(-nocookie)?\.com$/.test(hote)) {
      if (u.searchParams.get('v')) id = u.searchParams.get('v');
      else { var m = u.pathname.match(/^\/(embed|shorts|live|v)\/([\w-]{11})/); if (m) id = m[2]; }
    }
    if (id && /^[\w-]{11}$/.test(id)) return { type: 'youtube', id: id, debut: lireT(u.searchParams.get('t') || u.searchParams.get('start')) };
    if (/\.(mp3|m4a|aac|oga|ogg|opus|wav)$/i.test(u.pathname)) return { type: 'audio', src: u.href };
    if (/\.(mp4|m4v|webm|ogv)$/i.test(u.pathname)) return { type: 'fichier', src: u.href };
    var pt = u.pathname.match(/^\/(?:w|videos\/watch|videos\/embed)\/([\w-]+)/);
    if (pt) return { type: 'peertube', origine: u.origin, id: pt[1] };
    return null;
  }
  function cleMedia(media, debut, fin) {
    var base = media.type === 'youtube' ? 'yt:' + media.id : media.type === 'peertube' ? 'pt:' + media.origine + '/' + media.id : 'f:' + media.src;
    return (debut || fin) ? base + '@' + (debut || 0) + '-' + (fin || '') : base;
  }
  function vignette(s) {
    if (s.media && s.media.type === 'youtube') return 'https://i.ytimg.com/vi/' + s.media.id + '/mqdefault.jpg';
    return null;
  }

  /* ================= Modèle ================= */
  var M = { matieres: [], index: {} };
  function construire() {
    var donnees = window.R5E_DATA || [];
    var liste = ORDRE.map(function (id) { return donnees.filter(function (m) { return m.id === id; })[0]; }).filter(Boolean)
      .concat(donnees.filter(function (m) { return ORDRE.indexOf(m.id) < 0; }));
    var index = {};
    var mats = liste.map(function (m) {
      var chaps = P.chapitres.filter(function (c) { return c.matiere === m.id; }).slice().reverse()
        .map(function (c) { return { id: c.id, titre: c.titre, resume: '', supports: [], savaisTu: [], quiz: [], missions: [], jeux: [], ajoutParent: true }; })
        .concat((m.chapitres || []).map(function (c) {
          return {
            id: c.id, titre: c.titre, resume: c.resume || '', savaisTu: c.savaisTu || [], missions: c.missions || [],
            quiz: c.quiz || [], supports: (c.supports || []).map(function (s) { return Object.assign({}, s); }),
            jeux: (c.jeux || []).filter(function (j) { return j && j.id && MOTEURS[j.type]; }),
            matiere: c.matiere || null, objectif: c.objectif || ''
          };
        }));
      P.ajouts.filter(function (a) { return a.matiere === m.id; }).forEach(function (a) {
        var ch = chaps.filter(function (c) { return c.id === a.chapitre; })[0];
        if (ch) ch.supports.push(Object.assign({}, a, { ajoutParent: true }));
      });
      var mat = { id: m.id, nom: m.nom, couleur: m.couleur || '#5B6778', icone: m.icone || '📁', chapitres: chaps, intro: m.intro || null, unite: m.unite || null };
      chaps.forEach(function (c) { c.supports.forEach(function (s) { index[s.id] = { s: s, m: mat, c: c }; }); });
      return mat;
    });
    Object.keys(index).forEach(function (id) {
      var s = index[id].s, reg = P.reglages[id] || {};
      var lien = P.liens[id] || s.lien || '';
      if (!lien && s.lienDe && index[s.lienDe]) { var src = index[s.lienDe].s; lien = P.liens[src.id] || src.lien || ''; }
      s.lienFinal = lien;
      s.media = analyserLien(lien);
      s.debutF = reg.debut != null ? reg.debut : (s.debut != null ? s.debut : (s.media && s.media.debut) || 0);
      s.finF = reg.fin != null ? reg.fin : (s.fin != null ? s.fin : null);
      s.retire = P.retires.indexOf(id) >= 0;
      s.valide = !s.verifier || P.valides.indexOf(id) >= 0;
      s.visible = !!s.media && !s.retire && s.valide;
      s.cle = s.media ? cleMedia(s.media, s.debutF, s.finF) : null;
    });
    // un support qui reprend le lien d'un autre (lienDe) reste caché tant que l'original n'est pas validé par les parents
    Object.keys(index).forEach(function (id) {
      var s = index[id].s;
      if (!s.lienDe || s.ajoutParent || !index[s.lienDe]) return;
      if (!index[s.lienDe].s.valide) { s.valide = false; s.visible = false; }
    });
    M.matieres = mats; M.index = index;
  }
  function matiereParId(id) { return M.matieres.filter(function (m) { return m.id === id; })[0]; }
  function chapVisible(c) {
    return c.supports.some(function (s) { return s.visible; }) || c.missions.length || c.quiz.length || c.savaisTu.length || (c.jeux && c.jeux.length);
  }
  function limiteDe(s, dur) {
    if (s.finF && (!dur || s.finF < dur)) return s.finF;
    return dur > 3 ? dur - 1 : dur;
  }
  function statut(s) {
    var p = s.cle && prog[s.cle];
    if (!p) return { etat: 'nouveau' };
    var debut = s.debutF || 0, lim = p.dur ? limiteDe(s, p.dur) : 0;
    var part = lim > debut && p.pos ? Math.min(1, Math.max(0, (p.pos - debut) / (lim - debut))) : 0;
    if (p.pos && p.pos > debut + 5) return { etat: 'encours', pos: p.pos, part: part, vu: !!p.vu };
    if (p.vu) return { etat: 'vu' };
    return { etat: 'nouveau' };
  }

  /* ================= Couches (bouton retour d'Android) ================= */
  var couches = [], ignorerPop = 0;
  function ouvrirCouche(nom, fermer) {
    couches.push({ nom: nom, fermer: fermer });
    if (couches.length === 1) history.pushState({ r5e: 1 }, '');
  }
  function fermerCouche(nom) {
    var i = couches.map(function (c) { return c.nom; }).lastIndexOf(nom);
    if (i < 0) return;
    couches.splice(i, 1);
    if (!couches.length && history.state && history.state.r5e) { ignorerPop++; history.back(); }
  }
  window.addEventListener('popstate', function () {
    if (ignorerPop > 0) { ignorerPop--; return; }
    var c = couches[couches.length - 1];
    if (c) { c.fermer(); if (couches.length) history.pushState({ r5e: 1 }, ''); }
  });

  /* ================= Vue élève ================= */
  var ongletActif = Store.get(CLES.onglet, 'francais');

  function rendreTout() {
    construire();
    if (!matiereParId(ongletActif)) ongletActif = M.matieres[0] && M.matieres[0].id;
    rendreOnglets();
    rendreMatiere();
    rendreReprendre();
  }

  function rendreOnglets() {
    var nav = vider($('#onglets'));
    M.matieres.forEach(function (m) {
      nav.appendChild(h('button', {
        class: 'onglet', type: 'button', role: 'tab', 'aria-selected': String(m.id === ongletActif), style: varsCouleur(m.couleur),
        onclick: function () { ongletActif = m.id; Store.set(CLES.onglet, m.id); rendreOnglets(); rendreMatiere(); window.scrollTo({ top: 0 }); }
      }, h('span', { class: 'ico', 'aria-hidden': 'true', text: m.icone }), m.nom));
    });
  }

  function rendreMatiere() {
    var m = matiereParId(ongletActif), page = vider($('#page'));
    if (!m) return;
    document.documentElement.style.cssText = varsCouleur(m.couleur);
    page.style.cssText = varsCouleur(m.couleur);
    var chaps = m.chapitres.filter(chapVisible);
    var nb = chaps.length;
    var unite = m.unite || ['chapitre', 'chapitres'];
    page.appendChild(h('div', { class: 'bandeau' },
      h('span', { class: 'grosico', 'aria-hidden': 'true', text: m.icone }),
      h('div', null, h('h2', { text: m.nom }), h('p', { text: nb ? (nb === 1 ? '1 ' + unite[0] : nb + ' ' + unite[1]) : 'Bientôt' }))));
    if (!nb) {
      page.appendChild(h('p', { class: 'vide', text: 'Les vidéos de ' + m.nom + ' arriveront avec le premier chapitre.' }));
      return;
    }
    if (m.intro) page.appendChild(rendreIntro(m, chaps));
    chaps.forEach(function (c) { page.appendChild(rendreChapitre(m, c)); });
  }

  function rendreIntro(m, chaps) {
    var tous = [];
    chaps.forEach(function (c) { (c.jeux || []).forEach(function (j) { tous.push({ c: c, j: j }); }); });
    var box = h('div', { class: 'intro-prog' }, h('div', { class: 'corps' }, texteRiche(m.intro.texte || '', 'p')));
    if (m.intro.forces && m.intro.forces.length) {
      box.firstChild.appendChild(h('div', { class: 'forces' }, h('b', { text: m.intro.titreForces || 'Tes points forts' }),
        h('ul', null, m.intro.forces.map(function (f) { return h('li', { text: f }); }))));
    }
    if (tous.length) box.appendChild(h('button', { class: 'btn-surprise', type: 'button', onclick: function () {
      // tirage pondéré : priorité aux jeux jamais faits ou avec peu d'étoiles
      var poids = tous.map(function (x) { var r = JX[x.j.id]; return r ? Math.max(1, 4 - (r.etoiles || 0)) : 5; });
      var total = poids.reduce(function (a, b) { return a + b; }, 0), t = Math.random() * total, k = 0;
      while (k < tous.length - 1 && t >= poids[k]) { t -= poids[k]; k++; }
      lancerJeu(m, tous[k].c, tous[k].j);
    } }, h('span', { class: 'ico', 'aria-hidden': 'true', text: '🎲' }), h('span', null, h('b', { text: 'Un jeu au hasard' }), h('small', { text: '3 à 5 minutes' }))));
    return box;
  }

  function rendreChapitre(m, c) {
    var sec = h('section', { class: 'chapitre' });
    var avecJeux = c.jeux && c.jeux.length;
    var mref = c.matiere ? matiereParId(c.matiere) : null;
    sec.appendChild(h('header', { class: 'chap-tete' },
      mref ? h('span', { class: 'pastille-mat', style: varsCouleur(mref.couleur) }, mref.icone + ' ' + mref.nom) : null,
      h('h3', { text: c.titre }), c.resume ? h('p', { text: c.resume }) : null,
      c.objectif ? h('p', { class: 'objectif' }, h('b', { text: '🎯 Objectif : ' }), c.objectif) : null));
    if (c.savaisTu.length) sec.appendChild(rendreSavais(c.savaisTu));
    function missions() {
      c.missions.forEach(function (mi) {
        sec.appendChild(h('div', { class: 'mission' }, h('h4', { text: mi.titre }),
          mi.etapes ? h('ol', null, mi.etapes.map(function (e) { return h('li', null, texteRiche(e)); })) : h('p', null, texteRiche(mi.texte || ''))));
      });
    }
    if (avecJeux) missions();
    var vis = c.supports.filter(function (s) { return s.visible; });
    if (vis.length) {
      if (avecJeux) sec.appendChild(h('h4', { class: 'sous-titre', text: '▶ Les vidéos' }));
      var g = h('div', { class: 'grille' });
      vis.forEach(function (s) { g.appendChild(rendreCarte(s)); });
      sec.appendChild(g);
    }
    if (avecJeux) {
      sec.appendChild(h('h4', { class: 'sous-titre', text: '🎮 Les jeux' }));
      var gj = h('div', { class: 'grille grille-jeux' });
      c.jeux.slice().sort(function (a, b) { return (a.niveau || 1) - (b.niveau || 1); })
        .forEach(function (j) { gj.appendChild(rendreCarteJeu(m, c, j)); });
      sec.appendChild(gj);
    } else missions();
    if (c.quiz.length) {
      var n = Math.min(NB_QUESTIONS, c.quiz.length);
      sec.appendChild(h('button', { class: 'btn-quiz', type: 'button', onclick: function () { lancerQuiz(m, c); } },
        'Quiz du chapitre', h('small', { text: n + ' questions' })));
    }
    return sec;
  }

  function rendreSavais(liste) {
    var i = Math.floor(Math.random() * liste.length);
    var p = h('p', { text: liste[i] });
    var box = h('div', { class: 'savais' },
      h('span', { class: 'ampoule', 'aria-hidden': 'true', text: '💡' }),
      h('div', { class: 'corps' }, h('b', { text: 'Le savais-tu ?' }), p));
    if (liste.length > 1) box.appendChild(h('button', { type: 'button', text: 'Un autre', onclick: function () { i = (i + 1) % liste.length; p.textContent = liste[i]; } }));
    return box;
  }

  var ICONE_PLAY = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 2.5l13 7.5-13 7.5z" fill="#fff"/></svg>';
  function rendreCarte(s) {
    var st = statut(s), img = vignette(s), estAudio = s.type === 'podcast' || (s.media && s.media.type === 'audio');
    var vig = h('div', { class: 'vignette', style: img ? 'background-image:url("' + img + '")' : '' });
    if (!img) vig.appendChild(h('span', { class: 'ph', 'aria-hidden': 'true', text: estAudio ? '🎧' : '🎬' }));
    var jouer = h('span', { class: 'jouer' }); jouer.innerHTML = ICONE_PLAY; vig.appendChild(jouer);
    vig.appendChild(h('span', { class: 'type', text: estAudio ? '🎧 Podcast' : '🎬 Vidéo' }));
    if (st.etat === 'vu' || st.vu) vig.appendChild(h('span', { class: 'vu', text: '✓ Vu' }));
    if (st.etat === 'encours') vig.appendChild(h('span', { class: 'barre' }, h('i', { style: 'width:' + Math.round(st.part * 100) + '%' })));
    var e = ETIQ[s.etiquette] || (s.etiquette ? { t: s.etiquette, i: '✏️' } : null);
    var etat = st.etat === 'encours' ? 'Reprise à ' + fmt(st.pos) : st.etat === 'vu' ? 'Déjà vu' : 'Pas encore commencé';
    var source = [s.source, s.duree].filter(Boolean).join(', ');
    return h('button', { class: 'carte', type: 'button', onclick: function () { ouvrirLecteur(s); } },
      vig,
      h('div', { class: 'carte-corps' },
        e ? h('span', { class: 'etiq', text: e.i + ' ' + e.t }) : null,
        h('h4', { text: s.titre }),
        source ? h('span', { class: 'src', text: source }) : null,
        s.note ? h('span', { class: 'note', text: s.note }) : null,
        h('span', { class: 'etat' + (st.etat === 'encours' ? ' encours' : ''), text: etat })));
  }

  function rendreReprendre() {
    var sec = $('#reprendre'), liste = vider($('.rep-liste', sec));
    var vus = {};
    var enCours = Object.keys(M.index).map(function (id) { return M.index[id]; })
      .filter(function (x) { if (!x.s.visible || vus[x.s.cle]) return false; vus[x.s.cle] = 1; return statut(x.s).etat === 'encours'; })
      .sort(function (a, b) { return (prog[b.s.cle].t || 0) - (prog[a.s.cle].t || 0); }).slice(0, 4);
    sec.hidden = !enCours.length;
    enCours.forEach(function (x) {
      var img = vignette(x.s), st = statut(x.s);
      liste.appendChild(h('button', { class: 'rep', type: 'button', style: varsCouleur(x.m.couleur), onclick: function () { ouvrirLecteur(x.s); } },
        h('span', { class: 'mini', style: img ? 'background-image:url("' + img + '")' : '' }),
        h('span', null, h('b', { text: x.s.titre }), h('small', { text: x.m.nom + ', reprise à ' + fmt(st.pos) }))));
    });
  }

  /* ================= Lecteur ================= */
  var L = null, wakeLock = null;
  var ytPromesse = null;
  function chargerYT() {
    if (window.YT && window.YT.Player) return Promise.resolve();
    if (ytPromesse) return ytPromesse;
    ytPromesse = new Promise(function (ok, ko) {
      var prec = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = function () { if (prec) try { prec(); } catch (e) {} ok(); };
      var sc = document.createElement('script');
      sc.src = 'https://www.youtube.com/iframe_api';
      sc.onerror = function () { ytPromesse = null; ko(new Error('reseau')); };
      document.head.appendChild(sc);
      setTimeout(function () { if (!(window.YT && window.YT.Player)) { ytPromesse = null; ko(new Error('delai')); } }, 20000);
    });
    return ytPromesse;
  }

  function ctrlYouTube(zone, id, debut, cb) {
    var div = h('div', { id: 'yt-' + Date.now() });
    zone.appendChild(div);
    var player = null, detruit = false, pret = false;
    chargerYT().then(function () {
      if (detruit) return;
      var pv = { controls: 0, disablekb: 1, fs: 0, rel: 0, iv_load_policy: 3, playsinline: 1, cc_load_policy: 0, modestbranding: 1, hl: 'fr', start: Math.floor(debut || 0) };
      if (/^https?:$/.test(location.protocol)) pv.origin = location.origin;
      player = new YT.Player(div.id, {
        host: 'https://www.youtube-nocookie.com', videoId: id, width: '100%', height: '100%', playerVars: pv,
        events: {
          onReady: function () { pret = true; cb.pret(); },
          onStateChange: function (e) {
            var S = YT.PlayerState;
            if (e.data === S.PLAYING) cb.etat('lecture');
            else if (e.data === S.PAUSED) cb.etat('pause');
            else if (e.data === S.ENDED) cb.etat('fin');
            else if (e.data === S.BUFFERING) cb.etat('attente');
          },
          onError: function (e) { cb.erreur(e.data); }
        }
      });
    }).catch(function () { cb.erreur('reseau'); });
    function ok(f) { return pret && player && typeof player[f] === 'function'; }
    return {
      play: function () { if (ok('playVideo')) player.playVideo(); },
      pause: function () { if (ok('pauseVideo')) player.pauseVideo(); },
      seek: function (t) { if (ok('seekTo')) player.seekTo(t, true); },
      temps: function () { return ok('getCurrentTime') ? player.getCurrentTime() || 0 : 0; },
      duree: function () { return ok('getDuration') ? player.getDuration() || 0 : 0; },
      detruire: function () { detruit = true; try { if (player && player.destroy) player.destroy(); } catch (e) {} }
    };
  }

  function ctrlNatif(zone, src, audio, cb) {
    var m = document.createElement(audio ? 'audio' : 'video');
    if (audio) zone.appendChild(h('div', { class: 'illus-audio', 'aria-hidden': 'true', text: '🎧' }));
    m.preload = 'metadata'; m.controls = false; m.playsInline = true;
    m.setAttribute('playsinline', ''); m.setAttribute('controlsList', 'nodownload noplaybackrate noremoteplayback');
    m.disablePictureInPicture = true; m.disableRemotePlayback = true;
    m.addEventListener('loadedmetadata', function () { cb.pret(); });
    m.addEventListener('playing', function () { cb.etat('lecture'); });
    m.addEventListener('pause', function () { if (!m.ended) cb.etat('pause'); });
    m.addEventListener('waiting', function () { cb.etat('attente'); });
    m.addEventListener('ended', function () { cb.etat('fin'); });
    m.addEventListener('error', function () { cb.erreur('fichier'); });
    m.src = src;
    if (audio) m.style.display = 'none';
    zone.appendChild(m);
    return {
      play: function () { var p = m.play(); if (p && p.catch) p.catch(function () {}); },
      pause: function () { m.pause(); },
      seek: function (t) { try { m.currentTime = t; } catch (e) {} },
      temps: function () { return m.currentTime || 0; },
      duree: function () { return isFinite(m.duration) ? m.duration : 0; },
      detruire: function () { try { m.pause(); m.removeAttribute('src'); m.load(); } catch (e) {} }
    };
  }

  function ctrlPeertube(zone, media, cb) {
    var interne = null, detruit = false;
    fetch(media.origine + '/api/v1/videos/' + encodeURIComponent(media.id))
      .then(function (r) { if (!r.ok) throw new Error(); return r.json(); })
      .then(function (v) {
        var fichiers = (v.files || []).slice();
        (v.streamingPlaylists || []).forEach(function (p) { fichiers = fichiers.concat(p.files || []); });
        fichiers = fichiers.filter(function (f) { return f.fileUrl && f.resolution && f.resolution.id > 0; });
        if (!fichiers.length) throw new Error();
        fichiers.sort(function (a, b) { return Math.abs(a.resolution.id - 720) - Math.abs(b.resolution.id - 720); });
        if (detruit) return;
        interne = ctrlNatif(zone, fichiers[0].fileUrl, false, cb);
      })
      .catch(function () { cb.erreur('peertube'); });
    var f = function (n, d) { return function (x) { return interne ? interne[n](x) : d; }; };
    return { play: f('play'), pause: f('pause'), seek: f('seek'), temps: f('temps', 0), duree: f('duree', 0), detruire: function () { detruit = true; if (interne) interne.detruire(); } };
  }

  var MESSAGES = {
    reseau: "La vidéo ne se charge pas. Vérifie la connexion Internet, puis réessaie.",
    delai: "La vidéo met trop de temps à se charger. Vérifie la connexion Internet, puis réessaie.",
    2: "Le lien de cette vidéo est incorrect. Préviens tes parents.",
    5: "Le lecteur n'arrive pas à lire cette vidéo. Préviens tes parents.",
    100: "Cette vidéo n'existe plus. Préviens tes parents.",
    101: "Le propriétaire de cette vidéo interdit sa lecture en dehors de YouTube. Préviens tes parents.",
    150: "Le propriétaire de cette vidéo interdit sa lecture en dehors de YouTube. Préviens tes parents.",
    153: "Le lecteur refuse de s'ouvrir : l'application doit être ouverte depuis son adresse en ligne.",
    fichier: "Le fichier n'a pas pu être lu. Préviens tes parents.",
    peertube: "La vidéo n'a pas pu être récupérée sur la plateforme. Préviens tes parents."
  };

  function ouvrirLecteur(s, opts) {
    opts = opts || {};
    if (L) fermerLecteur({ silencieux: true });
    var info = M.index[s.id] || opts.info || {};
    var couleur = (info.m && info.m.couleur) || (opts.couleur) || '#2E6BD6';
    var ov = $('#lecteur');
    ov.style.cssText = varsCouleur(couleur);
    ov.hidden = false;
    document.body.classList.add('sans-defil');
    $('#lect-titre').textContent = s.titre || 'Aperçu';
    $('#lect-source').textContent = [s.source, info.c && info.c.titre].filter(Boolean).join(', ');
    var zone = vider($('#lect-media'));
    $('#lect-msg').hidden = true;
    var debut = s.debutF || 0;
    var p = (!opts.apercu && s.cle && prog[s.cle]) || {};
    var reprise = p.pos && p.pos > debut + 10 && (!p.dur || p.pos < limiteDe(s, p.dur) - 15) ? p.pos : null;
    L = { s: s, info: info, apercu: !!opts.apercu, pret: false, etat: 'pause', reprise: reprise, debut: debut, fini: false, dernier: 0, demarre: false };
    var cb = {
      pret: function () { if (!L) return; L.pret = true; majCommandes(); afficherDepart(); },
      etat: function (e) {
        if (!L) return;
        L.etat = e;
        if (e === 'lecture') { L.demarre = true; $('#lect-depart').hidden = true; verrouEcran(true); }
        else verrouEcran(false);
        if (e === 'pause' && L.demarre) sauverPosition();
        majCommandes();
        if (e === 'fin') terminerLecture();
      },
      erreur: function (code) {
        if (!L) return;
        var box = vider($('#lect-msg'));
        box.appendChild(h('p', { text: MESSAGES[code] || MESSAGES[5] }));
        box.appendChild(h('button', { class: 'btn-blanc', type: 'button', text: 'Fermer', onclick: function () { fermerLecteur(); } }));
        box.hidden = false;
        $('#lect-depart').hidden = true;
        if (!L.apercu && s.id && code !== 'reseau' && code !== 'delai') { P.erreurs[s.id] = { code: String(code), t: Date.now() }; sauverP(); }
      }
    };
    var med = s.media;
    if (med.type === 'youtube') L.ctrl = ctrlYouTube(zone, med.id, debut, cb);
    else if (med.type === 'peertube') L.ctrl = ctrlPeertube(zone, med, cb);
    else L.ctrl = ctrlNatif(zone, med.src, med.type === 'audio', cb);
    var dep = vider($('#lect-depart'));
    dep.appendChild(h('p', { style: 'color:#fff', text: 'Chargement…' }));
    dep.hidden = false;
    L.minuteur = setInterval(tic, 500);
    majCommandes();
    ouvrirCouche('lecteur', function () { fermerLecteur({ depuisRetour: true }); });
  }

  function afficherDepart() {
    var dep = vider($('#lect-depart'));
    var icone = function () { var sp = h('span'); sp.innerHTML = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 2.5l13 7.5-13 7.5z" fill="currentColor"/></svg>'; return sp.firstChild; };
    if (L.reprise) {
      dep.appendChild(h('button', { class: 'gros', type: 'button', onclick: function () { demarrer(L.reprise); } }, icone(), 'Reprendre à ' + fmt(L.reprise)));
      dep.appendChild(h('button', { class: 'second', type: 'button', text: 'Depuis le début', onclick: function () { demarrer(L.debut); } }));
    } else {
      dep.appendChild(h('button', { class: 'gros', type: 'button', onclick: function () { demarrer(L.debut); } }, icone(), 'Lecture'));
    }
    dep.hidden = false;
  }
  function demarrer(t) {
    if (!L) return;
    $('#lect-depart').hidden = true;
    L.demarre = true;
    if (t > 0.5) L.ctrl.seek(t);
    L.ctrl.play();
  }
  function basculer() {
    if (!L || !L.pret) return;
    if (!L.demarre) { demarrer(L.reprise || L.debut); return; }
    if (L.etat === 'lecture' || L.etat === 'attente') L.ctrl.pause(); else L.ctrl.play();
  }
  function tic() {
    if (!L || !L.pret) return;
    var cur = L.ctrl.temps(), dur = L.ctrl.duree();
    majBarre(cur, dur);
    if (L.etat === 'lecture' && dur > 0 && !L.fini) {
      if (cur >= limiteDe(L.s, dur) - 0.4) { terminerLecture(); return; }
      if (Date.now() - L.dernier > 3000) sauverPosition();
    }
  }
  function sauverPosition() {
    if (!L || L.apercu || !L.s.cle) return;
    var cur = L.ctrl.temps(), dur = L.ctrl.duree();
    if (!dur || cur < L.debut + 3) return;
    var p = prog[L.s.cle] || {};
    p.pos = cur; p.dur = dur; p.t = Date.now();
    prog[L.s.cle] = p; L.dernier = Date.now();
    sauverProg();
  }
  function terminerLecture() {
    if (!L || L.fini) return;
    L.fini = true;
    L.ctrl.pause();
    var s = L.s, info = L.info, apercu = L.apercu;
    if (!apercu && s.cle) { prog[s.cle] = { pos: 0, dur: L.ctrl.duree(), vu: true, t: Date.now() }; sauverProg(); }
    if (!apercu && P.erreurs[s.id]) { delete P.erreurs[s.id]; sauverP(); }
    fermerLecteur({ dejaSauve: true, apresFin: !apercu ? info : null });
  }
  function fermerLecteur(opts) {
    opts = opts || {};
    if (!L) return;
    var sess = L;
    if (!opts.dejaSauve && !sess.apercu && sess.pret && sess.demarre && sess.s.cle) {
      var cur = sess.ctrl.temps(), dur = sess.ctrl.duree();
      if (dur && cur >= limiteDe(sess.s, dur) - 10) { prog[sess.s.cle] = { pos: 0, dur: dur, vu: true, t: Date.now() }; sauverProg(); }
      else if (cur > sess.debut + 3) { var p = prog[sess.s.cle] || {}; p.pos = cur; p.dur = dur; p.t = Date.now(); prog[sess.s.cle] = p; sauverProg(); }
    }
    clearInterval(sess.minuteur);
    sess.ctrl.detruire();
    verrouEcran(false);
    L = null;
    vider($('#lect-media'));
    $('#lecteur').hidden = true;
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(function () {});
    var apresFin = opts.apresFin;
    if (apresFin) afficherFinVideo(apresFin); // ouvre la modale avant de retirer la couche du lecteur
    if (!opts.depuisRetour && !opts.silencieux) fermerCouche('lecteur');
    else if (opts.silencieux) { var i = couches.map(function (c) { return c.nom; }).lastIndexOf('lecteur'); if (i >= 0) couches.splice(i, 1); }
    majFond();
    if (!$('#parent').hidden) { if (!sess.apercu) rendreParent(); }
    else rafraichirEleve();
  }
  function majFond() {
    var ouvert = !$('#lecteur').hidden || !$('#quiz').hidden || !$('#jeu').hidden || !$('#parent').hidden || !$('#voile').hidden;
    document.body.classList.toggle('sans-defil', ouvert);
  }
  function rafraichirEleve() { var y = window.scrollY; rendreMatiere(); rendreReprendre(); window.scrollTo(0, y); }

  function majCommandes() {
    var b = $('#btn-lecture'), joue = L && (L.etat === 'lecture' || L.etat === 'attente');
    b.innerHTML = joue
      ? '<svg viewBox="0 0 20 20" aria-hidden="true"><rect x="4" y="3" width="4.2" height="14" rx="1" fill="currentColor"/><rect x="11.8" y="3" width="4.2" height="14" rx="1" fill="currentColor"/></svg>'
      : '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 2.5l12.5 7.5L5 17.5z" fill="currentColor"/></svg>';
    b.setAttribute('aria-label', joue ? 'Pause' : 'Lecture');
    if (!L || !L.pret) majBarre(0, 0);
  }
  function majBarre(cur, dur) {
    var r = $('#progres');
    if (r.dataset.glisse === '1') return;
    var debut = L ? L.debut : 0, lim = L && dur ? limiteDe(L.s, dur) : 0;
    r.min = Math.floor(debut); r.max = Math.max(Math.ceil(lim), Math.floor(debut) + 1);
    r.value = Math.floor(cur);
    var part = lim > debut ? (cur - debut) / (lim - debut) : 0;
    r.style.setProperty('--p', Math.max(0, Math.min(100, part * 100)) + '%');
    $('#temps').textContent = fmt(cur) + ' / ' + fmt(lim);
  }
  function verrouEcran(on) {
    try {
      if (on && !wakeLock && navigator.wakeLock) navigator.wakeLock.request('screen').then(function (w) { wakeLock = w; }).catch(function () {});
      else if (!on && wakeLock) { wakeLock.release().catch(function () {}); wakeLock = null; }
    } catch (e) {}
  }

  function brancherLecteur() {
    $('#btn-fermer').addEventListener('click', function () { fermerLecteur(); });
    $('#btn-lecture').addEventListener('click', basculer);
    $('#bouclier').addEventListener('click', basculer);
    $('#btn-moins').addEventListener('click', function () { if (L && L.pret) { L.demarre = true; $('#lect-depart').hidden = true; L.ctrl.seek(Math.max(L.debut, L.ctrl.temps() - 10)); } });
    $('#btn-plus').addEventListener('click', function () {
      if (!L || !L.pret) return;
      var dur = L.ctrl.duree(); L.demarre = true; $('#lect-depart').hidden = true;
      L.ctrl.seek(Math.min(dur ? limiteDe(L.s, dur) - 2 : L.ctrl.temps() + 10, L.ctrl.temps() + 10));
    });
    var r = $('#progres');
    r.addEventListener('input', function () {
      r.dataset.glisse = '1';
      if (!L) return;
      var dur = L.ctrl.duree(), lim = dur ? limiteDe(L.s, dur) : 0;
      $('#temps').textContent = fmt(+r.value) + ' / ' + fmt(lim);
      r.style.setProperty('--p', (lim > L.debut ? (r.value - L.debut) / (lim - L.debut) * 100 : 0) + '%');
    });
    r.addEventListener('change', function () {
      r.dataset.glisse = '0';
      if (!L || !L.pret) return;
      var dur = L.ctrl.duree(), v = +r.value;
      if (dur) v = Math.min(v, limiteDe(L.s, dur) - 2);
      L.demarre = true; $('#lect-depart').hidden = true;
      L.ctrl.seek(v);
    });
    $('#btn-plein').addEventListener('click', function () {
      var ov = $('#lecteur');
      if (document.fullscreenElement) { document.exitFullscreen().catch(function () {}); return; }
      if (ov.requestFullscreen) ov.requestFullscreen().then(function () {
        try { screen.orientation.lock('landscape').catch(function () {}); } catch (e) {}
      }).catch(function () {});
    });
    document.addEventListener('visibilitychange', function () { if (document.hidden && L) { sauverPosition(); L.ctrl.pause(); } });
    window.addEventListener('pagehide', function () { if (L) sauverPosition(); });
  }

  function afficherFinVideo(info) {
    var c = info.c, m = info.m, avecQuiz = c && c.quiz && c.quiz.length;
    var mod = ouvrirModale(m ? m.couleur : null);
    mod.appendChild(h('div', { class: 'coche', 'aria-hidden': 'true', text: '✓' }));
    mod.appendChild(h('h3', { text: 'C\'est vu !' }));
    if (avecQuiz) {
      mod.appendChild(h('p', { text: 'Un petit quiz sur « ' + c.titre + ' » ?' }));
      mod.appendChild(h('div', { class: 'rangee' },
        h('button', { class: 'btn-plein', type: 'button', text: 'Faire le quiz', onclick: function () { lancerQuiz(m, c); fermerModale(); } }),
        h('button', { class: 'btn-doux', type: 'button', text: 'Plus tard', onclick: fermerModale })));
    } else {
      mod.appendChild(h('p', { text: 'Il est coché dans la liste.' }));
      mod.appendChild(h('div', { class: 'rangee' }, h('button', { class: 'btn-plein', type: 'button', text: 'OK', onclick: fermerModale })));
    }
  }

  /* ================= Modale ================= */
  function ouvrirModale(couleur) {
    var v = $('#voile'), mod = vider($('#modale'));
    mod.style.cssText = couleur ? varsCouleur(couleur) : '';
    if (v.hidden) { v.hidden = false; ouvrirCouche('modale', function () { fermerModale(true); }); }
    majFond();
    return mod;
  }
  function fermerModale(depuisRetour) {
    var v = $('#voile');
    if (v.hidden) return;
    v.hidden = true;
    if (depuisRetour !== true) fermerCouche('modale');
    majFond();
  }

  /* ================= Quiz ================= */
  var Q = null;
  function lancerQuiz(m, c, questions) {
    var banque = c.quiz.map(function (q, i) { return Object.assign({ qid: c.id + '#' + i }, q); });
    var liste;
    if (questions) liste = melanger(questions);
    else {
      var rates = melanger(banque.filter(function (q) { return QS.rates[q.qid]; })).slice(0, 3);
      var autres = melanger(banque.filter(function (q) { return rates.indexOf(q) < 0; }));
      liste = melanger(rates.concat(autres).slice(0, Math.min(NB_QUESTIONS, banque.length)));
    }
    liste = liste.map(function (q) {
      var opts = q.options.map(function (t, i) { return { t: t, juste: i === q.bonne }; });
      if (q.fixe !== 'ordre') opts = melanger(opts); // la bonne réponse ne doit jamais avoir de place fixe
      return Object.assign({}, q, { opts: opts });
    });
    var dejaOuvert = !$('#quiz').hidden;
    Q = { m: m, c: c, liste: liste, i: 0, rates: [], rattrapage: !!questions };
    var ov = $('#quiz');
    ov.style.cssText = varsCouleur(m.couleur);
    $('#quiz-titre').textContent = 'Quiz : ' + c.titre;
    ov.hidden = false;
    if (!dejaOuvert) ouvrirCouche('quiz', function () { fermerQuiz(true); });
    majFond();
    ov.scrollTop = 0;
    poserQuestion();
  }
  function poserQuestion() {
    var corps = vider($('#quiz-corps')), q = Q.liste[Q.i], n = Q.liste.length;
    $('#quiz').scrollTop = 0;
    corps.appendChild(h('p', { class: 'q-compte', text: (Q.rattrapage ? 'On reprend. ' : '') + 'Question ' + (Q.i + 1) + ' sur ' + n }));
    corps.appendChild(h('div', { class: 'q-piste' }, h('i', { style: 'width:' + Math.round(Q.i / n * 100) + '%' })));
    corps.appendChild(h('p', { class: 'q-texte', text: q.q }));
    var zone = h('div', { class: 'q-options' });
    var boutons = q.opts.map(function (o) {
      var b = h('button', { class: 'q-opt', type: 'button', onclick: function () { repondre(o, b, boutons); } }, h('span', { text: o.t }));
      zone.appendChild(b);
      return b;
    });
    corps.appendChild(zone);
  }
  function repondre(o, b, boutons) {
    var q = Q.liste[Q.i];
    boutons.forEach(function (x) { x.disabled = true; });
    var bonne = q.opts.filter(function (x) { return x.juste; })[0];
    if (o.juste) { b.classList.add('ok'); b.appendChild(h('span', { class: 'marque-rep', text: '✓ Juste' })); }
    else {
      b.classList.add('ko'); b.appendChild(h('span', { class: 'marque-rep', text: 'Ta réponse' }));
      var ib = q.opts.indexOf(bonne);
      boutons[ib].classList.add('ok-contour'); boutons[ib].appendChild(h('span', { class: 'marque-rep', text: '✓ Bonne réponse' }));
      Q.rates.push(q);
    }
    // statistiques (invisibles pour l'élève)
    var cle = Q.m.id + '|' + Q.c.id + '|' + q.point;
    var st = QS.points[cle] || { matiere: Q.m.nom, chapitre: Q.c.titre, point: q.point, essais: 0, erreurs: 0 };
    st.essais++; if (!o.juste) st.erreurs++; st.t = Date.now();
    QS.points[cle] = st;
    if (o.juste) delete QS.rates[q.qid]; else QS.rates[q.qid] = 1;
    sauverQS();
    var corps = $('#quiz-corps');
    corps.appendChild(h('div', { class: 'q-retour ' + (o.juste ? 'ok' : 'ko') },
      h('b', { text: o.juste ? 'Bonne réponse.' : 'La bonne réponse : ' + bonne.t }),
      h('span', { text: q.explication || '' })));
    var dernier = Q.i === Q.liste.length - 1;
    var suite = h('button', { class: 'btn-plein', type: 'button', text: dernier ? 'Voir le bilan' : 'Question suivante', onclick: function () { if (dernier) bilanQuiz(); else { Q.i++; poserQuestion(); } } });
    corps.appendChild(h('div', { class: 'q-suite' }, suite));
    suite.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  function premierSupportVisible(revoir) {
    var ids = Array.isArray(revoir) ? revoir : revoir ? [revoir] : [];
    for (var i = 0; i < ids.length; i++) { var x = M.index[ids[i]]; if (x && x.s.visible) return x.s; }
    return null;
  }
  function bilanQuiz() {
    var corps = vider($('#quiz-corps')), rates = Q.rates;
    var b = h('div', { class: 'bilan' });
    if (!rates.length) {
      b.appendChild(h('div', { class: 'tampon', 'aria-hidden': 'true', text: '✓' }));
      b.appendChild(h('h3', { text: Q.rattrapage ? 'Cette fois, tout est juste.' : 'Tout est solide sur ce chapitre.' }));
      b.appendChild(h('p', { class: 'sous', text: 'Tu peux revenir faire le quiz quand tu veux : les questions changent.' }));
      b.appendChild(h('div', { class: 'rangee' }, h('button', { class: 'btn-plein', type: 'button', text: 'Retour au chapitre', onclick: function () { fermerQuiz(); } })));
    } else {
      b.appendChild(h('h3', { text: 'Des points à revoir' }));
      b.appendChild(h('p', { class: 'sous', text: 'Rien de grave : c\'est justement à ça que sert le quiz.' }));
      var vus = {}, ul = h('ul', { class: 'a-revoir' });
      rates.forEach(function (q) {
        if (vus[q.point]) return; vus[q.point] = 1;
        var s = premierSupportVisible(q.revoir);
        ul.appendChild(h('li', null, h('p', { text: 'Relis ta leçon sur : ' + q.point + '.' }),
          s ? h('button', { type: 'button', text: '▶ Revoir : ' + s.titre, onclick: function () { ouvrirLecteur(s); fermerQuiz(); } }) : null));
      });
      b.appendChild(ul);
      var m = Q.m, c = Q.c, aRefaire = rates.map(function (q) { return c.quiz.map(function (x, i) { return Object.assign({ qid: c.id + '#' + i }, x); }).filter(function (x) { return x.qid === q.qid; })[0]; }).filter(Boolean);
      b.appendChild(h('div', { class: 'rangee' },
        h('button', { class: 'btn-plein', type: 'button', text: 'Refaire les questions ratées', onclick: function () { lancerQuiz(m, c, aRefaire); } }),
        h('button', { class: 'btn-doux', type: 'button', text: 'Retour au chapitre', onclick: function () { fermerQuiz(); } })));
    }
    corps.appendChild(b);
  }
  function fermerQuiz(depuisRetour) {
    if ($('#quiz').hidden) return;
    $('#quiz').hidden = true;
    Q = null;
    if (depuisRetour !== true) fermerCouche('quiz');
    majFond();
  }

  /* ================= Jeux (onglet « Je progresse ») =================
     Types : tri (ranger des cartes dans des boîtes), mots (toucher des mots dans une phrase),
     memory (paires), ordre (remettre dans l'ordre), eclair (course contre la montre, ou défi sans chrono si duree = 0),
     graphe (placer les points d'un tableau puis lire le graphique). Les résultats restent sur la tablette. */
  var NIVEAUX = {
    1: { t: 'Niveau 1 · les bases', i: '🌱', c: 'n1' },
    2: { t: 'Niveau 2 · entraînement', i: '🌿', c: 'n2' },
    3: { t: 'Niveau 3 · défi 5e', i: '🌳', c: 'n3' }
  };
  var TYPES = {
    tri: { t: 'Tri express', i: '🗂️' },
    memory: { t: 'Memory', i: '🃏' },
    ordre: { t: 'Remets dans l\'ordre', i: '🔢' },
    mots: { t: 'Chasse aux mots', i: '🔍' },
    eclair: { t: 'Course contre la montre', i: '⏱️' },
    defi: { t: 'Défi sans chrono', i: '🎯' },
    graphe: { t: 'Graphique', i: '📈' }
  };
  function typeDe(j) { return j.type === 'eclair' && !j.duree ? TYPES.defi : TYPES[j.type] || { t: 'Jeu', i: '🎮' }; }
  function tailleJeu(j) {
    if (j.taille) return j.taille;
    var n;
    if (j.type === 'tri') { n = Math.min(j.nb || 8, j.cartes.length); return n + ' cartes'; }
    if (j.type === 'mots') { n = Math.min(j.nb || 6, j.items.length); return n + ' phrases'; }
    if (j.type === 'memory') { n = Math.min(j.nb || 6, j.paires.length); return n + ' paires'; }
    if (j.type === 'ordre') { n = Math.min(j.nb || 1, j.series.length); return n === 1 ? '1 série' : n + ' séries'; }
    if (j.type === 'eclair') return j.duree ? j.duree + ' secondes' : Math.min(j.nb || 8, j.questions.length) + ' questions';
    if (j.type === 'graphe') return 'tracer, puis lire';
    return '';
  }
  function insec(s) { // espaces insécables avant ? ! : ; » et après « (typographie française)
    return String(s == null ? '' : s).replace(/ ([?!:;»])/g, '\u00a0$1').replace(/« /g, '«\u00a0');
  }
  function texteRiche(txt, tag) { // **gras** autorisé, rien d'autre
    var e = h(tag || 'span');
    insec(txt).split(/(\*\*[^*]+\*\*)/).forEach(function (bout) {
      if (/^\*\*[^*]+\*\*$/.test(bout)) e.appendChild(h('b', { text: bout.slice(2, -2) }));
      else if (bout) e.appendChild(document.createTextNode(bout));
    });
    return e;
  }
  function nombre(v) { return String(v).replace('.', ',').replace('-', '−'); }
  function etoilesEl(n, classe) {
    var e = h('span', { class: classe || 'etoiles', role: 'img', 'aria-label': n + ' étoile' + (n > 1 ? 's' : '') + ' sur 3' });
    for (var i = 0; i < 3; i++) e.appendChild(h('i', { class: i < n ? 'pleine' : '', 'aria-hidden': 'true', text: '★' }));
    return e;
  }
  function rendreCarteJeu(m, c, j) {
    var r = JX[j.id], ty = typeDe(j), nv = NIVEAUX[j.niveau] || NIVEAUX[1];
    var info = !r ? 'Pas encore joué' : (r.record != null && j.type === 'eclair' && j.duree) ? 'Record : ' + r.record
      : (r.parties > 1 ? r.parties + ' parties' : '1 partie');
    return h('button', { class: 'carte-jeu', type: 'button', onclick: function () { lancerJeu(m, c, j); } },
      h('span', { class: 'cj-haut' }, h('span', { class: 'cj-ico', 'aria-hidden': 'true', text: ty.i }), h('span', { class: 'niv ' + nv.c, text: nv.i + ' ' + nv.t })),
      h('h4', { text: insec(j.titre) }),
      h('span', { class: 'src', text: ty.t + ' · ' + tailleJeu(j) }),
      h('span', { class: 'cj-bas' }, etoilesEl(r ? r.etoiles || 0 : 0), h('small', { text: info })));
  }

  var J = null;
  function lancerJeu(m, c, j) {
    if (J) arreterMinuteurs();
    var ov = $('#jeu'), dejaOuvert = !ov.hidden;
    ov.style.cssText = varsCouleur(m.couleur);
    $('#jeu-titre').textContent = insec(j.titre);
    ov.hidden = false;
    if (!dejaOuvert) ouvrirCouche('jeu', function () { fermerJeu(true); });
    majFond();
    J = { m: m, c: c, j: j, err: [], minuteurs: [], fini: false };
    var corps = vider($('#jeu-corps'));
    corps.className = 'quiz-corps';
    ov.scrollTop = 0;
    try { MOTEURS[j.type](corps); }
    catch (e) { vider(corps).appendChild(h('p', { class: 'vide', text: 'Ce jeu n\'a pas pu démarrer. Préviens tes parents.' })); }
  }
  function plusTard(f, ms) {
    var sess = J;
    var id = setTimeout(function () { if (J === sess) f(); }, ms);
    if (sess) sess.minuteurs.push(id);
    return id;
  }
  function arreterMinuteurs() { if (!J) return; J.minuteurs.forEach(function (id) { clearTimeout(id); clearInterval(id); }); J.minuteurs = []; }
  function fermerJeu(depuisRetour) {
    var ov = $('#jeu');
    if (ov.hidden) return;
    arreterMinuteurs(); J = null;
    ov.hidden = true;
    vider($('#jeu-corps'));
    if (depuisRetour !== true) fermerCouche('jeu');
    majFond();
    rafraichirEleve();
  }
  function noter(point, juste) { // mêmes statistiques que les quiz : visibles dans Espace parent › Suivi
    if (!J || !point) return;
    var cle = J.m.id + '|' + J.c.id + '|' + point;
    var st = QS.points[cle] || { matiere: J.m.nom, chapitre: J.c.titre, point: point, essais: 0, erreurs: 0 };
    st.essais++; if (!juste) st.erreurs++; st.t = Date.now();
    QS.points[cle] = st; sauverQS();
  }
  function enTete(corps, i, n, libelle) {
    corps.appendChild(h('p', { class: 'q-compte', text: (libelle || 'Question') + ' ' + (i + 1) + ' sur ' + n }));
    corps.appendChild(h('div', { class: 'q-piste' }, h('i', { style: 'width:' + Math.round(i / n * 100) + '%' })));
  }
  function consigne(corps, txt) { if (txt) corps.appendChild(texteRiche(txt, 'p')).className = 'j-consigne'; }
  function retour(zone, juste, titre, txt) {
    zone.appendChild(h('div', { class: 'q-retour ' + (juste ? 'ok' : 'ko') }, h('b', { text: titre }), txt ? texteRiche(txt) : null));
  }
  function boutonSuite(zone, dernier, f) {
    var b = h('button', { class: 'btn-plein', type: 'button', text: dernier ? 'Voir le bilan' : 'Suivant', onclick: f });
    zone.appendChild(h('div', { class: 'q-suite' }, b));
    b.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    return b;
  }
  function etoilesRatio(ok, n) { var r = n ? ok / n : 0; return r >= 0.9 ? 3 : r >= 0.65 ? 2 : 1; }
  function pluriel(n, mot) { return n + ' ' + mot + (n > 1 ? 's' : ''); }

  /* ----- Tri : une carte à la fois, on touche la bonne boîte ----- */
  function jeuTri(corps) {
    var j = J.j, sess = J, n = Math.min(j.nb || 8, j.cartes.length);
    var cartes = melanger(j.cartes).slice(0, n), i = 0, ok = 0, ranges = {};
    j.boites.forEach(function (b) { ranges[b.id] = 0; });
    function poser() {
      vider(corps);
      enTete(corps, i, n, 'Carte');
      consigne(corps, j.consigne);
      var carte = cartes[i];
      corps.appendChild(h('div', { class: 'j-carte' }, texteRiche(carte.t)));
      var zone = h('div', { class: 'j-boites' });
      var boutons = j.boites.map(function (b) {
        var bt = h('button', { class: 'j-boite', type: 'button', onclick: function () { choisir(b, bt); } },
          b.i ? h('span', { class: 'ico', 'aria-hidden': 'true', text: b.i }) : null, h('b', { text: insec(b.t) }),
          h('small', { text: ranges[b.id] ? pluriel(ranges[b.id], 'carte') : '' }));
        bt._id = b.id; zone.appendChild(bt); return bt;
      });
      corps.appendChild(zone);
      function choisir(b, bt) {
        if (J !== sess || bt.disabled) return;
        boutons.forEach(function (x) { x.disabled = true; });
        var juste = b.id === carte.b, dernier = i === n - 1;
        noter(carte.p || j.point, juste);
        var suite = function () { if (dernier) finir(); else { i++; poser(); } };
        if (juste) {
          ok++; ranges[b.id]++;
          bt.classList.add('ok');
          plusTard(suite, 650);
        } else {
          bt.classList.add('ko');
          var bonne = j.boites.filter(function (x) { return x.id === carte.b; })[0] || { t: '' };
          boutons.forEach(function (x) { if (x._id === carte.b) x.classList.add('ok-contour'); });
          J.err.push({ t: carte.t, bonne: bonne.t, e: carte.e });
          retour(corps, false, insec('Réponse : ' + bonne.t), carte.e || '');
          boutonSuite(corps, dernier, function () { if (J === sess) suite(); });
        }
      }
    }
    function finir() { bilanJeu({ etoiles: etoilesRatio(ok, n), score: ok + ' sur ' + n + ' bien rangées' }); }
    poser();
  }

  /* ----- Chasse aux mots : [cible] et {mot en gras} dans la phrase ----- */
  var PONCT_AV = /^[«(¿¡"“]+/, PONCT_AP = /[.,;:!?»)…"”]+$/;
  function decouperPhrase(txt) {
    var morceaux = String(txt).match(/\[|\]|\{|\}|[^\s\[\]{}]+/g) || [];
    var cible = false, gras = false, groupe = 0, out = [];
    morceaux.forEach(function (x) {
      if (x === '[') { cible = true; groupe++; return; }
      if (x === ']') { cible = false; return; }
      if (x === '{') { gras = true; return; }
      if (x === '}') { gras = false; return; }
      var av = (x.match(PONCT_AV) || [''])[0]; x = x.slice(av.length);
      var ap = (x.match(PONCT_AP) || [''])[0]; x = x.slice(0, x.length - ap.length);
      if (av) out.push({ t: av, ponct: true });
      if (x) out.push({ t: x, cible: cible, g: cible ? groupe : 0, gras: gras });
      if (ap) out.push({ t: ap, ponct: true });
    });
    return out;
  }
  function jeuMots(corps) {
    var j = J.j, sess = J, n = Math.min(j.nb || 6, j.items.length);
    var items = melanger(j.items).slice(0, n), i = 0, ok = 0;
    function poser() {
      vider(corps);
      enTete(corps, i, n, 'Phrase');
      var it = items[i], toks = decouperPhrase(it.phrase), boutons = [];
      consigne(corps, it.c || j.consigne);
      var zone = h('p', { class: 'j-phrase' });
      var valider = h('button', { class: 'btn-plein', type: 'button', text: 'Valider', disabled: true, onclick: verifier });
      toks.forEach(function (tk, k) {
        var prev = toks[k - 1];
        if (k > 0 && !(tk.ponct && /^[.,…)]/.test(tk.t)) && !(prev.ponct && /[(¿¡"“]$/.test(prev.t))) zone.appendChild(document.createTextNode(' '));
        if (tk.ponct) { zone.appendChild(h('span', { class: 'j-ponct', text: tk.t })); return; }
        var b = h('button', { class: 'j-mot' + (tk.gras ? ' gras' : ''), type: 'button', 'aria-pressed': 'false', text: tk.t, onclick: function () {
          if (b.disabled) return;
          b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true'));
          valider.disabled = !boutons.some(function (x) { return x.b.getAttribute('aria-pressed') === 'true'; });
        } });
        boutons.push({ b: b, tk: tk });
        zone.appendChild(b);
      });
      corps.appendChild(zone);
      var actions = h('div', { class: 'q-suite rangee' },
        h('button', { class: 'btn-doux', type: 'button', text: 'Effacer', onclick: function () {
          boutons.forEach(function (x) { x.b.setAttribute('aria-pressed', 'false'); }); valider.disabled = true;
        } }), valider);
      corps.appendChild(actions);
      function verifier() {
        if (J !== sess) return;
        var juste = true;
        boutons.forEach(function (x) {
          var sel = x.b.getAttribute('aria-pressed') === 'true';
          x.b.disabled = true;
          if (x.tk.cible && sel) x.b.classList.add('ok');
          else if (x.tk.cible) { x.b.classList.add('manque'); juste = false; }
          else if (sel) { x.b.classList.add('ko'); juste = false; }
        });
        actions.remove();
        noter(it.p || j.point, juste);
        var groupes = [];
        toks.forEach(function (t) { if (t.cible) groupes[t.g] = (groupes[t.g] ? groupes[t.g] + ' ' : '') + t.t; });
        var bonne = groupes.filter(Boolean).map(function (g) { return '« ' + g + ' »'; }).join(' et ');
        if (juste) ok++;
        else J.err.push({ t: it.phrase.replace(/[\[\]{}]/g, ''), bonne: bonne, e: it.e });
        retour(corps, juste, juste ? 'Bien vu !' : 'La réponse : ' + bonne, it.e || '');
        var dernier = i === n - 1;
        boutonSuite(corps, dernier, function () { if (J !== sess) return; if (dernier) finir(); else { i++; poser(); } });
      }
    }
    function finir() { bilanJeu({ etoiles: etoilesRatio(ok, n), score: ok + ' sur ' + n + ' sans erreur' }); }
    poser();
  }

  /* ----- Memory : retrouver les paires ----- */
  function jeuMemory(corps) {
    var j = J.j, sess = J, n = Math.min(j.nb || 6, j.paires.length);
    var paires = melanger(j.paires).slice(0, n), cartes = [];
    paires.forEach(function (p, k) { cartes.push({ k: k, t: p[0] }); cartes.push({ k: k, t: p[1] }); });
    cartes = melanger(cartes);
    var ouvertes = [], trouvees = 0, essais = 0, bloque = false;
    consigne(corps, j.consigne || 'Retourne deux cartes à la fois et retrouve celles qui vont ensemble.');
    var info = h('p', { class: 'q-compte', text: 'Paires trouvées : 0 sur ' + n });
    corps.appendChild(info);
    var grille = h('div', { class: 'j-memory' }), liste = h('ul', { class: 'j-trouvees' });
    cartes.forEach(function (ct) {
      var b = h('button', { class: 'j-mcarte', type: 'button', 'aria-label': 'Carte cachée', onclick: function () { retourner(ct, b); } },
        h('span', { class: 'dos', 'aria-hidden': 'true', text: '?' }), h('span', { class: 'face' }, texteRiche(ct.t)));
      ct.b = b; grille.appendChild(b);
    });
    corps.appendChild(grille); corps.appendChild(liste);
    function majInfo() { info.textContent = 'Paires trouvées : ' + trouvees + ' sur ' + n + ' · ' + pluriel(essais, 'essai'); }
    function retourner(ct, b) {
      if (J !== sess || bloque || b.classList.contains('vis')) return;
      b.classList.add('vis'); b.setAttribute('aria-label', ct.t);
      ouvertes.push(ct);
      if (ouvertes.length < 2) return;
      essais++;
      var a = ouvertes[0], z = ouvertes[1]; ouvertes = [];
      if (a.k === z.k) {
        trouvees++;
        [a, z].forEach(function (x) { x.b.classList.add('ok'); x.b.disabled = true; });
        var p = paires[a.k];
        liste.insertBefore(h('li', null, h('b', { text: p[0] }), ' ↔ ', h('b', { text: p[1] }), p[2] ? h('small', { text: ' : ' + p[2] }) : null), liste.firstChild);
        majInfo();
        if (trouvees === n) plusTard(finir, 700);
      } else {
        bloque = true;
        a.b.classList.add('rate'); z.b.classList.add('rate');
        majInfo();
        plusTard(function () {
          [a, z].forEach(function (x) { x.b.classList.remove('vis', 'rate'); x.b.setAttribute('aria-label', 'Carte cachée'); });
          bloque = false;
        }, 1100);
      }
    }
    function finir() {
      var et = essais <= Math.round(n * 1.5) ? 3 : essais <= n * 2 + 2 ? 2 : 1;
      noter(j.point, et >= 2);
      bilanJeu({ etoiles: et, score: pluriel(n, 'paire') + ' trouvées en ' + pluriel(essais, 'essai'), record: essais, recordBas: true });
    }
  }

  /* ----- Remettre dans l'ordre : on touche les étiquettes dans le bon ordre ----- */
  function jeuOrdre(corps) {
    var j = J.j, sess = J, n = Math.min(j.nb || 1, j.series.length);
    var series = melanger(j.series).slice(0, n), si = 0, erreurs = 0;
    function poser() {
      vider(corps);
      if (n > 1) enTete(corps, si, n, j.libelle || 'Série');
      var s = series[si], k = 0, ratesIci = 0, ratesSerie = 0;
      var etapes = s.etapes.map(function (e) { return typeof e === 'string' ? { t: e } : e; });
      consigne(corps, s.consigne || j.consigne);
      if (s.titre) corps.appendChild(h('p', { class: 'j-titre-serie', text: insec(s.titre) }));
      var placees = s.mots ? h('p', { class: 'j-phrase-ordre' }) : h('ol', { class: 'j-placees' });
      var reste = h('div', { class: 'j-reste' + (s.mots ? ' mots' : '') });
      var aide = h('p', { class: 'j-aide' });
      corps.appendChild(placees); corps.appendChild(reste); corps.appendChild(aide);
      var pile = melanger(etapes.map(function (e) { return { e: e }; }));
      pile.forEach(function (x) {
        x.b = h('button', { class: 'j-etiquette', type: 'button', onclick: function () { choisir(x); } }, texteRiche(x.e.t));
        reste.appendChild(x.b);
      });
      function choisir(x) {
        if (J !== sess || !x.b.parentNode) return;
        var attendu = etapes[k];
        if (x.e.t === attendu.t) {
          x.b.remove(); ratesIci = 0; aide.textContent = '';
          pile.forEach(function (y) { y.b.classList.remove('indice'); });
          if (s.mots) { if (k) placees.appendChild(document.createTextNode(' ')); placees.appendChild(h('span', { class: 'mot-place', text: x.e.t })); }
          else placees.appendChild(h('li', null, texteRiche(x.e.t, 'span'), x.e.d ? h('b', { class: 'date', text: x.e.d }) : null, x.e.e ? h('small', null, texteRiche(x.e.e)) : null));
          k++;
          if (k === etapes.length) termine();
        } else {
          erreurs++; ratesIci++; ratesSerie++;
          x.b.classList.remove('secoue', 'ko'); void x.b.offsetWidth; x.b.classList.add('secoue', 'ko');
          plusTard(function () { x.b.classList.remove('ko'); }, 650);
          if (ratesIci >= 2) {
            aide.textContent = 'Un indice : l\'étiquette qui vient maintenant clignote.';
            pile.forEach(function (y) { if (y.b.parentNode && y.e.t === attendu.t) y.b.classList.add('indice'); });
          } else aide.textContent = 'Pas encore celle-là. Cherche ce qui vient juste après.';
        }
      }
      function termine() {
        reste.remove(); aide.remove();
        noter(j.point, ratesSerie === 0);
        if (ratesSerie) J.err.push({ t: s.titre || 'Remettre dans l\'ordre', bonne: '', e: s.explication || '' });
        if (s.trad || s.explication) retour(corps, true, ratesSerie ? 'C\'est dans l\'ordre.' : 'Sans faute !', [s.trad, s.explication].filter(Boolean).join(' '));
        var dernier = si === n - 1;
        boutonSuite(corps, dernier, function () { if (J !== sess) return; if (dernier) finir(); else { si++; poser(); } });
      }
    }
    function finir() {
      var et = erreurs === 0 ? 3 : erreurs <= 2 * n ? 2 : 1;
      bilanJeu({ etoiles: et, score: (n > 1 ? pluriel(n, 'série') + ', ' : '') + (erreurs ? pluriel(erreurs, 'erreur') : 'aucune erreur') });
    }
    poser();
  }

  /* ----- Course contre la montre (ou défi sans chrono si duree vaut 0) ----- */
  function jeuEclair(corps) {
    var j = J.j, sess = J, duree = j.duree || 0;
    var banque = j.questions.slice(), file = melanger(banque);
    var n = duree ? 0 : Math.min(j.nb || 8, banque.length), i = 0, ok = 0, serie = 0, meilleure = 0, fin = 0, verrou = true;
    if (!duree) file = file.slice(0, n);
    consigne(corps, j.consigne);
    var etat = h('span', { class: 'j-chrono', text: duree ? duree + ' s' : 'Question 1 sur ' + n });
    var score = h('span', { class: 'j-score', text: '✓ 0' });
    corps.appendChild(h('div', { class: 'j-haut' }, etat, score));
    var barre = duree ? h('div', { class: 'j-temps' }, h('i')) : null;
    if (barre) corps.appendChild(barre);
    var zoneQ = h('div', { class: 'j-zoneq' });
    corps.appendChild(zoneQ);
    if (duree) {
      zoneQ.appendChild(h('div', { class: 'j-depart' },
        h('p', { text: 'Réponds juste au plus de questions possible avant la fin du temps.' }),
        h('button', { class: 'btn-plein gros-depart', type: 'button', text: 'C\'est parti ! (' + duree + ' s)', onclick: demarrer })));
    } else poser();
    function demarrer() {
      if (J !== sess) return;
      fin = Date.now() + duree * 1000;
      var id = setInterval(function () {
        if (J !== sess) { clearInterval(id); return; }
        var reste = Math.max(0, fin - Date.now());
        etat.textContent = Math.ceil(reste / 1000) + ' s';
        barre.firstChild.style.width = (reste / (duree * 1000) * 100) + '%';
        if (reste <= 0) { clearInterval(id); if (!verrou) finir(); }
      }, 200);
      J.minuteurs.push(id);
      poser();
    }
    function poser() {
      vider(zoneQ);
      if (duree && !file.length) file = melanger(banque);
      var q = duree ? file.shift() : file[i];
      var opts = q.options.map(function (t, k) { return { t: t, juste: k === q.bonne }; });
      if (q.fixe !== 'ordre' && j.fixe !== 'ordre') opts = melanger(opts);
      zoneQ.appendChild(texteRiche(q.q, 'p')).className = 'q-texte';
      var courtes = opts.every(function (o) { return o.t.length <= 16; });
      var z = h('div', { class: 'j-options' + (courtes ? ' courtes' : '') });
      var boutons = opts.map(function (o) {
        var b = h('button', { class: 'q-opt', type: 'button', onclick: function () { repondre(q, o, b, boutons, opts); } }, texteRiche(o.t));
        z.appendChild(b); return b;
      });
      zoneQ.appendChild(z);
      verrou = false;
    }
    function repondre(q, o, b, boutons, opts) {
      if (J !== sess || verrou) return;
      verrou = true;
      boutons.forEach(function (x) { x.disabled = true; });
      noter(q.p || j.point, o.juste);
      var dernier = !duree && i === n - 1;
      var suite = function () {
        if (duree && Date.now() >= fin) { finir(); return; }
        if (!duree) { if (dernier) { finir(); return; } i++; etat.textContent = 'Question ' + (i + 1) + ' sur ' + n; }
        poser();
      };
      if (o.juste) {
        ok++; serie++; meilleure = Math.max(meilleure, serie);
        b.classList.add('ok');
        score.textContent = '✓ ' + ok + (serie >= 3 ? '   🔥 ' + serie : '');
        if (!duree && q.e) { retour(zoneQ, true, 'Bonne réponse.', q.e); boutonSuite(zoneQ, dernier, function () { if (J === sess) suite(); }); }
        else plusTard(suite, duree ? 350 : 600);
      } else {
        serie = 0;
        b.classList.add('ko');
        var bonne = opts.filter(function (x) { return x.juste; })[0];
        boutons[opts.indexOf(bonne)].classList.add('ok-contour');
        score.textContent = '✓ ' + ok;
        J.err.push({ t: q.q, bonne: bonne.t, e: q.e });
        if (duree) { if (q.e) zoneQ.appendChild(texteRiche(q.e, 'p')).className = 'j-mini-retour'; plusTard(suite, q.e ? 1900 : 1100); }
        else { retour(zoneQ, false, 'La bonne réponse : ' + bonne.t, q.e || ''); boutonSuite(zoneQ, dernier, function () { if (J === sess) suite(); }); }
      }
    }
    function finir() {
      if (J !== sess || J.fini) return;
      if (duree) {
        var s = j.etoiles || [5, 10, 15];
        bilanJeu({ etoiles: ok >= s[2] ? 3 : ok >= s[1] ? 2 : 1, record: ok,
          score: pluriel(ok, 'bonne réponse').replace('bonne réponses', 'bonnes réponses') + ' en ' + duree + ' secondes' + (meilleure >= 3 ? ' · meilleure série : ' + meilleure : '') });
      } else bilanJeu({ etoiles: etoilesRatio(ok, n), score: ok + ' sur ' + n });
    }
  }

  /* ----- Graphique : placer les points du tableau, relier, puis lire ----- */
  function jeuGraphe(corps) {
    var j = J.j, sess = J, d = melanger(j.series)[0];
    var X = d.x, Y = d.y, pts = d.points, qs = d.questions || [], k = 0, erreurs = 0, qi = 0, okQ = 0, essai = null;
    var W = 640, H = 410, L = 64, R = 18, T = 34, B = 52;
    function sx(x) { return L + (x - X.min) / (X.max - X.min) * (W - L - R); }
    function sy(y) { return T + (Y.max - y) / (Y.max - Y.min) * (H - T - B); }
    corps.className = 'quiz-corps large';
    consigne(corps, d.consigne || j.consigne || 'Place les points du tableau un par un, en touchant le quadrillage.');
    var tab = h('table', { class: 'j-table' });
    var l1 = h('tr', null, h('th', { text: X.nom + ' (' + X.unite + ')' })), l2 = h('tr', null, h('th', { text: Y.nom + ' (' + Y.unite + ')' }));
    var cellules = pts.map(function (p) { var a = h('td', { text: nombre(p[0]) }), b = h('td', { text: nombre(p[1]) }); l1.appendChild(a); l2.appendChild(b); return [a, b]; });
    tab.appendChild(l1); tab.appendChild(l2);
    corps.appendChild(h('div', { class: 'j-table-zone' }, tab));
    var etat = h('p', { class: 'j-aide fort' });
    corps.appendChild(etat);
    var NS = 'http://www.w3.org/2000/svg';
    function s(tag, attrs, txt) {
      var e = document.createElementNS(NS, tag);
      Object.keys(attrs || {}).forEach(function (a) { e.setAttribute(a, attrs[a]); });
      if (txt != null) e.textContent = txt;
      return e;
    }
    var svg = s('svg', { viewBox: '0 0 ' + W + ' ' + H, class: 'j-graphe', role: 'img', 'aria-label': 'Quadrillage du graphique' });
    var x, y;
    for (x = X.min; x <= X.max + 1e-9; x += X.pas) {
      svg.appendChild(s('line', { x1: sx(x), x2: sx(x), y1: sy(Y.min), y2: sy(Y.max), class: 'grille-l' }));
      svg.appendChild(s('text', { x: sx(x), y: sy(Y.min) + 20, class: 'grad', 'text-anchor': 'middle' }, nombre(+x.toFixed(6))));
    }
    for (y = Y.min; y <= Y.max + 1e-9; y += Y.pas) {
      svg.appendChild(s('line', { x1: sx(X.min), x2: sx(X.max), y1: sy(y), y2: sy(y), class: 'grille-l' + (Math.abs(y) < 1e-9 ? ' zero' : '') }));
      svg.appendChild(s('text', { x: sx(X.min) - 8, y: sy(y) + 4, class: 'grad', 'text-anchor': 'end' }, nombre(+y.toFixed(6))));
    }
    svg.appendChild(s('line', { x1: sx(X.min), x2: sx(X.max) + 10, y1: sy(Y.min), y2: sy(Y.min), class: 'axe' }));
    svg.appendChild(s('line', { x1: sx(X.min), x2: sx(X.min), y1: sy(Y.min), y2: sy(Y.max) - 10, class: 'axe' }));
    svg.appendChild(s('text', { x: sx(X.max), y: H - 8, class: 'nom-axe', 'text-anchor': 'end' }, X.nom + ' (' + X.unite + ')'));
    svg.appendChild(s('text', { x: 8, y: 16, class: 'nom-axe' }, Y.nom + ' (' + Y.unite + ')'));
    var courbe = s('polyline', { class: 'j-courbe', points: '' });
    var calque = s('g', {});
    svg.appendChild(courbe); svg.appendChild(calque);
    function croix(cx, cy, cls) {
      var g = s('g', { class: cls, transform: 'translate(' + sx(cx) + ',' + sy(cy) + ')' });
      g.appendChild(s('line', { x1: -7, y1: -7, x2: 7, y2: 7 })); g.appendChild(s('line', { x1: -7, y1: 7, x2: 7, y2: -7 }));
      return g;
    }
    var zoneQ = h('div', { class: 'j-zoneq' });
    corps.appendChild(h('div', { class: 'j-graphe-wrap' }, h('div', { class: 'j-graphe-zone' }, svg), zoneQ));
    function majEtat() {
      cellules.forEach(function (c, i) { c[0].className = c[1].className = i === k ? 'courant' : i < k ? 'fait' : ''; });
      if (k < pts.length) etat.textContent = 'Point ' + (k + 1) + ' sur ' + pts.length + ' : ' + X.nom.toLowerCase() + ' ' + nombre(pts[k][0]) + ' ' + X.unite +
        ', ' + Y.nom.toLowerCase() + ' ' + nombre(pts[k][1]) + ' ' + Y.unite + '.';
    }
    majEtat();
    svg.addEventListener('click', function (ev) {
      if (J !== sess || k >= pts.length) return;
      var m = svg.getScreenCTM(); if (!m) return;
      var pt = svg.createSVGPoint(); pt.x = ev.clientX; pt.y = ev.clientY;
      var p = pt.matrixTransform(m.inverse());
      var vx = X.min + (p.x - L) / (W - L - R) * (X.max - X.min), vy = Y.max - (p.y - T) / (H - T - B) * (Y.max - Y.min);
      var gx = +(Math.round((vx - X.min) / X.pas) * X.pas + X.min).toFixed(6), gy = +(Math.round((vy - Y.min) / Y.pas) * Y.pas + Y.min).toFixed(6);
      if (gx < X.min || gx > X.max || gy < Y.min || gy > Y.max) return;
      var cible = pts[k];
      if (essai && essai.parentNode) essai.remove();
      if (Math.abs(gx - cible[0]) < 1e-6 && Math.abs(gy - cible[1]) < 1e-6) {
        calque.appendChild(croix(gx, gy, 'j-pt'));
        k++; majEtat();
        if (k === pts.length) relier();
      } else {
        erreurs++;
        noter(j.point, false);
        var e = essai = croix(gx, gy, 'j-pt ko'); calque.appendChild(e);
        plusTard(function () { if (e.parentNode) e.remove(); }, 1000);
        etat.textContent = Math.abs(gx - cible[0]) > 1e-6
          ? 'Pas tout à fait. Commence par l\'axe horizontal : ' + X.nom.toLowerCase() + ' ' + nombre(cible[0]) + ' ' + X.unite + '.'
          : 'La colonne est bonne ! Monte ou descends jusqu\'à ' + nombre(cible[1]) + ' ' + Y.unite + '.';
      }
    });
    function relier() {
      etat.textContent = 'Tous les points sont placés. On les relie…';
      courbe.setAttribute('points', pts.map(function (p) { return sx(p[0]) + ',' + sy(p[1]); }).join(' '));
      courbe.setAttribute('class', 'j-courbe trace');
      if (d.titre) svg.appendChild(s('text', { x: (L + W - R) / 2 + 30, y: 16, class: 'titre-graphe', 'text-anchor': 'middle' }, d.titre));
      noter(j.point, erreurs === 0);
      plusTard(function () { etat.textContent = 'Maintenant, fais parler le graphique.'; if (qs.length) poserQ(); else finir(); }, 900);
    }
    function poserQ() {
      vider(zoneQ);
      var q = qs[qi];
      zoneQ.appendChild(h('p', { class: 'q-compte', text: 'Question ' + (qi + 1) + ' sur ' + qs.length }));
      zoneQ.appendChild(texteRiche(q.q, 'p')).className = 'q-texte petit';
      var opts = melanger(q.options.map(function (t, i) { return { t: t, juste: i === q.bonne }; }));
      var z = h('div', { class: 'q-options' });
      var boutons = opts.map(function (o) {
        var b = h('button', { class: 'q-opt', type: 'button', onclick: function () {
          if (J !== sess || b.disabled) return;
          boutons.forEach(function (x) { x.disabled = true; });
          noter(q.p || j.point, o.juste);
          var bonne = opts.filter(function (x) { return x.juste; })[0];
          if (o.juste) { okQ++; b.classList.add('ok'); }
          else { erreurs++; b.classList.add('ko'); boutons[opts.indexOf(bonne)].classList.add('ok-contour'); J.err.push({ t: q.q, bonne: bonne.t, e: q.e }); }
          retour(zoneQ, o.juste, o.juste ? 'Bonne réponse.' : 'La bonne réponse : ' + bonne.t, q.e || '');
          var dernier = qi === qs.length - 1;
          boutonSuite(zoneQ, dernier, function () { if (J !== sess) return; if (dernier) finir(); else { qi++; poserQ(); } });
        } }, texteRiche(o.t));
        z.appendChild(b); return b;
      });
      zoneQ.appendChild(z);
      zoneQ.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    function finir() {
      bilanJeu({ etoiles: erreurs <= 1 ? 3 : erreurs <= 4 ? 2 : 1,
        score: pluriel(pts.length, 'point') + ' placés, ' + okQ + ' sur ' + qs.length + ' aux questions · ' + (erreurs ? pluriel(erreurs, 'erreur') : 'aucune erreur') });
    }
  }

  var MOTEURS = { tri: jeuTri, mots: jeuMots, memory: jeuMemory, ordre: jeuOrdre, eclair: jeuEclair, graphe: jeuGraphe };

  /* ----- Bilan commun ----- */
  function bilanJeu(res) {
    if (!J || J.fini) return;
    arreterMinuteurs();
    J.fini = true;
    var j = J.j, m = J.m, c = J.c;
    var r = JX[j.id] || { etoiles: 0, parties: 0 }, nouveauRecord = false;
    if (res.record != null && (r.record == null || (res.recordBas ? res.record < r.record : res.record > r.record))) {
      nouveauRecord = r.record != null; r.record = res.record;
    }
    var mieux = r.parties > 0 && res.etoiles > (r.etoiles || 0);
    r.etoiles = Math.max(r.etoiles || 0, res.etoiles);
    r.parties = (r.parties || 0) + 1; r.dernier = res.etoiles; r.t = Date.now();
    JX[j.id] = r; sauverJX();
    var corps = vider($('#jeu-corps'));
    corps.className = 'quiz-corps';
    $('#jeu').scrollTop = 0;
    var b = h('div', { class: 'bilan bilan-jeu' });
    b.appendChild(etoilesEl(res.etoiles, 'grandes-etoiles'));
    b.appendChild(h('h3', { text: { 3: 'Parfait !', 2: 'Très bien joué !', 1: 'C\'est un bon début.' }[res.etoiles] }));
    b.appendChild(h('p', { class: 'sous', text: res.score + '.' + (nouveauRecord ? ' Nouveau record ! 🏆' : '') + (mieux ? ' Une étoile de plus qu\'avant !' : '') +
      (res.etoiles < 3 ? ' Rejoue quand tu veux : les questions changent.' : '') }));
    var vus = {}, err = J.err.filter(function (x) { if (vus[x.t]) return false; vus[x.t] = 1; return true; });
    if (err.length) {
      b.appendChild(h('p', { class: 'a-retenir', text: 'À retenir' }));
      var ul = h('ul', { class: 'a-revoir' });
      err.slice(0, 8).forEach(function (x) {
        ul.appendChild(h('li', null, h('p', null, texteRiche(x.t), x.bonne ? h('b', { class: 'rappel-r', text: ' → ' + insec(x.bonne) }) : null,
          x.e ? texteRiche(x.e, 'small') : null)));
      });
      ul.querySelectorAll('small').forEach(function (s) { s.className = 'rappel-e'; });
      b.appendChild(ul);
    }
    var sup = premierSupportVisible(j.revoir);
    b.appendChild(h('div', { class: 'rangee' },
      h('button', { class: 'btn-plein', type: 'button', text: 'Rejouer', onclick: function () { lancerJeu(m, c, j); } }),
      sup ? h('button', { class: 'btn-doux', type: 'button', text: '▶ Revoir : ' + sup.titre, onclick: function () { ouvrirLecteur(sup); fermerJeu(); } }) : null,
      h('button', { class: 'btn-doux', type: 'button', text: 'Retour', onclick: function () { fermerJeu(); } })));
    corps.appendChild(b);
  }

  /* ================= Code parent ================= */
  function demanderCode(mode, suite) { // mode : 'entrer' | 'creer'
    var saisie = '', premier = null;
    var mod = ouvrirModale(null);
    var titre = h('h3'), aide = h('p'), pts = h('div', { class: 'points' }), pave = h('div', { class: 'pave' });
    function maj() {
      titre.textContent = mode === 'entrer' ? 'Code parent' : (premier == null ? 'Choisissez un code' : 'Confirmez le code');
      aide.textContent = mode === 'entrer' ? 'Quatre chiffres.' : (premier == null ? 'Quatre chiffres, pour protéger l\'espace parent.' : 'Tapez-le une seconde fois.');
      vider(pts); for (var i = 0; i < 4; i++) pts.appendChild(h('i', { class: i < saisie.length ? 'plein' : '' }));
    }
    function erreur(msg) { aide.textContent = msg; mod.classList.remove('secoue'); void mod.offsetWidth; mod.classList.add('secoue'); saisie = ''; vider(pts); for (var i = 0; i < 4; i++) pts.appendChild(h('i')); }
    function touche(ch) {
      if (ch === '←') { saisie = saisie.slice(0, -1); maj(); return; }
      if (saisie.length >= 4) return;
      saisie += ch; maj();
      if (saisie.length < 4) return;
      setTimeout(function () {
        if (mode === 'entrer') {
          if (hacher('r5e:' + saisie) === Store.get(CLES.code, null)) { suite(); fermerModale(); }
          else erreur('Code incorrect. Réessayez.');
        } else if (premier == null) { premier = saisie; saisie = ''; maj(); }
        else if (premier === saisie) { Store.set(CLES.code, hacher('r5e:' + saisie)); suite(); fermerModale(); }
        else { premier = null; erreur('Les deux codes sont différents. Recommencez.'); setTimeout(maj, 1400); }
      }, 120);
    }
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '←', '0', '✕'].forEach(function (k) {
      pave.appendChild(h('button', { type: 'button', text: k, 'aria-label': k === '←' ? 'Effacer' : k === '✕' ? 'Annuler' : k, onclick: function () { if (k === '✕') fermerModale(); else touche(k); } }));
    });
    mod.appendChild(titre); mod.appendChild(aide); mod.appendChild(pts); mod.appendChild(pave);
    if (mode === 'entrer') mod.appendChild(h('button', { class: 'petit-lien', type: 'button', text: 'Code oublié ?', onclick: function () {
      aide.textContent = 'Le code ne peut pas être récupéré. Pour repartir de zéro : Chrome › Paramètres › Paramètres des sites › Stockage, puis effacer les données de ce site. La progression est effacée aussi : restaurez ensuite votre dernière sauvegarde.';
    } }));
    maj();
  }

  /* ================= Espace parent ================= */
  var vueParent = 'supports', filtreParent = null;
  function ouvrirParent() {
    var go = function () {
      $('#parent').hidden = false;
      ouvrirCouche('parent', function () { fermerParent(true); });
      majFond();
      filtreParent = null;
      rendreParent();
    };
    demanderCode(Store.get(CLES.code, null) ? 'entrer' : 'creer', go);
  }
  function fermerParent(depuisRetour) {
    if ($('#parent').hidden) return;
    $('#parent').hidden = true;
    if (depuisRetour !== true) fermerCouche('parent');
    majFond();
    rendreTout();
  }
  function tousSupports() { return Object.keys(M.index).map(function (id) { return M.index[id]; }); }
  function categories() {
    var t = tousSupports();
    return {
      verifier: t.filter(function (x) { return x.s.verifier && !x.s.valide && !x.s.retire && x.s.media; }),
      manquants: t.filter(function (x) { return !x.s.media && !x.s.retire && !(x.s.lienDe && !x.s.ajoutParent); }),
      problemes: t.filter(function (x) { return P.erreurs[x.s.id] && !x.s.retire; }),
      ajouts: t.filter(function (x) { return x.s.ajoutParent; }),
      retires: t.filter(function (x) { return x.s.retire; }),
      tous: t
    };
  }
  function rendreParent() {
    construire();
    var cats = categories();
    var nav = vider($('#par-nav'));
    var aFaire = cats.verifier.length + cats.manquants.length + cats.problemes.length;
    [['supports', 'Supports', aFaire], ['ajouter', 'Ajouter un support'], ['suivi', 'Suivi'], ['sauvegarde', 'Sauvegarde'], ['reglages', 'Réglages']].forEach(function (v) {
      nav.appendChild(h('button', { type: 'button', 'aria-current': String(vueParent === v[0]), onclick: function () { vueParent = v[0]; rendreParent(); $('#parent').scrollTop = 0; } },
        v[1], v[2] ? h('span', { class: 'pastille', text: String(v[2]) }) : null));
    });
    var corps = vider($('#par-corps'));
    if (!Store.ok()) corps.appendChild(h('div', { class: 'alerte', text: 'Ce navigateur n\'enregistre rien (navigation privée ?) : la progression et vos réglages seront perdus à la fermeture.' }));
    ({ supports: vueSupports, ajouter: vueAjouter, suivi: vueSuivi, sauvegarde: vueSauvegarde, reglages: vueReglages })[vueParent](corps, cats);
  }

  function vueSupports(corps, cats) {
    var filtres = [
      ['verifier', 'À visionner avant d\'ouvrir', cats.verifier],
      ['manquants', 'Liens à récupérer', cats.manquants],
      ['problemes', 'Problèmes de lecture', cats.problemes],
      ['ajouts', 'Ajoutés par vous', cats.ajouts],
      ['retires', 'Retirés', cats.retires],
      ['tous', 'Tous', cats.tous]
    ];
    if (!filtreParent) filtreParent = (filtres.filter(function (f) { return f[2].length && f[0] !== 'ajouts' && f[0] !== 'retires'; })[0] || filtres[5])[0];
    corps.appendChild(h('h3', { text: 'Supports' }));
    var aides = {
      verifier: 'Ces supports sont cachés tant que vous ne les avez pas regardés et ouverts.',
      manquants: 'Collez l\'adresse trouvée sur la chaîne officielle (YouTube, apps.education, ou fichier audio de Radio France). Le support apparaît aussitôt.',
      problemes: 'La lecture a échoué sur la tablette. Remplacez le lien, ou retirez le support.',
      ajouts: 'Les supports que vous avez ajoutés vous-même.',
      retires: 'Cachés pour l\'élève. Vous pouvez les rétablir.',
      tous: 'Pour chaque support : aperçu, retrait, et réglage du début ou de la fin (par exemple pour s\'arrêter avant une partie hors programme).'
    };
    corps.appendChild(h('p', { class: 'aide', text: aides[filtreParent] }));
    var fb = h('div', { class: 'filtres' });
    filtres.forEach(function (f) {
      fb.appendChild(h('button', { type: 'button', 'aria-pressed': String(filtreParent === f[0]), text: f[1] + ' (' + f[2].length + ')', onclick: function () { filtreParent = f[0]; rendreParent(); } }));
    });
    corps.appendChild(fb);
    var liste = filtres.filter(function (f) { return f[0] === filtreParent; })[0][2];
    if (!liste.length) { corps.appendChild(h('p', { class: 'aide', text: 'Rien dans cette liste.' })); return; }
    var derniereMat = null;
    liste.forEach(function (x) {
      if (x.m.id !== derniereMat) {
        derniereMat = x.m.id;
        corps.appendChild(h('div', { class: 'groupe-mat', style: varsCouleur(x.m.couleur) }, h('i'), x.m.nom));
      }
      corps.appendChild(ligneSupport(x, filtreParent === 'manquants' || filtreParent === 'problemes'));
    });
  }

  function ligneSupport(x, ouvrirReglages) {
    var s = x.s;
    var etat = s.retire ? ['Retiré', ''] : !s.media ? ['Lien manquant', 'attente'] : !s.valide ? ['À visionner', 'attente'] : ['Visible', 'visible'];
    var err = P.erreurs[s.id];
    var boite = h('div', { class: 'ligne-sup' });
    var actions = h('div', { class: 'actions' });
    if (s.media) actions.appendChild(h('button', { type: 'button', text: 'Aperçu', onclick: function () { ouvrirLecteur(s, { apercu: true }); } }));
    if (s.verifier && s.media && !s.retire) {
      if (!s.valide) actions.appendChild(h('button', { class: 'fort', type: 'button', text: 'Ouvrir à l\'élève', onclick: function () { P.valides.push(s.id); sauverP(); toast('Ouvert : « ' + s.titre + ' »'); rendreParent(); } }));
      else actions.appendChild(h('button', { type: 'button', text: 'Refermer', onclick: function () { P.valides = P.valides.filter(function (i) { return i !== s.id; }); sauverP(); rendreParent(); } }));
    }
    if (s.ajoutParent) actions.appendChild(h('button', { type: 'button', text: 'Supprimer', onclick: function () {
      if (!confirm('Supprimer « ' + s.titre + ' » ?')) return;
      P.ajouts = P.ajouts.filter(function (a) { return a.id !== s.id; }); sauverP(); rendreParent();
    } }));
    else if (!s.retire) actions.appendChild(h('button', { type: 'button', text: 'Retirer', onclick: function () { P.retires.push(s.id); sauverP(); rendreParent(); } }));
    else actions.appendChild(h('button', { type: 'button', text: 'Rétablir', onclick: function () { P.retires = P.retires.filter(function (i) { return i !== s.id; }); sauverP(); rendreParent(); } }));
    boite.appendChild(h('div', { class: 'haut' },
      h('div', { class: 'txt' },
        h('b', { text: s.titre }), ' ', h('span', { class: 'statut ' + etat[1], text: etat[0] }),
        h('div', { class: 'meta', text: [x.c.titre, s.source, s.duree].filter(Boolean).join(' — ') }),
        s.noteParent ? h('div', { class: 'np', text: s.noteParent }) : null,
        err ? h('div', { class: 'err', text: 'Échec de lecture (code ' + err.code + ') : ' + (MESSAGES[err.code] || 'erreur inconnue').replace(' Préviens tes parents.', '') }) : null),
      actions));
    // lien et réglages
    var det = h('details', { open: ouvrirReglages || null });
    det.appendChild(h('summary', { class: 'meta', style: 'cursor:pointer;margin-top:8px', text: 'Lien, début et fin' }));
    var viaAutre = s.lienDe && !s.ajoutParent;
    var iLien = h('input', { type: 'url', inputmode: 'url', placeholder: 'https://www.youtube.com/watch?v=…', value: viaAutre ? '' : (P.liens[s.id] || s.lien || ''), disabled: viaAutre || null });
    var reg = P.reglages[s.id] || {};
    var iDeb = h('input', { type: 'text', inputmode: 'numeric', placeholder: s.debut ? fmt(s.debut) : '0:00', value: reg.debut != null ? fmt(reg.debut) : '' });
    var iFin = h('input', { type: 'text', inputmode: 'numeric', placeholder: s.fin ? fmt(s.fin) : 'fin', value: reg.fin != null ? fmt(reg.fin) : '' });
    var msg = h('div', { class: 'msg' });
    var grille = h('div', { class: 'reglages' },
      h('label', null, viaAutre ? 'Lien (repris d\'une autre partie de la même vidéo)' : 'Adresse de la vidéo ou du fichier audio', iLien),
      h('label', null, 'Début (min:s)', iDeb),
      h('label', null, 'Fin (min:s)', iFin),
      h('button', { class: 'par-btn fort', type: 'button', text: 'Enregistrer', onclick: function () {
        var lien = iLien.value.trim(), d = lireTemps(iDeb.value), f = lireTemps(iFin.value);
        if (!viaAutre && lien && !analyserLien(lien)) { msg.className = 'msg mauvais'; msg.textContent = 'Adresse non reconnue. Collez un lien YouTube, une page de vidéo apps.education (PeerTube), ou l\'adresse d\'un fichier .mp3 / .mp4.'; return; }
        if (isNaN(d) || isNaN(f)) { msg.className = 'msg mauvais'; msg.textContent = 'Temps à écrire sous la forme 12:30 (minutes:secondes).'; return; }
        if (d != null && f != null && f <= d) { msg.className = 'msg mauvais'; msg.textContent = 'La fin doit être après le début.'; return; }
        if (!viaAutre) {
          if (s.ajoutParent) { var a = P.ajouts.filter(function (z) { return z.id === s.id; })[0]; if (a) a.lien = lien; }
          else if (lien && lien !== s.lien) P.liens[s.id] = lien; else delete P.liens[s.id];
        }
        if (d == null && f == null) delete P.reglages[s.id]; else P.reglages[s.id] = { debut: d, fin: f };
        delete P.erreurs[s.id];
        sauverP();
        toast('Enregistré');
        rendreParent();
      } }),
      msg);
    det.appendChild(grille);
    boite.appendChild(det);
    return boite;
  }

  function vueAjouter(corps) {
    corps.appendChild(h('h3', { text: 'Ajouter un support' }));
    corps.appendChild(h('p', { class: 'aide', text: 'Un support ajouté ici est visible tout de suite. Utilisez « Aperçu » pour vérifier qu\'il se lit bien dans l\'application avant de l\'ajouter.' }));
    var sMat = h('select');
    M.matieres.forEach(function (m) { sMat.appendChild(h('option', { value: m.id, text: m.nom, selected: m.id === ongletActif || null })); });
    var sChap = h('select'), iNouv = h('input', { type: 'text', placeholder: 'Titre du nouveau chapitre' });
    var lNouv = h('label', { class: 'large', hidden: true }, 'Nouveau chapitre', iNouv);
    function remplirChap() {
      vider(sChap);
      var m = matiereParId(sMat.value);
      m.chapitres.forEach(function (c) { sChap.appendChild(h('option', { value: c.id, text: c.titre })); });
      sChap.appendChild(h('option', { value: '__nouveau', text: '+ Nouveau chapitre…' }));
      lNouv.hidden = sChap.value !== '__nouveau';
    }
    sMat.addEventListener('change', remplirChap);
    sChap.addEventListener('change', function () { lNouv.hidden = sChap.value !== '__nouveau'; });
    remplirChap();
    var iTitre = h('input', { type: 'text', placeholder: 'Ex. : Les volcans' });
    var iSource = h('input', { type: 'text', placeholder: 'Ex. : C\'est pas sorcier' });
    var iLien = h('input', { type: 'url', inputmode: 'url', placeholder: 'https://…' });
    var sType = h('select', null, h('option', { value: 'video', text: 'Vidéo' }), h('option', { value: 'podcast', text: 'Podcast' }));
    var sEtiq = h('select', null, h('option', { value: 'decouvrir', text: 'Pour découvrir' }), h('option', { value: 'consolider', text: 'Pour consolider' }), h('option', { value: 'plusloin', text: 'Pour aller plus loin' }));
    var iDuree = h('input', { type: 'text', placeholder: 'Ex. : 12 min' });
    var iDeb = h('input', { type: 'text', inputmode: 'numeric', placeholder: '0:00' });
    var iFin = h('input', { type: 'text', inputmode: 'numeric', placeholder: 'fin' });
    var msg = h('p', { class: 'msg large' });
    function lire() {
      var lien = iLien.value.trim(), media = analyserLien(lien), d = lireTemps(iDeb.value), f = lireTemps(iFin.value);
      if (!iTitre.value.trim()) return { err: 'Donnez un titre.' };
      if (!media) return { err: 'Adresse non reconnue. Collez un lien YouTube, une page de vidéo apps.education (PeerTube), ou l\'adresse d\'un fichier .mp3 / .mp4.' };
      if (isNaN(d) || isNaN(f)) return { err: 'Temps à écrire sous la forme 12:30 (minutes:secondes).' };
      if (sChap.value === '__nouveau' && !iNouv.value.trim()) return { err: 'Donnez un titre au nouveau chapitre.' };
      return { s: { id: 'p-' + Date.now().toString(36), titre: iTitre.value.trim(), source: iSource.value.trim(), type: sType.value, lien: lien, etiquette: sEtiq.value, duree: iDuree.value.trim(), debut: d, fin: f, matiere: sMat.value } };
    }
    var form = h('div', { class: 'form' },
      h('label', null, 'Matière', sMat), h('label', null, 'Chapitre', sChap), lNouv,
      h('label', { class: 'large' }, 'Titre affiché', iTitre),
      h('label', { class: 'large' }, 'Adresse (YouTube, apps.education, fichier .mp3 ou .mp4)', iLien),
      h('label', null, 'Source (facultatif)', iSource), h('label', null, 'Durée (facultatif)', iDuree),
      h('label', null, 'Type', sType), h('label', null, 'Étiquette', sEtiq),
      h('label', null, 'Début (facultatif)', iDeb), h('label', null, 'Fin (facultatif)', iFin),
      msg,
      h('div', { class: 'large actions' },
        h('button', { class: 'par-btn', type: 'button', text: 'Aperçu', onclick: function () {
          var r = lire(); if (r.err) { msg.className = 'msg mauvais large'; msg.textContent = r.err; return; }
          var s = r.s; s.media = analyserLien(s.lien); s.debutF = s.debut != null ? s.debut : s.media.debut || 0; s.finF = s.fin; s.cle = null;
          ouvrirLecteur(s, { apercu: true, couleur: matiereParId(s.matiere).couleur });
        } }),
        h('button', { class: 'par-btn fort', type: 'button', text: 'Ajouter à l\'application', onclick: function () {
          var r = lire(); if (r.err) { msg.className = 'msg mauvais large'; msg.textContent = r.err; return; }
          var s = r.s, chapId = sChap.value;
          if (chapId === '__nouveau') { chapId = 'pc-' + Date.now().toString(36); P.chapitres.push({ id: chapId, matiere: s.matiere, titre: iNouv.value.trim() }); }
          s.chapitre = chapId;
          if (s.debut == null) delete s.debut; if (s.fin == null) delete s.fin;
          P.ajouts.push(s); sauverP();
          var m = matiereParId(s.matiere);
          construire();
          var ch = M.index[s.id] ? M.index[s.id].c.titre : '';
          msg.className = 'msg bon large'; msg.textContent = 'Ajouté dans ' + m.nom + (ch ? ', « ' + ch + ' »' : '') + '.';
          iTitre.value = ''; iLien.value = ''; iSource.value = ''; iDuree.value = ''; iDeb.value = ''; iFin.value = ''; iNouv.value = '';
          remplirChap();
        } })));
    corps.appendChild(form);
  }

  function vueSuivi(corps) {
    corps.appendChild(h('h3', { text: 'Points fragiles aux quiz et aux jeux' }));
    corps.appendChild(h('p', { class: 'aide', text: 'Invisible pour l\'élève. Classés du plus fragile au plus solide.' }));
    var pts = Object.keys(QS.points).map(function (k) { return QS.points[k]; }).filter(function (p) { return p.essais; });
    pts.sort(function (a, b) { return (b.erreurs / b.essais) - (a.erreurs / a.essais) || b.erreurs - a.erreurs || b.essais - a.essais; });
    if (!pts.length) corps.appendChild(h('p', { class: 'aide', text: 'Aucun quiz ni jeu fait pour l\'instant.' }));
    else {
      var t = h('table', { class: 'stats' }, h('tr', null, h('th', { text: 'Point' }), h('th', { text: 'Matière et chapitre' }), h('th', { text: 'Erreurs' })));
      pts.forEach(function (p) {
        t.appendChild(h('tr', null, h('td', { text: p.point }), h('td', { text: p.matiere + ' — ' + p.chapitre }),
          h('td', null, p.erreurs + ' sur ' + p.essais, h('div', { class: 'jauge' }, h('i', { style: 'width:' + Math.round(p.erreurs / p.essais * 100) + '%' })))));
      });
      corps.appendChild(t);
      corps.appendChild(h('p', { style: 'margin-top:12px' }, h('button', { class: 'par-btn', type: 'button', text: 'Effacer ces statistiques', onclick: function () {
        if (!confirm('Effacer les statistiques des quiz ?')) return; QS = { points: {}, rates: {} }; sauverQS(); rendreParent();
      } })));
    }
    corps.appendChild(h('h3', { style: 'margin-top:26px', text: 'Activité par matière' }));
    var t2 = h('table', { class: 'stats' }, h('tr', null, h('th', { text: 'Matière' }), h('th', { text: 'Vus' }), h('th', { text: 'En cours' }), h('th', { text: 'Disponibles' })));
    M.matieres.forEach(function (m) {
      var vus = 0, enc = 0, dispo = 0, deja = {};
      m.chapitres.forEach(function (c) { c.supports.forEach(function (s) { if (!s.visible || deja[s.cle]) return; deja[s.cle] = 1; dispo++; var st = statut(s); if (st.etat === 'vu' || st.vu) vus++; if (st.etat === 'encours') enc++; }); });
      t2.appendChild(h('tr', null, h('td', { text: m.nom }), h('td', { text: String(vus) }), h('td', { text: String(enc) }), h('td', { text: String(dispo) })));
    });
    corps.appendChild(t2);
    var lignes = [];
    M.matieres.forEach(function (m) { m.chapitres.forEach(function (c) { (c.jeux || []).forEach(function (j) { lignes.push({ m: m, c: c, j: j, r: JX[j.id] }); }); }); });
    if (lignes.length) {
      corps.appendChild(h('h3', { style: 'margin-top:26px', text: 'Jeux' }));
      corps.appendChild(h('p', { class: 'aide', text: 'Les étoiles gardent la meilleure partie. Les erreurs précises sont dans « Points fragiles », en haut de cette page.' }));
      var t3 = h('table', { class: 'stats' }, h('tr', null, h('th', { text: 'Jeu' }), h('th', { text: 'Module' }), h('th', { text: 'Parties' }), h('th', { text: 'Étoiles' }), h('th', { text: 'Dernière partie' })));
      lignes.forEach(function (x) {
        var r = x.r;
        t3.appendChild(h('tr', null, h('td', { text: x.j.titre }), h('td', { text: x.c.titre }), h('td', { text: r ? String(r.parties) : '0' }),
          h('td', null, etoilesEl(r ? r.etoiles || 0 : 0)), h('td', { text: r && r.t ? new Date(r.t).toLocaleDateString('fr-FR') : '—' })));
      });
      corps.appendChild(t3);
    }
  }

  function vueSauvegarde(corps) {
    corps.appendChild(h('h3', { text: 'Sauvegarde' }));
    corps.appendChild(h('p', { class: 'aide', text: 'Tout est enregistré dans ce navigateur, sur cette tablette. Si les données du navigateur sont effacées, tout est perdu : téléchargez une sauvegarde de temps en temps (par exemple le dimanche).' }));
    var etat = h('p', { class: 'meta', text: 'Protection du stockage : vérification…' });
    if (navigator.storage && navigator.storage.persisted) navigator.storage.persisted().then(function (ok) {
      etat.textContent = ok ? 'Le navigateur protège ces données contre l\'effacement automatique.' : 'Le navigateur peut effacer ces données s\'il manque de place : pensez aux sauvegardes.';
    }); else etat.textContent = '';
    var fichier = h('input', { type: 'file', accept: '.json,application/json', style: 'display:none' });
    fichier.addEventListener('change', function () {
      var f = fichier.files[0]; if (!f) return;
      var r = new FileReader();
      r.onload = function () {
        try {
          var d = JSON.parse(r.result);
          if (!d || d.appli !== 'ressources-5e') throw new Error();
          if (!confirm('Remplacer la progression et les réglages actuels par cette sauvegarde du ' + new Date(d.date).toLocaleDateString('fr-FR') + ' ?')) return;
          prog = d.progression || {}; QS = d.quiz || { points: {}, rates: {} }; P = normaliserParent(d.parent); JX = d.jeux || {};
          sauverProg(); sauverQS(); sauverP(); sauverJX();
          if (d.code) Store.set(CLES.code, d.code);
          toast('Sauvegarde restaurée'); rendreParent();
        } catch (e) { alert('Ce fichier n\'est pas une sauvegarde de Ressources 5e.'); }
      };
      r.readAsText(f);
      fichier.value = '';
    });
    corps.appendChild(h('div', { class: 'encart' },
      h('p', null, h('b', { text: 'Télécharger une sauvegarde' })),
      h('p', { class: 'meta', text: 'Un petit fichier .json qui contient la progression, les quiz, les jeux et vos réglages. Rangez-le sur votre ordinateur ou votre Drive.' }),
      h('button', { class: 'par-btn fort', type: 'button', text: 'Télécharger', onclick: function () {
        var d = { appli: 'ressources-5e', version: VERSION, date: new Date().toISOString(), progression: prog, quiz: QS, jeux: JX, parent: P, code: Store.get(CLES.code, null) };
        var blob = new Blob([JSON.stringify(d, null, 1)], { type: 'application/json' });
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'ressources-5e-sauvegarde-' + new Date().toISOString().slice(0, 10) + '.json';
        a.click();
        setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
      } })));
    corps.appendChild(h('div', { class: 'encart' },
      h('p', null, h('b', { text: 'Restaurer une sauvegarde' })),
      h('p', { class: 'meta', text: 'Remplace tout ce qui est enregistré sur cette tablette.' }),
      h('button', { class: 'par-btn', type: 'button', text: 'Choisir le fichier…', onclick: function () { fichier.click(); } }), fichier));
    corps.appendChild(etat);
  }

  function vueReglages(corps) {
    corps.appendChild(h('h3', { text: 'Réglages' }));
    corps.appendChild(h('div', { class: 'encart' },
      h('p', null, h('b', { text: 'Code parent' })),
      h('p', { class: 'meta', text: 'Un verrou d\'usage, pas un coffre-fort : l\'application n\'a pas de serveur.' }),
      h('button', { class: 'par-btn', type: 'button', text: 'Changer le code', onclick: function () { demanderCode('creer', function () { toast('Nouveau code enregistré'); }); } })));
    corps.appendChild(h('div', { class: 'encart' },
      h('p', null, h('b', { text: 'Remettre la progression à zéro' })),
      h('p', { class: 'meta', text: 'Efface les positions de lecture, les « vu », les statistiques des quiz et les étoiles des jeux. Vos ajouts et réglages sont conservés.' }),
      h('button', { class: 'par-btn', type: 'button', text: 'Remettre à zéro', onclick: function () {
        if (!confirm('Effacer toute la progression et les statistiques des quiz ?')) return;
        prog = {}; QS = { points: {}, rates: {} }; JX = {}; sauverProg(); sauverQS(); sauverJX(); toast('Progression effacée'); rendreParent();
      } })));
    corps.appendChild(h('p', { class: 'meta', text: 'Ressources 5e, version ' + VERSION + '. Police Lexend (licence SIL Open Font License).' }));
  }

  /* ================= Démarrage ================= */
  document.addEventListener('contextmenu', function (e) { if (!e.target.closest('input,textarea,.parent')) e.preventDefault(); });
  $('#btn-parent').addEventListener('click', ouvrirParent);
  $('#par-fermer').addEventListener('click', function () { fermerParent(); });
  $('#quiz-fermer').addEventListener('click', function () { fermerQuiz(); });
  $('#jeu-fermer').addEventListener('click', function () { fermerJeu(); });
  $('#voile').addEventListener('click', function (e) { if (e.target === $('#voile') && !$('#modale .pave')) fermerModale(); });
  brancherLecteur();
  rendreTout();
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
  }
})();
