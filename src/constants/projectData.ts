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
  tagline: 'Intelligent MOF Sponge for Selective Oil Recovery and Sustainable Biodiesel Production',
  subheading: 'Patent-Protected Autonomous Hydrophobic Skimmer & Circular Bioenergy Systems',
  institution: 'Vellore Institute of Technology (VIT)',
  laboratory: 'CO2 and Green Technologies Centre (CO2 RGTC) & School of Mechanical Engineering',
  stage: 'TRL 5 Prototyping & System Integration',
  statusBadge: 'VIT Incubated · Intellectual Property Registered',
  foundedYear: '2025',
  contactEmail: 'thewatercrew.vit@gmail.com',
  location: 'Vellore Institute of Technology, Vellore, Tamil Nadu - 632014, India',
}

export const HERO_FLOATING_CARD = {
  title: 'Intelligent MOF Skimmer',
  status: 'Prototype Stage',
  institution: 'VIT Research & Innovation',
  trl: 'TRL 5 Physical Stage',
  metrics: [
    { label: 'Selective Separation', value: '100% Oil Only' },
    { label: 'Water Repulsion', value: 'Zero Secondary Intake' },
    { label: 'Nanocrystal Coating', value: 'ZIF-8 Framework' },
    { label: 'Subsystem Status', value: 'AI & IoT Monitored' },
  ],
}

export const ABOUT_STARTUP_CONTENT = {
  welcomeHeadline: 'Selective Oil Recovery and Sustainable Biodiesel Production',
  welcomeSubtitle:
    'Originating from research laboratories at the Vellore Institute of Technology, The Water Crew develops autonomous skimmers engineered with hydrophobic MOF sponges that selectively collect hydrocarbons while repelling seawater—routing recovered oil into sustainable biodiesel production.',
  mission:
    'To deploy high-throughput, vacuum-assisted hydrophobic MOF skimming systems that eliminate marine hydrocarbon spills without collecting seawater, minimizing cleanup time and manpower.',
  vision:
    'A circular marine remediation network where recovered coastal and harbor oil spills are transformed into clean, usable biodiesel.',
  pillars: [
    {
      title: 'Selective MOF Separation',
      description:
        'Hydrophobic and oleophilic ZIF-8 Metal-Organic Framework sponge that selectively absorbs oil while completely repelling water, verified by SEM analysis and laboratory tests.',
      metric: 'Zero Water Ingress',
    },
    {
      title: 'Vacuum-Assisted Continuous Recovery',
      description:
        'Dual rotating disc/sponge rollers combined with automated polymer scrapers and vacuum suction extraction for rapid, non-stop hydrocarbon clearance.',
      metric: 'Continuous Extraction',
    },
    {
      title: 'AI & IoT-Based Smart Monitoring',
      description:
        'Real-time tracking of collected oil levels, GPS coordinates, operating status, and battery telemetry with cloud connectivity and remote operational control.',
      metric: 'Real-Time GPS & Telemetry',
    },
    {
      title: 'Circular Biodiesel Value Loop',
      description:
        'Closing the loop on environmental disaster response by converting recovered marine oil spills into high-grade sustainable biodiesel.',
      metric: 'Circular Green Energy',
    },
  ],
  futureRoadmap:
    'Progressing from current laboratory flume validation and MOF sponge testing to 6–8 month floating prototype deployment, port authority field trials, and commercial equipment rollout.',
}

