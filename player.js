/* =========================================================================
   player.js — নিজস্ব ভিডিও প্লেয়ার (Deutsch für Bangla)
   ------------------------------------------------------------------------
   YouTube-এর চেহারা লুকিয়ে আমাদের নিজের কন্ট্রোল দেখায়।
   ভাষা শেখার জন্য বাড়তি সুবিধা: ১০ সেকেন্ড পেছনো, গতি কমানো (0.5x–1.25x),
   আর ভিডিও শেষে YouTube-এর "পরের ভিডিও" সাজেশন আমাদের নিজের স্ক্রিন দিয়ে ঢাকা।

   ব্যবহার (HTML):
     <div class="vplayer" data-vid="4yMEYTa1U1Q"
          data-title="Kapitel 01: Guten Tag"
          data-sub="Netzwerk neu A1 · ১:৩০:১৩"
          data-start="0"></div>
   ========================================================================= */
(function () {
  "use strict";

  var API_READY = false;
  var API_QUEUE = [];
  var SEQ = 0;

  /* ---------- YouTube IFrame API একবারই লোড করো ---------- */
  function loadAPI() {
    if (window.YT && window.YT.Player) { API_READY = true; return; }
    if (document.getElementById("yt-iframe-api")) return;
    var s = document.createElement("script");
    s.id = "yt-iframe-api";
    s.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(s);
  }
  window.onYouTubeIframeAPIReady = function () {
    API_READY = true;
    API_QUEUE.splice(0).forEach(function (fn) { fn(); });
  };
  function whenAPI(fn) {
    if (API_READY && window.YT && window.YT.Player) fn();
    else { API_QUEUE.push(fn); loadAPI(); }
  }

  /* ---------- সময় ফরম্যাট (1:05:09 / 4:07) ---------- */
  function fmt(sec) {
    sec = Math.max(0, Math.floor(sec || 0));
    var h = Math.floor(sec / 3600),
        m = Math.floor((sec % 3600) / 60),
        s = sec % 60;
    var mm = h ? (m < 10 ? "0" + m : "" + m) : "" + m;
    var ss = s < 10 ? "0" + s : "" + s;
    return (h ? h + ":" : "") + mm + ":" + ss;
  }

  /* ---------- একটি প্লেয়ার তৈরি ---------- */
  function build(box) {
    if (box.dataset.ready) return;
    box.dataset.ready = "1";

    var vid    = box.getAttribute("data-vid");
    var listId = box.getAttribute("data-list") || "";
    var title  = box.getAttribute("data-title") || "";
    var sub    = box.getAttribute("data-sub") || "";
    var start  = parseInt(box.getAttribute("data-start") || "0", 10) || 0;

    /* data-vid="videoseries?list=PL..." লেখা থাকলেও প্লেলিস্ট হিসেবে ধরো */
    if (!listId && vid && /[?&]list=/.test(vid)) {
      listId = vid.split(/[?&]list=/)[1].split("&")[0];
      vid = "";
    }
    if (!vid && !listId) return;

    var uid = "ytp-" + (++SEQ);

    box.innerHTML =
      '<div class="vp-stage">' +
        '<div class="vp-frame"><div id="' + uid + '"></div></div>' +
        '<div class="vp-shield" role="button" tabindex="0" aria-label="চালাও / থামাও"></div>' +
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
        '<button class="vp-ico vp-play" type="button" aria-label="চালাও/থামাও">▶</button>' +
        '<button class="vp-ico vp-rew" type="button" aria-label="১০ সেকেন্ড পিছনে" title="১০ সেকেন্ড পিছনে">⟲10</button>' +
        '<button class="vp-ico vp-ffw" type="button" aria-label="১০ সেকেন্ড সামনে" title="১০ সেকেন্ড সামনে">10⟳</button>' +
        '<div class="vp-seek" role="slider" tabindex="0" aria-label="ভিডিওর অবস্থান">' +
          '<div class="vp-seek-track"><div class="vp-seek-buf"></div><div class="vp-seek-fill"></div><div class="vp-seek-knob"></div></div>' +
        "</div>" +
        '<div class="vp-time"><span class="vp-cur">0:00</span> / <span class="vp-dur">0:00</span></div>' +
        '<button class="vp-ico vp-rate" type="button" aria-label="গতি" title="বলার গতি">1x</button>' +
        '<button class="vp-ico vp-mute" type="button" aria-label="শব্দ বন্ধ/চালু">🔊</button>' +
        '<button class="vp-ico vp-full" type="button" aria-label="ফুল স্ক্রিন">⛶</button>' +
      "</div>";

    var stage   = box.querySelector(".vp-stage");
    var poster  = box.querySelector(".vp-poster");
    var shield  = box.querySelector(".vp-shield");
    var endcard = box.querySelector(".vp-endcard");
    var spin    = box.querySelector(".vp-spinner");
    var bPlay   = box.querySelector(".vp-play");
    var bRew    = box.querySelector(".vp-rew");
    var bFfw    = box.querySelector(".vp-ffw");
    var bRate   = box.querySelector(".vp-rate");
    var bMute   = box.querySelector(".vp-mute");
    var bFull   = box.querySelector(".vp-full");
    var seek    = box.querySelector(".vp-seek");
    var fill    = box.querySelector(".vp-seek-fill");
    var buf     = box.querySelector(".vp-seek-buf");
    var elCur   = box.querySelector(".vp-cur");
    var elDur   = box.querySelector(".vp-dur");

    var yt = null, timer = null, dragging = false, duration = 0;
    var RATES = [0.5, 0.75, 1, 1.25];
    var rateIx = 2;

    function create(autoplay) {
      spin.hidden = false;
      whenAPI(function () {
        var pv = {
          /* নিজের কন্ট্রোল — YouTube-এর কন্ট্রোল বন্ধ */
          controls: 0, disablekb: 1, fs: 0, modestbranding: 1,
          rel: 0, iv_load_policy: 3, playsinline: 1,
          start: start, autoplay: autoplay ? 1 : 0, origin: location.origin
        };
        /* প্লেলিস্ট হলে videoId নয়, list + listType লাগে */
        if (listId) { pv.list = listId; pv.listType = "playlist"; }

        yt = new YT.Player(uid, {
          videoId: vid || undefined,
          playerVars: pv,
          events: {
            onReady: function () {
              duration = yt.getDuration() || 0;
              elDur.textContent = fmt(duration);
              spin.hidden = true;
              poster.classList.add("gone");
              applyRate();
              tick();
              timer = setInterval(tick, 250);
            },
            onStateChange: function (e) {
              var S = YT.PlayerState;
              spin.hidden = e.data !== S.BUFFERING;
              if (e.data === S.PLAYING) {
                bPlay.textContent = "❚❚";
                endcard.hidden = true;
                poster.classList.add("gone");
                if (!duration) { duration = yt.getDuration() || 0; elDur.textContent = fmt(duration); }
              } else if (e.data === S.PAUSED) {
                bPlay.textContent = "▶";
              } else if (e.data === S.ENDED) {
                /* YouTube-এর "পরের ভিডিও" সাজেশন আমাদের স্ক্রিন দিয়ে ঢেকে দাও */
                bPlay.textContent = "▶";
                endcard.hidden = false;
              }
            }
          }
        });
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
      if (!yt) { create(true); return; }
      var st = yt.getPlayerState();
      if (st === YT.PlayerState.PLAYING) yt.pauseVideo();
      else yt.playVideo();
    }
    function nudge(sec) {
      if (!yt || !yt.seekTo) return;
      endcard.hidden = true;
      yt.seekTo(Math.max(0, (yt.getCurrentTime() || 0) + sec), true);
      yt.playVideo();
    }
    function applyRate() {
      if (!yt || !yt.setPlaybackRate) return;
      yt.setPlaybackRate(RATES[rateIx]);
      bRate.textContent = RATES[rateIx] + "x";
    }

    /* ---------- ইভেন্ট ---------- */
    poster.addEventListener("click", function () { create(true); });
    shield.addEventListener("click", toggle);
    shield.addEventListener("keydown", function (e) {
      if (e.key === " " || e.key === "Enter") { e.preventDefault(); toggle(); }
      else if (e.key === "ArrowLeft")  { e.preventDefault(); nudge(-10); }
      else if (e.key === "ArrowRight") { e.preventDefault(); nudge(10); }
    });
    bPlay.addEventListener("click", toggle);
    bRew.addEventListener("click", function () { nudge(-10); });
    bFfw.addEventListener("click", function () { nudge(10); });
    bRate.addEventListener("click", function () {
      rateIx = (rateIx + 1) % RATES.length;
      applyRate();
    });
    bMute.addEventListener("click", function () {
      if (!yt || !yt.isMuted) return;
      if (yt.isMuted()) { yt.unMute(); bMute.textContent = "🔊"; }
      else { yt.mute(); bMute.textContent = "🔇"; }
    });
    bFull.addEventListener("click", function () {
      var el = box;
      if (document.fullscreenElement) document.exitFullscreen();
      else if (el.requestFullscreen) el.requestFullscreen();
    });
    box.querySelector(".vp-replay").addEventListener("click", function () {
      endcard.hidden = true;
      if (yt) { yt.seekTo(0, true); yt.playVideo(); }
    });
    box.querySelector(".vp-back30").addEventListener("click", function () {
      endcard.hidden = true;
      if (yt) { yt.seekTo(Math.max(0, (duration || 0) - 30), true); yt.playVideo(); }
    });

    /* ---------- সিক বার (ক্লিক + ড্র্যাগ) ---------- */
    function seekFromEvent(e) {
      var r = seek.getBoundingClientRect();
      var x = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
      var pct = Math.min(1, Math.max(0, x / r.width));
      fill.style.width = pct * 100 + "%";
      if (duration) elCur.textContent = fmt(pct * duration);
      return pct;
    }
    function startDrag(e) {
      if (!yt) return;
      dragging = true; seekFromEvent(e);
      document.addEventListener("mousemove", onDrag);
      document.addEventListener("mouseup", endDrag);
      document.addEventListener("touchmove", onDrag, { passive: false });
      document.addEventListener("touchend", endDrag);
    }
    function onDrag(e) { if (dragging) { e.preventDefault(); seekFromEvent(e); } }
    function endDrag(e) {
      if (!dragging) return;
      var pct = seekFromEvent(e.changedTouches ? { clientX: e.changedTouches[0].clientX } : e);
      dragging = false;
      document.removeEventListener("mousemove", onDrag);
      document.removeEventListener("mouseup", endDrag);
      document.removeEventListener("touchmove", onDrag);
      document.removeEventListener("touchend", endDrag);
      if (yt && duration) { endcard.hidden = true; yt.seekTo(pct * duration, true); }
    }
    seek.addEventListener("mousedown", startDrag);
    seek.addEventListener("touchstart", startDrag, { passive: true });
    seek.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft")  { e.preventDefault(); nudge(-10); }
      if (e.key === "ArrowRight") { e.preventDefault(); nudge(10); }
    });

    /* ---------- বাইরের কোড থেকে নির্দিষ্ট সময়ে লাফ দেওয়ার জন্য ---------- */
    box.vpSeekTo = function (sec) {
      if (!yt) { start = sec; create(true); return; }
      endcard.hidden = true;
      yt.seekTo(sec, true);
      yt.playVideo();
      stage.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    window.addEventListener("beforeunload", function () { if (timer) clearInterval(timer); });
  }

  /* ---------- "এই অংশে যাও" টাইমস্ট্যাম্প বোতাম ----------
     <button class="vp-jump" data-player="kap1" data-t="325">৫:২৫</button>
     <div class="vplayer" id="kap1" ...>                                  */
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

  /* ---------- দৃশ্যমান হলে তবেই প্লেয়ার বানাও (lazy) ---------- */
  function init() {
    var boxes = Array.prototype.slice.call(document.querySelectorAll(".vplayer"));
    if (!boxes.length) return;
    boxes.forEach(function (b) { build(b); });
  }

  /* ডায়নামিকভাবে বসানো কনটেন্টে (যেমন kurs.js) নতুন প্লেয়ার চালু করার হুক */
  window.VPlayer = { init: init, build: build };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
