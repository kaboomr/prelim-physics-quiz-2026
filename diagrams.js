// Preliminary Physics diagram labelling
// Each diagram is an SVG drawn on a 640x400 canvas with the labels stripped out.
// `zones` are the empty boxes a student drops labels into (viewBox coordinates).
// px/py, where present, is the point on the artwork the label refers to — the game
// draws a leader line from the box to that point, so boxes can sit in clear margins.
// Artwork uses CSS variables so it themes with the rest of the app.
const DIAGRAMS = [

{id:"dg-vt-graph", title:"Reading a velocity-time graph",
 topic:"Kinematics", sub:"Motion in a Straight Line",
 note:"The gradient of a velocity-time graph gives acceleration: a rising line is positive acceleration, a flat line is constant velocity, and a falling line is deceleration.",
 art:`
  <line x1="90" y1="340" x2="600" y2="340" stroke="var(--ink2)" stroke-width="2.5"/>
  <line x1="90" y1="60"  x2="90"  y2="340" stroke="var(--ink2)" stroke-width="2.5"/>
  <polyline points="90,340 220,140 380,140 520,320" fill="none" stroke="var(--accent)" stroke-width="4"/>
  <circle cx="90" cy="340" r="6" fill="var(--accent2)"/>
  <circle cx="220" cy="140" r="6" fill="var(--accent2)"/>
  <circle cx="380" cy="140" r="6" fill="var(--accent2)"/>
  <circle cx="520" cy="320" r="6" fill="var(--accent2)"/>`,
 zones:[
   {label:"Time axis",                       x:420, y:352, w:180, h:32, px:520, py:340},
   {label:"Velocity axis",                   x:6,   y:6,   w:170, h:32, px:90,  py:100},
   {label:"Positive acceleration (rising)",  x:6,   y:340, w:220, h:32, px:150, py:240},
   {label:"Constant velocity (flat section)",x:230, y:60,  w:230, h:32, px:300, py:140},
   {label:"Deceleration (falling section)",  x:404, y:200, w:230, h:32, px:450, py:230}
 ]},

{id:"dg-projectile", title:"Projectile motion trajectory",
 topic:"Kinematics", sub:"Motion on a Plane",
 note:"A projectile's horizontal velocity stays constant throughout the flight, while its vertical velocity is continually reduced by gravity, reaching zero at the peak.",
 art:`
  <line x1="60" y1="350" x2="600" y2="350" stroke="var(--ink2)" stroke-width="2.5"/>
  <path d="M100 350 Q 320 60 540 350" fill="none" stroke="var(--accent)" stroke-width="4"/>
  <line x1="100" y1="350" x2="170" y2="260" stroke="var(--gold)" stroke-width="3" marker-end="url(#ah)"/>
  <line x1="100" y1="350" x2="180" y2="350" stroke="var(--good)" stroke-width="3" stroke-dasharray="5 4"/>
  <line x1="100" y1="350" x2="100" y2="270" stroke="var(--m1)" stroke-width="3" stroke-dasharray="5 4"/>
  <line x1="320" y1="60" x2="320" y2="350" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4"/>
  <defs><marker id="ah" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--gold)"/></marker></defs>
  <circle cx="100" cy="350" r="6" fill="var(--gold)"/>
  <circle cx="320" cy="60" r="6" fill="var(--m1)"/>
  <circle cx="540" cy="350" r="6" fill="var(--bad)"/>`,
 zones:[
   {label:"Launch point",                                x:6,   y:6,   w:170, h:32, px:100, py:350},
   {label:"Initial velocity vector",                     x:6,   y:200, w:180, h:32, px:135, py:305},
   {label:"Horizontal velocity component (constant)",    x:200, y:360, w:250, h:32, px:140, py:350},
   {label:"Maximum height (vertical velocity is zero)",  x:404, y:6,   w:230, h:32, px:320, py:60},
   {label:"Range",                                       x:420, y:360, w:210, h:32, px:540, py:350}
 ]},

{id:"dg-fbd-incline", title:"Forces on an object on an inclined plane",
 topic:"Dynamics", sub:"Forces",
 note:"On a frictional incline, weight acts straight down, the normal force acts perpendicular to the surface, and friction acts along the surface, opposing sliding motion.",
 art:`
  <polygon points="80,340 560,340 560,120" fill="rgba(108,92,231,.06)" stroke="var(--line)" stroke-width="2.5"/>
  <rect x="330" y="185" width="80" height="60" fill="rgba(255,206,84,.25)" stroke="var(--gold)" stroke-width="2.5" transform="rotate(-24 370 215)"/>
  <line x1="370" y1="215" x2="370" y2="320" stroke="var(--bad)" stroke-width="3.5" marker-end="url(#ah2r)"/>
  <line x1="370" y1="215" x2="320" y2="150" stroke="var(--good)" stroke-width="3.5" marker-end="url(#ah2g)"/>
  <line x1="370" y1="215" x2="440" y2="235" stroke="var(--m1)" stroke-width="3.5" marker-end="url(#ah2b)"/>
  <defs>
    <marker id="ah2r" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--bad)"/></marker>
    <marker id="ah2g" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--good)"/></marker>
    <marker id="ah2b" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--m1)"/></marker>
  </defs>`,
 zones:[
   {label:"Weight force (mg), acting straight down",      x:6,   y:340, w:230, h:32, px:370, py:300},
   {label:"Normal force, perpendicular to the surface",   x:6,   y:6,   w:250, h:32, px:335, py:170},
   {label:"Friction force, opposing motion along the surface", x:400, y:6, w:234, h:32, px:420, py:230},
   {label:"Incline surface",                              x:404, y:340, w:230, h:32, px:500, py:280}
 ]},

{id:"dg-pendulum-energy", title:"Energy transformation in a swinging pendulum",
 topic:"Dynamics", sub:"Forces, Acceleration and Energy",
 note:"Ignoring friction and air resistance, a pendulum's mechanical energy stays constant, continuously exchanging between gravitational potential energy at the ends of the swing and kinetic energy at the bottom.",
 art:`
  <path d="M120 80 A 220 220 0 0 0 520 80" fill="none" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4"/>
  <circle cx="320" cy="80" r="6" fill="var(--ink2)"/>
  <line x1="320" y1="80" x2="140" y2="230" stroke="var(--ink2)" stroke-width="2"/>
  <line x1="320" y1="80" x2="320" y2="300" stroke="var(--ink2)" stroke-width="2"/>
  <line x1="320" y1="80" x2="500" y2="230" stroke="var(--ink2)" stroke-width="2"/>
  <circle cx="140" cy="230" r="22" fill="rgba(255,206,84,.3)" stroke="var(--gold)" stroke-width="2.5"/>
  <circle cx="320" cy="300" r="22" fill="rgba(0,214,143,.25)" stroke="var(--good)" stroke-width="2.5"/>
  <circle cx="500" cy="230" r="22" fill="rgba(255,206,84,.3)" stroke="var(--gold)" stroke-width="2.5"/>`,
 zones:[
   {label:"Pivot point",                                       x:250, y:6,   w:180, h:32, px:320, py:80},
   {label:"Maximum potential energy, zero kinetic energy",     x:6,   y:340, w:250, h:32, px:140, py:230},
   {label:"Maximum kinetic energy, minimum potential energy",  x:220, y:6,   w:250, h:32, px:320, py:300},
   {label:"Maximum potential energy, zero kinetic energy",     x:390, y:340, w:250, h:32, px:500, py:230}
 ]},

{id:"dg-transverse-wave", title:"Anatomy of a transverse wave",
 topic:"Waves and Thermodynamics", sub:"Wave Properties",
 note:"A transverse wave's crest and trough mark its maximum displacement either side of the rest position, the amplitude is the height of a crest above rest, and the wavelength spans one full repeating cycle.",
 art:`
  <line x1="40" y1="200" x2="600" y2="200" stroke="var(--ink2)" stroke-width="2" stroke-dasharray="4 4"/>
  <path d="M40 200 C 100 80, 180 80, 240 200 S 380 320, 440 200 S 560 80, 600 200"
        fill="none" stroke="var(--accent)" stroke-width="4"/>
  <line x1="140" y1="200" x2="140" y2="100" stroke="var(--gold)" stroke-width="2.5" marker-end="url(#ah3)"/>
  <defs><marker id="ah3" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--gold)"/></marker></defs>
  <line x1="140" y1="140" x2="380" y2="140" stroke="var(--m1)" stroke-width="2" stroke-dasharray="4 3"/>`,
 zones:[
   {label:"Crest",                     x:100, y:6,   w:140, h:32, px:140, py:100},
   {label:"Trough",                    x:330, y:6,   w:140, h:32, px:360, py:300},
   {label:"Amplitude",                 x:6,   y:150, w:120, h:32, px:140, py:150},
   {label:"Wavelength",                x:200, y:100, w:150, h:32, px:260, py:140},
   {label:"Equilibrium (rest) position", x:420, y:200, w:200, h:32, px:500, py:200}
 ]},

{id:"dg-refraction-ray", title:"Ray diagram at a refraction boundary",
 topic:"Waves and Thermodynamics", sub:"Wave Behaviour",
 note:"As a wave crosses into a denser medium and slows down, it bends towards the normal — the angle of refraction is smaller than the angle of incidence.",
 art:`
  <rect x="40" y="200" width="560" height="160" fill="rgba(79,195,247,.08)" stroke="none"/>
  <line x1="40" y1="200" x2="600" y2="200" stroke="var(--line)" stroke-width="2.5"/>
  <line x1="320" y1="80" x2="320" y2="320" stroke="var(--ink2)" stroke-width="2" stroke-dasharray="4 4"/>
  <line x1="150" y1="80" x2="320" y2="200" stroke="var(--gold)" stroke-width="3.5" marker-end="url(#ah4y)"/>
  <line x1="320" y1="200" x2="380" y2="320" stroke="var(--good)" stroke-width="3.5" marker-end="url(#ah4g)"/>
  <defs>
    <marker id="ah4y" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--gold)"/></marker>
    <marker id="ah4g" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--good)"/></marker>
  </defs>
  <path d="M320 200 m -40 0 a 40 40 0 0 1 22 -34" fill="none" stroke="var(--m1)" stroke-width="2"/>
  <path d="M320 200 m 0 40 a 40 40 0 0 0 22 -25" fill="none" stroke="var(--m1)" stroke-width="2"/>`,
 zones:[
   {label:"Normal (dashed line, perpendicular to boundary)", x:390, y:6,   w:244, h:32, px:320, py:100},
   {label:"Boundary between the two media",                  x:6,   y:6,   w:230, h:32, px:150, py:200},
   {label:"Incident ray",                                    x:6,   y:100, w:170, h:32, px:220, py:150},
   {label:"Angle of incidence",                               x:6,   y:200, w:190, h:32, px:295, py:175},
   {label:"Angle of refraction",                              x:404, y:250, w:210, h:32, px:340, py:230},
   {label:"Refracted ray",                                    x:404, y:340, w:210, h:32, px:360, py:280}
 ]},

{id:"dg-series-circuit", title:"A simple series circuit",
 topic:"Electricity and Magnetism", sub:"Electric Circuits",
 note:"In a series circuit, the battery, resistors and ammeter all share a single current path, so the same current flows through every component.",
 art:`
  <rect x="120" y="80" width="400" height="240" fill="none" stroke="var(--line)" stroke-width="3"/>
  <rect x="90" y="170" width="60" height="60" fill="rgba(255,206,84,.2)" stroke="var(--gold)" stroke-width="2.5"/>
  <rect x="160" y="60" width="70" height="40" fill="rgba(129,199,132,.2)" stroke="var(--good)" stroke-width="2.5"/>
  <rect x="410" y="60" width="70" height="40" fill="rgba(129,199,132,.2)" stroke="var(--good)" stroke-width="2.5"/>
  <circle cx="320" cy="320" r="26" fill="rgba(79,195,247,.2)" stroke="var(--m1)" stroke-width="2.5"/>
  <text x="320" y="328" text-anchor="middle" font-size="22" fill="var(--m1)" font-weight="700">A</text>`,
 zones:[
   {label:"Battery (EMF source)",                     x:6,   y:170, w:180, h:32, px:120, py:200},
   {label:"Resistor 1",                               x:6,   y:60,  w:150, h:32, px:195, py:80},
   {label:"Resistor 2",                               x:460, y:6,   w:150, h:32, px:445, py:80},
   {label:"Ammeter (measures current)",               x:220, y:340, w:230, h:32, px:320, py:320},
   {label:"Connecting wire, same current throughout", x:460, y:170, w:170, h:32, px:520, py:170}
 ]},

{id:"dg-field-wire", title:"Magnetic field around a current-carrying wire",
 topic:"Electricity and Magnetism", sub:"Magnetism",
 note:"Concentric circles represent the magnetic field around a straight current-carrying wire; the right-hand grip rule links the direction of conventional current to the direction of the field.",
 art:`
  <line x1="320" y1="40" x2="320" y2="360" stroke="var(--gold)" stroke-width="6"/>
  <circle cx="320" cy="200" r="60"  fill="none" stroke="var(--m1)" stroke-width="2.5"/>
  <circle cx="320" cy="200" r="110" fill="none" stroke="var(--m1)" stroke-width="2.5"/>
  <circle cx="320" cy="200" r="160" fill="none" stroke="var(--m1)" stroke-width="2.5"/>
  <path d="M320 40 L308 64 M320 40 L332 64" stroke="var(--gold)" stroke-width="4" fill="none"/>
  <path d="M255 90 l 20 4 l -6 -20" fill="none" stroke="var(--m1)" stroke-width="2.5"/>`,
 zones:[
   {label:"Current-carrying wire",                                 x:400, y:6,   w:230, h:32, px:320, py:60},
   {label:"Direction of conventional current",                     x:6,   y:6,   w:230, h:32, px:320, py:90},
   {label:"Magnetic field lines (concentric circles around the wire)", x:6, y:340, w:280, h:32, px:230, py:200},
   {label:"Direction of the magnetic field (right-hand grip rule)",  x:380, y:340, w:250, h:32, px:265, py:96}
 ]},
];
