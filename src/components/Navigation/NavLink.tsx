import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <a 
      href={href} 
      className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
    >
      {children}
    </a>
  );
}