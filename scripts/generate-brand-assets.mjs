import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import * as fontkit from "fontkit";
import sharp from "sharp";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const brand = resolve(root, "public", "brand");
const mark = await readFile(resolve(brand, "eidos-mark.svg"));
const fontData = await readFile(resolve(
  root,
  "scripts",
  "fonts",
  "Manrope[wght].ttf"
));
const font = fontkit.create(fontData);

function textAsPaths(text, x, baseline, size, weight, letterSpacing = 0) {
  const face = typeof font.getVariation === "function" ? font.getVariation({ wght: weight }) : font;
  const run = face.layout(text);
  const scale = size / face.unitsPerEm;
  const spacing = letterSpacing / scale;
  let cursor = 0;
  const paths = run.glyphs.map((glyph, index) => {
    const position = run.positions[index];
    const translatedX = cursor + position.xOffset;
    const translatedY = position.yOffset;
    cursor += position.xAdvance + spacing;
    return `<path d="${glyph.path.toSVG()}" transform="translate(${translatedX.toFixed(3)} ${translatedY.toFixed(3)})"/>`;
  });

  return `<g transform="translate(${x} ${baseline}) scale(${scale.toFixed(8)} -${scale.toFixed(8)})">${paths.join("")}</g>`;
}

const socialTemplate = await readFile(resolve(root, "scripts", "eidos-social.template.svg"), "utf8");
const social = socialTemplate
  .replace("{{WORDMARK}}", textAsPaths("Eidos", 405, 250, 118, 720))
  .replace("{{TAGLINE}}", textAsPaths("Typed forms. Native programs.", 412, 330, 35, 500))
  .replace("{{VERSION}}", textAsPaths("0.5.0-alpha.1", 436, 413, 19, 700, 1.4))
  .replace("{{FOOTER}}", textAsPaths("Functional core · typed metaprogramming · LLVM toolchain", 88, 558, 22, 500));

await writeFile(resolve(brand, "eidos-social.svg"), social);

await Promise.all([
  sharp(mark).resize(192, 192).png().toFile(resolve(brand, "eidos-mark-192.png")),
  sharp(mark).resize(512, 512).png().toFile(resolve(brand, "eidos-mark-512.png")),
  sharp(Buffer.from(social)).png().toFile(resolve(brand, "eidos-social.png"))
]);

console.log("Generated Eidos PNG brand assets.");
