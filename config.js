// ====================================================================
// Preliminary Physics Quiz — Configuration
// Edit this file, save, and refresh the page. See SETUP.md for help.
// ====================================================================

// 1. YOUR CLASS LIST — one name per line, inside the quotes.
//    Students pick their name and set their own PIN on first login.
//    (You can also add/remove students later from the teacher dashboard.)
const CLASS_LIST = [
  "Demo Student",
  // "Add your students here...",
];

// 1b. CLASS NAME — this is a single-class build (no class battle). This label
//     is only used internally; students are never asked to pick a class.
const CLASSES = ["Physics"];

// 2. FIREBASE — paste your own project's config here (see SETUP.md, ~10 minutes).
//    Leave apiKey empty ("") to run in device-only practice mode: every
//    student's results are then saved only in the browser they played in.
//    Both this file and quiz-teacher/config.js must point at the SAME project.
//    Use a NEW Firebase project (e.g. "prelim-physics-quiz-2026") — don't reuse
//    the Biology quiz sites' Firebase project.
const firebaseConfig = {
  apiKey: "AIzaSyDbwK2B3lfD9LJDcAToI7ZAn-L4GcAgoz4",
  authDomain: "prelim-physics-quiz-2026.firebaseapp.com",
  projectId: "prelim-physics-quiz-2026",
  storageBucket: "prelim-physics-quiz-2026.firebasestorage.app",
  messagingSenderId: "406585564285",
  appId: "1:406585564285:web:cec75faa98282b7b5fa514"
};

// 3. Options
const QUIZ_OPTIONS = {
  secondsPerQuestion: 90,   // timer pace when the timer is switched on
  xpPerCorrect: 10,         // base XP per correct answer
  xpPerMark: 10,            // base XP per mark; short answers earn 3x this (30 per mark)
  xpPerMatch: 5,            // XP per pair matched first try in the Matching game
};

// 4. SHORT ANSWER MARKING
//    Students type their Section II answers and hand them in; you mark them from
//    the Teacher Dashboard. The AI marking assistant (optional) lives in the
//    dashboard's config.js so your API key is never served to students.
