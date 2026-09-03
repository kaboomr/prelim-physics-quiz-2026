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
| `PHYS_*.svg` | Question images, generated from text (not exam scans) |

**On the exam bank:** the multiple-choice and short-answer questions currently in
`data.js` and `data-sa.js` are **original practice questions**, written for this
build rather than taken from a real past paper — they're a placeholder so the game
is fully playable out of the box. Once real Preliminary Physics past papers (with
official answer keys / marking guidelines) are supplied, these should be replaced
with verified questions cross-checked directly against the source PDFs, the same
way the Biology quiz's question bank was built.

## Game modes

**Exam practice** — Multiple Choice Quiz, Short Answer Quiz, Exam Simulation
(20 questions / 20 minutes), My Mistakes, Daily Challenge, Survival, Duels.

**Concept practice** — Syllabus Drills (four games on the NESA dot points),
Matching, Flashcards with spaced repetition, Definition Quiz, Chain Builder,
Diagram Labelling.

**Progress** — Peer Marking, My Answers, Leaderboard, My Progress.

## Notes

- `config.js` ships with `firebaseConfig.apiKey` left empty, which runs the game
  in **device-only practice mode** (results saved only in the browser played on).
  Create a new Firebase project (e.g. "prelim-physics-quiz-2026") and paste its
  config in to enable syncing, leaderboards and the teacher dashboard — don't
  reuse the Biology quiz sites' Firebase project.
- The teacher dashboard is deployed as a **separate** repository
  ([`prelim-physics-quiz-teacher`](https://github.com/kaboomr/prelim-physics-quiz-teacher))
  so students can never reach it.
