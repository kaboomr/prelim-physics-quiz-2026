# Preliminary Physics — Quiz Arena (student game)

Static site. Deploy with GitHub Pages: **Settings → Pages → branch `main`, folder `/root`**.

Students open the Pages URL, pick their name, set a 4-digit PIN, and play. Results
sync to Firebase, so nothing needs re-uploading when the class list changes.

Forked from the [Preliminary Biology Quiz Arena](https://github.com/kaboomr/prelim-bio-quiz-2026) —
same game engine, adapted for NSW Stage 6 Preliminary Physics.

## What's in here

| File | Purpose |
|---|---|
| `index.html` | The whole game — screens, styling and logic |
| `config.js` | Class list, Firebase project, XP settings |
| `syllabus.js` | Module and content-area map |
| `data.js` | Section I multiple-choice questions |
| `data-sa.js` | Section II short-answer sub-questions, with marking criteria and model answers |
| `glossary.js` | Concept/term definitions |
| `syllabus-content.js` | NESA syllabus dot points |
| `chains.js` | Cause-and-effect chains |
| `diagrams.js` | Labelled diagrams (SVG) |
| `syllabus-games.js` | The four Syllabus Drill games |
| `store.js` | Firebase/localStorage data layer, XP, badges |
| `IND21_*.png`, `P22_*.png`/`.svg`, `JR20_*.png`, `PYM24_*.png`/`.svg`, `P23_*.png`/`.svg` | Question images — real exam crops (PNG) or text-only cards for questions whose original diagram was photographic/copyrighted/non-contiguous (SVG) |

**On the exam bank:** `data.js` (79 Section I questions) and `data-sa.js` (80 Section II
sub-questions) are sourced from five real papers so far:
- **2021 NSW Independent Trial Exams, Physics Year 11 Examination** (`IND21-*` ids)
- **2022 NSW Independent Exams, Physics Year 11 Examination** (`P22-*` ids)
- **James Ruse Agricultural High School, 2020 Physics Year 11 Yearly Exam** (`JR20-*` ids)
- **Pymble Ladies' College, 2024 Physics Year 11 Examination** (`PYM24-*` ids)
- **2023 NSW Independent Exams, Physics Year 11 Examination** (`P23-*` ids)

Every answer and marking guideline was cross-checked question-by-question against that
paper's own official marking guidelines (not retyped from memory or guessed) — this
caught and fixed a genuine mismatch in the 2022 paper (Q7) before it went in. Diagram-only
or graph-drawing sub-parts, and questions built around a photograph (e.g. a real aircraft
or a cat) rather than a line diagram, were dropped or rewritten as plain text rather than
reproducing copyrighted images — the same approach used for the Biology quiz's own exam
bank. Every multiple-choice crop for the 2023 paper was individually re-checked to contain
exactly one question with no bleed from its neighbours (an issue caught in earlier passes),
tightening several crop boundaries before they went in; one MC question (Q9) shared a
stimulus with a non-adjacent question and was rebuilt as a text-only card instead of forcing
a crop that would have included the other question's text. Many more real Preliminary
Physics past papers with answer keys/marking guidelines are available (see
`kaboomr/physics-past-papers`); growing the bank further means repeating this same
crop-and-verify process on them, not retyping. Ask any time to keep extending it.

## Game modes

**Exam practice** — Multiple Choice Quiz, Short Answer Quiz, Exam Simulation
(up to 20 questions / 20 minutes), My Mistakes, Daily Challenge, Survival, Duels.

**Concept practice** — Syllabus Drills (four games on the NESA dot points),
Matching, Flashcards with spaced repetition, Definition Quiz, Chain Builder,
Diagram Labelling.

**Progress** — Peer Marking, My Answers, Leaderboard, My Progress.

## Notes

- `config.js` points at its own `prelim-physics-quiz-2026` Firebase project
  (separate from the Biology quiz sites' project), so results sync and the
  leaderboard and teacher dashboard work out of the box. Leaving
  `firebaseConfig.apiKey` empty instead falls back to **device-only practice
  mode** (results saved only in the browser played on).
- The teacher dashboard is deployed as a **separate** repository
  ([`prelim-physics-quiz-teacher`](https://github.com/kaboomr/prelim-physics-quiz-teacher))
  so students can never reach it.
