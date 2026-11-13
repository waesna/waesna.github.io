#!/usr/bin/env python3
"""privacy.html ve terms.html sayfalarını VoyagerOne.py içindeki YASAL METİNLERDEN
üretir; böylece uygulama ile site asla farklılaşmaz.   Kullanım:  python3 legal.py
"""
import html
import importlib.util
import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
APP = HERE.parent / "VoyagerOne.py"
EMAIL = "voyageroneai@gmail.com"


def app():
    spec = importlib.util.spec_from_file_location("vg", APP)
    m = importlib.util.module_from_spec(spec)
    sys.modules["vg"] = m
    spec.loader.exec_module(m)
    m.LEGAL_CONTACT_EMAIL = EMAIL
    return m


def md(body: str) -> str:
    out, lst = [], False
    for raw in body.split("\n"):
        line = raw.strip()
        if line.startswith("- "):
            if not lst:
                out.append("<ul>")
                lst = True
            out.append(f"<li>{html.escape(line[2:])}</li>")
            continue
        if lst:
            out.append("</ul>")
            lst = False
        if not line:
            continue
        out.append(f"<h3>{html.escape(line[3:])}</h3>" if line.startswith("## ")
                   else f"<p>{html.escape(line)}</p>")
    if lst:
        out.append("</ul>")
    return "\n".join(out)


def style():
    return """
main{max-width:820px;margin:0 auto;padding:clamp(48px,7vw,100px) var(--pad) 110px}
main>.mono{font-weight:600;color:var(--gray);font-size:14px}
h1{font:800 clamp(38px,6vw,84px)/.95 var(--display);font-stretch:75%;letter-spacing:-.022em;margin:14px 0 18px}
h2{font:800 clamp(28px,3.4vw,44px)/1 var(--display);font-stretch:75%;letter-spacing:-.018em;margin:60px 0 14px;padding-top:28px;border-top:2px solid var(--ink)}
h3{font:600 17px/1.35 var(--body);margin:28px 0 6px}
p,li{color:#333;margin-bottom:10px}ul{padding-left:20px}
main a{text-decoration:underline;text-underline-offset:3px}
.meta{color:var(--gray);font-size:14px;margin-bottom:22px}
.langbar{display:flex;gap:16px;font-weight:600;margin-bottom:8px}
.back{font-size:14px}
footer{border-top:1px solid var(--rule);padding:28px var(--pad) 50px;font-size:13px;color:var(--gray);display:flex;gap:16px;justify-content:space-between;flex-wrap:wrap}
footer a:hover{color:var(--ink)}
"""


def page(title, docs_by_lang, ids, version):
    body = ""
    for lang, label in (("tr", "Türkçe"), ("en", "English")):
        body += f'<section id="{lang}">'
        for did in ids:
            d = docs_by_lang[lang][did]
            body += f"<h2>{html.escape(d['title'])}</h2>" + md(d["body"])
        body += "</section>"
    return f"""<!DOCTYPE html><html lang="tr"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{html.escape(title)} — WAESNA</title>
<meta name="robots" content="index,follow">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link rel="preload" href="assets/fonts/bricolage-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="assets/fonts.css">
<link rel="stylesheet" href="assets/site.css">
<style>{style()}</style></head><body>
<nav class="nav on"><div class="wrap"><a class="logo" href="./"><img src="assets/waesna-mark.png" alt="" width="704" height="389">WAESNA</a><a class="back" href="./">← Ana sayfa</a></div></nav>
<main><p class="mono">VoyagerOne</p><h1>{html.escape(title)}</h1>
<p class="meta">Yürürlük / effective: {version} · Eray Mert Özüduru · <a href="mailto:{EMAIL}">{EMAIL}</a></p>
<div class="langbar"><a href="#tr">Türkçe</a><a href="#en">English</a></div>
{body}</main>
<footer><span>© 2026 WAESNA</span><span><a href="privacy.html">Gizlilik</a> · <a href="terms.html">Koşullar</a></span></footer>
</body></html>"""


def main():
    vg = app()
    docs = {lang: {d["id"]: d for d in vg._legal_docs(lang)} for lang in ("tr", "en")}
    (HERE / "privacy.html").write_text(
        page("Gizlilik Politikası ve KVKK Aydınlatma Metni", docs, ["privacy"], vg.LEGAL_VERSION), encoding="utf-8")
    (HERE / "terms.html").write_text(
        page("Kullanım Koşulları", docs, ["terms", "ai", "thirdparty"], vg.LEGAL_VERSION), encoding="utf-8")
    print("üretildi: privacy.html, terms.html")


if __name__ == "__main__":
    main()
