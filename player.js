/* =========================================================================
   player.js — নিজস্ব পেশাদার ভিডিও প্লেয়ার (Deutsch für Bangla)
   ------------------------------------------------------------------------
   YouTube-এর কোনো চেহারা দেখা যায় না। কীভাবে:

   ১) পুরো ভিডিওর উপরে একটা <b>শিল্ড</b> থাকে — মাউস কখনো iframe-এ ঢোকে না,
      তাই YouTube-এর টাইটেল/চ্যানেল/শেয়ার কখনো ভেসে ওঠে না।
   ২) <b>থামালে</b> আমাদের নিজের পর্দা পুরো ঢেকে দেয় — তাই YouTube-এর
      "More videos" সাজেশন-গ্রিড দেখা যায় না।
   ৩) <b>শেষ হলে</b> আমাদের নিজের শেষ-পর্দা।

   বিজ্ঞাপন: শিল্ড থাকলে "Skip Ad"-এ ক্লিক করা যায় না। তাই —
   • বিজ্ঞাপন ধরা পড়লে (দৈর্ঘ্য মিলছে না) শিল্ড <b>নিজেই</b> সরে যায়;
   • আর যেকোনো সময় "বিজ্ঞাপন" বাটনে চেপে ১৫ সেকেন্ডের জন্য সরানো যায়।
   বিজ্ঞাপন বন্ধ করা যায় না — সেটা YouTube নিজে দেখায়।

   নির্ভরযোগ্যতা: প্লেয়ার তৈরি না হওয়া পর্যন্ত বাটন নিষ্ক্রিয় দেখায়,
   আর তার আগে চাপা ইচ্ছে জমা থাকে — চুপচাপ কাজ না করে বসে থাকে না।

   ব্যবহার:
     <div class="vplayer" data-vid="ID" data-title="…" data-sub="…"
          data-dur="5413"></div>     <!-- data-dur = সেকেন্ডে, ঐচ্ছিক -->
   ========================================================================= */
