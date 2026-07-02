/* ===== Deutsch A1–B1 (Bangla) — App logic ===== */
(function () {
  "use strict";

  /* ---------- Text-to-Speech (German pronunciation) ---------- */
  let germanVoice = null;
  function pickVoice() {
    const voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    germanVoice =
      voices.find(v => /de[-_]DE/i.test(v.lang) && /google|microsoft|hedda|katja|conrad/i.test(v.name)) ||
      voices.find(v => /^de/i.test(v.lang)) || null;
  }
  if (window.speechSynthesis) {
    pickVoice();
    speechSynthesis.onvoiceschanged = pickVoice;
  }
  function speak(text) {
    if (!window.speechSynthesis) {
      alert("দুঃখিত, তোমার ব্রাউজার উচ্চারণ (voice) সাপোর্ট করে না। Chrome/Edge ব্যবহার করো।");
      return;
    }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "de-DE";
    if (germanVoice) u.voice = germanVoice;
    u.rate = 0.9;
    speechSynthesis.speak(u);
  }

  // Delegate: any element with [data-say] or class .say (uses previous German text)
  document.addEventListener("click", function (e) {
    const btn = e.target.closest("[data-say]");
    if (btn) {
      speak(btn.getAttribute("data-say"));
      return;
    }
    // reveal answers
    const rev = e.target.closest(".reveal");
    if (rev) {
      const ans = rev.parentElement.querySelector(".ans");
      if (ans) {
        ans.classList.toggle("show");
        rev.textContent = ans.classList.contains("show") ? "উত্তর লুকাও" : "উত্তর দেখাও ▸";
      }
      return;
    }
    // mark lesson done
    const md = e.target.closest(".mark-done");
    if (md) {
      const sec = md.closest("section.lesson");
      if (sec) toggleDone(sec.id, md);
    }
  });

  /* ---------- Auto-add 🔊 buttons to .de spans inside .ex and vocab ---------- */
  function autoSpeakButtons() {
    document.querySelectorAll(".ex .de, .vocab .de, .dialog .de, td .de.speakable").forEach(el => {
      if (el.dataset.noauto !== undefined) return;
      if (el.querySelector(".say")) return;
      const txt = el.getAttribute("data-text") || el.textContent.trim();
      if (!txt) return;
      const b = document.createElement("button");
      b.className = "say";
      b.type = "button";
      b.setAttribute("data-say", txt);
      b.textContent = "🔊";
      el.appendChild(document.createTextNode(" "));
      el.appendChild(b);
    });
  }

  /* ---------- Progress (localStorage) ---------- */
  const LS_KEY = "deutsch_progress_v1";
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(LS_KEY) || "{}"); } catch (_) { return {}; }
  }
  function saveProgress(p) { localStorage.setItem(LS_KEY, JSON.stringify(p)); }
  function toggleDone(id, btn) {
    if (!id) return;
    const p = loadProgress();
    p[id] = !p[id];
    saveProgress(p);
    applyDoneState();
    updateBar();
  }
  function applyDoneState() {
    const p = loadProgress();
    document.querySelectorAll("section.lesson").forEach(sec => {
      const done = !!p[sec.id];
      const btn = sec.querySelector(".mark-done");
      if (btn) {
        btn.classList.toggle("is-done", done);
        btn.textContent = done ? "✓ শেষ হয়েছে (আবার চাপলে বাদ যাবে)" : "এই লেসন শেষ — চিহ্নিত করো";
      }
      const toc = document.querySelector('.sidebar a[href="#' + sec.id + '"]');
      if (toc) toc.classList.toggle("done", done);
    });
  }
  function updateBar() {
    const total = document.querySelectorAll("section.lesson").length;
    if (!total) return;
    const p = loadProgress();
    const done = document.querySelectorAll("section.lesson").length
      ? Array.from(document.querySelectorAll("section.lesson")).filter(s => p[s.id]).length : 0;
    const bar = document.getElementById("progressFill");
    const label = document.getElementById("progressLabel");
    const pct = Math.round((done / total) * 100);
    if (bar) bar.style.width = pct + "%";
    if (label) label.textContent = done + " / " + total + " লেসন শেষ (" + pct + "%)";
  }

  /* ---------- Scroll-spy for sidebar ---------- */
  function scrollSpy() {
    const links = Array.from(document.querySelectorAll(".sidebar a[href^='#']"));
    if (!links.length) return;
    const map = {};
    links.forEach(a => { const id = a.getAttribute("href").slice(1); const el = document.getElementById(id); if (el) map[id] = a; });
    const obs = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          links.forEach(l => l.classList.remove("active"));
          const a = map[en.target.id];
          if (a) a.classList.add("active");
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    Object.keys(map).forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    autoSpeakButtons();
    applyDoneState();
    updateBar();
    scrollSpy();
  });
})();
