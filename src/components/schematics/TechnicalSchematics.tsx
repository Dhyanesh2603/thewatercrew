import React from 'react'

/**
 * 1. Skimmer MK-2 CAD & Hydrodynamics Blueprint
 * Visualizes the dual-hull catamaran, oleophilic rotating drum, wiper scraper, and telemetry head.
 */
export const SkimmerSchematic: React.FC<{ className?: string; interactive?: boolean }> = ({
  className = '',
}) => {
  return (
    <div className={`relative w-full h-full bg-[#0F172A] text-slate-200 overflow-hidden select-none flex items-center justify-center p-4 sm:p-6 ${className}`}>
      {/* CAD Blueprint Grid Background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="cad-small-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#38BDF8" strokeWidth="0.5" />
          </pattern>
          <pattern id="cad-major-grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="url(#cad-small-grid)" />
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#0284C7" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cad-major-grid)" />
      </svg>

      {/* Main Vector Schematic */}
      <svg
        viewBox="0 0 800 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[460px] object-contain relative z-10"
      >
        {/* Coordinate Crosshairs */}
        <g stroke="#38BDF8" strokeWidth="0.75" opacity="0.4">
          <line x1="40" y1="260" x2="760" y2="260" strokeDasharray="4 4" />
          <line x1="400" y1="40" x2="400" y2="480" strokeDasharray="4 4" />
        </g>

        {/* DIMENSION LINES */}
        <g stroke="#94A3B8" strokeWidth="1" opacity="0.6" fontSize="10" fontFamily="monospace">
          {/* Width Dimension (Top) */}
          <line x1="160" y1="55" x2="640" y2="55" />
          <line x1="160" y1="48" x2="160" y2="62" />
          <line x1="640" y1="48" x2="640" y2="62" />
          <text x="400" y="50" fill="#94A3B8" textAnchor="middle">1,240 mm (BEAM WIDTH)</text>

          {/* Length Dimension (Left) */}
          <line x1="90" y1="90" x2="90" y2="430" />
          <line x1="83" y1="90" x2="97" y2="90" />
          <line x1="83" y1="430" x2="97" y2="430" />
          <text x="82" y="265" fill="#94A3B8" textAnchor="middle" transform="rotate(-90 82 265)">1,850 mm (HULL LENGTH)</text>
        </g>

        {/* HYDRODYNAMIC FLOW VECTORS (Intake Arrows) */}
        <g stroke="#0EA5E9" strokeWidth="1.5" opacity="0.8">
          <path d="M 280 470 C 280 410, 340 370, 370 340" strokeDasharray="6 4" />
          <polygon points="372,335 365,342 374,346" fill="#0EA5E9" />
          
          <path d="M 400 480 L 400 350" strokeDasharray="6 4" />
          <polygon points="400,342 396,352 404,352" fill="#0EA5E9" />

          <path d="M 520 470 C 520 410, 460 370, 430 340" strokeDasharray="6 4" />
          <polygon points="428,335 426,346 435,342" fill="#0EA5E9" />
          <text x="400" y="502" fill="#38BDF8" fontSize="10" fontFamily="monospace" textAnchor="middle">SURFACE HYDROCARBON SWEEP VECTOR (0.42 m/s)</text>
        </g>

        {/* PORT PONTOON (Left Catamaran Hull) */}
        <g id="port-hull">
          <path
            d="M 160 140 C 160 90, 210 90, 220 130 L 220 400 C 220 425, 195 435, 185 430 C 165 420, 160 395, 160 380 Z"
            fill="#1E293B"
            stroke="#0284C7"
            strokeWidth="2"
          />
          {/* Structural ribs */}
          <line x1="162" y1="180" x2="218" y2="180" stroke="#334155" strokeWidth="1.5" />
          <line x1="162" y1="240" x2="218" y2="240" stroke="#334155" strokeWidth="1.5" />
          <line x1="162" y1="300" x2="218" y2="300" stroke="#334155" strokeWidth="1.5" />
          <line x1="162" y1="360" x2="218" y2="360" stroke="#334155" strokeWidth="1.5" />
          <text x="190" y="270" fill="#64748B" fontSize="9" fontFamily="monospace" textAnchor="middle" transform="rotate(-90 190 270)">
            AL-5083 PONTOON (PORT)
          </text>
        </g>

        {/* STARBOARD PONTOON (Right Catamaran Hull) */}
        <g id="starboard-hull">
          <path
            d="M 640 140 C 640 90, 590 90, 580 130 L 580 400 C 580 425, 605 435, 615 430 C 635 420, 640 395, 640 380 Z"
            fill="#1E293B"
            stroke="#0284C7"
            strokeWidth="2"
          />
          {/* Structural ribs */}
          <line x1="582" y1="180" x2="638" y2="180" stroke="#334155" strokeWidth="1.5" />
          <line x1="582" y1="240" x2="638" y2="240" stroke="#334155" strokeWidth="1.5" />
          <line x1="582" y1="300" x2="638" y2="300" stroke="#334155" strokeWidth="1.5" />
          <line x1="582" y1="360" x2="638" y2="360" stroke="#334155" strokeWidth="1.5" />
          <text x="610" y="270" fill="#64748B" fontSize="9" fontFamily="monospace" textAnchor="middle" transform="rotate(90 610 270)">
            AL-5083 PONTOON (STBD)
          </text>
        </g>

        {/* STRUCTURAL CROSS-BEAMS */}
        <rect x="220" y="150" width="360" height="18" fill="#0F172A" stroke="#0284C7" strokeWidth="1.5" rx="3" />
        <rect x="220" y="380" width="360" height="18" fill="#0F172A" stroke="#0284C7" strokeWidth="1.5" rx="3" />

        {/* CENTRAL OLEOPHILIC DRUM ASSEMBLY */}
        <g id="drum-assembly">
          {/* Drum Outer Housing / Bearings */}
          <rect x="270" y="220" width="260" height="95" rx="8" fill="#091322" stroke="#38BDF8" strokeWidth="2" />
          
          {/* Grooved Texture Discs */}
          {Array.from({ length: 17 }).map((_, i) => (
            <line
              key={i}
              x1={282 + i * 14.5}
              y1="222"
              x2={282 + i * 14.5}
              y2="313"
              stroke="#0284C7"
              strokeWidth="2"
              opacity="0.85"
            />
          ))}

          {/* Central Axle & Drive Motor Mount */}
          <circle cx="260" cy="267" r="14" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
          <circle cx="540" cy="267" r="14" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />

          {/* Wiper Scraper Blade Bar */}
          <rect x="268" y="212" width="264" height="8" rx="2" fill="#F59E0B" stroke="#D97706" strokeWidth="1" />
          <text x="400" y="206" fill="#F59E0B" fontSize="9" fontFamily="monospace" textAnchor="middle">
            POLYMERIC WIPER SCRAPER (CLEARANCE: 0.15mm)
          </text>
        </g>

        {/* RECOVERY SUMP & SEPARATION HOPPER */}
        <path
          d="M 310 170 L 490 170 L 460 215 L 340 215 Z"
          fill="#1E293B"
          stroke="#0EA5E9"
          strokeWidth="1.5"
        />
        <text x="400" y="196" fill="#E2E8F0" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
          HYDROCARBON SUMP RESERVOIR
        </text>

        {/* CENTRAL TELEMETRY NODE & ANTENNA */}
        <g id="telemetry-node">
          <circle cx="400" cy="110" r="26" fill="#0B2A3C" stroke="#10B981" strokeWidth="2" />
          <circle cx="400" cy="110" r="8" fill="#10B981" />
          <line x1="400" y1="84" x2="400" y2="70" stroke="#10B981" strokeWidth="2" />
          <circle cx="400" cy="68" r="3" fill="#10B981" />
          {/* Signal rings */}
          <circle cx="400" cy="68" r="8" fill="none" stroke="#10B981" strokeWidth="0.75" strokeDasharray="2 2" />
          <circle cx="400" cy="68" r="14" fill="none" stroke="#10B981" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.6" />
          <text x="400" y="146" fill="#10B981" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
            LoRa / SATELLITE TELEMETRY NODE
          </text>
        </g>

        {/* TECHNICAL ANNOTATION CALLOUTS */}
        {/* Callout 1: Oleophilic Drum */}
        <g stroke="#38BDF8" strokeWidth="1">
          <line x1="510" y1="280" x2="680" y2="280" />
          <circle cx="510" cy="280" r="2.5" fill="#38BDF8" />
          <rect x="680" y="266" width="105" height="28" rx="4" fill="#0F172A" stroke="#38BDF8" strokeWidth="1" />
          <text x="688" y="278" fill="#38BDF8" fontSize="8" fontFamily="monospace" fontWeight="bold">GROOVED DRUM</text>
          <text x="688" y="289" fill="#94A3B8" fontSize="7.5" fontFamily="monospace">94.2% ADHESION</text>
        </g>

        {/* Callout 2: Brushless Drive Motors */}
        <g stroke="#38BDF8" strokeWidth="1">
          <line x1="260" y1="282" x2="130" y2="340" />
          <circle cx="260" cy="282" r="2.5" fill="#38BDF8" />
          <rect x="25" y="332" width="105" height="28" rx="4" fill="#0F172A" stroke="#38BDF8" strokeWidth="1" />
          <text x="33" y="344" fill="#38BDF8" fontSize="8" fontFamily="monospace" fontWeight="bold">DUAL BLDC DRIVE</text>
          <text x="33" y="355" fill="#94A3B8" fontSize="7.5" fontFamily="monospace">IP68 WATERPROOF</text>
        </g>
      </svg>
    </div>
  )
}