export const RESEARCH_FACILITIES: ResearchFacility[] = [
  {
    id: 'fluid-mechanics-lab',
    title: 'Multiphase Fluid Mechanics & Flume Channel Lab',
    subtitle: 'Vellore Institute of Technology',
    description:
      'Equipped with a 12-meter recirculating hydro-flume channel designed to simulate maritime swell, wave chop, and surface current vectors. High-speed cameras evaluate laminar intake profile and oleophilic drum adhesion under dynamic surface conditions.',
    specifications: [
      '12m recirculating wave flume with wavemaker paddle',
      'Dual-camera high-speed boundary layer imaging',
      'Dynamic shear and surface wave velocity calibration',
      'Controlled water salinity and temperature regulation',
    ],
    image: '',
    badge: 'Hydrodynamics Testing Facility',
    metricLabel: 'Testing Volume',
    metricValue: '12m Wave Flume',
  },
  {
    id: 'prototype-machining-cell',
    title: 'Advanced Mechatronics & CNC Fabrication Cell',
    subtitle: 'Precision Mechanical Prototyping',
    description:
      'Multi-axis CNC machining, composite forming, and marine-grade fabrication facilities. Precision-machining the aerodynamic skimmer hull, intake mouth, and roller mounting assemblies under strict tolerances.',
    specifications: [
      '5-Axis CNC aluminum & polymer disc machining',
      'Vacuum-assisted lightweight composite hull consolidation',
      'IP68 watertight electrical and motor housings',
      'Rapid 3D additive manufacturing for custom scrapers',
    ],
    image: '',
    badge: 'Precision Fabrication',
    metricLabel: 'Machining Tolerance',
    metricValue: '± 0.02 mm',
  },
  {
    id: 'telemetry-bench',
    title: 'CO2 RGTC Biomaterials & Nanomaterials Lab',
    subtitle: 'CO2 and Green Technologies Centre',
    description:
      'Specialized facility for synthesis, characterization, and coating of Metal-Organic Frameworks (ZIF-8). Equipped with high-resolution SEM, contact angle goniometry, and chemical functionalization reactors.',
    specifications: [
      'Scanning Electron Microscopy (SEM) 100 µm microstructure analysis',
      'ZIF-8 nanocrystal liquid-phase epitaxial crystallization',
      'Superhydrophobic & superoleophilic contact angle verification',
      'High-viscosity hydrocarbon absorption bench',
    ],
    image: '',
    badge: 'Materials Synthesis',
    metricLabel: 'Nanocrystal Framework',
    metricValue: 'ZIF-8 MOF Matrix',
  },
]

