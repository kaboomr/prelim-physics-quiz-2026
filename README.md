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
| `IND21_*.png` | Question images, cropped directly from the source exam PDF |

**On the exam bank:** `data.js` (14 Section I questions) and `data-sa.js` (26 Section II
sub-questions) are sourced from the **2021 NSW Independent Trial Exams, Physics Year 11
Examination**, cross-checked question-by-question against that paper's own official
marking guidelines (not retyped from memory or guessed). Diagram-only or graph-drawing
sub-parts (Q17a, Q17b, Q18, Q24) were dropped rather than guessed at, since they need a
physical ruler/protractor or a hand-drawn graph to answer — the same approach used for
the Biology quiz's own exam bank. Many more real Preliminary Physics past papers with
answer keys/marking guidelines are available (see `kaboomr/physics-past-papers`);
growing the bank further means repeating this same crop-and-verify process on them,
not retyping. Ask any time to keep extending it.

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
