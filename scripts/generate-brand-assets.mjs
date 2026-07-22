import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import * as fontkit from "fontkit";
import sharp from "sharp";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const brand = resolve(root, "public", "brand");
const fontData = await readFile(resolve(root, "scripts", "fonts", "Manrope[wght].ttf"));
const font = fontkit.create(fontData);

const colors = {
  graphite: "#242523",
  ink: "#20211F",
  paper: "#F4F0E8",
  oxide: "#C9654F",
  oxideDark: "#DE7A63"
};

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

function owlGeometry({ body, eyes, pupils = body, beak }) {
  return [
    `<path fill="${body}" d="M17 21 41 31q3 1 5-1l15-10q3-2 6 0l15 10q2 2 5 1l24-10q4-2 3 3l-7 54q0 4-3 7l-17 21q-2 3-5 1l-16-9q-2-1-4 0l-16 9q-3 2-5-1L24 85q-3-3-3-7l-7-54q-1-5 3-3Z"/>`,
    `<path fill="${eyes}" d="m24 57 17-17q3-3 6 0l12 12q3 3 1 7l-7 14q-1 3-5 3H35q-4 0-6-3l-7-10q-2-3 2-6Zm80 0L87 40q-3-3-6 0L69 52q-3 3-1 7l7 14q1 3 5 3h13q4 0 6-3l7-10q2-3-2-6Z"/>`,
    `<rect width="15" height="15" x="36.5" y="48.5" rx="2.5" fill="${pupils}" transform="rotate(45 44 56)"/>`,
    `<rect width="15" height="15" x="76.5" y="48.5" rx="2.5" fill="${pupils}" transform="rotate(45 84 56)"/>`,
    `<path fill="${beak}" d="m64 59 9 16q1 2-1 4l-8 8-8-8q-2-2-1-4z"/>`
  ].join("");
}

function markSvg({ title, description, body, eyes, pupils, beak }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" role="img" aria-labelledby="title desc">
  <title id="title">${title}</title>
  <desc id="desc">${description}</desc>
  ${owlGeometry({ body, eyes, pupils, beak })}
</svg>
`;
}

const markLight = markSvg({
  title: "Eidos",
  description: "A calm geometric owl representing reason and the Greek roots of Eidos.",
  body: colors.graphite,
  eyes: colors.paper,
  beak: colors.oxide
});

const markDark = markSvg({
  title: "Eidos",
  description: "The Eidos owl mark for dark backgrounds.",
  body: colors.paper,
  eyes: colors.ink,
  beak: colors.oxideDark
});

const markMono = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" role="img" aria-labelledby="title desc">
  <title id="title">Eidos</title>
  <desc id="desc">A monochrome geometric owl representing reason.</desc>
  <path fill="currentColor" fill-rule="evenodd" d="M17 21 41 31q3 1 5-1l15-10q3-2 6 0l15 10q2 2 5 1l24-10q4-2 3 3l-7 54q0 4-3 7l-17 21q-2 3-5 1l-16-9q-2-1-4 0l-16 9q-3 2-5-1L24 85q-3-3-3-7l-7-54q-1-5 3-3Zm7 36 17-17q3-3 6 0l12 12q3 3 1 7l-7 14q-1 3-5 3H35q-4 0-6-3l-7-10q-2-3 2-6Zm80 0L87 40q-3-3-6 0L69 52q-3 3-1 7l7 14q1 3 5 3h13q4 0 6-3l7-10q2-3-2-6ZM64 59l9 16q1 2-1 4l-8 8-8-8q-2-2-1-4Z"/>
  <rect width="15" height="15" x="36.5" y="48.5" rx="2.5" fill="currentColor" transform="rotate(45 44 56)"/>
  <rect width="15" height="15" x="76.5" y="48.5" rx="2.5" fill="currentColor" transform="rotate(45 84 56)"/>
</svg>
`;

function lockupSvg({ title, description, body, eyes, beak, wordmark }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="440" height="160" viewBox="0 0 440 160" role="img" aria-labelledby="title desc">
  <title id="title">${title}</title>
  <desc id="desc">${description}</desc>
  <g transform="translate(16 16)">${owlGeometry({ body, eyes, beak })}</g>
  <g fill="${wordmark}">${textAsPaths("EIDOS", 174, 111, 76, 720, 3.5)}</g>
</svg>
`;
}

const lockupLight = lockupSvg({
  title: "Eidos",
  description: "The Eidos owl and uppercase wordmark.",
  body: colors.graphite,
  eyes: colors.paper,
  beak: colors.oxide,
  wordmark: colors.graphite
});

const lockupDark = lockupSvg({
  title: "Eidos",
  description: "The Eidos owl and uppercase wordmark for dark backgrounds.",
  body: colors.paper,
  eyes: colors.ink,
  beak: colors.oxideDark,
  wordmark: colors.paper
});

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" role="img" aria-label="Eidos">
  <rect width="64" height="64" rx="14" fill="${colors.paper}"/>
  <g transform="translate(5 5) scale(.421875)">${owlGeometry({ body: colors.graphite, eyes: colors.paper, beak: colors.oxide })}</g>
</svg>
`;

const socialTemplate = await readFile(resolve(root, "scripts", "eidos-social.template.svg"), "utf8");
const social = socialTemplate
  .replace("{{OWL}}", owlGeometry({ body: colors.graphite, eyes: colors.paper, beak: colors.oxide }))
  .replace("{{WORDMARK}}", textAsPaths("EIDOS", 442, 239, 108, 720, 5))
  .replace("{{TAGLINE}}", textAsPaths("A statically typed native language.", 446, 318, 34, 500))
  .replace("{{VERSION}}", textAsPaths("0.7.0-alpha.1", 468, 405, 18, 700, 1.2))
  .replace("{{FOOTER}}", textAsPaths("Functional core · typed metaprogramming · LLVM toolchain", 88, 558, 21, 500));

await Promise.all([
  writeFile(resolve(brand, "eidos-mark.svg"), markLight),
  writeFile(resolve(brand, "eidos-mark-dark.svg"), markDark),
  writeFile(resolve(brand, "eidos-mark-mono.svg"), markMono),
  writeFile(resolve(brand, "eidos-lockup.svg"), lockupLight),
  writeFile(resolve(brand, "eidos-lockup-dark.svg"), lockupDark),
  writeFile(resolve(root, "public", "favicon.svg"), favicon),
  writeFile(resolve(brand, "eidos-social.svg"), social),
  sharp(Buffer.from(favicon)).resize(192, 192).png().toFile(resolve(brand, "eidos-mark-192.png")),
  sharp(Buffer.from(favicon)).resize(512, 512).png().toFile(resolve(brand, "eidos-mark-512.png")),
  sharp(Buffer.from(social)).png().toFile(resolve(brand, "eidos-social.png"))
]);

console.log("Generated Eidos SVG and PNG brand assets.");
