# The Water Crew — Autonomous Marine Oil Skimmer Prototype

> **Deep-Tech Marine Hydrodynamics & Environmental Remediation Engineering**  
> *Developed in collaboration with university research laboratories at Vellore Institute of Technology (VIT).*

[![React 19](https://img.shields.io/badge/React-19.3-0B2545?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-0B2545?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-Bundler-0B2545?style=flat-square&logo=vite)](https://vitejs.dev/)
[![TailwindCSS v4](https://img.shields.io/badge/TailwindCSS-v4-0B2545?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![TRL Level](https://img.shields.io/badge/Status-TRL%205%20(Lab%20Validation)-0D9488?style=flat-square)](#development-lifecycle)

---

## 1. Project Overview

**The Water Crew** is a deep-tech engineering initiative founded by a student-led team of researchers and advised by **Dr. J Ranjitha** (Principal Investigator) at the *Center for Multiphase Fluid Mechanics*, Vellore Institute of Technology (VIT).

Traditional maritime oil spill mitigation relies heavily on toxic chemical dispersants—which disperse carcinogenic hydrocarbons deeper into the water column—or passive containment booms that fail under moderate swell. 

**Our Solution:** An autonomous surface vessel (ASV) equipped with high-throughput oleophilic composite rotating discs engineered to separate and collect crude oil directly at the boundary layer with **>94% recovery efficiency** and minimal water entrainment, operating safely up to Sea State 3 conditions.

---

## 2. Key Features & Information Architecture

The website is architected to tell a cohesive engineering story reflecting institutional credibility, rigorous academic validation, and physical prototyping:

| Section | Architectural Objective |
| :--- | :--- |
| **Cinematic Hero** | Full-screen looping hydrodynamic video, dark engineering overlay, technical headline, CTA buttons, and floating live telemetry card (TRL 5 status, recovery benchmarks). |
| **Welcome & Startup Overview** | Two-column foundation narrative: lab origins, core thesis, mission, vision, and 4 engineering pillars (Interfacial physics, swarm control, rapid deployment, closed-loop extraction). |
| **Research Centre Showcase** | Alternating layout highlighting university testing rigs (12m wave flume channel, 5-axis CNC composite cell, embedded telemetry bench). |
| **Project Overview Timeline** | Stage-Gate lifecycle tracking milestones from Problem Definition through Fluid CFD to Field Deployment. |
| **Research Lead Faculty Profile** | Prestigious academic faculty profile for Dr. J Ranjitha: metrics, Google Scholar link, publications count, research domains, and featured quote. |
| **Core Engineering Team** | Multidisciplinary showcase covering Faculty Leadership, Control Systems / Software, and Mechanical Prototyping. |
| **Hardware Portfolio** | Detailed product showcase with interactive specs modal for the *Skimmer MK-2*, *Hydrodynamic Containment Module*, and *OceanTelemetry Buoy Array*. |
| **Photo Archive & Gallery** | Masonry-inspired gallery with category filters and interactive lightbox modal for lab rigs and CNC milling. |
| **Contact & Coordination** | Minimal card with university GPS coordinates, interactive radar locator, and inquiry form with simulated confirmation dispatch. |
| **Sticky Header & Modal** | Transparent-to-solid header with smooth active scroll tracking and integrated "Apply for Internship" modal. |

---

## 3. Technology Stack

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Build Tool:** [Vite](https://vitejs.dev/) with `@tailwindcss/vite`
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation Engine:** [Framer Motion](https://www.framer.com/motion/) (Subtle engineering easing curves)
- **Smooth Scroll:** [Lenis](https://github.com/darkroomengineering/lenis) smooth wheel physics
- **Icons:** [Lucide React](https://lucide.dev/) + Custom High-Precision Brand SVGs
- **Routing:** [React Router](https://reactrouter.com/)
- **Head & SEO Management:** [React Helmet Async](https://github.com/staylor/react-helmet-async)
- **Utilities:** `clsx`, `tailwind-merge`

---

## 4. Design System

The visual language eschews generic commercial templates and purple gradients in favor of an **institutional engineering laboratory aesthetic** inspired by MIT, Bosch, and Rolls-Royce:

- **Primary Background:** `#FAFBFC` (Ultra-clean academic off-white)
- **Component Surface:** `#FFFFFF` (Pure white cards with subtle 1px border)
- **Primary Accent:** `#0B2545` (Deep Ocean Blue)
- **Secondary Accent:** `#475569` (Slate)
- **Hydrodynamic Accent:** `#0D9488` (Very subtle marine teal)
- **Typography:**
  - Headings: `Plus Jakarta Sans`
  - Body: `Inter`
  - Metrics / Telemetry: `JetBrains Mono`
- **Border Radii:** `12px` to `16px` (subtle premium radius, avoiding sharp rectangles)
- **Elevation:** Soft ambient box shadows (`shadow-sm`, `shadow-md`)

---

## 5. Folder Structure

```
thewatercrew/
├── public/
│   ├── favicon.svg             # Precision hydrodynamic favicon
│   ├── logo.svg                # Vector logo mark
│   └── ...
├── src/
│   ├── animations/
│   │   └── motionVariants.ts   # Reusable engineering cubic-bezier motion variants
│   ├── assets/                 # Static graphical assets
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Sticky dynamic navbar with mobile drawer
│   │   │   └── Footer.tsx      # Institutional footer with academic links
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx # Video hero with live status telemetry
│   │   │   ├── StartupSection.tsx # Two-column foundation, mission & pillars
│   │   │   ├── ResearchSection.tsx # Alternating test rig showcase
│   │   │   ├── ProjectTimelineSection.tsx # Stage-Gate development timeline
│   │   │   ├── ResearchLeadSection.tsx # Dr. J Ranjitha faculty profile
│   │   │   ├── TeamSection.tsx # Core engineering team profiles
│   │   │   ├── ProductsSection.tsx # Hardware cards & specs modal
│   │   │   ├── GallerySection.tsx # Masonry gallery & lightbox preview
│   │   │   └── ContactSection.tsx # Validated inquiry form & coordinate map
│   │   └── ui/
│   │       ├── Icons.tsx       # Vector brand & academic icons
│   │       ├── InternshipModal.tsx # Application modal for students
│   │       ├── MetricBadge.tsx # Reusable metric data display
│   │       └── SectionHeader.tsx # Standardized section headings
│   ├── constants/
│   │   ├── navigation.ts       # Navigation routes & dropdown links
│   │   └── projectData.ts      # Comprehensive prototype specifications
│   ├── hooks/
│   │   └── useSmoothScroll.ts  # Lenis smooth scroll lifecycle hook
│   ├── pages/
│   │   └── HomePage.tsx        # Structured narrative homepage flow
│   ├── types/
│   │   └── index.ts            # Strict TypeScript interface contracts
│   ├── utils/
│   │   └── cn.ts               # Class merging helper (clsx + tailwind-merge)
│   ├── App.tsx                 # Root application wrapper with Providers
│   ├── index.css               # Tailwind v4 configuration and global tokens
│   └── main.tsx                # React DOM root mounting
├── index.html                  # HTML5 shell with preconnected Google Fonts
├── package.json                # Project dependencies and npm scripts
├── tsconfig.app.json           # Application TypeScript configuration
├── tsconfig.json               # Root TypeScript project references
└── vite.config.ts              # Vite configuration with Tailwind v4 & aliases
```

---

## 6. Installation & Development

### Prerequisites
- Node.js `v20.x` or later (tested on Node v24)
- npm `v10.x` or later

### Quick Start
```bash
# Clone the repository
git clone https://github.com/your-org/thewatercrew.git
cd thewatercrew

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build
```bash
# Type check and build minified production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 7. Future Improvements & Roadmap

1. **Hardware-in-the-Loop WebSockets:** Connect the hero telemetry card to live MQTT / LoRaWAN data brokers during open wave tank trials.
2. **Interactive 3D CAD Exploded View:** Integrate Three.js / React Three Fiber for a rotatable 3D model of the oleophilic disc drum and bilge pump assembly.
3. **Automated Scholar Citation Sync:** Implement an API worker to update Dr. J Ranjitha's publication and citation count dynamically from Google Scholar.
4. **Hydrodynamic Simulator Widget:** Allow users to manipulate wave height and oil viscosity sliders to see predicted recovery throughput in real time.

---

## 8. Coding Standards

- **Strict TypeScript:** No `any` types; all API models and component props are strictly typed in `src/types/index.ts`.
- **Accessibility (a11y):** Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), ARIA attributes on modals and dropdowns, keyboard escape handling, and WCAG AA contrast compliance.
- **Mobile-First Responsiveness:** Tested seamlessly across 360px mobile viewports up to 4K ultra-wide monitors.
- **Conventional Commits:** Feature-isolated commit history (`feat(navbar)`, `feat(hero)`, `feat(research)`, etc.) without combining unrelated changes.
