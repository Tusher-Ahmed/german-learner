/* =========================================================================
   player.js — নিজস্ব ভিডিও প্লেয়ার (Deutsch für Bangla)
   ------------------------------------------------------------------------
   দুই মোডে চলে:

   ১) "api" মোড — সাইট http(s)-এ চললে (যেমন GitHub Pages বা local server)।
      নিজের কন্ট্রোল: ⟲10 / 10⟳, গতি 0.5x–1.25x, নিজের সিক-বার,
      আর ভিডিও শেষে নিজের পর্দা।

   ২) "plain" মোড — ফাইল সরাসরি (file://) খুললে, বা API লোড না হলে।
      YouTube IFrame API file:// থেকে কাজ করে না, তাই তখন সাধারণ embed
      দেখানো হয় — ভিডিও ও সব বাটন কাজ করে, শুধু নিজের কন্ট্রোল থাকে না।

   গুরুত্বপূর্ণ: ভিডিওর উপরে কোনো ক্লিক-শিল্ড রাখা হয় না, যাতে
   YouTube-এর "Skip Ad" বাটনে ক্লিক করা যায়।

   ব্যবহার (HTML):
     <div class="vplayer" data-vid="4yMEYTa1U1Q"
          data-title="Kapitel 01" data-sub="A1 · ১:৩০:১৩"></div>
   ========================================================================= */