export const TIMELINE_STAGES: ProjectTimelineStage[] = [
  {
    id: 'stage-1',
    stageNumber: '01',
    title: 'Problem Identification & Marine Spill Analysis',
    timeframe: 'Phase I',
    description:
      'Investigated limitations of conventional skimmers: high water uptake (sucks large amounts of water), low recovery efficiency in rough seas, high maintenance costs, and secondary contamination.',
    engineeringDetails: [
      'Analysis of major maritime incidents (Exxon Valdez, Deepwater Horizon >150k tonnes)',
      'Benchmark of current response methods: burning, dispersants, and traditional skimming ($100-150/bbl)',
      'Identification of target port and shipping corridor pain points',
    ],
    status: 'completed',
    metrics: { label: 'Benchmark Incident Scale', value: '> 150,000 Tonnes' },
  },
  {
    id: 'stage-2',
    stageNumber: '02',
    title: 'Hydrophobic MOF Sponge Synthesis & ZIF-8 Coating',
    timeframe: 'Phase II',
    description:
      'Synthesized superhydrophobic, superoleophilic sponge material coated with ZIF-8 nanocrystals. Validated zero water absorption with selective oil uptake in laboratory petridish tests.',
    engineeringDetails: [
      'Base polyurethane/melamine sponge substrate functionalization',
      'In-situ growth of ZIF-8 Metal-Organic Framework nanocrystals',
      'SEM verification of porous nano-composite coating (100 µm scale)',
      'Petridish selective dye-oil uptake testing in salt water',
    ],
    status: 'completed',
    metrics: { label: 'Oil Selectivity', value: '100% Selective' },
  },
  {
    id: 'stage-3',
    stageNumber: '03',
    title: 'Skimmer 3D CAD Design & Patent Registration',
    timeframe: 'Phase III',
    description:
      'Developed 3D hydrodynamic pod structure with aerodynamic profile, internal roller mechanism, and vacuum extraction manifold. Filed for design registration with Intellectual Property India.',
    engineeringDetails: [
      'Hydrodynamic pod hull geometry with integrated intake slot',
      'Triangular internal sponge/disc roller arrangement with wiper scrapers',
      'Rear brushless motor drive and directional thruster assembly',
      'Intellectual Property India design application submission',
    ],
    status: 'completed',
    metrics: { label: 'IP Status', value: 'Patent / Design Filed' },
  },
  {
    id: 'stage-4',
    stageNumber: '04',
    title: 'AI & IoT Smart Monitoring Architecture',
    timeframe: 'Phase IV',
    description:
      'Architected embedded IoT control unit with real-time oil level sensors, GPS telemetry module, battery power management, and remote operator dashboard.',
    engineeringDetails: [
      'Microcontroller sensor integration (oil volume, water presence, temperature)',
      'Long-range wireless and GPS location tracking node',
      'Cloud telemetry pipeline and responsive monitoring web application',
      'Power management circuit for continuous battery and solar backup',
    ],
    status: 'in-progress',
    metrics: { label: 'Telemetry Latency', value: '< 100 ms' },
  },
  {
    id: 'stage-5',
    stageNumber: '05',
    title: 'System Integration & Wave Flume Validation',
    timeframe: 'Phase V (Current Stage)',
    description:
      'Currently integrating the floating skimmer structure, MOF sponge rollers, vacuum-assisted extraction pump, and onboard IoT electronics for 12m wave flume testing.',
    engineeringDetails: [
      'Coupling vacuum pump with collection sump reservoir',
      'Empirical oil-recovery throughput trials under simulated sea chop',
      'Endurance testing of reusable MOF sponge over multiple extraction cycles',
    ],
    status: 'in-progress',
    metrics: { label: 'Target Prototyping Window', value: '6–8 Months' },
  },
  {
    id: 'stage-6',
    stageNumber: '06',
    title: 'Field Demonstrations & Biodiesel Production Linkage',
    timeframe: 'Phase VI (Target)',
    description:
      'Conducting live demonstrations at ports, harbours, and oil terminals. Routing recovered hydrocarbons to our refinery partners for sustainable biodiesel synthesis.',
    engineeringDetails: [
      'Live field demonstration at Chennai / Ennore port facilities',
      'Batch chemical transesterification of recovered oil into biodiesel',
      'B2B equipment sales, rental response services, and AMC deployment',
    ],
    status: 'upcoming',
    metrics: { label: 'Target SDGs', value: 'SDGs 6, 13, 14' },
  },
]

