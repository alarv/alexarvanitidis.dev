"""Render the deployment decalogue as a 1200x630 OG/cover image.

Usage: python3 etc/generate-decalogue-cover.py
Requires: Pillow (`pip install Pillow`) and macOS system fonts.
Output: app/blog/the-deploy-decalogue/opengraph-image.png
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG = (13, 17, 23)
GOLD = (212, 175, 105)
TEXT = (230, 230, 230)
DIM = (150, 150, 150)
ACCENT = (88, 166, 255)

MONO = "/System/Library/Fonts/SFNSMono.ttf"
SANS_BOLD = "/System/Library/Fonts/Helvetica.ttc"

LINES = [
    ("I.", "Thy deploy finishes in under a minute."),
    ("II.", "Thou shalt roll back in minutes."),
    ("III.", "Thou shalt wield toggles with live changes."),
    ("IV.", "Thou shalt change in two steps."),
    ("V.", "Thou shalt keep tests thou trusteth."),
    ("VI.", "Thou shalt test locally and in pre-prod."),
    ("VII.", "Thou shalt monitor all and mark thy deploys."),
    ("VIII.", "Thou shalt keep humans on watch."),
    ("IX.", "Thou shalt back up and test thy restore."),
    ("X.", "Thou shalt ship without fear."),
]

img = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(img)

title_font = ImageFont.truetype(SANS_BOLD, 64)
mono_font = ImageFont.truetype(MONO, 25)
mono_bold = ImageFont.truetype(MONO, 25)
small_font = ImageFont.truetype(MONO, 20)

title = "THE DEPLOYMENT DECALOGUE"
tb = d.textbbox((0, 0), title, font=title_font)
d.text(((W - (tb[2] - tb[0])) / 2, 36), title, font=title_font, fill=GOLD)

sub = "10 commandments - if all true, ship it"
sb = d.textbbox((0, 0), sub, font=small_font)
d.text(((W - (sb[2] - sb[0])) / 2, 122), sub, font=small_font, fill=DIM)

y = 168
for numeral, rest in LINES:
    color = GOLD if numeral in ("X.",) else TEXT
    d.text((90, y), numeral, font=mono_bold, fill=ACCENT)
    d.text((190, y), rest, font=mono_font, fill=color)
    y += 40

foot = "alexarvanitidis.dev"
fb = d.textbbox((0, 0), foot, font=small_font)
d.text(((W - (fb[2] - fb[0])) / 2, H - 48), foot, font=small_font, fill=DIM)

out = (
    Path(__file__).resolve().parent.parent
    / "app/blog/the-deploy-decalogue/opengraph-image.png"
)
img.save(out)
print("saved", out)
