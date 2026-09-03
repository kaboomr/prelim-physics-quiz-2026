// Preliminary Physics cause-and-effect chains
// Each chain is an ordered causal sequence a student must rebuild. Steps are
// stored in the CORRECT order and shuffled at run time.
// Fields: id, title, topic, sub, steps[] (ordered), why (one-line explanation)
const CHAINS = [

// ============ KINEMATICS · Motion in a Straight Line ============
{id:"c1-freefall", title:"An object in free fall", topic:"Kinematics", sub:"Motion in a Straight Line",
 steps:["An object is released from rest above the ground","Gravity exerts a constant downward force on the object","The object accelerates uniformly at approximately 9.8 m/s^2","Its velocity increases by an equal amount each second","The object strikes the ground at its greatest speed during the fall"],
 why:"Because the acceleration due to gravity is constant, velocity builds up steadily throughout the fall, so the object is moving fastest the instant before impact."},

{id:"c1-vt-graph", title:"Reading a velocity-time graph", topic:"Kinematics", sub:"Motion in a Straight Line",
 steps:["An object's velocity is recorded at regular time intervals","The values are plotted on a velocity-time graph","The gradient of the graph at any point gives the object's acceleration","The area under the graph between two times gives the displacement over that interval","Both quantities can be read off the same graph without further data collection"],
 why:"A velocity-time graph encodes both acceleration (its slope) and displacement (the area beneath it), which is why it is used to analyse motion so widely."},

// ============ KINEMATICS · Motion on a Plane ============
{id:"c2-projectile", title:"Projectile motion after launch", topic:"Kinematics", sub:"Motion on a Plane",
 steps:["An object is launched into the air at an angle to the horizontal","Its velocity is resolved into independent horizontal and vertical components","The horizontal component remains constant, since no horizontal force acts on it","The vertical component continually decreases, then reverses, under gravity","The two components combine at each instant to produce a curved, parabolic path"],
 why:"Because gravity only ever acts vertically, the horizontal and vertical motions can be analysed completely separately, which is what produces the parabolic path."},

// ============ DYNAMICS · Forces ============
{id:"c3-newton2", title:"Applying Newton's Second Law", topic:"Dynamics", sub:"Forces",
 steps:["Several forces act on an object at once","The forces are combined as vectors to find the net force","A net force greater than zero acts on the object's mass","The object accelerates in the direction of the net force, following F = ma","The object's velocity changes as a result of the acceleration"],
 why:"Newton's Second Law connects an unbalanced (net) force directly to acceleration, and acceleration is what changes an object's velocity over time."},

{id:"c3-braking", title:"A car braking to a stop", topic:"Dynamics", sub:"Forces",
 steps:["A driver applies the brakes of a moving car","Friction acts between the brake pads and the wheels, opposing motion","A net force acts backward on the car, decelerating it","The car's kinetic energy is converted into heat energy at the brakes","The car comes to rest once all of its kinetic energy has been transformed"],
 why:"Friction cannot destroy energy, only convert it — the car's kinetic energy has to go somewhere, and braking turns it into heat."},

// ============ DYNAMICS · Forces, Acceleration and Energy ============
{id:"c4-pendulum", title:"Energy transformation in a swinging pendulum", topic:"Dynamics", sub:"Forces, Acceleration and Energy",
 steps:["A pendulum bob is raised to one side and released","At the highest point, the bob has maximum gravitational potential energy and zero kinetic energy","As the bob swings downward, potential energy converts into kinetic energy","At the lowest point of the swing, kinetic energy is at its maximum and potential energy is at its minimum","The bob continues to the opposite side, converting kinetic energy back into potential energy"],
 why:"Ignoring air resistance and friction at the pivot, the total mechanical energy of the pendulum stays constant, continually exchanging between potential and kinetic forms."},

// ============ DYNAMICS · Momentum, Energy and Simple Systems ============
{id:"c5-collision", title:"An inelastic collision between two trolleys", topic:"Dynamics", sub:"Momentum, Energy and Simple Systems",
 steps:["A moving trolley collides with a stationary trolley of equal mass","During the brief collision, the trolleys exert equal and opposite forces on each other","The total momentum of the two-trolley system is conserved","The trolleys stick together and move off with a common, slower velocity","Some kinetic energy is lost to sound and deformation, since the collision is inelastic"],
 why:"Momentum is always conserved in a collision with no external force, but kinetic energy is only conserved if the collision happens to be elastic — here it is not."},

// ============ WAVES AND THERMODYNAMICS · Wave Properties ============
{id:"c6-wave-speed", title:"Frequency and wavelength at constant wave speed", topic:"Waves and Thermodynamics", sub:"Wave Properties",
 steps:["A wave source is set to vibrate at a higher frequency","More wave crests are produced by the source each second","The wave still travels through the same medium at the same speed","Since v = f (lambda) and speed is fixed, wavelength must decrease as frequency rises","The waves observed downstream are more closely spaced than before"],
 why:"Wave speed depends on the medium, not the source, so if frequency increases while speed stays fixed, wavelength has to shrink to keep v = f (lambda) true."},

// ============ WAVES AND THERMODYNAMICS · Wave Behaviour ============
{id:"c7-refraction", title:"A wave refracting into a denser medium", topic:"Waves and Thermodynamics", sub:"Wave Behaviour",
 steps:["A wave travels from a less dense medium into a denser one at an angle","The wave's speed decreases as it enters the denser medium","The part of the wavefront entering first slows down before the rest","This uneven slowing changes the direction the wavefront is travelling","The wave bends towards the normal as it continues into the denser medium"],
 why:"Refraction happens because different parts of the wavefront change speed at different times as they cross the boundary, not all at once."},

// ============ WAVES AND THERMODYNAMICS · Energy Transfer ============
{id:"c8-convection", title:"A convection current forming in a heated fluid", topic:"Waves and Thermodynamics", sub:"Energy Transfer",
 steps:["A fluid is heated from below","The heated fluid expands and becomes less dense than the fluid around it","The less dense, warmer fluid rises through the surrounding cooler fluid","Cooler, denser fluid sinks to take its place near the heat source","A continuous circulating convection current is established"],
 why:"Convection relies on density differences created by uneven heating, which is what drives the circulating motion rather than direct particle-to-particle contact."},

// ============ WAVES AND THERMODYNAMICS · Thermodynamics ============
{id:"c9-equilibrium", title:"Two objects reaching thermal equilibrium", topic:"Waves and Thermodynamics", sub:"Thermodynamics",
 steps:["A hot object is placed in contact with a cooler object","Heat energy flows from the hotter object to the cooler object","The hot object's average particle kinetic energy decreases as it cools","The cool object's average particle kinetic energy increases as it warms","Net heat flow stops once both objects reach the same temperature"],
 why:"Heat always flows from hotter to cooler objects until their temperatures — and average particle kinetic energies — become equal, at which point no more net transfer occurs."},

// ============ ELECTRICITY AND MAGNETISM · Electrostatics ============
{id:"c10-charging", title:"Charging an insulator by friction", topic:"Electricity and Magnetism", sub:"Electrostatics",
 steps:["Two different insulating materials are rubbed together","Electrons are transferred from one material to the other","One material ends up with a surplus of electrons and becomes negatively charged","The other material ends up with a deficit of electrons and becomes positively charged","The two oppositely charged materials now attract each other"],
 why:"Charging by friction never creates or destroys charge — it only transfers electrons between materials, leaving one positive and one negative."},

// ============ ELECTRICITY AND MAGNETISM · Electric Circuits ============
{id:"c11-series-resistor", title:"Adding a resistor to a series circuit", topic:"Electricity and Magnetism", sub:"Electric Circuits",
 steps:["An extra resistor is added in series to an existing circuit","The total resistance of the circuit increases","With the supply voltage unchanged, the current through the circuit decreases, following V = IR","Less current flows through each globe already in the circuit","The existing globes glow more dimly than before"],
 why:"In a series circuit every component shares the one current path, so increasing total resistance reduces the current everywhere in the loop, dimming every globe."},

// ============ ELECTRICITY AND MAGNETISM · Magnetism ============
{id:"c12-motor-effect", title:"The motor effect on a current-carrying wire", topic:"Electricity and Magnetism", sub:"Magnetism",
 steps:["A straight wire carrying a current is placed between the poles of a magnet","The current creates its own magnetic field around the wire","This field interacts with the external magnetic field between the poles","A force is exerted on the wire, perpendicular to both the current and the external field","The wire experiences a push, following the direction given by the right-hand palm rule"],
 why:"The motor effect arises from the interaction between the wire's own magnetic field and the external field, producing a force whose direction the right-hand palm rule predicts."},
];
