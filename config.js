/* ══════════════════════════════════════════════════════════════════════
   WAESNA — SİTE AYARLARI
   Düzenlemen gereken TEK dosya burasıdır. Kaydet, sonra:
       git add -A && git commit -m "ayarlar" && git push
   1–2 dakika içinde site güncellenir.

   ⚠️ Bu dosya herkese açıktır (siteyi açan herkes okuyabilir).
      Buraya YALNIZCA herkese açık olması normal olan değerler yazılır:
      ödeme sayfası linki, indirme linki, e-posta.
      Gizli API anahtarı / secret key ASLA buraya yazılmaz.
   ══════════════════════════════════════════════════════════════════════ */
const CONFIG = {

  /* İletişim ve satın alma e-postası */
  email: "voyageroneai@gmail.com",

  /* Sitede gösterilen sürüm numarası */
  version: "1.0.3",

  /* ÖDEME LİNKLERİ ───────────────────────────────────────────────────
     Gumroad / Lemon Squeezy / Payhip gibi bir serviste ürünü oluşturunca
     sana verilen herkese açık ödeme adresini buraya yapıştır.
     Boş bırakılan plan: düğme "Bilgi al" olur ve e-posta açar.
     Örnek:  pro: "https://waesna.gumroad.com/l/voyagerone",              */
  buy: {
    pro:     "",
    team:    "",
    company: ""
  },

  /* TALEP FORMU ──────────────────────────────────────────────────────
     Satın alma linki boş olan planlarda "Talep oluştur" formu açılır ve
     talep bu adrese (senin Google Apps Script'in) gider. Admin panelindeki
     Yayınla düğmesi bunu kendisi doldurur.                              */
  requestUrl: "https://script.google.com/macros/s/AKfycbx4iYgV_EJHtDxMAcmSyUD7iq29gp2q2mlJt8W7FpAj3gjqkat5eIccLRpPashUd4bK/exec",

  /* İNDİRME LİNKLERİ ─────────────────────────────────────────────────
     Boş bırakılan platform "yakında" olarak görünür.                    */
  downloads: {
    mac:     "https://github.com/waesna/waesna.github.io/releases/download/v1.0.3/VoyagerOne-1.0.3-macOS.dmg",
    windows: "https://github.com/waesna/waesna.github.io/releases/download/v1.0.3/VoyagerOne-1.0.3-Windows.zip",
    linux:   "https://github.com/waesna/waesna.github.io/releases/download/v1.0.3/VoyagerOne-1.0.3-Linux.tar.gz"
  },

  /* INTRO (2. ürün) — video editörü ───────────────────────────────────
     buy boşsa "Satın al" düğmesi e-posta ile talep açar. downloads boşsa
     platform "yakında" görünür. Sürüm yayınlayınca linkleri doldur.        */
  intro: {
    version:  "1.0.0",
    price:    "$9.99",
    buy:      "",
    downloads: { mac: "", windows: "", linux: "" }
  }
};