/**
 * 2. Active Containment Barrier (Micro-Boom) Schematic
 */
export const BarrierSchematic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full bg-[#0F172A] text-slate-200 overflow-hidden select-none flex items-center justify-center p-4 sm:p-6 ${className}`}>
      <svg
        viewBox="0 0 600 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[300px] object-contain relative z-10"
      >
        {/* Background Grid */}
        <defs>
          <pattern id="barrier-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1E293B" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#barrier-grid)" />

        {/* Water Surface Line */}
        <line x1="30" y1="160" x2="570" y2="160" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="5 3" />
        <text x="40" y="152" fill="#38BDF8" fontSize="9" fontFamily="monospace">MEAN WATERLINE (LAT)</text>

        {/* Hydrocarbon Slick Layer */}
        <rect x="30" y="145" width="250" height="15" fill="#334155" opacity="0.6" />
        <text x="40" y="140" fill="#94A3B8" fontSize="8" fontFamily="monospace">SURFACE OIL SLICK FILM (3.5 mm)</text>

        {/* Modular Boom Chambers (Cross-section view) */}
        {[180, 310, 440].map((cx, i) => (
          <g key={i}>
            {/* Cylindrical Float Section */}
            <circle cx={cx} cy="160" r="38" fill="#0B2A3C" stroke="#0284C7" strokeWidth="2" />
            <circle cx={cx} cy="160" r="26" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
            <circle cx={cx} cy="160" r="6" fill="#F59E0B" />
            {/* Flexible Subsurface Skirt */}
            <path
              d={`M ${cx - 24} 195 C ${cx - 15} 250, ${cx - 5} 270, ${cx} 290`}
              stroke="#0EA5E9"
              strokeWidth="3"
              fill="none"
            />
            {/* Ballast Chain Weight */}
            <circle cx={cx} cy="294" r="7" fill="#64748B" stroke="#94A3B8" strokeWidth="1.5" />
          </g>
        ))}

        {/* Inter-Chamber Tension Cable */}
        <line x1="80" y1="160" x2="520" y2="160" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 2" />

        {/* Technical Callout */}
        <g stroke="#38BDF8" strokeWidth="1">
          <line x1="310" y1="120" x2="310" y2="70" />
          <circle cx="310" cy="120" r="2.5" fill="#38BDF8" />
          <rect x="235" y="42" width="150" height="26" rx="4" fill="#0F172A" stroke="#38BDF8" strokeWidth="1" />
          <text x="310" y="58" fill="#38BDF8" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
            BALLASTED PERIMETER BOOM
          </text>
        </g>
      </svg>
    </div>
  )
}

