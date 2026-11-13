#!/usr/bin/env python3
"""Sayfa metinlerini HTML'e yazar (JavaScript çalıştırmayan arama motorları ve araçlar için).
i18n.js (voyagerone.html) ve index.html içindeki H sözlüğü Türkçe kaynak olarak kullanılır;
tarayıcıda applyLang yine ziyaretçinin diline çevirir.   Kullanım:  python3 prerender.py
"""
import html, json, re
from pathlib import Path

HERE = Path(__file__).resolve().parent


def dict_from(js: str, start_pat: str) -> dict:
    """JS dosyasındaki 'tr: {...}' bloğunu JSON gibi okur."""
    m = re.search(start_pat, js)
    i = js.index("{", m.end() - 1)
    depth = 0
    for j in range(i, len(js)):
        depth += js[j] == "{"
        depth -= js[j] == "}"
        if depth == 0:
            blk = js[i:j + 1]
            break
    blk = re.sub(r",(\s*})", r"\1", blk)
    blk = re.sub(r'([\{,]\s*)"([^"]+)"\s*:', r'\1"\2":', blk)
    return json.loads(blk)


def fill(page: str, d: dict) -> str:
    def one(m):
        attr, key, open_tag, tag = m.group(2), m.group(3), m.group(1), m.group(4)
        if key not in d:
            return m.group(0)
        val = d[key] if attr == "data-th" else html.escape(d[key], quote=False)
        return f"{open_tag}{val}</{tag}>"
    pat = re.compile(r'(<(\w+)[^>]*?\s(data-th|data-t)="([^"]+)"[^>]*>)(.*?)</\2>', re.S)
    def sub(m):
        open_tag, tag, attr, key = m.group(1), m.group(2), m.group(3), m.group(4)
        if key not in d or tag in ("html",):
            return m.group(0)
        val = d[key] if attr == "data-th" else html.escape(d[key], quote=False)
        return f"{open_tag}{val}</{tag}>"
    return pat.sub(sub, page)


def main():
    cfg = (HERE / "config.js").read_text(encoding="utf-8")
    dl = dict(re.findall(r'(mac|windows|linux):\s*"(https://[^"]+)"', cfg))

    i18n = (HERE / "i18n.js").read_text(encoding="utf-8")
    tr = dict_from(i18n, r"tr:\s*\{")
    v = HERE / "voyagerone.html"
    t = fill(v.read_text(encoding="utf-8"), tr)
    for os_, url in dl.items():
        t = re.sub(r'(<a class="dl" data-dl="%s")(?: href="[^"]*")?' % os_, r'\1 href="%s"' % url, t)
    v.write_text(t, encoding="utf-8")

    idx = HERE / "index.html"
    src = idx.read_text(encoding="utf-8")
    tr_h = dict_from(src, r"const H = \{\s*tr:\s*\{")
    idx.write_text(fill(src, tr_h), encoding="utf-8")
    print("metinler HTML'e yazıldı: voyagerone.html, index.html")


if __name__ == "__main__":
    main()
