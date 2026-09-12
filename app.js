/* Ressources 5e — médiathèque fermée par matière.
   Aucun lien sortant côté élève. Lecture dans l'application, reprise, fermeture automatique en fin de support.
   Toutes les données (progression, quiz, réglages parent) restent dans le navigateur de l'appareil. */
(function () {
  'use strict';

  var VERSION = '1.0';
  var ORDRE = ['francais', 'maths', 'anglais', 'espagnol', 'histoire', 'geographie', 'emc', 'svt', 'physique', 'techno', 'arts', 'sport', 'hygiene'];
  var ETIQ = {
    decouvrir: { t: 'Pour découvrir', i: '🔎' },
    consolider: { t: 'Pour consolider', i: '🔁' },
    plusloin: { t: 'Pour aller plus loin', i: '🚀' }
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

  var CLES = { prog: 'r5e.progression', quiz: 'r5e.quiz', parent: 'r5e.parent', code: 'r5e.code', onglet: 'r5e.onglet' };
  var prog = Store.get(CLES.prog, {});
  var QS = Store.get(CLES.quiz, { points: {}, rates: {} });
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
        .map(function (c) { return { id: c.id, titre: c.titre, resume: '', supports: [], savaisTu: [], quiz: [], missions: [], ajoutParent: true }; })
        .concat((m.chapitres || []).map(function (c) {
          return {
            id: c.id, titre: c.titre, resume: c.resume || '', savaisTu: c.savaisTu || [], missions: c.missions || [],
            quiz: c.quiz || [], supports: (c.supports || []).map(function (s) { return Object.assign({}, s); })
          };
        }));
      P.ajouts.filter(function (a) { return a.matiere === m.id; }).forEach(function (a) {
        var ch = chaps.filter(function (c) { return c.id === a.chapitre; })[0];
        if (ch) ch.supports.push(Object.assign({}, a, { ajoutParent: true }));
      });
      var mat = { id: m.id, nom: m.nom, couleur: m.couleur || '#5B6778', icone: m.icone || '📁', chapitres: chaps };
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
    M.matieres = mats; M.index = index;
  }
  function matiereParId(id) { return M.matieres.filter(function (m) { return m.id === id; })[0]; }
  function chapVisible(c) {
    return c.supports.some(function (s) { return s.visible; }) || c.missions.length || c.quiz.length || c.savaisTu.length;
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
    page.appendChild(h('div', { class: 'bandeau' },
      h('span', { class: 'grosico', 'aria-hidden': 'true', text: m.icone }),
      h('div', null, h('h2', { text: m.nom }), h('p', { text: nb ? (nb === 1 ? '1 chapitre' : nb + ' chapitres') : 'Bientôt' }))));
    if (!nb) {
      page.appendChild(h('p', { class: 'vide', text: 'Les vidéos de ' + m.nom + ' arriveront avec le premier chapitre.' }));
      return;
    }
    chaps.forEach(function (c) { page.appendChild(rendreChapitre(m, c)); });
  }

  function rendreChapitre(m, c) {
    var sec = h('section', { class: 'chapitre' });
    sec.appendChild(h('header', { class: 'chap-tete' }, h('h3', { text: c.titre }), c.resume ? h('p', { text: c.resume }) : null));
    if (c.savaisTu.length) sec.appendChild(rendreSavais(c.savaisTu));
    var vis = c.supports.filter(function (s) { return s.visible; });
    if (vis.length) {
      var g = h('div', { class: 'grille' });
      vis.forEach(function (s) { g.appendChild(rendreCarte(s)); });
      sec.appendChild(g);
    }
    c.missions.forEach(function (mi) {
      sec.appendChild(h('div', { class: 'mission' }, h('h4', { text: mi.titre }),
        mi.etapes ? h('ol', null, mi.etapes.map(function (e) { return h('li', { text: e }); })) : h('p', { text: mi.texte || '' })));
    });
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
    var ouvert = !$('#lecteur').hidden || !$('#quiz').hidden || !$('#parent').hidden || !$('#voile').hidden;
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
      if (!q.fixe && opts.length > 2) opts = melanger(opts);
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
    corps.appendChild(h('h3', { text: 'Points fragiles aux quiz' }));
    corps.appendChild(h('p', { class: 'aide', text: 'Invisible pour l\'élève. Classés du plus fragile au plus solide.' }));
    var pts = Object.keys(QS.points).map(function (k) { return QS.points[k]; }).filter(function (p) { return p.essais; });
    pts.sort(function (a, b) { return (b.erreurs / b.essais) - (a.erreurs / a.essais) || b.erreurs - a.erreurs || b.essais - a.essais; });
    if (!pts.length) corps.appendChild(h('p', { class: 'aide', text: 'Aucun quiz fait pour l\'instant.' }));
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
          prog = d.progression || {}; QS = d.quiz || { points: {}, rates: {} }; P = normaliserParent(d.parent);
          sauverProg(); sauverQS(); sauverP();
          if (d.code) Store.set(CLES.code, d.code);
          toast('Sauvegarde restaurée'); rendreParent();
        } catch (e) { alert('Ce fichier n\'est pas une sauvegarde de Ressources 5e.'); }
      };
      r.readAsText(f);
      fichier.value = '';
    });
    corps.appendChild(h('div', { class: 'encart' },
      h('p', null, h('b', { text: 'Télécharger une sauvegarde' })),
      h('p', { class: 'meta', text: 'Un petit fichier .json qui contient la progression, les quiz et vos réglages. Rangez-le sur votre ordinateur ou votre Drive.' }),
      h('button', { class: 'par-btn fort', type: 'button', text: 'Télécharger', onclick: function () {
        var d = { appli: 'ressources-5e', version: VERSION, date: new Date().toISOString(), progression: prog, quiz: QS, parent: P, code: Store.get(CLES.code, null) };
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
      h('p', { class: 'meta', text: 'Efface les positions de lecture, les « vu » et les statistiques des quiz. Vos ajouts et réglages sont conservés.' }),
      h('button', { class: 'par-btn', type: 'button', text: 'Remettre à zéro', onclick: function () {
        if (!confirm('Effacer toute la progression et les statistiques des quiz ?')) return;
        prog = {}; QS = { points: {}, rates: {} }; sauverProg(); sauverQS(); toast('Progression effacée'); rendreParent();
      } })));
    corps.appendChild(h('p', { class: 'meta', text: 'Ressources 5e, version ' + VERSION + '. Police Lexend (licence SIL Open Font License).' }));
  }

  /* ================= Démarrage ================= */
  document.addEventListener('contextmenu', function (e) { if (!e.target.closest('input,textarea,.parent')) e.preventDefault(); });
  $('#btn-parent').addEventListener('click', ouvrirParent);
  $('#par-fermer').addEventListener('click', function () { fermerParent(); });
  $('#quiz-fermer').addEventListener('click', function () { fermerQuiz(); });
  $('#voile').addEventListener('click', function (e) { if (e.target === $('#voile') && !$('#modale .pave')) fermerModale(); });
  brancherLecteur();
  rendreTout();
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
  }
})();
