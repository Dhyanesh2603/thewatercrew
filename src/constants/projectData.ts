import type {
  ResearchFacility,
  ProjectTimelineStage,
  TeamMember,
  ProductSpec,
  GalleryItem,
  ResearchStat,
} from '@/types'

export const STARTUP_META = {
  name: 'The Water Crew',
  tagline: 'Engineering the Future of Oil Spill Recovery',
  subheading: 'Deep-Tech Marine Hydrodynamics & Autonomous Skimmer Systems',
  institution: 'Vellore Institute of Technology (VIT)',
  laboratory: 'Center for Multiphase Fluid Mechanics & Marine Remediation',
  stage: 'Prototype Phase (TRL 5)',
  statusBadge: 'Research & Prototype Development',
  foundedYear: '2025',
  contactEmail: 'thewatercrew.vit@gmail.com',
  location: 'Technology Tower, VIT Vellore Campus, Tamil Nadu, India',
}

export const HERO_FLOATING_CARD = {
  title: 'Skimmer MK-2 Prototype',
  status: 'In Tank Trials',
  institution: 'VIT Research Innovation',
  trl: 'TRL 5 (Lab Validation)',
  metrics: [
    { label: 'Oil Recovery Efficiency', value: '94.2%' },
    { label: 'Throughput Capacity', value: '1,800 L/hr' },
    { label: 'Viscosity Tolerance', value: 'Up to 50,000 cSt' },
    { label: 'Subsystem Status', value: 'Telemetry Node' },
  ],
}

export const ABOUT_STARTUP_CONTENT = {
  welcomeHeadline: 'Bridging Advanced Hydrodynamics and Marine Environmental Protection',
  welcomeSubtitle:
    'Born out of university laboratory research, The Water Crew is pioneering clean-tech hardware to address catastrophic marine hydrocarbon spills with autonomous recovery efficiency.',
  mission:
    'To engineer high-throughput, low-energy maritime skimming systems that recover hydrocarbons at the source before coastline emulsion occurs.',
  vision:
    'A globally deployable autonomous marine cleanup fleet safeguarding offshore rigs, transit corridors, and ecologically sensitive coastal ecosystems.',
  pillars: [
    {
      title: 'Oleophilic Interfacial Science',
      description:
        'Custom grooved composite drum surfaces optimized for differential adhesion of hydrocarbons while rejecting water ingress at high surface velocities.',
      metric: '94.2% Pure Hydrocarbon Adhesion',
    },
    {
      title: 'Autonomous Swarm Control',
      description:
        'Embedded edge microcontrollers with optical slick thickness estimation and localized vector thrust for maximum encounter rate in choppy seas.',
      metric: 'Adaptive Wave-Following Trim',
    },
    {
      title: 'Rapid Deployment Modularity',
      description:
        'Compact marine-grade aluminum monocoque architecture capable of two-person launch from vessels of opportunity without cranes.',
      metric: '< 15 Min Deployment Cycle',
    },
    {
      title: 'Sustainable Closed-Loop Extraction',
      description:
        'Zero chemical dispersants required; mechanical oil skimming minimizes secondary marine ecosystem contamination.',
      metric: '100% Mechanical Separation',
    },
  ],
  futureRoadmap:
    'Progressing from controlled wave flume benchmarks to open-water port trials, targeting full TRL 7 commercial offshore certification.',
}

