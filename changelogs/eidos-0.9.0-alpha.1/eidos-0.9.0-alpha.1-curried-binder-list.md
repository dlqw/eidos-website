# Eidos 0.9.0-alpha.1 curried binder lists

- Sync ID: `eidos-2026-07-28-curried-binder-list`
- Classification: feature
- Target language version: `0.9.0-alpha.1`

- Published `left, right => body` as the canonical curried branch spelling while retaining `left => right => body` as its right-associated equivalent.
- Documented `(left, right) => body` as one tuple parameter and `(a, b), (c, d) => body` as two curried tuple parameters.
- Added a checked public example covering partial application and tuple-pattern disambiguation.
