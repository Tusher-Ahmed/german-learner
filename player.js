/* =========================================================================
   player.js — সহজ ও নির্ভরযোগ্য ভিডিও প্লেয়ার (Deutsch für Bangla)
   ------------------------------------------------------------------------
   আগের সংস্করণ বেশি জটিল হয়ে গিয়েছিল, আর তাতে তিনটে আসল সমস্যা হয়েছিল:

   ১) play/pause কাজ করত না — থামালে "pause পর্দা" (z-index 7) কন্ট্রোল
      বারের (z-index 6) উপরে চলে আসত, তাই বাটনে ক্লিকই পৌঁছাত না।
   ২) "Skip Ad" চাপা যেত না — কন্ট্রোল বার ভিডিওর <b>উপরে</b> ভাসত, আর
      Skip Ad বাটন থাকে ঠিক সেখানেই (নিচে-ডানে)।
   ৩) পুরো ভিডিওর উপরে একটা শিল্ড ছিল, যা সব ক্লিক আটকাত।

   এখনকার সমাধান — সরল রাখা:
   • কন্ট্রোল বার ভিডিওর <b>নিচে</b>, সবসময় দেখা যায়। ভিডিওর উপরে কিছুই
     ভাসে না, তাই Skip Ad সবসময় চাপা যায়।
   • কোনো শিল্ড নেই — ভিডিওতে ক্লিক করলে YouTube নিজেই play/pause করে।
   • উপরের টাইটেল ঢাকার পর্দাটা <b>pointer-events:none</b>, তাই ক্লিক
     এর ভেতর দিয়ে চলে যায় — কিছুই আটকায় না।
   • প্লেয়ার তৈরি না হওয়া পর্যন্ত বাটন নিষ্ক্রিয় দেখায়; আগে চাপলে
     ইচ্ছেটা জমা থাকে আর তৈরি হলেই চলে।
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

    if (!listId && vid && /[?&]list=/.test(vid)) {
      listId = vid.split(/[?&]list=/)[1].split("&")[0];
      vid = "";
    }
    if (!vid && !listId) return;

    var uid = "ytp-" + (++SEQ);   /* মোড বদলালে নতুন id লাগে */

    box.innerHTML =
      '<div class="vp-stage">' +
        '<div class="vp-frame"><div id="' + uid + '"></div></div>' +
        /* উপরের টাইটেল ঢাকার পর্দা — pointer-events:none, তাই কিছুই আটকায় না।
           ভিডিওর নিচের অংশ পুরো খোলা, তাই "Skip Ad" সবসময় চাপা যায়। */
        '<div class="vp-topmask" aria-hidden="true"></div>' +
        /* থামলে YouTube উপরে টাইটেল, নিচে Share / "More videos" / লোগো দেখায়।
           সেগুলো ঢাকতে আমাদের নিজের পর্দা — শুধু <b>থামা অবস্থায়</b>।
           বিজ্ঞাপন চলে "playing" অবস্থায়, থামা অবস্থায় নয় — তাই এতে
           "Skip Ad" কখনো ঢাকা পড়ে না। */
        '<div class="vp-pause"><button class="vp-presume" type="button" aria-label="আবার চালাও"><span></span></button>' +
        (title ? '<div class="vp-ptxt">' + esc(title) + "</div>" : "") + "</div>" +
        '<div class="vp-poster">' +
          '<div class="vp-poster-in">' +
            '<button class="vp-bigplay" type="button" aria-label="ভিডিও চালাও"><span></span></button>' +
            (title ? '<div class="vp-ptitle">' + esc(title) + "</div>" : "") +
            (sub ? '<div class="vp-psub">' + esc(sub) + "</div>" : "") +
          "</div>" +
        "</div>" +
        '<div class="vp-endcard" hidden>' +
          '<div class="vp-endcard-in">' +
            "<div class='vp-endttl'>✅ ভিডিও শেষ!</div>" +
            "<div class='vp-endsub'>এখন নিজে জোরে বলে অনুশীলন করো।</div>" +
            '<div class="vp-endbtns">' +
              '<button class="vp-btn vp-replay" type="button">↻ আবার দেখো</button>' +
            "</div>" +
          "</div>" +
        "</div>" +
        '<div class="vp-spinner" hidden><i></i></div>' +
      "</div>" +

      /* কন্ট্রোল বার — ভিডিওর নিচে, সবসময় দেখা যায় */
      '<div class="vp-ctrl is-loading">' +
        '<div class="vp-seek" role="slider" tabindex="0" aria-label="ভিডিওর অবস্থান" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">' +
          '<div class="vp-seek-track"><div class="vp-seek-buf"></div><div class="vp-seek-fill"></div></div>' +
        "</div>" +
        '<div class="vp-btns">' +
          '<button class="vp-ico vp-play" type="button" aria-label="চালাও বা থামাও" disabled>▶</button>' +
          '<button class="vp-ico vp-rew"  type="button" title="১০ সেকেন্ড পিছনে" disabled>⟲&#8202;10</button>' +
          '<button class="vp-ico vp-ffw"  type="button" title="১০ সেকেন্ড সামনে" disabled>10&#8202;⟳</button>' +
          '<span class="vp-time"><span class="vp-cur">0:00</span> <i>/</i> <span class="vp-dur">0:00</span></span>' +
          '<span class="vp-gap"></span>' +
          '<button class="vp-ico vp-rate" type="button" title="বলার গতি" disabled>1x</button>' +
          '<button class="vp-ico vp-cc"   type="button" title="সাবটাইটেল" disabled>CC</button>' +
          '<button class="vp-ico vp-mute" type="button" title="শব্দ" disabled>🔊</button>' +
          '<button class="vp-ico vp-qual" type="button" title="ভিডিওর মান (quality) ও YouTube সেটিংস">⚙&#8202;HD</button>' +
          '<button class="vp-ico vp-full" type="button" title="ফুল স্ক্রিন">⛶</button>' +
        "</div>" +
        '<div class="vp-hint">প্লেয়ার তৈরি হচ্ছে…</div>' +
      "</div>" +
      '<div class="vp-msg" hidden></div>';

    var stage  = box.querySelector(".vp-stage");
    var poster = box.querySelector(".vp-poster");
    var endc   = box.querySelector(".vp-endcard");
    var spin   = box.querySelector(".vp-spinner");
    var ctrl   = box.querySelector(".vp-ctrl");
    var hint   = box.querySelector(".vp-hint");
    var msg    = box.querySelector(".vp-msg");
    var bPlay  = box.querySelector(".vp-play");
    var bRew   = box.querySelector(".vp-rew");
    var bFfw   = box.querySelector(".vp-ffw");
    var bRate  = box.querySelector(".vp-rate");
    var bCC    = box.querySelector(".vp-cc");
    var bMute  = box.querySelector(".vp-mute");
    var bQual  = box.querySelector(".vp-qual");
    var bFull  = box.querySelector(".vp-full");
    var seek   = box.querySelector(".vp-seek");
    var fill   = box.querySelector(".vp-seek-fill");
    var buf    = box.querySelector(".vp-seek-buf");
    var elCur  = box.querySelector(".vp-cur");
    var elDur  = box.querySelector(".vp-dur");

    var yt = null, timer = null, duration = 0, dragging = false;
    var readyOK = false, creating = false;
    var wantPlay = false, wantCC = false, wantSeek = null;
    var RATES = [0.5, 0.75, 1, 1.25], rateIx = 2;
    var ccOn = false;
    /* nativeMode = YouTube-এর নিজের কন্ট্রোল (⚙ গিয়ার) দেখানো হচ্ছে।
       ভিডিওর মান (quality) বদলানোর একমাত্র উপায় ওই গিয়ার — YouTube-এর
       setPlaybackQuality() API বহু বছর ধরে কাজ করে না, তাই নিজের
       quality মেনু বানানো সম্ভব নয়। */
    var nativeMode = false;

    var GATED = [bPlay, bRew, bFfw, bRate, bCC, bMute];
    function gate(on) {
      GATED.forEach(function (b) { if (b) b.disabled = !on; });
      ctrl.classList.toggle("is-loading", !on);
      if (on) hint.hidden = true;
    }
    function setHint(t) {
      if (t) { hint.hidden = false; hint.innerHTML = t; }
      else hint.hidden = true;
    }

    /* ---------- fallback: সাধারণ embed (file:// বা API না এলে) ---------- */
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
      spin.hidden = true; endc.hidden = true;
      msg.hidden = false; msg.innerHTML = reason;
    }

    var FILE_MSG =
      "ℹ️ <b>নিজের কন্ট্রোল (গতি, ⟲১০, CC) এখন কাজ করছে না</b> — ফাইলটা সরাসরি কম্পিউটার " +
      "থেকে খোলা হয়েছে (<code>file://</code>), আর YouTube-এর প্লেয়ার-API এভাবে চলে না। " +
      "ভিডিও ও YouTube-এর নিজের বাটন ঠিকই কাজ করবে।<br><b>পুরো প্লেয়ার পেতে</b> অনলাইন " +
      "সাইটটা ব্যবহার করো, অথবা <code>python -m http.server 8000</code> চালিয়ে " +
      "<code>http://localhost:8000</code> খোলো।";
    var API_MSG =
      "ℹ️ YouTube-এর প্লেয়ার-API লোড হয়নি, তাই YouTube-এর নিজের প্লেয়ার দেখানো হচ্ছে। " +
      "ভিডিও ও সব বাটন ঠিকই কাজ করবে।";

    /* ---------- প্লেয়ার তৈরি ---------- */
    function create() {
      if (creating || readyOK) return;
      creating = true;
      if (!CAN_USE_API) { plainEmbed(FILE_MSG); return; }

      spin.hidden = false;
      poster.classList.add("gone");
      setHint("প্লেয়ার তৈরি হচ্ছে… এক মুহূর্ত।");

      whenAPI(function (failed) {
        if (failed) { plainEmbed(API_MSG); return; }
        var pv = {
          controls: nativeMode ? 1 : 0, disablekb: nativeMode ? 0 : 1,
          fs: nativeMode ? 1 : 0, modestbranding: 1,
          rel: 0, iv_load_policy: 3, playsinline: 1, cc_load_policy: 0,
          autoplay: 1, origin: location.origin
        };
        if (start) pv.start = start;
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
                tick();
                timer = setInterval(tick, 300);
              },
              onError: function () { plainEmbed(API_MSG); },
              onStateChange: function (e) {
                var S = YT.PlayerState;
                spin.hidden = e.data !== S.BUFFERING;
                if (e.data === S.PLAYING) {
                  box.classList.remove("is-paused");
                  bPlay.textContent = "❚❚";
                  bPlay.setAttribute("aria-label", "থামাও");
                  endc.hidden = true;
                  if (!duration) {
                    duration = yt.getDuration() || 0;
                    if (duration) elDur.textContent = fmt(duration);
                  }
                } else if (e.data === S.PAUSED) {
                  box.classList.add("is-paused");
                  bPlay.textContent = "▶";
                  bPlay.setAttribute("aria-label", "চালাও");
                } else if (e.data === S.ENDED) {
                  box.classList.remove("is-paused");
                  bPlay.textContent = "▶";
                  endc.hidden = false;
                }
              }
            }
          });
        } catch (err) { plainEmbed(API_MSG); return; }

        setTimeout(function () { if (!readyOK) plainEmbed(API_MSG); }, 9000);
      });
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
    }

    function toggle() {
      if (!readyOK) { wantPlay = true; create(); return; }
      var st = yt.getPlayerState();
      if (st === YT.PlayerState.PLAYING) yt.pauseVideo(); else yt.playVideo();
    }
    function nudge(sec) {
      if (!readyOK) { wantPlay = true; create(); return; }
      endc.hidden = true;
      try { yt.seekTo(Math.max(0, (yt.getCurrentTime() || 0) + sec), true); yt.playVideo(); } catch (e) {}
    }
    function applyRate() {
      if (yt && yt.setPlaybackRate) { try { yt.setPlaybackRate(RATES[rateIx]); } catch (e) {} }
      bRate.textContent = RATES[rateIx] + "x";
    }

    /* ---------- সাবটাইটেল — ভিডিওতে যা আছে তা থেকে বাছে ---------- */
    function tracks() {
      var out = [];
      ["captions", "cc"].forEach(function (m) {
        try { var t = yt.getOption(m, "tracklist"); if (t && t.length) out = out.concat(t); } catch (e) {}
      });
      return out;
    }
    function paintCC(avail) {
      bCC.classList.toggle("is-on", ccOn);
      bCC.classList.toggle("is-none", avail === false);
      bCC.title = avail === false ? "এই ভিডিওতে সাবটাইটেল নেই"
                : (ccOn ? "সাবটাইটেল বন্ধ করো" : "সাবটাইটেল চালু করো");
    }
    function applyCC(on) {
      if (!yt) return;
      ccOn = !!on;
      if (!ccOn) {
        ["captions", "cc"].forEach(function (m) {
          try { yt.setOption(m, "track", {}); } catch (e) {}
          try { yt.unloadModule(m); } catch (e) {}
        });
        paintCC(); setHint(null); return;
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
          paintCC(true); setHint(null);
        } else if (n < 8) setTimeout(pick, 400);
        else {
          ccOn = false; paintCC(false);
          setHint("এই ভিডিওতে সাবটাইটেল পাওয়া যায়নি।");
          setTimeout(function () { setHint(null); }, 3500);
        }
      })();
    }

    /* ---------- ইভেন্ট ---------- */
    poster.addEventListener("click", function () { wantPlay = true; create(); });
    box.querySelector(".vp-pause").addEventListener("click", function () {
      if (readyOK) { try { yt.playVideo(); } catch (e) {} }
    });
    bPlay.addEventListener("click", toggle);
    bRew.addEventListener("click", function () { nudge(-10); });
    bFfw.addEventListener("click", function () { nudge(10); });
    bRate.addEventListener("click", function () {
      rateIx = (rateIx + 1) % RATES.length; applyRate();
    });
    bCC.addEventListener("click", function () {
      if (!readyOK) { wantCC = true; create(); return; }
      applyCC(!ccOn);
    });
    bMute.addEventListener("click", function () {
      if (!readyOK || !yt.isMuted) return;
      try {
        if (yt.isMuted()) { yt.unMute(); bMute.textContent = "🔊"; }
        else { yt.mute(); bMute.textContent = "🔇"; }
      } catch (e) {}
    });
    /* YouTube-এর নিজের কন্ট্রোলে যাওয়া/ফেরা — একই জায়গা থেকে আবার শুরু */
    function switchMode() {
      var t = 0, wasPlaying = false;
      if (readyOK && yt) {
        try { t = yt.getCurrentTime() || 0; } catch (e) {}
        try { wasPlaying = yt.getPlayerState() === YT.PlayerState.PLAYING; } catch (e) {}
        try { yt.destroy(); } catch (e) {}
      }
      if (timer) { clearInterval(timer); timer = null; }
      yt = null; readyOK = false; creating = false; duration = 0;
      nativeMode = !nativeMode;
      box.classList.toggle("vp-native", nativeMode);
      bQual.classList.toggle("is-on", nativeMode);
      bQual.title = nativeMode
        ? "আমাদের নিজের প্লেয়ারে ফিরে যাও"
        : "ভিডিওর মান (quality) ও YouTube সেটিংস";
      box.classList.remove("is-paused");
      gate(false);
      /* নতুন placeholder — YT.Player আগেরটা iframe দিয়ে বদলে ফেলেছে */
      uid = "ytp-" + (++SEQ);
      box.querySelector(".vp-frame").innerHTML = '<div id="' + uid + '"></div>';
      start = Math.floor(t);
      wantPlay = wasPlaying;
      setHint(nativeMode
        ? "⚙ YouTube-এর নিজের কন্ট্রোল চালু — নিচে-ডানে <b>গিয়ার আইকনে</b> চেপে <b>Quality</b> থেকে 720p/1080p বেছে নাও।"
        : null);
      create();
    }
    bQual.addEventListener("click", switchMode);

    bFull.addEventListener("click", function () {
      if (document.fullscreenElement) document.exitFullscreen();
      else if (box.requestFullscreen) box.requestFullscreen();
    });
    box.querySelector(".vp-replay").addEventListener("click", function () {
      endc.hidden = true;
      if (readyOK) { try { yt.seekTo(0, true); yt.playVideo(); } catch (e) {} }
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
      dragging = true; pctFromEvent(e);
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
      if (readyOK && duration) { endc.hidden = true; try { yt.seekTo(pct * duration, true); } catch (e) {} }
    }
    seek.addEventListener("mousedown", startDrag);
    seek.addEventListener("touchstart", startDrag, { passive: true });
    seek.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft")  { e.preventDefault(); nudge(-10); }
      if (e.key === "ArrowRight") { e.preventDefault(); nudge(10); }
    });

    box.vpSeekTo = function (sec) {
      if (!readyOK) { wantSeek = sec; wantPlay = true; create(); return; }
      endc.hidden = true;
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