export const RESEARCH_FACILITIES: ResearchFacility[] = [
  {
    id: 'fluid-mechanics-lab',
    title: 'Multiphase Fluid Mechanics Laboratory',
    subtitle: 'Vellore Institute of Technology',
    description:
      'Equipped with a 12-meter recirculating hydro-flume channel designed to simulate maritime swell, wave-induced chop, and variable current vectors. Here, interfacial adhesion between viscous crude layers and oleophilic rotating drums is analyzed with high-speed particle image velocimetry (PIV).',
    specifications: [
      '12m recirculating wave flume with laminar flow control',
      'Dual-camera high-speed PIV for boundary layer imaging',
      'Viscosity measurement up to 100,000 cSt under dynamic shear',
      'Automated water salinity and temperature regulation',
    ],
    image:
      '',
    badge: 'Hydrodynamics Testing Facility',
    metricLabel: 'Testing Volume',
    metricValue: '12m Wave Flume',
  },
  {
    id: 'prototype-machining-cell',
    title: 'Advanced Mechatronics & CNC Fabrication Cell',
    subtitle: 'Precision Mechanical Prototyping',
    description:
      'State-of-the-art multi-axis CNC milling, rapid composite layup, and marine-grade anodizing facilities. Every custom impeller, oleophilic drum disc, and hydrodynamic weir is precision engineered with micron-level tolerances to resist saltwater corrosion.',
    specifications: [
      '5-Axis CNC aluminum 5083/6061 precision machining',
      'Vacuum-assisted carbon composite skin consolidation',
      'TIG & laser marine welding cell for watertight housings',
      '3D additive manufacturing for custom fluid scrapers',
    ],
    image:
      '',
    badge: 'Precision Fabrication',
    metricLabel: 'Machining Tolerance',
    metricValue: '± 0.02 mm',
  },
  {
    id: 'telemetry-bench',
    title: 'Embedded Systems & Sensor Integration Bench',
    subtitle: 'Autonomous Instrumentation & Telemetry',
    description:
      'Hardware-in-the-loop (HIL) testing environment for the skimmer’s telemetry node. Integrates real-time optical oil-thickness sensors, multi-axis IMU wave-compensating trim actuators, and dual-band encrypted LoRa/Satellite uplink communication modules.',
    specifications: [
      'Optical absorption hydrocarbon thickness sensors (0.5mm - 50mm)',
      'Sub-millisecond IMU stabilization loop for turbulent swell',
      'Long-range LoRaWAN 868/915 MHz + Iridium SBD satellite failover',
      'IP68 sealed environmental testing chambers',
    ],
    image:
      '',
    badge: 'Instrumentation Lab',
    metricLabel: 'Telemetry Latency',
    metricValue: '< 120 ms',
  },
]