/**
 * 3. Sensor Telemetry & Optical Array Schematic
 */
export const TelemetrySchematic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full bg-[#0F172A] text-slate-200 overflow-hidden select-none flex items-center justify-center p-4 sm:p-6 ${className}`}>
      <svg
        viewBox="0 0 600 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[300px] object-contain relative z-10"
      >
        <defs>
          <pattern id="telemetry-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1E293B" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#telemetry-grid)" />

        {/* Enclosure Enclosure Box */}
        <rect x="180" y="70" width="240" height="190" rx="12" fill="#0B2A3C" stroke="#10B981" strokeWidth="2" />
        <rect x="200" y="90" width="200" height="150" rx="8" fill="#091322" stroke="#047857" strokeWidth="1" />

        {/* PCB Board & Sensor Microcontroller */}
        <rect x="220" y="110" width="160" height="110" rx="4" fill="#064E3B" stroke="#34D399" strokeWidth="1" />
        
        {/* Optical Sensor Probe (Bottom Protrusion) */}
        <line x1="300" y1="260" x2="300" y2="310" stroke="#10B981" strokeWidth="4" />
        <circle cx="300" cy="316" r="10" fill="#059669" stroke="#34D399" strokeWidth="2" />
        {/* Optical measurement beam */}
        <polygon points="300,326 270,340 330,340" fill="#34D399" opacity="0.3" />

        {/* Uplink Antenna Mast */}
        <line x1="300" y1="70" x2="300" y2="25" stroke="#34D399" strokeWidth="2" />
        <circle cx="300" cy="22" r="4" fill="#10B981" />
        <circle cx="300" cy="22" r="10" fill="none" stroke="#34D399" strokeWidth="0.75" strokeDasharray="2 2" />
        <circle cx="300" cy="22" r="18" fill="none" stroke="#34D399" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.6" />

        {/* Circuit Tracks */}
        <path d="M 240 140 H 280 V 170 H 320" stroke="#34D399" strokeWidth="1.5" fill="none" />
        <circle cx="240" cy="140" r="3" fill="#34D399" />
        <circle cx="320" cy="170" r="3" fill="#34D399" />

        {/* Readouts */}
        <text x="300" y="130" fill="#A7F3D0" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
          STM32F4 + LoRaWAN
        </text>
        <text x="300" y="195" fill="#34D399" fontSize="8" fontFamily="monospace" textAnchor="middle">
          LATENCY &lt; 120 ms · IP68
        </text>
      </svg>
    </div>
  )
}

