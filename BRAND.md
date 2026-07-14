# Eidos brand assets

The Eidos mark is a calm geometric owl. The owl connects the language's name
and Greek roots with reason, deliberate construction, and clear judgment. Its
symmetry reflects a language that brings functional, systems, and compile-time
programming into one coherent form.

The mark is intentionally compact: a single frontal silhouette, two open eye
forms, and one restrained oxide beak. It must remain recognizable at favicon
size without feathers, outlines, gradients, or decorative effects.

## Assets

- `public/brand/eidos-mark.svg`: primary mark for light surfaces;
- `public/brand/eidos-mark-dark.svg`: mark for dark surfaces;
- `public/brand/eidos-mark-mono.svg`: single-color mark using `currentColor`;
- `public/brand/eidos-lockup.svg`: owl with the uppercase **EIDOS** wordmark;
- `public/brand/eidos-lockup-dark.svg`: lockup for dark surfaces;
- `public/favicon.svg`: small-size mark on a fixed paper field;
- `scripts/eidos-social.template.svg`: editable social-card layout;
- `public/brand/eidos-social.svg`: generated social-card vector with text
  converted to portable paths;
- generated PNG assets are produced by `npm run brand`.

The lockup and social-card generators use the bundled Manrope variable font
under the SIL Open Font License. Converting text to paths keeps the published
assets identical across build platforms.

## Colors

| Token | Hex | Use |
| --- | --- | --- |
| Graphite | `#242523` | Primary mark and wordmark |
| Ink | `#20211F` | Dark surfaces and code contexts |
| Paper | `#F4F0E8` | Light surfaces and eye forms |
| Oxide | `#C9654F` | Beak and restrained brand accent |
| Light oxide | `#DE7A63` | Beak on dark surfaces |

The identity uses flat colors. Do not introduce purple-cyan gradients, glow,
glass effects, shadows inside the mark, simulated depth, or generated texture.

## Usage

- Keep clear space around the mark equal to at least one quarter of its width.
- Use the primary mark on Paper or similarly light neutral surfaces.
- Use the dark asset on Ink, Graphite, or similarly dark neutral surfaces.
- Use the horizontal lockup when the Eidos name is not already present nearby.
- Preserve the uppercase spelling **EIDOS** in the official lockup.
- Use the monochrome asset when reproduction permits only one color.
- Do not redraw the owl, alter its expression, add feathers, rotate it, or turn
  it into a cartoon mascot inside product branding.