export const RESEARCH_LEAD_DATA = {
  name: 'Dr. J. Ranjitha',
  academicTitle: 'Professor & Researcher',
  officialRole: 'Associate Professor & Team Lead',
  institution: 'Vellore Institute of Technology (VIT)',
  department: 'CO2 and Green Technologies Centre (CO2 RGTC) & School of Mechanical Engineering',
  email: 'jranjitha@vit.ac.in',
  image: '/team/dr-j-ranjitha.jpg',
  portfolioUrl: 'https://vit.ac.in',
  quote:
    'True environmental resilience requires moving beyond theoretical science into practical engineering innovations. Our intelligent MOF sponge combines interfacial biomaterials with automated marine skimming to achieve clean, selective oil recovery and sustainable bioenergy production.',
  bio:
    'Dr. J. Ranjitha is a Professor and Researcher specializing in biomaterials and its applications. Her work advances bioenergy and sustainable energy solutions. She focuses on energy storage for industrial applications. Her research bridges environmental biotechnology, materials science, and practical engineering innovations.',
  affiliations: [
    'Professor and Researcher specializing in Biomaterials and its applications',
    'CO2 and Green Technologies Centre (CO2 RGTC), VIT',
    'School of Mechanical Engineering, Vellore Institute of Technology',
    'Research Lead: Intelligent MOF Sponge for Selective Oil Recovery',
    'Bioenergy, Sustainable Energy Solutions & Industrial Energy Storage',
    'Environmental Biotechnology, Materials Science & Practical Engineering Innovations',
  ],
  stats: [
    { label: 'Peer-Reviewed Publications', value: '30+' },
    { label: 'Citations', value: '500+' },
    { label: 'Specialization', value: 'Biomaterials & Bioenergy' },
    { label: 'Academic Experience', value: '14+ Years' },
  ] as ResearchStat[],
  links: {
    scholar: 'https://scholar.google.com',
    linkedin: 'https://linkedin.com',
    email: 'jranjitha@vit.ac.in',
    portfolio: 'https://vit.ac.in',
  },
  researchFocus: [
    'Biomaterials & Surface Functionalization',
    'Metal-Organic Frameworks (ZIF-8 Hydrophobic Nanocomposites)',
    'Bioenergy & Sustainable Energy Solutions',
    'Industrial Energy Storage & Environmental Biotechnology',
    'Selective Hydrocarbon Phase Separation & Circular Biodiesel',
  ],
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-ranjitha',
    name: 'Dr. J. Ranjitha',
    role: 'Associate Professor & Team Lead',
    department: 'CO2 RGTC & School of Mechanical Engineering, VIT',
    bio: 'Professor and researcher specializing in biomaterials, bioenergy, and environmental biotechnology. Serving as Faculty Team Lead and Principal Investigator for the Intelligent MOF Sponge project.',
    specialties: ['Biomaterials', 'Bioenergy', 'Metal-Organic Frameworks', 'Academic Governance'],
    image: '/team/dr-j-ranjitha.jpg',
    email: 'jranjitha@vit.ac.in',
    linkedin: 'https://linkedin.com',
    scholar: 'https://scholar.google.com',
    portfolioUrl: 'https://vit.ac.in',
  },
  {
    id: 'team-sunilkumar',
    name: 'D Sunilkumar',
    role: 'MOF Sponge Development Lead',
    department: 'CO2 and Green Technologies Centre (CO2 RGTC), VIT',
    bio: 'Leading synthesis and surface functionalization of ZIF-8 metal-organic framework nanocomposites. Engineered the superhydrophobic, superoleophilic sponge structure achieving selective oil uptake and complete water repulsion.',
    specialties: ['CO2 RGTC Research', 'ZIF-8 Nanocrystals', 'Hydrophobic MOF Sponges', 'Chemical Synthesis'],
    image: '/team/sunilkumar.jpg',
    email: 'sunilkumar.d@vit.ac.in',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'team-deeptiman',
    name: 'D Deeptiman Dutta',
    role: 'Mechanical Designing of Skimmer',
    department: 'School of Mechanical Engineering, VIT',
    bio: 'Architect of the 3D hydrodynamic skimmer pod hull, internal roller geometry, and vacuum suction intake manifolds. Led the design registration with Intellectual Property India.',
    specialties: ['3D CAD Modeling', 'Hydrodynamic Pod Architecture', 'Vacuum Suction Manifolds', 'IP Design Registration'],
    image: '/team/deeptiman-dutta.jpg',
    email: 'deeptiman.dutta@vit.ac.in',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'team-shreyash',
    name: 'V Shreyash',
    role: 'IoT System Development Lead',
    department: 'School of Electrical Engineering, VIT',
    bio: 'Developing edge IoT monitoring nodes, GPS tracking modules, real-time hydrocarbon volume sensors, battery power management circuits, and remote telemetry links.',
    specialties: ['IoT Systems', 'Microcontrollers & Sensors', 'GPS & Wireless Telemetry', 'Power Electronics'],
    image: '/team/shreyash.jpg',
    email: 'shreyash.v@vit.ac.in',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'team-jayaharini',
    name: 'G Jayaharini',
    role: 'Application Development Lead',
    department: 'School of Computer Science and Engineering, VIT',
    bio: 'Architecting the real-time IoT monitoring dashboard, cloud telemetry ingestion pipelines, operator mobile interface, and automated alert algorithms for oil spill containment operations.',
    specialties: ['Full-Stack Cloud Architecture', 'IoT Dashboards', 'Telemetry Analytics', 'Mobile Applications'],
    image: '/team/jayaharini.jpg',
    email: 'jayaharini.g@vit.ac.in',
    linkedin: 'https://linkedin.com',
  },
]

