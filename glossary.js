// Preliminary Physics concept & term library
// Definitions written in NESA marking-guideline style, mapped to the same
// module / content-area keys used by SYLLABUS in syllabus.js so results
// feed the topic analysis. Fields: id, term, topic, sub, def, eg?
const GLOSSARY = [

// ================= KINEMATICS =================
// --- Motion in a Straight Line ---
{id:"k-distance", term:"Distance", topic:"Kinematics", sub:"Motion in a Straight Line", def:"A scalar quantity describing the total length of the path travelled by an object, regardless of direction."},
{id:"k-displacement", term:"Displacement", topic:"Kinematics", sub:"Motion in a Straight Line", def:"A vector quantity describing the straight-line distance and direction between an object's start and finish positions."},
{id:"k-speed", term:"Speed", topic:"Kinematics", sub:"Motion in a Straight Line", def:"A scalar quantity equal to the rate of change of distance travelled with respect to time."},
{id:"k-velocity", term:"Velocity", topic:"Kinematics", sub:"Motion in a Straight Line", def:"A vector quantity equal to the rate of change of displacement with respect to time."},
{id:"k-acceleration", term:"Acceleration", topic:"Kinematics", sub:"Motion in a Straight Line", def:"A vector quantity equal to the rate of change of velocity with respect to time, measured in m/s^2."},
{id:"k-uniform-vel", term:"Uniform velocity", topic:"Kinematics", sub:"Motion in a Straight Line", def:"Motion at a constant velocity, meaning the object's acceleration is zero."},
{id:"k-uniform-acc", term:"Uniform acceleration", topic:"Kinematics", sub:"Motion in a Straight Line", def:"Motion in which velocity changes by an equal amount in each equal time interval."},
{id:"k-freefall", term:"Free fall", topic:"Kinematics", sub:"Motion in a Straight Line", def:"The motion of an object falling under gravity alone, with a constant acceleration of approximately 9.8 m/s^2 near Earth's surface."},
{id:"k-gradient-dt", term:"Gradient of a displacement-time graph", topic:"Kinematics", sub:"Motion in a Straight Line", def:"Represents the velocity of the object at that point in time."},

// --- Motion on a Plane ---
{id:"k-vector", term:"Vector quantity", topic:"Kinematics", sub:"Motion on a Plane", def:"A quantity that has both magnitude and direction, such as displacement, velocity or force."},
{id:"k-scalar", term:"Scalar quantity", topic:"Kinematics", sub:"Motion on a Plane", def:"A quantity that has magnitude only, with no associated direction, such as distance, speed or mass."},
{id:"k-resultant", term:"Resultant vector", topic:"Kinematics", sub:"Motion on a Plane", def:"A single vector that has the same overall effect as two or more vectors combined."},
{id:"k-component", term:"Vector components", topic:"Kinematics", sub:"Motion on a Plane", def:"The perpendicular (typically horizontal and vertical) parts a vector can be resolved into for analysis."},
{id:"k-projectile", term:"Projectile motion", topic:"Kinematics", sub:"Motion on a Plane", def:"The curved motion of an object launched into the air and acted on only by gravity, with independent horizontal and vertical components."},
{id:"k-range", term:"Range", topic:"Kinematics", sub:"Motion on a Plane", def:"The horizontal distance a projectile travels before landing back at its launch height."},
{id:"k-relvel", term:"Relative velocity", topic:"Kinematics", sub:"Motion on a Plane", def:"The velocity of one object as measured from the point of view of another moving reference frame."},

// ================= DYNAMICS =================
// --- Forces ---
{id:"d-force", term:"Force", topic:"Dynamics", sub:"Forces", def:"A push or pull, measured in newtons, that can change an object's motion by causing an acceleration."},
{id:"d-netforce", term:"Net force", topic:"Dynamics", sub:"Forces", def:"The single vector sum of all the individual forces acting on an object."},
{id:"d-newton1", term:"Newton's First Law", topic:"Dynamics", sub:"Forces", def:"An object remains at rest or moves at constant velocity unless it is acted on by a net external force."},
{id:"d-newton3", term:"Newton's Third Law", topic:"Dynamics", sub:"Forces", def:"For every action force exerted by one object on another, there is a reaction force of equal magnitude and opposite direction exerted back."},
{id:"d-inertia", term:"Inertia", topic:"Dynamics", sub:"Forces", def:"The tendency of an object to resist a change in its state of motion; greater mass means greater inertia."},
{id:"d-friction", term:"Friction", topic:"Dynamics", sub:"Forces", def:"A force that opposes the relative motion (or attempted motion) between two surfaces in contact."},
{id:"d-fbd", term:"Free-body diagram", topic:"Dynamics", sub:"Forces", def:"A diagram showing all the forces acting on a single object, drawn as arrows from the object's centre."},

// --- Forces, Acceleration and Energy ---
{id:"d-newton2", term:"Newton's Second Law", topic:"Dynamics", sub:"Forces, Acceleration and Energy", def:"The net force on an object equals the product of its mass and acceleration: F = ma."},
{id:"d-work", term:"Work", topic:"Dynamics", sub:"Forces, Acceleration and Energy", def:"The energy transferred when a force causes an object to move: W = Fd, where d is displacement in the direction of the force."},
{id:"d-ke", term:"Kinetic energy", topic:"Dynamics", sub:"Forces, Acceleration and Energy", def:"The energy an object has due to its motion, calculated as KE = 1/2 m v^2."},
{id:"d-gpe", term:"Gravitational potential energy", topic:"Dynamics", sub:"Forces, Acceleration and Energy", def:"The energy stored by an object due to its position in a gravitational field, calculated as PE = mgh."},
{id:"d-consenergy", term:"Conservation of energy", topic:"Dynamics", sub:"Forces, Acceleration and Energy", def:"The principle that the total energy of an isolated system remains constant, though it may change form."},
{id:"d-terminal", term:"Terminal velocity", topic:"Dynamics", sub:"Forces, Acceleration and Energy", def:"The constant maximum velocity reached by a falling object once air resistance equals the force of gravity acting on it."},

// --- Momentum, Energy and Simple Systems ---
{id:"d-momentum", term:"Momentum", topic:"Dynamics", sub:"Momentum, Energy and Simple Systems", def:"A vector quantity equal to the product of an object's mass and velocity: p = mv."},
{id:"d-consmom", term:"Conservation of momentum", topic:"Dynamics", sub:"Momentum, Energy and Simple Systems", def:"The principle that the total momentum of an isolated system remains constant when no external net force acts on it."},
{id:"d-impulse", term:"Impulse", topic:"Dynamics", sub:"Momentum, Energy and Simple Systems", def:"The change in momentum of an object, equal to the product of the net force applied and the time over which it acts."},
{id:"d-elastic", term:"Elastic collision", topic:"Dynamics", sub:"Momentum, Energy and Simple Systems", def:"A collision in which both momentum and total kinetic energy are conserved."},
{id:"d-inelastic", term:"Inelastic collision", topic:"Dynamics", sub:"Momentum, Energy and Simple Systems", def:"A collision in which momentum is conserved but some kinetic energy is transformed into other forms, such as heat or sound."},

// ================= WAVES AND THERMODYNAMICS =================
// --- Wave Properties ---
{id:"w-wave", term:"Wave", topic:"Waves and Thermodynamics", sub:"Wave Properties", def:"A disturbance that transfers energy from one point to another without the net transfer of matter."},
{id:"w-amplitude", term:"Amplitude", topic:"Waves and Thermodynamics", sub:"Wave Properties", def:"The maximum displacement of a particle in a wave from its rest (undisturbed) position."},
{id:"w-wavelength", term:"Wavelength", topic:"Waves and Thermodynamics", sub:"Wave Properties", def:"The distance between two successive identical points on a wave, such as from one crest to the next."},
{id:"w-frequency", term:"Frequency", topic:"Waves and Thermodynamics", sub:"Wave Properties", def:"The number of complete wave cycles passing a fixed point per second, measured in hertz (Hz)."},
{id:"w-period", term:"Period", topic:"Waves and Thermodynamics", sub:"Wave Properties", def:"The time taken for one complete wave cycle to pass a fixed point."},
{id:"w-wavespeed", term:"Wave speed", topic:"Waves and Thermodynamics", sub:"Wave Properties", def:"The speed at which a wave's energy travels through a medium, related to frequency and wavelength by v = f (lambda)."},
{id:"w-transverse", term:"Transverse wave", topic:"Waves and Thermodynamics", sub:"Wave Properties", def:"A wave in which particles oscillate perpendicular to the direction the wave travels, e.g. light or a wave on a string."},
{id:"w-longitudinal", term:"Longitudinal wave", topic:"Waves and Thermodynamics", sub:"Wave Properties", def:"A wave in which particles oscillate parallel to the direction the wave travels, e.g. sound."},

// --- Wave Behaviour ---
{id:"w-reflection", term:"Reflection", topic:"Waves and Thermodynamics", sub:"Wave Behaviour", def:"The bouncing back of a wave after it strikes a boundary, where the angle of incidence equals the angle of reflection."},
{id:"w-refraction", term:"Refraction", topic:"Waves and Thermodynamics", sub:"Wave Behaviour", def:"The bending of a wave as it changes speed while crossing a boundary between two different media."},
{id:"w-diffraction", term:"Diffraction", topic:"Waves and Thermodynamics", sub:"Wave Behaviour", def:"The spreading out of a wave as it passes through a narrow gap or around an obstacle."},
{id:"w-interference", term:"Interference", topic:"Waves and Thermodynamics", sub:"Wave Behaviour", def:"The result of two or more waves overlapping, producing constructive interference (larger amplitude) or destructive interference (smaller amplitude)."},

// --- Energy Transfer ---
{id:"w-conduction", term:"Conduction", topic:"Waves and Thermodynamics", sub:"Energy Transfer", def:"The transfer of heat energy through direct particle-to-particle contact, most effective in solids."},
{id:"w-convection", term:"Convection", topic:"Waves and Thermodynamics", sub:"Energy Transfer", def:"The transfer of heat energy through the bulk movement of a heated liquid or gas."},
{id:"w-radiation", term:"Radiation", topic:"Waves and Thermodynamics", sub:"Energy Transfer", def:"The transfer of heat energy by electromagnetic waves, which requires no medium to travel through."},
{id:"w-conductivity", term:"Thermal conductivity", topic:"Waves and Thermodynamics", sub:"Energy Transfer", def:"A measure of how readily a material conducts heat; metals have high thermal conductivity, insulators have low."},

// --- Thermodynamics ---
{id:"w-temperature", term:"Temperature", topic:"Waves and Thermodynamics", sub:"Thermodynamics", def:"A measure of the average kinetic energy of the particles in a substance."},
{id:"w-heat", term:"Heat", topic:"Waves and Thermodynamics", sub:"Thermodynamics", def:"The transfer of energy between objects due to a difference in temperature, always flowing from hotter to cooler."},
{id:"w-thermeq", term:"Thermal equilibrium", topic:"Waves and Thermodynamics", sub:"Thermodynamics", def:"The state reached when two objects in contact are at the same temperature and no net heat flows between them."},
{id:"w-shc", term:"Specific heat capacity", topic:"Waves and Thermodynamics", sub:"Thermodynamics", def:"The energy required to raise the temperature of one kilogram of a substance by one degree Celsius."},

// ================= ELECTRICITY AND MAGNETISM =================
// --- Electrostatics ---
{id:"e-charge", term:"Electric charge", topic:"Electricity and Magnetism", sub:"Electrostatics", def:"A fundamental property of matter, either positive or negative, that causes it to experience a force in an electric field."},
{id:"e-coulomb", term:"Coulomb's Law", topic:"Electricity and Magnetism", sub:"Electrostatics", def:"The electrostatic force between two point charges is proportional to the product of the charges and inversely proportional to the square of the distance between them."},
{id:"e-field", term:"Electric field", topic:"Electricity and Magnetism", sub:"Electrostatics", def:"A region of space around a charged object in which another charge experiences a force."},
{id:"e-conductor", term:"Conductor", topic:"Electricity and Magnetism", sub:"Electrostatics", def:"A material, such as a metal, that allows electric charge to flow through it easily."},
{id:"e-insulator", term:"Insulator", topic:"Electricity and Magnetism", sub:"Electrostatics", def:"A material that strongly resists the flow of electric charge through it."},

// --- Electric Circuits ---
{id:"e-current", term:"Electric current", topic:"Electricity and Magnetism", sub:"Electric Circuits", def:"The rate of flow of electric charge past a point in a circuit, measured in amperes (A)."},
{id:"e-voltage", term:"Voltage (potential difference)", topic:"Electricity and Magnetism", sub:"Electric Circuits", def:"The energy transferred per unit charge between two points in a circuit, measured in volts (V)."},
{id:"e-resistance", term:"Resistance", topic:"Electricity and Magnetism", sub:"Electric Circuits", def:"A measure of how strongly a component opposes the flow of electric current, measured in ohms."},
{id:"e-ohm", term:"Ohm's Law", topic:"Electricity and Magnetism", sub:"Electric Circuits", def:"For an ohmic conductor, voltage equals current multiplied by resistance: V = IR."},
{id:"e-series", term:"Series circuit", topic:"Electricity and Magnetism", sub:"Electric Circuits", def:"A circuit in which components are connected end to end along a single path, so the same current flows through each."},
{id:"e-parallel", term:"Parallel circuit", topic:"Electricity and Magnetism", sub:"Electric Circuits", def:"A circuit in which components are connected across common points, so the voltage across each branch is the same."},
{id:"e-power", term:"Electrical power", topic:"Electricity and Magnetism", sub:"Electric Circuits", def:"The rate of energy transfer in a circuit, calculated as P = VI and measured in watts."},

// --- Magnetism ---
{id:"e-magfield", term:"Magnetic field", topic:"Electricity and Magnetism", sub:"Magnetism", def:"A region around a magnet or current-carrying conductor in which a magnetic force is experienced."},
{id:"e-grip", term:"Right-hand grip rule", topic:"Electricity and Magnetism", sub:"Magnetism", def:"A rule used to find the direction of the magnetic field around a straight current-carrying conductor: the thumb points in the direction of conventional current, and the curled fingers show the field direction."},
{id:"e-motoreffect", term:"Motor effect", topic:"Electricity and Magnetism", sub:"Magnetism", def:"The force experienced by a current-carrying conductor when it is placed in an external magnetic field."},
{id:"e-palm", term:"Right-hand palm rule", topic:"Electricity and Magnetism", sub:"Magnetism", def:"A rule used to predict the direction of the force on a current-carrying conductor in a magnetic field, using the thumb, fingers and palm."},

// ================= WORKING SCIENTIFICALLY =================
{id:"w-hypothesis", term:"Hypothesis", topic:"Working Scientifically", sub:"Questioning and Predicting", def:"A testable statement, based on scientific reasoning, that predicts the relationship between variables in an investigation."},
{id:"w-independent-var", term:"Independent variable", topic:"Working Scientifically", sub:"Questioning and Predicting", def:"The variable that is deliberately changed or manipulated by the investigator in an experiment."},
{id:"w-dependent-var", term:"Dependent variable", topic:"Working Scientifically", sub:"Questioning and Predicting", def:"The variable that is measured or observed in an experiment, expected to change in response to the independent variable."},
{id:"w-controlled-var", term:"Controlled variable", topic:"Working Scientifically", sub:"Questioning and Predicting", def:"A variable that is kept constant throughout an experiment so that it does not affect the result being measured."},
{id:"w-validity", term:"Validity", topic:"Working Scientifically", sub:"Planning and Conducting Investigations", def:"The extent to which an investigation tests what it claims to test, achieved by controlling all variables except the one being investigated."},
{id:"w-reliability", term:"Reliability", topic:"Working Scientifically", sub:"Planning and Conducting Investigations", def:"The extent to which repeated measurements or trials of an investigation produce consistent results."},
{id:"w-accuracy", term:"Accuracy", topic:"Working Scientifically", sub:"Planning and Conducting Investigations", def:"How close a measured value is to the true or accepted value, influenced by the precision of equipment and technique used."},
{id:"w-secondary-data", term:"Secondary-sourced data", topic:"Working Scientifically", sub:"Processing and Analysing Data", def:"Data that was not collected first-hand by the investigator, but obtained from another source such as a published study or database."},
];
