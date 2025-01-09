import React from 'react';
import NavLink from './NavLink';

export default function NavLinks() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/research', label: 'Research' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/company', label: 'Company' }, // <-- Add Company link here
  ];

  return (
    <>
      {links.map(({ href, label }) => (
        <NavLink key={href} href={href}>{label}</NavLink>
      ))}
    </>
  );
}