export const PRODUCTS_LIST: ProductSpec[] = [
  {
    id: 'skimmer-alpha',
    name: 'Intelligent MOF Skimmer Pod',
    tagline: 'Vacuum-Assisted Hydrophobic MOF Surface Recovery Vessel',
    status: 'Patent / Design Filed (IP India)',
    category: 'Autonomous Surface Vessel',
    description:
      'Our flagship marine skimmer featuring an aerodynamic/hydrodynamic pod hull, integrated intake slot, internal MOF sponge rollers with wiper scrapers, and a high-throughput vacuum suction hopper. Rejects water while continuously extracting pure oil.',
    keyMetrics: [
      { label: 'Oil Selectivity', value: '100% Oil Only' },
      { label: 'Water Uptake', value: '0% (Repelled)' },
      { label: 'Vacuum Suction', value: 'Integrated' },
      { label: 'IP Status', value: 'IP India Registered' },
    ],
    features: [
      'Proprietary hydrodynamic pod hull with forward intake mouth',
      'Internal rotating MOF-coated rollers with mechanical scrapers',
      'Vacuum-assisted continuous fluid extraction hopper',
      'Rear electric thruster propulsion and directional steering',
      'Integrated Intellectual Property India registered design',
    ],
    image: '/startup-assets/slide_16_skimmer_cad_design.png',
    technicalDetails: {
      recoveryRate: 'High-throughput continuous vacuum collection',
      viscosityRange: 'Light distillates to weathered heavy crude',
      deploymentTime: '< 10 minutes rapid launch',
      powerSource: 'Onboard high-capacity battery with IoT power management',
    },
  },
  {
    id: 'micro-boom',
    name: 'Hydrophobic ZIF-8 MOF Sponge',
    tagline: 'Superhydrophobic & Superoleophilic Nano-Engineered Sponge',
    status: 'Laboratory Validated',
    category: 'Advanced Nanomaterials',
    description:
      'Engineered by in-situ growth of ZIF-8 Metal-Organic Framework nanocrystals on porous substrates. Exhibits high contact angle for water (>150°) and rapid capillary absorption of hydrocarbons with reusable mechanical squeeze extraction.',
    keyMetrics: [
      { label: 'Contact Angle', value: '> 150° (Superhydrophobic)' },
      { label: 'Coating Matrix', value: 'ZIF-8 Framework' },
      { label: 'Pore Dimension', value: '100 µm SEM Validated' },
      { label: 'Reusability', value: 'Multi-Cycle Extracted' },
    ],
    features: [
      'Crystalline ZIF-8 porous framework coating',
      'Selective capillary uptake of crude and refined petroleum',
      'Complete water repulsion without secondary emulsification',
      'Reusable through mechanical compression recovery cycles',
      'Environmentally benign with zero chemical dispersant discharge',
    ],
    image: '/startup-assets/mof_sem_analysis.png',
    technicalDetails: {
      recoveryRate: 'Rapid capillary saturation in seconds',
      viscosityRange: 'Crude oils, fuel oils, diesel, and kerosene',
      deploymentTime: 'Immediate contact absorption',
      powerSource: 'Passive surface energy driven',
    },
  },
  {
    id: 'telemetry-array',
    name: 'AI & IoT Smart Monitoring Node',
    tagline: 'Real-Time Spill Tracking, GPS Location & Remote Operation',
    status: 'System Integration',
    category: 'Autonomous IoT Hardware',
    description:
      'Self-contained marine telemetry node featuring liquid level sensors, high-accuracy GPS tracking, and bidirectional wireless links. Enables operators to track oil spill volume, monitor skimmer coordinates, and control recovery remotely.',
    keyMetrics: [
      { label: 'Positioning', value: 'Real-Time GPS Tracking' },
      { label: 'Sensors', value: 'Oil Level & Diagnostics' },
      { label: 'Control', value: 'Remote Wireless / IoT' },
      { label: 'Enclosure', value: 'IP68 Sealed Marine Node' },
    ],
    features: [
      'Continuous oil accumulation volume monitoring',
      'Satellite & cellular/LoRa dual failover telemetry uplink',
      'Cloud dashboard integration for maritime port authorities',
      'Automated geofencing and collision prevention telemetry',
      'Intelligent power management for extended mission duration',
    ],
    image: '/startup-assets/mof_working_mechanism.png',
    technicalDetails: {
      recoveryRate: 'Sub-second sensor polling and telemetry streaming',
      viscosityRange: 'Real-time dielectric and level detection',
      deploymentTime: 'Plug-and-play onboard integration',
      powerSource: 'Low-power microcontroller with battery telemetry',
    },
  },
]

