/* =========================================================================
   KURS — graded "from scratch to speaking" syllabus, Bangla-first.
   Topic sequence follows the Netzwerk neu A1/A2 chapter themes (order only).
   All words, example sentences, dialogues and exercises here are original.

   Item shape:
     d = Deutsch            b = বাংলা অর্থ (meaning — ALWAYS required)
     p = বাংলা উচ্চারণ (pronunciation respelling — ALWAYS required)
   Nothing German is ever shown without b + p. That is the whole point.
   ========================================================================= */
window.KURS = [

/* ============================ A1 · UNIT 1 ============================ */
{
  id: "u1", level: "A1", kap: 1,
  title: "Guten Tag!",
  title_bn: "শুভ দিন — সম্ভাষণ ও নিজের পরিচয়",
  minutes: 45,
  goal_bn: [
    "কাউকে জার্মানে সম্ভাষণ করতে ও বিদায় জানাতে পারবে",
    "নিজের নাম, দেশ ও শহর বলতে পারবে",
    "কারও নাম/দেশ জিজ্ঞেস করতে পারবে (du এবং Sie — দুইভাবে)",
    "নিজের নামের বানান (spelling) জার্মান বর্ণমালায় বলতে পারবে"
  ],
  kks: { vid: "4yMEYTa1U1Q", label: "Kapitel 01: Guten Tag — Netzwerk neu A1", len: "1:30:13" },
  kks_extra: [
    { vid: "fVkbebXzuAs", label: "ভিত্তি-পাঠ ০১: জার্মান বর্ণমালা (das Alphabet)", len: "7:48" },
    { vid: "PX23ETMFHpk", label: "ভিত্তি-পাঠ ০৭: সবচেয়ে দরকারি ২০টি বাক্য", len: "17:24" }
  ],

  words: [
    { d: "hallo",        p: "হালো",           b: "হ্যালো (বন্ধুদের মধ্যে)" },
    { d: "guten Morgen", p: "গুটেন মর্গেন",    b: "শুভ সকাল (~১০টা পর্যন্ত)" },
    { d: "guten Tag",    p: "গুটেন টাক",      b: "শুভ দিন (দিনের বেলা, ভদ্র)" },
    { d: "guten Abend",  p: "গুটেন আবেন্ট",   b: "শুভ সন্ধ্যা" },
    { d: "gute Nacht",   p: "গুটে নাখ্‌ট",     b: "শুভ রাত্রি (ঘুমাতে যাওয়ার সময়)" },
    { d: "tschüss",      p: "চুস",            b: "বিদায় (অনানুষ্ঠানিক)" },
    { d: "auf Wiedersehen", p: "আউফ ভীডারজেন", b: "বিদায় (ভদ্র/আনুষ্ঠানিক)" },
    { d: "bitte",        p: "বিটে",           b: "দয়া করে / এই নিন" },
    { d: "danke",        p: "ডাংকে",          b: "ধন্যবাদ" },
    { d: "ja / nein",    p: "ইয়া / নাইন",     b: "হ্যাঁ / না" },
    { d: "der Name",     p: "ডেয়ার নামে",     b: "নাম" },
    { d: "das Land",     p: "ডাস লান্ট",      b: "দেশ" },
    { d: "die Stadt",    p: "ডি শটাট",        b: "শহর" },
    { d: "Deutschland",  p: "ডয়েচলান্ট",     b: "জার্মানি" },
    { d: "Bangladesch",  p: "বাংলাদেশ",       b: "বাংলাদেশ" },
    { d: "heißen",       p: "হাইসেন",         b: "নাম হওয়া" },
    { d: "kommen",       p: "কমেন",           b: "আসা" },
    { d: "wohnen",       p: "ভোনেন",          b: "বাস করা / থাকা" },
    { d: "sprechen",     p: "শপ্রেশেন",       b: "বলা (ভাষা)" },
    { d: "sein",         p: "জাইন",           b: "হওয়া (am/is/are)" }
  ],

  phrases: [
    { d: "Ich heiße Karim.",          p: "ইশ্ হাইসে করিম",              b: "আমার নাম করিম।" },
    { d: "Mein Name ist Karim Rahman.", p: "মাইন নামে ইস্ট করিম রহমান",  b: "আমার নাম করিম রহমান। (একটু বেশি ভদ্র)" },
    { d: "Wie heißt du?",             p: "ভি হাইস্ট ডু",                b: "তোমার নাম কী? (অনানুষ্ঠানিক)" },
    { d: "Wie heißen Sie?",           p: "ভি হাইসেন জি",                b: "আপনার নাম কী? (ভদ্র)" },
    { d: "Ich komme aus Bangladesch.", p: "ইশ্ কমে আউস বাংলাদেশ",       b: "আমি বাংলাদেশ থেকে এসেছি।" },
    { d: "Woher kommst du?",          p: "ভোহেয়ার কম্স্ট ডু",           b: "তুমি কোথা থেকে এসেছ?" },
    { d: "Ich wohne in Dhaka.",       p: "ইশ্ ভোনে ইন ঢাকা",            b: "আমি ঢাকায় থাকি।" },
    { d: "Wo wohnen Sie?",            p: "ভো ভোনেন জি",                 b: "আপনি কোথায় থাকেন?" },
    { d: "Ich spreche Bengali und Englisch.", p: "ইশ্ শপ্রেশে বেঙ্গালি উন্ট এংলিশ", b: "আমি বাংলা ও ইংরেজি বলি।" },
    { d: "Ich lerne Deutsch.",        p: "ইশ্ লেয়ারনে ডয়েচ",           b: "আমি জার্মান শিখছি।" },
    { d: "Wie geht es dir?",          p: "ভি গেট এস ডীয়ার",            b: "তুমি কেমন আছো?" },
    { d: "Danke, gut. Und dir?",      p: "ডাংকে, গুট। উন্ট ডীয়ার",     b: "ধন্যবাদ, ভালো। আর তুমি?" },
    { d: "Entschuldigung!",           p: "এন্টশুলডিগুং",                b: "মাফ করবেন / এক্সকিউজ মি" },
    { d: "Ich verstehe nicht.",       p: "ইশ্ ফেয়ারশটেহে নিশ্ট",       b: "আমি বুঝতে পারছি না।" },
    { d: "Wie bitte?",                p: "ভি বিটে",                     b: "আবার বলুন তো? (শুনতে পাইনি)" },
    { d: "Können Sie das buchstabieren?", p: "ক্যোনেন জি ডাস বুখশটাবীরেন", b: "আপনি এটার বানান বলতে পারবেন?" }
  ],

  grammar: [
    {
      h: "১. du না Sie? — জার্মানে \"তুমি\" আর \"আপনি\"",
      body: "<p>বাংলায় যেমন <b>তুমি</b> আর <b>আপনি</b> আছে, জার্মানেও ঠিক তেমন আছে। এটা শুরুতেই ঠিকভাবে শিখে নাও — ভুল করলে অভদ্র শোনায়।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>রূপ</th><th>কার সাথে</th><th>উদাহরণ</th></tr>" +
      "<tr><td><b class='de'>du</b> (ডু)</td><td>বন্ধু, সমবয়সী, পরিবার, শিশু</td><td><span class='de'>Wie heißt <b>du</b>?</span></td></tr>" +
      "<tr><td><b class='de'>Sie</b> (জি)</td><td>অপরিচিত, বয়স্ক, দোকানদার, অফিস, ডাক্তার</td><td><span class='de'>Wie heißen <b>Sie</b>?</span></td></tr>" +
      "</table></div>" +
      "<div class='tip'><b>সহজ নিয়ম:</b> সন্দেহ হলে <b class='de'>Sie</b> ব্যবহার করো। ভদ্রতা কখনো ভুল হয় না।<br>আর মনে রাখো — ভদ্র <b class='de'>Sie</b> সবসময় <b>বড় হাতের S</b> দিয়ে লেখা হয়।</div>"
    },
    {
      h: "২. sein — সবচেয়ে জরুরি verb (হওয়া)",
      body: "<p>ইংরেজির <i>am / is / are</i> = জার্মানের <b class='de'>sein</b>। এটা অনিয়মিত, তাই মুখস্থ করতেই হবে। আজকের দিনে শুধু এই টেবিলটা গাঁথো।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>জার্মান</th><th>উচ্চারণ</th><th>বাংলা</th></tr>" +
      "<tr><td><span class='de speakable'>ich bin</span></td><td>ইশ্ বিন</td><td>আমি আছি/হই</td></tr>" +
      "<tr><td><span class='de speakable'>du bist</span></td><td>ডু বিস্ট</td><td>তুমি আছো</td></tr>" +
      "<tr><td><span class='de speakable'>er / sie / es ist</span></td><td>এয়ার / জি / এস ইস্ট</td><td>সে / এটা আছে</td></tr>" +
      "<tr><td><span class='de speakable'>wir sind</span></td><td>ভীয়ার জিন্ট</td><td>আমরা আছি</td></tr>" +
      "<tr><td><span class='de speakable'>ihr seid</span></td><td>ঈয়ার জাইট</td><td>তোমরা আছো</td></tr>" +
      "<tr><td><span class='de speakable'>sie / Sie sind</span></td><td>জি জিন্ট</td><td>তারা / আপনি আছেন</td></tr>" +
      "</table></div>" +
      "<p class='ex'><span class='de'>Ich bin Karim. Ich bin Student. Ich bin aus Bangladesch.</span><br><span class='bn'>আমি করিম। আমি ছাত্র। আমি বাংলাদেশ থেকে।</span></p>"
    },
    {
      h: "৩. নিয়মিত verb-এর শেষাংশ (Präsens)",
      body: "<p>জার্মান verb-এর শেষে কে কাজ করছে সেটা বোঝাতে <b>লেজ (ending)</b> বদলায়। <b class='de'>wohnen</b> (থাকা) থেকে <b class='de'>wohn-</b> নাও, তারপর লেজ লাগাও:</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>কে</th><th>লেজ</th><th>wohnen →</th><th>বাংলা</th></tr>" +
      "<tr><td>ich</td><td><b>-e</b></td><td><span class='de speakable'>ich wohne</span></td><td>আমি থাকি</td></tr>" +
      "<tr><td>du</td><td><b>-st</b></td><td><span class='de speakable'>du wohnst</span></td><td>তুমি থাকো</td></tr>" +
      "<tr><td>er/sie/es</td><td><b>-t</b></td><td><span class='de speakable'>er wohnt</span></td><td>সে থাকে</td></tr>" +
      "<tr><td>wir</td><td><b>-en</b></td><td><span class='de speakable'>wir wohnen</span></td><td>আমরা থাকি</td></tr>" +
      "<tr><td>ihr</td><td><b>-t</b></td><td><span class='de speakable'>ihr wohnt</span></td><td>তোমরা থাকো</td></tr>" +
      "<tr><td>sie/Sie</td><td><b>-en</b></td><td><span class='de speakable'>sie wohnen</span></td><td>তারা/আপনি থাকেন</td></tr>" +
      "</table></div>" +
      "<div class='note'>একই লেজ <b class='de'>kommen</b>, <b class='de'>lernen</b>, <b class='de'>spielen</b> — সব নিয়মিত verb-এ খাটে। একবার শিখলে শত শত verb পারবে।</div>"
    },
    {
      h: "৪. W-প্রশ্ন — প্রশ্নবোধক শব্দ প্রথমে",
      body: "<p>প্রশ্নবোধক শব্দ (W-Wort) <b>প্রথমে</b>, verb <b>দ্বিতীয়</b> — এই ছাঁদটা ধরো:</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>W-Wort</th><th>উচ্চারণ</th><th>মানে</th><th>প্রশ্ন</th></tr>" +
      "<tr><td><b class='de'>Wie</b></td><td>ভি</td><td>কেমন / কী (নাম)</td><td><span class='de'>Wie heißt du?</span></td></tr>" +
      "<tr><td><b class='de'>Woher</b></td><td>ভোহেয়ার</td><td>কোথা থেকে</td><td><span class='de'>Woher kommst du?</span></td></tr>" +
      "<tr><td><b class='de'>Wo</b></td><td>ভো</td><td>কোথায়</td><td><span class='de'>Wo wohnst du?</span></td></tr>" +
      "<tr><td><b class='de'>Was</b></td><td>ভাস</td><td>কী</td><td><span class='de'>Was lernst du?</span></td></tr>" +
      "<tr><td><b class='de'>Wer</b></td><td>ভেয়ার</td><td>কে</td><td><span class='de'>Wer ist das?</span></td></tr>" +
      "</table></div>" +
      "<div class='warn'><b class='de'>Wo</b> = কোথায় (জায়গা), <b class='de'>Woher</b> = কোথা থেকে (উৎস)। নতুনরা এই দুটো গুলিয়ে ফেলে — খেয়াল রাখো।</div>"
    },
    {
      h: "৫. বর্ণমালা ও বানান বলা (buchstabieren)",
      body: "<p>অফিসে, ডাক্তারের কাছে, ফোনে — তোমাকে বারবার নিজের নামের <b>বানান</b> বলতে হবে। শুধু এই অক্ষরগুলো জার্মানে আলাদা শোনায়, এগুলোই মূল ফাঁদ:</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>অক্ষর</th><th>জার্মানে বলা হয়</th><th>ফাঁদ</th></tr>" +
      "<tr><td><b class='de'>A · E · I</b></td><td>আ · এ · ঈ</td><td><b>I</b> = \"ঈ\", ইংরেজির \"আই\" নয়!</td></tr>" +
      "<tr><td><b class='de'>J</b></td><td>ইয়ট</td><td>\"জে\" নয়</td></tr>" +
      "<tr><td><b class='de'>V</b></td><td>ফাউ</td><td>\"ভি\" নয়</td></tr>" +
      "<tr><td><b class='de'>W</b></td><td>ভে</td><td>এটাই \"ভি\"-এর কাজ করে</td></tr>" +
      "<tr><td><b class='de'>Y</b></td><td>উপসিলন</td><td>—</td></tr>" +
      "<tr><td><b class='de'>Z</b></td><td>ৎসেট</td><td>\"জেড\" নয়</td></tr>" +
      "<tr><td><b class='de'>Ä · Ö · Ü</b></td><td>এ · অ্যো · উ্য</td><td>Umlaut — ঠোঁট গোল করো</td></tr>" +
      "<tr><td><b class='de'>ß</b></td><td>এসৎসেট</td><td>= ss</td></tr>" +
      "</table></div>" +
      "<div class='tip'>এখনই অভ্যাস করো: 🔊 চেপে নিজের নামের প্রতিটা অক্ষর জার্মানে জোরে বলো।</div>"
    }
  ],

  dialog: {
    title_bn: "সংলাপ — প্রথম আলাপ (ভদ্র রূপ, Sie)",
    lines: [
      { s: "Frau Klein", d: "Guten Tag! Mein Name ist Klein. Und Sie?", b: "শুভ দিন! আমার নাম ক্লাইন। আর আপনি?" },
      { s: "Karim",      d: "Guten Tag, Frau Klein. Ich heiße Karim Rahman.", b: "শুভ দিন, মিসেস ক্লাইন। আমার নাম করিম রহমান।" },
      { s: "Frau Klein", d: "Woher kommen Sie, Herr Rahman?", b: "আপনি কোথা থেকে এসেছেন, মিস্টার রহমান?" },
      { s: "Karim",      d: "Ich komme aus Bangladesch, aus Dhaka.", b: "আমি বাংলাদেশ থেকে, ঢাকা থেকে।" },
      { s: "Frau Klein", d: "Und wo wohnen Sie jetzt?", b: "আর এখন আপনি কোথায় থাকেন?" },
      { s: "Karim",      d: "Jetzt wohne ich in Berlin. Ich lerne Deutsch.", b: "এখন আমি বার্লিনে থাকি। আমি জার্মান শিখছি।" },
      { s: "Frau Klein", d: "Sehr gut! Auf Wiedersehen, Herr Rahman.", b: "খুব ভালো! বিদায়, মিস্টার রহমান।" },
      { s: "Karim",      d: "Auf Wiedersehen!", b: "বিদায়!" }
    ]
  },

  drills: [
    { q: "Wie ___ du? (নাম জিজ্ঞেস করো, অনানুষ্ঠানিক)", a: "heißt — Wie heißt du?" },
    { q: "Ich ___ aus Bangladesch. (kommen)", a: "komme — Ich komme aus Bangladesch." },
    { q: "Wir ___ in Berlin. (wohnen)", a: "wohnen — Wir wohnen in Berlin." },
    { q: "Er ___ Student. (sein)", a: "ist — Er ist Student." },
    { q: "___ wohnen Sie? (কোথায়?)", a: "Wo — Wo wohnen Sie?" },
    { q: "___ kommst du? (কোথা থেকে?)", a: "Woher — Woher kommst du?" },
    { q: "ভদ্র করে লেখো: \"আপনার নাম কী?\"", a: "Wie heißen Sie? / Wie ist Ihr Name?" },
    { q: "দোকানদারকে du বলা কি ঠিক?", a: "না। অপরিচিত কারও সাথে সবসময় Sie — Wie heißen Sie?" }
  ],

  speak_bn: [
    "আয়নার সামনে দাঁড়িয়ে ৫টা বাক্যে নিজের পরিচয় দাও: নাম → দেশ → শহর → ভাষা → কী শিখছ।",
    "একই পরিচয় এবার <b>Sie</b>-রূপে কাউকে জিজ্ঞেস করার মতো ৪টা প্রশ্ন বানাও।",
    "নিজের পুরো নামের বানান জার্মান অক্ষরে জোরে বলো — ৩ বার।"
  ]
},

/* ============================ A1 · UNIT 2 ============================ */
{
  id: "u2", level: "A1", kap: 2,
  title: "Freunde, Kollegen und ich",
  title_bn: "বন্ধু, সহকর্মী ও আমি — মানুষ, পেশা, সংখ্যা",
  minutes: 45,
  goal_bn: [
    "অন্য কারও সম্পর্কে বলতে পারবে (সে কে, কী করে, কোথায় থাকে)",
    "০–১০০ পর্যন্ত সংখ্যা ও নিজের বয়স/ফোন নম্বর বলতে পারবে",
    "পেশা জিজ্ঞেস করতে ও বলতে পারবে",
    "haben (থাকা/আছে) দিয়ে বাক্য বানাতে পারবে"
  ],
  kks: { vid: "mfOc9YKFN6s", label: "Kapitel 02: Freunde, Kollegen und ich — Netzwerk neu A1", len: "2:06:51" },
  kks_extra: [
    { vid: "EQ0v8gj-Sgs", label: "ভিত্তি-পাঠ ০৩: সংখ্যা ১–২০", len: "5:18" },
    { vid: "2rRmYlSsCHk", label: "ভিত্তি-পাঠ ০৪: সংখ্যা ২১–১০০ (উল্টো ছাঁদ!)", len: "8:48" }
  ],

  words: [
    { d: "der Freund / die Freundin", p: "ফ্রয়েন্ট / ফ্রয়েন্ডিন", b: "বন্ধু (পুরুষ / নারী)" },
    { d: "der Kollege / die Kollegin", p: "কলেগে / কলেগিন", b: "সহকর্মী (পুরুষ / নারী)" },
    { d: "der Mann",       p: "ডেয়ার মান",       b: "পুরুষ / স্বামী" },
    { d: "die Frau",       p: "ডি ফ্রাউ",         b: "নারী / স্ত্রী" },
    { d: "das Kind",       p: "ডাস কিন্ট",        b: "শিশু" },
    { d: "der Student / die Studentin", p: "শটুডেন্ট / শটুডেন্টিন", b: "বিশ্ববিদ্যালয়ের ছাত্র / ছাত্রী" },
    { d: "der Lehrer / die Lehrerin", p: "লেয়ারার / লেয়ারারিন", b: "শিক্ষক / শিক্ষিকা" },
    { d: "der Arzt / die Ärztin", p: "আর্ৎসট / এর্ৎসটিন", b: "ডাক্তার (পুরুষ / নারী)" },
    { d: "der Ingenieur",  p: "ইনজেনিয়োয়ার",    b: "ইঞ্জিনিয়ার" },
    { d: "der Beruf",      p: "ডেয়ার বেরুফ",     b: "পেশা" },
    { d: "die Arbeit",     p: "ডি আরবাইট",       b: "কাজ" },
    { d: "das Jahr",       p: "ডাস ইয়ার",        b: "বছর" },
    { d: "die Nummer",     p: "ডি নুমার",        b: "নম্বর" },
    { d: "die Telefonnummer", p: "টেলেফোন-নুমার", b: "ফোন নম্বর" },
    { d: "die Zeit",       p: "ডি ৎসাইট",        b: "সময়" },
    { d: "haben",          p: "হাবেন",           b: "থাকা / আছে" },
    { d: "arbeiten",       p: "আরবাইটেন",        b: "কাজ করা" },
    { d: "studieren",      p: "শটুডীরেন",        b: "বিশ্ববিদ্যালয়ে পড়া" },
    { d: "verheiratet",    p: "ফেয়ারহাইরাটেট",  b: "বিবাহিত" },
    { d: "ledig",          p: "লেডিশ",           b: "অবিবাহিত" }
  ],

  phrases: [
    { d: "Das ist mein Freund Rakib.", p: "ডাস ইস্ট মাইন ফ্রয়েন্ট রাকিব", b: "এ আমার বন্ধু রাকিব।" },
    { d: "Er ist Ingenieur.",         p: "এয়ার ইস্ট ইনজেনিয়োয়ার",      b: "সে ইঞ্জিনিয়ার।" },
    { d: "Sie arbeitet bei Siemens.", p: "জি আরবাইটেট বাই জীমেন্স",      b: "সে (মেয়ে) সিমেন্সে কাজ করে।" },
    { d: "Was sind Sie von Beruf?",   p: "ভাস জিন্ট জি ফন বেরুফ",        b: "আপনার পেশা কী?" },
    { d: "Ich bin Softwareentwickler.", p: "ইশ্ বিন সফ্টভেয়ার-এন্টভিক্লার", b: "আমি সফটওয়্যার ডেভেলপার।" },
    { d: "Wie alt bist du?",          p: "ভি আল্ট বিস্ট ডু",             b: "তোমার বয়স কত?" },
    { d: "Ich bin 28 Jahre alt.",     p: "ইশ্ বিন আখটুন্টৎসভানৎসিশ ইয়ারে আল্ট", b: "আমার বয়স ২৮ বছর।" },
    { d: "Wie ist deine Telefonnummer?", p: "ভি ইস্ট ডাইনে টেলেফোন-নুমার", b: "তোমার ফোন নম্বর কী?" },
    { d: "Ich habe zwei Kinder.",     p: "ইশ্ হাবে ৎসভাই কিন্ডার",       b: "আমার দুটো বাচ্চা আছে।" },
    { d: "Ich bin ledig.",            p: "ইশ্ বিন লেডিশ",                b: "আমি অবিবাহিত।" },
    { d: "Sie hat keine Zeit.",       p: "জি হাট কাইনে ৎসাইট",           b: "তার সময় নেই।" },
    { d: "Freut mich!",               p: "ফ্রয়েট মিশ",                  b: "পরিচিত হয়ে ভালো লাগল!" }
  ],

  grammar: [
    {
      h: "১. haben — থাকা / আছে",
      body: "<p><b class='de'>sein</b>-এর পর দ্বিতীয় সবচেয়ে দরকারি verb। এটাও অনিয়মিত।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>জার্মান</th><th>উচ্চারণ</th><th>বাংলা</th></tr>" +
      "<tr><td><span class='de speakable'>ich habe</span></td><td>ইশ্ হাবে</td><td>আমার আছে</td></tr>" +
      "<tr><td><span class='de speakable'>du hast</span></td><td>ডু হাস্ট</td><td>তোমার আছে</td></tr>" +
      "<tr><td><span class='de speakable'>er / sie / es hat</span></td><td>এয়ার হাট</td><td>তার আছে</td></tr>" +
      "<tr><td><span class='de speakable'>wir haben</span></td><td>ভীয়ার হাবেন</td><td>আমাদের আছে</td></tr>" +
      "<tr><td><span class='de speakable'>ihr habt</span></td><td>ঈয়ার হাব্‌ট</td><td>তোমাদের আছে</td></tr>" +
      "<tr><td><span class='de speakable'>sie / Sie haben</span></td><td>জি হাবেন</td><td>তাদের / আপনার আছে</td></tr>" +
      "</table></div>" +
      "<div class='warn'>বাংলায় আমরা বলি \"আমার একটা গাড়ি আছে\"। জার্মানে কর্তা হয় <b>আমি</b>: <span class='de'>Ich habe ein Auto.</span> — আক্ষরিক \"আমি একটা গাড়ি রাখি\"।</div>"
    },
    {
      h: "২. সংখ্যা ০–১০০",
      body: "<div class='tblwrap'><table>" +
      "<tr><th>সংখ্যা</th><th>জার্মান</th><th>উচ্চারণ</th></tr>" +
      "<tr><td>0 · 1 · 2</td><td><span class='de speakable'>null, eins, zwei</span></td><td>নুল · আইন্স · ৎসভাই</td></tr>" +
      "<tr><td>3 · 4 · 5</td><td><span class='de speakable'>drei, vier, fünf</span></td><td>ড্রাই · ফীয়ার · ফ্যুন্ফ</td></tr>" +
      "<tr><td>6 · 7 · 8</td><td><span class='de speakable'>sechs, sieben, acht</span></td><td>জেক্স · জীবেন · আখ্‌ট</td></tr>" +
      "<tr><td>9 · 10</td><td><span class='de speakable'>neun, zehn</span></td><td>নয়েন · ৎসেন</td></tr>" +
      "<tr><td>11 · 12</td><td><span class='de speakable'>elf, zwölf</span></td><td>এল্ফ · ৎসভ্যোল্ফ</td></tr>" +
      "<tr><td>13 → 19</td><td><span class='de speakable'>dreizehn, vierzehn, fünfzehn</span></td><td>সংখ্যা + <b>zehn</b> (ৎসেন)</td></tr>" +
      "<tr><td>20 · 30 · 40</td><td><span class='de speakable'>zwanzig, dreißig, vierzig</span></td><td>ৎসভানৎসিশ · ড্রাইসিশ · ফীয়ারৎসিশ</td></tr>" +
      "<tr><td>50 · 60 · 70</td><td><span class='de speakable'>fünfzig, sechzig, siebzig</span></td><td>ফ্যুন্ফৎসিশ · জেশৎসিশ · জীপৎসিশ</td></tr>" +
      "<tr><td>80 · 90 · 100</td><td><span class='de speakable'>achtzig, neunzig, hundert</span></td><td>আখৎসিশ · নয়েনৎসিশ · হুন্ডার্ট</td></tr>" +
      "</table></div>" +
      "<div class='tip'><b>সবচেয়ে বড় ফাঁদ — উল্টো করে বলা!</b> ২১ = \"এক-ও-বিশ\" = <span class='de speakable'>einundzwanzig</span>। ৩৪ = <span class='de speakable'>vierunddreißig</span>। ৮৭ = <span class='de speakable'>siebenundachtzig</span>।<br>ছাঁদ: <b>একক + und + দশক</b>, সব একসাথে এক শব্দে।</div>" +
      "<div class='note'>ফোন নম্বর কিন্তু একটা একটা অঙ্ক করে বলা হয়: 0171-345 → <span class='de speakable'>null eins sieben eins, drei vier fünf</span>।</div>"
    },
    {
      h: "৩. পেশায় \"একটা\" লাগে না",
      body: "<p>ইংরেজিতে বলি \"I am <i>a</i> teacher\"। জার্মানে পেশার আগে <b>কিছুই বসে না</b>:</p>" +
      "<p class='ex'><span class='de'>Ich bin Lehrer.</span> ✅ &nbsp;·&nbsp; <s>Ich bin ein Lehrer.</s> ❌<br><span class='bn'>আমি শিক্ষক।</span></p>" +
      "<p>মেয়েদের পেশায় শেষে <b>-in</b> যোগ হয়: <span class='de'>Lehrer → Lehrerin</span>, <span class='de'>Student → Studentin</span>, <span class='de'>Arzt → Ärztin</span>।</p>"
    },
    {
      h: "৪. তৃতীয় ব্যক্তির কথা বলা — er / sie / es",
      body: "<div class='tblwrap'><table>" +
      "<tr><th>বাংলা</th><th>জার্মান</th><th>মনে রাখার উপায়</th></tr>" +
      "<tr><td>সে (পুরুষ)</td><td><b class='de'>er</b> (এয়ার)</td><td>d<b>er</b> → <b>er</b></td></tr>" +
      "<tr><td>সে (নারী)</td><td><b class='de'>sie</b> (জি)</td><td>d<b>ie</b> → s<b>ie</b></td></tr>" +
      "<tr><td>এটা (বস্তু)</td><td><b class='de'>es</b> (এস)</td><td>da<b>s</b> → <b>es</b></td></tr>" +
      "<tr><td>তারা</td><td><b class='de'>sie</b> (জি)</td><td>verb-এ <b>-en</b> দেখলে বুঝবে \"তারা\"</td></tr>" +
      "</table></div>" +
      "<div class='warn'><b class='de'>sie</b> মানে \"সে (মেয়ে)\" আর \"তারা\" — দুটোই! কোনটা, বুঝবে verb দেখে: <span class='de'>sie ist</span> = সে আছে · <span class='de'>sie sind</span> = তারা আছে।</div>"
    }
  ],

  dialog: {
    title_bn: "সংলাপ — সহকর্মীর পরিচয় করিয়ে দেওয়া",
    lines: [
      { s: "Anna",  d: "Hallo Karim! Das ist meine Kollegin Sara.", b: "হ্যালো করিম! এ আমার সহকর্মী সারা।" },
      { s: "Karim", d: "Hallo Sara, freut mich! Was machst du hier?", b: "হ্যালো সারা, পরিচিত হয়ে ভালো লাগল! তুমি এখানে কী করো?" },
      { s: "Sara",  d: "Ich bin Ingenieurin. Und du?", b: "আমি ইঞ্জিনিয়ার। আর তুমি?" },
      { s: "Karim", d: "Ich bin Softwareentwickler. Ich arbeite seit zwei Jahren hier.", b: "আমি সফটওয়্যার ডেভেলপার। আমি দুই বছর ধরে এখানে কাজ করি।" },
      { s: "Sara",  d: "Interessant! Wie alt bist du, wenn ich fragen darf?", b: "চমৎকার! জিজ্ঞেস করতে পারি, তোমার বয়স কত?" },
      { s: "Karim", d: "Ich bin achtundzwanzig. Und hast du Kinder?", b: "আমি আঠাশ। আর তোমার বাচ্চা আছে?" },
      { s: "Sara",  d: "Ja, ich habe ein Kind. Es ist vier Jahre alt.", b: "হ্যাঁ, আমার একটা বাচ্চা আছে। ওর বয়স চার বছর।" }
    ]
  },

  drills: [
    { q: "কথায় লেখো: 21", a: "einundzwanzig (একক আগে, তারপর und, তারপর দশক)" },
    { q: "কথায় লেখো: 47", a: "siebenundvierzig" },
    { q: "কথায় লেখো: 93", a: "dreiundneunzig" },
    { q: "Ich ___ zwei Schwestern. (haben)", a: "habe — Ich habe zwei Schwestern." },
    { q: "___ du Zeit? (haben, প্রশ্ন)", a: "Hast — Hast du Zeit?" },
    { q: "ভুল ঠিক করো: Ich bin ein Lehrer.", a: "Ich bin Lehrer. — পেশার আগে ein বসে না।" },
    { q: "মেয়ে রূপ লেখো: der Arzt →", a: "die Ärztin" },
    { q: "\"সে (মেয়ে) হাসপাতালে কাজ করে\" — জার্মানে?", a: "Sie arbeitet im Krankenhaus." }
  ],

  speak_bn: [
    "তোমার ৩ জন পরিচিত মানুষের কথা জার্মানে বলো: নাম → পেশা → শহর → বয়স।",
    "নিজের ফোন নম্বরটা অঙ্ক ধরে ধরে জার্মানে ৩ বার জোরে বলো।",
    "২০ থেকে ৩০ পর্যন্ত জোরে গোনো — উল্টো ছাঁদটা (একক + und + দশক) মুখে বসাও।"
  ]
}

,

/* ============================ A1 · UNIT 3 ============================ */
{
  id: "u3", level: "A1", kap: 3,
  title: "In Hamburg",
  title_bn: "হামবুর্গে — শহর, der/die/das ও Akkusativ",
  minutes: 50,
  goal_bn: [
    "der / die / das ঠিকভাবে ব্যবহার করতে পারবে (জার্মানের সবচেয়ে বড় চ্যালেঞ্জ)",
    "শহরে কী কী আছে বলতে পারবে (es gibt …)",
    "Akkusativ কী, আর কখন der → den হয় বুঝবে",
    "\"নেই\" বলতে পারবে — kein / keine দিয়ে"
  ],
  kks: { vid: "GInIMuE8Vfw", label: "Kapitel 03: In Hamburg — Netzwerk neu A1", len: "1:35:01" },
  kks_extra: [
    { vid: "61bhweCzjbY", label: "ডের-ডাই-ডাস সমস্যার সমাধান (A1 ব্যাকরণ ০২)", len: "25:37" },
    { vid: "WiC073VDKRY", label: "der Artikel — der, die, das, ein, eine (A1 ব্যাকরণ ০১)", len: "9:18" }
  ],

  words: [
    { d: "die Stadt",      p: "ডি শটাট",         b: "শহর" },
    { d: "der Bahnhof",    p: "ডেয়ার বানহোফ",    b: "রেলস্টেশন" },
    { d: "der Flughafen",  p: "ডেয়ার ফ্লুকহাফেন", b: "বিমানবন্দর" },
    { d: "die Straße",     p: "ডি শট্রাসে",      b: "রাস্তা" },
    { d: "der Platz",      p: "ডেয়ার প্লাৎস",    b: "চত্বর / জায়গা" },
    { d: "das Hotel",      p: "ডাস হোটেল",       b: "হোটেল" },
    { d: "das Museum",     p: "ডাস মুজেউম",      b: "মিউজিয়াম" },
    { d: "der Park",       p: "ডেয়ার পার্ক",     b: "পার্ক" },
    { d: "die Kirche",     p: "ডি কির্শে",       b: "গির্জা" },
    { d: "der Markt",      p: "ডেয়ার মার্ক্ট",   b: "বাজার" },
    { d: "das Restaurant", p: "ডাস রেস্টোরাং",   b: "রেস্টুরেন্ট" },
    { d: "die Apotheke",   p: "ডি আপোটেকে",     b: "ফার্মেসি / ঔষধের দোকান" },
    { d: "die Bank",       p: "ডি বাংক",         b: "ব্যাংক" },
    { d: "das Kino",       p: "ডাস কিনো",        b: "সিনেমা হল" },
    { d: "die Brücke",     p: "ডি ব্র্যুকে",     b: "সেতু" },
    { d: "der Hafen",      p: "ডেয়ার হাফেন",     b: "বন্দর" },
    { d: "links / rechts", p: "লিংক্স / রেশ্‌টস", b: "বামে / ডানে" },
    { d: "geradeaus",      p: "গেরাডেআউস",       b: "সোজা সামনে" },
    { d: "suchen",         p: "জুখেন",           b: "খোঁজা" },
    { d: "finden",         p: "ফিনডেন",          b: "খুঁজে পাওয়া" }
  ],

  phrases: [
    { d: "Ich bin neu in Hamburg.",        p: "ইশ্ বিন নয় ইন হামবুর্গ",        b: "আমি হামবুর্গে নতুন।" },
    { d: "Was gibt es hier?",              p: "ভাস গিপ্ট এস হীয়ার",           b: "এখানে কী কী আছে?" },
    { d: "Hier gibt es einen Park.",       p: "হীয়ার গিপ্ট এস আইনেন পার্ক",    b: "এখানে একটা পার্ক আছে।" },
    { d: "Es gibt kein Kino hier.",        p: "এস গিপ্ট কাইন কিনো হীয়ার",     b: "এখানে কোনো সিনেমা হল নেই।" },
    { d: "Entschuldigung, wo ist der Bahnhof?", p: "এন্টশুলডিগুং, ভো ইস্ট ডেয়ার বানহোফ", b: "মাফ করবেন, রেলস্টেশন কোথায়?" },
    { d: "Ich suche eine Apotheke.",       p: "ইশ্ জুখে আইনে আপোটেকে",         b: "আমি একটা ফার্মেসি খুঁজছি।" },
    { d: "Gehen Sie geradeaus, dann links.", p: "গেয়েন জি গেরাডেআউস, ডান লিংক্স", b: "সোজা যান, তারপর বামে।" },
    { d: "Ist das weit?",                  p: "ইস্ট ডাস ভাইট",                 b: "এটা কি দূরে?" },
    { d: "Nein, nur fünf Minuten.",        p: "নাইন, নুয়ার ফ্যুন্ফ মিনুটেন",   b: "না, মাত্র পাঁচ মিনিট।" },
    { d: "Vielen Dank für die Hilfe!",     p: "ফীলেন ডাংক ফ্যুয়ার ডি হিলফে",   b: "সাহায্যের জন্য অনেক ধন্যবাদ!" }
  ],

  grammar: [
    {
      h: "১. der / die / das — জার্মানের তিনটি লিঙ্গ",
      body: "<p>জার্মানে প্রতিটা বিশেষ্যের একটা <b>লিঙ্গ</b> আছে, আর সেটা যুক্তি দিয়ে বোঝা যায় না — শব্দের সাথেই মুখস্থ করতে হয়।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>লিঙ্গ</th><th>নির্দিষ্ট (the)</th><th>অনির্দিষ্ট (a)</th><th>উদাহরণ</th></tr>" +
      "<tr><td>পুরুষবাচক (m)</td><td><b class='de'>der</b></td><td><b class='de'>ein</b></td><td><span class='de'>der Bahnhof</span></td></tr>" +
      "<tr><td>স্ত্রীবাচক (f)</td><td><b class='de'>die</b></td><td><b class='de'>eine</b></td><td><span class='de'>die Straße</span></td></tr>" +
      "<tr><td>ক্লীবলিঙ্গ (n)</td><td><b class='de'>das</b></td><td><b class='de'>ein</b></td><td><span class='de'>das Hotel</span></td></tr>" +
      "<tr><td>বহুবচন (pl)</td><td><b class='de'>die</b></td><td>— (কিছু নেই)</td><td><span class='de'>die Straßen</span></td></tr>" +
      "</table></div>" +
      "<div class='tip'><b>কাজে দেয় এমন নিয়ম</b> (১০০% নয়, তবে অনেক সাহায্য করে):<br>" +
      "• <b>-ung, -heit, -keit, -schaft, -ion, -e</b> শেষে → প্রায় সবসময় <b class='de'>die</b><br>" +
      "• <b>-chen, -lein, -ment, -um</b> শেষে → <b class='de'>das</b><br>" +
      "• <b>-er, -en, -ling</b> শেষে, আর দিন/মাস/ঋতু → <b class='de'>der</b></div>" +
      "<div class='warn'><b>সবচেয়ে জরুরি অভ্যাস:</b> নতুন শব্দ কখনো একা মুখস্থ করো না। সবসময় article সহ — \"<span class='de'>der</span> Bahnhof\", \"<span class='de'>die</span> Straße\"। এক শব্দ হিসেবে ভাবো।</div>"
    },
    {
      h: "২. বহুবচন (Plural) — সব বহুবচনেই die",
      body: "<p>ভালো খবর: বহুবচনে article সবসময় <b class='de'>die</b>। খারাপ খবর: শব্দের শেষ কীভাবে বদলায় তার ৫টা ধরন আছে।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>ধরন</th><th>উদাহরণ</th><th>বাংলা</th></tr>" +
      "<tr><td><b>-e</b></td><td><span class='de speakable'>der Tag → die Tage</span></td><td>দিন → দিনগুলো</td></tr>" +
      "<tr><td><b>-en / -n</b></td><td><span class='de speakable'>die Straße → die Straßen</span></td><td>রাস্তা → রাস্তাগুলো</td></tr>" +
      "<tr><td><b>-er</b> (+ Umlaut)</td><td><span class='de speakable'>das Kind → die Kinder</span></td><td>শিশু → শিশুরা</td></tr>" +
      "<tr><td><b>-s</b></td><td><span class='de speakable'>das Hotel → die Hotels</span></td><td>হোটেল → হোটেলগুলো</td></tr>" +
      "<tr><td>শুধু Umlaut</td><td><span class='de speakable'>der Vater → die Väter</span></td><td>বাবা → বাবারা</td></tr>" +
      "</table></div>" +
      "<div class='note'>নিয়ম খুঁজে সময় নষ্ট করো না — শব্দের সাথেই বহুবচনটা শিখে ফেলো: <b class='de'>das Kind, die Kinder</b>।</div>"
    },
    {
      h: "৩. Akkusativ — কর্মপদ (শুধু der বদলায়!)",
      body: "<p>বাক্যে যে জিনিসটার <b>উপর কাজ পড়ে</b> সেটা Akkusativ। বাংলায় আমরা \"-কে/-টা\" দিয়ে বোঝাই।</p>" +
      "<p class='ex'><span class='de'>Ich suche <b>den</b> Bahnhof.</span><br><span class='bn'>আমি রেলস্টেশন<b>টা</b> খুঁজছি। (কাজ পড়ছে স্টেশনের উপর)</span></p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th></th><th>Nominativ (কর্তা)</th><th>Akkusativ (কর্ম)</th></tr>" +
      "<tr><td>m</td><td><span class='de'>der / ein</span></td><td><b class='de'>den / einen</b> ⚠️ বদলায়</td></tr>" +
      "<tr><td>f</td><td><span class='de'>die / eine</span></td><td><span class='de'>die / eine</span> ✅ একই</td></tr>" +
      "<tr><td>n</td><td><span class='de'>das / ein</span></td><td><span class='de'>das / ein</span> ✅ একই</td></tr>" +
      "<tr><td>pl</td><td><span class='de'>die</span></td><td><span class='de'>die</span> ✅ একই</td></tr>" +
      "</table></div>" +
      "<div class='tip'><b>সুখবর!</b> Akkusativ-এ <b>শুধু পুরুষবাচক (der)</b> বদলায় → <b class='de'>den</b>। die/das/die একদম অপরিবর্তিত। তাই মাত্র একটা জিনিস মনে রাখলেই চলবে: <b>der → den</b>, <b>ein → einen</b>।</div>"
    },
    {
      h: "৪. es gibt — \"আছে\" বলার উপায়",
      body: "<p><b class='de'>es gibt</b> (এস গিপ্ট) = \"আছে / বিদ্যমান\"। এর পরে <b>সবসময় Akkusativ</b> বসে।</p>" +
      "<p class='ex'><span class='de'>In Hamburg gibt es <b>einen</b> Hafen, <b>eine</b> Brücke und <b>ein</b> Museum.</span><br><span class='bn'>হামবুর্গে একটা বন্দর, একটা সেতু আর একটা মিউজিয়াম আছে।</span></p>" +
      "<div class='note'>খেয়াল করো: <b class='de'>einen</b> Hafen (m → Akkusativ তাই einen), কিন্তু <b class='de'>eine</b> Brücke আর <b class='de'>ein</b> Museum অপরিবর্তিত।</div>"
    },
    {
      h: "৫. kein / keine — \"কোনো … নেই\"",
      body: "<p>বিশেষ্যকে \"না\" করতে <b class='de'>nicht</b> নয়, <b class='de'>kein</b> ব্যবহার করো। এটা <b class='de'>ein</b>-এর মতোই চলে।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>লিঙ্গ</th><th>Nominativ</th><th>Akkusativ</th><th>উদাহরণ</th></tr>" +
      "<tr><td>m</td><td><span class='de'>kein</span></td><td><b class='de'>keinen</b></td><td><span class='de'>Ich habe keinen Hunger.</span></td></tr>" +
      "<tr><td>f</td><td><span class='de'>keine</span></td><td><span class='de'>keine</span></td><td><span class='de'>Ich habe keine Zeit.</span></td></tr>" +
      "<tr><td>n</td><td><span class='de'>kein</span></td><td><span class='de'>kein</span></td><td><span class='de'>Es gibt kein Kino.</span></td></tr>" +
      "<tr><td>pl</td><td><span class='de'>keine</span></td><td><span class='de'>keine</span></td><td><span class='de'>Ich habe keine Kinder.</span></td></tr>" +
      "</table></div>" +
      "<div class='warn'><b>কখন kein, কখন nicht?</b><br>• বিশেষ্য না করতে → <b class='de'>kein</b>: <span class='de'>Das ist kein Hotel.</span><br>• verb/বিশেষণ/বাকি সব না করতে → <b class='de'>nicht</b>: <span class='de'>Ich komme nicht.</span> · <span class='de'>Das ist nicht gut.</span></div>"
    }
  ],

  dialog: {
    title_bn: "সংলাপ — রাস্তায় পথ জিজ্ঞেস করা",
    lines: [
      { s: "Karim",  d: "Entschuldigung, ich suche den Bahnhof.", b: "মাফ করবেন, আমি রেলস্টেশনটা খুঁজছি।" },
      { s: "Passant", d: "Der Bahnhof? Gehen Sie hier geradeaus.", b: "রেলস্টেশন? এখান থেকে সোজা যান।" },
      { s: "Karim",  d: "Und dann?", b: "আর তারপর?" },
      { s: "Passant", d: "Dann nehmen Sie die zweite Straße links.", b: "তারপর বাঁ দিকের দ্বিতীয় রাস্তাটা নিন।" },
      { s: "Karim",  d: "Ist das weit? Ich habe nicht viel Zeit.", b: "এটা কি দূরে? আমার হাতে বেশি সময় নেই।" },
      { s: "Passant", d: "Nein, nur fünf Minuten zu Fuß.", b: "না, হেঁটে মাত্র পাঁচ মিনিট।" },
      { s: "Karim",  d: "Gibt es dort auch eine Apotheke?", b: "সেখানে একটা ফার্মেসিও আছে?" },
      { s: "Passant", d: "Ja, neben dem Bahnhof. Aber ein Kino gibt es dort nicht.", b: "হ্যাঁ, স্টেশনের পাশে। কিন্তু সেখানে সিনেমা হল নেই।" },
      { s: "Karim",  d: "Vielen Dank für die Hilfe!", b: "সাহায্যের জন্য অনেক ধন্যবাদ!" }
    ]
  },

  drills: [
    { q: "Article বসাও: ___ Bahnhof", a: "der Bahnhof" },
    { q: "Article বসাও: ___ Straße", a: "die Straße (-e শেষে → die)" },
    { q: "Article বসাও: ___ Museum", a: "das Museum (-um শেষে → das)" },
    { q: "Akkusativ: Ich suche ___ Bahnhof. (der)", a: "den — Ich suche den Bahnhof." },
    { q: "Akkusativ: Ich suche ___ Apotheke. (die)", a: "die — die বদলায় না।" },
    { q: "Es gibt ___ Park. (ein, m → Akkusativ)", a: "einen — Es gibt einen Park." },
    { q: "\"এখানে কোনো হোটেল নেই\" — জার্মানে?", a: "Hier gibt es kein Hotel." },
    { q: "kein না nicht: Ich habe ___ Zeit.", a: "keine — Zeit একটা বিশেষ্য, তাই keine (f)।" },
    { q: "kein না nicht: Das ist ___ gut.", a: "nicht — gut একটা বিশেষণ, তাই nicht।" }
  ],

  speak_bn: [
    "তোমার শহর নিয়ে ৫টা বাক্য বলো: <span class='de'>In meiner Stadt gibt es …</span> (Akkusativ খেয়াল রাখো!)",
    "৩টা জায়গার পথ জিজ্ঞেস করার অভ্যাস করো: <span class='de'>Entschuldigung, wo ist …?</span>",
    "আজকের ২০টা শব্দ article সহ জোরে বলো — \"der Bahnhof\", \"die Straße\" — এক শব্দের মতো।"
  ]
},

/* ============================ A1 · UNIT 4 ============================ */
{
  id: "u4", level: "A1", kap: 4,
  title: "Guten Appetit!",
  title_bn: "খাওয়া-দাওয়া — খাবার, অর্ডার ও পছন্দ",
  minutes: 45,
  goal_bn: [
    "রেস্টুরেন্টে খাবার অর্ডার করতে পারবে",
    "কী পছন্দ, কী পছন্দ না বলতে পারবে (gern / lieber / mögen)",
    "দোকানে দাম জিজ্ঞেস করতে ও কিনতে পারবে",
    "ভদ্রভাবে চাইতে পারবে — ich möchte দিয়ে"
  ],
  kks: { vid: "WsjbR611wtQ", label: "Kapitel 04: Guten Appetit! — Netzwerk neu A1", len: "1:58:08" },

  words: [
    { d: "das Brot",     p: "ডাস ব্রোট",      b: "রুটি" },
    { d: "das Brötchen", p: "ডাস ব্র্যোটশেন", b: "ছোট গোল পাউরুটি" },
    { d: "die Butter",   p: "ডি বুটার",       b: "মাখন" },
    { d: "der Käse",     p: "ডেয়ার কেজে",     b: "পনির" },
    { d: "das Ei",       p: "ডাস আই",         b: "ডিম" },
    { d: "die Milch",    p: "ডি মিল্শ",       b: "দুধ" },
    { d: "der Kaffee",   p: "ডেয়ার কাফে",     b: "কফি" },
    { d: "der Tee",      p: "ডেয়ার টে",       b: "চা" },
    { d: "das Wasser",   p: "ডাস ভাসার",      b: "পানি" },
    { d: "der Reis",     p: "ডেয়ার রাইস",     b: "ভাত / চাল" },
    { d: "das Fleisch",  p: "ডাস ফ্লাইশ",     b: "মাংস" },
    { d: "das Hähnchen", p: "ডাস হেনশেন",     b: "মুরগি (খাবার)" },
    { d: "der Fisch",    p: "ডেয়ার ফিশ",      b: "মাছ" },
    { d: "das Gemüse",   p: "ডাস গেম্যুজে",   b: "সবজি" },
    { d: "das Obst",     p: "ডাস ওপ্স্ট",     b: "ফল" },
    { d: "der Apfel",    p: "ডেয়ার আপফেল",    b: "আপেল" },
    { d: "die Kartoffel",p: "ডি কার্টফেল",    b: "আলু" },
    { d: "der Zucker",   p: "ডেয়ার ৎসুকার",   b: "চিনি" },
    { d: "das Salz",     p: "ডাস জাল্ৎস",     b: "লবণ" },
    { d: "die Rechnung", p: "ডি রেশনুং",      b: "বিল" },
    { d: "essen",        p: "এসেন",           b: "খাওয়া" },
    { d: "trinken",      p: "ট্রিংকেন",       b: "পান করা" },
    { d: "kosten",       p: "কস্টেন",         b: "দাম হওয়া" },
    { d: "lecker",       p: "লেকার",          b: "সুস্বাদু" }
  ],

  phrases: [
    { d: "Ich möchte einen Kaffee, bitte.", p: "ইশ্ ম্যোশটে আইনেন কাফে, বিটে", b: "আমি একটা কফি চাই, দয়া করে।" },
    { d: "Was möchten Sie trinken?",       p: "ভাস ম্যোশটেন জি ট্রিংকেন",     b: "আপনি কী পান করতে চান?" },
    { d: "Ich nehme den Fisch.",           p: "ইশ্ নেমে ডেন ফিশ",             b: "আমি মাছটা নিচ্ছি।" },
    { d: "Ich esse gern Reis.",            p: "ইশ্ এসে গের্ন রাইস",           b: "আমি ভাত খেতে পছন্দ করি।" },
    { d: "Ich trinke lieber Tee.",         p: "ইশ্ ট্রিংকে লীবার টে",          b: "আমি বরং চা পান করতে বেশি পছন্দ করি।" },
    { d: "Ich mag kein Fleisch.",          p: "ইশ্ মাক কাইন ফ্লাইশ",          b: "আমি মাংস পছন্দ করি না।" },
    { d: "Was kostet das?",                p: "ভাস কস্টেট ডাস",               b: "এটার দাম কত?" },
    { d: "Das kostet drei Euro fünfzig.",  p: "ডাস কস্টেট ড্রাই অয়রো ফ্যুন্ফৎসিশ", b: "এটার দাম তিন ইউরো পঞ্চাশ।" },
    { d: "Die Rechnung, bitte!",           p: "ডি রেশনুং, বিটে",              b: "বিলটা দিন, দয়া করে!" },
    { d: "Das war sehr lecker!",           p: "ডাস ভার জেয়ার লেকার",          b: "এটা খুব সুস্বাদু ছিল!" },
    { d: "Guten Appetit!",                 p: "গুটেন আপেটিট",                 b: "খাওয়া ভালো হোক! (খাওয়ার আগে বলা হয়)" },
    { d: "Zusammen oder getrennt?",        p: "ৎসুজামেন ওডার গেট্রেন্ট",      b: "একসাথে না আলাদা? (বিল দেওয়ার সময়)" }
  ],

  grammar: [
    {
      h: "১. ich möchte — ভদ্রভাবে চাওয়া (সবচেয়ে দরকারি ছাঁদ!)",
      body: "<p>দোকানে, রেস্টুরেন্টে, অফিসে — সব জায়গায় এটাই লাগবে। <b class='de'>möchte</b> মানে \"চাই\" কিন্তু ভদ্রভাবে।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>জার্মান</th><th>উচ্চারণ</th><th>বাংলা</th></tr>" +
      "<tr><td><span class='de speakable'>ich möchte</span></td><td>ইশ্ ম্যোশটে</td><td>আমি চাই</td></tr>" +
      "<tr><td><span class='de speakable'>du möchtest</span></td><td>ডু ম্যোশটেস্ট</td><td>তুমি চাও</td></tr>" +
      "<tr><td><span class='de speakable'>er / sie möchte</span></td><td>এয়ার ম্যোশটে</td><td>সে চায়</td></tr>" +
      "<tr><td><span class='de speakable'>wir möchten</span></td><td>ভীয়ার ম্যোশটেন</td><td>আমরা চাই</td></tr>" +
      "<tr><td><span class='de speakable'>Sie möchten</span></td><td>জি ম্যোশটেন</td><td>আপনি চান</td></tr>" +
      "</table></div>" +
      "<div class='warn'>খেয়াল করো — <b class='de'>ich möchte</b>, <b class='de'>er möchte</b>: ich আর er দুটোতেই একই রূপ, কোনো <b>-t</b> লাগে না। এটাই modal verb-এর ছাঁদ (পরের ইউনিটে বিস্তারিত)।</div>" +
      "<div class='tip'><b class='de'>Ich will einen Kaffee</b> বললে একটু কড়া শোনায় (\"আমি কফি চাই-ই\")। দোকানে সবসময় <b class='de'>Ich möchte …, bitte</b> বলো।</div>"
    },
    {
      h: "২. gern / lieber / am liebsten — পছন্দ বলা",
      body: "<p>জার্মানে \"পছন্দ করা\" বোঝাতে আলাদা verb লাগে না। verb-এর পরে <b class='de'>gern</b> বসিয়ে দাও!</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>মাত্রা</th><th>শব্দ</th><th>উদাহরণ</th><th>বাংলা</th></tr>" +
      "<tr><td>পছন্দ</td><td><b class='de'>gern</b></td><td><span class='de speakable'>Ich esse gern Fisch.</span></td><td>আমি মাছ খেতে পছন্দ করি।</td></tr>" +
      "<tr><td>বেশি পছন্দ</td><td><b class='de'>lieber</b></td><td><span class='de speakable'>Ich esse lieber Hähnchen.</span></td><td>আমি বরং মুরগি বেশি পছন্দ করি।</td></tr>" +
      "<tr><td>সবচেয়ে পছন্দ</td><td><b class='de'>am liebsten</b></td><td><span class='de speakable'>Am liebsten esse ich Reis.</span></td><td>সবচেয়ে বেশি পছন্দ ভাত।</td></tr>" +
      "<tr><td>পছন্দ না</td><td><b class='de'>nicht gern</b></td><td><span class='de speakable'>Ich trinke nicht gern Milch.</span></td><td>আমি দুধ পান করতে পছন্দ করি না।</td></tr>" +
      "</table></div>" +
      "<div class='note'>এই একটা ছাঁদ দিয়েই তুমি নিজের সব পছন্দ-অপছন্দ বলতে পারবে — খাবার, গান, খেলা, কাজ, সব।</div>"
    },
    {
      h: "৩. mögen — পছন্দ করা (বস্তুর জন্য)",
      body: "<p><b class='de'>gern</b> কাজের সাথে বসে (খেতে পছন্দ করি)। কিন্তু সরাসরি <b>জিনিসটা</b> পছন্দ বলতে <b class='de'>mögen</b> লাগে।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><td><span class='de speakable'>ich mag</span> (ইশ্ মাক)</td><td>আমি পছন্দ করি</td></tr>" +
      "<tr><td><span class='de speakable'>du magst</span> (ডু মাক্স্ট)</td><td>তুমি পছন্দ করো</td></tr>" +
      "<tr><td><span class='de speakable'>er / sie mag</span></td><td>সে পছন্দ করে</td></tr>" +
      "<tr><td><span class='de speakable'>wir / sie mögen</span> (ম্যোগেন)</td><td>আমরা / তারা পছন্দ করি</td></tr>" +
      "</table></div>" +
      "<p class='ex'><span class='de'>Ich mag Käse, aber ich mag kein Fleisch.</span><br><span class='bn'>আমি পনির পছন্দ করি, কিন্তু মাংস পছন্দ করি না।</span></p>"
    },
    {
      h: "৪. দাম ও পরিমাণ",
      body: "<div class='tblwrap'><table>" +
      "<tr><th>জার্মান</th><th>উচ্চারণ</th><th>বাংলা</th></tr>" +
      "<tr><td><span class='de speakable'>ein Kilo Reis</span></td><td>আইন কিলো রাইস</td><td>এক কিলো চাল</td></tr>" +
      "<tr><td><span class='de speakable'>ein halbes Kilo</span></td><td>আইন হালবেস কিলো</td><td>আধা কিলো</td></tr>" +
      "<tr><td><span class='de speakable'>eine Flasche Wasser</span></td><td>আইনে ফ্লাশে ভাসার</td><td>এক বোতল পানি</td></tr>" +
      "<tr><td><span class='de speakable'>eine Tasse Kaffee</span></td><td>আইনে টাসে কাফে</td><td>এক কাপ কফি</td></tr>" +
      "<tr><td><span class='de speakable'>ein Glas Milch</span></td><td>আইন গ্লাস মিল্শ</td><td>এক গ্লাস দুধ</td></tr>" +
      "<tr><td><span class='de speakable'>ein Stück Kuchen</span></td><td>আইন শট্যুক কুখেন</td><td>এক টুকরো কেক</td></tr>" +
      "</table></div>" +
      "<div class='tip'>দাম বলার ছাঁদ: <b>3,50 €</b> → <span class='de speakable'>drei Euro fünfzig</span>। জার্মানে দশমিকে <b>কমা</b> ব্যবহার হয়, ডট নয়।</div>"
    }
  ],

  dialog: {
    title_bn: "সংলাপ — রেস্টুরেন্টে অর্ডার",
    lines: [
      { s: "Kellner", d: "Guten Tag! Was möchten Sie trinken?", b: "শুভ দিন! আপনি কী পান করতে চান?" },
      { s: "Karim",   d: "Guten Tag. Ich möchte ein Wasser, bitte.", b: "শুভ দিন। আমি একটা পানি চাই, দয়া করে।" },
      { s: "Kellner", d: "Und zum Essen? Wir haben heute frischen Fisch.", b: "আর খাওয়ার জন্য? আজ আমাদের কাছে তাজা মাছ আছে।" },
      { s: "Karim",   d: "Ich esse nicht gern Fisch. Haben Sie Hähnchen mit Reis?", b: "আমি মাছ খেতে পছন্দ করি না। আপনাদের কাছে ভাতের সাথে মুরগি আছে?" },
      { s: "Kellner", d: "Ja, natürlich. Möchten Sie auch Gemüse dazu?", b: "হ্যাঁ, অবশ্যই। সাথে সবজিও চান?" },
      { s: "Karim",   d: "Ja, gern. Was kostet das zusammen?", b: "হ্যাঁ, খুশি হয়ে। সব মিলিয়ে দাম কত?" },
      { s: "Kellner", d: "Zwölf Euro neunzig.", b: "বারো ইউরো নব্বই।" },
      { s: "Karim",   d: "Gut, danke!", b: "ঠিক আছে, ধন্যবাদ!" },
      { s: "Kellner", d: "Guten Appetit!", b: "খাওয়া ভালো হোক!" },
      { s: "Karim",   d: "Später: Die Rechnung, bitte! Das war sehr lecker.", b: "পরে: বিলটা দিন! খুব সুস্বাদু ছিল।" }
    ]
  },

  drills: [
    { q: "Ich ___ einen Kaffee, bitte. (möchten)", a: "möchte — Ich möchte einen Kaffee, bitte." },
    { q: "Er ___ einen Tee. (möchten)", a: "möchte — er-এর সাথেও möchte, কোনো -t নেই।" },
    { q: "\"আমি ভাত খেতে পছন্দ করি\" — জার্মানে?", a: "Ich esse gern Reis." },
    { q: "\"আমি বরং চা পান করি\" — জার্মানে?", a: "Ich trinke lieber Tee." },
    { q: "Ich ___ keinen Käse. (mögen)", a: "mag — Ich mag keinen Käse." },
    { q: "Akkusativ: Ich nehme ___ Fisch. (der)", a: "den — Ich nehme den Fisch." },
    { q: "\"এটার দাম কত?\" — জার্মানে?", a: "Was kostet das?" },
    { q: "4,20 € কথায় বলো", a: "vier Euro zwanzig" }
  ],

  speak_bn: [
    "একটা পুরো রেস্টুরেন্ট অর্ডার নিজে অভিনয় করো: সম্ভাষণ → পানীয় → খাবার → দাম → বিল।",
    "৫টা খাবার নিয়ে <span class='de'>gern / lieber / nicht gern</span> দিয়ে নিজের পছন্দ বলো।",
    "রান্নাঘরে গিয়ে যা যা দেখো, article সহ জার্মানে নাম বলো — <span class='de'>das Salz, der Zucker …</span>"
  ]
},

/* ============================ A1 · UNIT 5 ============================ */
{
  id: "u5", level: "A1", kap: 5,
  title: "Alltag und Familie",
  title_bn: "দৈনন্দিন জীবন ও পরিবার — সময়, রুটিন, mein/dein",
  minutes: 50,
  goal_bn: [
    "নিজের পরিবারের কথা বলতে পারবে (mein Vater, meine Mutter …)",
    "ঘড়ির সময় বলতে ও জিজ্ঞেস করতে পারবে",
    "নিজের দৈনন্দিন রুটিন বর্ণনা করতে পারবে",
    "বিচ্ছিন্নযোগ্য verb (aufstehen, einkaufen) ব্যবহার করতে পারবে"
  ],
  kks: { vid: "W6kinL6XUzw", label: "Kapitel 05: Alltag und Familie — Netzwerk neu A1", len: "1:27:09" },
  kks_extra: [
    { vid: "BfzkKTzvUwM", label: "অধিকারবাচক শব্দ — mein, dein, sein, ihr (A1 ব্যাকরণ ০৬)", len: "27:12" },
    { vid: "QRuvNIVzfHw", label: "ভিত্তি-পাঠ ০২: সপ্তাহের সাত বার", len: "4:52" },
    { vid: "5FMamZgEmKo", label: "ভিত্তি-পাঠ ০৫: ঘড়ির সময় (halb-এর ফাঁদ)", len: "11:37" }
  ],

  words: [
    { d: "die Familie",   p: "ডি ফামিলিয়ে",    b: "পরিবার" },
    { d: "der Vater",     p: "ডেয়ার ফাটার",     b: "বাবা" },
    { d: "die Mutter",    p: "ডি মুটার",        b: "মা" },
    { d: "die Eltern",    p: "ডি এল্টার্ন",     b: "মা-বাবা (সবসময় বহুবচন)" },
    { d: "der Bruder",    p: "ডেয়ার ব্রুডার",   b: "ভাই" },
    { d: "die Schwester", p: "ডি শভেস্টার",    b: "বোন" },
    { d: "der Sohn",      p: "ডেয়ার জোন",       b: "ছেলে (সন্তান)" },
    { d: "die Tochter",   p: "ডি টখটার",       b: "মেয়ে (সন্তান)" },
    { d: "der Morgen",    p: "ডেয়ার মর্গেন",    b: "সকাল" },
    { d: "der Abend",     p: "ডেয়ার আবেন্ট",    b: "সন্ধ্যা" },
    { d: "die Uhr",       p: "ডি উয়ার",         b: "ঘড়ি / টা (সময়)" },
    { d: "aufstehen",     p: "আউফশটেন",        b: "ঘুম থেকে ওঠা" },
    { d: "frühstücken",   p: "ফ্র্যুশট্যুকেন", b: "নাশতা করা" },
    { d: "einkaufen",     p: "আইনকাউফেন",      b: "বাজার করা" },
    { d: "aufräumen",     p: "আউফরয়মেন",       b: "গোছানো / পরিষ্কার করা" },
    { d: "fernsehen",     p: "ফের্নজেয়েন",     b: "টিভি দেখা" },
    { d: "schlafen",      p: "শ্লাফেন",        b: "ঘুমানো" },
    { d: "kochen",        p: "কখেন",           b: "রান্না করা" },
    { d: "immer / oft",   p: "ইমার / অফ্ট",    b: "সবসময় / প্রায়ই" },
    { d: "manchmal / nie",p: "মানশমাল / নী",   b: "মাঝে মাঝে / কখনো না" }
  ],

  phrases: [
    { d: "Das ist meine Familie.",        p: "ডাস ইস্ট মাইনে ফামিলিয়ে",    b: "এটা আমার পরিবার।" },
    { d: "Mein Vater ist Lehrer.",        p: "মাইন ফাটার ইস্ট লেয়ারার",    b: "আমার বাবা শিক্ষক।" },
    { d: "Ich habe zwei Schwestern.",     p: "ইশ্ হাবে ৎসভাই শভেস্টার্ন",   b: "আমার দুই বোন আছে।" },
    { d: "Wie viel Uhr ist es?",          p: "ভি ফীল উয়ার ইস্ট এস",        b: "এখন কয়টা বাজে?" },
    { d: "Es ist halb acht.",             p: "এস ইস্ট হালব আখ্‌ট",         b: "সাতটা ত্রিশ। (সাবধান — \"আটের অর্ধেক\"!)" },
    { d: "Ich stehe um sechs Uhr auf.",   p: "ইশ্ শটেয়ে উম জেক্স উয়ার আউফ", b: "আমি ছয়টায় ঘুম থেকে উঠি।" },
    { d: "Wann fängst du an?",            p: "ভান ফেংস্ট ডু আন",           b: "তুমি কখন শুরু করো?" },
    { d: "Am Montag arbeite ich.",        p: "আম মোনটাক আরবাইটে ইশ্",      b: "সোমবার আমি কাজ করি।" },
    { d: "Ich kaufe am Samstag ein.",     p: "ইশ্ কাউফে আম জামস্টাক আইন",   b: "আমি শনিবার বাজার করি।" },
    { d: "Abends sehe ich fern.",         p: "আবেন্ট্স জেয়ে ইশ্ ফের্ন",     b: "সন্ধ্যায় আমি টিভি দেখি।" }
  ],

  grammar: [
    {
      h: "১. Possessivartikel — আমার, তোমার, তার",
      body: "<p>এগুলো <b class='de'>ein</b>-এর মতোই চলে: পুরুষ/ক্লীব-এ লেজ নেই, স্ত্রী/বহুবচনে <b>-e</b>।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>কার</th><th>মূল রূপ</th><th>der/das শব্দে</th><th>die/বহুবচনে</th></tr>" +
      "<tr><td>আমার</td><td><b class='de'>mein</b> (মাইন)</td><td>mein Vater</td><td>mein<b>e</b> Mutter</td></tr>" +
      "<tr><td>তোমার</td><td><b class='de'>dein</b> (ডাইন)</td><td>dein Bruder</td><td>dein<b>e</b> Schwester</td></tr>" +
      "<tr><td>তার (পুরুষ)</td><td><b class='de'>sein</b> (জাইন)</td><td>sein Sohn</td><td>sein<b>e</b> Tochter</td></tr>" +
      "<tr><td>তার (নারী)</td><td><b class='de'>ihr</b> (ঈয়ার)</td><td>ihr Mann</td><td>ihr<b>e</b> Familie</td></tr>" +
      "<tr><td>আমাদের</td><td><b class='de'>unser</b> (উনজার)</td><td>unser Haus</td><td>unser<b>e</b> Stadt</td></tr>" +
      "<tr><td>আপনার (ভদ্র)</td><td><b class='de'>Ihr</b> (ঈয়ার)</td><td>Ihr Name</td><td>Ihr<b>e</b> Adresse</td></tr>" +
      "</table></div>" +
      "<div class='warn'><b class='de'>ihr</b> = \"তার (মেয়ের)\" আর \"তাদের\"; বড় হাতের <b class='de'>Ihr</b> = \"আপনার\"। লেখায় বড়-ছোট হাতের অক্ষরটাই পার্থক্য করে।</div>"
    },
    {
      h: "২. ঘড়ির সময় (Uhrzeit) — দৈনন্দিন রূপ",
      body: "<div class='tblwrap'><table>" +
      "<tr><th>সময়</th><th>জার্মান</th><th>আক্ষরিক মানে</th></tr>" +
      "<tr><td>7:00</td><td><span class='de speakable'>Es ist sieben Uhr.</span></td><td>সাতটা</td></tr>" +
      "<tr><td>7:15</td><td><span class='de speakable'>Es ist Viertel nach sieben.</span></td><td>সাতটার পর সিকি</td></tr>" +
      "<tr><td>7:30</td><td><span class='de speakable'>Es ist halb acht.</span></td><td>⚠️ <b>আটের</b> অর্ধেক!</td></tr>" +
      "<tr><td>7:45</td><td><span class='de speakable'>Es ist Viertel vor acht.</span></td><td>আটটার আগে সিকি</td></tr>" +
      "<tr><td>7:10</td><td><span class='de speakable'>Es ist zehn nach sieben.</span></td><td>সাতটার দশ পরে</td></tr>" +
      "<tr><td>7:50</td><td><span class='de speakable'>Es ist zehn vor acht.</span></td><td>আটটার দশ আগে</td></tr>" +
      "</table></div>" +
      "<div class='warn'><b>সবচেয়ে বড় ফাঁদ — halb!</b> <span class='de'>halb acht</span> মানে ৭:৩০, ৮:৩০ নয়। জার্মানরা <b>সামনের</b> ঘণ্টার দিকে তাকায়: \"আটটার অর্ধেক পথ\"। এটা ভুল করলে এক ঘণ্টা দেরি হয়ে যাবে!</div>" +
      "<div class='tip'>সময়ের আগে <b class='de'>um</b> বসে: <span class='de speakable'>Ich komme um acht Uhr.</span> (আমি আটটায় আসব।)<br>অফিসিয়াল সময় (স্টেশন, টিকিট) ২৪ ঘণ্টায়: <span class='de speakable'>19:45 = neunzehn Uhr fünfundvierzig</span>।</div>"
    },
    {
      h: "৩. Trennbare Verben — বিচ্ছিন্নযোগ্য verb",
      body: "<p>কিছু verb-এর সামনে একটা ছোট অংশ (prefix) থাকে যা বাক্যে <b>ছিটকে গিয়ে একদম শেষে</b> বসে। এটা জার্মানের একটা বিশেষ ব্যাপার।</p>" +
      "<p class='ex'><span class='de'><b>auf</b>stehen</b> → Ich <b>stehe</b> um sechs Uhr <b>auf</b>.</span><br><span class='bn'>আমি ছয়টায় ঘুম থেকে উঠি। (auf ছিটকে শেষে!)</span></p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>Verb</th><th>বাংলা</th><th>বাক্যে</th></tr>" +
      "<tr><td><span class='de'>aufstehen</span></td><td>ঘুম থেকে ওঠা</td><td><span class='de speakable'>Ich stehe früh auf.</span></td></tr>" +
      "<tr><td><span class='de'>einkaufen</span></td><td>বাজার করা</td><td><span class='de speakable'>Er kauft Obst ein.</span></td></tr>" +
      "<tr><td><span class='de'>anfangen</span></td><td>শুরু করা</td><td><span class='de speakable'>Der Kurs fängt um neun an.</span></td></tr>" +
      "<tr><td><span class='de'>fernsehen</span></td><td>টিভি দেখা</td><td><span class='de speakable'>Wir sehen abends fern.</span></td></tr>" +
      "<tr><td><span class='de'>aufräumen</span></td><td>গোছানো</td><td><span class='de speakable'>Ich räume das Zimmer auf.</span></td></tr>" +
      "</table></div>" +
      "<div class='tip'>সাধারণ বিচ্ছিন্নযোগ্য prefix: <b class='de'>auf-, an-, ein-, aus-, mit-, zu-, vor-, ab-, fern-</b>। <br>নিয়ম: <b>মূল verb ২য় জায়গায়, prefix বাক্যের একদম শেষে।</b></div>"
    },
    {
      h: "৪. সপ্তাহের দিন ও কত ঘন ঘন",
      body: "<div class='tblwrap'><table>" +
      "<tr><th>দিন</th><th>জার্মান</th><th>\"…বারে\"</th></tr>" +
      "<tr><td>সোমবার</td><td><span class='de speakable'>der Montag</span></td><td><span class='de'>am Montag</span></td></tr>" +
      "<tr><td>মঙ্গলবার</td><td><span class='de speakable'>der Dienstag</span></td><td><span class='de'>am Dienstag</span></td></tr>" +
      "<tr><td>বুধবার</td><td><span class='de speakable'>der Mittwoch</span></td><td><span class='de'>am Mittwoch</span></td></tr>" +
      "<tr><td>বৃহস্পতিবার</td><td><span class='de speakable'>der Donnerstag</span></td><td><span class='de'>am Donnerstag</span></td></tr>" +
      "<tr><td>শুক্রবার</td><td><span class='de speakable'>der Freitag</span></td><td><span class='de'>am Freitag</span></td></tr>" +
      "<tr><td>শনিবার</td><td><span class='de speakable'>der Samstag</span></td><td><span class='de'>am Samstag</span></td></tr>" +
      "<tr><td>রবিবার</td><td><span class='de speakable'>der Sonntag</span></td><td><span class='de'>am Sonntag</span></td></tr>" +
      "</table></div>" +
      "<p><b>কত ঘন ঘন:</b> <span class='de speakable'>immer</span> (সবসময়) → <span class='de speakable'>oft</span> (প্রায়ই) → <span class='de speakable'>manchmal</span> (মাঝে মাঝে) → <span class='de speakable'>selten</span> (কম) → <span class='de speakable'>nie</span> (কখনো না)</p>" +
      "<div class='note'>সময়ের কথা বাক্যের শুরুতে আনলে verb তখনও ২য় জায়গায় থাকবে: <span class='de'>Am Montag <b>arbeite</b> ich.</span> — কর্তা (ich) verb-এর পরে চলে গেল!</div>"
    }
  ],

  dialog: {
    title_bn: "সংলাপ — দৈনন্দিন রুটিন নিয়ে কথা",
    lines: [
      { s: "Lena",  d: "Karim, wann stehst du morgens auf?", b: "করিম, তুমি সকালে কখন ওঠো?" },
      { s: "Karim", d: "Normalerweise um halb sieben.", b: "সাধারণত ছয়টা ত্রিশে।" },
      { s: "Lena",  d: "So früh! Und wann fängt deine Arbeit an?", b: "এত সকালে! আর তোমার কাজ কখন শুরু হয়?" },
      { s: "Karim", d: "Um neun. Ich frühstücke und lerne dann eine Stunde Deutsch.", b: "নয়টায়। আমি নাশতা করি, তারপর এক ঘণ্টা জার্মান শিখি।" },
      { s: "Lena",  d: "Sehr gut! Und was machst du am Wochenende?", b: "খুব ভালো! আর তুমি সপ্তাহান্তে কী করো?" },
      { s: "Karim", d: "Am Samstag kaufe ich ein und räume die Wohnung auf.", b: "শনিবার আমি বাজার করি আর ফ্ল্যাট গোছাই।" },
      { s: "Lena",  d: "Und am Sonntag?", b: "আর রবিবার?" },
      { s: "Karim", d: "Sonntags rufe ich meine Familie in Dhaka an. Meine Mutter wartet immer.", b: "রবিবার আমি ঢাকায় আমার পরিবারকে ফোন করি। আমার মা সবসময় অপেক্ষা করেন।" },
      { s: "Lena",  d: "Das ist schön. Wie viele Geschwister hast du?", b: "এটা সুন্দর। তোমার কত ভাই-বোন?" },
      { s: "Karim", d: "Ich habe einen Bruder und zwei Schwestern.", b: "আমার এক ভাই আর দুই বোন আছে।" }
    ]
  },

  drills: [
    { q: "___ Vater ist Arzt. (আমার)", a: "Mein — Mein Vater ist Arzt. (der Vater → mein)" },
    { q: "___ Mutter kocht gern. (আমার)", a: "Meine — Meine Mutter kocht gern. (die Mutter → meine)" },
    { q: "Wie ist ___ Name? (আপনার, ভদ্র)", a: "Ihr — Wie ist Ihr Name?" },
    { q: "7:30 জার্মানে বলো", a: "halb acht — সাবধান, \"আটের অর্ধেক\"!" },
    { q: "8:45 জার্মানে বলো", a: "Viertel vor neun" },
    { q: "সাজাও: ich / um 6 Uhr / aufstehen", a: "Ich stehe um 6 Uhr auf. (prefix শেষে!)" },
    { q: "সাজাও: der Kurs / anfangen / um neun", a: "Der Kurs fängt um neun an." },
    { q: "\"সোমবার আমি কাজ করি\" — verb কোথায়?", a: "Am Montag arbeite ich. — verb ২য় জায়গায়, ich তার পরে।" }
  ],

  speak_bn: [
    "নিজের একটা পুরো দিনের রুটিন জার্মানে বলো — সকাল থেকে রাত, অন্তত ৮টা বাক্য।",
    "নিজের পরিবারের ৫ জনের পরিচয় দাও: <span class='de'>Mein Vater ist … Meine Mutter …</span>",
    "ঘড়ি দেখে সারাদিনে ১০ বার জার্মানে সময় বলো — <b class='de'>halb</b> ছাঁদটা বিশেষভাবে অভ্যাস করো।"
  ]
},

/* ============================ A1 · UNIT 6 ============================ */
{
  id: "u6", level: "A1", kap: 6,
  title: "Zeit mit Freunden",
  title_bn: "বন্ধুদের সাথে সময় — Modalverben ও পরিকল্পনা",
  minutes: 50,
  goal_bn: [
    "\"পারি / চাই / দরকার\" বলতে পারবে — Modalverben দিয়ে",
    "বন্ধুকে কোথাও যাওয়ার প্রস্তাব দিতে ও রাজি/অরাজি হতে পারবে",
    "অবসর সময়ের কাজ নিয়ে কথা বলতে পারবে",
    "আদেশ/অনুরোধ করতে পারবে (Imperativ)"
  ],
  kks: { vid: "HK85mwWKUkM", label: "অধ্যায় ০৬: বন্ধুদের সাথে সময় — Netzwerk neu A1", len: "1:58:52" },

  words: [
    { d: "die Freizeit",   p: "ডি ফ্রাইৎসাইট",   b: "অবসর সময়" },
    { d: "das Hobby",      p: "ডাস হবি",         b: "শখ" },
    { d: "der Sport",      p: "ডেয়ার শপোর্ট",    b: "খেলাধুলা" },
    { d: "die Musik",      p: "ডি মুজিক",        b: "সংগীত" },
    { d: "das Konzert",    p: "ডাস কনৎসের্ট",    b: "কনসার্ট" },
    { d: "die Party",      p: "ডি পার্টি",       b: "পার্টি" },
    { d: "das Wochenende", p: "ডাস ভখেনএন্ডে",   b: "সপ্তাহান্ত" },
    { d: "spielen",        p: "শপীলেন",          b: "খেলা / বাজানো" },
    { d: "tanzen",         p: "টানৎসেন",         b: "নাচা" },
    { d: "schwimmen",      p: "শভিমেন",          b: "সাঁতার কাটা" },
    { d: "lesen",          p: "লেজেন",           b: "পড়া" },
    { d: "treffen",        p: "ট্রেফেন",         b: "দেখা করা" },
    { d: "mitkommen",      p: "মিটকমেন",         b: "সাথে আসা" },
    { d: "können",         p: "ক্যোনেন",         b: "পারা / সক্ষম হওয়া" },
    { d: "wollen",         p: "ভলেন",            b: "চাওয়া" },
    { d: "müssen",         p: "ম্যুসেন",         b: "অবশ্যই করতে হওয়া" },
    { d: "dürfen",         p: "ড্যুরফেন",        b: "অনুমতি থাকা" },
    { d: "sollen",         p: "জলেন",            b: "উচিত / বলা হয়েছে" },
    { d: "Lust haben",     p: "লুস্ট হাবেন",     b: "ইচ্ছে থাকা" },
    { d: "leider",         p: "লাইডার",          b: "দুর্ভাগ্যবশত" }
  ],

  phrases: [
    { d: "Hast du am Samstag Zeit?",      p: "হাস্ট ডু আম জামস্টাক ৎসাইট",   b: "শনিবার তোমার সময় আছে?" },
    { d: "Wollen wir ins Kino gehen?",    p: "ভলেন ভীয়ার ইন্স কিনো গেয়েন",  b: "আমরা কি সিনেমায় যাব?" },
    { d: "Ja, gern! Gute Idee.",          p: "ইয়া, গের্ন! গুটে ইডে",        b: "হ্যাঁ, খুশি হয়ে! ভালো আইডিয়া।" },
    { d: "Leider kann ich nicht.",        p: "লাইডার কান ইশ্ নিশ্ট",        b: "দুর্ভাগ্যবশত আমি পারব না।" },
    { d: "Ich muss arbeiten.",            p: "ইশ্ মুস আরবাইটেন",            b: "আমাকে কাজ করতে হবে।" },
    { d: "Hast du Lust mitzukommen?",     p: "হাস্ট ডু লুস্ট মিট্ৎসুকমেন",  b: "তোমার সাথে আসার ইচ্ছে আছে?" },
    { d: "Wann treffen wir uns?",         p: "ভান ট্রেফেন ভীয়ার উন্স",      b: "আমরা কখন দেখা করব?" },
    { d: "Um sieben vor dem Kino.",       p: "উম জীবেন ফোয়ার ডেম কিনো",     b: "সাতটায় সিনেমার সামনে।" },
    { d: "Ich kann gut Cricket spielen.", p: "ইশ্ কান গুট ক্রিকেট শপীলেন",  b: "আমি ভালো ক্রিকেট খেলতে পারি।" },
    { d: "Komm doch mit!",                p: "কম দখ মিট",                   b: "চলে এসো না সাথে!" },
    { d: "Vielleicht ein anderes Mal.",   p: "ফিলাইশ্ট আইন আনডারেস মাল",    b: "হয়তো আরেক দিন।" }
  ],

  grammar: [
    {
      h: "১. Modalverben — পারা, চাওয়া, দরকার (৬টা)",
      body: "<p>এই ৬টা verb দিয়ে তুমি হঠাৎ অনেক বেশি কথা বলতে পারবে। খেয়াল করো — <b>ich আর er/sie-তে একদম একই রূপ, কোনো লেজ নেই!</b></p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th></th><th class='de'>können</th><th class='de'>wollen</th><th class='de'>müssen</th><th class='de'>dürfen</th><th class='de'>sollen</th><th class='de'>mögen</th></tr>" +
      "<tr><td>বাংলা</td><td>পারা</td><td>চাওয়া</td><td>করতেই হবে</td><td>অনুমতি</td><td>উচিত</td><td>পছন্দ</td></tr>" +
      "<tr><td>ich</td><td><b>kann</b></td><td><b>will</b></td><td><b>muss</b></td><td><b>darf</b></td><td><b>soll</b></td><td><b>mag</b></td></tr>" +
      "<tr><td>du</td><td>kannst</td><td>willst</td><td>musst</td><td>darfst</td><td>sollst</td><td>magst</td></tr>" +
      "<tr><td>er/sie/es</td><td><b>kann</b></td><td><b>will</b></td><td><b>muss</b></td><td><b>darf</b></td><td><b>soll</b></td><td><b>mag</b></td></tr>" +
      "<tr><td>wir</td><td>können</td><td>wollen</td><td>müssen</td><td>dürfen</td><td>sollen</td><td>mögen</td></tr>" +
      "<tr><td>ihr</td><td>könnt</td><td>wollt</td><td>müsst</td><td>dürft</td><td>sollt</td><td>mögt</td></tr>" +
      "<tr><td>sie/Sie</td><td>können</td><td>wollen</td><td>müssen</td><td>dürfen</td><td>sollen</td><td>mögen</td></tr>" +
      "</table></div>" +
      "<div class='tip'><b>মনে রাখার সহজ সূত্র:</b> ich আর er/sie — একই রূপ, কোনো <b>-e</b> বা <b>-t</b> নেই। শুধু এটা মনে রাখলেই অর্ধেক কাজ শেষ।</div>"
    },
    {
      h: "২. Modal-এর বাক্যছাঁদ — verb শেষে চলে যায়",
      body: "<p>এটাই জার্মানের সবচেয়ে গুরুত্বপূর্ণ বাক্যগঠন। <b>Modal ২য় জায়গায়, মূল verb একদম শেষে (মূল রূপে)।</b></p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>১</th><th>২ (Modal)</th><th>মাঝখানে</th><th>শেষ (Infinitiv)</th></tr>" +
      "<tr><td><span class='de'>Ich</span></td><td><b class='de'>kann</b></td><td><span class='de'>gut Cricket</span></td><td><b class='de'>spielen.</b></td></tr>" +
      "<tr><td><span class='de'>Wir</span></td><td><b class='de'>wollen</b></td><td><span class='de'>heute ins Kino</span></td><td><b class='de'>gehen.</b></td></tr>" +
      "<tr><td><span class='de'>Er</span></td><td><b class='de'>muss</b></td><td><span class='de'>am Samstag</span></td><td><b class='de'>arbeiten.</b></td></tr>" +
      "<tr><td><span class='de'>Hier</span></td><td><b class='de'>darf</b></td><td><span class='de'>man nicht</span></td><td><b class='de'>rauchen.</b></td></tr>" +
      "</table></div>" +
      "<div class='warn'>মূল verb-টা <b>কখনো</b> বদলায় না — সবসময় মূল রূপে (spielen, gehen, arbeiten), শেষে। এটাকে বলে <b>Satzklammer</b> (বাক্য-বন্ধনী): শুরুতে modal, শেষে verb, মাঝে বাকি সব।</div>" +
      "<p class='ex'><span class='de'>Ich <b>muss</b> heute Abend Deutsch <b>lernen</b>.</span><br><span class='bn'>আমাকে আজ সন্ধ্যায় জার্মান শিখতে হবে।</span></p>"
    },
    {
      h: "৩. Imperativ — আদেশ ও অনুরোধ",
      body: "<p>কাউকে কিছু করতে বলার তিনটে রূপ:</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>কাকে</th><th>নিয়ম</th><th>উদাহরণ</th><th>বাংলা</th></tr>" +
      "<tr><td><b class='de'>du</b></td><td>verb-এর stem, কোনো লেজ নেই, কর্তা বাদ</td><td><span class='de speakable'>Komm!</span> · <span class='de speakable'>Lern Deutsch!</span></td><td>এসো! · জার্মান শেখো!</td></tr>" +
      "<tr><td><b class='de'>ihr</b></td><td>স্বাভাবিক ihr-রূপ, কর্তা বাদ</td><td><span class='de speakable'>Kommt!</span> · <span class='de speakable'>Lernt!</span></td><td>তোমরা এসো!</td></tr>" +
      "<tr><td><b class='de'>Sie</b></td><td>verb + <b>Sie</b> (উল্টো ক্রম)</td><td><span class='de speakable'>Kommen Sie!</span> · <span class='de speakable'>Warten Sie bitte!</span></td><td>আসুন! · দয়া করে অপেক্ষা করুন!</td></tr>" +
      "</table></div>" +
      "<div class='tip'>শুধু <b class='de'>bitte</b> আর <b class='de'>doch/mal</b> যোগ করলেই আদেশ নরম হয়ে অনুরোধ হয়ে যায়:<br><span class='de speakable'>Komm doch mit!</span> (চলে এসো না!) · <span class='de speakable'>Helfen Sie mir bitte.</span> (দয়া করে আমাকে সাহায্য করুন।)</div>"
    },
    {
      h: "৪. প্রস্তাব দেওয়া ও উত্তর দেওয়া",
      body: "<div class='tblwrap'><table>" +
      "<tr><th>কাজ</th><th>জার্মান</th><th>বাংলা</th></tr>" +
      "<tr><td>প্রস্তাব</td><td><span class='de speakable'>Wollen wir ins Kino gehen?</span></td><td>আমরা সিনেমায় যাব?</td></tr>" +
      "<tr><td>প্রস্তাব</td><td><span class='de speakable'>Hast du Lust, Tennis zu spielen?</span></td><td>টেনিস খেলার ইচ্ছে আছে?</td></tr>" +
      "<tr><td>প্রস্তাব</td><td><span class='de speakable'>Kommst du mit?</span></td><td>তুমি সাথে আসছ?</td></tr>" +
      "<tr><td>হ্যাঁ ✅</td><td><span class='de speakable'>Ja, gern! / Gute Idee! / Super!</span></td><td>হ্যাঁ, খুশি হয়ে! / ভালো আইডিয়া!</td></tr>" +
      "<tr><td>না ❌</td><td><span class='de speakable'>Leider kann ich nicht.</span></td><td>দুর্ভাগ্যবশত পারব না।</td></tr>" +
      "<tr><td>কারণ</td><td><span class='de speakable'>Ich muss arbeiten. / Ich habe keine Zeit.</span></td><td>কাজ করতে হবে। / সময় নেই।</td></tr>" +
      "</table></div>" +
      "<div class='note'>জার্মানরা সোজাসুজি \"nein\" বলতে একটু এড়িয়ে যায়। ভদ্র \"না\"-এর ছাঁদ: <b class='de'>Leider …, weil ich … muss.</b> (দুর্ভাগ্যবশত পারব না, কারণ আমার … করতে হবে।)</div>"
    }
  ],

  dialog: {
    title_bn: "সংলাপ — সপ্তাহান্তের পরিকল্পনা",
    lines: [
      { s: "Tom",   d: "Hallo Karim! Was machst du am Wochenende?", b: "হ্যালো করিম! তুমি সপ্তাহান্তে কী করছ?" },
      { s: "Karim", d: "Noch nichts. Warum fragst du?", b: "এখনো কিছু না। কেন জিজ্ঞেস করছ?" },
      { s: "Tom",   d: "Wir wollen am Samstag ins Konzert gehen. Kommst du mit?", b: "আমরা শনিবার কনসার্টে যেতে চাই। তুমি সাথে আসবে?" },
      { s: "Karim", d: "Am Samstag? Leider kann ich nicht. Ich muss arbeiten.", b: "শনিবার? দুর্ভাগ্যবশত পারব না। আমাকে কাজ করতে হবে।" },
      { s: "Tom",   d: "Schade! Und am Sonntag? Wir können auch schwimmen gehen.", b: "আফসোস! আর রবিবার? আমরা সাঁতারেও যেতে পারি।" },
      { s: "Karim", d: "Sonntag ist gut! Ich kann aber nicht gut schwimmen.", b: "রবিবার ভালো! কিন্তু আমি ভালো সাঁতার পারি না।" },
      { s: "Tom",   d: "Kein Problem, ich helfe dir. Wann treffen wir uns?", b: "সমস্যা নেই, আমি তোমাকে সাহায্য করব। কখন দেখা করব?" },
      { s: "Karim", d: "Um zehn Uhr? Ich darf nicht zu spät nach Hause kommen.", b: "দশটায়? আমি বেশি দেরি করে বাড়ি ফিরতে পারব না।" },
      { s: "Tom",   d: "Perfekt. Komm um zehn zum Schwimmbad!", b: "চমৎকার। দশটায় সুইমিং পুলে চলে এসো!" },
      { s: "Karim", d: "Abgemacht. Bis Sonntag!", b: "ঠিক হলো। রবিবার দেখা হবে!" }
    ]
  },

  drills: [
    { q: "Ich ___ gut Cricket spielen. (können)", a: "kann — Ich kann gut Cricket spielen." },
    { q: "Er ___ heute arbeiten. (müssen)", a: "muss — er-এর সাথেও muss, কোনো -t নেই।" },
    { q: "সাজাও: wir / ins Kino / gehen / wollen", a: "Wir wollen ins Kino gehen. (মূল verb শেষে)" },
    { q: "সাজাও: du / Deutsch / lernen / musst / heute", a: "Du musst heute Deutsch lernen." },
    { q: "Imperativ (du): kommen →", a: "Komm! (stem, কোনো লেজ নেই)" },
    { q: "Imperativ (Sie): warten →", a: "Warten Sie bitte!" },
    { q: "ভুল ঠিক করো: Ich kann spiele Fußball.", a: "Ich kann Fußball spielen. — মূল verb মূল রূপে, শেষে।" },
    { q: "ভদ্রভাবে \"না\" বলো (কারণসহ)", a: "Leider kann ich nicht, ich muss arbeiten." }
  ],

  speak_bn: [
    "৬টা modal verb দিয়ে নিজের সম্পর্কে ৬টা বাক্য বলো: <span class='de'>Ich kann… Ich will… Ich muss…</span>",
    "একজন বন্ধুকে ৩টা আলাদা প্রস্তাব দাও, আর প্রতিটার ভদ্র \"না\" উত্তরও নিজে বলো।",
    "নিজের ৫টা শখ নিয়ে বলো, <b class='de'>gern</b> আর <b class='de'>können</b> মিলিয়ে।"
  ]
},

/* ============================ A1 · UNIT 7 ============================ */
{
  id: "u7", level: "A1", kap: 7,
  title: "Arbeitsalltag",
  title_bn: "কাজের দিন — অফিস, ফোন ও অতীতের শুরু",
  minutes: 50,
  goal_bn: [
    "নিজের কাজের দিন বর্ণনা করতে পারবে",
    "অফিসে ভদ্রভাবে ফোনে কথা বলতে পারবে",
    "war / hatte দিয়ে অতীতের কথা বলতে পারবে (প্রথম অতীত কাল)",
    "সময়ের preposition (am / im / um) ঠিকভাবে ব্যবহার করতে পারবে"
  ],
  kks: { vid: "2nhZhDJRvpk", label: "Kapitel 07: Arbeitsalltag — Netzwerk neu A1", len: "2:03:17" },
  kks_extra: [
    { vid: "6CRduQr-vuQ", label: "haben ও sein — বর্তমান কালে সংযোজন (A1 ব্যাকরণ ০৭)", len: "19:20" },
    { vid: "AKqqlnwGX6s", label: "ভিত্তি-পাঠ ০৬: বারো মাসের নাম (im + মাস)", len: "5:42" }
  ],

  words: [
    { d: "das Büro",        p: "ডাস ব্যুরো",        b: "অফিস" },
    { d: "die Firma",       p: "ডি ফিরমা",          b: "কোম্পানি" },
    { d: "der Chef",        p: "ডেয়ার শেফ",         b: "বস" },
    { d: "der Termin",      p: "ডেয়ার টের্মিন",     b: "অ্যাপয়েন্টমেন্ট" },
    { d: "die Besprechung", p: "ডি বেশপ্রেশুং",     b: "মিটিং" },
    { d: "die E-Mail",      p: "ডি ঈ-মেইল",         b: "ইমেইল" },
    { d: "der Computer",    p: "ডেয়ার কম্পিউটার",   b: "কম্পিউটার" },
    { d: "die Pause",       p: "ডি পাউজে",          b: "বিরতি" },
    { d: "der Urlaub",      p: "ডেয়ার উরলাউব",      b: "ছুটি" },
    { d: "das Gehalt",      p: "ডাস গেহাল্ট",       b: "বেতন" },
    { d: "anrufen",         p: "আনরুফেন",           b: "ফোন করা" },
    { d: "schreiben",       p: "শ্রাইবেন",          b: "লেখা" },
    { d: "telefonieren",    p: "টেলেফোনীরেন",       b: "ফোনে কথা বলা" },
    { d: "beginnen",        p: "বেগিনেন",           b: "শুরু হওয়া" },
    { d: "aufhören",        p: "আউফহ্যোরেন",        b: "শেষ করা / থামা" },
    { d: "verdienen",       p: "ফেয়ারডীনেন",       b: "আয় করা" },
    { d: "müde",            p: "ম্যুডে",            b: "ক্লান্ত" },
    { d: "fertig",          p: "ফের্টিশ",           b: "শেষ / তৈরি" },
    { d: "wichtig",         p: "ভিশটিশ",            b: "গুরুত্বপূর্ণ" },
    { d: "pünktlich",       p: "প্যুংক্টলিশ",       b: "সময়মতো" }
  ],

  phrases: [
    { d: "Ich arbeite von neun bis fünf.",     p: "ইশ্ আরবাইটে ফন নয়েন বিস ফ্যুন্ফ", b: "আমি নয়টা থেকে পাঁচটা পর্যন্ত কাজ করি।" },
    { d: "Ich habe um zehn einen Termin.",     p: "ইশ্ হাবে উম ৎসেন আইনেন টের্মিন", b: "আমার দশটায় একটা অ্যাপয়েন্টমেন্ট আছে।" },
    { d: "Guten Tag, Rahman am Telefon.",      p: "গুটেন টাক, রহমান আম টেলেফোন",   b: "শুভ দিন, রহমান বলছি। (ফোনে)" },
    { d: "Kann ich bitte Herrn Müller sprechen?", p: "কান ইশ্ বিটে হের্ন ম্যুলার শপ্রেশেন", b: "আমি কি মিস্টার মুলারের সাথে কথা বলতে পারি?" },
    { d: "Einen Moment, bitte.",               p: "আইনেন মোমেন্ট, বিটে",           b: "এক মুহূর্ত, দয়া করে।" },
    { d: "Er ist gerade nicht da.",            p: "এয়ার ইস্ট গেরাডে নিশ্ট ডা",     b: "তিনি এখন এখানে নেই।" },
    { d: "Ich rufe später zurück.",            p: "ইশ্ রুফে শপেটার ৎসুর্যুক",      b: "আমি পরে আবার ফোন করব।" },
    { d: "Gestern war ich sehr müde.",         p: "গেস্টার্ন ভার ইশ্ জেয়ার ম্যুডে", b: "গতকাল আমি খুব ক্লান্ত ছিলাম।" },
    { d: "Ich hatte viel Arbeit.",             p: "ইশ্ হাটে ফীল আরবাইট",           b: "আমার অনেক কাজ ছিল।" },
    { d: "Ich mache jetzt Pause.",             p: "ইশ্ মাখে ইয়েৎস্ট পাউজে",       b: "আমি এখন বিরতি নিচ্ছি।" },
    { d: "Ich nehme im August Urlaub.",        p: "ইশ্ নেমে ইম আউগুস্ট উরলাউব",    b: "আমি অগাস্টে ছুটি নিচ্ছি।" }
  ],

  grammar: [
    {
      h: "১. war / hatte — অতীতের প্রথম দুটো রূপ",
      body: "<p>অতীতের কথা বলতে <b class='de'>sein</b> আর <b class='de'>haben</b>-এর অতীত রূপ সবচেয়ে বেশি লাগে। এই দুটো এখনই মুখস্থ করো — সারা জীবন কাজে দেবে।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th></th><th class='de'>sein → war</th><th class='de'>haben → hatte</th><th>বাংলা</th></tr>" +
      "<tr><td>ich</td><td><b class='de speakable'>war</b></td><td><b class='de speakable'>hatte</b></td><td>আমি ছিলাম / আমার ছিল</td></tr>" +
      "<tr><td>du</td><td><span class='de'>warst</span></td><td><span class='de'>hattest</span></td><td>তুমি ছিলে / তোমার ছিল</td></tr>" +
      "<tr><td>er/sie/es</td><td><b class='de speakable'>war</b></td><td><b class='de speakable'>hatte</b></td><td>সে ছিল / তার ছিল</td></tr>" +
      "<tr><td>wir</td><td><span class='de'>waren</span></td><td><span class='de'>hatten</span></td><td>আমরা ছিলাম</td></tr>" +
      "<tr><td>ihr</td><td><span class='de'>wart</span></td><td><span class='de'>hattet</span></td><td>তোমরা ছিলে</td></tr>" +
      "<tr><td>sie/Sie</td><td><span class='de'>waren</span></td><td><span class='de'>hatten</span></td><td>তারা / আপনি ছিলেন</td></tr>" +
      "</table></div>" +
      "<p class='ex'><span class='de'>Gestern <b>war</b> ich im Büro und <b>hatte</b> eine Besprechung.</span><br><span class='bn'>গতকাল আমি অফিসে ছিলাম আর আমার একটা মিটিং ছিল।</span></p>" +
      "<div class='tip'>এখানেও সেই চেনা ছাঁদ: <b>ich আর er/sie একই রূপ</b> (war, hatte)। জার্মানে অতীতে এটা প্রায় সবসময় সত্যি।</div>"
    },
    {
      h: "২. সময়ের preposition — am / im / um / von…bis",
      body: "<p>নতুনরা এখানে সবচেয়ে বেশি ভুল করে। এই টেবিলটা মুখস্থ করে ফেলো:</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>Preposition</th><th>কীসের সাথে</th><th>উদাহরণ</th><th>বাংলা</th></tr>" +
      "<tr><td><b class='de'>um</b></td><td>ঘড়ির সময়</td><td><span class='de speakable'>um acht Uhr</span></td><td>আটটায়</td></tr>" +
      "<tr><td><b class='de'>am</b></td><td>দিন ও তারিখ</td><td><span class='de speakable'>am Montag</span> · <span class='de'>am 5. Mai</span></td><td>সোমবারে · ৫ মে-তে</td></tr>" +
      "<tr><td><b class='de'>im</b></td><td>মাস ও ঋতু</td><td><span class='de speakable'>im August</span> · <span class='de'>im Winter</span></td><td>অগাস্টে · শীতে</td></tr>" +
      "<tr><td><b class='de'>von … bis</b></td><td>সময়ের পরিসর</td><td><span class='de speakable'>von neun bis fünf</span></td><td>নয়টা থেকে পাঁচটা</td></tr>" +
      "<tr><td>কিছুই না</td><td>gestern, heute, morgen</td><td><span class='de speakable'>Gestern war ich müde.</span></td><td>গতকাল ক্লান্ত ছিলাম</td></tr>" +
      "</table></div>" +
      "<div class='warn'>মনে রাখার সূত্র: <b>ঘণ্টা = um</b>, <b>দিন = am</b>, <b>মাস/ঋতু = im</b>। আর <span class='de'>gestern / heute / morgen</span>-এর আগে কোনো preposition বসে <b>না</b>।</div>"
    },
    {
      h: "৩. বাক্যে verb সবসময় ২য় জায়গায় (Verbzweit)",
      body: "<p>জার্মান বাক্যের সোনার নিয়ম: <b>সাধারণ বাক্যে verb সবসময় দ্বিতীয় \"জায়গায়\"</b>। প্রথম জায়গায় কী বসবে, সেটা তুমি ঠিক করতে পারো।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>জায়গা ১</th><th>জায়গা ২ (verb)</th><th>বাকি</th></tr>" +
      "<tr><td><span class='de'>Ich</span></td><td><b class='de'>arbeite</b></td><td><span class='de'>am Montag im Büro.</span></td></tr>" +
      "<tr><td><span class='de'>Am Montag</span></td><td><b class='de'>arbeite</b></td><td><span class='de'>ich im Büro.</span></td></tr>" +
      "<tr><td><span class='de'>Im Büro</span></td><td><b class='de'>arbeite</b></td><td><span class='de'>ich am Montag.</span></td></tr>" +
      "</table></div>" +
      "<div class='note'>খেয়াল করো — সময়ের কথা সামনে আনলে <b>ich</b> verb-এর পিছনে চলে যায়। ইংরেজিতে \"On Monday <b>I work</b>\" হয়, কিন্তু জার্মানে \"Am Montag <b>arbeite ich</b>\" — verb-কে ২য় জায়গা ছাড়তে দেওয়া যাবে না।</div>" +
      "<div class='tip'>\"জায়গা\" মানে একটা শব্দ নয়, একটা <b>ভাবের একক</b>। <span class='de'>Am Montag</span> পুরোটাই এক জায়গা।</div>"
    },
    {
      h: "৪. অফিসে ফোনের ভদ্র ছাঁদ",
      body: "<div class='tblwrap'><table>" +
      "<tr><th>পরিস্থিতি</th><th>জার্মান</th><th>বাংলা</th></tr>" +
      "<tr><td>নিজের পরিচয়</td><td><span class='de speakable'>Guten Tag, Rahman am Telefon.</span></td><td>শুভ দিন, রহমান বলছি।</td></tr>" +
      "<tr><td>কাউকে চাওয়া</td><td><span class='de speakable'>Kann ich bitte Frau Klein sprechen?</span></td><td>মিসেস ক্লাইনের সাথে কথা বলতে পারি?</td></tr>" +
      "<tr><td>অপেক্ষা করান</td><td><span class='de speakable'>Einen Moment, bitte.</span></td><td>এক মুহূর্ত, দয়া করে।</td></tr>" +
      "<tr><td>নেই</td><td><span class='de speakable'>Sie ist gerade nicht da.</span></td><td>তিনি এখন নেই।</td></tr>" +
      "<tr><td>মেসেজ</td><td><span class='de speakable'>Kann ich eine Nachricht hinterlassen?</span></td><td>একটা মেসেজ রাখতে পারি?</td></tr>" +
      "<tr><td>শেষ করা</td><td><span class='de speakable'>Vielen Dank, auf Wiederhören!</span></td><td>অনেক ধন্যবাদ, আবার শুনব! (ফোনে বিদায়)</td></tr>" +
      "</table></div>" +
      "<div class='note'>ফোনে বিদায় নিতে <b class='de'>auf Wiedersehen</b> নয়, <b class='de'>auf Wiederhören</b> বলা হয় — কারণ দেখা হচ্ছে না, শোনা হচ্ছে (hören = শোনা)।</div>"
    }
  ],

  dialog: {
    title_bn: "সংলাপ — অফিসে কাজের দিন নিয়ে কথা",
    lines: [
      { s: "Frau Klein", d: "Guten Morgen, Herr Rahman! Wie war Ihr Wochenende?", b: "শুভ সকাল, মিস্টার রহমান! আপনার সপ্তাহান্ত কেমন ছিল?" },
      { s: "Karim", d: "Guten Morgen! Es war schön, aber ich war sehr müde.", b: "শুভ সকাল! ভালো ছিল, কিন্তু আমি খুব ক্লান্ত ছিলাম।" },
      { s: "Frau Klein", d: "Warum? Hatten Sie viel zu tun?", b: "কেন? আপনার অনেক কাজ ছিল?" },
      { s: "Karim", d: "Ja, ich hatte am Samstag noch eine Besprechung.", b: "হ্যাঁ, শনিবারেও আমার একটা মিটিং ছিল।" },
      { s: "Frau Klein", d: "Oh! Übrigens, Sie haben um zehn einen Termin mit dem Chef.", b: "ওহ! যাই হোক, দশটায় বসের সাথে আপনার একটা অ্যাপয়েন্টমেন্ট আছে।" },
      { s: "Karim", d: "Um zehn? Gut, dann schreibe ich jetzt schnell die E-Mails.", b: "দশটায়? ঠিক আছে, তাহলে আমি এখন তাড়াতাড়ি ইমেইলগুলো লিখে ফেলি।" },
      { s: "Frau Klein", d: "Und wann machen Sie Urlaub?", b: "আর আপনি কখন ছুটি নিচ্ছেন?" },
      { s: "Karim", d: "Im August. Ich fliege nach Bangladesch.", b: "অগাস্টে। আমি বাংলাদেশে যাব।" },
      { s: "Frau Klein", d: "Schön! Seien Sie pünktlich beim Termin.", b: "সুন্দর! অ্যাপয়েন্টমেন্টে সময়মতো থাকবেন।" }
    ]
  },

  drills: [
    { q: "Gestern ___ ich im Büro. (sein, অতীত)", a: "war — Gestern war ich im Büro." },
    { q: "Ich ___ viel Arbeit. (haben, অতীত)", a: "hatte — Ich hatte viel Arbeit." },
    { q: "Wir ___ gestern müde. (sein, অতীত)", a: "waren — Wir waren gestern müde." },
    { q: "Preposition: ___ acht Uhr", a: "um — um acht Uhr (ঘড়ির সময়)" },
    { q: "Preposition: ___ Montag", a: "am — am Montag (দিন)" },
    { q: "Preposition: ___ August", a: "im — im August (মাস)" },
    { q: "সাজাও: am Montag / ich / arbeite / im Büro", a: "Am Montag arbeite ich im Büro. — verb ২য় জায়গায়!" },
    { q: "ভুল ঠিক করো: Gestern ich war müde.", a: "Gestern war ich müde. — verb-কে ২য় জায়গা দিতে হবে।" },
    { q: "ফোনে বিদায় কীভাবে বলবে?", a: "Auf Wiederhören! (দেখা নয়, শোনা)" }
  ],

  speak_bn: [
    "নিজের কাজের একটা দিন বর্ণনা করো — কখন শুরু, কী করো, কখন বিরতি, কখন শেষ।",
    "গতকাল নিয়ে ৫টা বাক্য বলো <b class='de'>war</b> আর <b class='de'>hatte</b> দিয়ে।",
    "একটা ফোন-কল পুরোপুরি অভিনয় করো: পরিচয় → কাউকে চাওয়া → মেসেজ → বিদায়।"
  ]
},

/* ============================ A1 · UNIT 8 ============================ */
{
  id: "u8", level: "A1", kap: 8,
  title: "Fit und gesund",
  title_bn: "সুস্থ ও ফিট — শরীর, ডাক্তার ও Dativ-এর শুরু",
  minutes: 50,
  goal_bn: [
    "শরীরের অংশের নাম বলতে পারবে",
    "ডাক্তারকে নিজের সমস্যা বোঝাতে পারবে",
    "উপদেশ দিতে পারবে (sollen + Imperativ)",
    "mir / dir / ihm — Dativ সর্বনাম বুঝবে ও ব্যবহার করতে পারবে"
  ],
  kks: { vid: "ZUzZbpqwrko", label: "Kapitel 08: Fit und gesund — Netzwerk neu A1", len: "2:08:27" },

  words: [
    { d: "der Körper",     p: "ডেয়ার ক্যোরপার",   b: "শরীর" },
    { d: "der Kopf",       p: "ডেয়ার কপ্ফ",        b: "মাথা" },
    { d: "der Hals",       p: "ডেয়ার হাল্স",       b: "গলা / ঘাড়" },
    { d: "der Bauch",      p: "ডেয়ার বাউখ",        b: "পেট" },
    { d: "der Rücken",     p: "ডেয়ার র্যুকেন",     b: "পিঠ" },
    { d: "die Hand",       p: "ডি হান্ট",          b: "হাত" },
    { d: "der Arm",        p: "ডেয়ার আর্ম",        b: "বাহু" },
    { d: "das Bein",       p: "ডাস বাইন",          b: "পা (পুরো)" },
    { d: "der Zahn",       p: "ডেয়ার ৎসান",        b: "দাঁত" },
    { d: "das Auge",       p: "ডাস আউগে",          b: "চোখ" },
    { d: "die Schmerzen",  p: "ডি শমের্ৎসেন",      b: "ব্যথা (বহুবচন)" },
    { d: "die Erkältung",  p: "ডি এয়ারকেলটুং",    b: "সর্দি-কাশি" },
    { d: "das Fieber",     p: "ডাস ফীবার",         b: "জ্বর" },
    { d: "die Medizin",    p: "ডি মেডিৎসিন",       b: "ঔষধ" },
    { d: "die Tablette",   p: "ডি টাবলেটে",        b: "ট্যাবলেট" },
    { d: "der Termin",     p: "ডেয়ার টের্মিন",     b: "অ্যাপয়েন্টমেন্ট" },
    { d: "weh tun",        p: "ভে টুন",            b: "ব্যথা করা" },
    { d: "sich fühlen",    p: "জিশ ফ্যুলেন",       b: "অনুভব করা" },
    { d: "krank / gesund", p: "ক্রাংক / গেজুন্ট",  b: "অসুস্থ / সুস্থ" },
    { d: "sich ausruhen",  p: "জিশ আউসরুয়েন",     b: "বিশ্রাম নেওয়া" }
  ],

  phrases: [
    { d: "Wie fühlst du dich?",          p: "ভি ফ্যুল্স্ট ডু ডিশ",          b: "তুমি কেমন বোধ করছ?" },
    { d: "Ich fühle mich nicht gut.",    p: "ইশ্ ফ্যুলে মিশ নিশ্ট গুট",     b: "আমি ভালো বোধ করছি না।" },
    { d: "Ich bin krank.",               p: "ইশ্ বিন ক্রাংক",               b: "আমি অসুস্থ।" },
    { d: "Mein Kopf tut weh.",           p: "মাইন কপ্ফ টুট ভে",             b: "আমার মাথা ব্যথা করছে।" },
    { d: "Ich habe Kopfschmerzen.",      p: "ইশ্ হাবে কপ্ফশমের্ৎসেন",       b: "আমার মাথাব্যথা আছে।" },
    { d: "Mir ist schlecht.",            p: "মীয়ার ইস্ট শ্লেশ্ট",           b: "আমার বমি বমি লাগছে।" },
    { d: "Ich habe Fieber.",             p: "ইশ্ হাবে ফীবার",               b: "আমার জ্বর আছে।" },
    { d: "Seit wann haben Sie das?",     p: "জাইট ভান হাবেন জি ডাস",        b: "কখন থেকে আপনার এটা হয়েছে?" },
    { d: "Seit drei Tagen.",             p: "জাইট ড্রাই টাগেন",             b: "তিন দিন থেকে।" },
    { d: "Sie sollen viel trinken.",     p: "জি জলেন ফীল ট্রিংকেন",         b: "আপনার অনেক পানি খাওয়া উচিত।" },
    { d: "Ruhen Sie sich aus!",          p: "রুয়েন জি জিশ আউস",            b: "বিশ্রাম নিন!" },
    { d: "Gute Besserung!",              p: "গুটে বেসারুং",                 b: "দ্রুত সুস্থ হয়ে উঠুন!" }
  ],

  grammar: [
    {
      h: "১. Dativ সর্বনাম — mir, dir, ihm (৩য় কারক)",
      body: "<p>এখন পর্যন্ত তুমি শিখেছ Nominativ (কর্তা) আর Akkusativ (কর্ম)। এবার তৃতীয়টা: <b>Dativ</b> — মানে \"কার কাছে / কাকে / কার জন্য\"।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>বাংলা</th><th>Nominativ</th><th>Akkusativ</th><th>Dativ</th></tr>" +
      "<tr><td>আমি</td><td><span class='de'>ich</span></td><td><span class='de'>mich</span></td><td><b class='de speakable'>mir</b> (মীয়ার)</td></tr>" +
      "<tr><td>তুমি</td><td><span class='de'>du</span></td><td><span class='de'>dich</span></td><td><b class='de speakable'>dir</b> (ডীয়ার)</td></tr>" +
      "<tr><td>সে (পুরুষ)</td><td><span class='de'>er</span></td><td><span class='de'>ihn</span></td><td><b class='de speakable'>ihm</b> (ঈম)</td></tr>" +
      "<tr><td>সে (নারী)</td><td><span class='de'>sie</span></td><td><span class='de'>sie</span></td><td><b class='de speakable'>ihr</b> (ঈয়ার)</td></tr>" +
      "<tr><td>আমরা</td><td><span class='de'>wir</span></td><td><span class='de'>uns</span></td><td><b class='de speakable'>uns</b> (উন্স)</td></tr>" +
      "<tr><td>আপনি (ভদ্র)</td><td><span class='de'>Sie</span></td><td><span class='de'>Sie</span></td><td><b class='de speakable'>Ihnen</b> (ঈনেন)</td></tr>" +
      "</table></div>" +
      "<div class='tip'>স্বাস্থ্য নিয়ে কথা বলতে Dativ লাগেই: <span class='de speakable'>Mir ist kalt.</span> (আমার ঠান্ডা লাগছে) · <span class='de speakable'>Mir ist schlecht.</span> (আমার বমি বমি লাগছে) · <span class='de speakable'>Wie geht es dir?</span> (তুমি কেমন আছো — আক্ষরিক \"তোমার কাছে কেমন যাচ্ছে?\")</div>"
    },
    {
      h: "২. weh tun — ব্যথা বলার দুই উপায়",
      body: "<p>জার্মানে ব্যথার কথা বলার দুটো ছাঁদ আছে। দুটোই শিখে রাখো, দুটোই খুব শোনা যায়।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>ছাঁদ</th><th>উদাহরণ</th><th>বাংলা</th></tr>" +
      "<tr><td><b>অংশ + tut weh</b></td><td><span class='de speakable'>Mein Kopf tut weh.</span></td><td>আমার মাথা ব্যথা করছে।</td></tr>" +
      "<tr><td>বহুবচনে</td><td><span class='de speakable'>Meine Augen tun weh.</span></td><td>আমার চোখ ব্যথা করছে।</td></tr>" +
      "<tr><td><b>haben + …schmerzen</b></td><td><span class='de speakable'>Ich habe Kopfschmerzen.</span></td><td>আমার মাথাব্যথা আছে।</td></tr>" +
      "<tr><td>অন্য অংশে</td><td><span class='de speakable'>Ich habe Bauchschmerzen.</span></td><td>আমার পেটব্যথা আছে।</td></tr>" +
      "<tr><td>Dativ দিয়ে</td><td><span class='de speakable'>Mir tut der Rücken weh.</span></td><td>আমার পিঠ ব্যথা করছে।</td></tr>" +
      "</table></div>" +
      "<div class='note'><b>-schmerzen</b> জুড়ে দিলেই নতুন শব্দ: Kopf<b>schmerzen</b> (মাথাব্যথা), Bauch<b>schmerzen</b> (পেটব্যথা), Zahn<b>schmerzen</b> (দাঁতব্যথা), Hals<b>schmerzen</b> (গলাব্যথা), Rücken<b>schmerzen</b> (পিঠব্যথা)।</div>"
    },
    {
      h: "৩. sollen — উপদেশ দেওয়া",
      body: "<p>ডাক্তার বা বন্ধু যখন উপদেশ দেয়, <b class='de'>sollen</b> ব্যবহার হয় — \"তোমার … করা উচিত\"।</p>" +
      "<p class='ex'><span class='de'>Du <b>sollst</b> mehr Wasser <b>trinken</b>.</span><br><span class='bn'>তোমার আরও পানি খাওয়া উচিত।</span></p>" +
      "<p class='ex'><span class='de'>Sie <b>sollen</b> im Bett <b>bleiben</b>.</span><br><span class='bn'>আপনার বিছানায় থাকা উচিত।</span></p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>উপদেশের ছাঁদ</th><th>উদাহরণ</th><th>ভাব</th></tr>" +
      "<tr><td><span class='de'>Du sollst …</span></td><td><span class='de speakable'>Du sollst viel schlafen.</span></td><td>উপদেশ, নরম</td></tr>" +
      "<tr><td><span class='de'>Imperativ</span></td><td><span class='de speakable'>Trink viel Wasser!</span></td><td>সরাসরি, বন্ধুসুলভ</td></tr>" +
      "<tr><td><span class='de'>Du musst …</span></td><td><span class='de speakable'>Du musst zum Arzt gehen.</span></td><td>জরুরি, বাধ্যতামূলক</td></tr>" +
      "<tr><td><span class='de'>Du darfst nicht …</span></td><td><span class='de speakable'>Du darfst nicht rauchen.</span></td><td>নিষেধ</td></tr>" +
      "</table></div>" +
      "<div class='warn'>খেয়াল করো — এটাও modal verb, তাই মূল verb (trinken, bleiben, gehen) বাক্যের <b>একদম শেষে</b> মূল রূপে বসে।</div>"
    },
    {
      h: "৪. seit — \"কখন থেকে\"",
      body: "<p>ডাক্তার প্রায় সবসময় জিজ্ঞেস করবে <b class='de'>Seit wann?</b> (কখন থেকে?)। উত্তরে <b class='de'>seit</b> + সময় বলো।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>জার্মান</th><th>বাংলা</th></tr>" +
      "<tr><td><span class='de speakable'>seit gestern</span></td><td>গতকাল থেকে</td></tr>" +
      "<tr><td><span class='de speakable'>seit drei Tagen</span></td><td>তিন দিন থেকে</td></tr>" +
      "<tr><td><span class='de speakable'>seit einer Woche</span></td><td>এক সপ্তাহ থেকে</td></tr>" +
      "<tr><td><span class='de speakable'>seit zwei Monaten</span></td><td>দুই মাস থেকে</td></tr>" +
      "</table></div>" +
      "<div class='note'>বাংলায় \"তিন দিন ধরে অসুস্থ\" বলতে আমরা বর্তমান কাল ব্যবহার করি — জার্মানেও ঠিক তেমনই: <span class='de'>Ich <b>bin</b> seit drei Tagen krank.</span> (অতীত কাল নয়!)</div>"
    }
  ],

  dialog: {
    title_bn: "সংলাপ — ডাক্তারের কাছে",
    lines: [
      { s: "Ärztin", d: "Guten Tag, Herr Rahman. Was fehlt Ihnen denn?", b: "শুভ দিন, মিস্টার রহমান। আপনার কী সমস্যা?" },
      { s: "Karim",  d: "Guten Tag. Ich fühle mich nicht gut. Mein Kopf tut weh.", b: "শুভ দিন। আমি ভালো বোধ করছি না। আমার মাথা ব্যথা করছে।" },
      { s: "Ärztin", d: "Haben Sie auch Fieber?", b: "আপনার জ্বরও আছে?" },
      { s: "Karim",  d: "Ja, ich glaube schon. Und mir ist oft kalt.", b: "হ্যাঁ, মনে হয় আছে। আর আমার প্রায়ই ঠান্ডা লাগছে।" },
      { s: "Ärztin", d: "Seit wann haben Sie die Schmerzen?", b: "কখন থেকে আপনার এই ব্যথা?" },
      { s: "Karim",  d: "Seit drei Tagen. Ich habe auch Halsschmerzen.", b: "তিন দিন থেকে। আমার গলাব্যথাও আছে।" },
      { s: "Ärztin", d: "Das ist eine Erkältung. Sie sollen viel trinken und schlafen.", b: "এটা একটা সর্দি। আপনার অনেক পানি খাওয়া আর ঘুমানো উচিত।" },
      { s: "Karim",  d: "Brauche ich Medizin?", b: "আমার ঔষধ লাগবে?" },
      { s: "Ärztin", d: "Ja, nehmen Sie diese Tabletten, dreimal am Tag.", b: "হ্যাঁ, এই ট্যাবলেটগুলো নিন, দিনে তিনবার।" },
      { s: "Karim",  d: "Vielen Dank, Frau Doktor.", b: "অনেক ধন্যবাদ, ডাক্তার সাহেব।" },
      { s: "Ärztin", d: "Gute Besserung! Und ruhen Sie sich gut aus.", b: "দ্রুত সুস্থ হয়ে উঠুন! আর ভালোভাবে বিশ্রাম নিন।" }
    ]
  },

  drills: [
    { q: "Wie geht es ___? (তোমার)", a: "dir — Wie geht es dir?" },
    { q: "___ ist kalt. (আমার ঠান্ডা লাগছে)", a: "Mir — Mir ist kalt." },
    { q: "Wie geht es ___? (আপনার, ভদ্র)", a: "Ihnen — Wie geht es Ihnen?" },
    { q: "\"আমার পেটব্যথা আছে\" — haben দিয়ে", a: "Ich habe Bauchschmerzen." },
    { q: "\"আমার দাঁত ব্যথা করছে\" — weh tun দিয়ে", a: "Mein Zahn tut weh." },
    { q: "Du ___ mehr schlafen. (sollen)", a: "sollst — Du sollst mehr schlafen." },
    { q: "সাজাও: Sie / viel Wasser / trinken / sollen", a: "Sie sollen viel Wasser trinken." },
    { q: "\"তিন দিন থেকে অসুস্থ\" — জার্মানে?", a: "Ich bin seit drei Tagen krank. (বর্তমান কাল!)" },
    { q: "অসুস্থ বন্ধুকে বিদায় জানাতে কী বলবে?", a: "Gute Besserung!" }
  ],

  speak_bn: [
    "ডাক্তারের কাছে যাওয়ার পুরো কথোপকথন নিজে অভিনয় করো — সমস্যা → কখন থেকে → উপদেশ।",
    "শরীরের ১০টা অংশ article সহ জোরে বলো, আর প্রতিটা দিয়ে একটা ব্যথার বাক্য বানাও।",
    "একজন অসুস্থ বন্ধুকে ৫টা উপদেশ দাও — <b class='de'>Du sollst …</b> আর Imperativ দুইভাবে।"
  ]
},

/* ============================ A1 · UNIT 9 ============================ */
{
  id: "u9", level: "A1", kap: 9,
  title: "Meine Wohnung",
  title_bn: "আমার বাসা — ঘর, আসবাব ও অবস্থানের preposition",
  minutes: 50,
  goal_bn: [
    "নিজের বাসা ও ঘরগুলোর বর্ণনা দিতে পারবে",
    "কোনো জিনিস কোথায় আছে বলতে পারবে (Dativ)",
    "wo (কোথায়) আর wohin (কোথায় যাচ্ছে) আলাদা করতে পারবে",
    "বাসা ভাড়ার বিজ্ঞাপন বুঝতে পারবে"
  ],
  kks: { vid: "fW1rMi2kZUU", label: "Kapitel 09: Meine Wohnung — Netzwerk neu A1", len: "1:32:45" },

  words: [
    { d: "die Wohnung",     p: "ডি ভোনুং",         b: "ফ্ল্যাট / বাসা" },
    { d: "das Haus",        p: "ডাস হাউস",         b: "বাড়ি" },
    { d: "das Zimmer",      p: "ডাস ৎসিমার",       b: "ঘর" },
    { d: "die Küche",       p: "ডি ক্যুশে",        b: "রান্নাঘর" },
    { d: "das Bad",         p: "ডাস বাট",          b: "বাথরুম" },
    { d: "das Schlafzimmer",p: "ডাস শ্লাফৎসিমার",  b: "শোবার ঘর" },
    { d: "der Balkon",      p: "ডেয়ার বালকোন",     b: "বারান্দা" },
    { d: "der Tisch",       p: "ডেয়ার টিশ",        b: "টেবিল" },
    { d: "der Stuhl",       p: "ডেয়ার শটুল",       b: "চেয়ার" },
    { d: "das Bett",        p: "ডাস বেট",          b: "বিছানা" },
    { d: "der Schrank",     p: "ডেয়ার শ্রাংক",     b: "আলমারি" },
    { d: "das Sofa",        p: "ডাস জোফা",         b: "সোফা" },
    { d: "das Fenster",     p: "ডাস ফেনস্টার",     b: "জানালা" },
    { d: "die Tür",         p: "ডি ট্যুর",         b: "দরজা" },
    { d: "die Miete",       p: "ডি মীটে",          b: "ভাড়া" },
    { d: "hell / dunkel",   p: "হেল / ডুংকেল",     b: "আলোকিত / অন্ধকার" },
    { d: "groß / klein",    p: "গ্রোস / ক্লাইন",   b: "বড় / ছোট" },
    { d: "teuer / günstig", p: "টয়ার / গ্যুনস্টিশ", b: "দামি / সস্তা" },
    { d: "möbliert",        p: "ম্যোব্লীর্ট",      b: "আসবাবপত্রসহ" },
    { d: "umziehen",        p: "উমৎসীয়েন",        b: "বাসা বদলানো" }
  ],

  phrases: [
    { d: "Ich wohne in einer Wohnung.",      p: "ইশ্ ভোনে ইন আইনার ভোনুং",      b: "আমি একটা ফ্ল্যাটে থাকি।" },
    { d: "Meine Wohnung hat drei Zimmer.",   p: "মাইনে ভোনুং হাট ড্রাই ৎসিমার",  b: "আমার ফ্ল্যাটে তিনটা ঘর।" },
    { d: "Die Küche ist klein, aber hell.",  p: "ডি ক্যুশে ইস্ট ক্লাইন, আবার হেল", b: "রান্নাঘর ছোট, কিন্তু আলোকিত।" },
    { d: "Wie hoch ist die Miete?",          p: "ভি হোখ ইস্ট ডি মীটে",           b: "ভাড়া কত?" },
    { d: "Die Miete ist 600 Euro warm.",     p: "ডি মীটে ইস্ট জেক্সহুন্ডার্ট অয়রো ভার্ম", b: "ভাড়া ৬০০ ইউরো, সব খরচসহ।" },
    { d: "Der Tisch steht in der Küche.",    p: "ডেয়ার টিশ শটেট ইন ডেয়ার ক্যুশে", b: "টেবিলটা রান্নাঘরে আছে।" },
    { d: "Das Bett steht im Schlafzimmer.",  p: "ডাস বেট শটেট ইম শ্লাফৎসিমার",   b: "বিছানাটা শোবার ঘরে আছে।" },
    { d: "Wo ist das Bad?",                  p: "ভো ইস্ট ডাস বাট",               b: "বাথরুম কোথায়?" },
    { d: "Ich suche eine günstige Wohnung.", p: "ইশ্ জুখে আইনে গ্যুনস্টিগে ভোনুং", b: "আমি একটা সস্তা ফ্ল্যাট খুঁজছি।" },
    { d: "Wann können wir die Wohnung sehen?", p: "ভান ক্যোনেন ভীয়ার ডি ভোনুং জেয়েন", b: "আমরা কখন ফ্ল্যাটটা দেখতে পারি?" }
  ],

  grammar: [
    {
      h: "১. Dativ-এ article — অবস্থান বোঝাতে",
      body: "<p>কোনো জিনিস <b>কোথায় আছে</b> বলতে জার্মানে Dativ লাগে। article এভাবে বদলায়:</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>লিঙ্গ</th><th>Nominativ</th><th>Dativ</th><th>in + Dativ (সংক্ষেপ)</th></tr>" +
      "<tr><td>m</td><td><span class='de'>der Schrank</span></td><td><b class='de'>dem</b> Schrank</td><td><b class='de'>im</b> Schrank</td></tr>" +
      "<tr><td>f</td><td><span class='de'>die Küche</span></td><td><b class='de'>der</b> Küche</td><td><b class='de'>in der</b> Küche</td></tr>" +
      "<tr><td>n</td><td><span class='de'>das Bad</span></td><td><b class='de'>dem</b> Bad</td><td><b class='de'>im</b> Bad</td></tr>" +
      "<tr><td>pl</td><td><span class='de'>die Zimmer</span></td><td><b class='de'>den</b> Zimmer<b>n</b></td><td><b class='de'>in den</b> Zimmern</td></tr>" +
      "</table></div>" +
      "<div class='warn'><b>বড় ফাঁদ:</b> Dativ-এ স্ত্রীবাচক <span class='de'>die</span> হয়ে যায় <b class='de'>der</b>! তাই <span class='de'>in <b>der</b> Küche</span> দেখে ভেবো না এটা পুরুষবাচক — <span class='de'>die Küche</span> স্ত্রীবাচকই আছে।</div>" +
      "<div class='tip'>সংক্ষেপ মুখস্থ করো: <b class='de'>in dem → im</b>, <b class='de'>an dem → am</b>, <b class='de'>zu dem → zum</b>, <b class='de'>zu der → zur</b>। জার্মানরা প্রায় সবসময় সংক্ষেপই বলে।</div>"
    },
    {
      h: "২. অবস্থানের preposition (সব Dativ নেয়)",
      body: "<div class='tblwrap'><table>" +
      "<tr><th>Preposition</th><th>উচ্চারণ</th><th>বাংলা</th><th>উদাহরণ</th></tr>" +
      "<tr><td><b class='de'>in</b></td><td>ইন</td><td>ভেতরে</td><td><span class='de speakable'>in der Küche</span></td></tr>" +
      "<tr><td><b class='de'>auf</b></td><td>আউফ</td><td>উপরে (ছুঁয়ে)</td><td><span class='de speakable'>auf dem Tisch</span></td></tr>" +
      "<tr><td><b class='de'>unter</b></td><td>উন্টার</td><td>নিচে</td><td><span class='de speakable'>unter dem Bett</span></td></tr>" +
      "<tr><td><b class='de'>neben</b></td><td>নেবেন</td><td>পাশে</td><td><span class='de speakable'>neben dem Schrank</span></td></tr>" +
      "<tr><td><b class='de'>hinter</b></td><td>হিন্টার</td><td>পিছনে</td><td><span class='de speakable'>hinter der Tür</span></td></tr>" +
      "<tr><td><b class='de'>vor</b></td><td>ফোয়ার</td><td>সামনে</td><td><span class='de speakable'>vor dem Fenster</span></td></tr>" +
      "<tr><td><b class='de'>über</b></td><td>উ্যবার</td><td>উপরে (না ছুঁয়ে)</td><td><span class='de speakable'>über dem Sofa</span></td></tr>" +
      "<tr><td><b class='de'>zwischen</b></td><td>ৎসভিশেন</td><td>মাঝে</td><td><span class='de speakable'>zwischen den Fenstern</span></td></tr>" +
      "</table></div>" +
      "<p class='ex'><span class='de'>Die Lampe steht <b>auf dem</b> Tisch, <b>neben dem</b> Computer.</span><br><span class='bn'>বাতিটা টেবিলের উপরে, কম্পিউটারের পাশে আছে।</span></p>"
    },
    {
      h: "৩. wo? না wohin? — সবচেয়ে গুরুত্বপূর্ণ পার্থক্য",
      body: "<p>একই preposition দুইভাবে কাজ করে — নির্ভর করে তুমি <b>অবস্থান</b> বলছ না <b>গতি</b> বলছ তার উপর।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th></th><th class='de'>wo? (কোথায়)</th><th class='de'>wohin? (কোথায় যাচ্ছে)</th></tr>" +
      "<tr><td>কারক</td><td><b>Dativ</b> (থেমে আছে)</td><td><b>Akkusativ</b> (নড়ছে)</td></tr>" +
      "<tr><td>উদাহরণ</td><td><span class='de speakable'>Das Buch ist <b>in der</b> Küche.</span></td><td><span class='de speakable'>Ich gehe <b>in die</b> Küche.</span></td></tr>" +
      "<tr><td>বাংলা</td><td>বইটা রান্নাঘরে <b>আছে</b>।</td><td>আমি রান্নাঘরে <b>যাচ্ছি</b>।</td></tr>" +
      "<tr><td>উদাহরণ ২</td><td><span class='de speakable'>Der Stuhl steht <b>vor dem</b> Tisch.</span></td><td><span class='de speakable'>Ich stelle den Stuhl <b>vor den</b> Tisch.</span></td></tr>" +
      "</table></div>" +
      "<div class='tip'><b>মনে রাখার সূত্র:</b> নড়াচড়া আছে? → Akkusativ। থেমে আছে? → Dativ।<br>প্রশ্ন করে যাচাই করো: <b class='de'>Wo</b>? → Dativ · <b class='de'>Wohin</b>? → Akkusativ।</div>" +
      "<div class='note'>এই আটটা preposition (in, auf, unter, neben, hinter, vor, über, zwischen) দুইভাবেই চলে — এদের বলে <b>Wechselpräpositionen</b> (পরিবর্তনশীল preposition)। A2-তে এটা আরও গভীরভাবে আসবে।</div>"
    },
    {
      h: "৪. stehen / liegen / hängen — \"আছে\"-এর তিন রূপ",
      body: "<p>জার্মানরা \"আছে\" বলতে জিনিসটার <b>ভঙ্গি</b> অনুযায়ী আলাদা verb ব্যবহার করে। এটা বাংলাভাষীদের কাছে নতুন লাগে।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>Verb</th><th>কখন</th><th>উদাহরণ</th></tr>" +
      "<tr><td><b class='de'>stehen</b> (শটেয়েন)</td><td>দাঁড়িয়ে আছে (আসবাব, বোতল)</td><td><span class='de speakable'>Der Tisch steht in der Küche.</span></td></tr>" +
      "<tr><td><b class='de'>liegen</b> (লীগেন)</td><td>শুয়ে আছে (বই, কাগজ, চাবি)</td><td><span class='de speakable'>Das Buch liegt auf dem Tisch.</span></td></tr>" +
      "<tr><td><b class='de'>hängen</b> (হেঙেন)</td><td>ঝুলছে (ছবি, জামা)</td><td><span class='de speakable'>Das Bild hängt über dem Sofa.</span></td></tr>" +
      "<tr><td><b class='de'>sitzen</b> (জিৎসেন)</td><td>বসে আছে (মানুষ, প্রাণী)</td><td><span class='de speakable'>Die Katze sitzt auf dem Stuhl.</span></td></tr>" +
      "</table></div>" +
      "<div class='note'>সহজ কৌশল: শুরুতে সন্দেহ হলে <b class='de'>ist</b> বলে দাও — <span class='de'>Das Buch <b>ist</b> auf dem Tisch.</span> ভুল হবে না, শুধু কম স্বাভাবিক শোনাবে। ধীরে ধীরে সঠিক verb-টা অভ্যাস করো।</div>"
    }
  ],

  dialog: {
    title_bn: "সংলাপ — বাসা দেখতে যাওয়া",
    lines: [
      { s: "Vermieter", d: "Guten Tag! Sie möchten die Wohnung sehen?", b: "শুভ দিন! আপনি ফ্ল্যাটটা দেখতে চান?" },
      { s: "Karim",  d: "Ja, gern. Wie viele Zimmer hat die Wohnung?", b: "হ্যাঁ, খুশি হয়ে। ফ্ল্যাটে কতটা ঘর আছে?" },
      { s: "Vermieter", d: "Drei Zimmer, eine Küche und ein Bad. Kommen Sie herein!", b: "তিনটা ঘর, একটা রান্নাঘর আর একটা বাথরুম। ভেতরে আসুন!" },
      { s: "Karim",  d: "Die Küche ist ja sehr hell!", b: "রান্নাঘরটা তো খুব আলোকিত!" },
      { s: "Vermieter", d: "Ja, das Fenster ist groß. Und hier ist das Schlafzimmer.", b: "হ্যাঁ, জানালাটা বড়। আর এখানে শোবার ঘর।" },
      { s: "Karim",  d: "Ist die Wohnung möbliert?", b: "ফ্ল্যাটটা আসবাবপত্রসহ?" },
      { s: "Vermieter", d: "Teilweise. Der Schrank bleibt hier, aber das Bett nicht.", b: "আংশিকভাবে। আলমারিটা এখানে থাকবে, কিন্তু বিছানাটা না।" },
      { s: "Karim",  d: "Gibt es einen Balkon?", b: "একটা বারান্দা আছে?" },
      { s: "Vermieter", d: "Ja, hinter dem Wohnzimmer. Sehr ruhig.", b: "হ্যাঁ, বসার ঘরের পিছনে। খুব শান্ত।" },
      { s: "Karim",  d: "Und wie hoch ist die Miete?", b: "আর ভাড়া কত?" },
      { s: "Vermieter", d: "650 Euro warm, also mit Heizung und Wasser.", b: "৬৫০ ইউরো, মানে হিটিং আর পানিসহ।" },
      { s: "Karim",  d: "Das ist in Ordnung. Ich möchte die Wohnung nehmen.", b: "এটা ঠিক আছে। আমি ফ্ল্যাটটা নিতে চাই।" }
    ]
  },

  drills: [
    { q: "Dativ: Der Tisch steht in ___ Küche. (die)", a: "der — in der Küche (Dativ-এ die → der)" },
    { q: "Dativ: Das Bett steht in ___ Schlafzimmer. (das)", a: "dem → সংক্ষেপে im — im Schlafzimmer" },
    { q: "Dativ: Das Buch liegt auf ___ Tisch. (der)", a: "dem — auf dem Tisch" },
    { q: "wo না wohin: Ich gehe in ___ Küche.", a: "die — গতি আছে, তাই Akkusativ: in die Küche" },
    { q: "wo না wohin: Das Buch ist in ___ Küche.", a: "der — থেমে আছে, তাই Dativ: in der Küche" },
    { q: "কোন verb: Das Bild ___ über dem Sofa.", a: "hängt — ছবি ঝুলে থাকে" },
    { q: "কোন verb: Der Schlüssel ___ auf dem Tisch.", a: "liegt — চাবি শুয়ে থাকে" },
    { q: "\"ভাড়া কত?\" — জার্মানে?", a: "Wie hoch ist die Miete?" },
    { q: "\"warm\" ভাড়া মানে কী?", a: "সব খরচসহ (হিটিং, পানি) — \"kalt\" মানে শুধু ঘরভাড়া।" }
  ],

  speak_bn: [
    "নিজের বাসার প্রতিটা ঘর বর্ণনা করো — কী কী আছে, কোথায় আছে (preposition + Dativ ব্যবহার করো)।",
    "ঘরে বসে ১০টা জিনিস দেখে বলো কোথায় আছে: <span class='de'>Das Buch liegt auf dem Tisch.</span>",
    "একটা বাসা দেখতে যাওয়ার কথোপকথন অভিনয় করো — ঘর সংখ্যা, ভাড়া, বারান্দা নিয়ে প্রশ্ন করো।"
  ]
},

/* ============================ A1 · UNIT 10 ============================ */
{
  id: "u10", level: "A1", kap: 10,
  title: "Studium und Beruf",
  title_bn: "পড়াশোনা ও পেশা — অতীত কাল (Perfekt)",
  minutes: 55,
  goal_bn: [
    "Perfekt দিয়ে অতীতের কথা বলতে পারবে (কথ্য জার্মানের মূল অতীত কাল)",
    "নিজের পড়াশোনা ও কাজের অভিজ্ঞতা বলতে পারবে",
    "একটা সহজ জীবনবৃত্তান্ত (Lebenslauf) বুঝতে পারবে",
    "haben না sein — কোনটা লাগবে বুঝতে পারবে"
  ],
  kks: { vid: "Rq-1Mazy6TY", label: "Kapitel 10: Studium und Beruf — Netzwerk neu A1", len: "1:17:30" },

  words: [
    { d: "die Schule",       p: "ডি শুলে",          b: "স্কুল" },
    { d: "die Universität",  p: "ডি উনিভেরজিটেট",   b: "বিশ্ববিদ্যালয়" },
    { d: "das Studium",      p: "ডাস শটুডিউম",      b: "উচ্চশিক্ষা" },
    { d: "das Fach",         p: "ডাস ফাখ",          b: "বিষয়" },
    { d: "die Prüfung",      p: "ডি প্র্যুফুং",     b: "পরীক্ষা" },
    { d: "das Praktikum",    p: "ডাস প্রাক্টিকুম",  b: "ইন্টার্নশিপ" },
    { d: "der Abschluss",    p: "ডেয়ার আপশ্লুস",    b: "ডিগ্রি / সমাপ্তি" },
    { d: "die Erfahrung",    p: "ডি এয়ারফারুং",    b: "অভিজ্ঞতা" },
    { d: "die Bewerbung",    p: "ডি বেভেরবুং",      b: "চাকরির আবেদন" },
    { d: "der Lebenslauf",   p: "ডেয়ার লেবেন্সলাউফ", b: "জীবনবৃত্তান্ত (CV)" },
    { d: "lernen",           p: "লেয়ারনেন",        b: "শেখা" },
    { d: "besuchen",         p: "বেজুখেন",          b: "যাওয়া (স্কুলে) / দেখতে যাওয়া" },
    { d: "machen",           p: "মাখেন",            b: "করা" },
    { d: "beenden",          p: "বেএনডেন",          b: "শেষ করা" },
    { d: "bekommen",         p: "বেকমেন",           b: "পাওয়া" },
    { d: "sich bewerben",    p: "জিশ বেভেরবেন",     b: "আবেদন করা" },
    { d: "früher",           p: "ফ্র্যুয়ার",       b: "আগে / পূর্বে" },
    { d: "danach",           p: "ডানাখ",            b: "তারপর" },
    { d: "zuerst",           p: "ৎসুএয়ার্স্ট",     b: "প্রথমে" },
    { d: "schließlich",      p: "শ্লীসলিশ",         b: "অবশেষে" }
  ],

  phrases: [
    { d: "Ich habe in Dhaka studiert.",         p: "ইশ্ হাবে ইন ঢাকা শটুডীর্ট",      b: "আমি ঢাকায় পড়াশোনা করেছি।" },
    { d: "Ich habe Informatik studiert.",       p: "ইশ্ হাবে ইনফরমাটিক শটুডীর্ট",    b: "আমি কম্পিউটার সায়েন্স পড়েছি।" },
    { d: "Ich bin nach Deutschland gekommen.",  p: "ইশ্ বিন নাখ ডয়েচলান্ট গেকমেন",  b: "আমি জার্মানিতে এসেছি।" },
    { d: "Ich habe ein Praktikum gemacht.",     p: "ইশ্ হাবে আইন প্রাক্টিকুম গেমাখ্‌ট", b: "আমি একটা ইন্টার্নশিপ করেছি।" },
    { d: "Wo haben Sie gearbeitet?",            p: "ভো হাবেন জি গেআরবাইটেট",        b: "আপনি কোথায় কাজ করেছেন?" },
    { d: "Ich habe drei Jahre bei einer Firma gearbeitet.", p: "ইশ্ হাবে ড্রাই ইয়ারে বাই আইনার ফিরমা গেআরবাইটেট", b: "আমি তিন বছর একটা কোম্পানিতে কাজ করেছি।" },
    { d: "Ich habe die Prüfung bestanden.",     p: "ইশ্ হাবে ডি প্র্যুফুং বেশটানডেন", b: "আমি পরীক্ষায় পাস করেছি।" },
    { d: "Ich möchte mich bewerben.",           p: "ইশ্ ম্যোশটে মিশ বেভেরবেন",      b: "আমি আবেদন করতে চাই।" },
    { d: "Ich habe Erfahrung mit Java.",        p: "ইশ্ হাবে এয়ারফারুং মিট ইয়াভা",  b: "আমার জাভায় অভিজ্ঞতা আছে।" },
    { d: "Zuerst habe ich Deutsch gelernt.",    p: "ৎসুএয়ার্স্ট হাবে ইশ্ ডয়েচ গেলের্ন্ট", b: "প্রথমে আমি জার্মান শিখেছি।" }
  ],

  grammar: [
    {
      h: "১. Perfekt — কথ্য জার্মানের অতীত কাল",
      body: "<p>জার্মানরা কথা বলার সময় অতীত বোঝাতে প্রায় সবসময় <b>Perfekt</b> ব্যবহার করে। ছাঁদটা দুই টুকরোর:</p>" +
      "<div class='tip' style='font-size:16px'><b>haben/sein (২য় জায়গায়) &nbsp;+&nbsp; Partizip II (একদম শেষে)</b></div>" +
      "<p class='ex'><span class='de'>Ich <b>habe</b> in Dhaka <b>studiert</b>.</span><br><span class='bn'>আমি ঢাকায় পড়াশোনা করেছি।</span></p>" +
      "<p class='ex'><span class='de'>Er <b>hat</b> gestern viel <b>gearbeitet</b>.</span><br><span class='bn'>সে গতকাল অনেক কাজ করেছে।</span></p>" +
      "<div class='note'>খেয়াল করো — এটা সেই চেনা <b>বাক্য-বন্ধনী</b>: সহায়ক verb ২য় জায়গায়, আসল কাজের রূপ একদম শেষে। Modal verb-এর মতোই ছাঁদ।</div>"
    },
    {
      h: "২. Partizip II কীভাবে বানায়?",
      body: "<div class='tblwrap'><table>" +
      "<tr><th>ধরন</th><th>নিয়ম</th><th>উদাহরণ</th></tr>" +
      "<tr><td><b>নিয়মিত</b></td><td><b>ge</b> + stem + <b>t</b></td><td><span class='de'>lernen → <b class='speakable de'>gelernt</b></span> (শেখা)</td></tr>" +
      "<tr><td>নিয়মিত</td><td>একই</td><td><span class='de'>machen → <b class='speakable de'>gemacht</b></span> (করা)</td></tr>" +
      "<tr><td>-t/-d শেষে</td><td>ge + stem + <b>et</b></td><td><span class='de'>arbeiten → <b class='speakable de'>gearbeitet</b></span></td></tr>" +
      "<tr><td><b>অনিয়মিত</b></td><td><b>ge</b> + (বদলানো stem) + <b>en</b></td><td><span class='de'>schreiben → <b class='speakable de'>geschrieben</b></span> (লেখা)</td></tr>" +
      "<tr><td>অনিয়মিত</td><td>একই</td><td><span class='de'>essen → <b class='speakable de'>gegessen</b></span> (খাওয়া)</td></tr>" +
      "<tr><td><b>-ieren</b> শেষে</td><td><b>ge নেই!</b> শুধু + t</td><td><span class='de'>studieren → <b class='speakable de'>studiert</b></span></td></tr>" +
      "<tr><td><b>বিচ্ছিন্নযোগ্য</b></td><td>prefix + <b>ge</b> + মাঝে</td><td><span class='de'>einkaufen → <b class='speakable de'>eingekauft</b></span></td></tr>" +
      "<tr><td><b>be-, ver-, er-</b></td><td><b>ge নেই!</b></td><td><span class='de'>besuchen → <b class='speakable de'>besucht</b></span></td></tr>" +
      "</table></div>" +
      "<div class='warn'><b>দুটো ব্যতিক্রম মনে রাখো:</b> <b class='de'>-ieren</b> দিয়ে শেষ হওয়া verb আর <b class='de'>be-, ver-, er-, ent-</b> দিয়ে শুরু হওয়া verb-এ কখনো <b class='de'>ge-</b> বসে না। <br><span class='de'>studiert</span> ✅ · <s>gestudiert</s> ❌ &nbsp;|&nbsp; <span class='de'>besucht</span> ✅ · <s>gebesucht</s> ❌</div>"
    },
    {
      h: "৩. haben না sein? (৯০% ক্ষেত্রে haben)",
      body: "<p>বেশিরভাগ verb <b class='de'>haben</b> নেয়। কিন্তু কয়েকটা <b class='de'>sein</b> নেয় — এদের চেনার নিয়ম আছে।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>সহায়ক</th><th>কখন</th><th>উদাহরণ</th></tr>" +
      "<tr><td><b class='de'>haben</b></td><td>প্রায় সব verb (৯০%)</td><td><span class='de speakable'>Ich habe gelernt / gearbeitet / gegessen.</span></td></tr>" +
      "<tr><td><b class='de'>sein</b></td><td><b>এক জায়গা থেকে আরেক জায়গায় যাওয়া</b></td><td><span class='de speakable'>Ich bin gekommen / gegangen / gefahren / geflogen.</span></td></tr>" +
      "<tr><td><b class='de'>sein</b></td><td><b>অবস্থার পরিবর্তন</b></td><td><span class='de speakable'>Er ist aufgestanden / eingeschlafen.</span></td></tr>" +
      "<tr><td><b class='de'>sein</b></td><td>এই তিনটে (মুখস্থ)</td><td><span class='de speakable'>sein → gewesen</span> · <span class='de speakable'>bleiben → geblieben</span> · <span class='de speakable'>werden → geworden</span></td></tr>" +
      "</table></div>" +
      "<div class='tip'><b>সহজ প্রশ্ন করো:</b> \"আমি কি নড়েছি / বদলে গেছি?\" হ্যাঁ হলে <b class='de'>sein</b>, না হলে <b class='de'>haben</b>।<br>গাড়ি চালানো নিয়ে মজার ব্যাপার: <span class='de'>Ich <b>bin</b> nach Berlin gefahren.</span> (আমি গেছি — নড়েছি) কিন্তু <span class='de'>Ich <b>habe</b> das Auto gefahren.</span> (আমি গাড়িটা চালিয়েছি — কর্ম আছে)।</div>"
    },
    {
      h: "৪. দরকারি Partizip II (এখনই মুখস্থ করো)",
      body: "<div class='tblwrap'><table>" +
      "<tr><th>Infinitiv</th><th>Perfekt</th><th>বাংলা</th></tr>" +
      "<tr><td><span class='de'>machen</span></td><td><span class='de speakable'>hat gemacht</span></td><td>করেছে</td></tr>" +
      "<tr><td><span class='de'>lernen</span></td><td><span class='de speakable'>hat gelernt</span></td><td>শিখেছে</td></tr>" +
      "<tr><td><span class='de'>arbeiten</span></td><td><span class='de speakable'>hat gearbeitet</span></td><td>কাজ করেছে</td></tr>" +
      "<tr><td><span class='de'>studieren</span></td><td><span class='de speakable'>hat studiert</span></td><td>পড়েছে</td></tr>" +
      "<tr><td><span class='de'>essen</span></td><td><span class='de speakable'>hat gegessen</span></td><td>খেয়েছে</td></tr>" +
      "<tr><td><span class='de'>trinken</span></td><td><span class='de speakable'>hat getrunken</span></td><td>পান করেছে</td></tr>" +
      "<tr><td><span class='de'>sprechen</span></td><td><span class='de speakable'>hat gesprochen</span></td><td>বলেছে</td></tr>" +
      "<tr><td><span class='de'>schreiben</span></td><td><span class='de speakable'>hat geschrieben</span></td><td>লিখেছে</td></tr>" +
      "<tr><td><span class='de'>lesen</span></td><td><span class='de speakable'>hat gelesen</span></td><td>পড়েছে</td></tr>" +
      "<tr><td><span class='de'>sehen</span></td><td><span class='de speakable'>hat gesehen</span></td><td>দেখেছে</td></tr>" +
      "<tr><td><span class='de'>gehen</span></td><td><b class='de speakable'>ist gegangen</b></td><td>গেছে</td></tr>" +
      "<tr><td><span class='de'>kommen</span></td><td><b class='de speakable'>ist gekommen</b></td><td>এসেছে</td></tr>" +
      "<tr><td><span class='de'>fahren</span></td><td><b class='de speakable'>ist gefahren</b></td><td>গেছে (যানবাহনে)</td></tr>" +
      "<tr><td><span class='de'>fliegen</span></td><td><b class='de speakable'>ist geflogen</b></td><td>উড়ে গেছে</td></tr>" +
      "<tr><td><span class='de'>sein</span></td><td><b class='de speakable'>ist gewesen</b></td><td>ছিল</td></tr>" +
      "<tr><td><span class='de'>bleiben</span></td><td><b class='de speakable'>ist geblieben</b></td><td>থেকেছে</td></tr>" +
      "</table></div>" +
      "<div class='note'>মোটা করে লেখা <b>ist</b>-গুলো খেয়াল করো — এগুলোই sein নেয়। বাকি সব haben।</div>"
    }
  ],

  dialog: {
    title_bn: "সংলাপ — চাকরির ইন্টারভিউতে অভিজ্ঞতার কথা",
    lines: [
      { s: "Frau Weber", d: "Guten Tag, Herr Rahman. Erzählen Sie kurz von sich.", b: "শুভ দিন, মিস্টার রহমান। সংক্ষেপে নিজের সম্পর্কে বলুন।" },
      { s: "Karim", d: "Gern. Ich habe in Dhaka Informatik studiert.", b: "খুশি হয়ে। আমি ঢাকায় কম্পিউটার সায়েন্স পড়েছি।" },
      { s: "Frau Weber", d: "Und wann haben Sie Ihr Studium beendet?", b: "আর আপনি কখন পড়াশোনা শেষ করেছেন?" },
      { s: "Karim", d: "2019. Danach habe ich drei Jahre bei einer Firma gearbeitet.", b: "২০১৯ সালে। তারপর আমি তিন বছর একটা কোম্পানিতে কাজ করেছি।" },
      { s: "Frau Weber", d: "Was haben Sie dort gemacht?", b: "আপনি সেখানে কী করেছেন?" },
      { s: "Karim", d: "Ich habe Webseiten programmiert und im Team gearbeitet.", b: "আমি ওয়েবসাইট প্রোগ্রাম করেছি আর টিমে কাজ করেছি।" },
      { s: "Frau Weber", d: "Und wann sind Sie nach Deutschland gekommen?", b: "আর আপনি কখন জার্মানিতে এসেছেন?" },
      { s: "Karim", d: "Letztes Jahr. Zuerst habe ich einen Deutschkurs gemacht.", b: "গত বছর। প্রথমে আমি একটা জার্মান কোর্স করেছি।" },
      { s: "Frau Weber", d: "Haben Sie die Prüfung bestanden?", b: "আপনি পরীক্ষায় পাস করেছেন?" },
      { s: "Karim", d: "Ja, ich habe das A2-Zertifikat bekommen. Jetzt lerne ich weiter.", b: "হ্যাঁ, আমি A2 সার্টিফিকেট পেয়েছি। এখন আমি আরও শিখছি।" },
      { s: "Frau Weber", d: "Sehr gut. Wir melden uns bei Ihnen.", b: "খুব ভালো। আমরা আপনার সাথে যোগাযোগ করব।" }
    ]
  },

  drills: [
    { q: "Perfekt: Ich ___ Deutsch ___. (lernen)", a: "habe … gelernt — Ich habe Deutsch gelernt." },
    { q: "Perfekt: Er ___ viel ___. (arbeiten)", a: "hat … gearbeitet — Er hat viel gearbeitet." },
    { q: "Perfekt: Ich ___ Informatik ___. (studieren)", a: "habe … studiert — ge নেই, কারণ -ieren!" },
    { q: "Perfekt: Ich ___ nach Berlin ___. (kommen)", a: "bin … gekommen — নড়াচড়া, তাই sein!" },
    { q: "Perfekt: Wir ___ ins Kino ___. (gehen)", a: "sind … gegangen — নড়াচড়া, তাই sein।" },
    { q: "Perfekt: Sie ___ einen Brief ___. (schreiben)", a: "hat … geschrieben" },
    { q: "ভুল ঠিক করো: Ich habe gestudiert.", a: "Ich habe studiert. — -ieren verb-এ ge বসে না।" },
    { q: "ভুল ঠিক করো: Ich habe nach Berlin gefahren.", a: "Ich bin nach Berlin gefahren. — জায়গা বদল, তাই sein।" },
    { q: "সাজাও: ich / gestern / gearbeitet / habe / viel", a: "Ich habe gestern viel gearbeitet. (Partizip শেষে!)" }
  ],

  speak_bn: [
    "নিজের পুরো শিক্ষা ও কাজের ইতিহাস Perfekt-এ বলো — অন্তত ৮টা বাক্য।",
    "গতকাল কী কী করেছ, ১০টা বাক্যে বলো। প্রতিটাতে haben/sein ঠিক আছে কি না খেয়াল করো।",
    "উপরের ১৬টা Partizip II জোরে বলে মুখস্থ করো — বিশেষ করে <b>ist</b>-ওয়ালাগুলো।"
  ]
},

/* ============================ A1 · UNIT 11 ============================ */
{
  id: "u11", level: "A1", kap: 11,
  title: "Die Jacke gefällt mir!",
  title_bn: "জ্যাকেটটা আমার পছন্দ! — পোশাক, কেনাকাটা ও Dativ verb",
  minutes: 50,
  goal_bn: [
    "পোশাক ও রঙের নাম বলতে পারবে",
    "দোকানে কেনাকাটা করতে ও সাইজ/দাম নিয়ে কথা বলতে পারবে",
    "gefallen / passen / stehen — Dativ verb ব্যবহার করতে পারবে",
    "জিনিস তুলনা করতে পারবে (größer, besser …)"
  ],
  kks: { vid: "5f64n1AYN4M", label: "Kapitel 11: Die Jacke gefällt mir! — Netzwerk neu A1", len: "1:18:47" },
  kks_extra: [
    { vid: "oggAjfJL62k", label: "জার্মান ভাষায় ৫০টি কার্যকর বিশেষণ (মৌলিক পাঠ ১০)", len: "17:49" }
  ],

  words: [
    { d: "die Kleidung",   p: "ডি ক্লাইডুং",      b: "পোশাক" },
    { d: "das Hemd",       p: "ডাস হেম্ট",        b: "শার্ট" },
    { d: "die Hose",       p: "ডি হোজে",          b: "প্যান্ট" },
    { d: "die Jacke",      p: "ডি ইয়াকে",         b: "জ্যাকেট" },
    { d: "der Mantel",     p: "ডেয়ার মান্টেল",    b: "কোট" },
    { d: "das Kleid",      p: "ডাস ক্লাইট",       b: "ফ্রক / গাউন" },
    { d: "der Pullover",   p: "ডেয়ার পুলোভার",    b: "সোয়েটার" },
    { d: "die Schuhe",     p: "ডি শুয়ে",          b: "জুতো (বহুবচন)" },
    { d: "die Socken",     p: "ডি জকেন",          b: "মোজা" },
    { d: "die Größe",      p: "ডি গ্র্যোসে",      b: "সাইজ / মাপ" },
    { d: "die Farbe",      p: "ডি ফারবে",         b: "রং" },
    { d: "rot / blau",     p: "রোট / ব্লাউ",      b: "লাল / নীল" },
    { d: "grün / gelb",    p: "গ্র্যুন / গেল্ব",  b: "সবুজ / হলুদ" },
    { d: "schwarz / weiß", p: "শভার্ৎস / ভাইস",   b: "কালো / সাদা" },
    { d: "anprobieren",    p: "আনপ্রোবীরেন",      b: "পরে দেখা (ট্রাই করা)" },
    { d: "gefallen",       p: "গেফালেন",          b: "পছন্দ হওয়া" },
    { d: "passen",         p: "পাসেন",            b: "মাপে ঠিক হওয়া" },
    { d: "stehen",         p: "শটেয়েন",          b: "মানানো (পোশাক)" },
    { d: "umtauschen",     p: "উমটাউশেন",         b: "বদলে নেওয়া" },
    { d: "der Preis",      p: "ডেয়ার প্রাইস",     b: "দাম" }
  ],

  phrases: [
    { d: "Ich suche eine Jacke.",           p: "ইশ্ জুখে আইনে ইয়াকে",         b: "আমি একটা জ্যাকেট খুঁজছি।" },
    { d: "Welche Größe haben Sie?",         p: "ভেলশে গ্র্যোসে হাবেন জি",      b: "আপনার সাইজ কত?" },
    { d: "Ich habe Größe M.",               p: "ইশ্ হাবে গ্র্যোসে এম",         b: "আমার সাইজ M।" },
    { d: "Kann ich das anprobieren?",       p: "কান ইশ্ ডাস আনপ্রোবীরেন",      b: "আমি এটা পরে দেখতে পারি?" },
    { d: "Die Jacke gefällt mir.",          p: "ডি ইয়াকে গেফেল্ট মীয়ার",      b: "জ্যাকেটটা আমার পছন্দ হয়েছে।" },
    { d: "Die Hose passt mir nicht.",       p: "ডি হোজে পাস্ট মীয়ার নিশ্ট",   b: "প্যান্টটা আমার মাপে হচ্ছে না।" },
    { d: "Das steht dir gut!",              p: "ডাস শটেট ডীয়ার গুট",          b: "এটা তোমাকে ভালো মানাচ্ছে!" },
    { d: "Haben Sie das in Blau?",          p: "হাবেন জি ডাস ইন ব্লাউ",        b: "আপনাদের কাছে এটা নীল রঙে আছে?" },
    { d: "Das ist zu teuer.",               p: "ডাস ইস্ট ৎসু টয়ার",           b: "এটা খুব দামি।" },
    { d: "Ich nehme es.",                   p: "ইশ্ নেমে এস",                  b: "আমি এটা নিচ্ছি।" },
    { d: "Kann ich mit Karte bezahlen?",    p: "কান ইশ্ মিট কার্টে বেৎসালেন", b: "আমি কার্ডে পরিশোধ করতে পারি?" }
  ],

  grammar: [
    {
      h: "১. gefallen / passen / stehen — উল্টো ছাঁদের verb",
      body: "<p>এই তিনটে verb বাংলাভাষীদের কাছে <b>উল্টো</b> লাগে। জিনিসটাই কর্তা হয়, আর মানুষ Dativ-এ যায়!</p>" +
      "<div class='tip' style='font-size:15.5px'><b>জিনিস (কর্তা) + verb + মানুষ (Dativ)</b></div>" +
      "<p class='ex'><span class='de'><b>Die Jacke</b> gefällt <b>mir</b>.</span><br><span class='bn'>জ্যাকেটটা আমার পছন্দ হয়েছে। (আক্ষরিক: \"জ্যাকেট আমার কাছে পছন্দনীয় হচ্ছে\")</span></p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>Verb</th><th>মানে</th><th>উদাহরণ</th></tr>" +
      "<tr><td><b class='de'>gefallen</b></td><td>পছন্দ হওয়া</td><td><span class='de speakable'>Das Hemd gefällt mir.</span> — শার্টটা আমার পছন্দ।</td></tr>" +
      "<tr><td><b class='de'>passen</b></td><td>মাপে ঠিক হওয়া</td><td><span class='de speakable'>Die Hose passt mir nicht.</span> — প্যান্ট মাপে হচ্ছে না।</td></tr>" +
      "<tr><td><b class='de'>stehen</b></td><td>মানানো</td><td><span class='de speakable'>Die Farbe steht dir gut.</span> — রংটা তোমাকে মানায়।</td></tr>" +
      "<tr><td><b class='de'>schmecken</b></td><td>স্বাদ লাগা</td><td><span class='de speakable'>Der Kaffee schmeckt mir.</span> — কফিটা আমার ভালো লাগছে।</td></tr>" +
      "<tr><td><b class='de'>helfen</b></td><td>সাহায্য করা</td><td><span class='de speakable'>Kannst du mir helfen?</span> — আমাকে সাহায্য করতে পারো?</td></tr>" +
      "</table></div>" +
      "<div class='warn'><b>বহুবচনে verb বদলায়!</b> কারণ জিনিসটাই কর্তা:<br><span class='de'>Die Jacke <b>gefällt</b> mir.</span> (একটা) · <span class='de'>Die Schuhe <b>gefallen</b> mir.</span> (অনেকগুলো)<br>মানুষ (mir) বদলায় না — জিনিসের সংখ্যাই verb ঠিক করে।</div>"
    },
    {
      h: "২. তুলনা করা — Komparativ ও Superlativ",
      body: "<p>জিনিস তুলনা করতে বিশেষণের শেষে লেজ যোগ করো — ইংরেজির মতোই।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>মূল</th><th>তুলনামূলক (+er)</th><th>সর্বোচ্চ (am …sten)</th><th>বাংলা</th></tr>" +
      "<tr><td><span class='de'>billig</span></td><td><span class='de speakable'>billiger</span></td><td><span class='de speakable'>am billigsten</span></td><td>সস্তা</td></tr>" +
      "<tr><td><span class='de'>schön</span></td><td><span class='de speakable'>schöner</span></td><td><span class='de speakable'>am schönsten</span></td><td>সুন্দর</td></tr>" +
      "<tr><td><span class='de'>groß</span></td><td><span class='de speakable'>größer</span></td><td><span class='de speakable'>am größten</span></td><td>বড়</td></tr>" +
      "<tr><td><span class='de'>teuer</span></td><td><span class='de speakable'>teurer</span></td><td><span class='de speakable'>am teuersten</span></td><td>দামি</td></tr>" +
      "<tr><td colspan='4'><b>অনিয়মিত — মুখস্থ করো:</b></td></tr>" +
      "<tr><td><span class='de'>gut</span></td><td><b class='de speakable'>besser</b></td><td><b class='de speakable'>am besten</b></td><td>ভালো</td></tr>" +
      "<tr><td><span class='de'>viel</span></td><td><b class='de speakable'>mehr</b></td><td><b class='de speakable'>am meisten</b></td><td>অনেক</td></tr>" +
      "<tr><td><span class='de'>gern</span></td><td><b class='de speakable'>lieber</b></td><td><b class='de speakable'>am liebsten</b></td><td>পছন্দ</td></tr>" +
      "</table></div>" +
      "<div class='tip'><b>তুলনার দুটো ছাঁদ:</b><br>• সমান হলে → <b class='de'>so … wie</b>: <span class='de speakable'>Die Jacke ist so teuer wie der Mantel.</span><br>• অসমান হলে → <b class='de'>…er als</b>: <span class='de speakable'>Die Jacke ist teurer als der Mantel.</span></div>"
    },
    {
      h: "৩. welcher / dieser — কোনটা? এটা",
      body: "<p>দোকানে \"কোন জামাটা?\" জিজ্ঞেস করতে <b class='de'>welcher</b>, আর \"এইটা\" বোঝাতে <b class='de'>dieser</b> লাগে। এরা <b class='de'>der/die/das</b>-এর মতোই লেজ নেয়।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>লিঙ্গ</th><th>der/die/das</th><th>কোনটা?</th><th>এইটা</th></tr>" +
      "<tr><td>m</td><td><span class='de'>der Mantel</span></td><td><b class='de'>welcher</b> Mantel?</td><td><b class='de'>dieser</b> Mantel</td></tr>" +
      "<tr><td>f</td><td><span class='de'>die Jacke</span></td><td><b class='de'>welche</b> Jacke?</td><td><b class='de'>diese</b> Jacke</td></tr>" +
      "<tr><td>n</td><td><span class='de'>das Hemd</span></td><td><b class='de'>welches</b> Hemd?</td><td><b class='de'>dieses</b> Hemd</td></tr>" +
      "<tr><td>pl</td><td><span class='de'>die Schuhe</span></td><td><b class='de'>welche</b> Schuhe?</td><td><b class='de'>diese</b> Schuhe</td></tr>" +
      "</table></div>" +
      "<div class='note'>সহজ কৌশল: article-এর শেষ অক্ষরটাই লেজ হয়। d<b>er</b> → welch<b>er</b> · di<b>e</b> → welch<b>e</b> · da<b>s</b> → welche<b>s</b>।</div>"
    }
  ],

  dialog: {
    title_bn: "সংলাপ — জামাকাপড়ের দোকানে",
    lines: [
      { s: "Verkäuferin", d: "Guten Tag! Kann ich Ihnen helfen?", b: "শুভ দিন! আমি আপনাকে সাহায্য করতে পারি?" },
      { s: "Karim", d: "Ja, bitte. Ich suche eine Jacke für den Winter.", b: "হ্যাঁ, দয়া করে। আমি শীতের জন্য একটা জ্যাকেট খুঁজছি।" },
      { s: "Verkäuferin", d: "Welche Größe haben Sie?", b: "আপনার সাইজ কত?" },
      { s: "Karim", d: "Ich glaube, Größe L.", b: "আমার মনে হয় সাইজ L।" },
      { s: "Verkäuferin", d: "Diese Jacke hier ist sehr warm. Gefällt sie Ihnen?", b: "এই জ্যাকেটটা খুব গরম। আপনার পছন্দ হচ্ছে?" },
      { s: "Karim", d: "Ja, sie gefällt mir. Aber haben Sie die in Schwarz?", b: "হ্যাঁ, পছন্দ হচ্ছে। কিন্তু এটা কালো রঙে আছে?" },
      { s: "Verkäuferin", d: "Natürlich. Möchten Sie sie anprobieren?", b: "অবশ্যই। আপনি পরে দেখতে চান?" },
      { s: "Karim", d: "Ja, gern. … Hm, sie ist etwas klein. Sie passt mir nicht.", b: "হ্যাঁ, খুশি হয়ে। … হুম, এটা একটু ছোট। আমার মাপে হচ্ছে না।" },
      { s: "Verkäuferin", d: "Hier ist eine größere. Probieren Sie diese!", b: "এই নিন একটা বড়। এটা পরে দেখুন!" },
      { s: "Karim", d: "Perfekt! Diese passt gut. Was kostet sie?", b: "চমৎকার! এটা ভালো হচ্ছে। এটার দাম কত?" },
      { s: "Verkäuferin", d: "89 Euro. Die schwarze ist billiger als die blaue.", b: "৮৯ ইউরো। কালোটা নীলটার চেয়ে সস্তা।" },
      { s: "Karim", d: "Gut, ich nehme sie. Kann ich mit Karte bezahlen?", b: "ঠিক আছে, আমি এটা নিচ্ছি। কার্ডে পরিশোধ করতে পারি?" },
      { s: "Verkäuferin", d: "Ja, gerne. Und das Hemd steht Ihnen auch sehr gut!", b: "হ্যাঁ, অবশ্যই। আর শার্টটাও আপনাকে খুব মানাচ্ছে!" }
    ]
  },

  drills: [
    { q: "Die Jacke ___ mir. (gefallen)", a: "gefällt — Die Jacke gefällt mir." },
    { q: "Die Schuhe ___ mir. (gefallen, বহুবচন)", a: "gefallen — জিনিস বহুবচন, তাই verb-ও বহুবচন।" },
    { q: "Die Hose ___ mir nicht. (passen)", a: "passt — Die Hose passt mir nicht." },
    { q: "Kannst du ___ helfen? (আমাকে)", a: "mir — Kannst du mir helfen? (helfen সবসময় Dativ)" },
    { q: "Komparativ: teuer →", a: "teurer (e বাদ পড়ে)" },
    { q: "Komparativ: gut →", a: "besser (অনিয়মিত)" },
    { q: "\"জ্যাকেটটা কোটের চেয়ে দামি\" — জার্মানে?", a: "Die Jacke ist teurer als der Mantel." },
    { q: "___ Jacke möchten Sie? (কোনটা, die)", a: "Welche — Welche Jacke möchten Sie?" },
    { q: "ভুল ঠিক করো: Ich gefalle die Jacke.", a: "Die Jacke gefällt mir. — জিনিসটাই কর্তা, মানুষ Dativ-এ।" }
  ],

  speak_bn: [
    "একটা পুরো কেনাকাটা অভিনয় করো: খোঁজা → সাইজ → পরে দেখা → পছন্দ/অপছন্দ → দাম → কেনা।",
    "নিজের আলমারি খুলে ১০টা পোশাক নিয়ে বলো: <span class='de'>Das Hemd gefällt mir. Die Hose passt mir nicht.</span>",
    "৫ জোড়া জিনিস তুলনা করো: <span class='de'>… ist teurer/schöner/besser als …</span>"
  ]
},

/* ============================ A1 · UNIT 12 ============================ */
{
  id: "u12", level: "A1", kap: 12,
  title: "Ab in den Urlaub!",
  title_bn: "চলো ছুটিতে! — ভ্রমণ, বুকিং ও গল্প বলা",
  minutes: 55,
  goal_bn: [
    "ভ্রমণের পরিকল্পনা করতে ও টিকিট/হোটেল বুক করতে পারবে",
    "নিজের ভ্রমণের গল্প অতীতে বলতে পারবে",
    "বাক্য জোড়া দিতে পারবে (und, aber, oder, denn, weil)",
    "A1 লেভেলের সব জ্ঞান একসাথে ব্যবহার করতে পারবে"
  ],
  kks: { vid: "U880_yrKEA0", label: "Kapitel 12: Ab in den Urlaub! — Netzwerk neu A1", len: "1:32:36" },

  words: [
    { d: "der Urlaub",       p: "ডেয়ার উরলাউব",     b: "ছুটি" },
    { d: "die Reise",        p: "ডি রাইজে",          b: "ভ্রমণ" },
    { d: "das Flugzeug",     p: "ডাস ফ্লুকৎসয়েক",   b: "বিমান" },
    { d: "der Zug",          p: "ডেয়ার ৎসুক",        b: "ট্রেন" },
    { d: "der Bus",          p: "ডেয়ার বুস",         b: "বাস" },
    { d: "die Fahrkarte",    p: "ডি ফারকার্টে",      b: "টিকিট" },
    { d: "der Koffer",       p: "ডেয়ার কফার",        b: "সুটকেস" },
    { d: "das Meer",         p: "ডাস মেয়ার",         b: "সমুদ্র" },
    { d: "der Berg",         p: "ডেয়ার বের্গ",       b: "পাহাড়" },
    { d: "das Zimmer",       p: "ডাস ৎসিমার",        b: "ঘর (হোটেলে)" },
    { d: "die Übernachtung", p: "ডি উ্যবারনাখটুং",   b: "রাত্রিযাপন" },
    { d: "buchen",           p: "বুখেন",             b: "বুক করা" },
    { d: "reservieren",      p: "রেজেরভীরেন",        b: "রিজার্ভ করা" },
    { d: "abfahren",         p: "আপফারেন",           b: "ছেড়ে যাওয়া" },
    { d: "ankommen",         p: "আনকমেন",            b: "পৌঁছানো" },
    { d: "besichtigen",      p: "বেজিশটিগেন",        b: "ঘুরে দেখা" },
    { d: "sich erholen",     p: "জিশ এয়ারহোলেন",    b: "বিশ্রাম নিয়ে চাঙ্গা হওয়া" },
    { d: "das Wetter",       p: "ডাস ভেটার",         b: "আবহাওয়া" },
    { d: "die Sonne",        p: "ডি জনে",            b: "সূর্য" },
    { d: "geregnet",         p: "গেরেগনেট",          b: "বৃষ্টি হয়েছিল" }
  ],

  phrases: [
    { d: "Wohin fahren Sie in Urlaub?",       p: "ভোহিন ফারেন জি ইন উরলাউব",      b: "আপনি ছুটিতে কোথায় যাচ্ছেন?" },
    { d: "Ich fahre ans Meer.",               p: "ইশ্ ফারে আন্স মেয়ার",           b: "আমি সমুদ্রে যাচ্ছি।" },
    { d: "Ich möchte ein Zimmer reservieren.", p: "ইশ্ ম্যোশটে আইন ৎসিমার রেজেরভীরেন", b: "আমি একটা ঘর রিজার্ভ করতে চাই।" },
    { d: "Für zwei Nächte, bitte.",           p: "ফ্যুয়ার ৎসভাই নেশটে, বিটে",     b: "দুই রাতের জন্য, দয়া করে।" },
    { d: "Wann fährt der Zug ab?",            p: "ভান ফের্ট ডেয়ার ৎসুক আপ",       b: "ট্রেনটা কখন ছাড়বে?" },
    { d: "Einmal nach Berlin, bitte.",        p: "আইনমাল নাখ বের্লিন, বিটে",      b: "বার্লিনের একটা টিকিট, দয়া করে।" },
    { d: "Ich war letztes Jahr in Italien.",  p: "ইশ্ ভার লেৎসটেস ইয়ার ইন ইটালিয়েন", b: "আমি গত বছর ইতালিতে ছিলাম।" },
    { d: "Wir sind mit dem Zug gefahren.",    p: "ভীয়ার জিন্ট মিট ডেম ৎসুক গেফারেন", b: "আমরা ট্রেনে গিয়েছিলাম।" },
    { d: "Das Wetter war sehr schön.",        p: "ডাস ভেটার ভার জেয়ার শ্যোন",     b: "আবহাওয়া খুব সুন্দর ছিল।" },
    { d: "Es hat jeden Tag geregnet.",        p: "এস হাট ইয়েডেন টাক গেরেগনেট",   b: "প্রতিদিন বৃষ্টি হয়েছিল।" },
    { d: "Wir haben viel besichtigt.",        p: "ভীয়ার হাবেন ফীল বেজিশটিক্ট",   b: "আমরা অনেক কিছু ঘুরে দেখেছি।" },
    { d: "Gute Reise!",                       p: "গুটে রাইজে",                     b: "শুভ যাত্রা!" }
  ],

  grammar: [
    {
      h: "১. বাক্য জোড়ার শব্দ — und, aber, oder, denn",
      body: "<p>এই চারটে শব্দ দুটো বাক্য জোড়া দেয়, কিন্তু <b>শব্দের ক্রম একটুও বদলায় না</b> — এটাই এদের সুবিধা।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>শব্দ</th><th>মানে</th><th>উদাহরণ</th></tr>" +
      "<tr><td><b class='de'>und</b></td><td>এবং</td><td><span class='de speakable'>Ich fahre nach Berlin und ich besuche Freunde.</span></td></tr>" +
      "<tr><td><b class='de'>aber</b></td><td>কিন্তু</td><td><span class='de speakable'>Es war schön, aber es hat geregnet.</span></td></tr>" +
      "<tr><td><b class='de'>oder</b></td><td>অথবা</td><td><span class='de speakable'>Fahren wir mit dem Zug oder fliegen wir?</span></td></tr>" +
      "<tr><td><b class='de'>denn</b></td><td>কারণ</td><td><span class='de speakable'>Ich bleibe zu Hause, denn ich habe kein Geld.</span></td></tr>" +
      "</table></div>" +
      "<div class='tip'><b>ভালো খবর:</b> এই চারটের পরে বাক্য একদম স্বাভাবিক থাকে — কর্তা, তারপর verb। কিছু নড়ে না।</div>"
    },
    {
      h: "২. weil — verb শেষে চলে যায়!",
      body: "<p><b class='de'>weil</b> (কারণ) আর <b class='de'>denn</b> (কারণ) — অর্থ একই, কিন্তু <b class='de'>weil</b> বাক্যের ক্রম পুরো বদলে দেয়।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th></th><th>উদাহরণ</th><th>verb কোথায়?</th></tr>" +
      "<tr><td><b class='de'>denn</b></td><td><span class='de speakable'>Ich bleibe zu Hause, denn ich <b>bin</b> krank.</span></td><td>স্বাভাবিক — ২য় জায়গায়</td></tr>" +
      "<tr><td><b class='de'>weil</b></td><td><span class='de speakable'>Ich bleibe zu Hause, weil ich krank <b>bin</b>.</span></td><td>⚠️ একদম <b>শেষে</b>!</td></tr>" +
      "</table></div>" +
      "<p class='ex'><span class='de'>Ich lerne Deutsch, weil ich in Deutschland <b>arbeiten möchte</b>.</span><br><span class='bn'>আমি জার্মান শিখছি, কারণ আমি জার্মানিতে কাজ করতে চাই।</span></p>" +
      "<div class='warn'><b>মনে রাখো:</b> <b class='de'>weil</b> দেখলেই verb-টা ছুটে গিয়ে বাক্যের একদম শেষে বসে। এটা A2-তে <b class='de'>dass</b>, <b class='de'>wenn</b>-এও একইভাবে কাজ করবে — তাই এখনই পোক্ত করো।</div>" +
      "<div class='tip'>কথা বলার সময় সহজ রাখতে চাইলে <b class='de'>denn</b> ব্যবহার করো (ক্রম বদলায় না)। কিন্তু পরীক্ষায় <b class='de'>weil</b> দেখাতে পারলে নম্বর বেশি পাবে।</div>"
    },
    {
      h: "৩. যানবাহন ও গন্তব্য — mit / nach / in / an",
      body: "<div class='tblwrap'><table>" +
      "<tr><th>কাজ</th><th>ছাঁদ</th><th>উদাহরণ</th></tr>" +
      "<tr><td>যানবাহন</td><td><b class='de'>mit</b> + Dativ</td><td><span class='de speakable'>mit dem Zug / mit dem Bus / mit dem Auto</span></td></tr>" +
      "<tr><td>শহর/দেশে</td><td><b class='de'>nach</b></td><td><span class='de speakable'>nach Berlin / nach Deutschland</span></td></tr>" +
      "<tr><td>article-ওয়ালা দেশ</td><td><b class='de'>in die</b></td><td><span class='de speakable'>in die Schweiz / in die Türkei</span></td></tr>" +
      "<tr><td>সমুদ্রে</td><td><b class='de'>an das → ans</b></td><td><span class='de speakable'>ans Meer</span></td></tr>" +
      "<tr><td>পাহাড়ে</td><td><b class='de'>in die</b></td><td><span class='de speakable'>in die Berge</span></td></tr>" +
      "<tr><td>হাঁটা</td><td><b class='de'>zu Fuß</b></td><td><span class='de speakable'>Ich gehe zu Fuß.</span></td></tr>" +
      "</table></div>" +
      "<div class='note'>বিশেষ ব্যতিক্রম: <b class='de'>zu Fuß</b> (হেঁটে) — এখানে mit বসে না। আর <span class='de'>mit dem Fahrrad</span> (সাইকেলে) কিন্তু <span class='de'>zu Fuß</span> (পায়ে হেঁটে)।</div>"
    },
    {
      h: "৪. ভ্রমণের গল্প বলা — Perfekt + war/hatte একসাথে",
      body: "<p>ভ্রমণের গল্প বলতে জার্মানরা দুটো মিশিয়ে ব্যবহার করে: <b>কাজের জন্য Perfekt</b>, <b>অবস্থার জন্য war/hatte</b>।</p>" +
      "<p class='ex'><span class='de'>Letztes Jahr <b>war</b> ich in Italien. Wir <b>sind</b> mit dem Zug <b>gefahren</b> und <b>haben</b> viel <b>besichtigt</b>. Das Wetter <b>war</b> schön, aber am letzten Tag <b>hat</b> es <b>geregnet</b>. Wir <b>hatten</b> ein kleines Hotel am Meer. Es <b>war</b> wunderbar!</span></p>" +
      "<p><span class='bn'>গত বছর আমি ইতালিতে ছিলাম। আমরা ট্রেনে গিয়েছিলাম আর অনেক কিছু ঘুরে দেখেছি। আবহাওয়া সুন্দর ছিল, কিন্তু শেষ দিনে বৃষ্টি হয়েছিল। আমাদের সমুদ্রের পাশে একটা ছোট হোটেল ছিল। দারুণ ছিল!</span></p>" +
      "<div class='tip'><b>গল্প বলার কাঠামো:</b> কখন → কোথায় → কীভাবে গেলাম → কী করলাম → আবহাওয়া → মতামত।<br>সময়ের শব্দ দিয়ে জুড়ো: <span class='de'>zuerst</span> (প্রথমে) → <span class='de'>dann</span> (তারপর) → <span class='de'>danach</span> (এরপর) → <span class='de'>am letzten Tag</span> (শেষ দিনে) → <span class='de'>schließlich</span> (অবশেষে)।</div>"
    }
  ],

  dialog: {
    title_bn: "সংলাপ — ছুটির গল্প ও পরের পরিকল্পনা",
    lines: [
      { s: "Lena",  d: "Karim, wie war dein Urlaub?", b: "করিম, তোমার ছুটি কেমন ছিল?" },
      { s: "Karim", d: "Sehr schön! Ich war zwei Wochen in Bangladesch.", b: "খুব সুন্দর! আমি দুই সপ্তাহ বাংলাদেশে ছিলাম।" },
      { s: "Lena",  d: "Bist du geflogen?", b: "তুমি বিমানে গিয়েছিলে?" },
      { s: "Karim", d: "Ja, ich bin von Frankfurt nach Dhaka geflogen.", b: "হ্যাঁ, আমি ফ্রাংকফুর্ট থেকে ঢাকায় উড়ে গিয়েছিলাম।" },
      { s: "Lena",  d: "Und was hast du dort gemacht?", b: "আর তুমি সেখানে কী করেছ?" },
      { s: "Karim", d: "Ich habe meine Familie besucht und viel gegessen!", b: "আমি আমার পরিবারের সাথে দেখা করেছি আর অনেক খেয়েছি!" },
      { s: "Lena",  d: "Wie war das Wetter?", b: "আবহাওয়া কেমন ছিল?" },
      { s: "Karim", d: "Sehr warm, aber es hat oft geregnet, denn es war Monsunzeit.", b: "খুব গরম, কিন্তু প্রায়ই বৃষ্টি হয়েছিল, কারণ বর্ষাকাল ছিল।" },
      { s: "Lena",  d: "Und fährst du nächstes Jahr wieder?", b: "আর তুমি পরের বছর আবার যাবে?" },
      { s: "Karim", d: "Ich möchte schon, weil ich meine Eltern sehr vermisse.", b: "আমি তো চাই, কারণ আমি আমার মা-বাবাকে খুব মিস করি।" },
      { s: "Lena",  d: "Das verstehe ich gut. Wohin fährst du diesen Sommer?", b: "এটা আমি ভালো বুঝি। এই গ্রীষ্মে তুমি কোথায় যাচ্ছ?" },
      { s: "Karim", d: "Vielleicht an die Ostsee oder in die Berge. Ich muss noch buchen.", b: "হয়তো বাল্টিক সাগরে অথবা পাহাড়ে। আমাকে এখনো বুক করতে হবে।" },
      { s: "Lena",  d: "Gute Reise, wenn du fährst!", b: "যদি যাও, শুভ যাত্রা!" }
    ]
  },

  drills: [
    { q: "জোড়া দাও (denn): Ich bleibe zu Hause. Ich bin krank.", a: "Ich bleibe zu Hause, denn ich bin krank. (ক্রম স্বাভাবিক)" },
    { q: "একই বাক্য weil দিয়ে লেখো", a: "Ich bleibe zu Hause, weil ich krank bin. (verb শেষে!)" },
    { q: "weil: Ich lerne Deutsch, weil ich in Deutschland ___ ___. (arbeiten / möchten)", a: "arbeiten möchte — modal একদম শেষে।" },
    { q: "Preposition: Ich fahre ___ Berlin.", a: "nach — nach Berlin (শহর)" },
    { q: "Preposition: Ich fahre ___ dem Zug.", a: "mit — mit dem Zug (Dativ)" },
    { q: "Perfekt: Ich ___ nach Dhaka ___. (fliegen)", a: "bin … geflogen — নড়াচড়া, তাই sein।" },
    { q: "Perfekt: Wir ___ viel ___. (besichtigen)", a: "haben … besichtigt — be- দিয়ে শুরু, তাই ge নেই।" },
    { q: "\"গতকাল বৃষ্টি হয়েছিল\" — জার্মানে?", a: "Gestern hat es geregnet." },
    { q: "\"শুভ যাত্রা!\" — জার্মানে?", a: "Gute Reise!" }
  ],

  speak_bn: [
    "তোমার শেষ ভ্রমণের পুরো গল্প বলো — অন্তত ১০টা বাক্য, Perfekt আর war/hatte মিলিয়ে।",
    "৫টা বাক্য <b class='de'>weil</b> দিয়ে বলো (verb শেষে বসাতে ভুলো না) — কেন জার্মান শিখছ, কেন জার্মানি যেতে চাও ইত্যাদি।",
    "একটা হোটেল বুকিং ও একটা ট্রেনের টিকিট কাটার কথোপকথন অভিনয় করো।",
    "🎉 <b>A1 শেষ!</b> এবার A1 মডেল পরীক্ষা দাও, তারপর A2 শুরু করো।"
  ]
},

/* ============================ A2 · UNIT 1 ============================ */
{
  id: "u13", level: "A2", kap: 1,
  title: "Wiedersehen und Neuanfang",
  title_bn: "A2 শুরু — অতীত পাকা করা ও deshalb/trotzdem",
  minutes: 55,
  goal_bn: [
    "নিজের সম্পর্কে বিস্তারিত বলতে পারবে (A1-এর চেয়ে গভীরভাবে)",
    "Modalverb-এর অতীত রূপ ব্যবহার করতে পারবে (konnte, musste, wollte)",
    "deshalb / trotzdem দিয়ে কারণ ও বৈপরীত্য বোঝাতে পারবে",
    "Perfekt একদম নির্ভুলভাবে ব্যবহার করতে পারবে"
  ],
  kks: { vid: "xt4y4kHdHo4", label: "Kapitel 1: Grammatik — Netzwerk neu A2", len: "39:43" },

  words: [
    { d: "der Neuanfang",   p: "ডেয়ার নয়আনফাং",    b: "নতুন শুরু" },
    { d: "die Veränderung", p: "ডি ফেয়ারএনডারুং",  b: "পরিবর্তন" },
    { d: "die Entscheidung",p: "ডি এন্টশাইডুং",     b: "সিদ্ধান্ত" },
    { d: "der Grund",       p: "ডেয়ার গ্রুন্ট",     b: "কারণ" },
    { d: "die Möglichkeit", p: "ডি ম্যোগলিশকাইট",  b: "সম্ভাবনা / সুযোগ" },
    { d: "die Zukunft",     p: "ডি ৎসুকুন্ফ্ট",     b: "ভবিষ্যৎ" },
    { d: "die Vergangenheit", p: "ডি ফেয়ারগাঙেনহাইট", b: "অতীত" },
    { d: "sich entscheiden",p: "জিশ এন্টশাইডেন",    b: "সিদ্ধান্ত নেওয়া" },
    { d: "sich verändern",  p: "জিশ ফেয়ারএনডার্ন", b: "বদলে যাওয়া" },
    { d: "erzählen",        p: "এয়ারৎসেলেন",       b: "গল্প বলা / বর্ণনা করা" },
    { d: "erreichen",       p: "এয়াররাইশেন",       b: "অর্জন করা / পৌঁছানো" },
    { d: "versuchen",       p: "ফেয়ারজুখেন",       b: "চেষ্টা করা" },
    { d: "schaffen",        p: "শাফেন",             b: "পেরে ওঠা / সফল হওয়া" },
    { d: "deshalb",         p: "ডেসহালব",           b: "তাই / সেজন্য" },
    { d: "trotzdem",        p: "ট্রোৎসডেম",         b: "তবুও" },
    { d: "damals",          p: "ডামাল্স",           b: "তখন (সেই সময়ে)" },
    { d: "inzwischen",      p: "ইনৎসভিশেন",         b: "এর মধ্যে / এখন" },
    { d: "endlich",         p: "এন্টলিশ",           b: "অবশেষে" },
    { d: "plötzlich",       p: "প্ল্যোৎসলিশ",       b: "হঠাৎ" },
    { d: "eigentlich",      p: "আইগেন্টলিশ",        b: "আসলে / মূলত" }
  ],

  phrases: [
    { d: "Früher habe ich in Dhaka gewohnt.",       p: "ফ্র্যুয়ার হাবে ইশ্ ইন ঢাকা গেভোন্ট",   b: "আগে আমি ঢাকায় থাকতাম।" },
    { d: "Damals konnte ich kein Deutsch.",         p: "ডামাল্স কন্টে ইশ্ কাইন ডয়েচ",          b: "তখন আমি জার্মান জানতাম না।" },
    { d: "Ich musste viel arbeiten.",               p: "ইশ্ মুসটে ফীল আরবাইটেন",               b: "আমাকে অনেক কাজ করতে হয়েছিল।" },
    { d: "Ich wollte unbedingt nach Deutschland.",  p: "ইশ্ ভলটে উনবেডিংট নাখ ডয়েচলান্ট",     b: "আমি যে করেই হোক জার্মানিতে আসতে চেয়েছিলাম।" },
    { d: "Ich hatte kein Geld, deshalb bin ich geblieben.", p: "ইশ্ হাটে কাইন গেল্ট, ডেসহালব বিন ইশ্ গেব্লীবেন", b: "আমার টাকা ছিল না, তাই আমি থেকে গিয়েছিলাম।" },
    { d: "Es war schwer. Trotzdem habe ich weitergemacht.", p: "এস ভার শভেয়ার। ট্রোৎসডেম হাবে ইশ্ ভাইটারগেমাখ্‌ট", b: "এটা কঠিন ছিল। তবুও আমি চালিয়ে গিয়েছি।" },
    { d: "Inzwischen spreche ich ganz gut Deutsch.", p: "ইনৎসভিশেন শপ্রেশে ইশ্ গানৎস গুট ডয়েচ", b: "এর মধ্যে আমি বেশ ভালো জার্মান বলি।" },
    { d: "Ich habe mich für Deutschland entschieden.", p: "ইশ্ হাবে মিশ ফ্যুয়ার ডয়েচলান্ট এন্টশীডেন", b: "আমি জার্মানির জন্য সিদ্ধান্ত নিয়েছি।" },
    { d: "Mein Leben hat sich sehr verändert.",     p: "মাইন লেবেন হাট জিশ জেয়ার ফেয়ারএনডার্ট", b: "আমার জীবন অনেক বদলে গেছে।" },
    { d: "Endlich habe ich es geschafft!",          p: "এন্টলিশ হাবে ইশ্ এস গেশাফ্ট",          b: "অবশেষে আমি পেরেছি!" }
  ],

  grammar: [
    {
      h: "১. Modalverb-এর অতীত (Präteritum) — খুব দরকারি",
      body: "<p>অতীতে \"পারতাম / করতে হয়েছিল / চেয়েছিলাম\" বলতে modal verb-এর অতীত রূপ লাগে। ভালো খবর: <b>Umlaut উঠে যায়, আর -te যোগ হয়</b>।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>বর্তমান</th><th>অতীত (ich/er)</th><th>বাংলা</th></tr>" +
      "<tr><td><span class='de'>kann</span></td><td><b class='de speakable'>konnte</b> (কন্টে)</td><td>পারতাম</td></tr>" +
      "<tr><td><span class='de'>muss</span></td><td><b class='de speakable'>musste</b> (মুসটে)</td><td>করতে হয়েছিল</td></tr>" +
      "<tr><td><span class='de'>will</span></td><td><b class='de speakable'>wollte</b> (ভলটে)</td><td>চেয়েছিলাম</td></tr>" +
      "<tr><td><span class='de'>darf</span></td><td><b class='de speakable'>durfte</b> (ডুরফটে)</td><td>অনুমতি ছিল</td></tr>" +
      "<tr><td><span class='de'>soll</span></td><td><b class='de speakable'>sollte</b> (জলটে)</td><td>উচিত ছিল</td></tr>" +
      "<tr><td><span class='de'>mag</span></td><td><b class='de speakable'>mochte</b> (মখটে)</td><td>পছন্দ করতাম</td></tr>" +
      "</table></div>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>কে</th><th>können → konnte</th></tr>" +
      "<tr><td>ich / er / sie / es</td><td><b class='de'>konnte</b> (একই!)</td></tr>" +
      "<tr><td>du</td><td><span class='de'>konntest</span></td></tr>" +
      "<tr><td>wir / sie / Sie</td><td><span class='de'>konnten</span></td></tr>" +
      "<tr><td>ihr</td><td><span class='de'>konntet</span></td></tr>" +
      "</table></div>" +
      "<div class='warn'><b>গুরুত্বপূর্ণ:</b> Modal verb-এর ক্ষেত্রে জার্মানরা Perfekt ব্যবহার করে <b>না</b> — সবসময় এই Präteritum রূপটাই বলে।<br><span class='de'>Ich <b>musste</b> arbeiten.</span> ✅ · <s>Ich habe arbeiten müssen.</s> (ব্যাকরণে ঠিক, কিন্তু কথায় বলে না)</div>"
    },
    {
      h: "২. deshalb — \"তাই / সেজন্য\" (ফল বোঝায়)",
      body: "<p><b class='de'>weil</b> কারণ বলে; <b class='de'>deshalb</b> তার <b>ফল</b> বলে। কিন্তু <b class='de'>deshalb</b>-এর পরে verb সাথে সাথেই আসে!</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>ছাঁদ</th><th>উদাহরণ</th><th>verb কোথায়?</th></tr>" +
      "<tr><td><b class='de'>weil</b> (কারণ)</td><td><span class='de speakable'>Ich lerne Deutsch, weil ich hier arbeiten will.</span></td><td>শেষে</td></tr>" +
      "<tr><td><b class='de'>deshalb</b> (তাই)</td><td><span class='de speakable'>Ich will hier arbeiten, deshalb lerne ich Deutsch.</span></td><td>সাথে সাথেই (২য় জায়গা)</td></tr>" +
      "</table></div>" +
      "<div class='tip'><b class='de'>deshalb</b> নিজেই ১ম জায়গা নিয়ে নেয়, তাই তার পরেই verb, তারপর কর্তা:<br><span class='de'>… , deshalb <b>lerne ich</b> Deutsch.</span> (verb আগে, ich পরে)<br>একই কাজ করে: <b class='de'>darum</b>, <b class='de'>daher</b>, <b class='de'>also</b>।</div>"
    },
    {
      h: "৩. trotzdem — \"তবুও\" (বৈপরীত্য)",
      body: "<p>কিছু একটা বাধা ছিল, কিন্তু তবুও কাজটা হয়েছে — এটা বোঝাতে <b class='de'>trotzdem</b>।</p>" +
      "<p class='ex'><span class='de'>Das Wetter war schlecht. <b>Trotzdem sind wir</b> spazieren gegangen.</span><br><span class='bn'>আবহাওয়া খারাপ ছিল। তবুও আমরা হাঁটতে বেরিয়েছি।</span></p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>সংযোজক</th><th>মানে</th><th>verb-এর ক্রম</th></tr>" +
      "<tr><td><b class='de'>aber</b></td><td>কিন্তু</td><td>স্বাভাবিক (কিছু বদলায় না)</td></tr>" +
      "<tr><td><b class='de'>trotzdem</b></td><td>তবুও</td><td>verb সাথে সাথে (২য় জায়গা)</td></tr>" +
      "<tr><td><b class='de'>obwohl</b></td><td>যদিও</td><td>verb একদম শেষে</td></tr>" +
      "</table></div>" +
      "<p class='ex'><span class='de'><b>Obwohl</b> das Wetter schlecht <b>war</b>, sind wir spazieren gegangen.</span><br><span class='bn'>যদিও আবহাওয়া খারাপ ছিল, আমরা হাঁটতে বেরিয়েছি।</span></p>" +
      "<div class='note'>তিনটে দলে ভাগ করে মনে রাখো:<br>• <b>কিছু বদলায় না:</b> und, aber, oder, denn<br>• <b>verb ২য় জায়গায়:</b> deshalb, trotzdem, dann, darum<br>• <b>verb একদম শেষে:</b> weil, obwohl, dass, wenn</div>"
    },
    {
      h: "৪. অতীতের তিনটে রূপ — কখন কোনটা?",
      body: "<div class='tblwrap'><table>" +
      "<tr><th>রূপ</th><th>কখন ব্যবহার</th><th>উদাহরণ</th></tr>" +
      "<tr><td><b>Perfekt</b></td><td>কথা বলার সময় সব কাজে (প্রধান)</td><td><span class='de speakable'>Ich habe gearbeitet.</span></td></tr>" +
      "<tr><td><b class='de'>war / hatte</b></td><td>sein ও haben-এর জন্য সবসময়</td><td><span class='de speakable'>Ich war müde. Ich hatte Zeit.</span></td></tr>" +
      "<tr><td><b>Modal Präteritum</b></td><td>modal verb-এর জন্য সবসময়</td><td><span class='de speakable'>Ich konnte nicht kommen.</span></td></tr>" +
      "<tr><td><b>Präteritum</b> (অন্য verb)</td><td>শুধু লেখায় — গল্প, খবর, বই</td><td><span class='de'>Er ging nach Hause.</span> (ইউনিট ৫-এ)</td></tr>" +
      "</table></div>" +
      "<div class='tip'><b>সহজ সূত্র মুখস্থ করো:</b><br>কথা বলার সময় → <b>Perfekt</b>, কিন্তু sein/haben/modal হলে → <b>Präteritum</b> (war, hatte, konnte, musste)।<br>এই একটা নিয়ম মানলে তোমার অতীত কাল ৯৫% ঠিক হবে।</div>"
    }
  ],

  dialog: {
    title_bn: "সংলাপ — অনেক দিন পর দেখা",
    lines: [
      { s: "Sara",  d: "Karim! So lange nicht gesehen. Wie geht es dir?", b: "করিম! অনেক দিন দেখা হয়নি। কেমন আছো?" },
      { s: "Karim", d: "Sara! Sehr gut, danke. Inzwischen hat sich viel verändert.", b: "সারা! খুব ভালো, ধন্যবাদ। এর মধ্যে অনেক কিছু বদলে গেছে।" },
      { s: "Sara",  d: "Erzähl mal! Wo arbeitest du jetzt?", b: "বলো তো! এখন কোথায় কাজ করো?" },
      { s: "Karim", d: "Bei einer IT-Firma in München. Früher war ich in Berlin.", b: "মিউনিখের একটা আইটি কোম্পানিতে। আগে আমি বার্লিনে ছিলাম।" },
      { s: "Sara",  d: "München? Warum bist du umgezogen?", b: "মিউনিখ? তুমি কেন বাসা বদলেছ?" },
      { s: "Karim", d: "Die Arbeit in Berlin war nicht gut bezahlt, deshalb habe ich gewechselt.", b: "বার্লিনের কাজে বেতন ভালো ছিল না, তাই আমি বদলেছি।" },
      { s: "Sara",  d: "War der Anfang schwer?", b: "শুরুটা কঠিন ছিল?" },
      { s: "Karim", d: "Ja, sehr. Ich konnte damals fast kein Deutsch und musste alles neu lernen.", b: "হ্যাঁ, খুব। তখন আমি প্রায় কোনো জার্মান জানতাম না আর সব নতুন করে শিখতে হয়েছিল।" },
      { s: "Sara",  d: "Aber du wolltest nicht aufgeben?", b: "কিন্তু তুমি হার মানতে চাওনি?" },
      { s: "Karim", d: "Nein. Es war hart, trotzdem habe ich jeden Tag geübt.", b: "না। কঠিন ছিল, তবুও আমি প্রতিদিন অভ্যাস করেছি।" },
      { s: "Sara",  d: "Und jetzt sprichst du wirklich gut!", b: "আর এখন তুমি সত্যিই ভালো বলো!" },
      { s: "Karim", d: "Danke! Endlich habe ich es geschafft.", b: "ধন্যবাদ! অবশেষে আমি পেরেছি।" }
    ]
  },

  drills: [
    { q: "অতীতে লেখো: Ich kann nicht kommen.", a: "Ich konnte nicht kommen." },
    { q: "অতীতে লেখো: Ich muss arbeiten.", a: "Ich musste arbeiten." },
    { q: "অতীতে লেখো: Er will nach Berlin fahren.", a: "Er wollte nach Berlin fahren." },
    { q: "deshalb দিয়ে জোড়া দাও: Ich habe keine Zeit. Ich komme nicht.", a: "Ich habe keine Zeit, deshalb komme ich nicht. (verb আগে, ich পরে)" },
    { q: "trotzdem: Es hat geregnet. Wir sind gegangen.", a: "Es hat geregnet, trotzdem sind wir gegangen." },
    { q: "obwohl দিয়ে লেখো: Es hat geregnet. Wir sind gegangen.", a: "Obwohl es geregnet hat, sind wir gegangen. (verb শেষে)" },
    { q: "ভুল ঠিক করো: Ich habe arbeiten müssen. (কথ্য রূপ)", a: "Ich musste arbeiten. — modal-এ Präteritum ব্যবহার করো।" },
    { q: "ভুল ঠিক করো: …, deshalb ich lerne Deutsch.", a: "…, deshalb lerne ich Deutsch. — deshalb-এর পরে verb।" }
  ],

  speak_bn: [
    "নিজের গল্প বলো: <span class='de'>Früher … Damals konnte ich … Deshalb … Trotzdem … Inzwischen …</span>",
    "৫টা বাক্য <b class='de'>deshalb</b> দিয়ে আর ৫টা <b class='de'>trotzdem</b> দিয়ে বলো — verb-এর জায়গা খেয়াল রাখো।",
    "অতীতে ৬টা modal বাক্য বলো: <span class='de'>konnte, musste, wollte, durfte, sollte, mochte</span>।"
  ]
},

/* ============================ A2 · UNIT 2 ============================ */
{
  id: "u14", level: "A2", kap: 2,
  title: "Wohnen und Zusammenleben",
  title_bn: "বাসা ও একসাথে থাকা — Dativ সম্পূর্ণভাবে",
  minutes: 55,
  goal_bn: [
    "Dativ-এর সব article ও সর্বনাম নির্ভুলভাবে ব্যবহার করতে পারবে",
    "Dativ preposition (mit, bei, zu, von, seit, aus, nach) আয়ত্তে আনবে",
    "কাউকে কিছু দেওয়া/দেখানো/লেখা বোঝাতে পারবে (দুই কর্মের বাক্য)",
    "প্রতিবেশী ও বাসার সমস্যা নিয়ে কথা বলতে পারবে"
  ],
  kks: { vid: "Z8IolhUCFUQ", label: "Kapitel 2: Grammatik — Netzwerk neu A2", len: "32:49" },

  words: [
    { d: "der Nachbar",      p: "ডেয়ার নাখবার",     b: "প্রতিবেশী" },
    { d: "die Wohngemeinschaft (WG)", p: "ডি ভোনগেমাইনশাফ্ট", b: "শেয়ার করা বাসা" },
    { d: "der Mitbewohner",  p: "ডেয়ার মিটবেভোনার",  b: "রুমমেট" },
    { d: "der Vermieter",    p: "ডেয়ার ফেয়ারমীটার", b: "বাড়িওয়ালা" },
    { d: "der Mietvertrag",  p: "ডেয়ার মীটফেয়ারট্রাক", b: "ভাড়ার চুক্তি" },
    { d: "die Nebenkosten",  p: "ডি নেবেনকস্টেন",   b: "অতিরিক্ত খরচ (পানি, হিটিং)" },
    { d: "die Kaution",      p: "ডি কাউৎসিওন",      b: "জামানত (সিকিউরিটি ডিপোজিট)" },
    { d: "der Lärm",         p: "ডেয়ার লের্ম",      b: "শব্দ / গোলমাল" },
    { d: "die Ruhe",         p: "ডি রুয়ে",          b: "শান্তি / নীরবতা" },
    { d: "der Müll",         p: "ডেয়ার ম্যুল",      b: "আবর্জনা" },
    { d: "die Treppe",       p: "ডি ট্রেপে",        b: "সিঁড়ি" },
    { d: "der Keller",       p: "ডেয়ার কেলার",      b: "বেসমেন্ট" },
    { d: "helfen",           p: "হেলফেন",           b: "সাহায্য করা (+Dativ)" },
    { d: "gehören",          p: "গেহ্যোরেন",        b: "মালিকানা হওয়া (+Dativ)" },
    { d: "danken",           p: "ডাংকেন",           b: "ধন্যবাদ দেওয়া (+Dativ)" },
    { d: "leihen",           p: "লাইয়েন",           b: "ধার দেওয়া" },
    { d: "zeigen",           p: "ৎসাইগেন",          b: "দেখানো" },
    { d: "erklären",         p: "এয়ারক্লেরেন",     b: "ব্যাখ্যা করা" },
    { d: "sich beschweren",  p: "জিশ বেশভেরেন",     b: "অভিযোগ করা" },
    { d: "aufpassen",        p: "আউফপাসেন",         b: "খেয়াল রাখা" }
  ],

  phrases: [
    { d: "Ich wohne bei meinem Freund.",        p: "ইশ্ ভোনে বাই মাইনেম ফ্রয়েন্ট",     b: "আমি আমার বন্ধুর কাছে থাকি।" },
    { d: "Ich komme aus Bangladesch.",          p: "ইশ্ কমে আউস বাংলাদেশ",             b: "আমি বাংলাদেশ থেকে এসেছি।" },
    { d: "Ich fahre mit dem Bus zur Arbeit.",   p: "ইশ্ ফারে মিট ডেম বুস ৎসুর আরবাইট", b: "আমি বাসে করে কাজে যাই।" },
    { d: "Kannst du mir bitte helfen?",         p: "কান্স্ট ডু মীয়ার বিটে হেলফেন",    b: "তুমি কি আমাকে সাহায্য করতে পারো?" },
    { d: "Ich zeige dir die Wohnung.",          p: "ইশ্ ৎসাইগে ডীয়ার ডি ভোনুং",       b: "আমি তোমাকে ফ্ল্যাটটা দেখাচ্ছি।" },
    { d: "Wem gehört das Fahrrad?",             p: "ভেম গেহ্যোর্ট ডাস ফারাট",          b: "সাইকেলটা কার?" },
    { d: "Das gehört meinem Nachbarn.",         p: "ডাস গেহ্যোর্ট মাইনেম নাখবার্ন",    b: "এটা আমার প্রতিবেশীর।" },
    { d: "Ich wohne seit einem Jahr hier.",     p: "ইশ্ ভোনে জাইট আইনেম ইয়ার হীয়ার",  b: "আমি এক বছর থেকে এখানে থাকি।" },
    { d: "Nach der Arbeit gehe ich einkaufen.", p: "নাখ ডেয়ার আরবাইট গেয়ে ইশ্ আইনকাউফেন", b: "কাজের পরে আমি বাজার করতে যাই।" },
    { d: "Der Lärm stört mich sehr.",           p: "ডেয়ার লের্ম শট্যোর্ট মিশ জেয়ার",  b: "শব্দটা আমাকে খুব বিরক্ত করে।" },
    { d: "Ab 22 Uhr muss Ruhe sein.",           p: "আপ ৎসভাইউন্টৎসভানৎসিশ উয়ার মুস রুয়ে জাইন", b: "রাত ১০টার পর শান্তি থাকতে হবে।" }
  ],

  grammar: [
    {
      h: "১. Dativ-এর সব article — পূর্ণ টেবিল",
      body: "<p>A1-এ তুমি <b class='de'>mir/dir</b> আর <b class='de'>im/in der</b> শিখেছ। এবার পুরো ছবিটা দেখো:</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>লিঙ্গ</th><th>Nominativ</th><th>Akkusativ</th><th>Dativ</th></tr>" +
      "<tr><td>m</td><td><span class='de'>der / ein</span></td><td><span class='de'>den / einen</span></td><td><b class='de'>dem / einem</b></td></tr>" +
      "<tr><td>f</td><td><span class='de'>die / eine</span></td><td><span class='de'>die / eine</span></td><td><b class='de'>der / einer</b></td></tr>" +
      "<tr><td>n</td><td><span class='de'>das / ein</span></td><td><span class='de'>das / ein</span></td><td><b class='de'>dem / einem</b></td></tr>" +
      "<tr><td>pl</td><td><span class='de'>die</span></td><td><span class='de'>die</span></td><td><b class='de'>den + n</b></td></tr>" +
      "</table></div>" +
      "<div class='tip'><b>মনে রাখার ছড়া:</b> Dativ-এ <b>dem — der — dem — den</b>। (পুরুষ ও ক্লীব একই = dem; স্ত্রী = der; বহুবচন = den আর শব্দের শেষে একটা <b>-n</b> যোগ হয়)</div>" +
      "<div class='warn'><b>দুটো বড় ফাঁদ:</b><br>১. স্ত্রীবাচক <span class='de'>die</span> → Dativ-এ <b class='de'>der</b> হয়ে যায়। <span class='de'>mit <b>der</b> Frau</span> — এটা পুরুষবাচক নয়!<br>২. বহুবচনে বিশেষ্যের শেষেও <b>-n</b> লাগে: <span class='de'>mit den Kinder<b>n</b></span>, <span class='de'>mit den Freunde<b>n</b></span>।</div>"
    },
    {
      h: "২. Dativ preposition — এই ৭টা সবসময় Dativ নেয়",
      body: "<p>এই preposition-গুলোর পরে <b>সবসময়</b> Dativ, কোনো ব্যতিক্রম নেই। মুখস্থ করে ফেলো।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>Preposition</th><th>মানে</th><th>উদাহরণ</th></tr>" +
      "<tr><td><b class='de'>mit</b></td><td>সাথে / দিয়ে</td><td><span class='de speakable'>mit dem Bus</span> — বাসে করে</td></tr>" +
      "<tr><td><b class='de'>bei</b></td><td>কাছে / এর বাসায়</td><td><span class='de speakable'>bei meinem Freund</span> — বন্ধুর কাছে</td></tr>" +
      "<tr><td><b class='de'>zu</b></td><td>দিকে (মানুষ/জায়গা)</td><td><span class='de speakable'>zum Arzt</span> — ডাক্তারের কাছে</td></tr>" +
      "<tr><td><b class='de'>von</b></td><td>থেকে / এর</td><td><span class='de speakable'>von meiner Mutter</span> — আমার মায়ের কাছ থেকে</td></tr>" +
      "<tr><td><b class='de'>aus</b></td><td>ভেতর থেকে</td><td><span class='de speakable'>aus der Schweiz</span> — সুইজারল্যান্ড থেকে</td></tr>" +
      "<tr><td><b class='de'>seit</b></td><td>থেকে (সময়)</td><td><span class='de speakable'>seit einem Jahr</span> — এক বছর থেকে</td></tr>" +
      "<tr><td><b class='de'>nach</b></td><td>পরে / দিকে (শহর)</td><td><span class='de speakable'>nach der Arbeit</span> — কাজের পরে</td></tr>" +
      "</table></div>" +
      "<div class='tip'><b>সংক্ষেপ মুখস্থ করো:</b> <b class='de'>zu dem → zum</b> · <b class='de'>zu der → zur</b> · <b class='de'>bei dem → beim</b> · <b class='de'>von dem → vom</b>। জার্মানরা কথায় প্রায় সবসময় সংক্ষেপ বলে।</div>" +
      "<div class='note'>একটা ছড়া বানিয়ে মুখস্থ করো: <b>mit — bei — zu — von — aus — seit — nach</b>। রোজ একবার বলো, এক সপ্তাহে পাকা হয়ে যাবে।</div>"
    },
    {
      h: "৩. Dativ verb — যাদের সাথে সবসময় Dativ",
      body: "<p>কিছু verb-এর কর্ম Akkusativ নয়, <b>Dativ</b>। এগুলো আলাদা করে মুখস্থ করতে হয়।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>Verb</th><th>বাংলা</th><th>উদাহরণ</th></tr>" +
      "<tr><td><b class='de'>helfen</b></td><td>সাহায্য করা</td><td><span class='de speakable'>Ich helfe dir.</span> — আমি তোমাকে সাহায্য করি।</td></tr>" +
      "<tr><td><b class='de'>gehören</b></td><td>মালিকানা হওয়া</td><td><span class='de speakable'>Das gehört mir.</span> — এটা আমার।</td></tr>" +
      "<tr><td><b class='de'>danken</b></td><td>ধন্যবাদ দেওয়া</td><td><span class='de speakable'>Ich danke Ihnen.</span> — আপনাকে ধন্যবাদ।</td></tr>" +
      "<tr><td><b class='de'>gefallen</b></td><td>পছন্দ হওয়া</td><td><span class='de speakable'>Das gefällt mir.</span> — এটা আমার পছন্দ।</td></tr>" +
      "<tr><td><b class='de'>passen</b></td><td>মাপে হওয়া</td><td><span class='de speakable'>Das passt mir.</span></td></tr>" +
      "<tr><td><b class='de'>schmecken</b></td><td>স্বাদ লাগা</td><td><span class='de speakable'>Das schmeckt mir.</span></td></tr>" +
      "<tr><td><b class='de'>antworten</b></td><td>উত্তর দেওয়া</td><td><span class='de speakable'>Ich antworte dir.</span></td></tr>" +
      "<tr><td><b class='de'>gratulieren</b></td><td>অভিনন্দন জানানো</td><td><span class='de speakable'>Ich gratuliere dir!</span></td></tr>" +
      "</table></div>" +
      "<div class='warn'>ইংরেজি/বাংলায় এগুলো স্বাভাবিক কর্ম মনে হয়, তাই ভুল হয় বেশি: <span class='de'>Ich helfe <b>dir</b></span> ✅ · <s>Ich helfe dich</s> ❌</div>"
    },
    {
      h: "৪. দুই কর্মের বাক্য — কাকে কী?",
      body: "<p><b class='de'>geben</b> (দেওয়া), <b class='de'>zeigen</b> (দেখানো), <b class='de'>schreiben</b> (লেখা), <b class='de'>erklären</b> (ব্যাখ্যা করা) — এদের দুটো কর্ম থাকে: <b>কাকে</b> (Dativ) আর <b>কী</b> (Akkusativ)।</p>" +
      "<div class='tip' style='font-size:15.5px'><b>verb + কাকে (Dativ) + কী (Akkusativ)</b></div>" +
      "<p class='ex'><span class='de'>Ich zeige <b>dir</b> (কাকে) <b>die Wohnung</b> (কী).</span><br><span class='bn'>আমি তোমাকে ফ্ল্যাটটা দেখাচ্ছি।</span></p>" +
      "<p class='ex'><span class='de'>Er gibt <b>seinem Nachbarn</b> <b>den Schlüssel</b>.</span><br><span class='bn'>সে তার প্রতিবেশীকে চাবিটা দেয়।</span></p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>নিয়ম</th><th>উদাহরণ</th></tr>" +
      "<tr><td>দুটোই বিশেষ্য → <b>Dativ আগে</b></td><td><span class='de'>Ich gebe dem Kind das Buch.</span></td></tr>" +
      "<tr><td>Akkusativ সর্বনাম হলে → <b>সেটা আগে</b></td><td><span class='de'>Ich gebe <b>es</b> dem Kind.</span></td></tr>" +
      "<tr><td>দুটোই সর্বনাম → <b>Akkusativ আগে</b></td><td><span class='de'>Ich gebe <b>es</b> ihm.</span></td></tr>" +
      "</table></div>" +
      "<div class='note'>সহজ সূত্র: <b>ছোট (সর্বনাম) আগে, বড় (বিশেষ্য) পরে।</b></div>"
    }
  ],

  dialog: {
    title_bn: "সংলাপ — নতুন WG-তে ও প্রতিবেশীর সাথে",
    lines: [
      { s: "Anna",  d: "Willkommen! Ich zeige dir gleich die Wohnung.", b: "স্বাগতম! আমি এখনই তোমাকে ফ্ল্যাটটা দেখাচ্ছি।" },
      { s: "Karim", d: "Danke! Wie lange wohnst du schon hier?", b: "ধন্যবাদ! তুমি কতদিন থেকে এখানে থাকো?" },
      { s: "Anna",  d: "Seit zwei Jahren. Ich komme aus Österreich.", b: "দুই বছর থেকে। আমি অস্ট্রিয়া থেকে এসেছি।" },
      { s: "Karim", d: "Und wem gehört das Fahrrad im Keller?", b: "আর বেসমেন্টের সাইকেলটা কার?" },
      { s: "Anna",  d: "Das gehört unserem Nachbarn, Herrn Weber.", b: "এটা আমাদের প্রতিবেশী মিস্টার ভেবারের।" },
      { s: "Karim", d: "Wie komme ich am besten zur Arbeit?", b: "কাজে যাওয়ার সবচেয়ে ভালো উপায় কী?" },
      { s: "Anna",  d: "Fahr mit dem Bus. Nach der Brücke musst du aussteigen.", b: "বাসে যাও। সেতুর পরে তোমাকে নামতে হবে।" },
      { s: "Karim", d: "Danke, das hilft mir sehr. Noch eine Frage zum Müll?", b: "ধন্যবাদ, এটা আমাকে খুব সাহায্য করল। আবর্জনা নিয়ে আরেকটা প্রশ্ন?" },
      { s: "Anna",  d: "Ja, ich erkläre dir das System. Es ist nicht schwer.", b: "হ্যাঁ, আমি তোমাকে সিস্টেমটা ব্যাখ্যা করছি। এটা কঠিন না।" },
      { s: "Karim", d: "Und wie ist es mit dem Lärm abends?", b: "আর সন্ধ্যায় শব্দের ব্যাপারটা কেমন?" },
      { s: "Anna",  d: "Ab 22 Uhr muss Ruhe sein. Sonst beschweren sich die Nachbarn.", b: "রাত ১০টার পর শান্তি থাকতে হবে। নইলে প্রতিবেশীরা অভিযোগ করে।" },
      { s: "Karim", d: "Alles klar. Ich danke dir für die Hilfe!", b: "সব বুঝেছি। সাহায্যের জন্য তোমাকে ধন্যবাদ!" }
    ]
  },

  drills: [
    { q: "Dativ: Ich fahre mit ___ Bus. (der)", a: "dem — mit dem Bus" },
    { q: "Dativ: Ich wohne bei ___ Freundin. (die)", a: "meiner / der — bei der Freundin (die → der!)" },
    { q: "Dativ: Ich spiele mit ___ Kindern. (die, বহুবচন)", a: "den — mit den Kindern (শেষে -n!)" },
    { q: "সংক্ষেপ: zu dem Arzt →", a: "zum Arzt" },
    { q: "সংক্ষেপ: zu der Arbeit →", a: "zur Arbeit" },
    { q: "ভুল ঠিক করো: Ich helfe dich.", a: "Ich helfe dir. — helfen সবসময় Dativ।" },
    { q: "Wem gehört das? (আমার)", a: "Das gehört mir." },
    { q: "সাজাও: ich / dir / zeige / die Wohnung", a: "Ich zeige dir die Wohnung. (Dativ আগে)" },
    { q: "সর্বনাম দিয়ে লেখো: Ich gebe dem Kind das Buch.", a: "Ich gebe es ihm. (Akkusativ সর্বনাম আগে)" }
  ],

  speak_bn: [
    "৭টা Dativ preposition দিয়ে ৭টা নিজের বাক্য বলো: <span class='de'>mit, bei, zu, von, aus, seit, nach</span>।",
    "নিজের বাসা/WG নিয়ে ৮টা বাক্য বলো — কতদিন, কার সাথে, কীভাবে কাজে যাও।",
    "৫টা Dativ verb দিয়ে বাক্য বানাও: <span class='de'>helfen, gehören, gefallen, danken, schmecken</span>।"
  ]
},

/* ============================ A2 · UNIT 3 ============================ */
{
  id: "u15", level: "A2", kap: 3,
  title: "Beschreiben und vergleichen",
  title_bn: "বর্ণনা ও তুলনা — বিশেষণের লেজ (Adjektivdeklination)",
  minutes: 60,
  goal_bn: [
    "বিশেষ্যের আগে বিশেষণে ঠিক লেজ বসাতে পারবে",
    "মানুষ, জিনিস ও জায়গার বিস্তারিত বর্ণনা দিতে পারবে",
    "তুলনা ও সর্বোচ্চ রূপ বিশেষ্যের আগে ব্যবহার করতে পারবে",
    "নিজের পছন্দ যুক্তি দিয়ে বোঝাতে পারবে"
  ],
  kks: { vid: "UIQf1Z2QT-0", label: "Kapitel 3: Grammatik — Netzwerk neu A2", len: "28:39" },

  words: [
    { d: "freundlich",     p: "ফ্রয়েন্ডলিশ",      b: "বন্ধুভাবাপন্ন" },
    { d: "hilfsbereit",    p: "হিল্ফ্সবেরাইট",    b: "সাহায্যপরায়ণ" },
    { d: "ruhig",          p: "রুইশ",              b: "শান্ত" },
    { d: "laut",           p: "লাউট",              b: "উচ্চস্বরে / শব্দময়" },
    { d: "fleißig",        p: "ফ্লাইসিশ",          b: "পরিশ্রমী" },
    { d: "faul",           p: "ফাউল",              b: "অলস" },
    { d: "geduldig",       p: "গেডুলডিশ",          b: "ধৈর্যশীল" },
    { d: "ehrlich",        p: "এয়ারলিশ",          b: "সৎ" },
    { d: "modern / alt",   p: "মোডের্ন / আল্ট",    b: "আধুনিক / পুরোনো" },
    { d: "praktisch",      p: "প্রাক্টিশ",         b: "কাজের / ব্যবহারিক" },
    { d: "bequem",         p: "বেকভেম",            b: "আরামদায়ক" },
    { d: "gemütlich",      p: "গেম্যুটলিশ",        b: "আরামদায়ক ও উষ্ণ (পরিবেশ)" },
    { d: "sauber",         p: "জাউবার",            b: "পরিষ্কার" },
    { d: "schmutzig",      p: "শমুৎসিশ",           b: "নোংরা" },
    { d: "wichtig",        p: "ভিশটিশ",            b: "গুরুত্বপূর্ণ" },
    { d: "interessant",    p: "ইনটেরেসান্ট",       b: "আকর্ষণীয়" },
    { d: "langweilig",     p: "লাংভাইলিশ",         b: "বিরক্তিকর" },
    { d: "der Charakter",  p: "ডেয়ার কারাক্টার",   b: "চরিত্র" },
    { d: "das Aussehen",   p: "ডাস আউসজেয়েন",     b: "চেহারা" },
    { d: "der Unterschied",p: "ডেয়ার উন্টারশীট",  b: "পার্থক্য" }
  ],

  phrases: [
    { d: "Ich habe einen guten Freund.",            p: "ইশ্ হাবে আইনেন গুটেন ফ্রয়েন্ট",    b: "আমার একজন ভালো বন্ধু আছে।" },
    { d: "Das ist eine schöne Wohnung.",            p: "ডাস ইস্ট আইনে শ্যোনে ভোনুং",        b: "এটা একটা সুন্দর ফ্ল্যাট।" },
    { d: "Der neue Kollege ist sehr freundlich.",   p: "ডেয়ার নয়ে কলেগে ইস্ট জেয়ার ফ্রয়েন্ডলিশ", b: "নতুন সহকর্মীটি খুব বন্ধুভাবাপন্ন।" },
    { d: "Ich suche ein ruhiges Zimmer.",           p: "ইশ্ জুখে আইন রুইগেস ৎসিমার",        b: "আমি একটা শান্ত ঘর খুঁজছি।" },
    { d: "Sie hat lange schwarze Haare.",           p: "জি হাট লাঙে শভার্ৎসে হারে",         b: "তার লম্বা কালো চুল।" },
    { d: "Mein Bruder ist größer als ich.",         p: "মাইন ব্রুডার ইস্ট গ্র্যোসার আল্স ইশ্", b: "আমার ভাই আমার চেয়ে লম্বা।" },
    { d: "Das ist die beste Lösung.",               p: "ডাস ইস্ট ডি বেস্টে ল্যোজুং",        b: "এটাই সবচেয়ে ভালো সমাধান।" },
    { d: "Berlin ist größer als Hamburg.",          p: "বের্লিন ইস্ট গ্র্যোসার আল্স হামবুর্গ", b: "বার্লিন হামবুর্গের চেয়ে বড়।" },
    { d: "Was ist der Unterschied?",                p: "ভাস ইস্ট ডেয়ার উন্টারশীট",          b: "পার্থক্যটা কী?" },
    { d: "Für mich ist Ruhe sehr wichtig.",         p: "ফ্যুয়ার মিশ ইস্ট রুয়ে জেয়ার ভিশটিশ", b: "আমার জন্য শান্তি খুব গুরুত্বপূর্ণ।" }
  ],

  grammar: [
    {
      h: "১. বিশেষণে কখন লেজ লাগে, কখন লাগে না",
      body: "<p>প্রথমে সবচেয়ে সহজ ব্যাপারটা বুঝে নাও — <b>বিশেষণ কোথায় বসেছে</b> সেটাই সব ঠিক করে।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>অবস্থান</th><th>লেজ?</th><th>উদাহরণ</th></tr>" +
      "<tr><td>verb-এর পরে (একা)</td><td>❌ <b>কোনো লেজ নেই</b></td><td><span class='de speakable'>Die Wohnung ist schön.</span></td></tr>" +
      "<tr><td>বিশেষ্যের আগে</td><td>✅ <b>লেজ লাগবে</b></td><td><span class='de speakable'>Das ist eine schön<b>e</b> Wohnung.</span></td></tr>" +
      "</table></div>" +
      "<div class='tip'><b>ভালো খবর:</b> বিশেষণ যদি বাক্যের শেষে <b class='de'>ist/sind</b>-এর পরে থাকে, কোনো লেজ লাগে না। তাই শুরুতে সন্দেহ হলে এই ছাঁদেই বলো — <span class='de'>Die Wohnung ist groß und schön.</span> সবসময় ঠিক!</div>"
    },
    {
      h: "২. der/die/das-এর পরে — সবচেয়ে সহজ (শুধু -e বা -en)",
      body: "<p>নির্দিষ্ট article (der/die/das/die) থাকলে লেজ প্রায় সবসময় <b>-e</b> বা <b>-en</b>।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th></th><th>Nominativ</th><th>Akkusativ</th><th>Dativ</th></tr>" +
      "<tr><td>m</td><td>der neu<b>e</b> Kollege</td><td>den neu<b>en</b> Kollegen</td><td>dem neu<b>en</b> Kollegen</td></tr>" +
      "<tr><td>f</td><td>die neu<b>e</b> Wohnung</td><td>die neu<b>e</b> Wohnung</td><td>der neu<b>en</b> Wohnung</td></tr>" +
      "<tr><td>n</td><td>das neu<b>e</b> Auto</td><td>das neu<b>e</b> Auto</td><td>dem neu<b>en</b> Auto</td></tr>" +
      "<tr><td>pl</td><td>die neu<b>en</b> Autos</td><td>die neu<b>en</b> Autos</td><td>den neu<b>en</b> Autos</td></tr>" +
      "</table></div>" +
      "<div class='tip'><b>দেখো কত সহজ!</b> মাত্র তিন জায়গায় <b>-e</b> (der m-Nom, die f, das n), বাকি <b>সব জায়গায় -en</b>।<br>সূত্র: <b>উপরের-বাঁ কোণের তিনটে = -e, বাকি সব = -en।</b></div>"
    },
    {
      h: "৩. ein/eine-এর পরে — article যা বলেনি, বিশেষণ বলে দেয়",
      body: "<p><b class='de'>ein</b> বললে লিঙ্গ বোঝা যায় না (ein Mann? ein Kind?)। তাই বিশেষণকে লিঙ্গটা <b>দেখিয়ে দিতে</b> হয় — der/das-এর শেষ অক্ষর ধার করে।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th></th><th>Nominativ</th><th>Akkusativ</th><th>Dativ</th></tr>" +
      "<tr><td>m</td><td>ein neu<b>er</b> Kollege</td><td>einen neu<b>en</b> Kollegen</td><td>einem neu<b>en</b> Kollegen</td></tr>" +
      "<tr><td>f</td><td>eine neu<b>e</b> Wohnung</td><td>eine neu<b>e</b> Wohnung</td><td>einer neu<b>en</b> Wohnung</td></tr>" +
      "<tr><td>n</td><td>ein neu<b>es</b> Auto</td><td>ein neu<b>es</b> Auto</td><td>einem neu<b>en</b> Auto</td></tr>" +
      "<tr><td>pl</td><td>neu<b>e</b> Autos</td><td>neu<b>e</b> Autos</td><td>neu<b>en</b> Autos</td></tr>" +
      "</table></div>" +
      "<div class='warn'>মূল পার্থক্য শুধু তিন জায়গায়: <b>ein neuer</b> (der-এর <b>r</b>), <b>ein neues</b> (das-এর <b>s</b>)। বাকি সব der/die/das-এর মতোই।</div>" +
      "<div class='tip'><b>একই নিয়ম খাটে</b> <b class='de'>kein-</b> আর <b class='de'>mein/dein/sein…</b>-এর পরেও — কারণ এরা সবাই ein-এর পরিবারের:<br><span class='de'>mein neu<b>er</b> Kollege</span> · <span class='de'>keine neu<b>e</b> Wohnung</span> · <span class='de'>sein neu<b>es</b> Auto</span></div>"
    },
    {
      h: "৪. তুলনা বিশেষ্যের আগে — লেজ দুটোই লাগে",
      body: "<p>তুলনামূলক রূপ বিশেষ্যের আগে বসলে <b>-er</b> (তুলনা) <b>আর</b> লেজ — দুটোই লাগে।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>রূপ</th><th>উদাহরণ</th><th>বাংলা</th></tr>" +
      "<tr><td>সাধারণ</td><td><span class='de speakable'>eine große Wohnung</span></td><td>একটা বড় ফ্ল্যাট</td></tr>" +
      "<tr><td>তুলনা</td><td><span class='de speakable'>eine größ<b>er</b>e Wohnung</span></td><td>একটা আরও বড় ফ্ল্যাট</td></tr>" +
      "<tr><td>সর্বোচ্চ</td><td><span class='de speakable'>die größ<b>t</b>e Wohnung</span></td><td>সবচেয়ে বড় ফ্ল্যাট</td></tr>" +
      "</table></div>" +
      "<p class='ex'><span class='de'>Ich suche eine <b>billigere</b> Wohnung, aber das ist die <b>beste</b> Lösung.</span><br><span class='bn'>আমি আরও সস্তা একটা ফ্ল্যাট খুঁজছি, কিন্তু এটাই সবচেয়ে ভালো সমাধান।</span></p>" +
      "<div class='note'>সর্বোচ্চ রূপের আগে <b>সবসময়</b> নির্দিষ্ট article থাকে (der/die/das), তাই লেজ সহজ — প্রায় সবসময় <b>-e</b> বা <b>-en</b>।</div>"
    },
    {
      h: "৫. বাস্তবে কাজ করার কৌশল",
      body: "<div class='tip' style='font-size:15px'><b>শুরুতে ৩টে ধাপে ভাবো:</b><br>১. বিশেষণটা বিশেষ্যের <b>আগে</b>? না হলে → কোনো লেজ নেই, শেষ।<br>২. আগে <b>der/die/das</b>? → <b>-e</b> বা <b>-en</b> (উপরের-বাঁ তিনটে -e, বাকি -en)।<br>৩. আগে <b>ein/mein/kein</b>? → একই, শুধু <b>m-Nom = -er</b>, <b>n = -es</b>।</div>" +
      "<div class='warn'><b>বাস্তব উপদেশ:</b> কথা বলার সময় এই টেবিল মনে করতে গিয়ে থেমে যাওয়ার দরকার নেই। ভুল লেজ দিলেও জার্মানরা <b>পুরোপুরি বুঝবে</b>। প্রথমে সাবলীলভাবে বলা শেখো, লেজ ধীরে ধীরে নিজেই ঠিক হয়ে যাবে — লেখার সময় বেশি খেয়াল রাখো।</div>" +
      "<div class='note'><b>সহজ ফাঁকি:</b> নিশ্চিত না হলে বাক্য ঘুরিয়ে দাও — <span class='de'>Die Wohnung ist schön und ruhig.</span> (লেজ ছাড়া) বলাই যায়, একদম শুদ্ধ।</div>"
    }
  ],

  dialog: {
    title_bn: "সংলাপ — নতুন সহকর্মী ও নতুন বাসা নিয়ে",
    lines: [
      { s: "Sara",  d: "Wie ist der neue Kollege?", b: "নতুন সহকর্মীটা কেমন?" },
      { s: "Karim", d: "Er ist ein sehr freundlicher Mensch. Und sehr geduldig.", b: "সে খুব বন্ধুভাবাপন্ন একজন মানুষ। আর খুব ধৈর্যশীল।" },
      { s: "Sara",  d: "Das ist gut. Der alte Kollege war oft unfreundlich.", b: "এটা ভালো। পুরোনো সহকর্মীটা প্রায়ই অবন্ধুসুলভ ছিল।" },
      { s: "Karim", d: "Ja, stimmt. Der neue ist viel besser.", b: "হ্যাঁ, ঠিক। নতুনটা অনেক ভালো।" },
      { s: "Sara",  d: "Und hast du eine neue Wohnung gefunden?", b: "আর তুমি নতুন একটা ফ্ল্যাট পেয়েছ?" },
      { s: "Karim", d: "Ja! Ein kleines, aber sehr gemütliches Zimmer.", b: "হ্যাঁ! একটা ছোট, কিন্তু খুব আরামদায়ক ঘর।" },
      { s: "Sara",  d: "Ist es ruhiger als das alte?", b: "এটা পুরোনোটার চেয়ে শান্ত?" },
      { s: "Karim", d: "Viel ruhiger. Für mich ist eine ruhige Wohnung das Wichtigste.", b: "অনেক বেশি শান্ত। আমার জন্য একটা শান্ত ফ্ল্যাটই সবচেয়ে গুরুত্বপূর্ণ।" },
      { s: "Sara",  d: "Und die Miete? Ist sie teurer?", b: "আর ভাড়া? বেশি দামি?" },
      { s: "Karim", d: "Nein, sie ist sogar billiger als die alte Miete!", b: "না, বরং পুরোনো ভাড়ার চেয়েও সস্তা!" },
      { s: "Sara",  d: "Das ist die beste Nachricht heute!", b: "এটাই আজকের সবচেয়ে ভালো খবর!" }
    ]
  },

  drills: [
    { q: "লেজ বসাও: Die Wohnung ist schön___", a: "schön — verb-এর পরে, কোনো লেজ নেই!" },
    { q: "লেজ বসাও: Das ist eine schön___ Wohnung.", a: "schöne — eine + f → -e" },
    { q: "লেজ বসাও: Der neu___ Kollege ist nett.", a: "neue — der + m-Nom → -e" },
    { q: "লেজ বসাও: Ich habe einen gut___ Freund.", a: "guten — einen (Akk m) → -en" },
    { q: "লেজ বসাও: Ein neu___ Auto ist teuer.", a: "neues — ein + n → -es (das-এর s)" },
    { q: "লেজ বসাও: Ein neu___ Kollege kommt.", a: "neuer — ein + m-Nom → -er (der-এর r)" },
    { q: "লেজ বসাও: Ich wohne in einer klein___ Wohnung.", a: "kleinen — Dativ → সবসময় -en" },
    { q: "লেজ বসাও: Ich suche ein ruhig___ Zimmer.", a: "ruhiges — ein + n → -es" },
    { q: "\"আমার ভাই আমার চেয়ে লম্বা\" — জার্মানে?", a: "Mein Bruder ist größer als ich." },
    { q: "\"সবচেয়ে ভালো সমাধান\" — জার্মানে?", a: "die beste Lösung" }
  ],

  speak_bn: [
    "৫ জন পরিচিত মানুষের চরিত্র বর্ণনা করো — বিশেষ্যের আগে বিশেষণ ব্যবহার করো।",
    "নিজের ঘরের ৮টা জিনিস বর্ণনা করো: <span class='de'>ein bequemer Stuhl, eine kleine Lampe …</span>",
    "৫ জোড়া জিনিস তুলনা করো, তারপর প্রতিটার সর্বোচ্চ রূপও বলো।"
  ]
},

/* ============================ A2 · UNIT 4 ============================ */
{
  id: "u16", level: "A2", kap: 4,
  title: "Meinung und Begründung",
  title_bn: "মতামত ও যুক্তি — dass, weil, wenn, ob",
  minutes: 55,
  goal_bn: [
    "নিজের মতামত দিতে ও যুক্তি দেখাতে পারবে",
    "dass দিয়ে জটিল বাক্য বানাতে পারবে",
    "wenn দিয়ে শর্ত ও অভ্যাস বোঝাতে পারবে",
    "ob দিয়ে পরোক্ষ প্রশ্ন করতে পারবে (খুব ভদ্র শোনায়)"
  ],
  kks: { vid: "DsMUDCu-EI8", label: "Kapitel 4: Grammatik — Netzwerk neu A2", len: "36:00" },

  words: [
    { d: "die Meinung",      p: "ডি মাইনুং",         b: "মতামত" },
    { d: "die Begründung",   p: "ডি বেগ্র্যুনডুং",  b: "যুক্তি / কারণ দেখানো" },
    { d: "der Vorteil",      p: "ডেয়ার ফোয়ারটাইল",  b: "সুবিধা" },
    { d: "der Nachteil",     p: "ডেয়ার নাখটাইল",    b: "অসুবিধা" },
    { d: "das Problem",      p: "ডাস প্রোবলেম",     b: "সমস্যা" },
    { d: "die Lösung",       p: "ডি ল্যোজুং",       b: "সমাধান" },
    { d: "glauben",          p: "গ্লাউবেন",          b: "মনে করা / বিশ্বাস করা" },
    { d: "denken",           p: "ডেংকেন",            b: "ভাবা" },
    { d: "finden",           p: "ফিনডেন",            b: "মনে করা (মতামত)" },
    { d: "meinen",           p: "মাইনেন",            b: "বলতে চাওয়া / মনে করা" },
    { d: "hoffen",           p: "হফেন",              b: "আশা করা" },
    { d: "wissen",           p: "ভিসেন",             b: "জানা" },
    { d: "vermuten",         p: "ফেয়ারমুটেন",       b: "অনুমান করা" },
    { d: "zustimmen",        p: "ৎসুশটিমেন",        b: "একমত হওয়া" },
    { d: "widersprechen",    p: "ভীডারশপ্রেশেন",     b: "দ্বিমত করা" },
    { d: "vielleicht",       p: "ফিলাইশ্ট",          b: "হয়তো" },
    { d: "sicher",           p: "জিশার",             b: "নিশ্চিত" },
    { d: "natürlich",        p: "নাট্যুরলিশ",        b: "স্বাভাবিকভাবেই" },
    { d: "besonders",        p: "বেজনডার্স",         b: "বিশেষভাবে" },
    { d: "übrigens",         p: "উ্যব্রিগেন্স",      b: "যাই হোক / প্রসঙ্গত" }
  ],

  phrases: [
    { d: "Ich finde, dass Deutsch schwer ist.",      p: "ইশ্ ফিনডে, ডাস ডয়েচ শভেয়ার ইস্ট",  b: "আমার মনে হয় জার্মান কঠিন।" },
    { d: "Ich glaube, dass er Recht hat.",           p: "ইশ্ গ্লাউবে, ডাস এয়ার রেশ্ট হাট",   b: "আমার মনে হয় সে ঠিক বলছে।" },
    { d: "Meiner Meinung nach ist das falsch.",      p: "মাইনার মাইনুং নাখ ইস্ট ডাস ফাল্শ",   b: "আমার মতে এটা ভুল।" },
    { d: "Ich bin der Meinung, dass …",              p: "ইশ্ বিন ডেয়ার মাইনুং, ডাস",         b: "আমি মনে করি যে …" },
    { d: "Da stimme ich dir zu.",                    p: "ডা শটিমে ইশ্ ডীয়ার ৎসু",           b: "এখানে আমি তোমার সাথে একমত।" },
    { d: "Das sehe ich anders.",                     p: "ডাস জেয়ে ইশ্ আনডার্স",              b: "আমি এটা অন্যভাবে দেখি। (ভদ্র দ্বিমত)" },
    { d: "Wenn ich Zeit habe, lerne ich Deutsch.",   p: "ভেন ইশ্ ৎসাইট হাবে, লেয়ারনে ইশ্ ডয়েচ", b: "আমার সময় থাকলে আমি জার্মান শিখি।" },
    { d: "Weißt du, ob der Kurs heute stattfindet?", p: "ভাইস্ট ডু, ওপ ডেয়ার কুর্স হয়টে শটাটফিনডেট", b: "তুমি জানো কোর্সটা আজ হবে কি না?" },
    { d: "Ich weiß nicht, ob das richtig ist.",      p: "ইশ্ ভাইস নিশ্ট, ওপ ডাস রিশটিশ ইস্ট",  b: "আমি জানি না এটা ঠিক কি না।" },
    { d: "Der Vorteil ist, dass es billig ist.",     p: "ডেয়ার ফোয়ারটাইল ইস্ট, ডাস এস বিলিশ ইস্ট", b: "সুবিধাটা হলো এটা সস্তা।" }
  ],

  grammar: [
    {
      h: "১. dass — \"যে\" (verb একদম শেষে)",
      body: "<p><b class='de'>dass</b> দিয়ে তুমি মতামত, অনুভূতি, জ্ঞান — সব প্রকাশ করতে পারবে। নিয়ম একটাই: <b>verb বাক্যের একদম শেষে</b>।</p>" +
      "<p class='ex'><span class='de'>Ich glaube, dass Deutsch nicht so schwer <b>ist</b>.</span><br><span class='bn'>আমার মনে হয় জার্মান তত কঠিন না।</span></p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>শুরুর অংশ</th><th>dass-বাক্য</th></tr>" +
      "<tr><td><span class='de'>Ich glaube, …</span></td><td>আমার মনে হয় …</td></tr>" +
      "<tr><td><span class='de'>Ich denke, …</span></td><td>আমি ভাবি …</td></tr>" +
      "<tr><td><span class='de'>Ich finde, …</span></td><td>আমার মনে হয় (মতামত) …</td></tr>" +
      "<tr><td><span class='de'>Ich hoffe, …</span></td><td>আমি আশা করি …</td></tr>" +
      "<tr><td><span class='de'>Ich weiß, …</span></td><td>আমি জানি …</td></tr>" +
      "<tr><td><span class='de'>Es ist gut, …</span></td><td>এটা ভালো যে …</td></tr>" +
      "</table></div>" +
      "<div class='warn'>Modal থাকলে modal-টাই একদম শেষে যায়:<br><span class='de'>Ich glaube, dass er morgen kommen <b>muss</b>.</span><br>Perfekt থাকলে সহায়ক verb শেষে:<br><span class='de'>Ich glaube, dass er gestern gekommen <b>ist</b>.</span></div>" +
      "<div class='tip'><b>কৌশল:</b> প্রথমে সোজা বাক্যটা ভাবো (<span class='de'>Deutsch ist schwer</span>), তারপর <b class='de'>dass</b> লাগিয়ে verb-টা তুলে শেষে বসিয়ে দাও (<span class='de'>dass Deutsch schwer ist</span>)।</div>"
    },
    {
      h: "২. wenn — যদি / যখনই",
      body: "<p><b class='de'>wenn</b>-এর দুটো মানে, আর দুটোতেই verb শেষে যায়।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>মানে</th><th>উদাহরণ</th><th>বাংলা</th></tr>" +
      "<tr><td><b>যদি</b> (শর্ত)</td><td><span class='de speakable'>Wenn ich Zeit habe, komme ich.</span></td><td>সময় থাকলে আমি আসব।</td></tr>" +
      "<tr><td><b>যখনই</b> (অভ্যাস)</td><td><span class='de speakable'>Wenn ich müde bin, trinke ich Kaffee.</span></td><td>যখনই ক্লান্ত লাগে, কফি খাই।</td></tr>" +
      "</table></div>" +
      "<div class='warn'><b>খুব গুরুত্বপূর্ণ:</b> <b class='de'>wenn</b>-বাক্য প্রথমে বসালে, পুরোটা মিলে ১ম জায়গা হয় — তাই তার পরেই <b>verb</b>, তারপর কর্তা:<br><span class='de'>Wenn ich Zeit habe, <b>komme ich</b>.</span> (verb আগে, ich পরে!)<br>এই ছাঁদটা অনেকেই ভুল করে — মন দিয়ে অভ্যাস করো।</div>" +
      "<div class='note'>পরে বসালে স্বাভাবিক: <span class='de'>Ich komme, wenn ich Zeit habe.</span> — দুটোই ঠিক, একই মানে।</div>"
    },
    {
      h: "৩. ob — \"কি না\" (পরোক্ষ প্রশ্ন)",
      body: "<p>Ja/Nein প্রশ্নকে ভদ্র ও পরোক্ষ করতে <b class='de'>ob</b> ব্যবহার করো। এটা জার্মানিতে খুব ভদ্র শোনায়।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>সরাসরি (একটু কড়া)</th><th>পরোক্ষ (ভদ্র)</th></tr>" +
      "<tr><td><span class='de'>Kommt er heute?</span></td><td><span class='de speakable'>Weißt du, ob er heute kommt?</span></td></tr>" +
      "<tr><td><span class='de'>Ist das richtig?</span></td><td><span class='de speakable'>Ich weiß nicht, ob das richtig ist.</span></td></tr>" +
      "<tr><td><span class='de'>Haben Sie Zeit?</span></td><td><span class='de speakable'>Können Sie mir sagen, ob Sie Zeit haben?</span></td></tr>" +
      "</table></div>" +
      "<div class='tip'>W-প্রশ্নের পরোক্ষ রূপে <b class='de'>ob</b> লাগে না — W-শব্দটাই কাজ করে:<br><span class='de speakable'>Weißt du, <b>wo</b> der Bahnhof ist?</span> · <span class='de speakable'>Können Sie mir sagen, <b>wann</b> der Zug kommt?</span><br>এখানেও verb শেষে!</div>" +
      "<div class='warn'>মনে রাখো: <b class='de'>ob</b> = কি না (Ja/Nein প্রশ্ন) · <b class='de'>wenn</b> = যদি (শর্ত)। বাংলায় দুটোকেই \"যদি\" বলা যায়, তাই গুলিয়ে যায়!<br><span class='de'>Ich weiß nicht, <b>ob</b> er kommt.</span> (আসবে কি না জানি না)<br><span class='de'><b>Wenn</b> er kommt, bin ich froh.</span> (সে এলে আমি খুশি)</div>"
    },
    {
      h: "৪. মতামত প্রকাশের ভদ্র ছাঁদ (পরীক্ষায় কাজে দেবে)",
      body: "<div class='tblwrap'><table>" +
      "<tr><th>কাজ</th><th>জার্মান</th><th>বাংলা</th></tr>" +
      "<tr><td>মতামত</td><td><span class='de speakable'>Ich finde, dass …</span></td><td>আমার মনে হয় যে …</td></tr>" +
      "<tr><td>মতামত</td><td><span class='de speakable'>Meiner Meinung nach …</span></td><td>আমার মতে …</td></tr>" +
      "<tr><td>মতামত</td><td><span class='de speakable'>Ich bin der Meinung, dass …</span></td><td>আমি মনে করি যে …</td></tr>" +
      "<tr><td>একমত ✅</td><td><span class='de speakable'>Da stimme ich dir zu.</span></td><td>আমি একমত।</td></tr>" +
      "<tr><td>একমত ✅</td><td><span class='de speakable'>Das finde ich auch.</span></td><td>আমিও তাই মনে করি।</td></tr>" +
      "<tr><td>দ্বিমত ❌</td><td><span class='de speakable'>Das sehe ich anders.</span></td><td>আমি অন্যভাবে দেখি।</td></tr>" +
      "<tr><td>দ্বিমত ❌</td><td><span class='de speakable'>Da bin ich nicht sicher.</span></td><td>এ ব্যাপারে আমি নিশ্চিত না।</td></tr>" +
      "<tr><td>সুবিধা</td><td><span class='de speakable'>Der Vorteil ist, dass …</span></td><td>সুবিধা হলো যে …</td></tr>" +
      "<tr><td>অসুবিধা</td><td><span class='de speakable'>Der Nachteil ist, dass …</span></td><td>অসুবিধা হলো যে …</td></tr>" +
      "</table></div>" +
      "<div class='tip'>পরীক্ষার Sprechen অংশে এই ছাঁদগুলো মুখস্থ থাকলে তুমি যেকোনো বিষয়ে কথা বলতে পারবে — শুধু <b class='de'>dass</b>-এর পরে নিজের ভাব বসিয়ে দাও।</div>"
    }
  ],

  dialog: {
    title_bn: "সংলাপ — শহরে না গ্রামে থাকা ভালো?",
    lines: [
      { s: "Anna",  d: "Karim, findest du das Leben in der Stadt gut?", b: "করিম, তোমার কি শহরের জীবন ভালো লাগে?" },
      { s: "Karim", d: "Ich finde, dass die Stadt viele Vorteile hat.", b: "আমার মনে হয় শহরের অনেক সুবিধা আছে।" },
      { s: "Anna",  d: "Welche zum Beispiel?", b: "যেমন কোনগুলো?" },
      { s: "Karim", d: "Der Vorteil ist, dass man alles schnell erreichen kann.", b: "সুবিধাটা হলো সবকিছু তাড়াতাড়ি পৌঁছানো যায়।" },
      { s: "Anna",  d: "Da stimme ich dir zu. Aber die Mieten sind sehr hoch.", b: "আমি একমত। কিন্তু ভাড়া খুব বেশি।" },
      { s: "Karim", d: "Das ist wahr. Wenn ich mehr Geld hätte, würde ich größer wohnen.", b: "এটা সত্যি। আমার বেশি টাকা থাকলে আমি বড় জায়গায় থাকতাম।" },
      { s: "Anna",  d: "Meiner Meinung nach ist das Dorf ruhiger und billiger.", b: "আমার মতে গ্রাম বেশি শান্ত আর সস্তা।" },
      { s: "Karim", d: "Das sehe ich anders. Ich glaube, dass es dort zu langweilig ist.", b: "আমি অন্যভাবে দেখি। আমার মনে হয় সেখানে বেশি বিরক্তিকর।" },
      { s: "Anna",  d: "Weißt du, ob es dort gute Jobs gibt?", b: "তুমি জানো সেখানে ভালো চাকরি আছে কি না?" },
      { s: "Karim", d: "Ich weiß nicht, ob es viele gibt. Das ist der Nachteil.", b: "আমি জানি না অনেক আছে কি না। এটাই অসুবিধা।" },
      { s: "Anna",  d: "Wenn man Familie hat, ist das Dorf vielleicht besser.", b: "পরিবার থাকলে হয়তো গ্রাম ভালো।" },
      { s: "Karim", d: "Das finde ich auch. Es hängt von der Situation ab.", b: "আমিও তাই মনে করি। এটা পরিস্থিতির উপর নির্ভর করে।" }
    ]
  },

  drills: [
    { q: "dass দিয়ে জোড়া দাও: Ich glaube. Deutsch ist schwer.", a: "Ich glaube, dass Deutsch schwer ist. (verb শেষে)" },
    { q: "dass: Ich hoffe, dass er morgen ___ ___. (kommen können)", a: "kommen kann — modal একদম শেষে।" },
    { q: "dass + Perfekt: Ich denke, dass sie gestern ___ ___. (kommen)", a: "gekommen ist — সহায়ক verb শেষে।" },
    { q: "wenn: Wenn ich Zeit habe, ___ ___ ins Kino.", a: "gehe ich — verb আগে, কর্তা পরে!" },
    { q: "ভুল ঠিক করো: Wenn ich Zeit habe, ich komme.", a: "Wenn ich Zeit habe, komme ich. — verb ২য় জায়গায়।" },
    { q: "ob না wenn: Ich weiß nicht, ___ er kommt.", a: "ob — \"আসবে কি না\" (প্রশ্ন)" },
    { q: "ob না wenn: ___ er kommt, bin ich froh.", a: "Wenn — \"সে এলে\" (শর্ত)" },
    { q: "পরোক্ষ করো: Hat er Zeit? (Weißt du …)", a: "Weißt du, ob er Zeit hat?" },
    { q: "পরোক্ষ করো: Wo ist der Bahnhof? (Können Sie mir sagen …)", a: "Können Sie mir sagen, wo der Bahnhof ist?" },
    { q: "ভদ্রভাবে দ্বিমত করো", a: "Das sehe ich anders. / Da bin ich nicht sicher." }
  ],

  speak_bn: [
    "একটা বিষয় নিয়ে (যেমন: অনলাইনে শেখা ভালো না ক্লাসে) ৬টা বাক্যে মতামত দাও — <b class='de'>dass</b> ব্যবহার করো।",
    "৫টা <b class='de'>wenn</b>-বাক্য বলো, প্রতিটাতে wenn-অংশ আগে রেখে verb ২য় জায়গায় বসাও।",
    "৫টা প্রশ্ন <b class='de'>ob</b> দিয়ে ভদ্র করে জিজ্ঞেস করো: <span class='de'>Weißt du, ob …?</span>"
  ]
},

/* ============================ A2 · UNIT 5 ============================ */
{
  id: "u17", level: "A2", kap: 5,
  title: "Geschichten erzählen",
  title_bn: "গল্প বলা — Präteritum (লেখার অতীত)",
  minutes: 55,
  goal_bn: [
    "Präteritum চিনতে ও পড়তে পারবে (বই, খবর, গল্পে এটাই লাগে)",
    "গুরুত্বপূর্ণ verb-এর Präteritum রূপ জানবে",
    "একটা ঘটনার গল্প গুছিয়ে লিখতে পারবে",
    "als / während দিয়ে অতীতের সময় বোঝাতে পারবে"
  ],
  kks: { vid: "56uPq3N97RU", label: "Kapitel 5: Grammatik — Netzwerk neu A2", len: "36:45" },

  words: [
    { d: "die Geschichte",  p: "ডি গেশিশটে",       b: "গল্প / ইতিহাস" },
    { d: "das Erlebnis",    p: "ডাস এয়ারলেবনিস",  b: "অভিজ্ঞতা (ঘটনা)" },
    { d: "der Unfall",      p: "ডেয়ার উনফাল",      b: "দুর্ঘটনা" },
    { d: "die Überraschung",p: "ডি উ্যবাররাশুং",  b: "বিস্ময়" },
    { d: "der Zufall",      p: "ডেয়ার ৎসুফাল",     b: "কাকতালীয় ঘটনা" },
    { d: "plötzlich",       p: "প্ল্যোৎসলিশ",      b: "হঠাৎ" },
    { d: "zuerst",          p: "ৎসুএয়ার্স্ট",     b: "প্রথমে" },
    { d: "dann",            p: "ডান",              b: "তারপর" },
    { d: "danach",          p: "ডানাখ",            b: "এরপর" },
    { d: "schließlich",     p: "শ্লীসলিশ",         b: "অবশেষে" },
    { d: "als",             p: "আল্স",             b: "যখন (একবার, অতীতে)" },
    { d: "während",         p: "ভেরেন্ট",          b: "যখন / চলার সময়" },
    { d: "passieren",       p: "পাসীরেন",          b: "ঘটা" },
    { d: "vergessen",       p: "ফেয়ারগেসেন",      b: "ভুলে যাওয়া" },
    { d: "verlieren",       p: "ফেয়ারলীরেন",      b: "হারানো" },
    { d: "treffen",         p: "ট্রেফেন",          b: "দেখা হওয়া" },
    { d: "merken",          p: "মের্কেন",          b: "খেয়াল করা" },
    { d: "erschrecken",     p: "এয়ারশ্রেকেন",     b: "ভয় পাওয়া" },
    { d: "lachen",          p: "লাখেন",            b: "হাসা" },
    { d: "glücklich",       p: "গ্ল্যুকলিশ",       b: "সুখী" }
  ],

  phrases: [
    { d: "Das war eine lustige Geschichte.",     p: "ডাস ভার আইনে লুস্টিগে গেশিশটে",     b: "এটা একটা মজার গল্প ছিল।" },
    { d: "Als ich klein war, wohnte ich in Dhaka.", p: "আল্স ইশ্ ক্লাইন ভার, ভোনটে ইশ্ ইন ঢাকা", b: "আমি যখন ছোট ছিলাম, ঢাকায় থাকতাম।" },
    { d: "Plötzlich passierte etwas Seltsames.", p: "প্ল্যোৎসলিশ পাসীর্টে এটভাস জেল্টজামেস", b: "হঠাৎ একটা অদ্ভুত কিছু ঘটল।" },
    { d: "Ich hatte meinen Schlüssel vergessen.", p: "ইশ্ হাটে মাইনেন শ্ল্যুসেল ফেয়ারগেসেন", b: "আমি আমার চাবি ভুলে গিয়েছিলাম।" },
    { d: "Zuerst wusste ich nicht, was ich machen sollte.", p: "ৎসুএয়ার্স্ট ভুসটে ইশ্ নিশ্ট, ভাস ইশ্ মাখেন জলটে", b: "প্রথমে আমি জানতাম না কী করব।" },
    { d: "Dann rief ich meinen Nachbarn an.",    p: "ডান রীফ ইশ্ মাইনেন নাখবার্ন আন",    b: "তারপর আমি আমার প্রতিবেশীকে ফোন করলাম।" },
    { d: "Zum Glück hatte er einen Schlüssel.",  p: "ৎসুম গ্ল্যুক হাটে এয়ার আইনেন শ্ল্যুসেল", b: "সৌভাগ্যক্রমে তার কাছে একটা চাবি ছিল।" },
    { d: "Schließlich konnte ich ins Haus.",     p: "শ্লীসলিশ কন্টে ইশ্ ইন্স হাউস",      b: "অবশেষে আমি বাসায় ঢুকতে পারলাম।" },
    { d: "Wir haben alle gelacht.",              p: "ভীয়ার হাবেন আলে গেলাখ্‌ট",         b: "আমরা সবাই হেসেছিলাম।" },
    { d: "Das werde ich nie vergessen.",         p: "ডাস ভেয়ারডে ইশ্ নী ফেয়ারগেসেন",   b: "এটা আমি কখনো ভুলব না।" }
  ],

  grammar: [
    {
      h: "১. Präteritum কী, আর কখন লাগে?",
      body: "<p>জার্মানে অতীতের দুটো রূপ আছে, আর এদের কাজ আলাদা:</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th></th><th>Perfekt</th><th>Präteritum</th></tr>" +
      "<tr><td>কোথায়</td><td><b>কথা বলায়</b></td><td><b>লেখায়</b> — বই, খবর, গল্প</td></tr>" +
      "<tr><td>উদাহরণ</td><td><span class='de'>Ich habe gearbeitet.</span></td><td><span class='de'>Ich arbeitete.</span></td></tr>" +
      "<tr><td>ব্যতিক্রম</td><td colspan='2'><b class='de'>war, hatte, konnte, musste …</b> — কথায়ও এগুলোই ব্যবহার হয়</td></tr>" +
      "</table></div>" +
      "<div class='tip'><b>তোমার জন্য বাস্তব পরামর্শ:</b> Präteritum <b>বলার</b> দরকার নেই (war/hatte/modal ছাড়া) — কিন্তু <b>চিনতে</b> পারা জরুরি, কারণ সব বই, খবর আর পরীক্ষার পড়ার অংশে এটাই থাকে। তাই এই ইউনিটের মূল লক্ষ্য: <b>পড়ে বুঝতে পারা</b>।</div>"
    },
    {
      h: "২. নিয়মিত verb — শুধু -te যোগ করো",
      body: "<div class='tblwrap'><table>" +
      "<tr><th>কে</th><th>লেজ</th><th>wohnen →</th><th>arbeiten →</th></tr>" +
      "<tr><td>ich</td><td><b>-te</b></td><td>wohn<b>te</b></td><td>arbeit<b>ete</b></td></tr>" +
      "<tr><td>du</td><td><b>-test</b></td><td>wohn<b>test</b></td><td>arbeit<b>etest</b></td></tr>" +
      "<tr><td>er/sie/es</td><td><b>-te</b></td><td>wohn<b>te</b></td><td>arbeit<b>ete</b></td></tr>" +
      "<tr><td>wir</td><td><b>-ten</b></td><td>wohn<b>ten</b></td><td>arbeit<b>eten</b></td></tr>" +
      "<tr><td>ihr</td><td><b>-tet</b></td><td>wohn<b>tet</b></td><td>arbeit<b>etet</b></td></tr>" +
      "<tr><td>sie/Sie</td><td><b>-ten</b></td><td>wohn<b>ten</b></td><td>arbeit<b>eten</b></td></tr>" +
      "</table></div>" +
      "<div class='note'>stem-এর শেষে <b>-t</b> বা <b>-d</b> থাকলে মাঝে একটা <b>e</b> ঢোকে (arbeit<b>e</b>te) — উচ্চারণ সহজ করার জন্য।<br>আর এখানেও সেই চেনা ব্যাপার: <b>ich আর er/sie একই রূপ</b>।</div>"
    },
    {
      h: "৩. অনিয়মিত verb — মুখস্থ করার তালিকা",
      body: "<p>অনিয়মিত verb-এ stem-এর স্বরবর্ণ বদলায়, আর ich/er-এ <b>কোনো লেজ থাকে না</b>। এই তালিকাটা পড়ার জন্য খুব দরকারি:</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>Infinitiv</th><th>Präteritum (ich/er)</th><th>Perfekt</th><th>বাংলা</th></tr>" +
      "<tr><td><span class='de'>sein</span></td><td><b class='de speakable'>war</b></td><td>ist gewesen</td><td>ছিল</td></tr>" +
      "<tr><td><span class='de'>haben</span></td><td><b class='de speakable'>hatte</b></td><td>hat gehabt</td><td>ছিল (অধিকারে)</td></tr>" +
      "<tr><td><span class='de'>werden</span></td><td><b class='de speakable'>wurde</b></td><td>ist geworden</td><td>হয়ে ওঠা</td></tr>" +
      "<tr><td><span class='de'>gehen</span></td><td><b class='de speakable'>ging</b></td><td>ist gegangen</td><td>গেল</td></tr>" +
      "<tr><td><span class='de'>kommen</span></td><td><b class='de speakable'>kam</b></td><td>ist gekommen</td><td>এল</td></tr>" +
      "<tr><td><span class='de'>fahren</span></td><td><b class='de speakable'>fuhr</b></td><td>ist gefahren</td><td>গেল (যানে)</td></tr>" +
      "<tr><td><span class='de'>sehen</span></td><td><b class='de speakable'>sah</b></td><td>hat gesehen</td><td>দেখল</td></tr>" +
      "<tr><td><span class='de'>sprechen</span></td><td><b class='de speakable'>sprach</b></td><td>hat gesprochen</td><td>বলল</td></tr>" +
      "<tr><td><span class='de'>essen</span></td><td><b class='de speakable'>aß</b></td><td>hat gegessen</td><td>খেল</td></tr>" +
      "<tr><td><span class='de'>trinken</span></td><td><b class='de speakable'>trank</b></td><td>hat getrunken</td><td>পান করল</td></tr>" +
      "<tr><td><span class='de'>nehmen</span></td><td><b class='de speakable'>nahm</b></td><td>hat genommen</td><td>নিল</td></tr>" +
      "<tr><td><span class='de'>geben</span></td><td><b class='de speakable'>gab</b></td><td>hat gegeben</td><td>দিল</td></tr>" +
      "<tr><td><span class='de'>finden</span></td><td><b class='de speakable'>fand</b></td><td>hat gefunden</td><td>পেল</td></tr>" +
      "<tr><td><span class='de'>schreiben</span></td><td><b class='de speakable'>schrieb</b></td><td>hat geschrieben</td><td>লিখল</td></tr>" +
      "<tr><td><span class='de'>lesen</span></td><td><b class='de speakable'>las</b></td><td>hat gelesen</td><td>পড়ল</td></tr>" +
      "<tr><td><span class='de'>wissen</span></td><td><b class='de speakable'>wusste</b></td><td>hat gewusst</td><td>জানত</td></tr>" +
      "<tr><td><span class='de'>bleiben</span></td><td><b class='de speakable'>blieb</b></td><td>ist geblieben</td><td>থাকল</td></tr>" +
      "<tr><td><span class='de'>rufen</span></td><td><b class='de speakable'>rief</b></td><td>hat gerufen</td><td>ডাকল</td></tr>" +
      "</table></div>" +
      "<div class='tip'>বহুবচনে শুধু <b>-en</b> যোগ করো: <span class='de'>ich ging → wir ging<b>en</b></span>, <span class='de'>ich kam → sie kam<b>en</b></span>।</div>"
    },
    {
      h: "৪. als / wenn / während — অতীতের সময়",
      body: "<p>বাংলায় সবগুলোকেই \"যখন\" বলা যায়, কিন্তু জার্মানে আলাদা। এটা খুব বেশি ভুল হয়।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>শব্দ</th><th>কখন</th><th>উদাহরণ</th></tr>" +
      "<tr><td><b class='de'>als</b></td><td>অতীতে <b>একবার</b> ঘটা ঘটনা</td><td><span class='de speakable'>Als ich klein war, wohnte ich in Dhaka.</span></td></tr>" +
      "<tr><td><b class='de'>wenn</b></td><td>অতীতে <b>বারবার</b>, বা বর্তমান/ভবিষ্যৎ</td><td><span class='de speakable'>Wenn ich Zeit hatte, las ich.</span> (যখনই সময় থাকত)</td></tr>" +
      "<tr><td><b class='de'>während</b></td><td>দুটো কাজ <b>একসাথে</b> চলছিল</td><td><span class='de speakable'>Während ich kochte, hörte ich Musik.</span></td></tr>" +
      "</table></div>" +
      "<div class='warn'><b>সহজ সূত্র:</b> অতীতে <b>একবার</b> → <b class='de'>als</b>। অতীতে <b>বারবার</b> → <b class='de'>wenn</b>।<br>তিনটেই verb-কে <b>শেষে</b> পাঠায়, আর প্রথমে বসালে তার পরে verb আসে।</div>" +
      "<p class='ex'><span class='de'><b>Als</b> ich nach Deutschland <b>kam</b>, sprach ich kein Deutsch.</span><br><span class='bn'>আমি যখন জার্মানিতে এলাম, তখন কোনো জার্মান বলতে পারতাম না।</span></p>"
    }
  ],

  dialog: {
    title_bn: "গল্প — চাবি হারানোর দিন (Präteritum-এ লেখা)",
    lines: [
      { s: "গল্প", d: "Letzten Freitag kam ich spät von der Arbeit nach Hause.", b: "গত শুক্রবার আমি কাজ থেকে দেরি করে বাসায় ফিরলাম।" },
      { s: "গল্প", d: "Ich war sehr müde und wollte nur schlafen.", b: "আমি খুব ক্লান্ত ছিলাম আর শুধু ঘুমাতে চেয়েছিলাম।" },
      { s: "গল্প", d: "Aber plötzlich merkte ich: Ich hatte keinen Schlüssel!", b: "কিন্তু হঠাৎ খেয়াল করলাম: আমার কাছে চাবি নেই!" },
      { s: "গল্প", d: "Zuerst suchte ich in allen Taschen. Nichts.", b: "প্রথমে সব পকেটে খুঁজলাম। কিছুই নেই।" },
      { s: "গল্প", d: "Dann ging ich zurück zur Bushaltestelle.", b: "তারপর আমি বাসস্টপে ফিরে গেলাম।" },
      { s: "গল্প", d: "Als ich dort ankam, war die Haltestelle leer.", b: "যখন সেখানে পৌঁছালাম, স্টপটা ফাঁকা ছিল।" },
      { s: "গল্প", d: "Während ich überlegte, rief mich mein Nachbar an.", b: "যখন আমি ভাবছিলাম, আমার প্রতিবেশী ফোন করল।" },
      { s: "গল্প", d: "Er sagte: \"Dein Schlüssel liegt hier auf der Treppe!\"", b: "সে বলল: \"তোমার চাবি এখানে সিঁড়িতে পড়ে আছে!\"" },
      { s: "গল্প", d: "Ich lachte und fuhr schnell zurück.", b: "আমি হাসলাম আর তাড়াতাড়ি ফিরে গেলাম।" },
      { s: "গল্প", d: "Schließlich war ich um Mitternacht im Bett. Was für ein Tag!", b: "অবশেষে মধ্যরাতে বিছানায় গেলাম। কী একটা দিন!" }
    ]
  },

  drills: [
    { q: "Präteritum: ich wohne →", a: "ich wohnte" },
    { q: "Präteritum: ich arbeite →", a: "ich arbeitete (মাঝে e)" },
    { q: "Präteritum: ich gehe →", a: "ich ging" },
    { q: "Präteritum: ich komme →", a: "ich kam" },
    { q: "Präteritum: ich sehe →", a: "ich sah" },
    { q: "Präteritum: ich weiß →", a: "ich wusste" },
    { q: "বহুবচন: ich ging → wir ___", a: "gingen" },
    { q: "als না wenn: ___ ich klein war, wohnte ich in Dhaka.", a: "Als — অতীতে একবার/একটা সময়" },
    { q: "als না wenn: ___ ich Zeit hatte, las ich immer.", a: "Wenn — অতীতে বারবার" },
    { q: "während: ___ ich kochte, ___ ich Musik. (hören)", a: "Während … hörte — verb শেষে, তারপর verb আগে" }
  ],

  speak_bn: [
    "উপরের গল্পটা জোরে পড়ো, তারপর নিজের ভাষায় Perfekt-এ আবার বলো (কথায় Perfekt!)।",
    "নিজের একটা মজার বা অদ্ভুত অভিজ্ঞতা ১০ বাক্যে <b>লেখো</b> — Präteritum ব্যবহার করো।",
    "১৮টা অনিয়মিত Präteritum রূপ জোরে পড়ে মুখস্থ করো — পরীক্ষার পড়ার অংশে এগুলো লাগবেই।"
  ]
},

/* ============================ A2 · UNIT 6 ============================ */
{
  id: "u18", level: "A2", kap: 6,
  title: "Alltag und Gewohnheiten",
  title_bn: "অভ্যাস ও দৈনন্দিন — Reflexive verb ও preposition-যুক্ত verb",
  minutes: 55,
  goal_bn: [
    "Reflexive verb ব্যবহার করতে পারবে (sich freuen, sich interessieren …)",
    "কোন verb-এর সাথে কোন preposition লাগে জানবে",
    "নিজের আগ্রহ ও অনুভূতি প্রকাশ করতে পারবে",
    "Wechselpräposition পুরোপুরি আয়ত্তে আনবে"
  ],
  kks: { vid: "RPTK5Msi368", label: "Kapitel 6: Grammatik — Netzwerk neu A2", len: "41:12" },

  words: [
    { d: "sich freuen",         p: "জিশ ফ্রয়েন",           b: "খুশি হওয়া" },
    { d: "sich interessieren",  p: "জিশ ইনটেরেসীরেন",      b: "আগ্রহী হওয়া" },
    { d: "sich ärgern",         p: "জিশ এর্গার্ন",         b: "রাগ করা" },
    { d: "sich erinnern",       p: "জিশ এয়ারইনার্ন",      b: "মনে করা" },
    { d: "sich treffen",        p: "জিশ ট্রেফেন",          b: "দেখা করা (পরস্পর)" },
    { d: "sich waschen",        p: "জিশ ভাশেন",            b: "নিজেকে ধোয়া" },
    { d: "sich anziehen",       p: "জিশ আনৎসীয়েন",        b: "জামা পরা" },
    { d: "sich beeilen",        p: "জিশ বেআইলেন",          b: "তাড়াহুড়ো করা" },
    { d: "sich entschuldigen",  p: "জিশ এন্টশুলডিগেন",     b: "ক্ষমা চাওয়া" },
    { d: "sich vorstellen",     p: "জিশ ফোয়ারশটেলেন",     b: "পরিচয় দেওয়া / কল্পনা করা" },
    { d: "sich gewöhnen",       p: "জিশ গেভ্যোনেন",        b: "অভ্যস্ত হওয়া" },
    { d: "die Gewohnheit",      p: "ডি গেভোনহাইট",         b: "অভ্যাস" },
    { d: "warten auf",          p: "ভার্টেন আউফ",          b: "অপেক্ষা করা (+Akk)" },
    { d: "denken an",           p: "ডেংকেন আন",            b: "ভাবা (কারও কথা) (+Akk)" },
    { d: "sprechen über",       p: "শপ্রেশেন উ্যবার",      b: "নিয়ে কথা বলা (+Akk)" },
    { d: "Angst haben vor",     p: "আংস্ট হাবেন ফোয়ার",   b: "ভয় পাওয়া (+Dat)" },
    { d: "helfen bei",          p: "হেলফেন বাই",           b: "সাহায্য করা (কাজে) (+Dat)" },
    { d: "sich kümmern um",     p: "জিশ ক্যুমার্ন উম",     b: "দেখাশোনা করা (+Akk)" },
    { d: "aufhören mit",        p: "আউফহ্যোরেন মিট",       b: "বন্ধ করা (+Dat)" },
    { d: "abhängen von",        p: "আপহেঙেন ফন",           b: "নির্ভর করা (+Dat)" }
  ],

  phrases: [
    { d: "Ich freue mich auf das Wochenende.",       p: "ইশ্ ফ্রয়ে মিশ আউফ ডাস ভখেনএন্ডে",  b: "আমি সপ্তাহান্তের জন্য অধীর আগ্রহে আছি।" },
    { d: "Ich interessiere mich für Technik.",       p: "ইশ্ ইনটেরেসীরে মিশ ফ্যুয়ার টেশনিক", b: "আমি প্রযুক্তিতে আগ্রহী।" },
    { d: "Ich ärgere mich über den Lärm.",           p: "ইশ্ এর্গারে মিশ উ্যবার ডেন লের্ম",  b: "আমি শব্দ নিয়ে বিরক্ত।" },
    { d: "Erinnerst du dich an mich?",               p: "এয়ারইনার্স্ট ডু ডিশ আন মিশ",       b: "তুমি আমাকে মনে করতে পারো?" },
    { d: "Ich muss mich beeilen.",                   p: "ইশ্ মুস মিশ বেআইলেন",              b: "আমাকে তাড়াহুড়ো করতে হবে।" },
    { d: "Ich warte auf den Bus.",                   p: "ইশ্ ভার্টে আউফ ডেন বুস",           b: "আমি বাসের জন্য অপেক্ষা করছি।" },
    { d: "Ich denke oft an meine Familie.",          p: "ইশ্ ডেংকে অফ্ট আন মাইনে ফামিলিয়ে", b: "আমি প্রায়ই আমার পরিবারের কথা ভাবি।" },
    { d: "Wir sprechen über die Arbeit.",            p: "ভীয়ার শপ্রেশেন উ্যবার ডি আরবাইট",  b: "আমরা কাজ নিয়ে কথা বলছি।" },
    { d: "Ich habe mich daran gewöhnt.",             p: "ইশ্ হাবে মিশ ডারআন গেভ্যোন্ট",     b: "আমি এতে অভ্যস্ত হয়ে গেছি।" },
    { d: "Das hängt vom Wetter ab.",                 p: "ডাস হেঙ্ট ফম ভেটার আপ",            b: "এটা আবহাওয়ার উপর নির্ভর করে।" },
    { d: "Entschuldige, ich habe mich verspätet.",   p: "এন্টশুলডিগে, ইশ্ হাবে মিশ ফেয়ারশপেটেট", b: "মাফ করো, আমার দেরি হয়ে গেছে।" }
  ],

  grammar: [
    {
      h: "১. Reflexive verb — কাজটা নিজের উপরেই পড়ে",
      body: "<p>কিছু verb-এর সাথে একটা বাড়তি সর্বনাম লাগে, যেটা \"নিজেকে\" বোঝায়। বাংলায় এর সরাসরি অনুবাদ নেই, তাই শব্দের সাথেই মুখস্থ করো।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>কে</th><th>Reflexivpronomen</th><th>উদাহরণ (sich freuen)</th></tr>" +
      "<tr><td>ich</td><td><b class='de'>mich</b></td><td><span class='de speakable'>Ich freue mich.</span></td></tr>" +
      "<tr><td>du</td><td><b class='de'>dich</b></td><td><span class='de speakable'>Du freust dich.</span></td></tr>" +
      "<tr><td>er/sie/es</td><td><b class='de'>sich</b></td><td><span class='de speakable'>Er freut sich.</span></td></tr>" +
      "<tr><td>wir</td><td><b class='de'>uns</b></td><td><span class='de speakable'>Wir freuen uns.</span></td></tr>" +
      "<tr><td>ihr</td><td><b class='de'>euch</b></td><td><span class='de speakable'>Ihr freut euch.</span></td></tr>" +
      "<tr><td>sie/Sie</td><td><b class='de'>sich</b></td><td><span class='de speakable'>Sie freuen sich.</span></td></tr>" +
      "</table></div>" +
      "<div class='tip'>খেয়াল করো — Akkusativ সর্বনামের মতোই (mich, dich, uns, euch), শুধু ৩য় ব্যক্তিতে সবসময় <b class='de'>sich</b>।</div>" +
      "<div class='note'><b>জায়গা:</b> reflexive সর্বনাম verb-এর <b>পরেই</b> বসে। কর্তা পিছনে গেলেও সেটা কর্তার পরে:<br><span class='de'>Ich freue <b>mich</b> auf …</span> · <span class='de'>Heute freue ich <b>mich</b> auf …</span></div>"
    },
    {
      h: "২. দরকারি Reflexive verb (মুখস্থ করো)",
      body: "<div class='tblwrap'><table>" +
      "<tr><th>Verb</th><th>preposition</th><th>উদাহরণ</th><th>বাংলা</th></tr>" +
      "<tr><td><b class='de'>sich freuen</b></td><td>auf +Akk</td><td><span class='de speakable'>Ich freue mich auf den Urlaub.</span></td><td>ছুটির জন্য অধীর আগ্রহে</td></tr>" +
      "<tr><td><b class='de'>sich freuen</b></td><td>über +Akk</td><td><span class='de speakable'>Ich freue mich über das Geschenk.</span></td><td>উপহার পেয়ে খুশি</td></tr>" +
      "<tr><td><b class='de'>sich interessieren</b></td><td>für +Akk</td><td><span class='de speakable'>Ich interessiere mich für Musik.</span></td><td>সংগীতে আগ্রহী</td></tr>" +
      "<tr><td><b class='de'>sich ärgern</b></td><td>über +Akk</td><td><span class='de speakable'>Er ärgert sich über den Chef.</span></td><td>বসের উপর রাগ</td></tr>" +
      "<tr><td><b class='de'>sich erinnern</b></td><td>an +Akk</td><td><span class='de speakable'>Ich erinnere mich an dich.</span></td><td>তোমাকে মনে আছে</td></tr>" +
      "<tr><td><b class='de'>sich gewöhnen</b></td><td>an +Akk</td><td><span class='de speakable'>Ich gewöhne mich an das Wetter.</span></td><td>আবহাওয়ায় অভ্যস্ত হওয়া</td></tr>" +
      "<tr><td><b class='de'>sich kümmern</b></td><td>um +Akk</td><td><span class='de speakable'>Sie kümmert sich um die Kinder.</span></td><td>বাচ্চাদের দেখাশোনা</td></tr>" +
      "<tr><td><b class='de'>sich beeilen</b></td><td>—</td><td><span class='de speakable'>Beeil dich!</span></td><td>তাড়াতাড়ি করো!</td></tr>" +
      "<tr><td><b class='de'>sich entschuldigen</b></td><td>für +Akk</td><td><span class='de speakable'>Ich entschuldige mich für die Verspätung.</span></td><td>দেরির জন্য ক্ষমা চাওয়া</td></tr>" +
      "</table></div>" +
      "<div class='warn'><b class='de'>sich freuen auf</b> = ভবিষ্যতের কিছুর জন্য আগ্রহ। <b class='de'>sich freuen über</b> = যা হয়ে গেছে তাতে খুশি। ছোট পার্থক্য, কিন্তু জার্মানরা খেয়াল করে।</div>"
    },
    {
      h: "৩. Verb + নির্দিষ্ট preposition — জোড়া বেঁধে শেখো",
      body: "<p>জার্মানে প্রতিটা verb-এর সাথে একটা <b>নির্দিষ্ট</b> preposition বাঁধা থাকে, আর সেটা যুক্তি দিয়ে বোঝা যায় না। verb + preposition একসাথে এক শব্দের মতো মুখস্থ করো।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>Verb + preposition</th><th>কারক</th><th>উদাহরণ</th></tr>" +
      "<tr><td><b class='de'>warten auf</b></td><td>Akkusativ</td><td><span class='de speakable'>Ich warte auf den Bus.</span></td></tr>" +
      "<tr><td><b class='de'>denken an</b></td><td>Akkusativ</td><td><span class='de speakable'>Ich denke an meine Familie.</span></td></tr>" +
      "<tr><td><b class='de'>sprechen über</b></td><td>Akkusativ</td><td><span class='de speakable'>Wir sprechen über die Arbeit.</span></td></tr>" +
      "<tr><td><b class='de'>sich freuen auf</b></td><td>Akkusativ</td><td><span class='de speakable'>Ich freue mich auf das Fest.</span></td></tr>" +
      "<tr><td><b class='de'>Angst haben vor</b></td><td><b>Dativ</b></td><td><span class='de speakable'>Ich habe Angst vor Hunden.</span></td></tr>" +
      "<tr><td><b class='de'>helfen bei</b></td><td><b>Dativ</b></td><td><span class='de speakable'>Er hilft mir bei der Arbeit.</span></td></tr>" +
      "<tr><td><b class='de'>aufhören mit</b></td><td><b>Dativ</b></td><td><span class='de speakable'>Hör mit dem Lärm auf!</span></td></tr>" +
      "<tr><td><b class='de'>abhängen von</b></td><td><b>Dativ</b></td><td><span class='de speakable'>Das hängt vom Wetter ab.</span></td></tr>" +
      "<tr><td><b class='de'>sich treffen mit</b></td><td><b>Dativ</b></td><td><span class='de speakable'>Ich treffe mich mit Freunden.</span></td></tr>" +
      "</table></div>" +
      "<div class='tip'><b>প্রশ্ন করার ছাঁদ:</b> জিনিস হলে <b class='de'>wo-</b> + preposition, মানুষ হলে preposition + <b class='de'>wen/wem</b>:<br>জিনিস: <span class='de speakable'>Worauf wartest du?</span> (কীসের জন্য অপেক্ষা?)<br>মানুষ: <span class='de speakable'>Auf wen wartest du?</span> (কার জন্য অপেক্ষা?)</div>"
    },
    {
      h: "৪. Wechselpräpositionen — পুরো ছবি",
      body: "<p>A1 ইউনিট ৯-এ শুরু করেছিলে। এবার নিয়মটা পুরোপুরি পোক্ত করো — এই ৯টা preposition দুইভাবে চলে।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>Preposition</th><th>Wohin? (গতি) → Akkusativ</th><th>Wo? (অবস্থান) → Dativ</th></tr>" +
      "<tr><td><b class='de'>in</b></td><td><span class='de'>Ich gehe in die Küche.</span></td><td><span class='de'>Ich bin in der Küche.</span></td></tr>" +
      "<tr><td><b class='de'>auf</b></td><td><span class='de'>Ich lege es auf den Tisch.</span></td><td><span class='de'>Es liegt auf dem Tisch.</span></td></tr>" +
      "<tr><td><b class='de'>an</b></td><td><span class='de'>Ich gehe an das Fenster.</span></td><td><span class='de'>Ich stehe am Fenster.</span></td></tr>" +
      "<tr><td><b class='de'>unter</b></td><td><span class='de'>Die Katze geht unter das Bett.</span></td><td><span class='de'>Sie ist unter dem Bett.</span></td></tr>" +
      "<tr><td><b class='de'>über</b></td><td><span class='de'>Ich hänge es über das Sofa.</span></td><td><span class='de'>Es hängt über dem Sofa.</span></td></tr>" +
      "<tr><td><b class='de'>vor / hinter</b></td><td><span class='de'>Ich stelle es vor die Tür.</span></td><td><span class='de'>Es steht vor der Tür.</span></td></tr>" +
      "<tr><td><b class='de'>neben / zwischen</b></td><td><span class='de'>Setz dich neben mich!</span></td><td><span class='de'>Er sitzt neben mir.</span></td></tr>" +
      "</table></div>" +
      "<div class='tip'><b>জোড়া verb মনে রাখো — একটা গতি, একটা অবস্থান:</b><br><span class='de'>legen</span> (রাখা, Akk) ↔ <span class='de'>liegen</span> (পড়ে থাকা, Dat)<br><span class='de'>stellen</span> (দাঁড় করানো, Akk) ↔ <span class='de'>stehen</span> (দাঁড়ানো, Dat)<br><span class='de'>hängen</span> (ঝোলানো, Akk) ↔ <span class='de'>hängen</span> (ঝোলা, Dat)<br><span class='de'>sich setzen</span> (বসা, Akk) ↔ <span class='de'>sitzen</span> (বসে থাকা, Dat)</div>"
    }
  ],

  dialog: {
    title_bn: "সংলাপ — অভ্যাস, আগ্রহ ও পরিকল্পনা",
    lines: [
      { s: "Anna",  d: "Karim, worauf freust du dich am meisten?", b: "করিম, তুমি কীসের জন্য সবচেয়ে বেশি অধীর আগ্রহে আছো?" },
      { s: "Karim", d: "Auf den Sommer! Ich freue mich sehr auf den Urlaub.", b: "গ্রীষ্মের জন্য! আমি ছুটির জন্য খুব আগ্রহে আছি।" },
      { s: "Anna",  d: "Und wofür interessierst du dich in der Freizeit?", b: "আর অবসরে তুমি কীসে আগ্রহী?" },
      { s: "Karim", d: "Ich interessiere mich für Technik und für Sprachen.", b: "আমি প্রযুক্তি আর ভাষায় আগ্রহী।" },
      { s: "Anna",  d: "Hast du dich schon an das Wetter hier gewöhnt?", b: "তুমি এখানকার আবহাওয়ায় অভ্যস্ত হয়ে গেছ?" },
      { s: "Karim", d: "Fast. Aber im Winter ärgere ich mich oft über die Kälte.", b: "প্রায়। কিন্তু শীতে আমি প্রায়ই ঠান্ডা নিয়ে বিরক্ত হই।" },
      { s: "Anna",  d: "Das verstehe ich! Erinnerst du dich an deinen ersten Winter?", b: "এটা আমি বুঝি! তোমার প্রথম শীতের কথা মনে আছে?" },
      { s: "Karim", d: "Natürlich! Ich hatte Angst vor dem Schnee. Jetzt lache ich darüber.", b: "অবশ্যই! আমি বরফকে ভয় পেতাম। এখন এটা নিয়ে হাসি।" },
      { s: "Anna",  d: "Treffen wir uns am Samstag? Wir könnten über den Urlaub sprechen.", b: "আমরা শনিবার দেখা করব? ছুটি নিয়ে কথা বলতে পারতাম।" },
      { s: "Karim", d: "Gern! Aber das hängt vom Wetter ab. Ich rufe dich an.", b: "খুশি হয়ে! কিন্তু এটা আবহাওয়ার উপর নির্ভর করে। আমি তোমাকে ফোন করব।" },
      { s: "Anna",  d: "Alles klar. Und beeil dich nicht — wir haben Zeit!", b: "সব ঠিক আছে। আর তাড়াহুড়ো করো না — আমাদের সময় আছে!" }
    ]
  },

  drills: [
    { q: "Ich freue ___ auf den Urlaub.", a: "mich — Ich freue mich auf den Urlaub." },
    { q: "Er interessiert ___ für Musik.", a: "sich — Er interessiert sich für Musik." },
    { q: "Wir treffen ___ am Samstag.", a: "uns — Wir treffen uns am Samstag." },
    { q: "Preposition: Ich warte ___ den Bus.", a: "auf — warten auf + Akkusativ" },
    { q: "Preposition: Ich denke ___ meine Familie.", a: "an — denken an + Akkusativ" },
    { q: "Preposition: Ich habe Angst ___ Hunden.", a: "vor — Angst haben vor + Dativ" },
    { q: "Preposition: Das hängt ___ Wetter ab.", a: "vom — abhängen von + Dativ (von dem → vom)" },
    { q: "wohin না wo: Ich lege das Buch auf ___ Tisch.", a: "den — গতি, তাই Akkusativ" },
    { q: "wohin না wo: Das Buch liegt auf ___ Tisch.", a: "dem — অবস্থান, তাই Dativ" },
    { q: "প্রশ্ন করো (জিনিস): Ich warte auf den Bus. →", a: "Worauf wartest du?" }
  ],

  speak_bn: [
    "৮টা reflexive verb দিয়ে নিজের সম্পর্কে বাক্য বলো — <span class='de'>Ich freue mich… Ich interessiere mich…</span>",
    "১০টা verb+preposition জোড়া জোরে বলো, প্রতিটা দিয়ে একটা নিজের বাক্য বানাও।",
    "ঘরের ১০টা জিনিস নিয়ে wohin/wo দুইভাবে বলো: <span class='de'>Ich lege es auf den Tisch. / Es liegt auf dem Tisch.</span>"
  ]
},

/* ============================ A2 · UNIT 7 ============================ */
{
  id: "u19", level: "A2", kap: 7,
  title: "Wünsche und Pläne",
  title_bn: "ইচ্ছা ও পরিকল্পনা — Konjunktiv II, Genitiv ও Relativsatz",
  minutes: 60,
  goal_bn: [
    "ভদ্রভাবে অনুরোধ করতে পারবে (könnte, würde, hätte)",
    "কাল্পনিক ইচ্ছা প্রকাশ করতে পারবে (\"যদি থাকত…\")",
    "Genitiv দিয়ে মালিকানা বোঝাতে পারবে",
    "Relativsatz দিয়ে বাক্য জুড়ে বিস্তারিত বলতে পারবে"
  ],
  kks: { vid: "isqfE3AUhyQ", label: "Kapitel 7: Grammatik — Netzwerk neu A2", len: "42:44" },

  words: [
    { d: "der Wunsch",       p: "ডেয়ার ভুনশ",        b: "ইচ্ছা" },
    { d: "der Plan",         p: "ডেয়ার প্লান",       b: "পরিকল্পনা" },
    { d: "das Ziel",         p: "ডাস ৎসীল",          b: "লক্ষ্য" },
    { d: "der Traum",        p: "ডেয়ার ট্রাউম",      b: "স্বপ্ন" },
    { d: "die Hoffnung",     p: "ডি হফনুং",          b: "আশা" },
    { d: "die Chance",       p: "ডি শাংসে",          b: "সুযোগ" },
    { d: "die Zukunft",      p: "ডি ৎসুকুন্ফ্ট",     b: "ভবিষ্যৎ" },
    { d: "vorhaben",         p: "ফোয়ারহাবেন",       b: "পরিকল্পনা থাকা" },
    { d: "planen",           p: "প্লানেন",           b: "পরিকল্পনা করা" },
    { d: "wünschen",         p: "ভ্যুনশেন",          b: "কামনা করা" },
    { d: "erreichen",        p: "এয়াররাইশেন",       b: "অর্জন করা" },
    { d: "sparen",           p: "শপারেন",            b: "সঞ্চয় করা" },
    { d: "heiraten",         p: "হাইরাটেন",          b: "বিয়ে করা" },
    { d: "gründen",          p: "গ্র্যুনডেন",        b: "প্রতিষ্ঠা করা" },
    { d: "reich / arm",      p: "রাইশ / আর্ম",       b: "ধনী / গরিব" },
    { d: "frei",             p: "ফ্রাই",             b: "স্বাধীন / ফাঁকা" },
    { d: "möglich",          p: "ম্যোগলিশ",          b: "সম্ভব" },
    { d: "unmöglich",        p: "উনম্যোগলিশ",        b: "অসম্ভব" },
    { d: "hoffentlich",      p: "হফেন্টলিশ",         b: "আশা করি" },
    { d: "irgendwann",       p: "ইরগেন্টভান",        b: "কোনো এক সময়" }
  ],

  phrases: [
    { d: "Könnten Sie mir bitte helfen?",           p: "ক্যোন্টেন জি মীয়ার বিটে হেলফেন",    b: "আপনি দয়া করে আমাকে সাহায্য করতে পারবেন?" },
    { d: "Ich würde gern einen Kurs machen.",       p: "ইশ্ ভ্যুরডে গের্ন আইনেন কুর্স মাখেন", b: "আমি একটা কোর্স করতে চাইতাম।" },
    { d: "Hätten Sie einen Moment Zeit?",           p: "হেটেন জি আইনেন মোমেন্ট ৎসাইট",      b: "আপনার একটু সময় হবে?" },
    { d: "Wenn ich mehr Zeit hätte, würde ich reisen.", p: "ভেন ইশ্ মেয়ার ৎসাইট হেটে, ভ্যুরডে ইশ্ রাইজেন", b: "আমার বেশি সময় থাকলে আমি ভ্রমণ করতাম।" },
    { d: "Ich hätte gern einen Kaffee.",            p: "ইশ্ হেটে গের্ন আইনেন কাফে",         b: "আমি একটা কফি চাইতাম। (খুব ভদ্র)" },
    { d: "Das Auto meines Bruders ist neu.",        p: "ডাস আউটো মাইনেস ব্রুডার্স ইস্ট নয়", b: "আমার ভাইয়ের গাড়িটা নতুন।" },
    { d: "Das ist der Mann, der hier arbeitet.",    p: "ডাস ইস্ট ডেয়ার মান, ডেয়ার হীয়ার আরবাইটেট", b: "এই সেই লোক, যে এখানে কাজ করে।" },
    { d: "Ich habe vor, in Deutschland zu bleiben.", p: "ইশ্ হাবে ফোয়ার, ইন ডয়েচলান্ট ৎসু ব্লাইবেন", b: "আমার পরিকল্পনা জার্মানিতে থাকার।" },
    { d: "Mein Ziel ist, B1 zu erreichen.",         p: "মাইন ৎসীল ইস্ট, বে-আইন্স ৎসু এয়াররাইশেন", b: "আমার লক্ষ্য B1 অর্জন করা।" },
    { d: "Hoffentlich klappt es!",                  p: "হফেন্টলিশ ক্লাপ্ট এস",              b: "আশা করি কাজ হবে!" }
  ],

  grammar: [
    {
      h: "১. Konjunktiv II — ভদ্রতা ও কল্পনা",
      body: "<p>এই রূপটা দুই কাজে লাগে: <b>খুব ভদ্র অনুরোধ</b> আর <b>কাল্পনিক কথা</b> (\"যদি থাকত…\")। জার্মানিতে ভদ্র হওয়ার জন্য এটা অপরিহার্য।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>সাধারণ</th><th>Konjunktiv II</th><th>ভাব</th></tr>" +
      "<tr><td><span class='de'>Können Sie helfen?</span></td><td><b class='de speakable'>Könnten Sie helfen?</b></td><td>অনেক বেশি ভদ্র</td></tr>" +
      "<tr><td><span class='de'>Haben Sie Zeit?</span></td><td><b class='de speakable'>Hätten Sie Zeit?</b></td><td>অনেক বেশি ভদ্র</td></tr>" +
      "<tr><td><span class='de'>Ich will einen Kaffee.</span></td><td><b class='de speakable'>Ich hätte gern einen Kaffee.</b></td><td>দোকানে এটাই বলো</td></tr>" +
      "<tr><td><span class='de'>Ich will reisen.</span></td><td><b class='de speakable'>Ich würde gern reisen.</b></td><td>নম্র ইচ্ছা</td></tr>" +
      "</table></div>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>মূল</th><th>Konjunktiv II (ich/er)</th><th>বাংলা</th></tr>" +
      "<tr><td><span class='de'>haben</span></td><td><b class='de speakable'>hätte</b> (হেটে)</td><td>থাকত</td></tr>" +
      "<tr><td><span class='de'>sein</span></td><td><b class='de speakable'>wäre</b> (ভেরে)</td><td>হতো</td></tr>" +
      "<tr><td><span class='de'>können</span></td><td><b class='de speakable'>könnte</b> (ক্যোন্টে)</td><td>পারত</td></tr>" +
      "<tr><td><span class='de'>werden</span></td><td><b class='de speakable'>würde</b> (ভ্যুরডে)</td><td>করত</td></tr>" +
      "<tr><td><span class='de'>müssen</span></td><td><b class='de speakable'>müsste</b> (ম্যুসটে)</td><td>করতে হতো</td></tr>" +
      "<tr><td><span class='de'>mögen</span></td><td><b class='de speakable'>möchte</b> (ম্যোশটে)</td><td>চাই (তুমি এটা চেনো!)</td></tr>" +
      "</table></div>" +
      "<div class='tip'><b>বাকি সব verb-এর জন্য সহজ কৌশল:</b> <b class='de'>würde</b> + মূল verb (শেষে)।<br><span class='de speakable'>Ich würde gern nach Italien fahren.</span> (আমি ইতালিতে যেতে চাইতাম)<br>এভাবে তোমাকে প্রতিটা verb-এর আলাদা রূপ মুখস্থ করতে হবে না — শুধু এই ৬টা আর würde।</div>"
    },
    {
      h: "২. অবাস্তব শর্ত — \"যদি … থাকত, তাহলে …\"",
      body: "<p>যা সত্যি নয়, শুধু কল্পনা — এই ছাঁদে বলো:</p>" +
      "<div class='tip' style='font-size:15px'><b>Wenn ich … hätte/wäre, würde ich …</b></div>" +
      "<p class='ex'><span class='de'><b>Wenn</b> ich mehr Geld <b>hätte</b>, <b>würde</b> ich eine Wohnung <b>kaufen</b>.</span><br><span class='bn'>আমার বেশি টাকা থাকলে আমি একটা ফ্ল্যাট কিনতাম।</span></p>" +
      "<p class='ex'><span class='de'><b>Wenn</b> ich besser Deutsch <b>sprechen könnte</b>, <b>hätte</b> ich einen besseren Job.</span><br><span class='bn'>আমি আরও ভালো জার্মান বলতে পারলে আমার আরও ভালো চাকরি থাকত।</span></p>" +
      "<div class='warn'>দুই অংশেই Konjunktiv II লাগে, আর <b class='de'>wenn</b>-এর কারণে প্রথম অংশে verb <b>শেষে</b>, আর দ্বিতীয় অংশ verb দিয়ে <b>শুরু</b> হয়।</div>" +
      "<div class='note'>উপদেশ দিতেও এটা খুব ভদ্র: <span class='de speakable'>Ich würde an deiner Stelle mit dem Chef sprechen.</span> (আমি তোমার জায়গায় হলে বসের সাথে কথা বলতাম।)</div>"
    },
    {
      h: "৩. Genitiv — মালিকানা (\"…এর\")",
      body: "<p>\"আমার ভাইয়ের গাড়ি\" বোঝাতে Genitiv লাগে। লেখায় ও আনুষ্ঠানিক ভাষায় বেশি দেখা যায়।</p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>লিঙ্গ</th><th>Genitiv</th><th>উদাহরণ</th></tr>" +
      "<tr><td>m</td><td><b class='de'>des</b> …<b>(e)s</b></td><td><span class='de speakable'>das Auto des Mannes</span> — লোকটার গাড়ি</td></tr>" +
      "<tr><td>f</td><td><b class='de'>der</b></td><td><span class='de speakable'>das Auto der Frau</span> — মহিলার গাড়ি</td></tr>" +
      "<tr><td>n</td><td><b class='de'>des</b> …<b>(e)s</b></td><td><span class='de speakable'>das Spielzeug des Kindes</span> — বাচ্চার খেলনা</td></tr>" +
      "<tr><td>pl</td><td><b class='de'>der</b></td><td><span class='de speakable'>die Autos der Leute</span> — লোকদের গাড়ি</td></tr>" +
      "</table></div>" +
      "<div class='tip'><b>কথা বলার সময় সহজ বিকল্প — <span class='de'>von</span> + Dativ:</b><br>লেখায়: <span class='de'>das Auto <b>meines Bruders</b></span><br>কথায়: <span class='de'>das Auto <b>von meinem Bruder</b></span> ✅ দুটোই ঠিক!<br>শুরুতে <b class='de'>von</b> ব্যবহার করো — সহজ আর একদম স্বাভাবিক।</div>" +
      "<div class='note'>নামের সাথে সহজ: <span class='de'>Karim<b>s</b> Auto</span> (করিমের গাড়ি) — বাংলার মতোই, শুধু <b>s</b>, কোনো apostrophe নেই।</div>"
    },
    {
      h: "৪. Relativsatz — \"যে / যেটা\" দিয়ে বাক্য জোড়া",
      body: "<p>দুটো বাক্যকে এক করে আরও পরিণত শোনাতে Relativsatz লাগে। সর্বনামটা <b>যে বিশেষ্যকে বোঝাচ্ছে তার লিঙ্গ</b> নেয়, আর verb <b>শেষে</b> যায়।</p>" +
      "<p class='ex'>দুটো বাক্য: <span class='de'>Das ist der Mann. Er arbeitet hier.</span><br>এক করে: <span class='de'>Das ist der Mann, <b>der</b> hier <b>arbeitet</b>.</span><br><span class='bn'>এই সেই লোক, যে এখানে কাজ করে।</span></p>" +
      "<div class='tblwrap'><table>" +
      "<tr><th>বিশেষ্য</th><th>Nominativ</th><th>Akkusativ</th><th>Dativ</th></tr>" +
      "<tr><td>m (der Mann)</td><td><b class='de'>der</b></td><td><b class='de'>den</b></td><td><b class='de'>dem</b></td></tr>" +
      "<tr><td>f (die Frau)</td><td><b class='de'>die</b></td><td><b class='de'>die</b></td><td><b class='de'>der</b></td></tr>" +
      "<tr><td>n (das Kind)</td><td><b class='de'>das</b></td><td><b class='de'>das</b></td><td><b class='de'>dem</b></td></tr>" +
      "<tr><td>pl (die Leute)</td><td><b class='de'>die</b></td><td><b class='de'>die</b></td><td><b class='de'>denen</b></td></tr>" +
      "</table></div>" +
      "<div class='note'>খেয়াল করো — টেবিলটা প্রায় হুবহু der/die/das-এর মতোই! শুধু Dativ বহুবচনে <b class='de'>denen</b> আলাদা।</div>" +
      "<p class='ex'><span class='de'>Die Wohnung, <b>die</b> ich gemietet habe, ist sehr schön.</span><br><span class='bn'>যে ফ্ল্যাটটা আমি ভাড়া নিয়েছি, সেটা খুব সুন্দর।</span></p>" +
      "<div class='tip'><b>কোন কারক হবে, কীভাবে বুঝবে?</b> relative বাক্যের ভেতরে ওই শব্দটার কাজ কী, সেটা দেখো:<br>কর্তা → Nominativ (<span class='de'>der Mann, <b>der</b> arbeitet</span>)<br>কর্ম → Akkusativ (<span class='de'>der Mann, <b>den</b> ich kenne</span>)</div>"
    }
  ],

  dialog: {
    title_bn: "সংলাপ — ভবিষ্যতের পরিকল্পনা ও স্বপ্ন",
    lines: [
      { s: "Anna",  d: "Karim, was hast du für die Zukunft vor?", b: "করিম, ভবিষ্যতের জন্য তোমার কী পরিকল্পনা?" },
      { s: "Karim", d: "Mein Ziel ist, B1 zu erreichen und dann zu studieren.", b: "আমার লক্ষ্য B1 অর্জন করা আর তারপর পড়াশোনা করা।" },
      { s: "Anna",  d: "Das ist ein guter Plan. Und was würdest du studieren?", b: "এটা একটা ভালো পরিকল্পনা। আর তুমি কী পড়তে চাইতে?" },
      { s: "Karim", d: "Ich würde gern Informatik studieren. Das interessiert mich sehr.", b: "আমি কম্পিউটার সায়েন্স পড়তে চাইতাম। এটা আমাকে খুব আকর্ষণ করে।" },
      { s: "Anna",  d: "Die Universität, die ich besucht habe, ist sehr gut dafür.", b: "যে বিশ্ববিদ্যালয়ে আমি পড়েছি, সেটা এর জন্য খুব ভালো।" },
      { s: "Karim", d: "Wirklich? Könntest du mir mehr darüber erzählen?", b: "সত্যি? তুমি আমাকে এটা নিয়ে আরও বলতে পারবে?" },
      { s: "Anna",  d: "Natürlich. Der Professor meines Kurses war fantastisch.", b: "অবশ্যই। আমার কোর্সের প্রফেসর দারুণ ছিলেন।" },
      { s: "Karim", d: "Wenn ich mehr Zeit hätte, würde ich sofort anfangen.", b: "আমার বেশি সময় থাকলে আমি সাথে সাথে শুরু করতাম।" },
      { s: "Anna",  d: "Warum nicht? Hättest du abends Zeit?", b: "কেন না? তোমার সন্ধ্যায় সময় হবে?" },
      { s: "Karim", d: "Vielleicht. Ich müsste erst mit meinem Chef sprechen.", b: "হয়তো। আমাকে আগে আমার বসের সাথে কথা বলতে হতো।" },
      { s: "Anna",  d: "Ich würde an deiner Stelle einfach fragen. Was wäre das Schlimmste?", b: "আমি তোমার জায়গায় হলে সোজা জিজ্ঞেস করতাম। সবচেয়ে খারাপ কী হতে পারে?" },
      { s: "Karim", d: "Du hast recht. Hoffentlich sagt er ja!", b: "তুমি ঠিক বলেছ। আশা করি সে হ্যাঁ বলবে!" }
    ]
  },

  drills: [
    { q: "ভদ্র করো: Können Sie mir helfen?", a: "Könnten Sie mir helfen?" },
    { q: "ভদ্র করো: Haben Sie Zeit?", a: "Hätten Sie Zeit?" },
    { q: "দোকানে ভদ্রভাবে কফি চাও", a: "Ich hätte gern einen Kaffee." },
    { q: "würde দিয়ে: \"আমি ভ্রমণ করতে চাইতাম\"", a: "Ich würde gern reisen." },
    { q: "শর্ত: Wenn ich Geld ___, ___ ich ein Auto kaufen. (haben/werden)", a: "hätte … würde — Wenn ich Geld hätte, würde ich ein Auto kaufen." },
    { q: "Genitiv: das Auto ___ Mannes (der)", a: "des — das Auto des Mannes" },
    { q: "সহজ বিকল্পে লেখো: das Auto meines Bruders", a: "das Auto von meinem Bruder" },
    { q: "Relativpronomen: Das ist der Mann, ___ hier arbeitet.", a: "der — কর্তা, তাই Nominativ m" },
    { q: "Relativpronomen: Die Wohnung, ___ ich gemietet habe, ist schön.", a: "die — কর্ম, Akkusativ f (die বদলায় না)" },
    { q: "Relativpronomen: Das ist der Mann, ___ ich kenne.", a: "den — কর্ম, Akkusativ m → den" }
  ],

  speak_bn: [
    "৫টা অনুরোধ খুব ভদ্রভাবে করো — <span class='de'>Könnten Sie …? Hätten Sie …? Ich hätte gern …</span>",
    "৫টা কাল্পনিক ইচ্ছা বলো: <span class='de'>Wenn ich … hätte, würde ich …</span>",
    "৫টা Relativsatz বানাও নিজের পরিচিত মানুষ ও জিনিস নিয়ে।",
    "🎉 <b>A2 শেষ!</b> এবার A2 মডেল পরীক্ষা দাও — তুমি এখন দৈনন্দিন জীবনের প্রায় সব পরিস্থিতি সামলাতে পারো।"
  ]
}
];