(function () {
  "use strict";

  var API_READY = false;
  var API_FAILED = false;
  var API_QUEUE = [];
  var SEQ = 0;

  /* http(s) না হলে (file://) IFrame API কাজ করবে না */
  var CAN_USE_API = /^https?:$/.test(location.protocol);

  /* ---------- YouTube IFrame API একবারই লোড করো ---------- */
  function loadAPI() {
    if (window.YT && window.YT.Player) { API_READY = true; return; }
    if (document.getElementById("yt-iframe-api")) return;
    var s = document.createElement("script");
    s.id = "yt-iframe-api";
    s.src = "https://www.youtube.com/iframe_api";
    s.onerror = function () { API_FAILED = true; flushQueue(true); };
    document.head.appendChild(s);
    /* ৮ সেকেন্ডে না এলে ধরে নাও আসবে না */
    setTimeout(function () {
      if (!API_READY) { API_FAILED = true; flushQueue(true); }
    }, 8000);
  }
  function flushQueue(failed) {
    API_QUEUE.splice(0).forEach(function (fn) { fn(failed); });
  }
  window.onYouTubeIframeAPIReady = function () {
    API_READY = true;
    flushQueue(false);
  };
  function whenAPI(fn) {
    if (API_READY && window.YT && window.YT.Player) fn(false);
    else if (API_FAILED) fn(true);
    else { API_QUEUE.push(fn); loadAPI(); }
  }

  /* ---------- সময় ফরম্যাট ---------- */
  function fmt(sec) {
    sec = Math.max(0, Math.floor(sec || 0));
    var h = Math.floor(sec / 3600),
        m = Math.floor((sec % 3600) / 60),
        s = sec % 60;
    var mm = h ? (m < 10 ? "0" + m : "" + m) : "" + m;
    var ss = s < 10 ? "0" + s : "" + s;
    return (h ? h + ":" : "") + mm + ":" + ss;
  }

  /* ---------- একটি প্লেয়ার ---------- */
  function build(box) {
    if (box.dataset.ready) return;
    box.dataset.ready = "1";

    var vid    = box.getAttribute("data-vid");
    var listId = box.getAttribute("data-list") || "";
    var title  = box.getAttribute("data-title") || "";
    var sub    = box.getAttribute("data-sub") || "";
    var start  = parseInt(box.getAttribute("data-start") || "0", 10) || 0;

    /* data-vid="videoseries?list=PL..." হলেও প্লেলিস্ট ধরো */
    if (!listId && vid && /[?&]list=/.test(vid)) {
      listId = vid.split(/[?&]list=/)[1].split("&")[0];
      vid = "";
    }
    if (!vid && !listId) return;

    var uid = "ytp-" + (++SEQ);

    box.innerHTML =
      '<div class="vp-stage">' +
        '<div class="vp-frame"><div id="' + uid + '"></div></div>' +
        /* YouTube-এর উপরের টাইটেল/চ্যানেল/শেয়ার ঢাকার পর্দা।
           pointer-events:none — তাই ক্লিক এর ভেতর দিয়ে চলে যায়, "Skip Ad" কাজ করে।
           শুধু hover বা pause-এর সময় দেখা যায়, নইলে ভিডিও পুরো পরিষ্কার থাকে। */
        '<div class="vp-topmask" aria-hidden="true"></div>' +
        '<div class="vp-poster">' +
          '<div class="vp-poster-in">' +
            '<button class="vp-bigplay" type="button" aria-label="ভিডিও চালাও"><span></span></button>' +
            (title ? '<div class="vp-ptitle">' + title + "</div>" : "") +
            (sub ? '<div class="vp-psub">' + sub + "</div>" : "") +
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
        '<div class="vp-spinner" hidden><i></i></div>' +
      "</div>" +
      '<div class="vp-bar">' +
        '<div class="vp-row vp-row-seek">' +
          '<div class="vp-seek" role="slider" tabindex="0" aria-label="ভিডিওর অবস্থান" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">' +
            '<div class="vp-seek-track"><div class="vp-seek-buf"></div><div class="vp-seek-fill"></div></div>' +
          "</div>" +
          '<div class="vp-time"><span class="vp-cur">0:00</span> / <span class="vp-dur">0:00</span></div>' +
        "</div>" +
        '<div class="vp-row vp-row-btns">' +
          '<button class="vp-ico vp-play" type="button" aria-label="চালাও বা থামাও">▶</button>' +
          '<button class="vp-ico vp-rew" type="button" aria-label="১০ সেকেন্ড পিছনে" title="১০ সেকেন্ড পিছনে">⟲ 10</button>' +
          '<button class="vp-ico vp-ffw" type="button" aria-label="১০ সেকেন্ড সামনে" title="১০ সেকেন্ড সামনে">10 ⟳</button>' +
          '<button class="vp-ico vp-rate" type="button" aria-label="বলার গতি" title="বলার গতি">1x</button>' +
          '<button class="vp-ico vp-cc" type="button" aria-label="সাবটাইটেল চালু বা বন্ধ" title="সাবটাইটেল (subtitle) চালু/বন্ধ">CC</button>' +
          '<button class="vp-ico vp-mute" type="button" aria-label="শব্দ বন্ধ বা চালু">🔊</button>' +
          '<button class="vp-ico vp-full" type="button" aria-label="ফুল স্ক্রিন">⛶</button>' +
        "</div>" +
      "</div>" +
      '<div class="vp-msg" hidden></div>';

    var stage   = box.querySelector(".vp-stage");
    var poster  = box.querySelector(".vp-poster");
    var endcard = box.querySelector(".vp-endcard");
    var spin    = box.querySelector(".vp-spinner");
    var bar     = box.querySelector(".vp-bar");
    var msg     = box.querySelector(".vp-msg");
    var bPlay   = box.querySelector(".vp-play");
    var bRew    = box.querySelector(".vp-rew");
    var bFfw    = box.querySelector(".vp-ffw");
    var bRate   = box.querySelector(".vp-rate");
    var bCC     = box.querySelector(".vp-cc");
    var bMute   = box.querySelector(".vp-mute");
    var bFull   = box.querySelector(".vp-full");
    var seek    = box.querySelector(".vp-seek");
    var fill    = box.querySelector(".vp-seek-fill");
    var buf     = box.querySelector(".vp-seek-buf");
    var elCur   = box.querySelector(".vp-cur");
    var elDur   = box.querySelector(".vp-dur");

    var yt = null, timer = null, dragging = false, duration = 0, readyOK = false;
    var RATES = [0.5, 0.75, 1, 1.25];
    var rateIx = 2;

    /* ---------- fallback: সাধারণ YouTube embed ---------- */
    function plainEmbed(reason) {
      if (timer) { clearInterval(timer); timer = null; }
      var src = "https://www.youtube-nocookie.com/embed/" +
        (listId ? "videoseries?list=" + listId + "&" : encodeURIComponent(vid) + "?") +
        "rel=0&modestbranding=1&iv_load_policy=3&playsinline=1&autoplay=1" +
        (start ? "&start=" + start : "");
      box.querySelector(".vp-frame").innerHTML =
        '<iframe src="' + src + '" title="' + (title || "ভিডিও") + '" loading="lazy" ' +
        'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' +
        'allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>';
      poster.classList.add("gone");
      spin.hidden = true;
      endcard.hidden = true;
      bar.hidden = true;           /* নিজের কন্ট্রোল কাজ করবে না — লুকিয়ে দাও */
      msg.hidden = false;
      msg.innerHTML = reason;
    }

    var FILE_MSG =
      "ℹ️ <b>নিজের কন্ট্রোল (গতি কমানো, ⟲১০) এখন কাজ করছে না</b> — কারণ ফাইলটা " +
      "সরাসরি কম্পিউটার থেকে খোলা হয়েছে (<code>file://</code>), আর YouTube-এর " +
      "প্লেয়ার-API এভাবে চলে না। ভিডিও ও YouTube-এর নিজের বাটন ঠিকই কাজ করবে।<br>" +
      "<b>পুরো প্লেয়ার পেতে:</b> সাইটটা একটা ছোট server দিয়ে চালাও — ফোল্ডারে টার্মিনাল খুলে " +
      "<code>python -m http.server 8000</code> লিখে <code>http://localhost:8000</code> খোলো। " +
      "অথবা অনলাইনে হোস্ট করা সাইটটা ব্যবহার করো।";

    var API_MSG =
      "ℹ️ YouTube-এর প্লেয়ার-API লোড হয়নি (ইন্টারনেট বা ব্রাউজার বাধা দিয়েছে), " +
      "তাই সাধারণ প্লেয়ার দেখানো হচ্ছে। ভিডিও ঠিকই চলবে।";

    /* ---------- api মোড ---------- */
    function create() {
      if (!CAN_USE_API) { plainEmbed(FILE_MSG); return; }
      spin.hidden = false;
      poster.classList.add("gone");

      whenAPI(function (failed) {
        if (failed) { plainEmbed(API_MSG); return; }

        var pv = {
          controls: 0, disablekb: 1, fs: 0, modestbranding: 1,
          rel: 0, iv_load_policy: 3, playsinline: 1,
          cc_load_policy: 0,   /* সাবটাইটেল ডিফল্টে বন্ধ — CC বাটনে চালু করা যাবে */
          start: start, autoplay: 1
        };
        /* origin শুধু http(s)-এ পাঠাও — file:// হলে "null" যায় ও API ভেঙে পড়ে */
        if (CAN_USE_API) pv.origin = location.origin;
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
                applyRate();
                setCC(false);      /* শুরুতে সাবটাইটেল বন্ধ */
                tick();
                timer = setInterval(tick, 250);
              },
              onError: function () { plainEmbed(API_MSG); },
              onStateChange: function (e) {
                var S = YT.PlayerState;
                spin.hidden = e.data !== S.BUFFERING;
                if (e.data === S.PLAYING) {
                  box.classList.remove("is-paused");
                  bPlay.textContent = "❚❚";
                  bPlay.setAttribute("aria-label", "থামাও");
                  endcard.hidden = true;
                  if (!duration) {
                    duration = yt.getDuration() || 0;
                    if (duration) elDur.textContent = fmt(duration);
                  }
                } else if (e.data === S.PAUSED) {
                  bPlay.textContent = "▶";
                  bPlay.setAttribute("aria-label", "চালাও");
                  box.classList.add("is-paused");
                } else if (e.data === S.ENDED) {
                  box.classList.remove("is-paused");
                  bPlay.textContent = "▶";
                  endcard.hidden = false;
                }
              }
            }
          });
        } catch (err) { plainEmbed(API_MSG); return; }

        /* ৭ সেকেন্ডে onReady না এলে সাধারণ প্লেয়ারে নেমে যাও */
        setTimeout(function () { if (!readyOK) plainEmbed(API_MSG); }, 7000);
      });
    }

    function tick() {
      if (!yt || !yt.getCurrentTime) return;
      if (!duration) {
        duration = yt.getDuration() || 0;
        if (duration) elDur.textContent = fmt(duration);
      }
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
      if (!yt || !readyOK) return;
      var st = yt.getPlayerState();
      if (st === YT.PlayerState.PLAYING) yt.pauseVideo();
      else yt.playVideo();
    }
    function nudge(sec) {
      if (!yt || !readyOK || !yt.seekTo) return;
      endcard.hidden = true;
      yt.seekTo(Math.max(0, (yt.getCurrentTime() || 0) + sec), true);
      yt.playVideo();
    }
    /* সাবটাইটেল চালু/বন্ধ — YouTube-এর caption module ব্যবহার করে।
       module-এর নাম প্লেয়ার-সংস্করণে আলাদা হতে পারে, তাই দুটোই চেষ্টা করি। */
    var ccOn = false;
    function setCC(on) {
      if (!yt) return;
      ccOn = !!on;
      ["captions", "cc"].forEach(function (mod) {
        try {
          if (ccOn) {
            yt.loadModule(mod);
            yt.setOption(mod, "track", { languageCode: "de" });
          } else {
            yt.setOption(mod, "track", {});
            yt.unloadModule(mod);
          }
        } catch (e) { /* এই module নেই — সমস্যা নেই */ }
      });
      if (bCC) {
        bCC.classList.toggle("is-on", ccOn);
        bCC.setAttribute("aria-pressed", ccOn ? "true" : "false");
        bCC.title = ccOn ? "সাবটাইটেল বন্ধ করো" : "সাবটাইটেল চালু করো (জার্মান)";
      }
    }

    function applyRate() {
      if (!yt || !yt.setPlaybackRate) return;
      yt.setPlaybackRate(RATES[rateIx]);
      bRate.textContent = RATES[rateIx] + "x";
    }

    /* ---------- ইভেন্ট ---------- */
    poster.addEventListener("click", create);
    bPlay.addEventListener("click", toggle);
    bRew.addEventListener("click", function () { nudge(-10); });
    bFfw.addEventListener("click", function () { nudge(10); });
    bRate.addEventListener("click", function () {
      rateIx = (rateIx + 1) % RATES.length;
      applyRate();
    });
    bCC.addEventListener("click", function () {
      if (!yt || !readyOK) return;
      setCC(!ccOn);
    });
    bMute.addEventListener("click", function () {
      if (!yt || !readyOK || !yt.isMuted) return;
      if (yt.isMuted()) { yt.unMute(); bMute.textContent = "🔊"; }
      else { yt.mute(); bMute.textContent = "🔇"; }
    });
    bFull.addEventListener("click", function () {
      if (document.fullscreenElement) document.exitFullscreen();
      else if (box.requestFullscreen) box.requestFullscreen();
    });
    box.querySelector(".vp-replay").addEventListener("click", function () {
      endcard.hidden = true;
      if (yt && readyOK) { yt.seekTo(0, true); yt.playVideo(); }
    });
    box.querySelector(".vp-back30").addEventListener("click", function () {
      endcard.hidden = true;
      if (yt && readyOK) { yt.seekTo(Math.max(0, (duration || 0) - 30), true); yt.playVideo(); }
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
      if (!yt || !readyOK) return;
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
      if (yt && readyOK && duration) { endcard.hidden = true; yt.seekTo(pct * duration, true); }
    }
    seek.addEventListener("mousedown", startDrag);
    seek.addEventListener("touchstart", startDrag, { passive: true });
    seek.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft")  { e.preventDefault(); nudge(-10); }
      if (e.key === "ArrowRight") { e.preventDefault(); nudge(10); }
    });

    /* ---------- বাইরের কোড থেকে নির্দিষ্ট সময়ে লাফ ---------- */
    box.vpSeekTo = function (sec) {
      if (!yt || !readyOK) { start = sec; create(); return; }
      endcard.hidden = true;
      yt.seekTo(sec, true);
      yt.playVideo();
      stage.scrollIntoView({ behavior: "smooth", block: "center" });
    };
  }

  /* ---------- টাইমস্ট্যাম্প বোতাম ---------- */
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
    Array.prototype.slice.call(document.querySelectorAll(".vplayer")).forEach(build);
  }

  window.VPlayer = { init: init, build: build };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