export const STARTUP_BUDGET_BREAKDOWN = [
  { item: 'Skimmer body & structural frame', budget: '₹75,000' },
  { item: 'Hydrophobic MOF sponge development', budget: '₹45,000' },
  { item: 'Motor, pump & vacuum suction system', budget: '₹60,000' },
  { item: 'Oil collection & storage system', budget: '₹25,000' },
  { item: 'Sensors & IoT monitoring system', budget: '₹40,000' },
  { item: 'GPS & wireless communication module', budget: '₹20,000' },
  { item: 'Battery & power management system', budget: '₹25,000' },
  { item: 'Control unit / microcontroller & electronics', budget: '₹20,000' },
  { item: 'Fabrication, machining & assembly', budget: '₹55,000' },
  { item: 'Testing, trials & optimization', budget: '₹25,000' },
  { item: 'Miscellaneous / contingency', budget: '₹15,000' },
]

export const COMPETITOR_COMPARISON = [
  {
    competitor: 'LAMOR',
    existingTech: 'Brush, disc, drum and weir-based oil skimmers; some systems use suction/vacuum pumps.',
    ourAdvantage: 'Hydrophobic MOF sponge + vacuum-assisted selective oil recovery + AI/IoT monitoring',
  },
  {
    competitor: 'JVM',
    existingTech: 'Oleophilic drum, brush, grooved-disc and suction skimmers for oil recovery.',
    ourAdvantage: 'MOF-based oil-water selective separation combined with smart monitoring and control',
  },
  {
    competitor: 'NASH',
    existingTech: 'Disc/brush skimmers with pumps and modular recovery systems; some support wireless control.',
    ourAdvantage: 'Integration of hydrophobic MOF sponge, vacuum extraction, sensors, GPS and AI/IoT-based monitoring',
  },
]

export const TARGET_SDGS = [
  {
    code: 'SDG 6',
    title: 'Clean Water & Sanitation',
    description: 'Protecting freshwater basins, coastal estuaries, and maritime ecosystems from chemical and crude contamination.',
  },
  {
    code: 'SDG 13',
    title: 'Climate Action',
    description: 'Transforming recovered marine hydrocarbon discharges into sustainable biodiesel, eliminating burning and secondary emissions.',
  },
  {
    code: 'SDG 14',
    title: 'Life Below Water',
    description: 'Safeguarding seabirds, marine turtles, fish larvae, and phytoplankton food webs from catastrophic spill mortality.',
  },
]

export const GALLERY_ITEMS: GalleryItem[] = []
