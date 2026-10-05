"""Insert BudouX phrase boundaries into Japanese text in the static pages.

Run after editing Japanese copy. The generated pages require no BudouX script in
the visitor's browser, so language switching cannot retrigger segmentation.
"""

from pathlib import Path
import re

import budoux


ROOT = Path(__file__).resolve().parent
PAGES = ("index.html", "about.html", "stores.html", "reservation.html")
PARSER = budoux.load_default_japanese_parser()
TEXT_NODE = re.compile(r"(?<=>)([^<>]+)(?=<)")
JAPANESE = re.compile(r"[\u3040-\u30ff\u3400-\u9fff]")
HTML_ENTITY = re.compile(r"&(?:#[0-9]+|#x[0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]+);")
BREAK = "\u200b"


def wrap_phrase(match: re.Match[str]) -> str:
    text = match.group(1).replace(BREAK, "")
    if not JAPANESE.search(text) or HTML_ENTITY.search(text):
        return text

    phrase = text.strip()
    if len(phrase) < 6:
        return text

    start = len(text) - len(text.lstrip())
    end = len(text.rstrip())
    return text[:start] + BREAK.join(PARSER.parse(phrase)) + text[end:]


for name in PAGES:
    path = ROOT / name
    original = path.read_text(encoding="utf-8")
    updated = TEXT_NODE.sub(wrap_phrase, original)
    if updated != original:
        path.write_text(updated, encoding="utf-8", newline="")
    print(f"{name}: {updated.count(BREAK)} BudouX breaks")
