/* WAESNA · VoyagerOne — site metinleri (tr / en).
   Ziyaretçinin tarayıcı dili Türkçe ise tr, değilse en gösterilir; menüdeki
   düğmeyle değiştirilebilir ve seçim hatırlanır. Yeni metin eklerken iki dile de ekle. */
const I18N = {
  tr: {
    "meta.title": "VoyagerOne — Bilgisayarında çalışan yapay zekâ · WAESNA",
    "meta.desc": "VoyagerOne; macOS, Windows ve Linux için yapay zekâ çalışma alanı. Yerel modelle internetsiz çalışır, Word/Excel/PDF üretir, abonelik yok.",
    "nav.product": "Ürün", "nav.compare": "Karşılaştır", "nav.pricing": "Fiyat", "nav.download": "İndir", "nav.faq": "SSS", "nav.products": "Ürünler",
    "prod.k": "WAESNA · Ürünler", "prod.h": "Ürünlerimiz", "prod.lead": "Kendi bilgisayarında çalışan, aboneliksiz yazılımlar. Verin sende kalır.",
    "prod.v1.name": "VoyagerOne", "prod.v1.tag": "Yapay zekâ çalışma alanı", "prod.v1.desc": "Yerel modelle internetsiz çalışan, Word/Excel/PDF üreten masaüstü yapay zekâ.", "prod.v1.cta": "İncele",
    "prod.v2.name": "Intro", "prod.v2.tag": "Yapay zekâ video editörü", "prod.v2.desc": "Ritme göre kesen, efekt basan, tamamen çevrimdışı video editörü.", "prod.v2.cta": "İncele", "prod.new": "Yeni",
    "cta.try": "7 gün ücretsiz dene", "cta.pricing": "Fiyatlar", "cta.sticky": "7 gün ücretsiz dene",

    "hero.kicker": "WAESNA · VoyagerOne 1.0",
    "hero.title": "Yapay zekâ <em>senin</em> bilgisayarında. Abonelik yok.",
    "hero.lead": "Kod yazar, belge üretir, bilgisayarında senin onayınla iş yapar. Yerel modelle internetsiz çalışır; sohbetlerin ve dosyaların bu bilgisayarda kalır.",
    "trust.1": "Tek seferlik ödeme", "trust.2": "7 gün ücretsiz", "trust.3": "macOS · Windows · Linux", "trust.4": "Verin sende",
    "demo.user": "Bu satış verilerinden Excel raporu hazırla",
    "demo.ai": "Hazır.", "demo.saved": "çalışma klasörüne kaydedildi",
    "demo.user2": "Sunuma da çevir", "demo.ready": "hazır",
    "demo.f1": "satis-raporu.xlsx", "demo.f2": "sunum.pptx",

    "pain.k": "Tanıdık geliyor mu?",
    "pain.1": "Verilerin başkasının sunucusunda.",
    "pain.2": "Her ay yeni bir abonelik.",
    "pain.3": "İnternet gidince iş duruyor.",
    "pain.4": "Cevabı Word'e sen taşıyorsun.",
    "pain.fix": "VoyagerOne bunların dördünü de çözmek için yapıldı.",

    "feat.k": "01 — Ürün", "feat.h": "Ne yapar",
    "f1.k": "Model", "f1.h": "Yerel ya da bulut", "f1.p": "Ollama kuruluysa model bu bilgisayarda çalışır, mesajların dışarı çıkmaz. Dilersen kendi Gemini, OpenAI veya Anthropic anahtarını girersin.",
    "f2.k": "Ajan hattı", "f2.h": "72 ajan, 5 denetim", "f2.p": "Karmaşık işlerde planlayıcı, mühendislik ve kalite ajanları sırayla çalışır; cevap beş bağımsız denetimden geçer.",
    "f3.k": "Çıktı", "f3.h": "Belge ve dosya üretimi", "f3.p": "Word, Excel, PowerPoint, PDF, SVG ve 3D model dosyalarını sohbetin içinden üretir.",
    "f4.k": "Bilgisayar erişimi", "f4.h": "Onayınla komut çalıştırır", "f4.p": "Terminal komutu çalıştırır, dosya okur, yazar, düzenler ve arar. Her işlemden önce işletim sisteminin onay penceresi açılır.",
    "f5.k": "Kod", "f5.h": "Çalıştırılabilir kod tuvali", "f5.p": "Python ve JavaScript kodunu ayrı, sınırlandırılmış bir süreçte çalıştırır; paket kurar, çıktıyı gösterir.",
    "f6.k": "Giriş", "f6.h": "Çevrimdışı dikte", "f6.p": "Mikrofona konuşursun, konuşma tanıma bu bilgisayarda çalışır. Ses kaydı hiçbir yere gönderilmez.",

    "cmp.k": "02 — Karşılaştır", "cmp.h": "Aylık abonelik mi, bir kere mi?",
    "cmp.col1": "Tipik aylık yapay zekâ aboneliği", "cmp.col2": "VoyagerOne Pro",
    "cmp.r1": "Ödeme", "cmp.r1a": "Her ay", "cmp.r1b": "Bir kere",
    "cmp.r2": "3 yıllık maliyet (örnek: aylık $20)", "cmp.r2a": "$720", "cmp.r2b": "$149",
    "cmp.r3": "Sohbetler ve dosyalar", "cmp.r3a": "Sağlayıcının sunucusunda", "cmp.r3b": "Bu bilgisayarda",
    "cmp.r4": "İnternetsiz çalışma", "cmp.r4a": "Hayır", "cmp.r4b": "Evet, yerel modelle",
    "cmp.r5": "Belge üretimi", "cmp.r5a": "Kopyala-yapıştır", "cmp.r5b": "Word · Excel · PowerPoint · PDF dosyası",
    "cmp.note": "Bulut modeli kullanırsan sağlayıcının kendi API ücreti uygulanır; yerel modelde ek ücret yoktur.",

    "how.k": "03 — Kurulum", "how.h": "Üç adımda başla",
    "s1.h": "İndir ve aç", "s1.p": "Kurulum sihirbazı gerekli bileşenleri indirir ve mikrofonu test eder.",
    "s2.h": "Modelini seç", "s2.p": "Ollama kuruluysa uygulama yerel modelleri kendisi bulur. Bulut kullanacaksan kendi API anahtarını girersin.",
    "s3.h": "Çalış", "s3.p": "Sohbet et, belge ürettir, kod çalıştır. Satın aldığında anahtarı Ayarlar → Lisans'a yapıştırman yeterli.",

    "spec.k": "04 — Teknik", "spec.h": "Gereksinimler",
    "sp1.t": "İşletim sistemi", "sp1.d": "macOS 11+ (Apple Silicon) · Windows 10/11 (64 bit) · Linux (64 bit)",
    "sp2.t": "Kurulum boyutu", "sp2.d": "Yaklaşık 85 MB. Dikte modeli ilk açılışta ayrıca indirilir (~45 MB).",
    "sp3.t": "Yapay zekâ sağlayıcıları", "sp3.d": "Ollama (yerel) · Google Gemini · OpenAI ve uyumlu uçlar · Anthropic Claude",
    "sp4.t": "Veri konumu", "sp4.d": "Sohbetler, projeler ve dosyalar yalnızca bu bilgisayarda. Bulut hesabı yok.",
    "sp5.t": "Arayüz dili", "sp5.d": "Türkçe ve İngilizce",
    "sp6.t": "Lisans", "sp6.d": "Tek seferlik ödeme, süresiz kullanım. İlk etkinleştirme internet ister, sonrası çevrimdışı.",

    "price.k": "05 — Fiyat", "price.h": "Planlar",
    "price.lead": "Tek seferlik ödeme, süresiz lisans. Vergi ödeme sayfasında ülkene göre eklenir. Ödemeden hemen sonra lisans anahtarın e-postana gelir.",
    "p0.k": "Deneme", "p0.p": "Ücretsiz", "p0.s": "7 gün, tam sürüm", "p0.1": "Tüm özellikler açık", "p0.2": "Kart bilgisi istemez", "p0.b": "İndir",
    "p1.s": "1 kullanıcı · süresiz", "p1.1": "Sınırsız kullanım", "p1.2": "72 ajanlık tam hat", "p1.3": "VoyagerOne API",
    "p2.s": "5 kullanıcı · süresiz", "p2.1": "Pro'daki her şey", "p2.2": "Organizasyon yönetimi", "p2.3": "Üye yetkileri",
    "p3.s": "60 kullanıcı · süresiz", "p3.1": "Team'deki her şey", "p3.2": "60 koltuk", "p3.3": "Öncelikli destek",
    "buy": "Satın al", "buy.info": "Bilgi al",
    "buy.req": "Talep oluştur",
    "price.lead.req": "Tek seferlik ödeme, süresiz lisans. Talep formunu gönder; ödeme bilgileri (IBAN) e-postana gelir, havale ulaşınca lisans anahtarın aynı gün gönderilir.",
    "rq.h": "VoyagerOne talebi", "rq.lead": "Formu gönder; ödeme bilgileri e-postana gelir. Havale/EFT ulaşınca lisans anahtarın aynı gün gönderilir.",
    "rq.name": "Ad soyad", "rq.email": "E-posta", "rq.plan": "Plan", "rq.seats": "Kullanıcı sayısı", "rq.note": "Not (isteğe bağlı): fatura bilgisi, soru…",
    "rq.consent": "Talebimin yanıtlanması için bilgilerimin işlenmesini kabul ediyorum.", "rq.privacy": "Aydınlatma metni",
    "rq.send": "Talebi gönder", "rq.cancel": "Vazgeç", "rq.done": "Kapat", "rq.sending": "Gönderiliyor…",
    "rq.ok": "Talebin alındı ({id}). Ödeme bilgileri en geç 24 saat içinde e-postana gelecek.",
    "rq.err": "Gönderilemedi. Biraz sonra tekrar dene ya da {email} adresine yaz.",
    "rq.wait": "Bu e-postayla az önce talep gönderildi. Birkaç dakika sonra tekrar dene.",
    "rq.bad.email": "Geçerli bir e-posta yaz.", "rq.need.name": "Adını yaz.", "rq.need.consent": "Devam etmek için onay kutusunu işaretle.",

    "dl.k": "06 — İndirmeler", "dl.h": "Sürüm", "dl.soon": "yakında", "dl.yours": "Senin sistemin",
    "dl.mac": ".dmg · Apple Silicon", "dl.win": ".zip · 64 bit", "dl.lin": ".tar.gz · 64 bit",

    "faq.k": "07 — SSS", "faq.h": "Sık sorulanlar",
    "q1": "Verilerim nereye gidiyor?", "a1": "Sohbetler, projeler ve ürettiğin dosyalar yalnızca bu bilgisayarda saklanır. Yerel model (Ollama) kullanırsan mesajların cihazdan hiç çıkmaz. Bulut sağlayıcı seçersen mesajların yanıt üretmek için o sağlayıcıya gider; uygulama bunu açıkça söyler.",
    "q2": "Lisans anahtarımı nereden alırım?", "a2": "Ödemeyi tamamladığın anda anahtar ödeme sayfasında gösterilir ve e-postana gönderilir. VoyagerOne'da Ayarlar → Lisans bölümüne satın alma e-postanı ve anahtarı girip Etkinleştir'e bas.",
    "q3": "Lisans kaç cihazda çalışır?", "a3": "Pro lisansı bir kullanıcı içindir. İlk etkinleştirme internet ister, sonrasında uygulama çevrimdışı çalışır. Team ve Company planlarında koltuk sayısı kadar kullanıcı tanımlanır.",
    "q4": "Uygulama internetsiz çalışır mı?", "a4": "Evet. Ollama ile yerel model kullanıldığında sohbet, belge üretimi ve dikte tamamen çevrimdışı çalışır. İnternet yalnızca ilk kurulumda, bulut modeli kullanıldığında ve web araması açıkken gerekir.",
    "q5": "macOS'ta “bilinmeyen geliştirici” uyarısı alıyorum.", "a5": "Uygulama henüz Apple tarafından imzalanmadı. Sistem Ayarları → Gizlilik ve Güvenlik bölümünde “Yine de Aç” demen yeterli; bunu bir kez yapman gerekiyor.",
    "q6": "Yapay zekânın cevaplarına güvenebilir miyim?", "a6": "Cevaplar otomatik üretilir ve hatalı olabilir; önemli kararlardan önce doğrula. Komut çalıştırma ve dosya değiştirme gibi işlemler için her seferinde onayın istenir.",
    "q7": "Güncellemeler ücretli mi?", "a7": "Hayır. Lisans süresizdir ve 1.x sürüm güncellemeleri ücretsizdir. Uygulama açılışta yeni sürümü kendisi kontrol eder.",

    "ct.k": "08 — İletişim", "ct.h": "Soru ve destek", "ct.p": "Lisans, fatura ve teknik destek için doğrudan yazabilirsin.", "ct.b": "E-posta gönder",
    "ft.privacy": "Gizlilik ve KVKK", "ft.terms": "Kullanım Koşulları",
  },

  en: {
    "meta.title": "VoyagerOne — AI that runs on your computer · WAESNA",
    "meta.desc": "VoyagerOne is an AI workspace for macOS, Windows and Linux. Works offline with a local model, creates Word/Excel/PDF files, no subscription.",
    "nav.product": "Product", "nav.compare": "Compare", "nav.pricing": "Pricing", "nav.download": "Download", "nav.faq": "FAQ", "nav.products": "Products",
    "prod.k": "WAESNA · Products", "prod.h": "Our products", "prod.lead": "Software that runs on your own computer, no subscription. Your data stays with you.",
    "prod.v1.name": "VoyagerOne", "prod.v1.tag": "AI workspace", "prod.v1.desc": "A desktop AI that works offline with a local model and creates Word/Excel/PDF files.", "prod.v1.cta": "Explore",
    "prod.v2.name": "Intro", "prod.v2.tag": "AI video editor", "prod.v2.desc": "An offline editor that cuts to the beat and adds effects.", "prod.v2.cta": "Explore", "prod.new": "New",
    "cta.try": "Try free for 7 days", "cta.pricing": "Pricing", "cta.sticky": "Try free for 7 days",

    "hero.kicker": "WAESNA · VoyagerOne 1.0",
    "hero.title": "AI on <em>your</em> computer. No subscription.",
    "hero.lead": "It writes code, creates documents and gets work done on your machine — with your approval. Works offline with a local model; your chats and files stay on this computer.",
    "trust.1": "One-time payment", "trust.2": "7-day free trial", "trust.3": "macOS · Windows · Linux", "trust.4": "Your data stays yours",
    "demo.user": "Turn this sales data into an Excel report",
    "demo.ai": "Done.", "demo.saved": "saved to your workspace",
    "demo.user2": "Make it a presentation too", "demo.ready": "ready",
    "demo.f1": "sales-report.xlsx", "demo.f2": "presentation.pptx",

    "pain.k": "Sound familiar?",
    "pain.1": "Your data sits on someone else's server.",
    "pain.2": "Another subscription every month.",
    "pain.3": "No internet, no work.",
    "pain.4": "You copy the answer into Word yourself.",
    "pain.fix": "VoyagerOne was built to fix all four.",

    "feat.k": "01 — Product", "feat.h": "What it does",
    "f1.k": "Model", "f1.h": "Local or cloud", "f1.p": "With Ollama installed the model runs on this computer and your messages never leave it. Or bring your own Gemini, OpenAI or Anthropic key.",
    "f2.k": "Agent pipeline", "f2.h": "72 agents, 5 checks", "f2.p": "For complex work, planner, engineering and quality agents run in sequence and every answer passes five independent checks.",
    "f3.k": "Output", "f3.h": "Real files, not just text", "f3.p": "Creates Word, Excel, PowerPoint, PDF, SVG and 3D model files right from the chat.",
    "f4.k": "Computer access", "f4.h": "Runs commands with your approval", "f4.p": "Runs terminal commands and reads, writes, edits and searches files. Your OS shows an approval dialog before every action.",
    "f5.k": "Code", "f5.h": "Runnable code canvas", "f5.p": "Runs Python and JavaScript in a separate, limited process; installs packages and shows the output.",
    "f6.k": "Input", "f6.h": "Offline dictation", "f6.p": "Talk to the microphone; speech recognition runs on this computer. Audio is never uploaded.",

    "cmp.k": "02 — Compare", "cmp.h": "Monthly subscription or pay once?",
    "cmp.col1": "Typical monthly AI subscription", "cmp.col2": "VoyagerOne Pro",
    "cmp.r1": "Payment", "cmp.r1a": "Every month", "cmp.r1b": "Once",
    "cmp.r2": "3-year cost (example: $20/month)", "cmp.r2a": "$720", "cmp.r2b": "$149",
    "cmp.r3": "Chats and files", "cmp.r3a": "On the provider's servers", "cmp.r3b": "On this computer",
    "cmp.r4": "Works offline", "cmp.r4a": "No", "cmp.r4b": "Yes, with a local model",
    "cmp.r5": "Document output", "cmp.r5a": "Copy and paste", "cmp.r5b": "Word · Excel · PowerPoint · PDF files",
    "cmp.note": "If you use a cloud model, that provider's own API fees apply; local models cost nothing extra.",

    "how.k": "03 — Setup", "how.h": "Start in three steps",
    "s1.h": "Download and open", "s1.p": "The setup wizard downloads what it needs and tests your microphone.",
    "s2.h": "Pick your model", "s2.p": "If Ollama is installed the app finds local models by itself. For the cloud, enter your own API key.",
    "s3.h": "Get to work", "s3.p": "Chat, generate documents, run code. After purchase, paste your key into Settings → License.",

    "spec.k": "04 — Specs", "spec.h": "Requirements",
    "sp1.t": "Operating system", "sp1.d": "macOS 11+ (Apple Silicon) · Windows 10/11 (64-bit) · Linux (64-bit)",
    "sp2.t": "Install size", "sp2.d": "About 85 MB. The dictation model downloads on first launch (~45 MB).",
    "sp3.t": "AI providers", "sp3.d": "Ollama (local) · Google Gemini · OpenAI and compatible endpoints · Anthropic Claude",
    "sp4.t": "Where data lives", "sp4.d": "Chats, projects and files stay on this computer. No cloud account.",
    "sp5.t": "Interface language", "sp5.d": "English and Turkish",
    "sp6.t": "License", "sp6.d": "One-time payment, lifetime use. First activation needs internet; offline after that.",

    "price.k": "05 — Pricing", "price.h": "Plans",
    "price.lead": "One-time payment, lifetime license. Tax is added at checkout based on your country. Your license key arrives by email right after payment.",
    "p0.k": "Trial", "p0.p": "Free", "p0.s": "7 days, full version", "p0.1": "Every feature unlocked", "p0.2": "No card required", "p0.b": "Download",
    "p1.s": "1 user · lifetime", "p1.1": "Unlimited use", "p1.2": "Full 72-agent pipeline", "p1.3": "VoyagerOne API",
    "p2.s": "5 users · lifetime", "p2.1": "Everything in Pro", "p2.2": "Organization management", "p2.3": "Member permissions",
    "p3.s": "60 users · lifetime", "p3.1": "Everything in Team", "p3.2": "60 seats", "p3.3": "Priority support",
    "buy": "Buy now", "buy.info": "Contact us",
    "buy.req": "Request",
    "price.lead.req": "One-time payment, lifetime license. Send the request form; payment details arrive by email, and your license key is sent the same day the transfer arrives.",
    "rq.h": "VoyagerOne request", "rq.lead": "Send the form and payment details arrive by email. Your license key is sent the same day the bank transfer arrives.",
    "rq.name": "Full name", "rq.email": "Email", "rq.plan": "Plan", "rq.seats": "Seats", "rq.note": "Note (optional): invoice details, questions…",
    "rq.consent": "I agree that my details are processed to answer my request.", "rq.privacy": "Privacy notice",
    "rq.send": "Send request", "rq.cancel": "Cancel", "rq.done": "Close", "rq.sending": "Sending…",
    "rq.ok": "Request received ({id}). Payment details will reach your inbox within 24 hours.",
    "rq.err": "Couldn't send. Try again shortly or email {email}.",
    "rq.wait": "A request was just sent with this email. Try again in a few minutes.",
    "rq.bad.email": "Enter a valid email.", "rq.need.name": "Enter your name.", "rq.need.consent": "Tick the consent box to continue.",

    "dl.k": "06 — Downloads", "dl.h": "Version", "dl.soon": "coming soon", "dl.yours": "Your system",
    "dl.mac": ".dmg · Apple Silicon", "dl.win": ".zip · 64-bit", "dl.lin": ".tar.gz · 64-bit",

    "faq.k": "07 — FAQ", "faq.h": "Questions",
    "q1": "Where does my data go?", "a1": "Chats, projects and the files you create are stored only on this computer. With a local model (Ollama) your messages never leave the device. If you choose a cloud provider, your messages go to that provider to generate replies — the app tells you so clearly.",
    "q2": "Where do I get my license key?", "a2": "It's shown on the checkout page right after payment and sent to your email. In VoyagerOne, open Settings → License, enter your purchase email and the key, and press Activate.",
    "q3": "How many devices does a license cover?", "a3": "A Pro license is for one user. The first activation needs internet; after that the app works offline. Team and Company plans cover as many users as their seats.",
    "q4": "Does it work without internet?", "a4": "Yes. With a local Ollama model, chat, document generation and dictation work fully offline. Internet is only needed for first setup, cloud models and web search.",
    "q5": "macOS says “unidentified developer”.", "a5": "The app isn't signed by Apple yet. Go to System Settings → Privacy & Security and click “Open Anyway” — you only need to do this once.",
    "q6": "Can I trust the AI's answers?", "a6": "Answers are generated automatically and can be wrong; verify before important decisions. Actions like running commands or changing files always ask for your approval.",
    "q7": "Are updates paid?", "a7": "No. The license is lifetime and 1.x updates are free. The app checks for new versions on launch.",

    "ct.k": "08 — Contact", "ct.h": "Questions & support", "ct.p": "Write to us directly about licenses, invoices or technical help.", "ct.b": "Send an email",
    "ft.privacy": "Privacy", "ft.terms": "Terms of Use",
  },
};

function siteLang() {
  try { const s = localStorage.getItem("waesna_lang"); if (s === "tr" || s === "en") return s; } catch (e) {}
  const langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"];
  return langs.some(l => /^tr\b/i.test(l)) ? "tr" : "en";
}

function applyLang(lang) {
  const d = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  document.title = d["meta.title"];
  const md = document.querySelector('meta[name="description"]'); if (md) md.content = d["meta.desc"];
  document.querySelectorAll("[data-t]").forEach(el => { const v = d[el.dataset.t]; if (v != null) el.textContent = v; });
  // yalnızca bizim yazdığımız sabit metinler (em vurgusu) — kullanıcı girdisi yok
  document.querySelectorAll("[data-th]").forEach(el => { const v = d[el.dataset.th]; if (v != null) el.innerHTML = v; });
  document.querySelectorAll("[data-lang]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  window.T = k => d[k] ?? k;
  document.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
}