/**
 * 4. 12-Meter Recirculating Hydrodynamics Wave Flume Facility Schematic
 */
export const FlumeLabSchematic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full bg-[#0F172A] text-slate-200 overflow-hidden select-none flex items-center justify-center p-4 sm:p-6 ${className}`}>
      <svg
        viewBox="0 0 700 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[340px] object-contain relative z-10"
      >
        <defs>
          <pattern id="flume-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1E293B" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#flume-grid)" />

        {/* Flume Tank Boundaries */}
        <rect x="60" y="100" width="580" height="180" rx="4" fill="#0B1B2B" stroke="#0284C7" strokeWidth="2" />
        
        {/* Water Volume */}
        <rect x="62" y="160" width="576" height="118" fill="#0369A1" opacity="0.3" />

        {/* Simulated Sinusoidal Waves */}
        <path
          d="M 62 160 Q 110 145 160 160 T 260 160 T 360 160 T 460 160 T 560 160 T 638 160"
          stroke="#38BDF8"
          strokeWidth="2.5"
          fill="none"
        />

        {/* Wave Generator Paddle (Left end) */}
        <line x1="90" y1="120" x2="90" y2="260" stroke="#F59E0B" strokeWidth="6" />
        <circle cx="90" cy="120" r="8" fill="#D97706" />
        <text x="90" y="90" fill="#F59E0B" fontSize="9" fontFamily="monospace" textAnchor="middle">WAVEMAKER</text>

        {/* Skimmer Model Rig Suspended at Center */}
        <rect x="330" y="145" width="80" height="30" rx="4" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
        <circle cx="370" cy="160" r="10" fill="#0284C7" />
        <text x="370" y="140" fill="#38BDF8" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
          TEST RIG
        </text>

        {/* Dual PIV Laser Sheet Camera (Top mounted) */}
        <g stroke="#10B981" strokeWidth="1">
          <circle cx="370" cy="50" r="8" fill="#047857" />
          <line x1="370" y1="58" x2="330" y2="145" strokeDasharray="3 3" />
          <line x1="370" y1="58" x2="410" y2="145" strokeDasharray="3 3" />
          <text x="370" y="35" fill="#34D399" fontSize="8.5" fontFamily="monospace" textAnchor="middle">
            HIGH-SPEED PIV CAMERA
          </text>
        </g>

        {/* Scale Annotations */}
        <line x1="60" y1="310" x2="640" y2="310" stroke="#94A3B8" strokeWidth="1" />
        <line x1="60" y1="303" x2="60" y2="317" stroke="#94A3B8" strokeWidth="1" />
        <line x1="640" y1="303" x2="640" y2="317" stroke="#94A3B8" strokeWidth="1" />
        <text x="350" y="330" fill="#94A3B8" fontSize="10" fontFamily="monospace" textAnchor="middle">
          12.00 METERS RECIRCULATING WATER CHANNEL
        </text>
      </svg>
    </div>
  )
}

