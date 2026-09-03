// Preliminary Physics — Section I multiple-choice questions
// Sourced from the 2021 NSW Independent Trial Exams, Physics Year 11 Examination,
// cross-checked against that paper's own official marking guidelines. Question
// images are direct crops of the original exam PDF pages.
const QUESTIONS = [
  {
    "id": "IND21-Q1",
    "year": 2021,
    "n": 1,
    "topic": "Kinematics",
    "subs": ["Motion in a Straight Line"],
    "img": "IND21_mc01.png",
    "w": 1644,
    "h": 708,
    "ans": ["B"],
    "expl": "Average velocity is total displacement over total time elapsed (including the rest): 500 m / 100 s = 5.0 m/s. East corresponds to a compass bearing of 090°, matching B."
  },
  {
    "id": "IND21-Q2",
    "year": 2021,
    "n": 2,
    "topic": "Kinematics",
    "subs": ["Motion in a Straight Line"],
    "img": "IND21_mc02.png",
    "w": 1644,
    "h": 1567,
    "ans": ["B"],
    "expl": "The object's velocity is constant (a straight line) from t = 0 to t = 4 s, then it is at rest (zero velocity) from t = 4 to t = 8 s. For the object to change from moving to at rest, a force had to act at t = 4.0 s — the first point the graph's slope changes."
  },
  {
    "id": "IND21-Q4",
    "year": 2021,
    "n": 4,
    "topic": "Dynamics",
    "subs": ["Forces"],
    "img": "IND21_mc04.png",
    "w": 1644,
    "h": 1567,
    "ans": ["D"],
    "expl": "From the diagram the chain makes a steep angle with the horizontal. Resolving the 1000 N force: horizontal component = 1000 cosθ ≈ 375 N, vertical component = 1000 sinθ ≈ 927 N (consistent with θ ≈ 68°), matching D."
  },
  {
    "id": "IND21-Q5",
    "year": 2021,
    "n": 5,
    "topic": "Dynamics",
    "subs": ["Forces, Acceleration and Energy"],
    "img": "IND21_mc05.png",
    "w": 1644,
    "h": 2375,
    "ans": ["C"],
    "expl": "The graph is a straight line through the origin, so the spring's compression (displacement) is directly proportional to the force applied by the truck — this is Hooke's Law behaviour."
  },
  {
    "id": "IND21-Q6",
    "year": 2021,
    "n": 6,
    "topic": "Dynamics",
    "subs": ["Forces, Acceleration and Energy"],
    "img": "IND21_mc06.png",
    "w": 1644,
    "h": 2375,
    "ans": ["A"],
    "expl": "Work done = area under the force-displacement graph = 1/2 × base × height = 1/2 × 0.20 m × 30 N = 3 J (converting 20 cm to 0.20 m before calculating)."
  },
  {
    "id": "IND21-Q7",
    "year": 2021,
    "n": 7,
    "topic": "Dynamics",
    "subs": ["Momentum, Energy and Simple Systems"],
    "img": "IND21_mc07.png",
    "w": 1644,
    "h": 935,
    "ans": ["D"],
    "expl": "By conservation of momentum, the impulse on trolley X is equal in magnitude to the impulse on trolley Y, ruling out A and B. Since kinetic energy gained = (impulse)^2 / (2 × mass) for equal impulses, the trolley with the LARGER mass gains LESS kinetic energy — so trolley X (the more massive one) gains less kinetic energy than trolley Y."
  },
  {
    "id": "IND21-Q8",
    "year": 2021,
    "n": 8,
    "topic": "Dynamics",
    "subs": ["Momentum, Energy and Simple Systems"],
    "img": "IND21_mc08.png",
    "w": 1644,
    "h": 632,
    "ans": ["C"],
    "expl": "A seatbelt (together with the car's crumple zones) extends the time over which the wearer's momentum changes during a collision. Since impulse (force × time) is fixed by the change in momentum, a longer collision time means a smaller average force on the person."
  },
  {
    "id": "IND21-Q9",
    "year": 2021,
    "n": 9,
    "topic": "Waves and Thermodynamics",
    "subs": ["Wave Properties"],
    "img": "IND21_mc09.png",
    "w": 1644,
    "h": 910,
    "ans": ["A"],
    "expl": "In a longitudinal wave, particles oscillate parallel to the direction the wave (and its energy) travels — unlike a transverse wave, where the oscillation is perpendicular to the energy transfer direction."
  },
  {
    "id": "IND21-Q10",
    "year": 2021,
    "n": 10,
    "topic": "Waves and Thermodynamics",
    "subs": ["Wave Behaviour"],
    "img": "IND21_mc10.png",
    "w": 1644,
    "h": 2198,
    "ans": ["D"],
    "expl": "Sound bends around the edges of the gap (diffracts) because the gap's width is comparable to the wavelength of the sound. This is why Jack can hear Jill despite not being able to see her through the gap."
  },
  {
    "id": "IND21-Q11",
    "year": 2021,
    "n": 11,
    "topic": "Waves and Thermodynamics",
    "subs": ["Thermodynamics"],
    "img": "IND21_mc11.png",
    "w": 1644,
    "h": 1238,
    "ans": ["B"],
    "expl": "Heat flows well through the conductor between the hot block X and cool block Y, so both settle to an intermediate 'warm' temperature. The insulator blocks heat reaching Z, which stays cool."
  },
  {
    "id": "IND21-Q12",
    "year": 2021,
    "n": 12,
    "topic": "Electricity and Magnetism",
    "subs": ["Electrostatics"],
    "img": "IND21_mc12.png",
    "w": 1644,
    "h": 1087,
    "ans": ["C"],
    "expl": "Using Coulomb's Law, F = kq1q2/r². The charge product becomes (2Q)(-0.5Q) = -Q² (opposite signs, so attraction), with the same magnitude as before. Halving the distance increases the force by a factor of 1/(0.5)² = 4, giving 4F attraction."
  },
  {
    "id": "IND21-Q13",
    "year": 2021,
    "n": 13,
    "topic": "Electricity and Magnetism",
    "subs": ["Electrostatics"],
    "img": "IND21_mc13.png",
    "w": 1644,
    "h": 1112,
    "ans": ["A"],
    "expl": "The field lines point upward from the bottom plate to the top plate, so the bottom plate is positive. Between ideal parallel plates the electric field is uniform, so identical charges X and Y experience equal forces regardless of their exact position."
  },
  {
    "id": "IND21-Q14",
    "year": 2021,
    "n": 14,
    "topic": "Electricity and Magnetism",
    "subs": ["Electric Circuits"],
    "img": "IND21_mc14.png",
    "w": 1644,
    "h": 1213,
    "ans": ["A"],
    "expl": "The 4Ω and 2Ω resistors in series form a 6Ω branch, in parallel with the 3Ω branch: total resistance = (6×3)/(6+3) = 2Ω, so total current = 18/2 = 9 A. By the current divider rule, the 6Ω branch (containing the 2Ω resistor) carries 9 × 3/(3+6) = 3 A."
  },
  {
    "id": "IND21-Q15",
    "year": 2021,
    "n": 15,
    "topic": "Electricity and Magnetism",
    "subs": ["Magnetism"],
    "img": "IND21_mc15.png",
    "w": 1644,
    "h": 1567,
    "ans": ["D"],
    "expl": "Applying the right-hand grip rule to each conductor and superposing the four resulting fields at the centre P gives a net magnetic field pointing down the page."
  }
];