(function () {
  "use strict";

  var API_READY = false, API_FAILED = false, API_QUEUE = [], SEQ = 0;
  var CAN_USE_API = /^https?:$/.test(location.protocol);

  function loadAPI() {
    if (window.YT && window.YT.Player) { API_READY = true; return; }
    if (document.getElementById("yt-iframe-api")) return;
    var s = document.createElement("script");
    s.id = "yt-iframe-api";
    s.src = "https://www.youtube.com/iframe_api";
    s.onerror = function () { API_FAILED = true; flush(true); };
    document.head.appendChild(s);
    setTimeout(function () { if (!API_READY) { API_FAILED = true; flush(true); } }, 8000);
  }
  function flush(f) { API_QUEUE.splice(0).forEach(function (fn) { fn(f); }); }
  window.onYouTubeIframeAPIReady = function () { API_READY = true; flush(false); };
  function whenAPI(fn) {
    if (API_READY && window.YT && window.YT.Player) fn(false);
    else if (API_FAILED) fn(true);
    else { API_QUEUE.push(fn); loadAPI(); }
  }

  function fmt(sec) {
    sec = Math.max(0, Math.floor(sec || 0));
    var h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
    var mm = h ? (m < 10 ? "0" + m : "" + m) : "" + m;
    return (h ? h + ":" : "") + mm + ":" + (s < 10 ? "0" + s : s);
  }
  function esc(t) {
    return String(t == null ? "" : t)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  /* ================= একটি প্লেয়ার ================= */
  function build(box) {
    if (box.dataset.ready) return;
    box.dataset.ready = "1";

    var vid    = box.getAttribute("data-vid");
    var listId = box.getAttribute("data-list") || "";
    var title  = box.getAttribute("data-title") || "";
    var sub    = box.getAttribute("data-sub") || "";
    var start  = parseInt(box.getAttribute("data-start") || "0", 10) || 0;
    var knownDur = parseInt(box.getAttribute("data-dur") || "0", 10) || 0;

    if (!listId && vid && /[?&]list=/.test(vid)) {
      listId = vid.split(/[?&]list=/)[1].split("&")[0];
      vid = "";
    }
    if (!vid && !listId) return;

    var uid = "ytp-" + (++SEQ);

    box.innerHTML =
      '<div class="vp-stage">' +
        '<div class="vp-frame"><div id="' + uid + '"></div></div>' +

        /* মাউস/ক্লিক ঠেকানোর শিল্ড — YouTube কখনো hover টের পায় না */
        '<div class="vp-shield" role="button" tabindex="0" aria-label="চালাও বা থামাও"></div>' +

        /* উপরে আমাদের নিজের টাইটেল (YouTube-এর নয়) */
        '<div class="vp-top"><span class="vp-toptitle">' + esc(title) + "</span></div>" +

        /* মাঝখানের বড় play/pause */
        '<button class="vp-center" type="button" aria-label="চালাও বা থামাও"><i></i></button>' +

        /* থামালে আমাদের নিজের পর্দা — YouTube-এর "More videos" গ্রিড ঢেকে দেয় */
        '<div class="vp-pausecard" hidden>' +
          '<div class="vp-pausecard-in">' +
            '<div class="vp-pc-ttl">⏸ থেমে আছে</div>' +
            (title ? '<div class="vp-pc-sub">' + esc(title) + "</div>" : "") +
            '<button class="vp-btn vp-resume" type="button">▶ আবার চালাও</button>' +
          "</div>" +
        "</div>" +

        '<div class="vp-endcard" hidden>' +
          '<div class="vp-endcard-in">' +
            "<div class='vp-endttl'>✅ ভিডিও শেষ!</div>" +
            "<div class='vp-endsub'>এখন নিজে জোরে বলে অনুশীলন করো — শোনা আর বলা একসাথে হলেই শেখা পাকা হয়।</div>" +
            '<div class="vp-endbtns">' +
              '<button class="vp-btn vp-replay" type="button">↻ আবার দেখো</button>' +
              '<button class="vp-btn vp-back30" type="button">↺ শেষ ৩০ সেকেন্ড</button>' +
            "</div>" +
          "</div>" +
        "</div>" +

        '<div class="vp-poster">' +
          '<div class="vp-poster-in">' +
            '<button class="vp-bigplay" type="button" aria-label="ভিডিও চালাও"><span></span></button>' +
            (title ? '<div class="vp-ptitle">' + esc(title) + "</div>" : "") +
            (sub ? '<div class="vp-psub">' + esc(sub) + "</div>" : "") +
          "</div>" +
        "</div>" +

        '<div class="vp-spinner" hidden><i></i></div>' +

        /* ভিডিওর উপরেই ভেসে থাকা কন্ট্রোল — আসল প্লেয়ারের মতো */
        '<div class="vp-ctrl is-loading">' +
          '<div class="vp-seek" role="slider" tabindex="0" aria-label="ভিডিওর অবস্থান" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">' +
            '<div class="vp-seek-track"><div class="vp-seek-buf"></div><div class="vp-seek-fill"></div></div>' +
          "</div>" +
          '<div class="vp-btns">' +
            '<button class="vp-ico vp-play" type="button" aria-label="চালাও বা থামাও" disabled>▶</button>' +
            '<button class="vp-ico vp-rew"  type="button" aria-label="১০ সেকেন্ড পিছনে" title="১০ সেকেন্ড পিছনে (←)" disabled>⟲&#8202;10</button>' +
            '<button class="vp-ico vp-ffw"  type="button" aria-label="১০ সেকেন্ড সামনে" title="১০ সেকেন্ড সামনে (→)" disabled>10&#8202;⟳</button>' +
            '<span class="vp-time"><span class="vp-cur">0:00</span> <i>/</i> <span class="vp-dur">0:00</span></span>' +
            '<span class="vp-gap"></span>' +
            '<button class="vp-ico vp-rate" type="button" aria-label="বলার গতি" title="বলার গতি" disabled>1x</button>' +
            '<button class="vp-ico vp-cc"   type="button" aria-label="সাবটাইটেল" title="সাবটাইটেল (c)" disabled>CC</button>' +
            '<button class="vp-ico vp-mute" type="button" aria-label="শব্দ" title="শব্দ (m)" disabled>🔊</button>' +
            '<button class="vp-ico vp-ad"   type="button" aria-label="বিজ্ঞাপন এড়াও" title="বিজ্ঞাপন চলছে? চাপো — Skip বাটনে ক্লিক করতে পারবে">বিজ্ঞাপন</button>' +
            '<button class="vp-ico vp-full" type="button" aria-label="ফুল স্ক্রিন" title="ফুল স্ক্রিন (f)">⛶</button>' +
          "</div>" +
        "</div>" +

        '<div class="vp-toast" hidden></div>' +
      "</div>" +
      '<div class="vp-msg" hidden></div>';

    var stage  = box.querySelector(".vp-stage");
    var shield = box.querySelector(".vp-shield");
    var poster = box.querySelector(".vp-poster");
    var center = box.querySelector(".vp-center");
    var pausec = box.querySelector(".vp-pausecard");
    var endc   = box.querySelector(".vp-endcard");
    var spin   = box.querySelector(".vp-spinner");
    var ctrl   = box.querySelector(".vp-ctrl");
    var toast  = box.querySelector(".vp-toast");
    var msg    = box.querySelector(".vp-msg");
    var bPlay  = box.querySelector(".vp-play");
    var bRew   = box.querySelector(".vp-rew");
    var bFfw   = box.querySelector(".vp-ffw");
    var bRate  = box.querySelector(".vp-rate");
    var bCC    = box.querySelector(".vp-cc");
    var bMute  = box.querySelector(".vp-mute");
    var bAd    = box.querySelector(".vp-ad");
    var bFull  = box.querySelector(".vp-full");
    var seek   = box.querySelector(".vp-seek");
    var fill   = box.querySelector(".vp-seek-fill");
    var buf    = box.querySelector(".vp-seek-buf");
    var elCur  = box.querySelector(".vp-cur");
    var elDur  = box.querySelector(".vp-dur");

    var yt = null, timer = null, hideT = null, adT = null;
    var duration = 0, dragging = false;
    var readyOK = false, creating = false;
    var wantPlay = false, wantCC = false, wantSeek = null;
    var RATES = [0.5, 0.75, 1, 1.25], rateIx = 2;
    var ccOn = false;

    var GATED = [bPlay, bRew, bFfw, bRate, bCC, bMute];
    function gate(on) {
      GATED.forEach(function (b) { if (b) b.disabled = !on; });
      ctrl.classList.toggle("is-loading", !on);
    }
    function say(t, ms) {
      if (!t) { toast.hidden = true; return; }
      toast.hidden = false; toast.textContent = t;
      clearTimeout(say._t);
      say._t = setTimeout(function () { toast.hidden = true; }, ms || 2600);
    }

    /* কন্ট্রোল দেখাও, তারপর নিজে থেকে লুকাও (আসল প্লেয়ারের মতো) */
    function poke() {
      box.classList.add("vp-active");
      clearTimeout(hideT);
      hideT = setTimeout(function () {
        if (readyOK && yt && yt.getPlayerState && yt.getPlayerState() === YT.PlayerState.PLAYING) {
          box.classList.remove("vp-active");
        }
      }, 2800);
    }

    /* ---------- fallback: সাধারণ embed ---------- */
    function plainEmbed(reason) {
      if (timer) { clearInterval(timer); timer = null; }
      var src = "https://www.youtube-nocookie.com/embed/" +
        (listId ? "videoseries?list=" + listId + "&" : encodeURIComponent(vid) + "?") +
        "rel=0&modestbranding=1&iv_load_policy=3&playsinline=1&autoplay=1" +
        (start ? "&start=" + start : "");
      box.querySelector(".vp-frame").innerHTML =
        '<iframe src="' + src + '" title="' + esc(title || "ভিডিও") + '" loading="lazy" ' +
        'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' +
        'allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>';
      box.classList.add("vp-plain");
      poster.classList.add("gone");
      spin.hidden = true; pausec.hidden = true; endc.hidden = true;
      msg.hidden = false; msg.innerHTML = reason;
    }

    var FILE_MSG =
      "ℹ️ <b>নিজের কন্ট্রোল (গতি, ⟲১০, CC) এখন কাজ করছে না</b> — ফাইলটা সরাসরি কম্পিউটার থেকে " +
      "খোলা হয়েছে (<code>file://</code>), আর YouTube-এর প্লেয়ার-API এভাবে চলে না। " +
      "ভিডিও ও YouTube-এর নিজের বাটন ঠিকই কাজ করবে।<br><b>পুরো প্লেয়ার পেতে:</b> " +
      "<code>python -m http.server 8000</code> চালিয়ে <code>http://localhost:8000</code> খোলো, " +
      "অথবা অনলাইন সাইটটা ব্যবহার করো।";
    var API_MSG =
      "ℹ️ YouTube-এর প্লেয়ার-API লোড হয়নি, তাই সাধারণ প্লেয়ার দেখানো হচ্ছে। ভিডিও ঠিকই চলবে।";

    /* ---------- তৈরি করো ---------- */
    function create() {
      if (creating || readyOK) return;
      creating = true;
      if (!CAN_USE_API) { plainEmbed(FILE_MSG); return; }

      spin.hidden = false;
      poster.classList.add("gone");
      poke();
      say("প্লেয়ার তৈরি হচ্ছে…", 2000);

      whenAPI(function (failed) {
        if (failed) { plainEmbed(API_MSG); return; }
        var pv = {
          controls: 0, disablekb: 1, fs: 0, modestbranding: 1,
          rel: 0, iv_load_policy: 3, playsinline: 1, cc_load_policy: 0,
          start: start, autoplay: 1, origin: location.origin
        };
        if (listId) { pv.list = listId; pv.listType = "playlist"; }

        try {
          yt = new YT.Player(uid, {
            videoId: vid || undefined,
            playerVars: pv,
            events: {
              onReady: function () {
                readyOK = true;
                duration = yt.getDuration() || 0;
                elDur.textContent = fmt(duration);
                spin.hidden = true;
                gate(true);
                applyRate();
                applyCC(false);
                if (wantSeek != null) { try { yt.seekTo(wantSeek, true); } catch (e) {} wantSeek = null; }
                if (wantCC) applyCC(true);
                if (wantPlay) { try { yt.playVideo(); } catch (e) {} }
                wantPlay = false; wantCC = false;
                say(null);
                tick();
                timer = setInterval(tick, 250);
              },
              onError: function () { plainEmbed(API_MSG); },
              onStateChange: function (e) {
                var S = YT.PlayerState;
                spin.hidden = e.data !== S.BUFFERING;
                if (e.data === S.PLAYING) {
                  box.classList.remove("is-paused");
                  pausec.hidden = true; endc.hidden = true;
                  bPlay.textContent = "❚❚"; center.classList.remove("show");
                  if (!duration) { duration = yt.getDuration() || 0; if (duration) elDur.textContent = fmt(duration); }
                  poke();
                } else if (e.data === S.PAUSED) {
                  box.classList.add("is-paused");
                  bPlay.textContent = "▶";
                  /* থামলে আমাদের পর্দা — YouTube-এর সাজেশন গ্রিড ঢেকে দাও */
                  if (!adMode) pausec.hidden = false;
                  box.classList.add("vp-active");
                  clearTimeout(hideT);
                } else if (e.data === S.ENDED) {
                  box.classList.remove("is-paused");
                  bPlay.textContent = "▶";
                  pausec.hidden = true;
                  endc.hidden = false;
                  box.classList.add("vp-active");
                }
              }
            }
          });
        } catch (err) { plainEmbed(API_MSG); return; }

        setTimeout(function () { if (!readyOK) plainEmbed(API_MSG); }, 9000);
      });
    }

    /* ---------- বিজ্ঞাপন: শিল্ড সরানো ---------- */
    var adMode = false;
    function setAdMode(on, secs) {
      adMode = !!on;
      box.classList.toggle("vp-adopen", adMode);
      clearTimeout(adT);
      if (adMode) {
        pausec.hidden = true;                  /* বিজ্ঞাপনের সময় আমাদের পর্দা সরাও */
        say("বিজ্ঞাপন চলছে — এখন YouTube-এর “Skip Ad” বাটনে চাপতে পারবে।", (secs || 15) * 1000);
        adT = setTimeout(function () { setAdMode(false); }, (secs || 15) * 1000);
      } else {
        say(null);
      }
    }
    /* দৈর্ঘ্য না মিললে ধরে নাও বিজ্ঞাপন চলছে */
    function adCheck() {
      if (!readyOK || !knownDur || knownDur < 120) return;
      var d = 0;
      try { d = yt.getDuration() || 0; } catch (e) { return; }
      if (d && Math.abs(d - knownDur) > 30) { if (!adMode) setAdMode(true, 20); }
      else if (adMode && Math.abs(d - knownDur) <= 30) setAdMode(false);
    }

    function tick() {
      if (!yt || !yt.getCurrentTime) return;
      if (!duration) { duration = yt.getDuration() || 0; if (duration) elDur.textContent = fmt(duration); }
      var t = yt.getCurrentTime() || 0;
      if (!dragging) {
        elCur.textContent = fmt(t);
        var pct = duration ? (t / duration) * 100 : 0;
        fill.style.width = pct + "%";
        seek.setAttribute("aria-valuenow", Math.round(pct));
      }
      if (yt.getVideoLoadedFraction) buf.style.width = (yt.getVideoLoadedFraction() * 100) + "%";
      adCheck();
    }

    function toggle() {
      poke();
      if (!readyOK) { wantPlay = true; create(); return; }
      var st = yt.getPlayerState();
      if (st === YT.PlayerState.PLAYING) yt.pauseVideo(); else yt.playVideo();
    }
    function nudge(sec) {
      poke();
      if (!readyOK) { wantPlay = true; create(); return; }
      pausec.hidden = true; endc.hidden = true;
      try { yt.seekTo(Math.max(0, (yt.getCurrentTime() || 0) + sec), true); yt.playVideo(); } catch (e) {}
      say((sec < 0 ? "⟲ " : "⟳ ") + Math.abs(sec) + " সেকেন্ড", 900);
    }
    function applyRate() {
      if (yt && yt.setPlaybackRate) { try { yt.setPlaybackRate(RATES[rateIx]); } catch (e) {} }
      bRate.textContent = RATES[rateIx] + "x";
    }

    /* ---------- সাবটাইটেল (ভিডিওতে যা আছে তা থেকে বাছে) ---------- */
    function tracks() {
      var out = [];
      ["captions", "cc"].forEach(function (m) {
        try { var t = yt.getOption(m, "tracklist"); if (t && t.length) out = out.concat(t); } catch (e) {}
      });
      return out;
    }
    function paintCC(avail) {
      bCC.classList.toggle("is-on", ccOn);
      bCC.setAttribute("aria-pressed", ccOn ? "true" : "false");
      bCC.classList.toggle("is-none", avail === false);
      bCC.title = avail === false ? "এই ভিডিওতে সাবটাইটেল নেই"
                : (ccOn ? "সাবটাইটেল বন্ধ করো (c)" : "সাবটাইটেল চালু করো (c)");
    }
    function applyCC(on) {
      if (!yt) return;
      ccOn = !!on;
      if (!ccOn) {
        ["captions", "cc"].forEach(function (m) {
          try { yt.setOption(m, "track", {}); } catch (e) {}
          try { yt.unloadModule(m); } catch (e) {}
        });
        paintCC(); return;
      }
      ["captions", "cc"].forEach(function (m) { try { yt.loadModule(m); } catch (e) {} });
      var n = 0;
      (function pick() {
        n++;
        var tl = tracks();
        if (tl.length) {
          var de = tl.filter(function (t) { return /^de/i.test(t.languageCode || ""); })[0];
          var ch = de || tl[0];
          ["captions", "cc"].forEach(function (m) { try { yt.setOption(m, "track", ch); } catch (e) {} });
          paintCC(true);
          say("সাবটাইটেল চালু (" + (ch.languageCode || "?") + ")", 1600);
        } else if (n < 8) setTimeout(pick, 400);
        else { ccOn = false; paintCC(false); say("এই ভিডিওতে সাবটাইটেল পাওয়া যায়নি।", 3200); }
      })();
    }

    /* ---------- ইভেন্ট ---------- */
    poster.addEventListener("click", function () { wantPlay = true; create(); });
    shield.addEventListener("click", toggle);
    center.addEventListener("click", toggle);
    bPlay.addEventListener("click", toggle);
    bRew.addEventListener("click", function () { nudge(-10); });
    bFfw.addEventListener("click", function () { nudge(10); });
    bRate.addEventListener("click", function () {
      rateIx = (rateIx + 1) % RATES.length; applyRate();
      say("গতি " + RATES[rateIx] + "x", 1200); poke();
    });
    bCC.addEventListener("click", function () {
      poke();
      if (!readyOK) { wantCC = true; create(); return; }
      applyCC(!ccOn);
    });
    bMute.addEventListener("click", function () {
      poke();
      if (!readyOK || !yt.isMuted) return;
      try {
        if (yt.isMuted()) { yt.unMute(); bMute.textContent = "🔊"; }
        else { yt.mute(); bMute.textContent = "🔇"; }
      } catch (e) {}
    });
    bAd.addEventListener("click", function () { setAdMode(!adMode, 15); poke(); });
    bFull.addEventListener("click", function () {
      if (document.fullscreenElement) document.exitFullscreen();
      else if (box.requestFullscreen) box.requestFullscreen();
      poke();
    });
    box.querySelector(".vp-resume").addEventListener("click", function () {
      pausec.hidden = true;
      if (readyOK) { try { yt.playVideo(); } catch (e) {} } else { wantPlay = true; create(); }
    });
    box.querySelector(".vp-replay").addEventListener("click", function () {
      endc.hidden = true;
      if (readyOK) { try { yt.seekTo(0, true); yt.playVideo(); } catch (e) {} }
    });
    box.querySelector(".vp-back30").addEventListener("click", function () {
      endc.hidden = true;
      if (readyOK) { try { yt.seekTo(Math.max(0, (duration || 0) - 30), true); yt.playVideo(); } catch (e) {} }
    });

    stage.addEventListener("mousemove", poke);
    stage.addEventListener("mouseleave", function () {
      if (readyOK && yt && yt.getPlayerState && yt.getPlayerState() === YT.PlayerState.PLAYING) {
        box.classList.remove("vp-active");
      }
    });

    /* কীবোর্ড — শিল্ডে ফোকাস থাকলে */
    shield.addEventListener("keydown", function (e) {
      var k = e.key.toLowerCase();
      if (k === " " || k === "k" || k === "enter") { e.preventDefault(); toggle(); }
      else if (e.key === "ArrowLeft")  { e.preventDefault(); nudge(-10); }
      else if (e.key === "ArrowRight") { e.preventDefault(); nudge(10); }
      else if (k === "f") { e.preventDefault(); bFull.click(); }
      else if (k === "c") { e.preventDefault(); bCC.click(); }
      else if (k === "m") { e.preventDefault(); bMute.click(); }
    });

    /* ---------- সিক বার ---------- */
    function pctFromEvent(e) {
      var r = seek.getBoundingClientRect();
      var cx = (e.touches && e.touches[0]) ? e.touches[0].clientX
             : (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientX
             : e.clientX;
      var pct = Math.min(1, Math.max(0, (cx - r.left) / r.width));
      fill.style.width = pct * 100 + "%";
      if (duration) elCur.textContent = fmt(pct * duration);
      return pct;
    }
    function startDrag(e) {
      if (!readyOK) return;
      dragging = true; poke(); pctFromEvent(e);
      document.addEventListener("mousemove", onDrag);
      document.addEventListener("mouseup", endDrag);
      document.addEventListener("touchmove", onDrag, { passive: false });
      document.addEventListener("touchend", endDrag);
    }
    function onDrag(e) { if (dragging) { e.preventDefault(); pctFromEvent(e); } }
    function endDrag(e) {
      if (!dragging) return;
      var pct = pctFromEvent(e);
      dragging = false;
      document.removeEventListener("mousemove", onDrag);
      document.removeEventListener("mouseup", endDrag);
      document.removeEventListener("touchmove", onDrag);
      document.removeEventListener("touchend", endDrag);
      if (readyOK && duration) { pausec.hidden = true; endc.hidden = true; try { yt.seekTo(pct * duration, true); } catch (e) {} }
    }
    seek.addEventListener("mousedown", startDrag);
    seek.addEventListener("touchstart", startDrag, { passive: true });
    seek.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft")  { e.preventDefault(); nudge(-10); }
      if (e.key === "ArrowRight") { e.preventDefault(); nudge(10); }
    });

    box.vpSeekTo = function (sec) {
      if (!readyOK) { wantSeek = sec; wantPlay = true; create(); return; }
      pausec.hidden = true; endc.hidden = true;
      try { yt.seekTo(sec, true); yt.playVideo(); } catch (e) {}
      stage.scrollIntoView({ behavior: "smooth", block: "center" });
    };
  }

  document.addEventListener("click", function (e) {
    var j = e.target.closest(".vp-jump");
    if (!j) return;
    var target = document.getElementById(j.getAttribute("data-player"));
    var t = parseInt(j.getAttribute("data-t") || "0", 10) || 0;
    if (target) {
      if (!target.dataset.ready) build(target);
      if (target.vpSeekTo) target.vpSeekTo(t);
    }
  });

  function init() {
    Array.prototype.slice.call(document.querySelectorAll(".vplayer:not([data-lazy])")).forEach(build);
  }
  window.VPlayer = { init: init, build: build };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