/**
 * 5. 5-Axis CNC Precision Disc Milling & Prototyping Cell Schematic
 */
export const CncMachiningSchematic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full bg-[#0F172A] text-slate-200 overflow-hidden select-none flex items-center justify-center p-4 sm:p-6 ${className}`}>
      <svg
        viewBox="0 0 700 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[340px] object-contain relative z-10"
      >
        <defs>
          <pattern id="cnc-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1E293B" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cnc-grid)" />

        {/* Machine Frame & Gantry Columns */}
        <rect x="100" y="80" width="500" height="240" rx="8" fill="#0B1B2B" stroke="#0284C7" strokeWidth="2" />
        
        {/* Machine Table Bed */}
        <rect x="140" y="270" width="420" height="30" rx="3" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
        
        {/* Rotary Chuck Base */}
        <rect x="290" y="240" width="120" height="30" rx="2" fill="#091322" stroke="#0284C7" strokeWidth="1.5" />
        
        {/* Workpiece: Oleophilic Grooved Disc */}
        <circle cx="350" cy="180" r="55" fill="#0F172A" stroke="#F59E0B" strokeWidth="2.5" />
        <circle cx="350" cy="180" r="40" fill="none" stroke="#F59E0B" strokeWidth="1" strokeDasharray="4 2" />
        <circle cx="350" cy="180" r="25" fill="none" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="350" cy="180" r="12" fill="#D97706" />

        {/* High-Speed CNC Spindle Head (Z-Axis) */}
        <path d="M 335 40 L 365 40 L 358 115 L 342 115 Z" fill="#334155" stroke="#38BDF8" strokeWidth="1.5" />
        <rect x="347" y="115" width="6" height="20" fill="#38BDF8" />
        {/* Cutting tip contact point */}
        <circle cx="350" cy="135" r="3" fill="#38BDF8" />

        {/* Axis Motion Indicator Arrows */}
        <g stroke="#34D399" strokeWidth="1.5" opacity="0.85">
          {/* X Axis */}
          <line x1="160" y1="100" x2="220" y2="100" />
          <polygon points="225,100 218,96 218,104" fill="#34D399" />
          <text x="190" y="92" fill="#34D399" fontSize="9" fontFamily="monospace" textAnchor="middle">X-AXIS</text>

          {/* Y Axis */}
          <line x1="160" y1="100" x2="160" y2="160" />
          <polygon points="160,165 156,158 164,158" fill="#34D399" />
          <text x="145" y="135" fill="#34D399" fontSize="9" fontFamily="monospace" textAnchor="middle">Y-AXIS</text>
        </g>

        {/* Technical Callout */}
        <g stroke="#38BDF8" strokeWidth="1">
          <line x1="405" y1="180" x2="520" y2="180" />
          <circle cx="405" cy="180" r="2.5" fill="#38BDF8" />
          <rect x="520" y="165" width="130" height="30" rx="4" fill="#0F172A" stroke="#38BDF8" strokeWidth="1" />
          <text x="528" y="178" fill="#38BDF8" fontSize="8" fontFamily="monospace" fontWeight="bold">POLYMER SPIRAL DISC</text>
          <text x="528" y="189" fill="#94A3B8" fontSize="7.5" fontFamily="monospace">TOLERANCE ±0.02 mm</text>
        </g>
      </svg>
    </div>
  )
}
