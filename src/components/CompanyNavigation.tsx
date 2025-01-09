//import React from 'react';
import { Link } from 'react-router-dom';

const CompanyNavigation = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <ul className="flex space-x-4 justify-center font-semibold">
        <li>
          <Link to="/company/home" className="hover:text-indigo-400">Home</Link>
        </li>
        <li>
          <Link to="/company/products" className="hover:text-indigo-400">Products</Link>
        </li>
        <li>
          <Link to="/company/services" className="hover:text-indigo-400">Services</Link>
        </li>
        <li>
          <Link to="/company/tracker" className="hover:text-indigo-400">Tracker</Link>
        </li>
        <li>
          <Link to="/company/development" className="hover:text-indigo-400">Development</Link>
        </li>
        <li>
          <Link to="/company/community" className="hover:text-indigo-400">Community Announcement</Link>
        </li>
      </ul>
    </nav>
  );
};

export default CompanyNavigation;
