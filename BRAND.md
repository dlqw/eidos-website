# Eidos brand assets

The Eidos mark represents one typed form moving through multiple compiler
layers. Four connected facets form an abstract **E**: source and types,
structured intermediate representations, and native output remain part of one
semantic pipeline.

## Assets

- `public/brand/eidos-mark.svg`: primary full-color mark;
- `public/brand/eidos-mark-mono.svg`: single-color mark using `currentColor`;
- `public/favicon.svg`: small-size mark on the Eidos ink background;
- `scripts/eidos-social.template.svg`: editable social-card layout;
- `public/brand/eidos-social.svg`: generated social-card vector with text converted to portable paths;
- generated PNG assets are produced by `npm run brand`.

The social-card generator uses the bundled Manrope variable font under the
SIL Open Font License. Converting text to paths keeps the published card
identical across build platforms.

## Colors

| Token | Hex | Use |
| --- | --- | --- |
| Ink | `#080B16` | Dark background |
| Iris | `#6574FF` | Primary action and mark |
| Violet | `#8C5CFF` | Compile-time facet |
| Teal | `#34D3BA` | Structure and success accent |
| Ice | `#72E0F5` | Highlight |

Keep clear space around the mark equal to at least one quarter of its width.
Do not redraw the facets, add shadows inside the mark, rotate it, or replace its
palette with another project's brand colors. Use the monochrome asset whenever
the full-color mark would not have sufficient contrast.
