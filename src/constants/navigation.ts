import type { NavItem } from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Project', href: '#project' },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#gallery' },
  {
    label: 'Career',
    href: '#career',
    isDropdown: true,
    children: [
      {
        label: 'Apply for Internship',
        href: '#internship-modal',
        description: 'Undergraduate & graduate engineering research cohort.',
      },
      {
        label: 'Academic Collaboration',
        href: '#contact',
        description: 'Joint laboratory initiatives & fluid dynamic trials.',
      },
    ],
  },
  { label: 'Contact', href: '#contact' },
]
