import { departments } from './departments';
import { doctors } from './doctors';
import { healthPackages } from './content';

export const navLinks = [
  {
    title: 'Departments',
    href: '/departments',
    mega: true,
    items: departments.map((d) => ({
      title: d.shortName,
      href: `/departments/${d.slug}`,
      description: d.tagline,
      icon: d.icon,
    })),
  },
  {
    title: 'Doctors',
    href: '/doctors',
    mega: true,
    items: doctors.map((doc) => ({
      title: doc.name,
      href: `/doctors/${doc.slug}`,
      description: doc.title,
      icon: 'User',
    })),
  },
  {
    title: 'Health Packages',
    href: '/health-packages',
    mega: false,
    items: healthPackages.map((p) => ({
      title: p.name,
      href: `/health-packages#${p.slug}`,
      description: p.description,
      icon: 'Package',
    })),
  },
  {
    title: 'Blog',
    href: '/blog',
    mega: false,
    items: [],
  },
  {
    title: 'About',
    href: '/about',
    mega: false,
    items: [],
  },
  {
    title: 'Contact',
    href: '/contact',
    mega: false,
    items: [],
  },
];