export const TIMELINE_STAGES: ProjectTimelineStage[] = [
  {
    id: 'stage-1',
    stageNumber: '01',
    title: 'Problem Definition & Ecological Impact Assessment',
    timeframe: 'Phase I',
    description:
      'Investigated catastrophic maritime crude discharges and the limitations of traditional dispersants and passive boom barriers in high Sea State conditions.',
    engineeringDetails: [
      'Analysis of Gulf & Indian Ocean transit shipping incident records',
      'Assessment of emulsion viscosities (ASPHALT to light crude)',
      'Identification of critical skimmer failure points: water entrainment',
    ],
    status: 'completed',
    metrics: { label: 'Spill Data Analyzed', value: '40+ Historic Events' },
  },
  {
    id: 'stage-2',
    stageNumber: '02',
    title: 'Theoretical Research & Oleophilic Surface Physics',
    timeframe: 'Phase II',
    description:
      'Formulated mathematical models for thin-film fluid adhesion across rotating textured geometries under varying turbulent Reynolds numbers.',
    engineeringDetails: [
      'Mathematical boundary layer derivation for rotating discs',
      'Polymer surface tension & contact angle optimization',
      'Peer-reviewed literature survey on fluid drag minimization',
    ],
    status: 'completed',
    metrics: { label: 'Surface Contact Angle', value: '118° (Oleophilic)' },
  },
  {
    id: 'stage-3',
    stageNumber: '03',
    title: 'CAD Architecture & Hydrodynamic CFD Modeling',
    timeframe: 'Phase III',
    description:
      'Simulated multi-phase flow using computational fluid dynamics (CFD) to design high-efficiency vortex skimming weirs and self-leveling twin pontoons.',
    engineeringDetails: [
      'ANSYS Fluent multiphase Volume of Fluid (VOF) simulations',
      'Hydrodynamic drag reduction across catamaran twin pontoons',
      'Structural FEA stress analysis under 2.5m breaking wave load',
    ],
    status: 'completed',
    metrics: { label: 'CFD Iterations', value: '120+ Runs' },
  },
  {
    id: 'stage-4',
    stageNumber: '04',
    title: 'MK-1 & MK-2 Physical Scale Prototype Fabrication',
    timeframe: 'Phase IV (Current Stage)',
    description:
      'Engineered physical prototypes featuring precision-machined grooved disc arrays, high-torque brushless DC motors, and sealed bilge collection basins.',
    engineeringDetails: [
      'Lightweight marine alloy 5083 structural monocoque chassis',
      'Dual brushless DC drives with closed-loop torque feedback',
      'Modular quick-release oleophilic drums for variable oil grades',
    ],
    status: 'in-progress',
    metrics: { label: 'Current Prototype Weight', value: '38.5 kg' },
  },
  {
    id: 'stage-5',
    stageNumber: '05',
    title: 'Wave Tank Trials & Empirical Recovery Benchmarks',
    timeframe: 'Phase V (Current Stage)',
    description:
      'Running rigorous recovery efficiency trials in university flume channels measuring recovery rate, water intake fraction, and power consumption.',
    engineeringDetails: [
      'Empirical tests across light motor oils to heavy crude surrogates',
      'Continuous recovery metrics logging via telemetry node',
      'Turbulence tolerance verification up to Sea State 3 conditions',
    ],
    status: 'in-progress',
    metrics: { label: 'Observed Recovery Rate', value: '94.2%' },
  },
  {
    id: 'stage-6',
    stageNumber: '06',
    title: 'Autonomous Swarm Deployment & Port Verification',
    timeframe: 'Phase VI (Target)',
    description:
      'Transitioning to field-ready autonomous units equipped with optical slicks recognition and coordinated perimeter containment for commercial deployment.',
    engineeringDetails: [
      'Edge AI vision model for real-time hydrocarbon slick perimeter tracing',
      'Multi-vessel cooperative containment trajectory planning',
      'Harbor authority field demonstration in coastal Tamil Nadu ports',
    ],
    status: 'upcoming',
    metrics: { label: 'Target Swarm Scale', value: '4-Unit Fleet' },
  },
]

