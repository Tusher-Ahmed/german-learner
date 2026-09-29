/* =========================================================================
   kurs.js — কোর্স রেন্ডারার
   ------------------------------------------------------------------------
   window.KURS থেকে ইউনিট তৈরি করে। মূল নিয়ম: কোনো জার্মান শব্দ
   বাংলা অর্থ (b) ও উচ্চারণ (p) ছাড়া কখনো দেখানো হবে না।
   ========================================================================= */
(function () {
  "use strict";

  var K = window.KURS || [];
  var LS = "kurs_done_v1";

  /* ---------- progress ---------- */
  function loadDone() {
    try { return JSON.parse(localStorage.getItem(LS) || "{}"); } catch (e) { return {}; }
  }
  function saveDone(d) { localStorage.setItem(LS, JSON.stringify(d)); }
  function isDone(id) { return !!loadDone()[id]; }
  function toggleDone(id) {
    var d = loadDone();
    d[id] = !d[id];
    saveDone(d);
    return d[id];
  }
  function updateBar() {
    var d = loadDone();
    var done = K.filter(function (u) { return d[u.id]; }).length;
    var pct = K.length ? Math.round((done / K.length) * 100) : 0;
    var fill = document.getElementById("progressFill");
    var lbl = document.getElementById("progressLabel");
    if (fill) fill.style.width = pct + "%";
    if (lbl) lbl.textContent = done + " / " + K.length + " ইউনিট শেষ (" + pct + "%)";
  }

  /* "1:30:13" → সেকেন্ড (প্লেয়ারকে আসল দৈর্ঘ্য জানাতে, বিজ্ঞাপন ধরার জন্য) */
  function secs(t){var p=String(t||"").split(":").map(Number);if(p.length===3)return p[0]*3600+p[1]*60+p[2];if(p.length===2)return p[0]*60+p[1];return 0;}

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  /* 🔊 বাটন — data-say app.js ধরে নেয় */
  function say(text) {
    return '<button class="say" type="button" data-say="' + esc(text) + '">🔊</button>';
  }
  /* উচ্চারণের জন্য শুধু জার্মান অংশটা নাও (স্ল্যাশ থাকলে প্রথমটা) */
  function sayText(de) {
    return String(de).split(" / ")[0].replace(/\s*\(.*?\)\s*/g, "").trim() || de;
  }

  /* ---------- ইউনিট তালিকা ---------- */
  /* গ্রামারের শিরোনাম থেকে বিষয়ের নাম বের করো ("১. sein — …" → "sein") */
  function topics(u) {
    return u.grammar.map(function (g) {
      var t = String(g.h).replace(/^[০-৯0-9]+[.।]s*/, "");
      t = t.split(" — ")[0].split(" (")[0].trim();
      return t;
    });
  }

  /* পুরো কোর্সের হিসাব */
  function totals() {
    var t = { w:0, p:0, d:0, dr:0, g:0, min:0, vid:0 };
    K.forEach(function (u) {
      t.w += u.words.length; t.p += u.phrases.length;
      t.d += u.dialog.lines.length; t.dr += u.drills.length;
      t.g += u.grammar.length; t.min += u.minutes;
      t.vid += 1 + ((u.kks_extra || []).length);
    });
    return t;
  }

  function renderHub() {
    var host = document.getElementById("unitList");
    var toc = document.getElementById("toc");
    var sum = document.getElementById("kursSummary");
    if (!host) return;
    var d = loadDone();
    var T = totals();

    /* ---- উপরে পুরো কোর্সের তথ্য ---- */
    if (sum) {
      var doneN = K.filter(function (u) { return d[u.id]; }).length;
      var hrs = Math.round(T.min / 60);
      sum.innerHTML =
        '<div class="kstats">' +
          '<div class="kstat"><b>' + K.length + '</b><span>ইউনিট</span></div>' +
          '<div class="kstat"><b>' + T.w + '</b><span>শব্দ</span></div>' +
          '<div class="kstat"><b>' + T.p + '</b><span>তৈরি বাক্য</span></div>' +
          '<div class="kstat"><b>' + T.g + '</b><span>গ্রামার নিয়ম</span></div>' +
          '<div class="kstat"><b>' + T.d + '</b><span>সংলাপের লাইন</span></div>' +
          '<div class="kstat"><b>' + T.dr + '</b><span>অনুশীলন</span></div>' +
          '<div class="kstat"><b>' + T.vid + '</b><span>ভিডিও ক্লাস</span></div>' +
          '<div class="kstat done"><b>' + doneN + '</b><span>শেষ হয়েছে</span></div>' +
        "</div>" +
        '<div class="knote">পুরো কোর্স শেষ করতে সময় লাগবে প্রায় <b>' + hrs + ' ঘণ্টা</b> পড়া ' +
        '(দিনে একটা ইউনিট = ' + K.length + ' দিনে একবার পড়া শেষ), সাথে ভিডিও আলাদা। ' +
        'তবে <b>পড়া শেষ করা</b> আর <b>লেভেলে পৌঁছানো</b> এক নয় — A1+A2 সত্যিকারে আয়ত্তে আনতে ' +
        'নিয়মিত অভ্যাস ও কথা বলা মিলিয়ে <b>~৮–১৪ মাস</b> লাগে। ' +
        'প্রতিটা শব্দের সাথে <b>বাংলা অর্থ ও উচ্চারণ</b> আছে।</div>';
    }

    /* ---- ইউনিট কার্ড ---- */
    var html = "", tocHtml = "", lastLevel = "";
    K.forEach(function (u, i) {
      if (u.level !== lastLevel) {
        lastLevel = u.level;
        var inLv = K.filter(function (x) { return x.level === u.level; });
        var wLv = inLv.reduce(function (a, x) { return a + x.words.length; }, 0);
        var head = (u.level === "A1" ? "A1 · একদম শুরু" : "A2 · প্রাথমিক") +
          " — " + inLv.length + "টি ইউনিট · " + wLv + "টি শব্দ";
        html += '<div class="lvlhead">' + head + "</div>";
        tocHtml += '<h4 style="margin:14px 0 6px">' + esc(u.level) + "</h4>";
      }
      var done = !!d[u.id];
      var tp = topics(u);

      html +=
        '<a class="ucard' + (done ? " is-done" : "") + '" href="#' + u.id + '">' +
          '<span class="unum">' + (done ? "✓" : (i + 1)) + "</span>" +
          '<span class="ubody">' +
            '<span class="ude">' + esc(u.title) + "</span>" +
            '<span class="ubn">' + u.title_bn + "</span>" +
            '<span class="uchips">' +
              tp.slice(0, 4).map(function (t) { return '<span class="uchip">' + t + "</span>"; }).join("") +
              (tp.length > 4 ? '<span class="uchip more">+' + (tp.length - 4) + "</span>" : "") +
            "</span>" +
            '<span class="ucounts">' +
              "<i>📖 " + u.words.length + " শব্দ</i>" +
              "<i>💬 " + u.phrases.length + " বাক্য</i>" +
              "<i>✍️ " + u.drills.length + " অনুশীলন</i>" +
              "<i>🎬 " + u.kks.len + "</i>" +
            "</span>" +
          "</span>" +
          '<span class="umeta">Kap ' + u.kap + "<br>~" + u.minutes + " মি." +
            (done ? '<br><b class="okmark">✓ শেষ</b>' : "") + "</span>" +
        "</a>";

      tocHtml += '<a href="#' + u.id + '"' + (done ? ' class="done"' : "") + ">" +
        (i + 1) + ". " + esc(u.title) + "</a>";
    });

    host.innerHTML = html;
    if (toc) toc.innerHTML = tocHtml;

    /* ---- সিলেবাসের পূর্ণ টেবিল ---- */
    var syl = document.getElementById("syllabus");
    if (syl) {
      var rows = K.map(function (u, i) {
        return "<tr>" +
          "<td><b>" + (i + 1) + "</b></td>" +
          '<td><a class="inline" href="#' + u.id + '">' + esc(u.title) + "</a><br>" +
            '<span style="font-size:12.5px;color:var(--muted)">' + u.title_bn + "</span></td>" +
          "<td>" + topics(u).join(" · ") + "</td>" +
          "<td style='white-space:nowrap'>" + u.level + "<br>Kap " + u.kap + "</td>" +
        "</tr>";
      }).join("");
      syl.innerHTML =
        '<div class="tblwrap"><table>' +
          "<tr><th>#</th><th>ইউনিট</th><th>যে গ্রামার ও বিষয় শেখাবে</th><th>লেভেল</th></tr>" +
          rows +
        "</table></div>";
    }
  }

  /* ---------- একটি ইউনিট ---------- */
  function renderUnit(u, index) {
    var h = [];

    /* শিরোনাম */
    h.push('<section class="hero">');
    h.push('<div><span class="ubadge">' + u.level + " · Kapitel " + u.kap + "</span> " +
           '<span class="pill">ইউনিট ' + (index + 1) + " / " + K.length + "</span> " +
           '<span class="pill">~' + u.minutes + " মিনিট</span></div>");
    h.push("<h1>" + esc(u.title) + "</h1>");
    h.push("<p><b>" + u.title_bn + "</b></p>");
    h.push("</section>");

    /* ---- ধাপ ১: লক্ষ্য ---- */
    h.push('<section class="lesson">');
    h.push('<div class="step"><span class="sno">১</span><h3>আজকের লক্ষ্য — এই ইউনিট শেষে তুমি পারবে</h3></div>');
    h.push('<ul class="goals">');
    u.goal_bn.forEach(function (g) { h.push("<li>" + g + "</li>"); });
    h.push("</ul>");
    h.push("</section>");

    /* ---- ধাপ ২: শব্দ ---- */
    h.push('<section class="lesson">');
    h.push('<div class="step"><span class="sno">২</span><h3>শব্দ (' + u.words.length + "টি) — অর্থ ও উচ্চারণসহ</h3></div>");
    h.push('<p class="lead">প্রতিটা শব্দের 🔊 চেপে শোনো, তারপর <b>জোরে একইভাবে বলো</b>। বিশেষ্যের সাথে <b>der/die/das</b> একসাথে মুখস্থ করো — আলাদা করে শিখলে পরে গুলিয়ে যাবে।</p>');
    h.push('<div class="wgrid">');
    u.words.forEach(function (w) {
      h.push('<div class="wcard">' +
        '<div class="wde">' + esc(w.d) + say(sayText(w.d)) + "</div>" +
        '<div class="wp">🗣 ' + w.p + "</div>" +
        '<div class="wb">' + w.b + "</div>" +
      "</div>");
    });
    h.push("</div>");
    h.push("</section>");

    /* ---- ধাপ ৩: বাক্য ---- */
    h.push('<section class="lesson">');
    h.push('<div class="step"><span class="sno">৩</span><h3>তৈরি বাক্য (' + u.phrases.length + "টি) — এগুলোই সাথে সাথে কাজে লাগবে</h3></div>");
    h.push('<p class="lead">গ্রামার না বুঝেও এই বাক্যগুলো <b>পুরোটা মুখস্থ</b> করে ফেলো। জার্মানিতে প্রথম দিন থেকেই এগুলো কাজে দেবে।</p>');
    h.push('<div class="plist">');
    u.phrases.forEach(function (p) {
      h.push('<div class="pcard">' +
        '<div class="pde">' + esc(p.d) + say(p.d) + "</div>" +
        '<div class="pp">🗣 ' + p.p + "</div>" +
        '<div class="pb">' + p.b + "</div>" +
      "</div>");
    });
    h.push("</div>");
    h.push("</section>");

    /* ---- ধাপ ৪: গ্রামার ---- */
    h.push('<section class="lesson">');
    h.push('<div class="step"><span class="sno">৪</span><h3>গ্রামার — বাংলায় ব্যাখ্যা</h3></div>');
    u.grammar.forEach(function (g) {
      h.push("<h3>" + g.h + "</h3>");
      h.push(g.body);
    });
    h.push("</section>");

    /* ---- ধাপ ৫: সংলাপ ---- */
    h.push('<section class="lesson">');
    h.push('<div class="step"><span class="sno">৫</span><h3>' + u.dialog.title_bn + "</h3></div>");
    h.push('<p class="lead">প্রথমে পুরোটা পড়ো। তারপর প্রতিটা লাইনের 🔊 চেপে শুনে <b>ঠিক একই সুরে নকল করো</b>। শেষে দুটো চরিত্রই নিজে অভিনয় করো।</p>');
    h.push('<div class="dlg">');
    u.dialog.lines.forEach(function (l) {
      h.push('<div class="dline">' +
        '<div class="who">' + esc(l.s) + "</div>" +
        "<div>" +
          '<div class="dde">' + esc(l.d) + say(l.d) + "</div>" +
          '<div class="dbn">' + l.b + "</div>" +
        "</div>" +
      "</div>");
    });
    h.push("</div>");
    h.push('<div class="tip">পুরো সংলাপটা একবারে শুনতে চাও? নিচের বাটনে চাপো — তারপর সাথে সাথে বলার চেষ্টা করো।</div>');
    h.push('<p>' + say(u.dialog.lines.map(function (l) { return l.d; }).join(" ")) +
           ' <b>পুরো সংলাপ একবারে শোনো</b></p>');
    h.push("</section>");

    /* ---- ধাপ ৬: ভিডিও ---- */
    h.push('<section class="lesson">');
    h.push('<div class="step"><span class="sno">৬</span><h3>এই অধ্যায়ের ভিডিও ক্লাস</h3></div>');
    h.push('<p class="lead">এই ইউনিটের বিষয়টাই ভিডিওতে বিস্তারিত ব্যাখ্যা করা আছে। উপরের শব্দ ও গ্রামার আগে পড়ে নিলে ভিডিওটা অনেক সহজ লাগবে।</p>');
    h.push('<div class="vplayer" data-vid="' + esc(u.kks.vid) + '" data-title="' + esc(u.kks.label) +
           '" data-sub="ভিডিও ক্লাস · ' + esc(u.kks.len) + '" data-dur="' + secs(u.kks.len) + '"></div>');
    if (u.kks_extra && u.kks_extra.length) {
      h.push("<h3>এই বিষয়ে বাড়তি ভিডিও</h3>");
      u.kks_extra.forEach(function (v) {
        h.push('<div class="vplayer" data-vid="' + esc(v.vid) + '" data-title="' + esc(v.label) +
               '" data-sub="বাড়তি ক্লাস · ' + esc(v.len) + '" data-dur="' + secs(v.len) + '"></div>');
      });
    }
    h.push('<div class="note">ভিডিও দেখার সময় <b>0.75x</b> গতিতে দিলে শুরুতে বুঝতে সহজ হয় — প্লেয়ারের <b>1x</b> বাটনে চেপে গতি বদলাতে পারবে। আর <b>⟲10</b> বাটন দিয়ে যেকোনো অংশ বারবার শুনতে পারবে।</div>');
    h.push("</section>");

    /* ---- ধাপ ৭: অনুশীলন ---- */
    h.push('<section class="lesson">');
    h.push('<div class="step"><span class="sno">৭</span><h3>অনুশীলন (' + u.drills.length + "টি) — নিজে চেষ্টা করো</h3></div>");
    h.push('<p class="lead">আগে <b>নিজে উত্তর ভাবো</b>, তারপর উত্তর দেখাও। সাথে সাথে উত্তর দেখলে শেখা হবে না।</p>');
    u.drills.forEach(function (q, i) {
      h.push('<div class="drill">' +
        '<div class="dq"><b>' + (i + 1) + ".</b> " + q.q + "</div>" +
        '<button class="reveal" type="button">উত্তর দেখাও ▸</button>' +
        '<div class="ans">' + q.a + "</div>" +
      "</div>");
    });
    h.push("</section>");

    /* ---- নিজে বলো ---- */
    h.push('<section class="lesson">');
    h.push('<div class="step"><span class="sno">🗣</span><h3>এখন নিজে বলো (সবচেয়ে জরুরি ধাপ)</h3></div>');
    h.push('<p class="lead">এই ধাপটা বাদ দিলে তুমি জার্মান <b>বুঝবে</b> কিন্তু <b>বলতে পারবে না</b>। জোরে বলো — লজ্জা করলে শেখা হবে না।</p>');
    h.push('<ul class="goals">');
    u.speak_bn.forEach(function (s) { h.push("<li>" + s + "</li>"); });
    h.push("</ul>");
    var done = isDone(u.id);
    h.push('<button class="mark-done kurs-done' + (done ? " is-done" : "") + '" type="button" data-uid="' + u.id + '">' +
      (done ? "✓ এই ইউনিট শেষ হয়েছে (আবার চাপলে বাদ যাবে)" : "এই ইউনিট শেষ — চিহ্নিত করো") + "</button>");
    h.push("</section>");

    /* ---- আগে/পরে ---- */
    var prev = K[index - 1], next = K[index + 1];
    h.push('<div class="unav">');
    if (prev) {
      h.push('<a href="#' + prev.id + '"><div class="nlbl">◂ আগের ইউনিট</div>' +
             '<div class="ntxt">' + esc(prev.title) + "</div></a>");
    } else {
      h.push('<a href="#top"><div class="nlbl">◂ শুরু</div><div class="ntxt">সব ইউনিট</div></a>');
    }
    if (next) {
      h.push('<a class="nnext" href="#' + next.id + '"><div class="nlbl">পরের ইউনিট ▸</div>' +
             '<div class="ntxt">' + esc(next.title) + "</div></a>");
    } else {
      h.push('<a class="nnext" href="pruefung.html"><div class="nlbl">শেষ ধাপ ▸</div>' +
             '<div class="ntxt">মডেল পরীক্ষা দাও</div></a>');
    }
    h.push("</div>");

    return h.join("");
  }

  /* ---------- রাউটিং (hash) ---------- */
  var hub = document.getElementById("hub");
  var view = document.getElementById("unitView");

  function route() {
    var id = (location.hash || "").replace(/^#/, "");
    var idx = -1;
    for (var i = 0; i < K.length; i++) { if (K[i].id === id) { idx = i; break; } }

    if (idx === -1) {
      /* হোম — ইউনিট তালিকা */
      view.classList.add("hidden");
      view.innerHTML = "";
      hub.classList.remove("hidden");
      renderHub();
      document.title = "কোর্স — শূন্য থেকে ধাপে ধাপে জার্মান (A1 → A2) | Deutsch für Bangla";
    } else {
      hub.classList.add("hidden");
      view.classList.remove("hidden");
      view.innerHTML = renderUnit(K[idx], idx);
      document.title = K[idx].title + " — ইউনিট " + (idx + 1) + " | Deutsch für Bangla";
      /* নতুন কনটেন্টে 🔊 ও প্লেয়ার সক্রিয় করো */
      if (window.DFB && window.DFB.refresh) window.DFB.refresh();
      if (window.VPlayer && window.VPlayer.init) window.VPlayer.init();
      window.scrollTo(0, 0);
    }
    updateBar();
  }

  /* ইউনিট "শেষ" চিহ্ন */
  document.addEventListener("click", function (e) {
    var b = e.target.closest(".kurs-done");
    if (!b) return;
    var on = toggleDone(b.getAttribute("data-uid"));
    b.classList.toggle("is-done", on);
    b.textContent = on
      ? "✓ এই ইউনিট শেষ হয়েছে (আবার চাপলে বাদ যাবে)"
      : "এই ইউনিট শেষ — চিহ্নিত করো";
    updateBar();
  });

  window.addEventListener("hashchange", route);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", route);
  else route();
})();
