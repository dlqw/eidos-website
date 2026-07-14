import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import sharp from "sharp";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const brand = resolve(root, "public", "brand");
const mark = await readFile(resolve(brand, "eidos-mark.svg"));

await Promise.all([
  sharp(mark).resize(192, 192).png().toFile(resolve(brand, "eidos-mark-192.png")),
  sharp(mark).resize(512, 512).png().toFile(resolve(brand, "eidos-mark-512.png")),
  sharp(resolve(brand, "eidos-social.svg")).png().toFile(resolve(brand, "eidos-social.png"))
]);

console.log("Generated Eidos PNG brand assets.");