export const RESEARCH_LEAD_DATA = {
  name: 'Dr. J Ranjitha',
  title: 'Research Lead & Academic Advisor',
  institution: 'Vellore Institute of Technology (VIT)',
  department: 'School of Mechanical Engineering / Fluid Mechanics Laboratory',
  image: '/avatar-placeholder.png',
  portfolioUrl: 'https://vit.ac.in',
  quote:
    'True environmental resilience requires moving beyond theoretical fluid dynamics into high-performance, real-world mechanical intervention. Our prototype is engineered to turn academic research into tangible ocean protection.',
  bio:
    'Dr. J Ranjitha is a distinguished researcher and faculty member at the Vellore Institute of Technology. With over 14 years of research and teaching tenure, her work bridges advanced multiphase fluid dynamics, interfacial phenomena, and sustainable chemical-mechanical separation systems. Under her mentorship, The Water Crew was initiated as a student-led deep-tech research initiative to revolutionize emergency maritime hydrocarbon containment.',
  stats: [
    { label: 'Peer-Reviewed Publications', value: '28+' },
    { label: 'Citations', value: '450+' },
    { label: 'Research Areas', value: 'Interfacial Fluidics' },
    { label: 'Academic Experience', value: '14+ Years' },
  ] as ResearchStat[],
  links: {
    scholar: 'https://scholar.google.com',
    linkedin: 'https://linkedin.com',
    email: 'jranjitha@vit.ac.in',
    portfolio: 'https://vit.ac.in',
  },
  researchFocus: [
    'Multiphase Interfacial Dynamics & Capillarity',
    'Oleophilic Textured Polymer Coatings',
    'Hydrodynamic Wave-Current Interactions',
    'Eco-Engineered Clean Separation Technologies',
  ],
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-ranjitha',
    name: 'Dr. J Ranjitha',
    role: 'Research Lead & Principal Investigator',
    department: 'School of Mechanical Engineering, VIT',
    bio: 'Guiding theoretical hydrodynamics, interfacial surface characterization, and academic research rigor for the marine skimmer prototype.',
    specialties: ['Fluid Mechanics', 'Multiphase Flows', 'Academic Governance'],
    image: '/avatar-placeholder.png',
    email: 'jranjitha@vit.ac.in',
    linkedin: 'https://linkedin.com',
    scholar: 'https://scholar.google.com',
    portfolioUrl: 'https://vit.ac.in',
  },
  {
    id: 'team-software-lead',
    name: 'Software Engineer',
    role: 'Founding Software & Control Systems Lead',
    department: 'Autonomous Systems & Embedded Edge Computing',
    bio: 'Architecting the embedded telemetry firmware, real-time wave compensation algorithms, responsive telemetry UI, and mission coordination stack.',
    specialties: ['Embedded C/C++', 'React Architecture', 'Edge Telemetry', 'RTOS'],
    image: '/avatar-placeholder.png',
    email: 'software.thewatercrew@gmail.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'team-mech-lead',
    name: 'Mechanical Design Engineer',
    role: 'Lead Mechanical & Prototyping Engineer',
    department: 'Marine Mechanical & Fluid Dynamics',
    bio: 'Leading structural chassis finite element analysis, 5-axis CNC manufacturing of oleophilic drums, and fluid intake weir geometry optimization.',
    specialties: ['CAD/FEA (SolidWorks)', 'CFD (ANSYS)', 'Marine Metallurgy', 'Rapid Prototyping'],
    image: '/avatar-placeholder.png',
    email: 'mechanical.thewatercrew@gmail.com',
    linkedin: 'https://linkedin.com',
  },
]

