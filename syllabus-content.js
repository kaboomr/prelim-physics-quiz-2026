// ====================================================================
// Preliminary Physics — syllabus "students learn about" content
// Dot points from the NESA Physics Stage 6 Syllabus (2017), Year 11.
// Used by the Syllabus Drills.
//
//   t = the dot point, as close to NESA wording as readability allows
//   k = key terms inside t that can be blanked out for the cloze game
//       (each MUST appear verbatim, same case, inside t)
//   x = true  -> never used as a "guess the sub-area" prompt or as a
//                decoy, because the wording is generic or duplicated
// ====================================================================
"use strict";

const SYL_CONTENT = {
  "Kinematics": {
    "Motion in a Straight Line": [
      {t:"The difference between distance (a scalar) and displacement (a vector) in describing an object's motion", k:["distance (a scalar) and displacement (a vector)"]},
      {t:"The difference between speed (a scalar) and velocity (a vector) in describing an object's motion", k:["speed (a scalar) and velocity (a vector)"]},
      {t:"Calculating average velocity from a change in displacement over a time interval", k:["average velocity"]},
      {t:"Interpreting displacement-time graphs, where the gradient represents velocity", k:["displacement-time graphs"]},
      {t:"Interpreting velocity-time graphs, where the gradient represents acceleration and the area under the graph represents displacement", k:["velocity-time graphs"]},
      {t:"Using the equations of uniformly accelerated motion to solve problems involving displacement, velocity, acceleration and time", k:["equations of uniformly accelerated motion"]},
      {t:"Analysing the motion of an object in free fall, including its constant acceleration of approximately 9.8 m/s^2", k:["free fall"]}
    ],
    "Motion on a Plane": [
      {t:"Representing vector quantities using scaled vector diagrams, including magnitude and direction", k:["scaled vector diagrams"]},
      {t:"Adding and resolving vectors into perpendicular components to solve problems involving motion", k:["resolving vectors into perpendicular components"]},
      {t:"Analysing the horizontal and vertical components of projectile motion as independent of each other", k:["horizontal and vertical components of projectile motion"]},
      {t:"Using the equations of motion to calculate the time of flight, maximum height and range of a projectile", k:["time of flight, maximum height and range"]},
      {t:"Explaining relative velocity as the velocity of one object as observed from another moving reference frame", k:["relative velocity"]},
      {t:"Investigating the motion of an object moving at constant velocity on an inclined plane", k:["inclined plane"], x:true}
    ]
  },
  "Dynamics": {
    "Forces": [
      {t:"Describing the vector nature of force, including how forces combine to produce a net force", k:["net force"]},
      {t:"Applying Newton's First Law to explain why an object remains at rest or moves at constant velocity unless acted on by a net force", k:["Newton's First Law"]},
      {t:"Applying Newton's Second Law, F = ma, to calculate the acceleration produced by a net force", k:["Newton's Second Law"]},
      {t:"Applying Newton's Third Law to identify the action and reaction force pair in an interaction between two objects", k:["Newton's Third Law"]},
      {t:"Explaining how friction opposes relative motion between two surfaces in contact", k:["friction"]},
      {t:"Analysing the forces acting on an object using a free-body diagram", k:["free-body diagram"]}
    ],
    "Forces, Acceleration and Energy": [
      {t:"Calculating the work done on an object as the product of the applied force and the displacement in the direction of that force", k:["work done"]},
      {t:"Applying the work-energy theorem to relate the net work done on an object to its change in kinetic energy", k:["work-energy theorem"]},
      {t:"Calculating the kinetic energy of a moving object using KE = 1/2 m v^2", k:["kinetic energy"]},
      {t:"Calculating the gravitational potential energy of an object using PE = mgh", k:["gravitational potential energy"]},
      {t:"Applying the principle of conservation of energy to systems involving kinetic and gravitational potential energy", k:["conservation of energy"]},
      {t:"Explaining how air resistance leads to an object reaching terminal velocity during a fall", k:["terminal velocity"]}
    ],
    "Momentum, Energy and Simple Systems": [
      {t:"Defining momentum as the product of an object's mass and velocity", k:["momentum"]},
      {t:"Applying the law of conservation of momentum to isolated systems involving collisions", k:["conservation of momentum"]},
      {t:"Calculating impulse as the product of force and the time over which it acts, and relating it to a change in momentum", k:["impulse"]},
      {t:"Distinguishing between an elastic collision, in which kinetic energy is conserved, and an inelastic collision, in which it is not", k:["elastic collision", "inelastic collision"]},
      {t:"Analysing collisions between two objects using conservation of momentum to calculate an unknown velocity", k:["conservation of momentum to calculate an unknown velocity"]},
      {t:"Explaining how safety features such as airbags and crumple zones reduce the force experienced in a collision by increasing the time of impact", k:["increasing the time of impact"], x:true}
    ]
  },
  "Waves and Thermodynamics": {
    "Wave Properties": [
      {t:"Defining a wave as a disturbance that transfers energy from one point to another without the net transfer of matter", k:["without the net transfer of matter"]},
      {t:"Distinguishing between transverse waves, in which particles oscillate perpendicular to the direction of travel, and longitudinal waves, in which they oscillate parallel to it", k:["transverse waves", "longitudinal waves"]},
      {t:"Identifying the amplitude, wavelength, period and frequency of a wave from a graph or diagram", k:["amplitude, wavelength, period and frequency"]},
      {t:"Applying the wave equation v = f (lambda) to calculate the speed, frequency or wavelength of a wave", k:["wave equation"]},
      {t:"Explaining the relationship between frequency and period as f = 1/T", k:["frequency and period"]}
    ],
    "Wave Behaviour": [
      {t:"Explaining reflection as a wave bouncing off a boundary, where the angle of incidence equals the angle of reflection", k:["angle of incidence equals the angle of reflection"]},
      {t:"Explaining refraction as the bending of a wave as it changes speed while crossing a boundary between two media", k:["refraction"]},
      {t:"Explaining diffraction as the spreading of a wave as it passes through a gap or around an obstacle", k:["diffraction"]},
      {t:"Explaining interference as the superposition of two or more waves, producing constructive or destructive effects", k:["interference"]},
      {t:"Investigating the behaviour of sound waves, including reflection, refraction and diffraction", k:["sound waves"], x:true}
    ],
    "Energy Transfer": [
      {t:"Explaining conduction as the transfer of heat energy through direct particle-to-particle collisions within a material", k:["conduction"]},
      {t:"Explaining convection as the transfer of heat energy through the bulk movement of a heated fluid", k:["convection"]},
      {t:"Explaining radiation as the transfer of heat energy by electromagnetic waves that requires no medium", k:["radiation"]},
      {t:"Comparing the rate of heat transfer by conduction in different materials based on their thermal conductivity", k:["thermal conductivity"]},
      {t:"Explaining energy transfer and transformation using everyday examples, such as electrical appliances", k:["energy transfer and transformation"], x:true}
    ],
    "Thermodynamics": [
      {t:"Defining temperature as a measure of the average kinetic energy of the particles in a substance", k:["average kinetic energy"]},
      {t:"Explaining heat as the transfer of energy from a hotter object to a cooler object", k:["transfer of energy from a hotter object to a cooler object"]},
      {t:"Explaining thermal equilibrium as the state reached when two objects in contact reach the same temperature and no net heat flows between them", k:["thermal equilibrium"]},
      {t:"Applying the specific heat capacity of a substance to calculate the energy required to change its temperature", k:["specific heat capacity"]},
      {t:"Explaining the effect of a change of state on the temperature of a substance while energy continues to be transferred", k:["change of state"]}
    ]
  },
  "Electricity and Magnetism": {
    "Electrostatics": [
      {t:"Describing electric charge as a fundamental property of matter that can be positive or negative", k:["electric charge"]},
      {t:"Explaining that like charges repel and unlike charges attract", k:["like charges repel and unlike charges attract"]},
      {t:"Applying Coulomb's Law to calculate the electrostatic force between two point charges", k:["Coulomb's Law"]},
      {t:"Describing an electric field as a region in which a charged object experiences a force", k:["electric field"]},
      {t:"Distinguishing between conductors, which allow charge to flow freely, and insulators, which resist the flow of charge", k:["conductors", "insulators"]}
    ],
    "Electric Circuits": [
      {t:"Defining electric current as the rate of flow of electric charge, measured in amperes", k:["electric current"]},
      {t:"Defining voltage as the energy transferred per unit charge between two points in a circuit", k:["voltage"]},
      {t:"Applying Ohm's Law, V = IR, to calculate the voltage, current or resistance in a circuit", k:["Ohm's Law"]},
      {t:"Comparing current and voltage in series and parallel circuits", k:["series and parallel circuits"]},
      {t:"Calculating the total resistance of resistors connected in series and in parallel", k:["total resistance"]},
      {t:"Calculating electrical power using P = VI and relating it to energy transferred over time", k:["electrical power"]}
    ],
    "Magnetism": [
      {t:"Describing a magnetic field as a region around a magnet or current-carrying conductor in which a magnetic force is experienced", k:["magnetic field"]},
      {t:"Using the right-hand grip rule to determine the direction of the magnetic field around a straight current-carrying conductor", k:["right-hand grip rule"]},
      {t:"Explaining the motor effect as the force experienced by a current-carrying conductor in an external magnetic field", k:["motor effect"]},
      {t:"Using the right-hand palm rule to predict the direction of the force on a current-carrying conductor in a magnetic field", k:["right-hand palm rule"]},
      {t:"Comparing the properties of magnetic fields produced by a straight wire, a loop and a solenoid", k:["straight wire, a loop and a solenoid"], x:true}
    ]
  },
  "Working Scientifically": {
    "Questioning and Predicting": [
      {t:"Developing a testable hypothesis based on scientific knowledge and observation", k:["testable hypothesis"]},
      {t:"Identifying the independent, dependent and controlled variables in an investigation", k:["independent, dependent and controlled variables"]},
      {t:"Predicting the outcome of an investigation based on scientific reasoning", k:["Predicting the outcome"]}
    ],
    "Planning and Conducting Investigations": [
      {t:"Designing a valid investigation that tests one variable at a time while controlling others", k:["valid investigation"]},
      {t:"Ensuring reliability by repeating an investigation and calculating an average result", k:["reliability"]},
      {t:"Improving the accuracy of measurements through appropriate choice of equipment and technique", k:["accuracy"]},
      {t:"Selecting appropriate materials and equipment to safely and ethically conduct an investigation", k:["safely and ethically"]}
    ],
    "Processing and Analysing Data": [
      {t:"Constructing appropriate tables and graphs to represent primary data collected during an investigation", k:["tables and graphs"]},
      {t:"Identifying trends, patterns and relationships in processed primary and secondary data", k:["trends, patterns and relationships"]},
      {t:"Calculating percentage change, ratios and rates from collected data", k:["percentage change, ratios and rates"]},
      {t:"Evaluating the validity and reliability of primary and secondary data sources", k:["validity and reliability"]}
    ],
    "Problem Solving and Communicating": [
      {t:"Selecting and using appropriate scientific terminology and representations when communicating findings", k:["scientific terminology"]},
      {t:"Justifying conclusions based on the analysis and evaluation of collected data", k:["Justifying conclusions"]},
      {t:"Identifying further questions arising from the results of an investigation", k:["further questions"]}
    ]
  }
};

// Flatten SYL_CONTENT into the two flat arrays the Syllabus Drill games actually
// read from: SYL_ITEMS (one entry per dot point) and SYL_SUBS (one entry per
// content area). Every dot point gets a unique id and inherits its topic/sub.
const SYL_ITEMS = [];
const SYL_SUBS = [];
(function buildSylFlat(){
  let n = 0;
  for (const topic in SYL_CONTENT) {
    for (const sub in SYL_CONTENT[topic]) {
      const subKey = topic + '|' + sub;
      SYL_SUBS.push({ topic: topic, sub: sub, key: subKey });
      SYL_CONTENT[topic][sub].forEach(function(item){
        SYL_ITEMS.push({
          id: 'syl-' + (n++),
          topic: topic, sub: sub, subKey: subKey,
          t: item.t, k: item.k || [], x: !!item.x
        });
      });
    }
  }
})();
