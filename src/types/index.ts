export interface NavItem {
  label: string
  href: string
  isDropdown?: boolean
  children?: {
    label: string
    href: string
    description?: string
  }[]
}

export interface ResearchStat {
  label: string
  value: string
  subtext?: string
}

export interface ResearchFacility {
  id: string
  title: string
  subtitle: string
  description: string
  specifications: string[]
  image: string
  badge: string
  metricLabel: string
  metricValue: string
}

export interface ProjectTimelineStage {
  id: string
  stageNumber: string
  title: string
  timeframe: string
  description: string
  engineeringDetails: string[]
  status: 'completed' | 'in-progress' | 'upcoming'
  metrics?: { label: string; value: string }
}

export interface TeamMember {
  id: string
  name: string
  role: string
  department: string
  bio: string
  specialties: string[]
  image: string
  email: string
  linkedin: string
  scholar?: string
  portfolioUrl?: string
}

export interface ProductSpec {
  id: string
  name: string
  tagline: string
  status: string
  category: string
  description: string
  keyMetrics: { label: string; value: string }[]
  features: string[]
  image: string
  technicalDetails?: {
    recoveryRate: string
    viscosityRange: string
    deploymentTime: string
    powerSource: string
  }
}

export interface GalleryItem {
  id: string
  title: string
  category: 'Laboratory' | 'Workshop' | 'Prototype' | 'Field Testing'
  description: string
  image: string
  date: string
  aspectRatio?: 'tall' | 'wide' | 'square'
}

export interface ContactFormData {
  fullName: string
  email: string
  organization: string
  interest: 'Research Collaboration' | 'Prototype Inquiry' | 'Internship' | 'Media' | 'General'
  message: string
}

export interface InternshipFormData {
  fullName: string
  email: string
  university: string
  degreeMajor: string
  yearOfStudy: string
  discipline: 'Control Systems & Embedded' | 'Fluid Dynamics & CAD' | 'Frontend Architecture' | 'Mechanical Prototyping'
  statement: string
  portfolioUrl?: string
}