export const PRODUCTS_LIST: ProductSpec[] = [
  {
    id: 'skimmer-alpha',
    name: 'The Skimmer MK-2',
    tagline: 'Autonomous High-Recovery Oleophilic Disc Skimmer',
    status: 'Laboratory Validation',
    category: 'Autonomous Surface Vessel',
    description:
      'Our flagship deep-tech recovery unit engineered with a dual-axis grooved composite drum array. Achieves up to 94.2% oil recovery efficiency with minimal water uptake across turbulent maritime wave conditions.',
    keyMetrics: [
      { label: 'Throughput', value: '1,800 L/hr' },
      { label: 'Recovery Efficiency', value: '94.2%' },
      { label: 'Water Intake', value: '< 6%' },
      { label: 'Operating Weight', value: '38.5 kg' },
    ],
    features: [
      'Differential-rotation oleophilic disc cascade',
      'Dual high-torque brushless marine DC motors',
      'Self-trimming buoyant catamaran pontoons',
      'Integrated optical oil layer thickness sensor',
      'Solar-assist battery backup for extended deployment',
    ],
    image:
      '',
    technicalDetails: {
      recoveryRate: '1,800 Liters / Hour nominal',
      viscosityRange: '5 to 50,000 cSt (Diesel to Emulsified Bunker C)',
      deploymentTime: '< 15 minutes by two technicians',
      powerSource: '48V 1.2kWh LiFePO4 Pack + Solar Deck Aux',
    },
  },
  {
    id: 'hydro-containment-boom',
    name: 'Hydrodynamic Containment Module',
    tagline: 'Active-Draft Dynamic Inflow Boom Barrier',
    status: 'Design & CFD Prototyping',
    category: 'Containment Hardware',
    description:
      'Modular buoyant containment system designed with an active boundary layer suction profile that funnels surface hydrocarbons directly toward the skimmer intake throat without vortex shearing.',
    keyMetrics: [
      { label: 'Draft Depth', value: '450 mm' },
      { label: 'Current Threshold', value: '2.4 Knots' },
      { label: 'Section Length', value: '10 m Interlocking' },
      { label: 'Tensile Strength', value: '120 kN' },
    ],
    features: [
      'Self-inflating polyurethane coated ripstop fabric',
      'Subsurface ballast chain for vertical stabilization',
      'Quick-couple stainless 316 interlocking connectors',
      'Integrated retroreflective marine safety beacons',
    ],
    image:
      '',
    technicalDetails: {
      recoveryRate: 'Continuous boundary diversion',
      viscosityRange: 'All surface hydrocarbon types',
      deploymentTime: 'Rapid spool release from tender boat',
      powerSource: 'Passive buoyancy with solar beacon beacon',
    },
  },
  {
    id: 'telemetry-buoy-array',
    name: 'OceanTelemetry Hydrocarbon Node',
    tagline: 'Multiphase Environmental Monitoring Array',
    status: 'Breadboard Validation',
    category: 'Sensors & IoT',
    description:
      'Floating micro-buoy network providing real-time slick perimeter mapping, water salinity, surface wave spectra, and wireless mission telemetry back to the research command station.',
    keyMetrics: [
      { label: 'RF Range', value: '15 km LoRa' },
      { label: 'Optical Resolution', value: '0.2 mm Slick' },
      { label: 'Battery Autonomy', value: '72 Hours' },
      { label: 'Data Encryption', value: 'AES-256' },
    ],
    features: [
      'Multispectral fluorescence hydrocarbon sensor',
      'Satellite Iridium SBD failover module',
      'High-precision GPS + GLONASS real-time kinematic',
      'Hermetically sealed IP68 marine polycarbonate shell',
    ],
    image:
      '',
    technicalDetails: {
      recoveryRate: 'Monitoring & perimeter tracing',
      viscosityRange: 'Spectral fluorescence detection',
      deploymentTime: 'Hand-toss deployment',
      powerSource: 'Triple-junction monocrystalline solar + Li-ion',
    },
  },
]

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Wave Flume Hydrodynamic Test Tank',
    category: 'Laboratory',
    description:
      '12-meter recirculating water flume at VIT testing laminar intake profile under simulated surface chop.',
    image:
      '',
    date: 'VIT Vellore Lab',
    aspectRatio: 'wide',
  },
  {
    id: 'gal-2',
    title: '5-Axis CNC Precision Disc Milling',
    category: 'Workshop',
    description:
      'Fabrication of custom spiral grooved oleophilic discs from lightweight engineering polymers.',
    image:
      '',
    date: 'Mechanical Prototyping Cell',
    aspectRatio: 'square',
  },
  {
    id: 'gal-3',
    title: 'MK-1 Physical Scale Prototype Assembly',
    category: 'Prototype',
    description:
      'Chassis integration of twin marine alloy 5083 pontoons and motor drive transmission.',
    image:
      '',
    date: 'Assembly Bay',
    aspectRatio: 'tall',
  },
  {
    id: 'gal-4',
    title: 'High-Viscosity Emulsion Testing',
    category: 'Laboratory',
    description:
      'Calibrating fluid scraper clearance against weathered crude surrogate mixtures.',
    image:
      '',
    date: 'Chemistry & Fluids Lab',
    aspectRatio: 'square',
  },
  {
    id: 'gal-5',
    title: 'Telemetry Node & Optical Sensor Bench',
    category: 'Workshop',
    description:
      'Hardware-in-the-loop validation of slick thickness optical sensors and LoRa telemetry.',
    image:
      '',
    date: 'Electronics Lab',
    aspectRatio: 'tall',
  },
  {
    id: 'gal-6',
    title: 'Flume Channel Oleophilic Capture Trial',
    category: 'Field Testing',
    description:
      'Real-time continuous measurement of recovery volume and pure oil fraction extraction.',
    image:
      '',
    date: 'Hydrodynamic Channel',
    aspectRatio: 'wide',
  },
]
